module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"56dd": 0,
/******/ 		"fd88": 0,
/******/ 		"e292": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../../" + ({}[chunkId]||chunkId) + "." + {"1016":"bcf5fb15526edbecc929","1189":"251a9b35b2ced4db026c","1849":"4fd551d236714b08acf8","5065":"a2066da5d77ed88da2ba","6260":"c85de810fea1fcbaf949","0397":"1a0295d566079b1af514","0aac":"0f4a9da7f31bfe659d79","0b70":"9697408f88c1d39212c6","0f34":"f0854b36e7af892d6b43","16ae":"982ce07f282d001a539a","241f":"390e0938a5b1bb493f03","2f94":"95bf47223511004e29bb","31a5":"2f2a0af9985fb646b980","31ff":"12146d256b909c565116","35b4":"643c43ec00a693af8aa5","3db7":"11bf845ceef3785d19c2","3f05":"0efe9c0e2ebd815ebada","465d":"55359147e7ff62064c53","4d3d":"78fd37889aa18964bb8d","4ef3":"f440a045e9e7dbb08f5a","507a":"ddf91159470c125562f0","516a":"4b4548fcee22c729c43c","56ac":"f9c65cb41dda5dfcac50","58bd":"ba72b7a4d51c2c26fdf8","5b8f":"08ff2858d047fb215fed","671f":"d926289dba47de53d491","687d":"68289e8d862beedd606a","772c":"f0969bea50d15717fc9b","7c55":"a9bbc9ee3c8879740986","7d02":"be3bb632316ab1cb91ae","7fb0":"a29c8ace8495c5c1e38a","85e8":"4c22a69c97e67c27e7a3","85f4":"be5a325beac3b1e25f29","87b1":"b1862b5d4fcd45607076","889a":"6988e2110cc00b0b1bae","962a":"b8d48d944169a2fb03c1","972c":"d9c7ea8d690f4c1fa6fb","9b0f":"f6080fd6b96fd912b7dd","a015":"d698ba6092d5681ead7c","aa24":"ca27602017dcec3feb5c","acfd":"bddfa138e3f9b5e79b56","adf3":"b442855069e446f366c3","ae37":"a12614bfed4d5412d040","b08e":"fb88d1d9c27d609d4e98","b697":"602a6a9f4bbd6665927e","bfa1":"a76b4ddb8b0ad5409f67","c44d":"0e9160b72f9fd85ae203","c4c8":"18721298e213e3437a38","c994":"9f6aa42b11bd9ea46cb9","d0b5":"3077a5e9c6ed7ecbe578","d216":"8c2b49935ebf2fafe38c","d662":"2298fa13a95e7ba80f47","d689":"eedf3adb7245ce4437d3","d7ef":"a4f7c169d194c9e06039","de8d":"d400aaf078c8b22d5264","e1b1":"75abdfbde9df32f9e08f","e69e":"6e5d608051eb46f10c2c","e7c7":"56c8b1ba34307ff6e91d","eb42":"2ebab23731dfc098c6dd","eeda":"9b4ced94c22ca81d0ffe","fdff":"8ad04f4e45d9f627c2b2","fe83":"f75c7c9539f7c0e16d2c"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+C7J":
/***/ (function(module, exports) {



/***/ }),

/***/ "+pzk":
/***/ (function(module, exports) {



/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0a3R":
/***/ (function(module, exports) {

module.exports = require("load-script");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1nhD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shop; });
/* harmony import */ var components_lib_Dialog_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OVmd");
/* harmony import */ var components_lib_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XdnO");
/* harmony import */ var components_lib_LForm_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vavr");
/* harmony import */ var components_lib_LForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hkJ6");
/* harmony import */ var components_lib_NavBar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NPum");
/* harmony import */ var components_lib_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("v/Pk");
/* harmony import */ var components_lib_Label_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cYh5");
/* harmony import */ var components_lib_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zRvQ");
/* harmony import */ var components_lib_LabelHeader_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("P6MC");
/* harmony import */ var components_lib_LabelHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YOdr");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var layouts_PageHead__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("83qb");
/* harmony import */ var layouts_PageShop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("5H6G");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("mX/2");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_20__);























var Shop =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(Shop, _Component);

  function Shop() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Shop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Shop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(_this), "getItems", function (exFun) {
      _this.exFun = exFun;
      var item = [{
        field: 'id',
        component: 'NULL'
      }, {
        component: 'Input',
        props: {
          placeholder: '请输入商品名(必填)',
          label: '商品名:'
        },
        field: 'name'
      }, {
        component: 'ImagePicker',
        props: {
          disabled: true,
          crop: true,
          maxLength: 1,
          cropProps: {
            cropSize: {
              width: 160,
              height: 160
            }
          }
        },
        label: '商品图片：',
        field: 'logo'
      }, {
        component: 'Input',
        props: {
          placeholder: '请输入价格(必填)',
          type: 'number',
          extend: '元'
        },
        label: '价格：',
        field: 'price'
      }, {
        component: 'Input',
        props: {
          placeholder: '请输入优惠价',
          type: 'number',
          extend: '元'
        },
        label: '优惠价:',
        field: 'favorablePrice'
      }, {
        component: 'Input',
        props: {
          placeholder: '请输入限购份数',
          type: 'number',
          extend: '份'
        },
        label: '限购数:',
        field: 'limitedPurchase'
      }, {
        component: 'Input',
        props: {
          placeholder: '请输入餐盒费',
          type: 'number',
          value: 1,
          extend: '元'
        },
        label: '餐盒费：',
        field: 'boxCharges'
      }, {
        component: 'Textarea',
        props: {
          placeholder: '请输入商品详情（例：炸鸡块2个）',
          maxLength: 40,
          showMaxLength: true
        },
        label: '商品详情：',
        field: 'detail'
      }];
      return item;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Shop, [{
    key: "render",
    value: function render() {
      var navBar = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_20__["nav_bar"],
        title: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_lib_LabelHeader__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
          title: "\u5546\u54C1\u8BBE\u7F6E",
          line: "vertical"
        }),
        right: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "flex_justify",
          style: {
            height: '35px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u6DFB\u52A0\u5E97\u94FA"))
      });
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(layouts_PageHead__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        title: "\u5E97\u94FA-\u63A7\u5236\u53F0-\u5546\u54C1\u8BBE\u7F6E"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(layouts_PageShop__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
        defaultSelected: "/shop/controller/shop",
        navBar: navBar
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_lib_Dialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_lib_LForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        getItems: this.getItems
      }))));
    }
  }]);

  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);



/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1nhD");


/***/ }),

/***/ "2Alm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("p0XB");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pZY4");

 // 判断值中是否存在

var hash = function hash(source, value) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(source)) {
    return source.indexOf(value) !== -1;
  } else if (Object(_json_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(source)) {
    return source.hasOwnProperty(value);
  } else if (typeof source === 'string') {
    return source.includes(value);
  }

  throw new Error('source type not supported');
};

/* harmony default export */ __webpack_exports__["a"] = (hash);

/***/ }),

/***/ "35Ph":
/***/ (function(module, exports) {



/***/ }),

/***/ "3Ljp":
/***/ (function(module, exports) {



/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4uLm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lang_getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dga7");
 // 判断是否为数字

var isNumber = function isNumber(it) {
  return Object(_lang_getType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(it) === 'number';
};

/* harmony default export */ __webpack_exports__["a"] = (isNumber);

/***/ }),

/***/ "51sL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wBli");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NTkt");




/***/ }),

/***/ "5H6G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/lib/Layout/style/index.ts
var style = __webpack_require__("51sL");

// EXTERNAL MODULE: ./components/lib/Layout/index.tsx
var Layout = __webpack_require__("s+Wx");

// EXTERNAL MODULE: ./components/lib/NavBar/style/index.ts
var NavBar_style = __webpack_require__("NPum");

// EXTERNAL MODULE: ./components/lib/NavBar/index.tsx
var NavBar = __webpack_require__("v/Pk");

// EXTERNAL MODULE: ./components/lib/style/index.ts + 1 modules
var lib_style = __webpack_require__("ioeU");

// EXTERNAL MODULE: ./components/lib/Dropdown/style/index.less
var Dropdown_style = __webpack_require__("mm3Y");

// CONCATENATED MODULE: ./components/lib/Dropdown/style/index.ts


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/lib/utils/index.ts
var utils = __webpack_require__("LZdz");

// CONCATENATED MODULE: ./components/lib/Dropdown/index.tsx










var Dropdown_Dropdown =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false,
      left: 0
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "dorpdown", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "dropdownOverlay", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handelVisible", function () {
      var visible = _this.state.visible;
      var left = 0;

      if (_this.dropdownOverlay && _this.dorpdown) {
        var width = _this.dropdownOverlay.offsetWidth;
        var dropWidth = _this.dorpdown.offsetWidth;
        left = width / 2 - dropWidth / 2;
      }

      _this.setState({
        visible: !visible,
        left: -left
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Dropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          overlay = _this$props.overlay,
          animateClass = _this$props.animateClass;
      var _this$state = this.state,
          visible = _this$state.visible,
          left = _this$state.left;
      return external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])('dropdown', className),
        ref: function ref(e) {
          return _this2.dorpdown = e;
        }
      }, children, external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])("dropdown_overlay ".concat(visible ? animateClass || '' : ''), visible ? '' : 'hide'),
        ref: function ref(e) {
          return _this2.dropdownOverlay = e;
        },
        style: {
          left: left
        }
      }, overlay));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var trigger = this.props.trigger;

      if (trigger) {
        trigger.map(function (i) {
          _this3.dorpdown && _this3.dorpdown.addEventListener(i, _this3.handelVisible);
        });
      }
    }
  }]);

  return Dropdown;
}(external_react_["Component"]);

Object(defineProperty["a" /* default */])(Dropdown_Dropdown, "defaultProps", {
  trigger: ['click'],
  animateClass: 'anima_fadeIn'
});


// EXTERNAL MODULE: ./components/lib/Icon/style/index.ts
var Icon_style = __webpack_require__("7BSc");

// EXTERNAL MODULE: ./components/lib/Icon/index.tsx
var Icon = __webpack_require__("b3x8");

// EXTERNAL MODULE: ./components/lib/Menu/style/index.ts + 1 modules
var Menu_style = __webpack_require__("NTkt");

// EXTERNAL MODULE: ./components/lib/Menu/index.tsx + 2 modules
var Menu = __webpack_require__("9zcg");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./layouts/PageLayout/index.less
var layouts_PageLayout = __webpack_require__("cAvm");

// CONCATENATED MODULE: ./layouts/PageShop/index.tsx





















var PageShop_PageLayout =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PageLayout, _Component);

  function PageLayout() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, PageLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(PageLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      status: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(PageLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var status = this.state.status;
      var _this$props = this.props,
          children = _this$props.children,
          defaultSelected = _this$props.defaultSelected,
          navBar = _this$props.navBar;
      var items = [{
        item: {
          label: '商品设置',
          field: '/shop/controller/shop',
          icon: {
            type: 'icon',
            name: 'ios-menu'
          }
        }
      }, {
        item: {
          label: '店铺设置',
          field: '/shop/controller/setting',
          icon: {
            type: 'icon',
            name: 'md-settings'
          }
        }
      }];
      var menuOptions = {
        className: layouts_PageLayout["home_menu"],
        defaultSelected: defaultSelected,
        width: '10rem',
        items: items
      };
      var logoView = external_react_default.a.createElement("div", {
        className: "".concat(layouts_PageLayout["home_logo"], " flex_center")
      }, external_react_default.a.createElement("span", {
        style: {
          fontSize: '0.8rem',
          fontWeight: 800
        }
      }, "\u81FB\u98DF\u4F18\u54C1\u6EAF\u6E90\u7CFB\u7EDF"));
      var service = external_react_default.a.createElement(Menu["b" /* default */], {
        width: "15rem"
      }, external_react_default.a.createElement(Menu["b" /* default */].Item, null, "1111"), external_react_default.a.createElement(Menu["b" /* default */].Item, null, "2222"), external_react_default.a.createElement(Menu["b" /* default */].Item, null, "3333"));
      var pageNav = external_react_default.a.createElement(NavBar["a" /* default */], {
        className: layouts_PageLayout["home_nav"],
        left: external_react_default.a.createElement(Icon["a" /* default */], {
          icon: status ? 'menu-open' : 'menu-close',
          className: layouts_PageLayout["home_nav_icon"],
          onClick: function onClick() {
            _this2.setState({
              status: !status
            });
          }
        }),
        right: external_react_default.a.createElement("div", {
          className: "flex"
        }, external_react_default.a.createElement(Dropdown_Dropdown, {
          className: "flex",
          overlay: service
        }, external_react_default.a.createElement("div", {
          className: "".concat(layouts_PageLayout["home_nav_item"], " flex_justify")
        }, external_react_default.a.createElement("div", {
          className: "flex"
        }, external_react_default.a.createElement(Icon["a" /* default */], {
          icon: "custom-service",
          fontSize: "0.8rem",
          style: {
            marginRight: '0.2rem'
          }
        }), external_react_default.a.createElement("span", null, "\u8054\u7CFB\u5BA2\u670D"), external_react_default.a.createElement(Icon["a" /* default */], {
          icon: "md-arrow-dropdown",
          fontSize: "0.8rem"
        })))), external_react_default.a.createElement("div", {
          className: "".concat(layouts_PageLayout["home_nav_item"], " flex_justify")
        }, external_react_default.a.createElement("div", {
          className: "flex"
        }, external_react_default.a.createElement(Icon["a" /* default */], {
          icon: "ios-volume-high",
          fontSize: "0.8rem",
          viewBox: "0 0 512 512",
          style: {
            marginRight: '0.2rem'
          }
        }), external_react_default.a.createElement("span", null, "\u6D88\u606F\u4E2D\u5FC3"), external_react_default.a.createElement(Icon["a" /* default */], {
          icon: "md-arrow-dropdown",
          fontSize: "0.8rem"
        }))), external_react_default.a.createElement("div", {
          className: "".concat(layouts_PageLayout["home_nav_item"], " flex")
        }, external_react_default.a.createElement("div", {
          className: "flex_justify"
        }, external_react_default.a.createElement("div", {
          className: "flex"
        }, external_react_default.a.createElement("span", null, "\u8D85\u7EA7\u7BA1\u7406\u5458"), external_react_default.a.createElement(Icon["a" /* default */], {
          icon: "md-arrow-dropdown",
          fontSize: "0.8rem"
        })))))
      });
      return external_react_default.a.createElement(Layout["a" /* default */], {
        menuOptions: menuOptions,
        logoView: logoView,
        pageNav: pageNav
      }, external_react_default.a.createElement("div", {
        className: "flex_column ".concat(layouts_PageLayout["home_view"])
      }, navBar, external_react_default.a.createElement("div", {
        className: "".concat(layouts_PageLayout["home_scroll"], " flex_1")
      }, children)));
    }
  }]);

  return PageLayout;
}(external_react_["Component"]);

/* harmony default export */ var PageShop = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(function (_ref) {
  var router = _ref.router;
  return {
    router: router
  };
})(PageShop_PageLayout));

/***/ }),

/***/ "7BSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("35Ph");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "7YAK":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "83qb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHead; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8Vax");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+pzk");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);











var PageHead =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(PageHead, _Component);

  function PageHead() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PageHead);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PageHead).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PageHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
      })), children);
    }
  }]);

  return PageHead;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(PageHead, "defaultProps", {
  title: ''
});



/***/ }),

/***/ "83ri":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "8Vax":
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "8u61":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9zcg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./muka/lib/isFunction.ts
var isFunction = __webpack_require__("M/cP");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./muka/lib/isString.ts
var isString = __webpack_require__("Gt0/");

// EXTERNAL MODULE: external "antd/lib/tooltip/style"
var style_ = __webpack_require__("AF2q");

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/lib/utils/index.ts
var utils = __webpack_require__("LZdz");

// EXTERNAL MODULE: ./components/lib/Icon/index.tsx
var Icon = __webpack_require__("b3x8");

// CONCATENATED MODULE: ./components/lib/Menu/MenuItem.tsx














var MenuItem_MenuItem =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MenuItem, _Component);

  function MenuItem() {
    Object(classCallCheck["a" /* default */])(this, MenuItem);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MenuItem).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          icon = _this$props.icon,
          field = _this$props.field,
          iconHighlight = _this$props.iconHighlight,
          iconInitColor = _this$props.iconInitColor;
      return external_react_default.a.createElement(Consumer, null, function (val) {
        var url = field ? field.toString() : '';

        var nodeView = function nodeView(child) {
          if (val.collapsed) {
            return external_react_default.a.createElement(tooltip_default.a, {
              title: children,
              placement: "right"
            }, child);
          } else {
            return external_react_default.a.createElement(external_react_["Fragment"], null, child);
          }
        };

        var jsxNode = external_react_default.a.createElement("li", {
          className: Object(utils["a" /* getClassName */])("menu_item".concat(val.field === field ? ' active' : ''), className),
          onClick: function onClick() {
            val.onPress(field === undefined ? '' : field);
          }
        }, external_react_default.a.createElement(link_default.a, {
          href: val.fieldToUrl ? url : '#'
        }, external_react_default.a.createElement("div", {
          className: Object(utils["a" /* getClassName */])("menu_item__label flex".concat(!icon ? ' single' : ''))
        }, icon && external_react_default.a.createElement("div", {
          className: Object(utils["a" /* getClassName */])('menu_item__label_icon flex_justify')
        }, Object(isString["a" /* default */])(icon) ? external_react_default.a.createElement(Icon["a" /* default */], {
          icon: icon,
          color: val.field === field ? iconHighlight : iconInitColor
        }) : icon), !val.collapsed && external_react_default.a.createElement("div", {
          className: Object(utils["a" /* getClassName */])('menu_item__label_title flex_1')
        }, children))));
        return nodeView(jsxNode);
      });
    }
  }]);

  return MenuItem;
}(external_react_["Component"]);

Object(defineProperty["a" /* default */])(MenuItem_MenuItem, "defaultProps", {
  iconHighlight: '#FFFFFF',
  iconInitColor: '#A8AdAF'
});
// CONCATENATED MODULE: ./components/lib/Menu/MenuGroup.tsx















var MenuGroup_MenuGroup =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MenuGroup, _Component);

  function MenuGroup() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, MenuGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(MenuGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "selected", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "status", true);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowBox", function () {
      _this.selected = !_this.selected;
      _this.status = false;

      _this.setState({
        visible: _this.selected
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          title = _this$props.title,
          icon = _this$props.icon,
          field = _this$props.field,
          iconHighlight = _this$props.iconHighlight,
          iconInitColor = _this$props.iconInitColor;
      var visible = this.state.visible;
      return external_react_default.a.createElement(Consumer, null, function (val) {
        var node = external_react_default.a.Children.map(children, function (item, index) {
          if (item.type === MenuItem_MenuItem) {
            var fieldProps = item.props.field;

            if (fieldProps === val.field && _this2.status) {
              _this2.selected = true;
            }

            return external_react_default.a.cloneElement(item, {
              field: fieldProps ? fieldProps : "".concat(field, "-").concat(index)
            });
          }

          return item;
        });

        var nodeView = function nodeView(child) {
          if (val.collapsed) {
            return external_react_default.a.createElement(tooltip_default.a, {
              title: title,
              placement: "right"
            }, child);
          } else {
            return external_react_default.a.createElement(external_react_["Fragment"], null, child);
          }
        };

        var jsxNode = external_react_default.a.createElement("li", {
          className: Object(utils["a" /* getClassName */])('menu_group', className)
        }, external_react_default.a.createElement("ul", {
          className: Object(utils["a" /* getClassName */])('menu_group_title', className)
        }, external_react_default.a.createElement("li", {
          className: Object(utils["a" /* getClassName */])('menu_group_box flex'),
          onClick: _this2.handleShowBox
        }, external_react_default.a.createElement("div", {
          className: Object(utils["a" /* getClassName */])('menu_group_title__icon flex_justify')
        }, !val.collapsed && external_react_default.a.Children.count(children) && val.arrowIconPos === 'left' ? external_react_default.a.createElement("div", {
          className: "flex_justify",
          style: {
            transform: _this2.selected || visible ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: '0.5s all'
          }
        }, external_react_default.a.createElement(Icon["a" /* default */], {
          icon: val.arrowIcon,
          color: val.arrowIconColor,
          fontSize: "0.8rem"
        })) : null, Object(isString["a" /* default */])(icon) && val.arrowIconPos === 'right' ? external_react_default.a.createElement(Icon["a" /* default */], {
          icon: icon,
          color: val.field === field ? iconHighlight : iconInitColor
        }) : icon), !val.collapsed ? external_react_default.a.createElement("div", {
          className: Object(utils["a" /* getClassName */])('menu_group_title__label flex_1')
        }, title) : null, !val.collapsed && external_react_default.a.Children.count(children) && val.arrowIconPos === 'right' ? external_react_default.a.createElement("div", {
          className: "flex_justify",
          style: {
            transform: _this2.selected || visible ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: '0.5s all'
          }
        }, external_react_default.a.createElement(Icon["a" /* default */], {
          icon: val.arrowIcon,
          color: val.arrowIconColor,
          fontSize: "0.8rem"
        })) : null), !val.collapsed ? external_react_default.a.createElement("li", {
          className: Object(utils["a" /* getClassName */])('menu_group_content flex_1', _this2.selected || visible ? 'active' : '')
        }, external_react_default.a.createElement("ul", null, node)) : null));
        return nodeView(jsxNode);
      });
    }
  }]);

  return MenuGroup;
}(external_react_["Component"]);

Object(defineProperty["a" /* default */])(MenuGroup_MenuGroup, "defaultProps", {
  iconHighlight: '#FFFFFF',
  iconInitColor: '#A8AdAF'
});
// CONCATENATED MODULE: ./components/lib/Menu/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumer; });
/* unused harmony export Provider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Menu_Menu; });
/* unused concated harmony import MenuGroup */
/* unused concated harmony import MenuItem */















var defaultValue = {
  field: '',
  onPress: function onPress(index) {
    return;
  },
  collapsed: false,
  fieldToUrl: false
};

var _createContext = Object(external_react_["createContext"])(defaultValue),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;



var Menu_Menu =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Menu, _React$Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      field: _this.props.defaultSelected === undefined ? '' : _this.props.defaultSelected
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handlePress", function (field) {
      var onChange = _this.props.onChange;

      _this.setState({
        field: field
      }, function () {
        if (Object(isFunction["a" /* default */])(onChange)) {
          onChange(field);
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          width = _this$props.width,
          collapsed = _this$props.collapsed,
          fieldToUrl = _this$props.fieldToUrl,
          arrowIcon = _this$props.arrowIcon,
          arrowIconColor = _this$props.arrowIconColor,
          arrowIconPos = _this$props.arrowIconPos;

      var styles = Object(objectSpread["a" /* default */])({}, style, {
        width: width
      });

      return external_react_default.a.createElement("ul", {
        className: Object(utils["a" /* getClassName */])("menu".concat(collapsed ? ' fold' : ''), className),
        style: styles
      }, external_react_default.a.createElement(Provider, {
        value: Object(objectSpread["a" /* default */])({}, this.state, {
          onPress: this.handlePress,
          collapsed: collapsed || false,
          fieldToUrl: fieldToUrl || false,
          arrowIcon: arrowIcon || 'md-arrow-down',
          arrowIconColor: arrowIconColor || '#333',
          arrowIconPos: arrowIconPos || 'right'
        })
      }, external_react_default.a.Children.map(children, function (item, index) {
        if (item.type === MenuItem_MenuItem || item.type === MenuGroup_MenuGroup) {
          var field = item.props.field;
          return external_react_default.a.cloneElement(item, {
            field: field ? field : index
          });
        }

        return item;
      })));
    }
  }]);

  return Menu;
}(external_react_default.a.Component);

Object(defineProperty["a" /* default */])(Menu_Menu, "Group", MenuGroup_MenuGroup);

Object(defineProperty["a" /* default */])(Menu_Menu, "Item", MenuItem_MenuItem);



/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "AF2q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "B6vA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qVDf");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("b3x8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LZdz");











var prefixClass = 'btn';

var Button =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Button, _Component);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Button).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          fixed = _this$props.fixed,
          mold = _this$props.mold,
          disabled = _this$props.disabled,
          loading = _this$props.loading;

      var otherProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.props, ['children', 'className', 'fixed', 'mold', 'tick', 'loading']);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getClassName */ "a"])("".concat(prefixClass, " ").concat(prefixClass, "_").concat(mold).concat(fixed ? ' fixed' : '').concat(disabled ? ' disabled' : ''), className)
      }, otherProps), loading ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        icon: "md-refresh",
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getClassName */ "a"])("".concat(prefixClass, "_loading")),
        rotate: true
      }) : '', children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Button, "defaultProps", {
  mold: 'default',
  tick: true
});



/***/ }),

/***/ "BXNh":
/***/ (function(module, exports) {



/***/ }),

/***/ "BaZy":
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Ey91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lang_getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dga7");
 // 判断是否为函数

var isFunction = function isFunction(it) {
  return Object(_lang_getType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(it) === 'function';
};

/* harmony default export */ __webpack_exports__["a"] = (isFunction);

/***/ }),

/***/ "Fmji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sources_type_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4uLm");

/* harmony default export */ __webpack_exports__["a"] = (_sources_type_isNumber__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "GSBE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lang_getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dga7");
 // 判断是否为字符串

var isString = function isString(it) {
  return Object(_lang_getType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(it) === 'string';
};

/* harmony default export */ __webpack_exports__["a"] = (isString);

/***/ }),

/***/ "Gt0/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sources_type_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GSBE");

/* harmony default export */ __webpack_exports__["a"] = (_sources_type_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "HKQd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./muka/sources/lang/hash.ts
var hash = __webpack_require__("2Alm");

// EXTERNAL MODULE: ./muka/sources/type/isString.ts
var isString = __webpack_require__("GSBE");

// EXTERNAL MODULE: ./muka/sources/type/isFunction.ts
var isFunction = __webpack_require__("Ey91");

// EXTERNAL MODULE: ./muka/sources/type/isNumber.ts
var isNumber = __webpack_require__("4uLm");

// CONCATENATED MODULE: ./muka/sources/plugs/verify.ts
var verify = {
  // 金额验证
  isAmount: function isAmount(value) {
    return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value);
  },
  // 银行卡验证
  isBack: function isBack(value) {
    return /^\d{16,19}$/.test(value);
  },
  // 邮箱验证
  isEmail: function isEmail(value) {
    return /([a-zA-Z0-9]+[_|\\_|\\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/.test(value);
  },
  // 电话验证
  isMobile: function isMobile(value) {
    return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value);
  },
  // 判断是否为base64
  isBase64: function isBase64(value) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i.test(value);
  }
};
/* harmony default export */ var plugs_verify = (verify);
// CONCATENATED MODULE: ./muka/sources/plugs/PreLoad.ts









 // const CancelToken: axios.CancelTokenStatic = axios.CancelToken

var PreLoad_PreLoad =
/*#__PURE__*/
function () {
  /**
   *  加载文件数据
   */
  // tslint:disable-next-line: array-type

  /**
   * 图片类型
   */

  /**
   * 加载进度
   */

  /**
   * 加载对象
   */
  // tslint:disable-next-line: array-type

  /**
   * 加载文件总数
   */
  // tslint:disable-next-line: array-type
  function PreLoad() {
    var _this = this;

    var imgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    Object(classCallCheck["a" /* default */])(this, PreLoad);

    Object(defineProperty["a" /* default */])(this, "loads", []);

    Object(defineProperty["a" /* default */])(this, "imgTypes", ['jpeg', 'svg', 'jpg', 'gif', 'png']);

    Object(defineProperty["a" /* default */])(this, "loadNum", 0);

    Object(defineProperty["a" /* default */])(this, "pomiseLoads", []);

    Object(defineProperty["a" /* default */])(this, "timer", []);

    Object(defineProperty["a" /* default */])(this, "count", 0);

    Object(defineProperty["a" /* default */])(this, "completeLoad", function () {
      return;
    });

    Object(defineProperty["a" /* default */])(this, "loading", function () {
      return;
    });

    Object(defineProperty["a" /* default */])(this, "success", function () {
      _this.clearAsync();
    });

    Object(defineProperty["a" /* default */])(this, "clearAsync", function () {
      _this.timer.map(function (item) {
        if (Object(isNumber["a" /* default */])(item)) {
          clearTimeout(item);
        }
      });
    });

    this.loads = imgs;
    this.count = imgs.length;
    this.loads.forEach(function (item) {
      // 获得文件后缀名
      if (item && Object(isString["a" /* default */])(item)) {
        _this.pomiseLoads.push(_this.getExtLoad(item));
      }
    });
  }
  /**
   * 已经缓存过的文件会触发回调
   */


  Object(createClass["a" /* default */])(PreLoad, [{
    key: "getExtLoad",

    /**
     * 依据后缀名 选择加载方式
     */
    value: function getExtLoad(uri) {
      var _this2 = this;

      if (!uri) {
        return promise_default.a.resolve({});
      }

      var index = uri.lastIndexOf('.');
      var ext = uri.substr(index + 1);

      if (Object(hash["a" /* default */])(this.imgTypes, ext) || plugs_verify.isBase64(uri)) {
        var img = new Image();
        img.src = uri;
        return new promise_default.a(function (resolve, reject) {
          if (img.complete || img.width) {
            var delay = function delay() {
              _this2.loadNum++;

              _this2.completeLoad(uri);

              _this2.loadFunc();

              resolve(uri);
            };

            _this2.timer.push(window.setTimeout(delay, 10));

            return;
          }

          img.addEventListener('load', function () {
            _this2.loadNum++;

            _this2.loadFunc();

            resolve(uri);
          });
          img.addEventListener('error', function () {
            _this2.loadNum++;

            _this2.loadFunc();

            reject('load img error ' + uri);
          });
        });
      }

      return external_axios_default.a.get(uri).then(function (data) {
        _this2.loadNum++;

        _this2.loadFunc();

        return data;
      }).catch(function () {
        _this2.loadNum++;

        _this2.loadFunc();
      });
    }
    /**
     * 加载完成的回调
     */

  }, {
    key: "loadFunc",
    value: function loadFunc() {
      if (Object(isFunction["a" /* default */])(this.loading)) {
        this.loading(this.loadNum, this.count, this.pomiseLoads[this.loadNum]);
      }

      if (Object(isFunction["a" /* default */])(this.success) && this.loadNum === this.count) {
        this.success(this.loads, this.pomiseLoads);
      }
    }
  }]);

  return PreLoad;
}();


// CONCATENATED MODULE: ./muka/lib/PreLoad.ts

/* harmony default export */ var lib_PreLoad = (PreLoad_PreLoad);
// EXTERNAL MODULE: ./muka/lib/browser.ts + 1 modules
var browser = __webpack_require__("v7dG");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/lib/utils/index.ts
var utils = __webpack_require__("LZdz");

// EXTERNAL MODULE: ./components/lib/ScrollView/index.tsx
var ScrollView = __webpack_require__("xwo2");

// CONCATENATED MODULE: ./components/lib/Image/index.tsx
/* unused harmony export setImageLoadingSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image_Image; });












var imgObj = {
  src: ''
};
var setImageLoadingSource = function setImageLoadingSource(uri) {
  imgObj.src = uri;
};

var Image_Image =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Image, _Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      uri: '',
      animation: false,
      show: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "imageNode", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleScroll", function () {
      var _this$props = _this.props,
          offsetBottom = _this$props.offsetBottom,
          src = _this$props.src;
      var animation = _this.state.animation;
      var top = 0;

      if (_this.controller) {
        top = (_this.controller.scrollTop || 0) + browser["a" /* default */].GL_SC_HEIGHT;
      } else {
        top = (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) + browser["a" /* default */].GL_SC_HEIGHT;
      }

      if (!animation && _this.imageNode && _this.imageNode.offsetTop - (offsetBottom || 0) - top <= 0) {
        var loading = new lib_PreLoad([src]);
        loading.completeLoad = _this.completeURI.bind(Object(assertThisInitialized["a" /* default */])(_this), src);
        loading.success = _this.handleSuccess.bind(Object(assertThisInitialized["a" /* default */])(_this), src, loading);
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Image, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          loadingIndicatorSource = _this$props2.loadingIndicatorSource,
          onClick = _this$props2.onClick,
          controller = _this$props2.controller;
      var _this$state = this.state,
          animation = _this$state.animation,
          uri = _this$state.uri,
          show = _this$state.show;
      var opacity = uri || loadingIndicatorSource;
      return external_react_default.a.createElement(ScrollView["a" /* Consumer */], null, function (val) {
        _this2.controller = controller || val.controller;
        return external_react_default.a.createElement("img", {
          className: Object(utils["a" /* getClassName */])("image".concat(opacity ? '' : ' opacity').concat(animation && !show ? ' an_fadeIn' : '').concat(show ? ' show' : ''), className),
          src: uri || loadingIndicatorSource || imgObj.src,
          onClick: onClick,
          ref: function ref(e) {
            _this2.imageNode = e;
          },
          style: style
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var src = this.props.src;

      if (this.controller) {
        this.controller.removeEventListener('scroll', this.handleScroll);
        this.controller.addEventListener('scroll', this.handleScroll);
      }

      if (src !== nextProps.src) {
        if (this.loading) {
          this.loading.clearAsync();
        }

        this.loading = new lib_PreLoad([nextProps.src]);
        this.loading.success = this.handleSuccess.bind(this, nextProps.src, this.loading);
        this.loading.completeLoad = this.completeURI.bind(this, nextProps.src);
      } else {
        this.handleSuccess.bind(this, src);
        this.completeURI.bind(this, src);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.controller = this.controller ? this.controller : window;

      if (this.controller) {
        this.handleScroll();
        this.controller.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.controller) {
        this.controller.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "completeURI",
    value: function completeURI(uri) {
      this.setState({
        uri: uri,
        show: true
      });
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(url, loading) {
      var uri = this.state.uri;

      if (uri && uri === url) {
        this.controller && this.controller.removeEventListener('scroll', this.handleScroll);
        return;
      }

      this.setState({
        uri: url,
        animation: true
      });

      if (loading) {
        loading.clearAsync();
      }

      this.controller && this.controller.removeEventListener('scroll', this.handleScroll);
    }
  }]);

  return Image;
}(external_react_["Component"]);

Object(defineProperty["a" /* default */])(Image_Image, "defaultProps", {
  offsetBottom: 100
});



/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "LZdz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClassName; });
var prefix = 'mk_';
/**
 * @param {string} name 类名会和prefix结合
 * @param {string} extendClass  扩展类名-字符串拼接
 */

function getClassName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var extendClass = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(prefix + name).concat(extendClass ? ' ' + extendClass : '');
}

/***/ }),

/***/ "M/cP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sources_type_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ey91");

/* harmony default export */ __webpack_exports__["a"] = (_sources_type_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NPum":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _Icon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7BSc");
/* harmony import */ var _Image_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zltQ");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dnDX");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "NTkt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/lib/style/index.ts + 1 modules
var style = __webpack_require__("ioeU");

// EXTERNAL MODULE: ./components/lib/Menu/style/index.less
var Menu_style = __webpack_require__("iPsY");

// EXTERNAL MODULE: ./components/lib/Icon/style/index.ts
var Icon_style = __webpack_require__("7BSc");

// EXTERNAL MODULE: ./components/lib/Item/style/index.less
var Item_style = __webpack_require__("xeyY");

// CONCATENATED MODULE: ./components/lib/Item/style/index.ts


// CONCATENATED MODULE: ./components/lib/Menu/style/index.ts





/***/ }),

/***/ "Npvd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _Button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ymE4");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TApU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "OVmd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("irbb");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ymE4");
/* harmony import */ var _NavBar_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NPum");





/***/ }),

/***/ "OX6J":
/***/ (function(module, exports) {



/***/ }),

/***/ "OaPk":
/***/ (function(module, exports) {

module.exports = require("react-easy-crop");

/***/ }),

/***/ "P6MC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3Ljp");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "PHfX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./muka/sources/lang/getType.ts
var getType = __webpack_require__("dga7");

// CONCATENATED MODULE: ./muka/sources/type/isArray.ts
 // 判断是否为数组

var isArray_isArray = function isArray(it) {
  return Object(getType["a" /* default */])(it) === 'array';
};

/* harmony default export */ var type_isArray = (isArray_isArray);
// CONCATENATED MODULE: ./muka/lib/isArray.ts

/* harmony default export */ var lib_isArray = __webpack_exports__["a"] = (type_isArray);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RGP6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TApU":
/***/ (function(module, exports) {



/***/ }),

/***/ "TBA7":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider/style");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UQn4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./muka/sources/lang/getType.ts
var getType = __webpack_require__("dga7");

// CONCATENATED MODULE: ./muka/sources/type/isUndefined.ts
 // 判断是否为字符串

var isUndefined_isUndefined = function isUndefined(it) {
  return Object(getType["a" /* default */])(it) === 'undefined';
};

/* harmony default export */ var type_isUndefined = (isUndefined_isUndefined);
// CONCATENATED MODULE: ./muka/lib/isUndefined.ts

/* harmony default export */ var lib_isUndefined = __webpack_exports__["a"] = (type_isUndefined);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XZ83":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),

/***/ "XdnO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony import */ var muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UQn4");
/* harmony import */ var muka_lib_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZdTe");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M/cP");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("LZdz");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("B6vA");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("v/Pk");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("b3x8");
















var prefixClass = 'dialog';
var globalNode;

var Dialog =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Dialog, _Component);

  function Dialog(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Dialog);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Dialog).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "index", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "state", {
      visible: false,
      animate: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "node", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "animateNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "status", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "handelAnimate", function () {
      var onFirstShow = _this.props.onFirstShow;
      var animate = _this.state.animate;

      if (!animate) {
        _this.timer = setTimeout(function () {
          clearTimeout(_this.timer);

          _this.setState({
            visible: false
          });
        }, 200);
      }

      if (animate && _this.index === 1 && Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(onFirstShow)) {
        onFirstShow();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "handleClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        animate: false
      }, function () {
        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(onClose)) {
          onClose(false);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "handelOk", function () {
      var onOk = _this.props.onOk;

      _this.setState({
        animate: false
      }, function () {
        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(onOk)) {
          onOk();
        }
      });
    });

    if (props.visible) {
      _this.state.animate = props.visible;
      _this.state.visible = props.visible;
      _this.status = true;
      _this.index++;
    }

    if (typeof document !== 'undefined') {
      globalNode = document.querySelector(".".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])('mask_box')));

      if (globalNode) {
        _this.node = globalNode;
      } else {
        var dom = document.createElement('div');
        dom.className = Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])('mask_box');
        var body = document.querySelector('body');

        if (body) {
          body.appendChild(dom);
        }

        _this.node = dom;
        globalNode = dom;
      }
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Dialog, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var visible = this.state.visible;

      if (visible !== nextProps.visible) {
        var obj = {
          animate: nextProps.visible || false
        };

        if (nextProps.visible) {
          obj.visible = nextProps.visible;
          this.index++;
          this.status = true;
        }

        this.setState(obj, function () {
          if (_this2.animateNode) {
            _this2.animateNode.removeEventListener('animationend', _this2.handelAnimate, false);
          }

          if (_this2.animateNode) {
            _this2.animateNode.addEventListener('animationend', _this2.handelAnimate, false);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.animateNode) {
        this.animateNode.removeEventListener('animationend', this.handelAnimate, false);
      }

      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          children = _this$props.children,
          footer = _this$props.footer,
          animateInClass = _this$props.animateInClass,
          animateOutClass = _this$props.animateOutClass,
          style = _this$props.style;
      var _this$state = this.state,
          visible = _this$state.visible,
          animate = _this$state.animate;

      if (this.node && this.status) {
        return Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])("".concat(prefixClass, " flex_center ").concat(animate ? 'fadeIn' : 'fadeOut')),
          style: {
            display: visible ? '' : 'none'
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])("".concat(prefixClass, "_content flex_column ").concat(animate ? animateInClass : animateOutClass), className),
          ref: function ref(e) {
            return _this3.animateNode = e;
          },
          style: style
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          left: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: "navbar_label"
          }, title),
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])("".concat(prefixClass, "_content__navbar")),
          right: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
            icon: "ios-close",
            style: {
              cursor: 'pointer'
            },
            onClick: this.handleClose
          })
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])("".concat(prefixClass, "_content__box flex_1"))
        }, children), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getClassName */ "a"])("".concat(prefixClass, "_content__navbar ").concat(_utils__WEBPACK_IMPORTED_MODULE_12__[/* prefix */ "b"], "divider_top")),
          divider: false,
          left: " ",
          right: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: "flex"
          }, Object(muka_lib_isNull__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(footer) ? null : Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(footer) ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            onClick: this.handleClose,
            style: {
              marginRight: '10px'
            }
          }, "\u53D6\u6D88"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
            mold: "primary",
            onClick: this.handelOk
          }, "\u786E\u5B9A")) : footer)
        }))), this.node);
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null);
    }
  }]);

  return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Dialog, "defaultProps", {
  animateInClass: 'slipUp',
  animateOutClass: 'slipBottom'
});



/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YOdr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LZdz");








var LabelHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LabelHeader, _Component);

  function LabelHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LabelHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(LabelHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LabelHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          line = _this$props.line,
          className = _this$props.className,
          right = _this$props.right;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getClassName */ "a"])("label-header flex", className)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex_justify"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getClassName */ "a"])("label-header__title ".concat(line || ''))
      }, title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex_1"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex_justify"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getClassName */ "a"])("label-header__right")
      }, right)));
    }
  }]);

  return LabelHeader;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZdTe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./muka/sources/lang/getType.ts
var getType = __webpack_require__("dga7");

// CONCATENATED MODULE: ./muka/sources/type/isNull.ts


var isNull_isNull = function isNull(it) {
  return Object(getType["a" /* default */])(it) === 'null';
};

/* harmony default export */ var type_isNull = (isNull_isNull);
// CONCATENATED MODULE: ./muka/lib/isNull.ts

/* harmony default export */ var lib_isNull = __webpack_exports__["a"] = (type_isNull);

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "b0Xw":
/***/ (function(module, exports) {



/***/ }),

/***/ "b3x8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qVDf");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("LZdz");












var paths = {
  'md-search': __webpack_require__.e(/* import() */ "adf3").then(__webpack_require__.bind(null, "yGuA")).then(function (data) {
    return data.default;
  }),
  'ios-search': __webpack_require__.e(/* import() */ "d662").then(__webpack_require__.bind(null, "C3Gt")).then(function (data) {
    return data.default;
  }),
  'md-home': __webpack_require__.e(/* import() */ "e7c7").then(__webpack_require__.bind(null, "Yyfs")).then(function (data) {
    return data.default;
  }),
  'ios-home': __webpack_require__.e(/* import() */ "56ac").then(__webpack_require__.bind(null, "yBS9")).then(function (data) {
    return data.default;
  }),
  'md-exit': __webpack_require__.e(/* import() */ "e69e").then(__webpack_require__.bind(null, "kWJ7")).then(function (data) {
    return data.default;
  }),
  'ios-exit': __webpack_require__.e(/* import() */ "7d02").then(__webpack_require__.bind(null, "fn30")).then(function (data) {
    return data.default;
  }),
  'md-arrow-down': __webpack_require__.e(/* import() */ "7fb0").then(__webpack_require__.bind(null, "nIpi")).then(function (data) {
    return data.default;
  }),
  'ios-arrow-down': __webpack_require__.e(/* import() */ "3db7").then(__webpack_require__.bind(null, "cg3d")).then(function (data) {
    return data.default;
  }),
  'md-contract': __webpack_require__.e(/* import() */ "516a").then(__webpack_require__.bind(null, "/5jt")).then(function (data) {
    return data.default;
  }),
  'ios-contract': __webpack_require__.e(/* import() */ "962a").then(__webpack_require__.bind(null, "3eOR")).then(function (data) {
    return data.default;
  }),
  'md-person': __webpack_require__.e(/* import() */ "bfa1").then(__webpack_require__.bind(null, "3aqK")).then(function (data) {
    return data.default;
  }),
  'ios-person': __webpack_require__.e(/* import() */ "5b8f").then(__webpack_require__.bind(null, "SEHw")).then(function (data) {
    return data.default;
  }),
  'md-document': __webpack_require__.e(/* import() */ "58bd").then(__webpack_require__.bind(null, "Dmwm")).then(function (data) {
    return data.default;
  }),
  'ios-document': __webpack_require__.e(/* import() */ "c4c8").then(__webpack_require__.bind(null, "U6ik")).then(function (data) {
    return data.default;
  }),
  'md-expand': __webpack_require__.e(/* import() */ "772c").then(__webpack_require__.bind(null, "2xjS")).then(function (data) {
    return data.default;
  }),
  'ios-expand': __webpack_require__.e(/* import() */ "fe83").then(__webpack_require__.bind(null, "Jb8y")).then(function (data) {
    return data.default;
  }),
  'md-trending-up': __webpack_require__.e(/* import() */ "acfd").then(__webpack_require__.bind(null, "YnFq")).then(function (data) {
    return data.default;
  }),
  'ios-trending-up': __webpack_require__.e(/* import() */ "d7ef").then(__webpack_require__.bind(null, "/Kgn")).then(function (data) {
    return data.default;
  }),
  'md-gift': __webpack_require__.e(/* import() */ "3f05").then(__webpack_require__.bind(null, "Um6D")).then(function (data) {
    return data.default;
  }),
  'ios-gift': __webpack_require__.e(/* import() */ "de8d").then(__webpack_require__.bind(null, "dWI1")).then(function (data) {
    return data.default;
  }),
  'md-close': __webpack_require__.e(/* import() */ "35b4").then(__webpack_require__.bind(null, "Ct3p")).then(function (data) {
    return data.default;
  }),
  'ios-close': __webpack_require__.e(/* import() */ "1189").then(__webpack_require__.bind(null, "hmSr")).then(function (data) {
    return data.default;
  }),
  'md-arrow-back': __webpack_require__.e(/* import() */ "aa24").then(__webpack_require__.bind(null, "qgpa")).then(function (data) {
    return data.default;
  }),
  'ios-arrow-back': __webpack_require__.e(/* import() */ "e1b1").then(__webpack_require__.bind(null, "Kwsb")).then(function (data) {
    return data.default;
  }),
  'md-apps': __webpack_require__.e(/* import() */ "972c").then(__webpack_require__.bind(null, "rAQW")).then(function (data) {
    return data.default;
  }),
  'ios-apps': __webpack_require__.e(/* import() */ "5065").then(__webpack_require__.bind(null, "GUPP")).then(function (data) {
    return data.default;
  }),
  'md-add': __webpack_require__.e(/* import() */ "1016").then(__webpack_require__.bind(null, "yKqQ")).then(function (data) {
    return data.default;
  }),
  'ios-add': __webpack_require__.e(/* import() */ "87b1").then(__webpack_require__.bind(null, "WcS6")).then(function (data) {
    return data.default;
  }),
  'md-remove': __webpack_require__.e(/* import() */ "4ef3").then(__webpack_require__.bind(null, "7dTE")).then(function (data) {
    return data.default;
  }),
  'ios-remove': __webpack_require__.e(/* import() */ "671f").then(__webpack_require__.bind(null, "EUYs")).then(function (data) {
    return data.default;
  }),
  'md-more': __webpack_require__.e(/* import() */ "c994").then(__webpack_require__.bind(null, "rStG")).then(function (data) {
    return data.default;
  }),
  'ios-more': __webpack_require__.e(/* import() */ "c44d").then(__webpack_require__.bind(null, "KQIi")).then(function (data) {
    return data.default;
  }),
  'md-arrow-forward': __webpack_require__.e(/* import() */ "a015").then(__webpack_require__.bind(null, "ItKL")).then(function (data) {
    return data.default;
  }),
  'ios-arrow-forward': __webpack_require__.e(/* import() */ "2f94").then(__webpack_require__.bind(null, "hBMs")).then(function (data) {
    return data.default;
  }),
  'md-checkmark': __webpack_require__.e(/* import() */ "fdff").then(__webpack_require__.bind(null, "8Qwt")).then(function (data) {
    return data.default;
  }),
  'ios-checkmark': __webpack_require__.e(/* import() */ "b697").then(__webpack_require__.bind(null, "x3pu")).then(function (data) {
    return data.default;
  }),
  'md-close-circle-outline': __webpack_require__.e(/* import() */ "d216").then(__webpack_require__.bind(null, "x0J4")).then(function (data) {
    return data.default;
  }),
  'ios-close-circle-outline': __webpack_require__.e(/* import() */ "1849").then(__webpack_require__.bind(null, "mViV")).then(function (data) {
    return data.default;
  }),
  'md-close-circle': __webpack_require__.e(/* import() */ "241f").then(__webpack_require__.bind(null, "FEt7")).then(function (data) {
    return data.default;
  }),
  'ios-close-circle': __webpack_require__.e(/* import() */ "0aac").then(__webpack_require__.bind(null, "8YWs")).then(function (data) {
    return data.default;
  }),
  'md-settings': __webpack_require__.e(/* import() */ "d0b5").then(__webpack_require__.bind(null, "sjbM")).then(function (data) {
    return data.default;
  }),
  'ios-settings': __webpack_require__.e(/* import() */ "85e8").then(__webpack_require__.bind(null, "tXYi")).then(function (data) {
    return data.default;
  }),
  'menu-open': __webpack_require__.e(/* import() */ "465d").then(__webpack_require__.bind(null, "KS1b")).then(function (data) {
    return data.default;
  }),
  'menu-close': __webpack_require__.e(/* import() */ "507a").then(__webpack_require__.bind(null, "QWfu")).then(function (data) {
    return data.default;
  }),
  'shop': __webpack_require__.e(/* import() */ "687d").then(__webpack_require__.bind(null, "YTH8")).then(function (data) {
    return data.default;
  }),
  'shopping': __webpack_require__.e(/* import() */ "ae37").then(__webpack_require__.bind(null, "nd7D")).then(function (data) {
    return data.default;
  }),
  'shop-setting': __webpack_require__.e(/* import() */ "0397").then(__webpack_require__.bind(null, "mSgr")).then(function (data) {
    return data.default;
  }),
  'purse': __webpack_require__.e(/* import() */ "0f34").then(__webpack_require__.bind(null, "rjQW")).then(function (data) {
    return data.default;
  }),
  'small-routine': __webpack_require__.e(/* import() */ "16ae").then(__webpack_require__.bind(null, "Pu28")).then(function (data) {
    return data.default;
  }),
  'double-arrow-left': __webpack_require__.e(/* import() */ "31ff").then(__webpack_require__.bind(null, "8AWO")).then(function (data) {
    return data.default;
  }),
  'double-arrow-right': __webpack_require__.e(/* import() */ "7c55").then(__webpack_require__.bind(null, "cv0r")).then(function (data) {
    return data.default;
  }),
  'msg': __webpack_require__.e(/* import() */ "0b70").then(__webpack_require__.bind(null, "Ckri")).then(function (data) {
    return data.default;
  }),
  'file_box': __webpack_require__.e(/* import() */ "889a").then(__webpack_require__.bind(null, "EFGd")).then(function (data) {
    return data.default;
  })
};

var Icon =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Icon, _Component);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "state", {
      path: '',
      viewBox: '0 0 512 512'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "getPathByIconName", function (icon) {
      if (icon && paths[icon]) {
        paths[icon].then(function (data) {
          _this.setState({
            path: data.path.join(' '),
            viewBox: data.viewBox
          });
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Icon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var icon = this.props.icon;
      this.getPathByIconName(icon);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var icon = this.props.icon;

      if (icon !== nextProps.icon) {
        this.getPathByIconName(nextProps.icon);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          fontSize = _this$props.fontSize,
          onClick = _this$props.onClick,
          rotate = _this$props.rotate,
          shake = _this$props.shake,
          beat = _this$props.beat,
          style = _this$props.style;

      var props = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this.props, ['className', 'color', 'fontSize', 'onClick', 'rotate', 'shake', 'beat', 'style', 'viewBox']);

      var _this$state = this.state,
          path = _this$state.path,
          viewBox = _this$state.viewBox;

      var styles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, style, {
        fill: color,
        fontSize: fontSize
      });

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getClassName */ "a"])('icon')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
        style: styles,
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getClassName */ "a"])("icon".concat(shake ? ' shake' : '').concat(beat ? ' beat' : '').concat(rotate ? ' rotate' : ''), className),
        fill: color,
        width: fontSize,
        height: fontSize,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: viewBox,
        onClick: onClick,
        rotate: rotate ? 1 : 0
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("path", {
        d: path
      })));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Icon, "defaultProps", {
  style: {},
  color: '#000000',
  fontSize: '22px',
  shake: false,
  beat: false,
  rotate: false
});



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cAvm":
/***/ (function(module, exports) {

module.exports = {
	"home_logo": "home_logo___3UdID",
	"home_collapsed": "home_collapsed___3ngBl",
	"home_nav": "home_nav___11EL_",
	"nav_left": "nav_left___33S1D",
	"nav_right": "nav_right___18ku_",
	"nav_user": "nav_user___2amBh",
	"nav_title": "nav_title___33zrm",
	"home_nav_list": "home_nav_list___53HIo",
	"nav_input": "nav_input___2FipX",
	"home_nav_item": "home_nav_item___Vrk8J",
	"mk_icon": "mk_icon___1aAg2",
	"home_menu": "home_menu___hBxEg",
	"home_view": "home_view___3EEb-",
	"home_scroll": "home_scroll___2ihBJ",
	"nav_bar": "nav_bar___1MVJA",
	"nav_bar_label": "nav_bar_label___Q9TmW",
	"page_menu": "page_menu___1be0m",
	"page_menu_title": "page_menu_title___3f8Ih",
	"page_menu_title_solo": "page_menu_title_solo___3mWN0",
	"show_solo": "show_solo___KUp2l",
	"animate_menu": "animate_menu___3wt1Q",
	"fold": "fold___RXs4S"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cYh5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mUqT");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "dga7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getType = function getType(it) {
  var o = {}.toString.call(it);
  var ele = o.split(' ')[1].substr(0, 4);

  switch (o) {
    case '[object Object]':
      return 'object';

    case '[object Array]':
      return 'array';

    case '[object RegExt]':
      return 'regext';

    case '[object Number]':
      return 'number';

    case '[object String]':
      return 'string';

    case '[object Null]':
      return 'null';

    case '[object Function]':
      return 'function';

    case '[object Boolean]':
      return 'boolean';

    case '[object Blob]':
      return 'blob';

    case '[object File]':
      return 'file';

    case '[object FormData]':
      return 'formData';

    default:
      if (!it) {
        return '' + it + '';
      } else {
        if (ele === 'HTML' || ele === 'Node') {
          return 'element';
        } else {
          return 'unkonw';
        }
      }

  }
};

/* harmony default export */ __webpack_exports__["a"] = (getType);

/***/ }),

/***/ "dnDX":
/***/ (function(module, exports) {



/***/ }),

/***/ "eMim":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload/style");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hkJ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mJni");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M/cP");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zrwo");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("qVDf");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dfwq");
/* harmony import */ var muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UQn4");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("BaZy");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("LZdz");




















// tslint:disable-next-line: only-arrow-functions tslint:disable-next-line: no-shadowed-variable
var loadableComponent = function loadableComponent(component) {
  return react_loadable__WEBPACK_IMPORTED_MODULE_16___default()({
    loader: function loader() {
      return component;
    },
    loading: function loading() {
      return null;
    },
    // tslint:disable-next-line: no-shadowed-variable
    render: function render(loaded, props) {
      var View;

      if (loaded.Group) {
        View = loaded.Group;
      } else {
        View = loaded.default;
      }

      if (View) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, props);
      }

      return null;
    }
  });
};

var prefixClass = 'l_form';

var LForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(LForm, _Component);

  function LForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, LForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(LForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), "items", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), "lref", {
      getFieldValue: _this.getFieldValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this)),
      cleanFieldValue: _this.cleanFieldValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this)),
      setFieldValue: _this.setFieldValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this)),
      showFieldElement: _this.setFieldElement.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), true),
      hideFieldElement: _this.setFieldElement.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), false),
      updateFieldProps: _this.updateFieldProps.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this)) // tslint:disable-next-line: no-shadowed-variable

    });

    var getItems = _this.props.getItems;
    var vals = {};
    var childs = [];
    _this.items = getItems(_this.lref);

    _this.items.map(function (item, index) {
      var field = item.field || "".concat(item.component, "_").concat(index);

      var _porps = item.props || {};

      switch (item.component) {
        case 'Radio':
          {
            vals[field] = _porps.value; // tslint:disable-next-line: align
          }
          break;

        case 'Slider':
          {
            vals[field] = _porps.value || _porps.defaultValue || 0; // tslint:disable-next-line: align
          }
          break;

        case 'Colors':
          {
            vals[field] = _porps.initColor || ''; // tslint:disable-next-line: align
          }
          break;

        case 'LUpload':
          {
            vals[field] = _porps.fileList || (_porps.maxLength > 1 ? [] : ''); // tslint:disable-next-line: align
          }
          break;

        case 'ImagePicker':
          {
            vals[field] = _porps.value || []; // tslint:disable-next-line: align
          }
          break;

        case 'Map':
          {
            vals[field] = _porps.value || {}; // tslint:disable-next-line: align
          }
          break;

        default:
          {
            vals[field] = _porps.value || '';
          }
      }

      childs.push({
        type: item.component,
        view: null,
        field: field,
        additional: item.additional,
        label: item.label,
        props: item.props || {},
        render: Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(item.render) ? true : item.render
      });
    });

    _this.state = {
      vals: vals,
      childs: childs
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(LForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var getItems = nextProps.getItems;
      var _this$state = this.state,
          childs = _this$state.childs,
          vals = _this$state.vals;
      var items = getItems(this.lref);
      this.items = items;

      var newChild = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(childs);

      var status = false;
      items.forEach(function (item, index) {
        // 如果组件不存在 则创建
        if (!newChild[index]) {
          status = true;

          var _field = item.field || "".concat(item.component, "_").concat(index);

          var _porps = item.props || {};

          newChild[index] = {
            type: item.component,
            view: null,
            field: _field,
            label: item.label,
            props: _porps,
            additional: item.additional,
            render: Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(item.render) ? true : item.render
          };

          switch (item.component) {
            case 'Radio':
              {
                vals[_field] = _porps.value; // tslint:disable-next-line: align
              }
              break;

            case 'Slider':
              {
                vals[_field] = _porps.value || _porps.defaultValue || 0; // tslint:disable-next-line: align
              }
              break;

            case 'Colors':
              {
                vals[_field] = _porps.initColor || ''; // tslint:disable-next-line: align
              }
              break;

            case 'LUpload':
              {
                vals[_field] = _porps.fileList || (_porps.maxLength > 1 ? [] : ''); // tslint:disable-next-line: align
              }
              break;

            case 'ImagePicker':
              {
                vals[_field] = _porps.value || []; // tslint:disable-next-line: align
              }
              break;

            case 'Map':
              {
                vals[_field] = _porps.value || {}; // tslint:disable-next-line: align
              }
              break;

            default:
              {
                vals[_field] = _porps.value || '';
              }
          }

          return;
        }

        if (item.field === newChild[index].field) {
          var newProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(item.props || {}, ['value']);

          newChild[index].props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, newChild[index].props, newProps);
          newChild[index].additional = item.additional;
        }
      });
      this.setState({
        childs: newChild,
        vals: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, vals)
      }, function () {
        if (status) {
          _this2.getTypeChild();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var childs = this.state.childs;
      var _this$props = this.props,
          className = _this$props.className,
          showType = _this$props.showType;
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("l_form ".concat(showType), className)
      }, childs.map(function (item, index) {
        if (item.view && item.render) {
          return _this3.setTypeCom(_this3.items[index].component, item.view, item.props, item.field, index, item.className, item.label, item.additional);
        }

        return undefined;
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTypeChild();
    }
  }, {
    key: "getTypeChild",
    value: function getTypeChild() {
      var _this4 = this;

      var childs = this.state.childs;
      var newChilds = childs.map(function (item, index) {
        if (item.view) {
          if (item.type !== _this4.items[index].component) {
            var Com = _this4.typeChild(_this4.items[index].component);

            if (Com) {
              item.view = Com;
            }
          }
        } else {
          var _Com = _this4.typeChild(_this4.items[index].component);

          var _field2 = item.field || "".concat(item.type, "_").concat(index);

          if (_Com) {
            item = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, item, {
              view: _Com,
              type: item.type,
              field: _field2,
              label: item.label,
              props: item.props || {},
              render: Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(item.render) ? true : item.render
            });
          }
        }

        return item;
      });
      this.setState({
        childs: newChilds
      });
    } // tslint:disable-next-line: no-shadowed-variable

  }, {
    key: "typeChild",
    value: function typeChild(component) {
      switch (component) {
        case 'Input':
          return loadableComponent(__webpack_require__.e(/* import() */ "31a5").then(__webpack_require__.bind(null, "4cH2")));

        case 'Button':
          return loadableComponent(__webpack_require__.e(/* import() */ "fd88").then(__webpack_require__.bind(null, "B6vA")));

        case 'Radio':
          return loadableComponent(__webpack_require__.e(/* import() */ "d689").then(__webpack_require__.bind(null, "oNMH")));

        case 'DatePicker':
          return loadableComponent(__webpack_require__.e(/* import() */ "6260").then(__webpack_require__.bind(null, "7Hrm")));

        case 'LUpload':
          return loadableComponent(__webpack_require__.e(/* import() */ "eb42").then(__webpack_require__.bind(null, "9iZt")));

        case 'Label':
          return loadableComponent(__webpack_require__.e(/* import() */ "e292").then(__webpack_require__.bind(null, "zRvQ")));

        case 'RadioGroup':
          return loadableComponent(__webpack_require__.e(/* import() */ "d689").then(__webpack_require__.bind(null, "oNMH")));

        case 'Select':
          return loadableComponent(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "A4pX", 7)));

        case 'ImagePicker':
          return loadableComponent(__webpack_require__.e(/* import() */ "4d3d").then(__webpack_require__.bind(null, "gi7W")));

        case 'Map':
          return loadableComponent(__webpack_require__.e(/* import() */ "85f4").then(__webpack_require__.bind(null, "5qSd")));

        case 'Textarea':
          return loadableComponent(__webpack_require__.e(/* import() */ "eeda").then(__webpack_require__.bind(null, "ndBP")));

        case 'Colors':
          return loadableComponent(__webpack_require__.e(/* import() */ "b08e").then(__webpack_require__.bind(null, "bE43")));

        case 'Carousel':
          return loadableComponent(__webpack_require__.e(/* import() */ "9b0f").then(__webpack_require__.bind(null, "FsVx")));

        case 'Slider':
          return loadableComponent(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7YAK", 7)));

        default:
          return null;
      }
    } // tslint:disable-next-line: no-shadowed-variable

  }, {
    key: "setTypeCom",
    value: function setTypeCom(component, View, props, field, key, className, label, additional) {
      var vals = this.state.vals; /// 得到field

      field = field ? field : "".concat(component, "_").concat(key);
      props = props || {};

      switch (component) {
        case 'Input':
          {
            var _porps = props;

            var vProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['value', 'onChange', 'onClose']); // tslint:disable-next-line: only-arrow-functions


            var onChange = _porps.onChange || function (e) {}; // tslint:disable-next-line: only-arrow-functions


            var onClose = _porps.onClose || function (val) {};

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1 flex_justify"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, vProps, {
              value: vals[field],
              onChange: this.setVal.bind(this, field, onChange),
              onClose: this.cleanInputVal.bind(this, field, onClose),
              key: field
            })))), additional && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label flex_justify"))
            }, additional));
          }

        case 'Textarea':
          {
            var _porps2 = props;

            var _vProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['value', 'onChange']); // tslint:disable-next-line: only-arrow-functions


            var _onChange = _porps2.onChange || function (e) {};

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps, {
              value: vals[field],
              onChange: this.setVal.bind(this, field, _onChange),
              key: field
            })))), additional && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label flex_justify"))
            }, additional));
          }

        case 'Colors':
          {
            var _porps3 = props;

            var _vProps2 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['onChange']); // tslint:disable-next-line: only-arrow-functions


            var _onChange2 = _porps3.onChange || function (e) {};

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1 flex_justify"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps2, {
              initColor: vals[field],
              onChange: this.setColors.bind(this, field, _onChange2),
              key: field
            }))));
          }

        case 'Carousel':
          {
            var _porps4 = props;

            var _vProps3 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['onChange']);

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps3, {
              key: field
            }))));
          }

        case 'Slider':
          {
            var _vProps4 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['onChange', 'value']);

            var _porps5 = props;
            var _onChange3 = _porps5.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list flex_justify"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps4, {
              key: field,
              value: vals[field],
              onChange: this.setRVal.bind(this, field, _onChange3)
            })))));
          }

        case 'Button':
          {
            var _vProps5 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, []);

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps5, {
              key: field
            }));
          }

        case 'Radio':
          {
            var _vProps6 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['onChange', 'value']);

            var _porps6 = props;
            var _onChange4 = _porps6.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list flex_justify"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps6, {
              value: vals[field],
              onChange: this.setRVal.bind(this, field, _onChange4)
            })))), additional && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__additional flex_justify"))
            }, additional));
          }

        case 'Map':
          {
            var _vProps7 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['onLocationAddr']);

            var _porps7 = props;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
              onLocationAddr: this.steArrVal.bind(this, field, _porps7.onLocationAddr)
            }, _vProps7))));
          }

        case 'DatePicker':
          {
            var _vProps8 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['onChange']);

            var _porps8 = props;
            var _onChange5 = _porps8.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps8, {
              key: field,
              value: vals[field] ? moment__WEBPACK_IMPORTED_MODULE_17___default()(vals[field]) : null,
              onChange: this.setDatePickerVal.bind(this, field, _onChange5)
            }));
          }

        case 'ImagePicker':
          {
            var _vProps9 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['value', 'onChange']);

            var _porps9 = props;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
              value: vals[field],
              onChange: this.steArrVal.bind(this, field, _porps9.onChange)
            }, _vProps9))));
          }

        case 'LUpload':
          {
            var _vProps10 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['fileList', 'onChange']);

            var _porps10 = props;
            var _onChange6 = _porps10.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex",
              key: field
            }, _porps10.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("".concat(prefixClass, "__list_label"))
            }, _porps10.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps10, {
              fileList: vals[field],
              onChange: this.setUploadVal.bind(this, field, _onChange6)
            })));
          }

        case 'RadioGroup':
          {
            var _vProps11 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['value', 'onChange']);

            var _porps11 = props;
            var _onChange7 = _porps11.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])('l_form_radio_group flex', className),
              key: field
            }, _porps11.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])('l_form_radio_group_label flex_justify')
            }, _porps11.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps11, {
              value: vals[field],
              onChange: this.setVal.bind(this, field, _onChange7)
            })));
          }

        case 'Select':
          {
            var _vProps12 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['value', 'onChange']);

            var _porps12 = props;
            var _onChange8 = _porps12.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])('l_form_select flex', className),
              key: field
            }, _porps12.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])('l_form_select_label flex_justify')
            }, _porps12.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps12, {
              value: vals[field],
              className: "flex_1",
              onChange: this.setRVal.bind(this, field, _onChange8)
            })));
          }

        case 'Label':
          {
            var _vProps13 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, ['value', 'onChange', 'className']);

            var _porps13 = props;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getClassName */ "a"])("l_form_label flex", _porps13.className),
              key: field
            }, _porps13.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_justify",
              style: {
                marginRight: '0.4rem'
              }
            }, _porps13.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1 flex_justify"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _vProps13, {
              style: {
                paddingTop: '0',
                paddingBottom: '0'
              },
              key: field
            }), _porps13.value)));
          }

        default:
          return null;
      }
    }
  }, {
    key: "setUploadVal",
    value: function setUploadVal(field, cb, file) {
      var vals = this.state.vals;
      vals[field] = file.fileList;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb(file);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "steArrVal",
    value: function steArrVal(field, cb, val) {
      var vals = this.state.vals;
      vals[field] = val;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb(val);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setColors",
    value: function setColors(field, cb, color, e) {
      var vals = this.state.vals;
      vals[field] = color.hex;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb(color, e);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setVal",
    value: function setVal(field, cb, e) {
      var vals = this.state.vals;
      vals[field] = e.target.value;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb(e);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setDatePickerVal",
    value: function setDatePickerVal(field, cb, val, dateString) {
      var vals = this.state.vals;
      vals[field] = dateString;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb(val, dateString);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setRVal",
    value: function setRVal(field, cb, val) {
      var vals = this.state.vals;
      vals[field] = val;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb(val);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "cleanInputVal",
    value: function cleanInputVal(field, cb) {
      var vals = this.state.vals;
      vals[field] = '';

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cb)) {
        cb('');
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "getComVal",
    value: function getComVal(item, field) {
      var vals = this.state.vals;

      switch (item.type) {
        case 'LUpload':
          {
            var _props = item.props || {};

            var baseUrl = _props.baseUrl || '';

            if (_props.maxLength === 1) {
              // tslint:disable-next-line: no-string-literal
              var url = vals[field][0] && (vals[field][0]['url'] || vals[field][0]['response']['data']) || '';

              if (baseUrl && Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(url, baseUrl)) {
                return url.substring(baseUrl.length);
              } else {
                return url;
              }
            } else {
              return vals[field].map(function (i) {
                // tslint:disable-next-line: no-string-literal
                var url = i['url'] || i['response']['data'];

                if (baseUrl && Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(url, baseUrl)) {
                  return url.substring(baseUrl.length);
                } else {
                  return url;
                }
              });
            }
          }

        default:
          return vals[field];
      }
    }
  }, {
    key: "getFieldValue",
    value: function getFieldValue(params) {
      var _this5 = this;

      var childs = this.state.childs;
      var val = {};
      childs.map(function (item, index) {
        if (params) {
          params.map(function (i) {
            if (item.field === i) {
              val[i] = _this5.getComVal(item, i);
            }
          });
        } else {
          val[item.field] = _this5.getComVal(item, item.field);
        }
      });
      return val;
    }
  }, {
    key: "cleanFieldValue",
    value: function cleanFieldValue() {
      var vals = this.state.vals;
      this.items.map(function (item, index) {
        var field = item.field || "".concat(item.component, "_").concat(index); // tslint:disable-next-line: no-shadowed-variable

        var props = item.props || {};

        switch (item.component) {
          case 'Radio':
            {
              vals[field] = props.value; // tslint:disable-next-line: align
            }
            break;

          case 'LUpload':
            {
              vals[field] = []; // tslint:disable-next-line: align
            }
            break;

          case 'ImagePicker':
            {
              vals[field] = props.value ? props.value : []; // tslint:disable-next-line: align
            }
            break;

          default:
            {
              vals[field] = props.value ? props.value : '';
            }
        }
      });
      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(params) {
      var vals = this.state.vals;
      this.items.map(function (item, index) {
        var field = item.field || "".concat(item.component, "_").concat(index);

        if (params[field]) {
          switch (item.component) {
            case 'LUpload':
              {
                var _props = item.props || {};

                var baseUrl = _props.baseUrl || '';

                if (_props.maxLength === 1) {
                  vals[field] = [{
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'done',
                    url: baseUrl + params[field]
                  }];
                } else {
                  // tslint:disable-next-line: no-shadowed-variable
                  vals[field] = params[field].map(function (i, index) {
                    return {
                      uid: "".concat(index),
                      name: "reload_".concat(index, ".png"),
                      status: 'done',
                      url: baseUrl + i
                    };
                  });
                } // tslint:disable-next-line: align

              }
              break;

            default:
              {
                vals[field] = params[field];
              }
          }
        }
      });
      this.setState({
        vals: vals
      });
    }
  }, {
    key: "updateFieldProps",
    value: function updateFieldProps() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var childs = this.state.childs;

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params);

      var newChilds = childs.map(function (i) {
        if (Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(params, i.field)) {
          i.props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, i.props, params[i.field]);
        }

        return i;
      });
      this.setState({
        childs: newChilds
      });
    }
  }, {
    key: "setFieldElement",
    value: function setFieldElement(status, params) {
      var childs = this.state.childs;
      var newChilds = childs.map(function (i) {
        if (Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(params, i.field)) {
          i.render = status;
        }

        return i;
      });
      this.setState({
        childs: newChilds
      });
    }
  }]);

  return LForm;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(LForm, "defaultProps", {
  // tslint:disable-next-line: object-literal-shorthand tslint:disable-next-line: only-arrow-functions
  getItems: function getItems(exFun) {
    return [];
  },
  showType: 'column'
});



/***/ }),

/***/ "iPsY":
/***/ (function(module, exports) {



/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ioeU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/lib/style/core/index.less
var core = __webpack_require__("8u61");

// CONCATENATED MODULE: ./components/lib/style/core/index.ts

// CONCATENATED MODULE: ./components/lib/style/index.ts


/***/ }),

/***/ "irbb":
/***/ (function(module, exports) {



/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "koQY":
/***/ (function(module, exports) {

module.exports = require("hex-rgb");

/***/ }),

/***/ "mJni":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sources_lang_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Alm");

/* harmony default export */ __webpack_exports__["a"] = (_sources_lang_hash__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "mUqT":
/***/ (function(module, exports) {



/***/ }),

/***/ "mX/2":
/***/ (function(module, exports) {

module.exports = {
	"shop_logo": "shop_logo___CXZ4h",
	"nav_bar": "nav_bar___2lcuZ"
};

/***/ }),

/***/ "mm3Y":
/***/ (function(module, exports) {



/***/ }),

/***/ "ngBq":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p+vD":
/***/ (function(module, exports) {



/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pZY4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lang_getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dga7");


var isObject = function isObject(it) {
  return Object(_lang_getType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(it) === 'object';
};

/* harmony default export */ __webpack_exports__["a"] = (isObject);

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qVDf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// CONCATENATED MODULE: ./muka/sources/json/omit.ts


// 移除指定数组对象 返回一个浅复制对象
var omit_omit = function omit() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fields = arguments.length > 1 ? arguments[1] : undefined;

  var shallowCopy = Object(objectSpread["a" /* default */])({}, obj);

  fields.map(function (i) {
    delete shallowCopy[i];
  });
  return shallowCopy;
};

/* harmony default export */ var json_omit = (omit_omit);
// CONCATENATED MODULE: ./muka/lib/omit.ts

/* harmony default export */ var lib_omit = __webpack_exports__["a"] = (json_omit);

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s+Wx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qVDf");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LZdz");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("9zcg");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("HKQd");













var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Layout, _Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          menuOptions = _this$props.menuOptions,
          logoView = _this$props.logoView,
          pageNav = _this$props.pageNav,
          menuChange = _this$props.menuChange;

      var options = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(menuOptions, ['items', 'className']);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout flex')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout_nav')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout_logo')
      }, logoView), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout_nav_menu flex_1', menuOptions.className),
        onChange: menuChange
      }), this.getMenuView())), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout_page flex_1')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout_page_nav')
      }, pageNav), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])('layout_page_view flex_1')
      }, children)));
    }
  }, {
    key: "getMenuView",
    value: function getMenuView() {
      var menuOptions = this.props.menuOptions;
      return menuOptions.items.map(function (item, index) {
        var icon = '';

        if (item.icon && item.icon.type === 'icon') {
          icon = item.icon.name;
        } else if (item.icon && item.icon.type === 'image') {
          icon = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
            src: item.icon.name
          });
        }

        if (item.groupTitle) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"].Group, {
            title: item.groupTitle,
            field: item.field || index,
            icon: icon,
            key: "".concat(item.field || 'group', "_").concat(index)
          }, item.chirdren && item.chirdren.map(function (i) {
            var options = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(i, ['label', 'icon']); // tslint:disable-next-line: no-shadowed-variable


            var icon = '';

            if (i.icon && i.icon.type === 'icon') {
              icon = i.icon.name;
            } else if (i.icon && i.icon.type === 'image') {
              icon = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
                src: i.icon.name
              });
            }

            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"].Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
              key: "".concat(item.groupTitle, "_").concat(index, "_").concat(i.field || 'item')
            }, options, {
              icon: icon,
              iconInitColor: item.icon && item.icon.initColor,
              iconHighlight: item.icon && item.icon.highlight
            }), i.label);
          }));
        }

        if (item.item) {
          var options = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(item.item, ['label', 'icon']); // tslint:disable-next-line: no-shadowed-variable


          var _icon = '';

          if (item.item.icon && item.item.icon.type === 'icon') {
            _icon = item.item.icon.name;
          } else if (item.item.icon && item.item.icon.type === 'image') {
            _icon = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
              src: item.item.icon.name
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"].Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
            key: "".concat(item.item.label, "_").concat(index),
            icon: _icon,
            iconInitColor: item.item.icon && item.item.icon.initColor,
            iconHighlight: item.item.icon && item.item.icon.highlight
          }), item.item.label);
        }

        throw new Error('At least need item');
      });
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Layout, "defaultProps", {
  menuOptions: {
    items: []
  }
});



/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "v/Pk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
/* harmony import */ var muka_lib_isNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZdTe");
/* harmony import */ var muka_lib_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("PHfX");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M/cP");
/* harmony import */ var muka_lib_isNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Fmji");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("LZdz");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("b3x8");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("HKQd");

















var NavBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(NavBar, _Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this), "handleScroll", function () {
      var endVal = _this.props.endVal;
      var top = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

      if (Object(muka_lib_isNumber__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(endVal)) {
        console.log(top);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this), "handleClick", function (link, onClick) {
      var status = true;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(onClick)) {
        status = onClick();
      }

      if (status && link) {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push(link);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(NavBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          left = _this$props.left,
          divider = _this$props.divider,
          title = _this$props.title,
          right = _this$props.right,
          fixed = _this$props.fixed,
          goBack = _this$props.goBack,
          leftClassName = _this$props.leftClassName,
          titleCenter = _this$props.titleCenter,
          titleClassName = _this$props.titleClassName,
          rightClassName = _this$props.rightClassName,
          style = _this$props.style,
          onRightClick = _this$props.onRightClick;
      var rightValue;

      if (Object(muka_lib_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(right)) {
        rightValue = right.map(function (item, index) {
          if (item.type === 'icon') {
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
              icon: item.url,
              color: item.color,
              onClick: _this2.handleClick.bind(_this2, item.link, item.onClick),
              key: index
            });
          } else if (item.type === "image") {
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_13__[/* getClassName */ "a"])('nav_bar_right__img'),
              src: item.url,
              onClick: _this2.handleClick.bind(_this2, item.link, item.onClick),
              key: index
            });
          }
        });
      } else {
        rightValue = right;
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_13__[/* getClassName */ "a"])("nav_bar ".concat(divider ? _utils__WEBPACK_IMPORTED_MODULE_13__[/* prefix */ "b"] + 'divider' : '', " flex_justify").concat(fixed ? ' fixed' : ''), className)),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "flex"
      }, !Object(muka_lib_isNull__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(left) && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_13__[/* getClassName */ "a"])('nav_bar_left flex_justify', leftClassName),
        onClick: goBack
      }, left ? left : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        icon: "ios-arrow-back"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_13__[/* getClassName */ "a"])("nav_bar_title flex_1 ".concat(titleCenter ? 'flex_center' : 'flex_justify'), titleClassName)
      }, " ", title), !Object(muka_lib_isNull__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rightValue) && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_13__[/* getClassName */ "a"])('nav_bar_right flex_justify', rightClassName),
        onClick: onRightClick
      }, " ", rightValue, " ")));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          fixed = _this$props2.fixed,
          animate = _this$props2.animate;

      if (fixed && animate) {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(NavBar, "defaultProps", {
  divider: true
});



/***/ }),

/***/ "v7dG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./muka/sources/browser/index.ts


/**
 * Create Time 2016-10-20
 * Write Name Shackles Butterfly
 * Email Spicely@outlook.com
 */
var browser = create_default()(null, {
  // 显示器宽度
  GL_SC_HEIGHT: {
    value: function (_) {
      try {
        return window.screen.height;
      } catch (e) {
        return 0;
      }
    }()
  },
  // 显示器高度
  GL_SC_WIDTH: {
    value: function (_) {
      try {
        return window.screen.width;
      } catch (e) {
        return 0;
      }
    }()
  },
  // 浏览器可见高度
  height: {
    get: function get() {
      try {
        return window.innerHeight;
      } catch (e) {
        return 0;
      }
    }
  },
  // 判断手机平台
  isMobile: {
    get: function get() {
      return !this.isPC;
    }
  },
  // 判断PC平台
  isPC: {
    get: function get() {
      var mobile = this.redirect.match(/ipad/i) || this.redirect.match(/iphone os/i) || this.redirect.match(/midp/i) || this.redirect.match(/rv:1.2.3.4/i) || this.redirect.match(/ucweb/i) || this.redirect.match(/android/i) || this.redirect.match(/windows ce/i) || this.redirect.match(/windows mobile/i) || this.redirect.match(/windows phone/i);
      return !mobile;
    }
  },
  // 用于获得浏览器平台
  redirect: {
    get: function get() {
      try {
        var sUserAgent = navigator.userAgent.toLowerCase();
        return /\(([^()]*)\)/.test(sUserAgent) && RegExp.$1;
      } catch (e) {
        return 'error';
      }
    }
  },
  // 获得浏览器传递的参数
  search: {
    get: function get() {
      var search = location.search;

      if (search) {
        search = location.search.substr(1);
      } else {
        // 没有得到可能是单页面应用从#后截取
        var query = location.hash.split('?');

        try {
          if (query[1]) {
            search = query[1];
          } else {
            return {};
          }
        } catch (e) {
          // 直接返回空对象
          return {};
        }
      }

      var arr = search.split('&');
      var obj = {};
      arr.map(function (item) {
        var tmpArr = item.split('=');
        obj[decodeURIComponent(tmpArr[0])] = decodeURIComponent(tmpArr[1]);
      });
      return obj;
    }
  },
  // 浏览器可见宽度
  width: {
    get: function get() {
      try {
        return window.innerWidth;
      } catch (e) {
        return 0;
      }
    }
  }
});

/* harmony default export */ var sources_browser = (browser);
// CONCATENATED MODULE: ./muka/lib/browser.ts

/* harmony default export */ var lib_browser = __webpack_exports__["a"] = (sources_browser);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vavr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/lib/style/index.ts + 1 modules
var style = __webpack_require__("ioeU");

// EXTERNAL MODULE: ./components/lib/Colors/style/index.less
var Colors_style = __webpack_require__("wpHH");

// CONCATENATED MODULE: ./components/lib/Colors/style/index.ts


// EXTERNAL MODULE: ./components/lib/ImagePicker/style/index.less
var ImagePicker_style = __webpack_require__("p+vD");

// EXTERNAL MODULE: ./components/lib/Dialog/style/index.ts
var Dialog_style = __webpack_require__("OVmd");

// CONCATENATED MODULE: ./components/lib/ImagePicker/style/index.ts



// EXTERNAL MODULE: ./components/lib/Input/style/index.ts
var Input_style = __webpack_require__("Npvd");

// EXTERNAL MODULE: ./components/lib/Textarea/style/index.less
var Textarea_style = __webpack_require__("ngBq");

// CONCATENATED MODULE: ./components/lib/Textarea/style/index.ts


// EXTERNAL MODULE: ./components/lib/Radio/style/index.less
var Radio_style = __webpack_require__("BXNh");

// CONCATENATED MODULE: ./components/lib/Radio/style/index.ts


// EXTERNAL MODULE: external "antd/lib/slider/style"
var style_ = __webpack_require__("TBA7");

// EXTERNAL MODULE: ./components/lib/LForm/style/index.less
var LForm_style = __webpack_require__("b0Xw");

// CONCATENATED MODULE: ./components/lib/LForm/style/index.ts









/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wBli":
/***/ (function(module, exports) {



/***/ }),

/***/ "wpHH":
/***/ (function(module, exports) {



/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xeyY":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xwo2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumer; });
/* unused harmony export Provider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LZdz");










var prefixClass = 'scroll_view';

var _createContext = Object(react__WEBPACK_IMPORTED_MODULE_8__["createContext"])({
  controller: null
}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;



var ScrollView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ScrollView, _Component);

  function ScrollView() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ScrollView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ScrollView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "controller", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      controller: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ScrollView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style,
          scrollY = _this$props.scrollY,
          scrollX = _this$props.scrollX;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Provider, {
        value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.state)
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        ref: function ref(e) {
          return _this2.controller = e;
        },
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getClassName */ "a"])("".concat(prefixClass), className),
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style, {
          overflowY: scrollY ? 'auto' : 'hidden',
          overflowX: scrollX ? 'auto' : 'hidden'
        })
      }, children));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        controller: this.controller
      });
    }
  }]);

  return ScrollView;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "ymE4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ioeU");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+C7J");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "zRvQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qVDf");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LZdz");












var Label =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Label, _Component);

  function Label() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Label);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Label).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          color = _this$props.color;

      var cssStyle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, style);

      if (!cssStyle.color) {
        cssStyle.color = color;
      }

      var props = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.props, ['style', 'color', 'className']);

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
        style: cssStyle,
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getClassName */ "a"])('label', className)
      }), children);
    }
  }]);

  return Label;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Label, "defaultProps", {
  color: '#4395FF'
});



/***/ }),

/***/ "zltQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zltQ");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OX6J");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });