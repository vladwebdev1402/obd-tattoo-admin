import { CrudApi } from "@/API";
import IIdName from "@/types/IIdName";
import IStore from "@/types/IStore";
import {makeObservable, observable} from "mobx";

export class ParentStoreWithLink<T extends IIdName> implements IStore<T>{
    data: T[] = [];
    isLoadingComplete: boolean = false;
    error: string = "";

    constructor() {
        makeObservable(this, {
            isLoadingComplete: observable,
            error: observable,
            data: observable,
            // getAll: flow,
            // delete: flow,
            // create: flow,
            // edit: flow,
        })
    }
    
    getAll = async (link: string, query?: any): Promise<T[]> => {
        this.isLoadingComplete = false;
        this.error = "";
    
        try {
          this.data = (await CrudApi.getAll<T>(link, query)).data;
          this.isLoadingComplete = true;
          this.error = "";
          return this.data;
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
      return [];
    
      };

    delete = async (link: string, _id: string) => {
        try {
          const data = await CrudApi.delete<T>(link, _id);
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
    
     
    create = async (link: string, payload: T) => {
        try {
          const data = (await CrudApi.create<T>(link, {...payload})).data;
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
    
      edit = async (link: string, payload: T) => {
        try {
          const data = await CrudApi.edit<T>(link, payload);
          this.data = this.data.map((d) =>
          d._id === payload._id ? { ...d, ...data } : d
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

export class ParentStore<T extends IIdName> implements IStore<T>{
    data: T[] = [];
    isLoadingComplete: boolean = false;
    error: string = "";
    link: string;

    constructor(link: string) {
        this.link = link;
        makeObservable(this, {
            isLoadingComplete: observable,
            error: observable,
            data: observable,
        })
    }
    
  getAll = async (query?: any) => {
    this.isLoadingComplete = false;
    this.error = "";
    try {
      this.data = (await CrudApi.getAll<T>(this.link, query)).data;
      this.isLoadingComplete = true;
      this.error = "";
      return this.data;
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
    return [];
  };

  delete = async ( _id: string) => {
    try {
      const data = await CrudApi.delete<T>(this.link, _id);
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

  create = async (payload: T) => {
    try {
      const data = (await CrudApi.create<T>(this.link, payload)).data;
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

  edit = async (payload: T) => {
    try {
      const data = (await CrudApi.edit<T>(this.link, payload)).data;
      this.data = this.data.map((d) =>
        d._id === payload._id ? { ...d, ...data } : d
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

  image = async (image: FormData): Promise<string> => {
    try {
      const response = await CrudApi.image(image);
      this.error = "";
      return response.filename;
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
  return "";
}

}