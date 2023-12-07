import { TokenApi } from "./TokenApi";
import { apiUrl } from "./url";

export default class CrudApi {
    
    static getAll = async <T>(link: string): Promise<{data: T[], message: string}> => {
      const data = await fetch(apiUrl + link, {
        headers: {
          "Authorization": TokenApi.getToken()
        },
      }).then(res => res.json());
        return data
    }

    static create = async <T>(link: string, payload: T): Promise<{data: T, message: string}> => {
        const response = await fetch(apiUrl + link, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": TokenApi.getToken()
            },
            method: "POST",
            body: JSON.stringify({...payload}),
          }).then((res) => res.json());
          return response;
    }

    static delete = async <T>(link: string,  _id: string): Promise<{data: T, message: string}> => {
        const response = await fetch(apiUrl + link, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": TokenApi.getToken()
            },
            method: "DELETE",
            body: JSON.stringify({_id: _id}),
          }).then((res) => res.json());
          return response;
    }

    static edit = async <T>(link: string, payload: T): Promise<{data: T, message: string}> => {
        const response = await fetch(apiUrl + link, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": TokenApi.getToken()
          },
          method: "PUT",
          body: JSON.stringify({...payload}),
        }).then((res) => res.json());
        return response;
    }

    static image = async (image: FormData): Promise<{filename: string, message: string}> => {
      const response = await fetch(apiUrl + "image", {
        method: "POST",
        headers: {
          "Authorization": TokenApi.getToken()
        },
        body: image,
      }).then((res) => res.json());
      return response;
  }

}