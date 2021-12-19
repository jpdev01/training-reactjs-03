import PortalUtil from '../../shared/utils/PortalUtil';

export default async function (login:
    {
        username: string,
        password: string
    }): Promise<any> {
    return PortalUtil.createConnection().post("/auth/login", {
        username: login.username,
        password: login.password
    })
    return false;
}
