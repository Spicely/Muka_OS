exports.ids = ["eb42"];
exports.modules = {

/***/ "9iZt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LUpload; });
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eMim");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TfTO");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kOwS");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qVDf");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("M/cP");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XZ83");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var muka_lib_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mJni");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LZdz");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("b3x8");



















var LUpload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(LUpload, _Component);

  function LUpload() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, LUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(LUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), "state", {
      loading: false,
      fileList: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), "beforeUpload", function (file) {
      var _this$props = _this.props,
          fileTypes = _this$props.fileTypes,
          fileSize = _this$props.fileSize;
      var hashType = true;
      var hashSize = true;

      if (fileTypes) {
        hashType = Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(fileTypes, file.type);

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_this), "handleChange", function (info) {
      var _this$props2 = _this.props,
          onDone = _this$props2.onDone,
          onChange = _this$props2.onChange;

      _this.setState({
        loading: true
      });

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(onChange)) {
        onChange(info);
      }

      if (info.fileList.every(function (i) {
        return i.status === 'done';
      })) {
        _this.setState({
          loading: false
        });

        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(onDone)) {
          onDone(info.fileList.map(function (i) {
            return i.response;
          }));
        }
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(LUpload, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          fileList = _this$props3.fileList,
          maxLength = _this$props3.maxLength,
          baseUrl = _this$props3.baseUrl,
          action = _this$props3.action;
      var loading = this.state.loading;
      var uploadButton = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        icon: loading ? 'loading' : 'md-add',
        rotate: loading ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20\u6587\u4EF6"));

      var props = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this.props, ['className', 'onChange', 'onDone', 'fileTypes', 'fileSize', 'maxLength', 'action', 'baseUrl']);

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, props, {
        action: "".concat(baseUrl).concat(action || ''),
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* getClassName */ "a"])('upload', className),
        beforeUpload: this.beforeUpload,
        onChange: this.handleChange
      }), fileList && fileList.length >= (maxLength || 3) ? null : uploadButton);
    }
  }]);

  return LUpload;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(LUpload, "defaultProps", {
  listType: 'picture-card',
  fileTypes: ['image/jpeg', 'image/png'],
  name: 'avatar',
  baseUrl: '',
  fileList: []
});



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



/***/ })

};;