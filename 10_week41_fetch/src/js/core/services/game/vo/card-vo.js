export class CardVO {
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
}
