webpackJsonp([2],{

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
        _this.transaction = transaction;
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
        this.selectedLog = log;
      } else {
        this.notify({ text: 'Please select correst log.', class: 'is-danger' });
      }
    }
  })
});

/***/ }),

/***/ "JuqQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Transaction_vue__ = __webpack_require__("8K5v");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bb172fec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Transaction_vue__ = __webpack_require__("f7PC");
function injectStyle (ssrContext) {
  __webpack_require__("edqD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bb172fec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Transaction_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bb172fec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Transaction_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "amVJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".loading .button[data-v-bb172fec]{border:none}.loading .button[data-v-bb172fec]:hover{cursor:auto}", "", {"version":3,"sources":["/Users/peterlai/vuethexplore/src/views/Transaction.vue"],"names":[],"mappings":"AACA,kCACE,WAAa,CACd,AACD,wCACE,WAAgB,CACjB","file":"Transaction.vue","sourcesContent":["\n.loading .button[data-v-bb172fec] {\n  border: none;\n}\n.loading .button[data-v-bb172fec]:hover {\n  cursor: initial;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "edqD":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("amVJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6fb70d88", content, true, {});

/***/ }),

/***/ "f7PC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!_vm.connected)?_c('div',[_vm._v("Please choose the host to connect blockchain! ")]):_vm._e(),_vm._v(" "),(_vm.connected && _vm.loading)?_c('div',{staticClass:"loading"},[_c('span',{staticClass:"button is-loading"}),_c('span',{staticClass:"button"},[_vm._v("Loading!")])]):_vm._e(),_vm._v(" "),(_vm.connected && !_vm.loading)?_c('div',[_c('div',{staticClass:"section"},[_c('div',{staticClass:"card"},[_c('header',{staticClass:"card-header"},[_c('p',{staticClass:"card-header-title"},[_vm._v("\n            Transaction #"+_vm._s(_vm.transaction.transactionHash)+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content",staticStyle:{"word-wrap":"break-word"}},[_c('p',[_vm._v("Block Hash: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.transaction.blockHash } }}},[_vm._v(_vm._s(_vm.transaction.blockHash))])],1),_vm._v(" "),_c('p',[_vm._v("Block Number: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.transaction.blockNumber } }}},[_vm._v(_vm._s(_vm.transaction.blockNumber))])],1),_vm._v(" "),_c('p',[_vm._v("From: "),_c('router-link',{attrs:{"to":{ name: 'Address', params: { address: _vm.transaction.from } }}},[_vm._v(_vm._s(_vm.transaction.from))])],1),_vm._v(" "),_c('p',[_vm._v("To: "),_c('router-link',{attrs:{"to":{ name: 'Address', params: { address: _vm.transaction.to } }}},[_vm._v(_vm._s(_vm.transaction.to))])],1),_vm._v(" "),_c('p',[_vm._v("Status: "+_vm._s(_vm.transaction.status))]),_vm._v(" "),_c('p',[_vm._v("Contract Address: "+_vm._s((_vm.transaction.contractAddress) ? _vm.transaction.contractAddress : 'Not contract transaction.'))]),_vm._v(" "),_c('p',[_vm._v("Logs: \n              "),(_vm.logs !== false)?[_c('ul',_vm._l((_vm.logs),function(log,index){return _c('li',{on:{"click":function($event){return _vm.selectLog(log)}}},[_c('code',[_vm._v("log - "+_vm._s(index))])])}),0),_vm._v(" "),(_vm.selectedLog.address)?[_c('p',{staticStyle:{"background-color":"whitesmoke","padding":"1.25em 1.5em","word-wrap":"normal","overflow-x":"scroll"}},[_vm._v("\n                    Selected log: "+_vm._s(_vm.selectedLog.logIndex)),_c('br'),_vm._v("\n                    Address: "+_vm._s(_vm.selectedLog.address)),_c('br'),_vm._v("\n                    Block Hash: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.selectedLog.blockHash } }}},[_vm._v(_vm._s(_vm.selectedLog.blockHash))]),_c('br'),_vm._v("\n                    Block Number: "),_c('router-link',{attrs:{"to":{ name: 'Block', params: { blockNumber: _vm.selectedLog.blockNumber } }}},[_vm._v(_vm._s(_vm.selectedLog.blockNumber))]),_c('br'),_vm._v("\n                    Data: "+_vm._s(_vm.selectedLog.data)),_c('br'),_vm._v("\n                    Removed: "+_vm._s(_vm.selectedLog.removed)),_c('br'),_vm._v("\n                    Topics: "+_vm._s(_vm.selectedLog.topics)),_c('br'),_vm._v("\n                    Transaction Hash: "+_vm._s(_vm.selectedLog.transactionHash)),_c('br'),_vm._v("\n                    Transaction Index: "+_vm._s(_vm.selectedLog.transactionIndex)),_c('br')],1)]:_vm._e()]:_c('span',[_vm._v("No logs.")])],2),_vm._v(" "),_c('p',[_vm._v("Logs Bloom: "+_vm._s(_vm.transaction.logsBloom))]),_vm._v(" "),_c('p',[_vm._v("Cumulative Gas Used: "+_vm._s(_vm.transaction.cumulativeGasUsed))]),_vm._v(" "),_c('p',[_vm._v("Gas Used: "+_vm._s(_vm.transaction.cumulativeGasUsed))])])])])])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=2.fd98f82d40a0139ef222.js.map