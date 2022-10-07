import { PageArray } from './array/page-array';
import { PageSwitch } from './switch/page-switch';

export class Pages {
    /**
     * @param {string} id
     */
    static getPage(id) {
        switch (id) {
            case 'array':
                return new PageArray();
            case 'switch':
                return new PageSwitch();
            default:
                throw new Error('No Page class found!');
        }
    }
}
