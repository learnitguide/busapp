'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// keyCode constants
var BACKSPACE = 8;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var DELETE = 46;

// Doesn't really check if it's a style Object
// Basic implemenetation to check if it's not a string
// of classNames and is an Object
// TODO: Better implementation
var isStyleObject = function isStyleObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var SingleOtpInput = function (_PureComponent) {
  _inherits(SingleOtpInput, _PureComponent);

  function SingleOtpInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleOtpInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleOtpInput.__proto__ || Object.getPrototypeOf(SingleOtpInput)).call.apply(_ref, [this].concat(args))), _this), _this.getClasses = function () {
      for (var _len2 = arguments.length, classes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      return classes.filter(function (c) {
        return !isStyleObject(c) && c !== false;
      }).join(' ');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleOtpInput, [{
    key: 'componentDidMount',


    // Focus on first render
    // Only when shouldAutoFocus is true
    value: function componentDidMount() {
      var input = this.input,
          _props = this.props,
          focus = _props.focus,
          shouldAutoFocus = _props.shouldAutoFocus;


      if (input && focus && shouldAutoFocus) {
        input.focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var input = this.input,
          focus = this.props.focus;

      // Check if focusedInput changed
      // Prevent calling function if input already in focus

      if (prevProps.focus !== focus && input && focus) {
        input.focus();
        input.select();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          separator = _props2.separator,
          isLastChild = _props2.isLastChild,
          inputStyle = _props2.inputStyle,
          focus = _props2.focus,
          isDisabled = _props2.isDisabled,
          hasErrored = _props2.hasErrored,
          errorStyle = _props2.errorStyle,
          focusStyle = _props2.focusStyle,
          disabledStyle = _props2.disabledStyle,
          shouldAutoFocus = _props2.shouldAutoFocus,
          isInputNum = _props2.isInputNum,
          value = _props2.value,
          rest = _objectWithoutProperties(_props2, ['separator', 'isLastChild', 'inputStyle', 'focus', 'isDisabled', 'hasErrored', 'errorStyle', 'focusStyle', 'disabledStyle', 'shouldAutoFocus', 'isInputNum', 'value']);

      var numValueLimits = isInputNum ? { min: 0, max: 9 } : {};

      return _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        _react2.default.createElement('input', _extends({
          style: Object.assign({ width: '1em', textAlign: 'center' }, isStyleObject(inputStyle) && inputStyle, focus && isStyleObject(focusStyle) && focusStyle, isDisabled && isStyleObject(disabledStyle) && disabledStyle, hasErrored && isStyleObject(errorStyle) && errorStyle),
          className: this.getClasses(inputStyle, focus && focusStyle, isDisabled && disabledStyle, hasErrored && errorStyle),
          type: isInputNum ? 'number' : 'tel'
        }, numValueLimits, {
          maxLength: '1',
          ref: function ref(input) {
            _this2.input = input;
          },
          disabled: isDisabled,
          value: value ? value : ''
        }, rest)),
        !isLastChild && separator
      );
    }
  }]);

  return SingleOtpInput;
}(_react.PureComponent);

var OtpInput = function (_Component) {
  _inherits(OtpInput, _Component);

  function OtpInput() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, OtpInput);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = OtpInput.__proto__ || Object.getPrototypeOf(OtpInput)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      activeInput: 0
    }, _this3.getOtpValue = function () {
      return _this3.props.value ? _this3.props.value.toString().split('') : [];
    }, _this3.handleOtpChange = function (otp) {
      var _this3$props = _this3.props,
          onChange = _this3$props.onChange,
          isInputNum = _this3$props.isInputNum;

      var otpValue = otp.join('');
      onChange(isInputNum ? Number(otpValue) : otpValue);
    }, _this3.focusInput = function (input) {
      var numInputs = _this3.props.numInputs;

      var activeInput = Math.max(Math.min(numInputs - 1, input), 0);

      _this3.setState({ activeInput: activeInput });
    }, _this3.focusNextInput = function () {
      var activeInput = _this3.state.activeInput;

      _this3.focusInput(activeInput + 1);
    }, _this3.focusPrevInput = function () {
      var activeInput = _this3.state.activeInput;

      _this3.focusInput(activeInput - 1);
    }, _this3.changeCodeAtFocus = function (value) {
      var activeInput = _this3.state.activeInput;

      var otp = _this3.getOtpValue();
      otp[activeInput] = value[0];

      _this3.handleOtpChange(otp);
    }, _this3.handleOnPaste = function (e) {
      e.preventDefault();
      var numInputs = _this3.props.numInputs;
      var activeInput = _this3.state.activeInput;

      var otp = _this3.getOtpValue();

      // Get pastedData in an array of max size (num of inputs - current position)
      var pastedData = e.clipboardData.getData('text/plain').slice(0, numInputs - activeInput).split('');

      // Paste data from focused input onwards
      for (var pos = 0; pos < numInputs; ++pos) {
        if (pos >= activeInput && pastedData.length > 0) {
          otp[pos] = pastedData.shift();
        }
      }

      _this3.handleOtpChange(otp);
    }, _this3.handleOnChange = function (e) {
      _this3.changeCodeAtFocus(e.target.value);
      _this3.focusNextInput();
    }, _this3.handleOnKeyDown = function (e) {
      if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
        e.preventDefault();
        _this3.changeCodeAtFocus('');
        _this3.focusPrevInput();
      } else if (e.keyCode === DELETE || e.key === 'Delete') {
        e.preventDefault();
        _this3.changeCodeAtFocus('');
      } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
        e.preventDefault();
        _this3.focusPrevInput();
      } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
        e.preventDefault();
        _this3.focusNextInput();
      }
    }, _this3.checkLength = function (e) {
      if (e.target.value.length > 1) {
        e.preventDefault();
        _this3.focusNextInput();
      }
    }, _this3.renderInputs = function () {
      var activeInput = _this3.state.activeInput;
      var _this3$props2 = _this3.props,
          numInputs = _this3$props2.numInputs,
          inputStyle = _this3$props2.inputStyle,
          focusStyle = _this3$props2.focusStyle,
          separator = _this3$props2.separator,
          isDisabled = _this3$props2.isDisabled,
          disabledStyle = _this3$props2.disabledStyle,
          hasErrored = _this3$props2.hasErrored,
          errorStyle = _this3$props2.errorStyle,
          shouldAutoFocus = _this3$props2.shouldAutoFocus,
          isInputNum = _this3$props2.isInputNum;

      var otp = _this3.getOtpValue();
      var inputs = [];

      var _loop = function _loop(i) {
        inputs.push(_react2.default.createElement(SingleOtpInput, {
          key: i,
          focus: activeInput === i,
          value: otp && otp[i],
          onChange: _this3.handleOnChange,
          onKeyDown: _this3.handleOnKeyDown,
          onInput: _this3.checkLength,
          onPaste: _this3.handleOnPaste,
          onFocus: function onFocus(e) {
            _this3.setState({ activeInput: i });
            e.target.select();
          },
          onBlur: function onBlur() {
            return _this3.setState({ activeInput: -1 });
          },
          separator: separator,
          inputStyle: inputStyle,
          focusStyle: focusStyle,
          isLastChild: i === numInputs - 1,
          isDisabled: isDisabled,
          disabledStyle: disabledStyle,
          hasErrored: hasErrored,
          errorStyle: errorStyle,
          shouldAutoFocus: shouldAutoFocus,
          isInputNum: isInputNum
        }));
      };

      for (var i = 0; i < numInputs; i++) {
        _loop(i);
      }

      return inputs;
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  // Helper to return OTP from input


  // Focus on input by index


  // Focus on next input


  // Focus on previous input


  // Change OTP value at focused input


  // Handle pasted OTP


  // Handle cases of backspace, delete, left arrow, right arrow


  _createClass(OtpInput, [{
    key: 'render',
    value: function render() {
      var containerStyle = this.props.containerStyle;


      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({ display: 'flex' }, isStyleObject(containerStyle) && containerStyle),
          className: !isStyleObject(containerStyle) && containerStyle
        },
        this.renderInputs()
      );
    }
  }]);

  return OtpInput;
}(_react.Component);

OtpInput.defaultProps = {
  numInputs: 4,
  onChange: function onChange(otp) {
    return console.log(otp);
  },
  isDisabled: false,
  shouldAutoFocus: false,
  value: ''
};
exports.default = OtpInput;