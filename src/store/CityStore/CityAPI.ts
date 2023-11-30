import ICity from "@/types/ICity";

export default class CityAPI {
  static getAll = async (): Promise<ICity[]> => {
    const response = await fetch("http://localhost:3050/api/city", {
      method: "GET",
    }).then((res) => res.json());
    return response;
  };

  static createCity = async (name: string): Promise<ICity> => {
    const response = await fetch("http://localhost:3050/api/city", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({name: name}),
    }).then((res) => res.json());
    return response;
  };

  static deleteCity = async (_id: string): Promise<ICity> => {
    const response = await fetch("http://localhost:3050/api/city", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({_id: _id}),
    }).then((res) => res.json());
    return response;
  };

  static editCity = async (city: ICity): Promise<ICity> => {
    const response = await fetch("http://localhost:3050/api/city", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({...city}),
    }).then((res) => res.json());
    return response;
  };
}
