import INamePrompt from "@/types/INamePrompt";
import { makeAutoObservable } from "mobx";

import { configure } from "mobx";
import NamePromtAPI from "./NamePromtAPI";

class IdNameStore {
  data: INamePrompt[] = [];
  isLoadingComplete: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
    configure({
      enforceActions: "never",
    });
  }

  getAll = async (link: string) => {
    this.isLoadingComplete = false;
    this.error = "";
    try {
      this.data = await NamePromtAPI.getAll(link);
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

  delete = async (link: string, _id: string) => {
    try {
      const data = await NamePromtAPI.delete(link, _id);
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

  create = async (link: string, name: string, promt: string) => {
    try {
      const data = await NamePromtAPI.create(link, name, promt);
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

  edit = async (link: string, payload: INamePrompt) => {
    try {
      const data = await NamePromtAPI.edit(link, payload);
      this.data = this.data.map((d) =>
        d._id === payload._id ? { ...d, name: payload.name, promt: payload.promt } : d
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
