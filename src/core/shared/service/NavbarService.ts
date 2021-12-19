import PortalUtil from '../utils/PortalUtil';
import { FieldNav } from '../model/core/FieldNav';

export default class NavbarService {
    
    public async get(){
        let navbar = PortalUtil.createConnection().get('/nav');
        return navbar;
    }
}