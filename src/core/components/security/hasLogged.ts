import PortalUtil from "../../shared/utils/PortalUtil";

export default async function (): Promise<any> {

    return PortalUtil.createConnection().post("/auth/login")
    return false;
}
