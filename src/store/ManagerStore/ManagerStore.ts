import { IManager } from "@/types/IManager";
import { ParentStore } from "../ParentStore";

class IManagerStore extends ParentStore<IManager> {}

const ManagerStore = new IManagerStore("manager");

export default ManagerStore;