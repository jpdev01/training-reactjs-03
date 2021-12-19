import axios from 'axios';
import Enterprise from '../model/Enterprise';
import User from '../model/user.model';
import history from './history';

class PortalUtil {
    
    static baseUrl = "http://localhost:8080/notion/api";
    // currentUser ainda nao foi implementado
    static currentUser: User;
    private static enterprise: Enterprise;

    constructor(){
        PortalUtil.enterprise = new Enterprise({name: "Notion"});
        console.log("PortalUtil is inicialized");
    }

    static getBaseUrl = () => {
        return this.baseUrl;
    }

    static createConnection = () => {
        const api = axios.create({
            baseURL: PortalUtil.getBaseUrl(),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + PortalUtil.getUserToken()
            }
        });


        api.interceptors.response.use((response) => {
            return response;
        }, (error) => {

            if (error.response.status === 401) {
                PortalUtil.removeToken();
                history.push("/");
                const requestConfig = error.config;
                return axios(requestConfig);
            }
            return Promise.reject(error);
        });
        return api;
    }

    static getHistory = () => {
        return history;
    }

    static setCurrentUser = (newUser: User) =>{
        this.currentUser = newUser;
    }

    static getCurrentUser(): User{
        return this.currentUser;
    }

    static setUserToken(newToken: string): void{
        localStorage.setItem('token', newToken);
    }

    static getUserToken(): string{
        return localStorage.getItem('token')!;
    }

    static removeToken(): void {
        localStorage.removeItem('token');
    }

    static getEnterprise(): Enterprise{
        return this.enterprise;
    }

    static async getEnterpriseByApi(): Promise<Enterprise> {
        return PortalUtil.createConnection().get('/config/enterprise');
    }

    static setEnterprise(newEnterprise: Enterprise): void {
        this.enterprise = newEnterprise;
    }
}


export default PortalUtil;