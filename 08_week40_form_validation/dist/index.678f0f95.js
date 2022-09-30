function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $f1cd8b2568a6f54f$exports = {};
$f1cd8b2568a6f54f$exports = "<div class=\"signup__image\">-</div>\r\n<form class=\"signup__form\" action=\"\" novalidate=\"\">\r\n    <h2>Pick a course.</h2>\r\n    <h1>Sign up today!</h1>\r\n\r\n    <div class=\"signup__form-wrapper\">\r\n        <label class=\"signup__form-label\" for=\"fname\">First Name</label>\r\n        <input class=\"signup__form-field\" type=\"text\" name=\"fname\" id=\"fname\" required=\"\" tabindex=\"1\">\r\n    </div>\r\n    <div class=\"signup__form-wrapper\">\r\n        <label class=\"signup__form-label\" for=\"lname\">Last Name</label>\r\n        <input class=\"signup__form-field\" type=\"text\" name=\"lname\" id=\"lname\" required=\"\" tabindex=\"2\">\r\n    </div>\r\n    <div class=\"signup__form-wrapper\">\r\n        <label class=\"signup__form-label\" for=\"email\">Email</label>\r\n        <input class=\"signup__form-field\" type=\"email\" name=\"email\" id=\"email\" required=\"\" tabindex=\"3\">\r\n    </div>\r\n    <div class=\"signup__form-wrapper--select\">\r\n        <label class=\"signup__form-label\" for=\"course\">Pick a course</label>\r\n        <select class=\"signup__form-select\" name=\"course\" id=\"course\" required=\"\" tabindex=\"4\">\r\n            <option value=\"\">Select...</option>\r\n            <option value=\"html\">HTML</option>\r\n            <option value=\"css\">CSS</option>\r\n            <option value=\"js\">JavaScript</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"signup__form-wrapper--checkbox\">\r\n        <input class=\"signup__form-checkbox\" type=\"checkbox\" name=\"terms\" id=\"terms\" required=\"\">\r\n        <label class=\"signup__form-label--checkbox\" for=\"terms\" tabindex=\"5\">\r\n            I agree to the <a href=\"#\">Terms & Conditions</a>.\r\n        </label>\r\n    </div>\r\n    <button class=\"signup__form-button\" type=\"submit\" tabindex=\"6\">Submit</button>\r\n</form>";


class $fefc51efb21ae4da$export$763ea9d89dbce745 {
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
     * @param {string | string[]} value array or string of space separated class names
     */ addClassList(value) {
        if (value !== undefined && typeof value === "string") value = value.split(" ");
        this.classList = value;
    }
    /**
     * @param {object} init
     */ populate(init) {
        this.id = init.id;
        this.addClassList(init.classList);
        this.options = init.options;
    }
}


class $06463adbb96d13aa$export$d5345f74bf36d494 extends HTMLElement {
    /** @type {ElementConfig} */ #config;
    /**
     * @constructor
     * @param {ElementConfig} config optional
     */ constructor(config){
        super();
        this.config = config ? config : this.createConfig();
        this.#populateFromConfig();
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
     *
     * @returns {ElementConfig}
     */ createConfig() {
        //Creates empty config if this method is not overridden
        return new (0, $fefc51efb21ae4da$export$763ea9d89dbce745)();
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
     */  #populateFromConfig() {
        if (this.config.id !== undefined) this.id = this.config.id;
        if (this.config.classList !== undefined) for (const className of this.config.classList)this.classList.add(className);
    }
}



class $851b5eb68e168251$export$4ee457d816cea81a extends (0, $06463adbb96d13aa$export$d5345f74bf36d494) {
    /** @type {HTMLFormElement} */ #form;
    /**  @type {HTMLObjectElement[]} */ #inputs;
    /**
     * @constructor
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     *
     * @returns {ElementConfig}
     * Is created if no config is passed to the constructor
     */ createConfig() {
        return new (0, $fefc51efb21ae4da$export$763ea9d89dbce745)({
            id: "signup",
            classList: "signup"
        });
    }
    /**
     *
     */ render() {
        super.render((0, (/*@__PURE__*/$parcel$interopDefault($f1cd8b2568a6f54f$exports))));
        this.#form = this.querySelector("form");
        this.#inputs = this.#form.querySelectorAll("input, select");
        this.#addFormListeners();
    }
    /**
     *
     */  #addFormListeners() {
        this.#form.addEventListener("submit", (event)=>{
            event.preventDefault();
            this.#form.checkValidity();
            let formIsValid = true;
            for (const input of this.#inputs){
                formIsValid = input.validity.valid;
                if (!formIsValid) {
                    this.#showInputError(input);
                    break;
                }
            }
            if (formIsValid) this.#form.submit();
        });
        this.#form.addEventListener("input", (event)=>{
            this.#hideInputError(event.target);
        }, true);
    }
    /**
     * @param {HTMLObjectElement} input
     */  #showInputError(input) {
        input.classList.add("is-invalid");
        console.log(input.validationMessage);
    }
    /**
     * @param {HTMLObjectElement} input
     */  #hideInputError(input1) {
        input1.classList.remove("is-invalid");
    }
}
//Register as custom html-element
window.customElements.define("sign-up", $851b5eb68e168251$export$4ee457d816cea81a);


class $342d8b3f004474be$export$86fbec116b87613f {
    /**
     * @constructor
     */ constructor(){}
    /**
     *
     */ run() {
        new (0, $851b5eb68e168251$export$4ee457d816cea81a)().appendTo(document.querySelector("main"));
    }
}


let $e7247c60a660cf0b$export$729c8b7179294ba = new (0, $342d8b3f004474be$export$86fbec116b87613f)().run();


