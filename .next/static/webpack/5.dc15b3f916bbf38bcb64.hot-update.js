webpackHotUpdate(5,{

/***/ "./components/lib/Pagination/index.tsx":
/*!*********************************************!*\
  !*** ./components/lib/Pagination/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button */ "./components/lib/Button/index.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Icon */ "./components/lib/Icon/index.tsx");













var prefixClass = 'pagination';

var Pagination =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Pagination, _Component);

  function Pagination(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Pagination);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Pagination).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      pageSize: 10
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (index) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          current = _this$props.current;
      if (index === current) return;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(onChange)) {
        onChange(index);
      }
    });

    _this.state.pageSize = props.pageSize || 10;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var pageSize = this.state.pageSize;

      if (nextProps.pageSize && nextProps.pageSize !== pageSize) {
        this.setState({
          pageSize: nextProps.pageSize
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          current = _this$props2.current,
          total = _this$props2.total;
      var pageSize = this.state.pageSize;
      var num = Math.ceil(total / pageSize);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass), className)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn")),
        disabled: current === 1 ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "ios-arrow-back",
        fontSize: "18px",
        color: current === 1 ? '#d9d9d9' : 'rgba(0, 0, 0, 0.65)'
      })), _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(new Array(num)).map(function (i, index) {
        if (num > 7) {
          if (index + 1 === 1) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
              key: index,
              onClick: _this2.handleChange.bind(_this2, index + 1)
            }, index + 1);
          } else if (index + 1 === num) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
              key: index,
              onClick: _this2.handleChange.bind(_this2, index + 1)
            }, index + 1);
          } else if (current === 1) {
            if (index + 1 < current + 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            } else if (index + 1 === current + 6) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn ").concat(_utils__WEBPACK_IMPORTED_MODULE_10__["prefix"], "notline"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                icon: "ios-more",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.65)"
              }));
            }
          } else if (current === num) {
            if (index + 1 >= num - 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            } else if (index + 1 === current - 6) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn ").concat(_utils__WEBPACK_IMPORTED_MODULE_10__["prefix"], "notline"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                icon: "ios-more",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.65)"
              }));
            }
          } else {
            if (current <= 3 && index + 1 <= 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            }

            if (current >= num - 3 && index + 1 >= num - 5) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            }

            console.log(Math.abs(current - index), index + 1);

            if (Math.abs(current - index) === 4) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn ").concat(_utils__WEBPACK_IMPORTED_MODULE_10__["prefix"], "notline"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                icon: "ios-more",
                fontSize: "18px",
                color: "rgba(0, 0, 0, 0.65)"
              }));
            }

            if (Math.abs(current - (index + 1)) <= 2) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
                key: index,
                onClick: _this2.handleChange.bind(_this2, index + 1)
              }, index + 1);
            } // if (current === index + 1) {
            //     return (
            //         <Button
            //             className={getClassName(`${prefixClass}_btn`, current === index + 1 ? prefix + 'select' : '')}
            //             key={index}
            //             onClick={this.handleChange.bind(this, index + 1)}
            //         >
            //             {index + 1}
            //         </Button>
            //     )
            // }
            // if (current === 2 && index + 1 === 5) {
            //     return (
            //         <Button
            //             className={getClassName(`${prefixClass}_btn`, current === index + 1 ? prefix + 'select' : '')}
            //             key={index}
            //             onClick={this.handleChange.bind(this, index + 1)}
            //         >
            //             {index + 1}
            //         </Button>
            //     )
            // }

          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn"), current === index + 1 ? _utils__WEBPACK_IMPORTED_MODULE_10__["prefix"] + 'select' : ''),
            key: index
          }, index + 1);
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getClassName"])("".concat(prefixClass, "_btn")),
        disabled: current === num ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        icon: "ios-arrow-forward",
        fontSize: "18px",
        color: current === num ? '#d9d9d9' : 'rgba(0, 0, 0, 0.65)'
      })));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Pagination, "defaultProps", {
  pageSizeOptions: [10, 20, 30],
  current: 1,
  total: 10
});



/***/ })

})
//# sourceMappingURL=5.dc15b3f916bbf38bcb64.hot-update.js.map