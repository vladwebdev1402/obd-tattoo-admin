import { apiUrl } from "./url";

export default class CrudApi {
    
    static getAll = async <T>(link: string): Promise<T[]> => {
        const data = await fetch(apiUrl + link).then(res => res.json());
        return data
    }

    static create = async <T>(link: string, payload: T): Promise<T> => {
        const response = await fetch(apiUrl + link, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({...payload}),
          }).then((res) => res.json());
          return response;
    }

    static delete = async <T>(link: string,  _id: string): Promise<T[]> => {
        const response = await fetch(apiUrl + link, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "DELETE",
            body: JSON.stringify({_id: _id}),
          }).then((res) => res.json());
          return response;
    }

    static edit = async <T>(link: string, payload: T): Promise<T[]> => {
        const response = await fetch(apiUrl + link, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify({...payload}),
        }).then((res) => res.json());
        return response;
    }
}