import IService from "@/types/IService";
import { ParentStore } from "../ParentStore";

class ServiceStore extends ParentStore<IService> {};

export default new ServiceStore("service");