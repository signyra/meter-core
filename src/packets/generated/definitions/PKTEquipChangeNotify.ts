// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
export type PKTEquipChangeNotify = {
  unk0: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  objectId: bigint;
  unk3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTEquipChangeNotify;
  data.unk0 = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.objectId = reader.u64();
  data.unk3 = reader.u32();
  return data;
}
export const name = "PKTEquipChangeNotify";
export const opcode = 7833;
