function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $3bb07def7debad7e$exports = {};
$3bb07def7debad7e$exports = "<div class=\"container-responsive\">\r\n    <nav>\r\n        <div class=\"navigation__buttons\">\r\n            <a data-href=\"array\" class=\"navigation__buttons-logo\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"111\" height=\"55\" viewBox=\"0 0 111 55\">\r\n                    <path class=\"svg-depth\" d=\"M0 47.625l7.9375 7.937501h7.9375V7.9375L7.9375 0v47.625H0\"></path>\r\n                    <path class=\"svg-depth\" d=\"M15.875 47.625l7.9375 7.937501h23.812499V7.9375L39.687499 0v47.625zm0-39.6875l7.9375 7.9375h7.937499V7.9375zm7.9375 15.875h7.937499v15.875H23.8125z\"></path>\r\n                    <path class=\"svg-depth\" d=\"M47.624999 47.625l7.9375 7.937501h23.8125V23.8125l-7.9375-7.9375v31.75zM55.5625 23.8125H63.5v15.875h-7.9375zM55.562499 0l7.9375 7.9375v7.9375h-7.9375z\"></path>\r\n                    <path class=\"svg-depth\" d=\"M79.374999 47.624999l7.9375 7.9375H111.125V7.9375L103.1875 0v47.624999zm0-15.874999l7.9375 7.937499h7.9375V31.75zm7.9375-23.8125h7.9375v15.875h-7.9375z\"></path>\r\n                    <path class=\"svg-text\" d=\"M0 0v47.625h7.9375V0zm15.875 0v7.9375H31.75v7.9375H15.875v31.75h23.8125V0zm7.9375 23.8125H31.75v15.875h-7.9375zM47.360416 0L47.625 47.625h23.8125v-31.75h-15.875L55.47431 0zM55.5625 23.8125H63.5v15.875h-7.9375v-15.875zM79.375 47.625v-7.9375H95.25V31.75H79.375V0h23.8125v47.625zm7.9375-23.8125H95.25V7.9375h-7.9375z\"></path>\r\n                </svg>\r\n            </a>\r\n            <button id=\"nav-toggle\" class=\"navigation__buttons-toggle\">\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n            </button>\r\n        </div>\r\n        <ul class=\"navigation__list\">\r\n            <li><a data-href=\"array\">Array</a></li>\r\n            <li><a data-href=\"switch\">Switch</a></li>\r\n        </ul>\r\n    </nav>\r\n</div>";



class $bdb62bb55cd97d0c$export$763ea9d89dbce745 {
    /**
     * @constructor
     * @param {object} init
     */ constructor(init){
        this.id;
        this.classList;
        this.options;
        this.populate(init);
    }
    /**
     * @param {string} value string of space separated class names
     */ appendClassList(value) {
        this.classList = this.classList ? this.classList : "";
        let prefix = this.classList.length > 0 && !this.classList.endsWith(" ") ? " " : "";
        this.classList += prefix + value;
    }
    /**
     * @param {object} init
     */ populate(init) {
        if (init) {
            for(const key in init)if (key == "classList") this.appendClassList(init[key]);
            else this[key] = init[key];
        }
    }
}


class $06463adbb96d13aa$export$d5345f74bf36d494 extends HTMLElement {
    /** @type {ElementConfig} */ #config;
    /**
     * @constructor
     * @param {ElementConfig} config optional
     */ constructor(config){
        super();
        this.config = config ? config : new (0, $bdb62bb55cd97d0c$export$763ea9d89dbce745)();
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
     * @param {HTMLElement} el
     * @returns {ElementBase}
     */ appendTo(element) {
        element.append(this);
        return this;
    }
    /**
     * @param {HTMLElement} el
     * @returns {ElementBase}
     */ prependTo(element) {
        element.prepend(this);
        return this;
    }
    /**
     *
     */ validateConfig() {
        this.config.id = this.config.id ? this.config.id : this.defaults.id;
        this.config.appendClassList(this.defaults.classList);
    }
    /**
     *
     */ populateFromConfig() {
        this.id = this.config.id;
        for (const className of this.config.classList.split(" "))this.classList.add(className);
    }
}



class $489a32f8870ec4f2$export$b8a61e5c71402559 extends (0, $06463adbb96d13aa$export$d5345f74bf36d494) {
    /**  @type {HTMLElement[]} */ #items;
    /**
     * @constructor
     * @param {ElementConfig} config
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @param {string} value
     */ set active(value) {
        for (const item of this.#items)item.disabled = item.id === value;
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "navigation",
            classList: "navigation"
        };
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($3bb07def7debad7e$exports))));
        this.#items = this.querySelectorAll("li");
        this.addEventListener("click", (event)=>{
            if (event.target.dataset.href) (0, $342d8b3f004474be$export$86fbec116b87613f).instance.reportNavigationClick(event.target.dataset.href);
        }, true);
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-navigation", $489a32f8870ec4f2$export$b8a61e5c71402559);


class $342d8b3f004474be$export$86fbec116b87613f {
    /** @type {App} */ static #instance;
    /**
     * @returns {App} global instance of App
     */ static get instance() {
        if (!this.#instance) this.#instance = new $342d8b3f004474be$export$86fbec116b87613f();
        return this.#instance;
    }
    /** @type {Navigation} */ #navigation;
    /**
     * @constructor
     */ constructor(){}
    /**
     *
     */ run() {
        this.#navigation = new (0, $489a32f8870ec4f2$export$b8a61e5c71402559)().appendTo(document.body);
    }
    /**
     * @param {string} href
     */ reportNavigationClick(href) {
        console.log(href);
    }
}


(0, $342d8b3f004474be$export$86fbec116b87613f).instance.run();


