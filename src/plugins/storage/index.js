const storagePlugun = {};

storagePlugun.install = function install (Vue, options) {
  const opts = Object.assign({
    module: 'localStorage',
  }, options);

  if (opts.module !== 'localStorage') {
    throw new Error('Sorry we only support localStorage now.');
  }

  const storage = {
    isLocalStorage () {
      if (!window) {
        return false;
      }
      return window.localStorage !== undefined && opts.module === 'localStorage';
    },
    getItem (key) {
      if (this.isLocalStorage()) {
        return window.localStorage.getItem(key);
      }
      return false;
    },
    setItem (key, value) {
      if (this.isLocalStorage()) {
        window.localStorage.setItem(key, value);
      }
    },
    isExist (key) {
      // if value is boolean false, it return string false
      const item = this.getItem(key);

      return item !== false && item !== undefined && item !== null;
    },
  };

  Object.defineProperty(Vue.prototype, '$storage', {
    get () { return storage; },
  });
};

export default storagePlugun;
