import ICity from "@/types/ICity";
import { makeAutoObservable } from "mobx";
import CityAPI from "./CityAPI";
import { configure } from "mobx"

class CityStore {

    city: ICity[] = []
    isLoadingComplete: boolean = false
    error: string = ""

    constructor() {
        makeAutoObservable(this);
        configure({
            enforceActions: "never",
        })
    }
    
    getAll = async () => {
        try {
            this.city = await CityAPI.getAll(); 
            this.isLoadingComplete = true;
            this.error = ""
        }
        catch(e) {
            if (typeof e === "string") {
                this.error = e.toUpperCase() 
            } else if (e instanceof Error) {
                this.error = e.message 
            }
            this.isLoadingComplete = true;
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    deleteCity = async (_id: string) => {
        try {
            const data = await CityAPI.deleteCity(_id);
            this.city = this.city.filter(c => c._id !== _id)
            this.error = ""
        }
        catch(e) {
            if (typeof e === "string") {
                this.error = e.toUpperCase() 
            } else if (e instanceof Error) {
                this.error = e.message 
            }
            this.isLoadingComplete = true;
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    createCity = async (name: string) => {
        try {
            const data = await CityAPI.createCity(name);
            this.city.push(data);
            this.error = ""

        }
        catch(e) {
            if (typeof e === "string") {
                this.error = e.toUpperCase() 
            } else if (e instanceof Error) {
                this.error = e.message 
            }
            this.isLoadingComplete = true;
        }
        finally {
            this.isLoadingComplete = true;
        }
       
    }

    editCity = async (city: ICity) => {
        try {
            const data = await CityAPI.editCity(city);
            this.city = this.city.map(c => c._id === city._id ? {...c, name: city.name} : c)
            this.error = ""
        }
        catch(e) {
            if (typeof e === "string") {
                this.error = e.toUpperCase() 
            } else if (e instanceof Error) {
                this.error = e.message 
            }
            this.isLoadingComplete = true;
        }
        finally {
            this.isLoadingComplete = true;
        }
       
    }
}

export default new CityStore();