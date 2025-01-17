// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  unk0: number;
  unk1: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  characterId: bigint;
  playerIdOnRefresh: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.unk0 = reader.u8();
  data.unk1 = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.characterId = reader.u64();
  data.playerIdOnRefresh = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 22577;
