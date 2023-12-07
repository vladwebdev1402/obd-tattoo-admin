export class TokenApi {

    static setToken(token: string) {
        localStorage.setItem('token', token);
    }

    static getToken(): string {
        return localStorage.getItem('token') ?? "";
    }

    static removeToken() {
        localStorage.removeItemItem('token');
    }
}