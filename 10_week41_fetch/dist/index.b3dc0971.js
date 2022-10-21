function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref7cf"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref7cf"] = parcelRequire;
}
parcelRequire.register("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = {};
function $7d39d93f9098a310$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$7d39d93f9098a310$var$mapping[keys[i]] = pairs[keys[i]];
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

parcelRequire.register("bIrbr", function(module, exports) {

module.exports = new URL((parcelRequire("aKzDW")).resolve("2LepY"), import.meta.url).toString();

});

var $40782a20e8f47696$exports = {};

(parcelRequire("aKzDW")).register(JSON.parse('{"6HCxQ":"index.b3dc0971.js","2LepY":"war.34d96e76.gif","ck6hz":"card-back-2.9c91ded9.png","gKE1p":"wargames_logo.6673790a.webp","8OIqb":"intro.e46f81fc.jpg"}'));

var $ec219c38d9e34832$exports = {};
$ec219c38d9e34832$exports = "<button id=\"btn-help\" class=\"circle-button\">?</button>\r\n<div class=\"game__stage\">\r\n    <div id=\"slot-pile-computer\" class=\"game__stage-slot is-hidden\">\r\n        <img src=\"card-back-2.9c91ded9.png\">\r\n    </div>\r\n    <div id=\"slot-card-computer\" class=\"game__stage-slot\">\r\n        <!-- <element-card> -->\r\n    </div>\r\n    <div id=\"slot-pile-user\" class=\"game__stage-slot game__stage-slot-button is-hidden\">\r\n        <img src=\"card-back-2.9c91ded9.png\">\r\n    </div>\r\n    <div id=\"slot-card-user\" class=\"game__stage-slot\">\r\n        <!-- <element-card> -->\r\n    </div>\r\n    <svg class=\"loader__spinner\" viewbox=\"0 0 50 50\">\r\n        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\r\n    </svg>\r\n</div>";



class $52df9f21a640acd9$export$a002182e51710d39 {
    /** @type {object} */ static GAME = {
        USER: "user",
        COMPUTER: "computer",
        WIN: "win",
        LOSE: "lose",
        WAR: "war",
        ERROR: "error",
        START_PILE: 26,
        OVERLAY: {
            WAR: "overlay-war",
            START: "overlay-start",
            GAME_OVER: "overlay-game-over",
            HELP: "overlay-help"
        },
        DEV_MODE: "1"
    };
    /** @type {object} */ static API = {
        BASE_URL: "https://deckofcardsapi.com/api/deck",
        DECK_TOP: "",
        DECK_BOTTOM: "bottom/",
        DECK_RANDOM: "random/",
        LOG: false
    };
}


class $288c5b7c2b2bcd88$export$763ea9d89dbce745 {
    /** @type {string[]}*/ #classList = [];
    /**
     * @constructor
     * @param {object} init
     */ constructor(init){
        this.id;
        this.options;
        this.populate(init);
    }
    /**
     * @param {*} space-separated string or an array of class-names
     */ set classList(value) {
        if (typeof value === "string") value = value.split(" ");
        this.#classList = [
            ...this.#classList,
            ...value
        ];
    }
    /**
     * @returns {string[]}
     */ get classList() {
        return this.#classList;
    }
    /**
     * @param {object} init
     */ populate(init) {
        if (init) Object.assign(this, init);
    }
}



class $c9d91b8c1bee6b6c$export$e38207f28c74982d extends HTMLElement {
    /** @type {ElementConfig} */ #config;
    /**
     * @constructor
     * @param {ElementConfig} config optional
     */ constructor(config){
        super();
        this.config = config ? config : new (0, $288c5b7c2b2bcd88$export$763ea9d89dbce745)();
        this.validateConfig();
        this.populateFromConfig();
    }
    /**
     * @param {ElementConfig} config
     */ set config(config) {
        this.#config = config;
    }
    /**
     * @returns {ElementConfig}
     */ get config() {
        return this.#config;
    }
    /**
     * @returns {object}
     * @comment Override this getter to register default component id and classlist if needed
     */ get defaults() {
        return {
            id: "",
            classList: ""
        };
    }
    /**
     * @param {string} htmlString
     */ render(htmlString) {
        this.innerHTML = htmlString;
    }
    /**
     * @param {HTMLElement} element
     * @returns {CustomElement}
     */ appendTo(element) {
        element.append(this);
        return this;
    }
    /**
     * @param {HTMLElement} element
     * @returns {CustomElement}
     */ prependTo(element) {
        element.prepend(this);
        return this;
    }
    /**
     *
     */ validateConfig() {
        this.config.id = this.config.id ? this.config.id : this.defaults.id;
        this.config.classList = this.defaults.classList;
    }
    /**
     *
     */ populateFromConfig() {
        this.id = this.config.id;
        this.classList.add(...this.config.classList);
    }
    /**
     *
     */ destroy() {
        if (this.parentElement) this.parentElement.removeChild(this);
    }
}


class $ed9a92c6ee34d6de$export$c05af758d9b62120 {
    /**
     * @constructor
     * @param {string} id
     */ constructor(id){
        this.id = id;
        this.card;
        this.ramaining;
        this.state;
        this.prevState;
    }
}





class $5e670266ebe59e27$export$28c660c63b792dea extends (0, $c9d91b8c1bee6b6c$export$e38207f28c74982d) {
    /** @type {string} */ static MODE_INFO = "info";
    /** @type {string} */ static MODE_SUCCESS = "success";
    /** @type {string} */ static MODE_ERROR = "error";
    /** @type {string} */ static POSITION_GLOBAL = "global";
    /** @type {string} */ static POSITION_TARGET = "target";
    /** @type {number} */ #arrowHeight = 20;
    /**
     * @constructor
     * @param { TooltipConfig} config
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "tooltip",
            classList: "tooltip"
        };
    }
    /**
     * @returns {HTMLElement}
     */ get targetElement() {
        return this.config.targetElement;
    }
    /**
     * @returns {object}
     */ get globalPosition() {
        const rectTarget = this.config.targetElement.getBoundingClientRect();
        return {
            left: rectTarget.left + window.scrollX + this.config.offsetX,
            top: rectTarget.top + window.scrollY + this.config.offsetY - this.offsetHeight - this.#arrowHeight
        };
    }
    /**
     *
     */ render() {
        super.render(this.config.msg);
        this.classList.add(this.config.mode, "show");
        if (this.config.position === $5e670266ebe59e27$export$28c660c63b792dea.POSITION_GLOBAL) {
            document.body.appendChild(this);
            this.style.left = this.globalPosition.left + "px";
            this.style.top = this.globalPosition.top + "px";
            if (this.offsetLeft + this.offsetWidth > document.body.clientWidth) {
                this.style.marginLeft = this.config.offsetX - this.offsetWidth + "px";
                this.classList.add("left");
            }
        } else {
            this.targetElement.appendChild(this);
            this.style.left = this.config.offsetX + "px";
            this.style.top = this.config.offsetY - this.offsetHeight - this.#arrowHeight + "px";
        }
    }
    /**
     *
     */ destroy() {
        if (this.parentElement) this.parentElement.removeChild(this);
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-tooltip", $5e670266ebe59e27$export$28c660c63b792dea);


class $221bd9177806f96d$export$d8b5cdb5205beabc extends (0, $288c5b7c2b2bcd88$export$763ea9d89dbce745) {
    /**
     * @constructor
     * @param {object} init
     * @comment default values in constructor
     */ constructor(init){
        super();
        this.mode = (0, $5e670266ebe59e27$export$28c660c63b792dea).MODE_INFO;
        this.targetElement = document.body;
        this.position = (0, $5e670266ebe59e27$export$28c660c63b792dea).POSITION_GLOBAL;
        this.offsetX = 200;
        this.offsetY = 200;
        this.msg = "Tooltip text here";
        this.populate(init);
    }
}



var $79ea2696ea431400$exports = {};
$79ea2696ea431400$exports = "<div class=\"game__card-inner\">\r\n    <div class=\"game__card-front\">\r\n\r\n    </div>\r\n    <div class=\"game__card-back\">\r\n        <img src=\"card-back-2.9c91ded9.png\">\r\n    </div>\r\n</div>";





class $34ac7a5a9fd2f760$export$60332b2344f7fe41 extends (0, $c9d91b8c1bee6b6c$export$e38207f28c74982d) {
    /** @type {number} */ #animIndex = 0;
    /** @type {string} */ #animOutState;
    /** @type {number} */ #animZIndex;
    /**
     * @constructor
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "game-card",
            classList: "game__card"
        };
    }
    /**
     *  @returns {PlayerVO}
     */ get player() {
        return this.config.options.pVO;
    }
    /**
     * @returns {boolean}
     */ get isUser() {
        return this.player.id === (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER;
    }
    /**
     * @returns {boolean}
     */ get isWarCard() {
        return this.config.options.isWarCard;
    }
    /**
     * @param {number} value
     */ set animIndex(value) {
        this.#animIndex = value;
    }
    /**
     * @param {string} value
     */ set animOutState(value) {
        this.#animOutState = value;
    }
    /**
     * @param {number} value
     */ set animZIndex(value) {
        this.#animZIndex = value;
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($79ea2696ea431400$exports))));
        this.classList.add(this.config.options.pVO.id);
        if (!this.isWarCard) {
            const img = this.config.options.pVO.card.imageElement;
            this.querySelector(".game__card-front").appendChild(img);
        }
    }
    /**
     * @returns {Promise}
     */ animateIn() {
        return this.#animate("in");
    }
    /**
     * @returns {Promise}
     */ animateOut() {
        return this.#animate("out");
    }
    /**
     * @param {string} dir
     * @returns {Promise}
     */  #animate(dir) {
        const classList = [];
        let delayFactor;
        if (dir === "in") {
            classList.push("animate-in");
            if (this.isWarCard) classList.push("war");
            delayFactor = 0.5;
        } else {
            this.classList.remove("animate-in");
            classList.push("animate-out");
            classList.push(this.#animOutState);
            delayFactor = 0.2;
            this.parentElement.style.zIndex = 25;
        }
        this.style.zIndex = this.#animZIndex;
        console.log("this.style.zIndex ", this.style.zIndex);
        const delay = this.#animIndex * delayFactor + "s";
        this.querySelector(".game__card-inner").style.animationDelay = delay;
        this.onanimationstart = ()=>{
            if (this.player.remaining === 0) document.querySelector("#slot-pile-" + this.player.id).classList.add("is-hidden");
        };
        return new Promise((resolve)=>{
            this.onanimationend = ()=>{
                this.parentElement.style.zIndex = "auto";
                this.style.zIndex = "auto";
                resolve();
            };
            this.classList.add(...classList);
        });
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("element-card", $34ac7a5a9fd2f760$export$60332b2344f7fe41);


var $86e134c06e4b3028$exports = {};
$86e134c06e4b3028$exports = "<div class=\"inner\">\r\n    <div class=\"game__hud-name\"></div>\r\n    <div class=\"game__hud-score\">\r\n        <span class=\"game__hud-score-points\"></span>\r\n        <span class=\"game__hud-score-header\">cards</span>\r\n    </div>\r\n</div>";



class $01ad5c8074de7012$export$3df3c878e47daeb9 extends (0, $c9d91b8c1bee6b6c$export$e38207f28c74982d) {
    /**
     * @constructor
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "game-hud",
            classList: "game__hud"
        };
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($86e134c06e4b3028$exports))));
        this.classList.add(this.config.options.player);
        this.querySelector(".game__hud-name").innerHTML = this.config.options.name;
        this.update(0);
    }
    /**
     * @param {number} remainingCards
     */ update(remainingCards) {
        this.querySelector(".game__hud-score-points").innerHTML = remainingCards;
    }
    /**
     *
     */ animateIn() {
        this.classList.remove("animate-out");
        this.classList.add("animate-in");
    }
    /**
     *
     */ animateOut() {
        if (this.classList.contains("animate-in")) this.classList.add("animate-out");
        this.classList.remove("animate-in");
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("element-hud", $01ad5c8074de7012$export$3df3c878e47daeb9);


var $43b684c98b8fafa7$exports = {};
$43b684c98b8fafa7$exports = "<img src=\"wargames_logo.6673790a.webp\" alt=\"\">\r\n<img src=\"intro.e46f81fc.jpg\" alt=\"\">\r\n<button id=\"btn-new-game\" class=\"generic-button\">START</button>";


var $a5fb54b35e29cc97$exports = {};
$a5fb54b35e29cc97$exports = "<div class=\"inner\">\r\n    <div class=\"screen\">\r\n    </div>\r\n    <div class=\"header\">\r\n        <p>WAR</p>\r\n    </div>\r\n</div>";


var $254c0e6d6a8cd5c0$exports = {};
$254c0e6d6a8cd5c0$exports = "<div class=\"inner\">\r\n    <div class=\"msg msg-win\">\r\n        <h2>You won!</h2>\r\n        <p>You beat the NORAD supercomputer WOPR (War Operation Plan Response).</p>\r\n    </div>\r\n    <div class=\"msg msg-lose\">\r\n        <h2>Sorry, you lost!</h2>\r\n        <p>The NORAD supercomputer WOPR (War Operation Plan Response) beat you.</p>\r\n    </div>\r\n    <div class=\"msg msg-error\">\r\n        <h2>Something went wrong while loading data :-(</h2>\r\n        <p>Maybe WOPR is in a bad mood, come back later.</p>\r\n    </div>\r\n</div>\r\n<button id=\"btn-new-game\" class=\"generic-button\">PLAY AGAIN</button>";


var $604b62212aa46109$exports = {};
$604b62212aa46109$exports = "<div class=\"inner\">\r\n    <p><em>Beat the NORAD supercomputer WOPR (War Operation Plan Response) and prevent global thermonuclear war!</em>\r\n    </p>\r\n    <h2>Rules</h2>\r\n    <p>War is a 2-player game. The goal is to collect the full deck to win the game.</p>\r\n    <p>It uses a 52-card deck, divided equally among the players. They must stack their cards face down in front of\r\n        them.\r\n        Then, each player turns up a card at the same time. The one with the highest number wins and can add the two\r\n        cards\r\n        to the bottom of their stack.</p>\r\n    <p>If it is a draw, then it is war! Each player draws a card from their stack and places it face down on the table.\r\n        Then\r\n        they turn up a card from the stack. The player who wins gets to collect the cards that led to war, the cards\r\n        that\r\n        went to “battle” and the ones facing down (6 cards in total).</p>\r\n</div>";





class $2352de0254afedd3$export$c6fdb837b070b4ff extends (0, $c9d91b8c1bee6b6c$export$e38207f28c74982d) {
    /** @type {string} */ #displayTime;
    /** @type {boolean} */ #isInAnimation = false;
    /**
     * @constructor
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "game-overlay",
            classList: "game__overlay"
        };
    }
    /**
     * @returns {string}
     */ get mode() {
        return this.config.options.mode;
    }
    /**
     * @returns {string}
     */ get state() {
        return this.config.options.state;
    }
    /**
     * @returns {boolean}
     */ get isInAnimnation() {
        return this.#isInAnimation;
    }
    /**
     *
     */ render() {
        switch(this.mode){
            case (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.START:
                this.#renderStart();
                break;
            case (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.WAR:
                this.#renderWar();
                break;
            case (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.GAME_OVER:
                this.#renderGameOver();
                break;
            case (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.HELP:
                this.#renderHelp();
                break;
        }
    }
    /**
     *
     */  #renderStart() {
        this.classList.add("game__overlay-start");
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($43b684c98b8fafa7$exports))));
        this.#setupNewGameButton();
        this.animateIn();
    }
    /**
     *
     */  #renderWar() {
        this.classList.add("game__overlay-war");
        this.#displayTime = "2.5s";
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($a5fb54b35e29cc97$exports))));
        this.querySelector(".screen").appendChild(this.config.options.img);
    }
    /**
     *
     */  #renderGameOver() {
        this.classList.add("game__overlay-game-over", this.state);
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($254c0e6d6a8cd5c0$exports))));
        if (this.state !== (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.ERROR) this.#setupNewGameButton();
        this.animateIn();
    }
    /**
     *
     */  #renderHelp() {
        this.classList.add("game__overlay-help");
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($604b62212aa46109$exports))));
        this.animateIn();
    }
    /**
     *
     */  #setupNewGameButton() {
        this.querySelector("#btn-new-game").addEventListener("click", ()=>this.animateOut().then(()=>(0, $9f7045cd9bacd6f5$export$86fbec116b87613f).instance.game.newGame()));
    }
    /**
     *
     */ animateIn() {
        return this.#animate("animate-in");
    }
    /**
     *
     */ animateOut() {
        if (this.#displayTime) this.style.animationDelay = this.#displayTime;
        return this.#animate("animate-out");
    }
    /**
     * @param {string} className
     */  #animate(className) {
        this.#isInAnimation = true;
        return new Promise((resolve)=>{
            this.onanimationend = ()=>{
                this.#isInAnimation = false;
                resolve();
            };
            this.classList.add(className);
        });
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("element-overlay", $2352de0254afedd3$export$c6fdb837b070b4ff);



class $a54111e15dc09a1a$export$985739bfa5723e08 extends (0, $c9d91b8c1bee6b6c$export$e38207f28c74982d) {
    /** @type {Card[]}*/ #cards = [];
    /** @type {Hud[]}*/ #huds = [];
    /** @type {HTMLElement[]}*/ #piles = [];
    /** @type {HTMLElement}*/ #btnDeal;
    /** @type {HTMLButtonElement}*/ #btnHelp;
    /** @type {HTMLElement}*/ #overlayStart;
    /** @type {HTMLElement}*/ #overlayWar;
    /** @type {HTMLElement}*/ #overlayGameOver;
    /** @type {HTMLElement}*/ #overlayHelp;
    /** @type {object}*/ #turnResult;
    /** @type {number}*/ #timeout;
    /** @type {boolean} */ #isWar;
    /** @type {ToolTip} */ #tooltip;
    /** @type {boolean} */ #firstRun = true;
    /** @type {HTMLImageElement} */ #warImage;
    /**
     * @constructor
     */ constructor(){
        super();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "game",
            classList: "game"
        };
    }
    /**
     * @returns {Image}
     */ get warImage() {
        return this.#warImage;
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($ec219c38d9e34832$exports))));
        this.#createHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER, "YOU").appendTo(this);
        this.#createHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER, "WOPR").prependTo(this);
        this.#setupDealButton();
        this.#toggleDealButton(false);
        this.#setupHelpButton();
        this.#piles.push(this.#btnDeal);
        this.#piles.push(this.querySelector("#slot-pile-" + (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER));
        this.#warImage = new Image();
        this.#warImage.src = (parcelRequire("bIrbr"));
        this.#overlayStart = this.#createOverlay((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.START);
    }
    /**
     *
     */ newGame() {
        this.#toggleLoader(true);
        this.#resetGame();
        (0, $9f7045cd9bacd6f5$export$86fbec116b87613f).instance.gameService.setupNewGame().then((pileSize)=>this.#gameReady(pileSize)).catch((error)=>{
            console.error("Game.newGame");
            console.error(error);
            this.#toggleLoader(false);
            this.#displayError();
        });
    }
    /**
     * @param {number} pileSize
     */  #gameReady(pileSize) {
        this.#cards = [];
        this.#toggleLoader(false);
        this.#updateHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER, pileSize);
        this.#updateHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER, pileSize);
        this.#toggleDealButton(true);
        this.#togglePiles(true);
        if (this.#firstRun) {
            this.#toggleTooltip(true);
            this.#firstRun = false;
        }
        this.#animateInHuds();
    }
    /**
     *
     */  #setupDealButton() {
        this.#btnDeal = this.querySelector("#slot-pile-" + (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER);
        this.#btnDeal.addEventListener("click", ()=>{
            this.#toggleDealButton(false);
            this.#toggleTooltip(false);
            (0, $9f7045cd9bacd6f5$export$86fbec116b87613f).instance.gameService.playTurn().then((result)=>{
                if (result) this.#drawTurnResult(result);
            }).catch((error)=>{
                console.error("Game.#btnDeal.click");
                console.error(error);
                this.#displayError();
            });
        });
    }
    /**
     *
     */  #setupHelpButton() {
        this.#btnHelp = this.querySelector("#btn-help");
        this.#btnHelp.addEventListener("click", ()=>{
            this.#toggleHelp();
        });
    }
    /**
     * @param {object} result
     */  #drawTurnResult(result) {
        if (!this.#isWar) this.#cards = [];
        this.#turnResult = result;
        this.#createCard(this.#turnResult.user);
        this.#createCard(this.#turnResult.computer);
        this.#turnAnimIn();
    }
    /**
     *
     */  #turnAnimIn() {
        Promise.all(this.#getCardAnimQueue("in", this.#cards.length - 2)).then(()=>{
            this.#turnAnimInDone();
        });
    }
    /**
     *
     */  #turnAnimInDone() {
        if (this.#turnResult.isWar) {
            this.#isWar = true;
            this.#displayWar();
        } else {
            this.#isWar = false;
            setTimeout(()=>{
                this.#turnAnimOut();
            }, 750);
        }
    }
    /**
     *
     */  #displayWar() {
        this.#timeout = setTimeout(()=>{
            this.#overlayWar = this.#createOverlay((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.WAR, null, this.#warImage);
            this.#overlayWar.animateIn().then(()=>this.#overlayWar.animateOut()).then(()=>{
                this.#destroyElement(this.#overlayWar);
                let numCards = 0;
                const checkRemaining = (player)=>{
                    if (player.remaining > 0) {
                        this.#createCard(player, true);
                        numCards += 1;
                    }
                };
                checkRemaining(this.#turnResult.user);
                checkRemaining(this.#turnResult.computer);
                if (numCards > 0) return Promise.all(this.#getCardAnimQueue("in", this.#cards.length - numCards));
                else this.#warGameOver();
            }).then(()=>{
                if (this.#turnResult.isGameOver) this.#warGameOver();
                else this.#toggleDealButton(true);
            });
        }, 1000);
    }
    /**
     *
     */  #warGameOver() {
        this.#updateHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER, this.#turnResult.computer.remaining);
        this.#updateHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER, this.#turnResult.user.remaining);
        this.#gameOver();
    }
    /**
     *
     */  #turnAnimOut() {
        this.#updateHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER, this.#turnResult.computer.remaining);
        this.#updateHud((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER, this.#turnResult.user.remaining);
        Promise.all(this.#getCardAnimQueue("out")).then(()=>{
            this.#turnAnimOutDone();
        });
    }
    /**
     *
     */  #turnAnimOutDone() {
        this.#destroyCards();
        if (this.#turnResult.isGameOver) this.#gameOver();
        else this.#toggleDealButton(true);
    }
    /**
     * @param {string} state
     */  #gameOver(state) {
        if (!state) this.#highlightLoserPile();
        this.#toggleDealButton(false);
        this.#timeout = setTimeout(()=>{
            this.#overlayGameOver = this.#createOverlay((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.GAME_OVER, state);
        }, 2000);
    }
    /**
     *
     */  #highlightLoserPile() {
        this.querySelector(`#slot-pile-${this.#turnResult.loser.id}`).classList.add("lose");
    }
    /**
     * @param {PlayerVO} pVO
     * @param {boolean} isWarCard
     */  #createCard(pVO, isWarCard = false) {
        const index = this.#cards.length;
        const config = new (0, $288c5b7c2b2bcd88$export$763ea9d89dbce745)({
            id: `game-card-${index}`,
            options: {
                pVO: pVO,
                isWarCard: isWarCard
            }
        });
        const card = new (0, $34ac7a5a9fd2f760$export$60332b2344f7fe41)(config).appendTo(this.querySelector(`#slot-card-${pVO.id}`));
        this.#cards.push(card);
    }
    /**
     * @param {string} dir
     * @param {number} fromIndex
     * @returns {Promise[]}
     */  #getCardAnimQueue(dir, fromIndex = 0) {
        fromIndex = Math.max(fromIndex, 0);
        const order = [];
        const promises = [];
        for(let i = fromIndex; i < this.#cards.length; i++){
            const card1 = this.#cards[i];
            if (dir === "in") card1.isUser ? order.unshift(card1) : order.push(card1);
            else if (card1.player.id === this.#turnResult.winner.id) {
                card1.animOutState = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.WIN;
                order.unshift(card1);
            } else {
                card1.animOutState = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.LOSE;
                order.push(card1);
            }
        }
        order.forEach((card, index)=>{
            card.animIndex = index;
            if (dir === "in") {
                card.animZIndex = index;
                promises.push(card.animateIn());
            } else promises.push(card.animateOut());
        });
        return promises;
    }
    /**
     *
     */  #destroyCards() {
        this.#cards.forEach((card)=>{
            this.#destroyElement(card);
        });
    }
    /**
     * @param {string} player
     * @param {string} name
     */  #createHud(player, name) {
        const config1 = new (0, $288c5b7c2b2bcd88$export$763ea9d89dbce745)({
            id: `game-hud-${player}`,
            options: {
                name: name,
                player: player
            }
        });
        const hud = new (0, $01ad5c8074de7012$export$3df3c878e47daeb9)(config1);
        this.#huds.push(hud);
        return hud;
    }
    /**
     * @param {string} player
     * @param {number} value
     * @param {boolean} reset
     */  #updateHud(player1, value, reset = false) {
        this.#huds.find((hud)=>{
            if (hud.id === `game-hud-${player1}`) hud.update(value);
            if (reset) hud.classList.remove("animate-in");
        });
    }
    /**
     *
     */  #animateInHuds() {
        this.#huds.forEach((hud)=>hud.animateIn());
    }
    /**
     *
     */  #animateOutHuds() {
        this.#huds.forEach((hud)=>hud.animateOut());
    }
    /**
     *
     */  #displayError() {
        this.#createOverlay((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.GAME_OVER, (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.ERROR);
    }
    /**
     * @param {string} mode
     * @param {string} state
     * @param {Image} img
     */  #createOverlay(mode, state1, img) {
        state1 = state1 ? state1 : this.#turnResult ? this.#turnResult.user.state : undefined;
        const config2 = new (0, $288c5b7c2b2bcd88$export$763ea9d89dbce745)({
            id: `game-${mode}`,
            options: {
                mode: mode,
                state: state1,
                img: img
            }
        });
        return new (0, $2352de0254afedd3$export$c6fdb837b070b4ff)(config2).appendTo(this.querySelector(".game__stage"));
    }
    /**
     * @param {boolean} state
     */  #toggleDealButton(state2) {
        state2 ? this.#btnDeal.classList.remove("is-disabled") : this.#btnDeal.classList.add("is-disabled");
    }
    /**
     * @param {boolean} state
     */  #toggleLoader(state3) {
        const loader = this.querySelector(".loader__spinner");
        state3 ? loader.classList.add("show") : loader.classList.remove("show");
    }
    /**
     *
     */  #toggleHelp() {
        if (this.#overlayHelp && this.#overlayHelp.isInAnimation) return;
        if (!this.#overlayHelp) {
            this.#btnHelp.innerText = "X";
            this.#overlayHelp = this.#createOverlay((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.OVERLAY.HELP);
        } else {
            this.#btnHelp.innerText = "?";
            this.#overlayHelp.animateOut().then(()=>{
                this.#destroyElement(this.#overlayHelp);
                this.#overlayHelp = undefined;
            });
        }
    }
    /**
     * @param {boolean} state
     */  #toggleTooltip(state4) {
        if (state4 && !this.#tooltip) this.#tooltip = new (0, $5e670266ebe59e27$export$28c660c63b792dea)(new (0, $221bd9177806f96d$export$d8b5cdb5205beabc)({
            mode: (0, $5e670266ebe59e27$export$28c660c63b792dea).MODE_INFO,
            targetElement: this.#btnDeal,
            position: (0, $5e670266ebe59e27$export$28c660c63b792dea).POSITION_TARGET,
            offsetX: this.#btnDeal.clientWidth * 0.5,
            offsetY: 20,
            msg: "Click on your card stack<br>to start the next turn."
        }));
        else if (this.#tooltip) {
            this.#tooltip.destroy();
            this.#tooltip = undefined;
        }
    }
    /**
     * @param {boolean} state
     */  #togglePiles(state5) {
        this.#piles.forEach((pile)=>state5 ? pile.classList.remove("is-hidden") : pile.classList.add("is-hidden"));
    }
    /**
     *
     */  #resetPiles() {
        this.#piles.forEach((pile)=>pile.classList.remove("lose"));
    }
    /**
     *
     */  #resetGame() {
        if (this.#timeout) clearTimeout(this.#timeout);
        this.#animateOutHuds();
        this.#destroyCards();
        this.#toggleDealButton(false);
        this.#togglePiles(false);
        this.#resetPiles();
        this.#destroyElement(this.#overlayWar);
        this.#destroyElement(this.#overlayStart);
        this.#destroyElement(this.#overlayGameOver);
        this.#destroyElement(this.#overlayHelp);
        this.#isWar = false;
    }
    /**
     * @param {CustomElement} element
     */  #destroyElement(element) {
        if (element && element.destroy) element.destroy();
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-game", $a54111e15dc09a1a$export$985739bfa5723e08);




class $3e2ece72ba5dc390$export$ae14c375fc93363 {
    /** @type {string} */ #deckID;
    /**
     * @constructor
     */ constructor(){}
    /**
     * @param {number} count
     * @returns {Promise}
     */ async getNewDeck(count = 1) {
        const data = await this.#doApiFetch(`/new/shuffle/?deck_count=${count}`);
        this.#deckID = data.deck_id;
    }
    /**
     * @param {number} count
     * @param {string} position see Constants.API
     * @returns {Promise}
     */ drawFromDeck(count, position = (0, $52df9f21a640acd9$export$a002182e51710d39).API.DECK_TOP) {
        return this.#doApiFetch(`/${this.#deckID}/draw/${position}?count=${count}`);
    }
    /**
     * @param {string} pile
     * @param {number} count
     * @param {string} position
     * @returns {Promise}
     */ drawFromPile(pile, count = 1, position = (0, $52df9f21a640acd9$export$a002182e51710d39).API.DECK_BOTTOM) {
        return this.#doApiFetch(`/${this.#deckID}/pile/${pile}/draw/${position}?count=${count}`);
    }
    /**
     * @param {string} pile
     * @param {string} cards
     * @returns {Promise}
     */ addToPile(pile, cardCodes) {
        return this.#doApiFetch(`/${this.#deckID}/pile/${pile}/add/?cards=${cardCodes}`);
    }
    /**
     * @param {string} cards
     * @returns {string}
     */ returnToDeck(cardCodes) {
        return this.#doApiFetch(`/${this.#deckID}/return/?cards=${cardCodes}`);
    }
    /**
     * @param {object[]} cards
     * @returns {string}
     */ getCardCodes(cards) {
        return cards.map((card)=>card.code).join(",");
    }
    /**
     * @param {string} req
     * @returns {Promise}
     */  #doApiFetch(req) {
        return new Promise((resolve, reject)=>{
            if ((0, $52df9f21a640acd9$export$a002182e51710d39).API.LOG) console.log("%c[API Call]" + req, "color: grey");
            fetch((0, $52df9f21a640acd9$export$a002182e51710d39).API.BASE_URL + req, {
                method: "GET"
            }).then((res)=>{
                if (!res.ok) {
                    console.error("%cGameService.#doApiFetch.error");
                    reject(res.statusText);
                }
                return res.json();
            }).then((data)=>{
                if ((0, $52df9f21a640acd9$export$a002182e51710d39).API.LOG) console.log("%c[API Data]", "color: grey", data);
                resolve(data);
            }).catch((err)=>{
                console.error("GameService.#doApiFetch.error");
                reject(err);
            });
        });
    }
}


class $86b8af2a390bb42a$export$7e4b2a3baa1d4ac5 {
    /** @type {HTMLImageElement}*/ #imageElement;
    /**
     * @constructor
     * @param {object} card
     */ constructor(card){
        this.code;
        this.image;
        this.images = {
            svg: "",
            png: ""
        };
        this.suit;
        this.value;
        Object.assign(this, card);
    }
    /**
     * @returns {HTMLImageElement}
     */ get imageElement() {
        return this.#imageElement;
    }
    /**
     * @returns {number}
     */ get valueByNumber() {
        if (Number.isNaN(Number.parseInt(this.value))) switch(this.value.toUpperCase()){
            case "JACK":
                return 11;
            case "QUEEN":
                return 12;
            case "KING":
                return 13;
            case "ACE":
                return 14;
        }
        else return +this.value;
    }
    /**
     * @returns {Promise}
     */ loadImage() {
        return new Promise((resolve, reject)=>{
            this.#imageElement = new Image();
            this.#imageElement.onload = ()=>{
                resolve();
            };
            this.#imageElement.onerror = ()=>{
                resolve();
            };
            this.#imageElement.src = this.images.png;
        });
    }
}



class $89e7f4eb538c8c09$export$76299a8db1a98dcd {
    /** @type {ApiService}*/ #api;
    /** @type {string} */ #devMode;
    /** @type {object[]}*/ #resultQueue;
    /** @type {CardVO[]}*/ #cardsInPlay;
    /** @type {boolean} */ #isGameOver;
    /** @type {boolean}*/ #turnPending;
    /**
     * @constructor
     */ constructor(devMode){
        this.#devMode = devMode;
        this.#api = new (0, $3e2ece72ba5dc390$export$ae14c375fc93363)();
    }
    /**
     * @returns {boolean}
     */ get devMode() {
        return this.#devMode === (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.DEV_MODE;
    }
    /**
     * @returns {Promise}
     */ async setupNewGame() {
        console.clear();
        console.log("%cSetting up new game...", "color: yellow");
        this.#resultQueue = [];
        this.#cardsInPlay = [];
        this.#isGameOver = false;
        this.#turnPending = false;
        let testCardCodes;
        let pileSize = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.START_PILE;
        if (this.devMode) {
            testCardCodes = {
                //user: '8H,4C,9S,QC,8C',
                //computer: '5C,4D,7S,QH,3H',
                user: "8H,4C,9S,8C",
                computer: "5C,4D,7S,KH"
            };
            pileSize = testCardCodes.user.split(",").length;
        }
        try {
            await this.#api.getNewDeck();
            await this.#setupStartHand((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER, testCardCodes);
            await this.#setupStartHand((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER, testCardCodes);
            console.log("%cConsole will always be 1 turn ahead of the interface,\nsince the next turn is preloaded in the background.", "color: yellow");
            //Preload first turn
            console.log("-------------------");
            console.log("%cNext turn", "color: yellow");
            await this.#createTurn();
            console.log("%cNew game ready", "color: yellow");
            return pileSize;
        } catch (error) {
            console.error("GameService.setupNewGame.error");
            return Promise.reject(error);
        }
    }
    /**
     * @returns {object}
     */ async playTurn() {
        if (this.#turnPending) return;
        console.log("-------------------");
        console.log("%cNext turn", "color: yellow");
        try {
            //Check if result queue is empty
            if (this.#resultQueue.length === 0) await this.#createTurn();
            // Use first result in queue
            const result = this.#resultQueue.shift();
            //Preload next result
            if (!this.#isGameOver) this.#createTurn();
            return result;
        } catch (error) {
            return Promise.reject(error);
        }
    }
    /**
     * @param {id}
     * @param {object} testCardCodes
     * @returns {Promise}
     */ async #setupStartHand(id, testCardCodes) {
        let apiData;
        if (!testCardCodes) {
            apiData = await this.#api.drawFromDeck((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.START_PILE);
            await this.#api.addToPile(id, this.#api.getCardCodes(apiData.cards));
        } else {
            apiData = await this.#api.drawFromDeck(52);
            const testCodes = testCardCodes[id];
            let returnCodes = [];
            for (const card of apiData.cards)if (!testCodes.split(",").includes(card.code)) returnCodes.push(card.code);
            await this.#api.addToPile(id, testCodes);
            await this.#api.returnToDeck(returnCodes);
        }
    }
    /**
     * @returns {Promise}
     */ async #createTurn() {
        this.#turnPending = true;
        try {
            const user = new (0, $ed9a92c6ee34d6de$export$c05af758d9b62120)((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.USER);
            const computer = new (0, $ed9a92c6ee34d6de$export$c05af758d9b62120)((0, $52df9f21a640acd9$export$a002182e51710d39).GAME.COMPUTER);
            await this.#drawCard(user);
            await this.#drawCard(computer);
            console.log("user.card: " + user.card.valueByNumber);
            console.log("computer.card: " + computer.card.valueByNumber);
            let isWar = false;
            let winner;
            let loser;
            if (user.card.valueByNumber === computer.card.valueByNumber) {
                console.log("%cWAR", "color: red");
                isWar = true;
                user.state = computer.state = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.WAR;
                await this.#drawCard(user, true);
                await this.#drawCard(computer, true);
                console.log("%cWar: ", "color: red", user);
                console.log("%cWar: ", "color: red", computer);
            } else {
                if (user.card.valueByNumber > computer.card.valueByNumber) {
                    winner = user;
                    loser = computer;
                } else {
                    winner = computer;
                    loser = user;
                }
                winner.state = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.WIN;
                loser.state = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.LOSE;
                await this.#awardCardsInPlay(winner);
                console.log("%cWinner: ", "color: lightgreen", winner);
                console.log("%cLoser: ", "color: red", loser);
            }
            const gameResult = this.#checkGameOver([
                user,
                computer
            ]);
            if (gameResult) {
                winner = gameResult.winner;
                loser = gameResult.loser;
                await this.#awardCardsInPlay(winner);
            }
            const result = {
                user: user,
                computer: computer,
                winner: winner,
                loser: loser,
                isWar: isWar,
                isGameOver: this.#isGameOver
            };
            this.#resultQueue.push(result);
            this.#turnPending = false;
        } catch (error) {
            this.#turnPending = false;
            console.error("%cGameService.#createTurn.error");
            return Promise.reject(error);
        }
    }
    /**
     * @param {PlayerVO} pVO
     * @param {boolean} isWarCard
     * @returns {Promise}
     */ async #drawCard(pVO, isWarCard = false) {
        const apiData1 = await this.#api.drawFromPile(pVO.id);
        const card1 = new (0, $86b8af2a390bb42a$export$7e4b2a3baa1d4ac5)(apiData1.cards[0]);
        if (!isWarCard) {
            await card1.loadImage();
            pVO.card = card1;
        }
        this.#cardsInPlay.push(card1);
        pVO.remaining = apiData1.piles[pVO.id].remaining;
    }
    /**
     * @param {PlayerVO} pVO
     * @returns {Promise}
     */ async #awardCardsInPlay(pVO1) {
        if (this.#cardsInPlay.length > 0) {
            console.log("Cards in play for winner: ", this.#cardsInPlay);
            const apiData2 = await this.#api.addToPile(pVO1.id, this.#api.getCardCodes(this.#cardsInPlay));
            pVO1.remaining = apiData2.piles[pVO1.id].remaining;
            this.#cardsInPlay = [];
        }
    }
    /**
     * @returns {object}
     */  #checkGameOver(players) {
        const loser1 = players.find((pVO)=>pVO.remaining == 0);
        let winner1;
        if (loser1) {
            loser1.state = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.LOSE;
            winner1 = players.find((pVO)=>pVO.remaining != 0);
            winner1.state = (0, $52df9f21a640acd9$export$a002182e51710d39).GAME.WIN;
            this.#isGameOver = true;
            console.log("-------------------");
            console.log("%cGame Over!", "color: yellow");
            console.log("%cWinner: ", "color: lightgreen", winner1);
            console.log("%cLoser: ", "color: red", loser1);
            return {
                winner: winner1,
                loser: loser1
            };
        } else return;
    }
}


class $9f7045cd9bacd6f5$export$86fbec116b87613f {
    /** @type {App} */ static #instance;
    /**
     * @returns {App} global instance of App
     */ static get instance() {
        if (!this.#instance) this.#instance = new $9f7045cd9bacd6f5$export$86fbec116b87613f();
        return this.#instance;
    }
    /** @type {GameService} */ #gameService;
    /** @type {Game} */ #game;
    /**
     * @constructor
     */ constructor(){}
    /**
     * @returns {GameService}
     */ get gameService() {
        return this.#gameService;
    }
    /**
     * @returns {Game}
     */ get game() {
        return this.#game;
    }
    /**
     *
     */ run() {
        const devMode = new URLSearchParams(document.location.search).get("dev");
        this.#gameService = new (0, $89e7f4eb538c8c09$export$76299a8db1a98dcd)(devMode);
        this.#game = new (0, $a54111e15dc09a1a$export$985739bfa5723e08)();
        document.querySelector("main").appendChild(this.#game);
        this.#game.render();
    }
}


(0, $9f7045cd9bacd6f5$export$86fbec116b87613f).instance.run();


//# sourceMappingURL=index.b3dc0971.js.map
