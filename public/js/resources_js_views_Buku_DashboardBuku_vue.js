"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Buku_DashboardBuku_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Buku/DashboardBuku.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Buku/DashboardBuku.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buku_components_BukuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../buku-components/BukuList */ "./resources/js/views/buku-components/BukuList.vue");
/* harmony import */ var _buku_components_BukuAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../buku-components/BukuAdd */ "./resources/js/views/buku-components/BukuAdd.vue");
/* harmony import */ var _buku_components_BukuEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../buku-components/BukuEdit */ "./resources/js/views/buku-components/BukuEdit.vue");
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
      buku_show: false,
      buku_show_edit: false,
      id_buku: null
    };
  },
  methods: {
    reRender: function reRender() {
      this.$forceUpdate();
    },
    add_buku: function add_buku() {
      this.buku_show = !this.buku_show;
    },
    edit_buku: function edit_buku(_ref) {
      var id = _ref.id;
      this.id_buku = id;
      this.buku_show_edit = !this.buku_show_edit;
      console.log("id buku:", id);
    },
    updateBuku: function updateBuku(_ref2) {
      var _this = this;

      var nama_buku = _ref2.nama_buku,
          keterangan_buku = _ref2.keterangan_buku,
          id = _ref2.id;
      console.log("nama_buku:", nama_buku);
      console.log("keterangan buku:", keterangan_buku);
      console.log("id buku", id);
      axios.put("/api/v1/buku/".concat(id), {
        nama_buku: nama_buku,
        keterangan_buku: keterangan_buku
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
      this.buku_show = false;
    },
    close_edit: function close_edit() {
      this.buku_show_edit = false;
    }
  },
  components: {
    BukuList: _buku_components_BukuList__WEBPACK_IMPORTED_MODULE_0__["default"],
    BukuAdd: _buku_components_BukuAdd__WEBPACK_IMPORTED_MODULE_1__["default"],
    BukuEdit: _buku_components_BukuEdit__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuAdd.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuAdd.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        nama_buku: null,
        keterangan_buku: null,
        jenis_id: null
      },
      data: {
        jenis_buku: null
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
    addBuku: function addBuku() {
      var _this2 = this;

      console.log("oke", this.form);
      axios.post("/api/v1/buku", this.form).then(function () {
        _this2.modalSuccess();
      })["catch"](function (e) {
        console.log("e:", e);

        _this2.modalFailed();
      });
    },
    modalSuccess: function modalSuccess() {
      var _this3 = this;

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
        _this3.$router.go(0);
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
      this.$emit("closeAddBuku");
    }
  },
  components: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  props: ['id_buku'],
  data: function data() {
    return {
      form: {
        nama_buku: null,
        keterangan_buku: null,
        form: {
          nama_buku: null,
          keterangan_buku: null
        }
      }
    };
  },
  methods: {
    editBuku: function editBuku() {
      this.$emit('editFormBuku', _objectSpread({
        id: this.id_buku
      }, this.form));
    },
    loadBuku: function loadBuku() {
      var _this = this;

      this.$store.dispatch('buku/buku', this.id_buku).then(function (result) {
        _this.form.nama_buku = result.nama_buku;
        _this.form.keterangan_buku = result.keterangan_buku;
        console.log('buku::', result);
        _this.data.buku = result;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    close: function close() {
      this.$emit('closeEditBuku');
    }
  },
  beforeMount: function beforeMount() {
    this.loadBuku();
  },
  components: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        buku: null
      },
      length: {
        buku: null
      }
    };
  },
  beforeMount: function beforeMount() {
    this.loadBukus();
  },
  methods: {
    loadBukus: function loadBukus() {
      var _this = this;

      this.$store.dispatch("buku/bukus").then(function (result) {
        _this.data.buku = [];
        _this.length.buku = result.length || 0;
        console.log("bukus:", result);
        _this.data.buku = result;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    edit_buku: function edit_buku(id) {
      this.$emit('editBuku', {
        id: id
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Buku/DashboardBuku.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/Buku/DashboardBuku.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardBuku_vue_vue_type_template_id_a39c8844___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardBuku.vue?vue&type=template&id=a39c8844& */ "./resources/js/views/Buku/DashboardBuku.vue?vue&type=template&id=a39c8844&");
/* harmony import */ var _DashboardBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardBuku.vue?vue&type=script&lang=js& */ "./resources/js/views/Buku/DashboardBuku.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardBuku_vue_vue_type_template_id_a39c8844___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardBuku_vue_vue_type_template_id_a39c8844___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Buku/DashboardBuku.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/buku-components/BukuAdd.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/buku-components/BukuAdd.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BukuAdd_vue_vue_type_template_id_7a36a3ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BukuAdd.vue?vue&type=template&id=7a36a3ec& */ "./resources/js/views/buku-components/BukuAdd.vue?vue&type=template&id=7a36a3ec&");
/* harmony import */ var _BukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BukuAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/buku-components/BukuAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BukuAdd_vue_vue_type_template_id_7a36a3ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _BukuAdd_vue_vue_type_template_id_7a36a3ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/buku-components/BukuAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/buku-components/BukuEdit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/buku-components/BukuEdit.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BukuEdit_vue_vue_type_template_id_786480cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BukuEdit.vue?vue&type=template&id=786480cf& */ "./resources/js/views/buku-components/BukuEdit.vue?vue&type=template&id=786480cf&");
/* harmony import */ var _BukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BukuEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/buku-components/BukuEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BukuEdit_vue_vue_type_template_id_786480cf___WEBPACK_IMPORTED_MODULE_0__.render,
  _BukuEdit_vue_vue_type_template_id_786480cf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/buku-components/BukuEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/buku-components/BukuList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/buku-components/BukuList.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BukuList_vue_vue_type_template_id_691c5963___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BukuList.vue?vue&type=template&id=691c5963& */ "./resources/js/views/buku-components/BukuList.vue?vue&type=template&id=691c5963&");
/* harmony import */ var _BukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BukuList.vue?vue&type=script&lang=js& */ "./resources/js/views/buku-components/BukuList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BukuList_vue_vue_type_template_id_691c5963___WEBPACK_IMPORTED_MODULE_0__.render,
  _BukuList_vue_vue_type_template_id_691c5963___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/buku-components/BukuList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Buku/DashboardBuku.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Buku/DashboardBuku.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardBuku.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Buku/DashboardBuku.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/buku-components/BukuAdd.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/buku-components/BukuAdd.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BukuAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/buku-components/BukuEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/buku-components/BukuEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BukuEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/buku-components/BukuList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/buku-components/BukuList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BukuList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Buku/DashboardBuku.vue?vue&type=template&id=a39c8844&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Buku/DashboardBuku.vue?vue&type=template&id=a39c8844& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBuku_vue_vue_type_template_id_a39c8844___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBuku_vue_vue_type_template_id_a39c8844___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBuku_vue_vue_type_template_id_a39c8844___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardBuku.vue?vue&type=template&id=a39c8844& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Buku/DashboardBuku.vue?vue&type=template&id=a39c8844&");


/***/ }),

/***/ "./resources/js/views/buku-components/BukuAdd.vue?vue&type=template&id=7a36a3ec&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/buku-components/BukuAdd.vue?vue&type=template&id=7a36a3ec& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuAdd_vue_vue_type_template_id_7a36a3ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuAdd_vue_vue_type_template_id_7a36a3ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuAdd_vue_vue_type_template_id_7a36a3ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BukuAdd.vue?vue&type=template&id=7a36a3ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuAdd.vue?vue&type=template&id=7a36a3ec&");


/***/ }),

/***/ "./resources/js/views/buku-components/BukuEdit.vue?vue&type=template&id=786480cf&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/buku-components/BukuEdit.vue?vue&type=template&id=786480cf& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuEdit_vue_vue_type_template_id_786480cf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuEdit_vue_vue_type_template_id_786480cf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuEdit_vue_vue_type_template_id_786480cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BukuEdit.vue?vue&type=template&id=786480cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuEdit.vue?vue&type=template&id=786480cf&");


/***/ }),

/***/ "./resources/js/views/buku-components/BukuList.vue?vue&type=template&id=691c5963&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/buku-components/BukuList.vue?vue&type=template&id=691c5963& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuList_vue_vue_type_template_id_691c5963___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuList_vue_vue_type_template_id_691c5963___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BukuList_vue_vue_type_template_id_691c5963___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BukuList.vue?vue&type=template&id=691c5963& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuList.vue?vue&type=template&id=691c5963&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Buku/DashboardBuku.vue?vue&type=template&id=a39c8844&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Buku/DashboardBuku.vue?vue&type=template&id=a39c8844& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Data Buku")]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { variant: "outline-primary", size: "sm" },
                  on: { click: _vm.add_buku },
                },
                [_vm._v("Tambah Buku")]
              ),
              _vm._v(" "),
              _c("h6", {
                staticClass: "card-subtitle font-weight-normal text-muted",
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("BukuList", {
            on: {
              editBuku: _vm.edit_buku,
              click: function ($event) {
                return _vm.reRender()
              },
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.buku_show
        ? [_c("BukuAdd", { on: { closeAddBuku: _vm.close_add } })]
        : _vm._e(),
      _vm._v(" "),
      _vm.buku_show_edit
        ? [
            _c("BukuEdit", {
              attrs: { id_buku: _vm.id_buku },
              on: {
                closeEditBuku: _vm.close_edit,
                editFormBuku: _vm.updateBuku,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuAdd.vue?vue&type=template&id=7a36a3ec&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuAdd.vue?vue&type=template&id=7a36a3ec& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Tambah Data Buku"),
            ]),
            _vm._v(" "),
            _c(
              "form",
              { ref: "form", attrs: { enctype: "multipart/form-data" } },
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
                              label: "Nama Buku",
                              "label-for": "nama_buku",
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.nama_buku,
                                  expression: "form.nama_buku",
                                },
                              ],
                              class: "form-control",
                              attrs: {
                                id: "nama_buku",
                                type: "text",
                                autofocus: "",
                                required: "",
                              },
                              domProps: { value: _vm.form.nama_buku },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "nama_buku",
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
                    _vm._v(" "),
                    _c(
                      "b-col",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Jenis Buku",
                              "label-for": "jenis_buku",
                            },
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.jenis_id,
                                    expression: "form.jenis_id",
                                  },
                                ],
                                staticClass: "form-control selectric",
                                attrs: { id: "jenis_buku" },
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "jenis_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                },
                              },
                              _vm._l(_vm.data.jenis_buku, function (v) {
                                return _c(
                                  "option",
                                  { key: v.id, domProps: { value: v.id } },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(v.nama_jenis) +
                                        "\n                "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
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
                  "b-row",
                  [
                    _c(
                      "b-col",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Keterangan Buku",
                              "label-for": "keterangan_buku",
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.keterangan_buku,
                                  expression: "form.keterangan_buku",
                                },
                              ],
                              class: "form-control",
                              attrs: {
                                id: "keterangan_buku",
                                type: "text",
                                required: "",
                              },
                              domProps: { value: _vm.form.keterangan_buku },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "keterangan_buku",
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
                  [_vm._v("Tambah Buku")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuEdit.vue?vue&type=template&id=786480cf&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuEdit.vue?vue&type=template&id=786480cf& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Edit Data Buku: " + _vm._s(_vm.id_buku)),
            ]),
            _vm._v(" "),
            _c(
              "form",
              { ref: "form", attrs: { enctype: "multipart/form-data" } },
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
                              label: "Nama Buku",
                              "label-for": "nama_buku",
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.nama_buku,
                                  expression: "form.nama_buku",
                                },
                              ],
                              class: "form-control",
                              attrs: {
                                id: "nama_buku",
                                type: "text",
                                autofocus: "",
                                required: "",
                              },
                              domProps: { value: _vm.form.nama_buku },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "nama_buku",
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
                    _vm._v(" "),
                    _c(
                      "b-col",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Keterangan Buku",
                              "label-for": "keterangan_buku",
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.keterangan_buku,
                                  expression: "form.keterangan_buku",
                                },
                              ],
                              class: "form-control",
                              attrs: {
                                id: "keterangan_buku",
                                type: "text",
                                required: "",
                              },
                              domProps: { value: _vm.form.keterangan_buku },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "keterangan_buku",
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
                    on: { click: _vm.editBuku },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuList.vue?vue&type=template&id=691c5963&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/buku-components/BukuList.vue?vue&type=template&id=691c5963& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "table-responsive" }, [
    _c("table", { staticClass: "table v-middle text-nowrap bg-transparent" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.data.buku, function (v) {
          return _c("tr", { key: v.id }, [
            _c("td", [_vm._v(_vm._s(v.nama_buku))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(v.keterangan_buku))]),
            _vm._v(" "),
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
                        return _vm.edit_buku(v.id)
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
                        return _vm.hapus_buku(v.id, v.nama_fasilitas_hotel)
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
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-light" }, [
      _c("tr", {}, [
        _c("th", { staticClass: "border-0" }, [_vm._v("Nama Buku")]),
        _vm._v(" "),
        _c("th", { staticClass: "border-0" }, [_vm._v("ketrangan Buku")]),
        _vm._v(" "),
        _c("th", { staticClass: "border-0" }, [_vm._v("Jenis")]),
        _vm._v(" "),
        _c("th", { staticClass: "border-0 text-center" }, [_vm._v("Aksi")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);