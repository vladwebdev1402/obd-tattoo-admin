import { makeAutoObservable } from "mobx";

import { configure } from "mobx";
import StreetAPI from "./StreetAPI";
import IStreet from "@/types/IStreet";

class StreetStore {
  data: IStreet[] = [];
  isLoadingComplete: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
    configure({
      enforceActions: "never",
    });
  }

  getAll = async () => {
    this.isLoadingComplete = false;
    this.error = "";
    try {
      this.data = await StreetAPI.getAll();
      this.isLoadingComplete = true;
      this.error = "";
    } catch (e) {
      if (typeof e === "string") {
        this.error = e.toUpperCase();
      } else if (e instanceof Error) {
        this.error = e.message;
      }
      this.isLoadingComplete = true;
    } finally {
      this.isLoadingComplete = true;
    }
  };

  delete = async ( _id: string) => {
    try {
      const data = await StreetAPI.delete(_id);
      this.data = this.data.filter((d) => d._id !== _id);
    } catch (e) {
      if (typeof e === "string") {
        this.error = e.toUpperCase();
      } else if (e instanceof Error) {
        this.error = e.message;
      }
      this.isLoadingComplete = true;
    } finally {
      this.isLoadingComplete = true;
    }
  };

  create = async (payload: IStreet) => {
    try {
      const data = await StreetAPI.create(payload);
      this.data.push(data);
      this.error = "";
    } catch (e) {
      if (typeof e === "string") {
        this.error = e.toUpperCase();
      } else if (e instanceof Error) {
        this.error = e.message;
      }
      this.isLoadingComplete = true;
    } finally {
      this.isLoadingComplete = true;
    }
  };

  edit = async (payload: IStreet) => {
    try {
      const data = await StreetAPI.edit(payload);
      this.data = this.data.map((d) =>
        d._id === payload._id ? { ...d, ...payload } : d
      );
      this.error = "";
    } catch (e) {
      if (typeof e === "string") {
        this.error = e.toUpperCase();
      } else if (e instanceof Error) {
        this.error = e.message;
      }
      this.isLoadingComplete = true;
    } finally {
      this.isLoadingComplete = true;
    }
  };
}

export default new StreetStore();
