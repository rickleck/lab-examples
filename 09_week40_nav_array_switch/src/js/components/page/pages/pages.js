import { Page } from '../page';
import { PageArray } from './page-array';
import { PageSwitch } from './page-switch';

export class Pages {
    /**
     * @param {string} id
     */
    static getPage(id) {
        switch (id) {
            case 'page-array':
                return new PageArray();
            case 'page-switch':
                return new PageSwitch();
            default:
                return new Page();
        }
    }
}
