import IIdName from "@/types/IIdName";
import { ParentStoreWithLink } from "../ParentStore";

class IdNameStore extends ParentStoreWithLink<IIdName> {}
export default new IdNameStore();
