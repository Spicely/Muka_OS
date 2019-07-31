webpackHotUpdate(5,{

/***/ "./components/lib/Alert/index.tsx":
/*!****************************************!*\
  !*** ./components/lib/Alert/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");








var prefixClass = 'alert';

var Alert =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Alert, _Component);

  function Alert() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Alert);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Alert).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          message = _this$props.message,
          title = _this$props.title,
          inheritColor = _this$props.inheritColor;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, " ").concat(_utils__WEBPACK_IMPORTED_MODULE_7__["prefix"]).concat(prefixClass, "_").concat(type).concat(inheritColor ? ' inherit_color' : ''))
      }, title ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, "_title"))
      }, title) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, "_msg"))
      }, message));
    }
  }]);

  return Alert;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Alert, "defaultProps", {
  showIcon: false,
  inheritColor: false,
  type: 'info',
  message: ''
});



/***/ }),

/***/ "./components/lib/Alert/style/index.less":
/*!***********************************************!*\
  !*** ./components/lib/Alert/style/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786264");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/Alert/style/index.ts":
/*!*********************************************!*\
  !*** ./components/lib/Alert/style/index.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/lib/Alert/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./components/lib/BoxLine/index.tsx":
/*!******************************************!*\
  !*** ./components/lib/BoxLine/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxLine; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");








var BoxLine =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BoxLine, _Component);

  function BoxLine() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BoxLine);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BoxLine).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BoxLine, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getClassName"])('box_line', className)
      }, children);
    }
  }]);

  return BoxLine;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./components/lib/BoxLine/style/index.less":
/*!*************************************************!*\
  !*** ./components/lib/BoxLine/style/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786260");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/BoxLine/style/index.ts":
/*!***********************************************!*\
  !*** ./components/lib/BoxLine/style/index.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/lib/BoxLine/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./components/lib/Drag/dragBox.tsx":
/*!*****************************************!*\
  !*** ./components/lib/Drag/dragBox.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragBox; });
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "./components/lib/Drag/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");











var prefixClass = 'drag_box';

var DragBox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DragBox, _Component);

  function DragBox() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DragBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DragBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      boxLine: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleShowLine", function (status) {
      _this.setState({
        boxLine: status
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragEnd", function (data) {
      var onDragSuccess = _this.props.onDragSuccess;
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].publish('dragLeave', true);

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDragSuccess)) {
        onDragSuccess(data);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragEnter", function (e) {
      e.preventDefault();
      var onDragEnter = _this.props.onDragEnter;
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].publish('dragLeave', true);

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDragEnter)) {
        onDragEnter(e);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragLeave", function (e) {
      e.preventDefault();
      var onDragLeave = _this.props.onDragLeave;
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].publish('dragLeave', false);

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDragLeave)) {
        onDragLeave(e);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragOver", function (e) {
      e.preventDefault();
      var onDragOver = _this.props.onDragOver;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDragOver)) {
        onDragOver(e);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DragBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style;
      var boxLine = this.state.boxLine;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, " flex_column"), className),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_view flex_1 ").concat(boxLine ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + prefixClass + '_line' : '')),
        onDragOver: this.handleDragOver,
        onDragLeave: this.handleDragLeave,
        onDragEnter: this.handleDragEnter
      }, children));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].unsubscribe('dragEnd', this.handleDragEnd);
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].unsubscribe('dragShowLine', this.handleShowLine);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].subscribe('dragEnd', this.handleDragEnd);
      _index__WEBPACK_IMPORTED_MODULE_9__["observer"].subscribe('dragShowLine', this.handleShowLine);
    }
  }]);

  return DragBox;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/lib/Drag/index.tsx":
/*!***************************************!*\
  !*** ./components/lib/Drag/index.tsx ***!
  \***************************************/
/*! exports provided: observer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drag; });
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var muka_lib_Observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! muka/lib/Observer */ "./muka/lib/Observer.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dragBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dragBox */ "./components/lib/Drag/dragBox.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");












var observer = new muka_lib_Observer__WEBPACK_IMPORTED_MODULE_8__["default"]();
var prefixClass = 'drag';

var Drag =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Drag, _Component);

  function Drag() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Drag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Drag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "status", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragStart", function (e) {
      var _this$props = _this.props,
          data = _this$props.data,
          onDragStart = _this$props.onDragStart;
      observer.publish('dragShowLine', true);

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDragStart)) {
        onDragStart(data, e);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragLeave", function (status) {
      _this.status = status;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDragEnd", function (e) {
      e.preventDefault();
      var _this$props2 = _this.props,
          data = _this$props2.data,
          onDragEnd = _this$props2.onDragEnd;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDragEnd)) {
        onDragEnd(data, e);
      }

      observer.publish('dragShowLine', false);

      if (_this.status) {
        _this.status = false;
        observer.publish('dragEnd', data);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Drag, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (react__WEBPACK_IMPORTED_MODULE_9___default.a.Children.count(children) > 1 || react__WEBPACK_IMPORTED_MODULE_9___default.a.Children.count(children) === 0) {
        throw new Error('children length It can only be equal to 1');
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        draggable: true,
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass)),
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.Children.map(children, function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.cloneElement(item, {});
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      observer.subscribe('dragLeave', this.handleDragLeave);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      observer.unsubscribe('dragLeave', this.handleDragLeave);

      this.setState = function () {
        return;
      };
    }
  }]);

  return Drag;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Drag, "Box", _dragBox__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./components/lib/Drag/style/index.less":
/*!**********************************************!*\
  !*** ./components/lib/Drag/style/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786421");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/Drag/style/index.ts":
/*!********************************************!*\
  !*** ./components/lib/Drag/style/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/lib/Drag/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./components/lib/Pagination/index.tsx":
/*!*********************************************!*\
  !*** ./components/lib/Pagination/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button */ "./components/lib/Button/index.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Icon */ "./components/lib/Icon/index.tsx");













var prefixClass = 'pagination';

var Pagination =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Pagination, _Component);

  function Pagination(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Pagination);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Pagination).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      pageSize: 10
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (index) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          current = _this$props.current;
      if (index === current) return;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(onChange)) {
        onChange(index);
      }
    });

    _this.state.pageSize = props.pageSize || 10;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var pageSize = this.state.pageSize;

      if (nextProps.pageSize && nextProps.pageSize !== pageSize) {
        this.setState({
          pageSize: nextProps.pageSize
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          current = _this$props2.current,
          total = _this$props2.total;
      var pageSize = this.state.pageSize;
      var num = Math.ceil(total / pageSize);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass), className)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn")),
        disabled: current === 1 ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "ios-arrow-back",
        fontSize: "18px",
        color: current === 1 ? '#d9d9d9' : 'rgba(0, 0, 0, 0.65)'
      })), _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(new Array(num)).map(function (i, index) {
        if (num > 7) {
          if (index + 1 === 1) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
              key: index,
              onClick: _this2.handleChange.bind(_this2, index + 1)
            }, index + 1);
          } else if (index + 1 === num) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
              key: index,
              onClick: _this2.handleChange.bind(_this2, index + 1)
            }, index + 1);
          } else if (current === 1) {
            if (index + 1 < current + 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            } else if (index + 1 === current + 6) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn ").concat(_utils__WEBPACK_IMPORTED_MODULE_10__["prefix"], "notline"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                icon: "ios-more",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.65)"
              }));
            }
          } else if (current === num) {
            if (index + 1 > num - 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            } else if (index + 1 === current - 6) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn ").concat(_utils__WEBPACK_IMPORTED_MODULE_10__["prefix"], "notline"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                icon: "ios-more",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.65)"
              }));
            }
          } else {
            if (current === num - 1 && index + 1 === num - 4) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            }

            if (Math.abs(current - index) === 4) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn ").concat(_utils__WEBPACK_IMPORTED_MODULE_10__["prefix"], "notline"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                icon: "ios-more",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.65)"
              }));
            }

            if (Math.abs(current - (index + 1)) <= 2) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            }

            if (current === index + 1) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            }

            if (current === 2 && index + 1 === 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            }
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
            key: index
          }, index + 1);
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn")),
        disabled: current === num ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "ios-arrow-forward",
        fontSize: "18px",
        color: current === num ? '#d9d9d9' : 'rgba(0, 0, 0, 0.65)'
      })));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Pagination, "defaultProps", {
  pageSizeOptions: [10, 20, 30],
  current: 1,
  total: 10
});



/***/ }),

/***/ "./components/lib/Pagination/style/index.less":
/*!****************************************************!*\
  !*** ./components/lib/Pagination/style/index.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786256");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/Pagination/style/index.ts":
/*!**************************************************!*\
  !*** ./components/lib/Pagination/style/index.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _Button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button/style */ "./components/lib/Button/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/lib/Pagination/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./components/lib/Progress/index.tsx":
/*!*******************************************!*\
  !*** ./components/lib/Progress/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Progress; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");








var prefixClass = 'progress';

var Progress =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Progress, _Component);

  function Progress() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Progress);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Progress).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          percent = _this$props.percent,
          successPercent = _this$props.successPercent,
          text = _this$props.text,
          successPercentColor = _this$props.successPercentColor,
          percentColor = _this$props.percentColor;
      var val = percent > 100 ? 100 : percent < 0 ? 0 : percent;
      var succerss = (successPercent || 0) > 100 ? 100 : (successPercent || 0) < 0 ? 0 : successPercent || 0;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, " flex"), className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex_1 flex_justify"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, "_inter"))
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, "_inter__bg")),
        style: {
          width: "".concat(val, "%"),
          background: val !== 100 ? percentColor : successPercentColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, "_inter_success__bg")),
        style: {
          width: "".concat(succerss, "%"),
          background: successPercentColor
        }
      }))), text && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass, "__text"))
      }, text));
    }
  }]);

  return Progress;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Progress, "defaultProps", {
  percent: 0,
  successPercentColor: '#52c41a'
});



/***/ }),

/***/ "./components/lib/Progress/style/index.less":
/*!**************************************************!*\
  !*** ./components/lib/Progress/style/index.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786657");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/Progress/style/index.ts":
/*!************************************************!*\
  !*** ./components/lib/Progress/style/index.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/lib/Progress/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./components/lib/ScrollView/style/index.ts":
/*!**************************************************!*\
  !*** ./components/lib/ScrollView/style/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/lib/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./components/lib/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muka/lib/omit */ "./muka/lib/omit.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Input */ "./components/lib/Input/index.tsx");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NavBar */ "./components/lib/NavBar/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");












var prefixClass = 'search_bar';

var SearchBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchBar, _Component);

  function SearchBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          divider = _this$props.divider,
          left = _this$props.left,
          right = _this$props.right,
          fixed = _this$props.fixed,
          onRightClick = _this$props.onRightClick,
          style = _this$props.style;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass), className),
        left: left,
        style: style,
        divider: divider,
        title: this.getSearchNode(),
        right: right,
        fixed: fixed,
        onRightClick: onRightClick
      });
    }
  }, {
    key: "getSearchNode",
    value: function getSearchNode() {
      var otherProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props, ['className', 'left', 'right', 'options', 'divider', 'fixed', 'onRightClick']);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_search"))
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_search__int"))
      }, otherProps)));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(SearchBar, "defaultProps", {
  divider: true,
  right: '搜索'
});



/***/ }),

/***/ "./components/lib/SearchBar/style/index.less":
/*!***************************************************!*\
  !*** ./components/lib/SearchBar/style/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786251");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/SearchBar/style/index.ts":
/*!*************************************************!*\
  !*** ./components/lib/SearchBar/style/index.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Input/style */ "./components/lib/Input/style/index.ts");
/* harmony import */ var _NavBar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../NavBar/style */ "./components/lib/NavBar/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./components/lib/SearchBar/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./components/lib/Upload/dragger.tsx":
/*!*******************************************!*\
  !*** ./components/lib/Upload/dragger.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var muka_lib_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muka/lib/isString */ "./muka/lib/isString.ts");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var muka_lib_isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! muka/lib/isObject */ "./muka/lib/isObject.ts");
/* harmony import */ var muka_lib_isArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! muka/lib/isArray */ "./muka/lib/isArray.ts");
/* harmony import */ var muka_lib_isNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! muka/lib/isNumber */ "./muka/lib/isNumber.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");
/* harmony import */ var _ConfigProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ConfigProvider */ "./components/lib/ConfigProvider/index.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Icon */ "./components/lib/Icon/index.tsx");
/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Progress */ "./components/lib/Progress/index.tsx");























var prefixClass = 'upload_dragger';

var Upload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(Upload, _Component);

  function Upload(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Upload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__["default"])(Upload).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "intNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "types", ['image/png', 'image/jpeg', 'image/jpg']);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "state", {
      fileList: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "handleClick", function () {
      if (_this.intNode) {
        _this.intNode.click();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "getTypeView", function (type, url) {
      if (type.includes('jpeg') || type.includes('png') || type.includes('jpg')) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          style: {
            width: '100%',
            height: '100%',
            backgroundImage: "url(".concat(url, ")"),
            backgroundSize: '100% auto',
            backgroundPosition: 'center'
          }
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_21__["default"], {
          icon: "md-document",
          color: "rgba(0, 0, 0, 0.45)"
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "handleDropOver", function (e) {
      e.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "handleFileDrop", function (e) {
      e.preventDefault();
      var files = e.dataTransfer.files;

      if (files) {
        _this.updLoadFiles(files);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "handleFileChange", function (e) {
      var files = e.currentTarget.files;

      if (files) {
        _this.updLoadFiles(files);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "updLoadFiles", function (files) {
      var _this$props = _this.props,
          fileTypes = _this$props.fileTypes,
          maxLength = _this$props.maxLength,
          action = _this$props.action,
          name = _this$props.name,
          data = _this$props.data,
          withCredentials = _this$props.withCredentials,
          baserUrl = _this$props.baserUrl,
          onUploadSuccess = _this$props.onUploadSuccess;
      var fileList = _this.state.fileList;

      for (var i = 0; i < files.length; i++) {
        var file = files.item(i);

        if (file && (Object(muka_lib_isNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(maxLength) ? fileList.length <= maxLength : true)) {
          if (Object(muka_lib_isArray__WEBPACK_IMPORTED_MODULE_8__["default"])(fileTypes)) {
            if (fileTypes.includes(file.type)) {
              fileList.push({
                file: file,
                preUrl: _this.types.includes(file.type) ? window.URL.createObjectURL(file) : '',
                info: {
                  progress: 0,
                  status: 'uploading'
                }
              });
            }
          } else {
            fileList.push({
              file: file,
              preUrl: _this.types.includes(file.type) ? window.URL.createObjectURL(file) : '',
              info: {
                fileName: file.name,
                type: file.type,
                progress: 0,
                status: 'uploading'
              }
            });
          }
        }
      }

      fileList = fileList.map(function (i, index) {
        if (i.url) {
          i.info = {
            progress: 100,
            status: 'done'
          };
          return i;
        }

        var formData = new FormData();
        formData.append(name || 'avatar', i.file);

        if (Object(muka_lib_isObject__WEBPACK_IMPORTED_MODULE_7__["default"])(data)) {
          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(data).map(function (i) {
            formData.append(i, data[i]);
          });
        }

        if (!i.xhr) {
          i.xhr = axios__WEBPACK_IMPORTED_MODULE_18___default()({
            baseURL: baserUrl,
            method: 'POST',
            url: action,
            data: formData,
            withCredentials: withCredentials,
            onUploadProgress: function onUploadProgress(progressEvent) {
              var complete = progressEvent.loaded / progressEvent.total * 100 | 0;
              var fileList = _this.state.fileList;
              fileList[index].info = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, fileList[index].info, {
                progress: complete,
                status: complete === 100 ? 'done' : 'uploading'
              });

              _this.setState({
                fileList: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(fileList)
              },
              /*#__PURE__*/
              Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
              /*#__PURE__*/
              _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                var _data;

                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(i.xhr && complete === 100)) {
                          _context.next = 5;
                          break;
                        }

                        _context.next = 3;
                        return i.xhr;

                      case 3:
                        _data = _context.sent;

                        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(onUploadSuccess)) {
                          onUploadSuccess(i, _data.data);
                        }

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            }
          });
        }

        return i;
      });
    });

    _this.state.fileList = props.fileList || [];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__["default"])(Upload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          icon = _this$props2.icon,
          title = _this$props2.title,
          label = _this$props2.label,
          iconColor = _this$props2.iconColor,
          multiple = _this$props2.multiple,
          uploadViewClassName = _this$props2.uploadViewClassName,
          renderItem = _this$props2.renderItem,
          style = _this$props2.style;
      var fileList = this.state.fileList;
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_ConfigProvider__WEBPACK_IMPORTED_MODULE_20__["Consumer"], null, function (value) {
        var iconProps = icon || value.uploadDraggerProps && value.uploadDraggerProps.icon;
        var iconColorProps = iconColor || value.uploadDraggerProps && value.uploadDraggerProps.iconColor;
        var titleProps = title || value.uploadDraggerProps && value.uploadDraggerProps.title;
        var labelProps = label || value.uploadDraggerProps && value.uploadDraggerProps.label;
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass), className),
          style: style
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "__box"), className),
          onClick: _this2.handleClick,
          onDragOver: _this2.handleDropOver,
          onDrop: _this2.handleFileDrop
        }, children ? children : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "__box_default"))
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "__box_default__icon"))
        }, Object(muka_lib_isString__WEBPACK_IMPORTED_MODULE_0__["default"])(iconProps) ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_21__["default"], {
          icon: iconProps,
          fontSize: "40px",
          color: iconColorProps
        }) : iconProps), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "__box_default__title"))
        }, titleProps), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "__box_default__label"))
        }, labelProps)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("input", {
          style: {
            display: 'none'
          },
          type: "file",
          multiple: multiple,
          ref: function ref(e) {
            return _this2.intNode = e;
          },
          onChange: _this2.handleFileChange
        })), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "_upload__view"), uploadViewClassName)
        }, fileList.map(function (i, index) {
          if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(renderItem)) {
            return renderItem(i);
          } else {
            if (!i.info.fileName || !i.info.type) return;
            return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "_upload__view__item flex")),
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "_upload__view__item__icon flex_center"))
            }, _this2.getTypeView(i.info.type || '', i.preUrl)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getClassName"])("".concat(prefixClass, "_upload__view__item__progress flex_1"))
            }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", null, i.info.fileName), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_Progress__WEBPACK_IMPORTED_MODULE_22__["default"], {
              percent: i.info.progress,
              text: "".concat(i.info.progress, "%")
            })));
          }
        })));
      });
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Upload, "defaultProps", {
  multiple: true
});



/***/ }),

/***/ "./components/lib/Upload/index.tsx":
/*!*****************************************!*\
  !*** ./components/lib/Upload/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");
/* harmony import */ var _ConfigProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ConfigProvider */ "./components/lib/ConfigProvider/index.tsx");
/* harmony import */ var _dragger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dragger */ "./components/lib/Upload/dragger.tsx");










var prefixClass = 'upload';

var Upload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Upload, _Component);

  function Upload() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Upload);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Upload).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Upload, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ConfigProvider__WEBPACK_IMPORTED_MODULE_8__["Consumer"], null, function (value) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getClassName"])("".concat(prefixClass), className)
        });
      });
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Upload, "Dragger", _dragger__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./components/lib/Upload/style/index.less":
/*!************************************************!*\
  !*** ./components/lib/Upload/style/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786417");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/Upload/style/index.ts":
/*!**********************************************!*\
  !*** ./components/lib/Upload/style/index.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _Icon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icon/style */ "./components/lib/Icon/style/index.ts");
/* harmony import */ var _Progress_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Progress/style */ "./components/lib/Progress/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./components/lib/Upload/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./data/componentData.tsx":
/*!********************************!*\
  !*** ./data/componentData.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_lib_Button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/lib/Button/style */ "./components/lib/Button/style/index.ts");
/* harmony import */ var components_lib_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/lib/Button */ "./components/lib/Button/index.tsx");
/* harmony import */ var components_lib_Input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/lib/Input/style */ "./components/lib/Input/style/index.ts");
/* harmony import */ var components_lib_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/lib/Input */ "./components/lib/Input/index.tsx");
/* harmony import */ var components_lib_Image_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/lib/Image/style */ "./components/lib/Image/style/index.ts");
/* harmony import */ var components_lib_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/lib/Image */ "./components/lib/Image/index.tsx");
/* harmony import */ var components_lib_Icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/lib/Icon/style */ "./components/lib/Icon/style/index.ts");
/* harmony import */ var components_lib_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/lib/Icon */ "./components/lib/Icon/index.tsx");
/* harmony import */ var muka_lib_isArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! muka/lib/isArray */ "./muka/lib/isArray.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./data/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/apps/index.less */ "./pages/apps/index.less");
/* harmony import */ var _pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__);













var componentData = function componentData(self) {
  var componentData = self.props.componentData;
  var props = componentData.pagePorps[self.index].props || {};
  return {
    'NavBar': [{
      component: 'Input',
      label: '标题：',
      props: {
        type: 'text',
        onChange: self.handleFormChange
      },
      field: 'title'
    }, {
      component: 'Input',
      label: '高度：',
      props: {
        type: 'number',
        onChange: self.handleFormChange
      },
      field: 'style.height'
    }, {
      component: 'Colors',
      label: '背景颜色：',
      props: {
        initColor: '#0693e3',
        onChange: self.handleFormChange
      },
      field: 'style.background'
    }],
    'SearchBar': [{
      component: 'Colors',
      label: '背景颜色：',
      props: {
        initColor: props.style && props.style.background || '#0693e3',
        onChange: self.handleFormChange
      },
      field: 'style.background'
    }, {
      component: 'Input',
      label: '提示文字：',
      props: {
        value: props.placeholder,
        onChange: self.handleFormChange,
        maxLength: 16,
        showMaxLength: true
      },
      field: 'placeholder'
    }, {
      component: 'Slider',
      label: '左侧间距：',
      props: {
        onChange: self.handleFormChange,
        value: props.style && props.style.marginLeft || 0,
        max: 20
      },
      field: 'style.marginLeft'
    }, {
      component: 'Slider',
      label: '右侧间距：',
      props: {
        onChange: self.handleFormChange,
        value: props.style && props.style.marginRight || 0,
        max: 20
      },
      field: 'style.marginRight'
    }, {
      component: 'Slider',
      label: '顶部间距：',
      props: {
        onChange: self.handleFormChange,
        value: props.style && props.style.marginTop || 0,
        max: 20
      },
      field: 'style.marginTop'
    }, {
      component: 'Slider',
      label: '底部间距：',
      props: {
        onChange: self.handleFormChange,
        value: props.style && props.style.marginBottom || 0,
        max: 20
      },
      field: 'style.marginBottom'
    }, {
      component: 'Radio',
      label: '左侧显示：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '无',
          value: null
        }, {
          label: '返回按钮',
          value: undefined
        }],
        value: props.left
      },
      field: 'left'
    }, {
      component: 'Radio',
      label: '右侧显示：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '文字',
          value: 'label'
        }, {
          label: '功能',
          value: 'actions'
        }],
        value: Object(muka_lib_isArray__WEBPACK_IMPORTED_MODULE_8__["default"])(props.right) ? 'actions' : 'label'
      },
      additional: Object(muka_lib_isArray__WEBPACK_IMPORTED_MODULE_8__["default"])(props.right) ? react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: _pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_view"]
      }, props.right.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: "flex ".concat(_pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_view_list"]),
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: "".concat(_pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_list_view"], " flex_center"),
          onClick: self.handleSelectView.bind(self, index)
        }, item.type === 'icon' && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](components_lib_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          icon: item.url,
          color: item.color
        }), item.type === 'image' && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](components_lib_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: _index_less__WEBPACK_IMPORTED_MODULE_10__["label_image"],
          src: item.url
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: _pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_list_view_bot"]
        }, "\u56FE\u7247/\u5B57\u4F53")), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: "flex_1"
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: "flex"
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](components_lib_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "flex_1 ".concat(_pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_list_int"]),
          placeholder: "\u8BF7\u9009\u62E9\u94FE\u63A5\u5730\u5740",
          disabled: true,
          closeIconShow: false,
          style: {
            borderRight: 0
          }
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](components_lib_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "flex_justify ".concat(_pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_list_btn"]),
          mold: "primary"
        }, "\u9009\u62E9\u94FE\u63A5"))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](components_lib_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: _pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_list_icon"],
          icon: "md-close-circle",
          color: "rgba(0, 0, 0, 0.3)",
          style: {
            cursor: 'pointer'
          } // onClick={this.handleTabBarDel.bind(this, index)}

        }));
      })) : react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: _pages_apps_index_less__WEBPACK_IMPORTED_MODULE_11__["label_view"]
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: "flex"
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: "flex_justify ".concat(_index_less__WEBPACK_IMPORTED_MODULE_10__["label_box"])
      }, "\u663E\u793A\u6587\u5B57"), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](components_lib_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "flex_1",
        value: props.right,
        onChange: self.handleFormIntChange.bind(self, 'right'),
        showMaxLength: true,
        maxLength: 4
      }))),
      field: 'extendRadio'
    }],
    'Carousel': [{
      component: 'Slider',
      label: '高度设置：',
      props: {
        onChange: self.handleFormChange,
        min: 100,
        max: 200,
        defaultValue: 200
      },
      field: 'style.height'
    }, {
      component: 'Slider',
      label: '左侧间距：',
      props: {
        onChange: self.handleFormChange,
        max: 20
      },
      field: 'style.marginLeft'
    }, {
      component: 'Slider',
      label: '右侧间距：',
      props: {
        onChange: self.handleFormChange,
        max: 20
      },
      field: 'style.marginRight'
    }, {
      component: 'Slider',
      label: '顶部间距：',
      props: {
        onChange: self.handleFormChange,
        max: 20
      },
      field: 'style.marginTop'
    }, {
      component: 'Slider',
      label: '底部间距：',
      props: {
        onChange: self.handleFormChange,
        max: 20
      },
      field: 'style.marginBottom'
    }, {
      component: 'Radio',
      label: '指示位置：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '底部',
          value: 'bottom'
        }, {
          label: '底部右测',
          value: 'bottomRight'
        }, {
          label: '底部左测',
          value: 'bottomLeft'
        }, {
          label: '左侧',
          value: 'left'
        }, {
          label: '右侧',
          value: 'right'
        }, {
          label: '顶部',
          value: 'top'
        }],
        value: 'bottom'
      },
      field: 'dotPosition'
    }, {
      component: 'Radio',
      label: '指示样式：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '长方形',
          value: 'rectangle'
        }, {
          label: '圆形',
          value: 'circular'
        }],
        value: 'rectangle'
      },
      field: 'dotType'
    }, {
      component: 'Colors',
      label: '指示颜色：',
      props: {
        onChange: self.handleFormChange,
        initColor: '#fff'
      },
      field: 'dotColor'
    }, {
      component: 'Radio',
      label: '自动播放：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '是',
          value: true
        }, {
          label: '否',
          value: false
        }],
        value: false
      },
      field: 'autoPlay'
    }, {
      component: 'Radio',
      label: '播放方式：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '向右',
          value: 'scrollx'
        }, {
          label: '向下',
          value: 'scrolly'
        }, {
          label: '淡入',
          value: 'fade'
        }],
        value: 'scrollx'
      },
      field: 'effect'
    }, {
      component: 'ImagePicker',
      label: '图片设置：',
      props: {
        onChange: self.handlePickerChange,
        value: [{
          url: '/static/banner-1.jpg'
        }, {
          url: '/static/banner-2.jpg'
        }]
      }
    }],
    'TabBar': [{
      component: 'Slider',
      label: '高度设置：',
      props: {
        onChange: self.handleFormChange,
        min: 100,
        max: 242,
        defaultValue: 242
      },
      field: 'style.height'
    }, {
      component: 'Radio',
      label: '显示方向：',
      props: {
        onChange: self.handleFormChange,
        options: [{
          label: '横向',
          value: 'horizontal'
        }, {
          label: '竖向',
          value: 'vertical'
        }],
        value: 'horizontal'
      },
      field: 'type'
    }, {
      component: 'Colors',
      label: '指示颜色：',
      props: {
        onChange: self.handleFormChange,
        initColor: '#0693e3'
      },
      field: 'selectedColor'
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (componentData);

/***/ }),

/***/ "./data/index.less":
/*!*************************!*\
  !*** ./data/index.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"label_box":"label_box___x-qzX","label_image":"label_image___QYWQp"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786068");
          });
      }
    }
  

/***/ }),

/***/ "./muka/lib/Observer.ts":
/*!******************************!*\
  !*** ./muka/lib/Observer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sources_extends_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sources/extends/observer */ "./muka/sources/extends/observer.ts");

/* harmony default export */ __webpack_exports__["default"] = (_sources_extends_observer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./muka/lib/isObject.ts":
/*!******************************!*\
  !*** ./muka/lib/isObject.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sources_json_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sources/json/isObject */ "./muka/sources/json/isObject.ts");

/* harmony default export */ __webpack_exports__["default"] = (_sources_json_isObject__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./muka/sources/extends/observer.ts":
/*!******************************************!*\
  !*** ./muka/sources/extends/observer.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _lang_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/hash */ "./muka/sources/lang/hash.ts");






var Observer =
/*#__PURE__*/
function () {
  function Observer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Observer);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "subscribes", {});
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Observer, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.subscribes);

      if (Object(_lang_hash__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, event)) {
        this.subscribes[event].push(callback);
      } else {
        this.subscribes[event] = [callback];
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, callback) {
      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.subscribes);

      if (Object(_lang_hash__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, event)) {
        var index = this.subscribes[event].indexOf(callback);

        if (index !== -1) {
          this.subscribes[event].splice(index, 1);
        }
      }
    }
  }, {
    key: "publish",
    value: function publish(event) {
      var _this = this;

      for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
      }

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.subscribes);

      if (Object(_lang_hash__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, event)) {
        this.subscribes[event].map(function (callback) {
          callback.apply(_this, arg);
        });
      }
    }
  }]);

  return Observer;
}();



/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';

      default:
        break;
    }

    var classes = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), className);
    return React.createElement("div", _extends({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonSizes = (0, _type.tuple)('large', 'default', 'small');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.saveButtonRef = function (node) {
      _this.buttonNode = node;
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (!!loading) {
        return;
      }

      if (onClick) {
        onClick(e);
      }
    };

    _this.renderButton = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          autoInsertSpaceInButton = _ref.autoInsertSpaceInButton;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          shape = _a.shape,
          size = _a.size,
          className = _a.className,
          children = _a.children,
          icon = _a.icon,
          ghost = _a.ghost,
          _loadingProp = _a.loading,
          block = _a.block,
          rest = __rest(_a, ["prefixCls", "type", "shape", "size", "className", "children", "icon", "ghost", "loading", "block"]);

      var _this$state = _this.state,
          loading = _this$state.loading,
          hasTwoCNChar = _this$state.hasTwoCNChar;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && icon), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var iconType = loading ? 'loading' : icon;
      var iconNode = iconType ? React.createElement(_icon["default"], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? React.Children.map(children, function (child) {
        return insertSpace(child, _this.isNeedInserted() && autoInsertSpace);
      }) : null;
      var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType']);

      if (linkButtonRestProps.href !== undefined) {
        return React.createElement("a", _extends({}, linkButtonRestProps, {
          className: classes,
          onClick: _this.handleClick,
          ref: _this.saveButtonRef
        }), iconNode, kids);
      } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


      var _b = rest,
          htmlType = _b.htmlType,
          otherProps = __rest(_b, ["htmlType"]);

      var buttonNode = React.createElement("button", _extends({}, otherProps, {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick,
        ref: _this.saveButtonRef
      }), iconNode, kids);

      if (type === 'link') {
        return buttonNode;
      }

      return React.createElement(_wave["default"], null, buttonNode);
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.fixTwoCNChar();

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else if (prevProps.loading === this.props.loading) {
        return;
      } else {
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: "fixTwoCNChar",
    value: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      if (!this.buttonNode) {
        return;
      }

      var buttonText = this.buttonNode.textContent || this.buttonNode.innerText;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children;
      return React.Children.count(children) === 1 && !icon;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderButton);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.loading instanceof Boolean) {
        return _extends({}, prevState, {
          loading: nextProps.loading
        });
      }

      return null;
    }
  }]);

  return Button;
}(React.Component);

Button.__ANT_BUTTON = true;
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(ButtonShapes),
  size: PropTypes.oneOf(ButtonSizes),
  htmlType: PropTypes.oneOf(ButtonHTMLTypes),
  onClick: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool
};
(0, _reactLifecyclesCompat.polyfill)(Button);
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button["default"].Group = _buttonGroup["default"];
var _default = _button["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/ActionButton.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/modal/ActionButton.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ActionButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionButton, _React$Component);

  function ActionButton(props) {
    var _this;

    _classCallCheck(this, ActionButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionButton).call(this, props));

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = ReactDOM.findDOMNode(this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          children = _this$props2.children,
          buttonProps = _this$props2.buttonProps;
      var loading = this.state.loading;
      return React.createElement(_button["default"], _extends({
        type: type,
        onClick: this.onClick,
        loading: loading
      }, buttonProps), children);
    }
  }]);

  return ActionButton;
}(React.Component);

exports["default"] = ActionButton;

/***/ }),

/***/ "./node_modules/antd/lib/modal/Modal.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/modal/Modal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.destroyFns = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDialog = _interopRequireDefault(__webpack_require__(/*! rc-dialog */ "./node_modules/rc-dialog/es/DialogWrap.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _addEventListener = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js"));

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/antd/lib/modal/locale.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

exports.destroyFns = destroyFns;

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  (0, _addEventListener["default"])(document.documentElement, 'click', getClickPosition);
}

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return React.createElement("div", null, React.createElement(_button["default"], _extends({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), React.createElement(_button["default"], _extends({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    _this.renderModal = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          restProps = __rest(_a, ["prefixCls", "footer", "visible", "wrapClassName", "centered"]);

      var prefixCls = getPrefixCls('modal', customizePrefixCls);
      var defaultFooter = React.createElement(_LocaleReceiver["default"], {
        componentName: "Modal",
        defaultLocale: (0, _locale.getConfirmLocale)()
      }, _this.renderFooter);
      var closeIcon = React.createElement("span", {
        className: "".concat(prefixCls, "-close-x")
      }, React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        type: 'close'
      }));
      return React.createElement(_rcDialog["default"], _extends({}, restProps, {
        prefixCls: prefixCls,
        wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: mousePosition,
        onClose: _this.handleCancel,
        closeIcon: closeIcon
      }));
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderModal);
    }
  }]);

  return Modal;
}(React.Component);

exports["default"] = Modal;
Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary',
  okButtonDisabled: false,
  cancelButtonDisabled: false
};
Modal.propTypes = {
  prefixCls: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  centered: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  confirmLoading: PropTypes.bool,
  visible: PropTypes.bool,
  align: PropTypes.object,
  footer: PropTypes.node,
  title: PropTypes.node,
  closable: PropTypes.bool
};

/***/ }),

/***/ "./node_modules/antd/lib/modal/confirm.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/modal/confirm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = confirm;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _Modal = _interopRequireWildcard(__webpack_require__(/*! ./Modal */ "./node_modules/antd/lib/modal/Modal.js"));

var _ActionButton = _interopRequireDefault(__webpack_require__(/*! ./ActionButton */ "./node_modules/antd/lib/modal/ActionButton.js"));

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/antd/lib/modal/locale.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IS_REACT_16 = !!ReactDOM.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === void 0 ? 'question-circle' : _props$iconType;
  (0, _warning["default"])(!('iconType' in props), 'Modal', "The property 'iconType' is deprecated. Use the property 'icon' instead."); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var icon = props.icon === undefined ? iconType : props.icon;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = (0, _locale.getConfirmLocale)();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = (0, _classnames["default"])(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), props.className);
  var cancelButton = okCancel && React.createElement(_ActionButton["default"], {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps
  }, cancelText);
  var iconNode = typeof icon === 'string' ? React.createElement(_icon["default"], {
    type: icon
  }) : icon;
  return React.createElement(_Modal["default"], {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: close.bind(_this, {
      triggerCancel: true
    }),
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer
  }, React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, iconNode, React.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), React.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), React.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, React.createElement(_ActionButton["default"], {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps
  }, okText))));
};

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var currentConfig = _extends({}, config, {
    close: close,
    visible: true
  });

  function close() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentConfig = _extends({}, currentConfig, {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });

    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(void 0, args);
    }
  }

  function update(newConfig) {
    currentConfig = _extends({}, currentConfig, newConfig);
    render(currentConfig);
  }

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < _Modal.destroyFns.length; i++) {
      var fn = _Modal.destroyFns[i];

      if (fn === close) {
        _Modal.destroyFns.splice(i, 1);

        break;
      }
    }
  }

  function render(props) {
    ReactDOM.render(React.createElement(ConfirmDialog, props), div);
  }

  render(currentConfig);

  _Modal.destroyFns.push(close);

  return {
    destroy: close,
    update: update
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/modal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/modal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Modal = _interopRequireWildcard(__webpack_require__(/*! ./Modal */ "./node_modules/antd/lib/modal/Modal.js"));

var _confirm = _interopRequireDefault(__webpack_require__(/*! ./confirm */ "./node_modules/antd/lib/modal/confirm.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_Modal["default"].info = function (props) {
  var config = _extends({
    type: 'info',
    icon: React.createElement(_icon["default"], {
      type: "info-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].success = function (props) {
  var config = _extends({
    type: 'success',
    icon: React.createElement(_icon["default"], {
      type: "check-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].error = function (props) {
  var config = _extends({
    type: 'error',
    icon: React.createElement(_icon["default"], {
      type: "close-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].warning = _Modal["default"].warn = function (props) {
  var config = _extends({
    type: 'warning',
    icon: React.createElement(_icon["default"], {
      type: "exclamation-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].confirm = function (props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].destroyAll = function () {
  while (_Modal.destroyFns.length) {
    var close = _Modal.destroyFns.pop();

    if (close) {
      close();
    }
  }
};

var _default = _Modal["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/default */ "./node_modules/antd/lib/locale-provider/default.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var runtimeLocale = _extends({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = _extends({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/modal/style/index.less");

__webpack_require__(/*! ../../button/style */ "./node_modules/antd/lib/button/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.less":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559786575");
          });
      }
    }
  

/***/ }),

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/*! exports provided: calculateBox, createBox, expand, getBox, getRect, offset, shrink, withScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBox", function() { return calculateBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBox", function() { return createBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBox", function() { return getBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shrink", function() { return shrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");


var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);

  if (suffix !== 'px') {
    return 0;
  }

  var result = Number(value);
  !!isNaN(result) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : undefined : void 0;
  return result;
};

var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};
var withScroll = function withScroll(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll();
  }

  return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};
var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapps%2Fdesign%2Feditor&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Capps%5Cdesign%5Ceditor.tsx!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapps%2Fdesign%2Feditor&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Capps%5Cdesign%5Ceditor.tsx ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/design/editor", function() {
      var page = __webpack_require__(/*! ./pages/apps/design/editor.tsx */ "./pages/apps/design/editor.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/apps/design/editor.tsx */ "./pages/apps/design/editor.tsx", function() {
          if(!next.router.components["/apps/design/editor"]) return
          var updatedPage = __webpack_require__(/*! ./pages/apps/design/editor.tsx */ "./pages/apps/design/editor.tsx")
          next.router.update("/apps/design/editor", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ __webpack_exports__["default"] = (rafSchd);


/***/ }),

/***/ "./node_modules/rc-dialog/es/Dialog.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-dialog/es/Dialog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-dialog/es/LazyRenderBox.js");
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");











var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Dialog, _React$Component);

    function Dialog() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onDialogMouseDown = function () {
            _this.dialogMouseDown = true;
        };
        _this.onMaskMouseUp = function () {
            if (_this.dialogMouseDown) {
                _this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget && !_this.dialogMouseDown) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { className: prefixCls + '-close-x' }));
            }
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };
            var transitionName = _this.getTransitionName();
            var dialogElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible, onMouseDown: _this.onDialogMouseDown }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle, "aria-hidden": "true" }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-content' }, closer, header, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle, "aria-hidden": "true" }));
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__["default"])();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.wrap) {
                _this.wrap.style.paddingLeft = _this.wrap.style.paddingLeft = '';
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
        // if forceRender is true, set element style display to be none;
        if (this.props.forceRender && this.wrap) {
            this.wrap.style.display = 'none';
        }
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.addScrollingEffect();
                this.tryFocus();
                var dialogNode = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
        clearTimeout(this.timeoutId);
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, this.getMaskElement(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : null, onMouseUp: maskClosable ? this.onMaskMouseUp : null, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog'
};

/***/ }),

/***/ "./node_modules/rc-dialog/es/DialogWrap.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dialog/es/DialogWrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialog */ "./node_modules/rc-dialog/es/Dialog.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");









var IS_REACT_16 = 'createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_5__;

var DialogWrap = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DialogWrap, _React$Component);

    function DialogWrap() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DialogWrap);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.saveDialog = function (node) {
            _this._component = node;
        };
        _this.getComponent = function () {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ ref: _this.saveDialog }, _this.props, extra, { key: "dialog" }));
        };
        // fix issue #10656
        /*
        * Custom container should not be return, because in the Portal component, it will remove the
        * return container element here, if the custom container is the only child of it's component,
        * like issue #10656, It will has a conflict with removeChild method in react-dom.
        * So here should add a child (div element) to custom container.
        * */
        _this.getContainer = function () {
            var container = document.createElement('div');
            if (_this.props.getContainer) {
                _this.props.getContainer().appendChild(container);
            } else {
                document.body.appendChild(container);
            }
            return container;
        };
        return _this;
    }

    DialogWrap.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
        var visible = _ref.visible,
            forceRender = _ref.forceRender;

        return !!(this.props.visible || visible) || this.props.forceRender || forceRender;
    };

    DialogWrap.prototype.componentWillUnmount = function componentWillUnmount() {
        if (IS_REACT_16) {
            return;
        }
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    };

    DialogWrap.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            visible = _props.visible,
            forceRender = _props.forceRender;

        var portal = null;
        if (!IS_REACT_16) {
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__["default"], { parent: this, visible: visible, autoDestroy: false, getComponent: this.getComponent, getContainer: this.getContainer, forceRender: forceRender }, function (_ref2) {
                var renderComponent = _ref2.renderComponent,
                    removeContainer = _ref2.removeContainer;

                _this2.renderComponent = renderComponent;
                _this2.removeContainer = removeContainer;
                return null;
            });
        }
        if (visible || forceRender || this._component) {
            portal = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], { getContainer: this.getContainer }, this.getComponent());
        }
        return portal;
    };

    return DialogWrap;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

DialogWrap.defaultProps = {
    visible: false,
    forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (DialogWrap);

/***/ }),

/***/ "./node_modules/rc-dialog/es/LazyRenderBox.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-dialog/es/LazyRenderBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var LazyRenderBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += " " + this.props.hiddenClassName;
        }
        var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    };

    return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/*! exports provided: DragDropContext, Draggable, Droppable, resetServerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropContext", function() { return DragDropContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return ConnectedDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return ConnectedDroppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetServerContext", function() { return resetServerContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inheritsLoose */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/react-beautiful-dnd/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14__);
















var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
var warning = function warning(message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console).warn.apply(_console, getFormattedMessage(message));
};

function printFatalError(error) {
  var _console;

  if (false) {}

  (_console = console).error.apply(_console, getFormattedMessage("\n        An error has occurred while a drag is occurring.\n        Any existing drag will be cancelled.\n\n        > " + error.message + "\n        "));

  console.error('raw', error);
}

function shouldRecover(error) {
  return error.message.indexOf('Invariant failed') !== -1;
}

var ErrorBoundary = function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.onError = void 0;

    _this.setOnError = function (fn) {
      _this.onError = fn;
    };

    _this.onFatalError = function (error) {
      printFatalError(error);

      if (_this.onError) {
        _this.onError();
      } else {
         true ? warning('Could not find recovering function') : undefined;
      }

      if (shouldRecover(error)) {
        _this.setState({});
      }
    };

    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('error', this.onFatalError);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('error', this.onFatalError);
  };

  _proto.componentDidCatch = function componentDidCatch(error) {
    this.onFatalError(error);

    if (!shouldRecover(error)) {
      throw error;
    }
  };

  _proto.render = function render() {
    return this.props.children(this.setOnError);
  };

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var executeClip = (function (frame, subject) {
  var result = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getRect"])({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
});

var isEqual$1 = function isEqual(first, second) {
  return first.top === second.top && first.right === second.right && first.bottom === second.bottom && first.left === second.left;
};
var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var scroll = function scroll(target, frame) {
  if (!frame) {
    return target;
  }

  return offsetByPosition(target, frame.scroll.diff.displacement);
};

var increase = function increase(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }

  return target;
};

var clip = function clip(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }

  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getRect"])(target);
};

var getSubject = (function (_ref) {
  var page = _ref.page,
      withPlaceholder = _ref.withPlaceholder,
      axis = _ref.axis,
      frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page: page,
    withPlaceholder: withPlaceholder,
    active: clipped
  };
});

var scrollDroppable = (function (droppable, newScroll) {
  !droppable.frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });

  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame: frame
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

var records = {};
var isEnabled = false;

var isTimingsEnabled = function isTimingsEnabled() {
  return isEnabled;
};
var start = function start(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    records[key] = now;
  }
};
var finish = function finish(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    var previous = records[key];

    if (!previous) {
      console.warn('cannot finish timing as no previous time found', key);
      return;
    }

    var result = now - previous;
    var rounded = result.toFixed(2);

    var style = function () {
      if (result < 12) {
        return {
          textColor: 'green',
          symbol: '✅'
        };
      }

      if (result < 40) {
        return {
          textColor: 'orange',
          symbol: '⚠️'
        };
      }

      return {
        textColor: 'red',
        symbol: '❌'
      };
    }();

    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold;', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
  }
};

var whatIsDraggedOver = (function (impact) {
  var merge = impact.merge,
      destination = impact.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (merge) {
    return merge.combine.droppableId;
  }

  return null;
});

function values(map) {
  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default()(map);
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }

  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }

  var index = findIndex(list, predicate);

  if (index !== -1) {
    return list[index];
  }

  return undefined;
}

var toDroppableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (droppables) {
  return values(droppables);
});
var toDraggableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (draggables) {
  return values(draggables);
});

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
});

var isPositionInFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (point) {
    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
  };
});

var getDroppableOver = (function (_ref) {
  var target = _ref.target,
      droppables = _ref.droppables;
  var maybe = find(toDroppableList(droppables), function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    var active = droppable.subject.active;

    if (!active) {
      return false;
    }

    return isPositionInFrame(active)(target);
  });
  return maybe ? maybe.descriptor.id : null;
});

var getDraggablesInsideDroppable = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

var withDroppableScroll = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.value);
});

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var isUserMovingForward = (function (axis, direction) {
  return axis === vertical ? direction.vertical === 'down' : direction.horizontal === 'right';
});

var didStartDisplaced = (function (draggableId, onLift) {
  return Boolean(onLift.wasDisplaced[draggableId]);
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      onLift = _ref.onLift,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced[combineWith]);

  if (didStartDisplaced(combineWith, onLift)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var getWhenEntered = function getWhenEntered(id, current, oldMerge) {
  if (!oldMerge) {
    return current;
  }

  if (id !== oldMerge.combine.draggableId) {
    return current;
  }

  return oldMerge.whenEntered;
};

var isCombiningWith = function isCombiningWith(_ref) {
  var id = _ref.id,
      currentCenter = _ref.currentCenter,
      axis = _ref.axis,
      borderBox = _ref.borderBox,
      displaceBy = _ref.displaceBy,
      currentUserDirection = _ref.currentUserDirection,
      oldMerge = _ref.oldMerge;
  var start = borderBox[axis.start] + displaceBy[axis.line];
  var end = borderBox[axis.end] + displaceBy[axis.line];
  var size = borderBox[axis.size];
  var twoThirdsOfSize = size * 0.666;
  var whenEntered = getWhenEntered(id, currentUserDirection, oldMerge);
  var isMovingForward = isUserMovingForward(axis, whenEntered);
  var targetCenter = currentCenter[axis.line];

  if (isMovingForward) {
    return isWithin(start, start + twoThirdsOfSize)(targetCenter);
  }

  return isWithin(end - twoThirdsOfSize, end)(targetCenter);
};

var getCombineImpact = (function (_ref2) {
  var currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange,
      previousImpact = _ref2.previousImpact,
      destination = _ref2.destination,
      insideDestinationWithoutDraggable = _ref2.insideDestinationWithoutDraggable,
      userDirection = _ref2.userDirection,
      onLift = _ref2.onLift;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var map = previousImpact.movement.map;
  var canBeDisplacedBy = previousImpact.movement.displacedBy;
  var oldMerge = previousImpact.merge;
  var target = find(insideDestinationWithoutDraggable, function (child) {
    var id = child.descriptor.id;
    var displaceBy = getCombinedItemDisplacement({
      displaced: map,
      onLift: onLift,
      combineWith: id,
      displacedBy: canBeDisplacedBy
    });
    return isCombiningWith({
      id: id,
      currentCenter: currentCenter,
      axis: axis,
      borderBox: child.page.borderBox,
      displaceBy: displaceBy,
      currentUserDirection: userDirection,
      oldMerge: oldMerge
    });
  });

  if (!target) {
    return null;
  }

  var merge = {
    whenEntered: getWhenEntered(target.descriptor.id, userDirection, oldMerge),
    combine: {
      draggableId: target.descriptor.id,
      droppableId: destination.descriptor.id
    }
  };

  var withMerge = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousImpact, {
    destination: null,
    merge: merge
  });

  return withMerge;
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
  return function (frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function (subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }

      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
});

var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};

var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }

  return isVisibleThroughFrameFn(destination.subject.active)(target);
};

var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};

var isVisible = function isVisible(_ref) {
  var toBeDisplaced = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};

var isPartiallyVisible = function isPartiallyVisible(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(forceShouldAnimate, isVisible, previous) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!isVisible) {
    return false;
  }

  if (!previous) {
    return true;
  }

  return previous.shouldAnimate;
};

var getTarget = function getTarget(draggable, onLift) {
  var marginBox = draggable.page.marginBox;

  if (!didStartDisplaced(draggable.descriptor.id, onLift)) {
    return marginBox;
  }

  var expandBy = {
    top: onLift.displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: onLift.displacedBy.point.x
  };
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getRect"])(Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["expand"])(marginBox, expandBy));
};

var getDisplacement = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      onLift = _ref.onLift,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var id = draggable.descriptor.id;
  var map = previousImpact.movement.map;
  var target = getTarget(draggable, onLift);
  var isVisible = isPartiallyVisible({
    target: target,
    destination: destination,
    viewport: viewport,
    withDroppableDisplacement: true
  });
  var shouldAnimate = getShouldAnimate(forceShouldAnimate, isVisible, map[id]);
  var displacement = {
    draggableId: id,
    isVisible: isVisible,
    shouldAnimate: shouldAnimate
  };
  return displacement;
});

var getDisplacementMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (displaced) {
  return displaced.reduce(function (map, displacement) {
    map[displacement.draggableId] = displacement;
    return map;
  }, {});
});

var getDisplacedBy = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getReorderImpact = (function (_ref) {
  var currentCenter = _ref.pageBorderBoxCenterWithDroppableScrollChange,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestinationWithoutDraggable = _ref.insideDestinationWithoutDraggable,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      userDirection = _ref.userDirection,
      onLift = _ref.onLift;
  var axis = destination.axis;
  var isMovingForward = isUserMovingForward(destination.axis, userDirection);
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var targetCenter = currentCenter[axis.line];
  var displacement = displacedBy.value;
  var displaced = insideDestinationWithoutDraggable.filter(function (child) {
    var borderBox = child.page.borderBox;
    var start = borderBox[axis.start];
    var end = borderBox[axis.end];
    var didStartDisplaced$1 = didStartDisplaced(child.descriptor.id, onLift);

    if (isMovingForward) {
      if (didStartDisplaced$1) {
        return targetCenter < start;
      }

      return targetCenter < start + displacement;
    }

    if (didStartDisplaced$1) {
      return targetCenter <= end - displacement;
    }

    return targetCenter <= end;
  }).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport.frame,
      onLift: onLift
    });
  });
  var newIndex = insideDestinationWithoutDraggable.length - displaced.length;
  var movement = {
    displacedBy: displacedBy,
    displaced: displaced,
    map: getDisplacementMap(displaced)
  };
  var impact = {
    movement: movement,
    destination: {
      droppableId: destination.descriptor.id,
      index: newIndex
    },
    merge: null
  };
  return impact;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var noMovement = {
  displaced: [],
  map: {},
  displacedBy: noDisplacedBy
};
var noImpact = {
  movement: noMovement,
  destination: null,
  merge: null
};

var removeDraggableFromList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var getDragImpact = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      userDirection = _ref.userDirection,
      onLift = _ref.onLift;
  var destinationId = getDroppableOver({
    target: pageBorderBoxCenter,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var insideDestinationWithoutDraggable = removeDraggableFromList(draggable, insideDestination);
  var pageBorderBoxCenterWithDroppableScrollChange = withDroppableScroll(destination, pageBorderBoxCenter);
  var withMerge = getCombineImpact({
    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
    previousImpact: previousImpact,
    destination: destination,
    insideDestinationWithoutDraggable: insideDestinationWithoutDraggable,
    userDirection: userDirection,
    onLift: onLift
  });

  if (withMerge) {
    return withMerge;
  }

  return getReorderImpact({
    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
    destination: destination,
    draggable: draggable,
    insideDestinationWithoutDraggable: insideDestinationWithoutDraggable,
    previousImpact: previousImpact,
    viewport: viewport,
    userDirection: userDirection,
    onLift: onLift
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getHomeOnLift = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var originallyDisplaced = insideHome.slice(draggable.descriptor.index + 1);
  var wasDisplaced = originallyDisplaced.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var onLift = {
    displacedBy: displacedBy,
    wasDisplaced: wasDisplaced
  };
  var displaced = originallyDisplaced.map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: home,
      previousImpact: noImpact,
      viewport: viewport.frame,
      forceShouldAnimate: false,
      onLift: onLift
    });
  });
  var movement = {
    displaced: displaced,
    map: getDisplacementMap(displaced),
    displacedBy: displacedBy
  };
  var impact = {
    movement: movement,
    destination: getHomeLocation(draggable.descriptor),
    merge: null
  };
  return {
    impact: impact,
    onLift: onLift
  };
});

var getDragPositions = (function (_ref) {
  var oldInitial = _ref.initial,
      oldCurrent = _ref.current,
      oldClientBorderBoxCenter = _ref.oldClientBorderBoxCenter,
      newClientBorderBoxCenter = _ref.newClientBorderBoxCenter,
      viewport = _ref.viewport;
  var shift = subtract(newClientBorderBoxCenter, oldClientBorderBoxCenter);

  var initial = function () {
    var client = {
      selection: add(oldInitial.client.selection, shift),
      borderBoxCenter: newClientBorderBoxCenter,
      offset: origin
    };
    var page = {
      selection: add(client.selection, viewport.scroll.initial),
      borderBoxCenter: add(client.selection, viewport.scroll.initial)
    };
    return {
      client: client,
      page: page
    };
  }();

  var current = function () {
    var reverse = negate(shift);
    var offset = add(oldCurrent.client.offset, reverse);
    var client = {
      selection: add(initial.client.selection, offset),
      borderBoxCenter: add(initial.client.borderBoxCenter, offset),
      offset: offset
    };
    var page = {
      selection: add(client.selection, viewport.scroll.current),
      borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current)
    };
    !isEqual(oldCurrent.client.borderBoxCenter, client.borderBoxCenter) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "\n        Incorrect new client center position.\n        Expected (" + oldCurrent.client.borderBoxCenter.x + ", " + oldCurrent.client.borderBoxCenter.y + ")\n        to equal (" + client.borderBoxCenter.x + ", " + client.borderBoxCenter.y + ")\n      ") : undefined : void 0;
    return {
      client: client,
      page: page
    };
  }();

  return {
    current: current,
    initial: initial
  };
});

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["offset"])(draggable.client, offset$1);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["withScroll"])(client, initialWindowScroll);

  var moved = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, draggable, {
    placeholder: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var adjustExistingForAdditionsAndRemovals = (function (_ref) {
  var existing = _ref.existing,
      droppables = _ref.droppables,
      addedDraggables = _ref.additions,
      removedDraggables = _ref.removals,
      viewport = _ref.viewport;
  var shifted = {};
  toDroppableList(droppables).forEach(function (droppable) {
    var axis = droppable.axis;
    var original = getDraggablesInsideDroppable(droppable.descriptor.id, existing);
    var toShift = {};

    var addShift = function addShift(id, shift) {
      var previous = toShift[id];

      if (!previous) {
        toShift[id] = shift;
        return;
      }

      toShift[id] = {
        indexChange: previous.indexChange + shift.indexChange,
        offset: add(previous.offset, shift.offset)
      };
    };

    var removals = toDraggableMap(removedDraggables.map(function (id) {
      var item = existing[id];
      !item ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Could not find removed draggable \"" + id + "\"") : undefined : void 0;
      return item;
    }).filter(function (draggable) {
      return draggable.descriptor.droppableId === droppable.descriptor.id;
    }));
    var withRemovals = original.filter(function (item, index) {
      var isBeingRemoved = Boolean(removals[item.descriptor.id]);

      if (!isBeingRemoved) {
        return true;
      }

      var offset = negate(patch(axis.line, item.displaceBy[axis.line]));
      original.slice(index).forEach(function (sibling) {
        if (removals[sibling.descriptor.id]) {
          return;
        }

        addShift(sibling.descriptor.id, {
          indexChange: -1,
          offset: offset
        });
      });
      return false;
    });
    var additions = addedDraggables.filter(function (draggable) {
      return draggable.descriptor.droppableId === droppable.descriptor.id;
    });
    var withAdditions = withRemovals.slice(0);
    additions.forEach(function (item) {
      withAdditions.splice(item.descriptor.index, 0, item);
    });
    var additionMap = toDraggableMap(additions);
    withAdditions.forEach(function (item, index) {
      var wasAdded = Boolean(additionMap[item.descriptor.id]);

      if (!wasAdded) {
        return;
      }

      var offset = patch(axis.line, item.client.marginBox[axis.size]);
      withAdditions.slice(index).forEach(function (sibling) {
        if (additionMap[sibling.descriptor.id]) {
          return;
        }

        addShift(sibling.descriptor.id, {
          indexChange: 1,
          offset: offset
        });
      });
    });
    withAdditions.forEach(function (item) {
      if (additionMap[item.descriptor.id]) {
        return;
      }

      var shift = toShift[item.descriptor.id];

      if (!shift) {
        return;
      }

      var moved = offsetDraggable({
        draggable: item,
        offset: shift.offset,
        initialWindowScroll: viewport.scroll.initial
      });
      var index = item.descriptor.index + shift.indexChange;

      var updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, moved, {
        descriptor: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.descriptor, {
          index: index
        })
      });

      shifted[moved.descriptor.id] = updated;
    });
  });

  var map = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, shifted);

  return map;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = modified.frame;
    !frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
});

var adjustAdditionsForCollapsedHome = (function (_ref) {
  var additions = _ref.additions,
      dragging = _ref.dragging,
      home = _ref.home,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, dragging.displaceBy);
  return additions.map(function (draggable) {
    if (draggable.descriptor.droppableId !== home.descriptor.id) {
      return draggable;
    }

    if (draggable.descriptor.index < dragging.descriptor.index) {
      return draggable;
    }

    return offsetDraggable({
      draggable: draggable,
      offset: displacedBy.point,
      initialWindowScroll: viewport.scroll.initial
    });
  });
});

var updateDraggables = (function (_ref) {
  var updatedDroppables = _ref.updatedDroppables,
      criticalId = _ref.criticalId,
      unmodifiedExisting = _ref.existing,
      unmodifiedAdditions = _ref.additions,
      removals = _ref.removals,
      viewport = _ref.viewport;
  var existing = adjustExistingForAdditionsAndRemovals({
    droppables: updatedDroppables,
    existing: unmodifiedExisting,
    additions: unmodifiedAdditions,
    removals: removals,
    viewport: viewport
  });
  var dragging = existing[criticalId];
  var home = updatedDroppables[dragging.descriptor.droppableId];
  var scrolledAdditions = adjustAdditionsForScrollChanges({
    additions: unmodifiedAdditions,
    updatedDroppables: updatedDroppables,
    viewport: viewport
  });
  var additions = adjustAdditionsForCollapsedHome({
    additions: scrolledAdditions,
    dragging: dragging,
    home: home,
    viewport: viewport
  });

  var map = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, toDraggableMap(additions));

  removals.forEach(function (id) {
    delete map[id];
  });
  return map;
});

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var getDroppableDimension = (function (_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      isCombineEnabled = _ref.isCombineEnabled,
      isFixedOnPage = _ref.isFixedOnPage,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest = _ref.closest;

  var frame = function () {
    if (!closest) {
      return null;
    }

    var scrollSize = closest.scrollSize,
        frameClient = closest.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest.page.marginBox,
      frameClient: frameClient,
      scrollSize: scrollSize,
      shouldClipSubject: closest.shouldClipSubject,
      scroll: {
        initial: closest.scroll,
        current: closest.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var axis = direction === 'vertical' ? vertical : horizontal;
  var subject = getSubject({
    page: page,
    withPlaceholder: null,
    axis: axis,
    frame: frame
  });
  var dimension = {
    descriptor: descriptor,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: isFixedOnPage,
    axis: axis,
    isEnabled: isEnabled,
    client: client,
    page: page,
    frame: frame,
    subject: subject
  };
  return dimension;
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;
  var availableSpace = droppable.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;

  if (needsToGrowBy <= 0) {
    return null;
  }

  return patch(axis.line, needsToGrowBy);
};

var withMaxScroll = function withMaxScroll(frame, max) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, frame, {
    scroll: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not add placeholder space to home list') : undefined : void 0;
  !!droppable.subject.withPlaceholder ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot add placeholder size to a subject when it already has one') : undefined : void 0;
  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
  var added = {
    placeholderSize: placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
  };

  if (!frame) {
    var _subject = getSubject({
      page: droppable.subject.page,
      withPlaceholder: added,
      axis: droppable.axis,
      frame: droppable.frame
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
      subject: _subject
    });
  }

  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: added,
    axis: droppable.axis,
    frame: newFrame
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot remove placeholder form subject when there was none') : undefined : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : undefined : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected Droppable to have a frame') : undefined : void 0;
  return frame;
});

var throwIfSpacingChange = function throwIfSpacingChange(old, fresh) {
  if (true) {
    var getMessage = function getMessage(spacingType) {
      return "Cannot change the " + spacingType + " of a Droppable during a drag";
    };

    !isEqual$1(old.margin, fresh.margin) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, getMessage('margin')) : undefined : void 0;
    !isEqual$1(old.border, fresh.border) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, getMessage('border')) : undefined : void 0;
    !isEqual$1(old.padding, fresh.padding) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, getMessage('padding')) : undefined : void 0;
  }
};

var adjustBorderBoxSize = function adjustBorderBoxSize(axis, old, fresh) {
  return {
    top: old.top,
    left: old.left,
    right: old.left + fresh.width,
    bottom: old.top + fresh.height
  };
};

var updateDroppables = (function (_ref) {
  var modified = _ref.modified,
      existing = _ref.existing,
      viewport = _ref.viewport;

  if (!modified.length) {
    return existing;
  }

  var adjusted = modified.map(function (provided) {
    var raw = existing[provided.descriptor.id];
    !raw ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not locate droppable in existing droppables') : undefined : void 0;
    var hasPlaceholder = Boolean(raw.subject.withPlaceholder);
    var dimension = hasPlaceholder ? removePlaceholder(raw) : raw;
    var oldClient = dimension.client;
    var newClient = provided.client;
    var oldScrollable = getFrame(dimension);
    var newScrollable = getFrame(provided);

    if (true) {
      throwIfSpacingChange(dimension.client, provided.client);
      throwIfSpacingChange(oldScrollable.frameClient, newScrollable.frameClient);
      var isFrameEqual = oldScrollable.frameClient.borderBox.height === newScrollable.frameClient.borderBox.height && oldScrollable.frameClient.borderBox.width === newScrollable.frameClient.borderBox.width;
      !isFrameEqual ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'The width and height of your Droppable scroll container cannot change when adding or removing Draggables during a drag') : undefined : void 0;
    }

    var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["createBox"])({
      borderBox: adjustBorderBoxSize(dimension.axis, oldClient.borderBox, newClient.borderBox),
      margin: oldClient.margin,
      border: oldClient.border,
      padding: oldClient.padding
    });
    var closest = {
      client: oldScrollable.frameClient,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["withScroll"])(oldScrollable.frameClient, viewport.scroll.initial),
      shouldClipSubject: oldScrollable.shouldClipSubject,
      scrollSize: newScrollable.scrollSize,
      scroll: oldScrollable.scroll.initial
    };
    var withSizeChanged = getDroppableDimension({
      descriptor: provided.descriptor,
      isEnabled: provided.isEnabled,
      isCombineEnabled: provided.isCombineEnabled,
      isFixedOnPage: provided.isFixedOnPage,
      direction: provided.axis.direction,
      client: client,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["withScroll"])(client, viewport.scroll.initial),
      closest: closest
    });
    var scrolled = scrollDroppable(withSizeChanged, newScrollable.scroll.current);
    return scrolled;
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, toDroppableMap(adjusted));

  return result;
});

var withNoAnimatedDisplacement = (function (impact) {
  var displaced = impact.movement.displaced;

  if (!displaced.length) {
    return impact;
  }

  var withoutAnimation = displaced.map(function (displacement) {
    if (!displacement.isVisible) {
      return displacement;
    }

    if (!displacement.shouldAnimate) {
      return displacement;
    }

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, displacement, {
      shouldAnimate: false
    });
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact, {
    movement: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact.movement, {
      displaced: withoutAnimation,
      map: getDisplacementMap(withoutAnimation)
    })
  });

  return result;
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
});

var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
  var previousImpact = _ref.previousImpact,
      impact = _ref.impact,
      droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);

  if (!last) {
    return droppables;
  }

  if (last === now) {
    return droppables;
  }

  var lastDroppable = droppables[last];

  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }

  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};

var recomputePlaceholders = (function (_ref2) {
  var draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousImpact = _ref2.previousImpact,
      impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact: previousImpact,
    impact: impact,
    droppables: droppables
  });
  var isOver = whatIsDraggedOver(impact);

  if (!isOver) {
    return cleaned;
  }

  var droppable = droppables[isOver];

  if (isHomeOf(draggable, droppable)) {
    return cleaned;
  }

  if (droppable.subject.withPlaceholder) {
    return cleaned;
  }

  var patched = addPlaceholder(droppable, draggable, draggables);
  return patchDroppableMap(cleaned, patched);
});

var timingsKey = 'Processing dynamic changes';
var publishWhileDragging = (function (_ref) {
  var _extends2, _extends3;

  var state = _ref.state,
      published = _ref.published;
  start(timingsKey);
  var updatedDroppables = updateDroppables({
    modified: published.modified,
    existing: state.dimensions.droppables,
    viewport: state.viewport
  });
  var draggables = updateDraggables({
    updatedDroppables: updatedDroppables,
    criticalId: state.critical.draggable.id,
    existing: state.dimensions.draggables,
    additions: published.additions,
    removals: published.removals,
    viewport: state.viewport
  });
  var critical = {
    draggable: draggables[state.critical.draggable.id].descriptor,
    droppable: updatedDroppables[state.critical.droppable.id].descriptor
  };
  var original = state.dimensions.draggables[critical.draggable.id];
  var updated = draggables[critical.draggable.id];
  var droppables = recomputePlaceholders({
    draggable: updated,
    draggables: draggables,
    droppables: updatedDroppables,
    previousImpact: state.impact,
    impact: state.impact
  });
  var dimensions = {
    draggables: draggables,
    droppables: droppables
  };

  var _getDragPositions = getDragPositions({
    initial: state.initial,
    current: state.current,
    oldClientBorderBoxCenter: original.client.borderBox.center,
    newClientBorderBoxCenter: updated.client.borderBox.center,
    viewport: state.viewport
  }),
      initial = _getDragPositions.initial,
      current = _getDragPositions.current;

  var _getHomeOnLift = getHomeOnLift({
    draggable: updated,
    home: dimensions.droppables[critical.droppable.id],
    draggables: dimensions.draggables,
    viewport: state.viewport
  }),
      homeImpact = _getHomeOnLift.impact,
      onLift = _getHomeOnLift.onLift;

  var impact = withNoAnimatedDisplacement(getDragImpact({
    pageBorderBoxCenter: current.page.borderBoxCenter,
    draggable: updated,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: homeImpact,
    viewport: state.viewport,
    userDirection: state.userDirection,
    onLift: onLift
  }));
  var isOrphaned = Boolean(state.movementMode === 'SNAP' && !whatIsDraggedOver(impact));
  !!isOrphaned ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Dragging item no longer has a valid merge/destination after a dynamic update. This is not supported') : undefined : void 0;
  finish(timingsKey);

  var draggingState = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    phase: 'DRAGGING'
  }, state, (_extends2 = {}, _extends2["phase"] = 'DRAGGING', _extends2.critical = critical, _extends2.current = current, _extends2.initial = initial, _extends2.impact = impact, _extends2.dimensions = dimensions, _extends2.onLift = onLift, _extends2.onLiftImpact = homeImpact, _extends2.forceShouldAnimate = false, _extends2));

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.reason = state.reason, _extends3.isWaiting = false, _extends3));

  return dropPending;
});

var forward = {
  vertical: 'down',
  horizontal: 'right'
};
var backward = {
  vertical: 'up',
  horizontal: 'left'
};

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      destination = _ref.destination,
      originalInsideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  if (previousImpact.merge) {
    return null;
  }

  var location = previousImpact.destination;
  !location ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Need a previous location to move from into a combine') : undefined : void 0;
  var currentIndex = location.index;

  var currentInsideDestination = function () {
    var shallow = originalInsideDestination.slice();

    if (isInHomeList) {
      shallow.splice(draggable.descriptor.index, 1);
    }

    shallow.splice(location.index, 0, draggable);
    return shallow;
  }();

  var targetIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (targetIndex < 0) {
    return null;
  }

  if (targetIndex > currentInsideDestination.length - 1) {
    return null;
  }

  var target = currentInsideDestination[targetIndex];
  !(target !== draggable) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot combine with self') : undefined : void 0;
  var merge = {
    whenEntered: isMovingForward ? forward : backward,
    combine: {
      draggableId: target.descriptor.id,
      droppableId: destination.descriptor.id
    }
  };
  var impact = {
    movement: previousImpact.movement,
    destination: null,
    merge: merge
  };
  return impact;
});

var addClosest = function addClosest(add, displaced) {
  var added = {
    draggableId: add.descriptor.id,
    isVisible: true,
    shouldAnimate: true
  };
  return [added].concat(displaced);
};
var removeClosest = function removeClosest(displaced) {
  return displaced.slice(1);
};

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      initialInside = _ref.insideDestination,
      location = _ref.location;
  var insideDestination = initialInside.slice();
  var currentIndex = location.index;
  var isInForeignList = !isInHomeList;

  if (isInForeignList) {
    insideDestination.splice(location.index, 0, draggable);
  }

  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (proposedIndex < 0) {
    return null;
  }

  if (proposedIndex > insideDestination.length - 1) {
    return null;
  }

  return {
    proposedIndex: proposedIndex,
    modifyDisplacement: true
  };
});

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      draggables = _ref.draggables,
      merge = _ref.merge,
      onLift = _ref.onLift;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var movement = previousImpact.movement;
  var combineId = merge.combine.draggableId;
  var combine = draggables[combineId];
  var combineIndex = combine.descriptor.index;
  var wasDisplacedAtStart = didStartDisplaced(combineId, onLift);

  if (wasDisplacedAtStart) {
    var hasDisplacedFromStart = !movement.map[combineId];

    if (hasDisplacedFromStart) {
      if (isMovingForward) {
        return {
          proposedIndex: combineIndex,
          modifyDisplacement: false
        };
      }

      return {
        proposedIndex: combineIndex - 1,
        modifyDisplacement: true
      };
    }

    if (isMovingForward) {
      return {
        proposedIndex: combineIndex,
        modifyDisplacement: true
      };
    }

    return {
      proposedIndex: combineIndex - 1,
      modifyDisplacement: false
    };
  }

  var isDisplaced = Boolean(movement.map[combineId]);

  if (isDisplaced) {
    if (isMovingForward) {
      return {
        proposedIndex: combineIndex + 1,
        modifyDisplacement: true
      };
    }

    return {
      proposedIndex: combineIndex,
      modifyDisplacement: false
    };
  }

  if (isMovingForward) {
    return {
      proposedIndex: combineIndex + 1,
      modifyDisplacement: false
    };
  }

  return {
    proposedIndex: combineIndex,
    modifyDisplacement: true
  };
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      onLift = _ref.onLift;

  var instruction = function () {
    if (previousImpact.destination) {
      return fromReorder({
        isMovingForward: isMovingForward,
        isInHomeList: isInHomeList,
        draggable: draggable,
        location: previousImpact.destination,
        insideDestination: insideDestination
      });
    }

    if (previousImpact.merge) {
      return fromCombine({
        isMovingForward: isMovingForward,
        destination: destination,
        previousImpact: previousImpact,
        draggables: draggables,
        merge: previousImpact.merge,
        onLift: onLift
      });
    }
    return null;
  }();

  if (instruction == null) {
    return null;
  }

  var proposedIndex = instruction.proposedIndex,
      modifyDisplacement = instruction.modifyDisplacement;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);

  var displaced = function () {
    var lastDisplaced = previousImpact.movement.displaced;

    if (!modifyDisplacement) {
      return lastDisplaced;
    }

    if (isMovingForward) {
      return removeClosest(lastDisplaced);
    }

    var withoutDraggable = removeDraggableFromList(draggable, insideDestination);
    var atProposedIndex = withoutDraggable[proposedIndex];
    return addClosest(atProposedIndex, lastDisplaced);
  }();

  return {
    movement: {
      displacedBy: displacedBy,
      displaced: displaced,
      map: getDisplacementMap(displaced)
    },
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    },
    merge: null
  };
});

var whenCombining = (function (_ref) {
  var combine = _ref.combine,
      onLift = _ref.onLift,
      movement = _ref.movement,
      draggables = _ref.draggables;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: movement.map,
    onLift: onLift,
    combineWith: combineWith,
    displacedBy: movement.displacedBy
  });
  return add(center, displaceBy);
});

var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};

var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};

var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};

var goAfter = function goAfter(_ref) {
  var axis = _ref.axis,
      moveRelativeTo = _ref.moveRelativeTo,
      isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore(_ref2) {
  var axis = _ref2.axis,
      moveRelativeTo = _ref2.moveRelativeTo,
      isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart(_ref3) {
  var axis = _ref3.axis,
      moveInto = _ref3.moveInto,
      isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};

var whenReordering = (function (_ref) {
  var movement = _ref.movement,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      onLift = _ref.onLift;
  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var draggablePage = draggable.page;
  var axis = droppable.axis;

  if (!insideDestination.length) {
    return goIntoStart({
      axis: axis,
      moveInto: droppable.page,
      isMoving: draggablePage
    });
  }

  var displaced = movement.displaced,
      displacedBy = movement.displacedBy;

  if (displaced.length) {
    var closestAfter = draggables[displaced[0].draggableId];

    if (didStartDisplaced(closestAfter.descriptor.id, onLift)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closestAfter.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["offset"])(closestAfter.page, displacedBy.point);
    return goBefore({
      axis: axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }

  var last = insideDestination[insideDestination.length - 1];

  if (last.descriptor.id === draggable.descriptor.id) {
    return draggablePage.borderBox.center;
  }

  if (didStartDisplaced(last.descriptor.id, onLift)) {
    var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["offset"])(last.page, negate(onLift.displacedBy.point));
    return goAfter({
      axis: axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }

  return goAfter({
    axis: axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
});

var withDroppableDisplacement = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.displacement);
});

var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      onLift = _ref.onLift;
  var merge = impact.merge;
  var destination = impact.destination;
  var original = draggable.page.borderBox.center;

  if (!droppable) {
    return original;
  }

  if (destination) {
    return whenReordering({
      movement: impact.movement,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      onLift: onLift
    });
  }

  if (merge) {
    return whenCombining({
      movement: impact.movement,
      combine: merge.combine,
      draggables: draggables,
      onLift: onLift
    });
  }

  return original;
};

var getPageBorderBoxCenterFromImpact = (function (args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable = args.droppable;
  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getRect"])({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

var withNewDisplacement = (function (impact, displaced) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact, {
    movement: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact.movement, {
      displaced: displaced,
      map: getDisplacementMap(displaced)
    })
  });
});

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange,
      onLift = _ref.onLift;
  var displaced = impact.movement.displaced;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var updated = displaced.map(function (entry) {
    if (entry.isVisible) {
      return entry;
    }

    var draggable = draggables[entry.draggableId];
    var withScrolledViewport = getDisplacement({
      draggable: draggable,
      destination: destination,
      previousImpact: impact,
      viewport: scrolledViewport.frame,
      onLift: onLift,
      forceShouldAnimate: false
    });

    if (withScrolledViewport.isVisible) {
      return withScrolledViewport;
    }

    var withScrolledDroppable = getDisplacement({
      draggable: draggable,
      destination: scrolledDroppable,
      previousImpact: impact,
      viewport: viewport.frame,
      onLift: onLift,
      forceShouldAnimate: false
    });

    if (withScrolledDroppable.isVisible) {
      return withScrolledDroppable;
    }

    return entry;
  });
  return withNewDisplacement(impact, updated);
});

var withViewportDisplacement = (function (viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
});

var getClientFromPageBorderBoxCenter = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
  return add(draggable.client.borderBox.center, offset);
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination: destination,
    withDroppableDisplacement: withDroppableDisplacement,
    viewport: viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
});

var moveToNextPlace = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      draggables = _ref.draggables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousClientSelection = _ref.previousClientSelection,
      onLift = _ref.onLift;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
    isInHomeList: isInHomeList,
    isMovingForward: isMovingForward,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact
  }) || moveToNextIndex({
    isMovingForward: isMovingForward,
    isInHomeList: isInHomeList,
    draggable: draggable,
    draggables: draggables,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    onLift: onLift
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    onLift: onLift
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });

  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      viewport: viewport
    });
    return {
      clientSelection: clientSelection,
      impact: impact,
      scrollJumpRequest: null
    };
  }

  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact: impact,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    maxScrollChange: distance,
    onLift: onLift
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get clipped area from droppable') : undefined : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var active = source.subject.active;

  if (!active) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    return Boolean(droppable.subject.active);
  }).filter(function (droppable) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);

    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }

    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function (a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

    if (first !== second) {
      return first - second;
    }

    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
});

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, onLift) {
  var original = draggable.page.borderBox.center;
  return didStartDisplaced(draggable.descriptor.id, onLift) ? subtract(original, onLift.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, onLift) {
  var original = draggable.page.borderBox;
  return didStartDisplaced(draggable.descriptor.id, onLift) ? offsetByPosition(original, negate(onLift.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      onLift = _ref.onLift;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, onLift),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, onLift)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, onLift)));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
});

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      onLift = _ref.onLift;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      movement: noMovement,
      destination: {
        droppableId: destination.descriptor.id,
        index: 0
      },
      merge: null
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      onLift: onLift
    });
    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] < moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var targetIndex = insideDestination.indexOf(moveRelativeTo);
  !(targetIndex !== -1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find target in list') : undefined : void 0;

  var proposedIndex = function () {
    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return targetIndex;
    }

    if (isGoingBeforeTarget) {
      return targetIndex;
    }

    return targetIndex + 1;
  }();

  var displaced = removeDraggableFromList(draggable, insideDestination).slice(proposedIndex).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      viewport: viewport.frame,
      previousImpact: previousImpact,
      onLift: onLift
    });
  });
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var impact = {
    movement: {
      displacedBy: displacedBy,
      displaced: displaced,
      map: getDisplacementMap(displaced)
    },
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    },
    merge: null
  };
  return impact;
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      onLift = _ref.onLift;
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport,
    destination: destination,
    insideDestination: insideDestination,
    onLift: onLift
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    viewport: viewport,
    onLift: onLift
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    onLift: onLift
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
  return {
    clientSelection: clientSelection,
    impact: impact,
    scrollJumpRequest: null
  };
});

var getDroppableOver$1 = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions,
      draggables = _state$dimensions.draggables,
      droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    destination: isOver,
    draggables: draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    onLift: state.onLift
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    previousImpact: state.impact,
    viewport: state.viewport,
    onLift: state.onLift
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

var getVertical = function getVertical(previous, diff) {
  if (diff === 0) {
    return previous;
  }

  return diff > 0 ? 'down' : 'up';
};

var getHorizontal = function getHorizontal(previous, diff) {
  if (diff === 0) {
    return previous;
  }

  return diff > 0 ? 'right' : 'left';
};

var getUserDirection = (function (previous, oldPageBorderBoxCenter, newPageBorderBoxCenter) {
  var diff = subtract(newPageBorderBoxCenter, oldPageBorderBoxCenter);
  return {
    horizontal: getHorizontal(previous.horizontal, diff.x),
    vertical: getVertical(previous.vertical, diff.y)
  };
});

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var currentWindowScroll = viewport.scroll.current;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, currentWindowScroll),
    borderBoxCenter: add(client.borderBoxCenter, currentWindowScroll)
  };
  var current = {
    client: client,
    page: page
  };
  var userDirection = getUserDirection(state.userDirection, state.current.page.borderBoxCenter, current.page.borderBoxCenter);

  if (state.phase === 'COLLECTING') {
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current,
      userDirection: userDirection
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageBorderBoxCenter: page.borderBoxCenter,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    userDirection: userDirection,
    onLift: state.onLift
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    current: current,
    userDirection: userDirection,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });

  return result;
});

var recompute = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      onLift = _ref.onLift,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var updated = impact.movement.displaced.map(function (entry) {
    return getDisplacement({
      draggable: draggables[entry.draggableId],
      destination: destination,
      previousImpact: impact,
      viewport: viewport.frame,
      onLift: onLift,
      forceShouldAnimate: forceShouldAnimate
    });
  });
  return withNewDisplacement(impact, updated);
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      onLift = _ref.onLift;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    onLift: onLift
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
});

var refreshSnap = (function (_ref) {
  var state = _ref.state,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport;
  !(state.movementMode === 'SNAP') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Must be over a destination in SNAP movement mode') : undefined : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    onLift: state.onLift
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    onLift: state.onLift
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var isSnapping = function isSnapping(state) {
  return state.movementMode === 'SNAP';
};

var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);

  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state: state,
      dimensions: dimensions
    });
  }

  return refreshSnap({
    state: state,
    dimensions: dimensions
  });
};

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'CLEAN') {
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, idle, {
      shouldFlush: action.payload.shouldFlush
    });
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'INITIAL_PUBLISH must come after a IDLE phase') : undefined : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        clientSelection = _action$payload.clientSelection,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        movementMode = _action$payload.movementMode;
    var draggable = dimensions.draggables[critical.draggable.id];
    var home = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getHomeOnLift = getHomeOnLift({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getHomeOnLift.impact,
        onLift = _getHomeOnLift.onLift;

    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      movementMode: movementMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      isWindowScrollAllowed: isWindowScrollAllowed,
      impact: impact,
      onLift: onLift,
      onLiftImpact: impact,
      viewport: viewport,
      userDirection: forward,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    var _extends2;

    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Collection cannot start from phase " + state.phase) : undefined : void 0;

    var _result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'COLLECTING'
    }, state, (_extends2 = {}, _extends2["phase"] = 'COLLECTING', _extends2));

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Unexpected " + action.type + " received in phase " + state.phase) : undefined : void 0;
    return publishWhileDragging({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _clientSelection = action.payload.client;

    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }

    return update({
      state: state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    if (state.phase === 'COLLECTING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        offset = _action$payload2.offset;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, offset);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : undefined : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : undefined : void 0;

    var updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : undefined : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : undefined : void 0;

    var _updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot move by window in phase " + state.phase) : undefined : void 0;
    !state.isWindowScrollAllowed ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Window scrolling is currently not supported for fixed lists. Aborting drag') : undefined : void 0;
    var newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, newScroll)) {
      return state;
    }

    var _viewport = scrollViewport(state.viewport, newScroll);

    if (isSnapping(state)) {
      return refreshSnap({
        state: state,
        viewport: _viewport
      });
    }

    return update({
      state: state,
      viewport: _viewport
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    if (!isMovementAllowed(state)) {
      return state;
    }

    var maxScroll = action.payload.maxScroll;

    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }

    var withMaxScroll = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.viewport, {
      scroll: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, action.type + " received while not in DRAGGING phase") : undefined : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return update({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var _extends3;

    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : undefined : void 0;

    var newState = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DROP_PENDING'
    }, state, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.isWaiting = true, _extends3.reason = reason, _extends3));

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot animate drop from phase " + state.phase) : undefined : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      dimensions: state.dimensions,
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _action$payload6 = action.payload,
        _completed = _action$payload6.completed,
        shouldFlush = _action$payload6.shouldFlush;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: shouldFlush
    };
  }

  return state;
});

var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publishWhileDragging$1 = function publishWhileDragging(args) {
  return {
    type: 'PUBLISH_WHILE_DRAGGING',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: args
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var clean$1 = function clean(args) {
  if (args === void 0) {
    args = {
      shouldFlush: false
    };
  }

  return {
    type: 'CLEAN',
    payload: args
  };
};
var animateDrop = function animateDrop(args) {
  return {
    type: 'DROP_ANIMATE',
    payload: args
  };
};
var completeDrop = function completeDrop(args) {
  return {
    type: 'DROP_COMPLETE',
    payload: args
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

var lift$1 = (function (marshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed,
            shouldFlush: true
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Incorrect phase to start a drag') : undefined : void 0;
        var scrollOptions = {
          shouldPublishImmediately: movementMode === 'SNAP'
        };
        var request = {
          draggableId: id,
          scrollOptions: scrollOptions
        };

        var _marshal$startPublish = marshal.startPublishing(request),
            critical = _marshal$startPublish.critical,
            dimensions = _marshal$startPublish.dimensions,
            viewport = _marshal$startPublish.viewport;

        dispatch(initialPublish({
          critical: critical,
          dimensions: dimensions,
          clientSelection: clientSelection,
          movementMode: movementMode,
          viewport: viewport
        }));
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.completed.result.reason);
        }

        if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var curves = {
  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
  drop: 'cubic-bezier(.2,1,.1,1)'
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};

var moveTo = function moveTo(offset) {
  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
};

var transforms = {
  moveTo: moveTo,
  drop: function drop(offset, isCombining) {
    var translate = moveTo(offset);

    if (!translate) {
      return null;
    }

    if (!isCombining) {
      return translate;
    }

    return translate + " scale(" + combine.scale.drop + ")";
  }
};

var minDropTime = timings.minDropTime,
    maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = (function (_ref) {
  var current = _ref.current,
      destination = _ref.destination,
      reason = _ref.reason;
  var distance$1 = distance(current, destination);

  if (distance$1 <= 0) {
    return minDropTime;
  }

  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }

  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
});

var getNewHomeClientOffset = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      dimensions = _ref.dimensions,
      viewport = _ref.viewport,
      onLift = _ref.onLift;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    onLift: onLift,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  var merge = impact.merge;

  if (merge && didStartDisplaced(merge.combine.draggableId, onLift)) {
    return subtract(offset, onLift.displacedBy.point);
  }

  return offset;
});

var getDropImpact = (function (_ref) {
  var reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      onLiftImpact = _ref.onLiftImpact,
      onLift = _ref.onLift;
  var didDropInsideDroppable = reason === 'DROP' && Boolean(whatIsDraggedOver(lastImpact));

  if (!didDropInsideDroppable) {
    var impact = recompute({
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      draggables: draggables,
      onLift: onLift,
      forceShouldAnimate: true
    });
    return {
      impact: impact,
      didDropInsideDroppable: didDropInsideDroppable
    };
  }

  if (lastImpact.destination) {
    return {
      impact: lastImpact,
      didDropInsideDroppable: didDropInsideDroppable
    };
  }

  var withoutMovement = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastImpact, {
    movement: noMovement
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: didDropInsideDroppable
  };
});

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A DROP action occurred while DROP_PENDING and still waiting') : undefined : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot drop in phase: " + state.phase) : undefined : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        onLift: state.onLift,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var draggable = dimensions.draggables[state.critical.draggable.id];
      var destination = didDropInsideDroppable ? impact.destination : null;
      var combine = didDropInsideDroppable && impact.merge ? impact.merge.combine : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable.descriptor.id,
        type: draggable.descriptor.type,
        source: source,
        reason: reason,
        mode: state.movementMode,
        destination: destination,
        combine: combine
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact: impact,
        draggable: draggable,
        dimensions: dimensions,
        viewport: state.viewport,
        onLift: state.onLift
      });
      var completed = {
        critical: state.critical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed,
          shouldFlush: false
        }));
        return;
      }

      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason: reason
      });
      var args = {
        newHomeClientOffset: newHomeClientOffset,
        dropDuration: dropDuration,
        completed: completed
      };
      dispatch(animateDrop(args));
    };
  };
});

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
};

var withLocation = function withLocation(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);

  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }

  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};

var withCombine = function withCombine(id, source, combine) {
  var inHomeList = source.droppableId === combine.droppableId;

  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
  }

  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
};

var onDragUpdate = function onDragUpdate(update) {
  var location = update.destination;

  if (location) {
    return withLocation(update.source, location);
  }

  var combine = update.combine;

  if (combine) {
    return withCombine(update.draggableId, update.source, combine);
  }

  return 'You are over an area that cannot be dropped on';
};

var returnedToStart = function returnedToStart(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }

  var location = result.destination;
  var combine = result.combine;

  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }

  if (combine) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
  }

  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};

var preset = {
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var getExpiringAnnounce = (function (announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
       true ? warning('Announcement already made. Not making a second announcement') : undefined;
      return;
    }

    if (isExpired) {
       true ? warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : undefined;
      return;
    }

    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
});

var getAsyncMarshal = (function () {
  var entries = [];

  var execute = function execute(timerId) {
    var index = findIndex(entries, function (item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find timer') : undefined : void 0;

    var _entries$splice = entries.splice(index, 1),
        entry = _entries$splice[0];

    entry.callback();
  };

  var add = function add(fn) {
    var timerId = setTimeout(function () {
      return execute(timerId);
    });
    var entry = {
      timerId: timerId,
      callback: fn
    };
    entries.push(entry);
  };

  var flush = function flush() {
    if (!entries.length) {
      return;
    }

    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function (entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };

  return {
    add: add,
    flush: flush
  };
});

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var withTimings = function withTimings(key, fn) {
  start(key);
  fn();
  finish(key);
};

var getDragStart = function getDragStart(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode: mode
  };
};

var execute = function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }

  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);

  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};

var getPublisher = (function (getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode: mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function () {
      withTimings('onDragStart', function () {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };

  var update = function update(critical, impact) {
    var location = impact.destination;
    var combine = impact.merge ? impact.merge.combine : null;
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onDragMove when onDragStart has not been called') : undefined : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }

    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }

    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

    if (hasGroupingChanged) {
      dragging.lastCombine = combine;
    }

    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }

    var data = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragStart(critical, dragging.mode), {
      combine: combine,
      destination: location
    });

    asyncMarshal.add(function () {
      withTimings('onDragUpdate', function () {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };

  var flush = function flush() {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only flush responders while dragging') : undefined : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : undefined : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeStart: beforeStart,
    start: start,
    update: update,
    flush: flush,
    drop: drop,
    abort: abort
  };
});

var responders = (function (getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }

        next(action);

        if (action.type === 'CLEAN') {
          publisher.abort();
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot finish a drop animating when no drop is occurring') : undefined : void 0;
      store.dispatch(completeDrop({
        completed: state.completed,
        shouldFlush: false
      }));
    };
  };
});

var dimensionMarshalStopper = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'CLEAN' || action.type === 'DROP_ANIMATE') {
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'CLEAN';
};

var shouldCancelPending = function shouldCancelPending(action) {
  return action.type === 'COLLECTION_STARTING';
};

var autoScroll = (function (autoScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldEnd(action)) {
          autoScroller.stop();
          next(action);
          return;
        }

        if (shouldCancelPending(action)) {
          autoScroller.cancelPending();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : undefined : void 0;
          autoScroller.start(state);
          return;
        }

        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
});

var pendingDrop = (function (store) {
  return function (next) {
    return function (action) {
      next(action);

      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
        return;
      }

      var postActionState = store.getState();

      if (postActionState.phase !== 'DROP_PENDING') {
        return;
      }

      if (postActionState.isWaiting) {
        return;
      }

      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
});

var composeEnhancers =  true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_5__["compose"];
var createStore = (function (_ref) {
  var dimensionMarshal = _ref.dimensionMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      autoScroller = _ref.autoScroller;
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(reducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, pendingDrop, autoScroll(autoScroller), responders(getResponders, announce))));
});

var clean$2 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};

var timingKey = 'Publish collection from DOM';
var createPublisher = (function (_ref) {
  var getEntries = _ref.getEntries,
      callbacks = _ref.callbacks;

  var advancedUsageWarning = function () {
    if (false) {}

    var hasAnnounced = false;
    return function () {
      if (hasAnnounced) {
        return;
      }

      hasAnnounced = true;
       true ? warning("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature.\n\n        More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/changes-while-dragging.md\n      ") : undefined;
    };
  }();

  var staging = clean$2();
  var frameId = null;

  var collect = function collect() {
    advancedUsageWarning();

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      callbacks.collectionStarting();
      var critical = callbacks.getCritical();
      start(timingKey);
      var entries = getEntries();
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;

      var added = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default()(additions).map(function (id) {
        return entries.draggables[id].getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });

      var updated = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default()(modified).map(function (id) {
        var entry = entries.droppables[id];
        !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find dynamically added droppable in cache') : undefined : void 0;
        var isHome = entry.descriptor.id === critical.droppable.id;
        var options = {
          withoutPlaceholder: !isHome
        };
        return entry.callbacks.recollect(options);
      });

      var result = {
        additions: added,
        removals: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default()(removals),
        modified: updated
      };
      staging = clean$2();
      finish(timingKey);
      callbacks.publish(result);
    });
  };

  var add = function add(descriptor) {
    staging.additions[descriptor.id] = descriptor;
    staging.modified[descriptor.droppableId] = true;

    if (staging.removals[descriptor.id]) {
      delete staging.removals[descriptor.id];
    }

    collect();
  };

  var remove = function remove(descriptor) {
    staging.removals[descriptor.id] = descriptor;
    staging.modified[descriptor.droppableId] = true;

    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$2();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
});

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find document.documentElement') : undefined : void 0;
  return doc;
});

var getMaxWindowScroll = (function () {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getRect"])({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var getInitialPublish = (function (_ref) {
  var critical = _ref.critical,
      scrollOptions = _ref.scrollOptions,
      entries = _ref.entries;
  var timingKey = 'Initial collection from DOM';
  start(timingKey);
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = values(entries.droppables).filter(function (entry) {
    return entry.descriptor.type === home.type;
  }).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = values(entries.draggables).filter(function (entry) {
    return entry.descriptor.type === critical.draggable.type;
  }).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish(timingKey);
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

var throwIfAddOrRemoveOfWrongType = function throwIfAddOrRemoveOfWrongType(collection, descriptor) {
  !(collection.critical.draggable.type === descriptor.type) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "We have detected that you have added a Draggable during a drag.\n      This is not of the same type as the dragging item\n\n      Dragging type: " + collection.critical.draggable.type + ".\n      Added type: " + descriptor.type + "\n\n      We are not allowing this as you can run into problems if your change\n      has shifted the positioning of other Droppables, or has changed the size of the page") : undefined : void 0;
};

var createDimensionMarshal = (function (callbacks) {
  var entries = {
    droppables: {},
    draggables: {}
  };
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting,
      getCritical: function getCritical() {
        !collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get critical when there is no collection') : undefined : void 0;
        return collection.critical;
      }
    },
    getEntries: function getEntries() {
      return entries;
    }
  });

  var registerDraggable = function registerDraggable(descriptor, getDimension) {
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;

    if (!collection) {
      return;
    }

    throwIfAddOrRemoveOfWrongType(collection, descriptor);
    publisher.add(descriptor);
  };

  var updateDraggable = function updateDraggable(published, descriptor, getDimension) {
    var existing = entries.draggables[published.id];
    !existing ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot update draggable registration as no published registration was found') : undefined : void 0;

    if (existing.descriptor === published) {
      delete entries.draggables[published.id];
    } else {
       true ? warning("\n        Detected incorrect usage of 'key' on '<Draggable draggableId=\"" + published.id + "\"$ />\n\n        Your 'key' should be:\n        - Unique for each Draggable in a list\n        - Not be based on the index of the Draggable\n\n        Usually you want your 'key' to just be the 'draggableId'\n\n        More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#keys-for-a-list-of-draggable-\n      ") : undefined;
    }

    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;
  };

  var unregisterDraggable = function unregisterDraggable(descriptor) {
    var entry = entries.draggables[descriptor.id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot unregister Draggable with id:\n      " + descriptor.id + " as it is not registered") : undefined : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.draggables[descriptor.id];

    if (!collection) {
      return;
    }

    !(collection.critical.draggable.id !== descriptor.id) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot remove the dragging item during a drag') : undefined : void 0;
    throwIfAddOrRemoveOfWrongType(collection, descriptor);
    publisher.remove(descriptor);
  };

  var registerDroppable = function registerDroppable(descriptor, droppableCallbacks) {
    var id = descriptor.id;
    entries.droppables[id] = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot add a Droppable during a drag') : undefined : void 0;
  };

  var unregisterDroppable = function unregisterDroppable(descriptor) {
    var entry = entries.droppables[descriptor.id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot unregister Droppable with id " + descriptor.id + " as as it is not registered") : undefined : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.droppables[descriptor.id];
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot add a Droppable during a drag') : undefined : void 0;
  };

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableScroll({
      id: id,
      offset: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    var entry = entries.droppables[id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot scroll Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    entry.callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    values(entries.droppables).filter(function (entry) {
      return entry.descriptor.type === home.type;
    }).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection = null;
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start capturing critical dimensions as there is already a collection') : undefined : void 0;
    var entry = entries.draggables[request.draggableId];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find critical draggable entry') : undefined : void 0;
    var home = entries.droppables[entry.descriptor.droppableId];
    !home ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find critical droppable entry') : undefined : void 0;
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    collection = {
      critical: critical
    };
    return getInitialPublish({
      critical: critical,
      entries: entries,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    registerDraggable: registerDraggable,
    updateDraggable: updateDraggable,
    unregisterDraggable: unregisterDraggable,
    registerDroppable: registerDroppable,
    unregisterDroppable: unregisterDroppable,
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.completed.result.draggableId === id) {
    return false;
  }

  return state.completed.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var getScrollableDroppables = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.frame) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
    !droppable.frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Invalid result') : undefined : void 0;
    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination];

    if (!_dimension.frame) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};

var getDistanceThresholds = (function (container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom: startScrollingFrom,
    maxScrollValueAt: maxScrollValueAt
  };
  return thresholds;
});

var getPercentage = (function (_ref) {
  var startOfRange = _ref.startOfRange,
      endOfRange = _ref.endOfRange,
      current = _ref.current;
  var range = endOfRange - startOfRange;

  if (range === 0) {
     true ? warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : undefined;
    return 0;
  }

  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
});

var minScroll = 1;

var getValueFromDistance = (function (distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }

  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }

  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }

  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll);
});

var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = (function (proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;

  var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();

  var runTime = now - startOfRange;

  if (runTime >= stopAt) {
    return proposedScroll;
  }

  if (runTime < accelerateAt) {
    return minScroll;
  }

  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange: endOfRange,
    current: runTime
  });
  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll);
});

var getValue = (function (_ref) {
  var distanceToEdge = _ref.distanceToEdge,
      thresholds = _ref.thresholds,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getValueFromDistance(distanceToEdge, thresholds);

  if (scroll === 0) {
    return 0;
  }

  if (!shouldUseTimeDampening) {
    return scroll;
  }

  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
});

var getScrollOnAxis = (function (_ref) {
  var container = _ref.container,
      distanceToEdges = _ref.distanceToEdges,
      dragStartTime = _ref.dragStartTime,
      axis = _ref.axis,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds: thresholds,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  }

  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds: thresholds,
    dragStartTime: dragStartTime,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
});

var adjustForSizeLimits = (function (_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
});

var clean$3 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getScroll = (function (_ref) {
  var dragStartTime = _ref.dragStartTime,
      container = _ref.container,
      subject = _ref.subject,
      center = _ref.center,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: vertical,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var required = clean$3({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return false;
  }

  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};

var getWindowScrollChange = (function (_ref) {
  var viewport = _ref.viewport,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: viewport.frame,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
});

var getDroppableScrollChange = (function (_ref) {
  var droppable = _ref.droppable,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: frame.pageMarginBox,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
});

var scroll$1 = (function (_ref) {
  var state = _ref.state,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
      scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable.page.marginBox;

  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;

    var _change = getWindowScrollChange({
      dragStartTime: dragStartTime,
      viewport: viewport,
      subject: subject,
      center: center,
      shouldUseTimeDampening: shouldUseTimeDampening
    });

    if (_change) {
      scrollWindow(_change);
      return;
    }
  }

  var droppable = getBestScrollableDroppable({
    center: center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });

  if (!droppable) {
    return;
  }

  var change = getDroppableScrollChange({
    dragStartTime: dragStartTime,
    droppable: droppable,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });

  if (change) {
    scrollDroppable(droppable.descriptor.id, change);
  }
});

var createFluidScroller = (function (_ref) {
  var scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var scheduleWindowScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(scrollWindow);
  var scheduleDroppableScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fluid scroll if not dragging') : undefined : void 0;
    var _dragging = dragging,
        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
        dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state: state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  };

  var cancelPending = function cancelPending() {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot cancel pending fluid scroll when not started') : undefined : void 0;
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
  };

  var start$1 = function start$1(state) {
    start('starting fluid scroller');
    !!dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start auto scrolling when already started') : undefined : void 0;

    var dragStartTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();

    var wasScrollNeeded = false;

    var fakeScrollCallback = function fakeScrollCallback() {
      wasScrollNeeded = true;
    };

    scroll$1({
      state: state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish('starting fluid scroller');

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    cancelPending();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
    cancelPending: cancelPending,
    scroll: tryScroll
  };
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }

    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = whatIsDraggedOver(state.impact);
    !destination ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot perform a jump scroll when there is no destination') : undefined : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });

  var scroll = function scroll(state) {
    if (state.phase !== 'DRAGGING') {
      return;
    }

    if (state.movementMode === 'FLUID') {
      fluidScroller.scroll(state);
      return;
    }

    if (!state.scrollJumpRequest) {
      return;
    }

    jumpScroll(state);
  };

  var scroller = {
    scroll: scroll,
    cancelPending: fluidScroller.cancelPending,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix = 'data-react-beautiful-dnd';
var dragHandle = prefix + "-drag-handle";
var draggable = prefix + "-draggable";
var droppable = prefix + "-droppable";

var makeGetSelector = function makeGetSelector(context) {
  return function (attribute) {
    return "[" + attribute + "=\"" + context + "\"]";
  };
};

var getStyles = function getStyles(rules, property) {
  return rules.map(function (rule) {
    var value = rule.styles[property];

    if (!value) {
      return '';
    }

    return rule.selector + " { " + value + " }";
  }).join(' ');
};

var noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (function (uniqueContext) {
  var getSelector = makeGetSelector(uniqueContext);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();

  var draggable$1 = function () {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: 'body',
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, 'always'),
    resting: getStyles(rules, 'resting'),
    dragging: getStyles(rules, 'dragging'),
    dropAnimating: getStyles(rules, 'dropAnimating'),
    userCancel: getStyles(rules, 'userCancel')
  };
});

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find the head to append a style to') : undefined : void 0;
  return head;
};

var createStyleEl = function createStyleEl() {
  var el = document.createElement('style');
  el.type = 'text/css';
  return el;
};

function useStyleMarshal(uniqueId) {
  var uniqueContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return "" + uniqueId;
  }, [uniqueId]);
  var styles = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getStyles$1(uniqueContext);
  }, [uniqueContext]);
  var alwaysRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var dynamicRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var setDynamicStyle = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (proposed) {
    var el = dynamicRef.current;
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot set dynamic style element if it is not set') : undefined : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (proposed) {
    var el = alwaysRef.current;
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot set dynamic style element if it is not set') : undefined : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function () {
    !(!alwaysRef.current && !dynamicRef.current) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'style elements already mounted') : undefined : void 0;
    var always = createStyleEl();
    var dynamic = createStyleEl();
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix + "-always", uniqueContext);
    dynamic.setAttribute(prefix + "-dynamic", uniqueContext);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function () {
      var remove = function remove(ref) {
        var current = ref.current;
        !current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot unmount ref as it is not set') : undefined : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };

      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, uniqueContext]);
  var dragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (reason) {
    if (reason === 'DROP') {
      setDynamicStyle(styles.dropAnimating);
      return;
    }

    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!dynamicRef.current) {
      return;
    }

    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      dragging: dragging,
      dropping: dropping,
      resting: resting,
      styleContext: uniqueContext
    };
  }, [dragging, dropping, resting, uniqueContext]);
  return marshal;
}

var StoreContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find document.body') : undefined : void 0;
  return body;
});

var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};
var getId = function getId(uniqueId) {
  return "react-beautiful-dnd-announcement-" + uniqueId;
};
function useAnnouncer(uniqueId) {
  var id = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getId(uniqueId);
  }, [uniqueId]);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    !!ref.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Announcement node already mounted') : undefined : void 0;
    var el = document.createElement('div');
    ref.current = el;
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('role', 'log');
    el.setAttribute('aria-atomic', 'true');

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_13___default()(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function () {
      var toBeRemoved = ref.current;
      !toBeRemoved ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot unmount announcement node') : undefined : void 0;
      getBodyElement().removeChild(toBeRemoved);
      ref.current = null;
    };
  }, [id]);
  var announce = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (message) {
    var el = ref.current;

    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : undefined;
  }, []);
  return announce;
}

var AppContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);

var peerDependencies = {
	react: "^16.8.5"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Unable to parse React version " + value) : undefined : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch = Number(result[3]);
  return {
    major: major,
    minor: minor,
    patch: patch,
    raw: value
  };
};

var isSatisfied = function isSatisfied(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }

  if (actual.major < expected.major) {
    return false;
  }

  if (actual.minor > expected.minor) {
    return true;
  }

  if (actual.minor < expected.minor) {
    return false;
  }

  return actual.patch >= expected.patch;
};

var checkReactVersion = (function (peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);

  if (isSatisfied(peerDep, actual)) {
    return;
  }

   true ? warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : undefined;
});

var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = (function (doc) {
  var doctype = doc.doctype;

  if (!doctype) {
     true ? warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : undefined;
    return;
  }

  if (doctype.name.toLowerCase() !== 'html') {
     true ? warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : undefined;
  }

  if (doctype.publicId !== '') {
     true ? warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : undefined;
  }
});

function useStartupValidation() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (false) {}

    checkReactVersion(peerDependencies.react, react__WEBPACK_IMPORTED_MODULE_1___default.a.version);
    checkDoctype(document);
  }, []);
}

function usePrevious(current) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(current);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    ref.current = current;
  });
  return ref;
}

var createResponders = function createResponders(props) {
  return {
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};

function getStore(lazyRef) {
  !lazyRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find store from lazy ref') : undefined : void 0;
  return lazyRef.current;
}

function App(props) {
  var uniqueId = props.uniqueId,
      setOnError = props.setOnError;
  var lazyStoreRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(uniqueId);
  var styleMarshal = useStyleMarshal(uniqueId);
  var lazyDispatch = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var callbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
      publishWhileDragging: publishWhileDragging$1,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var dimensionMarshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return createDimensionMarshal(callbacks);
  }, [callbacks]);
  var autoScroller = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return createAutoScroller(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
      move: move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var store = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return createStore({
      dimensionMarshal: dimensionMarshal,
      styleMarshal: styleMarshal,
      announce: announce,
      autoScroller: autoScroller,
      getResponders: getResponders
    });
  }, [announce, autoScroller, dimensionMarshal, getResponders, styleMarshal]);

  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
       true ? warning('unexpected store change') : undefined;
    }
  }

  lazyStoreRef.current = store;
  var tryResetStore = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var current = getStore(lazyStoreRef);
    var state = current.getState();

    if (state.phase !== 'IDLE') {
      current.dispatch(clean$1({
        shouldFlush: true
      }));
    }
  }, []);
  setOnError(tryResetStore);
  var getCanLift = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      marshal: dimensionMarshal,
      style: styleMarshal.styleContext,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed
    };
  }, [dimensionMarshal, getCanLift, getIsMovementAllowed, styleMarshal.styleContext]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return tryResetStore;
  }, [tryResetStore]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppContext.Provider, {
    value: appContext
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    context: StoreContext,
    store: store
  }, props.children));
}

var instanceCount = 0;
function resetServerContext() {
  instanceCount = 0;
}
function DragDropContext(props) {
  var uniqueId = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return instanceCount++;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorBoundary, null, function (setOnError) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      setOnError: setOnError,
      uniqueId: uniqueId
    }, props), props.children);
  });
}

var isEqual$2 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$2('scroll');
var isAuto = isEqual$2('auto');
var isVisible$1 = isEqual$2('visible');

var isEither = function isEither(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};

var isBoth = function isBoth(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  var overflow = {
    overflowX: style.overflowX,
    overflowY: style.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};

var isBodyScrollable = function isBodyScrollable() {
  if (false) {}

  var body = getBodyElement();
  var html = document.documentElement;
  !html ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;

  if (!isElementScrollable(body)) {
    return false;
  }

  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };

  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }

   true ? warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : undefined;
  return false;
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }

  if (el === document.documentElement) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var checkForNestedScrollContainers = (function (scrollable) {
  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

   true ? warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : undefined;
});

var getScroll$1 = (function (el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
});

var getIsFixed = function getIsFixed(el) {
  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);

  if (style.position === 'fixed') {
    return true;
  }

  return getIsFixed(el.parentElement);
};

var getEnv = (function (start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable: closestScrollable,
    isFixedOnPage: isFixedOnPage
  };
});

var getClient = function getClient(targetRef, closestScrollable) {
  var base = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getBox"])(targetRef);

  if (!closestScrollable) {
    return base;
  }

  if (targetRef !== closestScrollable) {
    return base;
  }

  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  var borderBox = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["expand"])(paddingBox, base.border);
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["createBox"])({
    borderBox: borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};

var getDimension = (function (_ref) {
  var ref = _ref.ref,
      descriptor = _ref.descriptor,
      env = _ref.env,
      windowScroll = _ref.windowScroll,
      direction = _ref.direction,
      isDropDisabled = _ref.isDropDisabled,
      isCombineEnabled = _ref.isCombineEnabled,
      shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["withScroll"])(client, windowScroll);

  var closest = function () {
    if (!closestScrollable) {
      return null;
    }

    var frameClient = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getBox"])(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["withScroll"])(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize: scrollSize,
      shouldClipSubject: shouldClipSubject
    };
  }();

  var dimension = getDroppableDimension({
    descriptor: descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction: direction,
    client: client,
    page: page,
    closest: closest
  });
  return dimension;
});

function withoutPlaceholder(placeholder, fn) {
  if (!placeholder) {
    return fn();
  }

  var last = placeholder.style.display;
  placeholder.style.display = 'none';
  var result = fn();
  placeholder.style.display = last;
  return result;
}

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = (function (options) {
  return options.shouldPublishImmediately ? immediate : delayed;
});

function useRequiredContext(Context) {
  var result = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Context);
  !result ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find required context') : undefined : void 0;
  return result;
}

var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

function useDroppableDimensionPublisher(args) {
  var whileDraggingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var appContext = useRequiredContext(AppContext);
  var marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      id: args.droppableId,
      type: args.type
    };
  }, [args.droppableId, args.type]);
  var publishedDescriptorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(descriptor);
  var memoizedUpdateScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (x, y) {
      !whileDraggingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only update scroll when dragging') : undefined : void 0;
      var scroll = {
        x: x,
        y: y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;

    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }

    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var scroll = getClosestScroll();
    memoizedUpdateScroll(scroll.x, scroll.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find scroll options while scrolling') : undefined : void 0;
    var options = dragging.scrollOptions;

    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }

    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (windowScroll, options) {
    !!whileDraggingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot collect a droppable while a drag is occurring') : undefined : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot collect without a droppable ref') : undefined : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref: ref,
      descriptor: descriptor,
      env: env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref,
      descriptor: descriptor,
      env: env,
      windowScroll: windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });

    if (env.closestScrollable) {
      env.closestScrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

      if (true) {
        checkForNestedScrollContainers(env.closestScrollable);
      }
    }

    return dimension;
  }, [descriptor, onClosestScroll, previousRef]);
  var recollect = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (options) {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : undefined : void 0;
    var previous = previousRef.current;

    var execute = function execute() {
      return getDimension({
        ref: dragging.ref,
        descriptor: dragging.descriptor,
        env: dragging.env,
        windowScroll: origin,
        direction: previous.direction,
        isDropDisabled: previous.isDropDisabled,
        isCombineEnabled: previous.isCombineEnabled,
        shouldClipSubject: !previous.ignoreContainerClipping
      });
    };

    if (!options.withoutPlaceholder) {
      return execute();
    }

    return withoutPlaceholder(previous.getPlaceholderRef(), execute);
  }, [previousRef]);
  var dragStopped = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot stop drag when no active drag') : undefined : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;

    if (!closest) {
      return;
    }

    scheduleScrollUpdate.cancel();
    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (change) {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot scroll when there is no drag') : undefined : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    !closest ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot scroll a droppable with no closest scrollable') : undefined : void 0;
    closest.scrollTop += change.y;
    closest.scrollLeft += change.x;
  }, []);
  var callbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
      recollect: recollect,
      dragStopped: dragStopped,
      scroll: scroll
    };
  }, [dragStopped, getDimensionAndWatchScroll, recollect, scroll]);
  useIsomorphicLayoutEffect(function () {
    publishedDescriptorRef.current = descriptor;
    marshal.registerDroppable(descriptor, callbacks);
    return function () {
      if (whileDraggingRef.current) {
         true ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : undefined;
        dragStopped();
      }

      marshal.unregisterDroppable(descriptor);
    };
  }, [callbacks, descriptor, dragStopped, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}

function noop() {}

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var getSize = function getSize(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
      placeholder = _ref.placeholder,
      animate = _ref.animate;

  if (isAnimatingOpenOnMount) {
    return empty;
  }

  if (animate === 'close') {
    return empty;
  }

  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};

var getStyle = function getStyle(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
      placeholder = _ref2.placeholder,
      animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    placeholder: placeholder,
    animate: animate
  });
  return {
    display: placeholder.display,
    boxSizing: 'border-box',
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: '0',
    flexGrow: '0',
    pointerEvents: 'none',
    transition: transitions.placeholder
  };
};

function Placeholder(props) {
  var animateOpenTimerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var tryClearAnimateOpenTimer = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!animateOpenTimerRef.current) {
      return;
    }

    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate,
      onTransitionEnd = props.onTransitionEnd,
      onClose = props.onClose,
      styleContext = props.styleContext;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.animate === 'open'),
      isAnimatingOpenOnMount = _useState[0],
      setIsAnimatingOpenOnMount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isAnimatingOpenOnMount) {
      return noop;
    }

    if (animate !== 'open') {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop;
    }

    if (animateOpenTimerRef.current) {
      return noop;
    }

    animateOpenTimerRef.current = setTimeout(function () {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (event.propertyName !== 'height') {
      return;
    }

    onTransitionEnd();

    if (animate === 'close') {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style = getStyle({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.placeholder.tagName, {
    style: style,
    'data-react-beautiful-dnd-placeholder': styleContext,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}

var Placeholder$1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Placeholder);

var DroppableContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : undefined : void 0;
}

function checkOwnProps(props) {
  !props.droppableId ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A Droppable requires a droppableId prop') : undefined : void 0;
  !(typeof props.isDropDisabled === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'isDropDisabled must be a boolean') : undefined : void 0;
  !(typeof props.isCombineEnabled === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'isCombineEnabled must be a boolean') : undefined : void 0;
  !(typeof props.ignoreContainerClipping === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'ignoreContainerClipping must be a boolean') : undefined : void 0;
}

function checkPlaceholderRef(props, placeholderEl) {
  if (!props.placeholder) {
    return;
  }

  if (placeholderEl) {
    return;
  }

   true ? warning("\n    Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n    DroppableProvided > placeholder could not be found.\n\n    Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n  ") : undefined;
}

function useValidation(_ref) {
  var props = _ref.props,
      getDroppableRef = _ref.getDroppableRef,
      getPlaceholderRef = _ref.getPlaceholderRef;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (true) {
      checkOwnProps(props);
      checkIsValidInnerRef(getDroppableRef());
      checkPlaceholderRef(props, getPlaceholderRef());
    }
  });
}

var AnimateInOut = function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(AnimateInOut, _React$PureComponent);

  function AnimateInOut() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
    };

    _this.onClose = function () {
      if (_this.state.animate !== 'close') {
        return;
      }

      _this.setState({
        isVisible: false
      });
    };

    return _this;
  }

  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: 'none'
      };
    }

    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: 'open'
      };
    }

    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: 'close'
      };
    }

    return {
      isVisible: false,
      animate: 'close',
      data: null
    };
  };

  var _proto = AnimateInOut.prototype;

  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }

    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };

  return AnimateInOut;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

function Droppable(props) {
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
  !appContext ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find app context') : undefined : void 0;
  var styleContext = appContext.style,
      isMovementAllowed = appContext.isMovementAllowed;
  var droppableRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var placeholderRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var children = props.children,
      droppableId = props.droppableId,
      type = props.type,
      direction = props.direction,
      ignoreContainerClipping = props.ignoreContainerClipping,
      isDropDisabled = props.isDropDisabled,
      isCombineEnabled = props.isCombineEnabled,
      snapshot = props.snapshot,
      updateViewportMaxScroll = props.updateViewportMaxScroll;
  var getDroppableRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return droppableRef.current;
  }, []);
  var getPlaceholderRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return placeholderRef.current;
  }, []);
  var setDroppableRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
    droppableRef.current = value;
  }, []);
  var setPlaceholderRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
    placeholderRef.current = value;
  }, []);
  var onPlaceholderTransitionEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (isMovementAllowed()) {
      updateViewportMaxScroll({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed, updateViewportMaxScroll]);
  useDroppableDimensionPublisher({
    droppableId: droppableId,
    type: type,
    direction: direction,
    isDropDisabled: isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    ignoreContainerClipping: ignoreContainerClipping,
    getDroppableRef: getDroppableRef,
    getPlaceholderRef: getPlaceholderRef
  });
  var placeholder = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function (_ref) {
    var onClose = _ref.onClose,
        data = _ref.data,
        animate = _ref.animate;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Placeholder$1, {
      placeholder: data,
      onClose: onClose,
      innerRef: setPlaceholderRef,
      animate: animate,
      styleContext: styleContext,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder,
      droppableProps: {
        'data-react-beautiful-dnd-droppable': styleContext
      }
    };
  }, [placeholder, setDroppableRef, styleContext]);
  var droppableContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      droppableId: droppableId,
      type: type
    };
  }, [droppableId, type]);
  useValidation({
    props: props,
    getDroppableRef: function getDroppableRef() {
      return droppableRef.current;
    },
    getPlaceholderRef: function getPlaceholderRef() {
      return placeholderRef.current;
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot));
}

var isStrictEqual = (function (a, b) {
  return a === b;
});

var whatIsDraggedOverFromResult = (function (result) {
  var combine = result.combine,
      destination = result.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (combine) {
    return combine.droppableId;
  }

  return null;
});

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps = function makeMapStateToProps() {
  var idle = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null
    }
  };

  var idleWithoutAnimation = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, idle, {
    shouldAnimatePlaceholder: false
  });

  var getMapProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (id, isDraggingOver, dragging, snapshot) {
    var isHome = dragging.descriptor.droppableId === id;

    if (isHome) {
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: snapshot
      };
    }

    if (!isDraggingOver) {
      return idle;
    }

    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: snapshot
    };
  });
  var getSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (id, isDraggingOver, dragging) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;
    var draggingOverWith = isDraggingOver ? draggableId : null;
    var draggingFromThisWith = isHome ? draggableId : null;
    return {
      isDraggingOver: isDraggingOver,
      draggingOverWith: draggingOverWith,
      draggingFromThisWith: draggingFromThisWith
    };
  });

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idle;
      }

      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      var snapshot = getSnapshot(id, isDraggingOver, dragging);
      return getMapProps(id, isDraggingOver, dragging, snapshot);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idle;
      }

      var _dragging = getDraggable(completed.critical, state.dimensions);

      var _snapshot = getSnapshot(id, whatIsDraggedOverFromResult(completed.result) === id, _dragging);

      return getMapProps(id, whatIsDraggedOver(completed.impact) === id, _dragging, _snapshot);
    }

    if (state.phase === 'IDLE' && !state.completed && state.shouldFlush) {
      return idleWithoutAnimation;
    }

    if (state.phase === 'IDLE' && state.completed) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idle;
      }

      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.merge);

      if (state.shouldFlush) {
        return idleWithoutAnimation;
      }

      if (wasOver) {
        return wasCombining ? idle : idleWithoutAnimation;
      }

      return idle;
    }

    return idle;
  };

  return selector;
};
var mapDispatchToProps = {
  updateViewportMaxScroll: updateViewportMaxScroll
};
var defaultProps = {
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false
};
var ConnectedDroppable = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;

var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }

  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }

  return transitions.fluid;
};

var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }

  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};

var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }

  return dragging.mode === 'SNAP';
};

function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset = dragging.offset,
      combineWith = dragging.combineWith,
      dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
  var style = {
    position: 'fixed',
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: 'border-box',
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform: transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: 'none'
  };
  return style;
}

function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : 'none'
  };
}

function getStyle$1(mapped) {
  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}

var createEventMarshal = (function () {
  var isMouseDownHandled = false;

  var handle = function handle() {
    !!isMouseDownHandled ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot handle mouse down as it is already handled') : undefined : void 0;
    isMouseDownHandled = true;
  };

  var isHandled = function isHandled() {
    return isMouseDownHandled;
  };

  var reset = function reset() {
    isMouseDownHandled = false;
  };

  return {
    handle: handle,
    isHandled: isHandled,
    reset: reset
  };
});

var getOptions = function getOptions(shared, fromBinding) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shared, fromBinding);
};

var bindEvents = function bindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
  });
};
var unbindEvents = function unbindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.removeEventListener(binding.eventName, binding.fn, options);
  });
};

var createScheduler = (function (callbacks) {
  var memoizedMove = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (x, y) {
    var point = {
      x: x,
      y: y
    };
    callbacks.onMove(point);
  });
  var move = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(function (point) {
    return memoizedMove(point.x, point.y);
  });
  var moveUp = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveUp);
  var moveDown = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveDown);
  var moveRight = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveRight);
  var moveLeft = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveLeft);
  var windowScrollMove = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onWindowScroll);

  var cancel = function cancel() {
    move.cancel();
    moveUp.cancel();
    moveDown.cancel();
    moveRight.cancel();
    moveLeft.cancel();
    windowScrollMove.cancel();
  };

  return {
    move: move,
    moveUp: moveUp,
    moveDown: moveDown,
    moveRight: moveRight,
    moveLeft: moveLeft,
    windowScrollMove: windowScrollMove,
    cancel: cancel
  };
});

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var sharedOptions = {
  capture: true
};
var createPostDragEventPreventer = (function (getWindow) {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    bindEvents(getWindow(), pointerEvents, sharedOptions);
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    unbindEvents(getWindow(), pointerEvents, sharedOptions);
  };

  var pointerEvents = [{
    eventName: 'click',
    fn: function fn(event) {
      event.preventDefault();
      unbind();
    }
  }, {
    eventName: 'mousedown',
    fn: unbind
  }, {
    eventName: 'touchstart',
    fn: unbind
  }];

  var preventNext = function preventNext() {
    if (isBound) {
      unbind();
    }

    bind();
  };

  var preventer = {
    preventNext: preventNext,
    abort: unbind
  };
  return preventer;
});

var sloppyClickThreshold = 5;
var isSloppyClickThresholdExceeded = (function (original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
});

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var primaryButton = 0;

var noop$1 = function noop() {};

var mouseDownMarshal = createEventMarshal();
function useMouseSensor(args) {
  var canStartCapturing = args.canStartCapturing,
      getWindow = args.getWindow,
      callbacks = args.callbacks,
      getShouldRespectForcePress = args.getShouldRespectForcePress,
      onCaptureStart = args.onCaptureStart,
      onCaptureEnd = args.onCaptureEnd;
  var pendingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var isDraggingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var unbindWindowEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(noop$1);
  var getIsCapturing = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return Boolean(pendingRef.current || isDraggingRef.current);
  }, []);
  var schedule = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !!getIsCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not recreate scheduler while capturing') : undefined : void 0;
    return createScheduler(callbacks);
  }, [callbacks, getIsCapturing]);
  var postDragEventPreventer = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return createPostDragEventPreventer(getWindow);
  }, [getWindow]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!getIsCapturing()) {
      return;
    }

    schedule.cancel();
    unbindWindowEventsRef.current();
    var shouldBlockClick = isDraggingRef.current;
    mouseDownMarshal.reset();

    if (shouldBlockClick) {
      postDragEventPreventer.preventNext();
    }

    pendingRef.current = null;
    isDraggingRef.current = false;
    onCaptureEnd();
  }, [getIsCapturing, onCaptureEnd, postDragEventPreventer, schedule]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var wasDragging = isDraggingRef.current;
    stop();

    if (wasDragging) {
      callbacks.onCancel();
    }
  }, [callbacks, stop]);
  var startDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    !!isDraggingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start a drag while dragging') : undefined : void 0;
    var pending = pendingRef.current;
    !pending ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start a drag without a pending drag') : undefined : void 0;
    pendingRef.current = null;
    isDraggingRef.current = true;
    callbacks.onLift({
      clientSelection: pending,
      movementMode: 'FLUID'
    });
  }, [callbacks]);
  var windowBindings = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !!getIsCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not recreate window bindings while capturing') : undefined : void 0;
    var bindings = [{
      eventName: 'mousemove',
      fn: function fn(event) {
        var button = event.button,
            clientX = event.clientX,
            clientY = event.clientY;

        if (button !== primaryButton) {
          return;
        }

        var point = {
          x: clientX,
          y: clientY
        };

        if (isDraggingRef.current) {
          event.preventDefault();
          schedule.move(point);
          return;
        }

        var pending = pendingRef.current;

        if (!pending) {
          stop();
           true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected there to be an active or pending drag when window mousemove event is received') : undefined;
        }

        if (!isSloppyClickThresholdExceeded(pending, point)) {
          return;
        }

        event.preventDefault();
        startDragging();
      }
    }, {
      eventName: 'mouseup',
      fn: function fn(event) {
        var wasDragging = isDraggingRef.current;
        stop();

        if (wasDragging) {
          event.preventDefault();
          callbacks.onDrop();
        }
      }
    }, {
      eventName: 'mousedown',
      fn: function fn(event) {
        if (isDraggingRef.current) {
          event.preventDefault();
        }

        cancel();
      }
    }, {
      eventName: 'keydown',
      fn: function fn(event) {
        if (pendingRef.current) {
          stop();
          return;
        }

        if (event.keyCode === escape) {
          event.preventDefault();
          cancel();
          return;
        }

        preventStandardKeyEvents(event);
      }
    }, {
      eventName: 'resize',
      fn: cancel
    }, {
      eventName: 'scroll',
      options: {
        passive: true,
        capture: false
      },
      fn: function fn(event) {
        if (event.currentTarget !== getWindow()) {
          return;
        }

        if (pendingRef.current) {
          stop();
          return;
        }

        schedule.windowScrollMove();
      }
    }, {
      eventName: 'webkitmouseforcechanged',
      fn: function fn(event) {
        if (event.webkitForce == null || MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN == null) {
           true ? warning('handling a mouse force changed event when it is not supported') : undefined;
          return;
        }

        var forcePressThreshold = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
        var isForcePressing = event.webkitForce >= forcePressThreshold;

        if (!getShouldRespectForcePress()) {
          event.preventDefault();
          return;
        }

        if (isForcePressing) {
          cancel();
        }
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
    return bindings;
  }, [getIsCapturing, cancel, startDragging, schedule, stop, callbacks, getWindow, getShouldRespectForcePress]);
  var bindWindowEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var win = getWindow();
    var options = {
      capture: true
    };

    unbindWindowEventsRef.current = function () {
      return unbindEvents(win, windowBindings, options);
    };

    bindEvents(win, windowBindings, options);
  }, [getWindow, windowBindings]);
  var startPendingDrag = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (point) {
    !!pendingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected there to be no pending drag') : undefined : void 0;
    pendingRef.current = point;
    onCaptureStart(stop);
    bindWindowEvents();
  }, [bindWindowEvents, onCaptureStart, stop]);
  var onMouseDown = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (mouseDownMarshal.isHandled()) {
      return;
    }

    !!getIsCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not be able to perform a mouse down while a drag or pending drag is occurring') : undefined : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    mouseDownMarshal.handle();
    event.preventDefault();
    var point = {
      x: event.clientX,
      y: event.clientY
    };
    startPendingDrag(point);
  }, [canStartCapturing, getIsCapturing, startPendingDrag]);
  return onMouseDown;
}

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

var isAnInteractiveElement = function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
};

var shouldAllowDraggingFromTarget = (function (event, canDragInteractiveElements) {
  if (canDragInteractiveElements) {
    return true;
  }

  var target = event.target,
      currentTarget = event.currentTarget;

  if (!isElement(target) || !isElement(currentTarget)) {
    return true;
  }

  return !isAnInteractiveElement(currentTarget, target);
});

var getBorderBoxCenterPosition = (function (el) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["getRect"])(el.getBoundingClientRect()).center;
});

var _scrollJumpKeys;
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

function noop$2() {}

function useKeyboardSensor(args) {
  var canStartCapturing = args.canStartCapturing,
      getWindow = args.getWindow,
      callbacks = args.callbacks,
      onCaptureStart = args.onCaptureStart,
      onCaptureEnd = args.onCaptureEnd,
      getDraggableRef = args.getDraggableRef;
  var isDraggingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var unbindWindowEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(noop$2);
  var getIsDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return isDraggingRef.current;
  }, []);
  var schedule = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !!getIsDragging() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not recreate scheduler while capturing') : undefined : void 0;
    return createScheduler(callbacks);
  }, [callbacks, getIsDragging]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!getIsDragging()) {
      return;
    }

    schedule.cancel();
    unbindWindowEventsRef.current();
    isDraggingRef.current = false;
    onCaptureEnd();
  }, [getIsDragging, onCaptureEnd, schedule]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var wasDragging = isDraggingRef.current;
    stop();

    if (wasDragging) {
      callbacks.onCancel();
    }
  }, [callbacks, stop]);
  var windowBindings = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !!getIsDragging() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not recreate window bindings when dragging') : undefined : void 0;
    return [{
      eventName: 'mousedown',
      fn: cancel
    }, {
      eventName: 'mouseup',
      fn: cancel
    }, {
      eventName: 'click',
      fn: cancel
    }, {
      eventName: 'touchstart',
      fn: cancel
    }, {
      eventName: 'resize',
      fn: cancel
    }, {
      eventName: 'wheel',
      fn: cancel,
      options: {
        passive: true
      }
    }, {
      eventName: 'scroll',
      options: {
        capture: false
      },
      fn: function fn(event) {
        if (event.currentTarget !== getWindow()) {
          return;
        }

        callbacks.onWindowScroll();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
  }, [callbacks, cancel, getIsDragging, getWindow]);
  var bindWindowEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var win = getWindow();
    var options = {
      capture: true
    };

    unbindWindowEventsRef.current = function () {
      return unbindEvents(win, windowBindings, options);
    };

    bindEvents(win, windowBindings, options);
  }, [getWindow, windowBindings]);
  var startDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    !!isDraggingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start a drag while dragging') : undefined : void 0;
    var ref = getDraggableRef();
    !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start a keyboard drag without a draggable ref') : undefined : void 0;
    isDraggingRef.current = true;
    onCaptureStart(stop);
    bindWindowEvents();
    var center = getBorderBoxCenterPosition(ref);
    callbacks.onLift({
      clientSelection: center,
      movementMode: 'SNAP'
    });
  }, [bindWindowEvents, callbacks, getDraggableRef, onCaptureStart, stop]);
  var onKeyDown = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (!getIsDragging()) {
      if (event.defaultPrevented) {
        return;
      }

      if (!canStartCapturing(event)) {
        return;
      }

      if (event.keyCode !== space) {
        return;
      }

      event.preventDefault();
      startDragging();
      return;
    }

    if (event.keyCode === escape) {
      event.preventDefault();
      cancel();
      return;
    }

    if (event.keyCode === space) {
      event.preventDefault();
      stop();
      callbacks.onDrop();
      return;
    }

    if (event.keyCode === arrowDown) {
      event.preventDefault();
      schedule.moveDown();
      return;
    }

    if (event.keyCode === arrowUp) {
      event.preventDefault();
      schedule.moveUp();
      return;
    }

    if (event.keyCode === arrowRight) {
      event.preventDefault();
      schedule.moveRight();
      return;
    }

    if (event.keyCode === arrowLeft) {
      event.preventDefault();
      schedule.moveLeft();
      return;
    }

    if (scrollJumpKeys[event.keyCode]) {
      event.preventDefault();
      return;
    }

    preventStandardKeyEvents(event);
  }, [callbacks, canStartCapturing, cancel, getIsDragging, schedule, startDragging, stop]);
  return onKeyDown;
}

var timeForLongPress = 150;
var forcePressThreshold = 0.15;
var touchStartMarshal = createEventMarshal();

var noop$3 = function noop() {};

var webkitHack = function () {
  var stub = {
    preventTouchMove: noop$3,
    releaseTouchMove: noop$3
  };

  if (typeof window === 'undefined') {
    return stub;
  }

  if (!('ontouchstart' in window)) {
    return stub;
  }

  var isBlocking = false;
  window.addEventListener('touchmove', function (event) {
    if (!isBlocking) {
      return;
    }

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
  }, {
    passive: false,
    capture: false
  });

  var preventTouchMove = function preventTouchMove() {
    isBlocking = true;
  };

  var releaseTouchMove = function releaseTouchMove() {
    isBlocking = false;
  };

  return {
    preventTouchMove: preventTouchMove,
    releaseTouchMove: releaseTouchMove
  };
}();

function useTouchSensor(args) {
  var callbacks = args.callbacks,
      getWindow = args.getWindow,
      canStartCapturing = args.canStartCapturing,
      getShouldRespectForcePress = args.getShouldRespectForcePress,
      onCaptureStart = args.onCaptureStart,
      onCaptureEnd = args.onCaptureEnd;
  var pendingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var isDraggingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var hasMovedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var unbindWindowEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(noop$3);
  var getIsCapturing = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return Boolean(pendingRef.current || isDraggingRef.current);
  }, []);
  var postDragClickPreventer = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return createPostDragEventPreventer(getWindow);
  }, [getWindow]);
  var schedule = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !!getIsCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not recreate scheduler while capturing') : undefined : void 0;
    return createScheduler(callbacks);
  }, [callbacks, getIsCapturing]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!getIsCapturing()) {
      return;
    }

    schedule.cancel();
    unbindWindowEventsRef.current();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    hasMovedRef.current = false;
    onCaptureEnd();

    if (isDraggingRef.current) {
      postDragClickPreventer.preventNext();
      isDraggingRef.current = false;
      return;
    }

    var pending = pendingRef.current;
    !pending ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected a pending drag') : undefined : void 0;
    clearTimeout(pending.longPressTimerId);
    pendingRef.current = null;
  }, [getIsCapturing, onCaptureEnd, postDragClickPreventer, schedule]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var wasDragging = isDraggingRef.current;
    stop();

    if (wasDragging) {
      callbacks.onCancel();
    }
  }, [callbacks, stop]);
  var windowBindings = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    !!getIsCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not recreate window bindings while capturing') : undefined : void 0;
    var bindings = [{
      eventName: 'touchmove',
      options: {
        passive: false,
        capture: false
      },
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          stop();
          return;
        }

        if (!hasMovedRef.current) {
          hasMovedRef.current = true;
        }

        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        event.preventDefault();
        schedule.move(point);
      }
    }, {
      eventName: 'touchend',
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          stop();
          return;
        }

        event.preventDefault();
        stop();
        callbacks.onDrop();
      }
    }, {
      eventName: 'touchcancel',
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          stop();
          return;
        }

        event.preventDefault();
        cancel();
      }
    }, {
      eventName: 'touchstart',
      fn: cancel
    }, {
      eventName: 'orientationchange',
      fn: cancel
    }, {
      eventName: 'resize',
      fn: cancel
    }, {
      eventName: 'scroll',
      options: {
        passive: true,
        capture: false
      },
      fn: function fn() {
        if (pendingRef.current) {
          stop();
          return;
        }

        schedule.windowScrollMove();
      }
    }, {
      eventName: 'contextmenu',
      fn: function fn(event) {
        event.preventDefault();
      }
    }, {
      eventName: 'keydown',
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          cancel();
          return;
        }

        if (event.keyCode === escape) {
          event.preventDefault();
        }

        cancel();
      }
    }, {
      eventName: 'touchforcechange',
      fn: function fn(event) {
        if (!getShouldRespectForcePress()) {
          event.preventDefault();
          return;
        }

        if (hasMovedRef.current) {
          event.preventDefault();
          return;
        }

        var touch = event.touches[0];

        if (touch.force >= forcePressThreshold) {
          cancel();
        }
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
    return bindings;
  }, [callbacks, cancel, getIsCapturing, getShouldRespectForcePress, schedule, stop]);
  var bindWindowEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var win = getWindow();
    var options = {
      capture: true
    };

    unbindWindowEventsRef.current = function () {
      return unbindEvents(win, windowBindings, options);
    };

    bindEvents(win, windowBindings, options);
  }, [getWindow, windowBindings]);
  var startDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var pending = pendingRef.current;
    !pending ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start a drag without a pending drag') : undefined : void 0;
    isDraggingRef.current = true;
    pendingRef.current = null;
    hasMovedRef.current = false;
    callbacks.onLift({
      clientSelection: pending.point,
      movementMode: 'FLUID'
    });
  }, [callbacks]);
  var startPendingDrag = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    !!pendingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected there to be no pending drag') : undefined : void 0;
    var touch = event.touches[0];
    var clientX = touch.clientX,
        clientY = touch.clientY;
    var point = {
      x: clientX,
      y: clientY
    };
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    var pending = {
      point: point,
      longPressTimerId: longPressTimerId
    };
    pendingRef.current = pending;
    onCaptureStart(stop);
    bindWindowEvents();
  }, [bindWindowEvents, onCaptureStart, startDragging, stop]);

  var onTouchStart = function onTouchStart(event) {
    if (touchStartMarshal.isHandled()) {
      return;
    }

    !!getIsCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not be able to perform a touch start while a drag or pending drag is occurring') : undefined : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    touchStartMarshal.handle();
    webkitHack.preventTouchMove();
    startPendingDrag(event);
  };

  return onTouchStart;
}

function isSvgElement(el) {
  return Boolean(getWindowFromEl(el).SVGElement) && el instanceof getWindowFromEl(el).SVGElement;
}

var selector = "[" + dragHandle + "]";

var throwIfSVG = function throwIfSVG(el) {
  !!isSvgElement(el) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "A drag handle cannot be an SVGElement: it has inconsistent focus support.\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/dragging-svgs.md") : undefined : void 0;
};

var getDragHandleRef = function getDragHandleRef(draggableRef) {
  if (draggableRef.hasAttribute(dragHandle)) {
    throwIfSVG(draggableRef);
    return draggableRef;
  }

  var el = draggableRef.querySelector(selector);
  throwIfSVG(draggableRef);
  !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "\n      Cannot find drag handle element inside of Draggable.\n      Please be sure to apply the {...provided.dragHandleProps} to your Draggable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md\n    ") : undefined : void 0;
  !isHtmlElement(el) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A drag handle must be a HTMLElement') : undefined : void 0;
  return el;
};

function useValidation$1(_ref) {
  var isEnabled = _ref.isEnabled,
      getDraggableRef = _ref.getDraggableRef;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (true) {
      if (!isEnabled) {
        return;
      }

      var draggableRef = getDraggableRef();
      !draggableRef ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Drag handle was unable to find draggable ref') : undefined : void 0;
      getDragHandleRef(draggableRef);
    }
  }, [getDraggableRef, isEnabled]);
}

var retainingFocusFor = null;
var listenerOptions = {
  capture: true
};

var clearRetentionOnFocusChange = function () {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    window.addEventListener('focus', onWindowFocusChange, listenerOptions);
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    window.removeEventListener('focus', onWindowFocusChange, listenerOptions);
  };

  var onWindowFocusChange = function onWindowFocusChange() {
    unbind();
    retainingFocusFor = null;
  };

  var result = function result() {
    return bind();
  };

  result.cancel = function () {
    return unbind();
  };

  return result;
}();

var retain = function retain(id) {
  retainingFocusFor = id;
  clearRetentionOnFocusChange();
};

var tryRestoreFocus = function tryRestoreFocus(id, draggableRef) {
  if (!retainingFocusFor) {
    return;
  }

  if (id !== retainingFocusFor) {
    return;
  }

  retainingFocusFor = null;
  clearRetentionOnFocusChange.cancel();
  var dragHandleRef = getDragHandleRef(draggableRef);

  if (!dragHandleRef) {
     true ? warning('Could not find drag handle in the DOM to focus on it') : undefined;
    return;
  }

  dragHandleRef.focus();
};

var retainer = {
  retain: retain,
  tryRestoreFocus: tryRestoreFocus
};

function noop$4() {}

function useFocusRetainer(args) {
  var isFocusedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var lastArgsRef = usePrevious(args);
  var getDraggableRef = args.getDraggableRef;
  var onFocus = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    isFocusedRef.current = true;
  }, []);
  var onBlur = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    isFocusedRef.current = false;
  }, []);
  useIsomorphicLayoutEffect(function () {
    var first = lastArgsRef.current;

    if (!first.isEnabled) {
      return noop$4;
    }

    var draggable = getDraggableRef();
    !draggable ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Drag handle could not obtain draggable ref') : undefined : void 0;
    var dragHandle = getDragHandleRef(draggable);
    retainer.tryRestoreFocus(first.draggableId, dragHandle);
    return function () {
      var last = lastArgsRef.current;

      var shouldRetainFocus = function () {
        if (!last.isEnabled) {
          return false;
        }

        if (!isFocusedRef.current) {
          return false;
        }

        return last.isDragging || last.isDropAnimating;
      }();

      if (shouldRetainFocus) {
        retainer.retain(last.draggableId);
      }
    };
  }, [getDraggableRef, lastArgsRef]);
  var lastDraggableRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  useIsomorphicLayoutEffect(function () {
    if (!lastDraggableRef.current) {
      return;
    }

    var draggableRef = getDraggableRef();

    if (!draggableRef) {
      return;
    }

    if (draggableRef === lastDraggableRef.current) {
      return;
    }

    if (isFocusedRef.current && lastArgsRef.current.isEnabled) {
      getDragHandleRef(draggableRef).focus();
    }
  });
  useIsomorphicLayoutEffect(function () {
    lastDraggableRef.current = getDraggableRef();
  });
  return {
    onBlur: onBlur,
    onFocus: onFocus
  };
}

function preventHtml5Dnd(event) {
  event.preventDefault();
}

function useDragHandle(args) {
  var capturingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var onCaptureStart = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (abort) {
    !!capturingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start capturing while something else is') : undefined : void 0;
    capturingRef.current = {
      abort: abort
    };
  }, []);
  var onCaptureEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    !capturingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot stop capturing while nothing is capturing') : undefined : void 0;
    capturingRef.current = null;
  }, []);
  var abortCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    !capturingRef.current ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot abort capture when there is none') : undefined : void 0;
    capturingRef.current.abort();
  }, []);

  var _useRequiredContext = useRequiredContext(AppContext),
      canLift = _useRequiredContext.canLift,
      styleContext = _useRequiredContext.style;

  var isDragging = args.isDragging,
      isEnabled = args.isEnabled,
      draggableId = args.draggableId,
      callbacks = args.callbacks,
      getDraggableRef = args.getDraggableRef,
      getShouldRespectForcePress = args.getShouldRespectForcePress,
      canDragInteractiveElements = args.canDragInteractiveElements;
  var lastArgsRef = usePrevious(args);
  useValidation$1({
    isEnabled: isEnabled,
    getDraggableRef: getDraggableRef
  });
  var getWindow = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return getWindowFromEl(getDraggableRef());
  }, [getDraggableRef]);
  var canStartCapturing = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (!isEnabled) {
      return false;
    }

    if (capturingRef.current) {
      return false;
    }

    if (!canLift(draggableId)) {
      return false;
    }

    return shouldAllowDraggingFromTarget(event, canDragInteractiveElements);
  }, [canDragInteractiveElements, canLift, draggableId, isEnabled]);

  var _useFocusRetainer = useFocusRetainer(args),
      onBlur = _useFocusRetainer.onBlur,
      onFocus = _useFocusRetainer.onFocus;

  var mouseArgs = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      callbacks: callbacks,
      getDraggableRef: getDraggableRef,
      getWindow: getWindow,
      canStartCapturing: canStartCapturing,
      onCaptureStart: onCaptureStart,
      onCaptureEnd: onCaptureEnd,
      getShouldRespectForcePress: getShouldRespectForcePress
    };
  }, [callbacks, getDraggableRef, getWindow, canStartCapturing, onCaptureStart, onCaptureEnd, getShouldRespectForcePress]);
  var onMouseDown = useMouseSensor(mouseArgs);
  var keyboardArgs = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      callbacks: callbacks,
      getDraggableRef: getDraggableRef,
      getWindow: getWindow,
      canStartCapturing: canStartCapturing,
      onCaptureStart: onCaptureStart,
      onCaptureEnd: onCaptureEnd
    };
  }, [callbacks, canStartCapturing, getDraggableRef, getWindow, onCaptureEnd, onCaptureStart]);
  var onKeyDown = useKeyboardSensor(keyboardArgs);
  var touchArgs = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      callbacks: callbacks,
      getDraggableRef: getDraggableRef,
      getWindow: getWindow,
      canStartCapturing: canStartCapturing,
      getShouldRespectForcePress: getShouldRespectForcePress,
      onCaptureStart: onCaptureStart,
      onCaptureEnd: onCaptureEnd
    };
  }, [callbacks, getDraggableRef, getWindow, canStartCapturing, getShouldRespectForcePress, onCaptureStart, onCaptureEnd]);
  var onTouchStart = useTouchSensor(touchArgs);
  useIsomorphicLayoutEffect(function () {
    return function () {
      if (!capturingRef.current) {
        return;
      }

      abortCapture();

      if (lastArgsRef.current.isDragging) {
        lastArgsRef.current.callbacks.onCancel();
      }
    };
  }, []);

  if (!isEnabled && capturingRef.current) {
    abortCapture();

    if (lastArgsRef.current.isDragging) {
       true ? warning('You have disabled dragging on a Draggable while it was dragging. The drag has been cancelled') : undefined;
      callbacks.onCancel();
    }
  }

  useIsomorphicLayoutEffect(function () {
    if (!isDragging && capturingRef.current) {
      abortCapture();
    }
  }, [abortCapture, isDragging]);
  var props = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (!isEnabled) {
      return null;
    }

    return {
      onMouseDown: onMouseDown,
      onKeyDown: onKeyDown,
      onTouchStart: onTouchStart,
      onFocus: onFocus,
      onBlur: onBlur,
      tabIndex: 0,
      'data-react-beautiful-dnd-drag-handle': styleContext,
      'aria-roledescription': 'Draggable item. Press space bar to lift',
      draggable: false,
      onDragStart: preventHtml5Dnd
    };
  }, [isEnabled, onBlur, onFocus, onKeyDown, onMouseDown, onTouchStart, styleContext]);
  return props;
}

function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }

  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["calculateBox"])(borderBox, computedStyles);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_7__["withScroll"])(client, windowScroll);
  var placeholder = {
    client: client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor: descriptor,
    placeholder: placeholder,
    displaceBy: displaceBy,
    client: client,
    page: page
  };
  return dimension;
}

function useDraggableDimensionPublisher(args) {
  var draggableId = args.draggableId,
      index = args.index,
      getDraggableRef = args.getDraggableRef;
  var appContext = useRequiredContext(AppContext);
  var marshal = appContext.marshal;
  var droppableContext = useRequiredContext(DroppableContext);
  var droppableId = droppableContext.droppableId,
      type = droppableContext.type;
  var descriptor = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var result = {
      id: draggableId,
      droppableId: droppableId,
      type: type,
      index: index
    };
    return result;
  }, [draggableId, droppableId, index, type]);
  var publishedDescriptorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(descriptor);
  var makeDimension = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (windowScroll) {
    var latest = publishedDescriptorRef.current;
    var el = getDraggableRef();
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get dimension when no ref is set') : undefined : void 0;
    return getDimension$1(latest, el, windowScroll);
  }, [getDraggableRef]);
  useIsomorphicLayoutEffect(function () {
    marshal.registerDraggable(publishedDescriptorRef.current, makeDimension);
    return function () {
      return marshal.unregisterDraggable(publishedDescriptorRef.current);
    };
  }, [makeDimension, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (publishedDescriptorRef.current === descriptor) {
      return;
    }

    var previous = publishedDescriptorRef.current;
    publishedDescriptorRef.current = descriptor;
    marshal.updateDraggable(previous, descriptor, makeDimension);
  }, [descriptor, makeDimension, marshal]);
}

function checkOwnProps$1(props) {
  !_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default()(props.index) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Draggable requires an integer index prop') : undefined : void 0;
  !props.draggableId ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Draggable requires a draggableId') : undefined : void 0;
  !(typeof props.isDragDisabled === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'isDragDisabled must be a boolean') : undefined : void 0;
}

function checkForOutdatedProps(props) {
  if (Object.prototype.hasOwnProperty.call(props, 'shouldRespectForceTouch')) {
     true ? warning('shouldRespectForceTouch has been renamed to shouldRespectForcePress') : undefined;
  }
}

function useValidation$2(props, getRef) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (true) {
      checkOwnProps$1(props);
      checkForOutdatedProps(props);
      checkIsValidInnerRef(getRef());
    }
  });
}

function Draggable(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var setRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (el) {
    ref.current = el;
  }, []);
  var getRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return ref.current;
  }, []);
  var appContext = useRequiredContext(AppContext);
  useValidation$2(props, getRef);
  var children = props.children,
      draggableId = props.draggableId,
      isDragDisabled = props.isDragDisabled,
      shouldRespectForcePress = props.shouldRespectForcePress,
      canDragInteractiveElements = props.disableInteractiveElementBlocking,
      index = props.index,
      mapped = props.mapped,
      moveUpAction = props.moveUp,
      moveAction = props.move,
      dropAction = props.drop,
      moveDownAction = props.moveDown,
      moveRightAction = props.moveRight,
      moveLeftAction = props.moveLeft,
      moveByWindowScrollAction = props.moveByWindowScroll,
      liftAction = props.lift,
      dropAnimationFinishedAction = props.dropAnimationFinished;
  var forPublisher = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      draggableId: draggableId,
      index: index,
      getDraggableRef: getRef
    };
  }, [draggableId, getRef, index]);
  useDraggableDimensionPublisher(forPublisher);
  var onLift = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (options) {
    start('LIFT');
    var el = ref.current;
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
    !!isDragDisabled ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot lift a Draggable when it is disabled') : undefined : void 0;
    var clientSelection = options.clientSelection,
        movementMode = options.movementMode;
    liftAction({
      id: draggableId,
      clientSelection: clientSelection,
      movementMode: movementMode
    });
    finish('LIFT');
  }, [draggableId, isDragDisabled, liftAction]);
  var getShouldRespectForcePress = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return shouldRespectForcePress;
  }, [shouldRespectForcePress]);
  var callbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      onLift: onLift,
      onMove: function onMove(clientSelection) {
        return moveAction({
          client: clientSelection
        });
      },
      onDrop: function onDrop() {
        return dropAction({
          reason: 'DROP'
        });
      },
      onCancel: function onCancel() {
        return dropAction({
          reason: 'CANCEL'
        });
      },
      onMoveUp: moveUpAction,
      onMoveDown: moveDownAction,
      onMoveRight: moveRightAction,
      onMoveLeft: moveLeftAction,
      onWindowScroll: function onWindowScroll() {
        return moveByWindowScrollAction({
          newScroll: getWindowScroll()
        });
      }
    };
  }, [dropAction, moveAction, moveByWindowScrollAction, moveDownAction, moveLeftAction, moveRightAction, moveUpAction, onLift]);
  var isDragging = mapped.type === 'DRAGGING';
  var isDropAnimating = mapped.type === 'DRAGGING' && Boolean(mapped.dropping);
  var dragHandleArgs = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      draggableId: draggableId,
      isDragging: isDragging,
      isDropAnimating: isDropAnimating,
      isEnabled: !isDragDisabled,
      callbacks: callbacks,
      getDraggableRef: getRef,
      canDragInteractiveElements: canDragInteractiveElements,
      getShouldRespectForcePress: getShouldRespectForcePress
    };
  }, [callbacks, canDragInteractiveElements, draggableId, getRef, getShouldRespectForcePress, isDragDisabled, isDragging, isDropAnimating]);
  var dragHandleProps = useDragHandle(dragHandleArgs);
  var onMoveEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (mapped.type !== 'DRAGGING') {
      return;
    }

    if (!mapped.dropping) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var style = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        'data-react-beautiful-dnd-draggable': appContext.style,
        style: style,
        onTransitionEnd: onTransitionEnd
      },
      dragHandleProps: dragHandleProps
    };
    return result;
  }, [appContext.style, dragHandleProps, mapped, onMoveEnd, setRef]);
  return children(provided, mapped.snapshot);
}

var getCombineWithFromResult = function getCombineWithFromResult(result) {
  return result.combine ? result.combine.draggableId : null;
};

var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
  return impact.merge ? impact.merge.combine.draggableId : null;
};

var makeMapStateToProps$1 = function makeMapStateToProps() {
  var getDraggingSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (mode, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode: mode,
      draggingOver: draggingOver,
      combineWith: combineWith,
      combineTargetFor: null
    };
  });
  var getSecondarySnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (combineTargetFor) {
    return {
      isDragging: false,
      isDropAnimating: false,
      dropAnimation: null,
      mode: null,
      draggingOver: null,
      combineTargetFor: combineTargetFor,
      combineWith: null
    };
  });
  var defaultMapProps = {
    mapped: {
      type: 'SECONDARY',
      offset: origin,
      combineTargetFor: null,
      shouldAnimateDisplacement: true,
      snapshot: getSecondarySnapshot(null)
    }
  };
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getDraggingProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (offset, mode, dimension, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: 'DRAGGING',
        dropping: null,
        draggingOver: draggingOver,
        combineWith: combineWith,
        mode: mode,
        offset: offset,
        dimension: dimension,
        forceShouldAnimate: forceShouldAnimate,
        snapshot: getDraggingSnapshot(mode, draggingOver, combineWith, null)
      }
    };
  });
  var getSecondaryProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      mapped: {
        type: 'SECONDARY',
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement,
        snapshot: getSecondarySnapshot(combineTargetFor)
      }
    };
  });

  var getSecondaryMovement = function getSecondaryMovement(ownId, draggingId, impact) {
    var map = impact.movement.map;
    var displacement = map[ownId];
    var movement = impact.movement;
    var merge = impact.merge;
    var isCombinedWith = Boolean(merge && merge.combine.draggableId === ownId);
    var displacedBy = movement.displacedBy.point;
    var offset = memoizedOffset(displacedBy.x, displacedBy.y);

    if (isCombinedWith) {
      return getSecondaryProps(displacement ? offset : origin, draggingId, displacement ? displacement.shouldAnimate : true);
    }

    if (!displacement) {
      return null;
    }

    if (!displacement.isVisible) {
      return null;
    }

    return getSecondaryProps(offset, null, displacement.shouldAnimate);
  };

  var draggingSelector = function draggingSelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var mode = state.movementMode;
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getDraggingProps(memoizedOffset(offset.x, offset.y), mode, dimension, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var _mode = result.mode;

      var _draggingOver = whatIsDraggedOverFromResult(result);

      var _combineWith = getCombineWithFromResult(result);

      var duration = state.dropDuration;
      var dropping = {
        duration: duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: 'DRAGGING',
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping: dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: _mode,
          forceShouldAnimate: null,
          snapshot: getDraggingSnapshot(_mode, _draggingOver, _combineWith, dropping)
        }
      };
    }

    return null;
  };

  var secondarySelector = function secondarySelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getSecondaryMovement(ownProps.draggableId, state.critical.draggable.id, state.impact);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getSecondaryMovement(ownProps.draggableId, completed.result.draggableId, completed.impact);
    }

    return null;
  };

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || defaultMapProps;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  lift: lift,
  move: move,
  moveUp: moveUp,
  moveDown: moveDown,
  moveLeft: moveLeft,
  moveRight: moveRight,
  moveByWindowScroll: moveByWindowScroll,
  drop: drop,
  dropAnimationFinished: dropAnimationFinished
};
var defaultProps$1 = {
  isDragDisabled: false,
  disableInteractiveElementBlocking: false,
  shouldRespectForcePress: false
};
var ConnectedDraggable = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
ConnectedDraggable.defaultProps = defaultProps$1;




/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/number/is-integer.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/date/now.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/date/now.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/number/is-integer.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/number/is-integer.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-integer */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.number.is-integer.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js").Number.isInteger;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/values.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/fn/object/values.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_a-function.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_a-function.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_an-object.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_an-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_array-includes.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_array-includes.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_cof.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_cof.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_ctx.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_ctx.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_defined.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_defined.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_dom-create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_dom-create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_fails.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_fails.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_global.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_global.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_has.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_has.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_hide.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_hide.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_html.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_html.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_iobject.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_iobject.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-integer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-integer.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-object.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_library.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_library.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-assign.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-assign.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dp.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dp.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dps.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dps.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-gops.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-gops.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-pie.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-pie.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-sap.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-sap.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-to-array.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-to-array.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_property-desc.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_property-desc.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared-key.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared-key.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_shared.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-integer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-integer.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-length.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-length.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-object.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-primitive.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-primitive.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_uid.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_uid.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.date.now.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.date.now.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.number.is-integer.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.number.is-integer.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es7.object.values.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/es7.object.values.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/react-beautiful-dnd/node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/memoize-one/dist/memoize-one.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/*! exports provided: useCallback, useCallbackOne, useMemo, useMemoOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackOne", function() { return useCallbackOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoOne", function() { return useMemoOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var committed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initial);
  var isInputMatch = Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = isInputMatch ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "./pages/apps/design/editor.tsx":
/*!**************************************!*\
  !*** ./pages/apps/design/editor.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_lib_LForm_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/lib/LForm/style */ "./components/lib/LForm/style/index.ts");
/* harmony import */ var components_lib_LForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/lib/LForm */ "./components/lib/LForm/index.tsx");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muka/lib/omit */ "./muka/lib/omit.ts");
/* harmony import */ var components_lib_Carousel_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/lib/Carousel/style */ "./components/lib/Carousel/style/index.ts");
/* harmony import */ var components_lib_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/lib/Carousel */ "./components/lib/Carousel/index.tsx");
/* harmony import */ var components_lib_SearchBar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/lib/SearchBar/style */ "./components/lib/SearchBar/style/index.ts");
/* harmony import */ var components_lib_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/lib/SearchBar */ "./components/lib/SearchBar/index.tsx");
/* harmony import */ var components_lib_Upload_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/lib/Upload/style */ "./components/lib/Upload/style/index.ts");
/* harmony import */ var components_lib_Upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/lib/Upload */ "./components/lib/Upload/index.tsx");
/* harmony import */ var components_lib_Dialog_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/lib/Dialog/style */ "./components/lib/Dialog/style/index.ts");
/* harmony import */ var components_lib_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/lib/Dialog */ "./components/lib/Dialog/index.tsx");
/* harmony import */ var components_lib_ScrollView_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/lib/ScrollView/style */ "./components/lib/ScrollView/style/index.ts");
/* harmony import */ var components_lib_ScrollView_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(components_lib_ScrollView_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_lib_ScrollView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/lib/ScrollView */ "./components/lib/ScrollView/index.tsx");
/* harmony import */ var components_lib_Image_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/lib/Image/style */ "./components/lib/Image/style/index.ts");
/* harmony import */ var components_lib_Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/lib/Image */ "./components/lib/Image/index.tsx");
/* harmony import */ var components_lib_Button_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/lib/Button/style */ "./components/lib/Button/style/index.ts");
/* harmony import */ var components_lib_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/lib/Button */ "./components/lib/Button/index.tsx");
/* harmony import */ var components_lib_TabBar_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/lib/TabBar/style */ "./components/lib/TabBar/style/index.ts");
/* harmony import */ var components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/lib/TabBar */ "./components/lib/TabBar/index.tsx");
/* harmony import */ var components_lib_BoxLine_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/lib/BoxLine/style */ "./components/lib/BoxLine/style/index.ts");
/* harmony import */ var components_lib_BoxLine__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/lib/BoxLine */ "./components/lib/BoxLine/index.tsx");
/* harmony import */ var components_lib_Icon_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/lib/Icon/style */ "./components/lib/Icon/style/index.ts");
/* harmony import */ var components_lib_Icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/lib/Icon */ "./components/lib/Icon/index.tsx");
/* harmony import */ var components_lib_Pagination_style__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/lib/Pagination/style */ "./components/lib/Pagination/style/index.ts");
/* harmony import */ var components_lib_Pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/lib/Pagination */ "./components/lib/Pagination/index.tsx");
/* harmony import */ var components_lib_Drag_style__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/lib/Drag/style */ "./components/lib/Drag/style/index.ts");
/* harmony import */ var components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/lib/Drag */ "./components/lib/Drag/index.tsx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var components_lib_Alert_style__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/lib/Alert/style */ "./components/lib/Alert/style/index.ts");
/* harmony import */ var components_lib_Alert__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! components/lib/Alert */ "./components/lib/Alert/index.tsx");
/* harmony import */ var components_lib_NavBar_style__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! components/lib/NavBar/style */ "./components/lib/NavBar/style/index.ts");
/* harmony import */ var components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! components/lib/NavBar */ "./components/lib/NavBar/index.tsx");
/* harmony import */ var components_lib_LabelHeader_style__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! components/lib/LabelHeader/style */ "./components/lib/LabelHeader/style/index.ts");
/* harmony import */ var components_lib_LabelHeader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! components/lib/LabelHeader */ "./components/lib/LabelHeader/index.tsx");
/* harmony import */ var components_lib_Label_style__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! components/lib/Label/style */ "./components/lib/Label/style/index.ts");
/* harmony import */ var components_lib_Label__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! components/lib/Label */ "./components/lib/Label/index.tsx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var muka_lib_isArray__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! muka/lib/isArray */ "./muka/lib/isArray.ts");
/* harmony import */ var muka_lib_isString__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! muka/lib/isString */ "./muka/lib/isString.ts");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var layouts_PageHead__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! layouts/PageHead */ "./layouts/PageHead/index.tsx");
/* harmony import */ var layouts_PageLayout__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! layouts/PageLayout */ "./layouts/PageLayout/index.tsx");
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! utils/axios */ "./utils/axios.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_action_design__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! store/action/design */ "./store/action/design/index.ts");
/* harmony import */ var _data_componentData__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../../data/componentData */ "./data/componentData.tsx");
/* harmony import */ var _editComponent__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../editComponent */ "./pages/apps/editComponent.tsx");
/* harmony import */ var layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! layouts/PageLayout/index.less */ "./layouts/PageLayout/index.less");
/* harmony import */ var layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../index.less */ "./pages/apps/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./index.less */ "./pages/apps/design/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_68__);






































































var confirm = antd_lib_modal__WEBPACK_IMPORTED_MODULE_53___default.a.confirm;

var reorder = function reorder(list, startIndex, endIndex) {
  var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51___default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_50__["default"])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

var AppsDesign =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_48__["default"])(AppsDesign, _Component);

  function AppsDesign() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_43__["default"])(this, AppsDesign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_45__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_46__["default"])(AppsDesign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "state", {
      components: [],
      icons: [],
      images: [],
      componentName: '',
      selected: 0,
      type: 'LForm',
      searchSelect: false,
      uploadDialog: false,
      pageCurrent: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "index", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "listIndex", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "componentType", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "exFun", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "loading", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabBarChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.mark(function _callee(val) {
        var images, _data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                images = _this.state.images;

                if (!(val === 1 && images.length === 0 && !_this.loading)) {
                  _context.next = 15;
                  break;
                }

                _this.loading = true;
                _context.prev = 3;
                _context.next = 6;
                return Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["default"])('image/globalFind');

              case 6:
                _data = _context.sent;
                _this.loading = false;

                _this.setState({
                  images: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(_data.data)
                });

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                _this.loading = false;
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleUploadSuccess", function (val, data) {
      var images = _this.state.images;
      var devia = Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["deviaDecrypt"])(data.devia);
      data = JSON.parse(Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["decrypt"])(data.value, data.secret, devia));
      images.unshift(data.data);

      _this.setState({
        images: images
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "getItem", function (exFun) {
      var componentName = _this.state.componentName;
      _this.exFun = exFun;

      if (!componentName) {
        return [];
      }

      var data = Object(_data_componentData__WEBPACK_IMPORTED_MODULE_64__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this));
      return data[componentName];
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleShowUpload", function (field) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])({}, field, true));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "getDialogData",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.mark(function _callee2() {
      var _data2;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["default"])('icons/find');

            case 3:
              _data2 = _context2.sent;

              _this.setState({
                icons: _data2.data
              });

              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleDragEnter", function () {// this.setState({
      //     showLine: true
      // })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleFormChange", function () {
      var _this$props = _this.props,
          componentData = _this$props.componentData,
          setComponentData = _this$props.setComponentData;
      var componentName = _this.state.componentName;

      var pageProps = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(componentData.pagePorps);

      var data = {};

      if (_this.exFun) {
        var val = _this.exFun.getFieldValue();

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39___default()(val).map(function (i) {
          var key = i.split('.');

          if (key.length > 1) {
            if (val[i]) {
              if (data[key[0]]) {
                data[key[0]][key[1]] = _this.getStyleValue(key[1], val[i]);
              } else {
                data[key[0]] = {};
                data[key[0]][key[1]] = _this.getStyleValue(key[1], val[i]);
              }
            }
          } else {
            data[i] = val[i];
          }

          if (componentName === 'SearchBar' && key[0] === 'extendRadio') {
            if (val[i] === 'label' && !Object(muka_lib_isString__WEBPACK_IMPORTED_MODULE_38__["default"])(val['right'])) {
              data['right'] = '搜索';
            } else if (val[i] === 'actions' && !Object(muka_lib_isArray__WEBPACK_IMPORTED_MODULE_37__["default"])(val['right'])) {
              data['right'] = [{
                type: 'icon',
                url: 'msg',
                color: '#fff'
              }];
            }
          }
        });

        delete data['extendRadio'];
      }

      pageProps[_this.index].props = lodash_assign__WEBPACK_IMPORTED_MODULE_55___default()(pageProps[_this.index].props, data);
      componentData.pagePorps = pageProps;
      setComponentData(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__["default"])({}, componentData));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "setComProps", function (data, dialogName) {
      var _this$props2 = _this.props,
          componentData = _this$props2.componentData,
          setComponentData = _this$props2.setComponentData;
      var right = componentData.pagePorps[_this.index].props.right;
      right[_this.listIndex] = data;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])({}, dialogName, false), function () {
        setComponentData(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54___default()(componentData));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handlePickerChange", function (data) {
      var components = _this.state.components;
      var value = data.map(function (i) {
        return i.url;
      });
      components[_this.index].props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__["default"])({}, components[_this.index].props, {
        value: value
      });

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "getPageComponentItem", function (fn) {
      var componentData = _this.props.componentData;
      return [{
        component: 'Input',
        label: '页面名称',
        props: {
          placeholder: '请输入名称',
          value: componentData.name,
          maxLength: 16
        },
        additional: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
          color: "#1890ff",
          style: {
            paddingLeft: 0
          }
        }, "\u6CE8\u610F\uFF1A\u9875\u9762\u540D\u79F0\u662F\u4FBF\u4E8E\u540E\u53F0\u67E5\u627E\u3002"),
        field: 'name'
      }, {
        component: 'Textarea',
        label: '页面介绍',
        props: {
          placeholder: '请输入标题',
          value: componentData.introduce,
          maxLength: 50,
          showMaxLength: true
        },
        field: 'introduce'
      }, {
        component: 'Colors',
        label: '页面背景',
        props: {
          initColor: componentData.pageColor,
          onChange: _this.updateComColorData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), 'pageColor')
        },
        field: 'pageColor'
      }];
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleSelectView", function (index) {
      _this.listIndex = index;

      _this.setState({
        searchSelect: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "updateComColorData", function (field, value) {
      var _this$props3 = _this.props,
          componentData = _this$props3.componentData,
          setComponentData = _this$props3.setComponentData;
      componentData[field] = value.hex;
      setComponentData(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54___default()(componentData));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "onDragTabBar", function (result) {
      if (!result.destination) {
        return;
      }

      var components = _this.state.components;
      var items = reorder(components[_this.index].props.value, result.source.index, result.destination.index);
      components[_this.index].props.value = items;

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "onDragEnd", function (result) {
      if (!result.destination) {
        return;
      }

      var items = reorder(_this.state.components, result.source.index, result.destination.index);

      _this.setState({
        components: items
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabComponent", function (name) {
      _this.setState({
        componentName: name,
        selected: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabBarDel", function (index) {
      confirm({
        title: '提示',
        content: '确定要删除么？',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk: function onOk() {
          var components = _this.state.components;

          components[_this.index].props.value.splice(index, 1);

          _this.setState({
            components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabBarInt", function (index, e) {
      var components = _this.state.components;
      components[_this.index].props.value[index].label = e.target.value;

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleDragSuccess", function (data) {
      var components = _this.state.components;
      components.push(data);

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_44__["default"])(AppsDesign, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var componentData = this.props.componentData;
      var _this$state = this.state,
          searchSelect = _this$state.searchSelect,
          icons = _this$state.icons,
          uploadDialog = _this$state.uploadDialog,
          images = _this$state.images,
          pageCurrent = _this$state.pageCurrent;
      return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(layouts_PageHead__WEBPACK_IMPORTED_MODULE_59__["default"], {
        title: "\u5C0F\u7A0B\u5E8F-\u9875\u9762\u8BBE\u8BA1"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(layouts_PageLayout__WEBPACK_IMPORTED_MODULE_60__["default"], {
        defaultSelected: "/apps",
        defaultExtendSelected: "/apps/design",
        actionsView: this.getActionsView()
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], {
        className: layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66__["nav_bar"],
        divider: false,
        left: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_LabelHeader__WEBPACK_IMPORTED_MODULE_33__["default"], {
          title: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("span", null, "\u5F53\u524D\u4F4D\u7F6E: ", react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], null, "\u9875\u9762\u8BBE\u8BA1")),
          line: "vertical"
        })
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["app_view"]
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Alert__WEBPACK_IMPORTED_MODULE_29__["default"], {
        inheritColor: true,
        title: "\u5C0F\u7A0B\u5E8F\u8BF4\u660E",
        message: "\u5C0F\u7A0B\u5E8F\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u7BA1\u7406\u540E\u53F0\uFF0C\u53EF\u5728\u6B64\u8BBE\u7F6E\u4E2A\u6027\u5316\u9996\u9875\u6392\u7248\u3001\u57FA\u672C\u8BBE\u7F6E\u3001\u8BBE\u7F6E\u5FAE\u4FE1\u652F\u4ED8\u3001\u5BA1\u6838\u53D1\u5E03\u3002"
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: "flex",
        style: {
          marginTop: '2rem'
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_67__["tpl_phone"], " flex_column")
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["m_tit"],
        onClick: this.handleTabComponent.bind(this, 'Page')
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("span", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["cri"]
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("span", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["lon"]
      })), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"].Box, {
        className: "flex_1 ".concat(_index_less__WEBPACK_IMPORTED_MODULE_67__["m_scroll_view"]),
        style: {
          background: componentData.pageColor
        },
        onDragEnter: this.handleDragEnter,
        onDragSuccess: this.handleDragSuccess
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__["DragDropContext"], {
        onDragEnd: this.onDragEnd
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__["Droppable"], {
        droppableId: "droppable"
      }, function (provided) {
        return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_27__["default"])({}, provided.droppableProps, {
          ref: provided.innerRef,
          style: {
            height: '100%'
          }
        }), componentData.pagePorps.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__["Draggable"], {
            key: index,
            draggableId: index.toString(),
            index: index
          }, function (provided) {
            return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_27__["default"])({
              ref: provided.innerRef
            }, provided.draggableProps, provided.dragHandleProps), _this2.getComponentsView(item, index));
          });
        }), provided.placeholder);
      })))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Pagination__WEBPACK_IMPORTED_MODULE_24__["default"], {
        current: pageCurrent,
        total: 500,
        pageSize: 20,
        onChange: function onChange(val) {
          _this2.setState({
            pageCurrent: val
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        visible: searchSelect,
        title: "\u5B57\u4F53/\u56FE\u7247",
        style: {
          width: 1088,
          height: 756
        },
        onClose: this.handleCloseDialog.bind(this, 'searchSelect'),
        onFirstShow: this.getDialogData
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        tabBarClassName: "mk_divider",
        style: {
          height: '100%'
        },
        onChange: this.handleTabBarChange
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        label: "\u5B57\u4F53"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_BoxLine__WEBPACK_IMPORTED_MODULE_20__["default"], null, icons.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
          className: "flex_center ".concat(_index_less__WEBPACK_IMPORTED_MODULE_68__["icons_items"]),
          key: i.id,
          onClick: _this2.setComProps.bind(_this2, {
            type: 'icon',
            'url': i.name
          }, 'searchSelect')
        }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
          icon: i.name
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        label: "\u670D\u52A1\u5668\u56FE\u7247"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_68__["nav_color"],
        left: null,
        right: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          mold: "primary",
          onClick: this.handleShowUpload.bind(this, 'uploadDialog')
        }, "\u4E0A\u4F20\u56FE\u7247")
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_ScrollView__WEBPACK_IMPORTED_MODULE_12__["default"], {
        scrollY: true,
        className: _index_less__WEBPACK_IMPORTED_MODULE_68__["scroll_view"]
      }, images.map(function (i, index) {
        return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
          className: _index_less__WEBPACK_IMPORTED_MODULE_68__["image"],
          key: index,
          onClick: _this2.setComProps.bind(_this2, {
            type: 'image',
            'url': utils_axios__WEBPACK_IMPORTED_MODULE_61__["baseUrl"] + i.previewUrl
          }, 'searchSelect')
        }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
          className: "flex_justify",
          style: {
            width: '100%',
            height: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Image__WEBPACK_IMPORTED_MODULE_14__["default"], {
          src: utils_axios__WEBPACK_IMPORTED_MODULE_61__["baseUrl"] + i.previewUrl,
          className: _index_less__WEBPACK_IMPORTED_MODULE_68__["image_item"]
        })));
      }))))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "\u4E0A\u4F20\u56FE\u7247",
        footer: null,
        visible: uploadDialog,
        onClose: this.handleCloseDialog.bind(this, 'uploadDialog')
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Upload__WEBPACK_IMPORTED_MODULE_8__["default"].Dragger, {
        style: {
          marginTop: '10px'
        },
        action: "/os/image/globalUpload",
        baserUrl: utils_axios__WEBPACK_IMPORTED_MODULE_61__["baseUrl"],
        withCredentials: true,
        onUploadSuccess: this.handleUploadSuccess,
        uploadViewClassName: _index_less__WEBPACK_IMPORTED_MODULE_68__["uploadViewClassName"]
      }))));
    }
  }, {
    key: "getStyleValue",
    value: function getStyleValue(key, val) {
      switch (key) {
        case 'height':
          return Number(val);

        case 'width':
          return Number(val);

        default:
          return val;
      }
    }
  }, {
    key: "handleCloseDialog",
    value: function handleCloseDialog(field) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])({}, field, false));
    }
  }, {
    key: "handleFormIntChange",
    value: function handleFormIntChange(field, e) {
      var _this$props4 = this.props,
          componentData = _this$props4.componentData,
          setComponentData = _this$props4.setComponentData;

      var pageProps = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(componentData.pagePorps);

      pageProps[this.index].props[field] = e.target.value;
      setComponentData(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__["default"])({}, componentData));
    }
  }, {
    key: "getComponentsView",
    value: function getComponentsView(data, index) {
      switch (data.component) {
        case 'NavBar':
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
            edit: data.edit,
            key: index,
            onClick: this.handleEdit.bind(this, data, index),
            onEdit: this.handleEditStart.bind(this, data, index, 'LForm'),
            onDelete: this.handleDelete.bind(this, index)
          }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], data.props));

        case 'SearchBar':
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
            edit: data.edit,
            key: index,
            onClick: this.handleEdit.bind(this, data, index),
            onEdit: this.handleEditStart.bind(this, data, index, 'LForm'),
            onDelete: this.handleDelete.bind(this, index)
          }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], data.props));

        case 'Carousel':
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
            edit: data.edit,
            key: index,
            onClick: this.handleEdit.bind(this, data, index),
            onEdit: this.handleEditStart.bind(this, data, index, 'Carousel'),
            onDelete: this.handleDelete.bind(this, index)
          }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], data.props));

        case 'TabBar':
          {
            var value = data.props.value || [];

            Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__["default"])(data.props, ['value']);

            return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
              edit: data.edit,
              key: index,
              onClick: this.handleEdit.bind(this, data, index),
              onEdit: this.handleEditStart.bind(this, data, index, 'Carousel'),
              onDelete: this.handleDelete.bind(this, index)
            }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"], data.props, value.map(function (i, index) {
              return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                label: i.label || react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
                  color: "red"
                }, "\u672A\u8BBE\u7F6E"),
                key: index
              }, i.content);
            })));
          }
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index) {
      var components = this.state.components;
      components.splice(index, 1);
      this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    }
  }, {
    key: "handleEditStart",
    value: function handleEditStart(data, index, field) {
      this.index = index;
      this.componentType = data.component;
      this.setState({
        type: field,
        componentName: data.component,
        selected: 1
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(data, index) {
      var components = this.state.components;
      data.edit = true;
      components[index] = data;
      this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    }
  }, {
    key: "getActionsView",
    value: function getActionsView() {
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          componentName = _this$state2.componentName;
      return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        type: "vertical",
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["com"],
        selected: selected,
        tabBarClassName: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_bar"],
        tabItemClassName: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_actions"]
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        icon: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
          icon: "ios-apps"
        }),
        tooltipTitle: "\u9875\u9762\u7EC4\u4EF6",
        placement: "left"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        data: {
          component: 'NavBar',
          props: {},
          edit: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], null)), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_label"],
        color: "#999"
      }, "\u8F6E\u64AD"), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        data: {
          component: 'Carousel',
          props: {
            value: ['/static/banner-1.jpg', '/static/banner-2.jpg']
          },
          edit: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: ['/static/banner-1.jpg', '/static/banner-2.jpg']
      })), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_label"],
        color: "#999"
      }, "\u9009\u9879\u5361"), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        data: {
          component: 'TabBar',
          props: {
            value: [{
              label: '选项',
              content: '选项',
              data: ''
            }, {
              label: '选项',
              content: '选项',
              data: ''
            }]
          },
          edit: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        label: "\u9009\u9879"
      }, "\u9009\u9879"), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        label: "\u9009\u9879"
      }, "\u9009\u9879")))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        icon: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
          icon: "ios-arrow-back"
        }),
        tooltipTitle: "\u53C2\u6570\u8BBE\u7F6E",
        placement: "left"
      }, componentName === 'Page' && this.getPageNode(), componentName !== 'Page' && react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_LForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        getItems: this.getItem,
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["form_style"]
      })));
    }
  }, {
    key: "getPageNode",
    value: function getPageNode() {
      return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_LForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        getItems: this.getPageComponentItem,
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["form_style"]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.mark(function _callee3(ctx) {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["default"])('apps/findPageProps', {
                  classifyId: ctx.query.classifyId
                }, {
                  headers: {
                    cookie: ctx.req && ctx.req.headers.cookie
                  }
                });

              case 2:
                data = _context3.sent;

                if (!(data.status === 203 && ctx.res)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["initErrorToView"])(ctx));

              case 5:
                ctx.store.dispatch({
                  type: store_action_design__WEBPACK_IMPORTED_MODULE_63__["SET_COMPONENT_DATA"],
                  data: data.data
                });
                return _context3.abrupt("return", {});

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AppsDesign;
}(react__WEBPACK_IMPORTED_MODULE_56__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_62__["connect"])(function (state) {
  return {
    componentData: state.componentData
  };
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_58__["bindActionCreators"])(store_action_design__WEBPACK_IMPORTED_MODULE_63__["actions"], dispatch);
})(AppsDesign));

/***/ }),

/***/ "./pages/apps/design/index.less":
/*!**************************************!*\
  !*** ./pages/apps/design/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav_color":"nav_color___2DrYa","component_list":"component_list___2KtVa","component_label":"component_label___84V4f","icons_items":"icons_items___2C0I3","image":"image___Op0i5","image_item":"image_item___gTtlZ","uploadViewClassName":"uploadViewClassName___GplYT","scroll_view":"scroll_view___29pLj"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559785990");
          });
      }
    }
  

/***/ }),

/***/ "./pages/apps/editComponent.tsx":
/*!**************************************!*\
  !*** ./pages/apps/editComponent.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditComponent; });
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./pages/apps/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);











var EditComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EditComponent, _Component);

  function EditComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EditComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClick", function () {
      var onClick = _this.props.onClick;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onClick)) {
        onClick();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEdit", function (e) {
      var onEdit = _this.props.onEdit;
      e.stopPropagation();

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onEdit)) {
        onEdit();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDelet", function (e) {
      var onDelete = _this.props.onDelete;
      e.stopPropagation();

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onDelete)) {
        onDelete();
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EditComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          edit = _this$props.edit;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9__["edit_view"], " ").concat(edit ? _index_less__WEBPACK_IMPORTED_MODULE_9__["edit_view_over"] : ''),
        onClick: this.handleClick
      }, children, edit && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex ".concat(_index_less__WEBPACK_IMPORTED_MODULE_9__["edit_view_box"])
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9__["edit_view_box_label"]),
        onClick: this.handleEdit
      }, "\u7F16\u8F91"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9__["edit_view_box_label"]),
        onClick: this.handleDelet
      }, "\u5220\u9664")));
    }
  }]);

  return EditComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ 41:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fapps%2Fdesign%2Feditor&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Capps%5Cdesign%5Ceditor.tsx ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fapps%2Fdesign%2Feditor&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Capps%5Cdesign%5Ceditor.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapps%2Fdesign%2Feditor&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Capps%5Cdesign%5Ceditor.tsx!./");


/***/ })

})
//# sourceMappingURL=5.85deb09c94de1a6cdb0f.hot-update.js.map