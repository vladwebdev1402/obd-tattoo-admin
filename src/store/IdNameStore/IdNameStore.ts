import IIdName from "@/types/IIdName";
import { makeAutoObservable } from "mobx";

import { configure } from "mobx";
import IdNameApi from "./IdNameAPI";

class IdNameStore {
  data: IIdName[] = [];
  isLoadingComplete: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
    configure({
      enforceActions: "never",
    });
  }

  getAll = async (link: string): Promise<IIdName[]> => {
    this.isLoadingComplete = false;
    this.error = "";

    try {
      this.data = await IdNameApi.getAll(link);
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

    return this.data
  };

  delete = async (link: string, _id: string) => {
    try {
      const data = await IdNameApi.delete(link, _id);
      this.data = this.data.filter((c) => c._id !== _id);
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

  create = async (link: string, name: string) => {
    try {
      const data = await IdNameApi.create(link, name);
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

  edit = async (link: string, payload: IIdName) => {
    try {
      const data = await IdNameApi.edit(link, payload);
      this.data = this.data.map((d) =>
        d._id === payload._id ? { ...d, name: payload.name } : d
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

export default new IdNameStore();
