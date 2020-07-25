webpackJsonp([1],{

/***/ "2m1i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{class:_vm.inputClass,attrs:{"type":"text","placeholder":_vm.inputPlaceholder},domProps:{"value":_vm.inputValue},on:{"change":_vm.update}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Ok2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageNumberInput_vue__ = __webpack_require__("u/CU");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04992384_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PageNumberInput_vue__ = __webpack_require__("2m1i");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageNumberInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04992384_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PageNumberInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "aze2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!_vm.connected)?_c('div',[_vm._v("Please choose the host to connect blockchain!")]):_vm._e(),_vm._v(" "),(_vm.connected && _vm.loading)?_c('div',{staticClass:"loading"},[_c('span',{staticClass:"button is-loading"}),_c('span',{staticClass:"button"},[_vm._v("Loading!")])]):_vm._e(),_vm._v(" "),(_vm.connected && !_vm.loading)?_c('div',[_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column control"},[_c('page-number-input',{attrs:{"placeholder":"from","inputValue":_vm.from},on:{"update":_vm.updateFrom}})],1),_vm._v(" "),_c('div',{staticClass:"column control"},[_c('page-number-input',{attrs:{"placeholder":"to","inputValue":_vm.to},on:{"update":_vm.updateTo}})],1),_vm._v(" "),_c('div',{staticClass:"column control"},[_c('page-number-input',{attrs:{"placeholder":"limit","inputValue":_vm.limit},on:{"update":_vm.updateLimit}})],1)]),_vm._v(" "),_c('div',[_c('table',{staticClass:"table is-bordered is-hoverable is-fullwidth"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.blocks),function(block){return _c('tr',[_c('td',[_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: block.number } }}},[_vm._v(_vm._s(block.number))])],1),_vm._v(" "),_c('td',[_c('strong',[_vm._v(_vm._s(block.transactions.length))]),_vm._v(" txns")]),_vm._v(" "),_c('td',[_c('strong',[_vm._v(_vm._s(block.uncles.length))]),_vm._v(" uncles")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(block.difficulty))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(block.gasLimit))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(block.gasUsed))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(block.miner))])])}),0)])])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Block Number")]),_vm._v(" "),_c('th',[_vm._v("Transactions")]),_vm._v(" "),_c('th',[_vm._v("Uncles")]),_vm._v(" "),_c('th',[_vm._v("Difficulty")]),_vm._v(" "),_c('th',[_vm._v("Gas Limit")]),_vm._v(" "),_c('th',[_vm._v("Gas Used")]),_vm._v(" "),_c('th',[_vm._v("Miner")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dQYH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("xzVA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("60994f90", content, true, {});

/***/ }),

/***/ "mlqX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__("tk/L");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de723c04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__("aze2");
function injectStyle (ssrContext) {
  __webpack_require__("dQYH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-de723c04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de723c04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tk/L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("QmSG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageNumberInput__ = __webpack_require__("Ok2f");

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
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  components: {
    PageNumberInput: __WEBPACK_IMPORTED_MODULE_3__components_PageNumberInput__["a" /* default */]
  },
  data: function data() {
    return {
      limit: 10,
      from: 0,
      to: 0,
      blocks: []
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    blockNumber: function blockNumber(state) {
      return state.blockchain.blockNumber;
    },
    web3: function web3(state) {
      return state.blockchain.web3;
    },
    loading: function loading(state) {
      return state.page.loading;
    }
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['connected'])),
  created: function created() {
    if (this.$storage.isExist(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockFromStorageKey) === true) {
      this.from = this.$storage.getItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockFromStorageKey);
    }
    if (this.$storage.isExist(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockToStorageKey) === true) {
      this.to = this.$storage.getItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockToStorageKey);
    }
    if (this.$storage.isExist(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockLimitStorageKey) === true) {
      this.limit = this.$storage.getItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockLimitStorageKey);
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['notify', 'setLoading']), {
    isValidNumber: function isValidNumber(number) {
      if (/^[\d]+$/.test(number)) {
        return true;
      }
      return false;
    },
    getBlocks: function getBlocks(from, to) {
      var _this = this;

      this.setLoading(true);

      if (from <= to) {
        this.$nextTick(function () {
          _this.setLoading(false);
        });
        this.notify({ text: 'From must bigger than to!', class: 'is-danger' });
        return;
      }
      if (from - 1 >= to + this.limit) {
        this.$nextTick(function () {
          _this.setLoading(false);
        });
        this.notify({ text: 'From must smaller than to + limit!', class: 'is-danger' });
        return;
      }

      // clear blocks
      this.blocks = [];

      // use batch instead
      // for (let i = from; i >= to; i -= 1) {
      //   this.web3.eth.getBlock(i).then((block) => {
      //     this.blocks.push(block);
      //   }).catch((err) => {
      //     this.notify({ text: `Failed to get block ${i}!
      // Error: ${err.message}`, class: 'is-danger' });
      //   });
      // }

      // let count = 0;
      // const total = from - to;
      var batch = new this.web3.BatchRequest();
      var callback = function callback(err, block) {
        var _this2 = this;

        this.$nextTick(function () {
          _this2.setLoading(false);
        });

        if (err) {
          this.notify({ text: 'Failed to get block! Error: ' + err.message, class: 'is-danger' });
          return;
        }

        // due to batch execute return null
        // we use count to check batch state
        // if (count >= total) {
        //   this.setLoading(false);
        // }
        // count += 1;

        // should we use this: block === null || block === undefined
        if (!block) {
          return;
        }
        this.blocks.push(block);
      };

      for (var i = from; i >= to; i -= 1) {
        batch.add(this.web3.eth.getBlock.request(i, callback.bind(this)));
      }
      batch.execute();

      // save from and in to storage
      this.$storage.setItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockFromStorageKey, from);
      this.$storage.setItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockToStorageKey, to);
    },
    updateFrom: function updateFrom(from) {
      this.from = from;
      this.$storage.setItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockFromStorageKey, from);
    },
    updateTo: function updateTo(to) {
      this.to = to;
      this.$storage.setItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockToStorageKey, to);
    },
    updateLimit: function updateLimit(limit) {
      this.limit = limit;
      this.$storage.setItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockLimitStorageKey, limit);
    }
  }),
  watch: {
    blockNumber: function blockNumber(val) {
      var _this3 = this;

      if (val !== this.from) {
        this.from = val;
        this.$nextTick(function () {
          _this3.to = val - _this3.limit;
          _this3.to += 1;
        });
        // this.getBlocks(this.from, this.to);
      }
    },
    from: function from(val) {
      if (this.isValidNumber(val) === true && val > this.to && val - this.to <= this.limit - 1) {
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct from or to number!', class: 'is-danger' });
      }
    },
    to: function to(val) {
      if (this.isValidNumber(val) === true && val < this.from && this.from - val <= this.limit - 1) {
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct from or to number!', class: 'is-danger' });
      }
    },
    limit: function limit(val, oldVal) {
      if (this.isValidNumber(val) === true) {
        if (val > __WEBPACK_IMPORTED_MODULE_2__config___default.a.limitUpperBound || val < __WEBPACK_IMPORTED_MODULE_2__config___default.a.limitLowerBound) {
          this.notify({ text: 'Limit must between ' + __WEBPACK_IMPORTED_MODULE_2__config___default.a.limitLowerBound + ' and ' + __WEBPACK_IMPORTED_MODULE_2__config___default.a.limitUpperBound + '!', class: 'is-danger' });
          this.limit = oldVal;
          return;
        }
        this.$storage.setItem(__WEBPACK_IMPORTED_MODULE_2__config___default.a.blockLimitStorageKey, val);
        if (this.from - this.to > this.limit) {
          this.to = this.from - val;
          return;
        }
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct limit number!', class: 'is-danger' });
      }
    }
  }
});

/***/ }),

/***/ "u/CU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'page-number-input',
  props: {
    inputClass: {
      type: String,
      default: function _default() {
        return 'input';
      }
    },
    inputPlaceholder: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    inputValue: {
      type: Number,
      default: function _default() {
        return 0;
      }
    }
  },
  methods: {
    update: function update(e) {
      this.$emit('update', parseInt(e.target.value, 10));
    }
  }
});

/***/ }),

/***/ "xzVA":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".loading .button[data-v-de723c04]{border:none}.loading .button[data-v-de723c04]:hover{cursor:auto}", "", {"version":3,"sources":["/Users/peterlai/vuethexplore/src/views/Index.vue"],"names":[],"mappings":"AACA,kCACE,WAAa,CACd,AACD,wCACE,WAAgB,CACjB","file":"Index.vue","sourcesContent":["\n.loading .button[data-v-de723c04] {\n  border: none;\n}\n.loading .button[data-v-de723c04]:hover {\n  cursor: initial;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=1.32784610ee0c77617e4e.js.map