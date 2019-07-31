exports.ids = [7];
exports.modules = {

/***/ "./components/lib/LUpload/index.tsx":
/*!******************************************!*\
  !*** ./components/lib/LUpload/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LUpload; });
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/upload/style */ "antd/lib/upload/style");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/upload */ "antd/lib/upload");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! muka/lib/omit */ "./muka/lib/omit.ts");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var muka_lib_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! muka/lib/hash */ "./muka/lib/hash.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Icon */ "./components/lib/Icon/index.tsx");



















var LUpload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(LUpload, _Component);

  function LUpload() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, LUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(LUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "state", {
      loading: false,
      fileList: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "beforeUpload", function (file) {
      var _this$props = _this.props,
          fileTypes = _this$props.fileTypes,
          fileSize = _this$props.fileSize;
      var hashType = true;
      var hashSize = true;

      if (fileTypes) {
        hashType = Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_7__["default"])(fileTypes, file.type);

        if (!hashType) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error("Image must smaller than ".concat(fileTypes.join(' | ')));
        }
      }

      if (fileSize) {
        hashSize = file.size / 1024 / 1024 < fileSize;

        if (!hashSize) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error("Image must smaller than ".concat(fileSize, "MB!"));
        }
      }

      return hashType && hashSize;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "handleChange", function (info) {
      var _this$props2 = _this.props,
          onDone = _this$props2.onDone,
          onChange = _this$props2.onChange;

      _this.setState({
        loading: true
      });

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onChange)) {
        onChange(info);
      }

      if (info.fileList.every(function (i) {
        return i.status === 'done';
      })) {
        _this.setState({
          loading: false
        });

        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onDone)) {
          onDone(info.fileList.map(function (i) {
            return i.response;
          }));
        }
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(LUpload, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          fileList = _this$props3.fileList,
          maxLength = _this$props3.maxLength,
          baseUrl = _this$props3.baseUrl,
          action = _this$props3.action;
      var loading = this.state.loading;
      var uploadButton = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
        icon: loading ? 'loading' : 'md-add',
        rotate: loading ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20\u6587\u4EF6"));

      var props = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props, ['className', 'onChange', 'onDone', 'fileTypes', 'fileSize', 'maxLength', 'action', 'baseUrl']);

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        action: "".concat(baseUrl).concat(action || ''),
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_16__["getClassName"])('upload', className),
        beforeUpload: this.beforeUpload,
        onChange: this.handleChange
      }), fileList && fileList.length >= (maxLength || 3) ? null : uploadButton);
    }
  }]);

  return LUpload;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(LUpload, "defaultProps", {
  listType: 'picture-card',
  fileTypes: ['image/jpeg', 'image/png'],
  name: 'avatar',
  baseUrl: '',
  fileList: []
});



/***/ })

};;
//# sourceMappingURL=7.js.map