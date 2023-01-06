"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pkt-capture.ts
var pkt_capture_exports = {};
__export(pkt_capture_exports, {
  PktCaptureAll: () => PktCaptureAll,
  PktCaptureMode: () => PktCaptureMode,
  deviceList: () => deviceList,
  findDevice: () => findDevice
});
module.exports = __toCommonJS(pkt_capture_exports);
var import_cap = __toESM(require("cap"));
var import_net = require("net");
var import_tiny_typed_emitter = require("tiny-typed-emitter");

// src/tcp_tracker.ts
var import_stream = require("stream");

// src/pkt-buffer.ts
var PacketBuffer = class {
  buffer;
  position;
  out;
  constructor() {
    this.buffer = null;
    this.position = 0;
    this.out = [];
  }
  write(data) {
    while (data.length > 0) {
      if (this.buffer) {
        if (this.buffer.length < 2) {
          const old = this.buffer[0];
          const size2 = (data[0] << 8) + old;
          this.buffer = Buffer.alloc(size2);
          this.buffer[0] = old;
          this.position = 1;
        }
        const remaining = Math.min(data.length, this.buffer.length - this.position);
        data.copy(this.buffer, this.position, 0, remaining);
        this.position += remaining;
        if (this.position === this.buffer.length) {
          this.out.push(this.buffer);
          this.buffer = null;
          this.position = 0;
        }
        data = data.subarray(remaining);
        continue;
      }
      if (data.length < 2) {
        this.buffer = Buffer.from(data);
        this.position = data.length;
        break;
      }
      const size = data.readUInt16LE(0);
      if (size === 0) {
        this.buffer = null;
        return;
      }
      if (size > data.length) {
        this.buffer = Buffer.alloc(size);
        data.copy(this.buffer);
        this.position = data.length;
        break;
      }
      this.out.push(data.subarray(0, size));
      data = data.subarray(size);
    }
  }
  read() {
    return this.out.shift();
  }
};

// src/tcp_tracker.ts
var TCPTracker = class extends import_stream.EventEmitter {
  sessions;
  listen_options;
  constructor(listen_options) {
    super();
    this.sessions = {};
    this.listen_options = listen_options;
    import_stream.EventEmitter.call(this);
  }
  track_packet(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    let key;
    if (src < dst) {
      key = src + "-" + dst;
    } else {
      key = dst + "-" + src;
    }
    let is_new = false;
    let session = this.sessions[key];
    if (!session) {
      is_new = true;
      session = new TCPSession(this.listen_options);
      this.sessions[key] = session;
      session.on("end", () => {
        delete this.sessions[key];
        console.info(
          `[meter-core/tcp-tracker] - Remove session ${session?.src}->${session?.dst} (Total: ${Object.keys(this.sessions).length})`
        );
      });
    }
    session.track(buffer, ip, tcp);
    if (is_new) {
      this.emit("session", session);
    }
  }
};
var TCPSession = class extends import_stream.EventEmitter {
  state;
  src;
  dst;
  send_seqno;
  send_buffers;
  recv_seqno;
  recv_buffers;
  listen_options;
  is_ignored;
  packetBuffer;
  constructor(listen_options) {
    super();
    this.listen_options = listen_options;
    this.state = "NONE";
    this.send_seqno = 0;
    this.send_buffers = [];
    this.recv_seqno = 0;
    this.recv_buffers = [];
    this.is_ignored = false;
    this.packetBuffer = new PacketBuffer();
    import_stream.EventEmitter.call(this);
  }
  track(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    if (this.state === "NONE") {
      const isSrcDeviceIp = isDeviceIp(ip.info.srcaddr, this.listen_options);
      const isDstDeviceIp = isDeviceIp(ip.info.dstaddr, this.listen_options);
      if (isSrcDeviceIp && this.listen_options.port === tcp.info.dstport) {
        this.src = src;
        this.dst = dst;
      } else if (this.listen_options.port === tcp.info.srcport && isDstDeviceIp) {
        this.src = dst;
        this.dst = src;
      } else if (!isSrcDeviceIp && !isDstDeviceIp) {
        if (this.listen_options.port === tcp.info.dstport) {
          this.src = src;
          this.dst = dst;
        } else if (this.listen_options.port === tcp.info.srcport) {
          this.src = dst;
          this.dst = src;
        } else {
          this.src = src;
          this.dst = dst;
          this.is_ignored = true;
        }
      } else {
        this.src = src;
        this.dst = dst;
        this.is_ignored = true;
      }
      if (tcp.info.flags & 2 /* syn */ && !(tcp.info.flags & 16 /* ack */)) {
        this.state = "SYN_SENT";
      } else {
        this.state = "ESTAB";
      }
    } else if (tcp.info.flags & 4 /* rst */) {
      this.emit("end", this);
    } else {
      this[this.state](buffer, ip, tcp);
    }
  }
  SYN_SENT(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.dst && tcp.info.flags & (16 /* ack */ | 2 /* syn */)) {
      this.send_seqno = tcp.info.ackno ?? 0;
      this.state = "SYN_RCVD";
    } else if (tcp.info.flags & 4 /* rst */) {
      this.state = "CLOSED";
    }
  }
  SYN_RCVD(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.src && tcp.info.flags & 16 /* ack */) {
      this.recv_seqno = tcp.info.ackno ?? 0;
      this.state = "ESTAB";
    }
  }
  ESTAB(buffer, ip, tcp) {
    if (this.is_ignored)
      return;
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(buffer, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    if (src === this.src) {
      if (tcpDataLength > 0) {
        this.send_buffers.push({
          seqno: tcp.info.seqno,
          payload: Buffer.from(buffer.subarray(tcp.offset, tcp.offset + tcpDataLength))
        });
      }
      if (tcp.info.ackno && !is_sack) {
        this.flush_buffers(tcp.info.ackno ?? 0, "recv");
      }
      if (tcp.info.flags & 1 /* fin */) {
        this.state = "FIN_WAIT";
      }
    } else if (src === this.dst) {
      if (tcpDataLength > 0) {
        this.recv_buffers.push({
          seqno: tcp.info.seqno,
          payload: Buffer.from(buffer.subarray(tcp.offset, tcp.offset + tcpDataLength))
        });
      }
      if (tcp.info.ackno && !is_sack) {
        this.flush_buffers(tcp.info.ackno ?? 0, "send");
      }
      if (tcp.info.flags & 1 /* fin */) {
        this.state = "CLOSE_WAIT";
      }
    } else {
      console.error("[meter-core/tcp_tracker] - non-matching packet in session: ip=" + ip + "tcp=" + tcp);
    }
  }
  FIN_WAIT(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.dst && tcp.info.flags & 1 /* fin */) {
      this.state = "CLOSING";
    }
  }
  CLOSE_WAIT(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.src && tcp.info.flags & 1 /* fin */) {
      this.state = "LAST_ACK";
    }
  }
  LAST_ACK(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.dst) {
      this.state = "CLOSED";
      this.emit("end", this);
    }
  }
  CLOSING(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.src) {
      this.state = "CLOSED";
      this.emit("end", this);
    }
  }
  CLOSED(buffer, ip, tcp) {
  }
  flush_buffers(ackno, direction) {
    if (direction === "recv") {
      if (this.recv_seqno === 0)
        this.recv_seqno = ackno;
      const flush_payload = this.get_flush(this.recv_buffers, this.recv_seqno, ackno);
      this.recv_seqno = ackno;
      if (!flush_payload) {
        return;
      }
      this.packetBuffer.write(flush_payload);
      let pkt = this.packetBuffer.read();
      while (pkt) {
        this.emit("payload_recv", pkt);
        pkt = this.packetBuffer.read();
      }
    } else if (direction === "send") {
      if (this.send_seqno === 0)
        this.send_seqno = ackno;
      const flush_payload = this.get_flush(this.send_buffers, this.send_seqno, ackno);
      this.send_seqno = ackno;
      if (!flush_payload) {
        return;
      }
    }
  }
  get_flush(buffers, seqno, ackno) {
    const totalLen = ackno - seqno;
    if (totalLen <= 0)
      return null;
    let flush_payload = Buffer.alloc(totalLen);
    let flush_mask = Buffer.alloc(totalLen);
    const newBuffers = buffers.filter((segment) => {
      if (segment.seqno > ackno)
        return true;
      if (segment.seqno < seqno) {
        segment.payload = segment.payload.subarray(seqno - segment.seqno);
        segment.seqno = seqno;
      }
      const flush_offset = segment.seqno - seqno;
      const len_to_flush = ackno - segment.seqno;
      segment.payload.copy(flush_payload, flush_offset, 0, len_to_flush);
      flush_mask.fill(1, flush_offset, flush_offset + len_to_flush);
      if (len_to_flush < segment.payload.length) {
        segment.payload = segment.payload.subarray(len_to_flush);
        segment.seqno += len_to_flush;
        return true;
      }
      return false;
    });
    buffers.length = 0;
    buffers.push(...newBuffers);
    if (flush_mask.includes(0)) {
      console.warn(`[meter-core/tcp_tracker] - Dropped ${totalLen} bytes`);
      return null;
    }
    return flush_payload;
  }
};
function is_sack_in_header(buffer, ip, tcp) {
  if (tcp.hdrlen == 20)
    return false;
  let options_offset = ip.offset + 20;
  const options_len = tcp.hdrlen - 20;
  const end_offset = options_offset + options_len;
  while (options_offset < end_offset) {
    switch (buffer[options_offset]) {
      case 0:
        options_offset = end_offset;
        break;
      case 1:
        options_offset += 1;
        break;
      case 2:
        options_offset += 4;
        break;
      case 3:
        options_offset += 3;
        break;
      case 4:
        options_offset += 2;
        break;
      case 5:
        return true;
      case 8:
        options_offset += 10;
        break;
      case 254:
      case 255:
        options_offset += buffer[options_offset + 1] ?? 1;
        break;
      default:
        throw new Error(
          `[meter-core/tcp-tracker] - Unknown TCPOption ${buffer[options_offset]}, packet is probably malformed, should drop.`
        );
    }
  }
  return false;
}
function IPnumber(IPaddress) {
  var ip = IPaddress.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (ip && ip.length === 5) {
    return (+ip[1] << 24) + (+ip[2] << 16) + (+ip[3] << 8) + +ip[4];
  }
  return null;
}
function isDeviceIp(ip, listen_options) {
  const testIp = IPnumber(ip), listen_ip = IPnumber(listen_options.ip), mask = IPnumber(listen_options.mask);
  if (!testIp || !listen_ip || !mask)
    return false;
  return (testIp & mask) === (listen_ip & mask);
}

// src/pkt-capture.ts
var import_raw_socket_sniffer = require("raw-socket-sniffer");
var import_os = require("os");
var { findDevice, deviceList } = import_cap.default.Cap;
var { Ethernet, PROTOCOL, IPV4, TCP } = import_cap.default.decoders;
var PktCapture = class extends import_tiny_typed_emitter.TypedEmitter {
  tcpTracker;
  device;
  port;
  constructor(device, listen_options) {
    super();
    this.device = device;
    this.port = listen_options.port;
    this.tcpTracker = new TCPTracker(listen_options);
    this.tcpTracker.on("session", (session) => {
      console.info(
        `[meter-core/pkt-capture] - New session ${session.src}->${session.dst} ${session.is_ignored ? "(ingored) " : ""}(Total: ${Object.keys(this.tcpTracker.sessions).length})`
      );
      session.on("payload_recv", (data) => {
        this.emit("packet", data);
      });
    });
  }
  dispatchPacket(packet) {
    const ethernet = Ethernet(packet);
    if (ethernet.info.type === PROTOCOL.ETHERNET.IPV4) {
      const ipv4 = IPV4(packet, ethernet.offset);
      if (ipv4.info.protocol === PROTOCOL.IP.TCP) {
        const tcp = TCP(packet, ipv4.offset);
        this.tcpTracker.track_packet(packet, ipv4, tcp);
      }
    }
  }
};
var PcapCapture = class extends PktCapture {
  c;
  #buffer;
  constructor(device, listen_options) {
    super(device, listen_options);
    this.c = new import_cap.default.Cap();
    this.#buffer = Buffer.alloc(65535);
  }
  listen() {
    const linkType = this.c.open(
      this.device,
      `tcp and (src port ${this.port} or dst port ${this.port})`,
      10 * 1024 * 1024,
      this.#buffer
    );
    if (this.c.setMinBytes)
      this.c.setMinBytes(54);
    this.c.on("packet", (nbytes, truncated) => {
      if (linkType === "ETHERNET") {
        this.dispatchPacket(this.#buffer);
      } else if (linkType === "NULL" && this.device === "\\Device\\NPF_Loopback") {
        const type = this.#buffer.readUInt32LE();
        if (type !== 2)
          return;
        this.dispatchPacket(this.#buffer.subarray(4));
      }
    });
  }
  close() {
    this.c.close();
  }
};
var RawSocketCapture = class extends PktCapture {
  rs;
  constructor(ip, listen_options) {
    super(ip, listen_options);
    this.rs = new import_raw_socket_sniffer.RawSocket(ip, listen_options.port);
  }
  listen() {
    this.rs.on("data", this.dispatchPacket.bind(this));
    this.rs.listen();
  }
  close() {
  }
};
var PktCaptureMode = /* @__PURE__ */ ((PktCaptureMode2) => {
  PktCaptureMode2[PktCaptureMode2["MODE_PCAP"] = 0] = "MODE_PCAP";
  PktCaptureMode2[PktCaptureMode2["MODE_RAW_SOCKET"] = 1] = "MODE_RAW_SOCKET";
  return PktCaptureMode2;
})(PktCaptureMode || {});
var PktCaptureAll = class extends import_tiny_typed_emitter.TypedEmitter {
  captures;
  constructor(mode) {
    super();
    this.captures = /* @__PURE__ */ new Map();
    if (mode === 0 /* MODE_PCAP */) {
      for (const device of deviceList()) {
        for (const address of device.addresses) {
          if (address.addr && address.netmask && (0, import_net.isIPv4)(address.addr)) {
            try {
              const pcapc = new PcapCapture(device.name, {
                ip: address.addr,
                mask: address.netmask,
                port: 6040
              });
              pcapc.on("packet", (buf) => this.emit("packet", buf, device.name));
              this.captures.set(device.name, pcapc);
              pcapc.listen();
            } catch (e) {
              console.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else if (mode === 1 /* MODE_RAW_SOCKET */) {
      for (const addresses of Object.values((0, import_os.networkInterfaces)())) {
        for (const device of addresses ?? []) {
          if ((0, import_net.isIPv4)(device.address) && device.family === "IPv4" && device.internal === false) {
            try {
              const rsc = new RawSocketCapture(device.address, {
                ip: device.address,
                mask: device.netmask,
                port: 6040
              });
              rsc.on("packet", (buf) => this.emit("packet", buf, device.address));
              this.captures.set(device.address, rsc);
              rsc.listen();
            } catch (e) {
              console.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else {
    }
  }
  close() {
    for (const cap2 of this.captures.values())
      cap2.close();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PktCaptureAll,
  PktCaptureMode,
  deviceList,
  findDevice
});
