import InstanseApi from "@/API/CrudApi";
import { IBrand } from "@/types/IBrand";
import { ParentStore } from "../ParentStore";

class BrandStore extends ParentStore<IBrand> {}

export default new BrandStore("brand");
