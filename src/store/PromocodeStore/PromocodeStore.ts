import { IPromocode } from "@/types/IPromocode";
import { ParentStore } from "../ParentStore";

class PromocodeStore extends ParentStore<IPromocode> {}


export default new PromocodeStore("promocode");