webpackJsonp([2],{

/***/ "+2EI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".loading .button[data-v-9c45e256]{border:none}.loading .button[data-v-9c45e256]:hover{cursor:auto}", "", {"version":3,"sources":["/Users/chenqiguan/Desktop/opensource/vuethexplore/src/views/Transaction.vue"],"names":[],"mappings":"AACA,kCACE,WAAa,CACd,AACD,wCACE,WAAgB,CACjB","file":"Transaction.vue","sourcesContent":["\n.loading .button[data-v-9c45e256] {\n  border: none;\n}\n.loading .button[data-v-9c45e256]:hover {\n  cursor: initial;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "8K5v":
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'transaction',
  data: function data() {
    return {
      transaction: {},
      selectedLog: {}
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
    web3: function web3(state) {
      return state.blockchain.web3;
    },
    loading: function loading(state) {
      return state.page.loading;
    }
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['connected']), {
    logs: function logs() {
      var transaction = this.transaction;

      if (transaction.logs) {
        return transaction.logs.length > 0 ? transaction.logs : false;
      }
      return false;
    },
    transactionType: function transactionType() {
      if (this.transaction.type === 1) {
        return 'EIP2930';
      } else if (this.transaction.type === 2) {
        return 'EIP1559';
      }
      return 'Legacy';
    }
  }),
  created: function created() {
    this.getTransaction(this.$route.params.transactionHash);
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['notify', 'setLoading']), {
    isValidTransactionHash: function isValidTransactionHash(transactionHash) {
      if (/^0x[0-9a-fA-F]{64}$/.test(transactionHash)) {
        return true;
      }
      return false;
    },
    getTransaction: function getTransaction(transactionHash) {
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
      if (!this.isValidTransactionHash(transactionHash)) {
        this.setLoading(false);
        this.notify({ text: 'Transaction hash is not valid!', class: 'is-danger' });
        return;
      }

      this.web3.eth.getTransactionReceipt(transactionHash).then(function (transaction) {
        var transactionType = 0;
        if (transaction.type !== undefined) {
          transactionType = parseInt(transaction.type, 16);
        }
        _this.transaction = transaction;
        _this.transaction.type = transactionType;
      }).catch(function (err) {
        _this.notify({ text: 'Failed to get transaction ' + transactionHash + '! Error: ' + err.message, class: 'is-danger' });
      }).then(function () {
        _this.$nextTick(function () {
          _this.setLoading(false);
        });
      });
    },
    selectLog: function selectLog(log) {
      if (log.address) {
        if (log.logIndex === this.selectedLog.logIndex) {
          this.selectedLog = {};
        } else {
          this.selectedLog = log;
        }
      } else {
        this.notify({ text: 'Please select correct log.', class: 'is-danger' });
      }
    }
  })
});

/***/ }),

/***/ "HUQv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!_vm.connected)?_c('div',[_vm._v("Please choose the host to connect blockchain! ")]):_vm._e(),_vm._v(" "),(_vm.connected && _vm.loading)?_c('div',{staticClass:"loading"},[_c('span',{staticClass:"button is-loading"}),_c('span',{staticClass:"button"},[_vm._v("Loading!")])]):_vm._e(),_vm._v(" "),(_vm.connected && !_vm.loading)?_c('div',[_c('div',[_c('div',{staticClass:"card"},[_c('header',{staticClass:"card-header"},[_c('p',{staticClass:"card-header-title"},[_vm._v("\n            Transaction #"+_vm._s(_vm.transaction.transactionHash)+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content",staticStyle:{"word-wrap":"break-word"}},[_c('p',[_vm._v("Block Hash: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.transaction.blockHash } }}},[_vm._v(_vm._s(_vm.transaction.blockHash))])],1),_vm._v(" "),_c('p',[_vm._v("Block Number: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.transaction.blockNumber } }}},[_vm._v(_vm._s(_vm.transaction.blockNumber))])],1),_vm._v(" "),_c('p',[_vm._v("From: "),_c('router-link',{attrs:{"to":{ name: 'Address', params: { address: _vm.transaction.from } }}},[_vm._v(_vm._s(_vm.transaction.from))])],1),_vm._v(" "),_c('p',[_vm._v("To: "),_c('router-link',{attrs:{"to":{ name: 'Address', params: { address: _vm.transaction.to } }}},[_vm._v(_vm._s(_vm.transaction.to))])],1),_vm._v(" "),_c('p',[_vm._v("Status: "+_vm._s(_vm.transaction.status))]),_vm._v(" "),_c('p',[_vm._v("Contract Address: "+_vm._s((_vm.transaction.contractAddress) ? _vm.transaction.contractAddress : 'Not contract deployment transaction.'))]),_vm._v(" "),_c('p',[_vm._v("Cumulative Gas Used: "+_vm._s(_vm.transaction.cumulativeGasUsed))]),_vm._v(" "),(_vm.transaction.type > 1)?_c('p',[_vm._v("Effective Gas Price: "+_vm._s(_vm.transaction.effectiveGasPrice))]):_vm._e(),_vm._v(" "),_c('p',[_vm._v("Transaction type: "+_vm._s(_vm.transactionType))]),_vm._v(" "),(_vm.transaction.type > 0)?_c('p',[_vm._v("Access list: "+_vm._s(_vm.transaction.accessList ? _vm.transaction.accessList.join(',') : 'None'))]):_vm._e(),_vm._v(" "),_c('p',[_vm._v("Logs: \n              "),(_vm.logs !== false)?[_vm._l((_vm.logs),function(log,index){return _c('button',{key:index,staticClass:"button is-small",staticStyle:{"margin-right":"5px"},on:{"click":function($event){return _vm.selectLog(log)}}},[_vm._v("log - "+_vm._s(index))])}),_vm._v(" "),(_vm.selectedLog.address)?[_c('p',{staticStyle:{"margin-top":"15px","background-color":"whitesmoke","padding":"1.25em 1.5em","word-wrap":"normal","overflow-x":"scroll"}},[_vm._v("\n                    Selected log: "+_vm._s(_vm.selectedLog.logIndex)),_c('br'),_vm._v("\n                    Address: "+_vm._s(_vm.selectedLog.address)),_c('br'),_vm._v("\n                    Block Hash: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.selectedLog.blockHash } }}},[_vm._v(_vm._s(_vm.selectedLog.blockHash))]),_c('br'),_vm._v("\n                    Block Number: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.selectedLog.blockNumber } }}},[_vm._v(_vm._s(_vm.selectedLog.blockNumber))]),_c('br'),_vm._v("\n                    Data: "+_vm._s(_vm.selectedLog.data)),_c('br'),_vm._v("\n                    Removed: "+_vm._s(_vm.selectedLog.removed)),_c('br'),_vm._v("\n                    Topics: "+_vm._s(_vm.selectedLog.topics)),_c('br'),_vm._v("\n                    Transaction Hash: "+_vm._s(_vm.selectedLog.transactionHash)),_c('br'),_vm._v("\n                    Transaction Index: "+_vm._s(_vm.selectedLog.transactionIndex)),_c('br')],1)]:_vm._e()]:_c('span',[_vm._v("No logs.")])],2),_vm._v(" "),_c('p',[_vm._v("Logs Bloom: "+_vm._s(_vm.transaction.logsBloom))])])])])])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "JkuO":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("+2EI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("106b1987", content, true, {});

/***/ }),

/***/ "JuqQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Transaction_vue__ = __webpack_require__("8K5v");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c45e256_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Transaction_vue__ = __webpack_require__("HUQv");
function injectStyle (ssrContext) {
  __webpack_require__("JkuO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9c45e256"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Transaction_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c45e256_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Transaction_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=2.7ca323bf246a6c7b3b59.js.map