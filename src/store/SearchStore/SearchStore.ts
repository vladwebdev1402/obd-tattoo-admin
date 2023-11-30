import { makeAutoObservable } from "mobx";



class SearchStore {

    value: string = ""
    constructor() {
        makeAutoObservable(this);
    }

    setValue = (value: string) => {
        this.value = value;
    }

    getValue = () : string => this.value.toLowerCase();
}

export default new SearchStore();