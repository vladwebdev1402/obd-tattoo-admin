import INamePrompt from "@/types/INamePrompt";
export default class NamePromtAPI {
  static getAll = async (link: string): Promise<INamePrompt[]> => {
    const response = await fetch(`http://localhost:3050/api/${link}`, {
      method: "GET",
    }).then((res) => res.json());
    return response;
  };

  static create = async (link: string, name: string, promt: string): Promise<INamePrompt> => {
    const response = await fetch(`http://localhost:3050/api/${link}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({name: name, promt: promt}),
    }).then((res) => res.json());
    return response;
  };

  static delete = async (link: string, _id: string): Promise<INamePrompt> => {
    const response = await fetch(`http://localhost:3050/api/${link}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({_id: _id}),
    }).then((res) => res.json());
    return response;
  };

  static edit = async (link: string, data: INamePrompt): Promise<INamePrompt> => {
    const response = await fetch(`http://localhost:3050/api/${link}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({...data}),
    }).then((res) => res.json());
    return response;
  };
}
