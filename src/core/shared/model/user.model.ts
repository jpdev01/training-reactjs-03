export default class User {
    private id: number;
    private login: string;
    private fullname: string;
    private password: string;
    private lastLogin: Date;
    //private Company company;
    //private Language language;

    constructor(user: {
        id?: number;
        login?: string;
        fullname?: string;
        password?: string;
        lastLogin?: Date;
    } = {}) {
        this.id = user.id || 0;
        this.login = user.login || '';
        this.fullname = user.fullname || '';
        this.password = user.password || '';
        this.lastLogin = user.lastLogin || new Date();
    }

    public getId(): number {
        return this.id;
    }

    public getLogin(): string{
        return this.login;
    }

    public setLogin(login: string): void{
        this.login = login;
    }

}