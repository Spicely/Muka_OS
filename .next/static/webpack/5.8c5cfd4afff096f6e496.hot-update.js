webpackHotUpdate(5,{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var components_lib_Carousel_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/lib/Carousel/style */ "./components/lib/Carousel/style/index.ts");
/* harmony import */ var components_lib_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/lib/Carousel */ "./components/lib/Carousel/index.tsx");
/* harmony import */ var components_lib_Image_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/lib/Image/style */ "./components/lib/Image/style/index.ts");
/* harmony import */ var components_lib_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/lib/Image */ "./components/lib/Image/index.tsx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);


















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "state", {
      lists: [],
      selected: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "getData",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_15___default()({
                // url: 'http://www.snplay.top:8080/fs/getimages',
                url: 'http://localhost:4000/api/fs/getimages',
                method: 'POST'
              }).then(function (data) {
                _this.setState({
                  lists: data.data.data
                });
              });

              _this.reload();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "reload", function () {
      setInterval(function () {
        axios__WEBPACK_IMPORTED_MODULE_15___default()({
          // url: 'http://www.snplay.top:8080/fs/getimages',
          url: 'http://localhost:4000/api/fs/getimages',
          method: 'POST'
        }).then(function (data) {
          var lists = _this.state.lists;

          if (lists.length !== data.data.data.length) {
            var newData = data.data.data.filter(function (i) {
              var val = lists.find(function (k) {
                return i.id === k.id;
              });
              return val ? false : true;
            });
            var length = lists.length;

            _this.setState({
              lists: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(lists), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newData)),
              selected: length
            });
          }
        });
      }, 10000);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          lists = _this$state.lists,
          selected = _this$state.selected;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(components_lib_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        autoplay: true,
        selected: selected,
        time: 5000,
        style: {
          width: '100vw',
          height: '100vh'
        },
        dots: false
      }, lists.map(function (i, index) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          style: {
            position: 'relative',
            width: '100%',
            height: '100%'
          },
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(components_lib_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: 'http://www.snplay.top:8080/' + i.url,
          style: {
            width: 'auto',
            height: '100%',
            display: 'block',
            margin: '0 auto'
          }
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "flex_center",
          style: {
            position: 'absolute',
            height: '70px',
            width: '100%',
            bottom: 0,
            left: 0,
            background: 'rgba(0,0,0,0.5)',
            fontSize: '20px',
            color: '#fff'
          }
        }, "CN: ", i.msg));
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);



/***/ })

})
//# sourceMappingURL=5.8c5cfd4afff096f6e496.hot-update.js.map