webpackJsonp([3],{

/***/ "Je2k":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("VZun");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("131f6746", content, true, {});

/***/ }),

/***/ "LgbD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!_vm.connected)?_c('div',[_vm._v("Please choose the host to connect blockchain! ")]):_vm._e(),_vm._v(" "),(_vm.connected && _vm.loading)?_c('div',{staticClass:"loading"},[_c('span',{staticClass:"button is-loading"}),_c('span',{staticClass:"button"},[_vm._v("Loading!")])]):_vm._e(),_vm._v(" "),(_vm.connected && !_vm.loading)?_c('div',[_c('div',{staticClass:"section"},[_c('div',{staticClass:"card"},[_c('header',{staticClass:"card-header"},[_c('p',{staticClass:"card-header-title"},[_vm._v("\n            Block #"+_vm._s(_vm.block.number)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"tabs"},[_c('ul',[_c('li',{class:{ 'is-active': _vm.isSelected('information') }},[_c('a',{on:{"click":function($event){return _vm.select('information')}}},[_vm._v("Information")])]),_vm._v(" "),_c('li',{class:{ 'is-active': _vm.isSelected('transactions') }},[_c('a',{on:{"click":function($event){return _vm.select('transactions')}}},[_vm._v("Transactions")])])])])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content",staticStyle:{"word-wrap":"break-word"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSelected('information')),expression:"isSelected('information')"}]},[_c('p',[_vm._v("Transaction: "),_c('router-link',{attrs:{"to":{ name: 'Transaction', params: { transactionHash: _vm.block.transactions[0] } }}},[_vm._v(_vm._s(_vm.block.transactions[0]))]),_vm._v(", and other "+_vm._s(_vm.block.transactions.length - 1)+" transactions")],1),_vm._v(" "),_c('p',[_vm._v("Difficulty "+_vm._s(_vm.block.difficulty))]),_vm._v(" "),_c('p',[_vm._v("Total Difficulty: "+_vm._s(_vm.block.totalDifficulty))]),_vm._v(" "),_c('p',[_vm._v("Gas Limit: "+_vm._s(_vm.block.gasLimit))]),_vm._v(" "),_c('p',[_vm._v("Gas Used: "+_vm._s(_vm.block.gasUsed))]),_vm._v(" "),_c('p',[_vm._v("Hash: "+_vm._s(_vm.block.hash))]),_vm._v(" "),_c('p',[_vm._v("Parent Hash: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.block.parentHash } }}},[_vm._v(_vm._s(_vm.block.parentHash))])],1),_vm._v(" "),_c('p',[_vm._v("Logs Bloom: "+_vm._s(_vm.block.logsBloom))]),_vm._v(" "),_c('p',[_vm._v("SHA3 Uncles: "+_vm._s(_vm.block.sha3Uncles))]),_vm._v(" "),_c('p',[_vm._v("Miner: "),_c('router-link',{attrs:{"to":{ name: 'Address', params: { address: _vm.block.miner } }}},[_vm._v(_vm._s(_vm.block.miner))])],1),_vm._v(" "),_c('p',[_vm._v("Mix Hash: "+_vm._s(_vm.block.mixHash))]),_vm._v(" "),_c('p',[_vm._v("Nonce: "+_vm._s(_vm.block.nonce))]),_vm._v(" "),_c('p',[_vm._v("Size: "+_vm._s(_vm.block.size))]),_vm._v(" "),_c('p',[_vm._v("Extra Data: "+_vm._s(_vm.toUtf8(_vm.block.extraData))+" (Hex: "+_vm._s(_vm.block.extraData)+")")]),_vm._v(" "),_c('time',[_vm._v("Timestamp: "+_vm._s(_vm.block.timestamp)+" ("+_vm._s(new Date(_vm.block.timestamp * 1000).toString())+")")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSelected('transactions')),expression:"isSelected('transactions')"}]},_vm._l((_vm.block.transactions),function(transaction){return _c('p',[_c('router-link',{attrs:{"to":{ name: 'Transaction', params: { transactionHash: transaction } }}},[_vm._v(_vm._s(transaction))])],1)}),0)])])])])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "T3b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'block',
  data: function data() {
    return {
      block: {},
      selected: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    web3: function web3(state) {
      return state.blockchain.web3;
    },
    loading: function loading(state) {
      return state.page.loading;
    }
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['connected'])),
  created: function created() {
    var blockNumber = this.$route.params.blockNumber;

    this.getBlock(blockNumber);
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['notify', 'setLoading']), {
    isValidBlockNumber: function isValidBlockNumber(blockNumber) {
      if (/^[\d]+$/.test(blockNumber)) {
        return true;
      }
      if (/^0x[0-9a-fA-F]{64}$/.test(blockNumber)) {
        return true;
      }
      return false;
    },
    getBlock: function getBlock(blockNumber) {
      var _this = this;

      this.setLoading(true);

      // if (!this.connected) {
      //   this.$nextTick(() => {
      //     this.setLoading(false);
      //   });
      //   this.notify({
      //     text: 'Please choose the host to connect blockchain!',
      //     class: 'is-danger'
      //   });
      //   return;
      // }
      if (!this.isValidBlockNumber(blockNumber)) {
        this.$nextTick(function () {
          _this.setLoading(false);
        });
        this.notify({ text: 'Block number is not valid!', class: 'is-danger' });
        return;
      }

      this.web3.eth.getBlock(blockNumber).then(function (block) {
        _this.block = block;
      }).catch(function (err) {
        _this.notify({ text: 'Failed to get block ' + blockNumber + '! Error: ' + err.message, class: 'is-danger' });
      }).then(function () {
        _this.select('information');
        _this.$nextTick(function () {
          _this.setLoading(false);
        });
      });
    },
    toUtf8: function toUtf8(hex) {
      var utf8 = '';

      try {
        utf8 = this.web3.utils.toUtf8(hex);
      } catch (e) {
        utf8 = hex;
      }
      return utf8;
    },
    isSelected: function isSelected(tab) {
      if (/^[\w]+$/.test(tab) === false) {
        this.notify({ text: 'Cannot check ' + tab + ' is selected!', class: 'is-danger' });
        return false;
      }
      return tab === this.selected;
    },
    select: function select(tab) {
      if (/^[\w]+$/.test(tab) === false) {
        this.notify({ text: 'Cannot select ' + tab + '!', class: 'is-danger' });
      }
      this.selected = tab;
    }
  }),
  watch: {
    $route: function $route(to, from) {
      var blockNumber = to.params.blockNumber;

      if (blockNumber !== from.params.blockNumber) {
        this.getBlock(blockNumber);
      }
    }
  }
});

/***/ }),

/***/ "VZun":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".loading .button[data-v-a2f32ae0]{border:none}.loading .button[data-v-a2f32ae0]:hover{cursor:auto}", "", {"version":3,"sources":["/Users/peterlai/vuethexplore/src/views/Block.vue"],"names":[],"mappings":"AACA,kCACE,WAAa,CACd,AACD,wCACE,WAAgB,CACjB","file":"Block.vue","sourcesContent":["\n.loading .button[data-v-a2f32ae0] {\n  border: none;\n}\n.loading .button[data-v-a2f32ae0]:hover {\n  cursor: initial;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "mSQ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Block_vue__ = __webpack_require__("T3b1");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2f32ae0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Block_vue__ = __webpack_require__("LgbD");
function injectStyle (ssrContext) {
  __webpack_require__("Je2k")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a2f32ae0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Block_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2f32ae0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Block_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=3.06037a78d6bf9574ac5f.js.map