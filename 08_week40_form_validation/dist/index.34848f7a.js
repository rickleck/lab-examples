function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $4c9632bbe3b57aaf$exports = {};
$4c9632bbe3b57aaf$exports = "<h2>Validation feedback mode.</h2>\r\n<menu>\r\n    <button class=\"generic-button\" id=\"custom\">Custom</button>\r\n    <button class=\"generic-button\" id=\"browser\">Browser</button>\r\n</menu>";



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



class $32f441fcddf6868d$export$d9b273488cd8ce6f extends (0, $06463adbb96d13aa$export$d5345f74bf36d494) {
    /**  @type {HTMLButtonElement[]} */ #buttons;
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
        for (const button of this.#buttons)button.disabled = button.id === value;
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "menu",
            classList: "menu"
        };
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($4c9632bbe3b57aaf$exports))));
        this.#buttons = this.querySelectorAll("button");
        this.addEventListener("click", (event)=>{
            if (event.target.tagName.toLowerCase() === "button") (0, $342d8b3f004474be$export$86fbec116b87613f).instance.reportMenuClick(event.target.id);
        }, true);
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-menu", $32f441fcddf6868d$export$d9b273488cd8ce6f);


var $f1cd8b2568a6f54f$exports = {};
$f1cd8b2568a6f54f$exports = "<div class=\"signup__image\"></div>\r\n<div class=\"signup__wrapper\">\r\n    <form class=\"signup__form\">\r\n        <h2>Pick a course.</h2>\r\n        <h1>Sign up today!</h1>\r\n\r\n        <div class=\"signup__form-wrapper\">\r\n            <label class=\"signup__form-label\" for=\"fname\">First Name</label>\r\n            <input class=\"signup__form-input\" type=\"text\" name=\"fname\" id=\"fname\" data-tooltip-offset-y=\"-18\" required=\"\" tabindex=\"1\">\r\n        </div>\r\n        <div class=\"signup__form-wrapper\">\r\n            <label class=\"signup__form-label\" for=\"lname\">Last Name</label>\r\n            <input class=\"signup__form-input\" type=\"text\" name=\"lname\" id=\"lname\" data-tooltip-offset-y=\"-18\" required=\"\" tabindex=\"2\">\r\n        </div>\r\n        <div class=\"signup__form-wrapper\">\r\n            <label class=\"signup__form-label\" for=\"email\">Email</label>\r\n            <input class=\"signup__form-input\" type=\"email\" name=\"email\" id=\"email\" data-tooltip-offset-y=\"-18\" required=\"\" tabindex=\"3\">\r\n        </div>\r\n        <div class=\"signup__form-wrapper--select\">\r\n            <label class=\"signup__form-label\" for=\"course\">Pick a course</label>\r\n            <select class=\"signup__form-select\" name=\"course\" id=\"course\" data-tooltip-offset-y=\"-18\" required=\"\" tabindex=\"4\">\r\n                <option value=\"\">Select...</option>\r\n                <option value=\"html\">HTML</option>\r\n                <option value=\"css\">CSS</option>\r\n                <option value=\"js\">JavaScript</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"signup__form-wrapper--checkbox\">\r\n            <input class=\"signup__form-checkbox\" type=\"checkbox\" name=\"terms\" id=\"terms\" data-tooltip-offset-y=\"-25\" required=\"\" tabindex=\"5\">\r\n            <label class=\"signup__form-label--checkbox\" for=\"terms\">\r\n                I agree to the <a href=\"#\">Terms & Conditions</a>.\r\n            </label>\r\n        </div>\r\n        <button class=\"signup__form-button\" type=\"submit\" tabindex=\"6\">Submit</button>\r\n    </form>\r\n    <div class=\"signup__success\">\r\n        <div class=\"signup__success-content\">\r\n            <div class=\"signup__success-content-svg\">\r\n                <div class=\"tooltip success show\">Success!</div>\r\n                <svg id=\"icon-success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\r\n                    <path class=\"bg-color\" d=\"M8 0a8 8 0 0 0 0 16A8 8 0 0 0 8 0zm4.040178 3.959822l1.616072 1.616071-6.464286 6.464285-1.616072-1.616071L2.34375 7.191964l1.616072-1.616072 3.232143 3.232143z\"></path>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n        <button class=\"signup__success-button\">Back</button>\r\n    </div>\r\n</div>";








class $de6dd8b3b44e1129$export$28c660c63b792dea extends (0, $06463adbb96d13aa$export$d5345f74bf36d494) {
    /** @type {string} */ static MODE_INFO = "info";
    /** @type {string} */ static MODE_SUCCESS = "success";
    /** @type {string} */ static MODE_ERROR = "error";
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
     *
     */ render() {
        super.render(this.config.msg);
        this.prependTo(this.config.targetElement);
        this.style.transform = `translate(${Number.parseInt(this.config.offsetX)}px, ${-this.clientHeight + Number.parseInt(this.config.offsetY)}px)`;
        this.classList.add(this.config.mode, "show");
    }
    /**
     *
     */ destroy() {
        this.parentElement.removeChild(this);
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-tooltip", $de6dd8b3b44e1129$export$28c660c63b792dea);


class $cceaa0965f6dc1b7$export$d8b5cdb5205beabc extends (0, $bdb62bb55cd97d0c$export$763ea9d89dbce745) {
    /**
     * @constructor
     * @param {object} init
     * @comment default values in constructor
     */ constructor(init){
        super();
        this.mode = (0, $de6dd8b3b44e1129$export$28c660c63b792dea).MODE_INFO;
        this.targetElement = document.body;
        this.offsetX = 200;
        this.offsetY = 200;
        this.msg = "Tooltip text here";
        this.populate(init);
    }
}



class $851b5eb68e168251$export$4ee457d816cea81a extends (0, $06463adbb96d13aa$export$d5345f74bf36d494) {
    /** @type {HTMLFormElement} */ #form;
    /**  @type {HTMLObjectElement[]} */ #inputs;
    /** @type {HTMLElement} */ #success;
    /** @type {Tooltip} */ #toolTip;
    /** @type {string} */ #mode;
    /**
     * @constructor
     * @param {ElementConfig} config
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @param {string} value
     */ set mode(value) {
        this.#mode = value;
        this.#form.noValidate = this.#mode === (0, $342d8b3f004474be$export$86fbec116b87613f).MODE_CUSTOM;
        this.#hideInputError();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "signup",
            classList: "signup"
        };
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($f1cd8b2568a6f54f$exports))));
        this.#form = this.querySelector(".signup__form");
        this.#inputs = this.#form.querySelectorAll("input, select");
        this.#success = this.querySelector(".signup__success");
        this.#addListeners();
    }
    /**
     *
     */  #addListeners() {
        this.#form.addEventListener("submit", (event)=>{
            event.preventDefault();
            if (this.#mode === (0, $342d8b3f004474be$export$86fbec116b87613f).MODE_CUSTOM) {
                this.#form.querySelector("button").blur();
                if (this.#validate()) this.#submitForm();
            } else this.#submitForm();
        });
        this.#form.addEventListener("input", ()=>this.#hideInputError(), true);
        this.#success.querySelector("button").addEventListener("click", ()=>this.#hideSuccess());
    }
    /**
     *
     */  #validate() {
        let valid = true;
        this.#form.checkValidity();
        for (const input of this.#inputs)if (!input.validity.valid) {
            valid = false;
            this.#showInputError(input);
            break;
        }
        return valid;
    }
    /**
     * @comment Real scenario: this.#form.submit();
     */  #submitForm() {
        this.#showSuccess();
    }
    /**
     * @param {HTMLObjectElement} input
     */  #showInputError(input1) {
        input1.classList.add("is-invalid");
        this.#addErrorTooltip(input1);
    }
    /**
     *
     */  #hideInputError() {
        for (const input2 of this.#inputs)input2.classList.remove("is-invalid");
        this.#removeTooltip();
    }
    /**
     *
     */  #showSuccess() {
        this.#success.classList.add("show");
    }
    /**
     *
     */  #hideSuccess() {
        this.#success.classList.remove("show");
        this.#reset();
    }
    /**
     *
     */  #reset() {
        for (const input3 of this.#inputs)input3.type === "checkbox" ? input3.checked = false : input3.value = "";
    }
    /**
     * @param {HTMLObjectElement} input
     */  #addErrorTooltip(input4) {
        if (!this.#toolTip) this.#toolTip = new (0, $de6dd8b3b44e1129$export$28c660c63b792dea)(new (0, $cceaa0965f6dc1b7$export$d8b5cdb5205beabc)({
            mode: (0, $de6dd8b3b44e1129$export$28c660c63b792dea).MODE_ERROR,
            targetElement: input4.parentElement,
            msg: input4.validationMessage,
            offsetX: -15,
            offsetY: input4.dataset.tooltipOffsetY
        }));
    }
    /**
     *
     */  #removeTooltip() {
        if (this.#toolTip) this.#toolTip.destroy();
        this.#toolTip = undefined;
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-signup", $851b5eb68e168251$export$4ee457d816cea81a);


class $342d8b3f004474be$export$86fbec116b87613f {
    /** @type {string} */ static MODE_CUSTOM = "custom";
    /** @type {string} */ static MODE_BROWSER = "browser";
    /** @type {App} */ static #instance;
    /**
     * @returns {App} global instance of App
     */ static get instance() {
        if (!this.#instance) this.#instance = new $342d8b3f004474be$export$86fbec116b87613f();
        return this.#instance;
    }
    /** @type {SignUp} */ #signUp;
    /** @type {Menu} */ #menu;
    /**
     * @constructor
     */ constructor(){}
    /**
     * @param {string} value
     */ set mode(value) {
        this.#signUp.mode = value;
        this.#menu.active = value;
    }
    /**
     *
     */ run() {
        const container = document.querySelector("#app-container");
        this.#menu = new (0, $32f441fcddf6868d$export$d9b273488cd8ce6f)().appendTo(container);
        this.#signUp = new (0, $851b5eb68e168251$export$4ee457d816cea81a)().appendTo(container);
        this.mode = $342d8b3f004474be$export$86fbec116b87613f.MODE_CUSTOM;
    }
    /**
     * @param {string} id
     */ reportMenuClick(id) {
        this.mode = id;
    }
}


(0, $342d8b3f004474be$export$86fbec116b87613f).instance.run();


