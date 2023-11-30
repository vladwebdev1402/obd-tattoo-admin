import IStreet from "@/types/IStreet";
import { ParentStore } from "../ParentStore";

class StreetStore extends ParentStore<IStreet> {}
export default new StreetStore("street");
