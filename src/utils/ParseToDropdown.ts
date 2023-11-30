import IDropdownValue from "@/types/IDropdownValue";
import IIdName from "@/types/IIdName";

export const ParseToDropdown = (elements:IIdName[]): IDropdownValue[] => {
    const values = elements.map(e => {return {name: e.name, value: e._id}});
    return values
}