import {IService} from "@/types/IServise";
import { ParentStore } from "../ParentStore";

class ServiceStore extends ParentStore<IService> {};

export default new ServiceStore("service");