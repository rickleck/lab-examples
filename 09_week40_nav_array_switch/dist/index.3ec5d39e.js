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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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
parcelRequire.register("bSahE", function(module, exports) {

var $3NbTp = parcelRequire("3NbTp");

var $dx0Ot = parcelRequire("dx0Ot");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? $3NbTp.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || $dx0Ot;
module.exports = isBuffer;

});
parcelRequire.register("3NbTp", function(module, exports) {

var $63NGO = parcelRequire("63NGO");
/** Detect free variable `self`. */ var $2c2f2c5b3ec82fc0$var$freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $2c2f2c5b3ec82fc0$var$root = $63NGO || $2c2f2c5b3ec82fc0$var$freeSelf || Function("return this")();
module.exports = $2c2f2c5b3ec82fc0$var$root;

});
parcelRequire.register("63NGO", function(module, exports) {
/** Detect free variable `global` from Node.js. */ var $4699912b2bf550a6$var$freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
module.exports = $4699912b2bf550a6$var$freeGlobal;

});


parcelRequire.register("dx0Ot", function(module, exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function $9d9efce33d6e4303$var$stubFalse() {
    return false;
}
module.exports = $9d9efce33d6e4303$var$stubFalse;

});


parcelRequire.register("eez0M", function(module, exports) {

var $63NGO = parcelRequire("63NGO");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && $63NGO.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

});

var $3bb07def7debad7e$exports = {};
$3bb07def7debad7e$exports = "<div class=\"container-responsive\">\r\n    <nav>\r\n        <div class=\"navigation__buttons\">\r\n            <a data-href=\"page-array\" class=\"navigation__buttons-logo\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"111\" height=\"55\" viewBox=\"0 0 111 55\">\r\n                    <path class=\"svg-depth\" d=\"M0 47.625l7.9375 7.937501h7.9375V7.9375L7.9375 0v47.625H0\"></path>\r\n                    <path class=\"svg-depth\" d=\"M15.875 47.625l7.9375 7.937501h23.812499V7.9375L39.687499 0v47.625zm0-39.6875l7.9375 7.9375h7.937499V7.9375zm7.9375 15.875h7.937499v15.875H23.8125z\"></path>\r\n                    <path class=\"svg-depth\" d=\"M47.624999 47.625l7.9375 7.937501h23.8125V23.8125l-7.9375-7.9375v31.75zM55.5625 23.8125H63.5v15.875h-7.9375zM55.562499 0l7.9375 7.9375v7.9375h-7.9375z\"></path>\r\n                    <path class=\"svg-depth\" d=\"M79.374999 47.624999l7.9375 7.9375H111.125V7.9375L103.1875 0v47.624999zm0-15.874999l7.9375 7.937499h7.9375V31.75zm7.9375-23.8125h7.9375v15.875h-7.9375z\"></path>\r\n                    <path class=\"svg-text\" d=\"M0 0v47.625h7.9375V0zm15.875 0v7.9375H31.75v7.9375H15.875v31.75h23.8125V0zm7.9375 23.8125H31.75v15.875h-7.9375zM47.360416 0L47.625 47.625h23.8125v-31.75h-15.875L55.47431 0zM55.5625 23.8125H63.5v15.875h-7.9375v-15.875zM79.375 47.625v-7.9375H95.25V31.75H79.375V0h23.8125v47.625zm7.9375-23.8125H95.25V7.9375h-7.9375z\"></path>\r\n                </svg>\r\n            </a>\r\n            <button id=\"nav-toggle\" class=\"navigation__buttons-toggle\">\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n            </button>\r\n        </div>\r\n        <ul class=\"navigation__list\">\r\n            <li class=\"navigation__list-item\"><a data-href=\"page-array\">Array [ ]</a></li>\r\n            <li class=\"navigation__list-item\"><a data-href=\"page-switch\">Switch { }</a></li>\r\n        </ul>\r\n    </nav>\r\n</div>";



class $aaf1807221727ea1$export$763ea9d89dbce745 {
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


class $51ea5997f43e00e5$export$e38207f28c74982d extends HTMLElement {
    /** @type {ElementConfig} */ #config;
    /**
     * @constructor
     * @param {ElementConfig} config optional
     */ constructor(config){
        super();
        this.config = config ? config : new (0, $aaf1807221727ea1$export$763ea9d89dbce745)();
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
        this.config.appendClassList(this.defaults.classList);
    }
    /**
     *
     */ populateFromConfig() {
        this.id = this.config.id;
        for (const className of this.config.classList.split(" "))this.classList.add(className);
    }
    /**
     *
     */ destroy() {
        if (this.parentElement) this.parentElement.removeChild(this);
    }
}



class $489a32f8870ec4f2$export$b8a61e5c71402559 extends (0, $51ea5997f43e00e5$export$e38207f28c74982d) {
    /**  @type {HTMLElement[]} */ #list;
    /** @type {string} */ #listOpenClass = "is-open";
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
        for (const item of this.#items)item.dataset.href === value ? item.classList.add("is-active") : item.classList.remove("is-active");
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
        this.#list = this.querySelector("ul");
        this.#items = this.#list.querySelectorAll("a");
        this.addEventListener("click", (e)=>{
            if (e.target.id === "nav-toggle") this.#toggleList();
            else if (e.target.dataset.href) {
                (0, $342d8b3f004474be$export$86fbec116b87613f).instance.reportNavigationClick(event.target.dataset.href);
                this.#toggleList(true);
            }
        }, true);
        window.addEventListener("resize", ()=>{
            if (window.innerWidth >= 768) this.#list.classList.remove(this.#listOpenClass);
        });
    }
    /**
     * @param {boolean} forceOff default false
     */  #toggleList(forceOff = false) {
        this.#list.classList.contains(this.#listOpenClass) || forceOff ? this.#list.classList.remove(this.#listOpenClass) : this.#list.classList.add(this.#listOpenClass);
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-navigation", $489a32f8870ec4f2$export$b8a61e5c71402559);



class $ebaa68acb0f31e48$export$92ce62e1201c4fc0 {
    /** @type {object}[] */ static pages = [
        {
            id: "page-array",
            names: [
                "Adam",
                "Carl",
                "Christer A",
                "Christer S",
                "Erik N",
                "Ivan",
                "Ivona",
                "Joakim",
                "Johannes",
                "Lars-Erik",
                "Matewos",
                "Miriam",
                "Niklas",
                "Ola",
                "Rickard",
                "Robert", 
            ],
            steps: [
                "Create a new array containing 8 persons. Each person should have the properties name, age and height. At least 3 persons must be taller than 2 meters.",
                "Create another array containing 4 persons, each also having the properties name, age and height.",
                "Combine the two arrays.",
                "Using the filter() method, create a new array that only includes the persons taller than 2 meters.",
                "Using the forEach() method, log all persons taller than 2 meters to the console.", 
            ],
            instruction: "* Click on a stack for more details."
        },
        {
            id: "page-switch",
            steps: [
                "Create a switch that logs the value corresponding to a parameter:",
                "Create another switch corresponding to:", 
            ],
            params: [
                [
                    {
                        param: "0",
                        value: "Nisse"
                    },
                    {
                        param: "1",
                        value: "Per"
                    },
                    {
                        param: "2",
                        value: "Johannes"
                    },
                    {
                        param: "3",
                        value: "Joakim"
                    },
                    {
                        param: "other",
                        value: "Hans"
                    }, 
                ],
                [
                    {
                        param: "0",
                        value: "Ume\xe5"
                    },
                    {
                        param: "1-5",
                        value: "Stockholm"
                    },
                    {
                        param: "6-9",
                        value: "Mora"
                    },
                    {
                        param: "10-14",
                        value: "V\xe4ster\xe5s"
                    },
                    {
                        param: "15-19",
                        value: "G\xf6teborg"
                    },
                    {
                        param: "other",
                        value: "Malm\xf6"
                    }, 
                ], 
            ],
            instruction: "* Input a number."
        }, 
    ];
    /**
     * @param {string} id
     * @returns {object} page copy object
     */ static getPage(id) {
        return $ebaa68acb0f31e48$export$92ce62e1201c4fc0.pages.find((page)=>page.id === id);
    }
}


class $1c2b913514992058$export$6955bcca4cd3539f extends (0, $51ea5997f43e00e5$export$e38207f28c74982d) {
    /**
     * @constructor
     * @param {ElementConfig} config
     */ constructor(config){
        super(config);
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "page",
            classList: "page"
        };
    }
    /**
     * @return {object}
     */ get copy() {
        return (0, $ebaa68acb0f31e48$export$92ce62e1201c4fc0).getPage(this.id);
    }
    /**
     *
     */ render(htmlString = "<h1>Page</h1>") {
        super.render(htmlString);
    }
    /**
     *
     */ destroy() {
        super.destroy();
    }
    /**
     * @param {string} pageId
     * @returns {string} html string
     */ getStepsHTML() {
        let htmlString = ``;
        let counter = 0;
        for (const step of this.copy.steps)htmlString += `<div id="step-${counter += 1}" class="page__step">
                <div class="page__step-text">
                    <span class="page__step-text--number">
                        <p>${counter}</p>
                    </span>
                    <span>
                    ${step}
                    </span>
                </div>
                <div class="page__step-inset"></div>
            </div>`;
        return htmlString;
    }
    /**
     *
     */ addInstruction() {
        const instruction = document.createElement("p");
        instruction.classList.add("page__step-instruction");
        instruction.innerText = this.copy.instruction;
        this.querySelector("#step-1 > .page__step-inset").append(instruction);
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-page", $1c2b913514992058$export$6955bcca4cd3539f);


var $254661b4c3b13288$exports = {};
var $8af21efe281e0216$exports = {};
var $1a563ad9c6f05ecd$exports = {};
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function $1a563ad9c6f05ecd$var$copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
$1a563ad9c6f05ecd$exports = $1a563ad9c6f05ecd$var$copyArray;


var $ffa2eadb9dcf1009$exports = {};
var $16e668db2f26cead$exports = {};
/* Built-in method references for those with the same name as other `lodash` methods. */ var $16e668db2f26cead$var$nativeFloor = Math.floor, $16e668db2f26cead$var$nativeRandom = Math.random;
/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */ function $16e668db2f26cead$var$baseRandom(lower, upper) {
    return lower + $16e668db2f26cead$var$nativeFloor($16e668db2f26cead$var$nativeRandom() * (upper - lower + 1));
}
$16e668db2f26cead$exports = $16e668db2f26cead$var$baseRandom;


/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */ function $ffa2eadb9dcf1009$var$shuffleSelf(array, size) {
    var index = -1, length = array.length, lastIndex = length - 1;
    size = size === undefined ? length : size;
    while(++index < size){
        var rand = $16e668db2f26cead$exports(index, lastIndex), value = array[rand];
        array[rand] = array[index];
        array[index] = value;
    }
    array.length = size;
    return array;
}
$ffa2eadb9dcf1009$exports = $ffa2eadb9dcf1009$var$shuffleSelf;


/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */ function $8af21efe281e0216$var$arrayShuffle(array) {
    return $ffa2eadb9dcf1009$exports($1a563ad9c6f05ecd$exports(array));
}
$8af21efe281e0216$exports = $8af21efe281e0216$var$arrayShuffle;


var $d3747fcf5ef9b09a$exports = {};

var $3467538fef129a00$exports = {};
var $99c540d848926582$exports = {};
var $e6b199c75603c14b$exports = {};
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function $e6b199c75603c14b$var$arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
$e6b199c75603c14b$exports = $e6b199c75603c14b$var$arrayMap;


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */ function $99c540d848926582$var$baseValues(object, props) {
    return $e6b199c75603c14b$exports(props, function(key) {
        return object[key];
    });
}
$99c540d848926582$exports = $99c540d848926582$var$baseValues;


var $ef744bd8d86511cc$exports = {};
var $86758f5571a5af97$exports = {};
var $9c05961765754f82$exports = {};
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function $9c05961765754f82$var$baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
$9c05961765754f82$exports = $9c05961765754f82$var$baseTimes;


var $11319ec804634ce0$exports = {};
var $c2128f6676526315$exports = {};
var $435d6c483e23c745$exports = {};
var $dbf6f7c3d8c73143$exports = {};

var $3NbTp = parcelRequire("3NbTp");
/** Built-in value references. */ var $dbf6f7c3d8c73143$var$Symbol = $3NbTp.Symbol;
$dbf6f7c3d8c73143$exports = $dbf6f7c3d8c73143$var$Symbol;


var $4c64c44862436b3c$exports = {};

/** Used for built-in method references. */ var $4c64c44862436b3c$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $4c64c44862436b3c$var$hasOwnProperty = $4c64c44862436b3c$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $4c64c44862436b3c$var$nativeObjectToString = $4c64c44862436b3c$var$objectProto.toString;
/** Built-in value references. */ var $4c64c44862436b3c$var$symToStringTag = $dbf6f7c3d8c73143$exports ? $dbf6f7c3d8c73143$exports.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $4c64c44862436b3c$var$getRawTag(value) {
    var isOwn = $4c64c44862436b3c$var$hasOwnProperty.call(value, $4c64c44862436b3c$var$symToStringTag), tag = value[$4c64c44862436b3c$var$symToStringTag];
    try {
        value[$4c64c44862436b3c$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $4c64c44862436b3c$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$4c64c44862436b3c$var$symToStringTag] = tag;
        else delete value[$4c64c44862436b3c$var$symToStringTag];
    }
    return result;
}
$4c64c44862436b3c$exports = $4c64c44862436b3c$var$getRawTag;


var $ddc48915e06c4e20$exports = {};
/** Used for built-in method references. */ var $ddc48915e06c4e20$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $ddc48915e06c4e20$var$nativeObjectToString = $ddc48915e06c4e20$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $ddc48915e06c4e20$var$objectToString(value) {
    return $ddc48915e06c4e20$var$nativeObjectToString.call(value);
}
$ddc48915e06c4e20$exports = $ddc48915e06c4e20$var$objectToString;


/** `Object#toString` result references. */ var $435d6c483e23c745$var$nullTag = "[object Null]", $435d6c483e23c745$var$undefinedTag = "[object Undefined]";
/** Built-in value references. */ var $435d6c483e23c745$var$symToStringTag = $dbf6f7c3d8c73143$exports ? $dbf6f7c3d8c73143$exports.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $435d6c483e23c745$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $435d6c483e23c745$var$undefinedTag : $435d6c483e23c745$var$nullTag;
    return $435d6c483e23c745$var$symToStringTag && $435d6c483e23c745$var$symToStringTag in Object(value) ? $4c64c44862436b3c$exports(value) : $ddc48915e06c4e20$exports(value);
}
$435d6c483e23c745$exports = $435d6c483e23c745$var$baseGetTag;


var $dbdf7e568ee85e6d$exports = {};
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function $dbdf7e568ee85e6d$var$isObjectLike(value) {
    return value != null && typeof value == "object";
}
$dbdf7e568ee85e6d$exports = $dbdf7e568ee85e6d$var$isObjectLike;


/** `Object#toString` result references. */ var $c2128f6676526315$var$argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function $c2128f6676526315$var$baseIsArguments(value) {
    return $dbdf7e568ee85e6d$exports(value) && $435d6c483e23c745$exports(value) == $c2128f6676526315$var$argsTag;
}
$c2128f6676526315$exports = $c2128f6676526315$var$baseIsArguments;



/** Used for built-in method references. */ var $11319ec804634ce0$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $11319ec804634ce0$var$hasOwnProperty = $11319ec804634ce0$var$objectProto.hasOwnProperty;
/** Built-in value references. */ var $11319ec804634ce0$var$propertyIsEnumerable = $11319ec804634ce0$var$objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var $11319ec804634ce0$var$isArguments = $c2128f6676526315$exports(function() {
    return arguments;
}()) ? $c2128f6676526315$exports : function(value) {
    return $dbdf7e568ee85e6d$exports(value) && $11319ec804634ce0$var$hasOwnProperty.call(value, "callee") && !$11319ec804634ce0$var$propertyIsEnumerable.call(value, "callee");
};
$11319ec804634ce0$exports = $11319ec804634ce0$var$isArguments;


var $89b9ace3f91e919f$exports = {};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var $89b9ace3f91e919f$var$isArray = Array.isArray;
$89b9ace3f91e919f$exports = $89b9ace3f91e919f$var$isArray;



var $bSahE = parcelRequire("bSahE");
var $c4472a59f483d77b$exports = {};
/** Used as references for various `Number` constants. */ var $c4472a59f483d77b$var$MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var $c4472a59f483d77b$var$reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function $c4472a59f483d77b$var$isIndex(value, length) {
    var type = typeof value;
    length = length == null ? $c4472a59f483d77b$var$MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && $c4472a59f483d77b$var$reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
$c4472a59f483d77b$exports = $c4472a59f483d77b$var$isIndex;


var $8a92d0d1f1192cd4$exports = {};
var $8dd9ac83705c64f6$exports = {};

var $44995e3dd95e0a2e$exports = {};
/** Used as references for various `Number` constants. */ var $44995e3dd95e0a2e$var$MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function $44995e3dd95e0a2e$var$isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= $44995e3dd95e0a2e$var$MAX_SAFE_INTEGER;
}
$44995e3dd95e0a2e$exports = $44995e3dd95e0a2e$var$isLength;



/** `Object#toString` result references. */ var $8dd9ac83705c64f6$var$argsTag = "[object Arguments]", $8dd9ac83705c64f6$var$arrayTag = "[object Array]", $8dd9ac83705c64f6$var$boolTag = "[object Boolean]", $8dd9ac83705c64f6$var$dateTag = "[object Date]", $8dd9ac83705c64f6$var$errorTag = "[object Error]", $8dd9ac83705c64f6$var$funcTag = "[object Function]", $8dd9ac83705c64f6$var$mapTag = "[object Map]", $8dd9ac83705c64f6$var$numberTag = "[object Number]", $8dd9ac83705c64f6$var$objectTag = "[object Object]", $8dd9ac83705c64f6$var$regexpTag = "[object RegExp]", $8dd9ac83705c64f6$var$setTag = "[object Set]", $8dd9ac83705c64f6$var$stringTag = "[object String]", $8dd9ac83705c64f6$var$weakMapTag = "[object WeakMap]";
var $8dd9ac83705c64f6$var$arrayBufferTag = "[object ArrayBuffer]", $8dd9ac83705c64f6$var$dataViewTag = "[object DataView]", $8dd9ac83705c64f6$var$float32Tag = "[object Float32Array]", $8dd9ac83705c64f6$var$float64Tag = "[object Float64Array]", $8dd9ac83705c64f6$var$int8Tag = "[object Int8Array]", $8dd9ac83705c64f6$var$int16Tag = "[object Int16Array]", $8dd9ac83705c64f6$var$int32Tag = "[object Int32Array]", $8dd9ac83705c64f6$var$uint8Tag = "[object Uint8Array]", $8dd9ac83705c64f6$var$uint8ClampedTag = "[object Uint8ClampedArray]", $8dd9ac83705c64f6$var$uint16Tag = "[object Uint16Array]", $8dd9ac83705c64f6$var$uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var $8dd9ac83705c64f6$var$typedArrayTags = {};
$8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$float32Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$float64Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$int8Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$int16Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$int32Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$uint8Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$uint8ClampedTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$uint16Tag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$uint32Tag] = true;
$8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$argsTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$arrayTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$arrayBufferTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$boolTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$dataViewTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$dateTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$errorTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$funcTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$mapTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$numberTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$objectTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$regexpTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$setTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$stringTag] = $8dd9ac83705c64f6$var$typedArrayTags[$8dd9ac83705c64f6$var$weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function $8dd9ac83705c64f6$var$baseIsTypedArray(value) {
    return $dbdf7e568ee85e6d$exports(value) && $44995e3dd95e0a2e$exports(value.length) && !!$8dd9ac83705c64f6$var$typedArrayTags[$435d6c483e23c745$exports(value)];
}
$8dd9ac83705c64f6$exports = $8dd9ac83705c64f6$var$baseIsTypedArray;


var $98853ab7e8d8b327$exports = {};
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function $98853ab7e8d8b327$var$baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
$98853ab7e8d8b327$exports = $98853ab7e8d8b327$var$baseUnary;



var $eez0M = parcelRequire("eez0M");
/* Node.js helper references. */ var $8a92d0d1f1192cd4$var$nodeIsTypedArray = $eez0M && $eez0M.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var $8a92d0d1f1192cd4$var$isTypedArray = $8a92d0d1f1192cd4$var$nodeIsTypedArray ? $98853ab7e8d8b327$exports($8a92d0d1f1192cd4$var$nodeIsTypedArray) : $8dd9ac83705c64f6$exports;
$8a92d0d1f1192cd4$exports = $8a92d0d1f1192cd4$var$isTypedArray;


/** Used for built-in method references. */ var $86758f5571a5af97$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $86758f5571a5af97$var$hasOwnProperty = $86758f5571a5af97$var$objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function $86758f5571a5af97$var$arrayLikeKeys(value, inherited) {
    var isArr = $89b9ace3f91e919f$exports(value), isArg = !isArr && $11319ec804634ce0$exports(value), isBuff = !isArr && !isArg && $bSahE(value), isType = !isArr && !isArg && !isBuff && $8a92d0d1f1192cd4$exports(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? $9c05961765754f82$exports(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || $86758f5571a5af97$var$hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    $c4472a59f483d77b$exports(key, length)))) result.push(key);
    return result;
}
$86758f5571a5af97$exports = $86758f5571a5af97$var$arrayLikeKeys;


var $78f94e71f0bde0fe$exports = {};
var $cf32ca27958051ae$exports = {};
/** Used for built-in method references. */ var $cf32ca27958051ae$var$objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function $cf32ca27958051ae$var$isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || $cf32ca27958051ae$var$objectProto;
    return value === proto;
}
$cf32ca27958051ae$exports = $cf32ca27958051ae$var$isPrototype;


var $ac9b98fc108e87a8$exports = {};
var $47d92ad3dcc33ecc$exports = {};
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function $47d92ad3dcc33ecc$var$overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
$47d92ad3dcc33ecc$exports = $47d92ad3dcc33ecc$var$overArg;


/* Built-in method references for those with the same name as other `lodash` methods. */ var $ac9b98fc108e87a8$var$nativeKeys = $47d92ad3dcc33ecc$exports(Object.keys, Object);
$ac9b98fc108e87a8$exports = $ac9b98fc108e87a8$var$nativeKeys;


/** Used for built-in method references. */ var $78f94e71f0bde0fe$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $78f94e71f0bde0fe$var$hasOwnProperty = $78f94e71f0bde0fe$var$objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $78f94e71f0bde0fe$var$baseKeys(object) {
    if (!$cf32ca27958051ae$exports(object)) return $ac9b98fc108e87a8$exports(object);
    var result = [];
    for(var key in Object(object))if ($78f94e71f0bde0fe$var$hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
$78f94e71f0bde0fe$exports = $78f94e71f0bde0fe$var$baseKeys;


var $1d6e8a2b7a5f566c$exports = {};
var $f00f78611a088c39$exports = {};

var $5bbfd11603b397ed$exports = {};
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function $5bbfd11603b397ed$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
$5bbfd11603b397ed$exports = $5bbfd11603b397ed$var$isObject;


/** `Object#toString` result references. */ var $f00f78611a088c39$var$asyncTag = "[object AsyncFunction]", $f00f78611a088c39$var$funcTag = "[object Function]", $f00f78611a088c39$var$genTag = "[object GeneratorFunction]", $f00f78611a088c39$var$proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function $f00f78611a088c39$var$isFunction(value) {
    if (!$5bbfd11603b397ed$exports(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = $435d6c483e23c745$exports(value);
    return tag == $f00f78611a088c39$var$funcTag || tag == $f00f78611a088c39$var$genTag || tag == $f00f78611a088c39$var$asyncTag || tag == $f00f78611a088c39$var$proxyTag;
}
$f00f78611a088c39$exports = $f00f78611a088c39$var$isFunction;



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function $1d6e8a2b7a5f566c$var$isArrayLike(value) {
    return value != null && $44995e3dd95e0a2e$exports(value.length) && !$f00f78611a088c39$exports(value);
}
$1d6e8a2b7a5f566c$exports = $1d6e8a2b7a5f566c$var$isArrayLike;


/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function $ef744bd8d86511cc$var$keys(object) {
    return $1d6e8a2b7a5f566c$exports(object) ? $86758f5571a5af97$exports(object) : $78f94e71f0bde0fe$exports(object);
}
$ef744bd8d86511cc$exports = $ef744bd8d86511cc$var$keys;


/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */ function $3467538fef129a00$var$values(object) {
    return object == null ? [] : $99c540d848926582$exports(object, $ef744bd8d86511cc$exports(object));
}
$3467538fef129a00$exports = $3467538fef129a00$var$values;


/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */ function $d3747fcf5ef9b09a$var$baseShuffle(collection) {
    return $ffa2eadb9dcf1009$exports($3467538fef129a00$exports(collection));
}
$d3747fcf5ef9b09a$exports = $d3747fcf5ef9b09a$var$baseShuffle;



/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */ function $254661b4c3b13288$var$shuffle(collection) {
    var func = $89b9ace3f91e919f$exports(collection) ? $8af21efe281e0216$exports : $d3747fcf5ef9b09a$exports;
    return func(collection);
}
$254661b4c3b13288$exports = $254661b4c3b13288$var$shuffle;


var $48ca3ab83437dbe2$exports = {};

var $9aa877ba570b6e26$exports = {};
var $4004a92a20ff1681$exports = {};
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function $4004a92a20ff1681$var$eq(value, other) {
    return value === other || value !== value && other !== other;
}
$4004a92a20ff1681$exports = $4004a92a20ff1681$var$eq;





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function $9aa877ba570b6e26$var$isIterateeCall(value, index, object) {
    if (!$5bbfd11603b397ed$exports(object)) return false;
    var type = typeof index;
    if (type == "number" ? $1d6e8a2b7a5f566c$exports(object) && $c4472a59f483d77b$exports(index, object.length) : type == "string" && index in object) return $4004a92a20ff1681$exports(object[index], value);
    return false;
}
$9aa877ba570b6e26$exports = $9aa877ba570b6e26$var$isIterateeCall;


var $d96731589b0a5840$exports = {};
var $c03b04300399f864$exports = {};
var $280bb2262df5bb54$exports = {};
var $b81b1af77d4754cb$exports = {};
/** Used to match a single whitespace character. */ var $b81b1af77d4754cb$var$reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function $b81b1af77d4754cb$var$trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && $b81b1af77d4754cb$var$reWhitespace.test(string.charAt(index)));
    return index;
}
$b81b1af77d4754cb$exports = $b81b1af77d4754cb$var$trimmedEndIndex;


/** Used to match leading whitespace. */ var $280bb2262df5bb54$var$reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function $280bb2262df5bb54$var$baseTrim(string) {
    return string ? string.slice(0, $b81b1af77d4754cb$exports(string) + 1).replace($280bb2262df5bb54$var$reTrimStart, "") : string;
}
$280bb2262df5bb54$exports = $280bb2262df5bb54$var$baseTrim;



var $e3d0dde0fc5829c1$exports = {};


/** `Object#toString` result references. */ var $e3d0dde0fc5829c1$var$symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function $e3d0dde0fc5829c1$var$isSymbol(value) {
    return typeof value == "symbol" || $dbdf7e568ee85e6d$exports(value) && $435d6c483e23c745$exports(value) == $e3d0dde0fc5829c1$var$symbolTag;
}
$e3d0dde0fc5829c1$exports = $e3d0dde0fc5829c1$var$isSymbol;


/** Used as references for various `Number` constants. */ var $c03b04300399f864$var$NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var $c03b04300399f864$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var $c03b04300399f864$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var $c03b04300399f864$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var $c03b04300399f864$var$freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function $c03b04300399f864$var$toNumber(value) {
    if (typeof value == "number") return value;
    if ($e3d0dde0fc5829c1$exports(value)) return $c03b04300399f864$var$NAN;
    if ($5bbfd11603b397ed$exports(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = $5bbfd11603b397ed$exports(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = $280bb2262df5bb54$exports(value);
    var isBinary = $c03b04300399f864$var$reIsBinary.test(value);
    return isBinary || $c03b04300399f864$var$reIsOctal.test(value) ? $c03b04300399f864$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $c03b04300399f864$var$reIsBadHex.test(value) ? $c03b04300399f864$var$NAN : +value;
}
$c03b04300399f864$exports = $c03b04300399f864$var$toNumber;


/** Used as references for various `Number` constants. */ var $d96731589b0a5840$var$INFINITY = 1 / 0, $d96731589b0a5840$var$MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function $d96731589b0a5840$var$toFinite(value) {
    if (!value) return value === 0 ? value : 0;
    value = $c03b04300399f864$exports(value);
    if (value === $d96731589b0a5840$var$INFINITY || value === -$d96731589b0a5840$var$INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * $d96731589b0a5840$var$MAX_INTEGER;
    }
    return value === value ? value : 0;
}
$d96731589b0a5840$exports = $d96731589b0a5840$var$toFinite;


/** Built-in method references without a dependency on `root`. */ var $48ca3ab83437dbe2$var$freeParseFloat = parseFloat;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $48ca3ab83437dbe2$var$nativeMin = Math.min, $48ca3ab83437dbe2$var$nativeRandom = Math.random;
/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */ function $48ca3ab83437dbe2$var$random(lower, upper, floating) {
    if (floating && typeof floating != "boolean" && $9aa877ba570b6e26$exports(lower, upper, floating)) upper = floating = undefined;
    if (floating === undefined) {
        if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined;
        } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined;
        }
    }
    if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
    } else {
        lower = $d96731589b0a5840$exports(lower);
        if (upper === undefined) {
            upper = lower;
            lower = 0;
        } else upper = $d96731589b0a5840$exports(upper);
    }
    if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
    }
    if (floating || lower % 1 || upper % 1) {
        var rand = $48ca3ab83437dbe2$var$nativeRandom();
        return $48ca3ab83437dbe2$var$nativeMin(lower + rand * (upper - lower + $48ca3ab83437dbe2$var$freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
    }
    return $16e668db2f26cead$exports(lower, upper);
}
$48ca3ab83437dbe2$exports = $48ca3ab83437dbe2$var$random;






class $de6dd8b3b44e1129$export$28c660c63b792dea extends (0, $51ea5997f43e00e5$export$e38207f28c74982d) {
    /** @type {string} */ static MODE_INFO = "info";
    /** @type {string} */ static MODE_SUCCESS = "success";
    /** @type {string} */ static MODE_ERROR = "error";
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
        document.body.appendChild(this);
        this.classList.add(this.config.mode, "show");
        this.style.left = this.globalPosition.left + "px";
        this.style.top = this.globalPosition.top + "px";
        if (this.offsetLeft + this.offsetWidth > document.body.clientWidth) {
            this.style.marginLeft = this.config.offsetX - this.offsetWidth + "px";
            this.classList.add("left");
        }
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


class $cceaa0965f6dc1b7$export$d8b5cdb5205beabc extends (0, $aaf1807221727ea1$export$763ea9d89dbce745) {
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




class $f4aed3f945d4d569$export$7c0a0d9cc4225390 extends (0, $1c2b913514992058$export$6955bcca4cd3539f) {
    /** @type {string[]} */ #names;
    /** @type {object[]} */ #stepArrays = [];
    /** @type {Tooltip} */ #tooltip;
    /**
     * @constructor
     * @param {ElementConfig} config
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "page-array",
            classList: "page page-array"
        };
    }
    /**
     *
     */ render() {
        this.#buildHTML();
        this.#names = (0, (/*@__PURE__*/$parcel$interopDefault($254661b4c3b13288$exports)))(this.copy.names);
        this.addEventListener("click", this, true);
        window.addEventListener("resize", this);
    }
    /**
     *
     */ destroy() {
        this.removeEventListener("click", this, true);
        window.removeEventListener("resize", this);
        this.#removeTooltip();
        super.destroy();
    }
    /**
     * @param {Event} e
     */ handleEvent(e) {
        if (e.type === "click") switch(e.target.dataset.type){
            case "step":
                this.#goToStep(parseInt(e.target.dataset.step));
                break;
            case "stack":
                this.#toggleTooltip(e.target);
                break;
            case "reset":
                (0, $342d8b3f004474be$export$86fbec116b87613f).instance.goToPage(this.id);
                break;
        }
        else if (e.type === "resize") this.#removeTooltip();
    }
    /**
     * @returns {string}
     */  #buildHTML() {
        super.render(this.getStepsHTML());
        this.append(this.#getButton([
            "page-btn-reset"
        ], {
            type: "reset"
        }, "Reset"));
        let counter = 0;
        for (const step of this.querySelectorAll(".page__step"))step.querySelector(".page__step-inset").append(this.#getButton([
            "page__step-btn"
        ], {
            type: "step",
            step: counter += 1
        }, "Generate"));
    }
    /**
     * @returns {HTMLButtonElement}
     */  #getButton(classes, dataset, text) {
        let btn = document.createElement("button");
        btn.classList.add(...classes);
        Object.assign(btn.dataset, dataset);
        btn.innerHTML = text;
        return btn;
    }
    /**
     * @param {number} step
     */  #goToStep(step1) {
        for(let i = this.#stepArrays.length; i < step1; i++)this.#drawStep(i + 1);
        this.#scrollToStep(step1);
    }
    /**
     * @param {number} step
     */  #scrollToStep(step2) {
        this.querySelector("#step-" + step2).scrollIntoView({
            behavior: "smooth"
        });
    }
    /**
     * @param {number} step
     */  #drawStep(step3) {
        step3 <= 4 ? this.#generateStepArray(step3) : this.#drawStepLog();
        this.querySelector("#step-" + step3 + " > .page__step-inset > button").classList.add("is-hidden");
        this.querySelector('button[data-type="reset"]').classList.remove("is-hidden");
        this.#removeTooltip();
        if (step3 === 1) this.addInstruction();
    }
    /**
     * @param {number} step
     */  #generateStepArray(step4) {
        let arr;
        switch(step4){
            case 1:
                arr = this.#createArray(8, 3);
                break;
            case 2:
                arr = this.#createArray(4);
                break;
            case 3:
                arr = [
                    ...this.#stepArrays[0],
                    ...this.#stepArrays[1]
                ];
                break;
            case 4:
                arr = this.#stepArrays[2].filter((person)=>person.height > 200);
                break;
        }
        this.#stepArrays.push(arr);
        this.#drawArray(step4, arr);
    }
    /**
     * @param {number} length of array
     * @param {number} forceHeight number of persons that should be taller than 200 cm
     * @returns {object[]}
     */  #createArray(length, forceHeight = 0) {
        let arr1 = [];
        for(let i1 = 0; i1 < length; i1++)arr1.push({
            name: this.#names.shift(),
            age: (0, (/*@__PURE__*/$parcel$interopDefault($48ca3ab83437dbe2$exports)))(18, 99),
            height: i1 < forceHeight ? (0, (/*@__PURE__*/$parcel$interopDefault($48ca3ab83437dbe2$exports)))(201, 220) : (0, (/*@__PURE__*/$parcel$interopDefault($48ca3ab83437dbe2$exports)))(140, 220)
        });
        return (0, (/*@__PURE__*/$parcel$interopDefault($254661b4c3b13288$exports)))(arr1);
    }
    /**
     * @param {number} step
     * @param {object[]} arr
     */  #drawArray(step5, arr2) {
        let classBase = "page-array__chart";
        const chart = document.createElement("div");
        chart.classList.add(classBase);
        this.querySelector("#step-" + step5 + " > .page__step-inset").append(chart);
        for(let i2 = 0; i2 < arr2.length; i2++){
            let className = classBase + "-stack";
            let stack = document.createElement("div");
            stack.classList.add(className);
            stack.dataset.type = "stack";
            Object.assign(stack.dataset, arr2[i2]);
            chart.append(stack);
            let graphic = document.createElement("div");
            className += "-graphic";
            graphic.classList.add(className);
            graphic.style.height = arr2[i2].height + "px";
            stack.append(graphic);
            let span = document.createElement("span");
            className += "-span";
            span.classList.add(className + "--top");
            span.innerHTML = "<p>" + i2 + "</p>";
            graphic.append(span);
            span = document.createElement("span");
            span.classList.add(className + "--bottom");
            span.innerHTML = (arr2[i2].height / 100).toFixed(2) + " m";
            graphic.append(span);
        }
    }
    /**
     *
     */  #drawStepLog() {
        this.#stepArrays[3].forEach((element)=>{
            console.log(element);
        });
        const con = document.createElement("div");
        con.classList.add("page-array__console");
        this.querySelector("#step-5 > .page__step-inset").append(con);
        let htmlString = "";
        for (const person of this.#stepArrays.pop())htmlString += `<p>{<span class="key">name</span>: 
                <span class="value--string">'${person.name}'</span>, 
                <span class="key">age</span>: 
                <span class="value--number">${person.age}</span>, 
                <span class="key">height</span>: 
                <span class="value--number">${person.height}</span>}</p>`;
        con.innerHTML = htmlString;
    }
    /**
     * @param {HTMLElement} input
     */  #toggleTooltip(target) {
        if (this.#tooltip && this.#tooltip.targetElement === target) this.#removeTooltip();
        else {
            this.#removeTooltip();
            this.#tooltip = new (0, $de6dd8b3b44e1129$export$28c660c63b792dea)(new (0, $cceaa0965f6dc1b7$export$d8b5cdb5205beabc)({
                mode: (0, $de6dd8b3b44e1129$export$28c660c63b792dea).MODE_INFO,
                targetElement: target,
                msg: target.dataset.name + ", " + target.dataset.age + " y/o",
                offsetX: target.offsetWidth * 0.5,
                offsetY: target.offsetHeight - target.dataset.height - 10
            }));
        }
    }
    /**
     *
     */  #removeTooltip() {
        if (this.#tooltip) this.#tooltip.destroy();
        this.#tooltip = undefined;
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-page-array", $f4aed3f945d4d569$export$7c0a0d9cc4225390);



class $e3f1f6b65e30fb2a$export$ea0bc0ec1649be89 extends (0, $1c2b913514992058$export$6955bcca4cd3539f) {
    /**
     * @constructor
     * @param {ElementConfig} config
     */ constructor(config){
        super(config);
        this.render();
    }
    /**
     * @returns {object}
     */ get defaults() {
        return {
            id: "page-switch",
            classList: "page page-switch"
        };
    }
    /**
     *
     */ render() {
        this.#buildHTML();
        this.addEventListener("input", this, true);
    }
    /**
     *
     */ destroy() {
        this.removeEventListener("input", this, true);
        super.destroy();
    }
    /**
     * @param {Event} e
     */ handleEvent(e) {
        if (e.type === "input" && e.target.dataset.step) this.#processInput(e.target.dataset.step, e.target.value);
    }
    /**
     *
     */  #buildHTML() {
        super.render(this.getStepsHTML());
        let counter = 0;
        for (const step of this.querySelectorAll(".page__step")){
            counter += 1;
            let inset = step.querySelector(".page__step-inset");
            inset.append(this.#getStepParams(counter));
            inset.append(this.#getStepInput(counter));
        }
        this.addInstruction();
    }
    /**
     * @param {number} step
     * @returns {HTMLInputElement}
     */  #getStepInput(step1) {
        const input = document.createElement("input");
        input.type = "number";
        input.dataset.step = step1;
        return input;
    }
    /**
     * @param {number} step
     * @returns {HTMLElement}
     */  #getStepParams(step2) {
        const container = document.createElement("div");
        container.classList.add("page-switch__params");
        container.id = "params-" + step2;
        for (const param of this.copy.params[step2 - 1]){
            let row = document.createElement("div");
            row.classList.add("page-switch__params-row");
            container.append(row);
            let span = document.createElement("span");
            span.innerText = param.param + ":";
            row.append(span);
            span = document.createElement("span");
            span.innerText = param.value;
            row.append(span);
        }
        return container;
    }
    /**
     * @param {string} step
     * @param {string} value
     */  #processInput(step3, value) {
        const valid = ()=>!Number.isNaN(value) && !Number.isNaN(parseFloat(value));
        valid() ? this.#processParam(+step3, +value) : this.#setSelected(+step3);
    }
    /**
     * @param {number} step
     * @param {number} value
     */  #processParam(step4, value1) {
        let index;
        if (step4 === 1) switch(true){
            case value1 >= 0 && value1 <= 3 && Number.isInteger(value1):
                index = value1;
                break;
            default:
                index = 4;
                break;
        }
        else switch(true){
            case value1 < 0:
                index = 5;
                break;
            case value1 == 0:
                index = 0;
                break;
            case value1 <= 5:
                index = 1;
                break;
            case value1 <= 9:
                index = 2;
                break;
            case value1 <= 14:
                index = 3;
                break;
            case value1 <= 19:
                index = 4;
                break;
            default:
                index = 5;
                break;
        }
        this.#setOutput(step4, index);
    }
    /**
     * @param {number} step
     * @param {number} index
     */  #setOutput(step5, index1) {
        let valuePair = this.copy.params[step5 - 1][index1];
        if (valuePair !== undefined) console.log(valuePair.value);
        this.#setSelected(step5, index1);
    }
    /**
     * @param {number} step
     * @param {number} index
     */  #setSelected(step6, index2) {
        const rows = this.querySelector("#step-" + step6).querySelectorAll(".page-switch__params-row");
        for(let i = 0; i < rows.length; i++)i === index2 ? rows[i].classList.add("selected") : rows[i].classList.remove("selected");
    }
}
/**
 * @comment Register as custom html-element
 */ window.customElements.define("component-page-switch", $e3f1f6b65e30fb2a$export$ea0bc0ec1649be89);


class $3962eb24df2008d6$export$c717c2ee03fc6c49 {
    /**
     * @param {string} id
     */ static getPage(id) {
        switch(id){
            case "page-array":
                return new (0, $f4aed3f945d4d569$export$7c0a0d9cc4225390)();
            case "page-switch":
                return new (0, $e3f1f6b65e30fb2a$export$ea0bc0ec1649be89)();
            default:
                return new (0, $1c2b913514992058$export$6955bcca4cd3539f)();
        }
    }
}


class $342d8b3f004474be$export$86fbec116b87613f {
    /** @type {App} */ static #instance;
    /**
     * @returns {App} global instance of App
     */ static get instance() {
        if (!this.#instance) this.#instance = new $342d8b3f004474be$export$86fbec116b87613f();
        return this.#instance;
    }
    /** @type {Navigation} */ #navigation;
    /** @type {Page} */ #currentPage;
    /**
     * @constructor
     */ constructor(){}
    /**
     * @param {string} id
     */ set activePage(id) {
        this.#navigation.active = id;
    }
    /**
     *
     */ run() {
        this.#navigation = new (0, $489a32f8870ec4f2$export$b8a61e5c71402559)().prependTo(document.body);
        //Shortcut for dev
        const page = new URLSearchParams(document.location.search).get("page");
        this.goToPage(page === null ? "page-array" : "page-" + page);
    }
    /**
     * @param {string} id
     */ goToPage(id) {
        if (this.#currentPage) this.#currentPage.destroy();
        this.#currentPage = (0, $3962eb24df2008d6$export$c717c2ee03fc6c49).getPage(id);
        document.querySelector("#page-container").appendChild(this.#currentPage);
        this.activePage = id;
        window.scrollTo(0, 0);
    }
    /**
     * @param {string} id
     */ reportNavigationClick(id) {
        this.goToPage(id);
    }
}


(0, $342d8b3f004474be$export$86fbec116b87613f).instance.run();


