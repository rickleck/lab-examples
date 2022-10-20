export class CardVO {
    /** @type {HTMLImageElement}*/
    #imageElement;

    /**
     * @constructor
     * @param {object} card
     */
    constructor(card) {
        this.code;
        this.image;
        this.images = {
            svg: '',
            png: '',
        };
        this.suit;
        this.value;
        Object.assign(this, card);
    }

    /**
     * @returns {HTMLImageElement}
     */
    get imageElement() {
        return this.#imageElement;
    }

    /**
     * @returns {number}
     */
    get valueByNumber() {
        if (Number.isNaN(Number.parseInt(this.value))) {
            switch (this.value.toUpperCase()) {
                case 'JACK':
                    return 11;
                case 'QUEEN':
                    return 12;
                case 'KING':
                    return 13;
                case 'ACE':
                    return 14;
            }
        } else {
            return +this.value;
        }
    }

    /**
     * @returns {Promise}
     */
    loadImage() {
        return new Promise((resolve, reject) => {
            this.#imageElement = new Image();
            this.#imageElement.onload = () => {
                resolve();
            };
            this.#imageElement.onerror = () => {
                resolve();
            };
            this.#imageElement.src = this.images.png;
        });
    }
}
