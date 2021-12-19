import PortalUtil from "../../shared/utils/PortalUtil";

export default () => {
    // ver se ira guardar current user ou somente token
    // if (PortalUtil.getCurrentUser()) {
    //     return true;
    // }
    if (PortalUtil.getUserToken()) {
        return true;
    }
    return false;
}