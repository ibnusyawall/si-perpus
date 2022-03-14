"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_JenisBuku_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JenisBuku/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JenisBuku/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jenis_buku_components_JenisBukuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../jenis-buku-components/JenisBukuList */ "./resources/js/views/jenis-buku-components/JenisBukuList.vue");
/* harmony import */ var _jenis_buku_components_JenisBukuAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jenis-buku-components/JenisBukuAdd */ "./resources/js/views/jenis-buku-components/JenisBukuAdd.vue");
/* harmony import */ var _jenis_buku_components_JenisBukuEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../jenis-buku-components/JenisBukuEdit */ "./resources/js/views/jenis-buku-components/JenisBukuEdit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      jenis_buku: false,
      jenis_buku_edit: false,
      id_jenis_buku: null
    };
  },
  methods: {
    reRender: function reRender() {
      this.$forceUpdate();
    },
    add_buku: function add_buku() {
      this.jenis_buku = !this.jenis_buku;
    },
    edit_jenis_buku: function edit_jenis_buku(_ref) {
      var id = _ref.id;
      this.id_jenis_buku = id;
      this.jenis_buku_edit = !this.jenis_buku_edit;
      console.log("id buku:", id);
    },
    updateJenisBuku: function updateJenisBuku(_ref2) {
      var _this = this;

      var id = _ref2.id,
          nama_jenis = _ref2.nama_jenis;
      console.log("id buku", id);
      axios.put("/api/v1/jenis-buku/".concat(id), {
        nama_jenis: nama_jenis
      }).then(function (result) {
        console.log('updated success', result);

        _this.modalSuccess();
      })["catch"](function (e) {
        _this.modalFailed();

        console.log('error:', e);
      });
    },
    modalSuccess: function modalSuccess() {
      var _this2 = this;

      this.boxTwo = "";
      this.$bvModal.msgBoxOk("Data berhasil di update", {
        title: "Confirmation",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      }).then(function (value) {
        _this2.$router.go(0);
      })["catch"](function (err) {// An error occurred
      });
    },
    modalFailed: function modalFailed() {
      this.boxTwo = "";
      this.$bvModal.msgBoxOk("Data gagal di update", {
        title: "Confirmation",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      }).then(function (value) {//
      })["catch"](function (err) {// An error occurred
      });
    },
    close_add: function close_add() {
      this.jenis_buku = false;
    },
    close_edit: function close_edit() {
      this.jenis_buku_edit = false;
    }
  },
  components: {
    JenisBukuList: _jenis_buku_components_JenisBukuList__WEBPACK_IMPORTED_MODULE_0__["default"],
    JenisBukuAdd: _jenis_buku_components_JenisBukuAdd__WEBPACK_IMPORTED_MODULE_1__["default"],
    JenisBukuEdit: _jenis_buku_components_JenisBukuEdit__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        nama_jenis: null
      },
      data: {
        jenis_buku: null
      }
    };
  },
  beforeMount: function beforeMount() {//
  },
  methods: {
    addBuku: function addBuku() {
      var _this = this;

      console.log("oke", this.form);
      axios.post("/api/v1/jenis-buku", this.form).then(function () {
        _this.modalSuccess();
      })["catch"](function (e) {
        console.log("e:", e);

        _this.modalFailed();
      });
    },
    modalSuccess: function modalSuccess() {
      var _this2 = this;

      this.boxTwo = "";
      this.$bvModal.msgBoxOk("Data berhasil di tambah", {
        title: "Confirmation",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      }).then(function (value) {
        _this2.$router.go(0);
      })["catch"](function (err) {// An error occurred
      });
    },
    modalFailed: function modalFailed() {
      this.boxTwo = "";
      this.$bvModal.msgBoxOk("Data gagal di update", {
        title: "Confirmation",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      }).then(function (value) {//
      })["catch"](function (err) {// An error occurred
      });
    },
    close: function close() {
      this.$emit("closeAddJenisBuku");
    }
  },
  components: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id_jenis_buku'],
  data: function data() {
    return {
      form: {
        nama_jenis: null,
        form: {
          nama_jenis: null
        }
      }
    };
  },
  methods: {
    editJenisBuku: function editJenisBuku() {
      this.$emit('editFormJenisBuku', _objectSpread({
        id: this.id_jenis_buku
      }, this.form));
    },
    loadJenisBuku: function loadJenisBuku() {
      var _this = this;

      this.$store.dispatch('jenisBuku/jenis_buku', this.id_jenis_buku).then(function (result) {
        _this.form.nama_jenis = result.nama_jenis;
        console.log('buku::', result);
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    close: function close() {
      this.$emit('closeEditJenisBuku');
    }
  },
  beforeMount: function beforeMount() {
    this.loadJenisBuku();
  },
  components: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: null,
      data: {
        jenis_buku: null
      },
      length: {
        jenis_buku: null
      },
      hapus: {
        id: null,
        nama_jenis: null
      }
    };
  },
  beforeMount: function beforeMount() {
    this.loadJenisBukus();
  },
  methods: {
    loadJenisBukus: function loadJenisBukus() {
      var _this = this;

      this.$store.dispatch("jenisBuku/jenis_bukus").then(function (result) {
        _this.data.jenis_buku = [];
        console.log("jenis_bukus:", result);
        _this.data.jenis_buku = result;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    edit_jenis_buku: function edit_jenis_buku(id) {
      this.$emit("editJenisBuku", {
        id: id
      });
    },
    hapus_jenis_buku: function hapus_jenis_buku(id, nama_jenis) {
      this.hapus.id = id;
      this.hapus.nama_jenis = nama_jenis;
      this.$bvModal.show("modalHapusDataJenisBuku");
    },
    handleHapus: function handleHapus(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var hapus_data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return axios["delete"]("/api/v1/jenis-buku/".concat(_this2.hapus.id));

              case 4:
                hapus_data = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);

                _this2.$nextTick(function () {
                  _this2.$bvModal.hide("modalHapusDataJenisBuku");

                  _this2._alert("Hapus Data User", "Data gagal dihapus.");
                });

              case 10:
                _context.prev = 10;

                _this2.$nextTick(function () {
                  _this2.loadJenisBukus();

                  _this2.$bvModal.hide("modalHapusDataJenisBuku");

                  _this2._alert("Hapus Data User", "Data berhasil dihapus.");
                });

                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7, 10, 13]]);
      }))();
    },
    _alert: function _alert(title, msg) {
      this.$bvModal.msgBoxConfirm(msg, {
        title: title,
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "OK",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/JenisBuku/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/JenisBuku/Dashboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_dd7fb920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=dd7fb920& */ "./resources/js/views/JenisBuku/Dashboard.vue?vue&type=template&id=dd7fb920&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/JenisBuku/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_dd7fb920___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_dd7fb920___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/JenisBuku/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuAdd.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuAdd.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JenisBukuAdd_vue_vue_type_template_id_162a285f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JenisBukuAdd.vue?vue&type=template&id=162a285f& */ "./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=template&id=162a285f&");
/* harmony import */ var _JenisBukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JenisBukuAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JenisBukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JenisBukuAdd_vue_vue_type_template_id_162a285f___WEBPACK_IMPORTED_MODULE_0__.render,
  _JenisBukuAdd_vue_vue_type_template_id_162a285f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/jenis-buku-components/JenisBukuAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuEdit.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuEdit.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JenisBukuEdit_vue_vue_type_template_id_5ae18abc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JenisBukuEdit.vue?vue&type=template&id=5ae18abc& */ "./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=template&id=5ae18abc&");
/* harmony import */ var _JenisBukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JenisBukuEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JenisBukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JenisBukuEdit_vue_vue_type_template_id_5ae18abc___WEBPACK_IMPORTED_MODULE_0__.render,
  _JenisBukuEdit_vue_vue_type_template_id_5ae18abc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/jenis-buku-components/JenisBukuEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuList.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuList.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JenisBukuList_vue_vue_type_template_id_4b996350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JenisBukuList.vue?vue&type=template&id=4b996350& */ "./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=template&id=4b996350&");
/* harmony import */ var _JenisBukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JenisBukuList.vue?vue&type=script&lang=js& */ "./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JenisBukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JenisBukuList_vue_vue_type_template_id_4b996350___WEBPACK_IMPORTED_MODULE_0__.render,
  _JenisBukuList_vue_vue_type_template_id_4b996350___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/jenis-buku-components/JenisBukuList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/JenisBuku/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/JenisBuku/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JenisBuku/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JenisBukuAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JenisBukuEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JenisBukuList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/JenisBuku/Dashboard.vue?vue&type=template&id=dd7fb920&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/JenisBuku/Dashboard.vue?vue&type=template&id=dd7fb920& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_dd7fb920___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_dd7fb920___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_dd7fb920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=dd7fb920& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JenisBuku/Dashboard.vue?vue&type=template&id=dd7fb920&");


/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=template&id=162a285f&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=template&id=162a285f& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuAdd_vue_vue_type_template_id_162a285f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuAdd_vue_vue_type_template_id_162a285f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuAdd_vue_vue_type_template_id_162a285f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JenisBukuAdd.vue?vue&type=template&id=162a285f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=template&id=162a285f&");


/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=template&id=5ae18abc&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=template&id=5ae18abc& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuEdit_vue_vue_type_template_id_5ae18abc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuEdit_vue_vue_type_template_id_5ae18abc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuEdit_vue_vue_type_template_id_5ae18abc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JenisBukuEdit.vue?vue&type=template&id=5ae18abc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=template&id=5ae18abc&");


/***/ }),

/***/ "./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=template&id=4b996350&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=template&id=4b996350& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuList_vue_vue_type_template_id_4b996350___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuList_vue_vue_type_template_id_4b996350___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisBukuList_vue_vue_type_template_id_4b996350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JenisBukuList.vue?vue&type=template&id=4b996350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=template&id=4b996350&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JenisBuku/Dashboard.vue?vue&type=template&id=dd7fb920&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/JenisBuku/Dashboard.vue?vue&type=template&id=dd7fb920& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        { staticClass: "mb-4", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-body",
            [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Data Jenis Buku"),
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "outline-primary", size: "sm" },
                  on: { click: _vm.add_buku },
                },
                [_vm._v("Tambah Jenis Buku")]
              ),
              _vm._v(" "),
              _c("h6", {
                staticClass: "card-subtitle font-weight-normal text-muted",
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("JenisBukuList", { on: { editJenisBuku: _vm.edit_jenis_buku } }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.jenis_buku
        ? [_c("JenisBukuAdd", { on: { closeAddJenisBuku: _vm.close_add } })]
        : _vm._e(),
      _vm._v(" "),
      _vm.jenis_buku_edit
        ? [
            _c("JenisBukuEdit", {
              attrs: { id_jenis_buku: _vm.id_jenis_buku },
              on: {
                closeEditJenisBuku: _vm.close_edit,
                editFormJenisBuku: _vm.updateJenisBuku,
              },
            }),
          ]
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=template&id=162a285f&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuAdd.vue?vue&type=template&id=162a285f& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        { staticClass: "mb-4", attrs: { "no-body": "" } },
        [
          _c("b-card-body", [
            _c("h4", { staticClass: "card-title" }, [
              _vm._v("Tambah Data Jenis Buku"),
            ]),
            _vm._v(" "),
            _c(
              "form",
              { ref: "form" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Nama Jenis Buku",
                              "label-for": "nama_jenis_buku",
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.nama_jenis,
                                  expression: "form.nama_jenis",
                                },
                              ],
                              class: "form-control",
                              attrs: {
                                id: "nama_jenis_buku",
                                type: "text",
                                autofocus: "",
                                required: "",
                              },
                              domProps: { value: _vm.form.nama_jenis },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "nama_jenis",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "outline-primary", size: "sm" },
                    on: { click: _vm.addBuku },
                  },
                  [_vm._v("Tambah Jenis Buku")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "outline-danger", size: "sm" },
                    on: { click: _vm.close },
                  },
                  [_vm._v("Close")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("h6", {
              staticClass: "card-subtitle font-weight-normal text-muted",
            }),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=template&id=5ae18abc&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuEdit.vue?vue&type=template&id=5ae18abc& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        { staticClass: "mb-4", attrs: { "no-body": "" } },
        [
          _c("b-card-body", [
            _c("h4", { staticClass: "card-title" }, [
              _vm._v("Edit Data Jenis Buku: " + _vm._s(_vm.id_jenis_buku)),
            ]),
            _vm._v(" "),
            _c(
              "form",
              { ref: "form" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Nama Jenis Buku",
                              "label-for": "nama_jenis",
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.nama_jenis,
                                  expression: "form.nama_jenis",
                                },
                              ],
                              class: "form-control",
                              attrs: {
                                id: "nama_jenis",
                                type: "text",
                                autofocus: "",
                                required: "",
                              },
                              domProps: { value: _vm.form.nama_jenis },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "nama_jenis",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "outline-primary", size: "sm" },
                    on: { click: _vm.editJenisBuku },
                  },
                  [_vm._v("Edit Buku")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "outline-danger", size: "sm" },
                    on: { click: _vm.close },
                  },
                  [_vm._v("Close")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("h6", {
              staticClass: "card-subtitle font-weight-normal text-muted",
            }),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=template&id=4b996350&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/jenis-buku-components/JenisBukuList.vue?vue&type=template&id=4b996350& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "hapus-data",
          attrs: {
            id: "modalHapusDataJenisBuku",
            title: "Hapus Data User",
            "header-bg-variant": "danger",
            "header-text-variant": "white",
            "ok-title": "Hapus",
            okVariant: "danger",
          },
          on: { ok: _vm.handleHapus },
        },
        [
          _c("p", [
            _c("b", [_vm._v(_vm._s(_vm.hapus.nama_jenis))]),
            _vm._v(
              " akan di hapus, apakah yakin ingin\n      menghapusnya?\n    "
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c(
          "table",
          { staticClass: "table v-middle text-nowrap bg-transparent" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.data.jenis_buku, function (v) {
                return _c("tr", { key: v.id }, [
                  _c("td", [_vm._v(_vm._s(v.nama_jenis))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { variant: "success", size: "sm" },
                          on: {
                            click: function ($event) {
                              return _vm.edit_jenis_buku(v.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { variant: "danger", size: "sm" },
                          on: {
                            click: function ($event) {
                              return _vm.hapus_jenis_buku(v.id, v.nama_jenis)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      ),
                    ],
                    1
                  ),
                ])
              }),
              0
            ),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-light" }, [
      _c("tr", {}, [
        _c("th", { staticClass: "border-0" }, [_vm._v("Nama Jenis")]),
        _vm._v(" "),
        _c("th", { staticClass: "border-0 text-center" }, [_vm._v("Aksi")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);