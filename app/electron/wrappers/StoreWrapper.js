class StoreWrapper {
    static getItem(key) {
      return window.api.store.getItem(key);
    }
  
    static setItem(key, value) {
      window.api.store.setItem(key, value);
    }
  }
  
  export default StoreWrapper;
  