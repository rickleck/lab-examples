// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jQVXF":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var _app = require("./core/app/app");
(0, _app.App).instance.run();

},{"./core/app/app":"ktvYM"}],"ktvYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var _game = require("../../components/game/game");
var _gameService = require("../services/game/game-service");
class App {
    /** @type {App} */ static #instance;
    /**
     * @returns {App} global instance of App
     */ static get instance() {
        if (!this.#instance) this.#instance = new App();
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
        this.#gameService = new (0, _gameService.GameService)(devMode);
        this.#game = new (0, _game.Game)();
        document.querySelector("main").appendChild(this.#game);
        this.#game.render();
    }
}

},{"../../components/game/game":"ingQG","../services/game/game-service":"74rdk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ingQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _gameHtml = require("bundle-text:./game.html");
var _gameHtmlDefault = parcelHelpers.interopDefault(_gameHtml);
var _app = require("../../core/app/app");
var _constants = require("../../core/constants/constants");
var _elementConfig = require("../../core/element/config/element-config");
var _customElement = require("../../core/element/custom-element");
var _playerVo = require("../../core/services/game/vo/player-vo");
var _tooltipconfig = require("../tooltip/config/tooltipconfig");
var _tooltip = require("../tooltip/tooltip");
var _card = require("./card/card");
var _hud = require("./hud/hud");
var _overlay = require("./overlay/overlay");
class Game extends (0, _customElement.CustomElement) {
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
        super.render((0, _gameHtmlDefault.default));
        this.#createHud((0, _constants.Constants).GAME.USER, "YOU").appendTo(this);
        this.#createHud((0, _constants.Constants).GAME.COMPUTER, "WOPR").prependTo(this);
        this.#setupDealButton();
        this.#toggleDealButton(false);
        this.#setupHelpButton();
        this.#piles.push(this.#btnDeal);
        this.#piles.push(this.querySelector("#slot-pile-" + (0, _constants.Constants).GAME.COMPUTER));
        this.#warImage = new Image();
        this.#warImage.src = require("../../../../assets/gif/war.gif");
        this.#overlayStart = this.#createOverlay((0, _constants.Constants).GAME.OVERLAY.START);
    }
    /**
     *
     */ newGame() {
        this.#toggleLoader(true);
        this.#resetGame();
        (0, _app.App).instance.gameService.setupNewGame().then((pileSize)=>this.#gameReady(pileSize)).catch((error)=>{
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
        this.#updateHud((0, _constants.Constants).GAME.COMPUTER, pileSize);
        this.#updateHud((0, _constants.Constants).GAME.USER, pileSize);
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
        this.#btnDeal = this.querySelector("#slot-pile-" + (0, _constants.Constants).GAME.USER);
        this.#btnDeal.addEventListener("click", ()=>{
            this.#toggleDealButton(false);
            this.#toggleTooltip(false);
            (0, _app.App).instance.gameService.playTurn().then((result)=>{
                if (result) this.#drawTurnResult(result);
                else this.#toggleDealButton(true);
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
            this.#overlayWar = this.#createOverlay((0, _constants.Constants).GAME.OVERLAY.WAR, null, this.#warImage);
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
        this.#updateHud((0, _constants.Constants).GAME.COMPUTER, this.#turnResult.computer.remaining);
        this.#updateHud((0, _constants.Constants).GAME.USER, this.#turnResult.user.remaining);
        this.#gameOver();
    }
    /**
     *
     */  #turnAnimOut() {
        this.#updateHud((0, _constants.Constants).GAME.COMPUTER, this.#turnResult.computer.remaining);
        this.#updateHud((0, _constants.Constants).GAME.USER, this.#turnResult.user.remaining);
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
            this.#overlayGameOver = this.#createOverlay((0, _constants.Constants).GAME.OVERLAY.GAME_OVER, state);
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
        const config = new (0, _elementConfig.ElementConfig)({
            id: `game-card-${index}`,
            options: {
                pVO: pVO,
                isWarCard: isWarCard
            }
        });
        const card = new (0, _card.Card)(config).appendTo(this.querySelector(`#slot-card-${pVO.id}`));
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
                card1.animOutState = (0, _constants.Constants).GAME.WIN;
                order.unshift(card1);
            } else {
                card1.animOutState = (0, _constants.Constants).GAME.LOSE;
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
        const config1 = new (0, _elementConfig.ElementConfig)({
            id: `game-hud-${player}`,
            options: {
                name: name,
                player: player
            }
        });
        const hud = new (0, _hud.Hud)(config1);
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
        this.#createOverlay((0, _constants.Constants).GAME.OVERLAY.GAME_OVER, (0, _constants.Constants).GAME.ERROR);
    }
    /**
     * @param {string} mode
     * @param {string} state
     * @param {Image} img
     */  #createOverlay(mode, state1, img) {
        state1 = state1 ? state1 : this.#turnResult ? this.#turnResult.user.state : undefined;
        const config2 = new (0, _elementConfig.ElementConfig)({
            id: `game-${mode}`,
            options: {
                mode: mode,
                state: state1,
                img: img
            }
        });
        return new (0, _overlay.Overlay)(config2).appendTo(this.querySelector(".game__stage"));
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
            this.#overlayHelp = this.#createOverlay((0, _constants.Constants).GAME.OVERLAY.HELP);
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
        if (state4 && !this.#tooltip) this.#tooltip = new (0, _tooltip.Tooltip)(new (0, _tooltipconfig.TooltipConfig)({
            mode: (0, _tooltip.Tooltip).MODE_INFO,
            targetElement: this.#btnDeal,
            position: (0, _tooltip.Tooltip).POSITION_TARGET,
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
 */ window.customElements.define("component-game", Game);

},{"bundle-text:./game.html":"9DoHq","../../core/app/app":"ktvYM","../../core/constants/constants":"fSyrh","../../core/element/config/element-config":"1jfnW","../../core/element/custom-element":"5czm8","../../core/services/game/vo/player-vo":"lbogc","../tooltip/config/tooltipconfig":"bPgFH","../tooltip/tooltip":"j1xKw","./card/card":"92ysk","./hud/hud":"cdQCx","./overlay/overlay":"40Qy4","../../../../assets/gif/war.gif":"9TfMx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9DoHq":[function(require,module,exports) {
module.exports = "<button id=\"btn-help\" class=\"circle-button\">?</button>\r\n<div class=\"game__stage\">\r\n    <div id=\"slot-pile-computer\" class=\"game__stage-slot is-hidden\">\r\n        <img src=\"/card-back-2.402f2818.png\">\r\n    </div>\r\n    <div id=\"slot-card-computer\" class=\"game__stage-slot\">\r\n        <!-- <element-card> -->\r\n    </div>\r\n    <div id=\"slot-pile-user\" class=\"game__stage-slot game__stage-slot-button is-hidden\">\r\n        <img src=\"/card-back-2.402f2818.png\">\r\n    </div>\r\n    <div id=\"slot-card-user\" class=\"game__stage-slot\">\r\n        <!-- <element-card> -->\r\n    </div>\r\n    <svg class=\"loader__spinner\" viewbox=\"0 0 50 50\">\r\n        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\r\n    </svg>\r\n</div><script src=\"/game.c1381ed6.js\"></script>";

},{}],"fSyrh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Constants", ()=>Constants);
class Constants {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1jfnW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementConfig", ()=>ElementConfig);
class ElementConfig {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5czm8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CustomElement", ()=>CustomElement);
var _elementConfig = require("./config/element-config");
class CustomElement extends HTMLElement {
    /** @type {ElementConfig} */ #config;
    /**
     * @constructor
     * @param {ElementConfig} config optional
     */ constructor(config){
        super();
        this.config = config ? config : new (0, _elementConfig.ElementConfig)();
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

},{"./config/element-config":"1jfnW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbogc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerVO", ()=>PlayerVO);
class PlayerVO {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPgFH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TooltipConfig", ()=>TooltipConfig);
var _elementConfig = require("../../../core/element/config/element-config");
var _tooltip = require("../tooltip");
class TooltipConfig extends (0, _elementConfig.ElementConfig) {
    /**
     * @constructor
     * @param {object} init
     * @comment default values in constructor
     */ constructor(init){
        super();
        this.mode = (0, _tooltip.Tooltip).MODE_INFO;
        this.targetElement = document.body;
        this.position = (0, _tooltip.Tooltip).POSITION_GLOBAL;
        this.offsetX = 200;
        this.offsetY = 200;
        this.msg = "Tooltip text here";
        this.populate(init);
    }
}

},{"../../../core/element/config/element-config":"1jfnW","../tooltip":"j1xKw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1xKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _customElement = require("../../core/element/custom-element");
var _tooltipconfig = require("./config/tooltipconfig");
class Tooltip extends (0, _customElement.CustomElement) {
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
        if (this.config.position === Tooltip.POSITION_GLOBAL) {
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
 */ window.customElements.define("component-tooltip", Tooltip);

},{"../../core/element/custom-element":"5czm8","./config/tooltipconfig":"bPgFH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92ysk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Card", ()=>Card);
var _cardHtml = require("bundle-text:./card.html");
var _cardHtmlDefault = parcelHelpers.interopDefault(_cardHtml);
var _constants = require("../../../core/constants/constants");
var _customElement = require("../../../core/element/custom-element");
var _playerVo = require("../../../core/services/game/vo/player-vo");
class Card extends (0, _customElement.CustomElement) {
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
        return this.player.id === (0, _constants.Constants).GAME.USER;
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
        super.render((0, _cardHtmlDefault.default));
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
 */ window.customElements.define("element-card", Card);

},{"bundle-text:./card.html":"f4dXH","../../../core/constants/constants":"fSyrh","../../../core/element/custom-element":"5czm8","../../../core/services/game/vo/player-vo":"lbogc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4dXH":[function(require,module,exports) {
module.exports = "<div class=\"game__card-inner\">\r\n    <div class=\"game__card-front\">\r\n\r\n    </div>\r\n    <div class=\"game__card-back\">\r\n        <img src=\"/card-back-2.402f2818.png\">\r\n    </div>\r\n</div><script src=\"/card.5f130a35.js\"></script>";

},{}],"cdQCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hud", ()=>Hud);
var _hudHtml = require("bundle-text:./hud.html");
var _hudHtmlDefault = parcelHelpers.interopDefault(_hudHtml);
var _customElement = require("../../../core/element/custom-element");
class Hud extends (0, _customElement.CustomElement) {
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
        super.render((0, _hudHtmlDefault.default));
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
 */ window.customElements.define("element-hud", Hud);

},{"bundle-text:./hud.html":"6dQn1","../../../core/element/custom-element":"5czm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dQn1":[function(require,module,exports) {
module.exports = "<div class=\"inner\">\r\n    <div class=\"game__hud-name\"></div>\r\n    <div class=\"game__hud-score\">\r\n        <span class=\"game__hud-score-points\"></span>\r\n        <span class=\"game__hud-score-header\">cards</span>\r\n    </div>\r\n</div><script src=\"/hud.403d8e91.js\"></script>";

},{}],"40Qy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Overlay", ()=>Overlay);
var _overlayStartHtml = require("bundle-text:./overlay-start.html");
var _overlayStartHtmlDefault = parcelHelpers.interopDefault(_overlayStartHtml);
var _overlayWarHtml = require("bundle-text:./overlay-war.html");
var _overlayWarHtmlDefault = parcelHelpers.interopDefault(_overlayWarHtml);
var _overlayGameOverHtml = require("bundle-text:./overlay-game-over.html");
var _overlayGameOverHtmlDefault = parcelHelpers.interopDefault(_overlayGameOverHtml);
var _overlayHelpHtml = require("bundle-text:./overlay-help.html");
var _overlayHelpHtmlDefault = parcelHelpers.interopDefault(_overlayHelpHtml);
var _constants = require("../../../core/constants/constants");
var _customElement = require("../../../core/element/custom-element");
var _app = require("../../../core/app/app");
class Overlay extends (0, _customElement.CustomElement) {
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
            case (0, _constants.Constants).GAME.OVERLAY.START:
                this.#renderStart();
                break;
            case (0, _constants.Constants).GAME.OVERLAY.WAR:
                this.#renderWar();
                break;
            case (0, _constants.Constants).GAME.OVERLAY.GAME_OVER:
                this.#renderGameOver();
                break;
            case (0, _constants.Constants).GAME.OVERLAY.HELP:
                this.#renderHelp();
                break;
        }
    }
    /**
     *
     */  #renderStart() {
        this.classList.add("game__overlay-start");
        super.render((0, _overlayStartHtmlDefault.default));
        this.#setupNewGameButton();
        this.animateIn();
    }
    /**
     *
     */  #renderWar() {
        this.classList.add("game__overlay-war");
        this.#displayTime = "2.5s";
        super.render((0, _overlayWarHtmlDefault.default));
        this.querySelector(".screen").appendChild(this.config.options.img);
    }
    /**
     *
     */  #renderGameOver() {
        this.classList.add("game__overlay-game-over", this.state);
        super.render((0, _overlayGameOverHtmlDefault.default));
        if (this.state !== (0, _constants.Constants).GAME.ERROR) this.#setupNewGameButton();
        this.animateIn();
    }
    /**
     *
     */  #renderHelp() {
        this.classList.add("game__overlay-help");
        super.render((0, _overlayHelpHtmlDefault.default));
        this.animateIn();
    }
    /**
     *
     */  #setupNewGameButton() {
        this.querySelector("#btn-new-game").addEventListener("click", ()=>this.animateOut().then(()=>(0, _app.App).instance.game.newGame()));
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
 */ window.customElements.define("element-overlay", Overlay);

},{"bundle-text:./overlay-start.html":"QlKyX","bundle-text:./overlay-war.html":"cJRT5","bundle-text:./overlay-game-over.html":"b1uzT","bundle-text:./overlay-help.html":"1yUfJ","../../../core/constants/constants":"fSyrh","../../../core/element/custom-element":"5czm8","../../../core/app/app":"ktvYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QlKyX":[function(require,module,exports) {
module.exports = "<img src=\"/wargames_logo.ef1e770d.webp\" alt=\"\">\r\n<img src=\"/intro.5799e945.jpg\" alt=\"\">\r\n<button id=\"btn-new-game\" class=\"generic-button\">START</button><script src=\"/overlay-start.82bf714a.js\"></script>";

},{}],"cJRT5":[function(require,module,exports) {
module.exports = "<div class=\"inner\">\r\n    <div class=\"screen\">\r\n    </div>\r\n    <div class=\"header\">\r\n        <p>WAR</p>\r\n    </div>\r\n</div><script src=\"/overlay-war.caa1e5ea.js\"></script>";

},{}],"b1uzT":[function(require,module,exports) {
module.exports = "<div class=\"inner\">\r\n    <div class=\"msg msg-win\">\r\n        <h2>You won!</h2>\r\n        <p>You beat the NORAD supercomputer WOPR (War Operation Plan Response).</p>\r\n    </div>\r\n    <div class=\"msg msg-lose\">\r\n        <h2>Sorry, you lost!</h2>\r\n        <p>The NORAD supercomputer WOPR (War Operation Plan Response) beat you.</p>\r\n    </div>\r\n    <div class=\"msg msg-error\">\r\n        <h2>Something went wrong while loading data :-(</h2>\r\n        <p>Maybe WOPR is in a bad mood, please come back later.</p>\r\n    </div>\r\n</div>\r\n<button id=\"btn-new-game\" class=\"generic-button\">PLAY AGAIN</button><script src=\"/overlay-game-over.dd5fa990.js\"></script>";

},{}],"1yUfJ":[function(require,module,exports) {
module.exports = "<div class=\"inner\">\r\n    <p><em>Beat the NORAD supercomputer WOPR (War Operation Plan Response) and prevent global thermonuclear war!</em>\r\n    </p>\r\n    <h2>Rules</h2>\r\n    <p>War is a 2-player game. The goal is to collect the full deck to win the game.</p>\r\n    <p>It uses a 52-card deck, divided equally among the players. They must stack their cards face down in front of\r\n        them.\r\n        Then, each player turns up a card at the same time. The one with the highest number wins and can add the two\r\n        cards\r\n        to the bottom of their stack.</p>\r\n    <p>If it is a draw, then it is war! Each player draws a card from their stack and places it face down on the table.\r\n        Then\r\n        they turn up a card from the stack. The player who wins gets to collect the cards that led to war, the cards\r\n        that\r\n        went to “battle” and the ones facing down (6 cards in total).</p>\r\n</div><script src=\"/overlay-help.d327efa1.js\"></script>";

},{}],"9TfMx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("10Mjw") + "war.e351267e.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"74rdk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameService", ()=>GameService);
var _constants = require("../../constants/constants");
var _apiService = require("../api/api-service");
var _cardVo = require("./vo/card-vo");
var _playerVo = require("./vo/player-vo");
class GameService {
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
        this.#api = new (0, _apiService.ApiService)();
    }
    /**
     * @returns {boolean}
     */ get devMode() {
        return this.#devMode === (0, _constants.Constants).GAME.DEV_MODE;
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
        let pileSize = (0, _constants.Constants).GAME.START_PILE;
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
            await this.#setupStartHand((0, _constants.Constants).GAME.USER, testCardCodes);
            await this.#setupStartHand((0, _constants.Constants).GAME.COMPUTER, testCardCodes);
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
            apiData = await this.#api.drawFromDeck((0, _constants.Constants).GAME.START_PILE);
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
            const user = new (0, _playerVo.PlayerVO)((0, _constants.Constants).GAME.USER);
            const computer = new (0, _playerVo.PlayerVO)((0, _constants.Constants).GAME.COMPUTER);
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
                user.state = computer.state = (0, _constants.Constants).GAME.WAR;
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
                winner.state = (0, _constants.Constants).GAME.WIN;
                loser.state = (0, _constants.Constants).GAME.LOSE;
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
        const card1 = new (0, _cardVo.CardVO)(apiData1.cards[0]);
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
            loser1.state = (0, _constants.Constants).GAME.LOSE;
            winner1 = players.find((pVO)=>pVO.remaining != 0);
            winner1.state = (0, _constants.Constants).GAME.WIN;
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

},{"../../constants/constants":"fSyrh","../api/api-service":"94Uq7","./vo/card-vo":"docGQ","./vo/player-vo":"lbogc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94Uq7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiService", ()=>ApiService);
var _constants = require("../../constants/constants");
class ApiService {
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
     */ drawFromDeck(count, position = (0, _constants.Constants).API.DECK_TOP) {
        return this.#doApiFetch(`/${this.#deckID}/draw/${position}?count=${count}`);
    }
    /**
     * @param {string} pile
     * @param {number} count
     * @param {string} position
     * @returns {Promise}
     */ drawFromPile(pile, count = 1, position = (0, _constants.Constants).API.DECK_BOTTOM) {
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
            if ((0, _constants.Constants).API.LOG) console.log("%c[API Call]" + req, "color: grey");
            fetch((0, _constants.Constants).API.BASE_URL + req, {
                method: "GET"
            }).then((res)=>{
                if (!res.ok) //console.error('%cGameService.#doApiFetch.error');
                reject(res.statusText);
                return res.json();
            }).then((data)=>{
                if ((0, _constants.Constants).API.LOG) console.log("%c[API Data]", "color: grey", data);
                resolve(data);
            }).catch((err)=>{
                console.error("GameService.#doApiFetch.error");
                reject(err);
            });
        });
    }
}

},{"../../constants/constants":"fSyrh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"docGQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CardVO", ()=>CardVO);
class CardVO {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jQVXF","1SICI"], "1SICI", "parcelRequireeb27")

//# sourceMappingURL=index.18dbc454.js.map
