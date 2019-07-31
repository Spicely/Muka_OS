webpackHotUpdate(5,{

/***/ "./pages/apps/design/editor.tsx":
/*!**************************************!*\
  !*** ./pages/apps/design/editor.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_lib_LForm_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/lib/LForm/style */ "./components/lib/LForm/style/index.ts");
/* harmony import */ var components_lib_LForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/lib/LForm */ "./components/lib/LForm/index.tsx");
/* harmony import */ var muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muka/lib/omit */ "./muka/lib/omit.ts");
/* harmony import */ var components_lib_Carousel_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/lib/Carousel/style */ "./components/lib/Carousel/style/index.ts");
/* harmony import */ var components_lib_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/lib/Carousel */ "./components/lib/Carousel/index.tsx");
/* harmony import */ var components_lib_SearchBar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/lib/SearchBar/style */ "./components/lib/SearchBar/style/index.ts");
/* harmony import */ var components_lib_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/lib/SearchBar */ "./components/lib/SearchBar/index.tsx");
/* harmony import */ var components_lib_Upload_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/lib/Upload/style */ "./components/lib/Upload/style/index.ts");
/* harmony import */ var components_lib_Upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/lib/Upload */ "./components/lib/Upload/index.tsx");
/* harmony import */ var components_lib_Dialog_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/lib/Dialog/style */ "./components/lib/Dialog/style/index.ts");
/* harmony import */ var components_lib_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/lib/Dialog */ "./components/lib/Dialog/index.tsx");
/* harmony import */ var components_lib_Pagination_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/lib/Pagination/style */ "./components/lib/Pagination/style/index.ts");
/* harmony import */ var components_lib_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/lib/Pagination */ "./components/lib/Pagination/index.tsx");
/* harmony import */ var components_lib_ScrollView_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/lib/ScrollView/style */ "./components/lib/ScrollView/style/index.ts");
/* harmony import */ var components_lib_ScrollView_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(components_lib_ScrollView_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_lib_ScrollView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/lib/ScrollView */ "./components/lib/ScrollView/index.tsx");
/* harmony import */ var components_lib_Image_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/lib/Image/style */ "./components/lib/Image/style/index.ts");
/* harmony import */ var components_lib_Image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/lib/Image */ "./components/lib/Image/index.tsx");
/* harmony import */ var components_lib_Button_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/lib/Button/style */ "./components/lib/Button/style/index.ts");
/* harmony import */ var components_lib_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/lib/Button */ "./components/lib/Button/index.tsx");
/* harmony import */ var components_lib_TabBar_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/lib/TabBar/style */ "./components/lib/TabBar/style/index.ts");
/* harmony import */ var components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/lib/TabBar */ "./components/lib/TabBar/index.tsx");
/* harmony import */ var components_lib_BoxLine_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/lib/BoxLine/style */ "./components/lib/BoxLine/style/index.ts");
/* harmony import */ var components_lib_BoxLine__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/lib/BoxLine */ "./components/lib/BoxLine/index.tsx");
/* harmony import */ var components_lib_Icon_style__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/lib/Icon/style */ "./components/lib/Icon/style/index.ts");
/* harmony import */ var components_lib_Icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/lib/Icon */ "./components/lib/Icon/index.tsx");
/* harmony import */ var components_lib_Drag_style__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/lib/Drag/style */ "./components/lib/Drag/style/index.ts");
/* harmony import */ var components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/lib/Drag */ "./components/lib/Drag/index.tsx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var components_lib_Alert_style__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/lib/Alert/style */ "./components/lib/Alert/style/index.ts");
/* harmony import */ var components_lib_Alert__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! components/lib/Alert */ "./components/lib/Alert/index.tsx");
/* harmony import */ var components_lib_NavBar_style__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! components/lib/NavBar/style */ "./components/lib/NavBar/style/index.ts");
/* harmony import */ var components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! components/lib/NavBar */ "./components/lib/NavBar/index.tsx");
/* harmony import */ var components_lib_LabelHeader_style__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! components/lib/LabelHeader/style */ "./components/lib/LabelHeader/style/index.ts");
/* harmony import */ var components_lib_LabelHeader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! components/lib/LabelHeader */ "./components/lib/LabelHeader/index.tsx");
/* harmony import */ var components_lib_Label_style__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! components/lib/Label/style */ "./components/lib/Label/style/index.ts");
/* harmony import */ var components_lib_Label__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! components/lib/Label */ "./components/lib/Label/index.tsx");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var muka_lib_isArray__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! muka/lib/isArray */ "./muka/lib/isArray.ts");
/* harmony import */ var muka_lib_isString__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! muka/lib/isString */ "./muka/lib/isString.ts");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var layouts_PageHead__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! layouts/PageHead */ "./layouts/PageHead/index.tsx");
/* harmony import */ var layouts_PageLayout__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! layouts/PageLayout */ "./layouts/PageLayout/index.tsx");
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! utils/axios */ "./utils/axios.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_action_design__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! store/action/design */ "./store/action/design/index.ts");
/* harmony import */ var _data_componentData__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../../data/componentData */ "./data/componentData.tsx");
/* harmony import */ var _editComponent__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../editComponent */ "./pages/apps/editComponent.tsx");
/* harmony import */ var layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! layouts/PageLayout/index.less */ "./layouts/PageLayout/index.less");
/* harmony import */ var layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../index.less */ "./pages/apps/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./index.less */ "./pages/apps/design/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_68__);






































































var confirm = antd_lib_modal__WEBPACK_IMPORTED_MODULE_53___default.a.confirm;

var reorder = function reorder(list, startIndex, endIndex) {
  var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_51___default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_50__["default"])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

var AppsDesign =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_48__["default"])(AppsDesign, _Component);

  function AppsDesign() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_43__["default"])(this, AppsDesign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_45__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_46__["default"])(AppsDesign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "state", {
      components: [],
      icons: [],
      images: [],
      total: 0,
      componentName: '',
      selected: 0,
      type: 'LForm',
      searchSelect: false,
      uploadDialog: false,
      pageCurrent: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "index", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "listIndex", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "componentType", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "exFun", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "loading", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabBarChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.mark(function _callee(val) {
        var images, _data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                images = _this.state.images;

                if (!(val === 1 && images.length === 0 && !_this.loading)) {
                  _context.next = 15;
                  break;
                }

                _this.loading = true;
                _context.prev = 3;
                _context.next = 6;
                return Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["default"])('image/globalFind');

              case 6:
                _data = _context.sent;
                _this.loading = false;

                _this.setState({
                  images: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(_data.data.images),
                  total: _data.data.total
                });

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                _this.loading = false;
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleUploadSuccess", function (val, data) {
      var images = _this.state.images;
      var devia = Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["deviaDecrypt"])(data.devia);
      data = JSON.parse(Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["decrypt"])(data.value, data.secret, devia));
      images.unshift(data.data);

      _this.setState({
        images: images
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "getItem", function (exFun) {
      var componentName = _this.state.componentName;
      _this.exFun = exFun;

      if (!componentName) {
        return [];
      }

      var data = Object(_data_componentData__WEBPACK_IMPORTED_MODULE_64__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this));
      return data[componentName];
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleShowUpload", function (field) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])({}, field, true));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "getDialogData",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.mark(function _callee2() {
      var _data2;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["default"])('icons/find');

            case 3:
              _data2 = _context2.sent;

              _this.setState({
                icons: _data2.data
              });

              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleDragEnter", function () {// this.setState({
      //     showLine: true
      // })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleFormChange", function () {
      var _this$props = _this.props,
          componentData = _this$props.componentData,
          setComponentData = _this$props.setComponentData;
      var componentName = _this.state.componentName;

      var pageProps = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(componentData.pagePorps);

      var data = {};

      if (_this.exFun) {
        var val = _this.exFun.getFieldValue();

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_39___default()(val).map(function (i) {
          var key = i.split('.');

          if (key.length > 1) {
            if (val[i]) {
              if (data[key[0]]) {
                data[key[0]][key[1]] = _this.getStyleValue(key[1], val[i]);
              } else {
                data[key[0]] = {};
                data[key[0]][key[1]] = _this.getStyleValue(key[1], val[i]);
              }
            }
          } else {
            data[i] = val[i];
          }

          if (componentName === 'SearchBar' && key[0] === 'extendRadio') {
            if (val[i] === 'label' && !Object(muka_lib_isString__WEBPACK_IMPORTED_MODULE_38__["default"])(val['right'])) {
              data['right'] = '搜索';
            } else if (val[i] === 'actions' && !Object(muka_lib_isArray__WEBPACK_IMPORTED_MODULE_37__["default"])(val['right'])) {
              data['right'] = [{
                type: 'icon',
                url: 'msg',
                color: '#fff'
              }];
            }
          }
        });

        delete data['extendRadio'];
      }

      pageProps[_this.index].props = lodash_assign__WEBPACK_IMPORTED_MODULE_55___default()(pageProps[_this.index].props, data);
      componentData.pagePorps = pageProps;
      setComponentData(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__["default"])({}, componentData));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "setComProps", function (data, dialogName) {
      var _this$props2 = _this.props,
          componentData = _this$props2.componentData,
          setComponentData = _this$props2.setComponentData;
      var right = componentData.pagePorps[_this.index].props.right;
      right[_this.listIndex] = data;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])({}, dialogName, false), function () {
        setComponentData(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54___default()(componentData));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handlePickerChange", function (data) {
      var components = _this.state.components;
      var value = data.map(function (i) {
        return i.url;
      });
      components[_this.index].props = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__["default"])({}, components[_this.index].props, {
        value: value
      });

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "getPageComponentItem", function (fn) {
      var componentData = _this.props.componentData;
      return [{
        component: 'Input',
        label: '页面名称',
        props: {
          placeholder: '请输入名称',
          value: componentData.name,
          maxLength: 16
        },
        additional: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
          color: "#1890ff",
          style: {
            paddingLeft: 0
          }
        }, "\u6CE8\u610F\uFF1A\u9875\u9762\u540D\u79F0\u662F\u4FBF\u4E8E\u540E\u53F0\u67E5\u627E\u3002"),
        field: 'name'
      }, {
        component: 'Textarea',
        label: '页面介绍',
        props: {
          placeholder: '请输入标题',
          value: componentData.introduce,
          maxLength: 50,
          showMaxLength: true
        },
        field: 'introduce'
      }, {
        component: 'Colors',
        label: '页面背景',
        props: {
          initColor: componentData.pageColor,
          onChange: _this.updateComColorData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), 'pageColor')
        },
        field: 'pageColor'
      }];
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleSelectView", function (index) {
      _this.listIndex = index;

      _this.setState({
        searchSelect: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "updateComColorData", function (field, value) {
      var _this$props3 = _this.props,
          componentData = _this$props3.componentData,
          setComponentData = _this$props3.setComponentData;
      componentData[field] = value.hex;
      setComponentData(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_54___default()(componentData));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "onDragTabBar", function (result) {
      if (!result.destination) {
        return;
      }

      var components = _this.state.components;
      var items = reorder(components[_this.index].props.value, result.source.index, result.destination.index);
      components[_this.index].props.value = items;

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "onDragEnd", function (result) {
      if (!result.destination) {
        return;
      }

      var items = reorder(_this.state.components, result.source.index, result.destination.index);

      _this.setState({
        components: items
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabComponent", function (name) {
      _this.setState({
        componentName: name,
        selected: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabBarDel", function (index) {
      confirm({
        title: '提示',
        content: '确定要删除么？',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk: function onOk() {
          var components = _this.state.components;

          components[_this.index].props.value.splice(index, 1);

          _this.setState({
            components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleTabBarInt", function (index, e) {
      var components = _this.state.components;
      components[_this.index].props.value[index].label = e.target.value;

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_47__["default"])(_this), "handleDragSuccess", function (data) {
      var components = _this.state.components;
      components.push(data);

      _this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_44__["default"])(AppsDesign, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var componentData = this.props.componentData;
      var _this$state = this.state,
          searchSelect = _this$state.searchSelect,
          icons = _this$state.icons,
          uploadDialog = _this$state.uploadDialog,
          images = _this$state.images,
          pageCurrent = _this$state.pageCurrent;
      return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(layouts_PageHead__WEBPACK_IMPORTED_MODULE_59__["default"], {
        title: "\u5C0F\u7A0B\u5E8F-\u9875\u9762\u8BBE\u8BA1"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(layouts_PageLayout__WEBPACK_IMPORTED_MODULE_60__["default"], {
        defaultSelected: "/apps",
        defaultExtendSelected: "/apps/design",
        actionsView: this.getActionsView()
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], {
        className: layouts_PageLayout_index_less__WEBPACK_IMPORTED_MODULE_66__["nav_bar"],
        divider: false,
        left: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_LabelHeader__WEBPACK_IMPORTED_MODULE_33__["default"], {
          title: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("span", null, "\u5F53\u524D\u4F4D\u7F6E: ", react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], null, "\u9875\u9762\u8BBE\u8BA1")),
          line: "vertical"
        })
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["app_view"]
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Alert__WEBPACK_IMPORTED_MODULE_29__["default"], {
        inheritColor: true,
        title: "\u5C0F\u7A0B\u5E8F\u8BF4\u660E",
        message: "\u5C0F\u7A0B\u5E8F\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u7BA1\u7406\u540E\u53F0\uFF0C\u53EF\u5728\u6B64\u8BBE\u7F6E\u4E2A\u6027\u5316\u9996\u9875\u6392\u7248\u3001\u57FA\u672C\u8BBE\u7F6E\u3001\u8BBE\u7F6E\u5FAE\u4FE1\u652F\u4ED8\u3001\u5BA1\u6838\u53D1\u5E03\u3002"
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: "flex",
        style: {
          marginTop: '2rem'
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_67__["tpl_phone"], " flex_column")
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["m_tit"],
        onClick: this.handleTabComponent.bind(this, 'Page')
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("span", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["cri"]
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("span", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["lon"]
      })), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"].Box, {
        className: "flex_1 ".concat(_index_less__WEBPACK_IMPORTED_MODULE_67__["m_scroll_view"]),
        style: {
          background: componentData.pageColor
        },
        onDragEnter: this.handleDragEnter,
        onDragSuccess: this.handleDragSuccess
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__["DragDropContext"], {
        onDragEnd: this.onDragEnd
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__["Droppable"], {
        droppableId: "droppable"
      }, function (provided) {
        return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_27__["default"])({}, provided.droppableProps, {
          ref: provided.innerRef,
          style: {
            height: '100%'
          }
        }), componentData.pagePorps.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__["Draggable"], {
            key: index,
            draggableId: index.toString(),
            index: index
          }, function (provided) {
            return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_27__["default"])({
              ref: provided.innerRef
            }, provided.draggableProps, provided.dragHandleProps), _this2.getComponentsView(item, index));
          });
        }), provided.placeholder);
      })))))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        visible: searchSelect,
        title: "\u5B57\u4F53/\u56FE\u7247",
        style: {
          width: 1088,
          height: 756
        },
        onClose: this.handleCloseDialog.bind(this, 'searchSelect'),
        onFirstShow: this.getDialogData
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"], {
        tabBarClassName: "mk_divider",
        style: {
          height: '100%'
        },
        onChange: this.handleTabBarChange
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
        label: "\u5B57\u4F53"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_BoxLine__WEBPACK_IMPORTED_MODULE_22__["default"], null, icons.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
          className: "flex_center ".concat(_index_less__WEBPACK_IMPORTED_MODULE_68__["icons_items"]),
          key: i.id,
          onClick: _this2.setComProps.bind(_this2, {
            type: 'icon',
            'url': i.name
          }, 'searchSelect')
        }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Icon__WEBPACK_IMPORTED_MODULE_24__["default"], {
          icon: i.name
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
        label: "\u670D\u52A1\u5668\u56FE\u7247"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_68__["nav_color"],
        left: null,
        right: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          mold: "primary",
          onClick: this.handleShowUpload.bind(this, 'uploadDialog')
        }, "\u4E0A\u4F20\u56FE\u7247")
      }), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_ScrollView__WEBPACK_IMPORTED_MODULE_14__["default"], {
        scrollY: true,
        className: _index_less__WEBPACK_IMPORTED_MODULE_68__["scroll_view"]
      }, images.map(function (i, index) {
        return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
          className: _index_less__WEBPACK_IMPORTED_MODULE_68__["image"],
          key: index,
          onClick: _this2.setComProps.bind(_this2, {
            type: 'image',
            'url': utils_axios__WEBPACK_IMPORTED_MODULE_61__["baseUrl"] + i.previewUrl
          }, 'searchSelect')
        }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement("div", {
          className: "flex_justify",
          style: {
            width: '100%',
            height: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Image__WEBPACK_IMPORTED_MODULE_16__["default"], {
          src: utils_axios__WEBPACK_IMPORTED_MODULE_61__["baseUrl"] + i.previewUrl,
          className: _index_less__WEBPACK_IMPORTED_MODULE_68__["image_item"]
        })));
      })), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
        disabled: true,
        current: pageCurrent,
        total: 500,
        pageSize: 20,
        onChange: function onChange(val) {
          _this2.setState({
            pageCurrent: val
          });
        }
      })))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "\u4E0A\u4F20\u56FE\u7247",
        footer: null,
        visible: uploadDialog,
        onClose: this.handleCloseDialog.bind(this, 'uploadDialog')
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Upload__WEBPACK_IMPORTED_MODULE_8__["default"].Dragger, {
        style: {
          marginTop: '10px'
        },
        action: "/os/image/globalUpload",
        baserUrl: utils_axios__WEBPACK_IMPORTED_MODULE_61__["baseUrl"],
        withCredentials: true,
        onUploadSuccess: this.handleUploadSuccess,
        uploadViewClassName: _index_less__WEBPACK_IMPORTED_MODULE_68__["uploadViewClassName"]
      }))));
    }
  }, {
    key: "getStyleValue",
    value: function getStyleValue(key, val) {
      switch (key) {
        case 'height':
          return Number(val);

        case 'width':
          return Number(val);

        default:
          return val;
      }
    }
  }, {
    key: "handleCloseDialog",
    value: function handleCloseDialog(field) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_49__["default"])({}, field, false));
    }
  }, {
    key: "handleFormIntChange",
    value: function handleFormIntChange(field, e) {
      var _this$props4 = this.props,
          componentData = _this$props4.componentData,
          setComponentData = _this$props4.setComponentData;

      var pageProps = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(componentData.pagePorps);

      pageProps[this.index].props[field] = e.target.value;
      setComponentData(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_36__["default"])({}, componentData));
    }
  }, {
    key: "getComponentsView",
    value: function getComponentsView(data, index) {
      switch (data.component) {
        case 'NavBar':
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
            edit: data.edit,
            key: index,
            onClick: this.handleEdit.bind(this, data, index),
            onEdit: this.handleEditStart.bind(this, data, index, 'LForm'),
            onDelete: this.handleDelete.bind(this, index)
          }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], data.props));

        case 'SearchBar':
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
            edit: data.edit,
            key: index,
            onClick: this.handleEdit.bind(this, data, index),
            onEdit: this.handleEditStart.bind(this, data, index, 'LForm'),
            onDelete: this.handleDelete.bind(this, index)
          }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], data.props));

        case 'Carousel':
          return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
            edit: data.edit,
            key: index,
            onClick: this.handleEdit.bind(this, data, index),
            onEdit: this.handleEditStart.bind(this, data, index, 'Carousel'),
            onDelete: this.handleDelete.bind(this, index)
          }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], data.props));

        case 'TabBar':
          {
            var value = data.props.value || [];

            Object(muka_lib_omit__WEBPACK_IMPORTED_MODULE_2__["default"])(data.props, ['value']);

            return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(_editComponent__WEBPACK_IMPORTED_MODULE_65__["default"], {
              edit: data.edit,
              key: index,
              onClick: this.handleEdit.bind(this, data, index),
              onEdit: this.handleEditStart.bind(this, data, index, 'Carousel'),
              onDelete: this.handleDelete.bind(this, index)
            }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"], data.props, value.map(function (i, index) {
              return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
                label: i.label || react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
                  color: "red"
                }, "\u672A\u8BBE\u7F6E"),
                key: index
              }, i.content);
            })));
          }
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index) {
      var components = this.state.components;
      components.splice(index, 1);
      this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    }
  }, {
    key: "handleEditStart",
    value: function handleEditStart(data, index, field) {
      this.index = index;
      this.componentType = data.component;
      this.setState({
        type: field,
        componentName: data.component,
        selected: 1
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(data, index) {
      var components = this.state.components;
      data.edit = true;
      components[index] = data;
      this.setState({
        components: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_41__["default"])(components)
      });
    }
  }, {
    key: "getActionsView",
    value: function getActionsView() {
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          componentName = _this$state2.componentName;
      return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"], {
        type: "vertical",
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["com"],
        selected: selected,
        tabBarClassName: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_bar"],
        tabItemClassName: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_actions"]
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
        icon: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Icon__WEBPACK_IMPORTED_MODULE_24__["default"], {
          icon: "ios-apps"
        }),
        tooltipTitle: "\u9875\u9762\u7EC4\u4EF6",
        placement: "left"
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        data: {
          component: 'NavBar',
          props: {},
          edit: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_NavBar__WEBPACK_IMPORTED_MODULE_31__["default"], null)), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_label"],
        color: "#999"
      }, "\u8F6E\u64AD"), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        data: {
          component: 'Carousel',
          props: {
            value: ['/static/banner-1.jpg', '/static/banner-2.jpg']
          },
          edit: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: ['/static/banner-1.jpg', '/static/banner-2.jpg']
      })), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Label__WEBPACK_IMPORTED_MODULE_35__["default"], {
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["com_label"],
        color: "#999"
      }, "\u9009\u9879\u5361"), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Drag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        data: {
          component: 'TabBar',
          props: {
            value: [{
              label: '选项',
              content: '选项',
              data: ''
            }, {
              label: '选项',
              content: '选项',
              data: ''
            }]
          },
          edit: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
        label: "\u9009\u9879"
      }, "\u9009\u9879"), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
        label: "\u9009\u9879"
      }, "\u9009\u9879")))), react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_TabBar__WEBPACK_IMPORTED_MODULE_20__["default"].Item, {
        icon: react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_Icon__WEBPACK_IMPORTED_MODULE_24__["default"], {
          icon: "ios-arrow-back"
        }),
        tooltipTitle: "\u53C2\u6570\u8BBE\u7F6E",
        placement: "left"
      }, componentName === 'Page' && this.getPageNode(), componentName !== 'Page' && react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_LForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        getItems: this.getItem,
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["form_style"]
      })));
    }
  }, {
    key: "getPageNode",
    value: function getPageNode() {
      return react__WEBPACK_IMPORTED_MODULE_56___default.a.createElement(components_lib_LForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        getItems: this.getPageComponentItem,
        className: _index_less__WEBPACK_IMPORTED_MODULE_67__["form_style"]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_42__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.mark(function _callee3(ctx) {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_40___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["default"])('apps/findPageProps', {
                  classifyId: ctx.query.classifyId
                }, {
                  headers: {
                    cookie: ctx.req && ctx.req.headers.cookie
                  }
                });

              case 2:
                data = _context3.sent;

                if (!(data.status === 203 && ctx.res)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", Object(utils_axios__WEBPACK_IMPORTED_MODULE_61__["initErrorToView"])(ctx));

              case 5:
                ctx.store.dispatch({
                  type: store_action_design__WEBPACK_IMPORTED_MODULE_63__["SET_COMPONENT_DATA"],
                  data: data.data
                });
                return _context3.abrupt("return", {});

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AppsDesign;
}(react__WEBPACK_IMPORTED_MODULE_56__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_62__["connect"])(function (state) {
  return {
    componentData: state.componentData
  };
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_58__["bindActionCreators"])(store_action_design__WEBPACK_IMPORTED_MODULE_63__["actions"], dispatch);
})(AppsDesign));

/***/ })

})
//# sourceMappingURL=5.a4cd19efc0412414390f.hot-update.js.map