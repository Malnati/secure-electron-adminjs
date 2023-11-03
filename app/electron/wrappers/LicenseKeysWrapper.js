class LicenseKeysWrapper {
    static validateLicenseKey(key) {
      return window.api.licenseKeys.validateLicenseKey(key);
    }
  }
  
  export default LicenseKeysWrapper;
  