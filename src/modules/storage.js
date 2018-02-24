const storage = {
  isLocalStorage () {
    if (!window) {
      return false;
    }
    return window.localStorage !== undefined;
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
    return this.getItem(key) !== false;
  },
};

module.exports = storage;
