import { IItem } from "@/types/IItem";
import { ParentStore } from "../ParentStore";

class ItemStore extends ParentStore<IItem> {};

export default new ItemStore("item");