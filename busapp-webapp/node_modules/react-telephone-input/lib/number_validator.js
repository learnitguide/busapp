'use strict';

exports.__esModule = true;
exports.default = isNumberValid;

var _cramda = require('cramda');

var _cramda2 = _interopRequireDefault(_cramda);

var _countryTelephoneData = require('country-telephone-data');

var _countryTelephoneData2 = _interopRequireDefault(_countryTelephoneData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNumberValid(inputNumber) {
  var countries = _countryTelephoneData2.default.allCountries;
  return _cramda2.default.any(function (country) {
    return _cramda2.default.startsWith(country.dialCode, inputNumber) || _cramda2.default.startsWith(inputNumber, country.dialCode);
  }, countries);
}
module.exports = exports['default'];