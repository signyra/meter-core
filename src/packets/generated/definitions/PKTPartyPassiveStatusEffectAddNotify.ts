// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyPassiveStatusEffectAddNotify = {
  unk0_m: number;
  passiveStatusEffectList: number[];
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyPassiveStatusEffectAddNotify;
  data.unk0_m = reader.u8();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTPartyPassiveStatusEffectAddNotify";
export const opcode = 56197;
