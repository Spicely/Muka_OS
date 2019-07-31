exports.ids = ["9b0f"];
exports.modules = {

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

/***/ "Fmji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sources_type_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4uLm");

/* harmony default export */ __webpack_exports__["a"] = (_sources_type_isNumber__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "FsVx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("M/cP");
/* harmony import */ var muka_lib_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Gt0/");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
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
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("koQY");
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hex_rgb__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("HKQd");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("LZdz");















var prefixClass = 'carousel';

var Carousel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Carousel).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this), "state", {
      selectIndex: 0,
      top: 0,
      left: 0,
      animate: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this), "carouselNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this), "animateNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this), "handleAnimate", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          effect = _this$props.effect,
          value = _this$props.value;
      var selectIndex = _this.state.selectIndex;
      var length = react__WEBPACK_IMPORTED_MODULE_11__["Children"].count(value || children);

      if (selectIndex === length && effect !== 'fade') {
        _this.setState({
          selectIndex: 0,
          animate: false
        }, function () {
          setTimeout(function () {
            _this.setState({
              animate: true
            });
          }, 20);
        });

        return;
      }
    });

    if (Object(muka_lib_isNumber__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props.defaultSelected)) {
      _this.state.selectIndex = props.selected || props.defaultSelected;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Carousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          dotPosition = _this$props2.dotPosition,
          dotClassName = _this$props2.dotClassName,
          dots = _this$props2.dots,
          effect = _this$props2.effect,
          style = _this$props2.style,
          autoplay = _this$props2.autoplay,
          value = _this$props2.value,
          dotType = _this$props2.dotType,
          dotColor = _this$props2.dotColor;
      var _this$state = this.state,
          selectIndex = _this$state.selectIndex,
          left = _this$state.left,
          top = _this$state.top,
          animate = _this$state.animate;
      console.log(selectIndex, ' 222222222222222');
      var length = react__WEBPACK_IMPORTED_MODULE_11__["Children"].count(value || children);
      var cssStyle = {};
      var dotStyle = {};

      if (dotColor) {
        var color = hex_rgb__WEBPACK_IMPORTED_MODULE_12___default()(dotColor);
        dotStyle.background = "rgba(".concat(color.red, ", ").concat(color.green, ", ").concat(color.blue, ", 0.6)");
      }

      if (effect === 'scrollx') {
        cssStyle.transform = "translate3d(-".concat(selectIndex * left, "px, 0, 0)");
        cssStyle.transition = animate ? '' : 'none';
      } else if (effect === 'scrolly') {
        cssStyle.transform = "translate3d(0, -".concat(selectIndex * top, "px, 0)");
        cssStyle.transition = animate ? '' : 'none';
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass).concat(effect === 'scrollx' ? ' flex' : ''), className),
        style: style,
        ref: function ref(e) {
          return _this2.carouselNode = e;
        }
      }, react__WEBPACK_IMPORTED_MODULE_11__["Children"].map(value || children, function (child, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass, "__item flex_center ").concat(effect === 'fade' ? _utils__WEBPACK_IMPORTED_MODULE_14__[/* prefix */ "b"] + 'fade' : '')),
          style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, cssStyle, {
            opacity: effect === 'fade' ? index === selectIndex ? 1 : 0 : 1
          }),
          ref: function ref(e) {
            return _this2.animateNode = e;
          },
          key: index
        }, Object(muka_lib_isString__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(child) ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass, "__item_image")),
          src: child
        }) : child);
      }), autoplay && effect !== 'fade' && react__WEBPACK_IMPORTED_MODULE_11__["Children"].map(value || children, function (child, index) {
        if (index === 0) {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass, "__item flex_center")),
            style: cssStyle,
            key: "extend_".concat(index),
            ref: function ref(e) {
              return _this2.animateNode = e;
            }
          }, Object(muka_lib_isString__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(child) ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
            className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass, "__item_image")),
            src: child
          }) : child);
        }

        return undefined;
      }), dots && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass, "_dot ").concat(_utils__WEBPACK_IMPORTED_MODULE_14__[/* prefix */ "b"]).concat(dotPosition, "  flex_justify"))
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "flex_center"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: dotPosition === 'bottom' || dotPosition === 'top' || dotPosition === 'bottomRight' || dotPosition === 'bottomLeft' ? 'flex' : ''
      }, react__WEBPACK_IMPORTED_MODULE_11__["Children"].map(value || children, function (child, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* getClassName */ "a"])("".concat(prefixClass, "_dot__item ").concat(_utils__WEBPACK_IMPORTED_MODULE_14__[/* prefix */ "b"]).concat(dotType, " ").concat(selectIndex % length === index ? _utils__WEBPACK_IMPORTED_MODULE_14__[/* prefix */ "b"] + 'active' : ''), dotClassName),
          key: index,
          onClick: _this2.handleTabIndex.bind(_this2, index),
          style: selectIndex % length === index ? {
            background: dotColor
          } : dotStyle
        });
      })))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoplay = this.props.autoplay;

      if (this.carouselNode) {
        var obj = this.carouselNode.getBoundingClientRect();
        this.setState({
          top: obj.height,
          left: obj.width
        });
      }

      if (this.animateNode) {
        this.animateNode.addEventListener('transitionend', this.handleAnimate);
      }

      this.interval(autoplay || false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var _this$props3 = this.props,
          autoplay = _this$props3.autoplay,
          selected = _this$props3.selected;

      if (autoplay !== nextProps.autoplay) {
        if (nextProps.autoplay && !this.timer) {
          this.interval(true);
        } else {
          clearInterval(this.timer);
          this.timer = undefined;
        }
      }

      if (Object(muka_lib_isNumber__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(nextProps.selected) && selected !== nextProps.selected) {
        clearInterval(this.timer);
        this.setState({
          selectIndex: nextProps.selected || 0
        }, function () {
          _this3.interval(nextProps.autoplay || false);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);

      if (this.animateNode) {
        this.animateNode.removeEventListener('transitionend', this.handleAnimate);
      }

      this.timer = undefined;
    }
  }, {
    key: "interval",
    value: function interval(autoPlay) {
      var _this4 = this;

      var _this$props4 = this.props,
          time = _this$props4.time,
          effect = _this$props4.effect;

      if (autoPlay) {
        this.timer = setInterval(function () {
          var _this4$props = _this4.props,
              children = _this4$props.children,
              value = _this4$props.value;
          var selectIndex = _this4.state.selectIndex;
          var length = react__WEBPACK_IMPORTED_MODULE_11__["Children"].count(value || children);
          var status = effect !== 'fade' ? selectIndex === length : selectIndex === length - 1;

          _this4.handleTabIndex(status ? 0 : selectIndex + 1);
        }, time);
      }
    }
  }, {
    key: "handleTabIndex",
    value: function handleTabIndex(index) {
      var _this$props5 = this.props,
          children = _this$props5.children,
          onChnage = _this$props5.onChnage,
          value = _this$props5.value;
      var length = react__WEBPACK_IMPORTED_MODULE_11__["Children"].count(value || children);
      this.setState({
        selectIndex: index
      });

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(onChnage)) {
        onChnage(index % length);
      }
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Carousel, "defaultProps", {
  dotPosition: 'bottom',
  dotType: 'rectangle',
  dots: true,
  time: 2000,
  autoplay: false,
  effect: 'scrollx'
});



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



/***/ })

};;