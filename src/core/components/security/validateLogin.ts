import PortalUtil from '../../shared/utils/PortalUtil';

export default async function (login:
    {
        login: string,
        password: string
    }): Promise<any> {
    return PortalUtil.createConnection().post("/auth/login", {
        login: login.login,
        password: login.password
    })
    return false;
}
