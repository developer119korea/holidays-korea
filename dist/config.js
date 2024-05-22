"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setServiceKey = exports.config = exports.OPEN_HOOLIDAY_API_URL = void 0;
var config = exports.config = {
  serviceKey: ""
};
var setServiceKey = exports.setServiceKey = function setServiceKey(_ref) {
  var key = _ref.key;
  config.serviceKey = key;
};
var OPEN_HOOLIDAY_API_URL = exports.OPEN_HOOLIDAY_API_URL = "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo";