exports.ids = [1];
exports.modules = {

/***/ "./components/lib/ImagePicker/cropImage.ts":
/*!*************************************************!*\
  !*** ./components/lib/ImagePicker/cropImage.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCroppedImg; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);




var createImage = function createImage(url) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var image = new Image();
    image.addEventListener('load', function () {
      return resolve(image);
    });
    image.addEventListener('error', function (error) {
      return reject(error);
    });
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox

    image.src = url;
  });
};
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */


function getCroppedImg(_x, _x2) {
  return _getCroppedImg.apply(this, arguments);
}

function _getCroppedImg() {
  _getCroppedImg = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(imageSrc, pixelCrop) {
    var image, canvas, ctx;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return createImage(imageSrc);

          case 2:
            image = _context.sent;
            canvas = document.createElement('canvas');
            canvas.width = pixelCrop.width;
            canvas.height = pixelCrop.height;
            ctx = canvas.getContext('2d');

            if (ctx) {
              ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
            } // As Base64 string


            return _context.abrupt("return", canvas.toDataURL('image/jpeg'));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCroppedImg.apply(this, arguments);
}

/***/ }),

/***/ "./components/lib/ImagePicker/index.tsx":
/*!**********************************************!*\
  !*** ./components/lib/ImagePicker/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImagePicker; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var muka_lib_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muka/lib/isString */ "./muka/lib/isString.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! muka/lib/isFunction */ "./muka/lib/isFunction.ts");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-easy-crop */ "react-easy-crop");
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_easy_crop__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _cropImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cropImage */ "./components/lib/ImagePicker/cropImage.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Icon */ "./components/lib/Icon/index.tsx");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Dialog */ "./components/lib/Dialog/index.tsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Image */ "./components/lib/Image/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils */ "./components/lib/utils/index.ts");





















var prefixClass = 'image_picker';

var ImagePicker =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(ImagePicker, _Component);

  function ImagePicker() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ImagePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(ImagePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "state", {
      files: [],
      cropXY: {
        x: 0,
        y: 0
      },
      image: '',
      aspect: 4 / 3,
      zoom: 1,
      visible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "filesList", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "index", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "fileName", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "croppedAreaPixels", {
      height: 0,
      width: 0,
      x: 0,
      y: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "croppedArea", {
      height: 0,
      width: 0,
      x: 0,
      y: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "fileNode", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleClick", function () {
      if (_this.fileNode) {
        _this.fileNode.click();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "onCropChange", function (crop) {
      _this.setState({
        cropXY: crop
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "onCropComplete", function (croppedArea, croppedAreaPixels) {
      _this.croppedArea = croppedArea;
      _this.croppedAreaPixels = croppedAreaPixels;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "onZoomChange", function (zoom) {
      _this.setState({
        zoom: zoom
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleCropClose", function (val) {
      _this.setState({
        visible: val
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleOk",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var onChange, image, croppedImage;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onChange = _this.props.onChange;
              image = _this.state.image;
              _context.next = 4;
              return Object(_cropImage__WEBPACK_IMPORTED_MODULE_16__["default"])(image, _this.croppedAreaPixels);

            case 4:
              croppedImage = _context.sent;

              _this.filesList.push({
                file: _this.dataURLtoFile(croppedImage, _this.fileName),
                url: croppedImage
              });

              _this.setState({
                visible: false,
                files: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.filesList)
              }, function () {
                if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onChange)) {
                  onChange(_this.filesList);
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleFileChange",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(e) {
        var onChange, crop, _files, length, fileList, _file, maxLength, fileLength, i, _file2;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onChange = _this.props.onChange;

                if (!e.currentTarget.files) {
                  _context2.next = 30;
                  break;
                }

                crop = _this.props.crop;
                _files = _this.state.files;
                length = _files.length;
                fileList = e.currentTarget.files;

                if (!crop) {
                  _context2.next = 15;
                  break;
                }

                _this.index = length;
                _file = fileList.item(0);

                if (!_file) {
                  _context2.next = 13;
                  break;
                }

                _this.fileName = _file.name;
                _context2.next = 13;
                return _this.readFile(_file, length);

              case 13:
                _context2.next = 29;
                break;

              case 15:
                maxLength = _this.props.maxLength;
                fileLength = maxLength ? maxLength - length : fileList.length;

                if (!(fileLength <= 0)) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt("return");

              case 19:
                i = 0;

              case 20:
                if (!(i < fileLength)) {
                  _context2.next = 29;
                  break;
                }

                _file2 = fileList.item(i);

                if (!_file2) {
                  _context2.next = 26;
                  break;
                }

                _this.filesList.push({
                  file: _file2,
                  url: ''
                });

                _context2.next = 26;
                return _this.readFile(_file2, length + i);

              case 26:
                i++;
                _context2.next = 20;
                break;

              case 29:
                if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onChange)) {
                  onChange(_this.filesList);
                } // e.target.value = ''


              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(ImagePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      var files = this.state.files;
      this.setValue(value, files);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var files = this.state.files;
      this.setValue(nextProps.value, files);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          multiple = _this$props.multiple,
          crop = _this$props.crop,
          cropProps = _this$props.cropProps,
          disabled = _this$props.disabled;
      var _this$state = this.state,
          files = _this$state.files,
          image = _this$state.image,
          cropXY = _this$state.cropXY,
          aspect = _this$state.aspect,
          zoom = _this$state.zoom,
          visible = _this$state.visible;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass), className)
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "file",
        style: {
          display: 'none'
        },
        ref: function ref(e) {
          return _this2.fileNode = e;
        },
        multiple: crop ? false : multiple,
        onChange: this.handleFileChange
      }), files.map(function (i, index) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "__add")),
          key: "$picker_".concat(index)
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "__add_box flex_center picker_img"))
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_19__["default"], {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "__add_box_img")),
          src: i.url
        })), !disabled && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
          icon: "md-close-circle",
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "__add_close")),
          fontSize: "16px",
          onClick: _this2.handleFileRemove.bind(_this2, index)
        }));
      }), this.getAddBox(), crop && !disabled && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Dialog__WEBPACK_IMPORTED_MODULE_18__["default"], {
        visible: visible,
        onClose: this.handleCropClose,
        onOk: this.handleOk
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_easy_crop__WEBPACK_IMPORTED_MODULE_15___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, cropProps, {
        image: image,
        crop: cropXY,
        aspect: aspect,
        zoom: zoom,
        classes: {
          containerClassName: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "_crop__container"))
        },
        style: {
          containerStyle: {
            position: 'relative',
            height: '500px'
          }
        },
        onCropComplete: this.onCropComplete,
        onCropChange: this.onCropChange,
        onZoomChange: this.onZoomChange
      }))));
    }
  }, {
    key: "getAddBox",
    value: function getAddBox() {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          iconStyle = _this$props2.iconStyle,
          maxLength = _this$props2.maxLength;
      var files = this.state.files;

      if (!maxLength || maxLength > files.length) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "__add ")),
          onClick: this.handleClick
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getClassName"])("".concat(prefixClass, "__add_box flex_center"))
        }, Object(muka_lib_isString__WEBPACK_IMPORTED_MODULE_1__["default"])(icon) ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
          icon: icon,
          fontSize: iconStyle && iconStyle.fontSize,
          color: iconStyle && iconStyle.color
        }) : icon));
      }

      return undefined;
    }
  }, {
    key: "setValue",
    value: function setValue(value, files) {
      if (value) {
        var status = false;
        this.filesList = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(value);

        if (value.length && value.length === files.length) {
          status = value.every(function (i, index) {
            if (!files[index]) {
              return false;
            }

            return i.url === files[index].url;
          });
        }

        if (!status) {
          this.setState({
            files: value
          });
        }
      }
    }
  }, {
    key: "handleFileRemove",
    value: function handleFileRemove(index) {
      var onChange = this.props.onChange;
      var files = this.state.files;
      files.splice(index, 1);
      this.filesList.splice(index, 1);

      if (Object(muka_lib_isFunction__WEBPACK_IMPORTED_MODULE_4__["default"])(onChange)) {
        onChange(files);
      }

      this.setState({
        files: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(files)
      });
    }
  }, {
    key: "dataURLtoFile",
    value: function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(',');
      var mime = ((arr[0] || '').match(/:(.*?);/) || [])[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      var blob = new Blob([u8arr], {
        type: mime
      });

      if (/Edge/.test(navigator.userAgent)) {
        blob.lastModifiedDate = new Date();
        blob.name = filename;
        blob.filename = filename;
        return blob;
      } else {
        var file = new File([blob], filename);
        return file;
      }
    }
  }, {
    key: "readFile",
    value: function readFile(file, index) {
      var _this3 = this;

      var files = this.state.files;

      if (files[index] && file === files[index].file) {
        return undefined;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        reader.onload = function () {
          var crop = _this3.props.crop;

          if (!crop) {
            _this3.filesList[index].url = reader.result;

            _this3.setState({
              files: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3.filesList)
            });
          } else {
            var image = '';
            var visible = false;

            if (reader.result) {
              image = reader.result;
              visible = true;
            }

            _this3.setState({
              image: image,
              visible: visible
            });
          }

          resolve();
        };
      });
    }
  }]);

  return ImagePicker;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(ImagePicker, "defaultProps", {
  icon: 'md-add',
  iconStyle: {
    fontSize: '28px',
    color: '#bcbcbc'
  }
});



/***/ })

};;
//# sourceMappingURL=1.js.map