import { ElementConfig } from '../../../core/element/config/element-config';
import { Tooltip } from '../tooltip';

export class TooltipConfig extends ElementConfig {
    /**
     * @constructor
     * @param {object} init
     * @comment default values in constructor
     */
    constructor(init) {
        super();
        this.mode = Tooltip.MODE_INFO;
        this.targetElement = document.body;
        this.position = Tooltip.POSITION_GLOBAL;
        this.offsetX = 200;
        this.offsetY = 200;
        this.msg = 'Tooltip text here';
        this.populate(init);
    }
}
