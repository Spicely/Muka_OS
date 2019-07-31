webpackHotUpdate(3,{

/***/ "./components/lib/Button/index.tsx":
false,

/***/ "./components/lib/Carousel/style/index.less":
/*!**************************************************!*\
  !*** ./components/lib/Carousel/style/index.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1564559735897");
          });
      }
    }
  

/***/ }),

/***/ "./components/lib/Carousel/style/index.ts":
/*!************************************************!*\
  !*** ./components/lib/Carousel/style/index.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style */ "./components/lib/style/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/lib/Carousel/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image/style */ "./components/lib/Image/style/index.ts");




/***/ }),

/***/ "./components/lib/Icon/index.tsx":
false,

/***/ "./components/lib/Input/index.tsx":
false,

/***/ "./components/lib/Input/search.tsx":
false,

/***/ "./components/lib/LForm/index.tsx":
/*!****************************************!*\
  !*** ./components/lib/LForm/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muka/lib/hash */ "./muka/lib/hash.ts");
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! muka/lib/omit */ "./muka/lib/omit.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! muka/lib/isUndefined */ "./muka/lib/isUndefined.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");




















// tslint:disable-next-line: only-arrow-functions tslint:disable-next-line: no-shadowed-variable
var loadableComponent = function loadableComponent(component) {
  return react_loadable__WEBPACK_IMPORTED_MODULE_16___default()({
    loader: function loader() {
      return component;
    },
    loading: function loading() {
      return null;
    },
    // tslint:disable-next-line: no-shadowed-variable
    render: function render(loaded, props) {
      var View;

      if (loaded.Group) {
        View = loaded.Group;
      } else {
        View = loaded.default;
      }

      if (View) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, props);
      }

      return null;
    }
  });
};

var prefixClass = 'l_form';

var LForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(LForm, _Component);

  function LForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, LForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(LForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "items", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "lref", {
      getFieldValue: _this.getFieldValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this)),
      cleanFieldValue: _this.cleanFieldValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this)),
      setFieldValue: _this.setFieldValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this)),
      showFieldElement: _this.setFieldElement.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), true),
      hideFieldElement: _this.setFieldElement.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), false),
      updateFieldProps: _this.updateFieldProps.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this)) // tslint:disable-next-line: no-shadowed-variable

    });

    var getItems = _this.props.getItems;
    var vals = {};
    var childs = [];
    _this.items = getItems(_this.lref);

    _this.items.map(function (item, index) {
      var field = item.field || "".concat(item.component, "_").concat(index);

      var _porps = item.props || {};

      switch (item.component) {
        case 'Radio':
          {
            vals[field] = _porps.value; // tslint:disable-next-line: align
          }
          break;

        case 'Slider':
          {
            vals[field] = _porps.value || _porps.defaultValue || 0; // tslint:disable-next-line: align
          }
          break;

        case 'Colors':
          {
            vals[field] = _porps.initColor || ''; // tslint:disable-next-line: align
          }
          break;

        case 'LUpload':
          {
            vals[field] = _porps.fileList || (_porps.maxLength > 1 ? [] : ''); // tslint:disable-next-line: align
          }
          break;

        case 'ImagePicker':
          {
            vals[field] = _porps.value || []; // tslint:disable-next-line: align
          }
          break;

        case 'Map':
          {
            vals[field] = _porps.value || {}; // tslint:disable-next-line: align
          }
          break;

        default:
          {
            vals[field] = _porps.value || '';
          }
      }

      childs.push({
        type: item.component,
        view: null,
        field: field,
        additional: item.additional,
        label: item.label,
        props: item.props || {},
        render: Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__["default"])(item.render) ? true : item.render
      });
    });

    _this.state = {
      vals: vals,
      childs: childs
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(LForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var getItems = nextProps.getItems;
      var _this$state = this.state,
          childs = _this$state.childs,
          vals = _this$state.vals;
      var items = getItems(this.lref);
      this.items = items;

      var newChild = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(childs);

      var status = false;
      items.forEach(function (item, index) {
        // 如果组件不存在 则创建
        if (!newChild[index]) {
          status = true;

          var _field = item.field || "".concat(item.component, "_").concat(index);

          var _porps = item.props || {};

          newChild[index] = {
            type: item.component,
            view: null,
            field: _field,
            label: item.label,
            props: _porps,
            additional: item.additional,
            render: Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__["default"])(item.render) ? true : item.render
          };

          switch (item.component) {
            case 'Radio':
              {
                vals[_field] = _porps.value; // tslint:disable-next-line: align
              }
              break;

            case 'Slider':
              {
                vals[_field] = _porps.value || _porps.defaultValue || 0; // tslint:disable-next-line: align
              }
              break;

            case 'Colors':
              {
                vals[_field] = _porps.initColor || ''; // tslint:disable-next-line: align
              }
              break;

            case 'LUpload':
              {
                vals[_field] = _porps.fileList || (_porps.maxLength > 1 ? [] : ''); // tslint:disable-next-line: align
              }
              break;

            case 'ImagePicker':
              {
                vals[_field] = _porps.value || []; // tslint:disable-next-line: align
              }
              break;

            case 'Map':
              {
                vals[_field] = _porps.value || {}; // tslint:disable-next-line: align
              }
              break;

            default:
              {
                vals[_field] = _porps.value || '';
              }
          }

          return;
        }

        if (item.field === newChild[index].field) {
          var newProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(item.props || {}, ['value']);

          newChild[index].props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, newChild[index].props, newProps);
          newChild[index].additional = item.additional;
        }
      });
      this.setState({
        childs: newChild,
        vals: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, vals)
      }, function () {
        if (status) {
          _this2.getTypeChild();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var childs = this.state.childs;
      var _this$props = this.props,
          className = _this$props.className,
          showType = _this$props.showType;
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("l_form ".concat(showType), className)
      }, childs.map(function (item, index) {
        if (item.view && item.render) {
          return _this3.setTypeCom(_this3.items[index].component, item.view, item.props, item.field, index, item.className, item.label, item.additional);
        }

        return undefined;
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTypeChild();
    }
  }, {
    key: "getTypeChild",
    value: function getTypeChild() {
      var _this4 = this;

      var childs = this.state.childs;
      var newChilds = childs.map(function (item, index) {
        if (item.view) {
          if (item.type !== _this4.items[index].component) {
            var Com = _this4.typeChild(_this4.items[index].component);

            if (Com) {
              item.view = Com;
            }
          }
        } else {
          var _Com = _this4.typeChild(_this4.items[index].component);

          var _field2 = item.field || "".concat(item.type, "_").concat(index);

          if (_Com) {
            item = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, item, {
              view: _Com,
              type: item.type,
              field: _field2,
              label: item.label,
              props: item.props || {},
              render: Object(muka_lib_isUndefined__WEBPACK_IMPORTED_MODULE_7__["default"])(item.render) ? true : item.render
            });
          }
        }

        return item;
      });
      this.setState({
        childs: newChilds
      });
    } // tslint:disable-next-line: no-shadowed-variable

  }, {
    key: "typeChild",
    value: function typeChild(component) {
      switch (component) {
        case 'Input':
          return loadableComponent(Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, /*! ../Input */ "./components/lib/Input/index.tsx")));

        case 'Button':
          return loadableComponent(__webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../Button */ "./components/lib/Button/index.tsx")));

        case 'Radio':
          return loadableComponent(__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Radio/Group */ "./components/lib/Radio/Group.tsx")));

        case 'DatePicker':
          return loadableComponent(Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../DatePicker */ "./components/lib/DatePicker/index.tsx")));

        case 'LUpload':
          return loadableComponent(Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ../LUpload */ "./components/lib/LUpload/index.tsx")));

        case 'Label':
          return loadableComponent(__webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! ../Label */ "./components/lib/Label/index.tsx")));

        case 'RadioGroup':
          return loadableComponent(__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Radio/Group */ "./components/lib/Radio/Group.tsx")));

        case 'Select':
          return loadableComponent(__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! antd/lib/select */ "./node_modules/antd/lib/select/index.js", 7)));

        case 'ImagePicker':
          return loadableComponent(Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../ImagePicker */ "./components/lib/ImagePicker/index.tsx")));

        case 'Map':
          return loadableComponent(Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ../Map */ "./components/lib/Map/index.tsx")));

        case 'Textarea':
          return loadableComponent(__webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(null, /*! ../Textarea */ "./components/lib/Textarea/index.tsx")));

        case 'Colors':
          return loadableComponent(Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ../Colors */ "./components/lib/Colors/index.tsx")));

        case 'Carousel':
          return loadableComponent(__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../Carousel */ "./components/lib/Carousel/index.tsx")));

        case 'Slider':
          return loadableComponent(__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! antd/lib/slider */ "./node_modules/antd/lib/slider/index.js", 7)));

        default:
          return null;
      }
    } // tslint:disable-next-line: no-shadowed-variable

  }, {
    key: "setTypeCom",
    value: function setTypeCom(component, View, props, field, key, className, label, additional) {
      var vals = this.state.vals; /// 得到field

      field = field ? field : "".concat(component, "_").concat(key);
      props = props || {};

      switch (component) {
        case 'Input':
          {
            var _porps = props;

            var vProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['value', 'onChange', 'onClose']); // tslint:disable-next-line: only-arrow-functions


            var onChange = _porps.onChange || function (e) {}; // tslint:disable-next-line: only-arrow-functions


            var onClose = _porps.onClose || function (val) {};

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1 flex_justify"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, vProps, {
              value: vals[field],
              onChange: this.setVal.bind(this, field, onChange),
              onClose: this.cleanInputVal.bind(this, field, onClose),
              key: field
            })))), additional && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label flex_justify"))
            }, additional));
          }

        case 'Textarea':
          {
            var _porps2 = props;

            var _vProps = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['value', 'onChange']); // tslint:disable-next-line: only-arrow-functions


            var _onChange = _porps2.onChange || function (e) {};

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps, {
              value: vals[field],
              onChange: this.setVal.bind(this, field, _onChange),
              key: field
            })))), additional && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label flex_justify"))
            }, additional));
          }

        case 'Colors':
          {
            var _porps3 = props;

            var _vProps2 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['onChange']); // tslint:disable-next-line: only-arrow-functions


            var _onChange2 = _porps3.onChange || function (e) {};

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1 flex_justify"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps2, {
              initColor: vals[field],
              onChange: this.setColors.bind(this, field, _onChange2),
              key: field
            }))));
          }

        case 'Carousel':
          {
            var _porps4 = props;

            var _vProps3 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['onChange']);

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps3, {
              key: field
            }))));
          }

        case 'Slider':
          {
            var _vProps4 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['onChange', 'value']);

            var _porps5 = props;
            var _onChange3 = _porps5.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list flex_justify"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label flex_justify"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps4, {
              key: field,
              value: vals[field],
              onChange: this.setRVal.bind(this, field, _onChange3)
            })))));
          }

        case 'Button':
          {
            var _vProps5 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, []);

            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps5, {
              key: field
            }));
          }

        case 'Radio':
          {
            var _vProps6 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['onChange', 'value']);

            var _porps6 = props;
            var _onChange4 = _porps6.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list flex_justify"), className),
              key: field
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex"
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps6, {
              value: vals[field],
              onChange: this.setRVal.bind(this, field, _onChange4)
            })))), additional && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__additional flex_justify"))
            }, additional));
          }

        case 'Map':
          {
            var _vProps7 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['onLocationAddr']);

            var _porps7 = props;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
              onLocationAddr: this.steArrVal.bind(this, field, _porps7.onLocationAddr)
            }, _vProps7))));
          }

        case 'DatePicker':
          {
            var _vProps8 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['onChange']);

            var _porps8 = props;
            var _onChange5 = _porps8.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps8, {
              key: field,
              value: vals[field] ? moment__WEBPACK_IMPORTED_MODULE_17___default()(vals[field]) : null,
              onChange: this.setDatePickerVal.bind(this, field, _onChange5)
            }));
          }

        case 'ImagePicker':
          {
            var _vProps9 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['value', 'onChange']);

            var _porps9 = props;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list  flex"), className),
              key: field
            }, label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label"))
            }, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
              value: vals[field],
              onChange: this.steArrVal.bind(this, field, _porps9.onChange)
            }, _vProps9))));
          }

        case 'LUpload':
          {
            var _vProps10 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['fileList', 'onChange']);

            var _porps10 = props;
            var _onChange6 = _porps10.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex",
              key: field
            }, _porps10.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("".concat(prefixClass, "__list_label"))
            }, _porps10.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps10, {
              fileList: vals[field],
              onChange: this.setUploadVal.bind(this, field, _onChange6)
            })));
          }

        case 'RadioGroup':
          {
            var _vProps11 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['value', 'onChange']);

            var _porps11 = props;
            var _onChange7 = _porps11.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])('l_form_radio_group flex', className),
              key: field
            }, _porps11.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])('l_form_radio_group_label flex_justify')
            }, _porps11.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps11, {
              value: vals[field],
              onChange: this.setVal.bind(this, field, _onChange7)
            })));
          }

        case 'Select':
          {
            var _vProps12 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['value', 'onChange']);

            var _porps12 = props;
            var _onChange8 = _porps12.onChange;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])('l_form_select flex', className),
              key: field
            }, _porps12.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])('l_form_select_label flex_justify')
            }, _porps12.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps12, {
              value: vals[field],
              className: "flex_1",
              onChange: this.setRVal.bind(this, field, _onChange8)
            })));
          }

        case 'Label':
          {
            var _vProps13 = Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['value', 'onChange', 'className']);

            var _porps13 = props;
            return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: Object(_utils__WEBPACK_IMPORTED_MODULE_18__["getClassName"])("l_form_label flex", _porps13.className),
              key: field
            }, _porps13.label && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_justify",
              style: {
                marginRight: '0.4rem'
              }
            }, _porps13.label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
              className: "flex_1 flex_justify"
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(View, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _vProps13, {
              style: {
                paddingTop: '0',
                paddingBottom: '0'
              },
              key: field
            }), _porps13.value)));
          }

        default:
          return null;
      }
    }
  }, {
    key: "setUploadVal",
    value: function setUploadVal(field, cb, file) {
      var vals = this.state.vals;
      vals[field] = file.fileList;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb(file);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "steArrVal",
    value: function steArrVal(field, cb, val) {
      var vals = this.state.vals;
      vals[field] = val;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb(val);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setColors",
    value: function setColors(field, cb, color, e) {
      var vals = this.state.vals;
      vals[field] = color.hex;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb(color, e);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setVal",
    value: function setVal(field, cb, e) {
      var vals = this.state.vals;
      vals[field] = e.target.value;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb(e);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setDatePickerVal",
    value: function setDatePickerVal(field, cb, val, dateString) {
      var vals = this.state.vals;
      vals[field] = dateString;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb(val, dateString);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setRVal",
    value: function setRVal(field, cb, val) {
      var vals = this.state.vals;
      vals[field] = val;

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb(val);
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "cleanInputVal",
    value: function cleanInputVal(field, cb) {
      var vals = this.state.vals;
      vals[field] = '';

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(cb)) {
        cb('');
      }

      this.setState({
        vals: vals
      });
    }
  }, {
    key: "getComVal",
    value: function getComVal(item, field) {
      var vals = this.state.vals;

      switch (item.type) {
        case 'LUpload':
          {
            var _props = item.props || {};

            var baseUrl = _props.baseUrl || '';

            if (_props.maxLength === 1) {
              // tslint:disable-next-line: no-string-literal
              var url = vals[field][0] && (vals[field][0]['url'] || vals[field][0]['response']['data']) || '';

              if (baseUrl && Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(url, baseUrl)) {
                return url.substring(baseUrl.length);
              } else {
                return url;
              }
            } else {
              return vals[field].map(function (i) {
                // tslint:disable-next-line: no-string-literal
                var url = i['url'] || i['response']['data'];

                if (baseUrl && Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(url, baseUrl)) {
                  return url.substring(baseUrl.length);
                } else {
                  return url;
                }
              });
            }
          }

        default:
          return vals[field];
      }
    }
  }, {
    key: "getFieldValue",
    value: function getFieldValue(params) {
      var _this5 = this;

      var childs = this.state.childs;
      var val = {};
      childs.map(function (item, index) {
        if (params) {
          params.map(function (i) {
            if (item.field === i) {
              val[i] = _this5.getComVal(item, i);
            }
          });
        } else {
          val[item.field] = _this5.getComVal(item, item.field);
        }
      });
      return val;
    }
  }, {
    key: "cleanFieldValue",
    value: function cleanFieldValue() {
      var vals = this.state.vals;
      this.items.map(function (item, index) {
        var field = item.field || "".concat(item.component, "_").concat(index); // tslint:disable-next-line: no-shadowed-variable

        var props = item.props || {};

        switch (item.component) {
          case 'Radio':
            {
              vals[field] = props.value; // tslint:disable-next-line: align
            }
            break;

          case 'LUpload':
            {
              vals[field] = []; // tslint:disable-next-line: align
            }
            break;

          case 'ImagePicker':
            {
              vals[field] = props.value ? props.value : []; // tslint:disable-next-line: align
            }
            break;

          default:
            {
              vals[field] = props.value ? props.value : '';
            }
        }
      });
      this.setState({
        vals: vals
      });
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(params) {
      var vals = this.state.vals;
      this.items.map(function (item, index) {
        var field = item.field || "".concat(item.component, "_").concat(index);

        if (params[field]) {
          switch (item.component) {
            case 'LUpload':
              {
                var _props = item.props || {};

                var baseUrl = _props.baseUrl || '';

                if (_props.maxLength === 1) {
                  vals[field] = [{
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'done',
                    url: baseUrl + params[field]
                  }];
                } else {
                  // tslint:disable-next-line: no-shadowed-variable
                  vals[field] = params[field].map(function (i, index) {
                    return {
                      uid: "".concat(index),
                      name: "reload_".concat(index, ".png"),
                      status: 'done',
                      url: baseUrl + i
                    };
                  });
                } // tslint:disable-next-line: align

              }
              break;

            default:
              {
                vals[field] = params[field];
              }
          }
        }
      });
      this.setState({
        vals: vals
      });
    }
  }, {
    key: "updateFieldProps",
    value: function updateFieldProps() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var childs = this.state.childs;

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params);

      var newChilds = childs.map(function (i) {
        if (Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(params, i.field)) {
          i.props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, i.props, params[i.field]);
        }

        return i;
      });
      this.setState({
        childs: newChilds
      });
    }
  }, {
    key: "setFieldElement",
    value: function setFieldElement(status, params) {
      var childs = this.state.childs;
      var newChilds = childs.map(function (i) {
        if (Object(muka_lib_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(params, i.field)) {
          i.render = status;
        }

        return i;
      });
      this.setState({
        childs: newChilds
      });
    }
  }]);

  return LForm;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(LForm, "defaultProps", {
  // tslint:disable-next-line: object-literal-shorthand tslint:disable-next-line: only-arrow-functions
  getItems: function getItems(exFun) {
    return [];
  },
  showType: 'column'
});



/***/ }),

/***/ "./muka/lib/isBool.ts":
false,

/***/ "./muka/lib/isEmpty.ts":
false,

/***/ "./muka/sources/type/isBool.ts":
false,

/***/ "./muka/sources/type/isEmpty.ts":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Cindex.tsx!./":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Cindex.tsx ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/next-dev.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/next-dev.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __importStar(__webpack_require__(/*! ./ */ "./node_modules/next/dist/client/index.js")),
    next = _1;

var event_source_polyfill_1 = __importDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/event-source-polyfill.js"));

var on_demand_entries_client_1 = __importDefault(__webpack_require__(/*! ./on-demand-entries-client */ "./node_modules/next/dist/client/on-demand-entries-client.js"));

var webpack_hot_middleware_client_1 = __importDefault(__webpack_require__(/*! ./webpack-hot-middleware-client */ "./node_modules/next/dist/client/webpack-hot-middleware-client.js")); // Temporary workaround for the issue described here:
// https://github.com/zeit/next.js/issues/3775#issuecomment-407438123
// The runtimeChunk doesn't have dynamic import handling code when there hasn't been a dynamic import
// The runtimeChunk can't hot reload itself currently to correct it when adding pages using on-demand-entries


__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ./noop */ "./node_modules/next/dist/client/noop.js", 7)); // Support EventSource on Internet Explorer 11

if (!window.EventSource) {
  window.EventSource = event_source_polyfill_1.default;
}

var _window = window,
    assetPrefix = _window.__NEXT_DATA__.assetPrefix;
var prefix = assetPrefix || '';
var webpackHMR = webpack_hot_middleware_client_1.default({
  assetPrefix: prefix
});
window.next = next;

_1.default({
  webpackHMR: webpackHMR
}).then(function (emitter) {
  on_demand_entries_client_1.default({
    assetPrefix: prefix
  });
  var lastScroll;
  emitter.on('before-reactdom-render', function (_ref) {
    var Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent;

    // Remember scroll when ErrorComponent is being rendered to later restore it
    if (!lastScroll && Component === ErrorComponent) {
      var _window2 = window,
          pageXOffset = _window2.pageXOffset,
          pageYOffset = _window2.pageYOffset;
      lastScroll = {
        x: pageXOffset,
        y: pageYOffset
      };
    }
  });
  emitter.on('after-reactdom-render', function (_ref2) {
    var Component = _ref2.Component,
        ErrorComponent = _ref2.ErrorComponent;

    if (lastScroll && Component !== ErrorComponent) {
      // Restore scroll after ErrorComponent was replaced with a page component by HMR
      var _lastScroll = lastScroll,
          x = _lastScroll.x,
          y = _lastScroll.y;
      window.scroll(x, y);
      lastScroll = null;
    }
  });
}).catch(function (err) {
  console.error('Error was not caught', err);
});

/***/ }),

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
                url: 'http://www.snplay.top:8080/fs/getimages',
                // url: 'http://localhost:4000/api/fs/getimages',
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
          url: 'http://www.snplay.top:8080/fs/getimages',
          // url: 'http://localhost:4000/api/fs/getimages',
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
            var length = lists.length - 1;

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



/***/ }),

/***/ 28:
/*!*********************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Cindex.tsx ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=F%3A%5Cwww%5CMuka_OS%5Cpages%5Cindex.tsx!./");


/***/ })

})
//# sourceMappingURL=3.6a30f05635f8aab39cd6.hot-update.js.map