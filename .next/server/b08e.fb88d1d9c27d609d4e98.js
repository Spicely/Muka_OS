exports.ids = ["b08e"];
exports.modules = {

/***/ "bE43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: external "react-color"
var external_react_color_ = __webpack_require__("4jX/");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: ./components/lib/utils/index.ts
var utils = __webpack_require__("LZdz");

// CONCATENATED MODULE: ./components/lib/Colors/mask.tsx










var globalNode;
var prefixClass = 'colors_mask';

var mask_Mask =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Mask, _Component);

  function Mask(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Mask);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Mask).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "node", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "boxNode", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function (e) {
      var onClose = _this.props.onClose;

      if (e.target !== _this.boxNode) {
        return;
      }

      onClose(false);
    });

    if (typeof document !== 'undefined') {
      globalNode = document.querySelector(".".concat(Object(utils["a" /* getClassName */])('mask_box')));

      if (globalNode) {
        _this.node = globalNode;
      } else {
        var dom = document.createElement('div');
        dom.className = Object(utils["a" /* getClassName */])('mask_box');
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

  Object(createClass["a" /* default */])(Mask, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible;

      if (this.node) {
        return Object(external_react_dom_["createPortal"])(external_react_default.a.createElement("div", {
          className: Object(utils["a" /* getClassName */])("".concat(prefixClass)),
          style: {
            display: !visible ? 'none' : ''
          },
          ref: function ref(e) {
            return _this2.boxNode = e;
          },
          onClick: this.handleClick
        }, children), this.node);
      }

      return external_react_default.a.createElement(external_react_["Fragment"], null);
    }
  }]);

  return Mask;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/lib/Colors/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Colors_Colors; });
/* concated harmony reexport ColorResult */__webpack_require__.d(__webpack_exports__, "ColorResult", function() { return external_react_color_["ColorResult"]; });













var Colors_prefixClass = 'colors';

var Colors_Colors =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Colors, _Component);

  function Colors(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Colors);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Colors).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      color: '#0693e3',
      visible: false,
      left: 0,
      top: 0
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "colorNode", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function (e) {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClose", function (status) {
      _this.setState({
        visible: status
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (color, event) {
      var onChange = _this.props.onChange;

      _this.setState({
        color: color.hex
      });

      if (Object(isFunction["a" /* default */])(onChange)) {
        onChange(color, event);
      }
    });

    if (props.initColor) {
      _this.state.color = props.initColor;
    }

    return _this;
  }

  Object(createClass["a" /* default */])(Colors, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className;
      var _this$state = this.state,
          color = _this$state.color,
          visible = _this$state.visible,
          left = _this$state.left,
          top = _this$state.top;
      return external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])("".concat(Colors_prefixClass, " flex_justify"), className)
      }, external_react_default.a.createElement("div", {
        className: "flex"
      }, external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])("".concat(Colors_prefixClass, "_color")),
        ref: function ref(e) {
          return _this2.colorNode = e;
        },
        onClick: this.handleClick
      }, external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])("".concat(Colors_prefixClass, "_color_box")),
        style: {
          background: color
        }
      })), external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])("".concat(Colors_prefixClass, "_label flex_justify"))
      }, color)), external_react_default.a.createElement(mask_Mask, {
        visible: visible,
        onClose: this.handleClose
      }, external_react_default.a.createElement("div", {
        className: Object(utils["a" /* getClassName */])("".concat(Colors_prefixClass, "_select")),
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
        className: Object(utils["a" /* getClassName */])("".concat(Colors_prefixClass, "_").concat(type)),
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
          return external_react_default.a.createElement(external_react_color_["SwatchesPicker"], props);

        case 'material':
          return external_react_default.a.createElement(external_react_color_["MaterialPicker"], props);

        case 'compact':
          return external_react_default.a.createElement(external_react_color_["CompactPicker"], props);

        case 'slider':
          return external_react_default.a.createElement(external_react_color_["SliderPicker"], props);

        case 'circle':
          return external_react_default.a.createElement(external_react_color_["CirclePicker"], props);

        case 'alpha':
          return external_react_default.a.createElement(external_react_color_["AlphaPicker"], props);

        case 'hue':
          return external_react_default.a.createElement(external_react_color_["HuePicker"], props);

        case 'twitter':
          return external_react_default.a.createElement(external_react_color_["TwitterPicker"], props);

        case 'github':
          return external_react_default.a.createElement(external_react_color_["GithubPicker"], props);

        case 'block':
          return external_react_default.a.createElement(external_react_color_["BlockPicker"], props);

        case 'chrome':
          return external_react_default.a.createElement(external_react_color_["ChromePicker"], props);

        default:
          return external_react_default.a.createElement(external_react_color_["SketchPicker"], props);
      }
    }
  }]);

  return Colors;
}(external_react_["Component"]);

Object(defineProperty["a" /* default */])(Colors_Colors, "defaultProps", {
  type: 'chrome'
});



/***/ })

};;