(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("phaser"));
	else if(typeof define === 'function' && define.amd)
		define("TDLib", ["phaser"], factory);
	else if(typeof exports === 'object')
		exports["TDLib"] = factory(require("phaser"));
	else
		root["TDLib"] = factory(root["phaser"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_phaser__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TDLib.js":
/*!**********************!*\
  !*** ./src/TDLib.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _const = _interopRequireDefault(__webpack_require__(/*! ./const */ "./src/const.js"));

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace TDLib
 */
var TDLib = {
  Components: __webpack_require__(/*! ./components */ "./src/components/index.js"),
  Game: __webpack_require__(/*! ./boot/Game */ "./src/boot/Game.js"),
  Managers: __webpack_require__(/*! ./managers */ "./src/managers/index.js"),
  Rooms: __webpack_require__(/*! ./rooms */ "./src/rooms/index.js"),
  Settings: __webpack_require__(/*! ./boot/Settings */ "./src/boot/Settings.js"),
  Sprites: __webpack_require__(/*! ./sprites */ "./src/sprites/index.js"),
  Systems: __webpack_require__(/*! ./systems */ "./src/systems/index.js"),
  Utils: __webpack_require__(/*! ./utils */ "./src/utils/index.js")
}; // Merge the consts

TDLib = _phaser.default.Utils.Objects.Extend(false, TDLib, _const.default); // Export the module

module.exports = TDLib;
__webpack_require__.g.TDLib = TDLib;

/***/ }),

/***/ "./src/boot/Boot.js":
/*!**************************!*\
  !*** ./src/boot/Boot.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 56:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/boot/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Boot = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Boot, _Phaser$Scene);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this, 'Boot'));
  }

  _createClass(Boot, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      console.log('Booting all game systems...');
      this.cursors.configure(_Settings.default.GAME.scene);
      this.rooms.configure(_Settings.default.GAME.scene);
      this.rooms.start(_Settings.default.STARTING_ROOM); // TEMP NAME
    }
  }]);

  return Boot;
}(_phaser.default.Scene);

exports.default = Boot;
module.exports = exports.default;

/***/ }),

/***/ "./src/boot/DebugHeader.js":
/*!*********************************!*\
  !*** ./src/boot/DebugHeader.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 89:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */
var CONST = __webpack_require__(/*! ../const */ "./src/const.js");

var Settings = __webpack_require__(/*! ./Settings */ "./src/boot/Settings.js");
/**
 * Called automatically by Phaser.Game and responsible for creating the console.log debug header.
 *
 * You can customize or disable the header via the Game Config object.
 *
 * @function TDLib.Boot.DebugHeader
 * @since 1.0.0
 *
 * @param {TDLib.Game} game - The TDLib.Game instance which will output this debug header.
 */


var DebugHeader = function DebugHeader(game) {
  var config = game.config;
  config.bannerBackgroundColor = '#0002e6';
  config.bannerTextColor = '#ffffff';
  config.hidePhaser = false;
  var renderType = 'WebGL';

  if (config.renderType !== 2) {
    renderType = 'NULL';
  }

  var audioConfig = config.audio;
  var deviceAudio = game.device.audio;
  var audioType;

  if (deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio)) {
    audioType = 'Web Audio';
  } else if (audioConfig && audioConfig.noAudio || !deviceAudio.webAudio && !deviceAudio.audioData) {
    audioType = 'No Audio';
  } else {
    audioType = 'HTML5 Audio';
  }

  if (!game.device.browser.ie) {
    var c = '';
    var args = [c];

    if (Array.isArray(config.bannerBackgroundColor)) {
      var lastColor;
      config.bannerBackgroundColor.forEach(function (color) {
        c = c.concat('%c ');
        args.push('background: ' + color);
        lastColor = color;
      }); //  inject the text color

      args[args.length - 1] = 'color: ' + config.bannerTextColor + '; background: ' + lastColor;
    } else {
      c = c.concat('%c ');
      args.push('color: ' + config.bannerTextColor + '; background: ' + config.bannerBackgroundColor);
    } //  URL link background color (always white)


    args.push('background: #fff');

    if (config.gameTitle) {
      c = c.concat(config.gameTitle);

      if (config.gameVersion) {
        c = c.concat(' v' + config.gameVersion);
      }

      if (!config.hidePhaser) {
        c = c.concat(' / ');
      }
    }

    if (!config.hidePhaser) {
      c = c.concat('TDLib v' + CONST.VERSION + ' / Phaser v' + CONST.PHASER_VERSION);
      c = c.concat(' (' + renderType + ' | ' + audioType + ' | ' + Settings.DEVICE + ')');
    }

    c = c.concat(' %c ' + config.gameURL); //  Inject the new string back into the args array

    args[0] = c;
    console.log.apply(console, args);
  }
};

module.exports = DebugHeader;

/***/ }),

/***/ "./src/boot/Game.js":
/*!**************************!*\
  !*** ./src/boot/Game.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 260:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/boot/Settings.js"));

var _DebugHeader = _interopRequireDefault(__webpack_require__(/*! ./DebugHeader */ "./src/boot/DebugHeader.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils/index.js"));

var _managers = _interopRequireDefault(__webpack_require__(/*! ../managers */ "./src/managers/index.js"));

var _systems = _interopRequireDefault(__webpack_require__(/*! ../systems */ "./src/systems/index.js"));

var _Boot = _interopRequireDefault(__webpack_require__(/*! ./Boot */ "./src/boot/Boot.js"));

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

var _filterObj = _interopRequireDefault(__webpack_require__(/*! filter-obj */ "./node_modules/filter-obj/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @classdesc
 * The TDLib.Game instance is the main controller for the entire game. It create an instace
 * of Phaser.Game with a default configuration of various parameters.
 *
 * @class Game
 * @memberof TDLib
 * @constructor
 * @since 1.0.0
 *
 * @param {Object} [config] - The configuration object for your TDLib Game instance.
 * @param {Object} [config.title] - The title of your game.
 * @param {Object} [config.url] - The url of your online game or website.
 * @param {Object} [config.version] - The version of your game.
 */
var Game = /*#__PURE__*/function () {
  function Game(config) {
    _classCallCheck(this, Game);

    /**
     * The parsed Game Configuration object.
     *
     * The values stored within this object are read-only and should not be changed at run-time.
     *
     * @name TDLib.Game#config
     * @type {Object}
     * @readonly
     * @since 1.0.0
     */
    this.config = config;

    this._setScreenConfig();

    this._setPhysicsConfig();

    this._setPlugins();

    this._setBoot();

    this._setHeaderProps();

    this._finalizeConfig();
    /** ************ TODO: Aggiungere il device e la funzione per determinarlo **************/


    _Settings.default.STARTING_ROOM = this.config.startingRoom;
    _Settings.default.GAME_SPRITES = this._setGameSprites(_phaser.default.Utils.Objects.Clone(this.config.sprites));
    _Settings.default.GAME = new _phaser.default.Game(this.config);
    (0, _DebugHeader.default)(_Settings.default.GAME);
    return _Settings.default.GAME;
  }
  /**
   * This method is called automatically and configure the screen proportions and settings for the Game.
   *
   * @method TDLib.Game#_setScreenConfig
   * @protected
   * @since 1.0.0
   */


  _createClass(Game, [{
    key: "_setScreenConfig",
    value: function _setScreenConfig() {
      _Settings.default.SCREEN_PROPS = _utils.default.getScreenProps();
      this.config.width = _Settings.default.SCREEN_PROPS.calculatedWidth;
      this.config.height = _Settings.default.SCREEN_PROPS.calculatedHeight;
      this.config.zoom = _Settings.default.SCREEN_PROPS.calculatedZoom;
      this.config.autoResize = false;
      this.config.backgroundColor = '#000000';
      this.config.pixelArt = true;
    }
    /**
     * This method is called automatically and configure physics for the Game using the Arcade engine of Phaser.
     *
     * @method TDLib.Game#_setPhysicsConfig
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_setPhysicsConfig",
    value: function _setPhysicsConfig() {
      this.config.physics = {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: {
            y: 0,
            x: 0
          }
        }
      };
    }
    /**
     * This method is called automatically and configure the plugins for the Game.
     * Global plugins are called Systems.
     * Scene plugins are called Managers.
     *
     * @method TDLib.Game#_setPlugins
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_setPlugins",
    value: function _setPlugins() {
      this.config.plugins = {
        // Systems
        global: [{
          key: 'RoomSystem',
          plugin: _systems.default.RoomSystem,
          start: false,
          mapping: 'rooms'
        }, {
          key: 'CursorSystem',
          plugin: _systems.default.CursorSystem,
          start: false,
          mapping: 'cursors'
        }],
        // Managers
        scene: [{
          key: 'UpdateManager',
          plugin: _managers.default.UpdateManager,
          mapping: 'updates'
        }, {
          key: 'LightSourceManager',
          plugin: _managers.default.LightSourceManager,
          mapping: 'lightSources'
        }, {
          key: 'LayerManager',
          plugin: _managers.default.LayerManager,
          mapping: 'layers'
        }]
      };
    }
    /**
     * This method is called automatically and configure the Phaser.Scene Boot to start the Systems.
     *
     * @method TDLib.Game#_setBoot
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_setBoot",
    value: function _setBoot() {
      this.config.scene = [_Boot.default];
    }
    /**
     * This method is called automatically and turn off the default Phaser header/banner.
     *
     * @method TDLib.Game#_setHeaderProps
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_setHeaderProps",
    value: function _setHeaderProps() {
      this.config.banner = false;
    }
  }, {
    key: "_setGameSprites",
    value: function _setGameSprites(obj) {
      function haveChildObject(father) {
        var flag = false;
        if (Object.keys((0, _filterObj.default)(obj, function (key, value) {
          return (// eslint-disable-next-line eqeqeq
            _typeof(value) == 'object' && // eslint-disable-next-line eqeqeq
            typeof value.default != 'function' && Object.keys(value).length > 0
          );
        })).length > 0) flag = true;
        return flag;
      }

      function getChildrenFromFather(father) {
        var output = [];

        for (var key in father) {
          output.push(father[key]);
        }

        return output;
      }

      if (haveChildObject(obj)) {
        // eslint-disable-next-line eqeqeq
        var objectsObj = (0, _filterObj.default)(obj, function (key, value) {
          return _typeof(value) == 'object' && typeof value.default != 'function';
        });
        var temp = getChildrenFromFather(objectsObj);
        temp.forEach(function (element) {
          obj = _phaser.default.Utils.Objects.Extend(false, obj, element);
        });

        for (var key in objectsObj) {
          delete obj[key];
        }

        return this._setGameSprites(obj);
      }

      return obj;
    }
    /**
     * This method is called automatically and finalize the config passed to Phaser.Game.
     *
     * @method TDLib.Game#_finalizeConfig
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_finalizeConfig",
    value: function _finalizeConfig() {
      this.config.type = _phaser.default.WEBGL;
      this.config.maxLights = 20;
      this.config.parent = 'game';
      this.config.disableContextMenu = true;
    }
  }]);

  return Game;
}();

exports.default = Game;
module.exports = exports.default;

/***/ }),

/***/ "./src/boot/Settings.js":
/*!******************************!*\
  !*** ./src/boot/Settings.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 122:0-14 */
/***/ ((module) => {

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * The default Game settings.
 * @namespace TDLib.Settings
 */
var Settings = {
  /**
   * The instance of the Game.
   *
   * @name TDLib.Settings.GAME
   * @const
   * @type {TDLib.Game}
   * @since 1.0.0
   */
  GAME: '',

  /**
   * The size of the tiles.
   *
   * @name TDLib.Settings.TILE_SIZE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  TILE_SIZE: 48,

  /**
   * The height of a standard room in tiles.
   *
   * @name TDLib.Settings.ROOM_HEIGHT_IN_TILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  ROOM_HEIGHT_IN_TILE: 6,

  /**
   * The inventory width in tiles in mobile devices.
   *
   * @name TDLib.Settings.INVENTORY_WIDTH_IN_TILES_MOBILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_WIDTH_IN_TILES_MOBILE: 1.25,

  /**
   * The inventory width in tiles in desktop devices.
   *
   * @name TDLib.Settings.INVENTORY_WIDTH_IN_TILES_DESKTOP
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_WIDTH_IN_TILES_DESKTOP: 0,

  /**
   * The inventory height in tiles in mobile devices.
   *
   * @name TDLib.Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_HEIGHT_IN_TILES_MOBILE: 0,

  /**
   * The inventory height in tiles in desktop devices.
   *
   * @name TDLib.Settings.INVENTORY_HEIGHT_IN_TILES_DESKTOP
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  INVENTORY_HEIGHT_IN_TILES_DESKTOP: 1,

  /**
   * The room frame in tiles in desktop devices.
   *
   * @name TDLib.Settings.ROOM_FRAME_IN_TILES_DESKTOP
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  ROOM_FRAME_IN_TILES_DESKTOP: 0.5,

  /**
   * The room frame in tiles in mobile devices.
   *
   * @name TDLib.Settings.ROOM_FRAME_IN_TILES_MOBILE
   * @const
   * @type {Number}
   * @since 1.0.0
   */
  ROOM_FRAME_IN_TILES_MOBILE: 0.25,

  /**
   * The proportions of the used screen.
   *
   * @name TDLib.Settings.SCREEN_PROPS
   * @type {Object}
   * @since 1.0.0
   */
  SCREEN_PROPS: {},

  /**
   * The used device.
   *
   * @name TDLib.Settings.INVENTORY_HEIGHT_IN_TILES_MOBILE
   * @type {String}
   * @since 1.0.0
   */
  DEVICE: 'Desktop',
  STARTING_ROOM: null,
  GAME_SPRITES: null
};
module.exports = Settings;

/***/ }),

/***/ "./src/components/ActionComponent.js":
/*!*******************************************!*\
  !*** ./src/components/ActionComponent.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 210:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(/*! ./Component */ "./src/components/Component.js"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ../sprites/actions */ "./src/sprites/actions/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @classdesc
 * Class representing the ActionComponent.
 * ActionComponent is responsible to handle all the actions for a Sprite.
 *
 * @class ActionComponent
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The performer of the action.
 */
var ActionComponent = /*#__PURE__*/function (_Component) {
  _inherits(ActionComponent, _Component);

  function ActionComponent(gameObject) {
    var _this;

    _classCallCheck(this, ActionComponent);

    _this = _possibleConstructorReturn(this, (ActionComponent.__proto__ || Object.getPrototypeOf(ActionComponent)).call(this, gameObject));
    /**
     * The performer of the action.
     * @type {TDLib.Sprites.Sprite}
     * @name TDLib.Components.ActionComponent#gameObject
     * @since 1.0.0
     */

    _this.gameObject = gameObject;
    /**
     * The default action to be played, AIdle by default.
     * @type {TDLib.Components.Actions.Action}
     * @name TDLib.Components.ActionComponent#defaultAction
     * @since 1.0.0
     */

    _this.defaultAction = new _actions.default.Idle(_this, _this.gameObject);
    /**
     * The queue of actions.
     * @type {Array}
     * @name TDLib.Components.ActionComponent#_queue
     * @protected
     * @since 1.0.0
     */

    _this._queue = [_this.defaultAction];

    _this._queue[0]._start();

    return _this;
  }
  /**
   * Using this mode the queue is emptied and the new action is immediately performed.
   * @name TDLib.Components.ActionComponent#DEFAULT_MODE
   * @since 1.0.0
   */


  _createClass(ActionComponent, [{
    key: "add",

    /**
     * Starts a new action or add that to the queue.
     *
     * @method TDLib.Components.ActionComponent#add
     * @param {TDLib.Components.Sprites.Actions.Action} action - The action to add or execute.
     * @param {Object} config - The config object for the action.
     * @param {Object} config.target - The target of the action.
     * @param {number} config.target.x - The x of the target of the action.
     * @param {number} [mode=ActionComponent.DEFAULT_MODE] - The operating mode of the component.
     * @since 1.0.0
     */
    value: function add(Action, config) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ActionComponent.DEFAULT_MODE;
      var newAction = new Action(this, this.gameObject, config);

      switch (mode) {
        case ActionComponent.DEFAULT_MODE:
          {
            this._queue[0]._abort();

            this._queue = [];

            this._queue.push(newAction);

            this._queue[0]._start();
          }
          ;
          break;

        case ActionComponent.QUEUE_MODE:
          {
            this._queue.push(newAction);
          }
          ;
          break;

        case ActionComponent.PAUSE_MODE:
          {
            this._queue[0]._pause();

            this._queue.unshift(newAction);

            this._queue[0]._start();
          }
          ;
          break;
      }

      return newAction;
    }
    /**
     * Remove a completed action from the queue.
     *
     * @method TDLib.Components.ActionComponent#_remove
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_remove",
    value: function _remove() {
      this._queue.shift();

      if (this._queue.length <= 0) this._queue.push(this.defaultAction);
      if (this._queue[0].isPaused) this._queue[0]._resume();else this._queue[0]._start();
    }
    /**
     * Update the currently performed action.
     *
     * @method TDLib.Components.ActionComponent#_update
     * @protected
     * @since 1.0.0
     */

  }, {
    key: "_update",
    value: function _update() {
      if (this._queue.length <= 0) this._queue.push(this.defaultAction);else if (this._queue.length > 1 && this._queue[0].name === 'Idle') {
        this._queue.shift();

        if (this._queue[0].isPaused) this._queue[0]._resume();else this._queue[0]._start();
      }

      this._queue[0]._update();
    }
  }], [{
    key: "DEFAULT_MODE",
    get: function get() {
      return 0;
    }
    /**
     * Using this mode the new action is added to the queue.
     * @name TDLib.Components.ActionComponent#QUEUE_MODE
     * @since 1.0.0
     */

  }, {
    key: "QUEUE_MODE",
    get: function get() {
      return 1;
    }
    /**
     * Using this mode the currently performed action is paused and the new action is immediately performed.
     * Then the paused action is resumed.
     * @name TDLib.Components.ActionComponent#PAUSE_MODE
     * @since 1.0.0
     */

  }, {
    key: "PAUSE_MODE",
    get: function get() {
      return 2;
    }
  }]);

  return ActionComponent;
}(_Component2.default);

exports.default = ActionComponent;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/BehaviourComponent.js":
/*!**********************************************!*\
  !*** ./src/components/BehaviourComponent.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 109:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(/*! ./Component */ "./src/components/Component.js"));

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ../sprites/behaviours */ "./src/sprites/behaviours/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @classdesc
 * Class representing the BehaviourComponent.
 * BehaviourComponent is responsible to handle all the behaviours of a Sprite.
 * A Sprite can be INERT, OBSERVABLE, EXAMINABLE, INTERACTIVE, INVENTORY, TALKABLE.
 *
 * @class BehaviourComponent
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The Sprite that owns the component.
 * @param {string} type - The type of behaviour of the gameObject.
 * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
 * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
 */
var BehaviourComponent = /*#__PURE__*/function (_Component) {
  _inherits(BehaviourComponent, _Component);

  function BehaviourComponent(gameObject, type, pixelPerfect) {
    var _this;

    _classCallCheck(this, BehaviourComponent);

    _this = _possibleConstructorReturn(this, (BehaviourComponent.__proto__ || Object.getPrototypeOf(BehaviourComponent)).call(this, gameObject));
    /**
     * A reference to the player in the current room.
     * @type {TDLib.Sprites.Characters.Player}
     * @name TDLib.Components.BehaviourComponent#player
     * @since 1.0.0
     */

    _this.player;
    if (typeof _this.gameObject.room.player === 'undefined') _this.player = _this.gameObject;else _this.player = _this.gameObject.room.player;
    /**
     * The type of behaviour of the gameObject.
     * @type {string}
     * @name TDLib.Components.BehaviourComponent#type
     * @since 1.0.0
     */

    _this.type = type;
    /**
     * If not null enable the pixel perfect pointer hit for the Sprite.
     * @type {string}
     * @name TDLib.Components.BehaviourComponent#pixelPerfect
     * @since 1.0.0
     */

    _this.pixelPerfect = pixelPerfect;

    _this._addBehaviours();

    return _this;
  }
  /**
   * Select the appropriate behaviour for the gameObject.
   *
   * @method TDLib.Components.BehaviourComponent#_addBehaviours
   * @protected
   * @since 1.0.0
   */


  _createClass(BehaviourComponent, [{
    key: "_addBehaviours",
    value: function _addBehaviours() {
      // Se l'oggetto è osservabile (cioè esaminabile o interagibile) setto il cursore appropriato
      if (this.type === _behaviours.default.EXAMINABLE || this.type === _behaviours.default.INTERACTIVE) {
        this.observe = new _behaviours.default.Observable(this);
        if (this.type === _behaviours.default.EXAMINABLE) this.examine = new _behaviours.default.Examinable(this);else if (this.type === _behaviours.default.INTERACTIVE) this.interact = new _behaviours.default.Interactive(this);
      }
    }
  }]);

  return BehaviourComponent;
}(_Component2.default);

exports.default = BehaviourComponent;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/Component.js":
/*!*************************************!*\
  !*** ./src/components/Component.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! CommonJS bailout: module.exports is used directly at 50:0-14 */
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * @classdesc
 * Class representing a generic Component.
 * A Component is bound to a Sprite and extends the members and methods of it.
 * To access the component you have to use a specific key.
 *
 * @class Component
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The Sprite using the Component.
 */
var Component = function Component(gameObject) {
  _classCallCheck(this, Component);

  /**
   * The name of the Component.
   * @type {string}
   * @name TDLib.Components.Component#name
   * @since 1.0.0
   */
  this.name = this.constructor.name;
  /**
   * The Sprite using the Component.
   * @type {TDLib.Sprites.Sprite}
   * @name TDLib.Components.Component#gameObject
   * @since 1.0.0
   */

  this.gameObject = gameObject;
};

exports.default = Component;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/EffectComponent.js":
/*!*******************************************!*\
  !*** ./src/components/EffectComponent.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 142:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(/*! ./Component */ "./src/components/Component.js"));

var _effects = _interopRequireDefault(__webpack_require__(/*! ../sprites/effects */ "./src/sprites/effects/index.js"));

var _LightSource = _interopRequireDefault(__webpack_require__(/*! ../sprites/world-items/light-sources/LightSource */ "./src/sprites/world-items/light-sources/LightSource.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @classdesc
 * Class representing the EffectComponent.
 * EffectComponent is responsible to handle all the effects of a Sprite.
 *
 * @class EffectComponent
 * @memberof TDLib.Components
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Sprites.Sprite} gameObject - The Sprite that owns the component.
 */
var EffectComponent = /*#__PURE__*/function (_Component) {
  _inherits(EffectComponent, _Component);

  function EffectComponent(gameObject) {
    var _this;

    _classCallCheck(this, EffectComponent);

    _this = _possibleConstructorReturn(this, (EffectComponent.__proto__ || Object.getPrototypeOf(EffectComponent)).call(this, gameObject));
    /**
     * An array containing all the already played Effects.
     * @type {Array}
     * @name TDLib.Components.EffectComponent#previousEffects
     * @since 1.0.0
     */

    _this.previousEffects = [];
    /**
     * The currently played Effect.
     * @type {TDLib.Sprites.Effects.Effect}
     * @name TDLib.Components.EffectComponent#currentEffect
     * @since 1.0.0
     */

    _this.currentEffect = null;
    return _this;
  }
  /**
   * Starts a new Effect. If there's an already running Effect it is stopped.
   *
   * @method TDLib.Components.EffectComponent#play
   * @param {string} key - A key identifying an Effect.
   * @param {Object} [duration=-1] - If specified it represents the duration of the Effect.
   * @param {Object} [config] - The configuration object for the Effect.
   * @since 1.0.0
   */


  _createClass(EffectComponent, [{
    key: "play",
    value: function play(key) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var config = arguments[2];
      if (this.currentEffect) this.stop();
      if (key in _effects.default) this.currentEffect = new _effects.default[key](this, config);else if (key in _effects.default.LightEffects) {
        if (this.gameObject instanceof _LightSource.default) this.currentEffect = new _effects.default.LightEffects[key](this, config);else console.log(key + ' can only be run by a LightSource');
      } else {
        console.log('No effect with key: ', key);
      }
      if (this.currentEffect) this.currentEffect.play();

      if (duration > 0) {
        this.timer = this.gameObject.room.time.addEvent({
          delay: duration,
          callback: function callback() {
            _this2.stop();
          },
          callbackScope: this,
          repeat: 0
        });
        console.log(this.currentEffect.name + 'Effect started for', duration, 'ms');
      } else if (duration === -1) {
        console.log(this.currentEffect.name + 'Effect started');
      } else {
        console.log('You must use a positive value!');
      }
    }
    /**
     * Stops the currently played Effect.
     *
     * @method TDLib.Components.EffectComponent#stop
     * @since 1.0.0
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.currentEffect) {
        if (this.timer) {
          this.timer.remove();
          this.timer = null;
        }

        this.previousEffects.push(this.currentEffect);
        this.currentEffect.stop();
        console.log(this.currentEffect.name + 'Effect stopped');
        this.currentEffect = null;
        console.log(this.previousEffects);
      }
    }
  }]);

  return EffectComponent;
}(_Component2.default);

exports.default = EffectComponent;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * Components are attachable to Sprites in order to extend their capabilities.
 * @namespace TDLib.Components
 */
var Components = {
  Component: __webpack_require__(/*! ./Component */ "./src/components/Component.js"),
  ActionComponent: __webpack_require__(/*! ./ActionComponent */ "./src/components/ActionComponent.js"),
  BehaviourComponent: __webpack_require__(/*! ./BehaviourComponent */ "./src/components/BehaviourComponent.js"),
  EffectComponent: __webpack_require__(/*! ./EffectComponent */ "./src/components/EffectComponent.js")
};
module.exports = Components;

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 59:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * Global consts.
 *
 * @ignore
 */
var CONST = {
  /**
   * TheDarkestLib Release Version.
   *
   * @name TDLib.VERSION
   * @const
   * @type {string}
   * @since 1.0.0
   */
  VERSION: __webpack_require__(/*! ../package.json */ "./package.json").version,

  /**
   * Phaser Release Version.
   *
   * @name TDLib.PHASER_VERSION
   * @const
   * @type {string}
   * @since 1.0.0
   */
  PHASER_VERSION: _phaser.default.VERSION,

  /**
   * Left direction constant.
   *
   * @name TDLib.LEFT
   * @const
   * @type {string}
   * @since 1.0.0
   */
  LEFT: '_left',

  /**
   * Right direction constant.
   *
   * @name TDLib.RIGHT
   * @const
   * @type {string}
   * @since 1.0.0
   */
  RIGHT: '_right'
};
module.exports = CONST;

/***/ }),

/***/ "./src/managers/Manager.js":
/*!*********************************!*\
  !*** ./src/managers/Manager.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 80:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @classdesc
 * Class representing a generic Manager.
 * A Manager is a controller working at a Room level.
 * It is unique in its own Room, but it isn't in the whole game.
 * From Phaser library a Manager is handled as a Phaser.Plugins.ScenePlugin.
 * It has to be added to the game into Game.js through the specified method..
 *
 * @class Manager
 * @extends Phaser.Plugins.ScenePlugin
 * @memberof TDLib.Managers
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room running the Manager.
 * @param {Phaser.Plugins.PluginManager} - A reference to Phaser PluginManager.
 */
var Manager = /*#__PURE__*/function (_Phaser$Plugins$Scene) {
  _inherits(Manager, _Phaser$Plugins$Scene);

  function Manager(room, pluginManager) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this, room, pluginManager));
    /**
     * The room running the Manager.
     * @type {TDLib.Rooms.Room|Phaser.Scene}
     * @since 1.0.0
     */

    _this.room = room;
    return _this;
  }
  /**
   * Default function called by Phaser when booting the plugins.
   * @method TDLib.Managers.Manager#boot
   * @protected
   * @since 1.0.0
   */


  _createClass(Manager, [{
    key: "boot",
    value: function boot() {}
  }]);

  return Manager;
}(_phaser.default.Plugins.ScenePlugin);

exports.default = Manager;
module.exports = exports.default;

/***/ }),

/***/ "./src/managers/index.js":
/*!*******************************!*\
  !*** ./src/managers/index.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 21:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @author       Francesco Negri <francesco.negri@outlook.com>
 * @copyright    2019 The Darkest Light
 * @license      {@link https://github.com/FrancescoNegri/TheDarkestLib/blob/master/LICENSE|MIT License}
 */

/**
 * A Manager is a controller working at a Room level.
 * It is unique in its own Room, but it isn't in the whole game.
 * From Phaser library a Manager is handled as a Phaser.Plugins.ScenePlugin.
 * It has to be added to the game into Game.js through the specified method.
 * @see TDLib.Game#_setPlugins
 * @namespace TDLib.Managers
 */
var Managers = {
  LayerManager: __webpack_require__(/*! ./layers/LayerManager */ "./src/managers/layers/LayerManager.js"),
  LightSourceManager: __webpack_require__(/*! ./light-sources/LightSourceManager */ "./src/managers/light-sources/LightSourceManager.js"),
  Manager: __webpack_require__(/*! ./Manager */ "./src/managers/Manager.js"),
  UpdateManager: __webpack_require__(/*! ./updates/UpdateManager */ "./src/managers/updates/UpdateManager.js")
};
module.exports = Managers;

/***/ }),

/***/ "./src/managers/layers/LayerManager.js":
/*!*********************************************!*\
  !*** ./src/managers/layers/LayerManager.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 235:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Manager2 = _interopRequireDefault(__webpack_require__(/*! ../Manager */ "./src/managers/Manager.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/managers/layers/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @classdesc
 * Class representing a LayerManager, responsible to manage
 * the layers order, in order to have all the elements rendered correctly.
 * Layers are Phaser.GameObjects.Group.
 *
 * @class LayerManager
 * @extends TDLib.Managers.Manager
 * @memberof TDLib.Managers
 * @constructor
 * @since 1.0.0
 *
 * @param {TDLib.Rooms.Room|Phaser.Scene} room - The room running the Manager.
 * @param {Phaser.Plugins.PluginManager} - A reference to Phaser PluginManager.
 */
var LayerManager = /*#__PURE__*/function (_Manager) {
  _inherits(LayerManager, _Manager);

  function LayerManager(room, pluginManager) {
    var _this;

    _classCallCheck(this, LayerManager);

    _this = _possibleConstructorReturn(this, (LayerManager.__proto__ || Object.getPrototypeOf(LayerManager)).call(this, room, pluginManager));
    /**
     * The size in cells of each Layer.
     * @type {number}
     * @name TDLib.Managers.LayerManager#layerSize
     * @since 1.0.0
     */

    _this.layerSize = _Settings.default.layerSize;
    /**
     * The starting depth of Layers.
     * @type {number}
     * @name TDLib.Managers.LayerManager#startingDepth
     * @since 1.0.0
     */

    _this.strartingDepth = _Settings.default.startingDepth;
    return _this;
  }
  /**
   * @lends TDLib.Managers.Manager.boot
   */


  _createClass(LayerManager, [{
    key: "boot",
    value: function boot() {
      _get(LayerManager.prototype.__proto__ || Object.getPrototypeOf(LayerManager.prototype), "boot", this).call(this);
      /**
       * The Layer containing the background wall.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#backgroundLayer
       * @since 1.0.0
       */


      this.backgroundLayer = this.room.add.group();
      /**
       * The Layer containing the rear doors.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#rearDoorsLayer
       * @since 1.0.0
       */

      this.rearDoorsLayer = this.room.add.group();
      /**
       * The Layer containing the objects fixed to the background wall.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#wallFurnitureLayer
       * @since 1.0.0
       */

      this.wallFurnitureLayer = this.room.add.group();
      /**
       * The Layer containing the objects in the room.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#roomFurnitureLayer
       * @since 1.0.0
       */

      this.roomFurnitureLayer = this.room.add.group();
      /**
       * The Layer containing the side doors.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#sideDoorsLayer
       * @since 1.0.0
       */

      this.sideDoorsLayer = this.room.add.group();
      /**
       * The Layer containing the NPCs.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#playerLayer
       * @since 1.0.0
       */

      this.npcLayer = this.room.add.group();
      /**
       * The Layer containing the Player.
       * @type {Phaser.GameObjects.Group}
       * @since 1.0.0
       */

      this.playerLayer = this.room.add.group();
      /**
       * The Layer containing the cieling objects from the roof.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#cielingObjectsLayer
       * @since 1.0.0
       */

      this.cielingObjectsLayer = this.room.add.group();
      /**
       * The Layer containing the front doors.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#frontDoorsLayer
       * @since 1.0.0
       */

      this.frontDoorsLayer = this.room.add.group();
      /**
       * The Layer containing the lateral walls.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#wallsLayer
       * @since 1.0.0
       */

      this.wallsLayer = this.room.add.group();
      /**
       * The Layer containing the lateral walls black mask.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#wallsMaskLayer
       * @since 1.0.0
       */

      this.wallsMaskLayer = this.room.add.group();
      /**
       * The Layer containing the overall darkness mask.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#overallDarknessLayer
       * @since 1.0.0
       */

      this.overallDarknessLayer = this.room.add.group();
      /**
       * The Layer containing the border black masks.
       * @type {Phaser.GameObjects.Group}
       * @name TDLib.Managers.LayerManager#borderMasksLayer
       * @since 1.0.0
       */

      this.borderMasksLayer = this.room.add.group();
    }
    /**
     * Set the correct depth for each Layer in the right order.
     * @method TDLib.Managers.LayerManager#setLayersDepth
     * @since 1.0.0
     */

  }, {
    key: "setLayersDepth",
    value: function setLayersDepth() {
      var i = this.strartingDepth;
      this.backgroundLayer.setDepth(this.layerSize * i);
      i++;
      this.rearDoorsLayer.setDepth(this.layerSize * i);
      i++;
      this.wallFurnitureLayer.setDepth(this.layerSize * i);
      i++;
      this.roomFurnitureLayer.setDepth(this.layerSize * i);
      i++;
      this.sideDoorsLayer.setDepth(this.layerSize * i);
      i++;
      this.npcLayer.setDepth(this.layerSize * i);
      i++;
      this.playerLayer.setDepth(this.layerSize * i);
      i++;
      this.cielingObjectsLayer.setDepth(this.layerSize * i);
      i++;
      this.frontDoorsLayer.setDepth(this.layerSize * i);
      i++;
      this.wallsLayer.setDepth(this.layerSize * i);
      i++;
      this.wallsMaskLayer.setDepth(this.layerSize * i);
      i++;
      this.overallDarknessLayer.setDepth(this.layerSize * i);
      i++;
      this.borderMasksLayer.setDepth(this.layerSize * i);
      i++;
    }
  }]);

  return LayerManager;
}(_Manager2.default);

exports.default = LayerManager;
module.exports = exports.default;

/***/ }),

/***/ "./src/managers/layers/Settings.js":
/*!*****************************************!*\
  !*** ./src/managers/layers/Settings.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

var Settings = {
  layerSize: 10,
  startingDepth: 0
};
module.exports = Settings;

/***/ }),

/***/ "./src/managers/light-sources/LightSourceManager.js":
/*!**********************************************************!*\
  !*** ./src/managers/light-sources/LightSourceManager.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 103:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Manager2 = _interopRequireDefault(__webpack_require__(/*! ../Manager */ "./src/managers/Manager.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ../../boot/Settings */ "./src/boot/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LightSourceManager = /*#__PURE__*/function (_Manager) {
  _inherits(LightSourceManager, _Manager);

  function LightSourceManager(room, pluginManager) {
    var _this;

    _classCallCheck(this, LightSourceManager);

    _this = _possibleConstructorReturn(this, (LightSourceManager.__proto__ || Object.getPrototypeOf(LightSourceManager)).call(this, room, pluginManager));
    _this.graphicLights = [];
    _this.diffusedLights = [];
    return _this;
  }

  _createClass(LightSourceManager, [{
    key: "boot",
    value: function boot() {
      _get(LightSourceManager.prototype.__proto__ || Object.getPrototypeOf(LightSourceManager.prototype), "boot", this).call(this);

      this.lightSources = this.room.add.group();
    }
  }, {
    key: "add",
    value: function add(source) {
      this.lightSources.add(source, true);
      this.lightSources.getChildren().forEach(function (lightSource) {
        lightSource.setPipeline('Light2D');
      });
      return source;
    } // Le luci che flickerano o con comportamenti strani vanno contate?

  }, {
    key: "calculateLightsContribuitePoint",
    value: function calculateLightsContribuitePoint(target) {
      var singleLightContributeAccumulator = 0;
      this.lightSources.getChildren().forEach(function (light) {
        if (light.isOn) {
          // eslint-disable-next-line max-len
          var singleLightContribute = light.config.diffusedLight.intensity / (Math.abs(light.x + light.config.offset.x - target.x) ^ 2); // COSE

          if (light.effects.currentEffect) {
            singleLightContribute *= light.effects.currentEffect.contributeFactor;
          }

          singleLightContributeAccumulator += singleLightContribute;
        }
      });
      return Math.floor(singleLightContributeAccumulator * 10000) / 1000;
    }
  }, {
    key: "calculateAverageLightsContribute",
    value: function calculateAverageLightsContribute() {
      var singleLightIntensityAccumulator = 0;
      this.diffusedLights.forEach(function (light) {
        singleLightIntensityAccumulator += light.intensity;
      });
      var averageLightsContribute = 0; // eslint-disable-next-line max-len

      if (singleLightIntensityAccumulator !== 0) averageLightsContribute = Math.floor(singleLightIntensityAccumulator * 10000 / this.room.layers.wallsLayer.width / _Settings.default.TILE_SIZE * 100) / 100 + 0.3;
      return averageLightsContribute;
    }
  }]);

  return LightSourceManager;
}(_Manager2.default);

exports.default = LightSourceManager;
module.exports = exports.default;

/***/ }),

/***/ "./src/managers/updates/UpdateManager.js":
/*!***********************************************!*\
  !*** ./src/managers/updates/UpdateManager.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 153:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Manager2 = _interopRequireDefault(__webpack_require__(/*! ../Manager */ "./src/managers/Manager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class representing the update plugin.
 * @extends TDLib.Plugins.TDLRoomPlugin
 * @memberof TDLib.Plugins.RoomPlugins
 * @since 1.0.0
 */
var UpdateManager = /*#__PURE__*/function (_Manager) {
  _inherits(UpdateManager, _Manager);

  /**
   * Create a new UpdatePlugin.
   * @param {TDLib.Rooms.Room} room - The room in which the layer manager operates.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function UpdateManager(room, pluginManager) {
    _classCallCheck(this, UpdateManager);

    return _possibleConstructorReturn(this, (UpdateManager.__proto__ || Object.getPrototypeOf(UpdateManager)).call(this, room, pluginManager));
  }
  /**
   * Boot the plugin.
   * @since 1.0.0
   */


  _createClass(UpdateManager, [{
    key: "boot",
    value: function boot() {
      _get(UpdateManager.prototype.__proto__ || Object.getPrototypeOf(UpdateManager.prototype), "boot", this).call(this);

      var events = this.systems.events; // eslint-disable-next-line no-undef

      this.gameObjects = new Phaser.Structs.Set();
      events.on('update', this._sceneUpdate, this);
      events.on('shutdown', this._sceneShutdown, this);
      events.once('destroy', this._sceneDestroy, this);
    }
    /**
     * Update every game object.
     * @param {*} time
     * @param {*} delta
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_sceneUpdate",
    value: function _sceneUpdate(time, delta) {
      this.gameObjects.iterateLocal('update', time, delta);
    }
    /**
     * Called at the shutdown of the scene.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_sceneShutdown",
    value: function _sceneShutdown() {
      this.gameObjects.clear();
    }
    /**
     * Called when the scene is destroyed.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_sceneDestroy",
    value: function _sceneDestroy() {
      var events = this.systems.events;
      events.off('update', this._scenePostUpdate, this);
      events.off('shutdown', this._sceneShutdown, this);
      events.off('destroy', this._sceneDestroy, this);
      this.gameObjects = null;
      this.scene = null;
      this.systems = null;
    }
    /**
     * Add an object to the global update loop of the game.
     * @param {TDLib.Sprites.TDLSprite} obj - The object to add to the update loop.
     * @since 1.0.0
     */

  }, {
    key: "add",
    value: function add(obj) {
      obj.once('destroy', this.remove, this);
      this.gameObjects.set(obj);
    }
    /**
     * Add multiple objects to the global update loop of the game.
     * @param {TDLib.Sprites.TDLSprite[]} obj - The objects to add to the update loop.
     * @since 1.0.0
     */

  }, {
    key: "addMultiple",
    value: function addMultiple(objs) {
      objs.forEach(this.add, this);
    }
    /**
     * Remove an object from the global update loop of the game.
     * @param {TDLib.Sprites.TDLSprite} obj - The object to remove from the update loop.
     * @since 1.0.0
     */

  }, {
    key: "remove",
    value: function remove(obj) {
      obj.off('destroy', this.remove, this);
      this.gameObjects.delete(obj);
    }
  }]);

  return UpdateManager;
}(_Manager2.default);

exports.default = UpdateManager;
module.exports = exports.default;

/***/ }),

/***/ "./src/rooms/Room.js":
/*!***************************!*\
  !*** ./src/rooms/Room.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 310:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Settings = _interopRequireDefault(__webpack_require__(/*! ../boot/Settings */ "./src/boot/Settings.js"));

var _Utils = _interopRequireDefault(__webpack_require__(/*! ./Utils */ "./src/rooms/Utils.js"));

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The rooms namespace.
 * @namespace TDLib.Rooms
 * @since 1.0.0
 */

/**
 * Class representing a TDLRoom.
 * @extends Phaser.Scene
 * @memberof TDLib.Rooms
 * @since 1.0.0
 */
var Room = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Room, _Phaser$Scene);

  /**
   * Create a new TDLRoom.
   * @param {string} sceneKey - The unique key to identify the room.
   * @param {Object} rawAssets - The raw object of assets needed by the room. (Ripensarlo ?)
   */
  function Room(sceneKey, rawAssets) {
    var _this2;

    _classCallCheck(this, Room);

    _this2 = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, sceneKey));
    /**
       * This object contains an array with all the assets needed by the room.
       * @type {Object}
       * @since 1.0.0
       */

    _this2.assets = {
      raw: rawAssets,
      array: []
    };
    /**
       * The average contribute of light sources to the room.
       * @type {number}
       * @since 1.0.0
       */

    _this2.averageLightsContribute;
    /**
       * The Settings cursor manager.
       * @type {TDLib.Plugins.SettingsPlugins.CursorManager}
       * @since 1.0.0
       */

    _this2.cursors;
    /**
       * The layer manager of the room.
       * @type {TDLib.Plugins.RoomPlugins.LayerManager}
       * @since 1.0.0
       */

    _this2.layers;
    /**
       * The tilemap of the room.
       * @type {Phaser.Tilemaps.Tilemap}
       * @since 1.0.0
       */

    _this2.map;
    /**
       * The name of the room.
       * @type {string}
       * @since 1.0.0
       */

    _this2.name = _this2.constructor.name;
    /**
       * The instance of the TDLCharacter designated as player for the room.
       * @type {TDLib.Sprites.Characters.TDLCharacter}
       * @since 1.0.0
       */

    _this2.player;
    /**
       * The Settings room manager.
       * @type {TDLib.Plugins.SettingsPlugins.RoomManager}
       * @since 1.0.0
       */

    _this2.rooms;
    return _this2;
  }
  /**
   * The preload function is executed once and load all the assets needed by the room.
   * @since 1.0.0
   */


  _createClass(Room, [{
    key: "preload",
    value: function preload() {
      var _this3 = this;

      this._scrapeAssets();

      this.assets.array.forEach(function (obj) {
        if ('nPath' in obj) {
          _this3.load[obj.type](obj.key, [obj.path, obj.nPath]);
        } else if ('bPath' in obj) {
          _this3.load[obj.type](obj.key, obj.path);

          _this3.load[obj.type](obj.key + '_b', obj.bPath);
        } else {
          _this3.load[obj.type](obj.key, obj.path);
        }
      }); // Loading Border Camera Masks

      this.load.image('top-border-mask-camera', 'assets/Masks/topMaskCamera.png');
      this.load.image('bottom-border-mask-camera', 'assets/Masks/bottomMaskCamera.png');
      this.load.image('left-border-mask-camera', 'assets/Masks/leftMaskCamera.png');
      this.load.image('right-border-mask-camera', 'assets/Masks/rightMaskCamera.png');
    }
    /**
     * Scrape the object of raw assets.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_scrapeAssets",
    value: function _scrapeAssets() {
      var _this4 = this;

      for (var type in this.assets.raw) {
        _Utils.default.scrapeComplexObjKey(this.assets.raw[type], {
          type: type
        }, 'path', function (obj, params) {
          obj['type'] = params.type;
          obj['key'] = _Utils.default.findFileNameFromPath(obj.path);

          _this4.assets.array.push(obj);
        });
      }
    }
    /**
     * The create function is executed once, when the room is initialized.
     * @param {TDLib.Sprites.Characters.TDLCharacter} player - The instance of the player for the room.
     * @since 1.0.0
     */

  }, {
    key: "create",
    value: function create(player) {
      this.player = player.setName('player');
      this.lights.enable(); // Boot Phaser's LightManager
      // this.scene.bringToTop(CursorManager.CURSOR_SCENE_KEY); // Add the cursor to the Room

      this.scene.bringToTop('CursorScene');

      this._setCameraViewport();

      this._createRoom();

      this._createSprites();

      this._applyBorderMasks();

      this.layers.setLayersDepth(); // Camera bounds, anche il wallsLayer

      this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
      this.cameras.main.startFollow(this.player);
      this.cameras.main.setRoundPixels(true); // Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)

      this.physics.world.setBounds(_Settings.default.TILE_SIZE, _Settings.default.TILE_SIZE, this.layers.wallsLayer.width - 2 * _Settings.default.TILE_SIZE, this.layers.wallsLayer.height - 2 * _Settings.default.TILE_SIZE);
    }
    /**
     * Set the correct camera viewport.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_setCameraViewport",
    value: function _setCameraViewport() {
      if (_Settings.default.DEVICE === 'MOBILE') {
        this.cameras.main.setPosition((_Settings.default.ROOM_FRAME_IN_TILES_MOBILE + _Settings.default.INVENTORY_WIDTH_IN_TILES_MOBILE) * _Settings.default.TILE_SIZE, (_Settings.default.ROOM_FRAME_IN_TILES_MOBILE + _Settings.default.INVENTORY_HEIGHT_IN_TILES_MOBILE) * _Settings.default.TILE_SIZE);
        this.cameras.main.setSize( // eslint-disable-next-line max-len
        _Settings.default.SCREEN_PROPS.calculatedWidth - 2 * (_Settings.default.ROOM_FRAME_IN_TILES_MOBILE + _Settings.default.INVENTORY_WIDTH_IN_TILES_MOBILE) * _Settings.default.TILE_SIZE, _Settings.default.ROOM_HEIGHT_IN_TILE * _Settings.default.TILE_SIZE);
      } else {
        this.cameras.main.setPosition(_Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * _Settings.default.TILE_SIZE, _Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * _Settings.default.TILE_SIZE);
        this.cameras.main.setSize(_Settings.default.SCREEN_PROPS.calculatedWidth - 2 * _Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * _Settings.default.TILE_SIZE, _Settings.default.ROOM_HEIGHT_IN_TILE * _Settings.default.TILE_SIZE);
      }
    }
    /**
     * Create room tilemap and layers.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_createRoom",
    value: function _createRoom() {
      this.map = this.make.tilemap({
        key: _Utils.default.findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path),
        tileWidth: _Settings.default.TILE_SIZE,
        tileHeight: _Settings.default.TILE_SIZE
      });
      this.layers.backgroundLayer = this.map.createDynamicLayer('backgroundLayer', this.map.addTilesetImage(_Utils.default.findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0).setPipeline('Light2D');
      this.layers.wallsLayer = this.map.createDynamicLayer('wallsLayer', this.map.addTilesetImage(_Utils.default.findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
      this.layers.wallsMaskLayer = this.map.createDynamicLayer('wallsMaskLayer', this.map.addTilesetImage(_Utils.default.findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)), 0, 0);
    }
    /**
     * Create all the objects present in Tiled JSON map.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_createSprites",
    value: function _createSprites() {
      var _this5 = this;

      var _this = this;

      this.map.objects.forEach(function (layer) {
        layer.objects.forEach(function (element) {
          _this; // eslint-disable-next-line

          _this5[element.name] = new _Settings.default.GAME_SPRITES[element.type].default(_this, element.x + element.width / 2, element.y - element.height / 2);

          _this5[element.name].setName(element.name);
        });
      });
    }
    /**
     * Apply the four border masks to the camera.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_applyBorderMasks",
    value: function _applyBorderMasks() {
      this.layers.borderMasksLayer.create(0, 0, 'top-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(0, 0, 'left-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(this.cameras.main.width - _Settings.default.TILE_SIZE, 0, 'right-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
      this.layers.borderMasksLayer.create(0, this.cameras.main.height - _Settings.default.TILE_SIZE, 'bottom-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }
    /**
     * The update function is executed at every cycle of the game loop.
     * @since 1.0.0
     */

  }, {
    key: "update",
    value: function update() {
      this._updateMasksByLightDiffusion(); // Updates all Actions in  every ActionComponent (if present)


      this.children.list.forEach(function (element) {
        if ('actions' in element) {
          element.actions._update();
        }
      });
    }
    /**
     * Update the border masks alpha according to the average diffused light in the room.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_updateMasksByLightDiffusion",
    value: function _updateMasksByLightDiffusion() {
      this.averageLightsContribute = this.lightSources.calculateAverageLightsContribute();
      this.layers.wallsMaskLayer.setAlpha(1 - this.averageLightsContribute);
    }
  }]);

  return Room;
}(_phaser.default.Scene);

exports.default = Room;
module.exports = exports.default;

/***/ }),

/***/ "./src/rooms/Utils.js":
/*!****************************!*\
  !*** ./src/rooms/Utils.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 28:0-14 */
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Utils = {
  scrapeComplexObjKey: function scrapeComplexObjKey(obj, params, searchKey, callback) {
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        Utils.scrapeComplexObjKey(obj[i], params, searchKey, callback);
      }
    } else if (obj !== null && _typeof(obj) === 'object') {
      if (searchKey in obj) {
        callback(obj, params);
      } else {
        for (var prop in obj) {
          Utils.scrapeComplexObjKey(obj[prop], params, searchKey, callback);
        }
      }
    }
  },
  findFileNameFromPath: function findFileNameFromPath(path) {
    var nameFirstCharachterPosition = path.lastIndexOf('/') + 1;
    var nameLastCharachterPosition = path.lastIndexOf('.');
    if (nameFirstCharachterPosition === -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition === -1) return -1;
    var filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);
    return filename;
  }
};
module.exports = Utils;

/***/ }),

/***/ "./src/rooms/index.js":
/*!****************************!*\
  !*** ./src/rooms/index.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Rooms = {
  Room: __webpack_require__(/*! ./Room */ "./src/rooms/Room.js")
};
module.exports = Rooms;

/***/ }),

/***/ "./src/sprites/Sprite.js":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 268:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ../sprites/behaviours */ "./src/sprites/behaviours/index.js"));

var _BehaviourComponent = _interopRequireDefault(__webpack_require__(/*! ../components/BehaviourComponent */ "./src/components/BehaviourComponent.js"));

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Darkest Lib.
 * @namespace TDLib
 * @since 1.0.0
 */

/**
 * The actions namespace.
 * @namespace TDLib.Sprites
 * @since 1.0.0
 */

/**
 * Class representing a TDLSprite.
 * @extends Phaser.Physics.Arcade.Sprite
 * @memberof TDLib.Sprites
 * @since 1.0.0
 */
var Sprite = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(Sprite, _Phaser$Physics$Arcad);

  /**
   * Create a TDLSprite.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
   * @param {string} [layer=null] - The key of the layer which will contain the sprite.
   * @param {boolean} [hasBody=true] - Specify if the sprite has physics.
   * @param {string} [behaviourType=SpriteBehaviour.INERT] - Specify the behaviour of the sprite.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   * @param {string|string[]} [observeText] - The text which appears when observing the sprite.
   * @param {string|string[]} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
   * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
   * @param {string|string[]} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
   * @param {string|string[]} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
   * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
   * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
   * @param {boolean} [precisePosition=false] - Specify if to examine or interact with the sprite it's required to be precisely at the examineOrInteractPoint. (Probably not needed)
   */
  function Sprite(room, x, y, texture) {
    var _this;

    var layer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var hasBody = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
    var behaviourType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _behaviours.default.INERT;
    var pixelPerfect = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var observeText = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : _behaviours.default.DEFAULT_OBSERVE_TEXT;
    var examineOrInteractText = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : _behaviours.default.DEFAULT_EXAMINE_OR_INTERACT_TEXT;
    var blockExamineText = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
    var noLightObserveText = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : _behaviours.default.DEFAULT_NO_LIGHT_OBSERVE_TEXT;
    var noLightExamineOrInteractText = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : _behaviours.default.DEFAULT_NO_LIGHT_EXAMINE_OR_INTERACT_TEXT;
    var examineOrInteractOffsetX = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
    var examineOrInteractThresholdRadius = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
    var minLightLevelToExamineOrInteract = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : _behaviours.default.DEFAULT_MIN_LIGHT_LEVEL_TO_EXAMINE_OR_INTERACT;
    var minLightLevelToObserve = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : _behaviours.default.DEFAULT_MIN_LIGHT_LEVEL_TO_OBSERVE;

    _classCallCheck(this, Sprite);

    _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, room, x, y, texture));
    /**
     * The room where the sprite is created.
     * @type {TDLib.Rooms.TDLRoom}
     * @since 1.0.0
     */

    _this.room = room;
    /**
     * The name of the sprite, to map it in the room. Usually it's obtained by Tiled.
     * @type {string}
     * @since 1.0.0
     */

    _this.name;
    /**
     * The unique key of the sprite, composed by the sprite type and a 4 digits random integer number.
     * @type {string}
     * @since 1.0.0
     */

    _this.key = _this.constructor.name + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    /**
     * The type of the sprite.
     * @type {string}
     * @since 1.0.0
     */

    _this.type = _this.constructor.name;
    /**
     * The sprite behaviour component instance.
     * @type {TDLib.Components.SpriteBehaviourComponent}
     * @since 1.0.0
     */

    _this.behaviours = new _BehaviourComponent.default(_this, behaviourType, pixelPerfect);
    /**
     * The text which appears when observing the sprite.
         * @type {string}
         * @since 1.0.0
     */

    _this.observeText = observeText;
    /**
    * The text which appears when examine or interact with the sprite.
     * @type {string}
     * @since 1.0.0
    */

    _this.examineOrInteractText = examineOrInteractText;
    /**
     * If not null it's the blocking text which appears the first time the sprite is examined.
         * @type {string}
         * @since 1.0.0
     */

    _this.blockExamineText = blockExamineText;
    /**
     * The text which appears when observing the sprite when the diffused light is not sufficient.
         * @type {string}
         * @since 1.0.0
     */

    _this.noLightObserveText = noLightObserveText;
    /**
    * The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
     * @type {string}
     * @since 1.0.0
     */

    _this.noLightExamineOrInteractText = noLightExamineOrInteractText;
    /**
     * The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
     */

    _this.examineOrInteractOffsetX = examineOrInteractOffsetX;
    /**
     * The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */

    _this.examineOrInteractThresholdRadius = examineOrInteractThresholdRadius;
    /**
     * The minimum value of diffused light to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */

    _this.minLightLevelToExamineOrInteract = minLightLevelToExamineOrInteract;
    /**
    * The minimum value of diffused light to observe the sprite.
     * @type {number}
     * @since 1.0.0
     */

    _this.minLightLevelToObserve = minLightLevelToObserve;

    _this.room.add.existing(_this);

    _this.room.updates.add(_this);

    if (hasBody) {
      _this.room.physics.add.existing(_this);

      _this.setCollideWorldBounds(true);

      _this.setGravityY(10000);
    }

    if (layer != null) {
      if (layer in _this.room.layers) {
        _this.room.layers[layer].add(_this);

        _this.room.layers.setLayersDepth();
      } else console.warn('ALERT: layer not found for object', _this);
    }

    _this.create();

    return _this;
  }
  /**
   * The create function is executed once, immediately after the initialization of the sprite.
   * @since 1.0.0
   */


  _createClass(Sprite, [{
    key: "create",
    value: function create() {
      console.log('Created:', this.key, '- Type:', this.type, '- Behaviour:', this.behaviours.type);
      this.setPipeline('Light2D');
    }
    /**
     * The update is executed at every cycle of the game loop.
     * @since 1.0.0
     */

  }, {
    key: "update",
    value: function update() {}
    /**
     * Set the name property of a sprite.
     * @param {string} value - The name which is used to map a sprite in the room.
     * @return {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

  }, {
    key: "setName",
    value: function setName(value) {
      this.name = value;
      return this;
    } // Poichè è stata aggiunta la pixel perfect collision, valutare l'utilità di questa funzione!

  }, {
    key: "setHitAreaSize",
    value: function setHitAreaSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.width;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.height;
      var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var offsetY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.input.hitArea.setSize(width, height);
      this.input.hitArea.setPosition((this.width - width) / 2 + offsetX, (this.height - height) / 2 + offsetY);
    }
  }]);

  return Sprite;
}(_phaser.default.Physics.Arcade.Sprite);

exports.default = Sprite;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/Action.js":
/*!***************************************!*\
  !*** ./src/sprites/actions/Action.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! CommonJS bailout: module.exports is used directly at 268:0-14 */
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable max-len */

/**
 * Class representing a TDLAction.
 * @memberof TDLib.Components.Actions
 * @since 1.0.0
 */
var Action = /*#__PURE__*/function () {
  /**
   * Start a new TDLAction.
   * @param {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
   * @param {TDLSprite} actor - The actor who performs the action.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   */
  function Action(invoker, actor) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Action);

    /**
     * The invoker of the action.
     * @type {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    this.invoker = invoker;
    /**
     * The name of the action.
     * @type {string}
     * @since 1.0.0
     */

    this.name = this.constructor.name;
    /**
     * The actor who performs the action.
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    this.actor = actor;
    /**
     * The target of the action.
     * @type {Object|TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    this.target = config.target;
    /**
     * The config object for the action.
     * @type {Object}
     * @since 1.0.0
     */

    this.config = config;
    /**
     * The queue of actions.
     * @type {Array}
     * @private
     * @since 1.0.0
     */

    this._queue = [];
    /**
     * Tells if the action has been paused.
     * @type {boolean}
     * @since 1.0.0
     */

    this.isPaused = false;
  }
  /**
   * Add one or more new actions to the queue.
   * @param {TDLib.Components.Actions.TDLAction|TDLib.Components.Actions.TDLAction[]|TDLib.Components.Actions.TDLAction.BaseAction|TDLib.Components.Actions.TDLAction.BaseAction[]} actions - The new actions to add.
   * @since 1.0.0
   */


  _createClass(Action, [{
    key: "addActions",
    value: function addActions(actions) {
      var _this = this;

      if (Array.isArray(actions)) {
        actions.forEach(function (action) {
          _this._queue.push(action);
        });
      } else this._queue.push(actions);
    }
    /**
     * The blank action to create new composed and complex actions.
     * @typedef {TDLib.Components.Actions.TDLAction.BaseAction}
     *
     * @property {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
     * @property {Function} startCallback - The callback to execute at the beginning of the action.
     * @property {Function} [finishCallback] - The callback to execute at the end of the action.
     * @property {Function} [updateCallback]  - The callback to execute at every update loop.
     * @property {Function} [resumeCallback=startCallback] - The callback to execute when the action is paused.
     * @property {Function} [pauseCallback=finishCallback]  - The callback to execute when the action is resumed.
     * @since 1.0.0
     */

  }, {
    key: "_abort",

    /**
     * Abort an uncompleted action.
     * @private
     * @since 1.0.0
     */
    value: function _abort() {
      if (this._queue.length > 0) this._queue[0]._abort();
    }
    /**
     * Start an action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_start",
    value: function _start() {
      if (this._queue.length > 0) this._queue[0]._start();
    }
    /**
     * Finish a completed action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "finish",
    value: function finish() {
      if (this._queue.length > 0) this._queue[0].finish();
    }
    /**
     * Remove a completed action from the queue.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_remove",
    value: function _remove() {
      if (this._queue.length > 0) this._queue.shift();
      if (this._queue.length <= 0) this.invoker._remove();else this._queue[0]._start();
    }
    /**
     * Pause an action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_pause",
    value: function _pause() {
      if (this._queue.length > 0) {
        this._queue[0]._pause();

        this.isPaused = true;
      }
    }
    /**
     * Resume a paused action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_resume",
    value: function _resume() {
      if (this._queue.length > 0) {
        this.isPaused = false;

        this._queue[0]._resume();
      }
    }
    /**
     * Update the currently performed action.
     * @private
     * @since 1.0.0
     */

  }, {
    key: "_update",
    value: function _update() {
      if (this._queue.length > 0) this._queue[0]._update();
    }
  }], [{
    key: "BaseAction",
    get: function get() {
      return /*#__PURE__*/function () {
        function BaseAction(invoker, startCallback) {
          var finishCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
          var updateCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
          var resumeCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : startCallback;
          var pauseCallback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : finishCallback;

          _classCallCheck(this, BaseAction);

          this.invoker = invoker;
          this.startCallback = startCallback;
          this.finishCallback = finishCallback;
          this.updateCallback = updateCallback;
          this.resumeCallback = resumeCallback;
          this.pauseCallback = pauseCallback;
          this.isPaused = false;
        }

        _createClass(BaseAction, [{
          key: "_start",
          value: function _start() {
            this.startCallback();
          }
        }, {
          key: "finish",
          value: function finish() {
            this.finishCallback();

            this.invoker._remove();
          }
        }, {
          key: "_abort",
          value: function _abort() {
            this.finishCallback();
          }
        }, {
          key: "_resume",
          value: function _resume() {
            this.isPaused = false;
            this.resumeCallback();
          }
        }, {
          key: "_pause",
          value: function _pause() {
            this.pauseCallback();
            this.isPaused = true;
          }
        }, {
          key: "_update",
          value: function _update() {
            this.updateCallback();
          }
        }]);

        return BaseAction;
      }();
    }
  }]);

  return Action;
}();

exports.default = Action;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/examine/Examine.js":
/*!************************************************!*\
  !*** ./src/sprites/actions/examine/Examine.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _WalkTo = _interopRequireDefault(__webpack_require__(/*! ../walk-to/WalkTo */ "./src/sprites/actions/walk-to/WalkTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Examine = /*#__PURE__*/function (_Action) {
  _inherits(Examine, _Action);

  function Examine(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Examine);

    _this = _possibleConstructorReturn(this, (Examine.__proto__ || Object.getPrototypeOf(Examine)).apply(this, arguments));

    _this.addActions([new _WalkTo.default(_this, _this.actor, _this.config), _this.target.behaviours.examine.getAction(_this)]);

    return _this;
  }

  return Examine;
}(_Action2.default);

exports.default = Examine;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/face-to/FaceTo.js":
/*!***********************************************!*\
  !*** ./src/sprites/actions/face-to/FaceTo.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 67:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _const = _interopRequireDefault(__webpack_require__(/*! ../../../const */ "./src/const.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/sprites/actions/face-to/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FaceTo = /*#__PURE__*/function (_Action) {
  _inherits(FaceTo, _Action);

  function FaceTo(invoker, actor, config) {
    var _this;

    _classCallCheck(this, FaceTo);

    _this = _possibleConstructorReturn(this, (FaceTo.__proto__ || Object.getPrototypeOf(FaceTo)).apply(this, arguments));

    _this.addActions(new _Action2.default.BaseAction(_this, function () {
      if (Math.abs(_this.actor.x - _this.target.x) > _Settings.default.MICRO_MOVEMENT_RADIUS) {
        if (_this.actor.facing === _const.default.RIGHT) {
          if (_this.actor.x > _this.target.x) {
            _this.actor.facing = _const.default.LEFT;

            _this.actor.setFlipX(true); // this.actor.anims.play('idleLeft');

          }
        } else if (_this.actor.facing === _const.default.LEFT) {
          if (_this.actor.x < _this.target.x) {
            _this.actor.facing = _const.default.RIGHT;

            _this.actor.setFlipX(false); // this.actor.anims.play('idleRight');

          }
        }
      }

      _this.finish();
    }));

    return _this;
  }

  return FaceTo;
}(_Action2.default);

exports.default = FaceTo;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/face-to/Settings.js":
/*!*************************************************!*\
  !*** ./src/sprites/actions/face-to/Settings.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

var Settings = {
  MICRO_MOVEMENT_RADIUS: 6
};
module.exports = Settings;

/***/ }),

/***/ "./src/sprites/actions/idle/Idle.js":
/*!******************************************!*\
  !*** ./src/sprites/actions/idle/Idle.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 77:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _const = _interopRequireDefault(__webpack_require__(/*! ../../../const */ "./src/const.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class representing the idle action.
 * @extends TDLib.Components.Actions.Action
 * @memberof TDLib.Components.Actions
 */
var Idle = /*#__PURE__*/function (_Action) {
  _inherits(Idle, _Action);

  /**
   * Start a new idle action.
   * @param {Components.ActionComponent|Components.Actions.TDLAction} invoker - The invoker of the action.
   * @param {TDLSprite} actor - The actor who performs the action.
   * @param {Object} config - The config object for the action.
   * @param {Object} config.target - The target of the action.
   * @param {number} config.target.x - The x of the target of the action.
   */
  function Idle(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Idle);

    _this = _possibleConstructorReturn(this, (Idle.__proto__ || Object.getPrototypeOf(Idle)).apply(this, arguments));

    _this.addActions(new _Action2.default.BaseAction(_this, function () {
      _this.actor.body.setVelocity(0);

      switch (_this.actor.facing) {
        case _const.default.LEFT:
          {
            _this.actor.anims.play('idle'); // this.actor.anims.play('idleLeft');

          }
          break;

        case _const.default.RIGHT:
          {
            _this.actor.anims.play('idle'); // this.actor.anims.play('idleRight');

          }
          break;
        // possibili altri casi di facing (es girato di spalle o da davanti)
      }
    }));

    return _this;
  }

  return Idle;
}(_Action2.default);

exports.default = Idle;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/index.js":
/*!**************************************!*\
  !*** ./src/sprites/actions/index.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 11:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Actions = {
  Action: __webpack_require__(/*! ./Action */ "./src/sprites/actions/Action.js"),
  Examine: __webpack_require__(/*! ./examine/Examine */ "./src/sprites/actions/examine/Examine.js"),
  FaceTo: __webpack_require__(/*! ./face-to/FaceTo */ "./src/sprites/actions/face-to/FaceTo.js"),
  Idle: __webpack_require__(/*! ./idle/Idle */ "./src/sprites/actions/idle/Idle.js"),
  Interact: __webpack_require__(/*! ./interact/Interact */ "./src/sprites/actions/interact/Interact.js"),
  Observe: __webpack_require__(/*! ./observe/Observe */ "./src/sprites/actions/observe/Observe.js"),
  RunTo: __webpack_require__(/*! ./run-to/RunTo */ "./src/sprites/actions/run-to/RunTo.js"),
  WalkTo: __webpack_require__(/*! ./walk-to/WalkTo */ "./src/sprites/actions/walk-to/WalkTo.js")
};
module.exports = Actions;

/***/ }),

/***/ "./src/sprites/actions/interact/Interact.js":
/*!**************************************************!*\
  !*** ./src/sprites/actions/interact/Interact.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _WalkTo = _interopRequireDefault(__webpack_require__(/*! ../walk-to/WalkTo */ "./src/sprites/actions/walk-to/WalkTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Interact = /*#__PURE__*/function (_Action) {
  _inherits(Interact, _Action);

  function Interact(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Interact);

    _this = _possibleConstructorReturn(this, (Interact.__proto__ || Object.getPrototypeOf(Interact)).apply(this, arguments));

    _this.addActions([new _WalkTo.default(_this, _this.actor, _this.config), _this.target.behaviours.interact.getAction(_this)]);

    return _this;
  }

  return Interact;
}(_Action2.default);

exports.default = Interact;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/observe/Observe.js":
/*!************************************************!*\
  !*** ./src/sprites/actions/observe/Observe.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _FaceTo = _interopRequireDefault(__webpack_require__(/*! ../face-to/FaceTo */ "./src/sprites/actions/face-to/FaceTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Observe = /*#__PURE__*/function (_Action) {
  _inherits(Observe, _Action);

  function Observe(invoker, actor, config) {
    var _this;

    _classCallCheck(this, Observe);

    _this = _possibleConstructorReturn(this, (Observe.__proto__ || Object.getPrototypeOf(Observe)).apply(this, arguments));

    _this.addActions([new _FaceTo.default(_this, _this.actor, _this.config), _this.target.behaviours.observe.getAction(_this)]);

    return _this;
  }

  return Observe;
}(_Action2.default);

exports.default = Observe;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/run-to/RunTo.js":
/*!*********************************************!*\
  !*** ./src/sprites/actions/run-to/RunTo.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 70:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _FaceTo = _interopRequireDefault(__webpack_require__(/*! ../face-to/FaceTo */ "./src/sprites/actions/face-to/FaceTo.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/sprites/actions/run-to/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// da cambiare e mettere tutta dentro l'AWalkTo e fare un Move to che distingua che azioni chiamare?
var RunTo = /*#__PURE__*/function (_Action) {
  _inherits(RunTo, _Action);

  function RunTo(invoker, actor, config) {
    var _this;

    _classCallCheck(this, RunTo);

    _this = _possibleConstructorReturn(this, (RunTo.__proto__ || Object.getPrototypeOf(RunTo)).apply(this, arguments));

    _this.addActions([new _FaceTo.default(_this, _this.actor, _this.config), new _Action2.default.BaseAction(_this, function () {
      if (Math.abs(_this.actor.x - _this.target.x) > _Settings.default.MICRO_MOVEMENT_RADIUS) {
        if (_this.actor.x < _this.target.x) {
          _this.actor.anims.play('run'); // this.actor.anims.play('runRight');


          _this.actor.body.setVelocity(_Settings.default.RUN_VELOCITY);
        } else if (_this.actor.x > _this.target.x) {
          _this.actor.anims.play('run'); // this.actor.anims.play('runLeft');


          _this.actor.body.setVelocity(-_Settings.default.RUN_VELOCITY);
        }

        console.log('start to run to ', config.target.x);
      } else {
        _this.finish();
      }
    }, function () {
      _this.actor.body.setVelocity(0);
    }, function () {
      if ((_this.actor.x - _this.target.x) * _this.actor.body.velocity.x > 0) _this.finish();
    })]);

    return _this;
  }

  return RunTo;
}(_Action2.default);

exports.default = RunTo;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/actions/run-to/Settings.js":
/*!************************************************!*\
  !*** ./src/sprites/actions/run-to/Settings.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

var Settings = {
  RUN_VELOCITY: 240,
  MICRO_MOVEMENT_RADIUS: 20
};
module.exports = Settings;

/***/ }),

/***/ "./src/sprites/actions/walk-to/Settings.js":
/*!*************************************************!*\
  !*** ./src/sprites/actions/walk-to/Settings.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

var Settings = {
  WALK_VELOCITY: 100,
  MICRO_MOVEMENT_RADIUS: 20
};
module.exports = Settings;

/***/ }),

/***/ "./src/sprites/actions/walk-to/WalkTo.js":
/*!***********************************************!*\
  !*** ./src/sprites/actions/walk-to/WalkTo.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 67:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action2 = _interopRequireDefault(__webpack_require__(/*! ../Action */ "./src/sprites/actions/Action.js"));

var _FaceTo = _interopRequireDefault(__webpack_require__(/*! ../face-to/FaceTo */ "./src/sprites/actions/face-to/FaceTo.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/sprites/actions/walk-to/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WalkTo = /*#__PURE__*/function (_Action) {
  _inherits(WalkTo, _Action);

  function WalkTo(invoker, actor, config) {
    var _this;

    _classCallCheck(this, WalkTo);

    _this = _possibleConstructorReturn(this, (WalkTo.__proto__ || Object.getPrototypeOf(WalkTo)).apply(this, arguments));

    _this.addActions([new _FaceTo.default(_this, _this.actor, _this.config), new _Action2.default.BaseAction(_this, function () {
      if (Math.abs(_this.actor.x - _this.target.x) > _Settings.default.MICRO_MOVEMENT_RADIUS) {
        if (_this.actor.x < _this.target.x) {
          _this.actor.anims.play('walk'); // this.actor.anims.play('walkRight');


          _this.actor.body.setVelocity(_Settings.default.WALK_VELOCITY);
        } else if (_this.actor.x > _this.target.x) {
          _this.actor.anims.play('walk'); // this.actor.anims.play('walkLeft');


          _this.actor.body.setVelocity(-_Settings.default.WALK_VELOCITY);
        }
      } else {
        _this.finish();
      }
    }, function () {
      _this.actor.body.setVelocity(0);
    }, function () {
      if ((_this.actor.x - _this.target.x) * _this.actor.body.velocity.x > 0) _this.finish();
    })]);

    return _this;
  }

  return WalkTo;
}(_Action2.default);

exports.default = WalkTo;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/behaviours/Behaviour.js":
/*!*********************************************!*\
  !*** ./src/sprites/behaviours/Behaviour.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 103:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Action = _interopRequireDefault(__webpack_require__(/*! ../actions/Action */ "./src/sprites/actions/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing the behaviour of a sprite.
 * @memberof TDLib.Components.SpriteBehaviours
 * @since 1.0.0
 */
var Behaviour = /*#__PURE__*/function () {
  /**
   * Create a SpriteBehaviour.
   * @param {TDLib.Components.SpriteBehaviourComponent} component - The component which has invoked the behaviour.
   */
  function Behaviour(component) {
    _classCallCheck(this, Behaviour);

    /**
     * The component which has invoked the behaviour.
     * @type {TDLib.Components.SpriteBehaviourComponent}
     * @since 1.0.0
     */
    this.component = component;
    /**
     * The global cursor manager.
     * @type {TDLib.Plugins.GlobalPlugins.CursorManager}
     * @since 1.0.0
     */

    this.cursors = this.component.gameObject.room.cursors;
    /**
     * The sprite which has invoked the behaviour.
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    this.gameObject = this.component.gameObject;
    /**
     * The room where the gameObject lives.
     * @type {TDLib.Rooms.TDLRoom}
     * @since 1.0.0
     */

    this.room = this.component.gameObject.room;
    this.add();
  }
  /**
   * Set the gameObject as interactive.
   * @since 1.0.0
   */


  _createClass(Behaviour, [{
    key: "add",
    value: function add() {
      if (this.component.pixelPerfect === null) this.component.gameObject.setInteractive();else {
        this.component.gameObject.setInteractive({
          pixelPerfect: true,
          alphaTolerance: this.component.pixelPerfect.alphaTolerance,
          draggable: false
        });
      }
    }
    /**
     * Generate a proper action according to the behaviour and the gameObject settings.
     * @return {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */

  }, {
    key: "getAction",
    value: function getAction(invoker) {
      return new _Action.default.BaseAction(invoker, function () {
        console.log('Sono una generica action dei behaviour');
        invoker.finish();
      });
    }
  }, {
    key: "checkLight",
    value: function checkLight(value) {
      if (this.room.lightSources.calculateLightsContribuitePoint(this.gameObject) >= value) return true;
      return false;
    }
  }]);

  return Behaviour;
}();

exports.default = Behaviour;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/behaviours/const.js":
/*!*****************************************!*\
  !*** ./src/sprites/behaviours/const.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 14:0-14 */
/***/ ((module) => {

var CONST = {
  EXAMINABLE: 'EXAMINABLE',
  INERT: 'INERT',
  INTERACTIVE: 'INTERACTIVE',
  TALKABLE: 'TALKABLE',
  INVENTORY: 'INVENTORY',
  DEFAULT_MIN_LIGHT_LEVEL_TO_OBSERVE: 0.05,
  DEFAULT_OBSERVE_TEXT: 'Observe default text',
  DEFAULT_NO_LIGHT_OBSERVE_TEXT: 'NoLightObserve default text',
  DEFAULT_MIN_LIGHT_LEVEL_TO_EXAMINE_OR_INTERACT: 0.04,
  DEFAULT_EXAMINE_OR_INTERACT_TEXT: 'ExamineOrInteract default text',
  DEFAULT_NO_LIGHT_EXAMINE_OR_INTERACT_TEXT: 'NoLightExamineOrInteract default text'
};
module.exports = CONST;

/***/ }),

/***/ "./src/sprites/behaviours/examinable/Examinable.js":
/*!*********************************************************!*\
  !*** ./src/sprites/behaviours/examinable/Examinable.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 65:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Behaviour2 = _interopRequireDefault(__webpack_require__(/*! ../Behaviour */ "./src/sprites/behaviours/Behaviour.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! ../../actions/Action */ "./src/sprites/actions/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Examinable = /*#__PURE__*/function (_Behaviour) {
  _inherits(Examinable, _Behaviour);

  function Examinable(component) {
    _classCallCheck(this, Examinable);

    return _possibleConstructorReturn(this, (Examinable.__proto__ || Object.getPrototypeOf(Examinable)).call(this, component));
  }
  /**
   * Generate a proper action according to the behaviour and the gameObject settings.
   * @return {TDLib.Components.Actions.TDLAction}
   * @since 1.0.0
   */


  _createClass(Examinable, [{
    key: "getAction",
    value: function getAction(invoker) {
      var _this = this;

      return new _Action.default.BaseAction(invoker, function () {
        // Fare i controlli su quanta luce c'è nella stanza!
        if (_this.checkLight(_this.gameObject.minLightLevelToExamineOrInteract)) {
          console.log(_this.gameObject.examineOrInteractText);
        } else console.log(_this.gameObject.noLightExamineOrInteractText);

        invoker.finish();
      });
    }
  }]);

  return Examinable;
}(_Behaviour2.default);

exports.default = Examinable;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/behaviours/index.js":
/*!*****************************************!*\
  !*** ./src/sprites/behaviours/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _const = _interopRequireDefault(__webpack_require__(/*! ./const */ "./src/sprites/behaviours/const.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Behaviours = {
  Behaviour: __webpack_require__(/*! ./Behaviour */ "./src/sprites/behaviours/Behaviour.js"),
  Examinable: __webpack_require__(/*! ./examinable/Examinable */ "./src/sprites/behaviours/examinable/Examinable.js"),
  Interactive: __webpack_require__(/*! ./interactive/Interactive */ "./src/sprites/behaviours/interactive/Interactive.js"),
  Observable: __webpack_require__(/*! ./observable/Observable */ "./src/sprites/behaviours/observable/Observable.js"),
  Talkable: __webpack_require__(/*! ./talkable/Talkable */ "./src/sprites/behaviours/talkable/Talkable.js"),
  Inventory: __webpack_require__(/*! ./inventory/Inventory */ "./src/sprites/behaviours/inventory/Inventory.js")
}; // eslint-disable-next-line no-undef

Behaviours = Phaser.Utils.Objects.Extend(false, Behaviours, _const.default);
module.exports = Behaviours;

/***/ }),

/***/ "./src/sprites/behaviours/interactive/Interactive.js":
/*!***********************************************************!*\
  !*** ./src/sprites/behaviours/interactive/Interactive.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 65:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Behaviour2 = _interopRequireDefault(__webpack_require__(/*! ../Behaviour */ "./src/sprites/behaviours/Behaviour.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! ../../actions/Action */ "./src/sprites/actions/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Interactive = /*#__PURE__*/function (_Behaviour) {
  _inherits(Interactive, _Behaviour);

  function Interactive(component) {
    _classCallCheck(this, Interactive);

    return _possibleConstructorReturn(this, (Interactive.__proto__ || Object.getPrototypeOf(Interactive)).call(this, component));
  }
  /**
   * Generate a proper action according to the behaviour and the gameObject settings.
   * @return {TDLib.Components.Actions.TDLAction}
   * @since 1.0.0
   */


  _createClass(Interactive, [{
    key: "getAction",
    value: function getAction(invoker) {
      var _this = this;

      return new _Action.default.BaseAction(invoker, function () {
        // Fare i controlli su quanta luce c'è nella stanza!
        if (_this.checkLight(_this.gameObject.minLightLevelToExamineOrInteract)) {
          console.log(_this.gameObject.examineOrInteractText);
        } else console.log(_this.gameObject.noLightExamineOrInteractText);

        invoker.finish();
      });
    }
  }]);

  return Interactive;
}(_Behaviour2.default);

exports.default = Interactive;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/behaviours/inventory/Inventory.js":
/*!*******************************************************!*\
  !*** ./src/sprites/behaviours/inventory/Inventory.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = function Inventory() {
  _classCallCheck(this, Inventory);
};

exports.default = Inventory;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/behaviours/observable/Observable.js":
/*!*********************************************************!*\
  !*** ./src/sprites/behaviours/observable/Observable.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 110:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Behaviour2 = _interopRequireDefault(__webpack_require__(/*! ../Behaviour */ "./src/sprites/behaviours/Behaviour.js"));

var _actions = _interopRequireDefault(__webpack_require__(/*! ../../actions */ "./src/sprites/actions/index.js"));

var _Settings = _interopRequireDefault(__webpack_require__(/*! ./Settings */ "./src/sprites/behaviours/observable/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Observable = /*#__PURE__*/function (_Behaviour) {
  _inherits(Observable, _Behaviour);

  function Observable(component) {
    var _this;

    _classCallCheck(this, Observable);

    _this = _possibleConstructorReturn(this, (Observable.__proto__ || Object.getPrototypeOf(Observable)).call(this, component));
    _this._timer;
    return _this;
  }

  _createClass(Observable, [{
    key: "add",
    value: function add() {
      _get(Observable.prototype.__proto__ || Object.getPrototypeOf(Observable.prototype), "add", this).call(this);

      this.gameObject.on('pointerover', function (pointer) {
        var _this2 = this;

        this.cursors.setCursor(this.gameObject);
        this._timer = this.gameObject.room.time.addEvent({
          delay: _Settings.default.DEFAULT_MIN_TIME_TO_OBSERVE,
          callback: function callback() {
            if (_this2.gameObject !== _this2.room.player && !_this2.room.player.isBlocked) {
              _this2.room.player.actions.add(_actions.default.Observe, {
                target: _this2.gameObject
              });
            }
          },
          callbackScope: this
        });
      }.bind(this));
      this.gameObject.on('pointerout', function (pointer) {
        this._timer.remove(false);

        this.cursors.setCursor();
      }.bind(this));
    }
    /**
     * Delete the timer which starts the AObserve action.
     */

  }, {
    key: "abort",
    value: function abort() {
      this._timer.remove(false);
    }
    /**
     * Generate a proper action according to the behaviour and the gameObject settings.
     * @return {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */

  }, {
    key: "getAction",
    value: function getAction(invoker) {
      var _this3 = this;

      return new _actions.default.Action.BaseAction(invoker, function () {
        // Fare i controlli su quanta luce c'è nella stanza!
        if (_this3.checkLight(_this3.gameObject.minLightLevelToObserve)) console.log(_this3.gameObject.observeText);else console.log(_this3.gameObject.noLightObserveText);
        invoker.finish();
      });
    }
  }]);

  return Observable;
}(_Behaviour2.default);

exports.default = Observable;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/behaviours/observable/Settings.js":
/*!*******************************************************!*\
  !*** ./src/sprites/behaviours/observable/Settings.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

var Settings = {
  DEFAULT_MIN_TIME_TO_OBSERVE: 1200
};
module.exports = Settings;

/***/ }),

/***/ "./src/sprites/behaviours/talkable/Talkable.js":
/*!*****************************************************!*\
  !*** ./src/sprites/behaviours/talkable/Talkable.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "./src/sprites/characters/Character.js":
/*!*********************************************!*\
  !*** ./src/sprites/characters/Character.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 101:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Sprite2 = _interopRequireDefault(__webpack_require__(/*! ../Sprite */ "./src/sprites/Sprite.js"));

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ../behaviours */ "./src/sprites/behaviours/index.js"));

var _components = _interopRequireDefault(__webpack_require__(/*! ../../components */ "./src/components/index.js"));

var _const = _interopRequireDefault(__webpack_require__(/*! ../../const */ "./src/const.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The characters namespace.
 * @namespace TDLib.Sprites.Characters
 * @since 1.0.0
 */

/**
 * Class representing a Character.
 * @extends TDLib.Sprites.Sprite
 * @memberof TDLib.Sprites.Characters
 * @since 1.0.0
 */
var Character = /*#__PURE__*/function (_Sprite) {
  _inherits(Character, _Sprite);

  /**
   * Create a new Character.
   * @param {Room} room - The room where the character is created.
   * @param {number} x - The x coordinate of the character.
   * @param {number} y - The y coordinate of the character.
   * @param {string} texture - The character's graphic.
   * @param {string} layer - The character's layer.
   */
  function Character(room, x, y, texture, layer) {
    var _ref;

    var _this;

    _classCallCheck(this, Character);

    _this = _possibleConstructorReturn(this, (_ref = Character.__proto__ || Object.getPrototypeOf(Character)).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments), [true, _behaviours.default.INTERACTIVE, {
      alphaTolerance: 1
    }])));
    /**
     * The ActionComponent for this character.
     * @type {Components.ActionComponent}
     * @since 1.0.0
     */

    _this.actions = new _components.default.ActionComponent(_this);
    /**
     * The facing of the character.
     * @type {TDLCharacter.FACING}
     * @since 1.0.0
     */

    _this.facing = _const.default.RIGHT;
    return _this;
  }

  _createClass(Character, [{
    key: "create",
    value: function create() {
      _get(Character.prototype.__proto__ || Object.getPrototypeOf(Character.prototype), "create", this).call(this);
    }
  }]);

  return Character;
}(_Sprite2.default);

exports.default = Character;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/characters/index.js":
/*!*****************************************!*\
  !*** ./src/sprites/characters/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Characters = {
  NPCharacter: __webpack_require__(/*! ./npc-characters/NPCharacter */ "./src/sprites/characters/npc-characters/NPCharacter.js"),
  Player: __webpack_require__(/*! ./players/Player */ "./src/sprites/characters/players/Player.js")
};
module.exports = Characters;

/***/ }),

/***/ "./src/sprites/characters/npc-characters/NPCharacter.js":
/*!**************************************************************!*\
  !*** ./src/sprites/characters/npc-characters/NPCharacter.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Character2 = _interopRequireDefault(__webpack_require__(/*! ../Character */ "./src/sprites/characters/Character.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NPCharacter = /*#__PURE__*/function (_Character) {
  _inherits(NPCharacter, _Character);

  function NPCharacter(room, x, y, texture, layer) {
    _classCallCheck(this, NPCharacter);

    return _possibleConstructorReturn(this, (NPCharacter.__proto__ || Object.getPrototypeOf(NPCharacter)).call(this, room, x, y, texture, layer));
  }

  return NPCharacter;
}(_Character2.default);

exports.default = NPCharacter;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/characters/players/Player.js":
/*!**************************************************!*\
  !*** ./src/sprites/characters/players/Player.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 62:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Character2 = _interopRequireDefault(__webpack_require__(/*! ../Character */ "./src/sprites/characters/Character.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Player = /*#__PURE__*/function (_Character) {
  _inherits(Player, _Character);

  function Player(room, x, y, texture) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, room, x, y, texture, 'playerLayer'));
    _this.isBlocked = false;
    return _this;
  }

  _createClass(Player, [{
    key: "create",
    value: function create() {
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), "create", this).call(this);

      this.room.input.on('pointerdown', function (pointer) {
        this.room.cursors.pointerDown(this);
      }, this);
    }
  }]);

  return Player;
}(_Character2.default);

exports.default = Player;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/Effect.js":
/*!***************************************!*\
  !*** ./src/sprites/effects/Effect.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 54:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _EffectComponent = _interopRequireDefault(__webpack_require__(/*! ../../components/EffectComponent */ "./src/components/EffectComponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Effect = /*#__PURE__*/function () {
  function Effect(invoker) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Effect);

    this.invoker = invoker;
    this.config = config;
    this.gameObject = invoker.gameObject;
    this.name = this.constructor.name;
  }

  _createClass(Effect, [{
    key: "play",
    value: function play() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (this.invoker instanceof _EffectComponent.default) {
        callback();
      } else console.log('Effects can only be played by the EffectComponent');
    }
  }, {
    key: "stop",
    value: function stop() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (this.invoker instanceof _EffectComponent.default) {
        callback();
      } else console.log('Effects can only be stopped by the EffectComponent');
    }
  }]);

  return Effect;
}();

exports.default = Effect;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/index.js":
/*!**************************************!*\
  !*** ./src/sprites/effects/index.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Effects = {
  Effect: __webpack_require__(/*! ./Effect */ "./src/sprites/effects/Effect.js"),
  LightEffects: __webpack_require__(/*! ./light-effects */ "./src/sprites/effects/light-effects/index.js")
};
module.exports = Effects;

/***/ }),

/***/ "./src/sprites/effects/light-effects/HardFlickering.js":
/*!*************************************************************!*\
  !*** ./src/sprites/effects/light-effects/HardFlickering.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 108:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _LightEffect2 = _interopRequireDefault(__webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HardFlickering = /*#__PURE__*/function (_LightEffect) {
  _inherits(HardFlickering, _LightEffect);

  function HardFlickering(invoker, config) {
    var _this;

    _classCallCheck(this, HardFlickering);

    _this = _possibleConstructorReturn(this, (HardFlickering.__proto__ || Object.getPrototypeOf(HardFlickering)).call(this, invoker, config, 0.5));
    if (!_this.config.minTime) _this.config.minTime = 10;
    if (!_this.config.maxTime) _this.config.maxTime = 400;
    if (!_this.config.finalState) _this.config.finalState = 'on';
    return _this;
  }

  _createClass(HardFlickering, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      _get(HardFlickering.prototype.__proto__ || Object.getPrototypeOf(HardFlickering.prototype), "play", this).call(this, function () {
        var setTimer = function setTimer() {
          _this2.gameObject.room.time.addEvent({
            delay: Math.floor(Math.random() * (_this2.config.maxTime - _this2.config.minTime)) + _this2.config.minTime,
            callback: function callback() {
              if (!_this2.stopped) {
                if (_this2.gameObject.initialConfig.graphicLight !== null) {
                  if (_this2.gameObject.graphicLight.intensity === 0) {
                    _this2.gameObject.graphicLight.setIntensity(_this2.gameObject.initialConfig.graphicLight.intensity);
                  } else _this2.gameObject.graphicLight.setIntensity(0);
                }

                if (_this2.gameObject.initialConfig.diffusedLight !== null) {
                  if (_this2.gameObject.diffusedLight.intensity === 0) {
                    _this2.gameObject.diffusedLight.setIntensity(_this2.gameObject.initialConfig.diffusedLight.intensity);
                  } else _this2.gameObject.diffusedLight.setIntensity(0);
                }

                setTimer();
              }
            },
            callbackScope: _this2,
            repeat: 0
          });
        };

        setTimer();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      _get(HardFlickering.prototype.__proto__ || Object.getPrototypeOf(HardFlickering.prototype), "stop", this).call(this, function () {
        if (_this3.config.finalState === 'on') {
          if (_this3.gameObject.initialConfig.graphicLight !== null) {
            _this3.gameObject.graphicLight.setIntensity(_this3.gameObject.initialConfig.graphicLight.intensity);
          }

          if (_this3.gameObject.initialConfig.diffusedLight !== null) {
            _this3.gameObject.diffusedLight.setIntensity(_this3.gameObject.initialConfig.diffusedLight.intensity);
          }
        } else if (_this3.config.finalState === 'off') {
          _this3.gameObject.turnOff();
        }
      });
    }
  }]);

  return HardFlickering;
}(_LightEffect2.default);

exports.default = HardFlickering;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/HardFlickeringAndTrembling.js":
/*!*************************************************************************!*\
  !*** ./src/sprites/effects/light-effects/HardFlickeringAndTrembling.js ***!
  \*************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 80:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _LightEffect2 = _interopRequireDefault(__webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"));

var _HardFlickering = _interopRequireDefault(__webpack_require__(/*! ./HardFlickering */ "./src/sprites/effects/light-effects/HardFlickering.js"));

var _Trembling = _interopRequireDefault(__webpack_require__(/*! ./Trembling */ "./src/sprites/effects/light-effects/Trembling.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HardFlickeringAndTrembling = /*#__PURE__*/function (_LightEffect) {
  _inherits(HardFlickeringAndTrembling, _LightEffect);

  function HardFlickeringAndTrembling(invoker, config) {
    var _this;

    _classCallCheck(this, HardFlickeringAndTrembling);

    _this = _possibleConstructorReturn(this, (HardFlickeringAndTrembling.__proto__ || Object.getPrototypeOf(HardFlickeringAndTrembling)).call(this, invoker, config, 0.5));
    _this.hardFlickering = new _HardFlickering.default(_this.invoker, _this.config);
    _this.trembling = new _Trembling.default(_this.invoker, _this.config);
    return _this;
  }

  _createClass(HardFlickeringAndTrembling, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      _get(HardFlickeringAndTrembling.prototype.__proto__ || Object.getPrototypeOf(HardFlickeringAndTrembling.prototype), "play", this).call(this, function () {
        _this2.hardFlickering.play();

        _this2.trembling.play();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      _get(HardFlickeringAndTrembling.prototype.__proto__ || Object.getPrototypeOf(HardFlickeringAndTrembling.prototype), "stop", this).call(this, function () {
        _this3.hardFlickering.stop();

        _this3.trembling.stop();
      });
    }
  }]);

  return HardFlickeringAndTrembling;
}(_LightEffect2.default);

exports.default = HardFlickeringAndTrembling;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/LightEffect.js":
/*!**********************************************************!*\
  !*** ./src/sprites/effects/light-effects/LightEffect.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 75:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Effect2 = _interopRequireDefault(__webpack_require__(/*! ../Effect */ "./src/sprites/effects/Effect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LightEffect = /*#__PURE__*/function (_Effect) {
  _inherits(LightEffect, _Effect);

  function LightEffect(invoker, config) {
    var _this;

    var contributeFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, LightEffect);

    _this = _possibleConstructorReturn(this, (LightEffect.__proto__ || Object.getPrototypeOf(LightEffect)).call(this, invoker, config));
    _this.contributeFactor = contributeFactor;
    return _this;
  }

  _createClass(LightEffect, [{
    key: "play",
    value: function play(callback) {
      var _this2 = this;

      _get(LightEffect.prototype.__proto__ || Object.getPrototypeOf(LightEffect.prototype), "play", this).call(this, function () {
        _this2.stopped = false;
        callback();
      });
    }
  }, {
    key: "stop",
    value: function stop(callback) {
      var _this3 = this;

      _get(LightEffect.prototype.__proto__ || Object.getPrototypeOf(LightEffect.prototype), "stop", this).call(this, function () {
        _this3.stopped = true;
        callback();
      });
    }
  }]);

  return LightEffect;
}(_Effect2.default);

exports.default = LightEffect;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/RadiusFlickering.js":
/*!***************************************************************!*\
  !*** ./src/sprites/effects/light-effects/RadiusFlickering.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 114:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _LightEffect2 = _interopRequireDefault(__webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RadiusFlickering = /*#__PURE__*/function (_LightEffect) {
  _inherits(RadiusFlickering, _LightEffect);

  function RadiusFlickering(invoker, config) {
    var _this;

    _classCallCheck(this, RadiusFlickering);

    _this = _possibleConstructorReturn(this, (RadiusFlickering.__proto__ || Object.getPrototypeOf(RadiusFlickering)).call(this, invoker, config, 0.9));
    if (!_this.config.minTime) _this.config.minTime = 10;
    if (!_this.config.maxTime) _this.config.maxTime = 100;
    if (!_this.config.minPercentageIntensity) _this.config.minPercentageIntensity = 0.8;
    if (!_this.config.maxPercentageIntensity) _this.config.maxPercentageIntensity = 1;
    if (!_this.config.minPercentageRadius) _this.config.minPercentageRadius = 0.8;
    if (!_this.config.maxPercentageRadius) _this.config.maxPercentageRadius = 1;
    if (!_this.config.backToInitialIntensity) _this.config.backToInitialIntensity = true;
    if (!_this.config.backToInitialRadius) _this.config.backToInitialRadius = true;
    return _this;
  }

  _createClass(RadiusFlickering, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      _get(RadiusFlickering.prototype.__proto__ || Object.getPrototypeOf(RadiusFlickering.prototype), "play", this).call(this, function () {
        var setTimer = function setTimer() {
          _this2.gameObject.room.time.addEvent({
            delay: Math.floor(Math.random() * (_this2.config.maxTime - _this2.config.minTime)) + _this2.config.minTime,
            callback: function callback() {
              if (!_this2.stopped) {
                var newIntensityPercentage = Math.floor((_this2.config.minPercentageIntensity + Math.random() * (_this2.config.maxPercentageIntensity - _this2.config.minPercentageIntensity)) * 100 + 1) / 100;

                _this2.gameObject.graphicLight.setIntensity(_this2.gameObject.config.graphicLight.intensity * newIntensityPercentage);

                _this2.gameObject.diffusedLight.setIntensity(_this2.gameObject.config.diffusedLight.intensity * newIntensityPercentage);

                var newRadiusPercentage = Math.floor((_this2.config.minPercentageRadius + Math.random() * (_this2.config.maxPercentageRadius - _this2.config.minPercentageRadius)) * 100 + 1) / 100;

                _this2.gameObject.graphicLight.setRadius(_this2.gameObject.config.graphicLight.radius * newRadiusPercentage);

                setTimer();
              }
            },
            callbackScope: _this2,
            repeat: 0
          });
        };

        setTimer();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      _get(RadiusFlickering.prototype.__proto__ || Object.getPrototypeOf(RadiusFlickering.prototype), "stop", this).call(this, function () {
        if (_this3.config.backToInitialIntensity) {
          _this3.gameObject.graphicLight.setIntensity(_this3.gameObject.config.graphicLight.intensity);

          _this3.gameObject.diffusedLight.setIntensity(_this3.gameObject.config.diffusedLight.intensity);
        } else {
          _this3.gameObject.config.graphicLight.intensity = _this3.gameObject.graphicLight.intensity;
          _this3.gameObject.config.diffusedLight.intensity = _this3.gameObject.diffusedLight.intensity;
        }

        if (_this3.config.backToInitialRadius) {
          _this3.gameObject.graphicLight.setRadius(_this3.gameObject.config.graphicLight.radius);
        } else {
          _this3.gameObject.config.graphicLight.radius = _this3.gameObject.graphicLight.radius;
        }
      });
    }
  }]);

  return RadiusFlickering;
}(_LightEffect2.default);

exports.default = RadiusFlickering;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/SoftFlickering.js":
/*!*************************************************************!*\
  !*** ./src/sprites/effects/light-effects/SoftFlickering.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 101:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _LightEffect2 = _interopRequireDefault(__webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SoftFlickering = /*#__PURE__*/function (_LightEffect) {
  _inherits(SoftFlickering, _LightEffect);

  function SoftFlickering(invoker, config) {
    var _this;

    _classCallCheck(this, SoftFlickering);

    _this = _possibleConstructorReturn(this, (SoftFlickering.__proto__ || Object.getPrototypeOf(SoftFlickering)).call(this, invoker, config, 0.8));
    if (!_this.config.minTime) _this.config.minTime = 10;
    if (!_this.config.maxTime) _this.config.maxTime = 100;
    if (!_this.config.minPercentageIntensity) _this.config.minPercentageIntensity = 0.8;
    if (!_this.config.maxPercentageIntensity) _this.config.maxPercentageIntensity = 1;
    if (!_this.config.backToInitialIntensity) _this.config.backToInitialIntensity = true;
    return _this;
  }

  _createClass(SoftFlickering, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      _get(SoftFlickering.prototype.__proto__ || Object.getPrototypeOf(SoftFlickering.prototype), "play", this).call(this, function () {
        var setTimer = function setTimer() {
          _this2.gameObject.room.time.addEvent({
            delay: Math.floor(Math.random() * (_this2.config.maxTime - _this2.config.minTime)) + _this2.config.minTime,
            callback: function callback() {
              if (!_this2.stopped) {
                var newIntensityPercentage = Math.floor((_this2.config.minPercentageIntensity + Math.random() * (_this2.config.maxPercentageIntensity - _this2.config.minPercentageIntensity)) * 100 + 1) / 100;

                _this2.gameObject.graphicLight.setIntensity(_this2.gameObject.config.graphicLight.intensity * newIntensityPercentage);

                _this2.gameObject.diffusedLight.setIntensity(_this2.gameObject.config.diffusedLight.intensity * newIntensityPercentage);

                setTimer();
              }
            },
            callbackScope: _this2,
            repeat: 0
          });
        };

        setTimer();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      _get(SoftFlickering.prototype.__proto__ || Object.getPrototypeOf(SoftFlickering.prototype), "stop", this).call(this, function () {
        if (_this3.config.backToInitialIntensity) {
          _this3.gameObject.graphicLight.setIntensity(_this3.gameObject.config.graphicLight.intensity);

          _this3.gameObject.diffusedLight.setIntensity(_this3.gameObject.config.diffusedLight.intensity);
        } else {
          _this3.gameObject.config.graphicLight.intensity = _this3.gameObject.graphicLight.intensity;
          _this3.gameObject.config.diffusedLight.intensity = _this3.gameObject.diffusedLight.intensity;
        }
      });
    }
  }]);

  return SoftFlickering;
}(_LightEffect2.default);

exports.default = SoftFlickering;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/SoftFlickeringAndTrembling.js":
/*!*************************************************************************!*\
  !*** ./src/sprites/effects/light-effects/SoftFlickeringAndTrembling.js ***!
  \*************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 80:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _LightEffect2 = _interopRequireDefault(__webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"));

var _SoftFlickering = _interopRequireDefault(__webpack_require__(/*! ./SoftFlickering */ "./src/sprites/effects/light-effects/SoftFlickering.js"));

var _Trembling = _interopRequireDefault(__webpack_require__(/*! ./Trembling */ "./src/sprites/effects/light-effects/Trembling.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SoftDefaultFlickeringAndtrembling = /*#__PURE__*/function (_LightEffect) {
  _inherits(SoftDefaultFlickeringAndtrembling, _LightEffect);

  function SoftDefaultFlickeringAndtrembling(invoker, config) {
    var _this;

    _classCallCheck(this, SoftDefaultFlickeringAndtrembling);

    _this = _possibleConstructorReturn(this, (SoftDefaultFlickeringAndtrembling.__proto__ || Object.getPrototypeOf(SoftDefaultFlickeringAndtrembling)).call(this, invoker, config, 0.5));
    _this.softFlickering = new _SoftFlickering.default(_this.invoker, _this.config);
    _this.trembling = new _Trembling.default(_this.invoker, _this.config);
    return _this;
  }

  _createClass(SoftDefaultFlickeringAndtrembling, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      _get(SoftDefaultFlickeringAndtrembling.prototype.__proto__ || Object.getPrototypeOf(SoftDefaultFlickeringAndtrembling.prototype), "play", this).call(this, function () {
        _this2.softFlickering.play();

        _this2.trembling.play();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      _get(SoftDefaultFlickeringAndtrembling.prototype.__proto__ || Object.getPrototypeOf(SoftDefaultFlickeringAndtrembling.prototype), "stop", this).call(this, function () {
        _this3.softFlickering.stop();

        _this3.trembling.stop();
      });
    }
  }]);

  return SoftDefaultFlickeringAndtrembling;
}(_LightEffect2.default);

exports.default = SoftDefaultFlickeringAndtrembling;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/Trembling.js":
/*!********************************************************!*\
  !*** ./src/sprites/effects/light-effects/Trembling.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 114:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _LightEffect2 = _interopRequireDefault(__webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Trembling = /*#__PURE__*/function (_LightEffect) {
  _inherits(Trembling, _LightEffect);

  function Trembling(invoker, config) {
    var _this;

    _classCallCheck(this, Trembling);

    _this = _possibleConstructorReturn(this, (Trembling.__proto__ || Object.getPrototypeOf(Trembling)).call(this, invoker, config, 0.8));
    if (!_this.config.minTime) _this.config.minTime = 10;
    if (!_this.config.maxTime) _this.config.maxTime = 100;
    if (!_this.config.minPercentageIntensity) _this.config.minPercentageIntensity = 0.8;
    if (!_this.config.maxPercentageIntensity) _this.config.maxPercentageIntensity = 1;
    if (!_this.config.minPercentageRadius) _this.config.minPercentageRadius = 0.8;
    if (!_this.config.maxPercentageRadius) _this.config.maxPercentageRadius = 1;
    if (!_this.config.backToInitialIntensity) _this.config.backToInitialIntensity = true;
    if (!_this.config.backToInitialRadius) _this.config.backToInitialRadius = true;
    return _this;
  }

  _createClass(Trembling, [{
    key: "play",
    value: function play() {
      var _this2 = this;

      _get(Trembling.prototype.__proto__ || Object.getPrototypeOf(Trembling.prototype), "play", this).call(this, function () {
        var setTimer = function setTimer() {
          _this2.gameObject.room.time.addEvent({
            delay: Math.floor(Math.random() * (_this2.config.maxTime - _this2.config.minTime)) + _this2.config.minTime,
            callback: function callback() {
              if (!_this2.stopped) {
                var newIntensityPercentage = Math.floor((_this2.config.minPercentageIntensity + Math.random() * (_this2.config.maxPercentageIntensity - _this2.config.minPercentageIntensity)) * 100 + 1) / 100;

                _this2.gameObject.graphicLight.setIntensity(_this2.gameObject.config.graphicLight.intensity * newIntensityPercentage);

                _this2.gameObject.diffusedLight.setIntensity(_this2.gameObject.config.diffusedLight.intensity * newIntensityPercentage);

                var newRadiusPercentage = Math.floor((_this2.config.minPercentageRadius + Math.random() * (_this2.config.maxPercentageRadius - _this2.config.minPercentageRadius)) * 100 + 1) / 100;

                _this2.gameObject.graphicLight.setRadius(_this2.gameObject.config.graphicLight.radius * newRadiusPercentage);

                setTimer();
              }
            },
            callbackScope: _this2,
            repeat: 0
          });
        };

        setTimer();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      _get(Trembling.prototype.__proto__ || Object.getPrototypeOf(Trembling.prototype), "stop", this).call(this, function () {
        if (_this3.config.backToInitialIntensity) {
          _this3.gameObject.graphicLight.setIntensity(_this3.gameObject.config.graphicLight.intensity);

          _this3.gameObject.diffusedLight.setIntensity(_this3.gameObject.config.diffusedLight.intensity);
        } else {
          _this3.gameObject.config.graphicLight.intensity = _this3.gameObject.graphicLight.intensity;
          _this3.gameObject.config.diffusedLight.intensity = _this3.gameObject.diffusedLight.intensity;
        }

        if (_this3.config.backToInitialRadius) {
          _this3.gameObject.graphicLight.setRadius(_this3.gameObject.config.graphicLight.radius);
        } else {
          _this3.gameObject.config.graphicLight.radius = _this3.gameObject.graphicLight.radius;
        }
      });
    }
  }]);

  return Trembling;
}(_LightEffect2.default);

exports.default = Trembling;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/effects/light-effects/index.js":
/*!****************************************************!*\
  !*** ./src/sprites/effects/light-effects/index.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LightEffects = {
  HardFlickering: __webpack_require__(/*! ./HardFlickering */ "./src/sprites/effects/light-effects/HardFlickering.js"),
  HardFlickeringAndTrembling: __webpack_require__(/*! ./HardFlickeringAndTrembling */ "./src/sprites/effects/light-effects/HardFlickeringAndTrembling.js"),
  LightEffect: __webpack_require__(/*! ./LightEffect */ "./src/sprites/effects/light-effects/LightEffect.js"),
  RadiusFlickering: __webpack_require__(/*! ./RadiusFlickering */ "./src/sprites/effects/light-effects/RadiusFlickering.js"),
  SoftFlickering: __webpack_require__(/*! ./SoftFlickering */ "./src/sprites/effects/light-effects/SoftFlickering.js"),
  SoftFlickeringAndTrembling: __webpack_require__(/*! ./SoftFlickeringAndTrembling */ "./src/sprites/effects/light-effects/SoftFlickeringAndTrembling.js"),
  Trembling: __webpack_require__(/*! ./Trembling */ "./src/sprites/effects/light-effects/Trembling.js")
};
module.exports = LightEffects;

/***/ }),

/***/ "./src/sprites/index.js":
/*!******************************!*\
  !*** ./src/sprites/index.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Sprites = {
  Actions: __webpack_require__(/*! ./actions */ "./src/sprites/actions/index.js"),
  Behaviours: __webpack_require__(/*! ./behaviours */ "./src/sprites/behaviours/index.js"),
  Characters: __webpack_require__(/*! ./characters */ "./src/sprites/characters/index.js"),
  Effects: __webpack_require__(/*! ./effects */ "./src/sprites/effects/index.js"),
  InventoryItems: __webpack_require__(/*! ./inventory-items */ "./src/sprites/inventory-items/index.js"),
  WorldItems: __webpack_require__(/*! ./world-items */ "./src/sprites/world-items/index.js"),
  Sprite: __webpack_require__(/*! ./Sprite */ "./src/sprites/Sprite.js")
};
module.exports = Sprites;

/***/ }),

/***/ "./src/sprites/inventory-items/InventoryItem.js":
/*!******************************************************!*\
  !*** ./src/sprites/inventory-items/InventoryItem.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 78:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Sprite2 = _interopRequireDefault(__webpack_require__(/*! ../Sprite */ "./src/sprites/Sprite.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The inventory items namespace.
 * @namespace TDLib.Sprites.InventoryItems
 * @since 1.0.0
 */

/**
 * Class representing an InentoryItem.
 * @extends TDLib.Sprites.Sprite
 * @memberof TDLib.Sprites.InventoryItems
 * @since 1.0.0
 */
var InentoryItem = /*#__PURE__*/function (_Sprite) {
  _inherits(InentoryItem, _Sprite);

  /**
   * Create a new InvetoryItem.
   * @param {Room} room - The room where the item is created.
   * @param {number} x - The x coordinate of the item.
   * @param {number} y - The y coordinate of the item.
   * @param {string} texture - The item's graphic.
   * @param {string} layer - The item's layer.
   */
  function InentoryItem(room, x, y, texture, layer) {
    var _ref;

    _classCallCheck(this, InentoryItem);

    return _possibleConstructorReturn(this, (_ref = InentoryItem.__proto__ || Object.getPrototypeOf(InentoryItem)).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments), [false])));
  }

  _createClass(InentoryItem, [{
    key: "create",
    value: function create() {
      _get(InentoryItem.prototype.__proto__ || Object.getPrototypeOf(InentoryItem.prototype), "create", this).call(this);

      this.resetPipeline(); // InventoryItems are not part of the Light2D pipeline!
    }
  }]);

  return InentoryItem;
}(_Sprite2.default);

exports.default = InentoryItem;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/inventory-items/index.js":
/*!**********************************************!*\
  !*** ./src/sprites/inventory-items/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var InventoryItems = {
  InventoryItem: __webpack_require__(/*! ./InventoryItem */ "./src/sprites/inventory-items/InventoryItem.js")
};
module.exports = InventoryItems;

/***/ }),

/***/ "./src/sprites/world-items/WorldItem.js":
/*!**********************************************!*\
  !*** ./src/sprites/world-items/WorldItem.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 87:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _Sprite2 = _interopRequireDefault(__webpack_require__(/*! ../Sprite */ "./src/sprites/Sprite.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The world items namespace.
 * @namespace TDLib.Sprites.WorldItems
 * @since 1.0.0
 */

/**
 * Class representing a WorldItem.
 * @extends TDLib.Sprites.Sprite
 * @memberof TDLib.Sprites.WorldItems
 * @since 1.0.0
 */
var WorldItem = /*#__PURE__*/function (_Sprite) {
  _inherits(WorldItem, _Sprite);

  /**
   * Create a WorldObject.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
   * @param {string} [layer=null] - The key of the layer which will contain the sprite.
   * @param {boolean} [hasBody=true] - Specify if the sprite has physics.
   * @param {string} [behaviourType=SpriteBehaviour.INERT] - Specify the behaviour of the sprite.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   * @param {string|string[]} [observeText] - The text which appears when observing the sprite.
   * @param {string|string[]} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
   * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
   * @param {string|string[]} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
   * @param {string|string[]} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
   * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
   * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
   */
  function WorldItem(room, x, y, texture, layer, hasBody, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve) {
    _classCallCheck(this, WorldItem);

    return _possibleConstructorReturn(this, (WorldItem.__proto__ || Object.getPrototypeOf(WorldItem)).call(this, room, x, y, texture, layer, hasBody, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve));
  }

  _createClass(WorldItem, [{
    key: "create",
    value: function create() {
      _get(WorldItem.prototype.__proto__ || Object.getPrototypeOf(WorldItem.prototype), "create", this).call(this);
    }
  }]);

  return WorldItem;
}(_Sprite2.default);

exports.default = WorldItem;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/world-items/index.js":
/*!******************************************!*\
  !*** ./src/sprites/world-items/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var WorldItems = {
  WorldItem: __webpack_require__(/*! ./WorldItem */ "./src/sprites/world-items/WorldItem.js"),
  LightSources: __webpack_require__(/*! ./light-sources */ "./src/sprites/world-items/light-sources/index.js"),
  RoomFurnitures: __webpack_require__(/*! ./room-furnitures */ "./src/sprites/world-items/room-furnitures/index.js"),
  WallFurnitures: __webpack_require__(/*! ./wall-furnitures */ "./src/sprites/world-items/wall-furnitures/index.js")
};
module.exports = WorldItems;

/***/ }),

/***/ "./src/sprites/world-items/light-sources/LightSource.js":
/*!**************************************************************!*\
  !*** ./src/sprites/world-items/light-sources/LightSource.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 148:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _WorldItem2 = _interopRequireDefault(__webpack_require__(/*! ../WorldItem */ "./src/sprites/world-items/WorldItem.js"));

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ../../behaviours */ "./src/sprites/behaviours/index.js"));

var _EffectComponent = _interopRequireDefault(__webpack_require__(/*! ../../../components/EffectComponent */ "./src/components/EffectComponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LightSource = /*#__PURE__*/function (_WorldItem) {
  _inherits(LightSource, _WorldItem);

  /**
   * constructor of the class
   * @param {Room} room - Room in which will be created the LightSource.
   * @param {number} x - X position of the sprite.
   * @param {number} y - Y position of the sprite.
   * @param {string} texture - Name of the sprite for the LightSource.
   * @param {string} layer - Name of the Layer in which will be put the LightSource.
   * @param {Object} graphicLightConfig - Configuration of the graphic light of the LightSource.
   * @param {number} graphicLightConfig.intensity - Intensity of the graphic light.
   * @param {number} graphicLightConfig.radius - Radius of the graphic light.
   * @param {Object} diffusedLightConfig - Configuration of the diffused light of the LightSource.
   * @param {number} diffusedLightConfig.intensity - Intensity of the diffused light.
   * @param {number} diffusedLightConfig.radius - Radius of the diffused light.
   * @param {Object} offset - Offset of the graphic light respect the center of the sprite.
   * @param {number} offset.x - X offset.
   * @param {number} offset.y - Y offset.
   * @param {boolean} [isOn=true] - Light created as switched on or off.
   */
  function LightSource(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset) {
    var _this;

    var isOn = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;

    _classCallCheck(this, LightSource);

    _this = _possibleConstructorReturn(this, (LightSource.__proto__ || Object.getPrototypeOf(LightSource)).call(this, room, x, y, texture, layer, true, _behaviours.default.EXAMINABLE));

    _this.setGravityY(0);

    _this.initialConfig = {
      graphicLight: graphicLightConfig,
      diffusedLight: diffusedLightConfig,
      offset: offset
    };
    _this.config = _this.initialConfig;
    _this.isOn = false;

    if (isOn) {
      _this.turnOn();
    } // Register this LightSource instance to the Room's LightManager


    _this.room.lightSources.add(_this);

    _this.effects = new _EffectComponent.default(_this);
    return _this;
  }
  /**
   * Turn on the lights of the LightSource by creating new ones.
   */


  _createClass(LightSource, [{
    key: "turnOn",
    value: function turnOn() {
      if (!this.isOn) {
        if (this.initialConfig.diffusedLight !== null) {
          this.diffusedLight = this.room.lights.addLight(this.x + this.initialConfig.offset.x, this.y + this.initialConfig.offset.y, this.initialConfig.diffusedLight.radius).setIntensity(this.initialConfig.diffusedLight.intensity);
          this.room.lightSources.diffusedLights.push(this.diffusedLight);
        }

        if (this.initialConfig.graphicLight !== null) {
          this.graphicLight = this.room.lights.addLight(this.x + this.initialConfig.offset.x, this.y + this.initialConfig.offset.y, this.initialConfig.graphicLight.radius).setIntensity(this.initialConfig.graphicLight.intensity);
          this.room.lightSources.graphicLights.push(this.graphicLight);
        }

        this.isOn = true;
      }
    }
    /**
       * Turn off the lights of the LightSource by deleting the existing ones.
       * @param {boolean} [stopBehaviours=true] - If true, turning off the light stops all the behaviours.
       */

  }, {
    key: "turnOff",
    value: function turnOff() {
      var stopBehaviours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // if (stopBehaviours) this.lightBehaviour.stopAllBehaviours();
      if (this.isOn) {
        var diffusedLightindex = this.room.lightSources.diffusedLights.indexOf(this.diffusedLight);

        if (diffusedLightindex > -1) {
          this.room.lightSources.diffusedLights.splice(diffusedLightindex, 1);
          this.room.lights.removeLight(this.diffusedLight);
        }

        var graphicLightindex = this.room.lightSources.graphicLights.indexOf(this.graphicLight);

        if (graphicLightindex > -1) {
          this.room.lightSources.graphicLights.splice(graphicLightindex, 1);
          this.room.lights.removeLight(this.graphicLight);
        }

        this.isOn = false;
      }
    }
    /**
     * If the light source is on, turn it off and vice versa.
     */

  }, {
    key: "switch",
    value: function _switch() {
      if (this.isOn) this.turnOff();else this.turnOn();
    }
  }]);

  return LightSource;
}(_WorldItem2.default);

exports.default = LightSource;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/world-items/light-sources/index.js":
/*!********************************************************!*\
  !*** ./src/sprites/world-items/light-sources/index.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LightSources = {
  LightSource: __webpack_require__(/*! ./LightSource */ "./src/sprites/world-items/light-sources/LightSource.js")
};
module.exports = LightSources;

/***/ }),

/***/ "./src/sprites/world-items/room-furnitures/RoomFurniture.js":
/*!******************************************************************!*\
  !*** ./src/sprites/world-items/room-furnitures/RoomFurniture.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 68:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _WorldItem2 = _interopRequireDefault(__webpack_require__(/*! ../WorldItem */ "./src/sprites/world-items/WorldItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The room furnitures namespace.
 * @namespace TDLib.Sprites.Objects.WorldObjects.RoomFurnitures
 * @since 1.0.0
 */

/**
 * Class representing a RoomFurniture.
 * @extends TDLib.Sprites.Objects.WorldObjects.WorldObject
 * @memberof TDLib.Sprites.Objects.WorldObjects.RoomFurnitures
 * @since 1.0.0
 */
var RoomFurniture = /*#__PURE__*/function (_WorldItem) {
  _inherits(RoomFurniture, _WorldItem);

  /**
   * Create a RoomFurniture.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
   * @param {string} [behaviourType=SpriteBehaviour.INERT] - Specify the behaviour of the sprite.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   * @param {string|string[]} [observeText] - The text which appears when observing the sprite.
   * @param {string|string[]} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
   * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
   * @param {string|string[]} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
   * @param {string|string[]} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
   * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
   * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
   */
  function RoomFurniture(room, x, y, texture, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve) {
    _classCallCheck(this, RoomFurniture);

    return _possibleConstructorReturn(this, (RoomFurniture.__proto__ || Object.getPrototypeOf(RoomFurniture)).call(this, room, x, y, texture, 'roomFurnitureLayer', true, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve));
  }

  return RoomFurniture;
}(_WorldItem2.default);

exports.default = RoomFurniture;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/world-items/room-furnitures/index.js":
/*!**********************************************************!*\
  !*** ./src/sprites/world-items/room-furnitures/index.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var RoomFurnitures = {
  RoomFurniture: __webpack_require__(/*! ./RoomFurniture */ "./src/sprites/world-items/room-furnitures/RoomFurniture.js")
};
module.exports = RoomFurnitures;

/***/ }),

/***/ "./src/sprites/world-items/wall-furnitures/WallFurniture.js":
/*!******************************************************************!*\
  !*** ./src/sprites/world-items/wall-furnitures/WallFurniture.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 74:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _WorldItem2 = _interopRequireDefault(__webpack_require__(/*! ../WorldItem */ "./src/sprites/world-items/WorldItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The wall furnitures namespace.
 * @namespace TDLib.Sprites.Objects.WorldObjects.WallFurnitures
 * @since 1.0.0
 */

/**
 * Class representing a WallFurniture.
 * @extends TDLib.Sprites.Objects.WorldObjects.WorldObject
 * @memberof TDLib.Sprites.Objects.WorldObjects.WallFurnitures
 * @since 1.0.0
 */
var WallFurniture = /*#__PURE__*/function (_WorldItem) {
  _inherits(WallFurniture, _WorldItem);

  /**
   * Create a WallFurniture.
   * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
   * @param {number} x - The sprite x coordinate.
   * @param {number} y - The sprite y coordinate.
   * @param {string} texture - The graphic of the sprite.
   * @param {string} [behaviourType=SpriteBehaviour.INERT] - Specify the behaviour of the sprite.
   * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
   * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
   * @param {string|string[]} [observeText] - The text which appears when observing the sprite.
   * @param {string|string[]} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
   * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
   * @param {string|string[]} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
   * @param {string|string[]} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
   * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
   * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
   * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
   */
  function WallFurniture(room, x, y, texture, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve) {
    var _this;

    _classCallCheck(this, WallFurniture);

    _this = _possibleConstructorReturn(this, (WallFurniture.__proto__ || Object.getPrototypeOf(WallFurniture)).call(this, room, x, y, texture, 'wallFurnitureLayer', true, behaviourType, pixelPerfect, observeText, examineOrInteractText, blockExamineText, noLightObserveText, noLightExamineOrInteractText, examineOrInteractOffsetX, examineOrInteractThresholdRadius, minLightLevelToExamineOrInteract, minLightLevelToObserve));

    _this.setGravityY(0);

    return _this;
  }

  return WallFurniture;
}(_WorldItem2.default);

exports.default = WallFurniture;
module.exports = exports.default;

/***/ }),

/***/ "./src/sprites/world-items/wall-furnitures/index.js":
/*!**********************************************************!*\
  !*** ./src/sprites/world-items/wall-furnitures/index.js ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var WallFurnitures = {
  WallFurniture: __webpack_require__(/*! ./WallFurniture */ "./src/sprites/world-items/wall-furnitures/WallFurniture.js")
};
module.exports = WallFurnitures;

/***/ }),

/***/ "./src/systems/cursors/CursorSystem.js":
/*!*********************************************!*\
  !*** ./src/systems/cursors/CursorSystem.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 350:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _actions = _interopRequireDefault(__webpack_require__(/*! ../../sprites/actions */ "./src/sprites/actions/index.js"));

var _behaviours = _interopRequireDefault(__webpack_require__(/*! ../../sprites/behaviours */ "./src/sprites/behaviours/index.js"));

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class representing the CursorSystem, able to select the correct graphic for the cursor and to handle pointer events.
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 * @since 1.0.0
 */
var CursorSystem = /*#__PURE__*/function (_Phaser$Plugins$BaseP) {
  _inherits(CursorSystem, _Phaser$Plugins$BaseP);

  /**
   * Create a new CursorSystem.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function CursorSystem(pluginManager) {
    var _this;

    _classCallCheck(this, CursorSystem);

    _this = _possibleConstructorReturn(this, (CursorSystem.__proto__ || Object.getPrototypeOf(CursorSystem)).call(this, pluginManager));
    /**
     * The scene containing the cursor.
     * @type {CursorSystem.CURSOR_SCENE}
     * @since 1.0.0
     */

    _this.cursorScene;
    /**
     * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @type {Phaser.Scenes.SceneManager}
     * @since 1.0.0
     */

    _this.sceneManager;
    /**
     * Save the last sprite who called the function setCursor().
     * @type {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */

    _this.lastTarget;
    return _this;
  }
  /**
   * It's a Phaser.Scene representing the scene containing the cursor which will be put on the rooms level.
   * @typedef {TDLib.Plugins.GlobalPlugins.CursorSystem.CursorScene}
   * @extends {Phaser.Scenes.Scene}
   * @since 1.0.0
   */


  _createClass(CursorSystem, [{
    key: "configure",

    /**
     * Configure the cursor manager.
     * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @since 1.0.0
     */
    value: function configure(sceneManager) {
      this.sceneManager = sceneManager;
      this.cursorScene = this.sceneManager.add(CursorSystem.CURSOR_SCENE_KEY, CursorSystem.CursorScene, true);
    }
    /**
     * Handle the pointer down event.
     * @param {TDLib.Sprites.Characters.TDLCharacter} player - The current player.
     * @since 1.0.0
     */

  }, {
    key: "pointerDown",
    value: function pointerDown(player) {
      var pointer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!player.isBlocked) {
        switch (this.cursorScene.cursor.texture.key) {
          case CursorSystem.DEFAULT_CURSOR:
            {
              if (typeof player.room.input.activePointer.camera !== 'undefined') player.actions.add(_actions.default.WalkTo, {
                target: {
                  x: player.room.input.activePointer.worldX
                }
              });
            }
            break;

          case CursorSystem.EXAMINABLE_CURSOR:
            {
              this.lastTarget.behaviours.observe.abort();
              player.actions.add(_actions.default.Examine, {
                target: this.lastTarget
              });
            }
            break;

          case CursorSystem.INTERACTIVE_CURSOR:
            {
              this.lastTarget.behaviours.observe.abort();
              player.actions.add(_actions.default.Interact, {
                target: this.lastTarget
              });
            }
            break;

          case CursorSystem.TALKABLE_CURSOR:
            {
              player.actions.add(_actions.default.TalkTo, {
                target: this.lastTarget
              });
            }
            break;
        }
      }
    }
    /**
     * Set the correct cursor for the target selected.
     * @param {Object} target - The target of the pointer.sceneManager
     * @param {TDLib.Components.ActionComponent} target.behaviours - The SpriteBehaviourComponent of the target.
     * @param {string} [target.behaviours.type=TDLib.Sprites.Behaviours.INERT] - The type of the sprite behaviour for this target.
     * @since 1.0.0
     */

  }, {
    key: "setCursor",
    value: function setCursor() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        behaviours: {
          type: _behaviours.default.INERT
        },
        room: {}
      };

      if ('room' in target && target !== target.room.player) {
        switch (target.behaviours.type) {
          case _behaviours.default.INERT:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.DEFAULT_CURSOR).setOrigin(0.4, 0.33);
            }
            break;

          case _behaviours.default.EXAMINABLE:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.EXAMINABLE_CURSOR).setOrigin(0.33, 0.29);
            }
            break;

          case _behaviours.default.INTERACTIVE:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.INTERACTIVE_CURSOR).setOrigin(0.4, 0.33);
            }
            break;

          case _behaviours.default.TALKABLE:
            {
              this.cursorScene.cursor.setTexture(CursorSystem.TALKABLE_CURSOR);
            }
            break;
        }

        this.lastTarget = target;
      }
    }
    /**
     * Show the cursor.
     * @since 1.0.0
     */

  }, {
    key: "showCursor",
    value: function showCursor() {
      this.cursorScene.cursor.setVisible(true);
    }
    /**
     * Hide the cursor.
     * @since 1.0.0
     */

  }, {
    key: "hideCursor",
    value: function hideCursor() {
      this.cursorScene.cursor.setVisible(false);
    }
  }], [{
    key: "CursorScene",
    get: function get() {
      return /*#__PURE__*/function (_Phaser$Scene) {
        _inherits(CursorScene, _Phaser$Scene);

        function CursorScene() {
          var _this2;

          _classCallCheck(this, CursorScene);

          _this2 = _possibleConstructorReturn(this, (CursorScene.__proto__ || Object.getPrototypeOf(CursorScene)).call(this, CursorSystem.CURSOR_SCENE_KEY));
          _this2.cursor;
          return _this2;
        }

        _createClass(CursorScene, [{
          key: "preload",
          value: function preload() {
            this.load.image(CursorSystem.EXAMINABLE_CURSOR, 'assets/Cursors/CursorExamine.png');
            this.load.image(CursorSystem.HOLD_CURSOR, 'assets/Cursors/CursorHold.png');
            this.load.image(CursorSystem.INTERACTIVE_CURSOR, 'assets/Cursors/CursorInteract.png');
            this.load.image(CursorSystem.DEFAULT_CURSOR, 'assets/Cursors/CursorMove.png');
            this.load.image(CursorSystem.TALKABLE_CURSOR, 'assets/Cursors/CursorTalk.png');
            this.load.image(CursorSystem.CHOICE_CURSOR, 'assets/Cursors/CursorChoice.png');
            this.load.image(CursorSystem.CHOICE_PRESSED_CURSOR, 'assets/Cursors/CursorChoicePressed.png');
          }
        }, {
          key: "create",
          value: function create() {
            this.input.setDefaultCursor('none');
            this.cursor = this.add.image(0, 0, CursorSystem.DEFAULT_CURSOR).setOrigin(0.4, 0.33).setDepth(100000);
          }
        }, {
          key: "update",
          value: function update() {
            this.cursor.setPosition(this.input.activePointer.x, this.input.activePointer.y);
          }
        }]);

        return CursorScene;
      }(_phaser.default.Scene);
    }
    /**
     * The key of the scene containing the cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "CURSOR_SCENE_KEY",
    get: function get() {
      return 'CursorScene';
    }
    /**
     * The key of the inert cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "DEFAULT_CURSOR",
    get: function get() {
      return 'cursorMove';
    }
    /**
     * The key of the examine cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "EXAMINABLE_CURSOR",
    get: function get() {
      return 'cursorExamine';
    }
    /**
     * The key of the interact cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "INTERACTIVE_CURSOR",
    get: function get() {
      return 'cursorInteract';
    }
    /**
     * The key of the hold cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "HOLD_CURSOR",
    get: function get() {
      return 'cursorHold';
    }
    /**
     * The key of the talk cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "TALKABLE_CURSOR",
    get: function get() {
      return 'cursorTalk';
    }
    /**
     * The key of the choice cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "CHOICE_CURSOR",
    get: function get() {
      return 'cursorChoice';
    }
    /**
     * The key of the choice pressed cursor.
     * @type {string}
     * @since 1.0.0
     */

  }, {
    key: "CHOICE_PRESSED_CURSOR",
    get: function get() {
      return 'cursorChoicePressed';
    }
  }]);

  return CursorSystem;
}(_phaser.default.Plugins.BasePlugin);

exports.default = CursorSystem;
module.exports = exports.default;

/***/ }),

/***/ "./src/systems/index.js":
/*!******************************!*\
  !*** ./src/systems/index.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Systems = {
  CursorSystem: __webpack_require__(/*! ./cursors/CursorSystem */ "./src/systems/cursors/CursorSystem.js"),
  RoomSystem: __webpack_require__(/*! ./rooms/RoomSystem */ "./src/systems/rooms/RoomSystem.js")
};
module.exports = Systems;

/***/ }),

/***/ "./src/systems/rooms/RoomSystem.js":
/*!*****************************************!*\
  !*** ./src/systems/rooms/RoomSystem.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 96:0-14 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _phaser = _interopRequireDefault(__webpack_require__(/*! phaser */ "phaser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class representing the manager of the rooms
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 */
var RoomSystem = /*#__PURE__*/function (_Phaser$Plugins$BaseP) {
  _inherits(RoomSystem, _Phaser$Plugins$BaseP);

  /**
   * Create a new RoomSystem.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
   */
  function RoomSystem(pluginManager) {
    var _this;

    _classCallCheck(this, RoomSystem);

    _this = _possibleConstructorReturn(this, (RoomSystem.__proto__ || Object.getPrototypeOf(RoomSystem)).call(this, pluginManager));
    /**
     * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     * @type {Phaser.Scenes.SceneManager}
     */

    _this.sceneManager = {};
    _this.currentRoom = null;
    return _this;
  }
  /**
   * Add (and start) a new room to the RoomSystem.
   * @param {TDLib.Rooms.Room} room - The class of the new room to add.
   * @param {boolean} [autoStart=true] - Specify if the room has to start.
   */


  _createClass(RoomSystem, [{
    key: "start",
    value: function start(room) {
      var autoStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (room) {
        console.log('Starting room:', room.name);
        if (this.currentRoom) this.sceneManager.remove(this.currentRoom.name);

        if (room.name in this.sceneManager.keys) {
          this.sceneManager.start(room.name);
        } else {
          this.sceneManager.add(room.name, room, autoStart);
        }

        this.currentRoom = room;
      }
    }
    /**
     * Configure the RoomSystem.
     * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     */

  }, {
    key: "configure",
    value: function configure(sceneManager) {
      this.sceneManager = sceneManager;
    }
  }]);

  return RoomSystem;
}(_phaser.default.Plugins.BasePlugin);

exports.default = RoomSystem;
module.exports = exports.default;

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _Settings = _interopRequireDefault(__webpack_require__(/*! ../boot/Settings */ "./src/boot/Settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var getScreenProps = function getScreenProps() {
  var returnValue = {}; // cz : ah = 1 : mh

  if (_Settings.default.DEVICE === 'MOBILE') {
    returnValue.availHeight = window.innerHeight;
    returnValue.availWidth = window.innerWidth;
    returnValue.calculatedZoom = Math.floor(returnValue.availHeight / ((_Settings.default.ROOM_HEIGHT_IN_TILE + _Settings.default.INVENTORY_HEIGHT_IN_TILES_MOBILE + _Settings.default.ROOM_FRAME_IN_TILES_MOBILE * 2) * _Settings.default.TILE_SIZE) * 100) / 100;
  } else {
    returnValue.availHeight = screen.height;
    returnValue.availWidth = screen.width;
    returnValue.calculatedZoom = Math.floor(returnValue.availHeight / ((_Settings.default.ROOM_HEIGHT_IN_TILE + _Settings.default.INVENTORY_HEIGHT_IN_TILES_DESKTOP + _Settings.default.ROOM_FRAME_IN_TILES_DESKTOP * 2) * _Settings.default.TILE_SIZE) * 100) / 100;
  }

  console.log('ZOOM: ' + returnValue.calculatedZoom); // Sono le dimensioni riaggiustate rispetto allo zoom scelto
  // ch : ah = 1 : cz

  returnValue.calculatedHeight = Math.ceil(returnValue.availHeight / returnValue.calculatedZoom);
  returnValue.calculatedWidth = Math.ceil(returnValue.availWidth / returnValue.calculatedZoom);
  console.log('AVAIL-H: ' + returnValue.availHeight + '\nCALC-H: ' + returnValue.calculatedHeight);
  console.log('AVAIL-W: ' + returnValue.availWidth + '\nCALC-W: ' + returnValue.calculatedWidth);
  return returnValue;
};

module.exports = getScreenProps;

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Utils = {
  getScreenProps: __webpack_require__(/*! ./Utils */ "./src/utils/Utils.js")
};
module.exports = Utils;

/***/ }),

/***/ "./node_modules/filter-obj/index.js":
/*!******************************************!*\
  !*** ./node_modules/filter-obj/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";


module.exports = (object, predicate) => {
	const result = {};
	const isArray = Array.isArray(predicate);

	for (const [key, value] of Object.entries(object)) {
		if (isArray ? predicate.includes(key) : predicate(key, value, object)) {
			result[key] = value;
		}
	}

	return result;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! default exports */
/*! export author [provided] [no usage info] [missing usage info prevents renaming] */
/*! export bugs [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export url [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export dependencies [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export filter-obj [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export phaser [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export description [provided] [no usage info] [missing usage info prevents renaming] */
/*! export devDependencies [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export @babel/cli [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export @babel/core [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export @babel/preset-env [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export babel-eslint [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export babel-loader [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export babel-plugin-add-module-exports [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export babel-preset-env [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export babel-register [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export eslint [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export eslint-loader [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export ink-docstrap [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export jsdoc [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export jsdom [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export jsdom-global [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export uglifyjs-webpack-plugin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export webpack [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export webpack-cli [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export yargs [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export homepage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keywords [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export license [provided] [no usage info] [missing usage info prevents renaming] */
/*! export main [provided] [no usage info] [missing usage info prevents renaming] */
/*! export name [provided] [no usage info] [missing usage info prevents renaming] */
/*! export repository [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export url [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export scripts [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export build [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export dev [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export docs [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export title [provided] [no usage info] [missing usage info prevents renaming] */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"the-darkest-lib\",\"title\":\"TDLib\",\"version\":\"1.0.0\",\"description\":\"A spcific extension of Phaser game engine.\",\"homepage\":\"https://github.com/FrancescoNegri/TheDarkestLib\",\"main\":\"lib/TDLib.js\",\"scripts\":{\"build\":\"webpack --env dev && webpack --env build\",\"dev\":\"webpack --progress --color --watch --env dev\",\"docs\":\"./node_modules/.bin/jsdoc -d ./docs -t ./node_modules/ink-docstrap/template -R README.md -r ./src\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/FrancescoNegri/TheDarkestLib.git\"},\"keywords\":[\"webpack\",\"es6\",\"starter\",\"library\",\"universal\",\"umd\",\"commonjs\",\"phaser\"],\"author\":\"Francesco Negri\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/FrancescoNegri/TheDarkestLib/issues\"},\"devDependencies\":{\"@babel/cli\":\"^7.12.1\",\"@babel/core\":\"^7.12.3\",\"@babel/preset-env\":\"^7.12.1\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^1.0.4\",\"babel-preset-env\":\"^7.0.0-beta.3\",\"babel-register\":\"^7.0.0-beta.3\",\"eslint\":\"^7.12.1\",\"eslint-loader\":\"^2.0.0\",\"ink-docstrap\":\"^1.3.2\",\"jsdoc\":\"^3.6.6\",\"jsdom\":\"16.4.0\",\"jsdom-global\":\"3.0.2\",\"uglifyjs-webpack-plugin\":\"^2.2.0\",\"webpack\":\"^5.3.2\",\"webpack-cli\":\"^4.1.0\",\"yargs\":\"^16.1.0\"},\"dependencies\":{\"filter-obj\":\"^2.0.1\",\"phaser\":\"^3.24.1\"}}");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_phaser__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/TDLib.js");
/******/ })()
;
});
//# sourceMappingURL=the-darkest-lib.js.map