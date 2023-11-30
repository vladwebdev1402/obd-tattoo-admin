import { makeAutoObservable } from "mobx";



class SearchStore {

    value: string = ""
    constructor() {
        makeAutoObservable(this);
    }

    setValue = (value: string) => {
        this.value = value;
    }
}

export default new SearchStore();