import INamePrompt from "@/types/INamePrompt";
import { ParentStoreWithLink } from "../ParentStore";

export class IdNameStore extends ParentStoreWithLink<INamePrompt> {} 

export default new IdNameStore();
