// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  unk1_0?: number;
  slot: number;
  level: number;
  itemTint: Buffer;
  expireTime: LostArkDateTime.LostArkDateTime;
  id: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.slot = reader.u16();
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.expireTime = LostArkDateTime.read(reader);
  data.id = reader.u32();
  return data;
}