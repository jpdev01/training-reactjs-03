import PortalUtil from '../utils/PortalUtil';

export default class NavbarService {
    
    public async get(userId: BigInteger){
        let events = PortalUtil.createConnection().get(`/event/user/${userId}`);
        return events;
    }
}