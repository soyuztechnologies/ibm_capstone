sap.ui.define([], function () {
  "use strict";

  /**
   * Formatter helpers — pure functions, no UI5 base class needed.
   */
  function getStatus(code) {
    switch (code) {
      case "A":
        return "Available";
      case "D":
        return "Discontinued";
      case "O":
        return "Out of Stock";
      default:
        return "";
    }
  }
  function getStatusColor(code) {
    switch (code) {
      case "A":
        return "Success";
      case "D":
        return "Error";
      case "O":
        return "Warning";
      default:
        return "None";
    }
  }
  // ...getOrderTypeDescription below
  var __exports = {
    __esModule: true
  };
  __exports.getStatus = getStatus;
  __exports.getStatusColor = getStatusColor;
  return __exports;
});
//# sourceMappingURL=formatter-dbg.js.map
