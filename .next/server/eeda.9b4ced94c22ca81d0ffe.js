exports.ids = ["eeda"];
exports.modules = {

/***/ "ndBP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Textarea; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qVDf");
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("LZdz");













var Textarea =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Textarea, _Component);

  function Textarea() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Textarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Textarea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "state", {
      val: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this), "handleChange", function (e) {
      var onChange = _this.props.onChange;

      _this.setState({
        val: e.target.value
      });

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(onChange)) {
        onChange(e);
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Textarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          maxLength = _this$props.maxLength,
          showMaxLength = _this$props.showMaxLength;
      var val = this.state.val;

      var props = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.props, ['className', 'onChange', 'showMaxLength']);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getClassName */ "a"])("textarea", className)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
        onChange: this.handleChange
      })), showMaxLength && maxLength ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getClassName */ "a"])('textarea_max_length flex_justify')
      }, val.length, "/", maxLength) : null);
    }
  }]);

  return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

};;