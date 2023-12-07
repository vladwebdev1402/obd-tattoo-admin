import { authUrl } from "./url";

export class AuthApi {


    static signup = async (login: string, password: string): Promise<{message: string, successfully: boolean,errors?: any[] }> => {
        const response = await fetch(authUrl + "signup", {
            method: "POST",
            body: JSON.stringify({login, password}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())

        return response;
    }

    static login = async (login: string, password: string): Promise<{message: string, successfully: boolean, token: string }> => {
        const response = await fetch(authUrl + "login", {
            method: "POST",
            body: JSON.stringify({login, password}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())

        return response;
    }
}