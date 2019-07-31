(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./components/lib/Button/index.tsx":
/*!*****************************************!*\
  !*** ./components/lib/Button/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
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
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Icon */ "./components/lib/Icon/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");











var prefixClass = 'btn';

var Button =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Button, _Component);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Button).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          fixed = _this$props.fixed,
          mold = _this$props.mold,
          disabled = _this$props.disabled,
          loading = _this$props.loading;

      var otherProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props, ['children', 'className', 'fixed', 'mold', 'tick', 'loading']);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, " ").concat(prefixClass, "_").concat(mold).concat(fixed ? ' fixed' : '').concat(disabled ? ' disabled' : ''), className)
      }, otherProps), loading ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "md-refresh",
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_loading")),
        rotate: true
      }) : '', children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Button, "defaultProps", {
  mold: 'default',
  tick: true
});



/***/ }),

/***/ "./components/lib/Icon/index.tsx":
/*!***************************************!*\
  !*** ./components/lib/Icon/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muka/lib/omit */ "./muka/lib/omit.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");












var paths = {
  'md-search': __webpack_require__.e(/*! import() */ 59).then(__webpack_require__.bind(null, /*! ./md/search */ "./components/lib/Icon/md/search.ts")).then(function (data) {
    return data.default;
  }),
  'ios-search': __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./ios/search */ "./components/lib/Icon/ios/search.ts")).then(function (data) {
    return data.default;
  }),
  'md-home': __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ./md/home */ "./components/lib/Icon/md/home.ts")).then(function (data) {
    return data.default;
  }),
  'ios-home': __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./ios/home */ "./components/lib/Icon/ios/home.ts")).then(function (data) {
    return data.default;
  }),
  'md-exit': __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! ./md/exit */ "./components/lib/Icon/md/exit.ts")).then(function (data) {
    return data.default;
  }),
  'ios-exit': __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./ios/exit */ "./components/lib/Icon/ios/exit.ts")).then(function (data) {
    return data.default;
  }),
  'md-arrow-down': __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./md/arrow-down */ "./components/lib/Icon/md/arrow-down.ts")).then(function (data) {
    return data.default;
  }),
  'ios-arrow-down': __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./ios/arrow-down */ "./components/lib/Icon/ios/arrow-down.ts")).then(function (data) {
    return data.default;
  }),
  'md-contract': __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(null, /*! ./md/contract */ "./components/lib/Icon/md/contract.ts")).then(function (data) {
    return data.default;
  }),
  'ios-contract': __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./ios/contract */ "./components/lib/Icon/ios/contract.ts")).then(function (data) {
    return data.default;
  }),
  'md-person': __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! ./md/person */ "./components/lib/Icon/md/person.ts")).then(function (data) {
    return data.default;
  }),
  'ios-person': __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./ios/person */ "./components/lib/Icon/ios/person.ts")).then(function (data) {
    return data.default;
  }),
  'md-document': __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! ./md/document */ "./components/lib/Icon/md/document.ts")).then(function (data) {
    return data.default;
  }),
  'ios-document': __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./ios/document */ "./components/lib/Icon/ios/document.ts")).then(function (data) {
    return data.default;
  }),
  'md-expand': __webpack_require__.e(/*! import() */ 53).then(__webpack_require__.bind(null, /*! ./md/expand */ "./components/lib/Icon/md/expand.ts")).then(function (data) {
    return data.default;
  }),
  'ios-expand': __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./ios/expand */ "./components/lib/Icon/ios/expand.ts")).then(function (data) {
    return data.default;
  }),
  'md-trending-up': __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! ./md/trending-up */ "./components/lib/Icon/md/trending-up.ts")).then(function (data) {
    return data.default;
  }),
  'ios-trending-up': __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./ios/trending-up */ "./components/lib/Icon/ios/trending-up.ts")).then(function (data) {
    return data.default;
  }),
  'md-gift': __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ./md/gift */ "./components/lib/Icon/md/gift.ts")).then(function (data) {
    return data.default;
  }),
  'ios-gift': __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./ios/gift */ "./components/lib/Icon/ios/gift.ts")).then(function (data) {
    return data.default;
  }),
  'md-close': __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./md/close */ "./components/lib/Icon/md/close.ts")).then(function (data) {
    return data.default;
  }),
  'ios-close': __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./ios/close */ "./components/lib/Icon/ios/close.ts")).then(function (data) {
    return data.default;
  }),
  'md-arrow-back': __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! ./md/arrow-back */ "./components/lib/Icon/md/arrow-back.ts")).then(function (data) {
    return data.default;
  }),
  'ios-arrow-back': __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./ios/arrow-back */ "./components/lib/Icon/ios/arrow-back.ts")).then(function (data) {
    return data.default;
  }),
  'md-apps': __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./md/apps */ "./components/lib/Icon/md/apps.ts")).then(function (data) {
    return data.default;
  }),
  'ios-apps': __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./ios/apps */ "./components/lib/Icon/ios/apps.ts")).then(function (data) {
    return data.default;
  }),
  'md-add': __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./md/add */ "./components/lib/Icon/md/add.ts")).then(function (data) {
    return data.default;
  }),
  'ios-add': __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./ios/add */ "./components/lib/Icon/ios/add.ts")).then(function (data) {
    return data.default;
  }),
  'md-remove': __webpack_require__.e(/*! import() */ 58).then(__webpack_require__.bind(null, /*! ./md/remove */ "./components/lib/Icon/md/remove.ts")).then(function (data) {
    return data.default;
  }),
  'ios-remove': __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./ios/remove */ "./components/lib/Icon/ios/remove.ts")).then(function (data) {
    return data.default;
  }),
  'md-more': __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! ./md/more */ "./components/lib/Icon/md/more.ts")).then(function (data) {
    return data.default;
  }),
  'ios-more': __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./ios/more */ "./components/lib/Icon/ios/more.ts")).then(function (data) {
    return data.default;
  }),
  'md-arrow-forward': __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! ./md/arrow-forward */ "./components/lib/Icon/md/arrow-forward.ts")).then(function (data) {
    return data.default;
  }),
  'ios-arrow-forward': __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./ios/arrow-forward */ "./components/lib/Icon/ios/arrow-forward.ts")).then(function (data) {
    return data.default;
  }),
  'md-checkmark': __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ./md/checkmark */ "./components/lib/Icon/md/checkmark.ts")).then(function (data) {
    return data.default;
  }),
  'ios-checkmark': __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./ios/checkmark */ "./components/lib/Icon/ios/checkmark.ts")).then(function (data) {
    return data.default;
  }),
  'md-close-circle-outline': __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./md/close-circle-outline */ "./components/lib/Icon/md/close-circle-outline.ts")).then(function (data) {
    return data.default;
  }),
  'ios-close-circle-outline': __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./ios/close-circle-outline */ "./components/lib/Icon/ios/close-circle-outline.ts")).then(function (data) {
    return data.default;
  }),
  'md-close-circle': __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./md/close-circle */ "./components/lib/Icon/md/close-circle.ts")).then(function (data) {
    return data.default;
  }),
  'ios-close-circle': __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./ios/close-circle */ "./components/lib/Icon/ios/close-circle.ts")).then(function (data) {
    return data.default;
  }),
  'md-settings': __webpack_require__.e(/*! import() */ 60).then(__webpack_require__.bind(null, /*! ./md/settings */ "./components/lib/Icon/md/settings.ts")).then(function (data) {
    return data.default;
  }),
  'ios-settings': __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./ios/settings */ "./components/lib/Icon/ios/settings.ts")).then(function (data) {
    return data.default;
  }),
  'menu-open': __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./global/menu-open */ "./components/lib/Icon/global/menu-open.ts")).then(function (data) {
    return data.default;
  }),
  'menu-close': __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./global/menu-close */ "./components/lib/Icon/global/menu-close.ts")).then(function (data) {
    return data.default;
  }),
  'shop': __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./global/shop */ "./components/lib/Icon/global/shop.ts")).then(function (data) {
    return data.default;
  }),
  'shopping': __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./global/shopping */ "./components/lib/Icon/global/shopping.ts")).then(function (data) {
    return data.default;
  }),
  'shop-setting': __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./global/shop-setting */ "./components/lib/Icon/global/shop-setting.ts")).then(function (data) {
    return data.default;
  }),
  'purse': __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./global/purse */ "./components/lib/Icon/global/purse.ts")).then(function (data) {
    return data.default;
  }),
  'small-routine': __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./global/small-routine */ "./components/lib/Icon/global/small-routine.ts")).then(function (data) {
    return data.default;
  }),
  'double-arrow-left': __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./global/double-arrow-left */ "./components/lib/Icon/global/double-arrow-left.ts")).then(function (data) {
    return data.default;
  }),
  'double-arrow-right': __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./global/double-arrow-right */ "./components/lib/Icon/global/double-arrow-right.ts")).then(function (data) {
    return data.default;
  }),
  'msg': __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./global/msg */ "./components/lib/Icon/global/msg.ts")).then(function (data) {
    return data.default;
  }),
  'file_box': __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./global/file_box */ "./components/lib/Icon/global/file_box.ts")).then(function (data) {
    return data.default;
  })
};

var Icon =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Icon, _Component);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      path: '',
      viewBox: '0 0 512 512'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getPathByIconName", function (icon) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Icon, [{
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

      var props = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'color', 'fontSize', 'onClick', 'rotate', 'shake', 'beat', 'style', 'viewBox']);

      var _this$state = this.state,
          path = _this$state.path,
          viewBox = _this$state.viewBox;

      var styles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style, {
        fill: color,
        fontSize: fontSize
      });

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])('icon')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        style: styles,
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getClassName"])("icon".concat(shake ? ' shake' : '').concat(beat ? ' beat' : '').concat(rotate ? ' rotate' : ''), className),
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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Icon, "defaultProps", {
  style: {},
  color: '#000000',
  fontSize: '22px',
  shake: false,
  beat: false,
  rotate: false
});



/***/ })

}]);
//# sourceMappingURL=5.js.map