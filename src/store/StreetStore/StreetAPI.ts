import IStreet from "@/types/IStreet";

export default class StreetAPI {
  static getAll = async (): Promise<IStreet[]> => {
    const response = await fetch(`http://localhost:3050/api/street`, {
      method: "GET",
    }).then((res) => res.json());
    return response;
  };

  static create = async (payload: IStreet): Promise<IStreet> => {
    const response = await fetch(`http://localhost:3050/api/street`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({...payload}),
    }).then((res) => res.json());
    return response;
  };

  static delete = async ( _id: string): Promise<IStreet> => {
    const response = await fetch(`http://localhost:3050/api/street`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({_id: _id}),
    }).then((res) => res.json());
    return response;
  };

  static edit = async ( data: IStreet): Promise<IStreet> => {
    const response = await fetch(`http://localhost:3050/api/street`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({...data}),
    }).then((res) => res.json());
    return response;
  };
}
