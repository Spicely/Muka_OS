exports.ids = ["85f4"];
exports.modules = {

/***/ "5qSd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapUrlSource", function() { return setMapUrlSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var muka_lib_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("v7dG");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("M/cP");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("0a3R");
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("LZdz");

















var mapUrl = {
  tMap: 'https://map.qq.com/api/js?v=2.exp&key=',
  bMap: '',
  aMap: ''
};
var setMapUrlSource = function setMapUrlSource(params) {
  var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13___default()(mapUrl);

  keys.map(function (i) {
    mapUrl[i] = params[i];
  });
};

var Map =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Map, _Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "node", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "location", undefined);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "geolocation", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "geocoder", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "events", []);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Map, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          onLocationError = _this$props.onLocationError,
          initLatLng = _this$props.initLatLng,
          onLocationAddr = _this$props.onLocationAddr;
      var dragendEventStatus = true;
      this.getScriptFile().then(function () {
        var win = window;
        win.tMapInit =
        /*#__PURE__*/
        Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
          var posLatLng, map, geocoder;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  posLatLng = initLatLng ? new qq.maps.LatLng(initLatLng.lat, initLatLng.lng) : new qq.maps.LatLng(39.916527, 116.397128);
                  map = new qq.maps.Map(_this2.node, {
                    zoom: 16,
                    center: posLatLng
                  });
                  geocoder = new qq.maps.Geocoder();
                  geocoder.setComplete(function (result) {
                    if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(onLocationAddr)) {
                      onLocationAddr(result.detail);
                    }

                    if (dragendEventStatus) {
                      map.setCenter(result.detail.location);
                      var marker = new qq.maps.Marker({
                        map: map,
                        draggable: true,
                        position: result.detail.location
                      });
                      qq.maps.event.addListener(marker, 'dragend', function (event) {
                        var latLng = new qq.maps.LatLng(event.latLng.lat, event.latLng.lng);
                        geocoder.getAddress(latLng);
                      });
                      dragendEventStatus = false;
                    }
                  }); // tslint:disable-next-line: only-arrow-functions

                  geocoder.setError(function () {
                    alert('出错了，请输入正确的经纬度！！！');
                  });

                  if (location) {
                    _this2.getLocation().then(function (data) {
                      var lat = data.lat;
                      var lng = data.lng;

                      if (!muka_lib_browser__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].isMobile) {
                        lat = lat + 0.008081;
                        lng = lng - 0.005184;
                      }

                      var latLng = new qq.maps.LatLng(lat, lng);
                      geocoder.getAddress(latLng);
                    }).catch(function () {
                      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(onLocationError)) {
                        onLocationError();
                      }
                    });
                  } else {
                    if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(onLocationAddr)) {
                      onLocationAddr({
                        lat: initLatLng ? initLatLng.lat : 39.916527,
                        lng: initLatLng ? initLatLng.lng : 116.397128
                      });
                    }
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }).catch(function () {
        var onLoadUrlError = _this2.props.onLoadUrlError;

        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(onLoadUrlError)) {
          onLoadUrlError();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_16__[/* getClassName */ "a"])("map"),
        style: {
          height: height,
          width: width
        },
        ref: function ref(e) {
          return _this3.node = e;
        }
      });
    }
  }, {
    key: "getScriptFile",
    value: function getScriptFile() {
      var _this$props3 = this.props,
          extendUrls = _this$props3.extendUrls,
          type = _this$props3.type,
          apiKey = _this$props3.apiKey,
          urlParams = _this$props3.urlParams;
      var urls = [mapUrl[type] + apiKey + (urlParams ? '&libraries=' + urlParams : '') + '&callback=tMapInit'].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(extendUrls || []));

      if (type === 'tMap') {
        urls.push('https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js');
      }

      var promiseAll = urls.map(function (i) {
        return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
          load_script__WEBPACK_IMPORTED_MODULE_15___default()(i, function (err) {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promiseAll);
    }
    /**
     *
     * 使用地图插件获得精准位置
     *
     */

  }, {
    key: "getLocation",
    value: function getLocation() {
      var _this4 = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        var _this4$props = _this4.props,
            apiKey = _this4$props.apiKey,
            type = _this4$props.type,
            appName = _this4$props.appName;

        if (type === 'tMap') {
          _this4.geolocation = new qq.maps.Geolocation(apiKey, appName || 'mukaMap');

          _this4.geolocation.getLocation(function (position) {
            resolve(position);
          }, function (e) {
            reject(e);
          }, {
            timeout: 8000
          });

          return;
        }
      });
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Map, "defaultProps", {
  type: 'tMap',
  height: 600,
  width: 800,
  apiKey: '',
  extendUrls: []
});



/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


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

/***/ })

};;