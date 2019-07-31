exports.ids = [6];
exports.modules = {

/***/ "./components/lib/Colors/index.tsx":
/*!*****************************************!*\
  !*** ./components/lib/Colors/index.tsx ***!
  \*****************************************/
/*! exports provided: ColorResult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Colors; });
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mask */ "./components/lib/Colors/mask.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorResult", function() { return react_color__WEBPACK_IMPORTED_MODULE_9__["ColorResult"]; });














var prefixClass = 'colors';

var Colors =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Colors, _Component);

  function Colors(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Colors);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Colors).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      color: '#0693e3',
      visible: false,
      left: 0,
      top: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "colorNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClick", function (e) {
      var left = 0;
      var top = 0;

      if (_this.colorNode) {
        var obj = _this.colorNode.getBoundingClientRect();

        left = obj.left;
        top = obj.top + obj.height + 10;
      }

      _this.setState({
        visible: true,
        left: left,
        top: top
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClose", function (status) {
      _this.setState({
        visible: status
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (color, event) {
      var onChange = _this.props.onChange;

      _this.setState({
        color: color.hex
      });

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(onChange)) {
        onChange(color, event);
      }
    });

    if (props.initColor) {
      _this.state.color = props.initColor;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Colors, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className;
      var _this$state = this.state,
          color = _this$state.color,
          visible = _this$state.visible,
          left = _this$state.left,
          top = _this$state.top;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, " flex_justify"), className)
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "flex"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_color")),
        ref: function ref(e) {
          return _this2.colorNode = e;
        },
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_color_box")),
        style: {
          background: color
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_label flex_justify"))
      }, color)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_mask__WEBPACK_IMPORTED_MODULE_10__["default"], {
        visible: visible,
        onClose: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_select")),
        style: {
          left: left,
          top: top
        }
      }, this.getColorNode())));
    }
  }, {
    key: "getColorNode",
    value: function getColorNode() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          type = _this$props.type;
      var color = this.state.color;
      var props = {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("".concat(prefixClass, "_").concat(type)),
        width: width,
        height: height,
        onChange: this.handleChange,
        color: color // tslint:disable-next-line: switch-default

      };

      switch (type) {
        case 'github':
          {
            if (!width) {
              props.width = 212;
            } // tslint:disable-next-line: align

          }
          break;

        case 'twitter':
          {
            if (!height) {
              props.width = 212;
            } // tslint:disable-next-line: align

          }
          break;
      }

      switch (type) {
        case 'swatches':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["SwatchesPicker"], props);

        case 'material':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["MaterialPicker"], props);

        case 'compact':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["CompactPicker"], props);

        case 'slider':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["SliderPicker"], props);

        case 'circle':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["CirclePicker"], props);

        case 'alpha':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["AlphaPicker"], props);

        case 'hue':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["HuePicker"], props);

        case 'twitter':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["TwitterPicker"], props);

        case 'github':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["GithubPicker"], props);

        case 'block':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["BlockPicker"], props);

        case 'chrome':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], props);

        default:
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["SketchPicker"], props);
      }
    }
  }]);

  return Colors;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Colors, "defaultProps", {
  type: 'chrome'
});



/***/ }),

/***/ "./components/lib/Colors/mask.tsx":
/*!****************************************!*\
  !*** ./components/lib/Colors/mask.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");










var globalNode;
var prefixClass = 'colors_mask';

var Mask =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Mask, _Component);

  function Mask(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mask);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Mask).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "node", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "boxNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      var onClose = _this.props.onClose;

      if (e.target !== _this.boxNode) {
        return;
      }

      onClose(false);
    });

    if (typeof document !== 'undefined') {
      globalNode = document.querySelector(".".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getClassName"])('mask_box')));

      if (globalNode) {
        _this.node = globalNode;
      } else {
        var dom = document.createElement('div');
        dom.className = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getClassName"])('mask_box');
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mask, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible;

      if (this.node) {
        return Object(react_dom__WEBPACK_IMPORTED_MODULE_8__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getClassName"])("".concat(prefixClass)),
          style: {
            display: !visible ? 'none' : ''
          },
          ref: function ref(e) {
            return _this2.boxNode = e;
          },
          onClick: this.handleClick
        }, children), this.node);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null);
    }
  }]);

  return Mask;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

};;
//# sourceMappingURL=6.js.map