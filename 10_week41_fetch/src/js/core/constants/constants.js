export class Constants {
    /** @type {object} */
    static GAME = {
        USER: 'user',
        COMPUTER: 'computer',
        WIN: 'win',
        LOSE: 'lose',
        WAR: 'war',
        START_PILE: 26,
        OVERLAY: {
            WAR: 'overlay-war',
            START: 'overlay-start',
            GAME_OVER: 'overlay-game-over',
            HELP: 'overlay-help',
        },
        DEV_MODE: '1',
    };

    /** @type {object} */
    static API = {
        BASE_URL: 'https://deckofcardsapi.com/api/deck',
        DECK_TOP: '',
        DECK_BOTTOM: 'bottom/',
        DECK_RANDOM: 'random/',
        LOG: false,
    };
}
