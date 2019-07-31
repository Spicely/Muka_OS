(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/lib/Map/index.tsx":
/*!**************************************!*\
  !*** ./components/lib/Map/index.tsx ***!
  \**************************************/
/*! exports provided: setMapUrlSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapUrlSource", function() { return setMapUrlSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var muka_lib_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! muka/lib/browser */ "./muka/lib/browser.ts");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! load-script */ "./node_modules/load-script/index.js");
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");

















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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(Map, _Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "node", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "location", undefined);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "geolocation", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "geocoder", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "events", []);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Map, [{
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
        Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
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
                    if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onLocationAddr)) {
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

                      if (!muka_lib_browser__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile) {
                        lat = lat + 0.008081;
                        lng = lng - 0.005184;
                      }

                      var latLng = new qq.maps.LatLng(lat, lng);
                      geocoder.getAddress(latLng);
                    }).catch(function () {
                      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onLocationError)) {
                        onLocationError();
                      }
                    });
                  } else {
                    if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onLocationAddr)) {
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

        if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onLoadUrlError)) {
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
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_16__["getClassName"])("map"),
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
      var urls = [mapUrl[type] + apiKey + (urlParams ? '&libraries=' + urlParams : '') + '&callback=tMapInit'].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(extendUrls || []));

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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Map, "defaultProps", {
  type: 'tMap',
  height: 600,
  width: 800,
  apiKey: '',
  extendUrls: []
});



/***/ })

}]);
//# sourceMappingURL=4.js.map