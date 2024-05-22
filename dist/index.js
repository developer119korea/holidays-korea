"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchHolidays", {
  enumerable: true,
  get: function get() {
    return _holidays.fetchHolidays;
  }
});
exports.init = init;
var _config = require("./config");
var _holidays = require("./holidays.service");
function init(_ref) {
  var serviceKey = _ref.serviceKey;
  (0, _config.setServiceKey)({
    key: serviceKey
  });
}