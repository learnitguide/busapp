'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamor = require('glamor');

var _constant = require('./../utils/constant');

var _defaultStyle = require('./../utils/defaultStyle');

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trackProgress = _glamor.css.keyframes({
  '0%': { width: '100%' },
  '100%': { width: 0 }
});

var styles = function styles(type, isRunning, hide, delay, rtl) {
  return (0, _glamor.css)(_extends({
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: '5px',
    zIndex: _defaultStyle2.default.zIndex,
    opacity: hide ? 0 : 0.7,
    animation: trackProgress + ' linear 1',
    animationPlayState: isRunning ? 'running' : 'paused',
    animationDuration: delay + 'ms',
    backgroundColor: 'rgba(255,255,255,.7)'
  }, type === 'default' ? {
    // uumm, ok I was lazy
    background: rtl ? _defaultStyle2.default.colorProgressDefault.replace('to right', 'to left') : _defaultStyle2.default.colorProgressDefault
  } : {}, rtl ? { right: 0 } : { left: 0 }));
};

function ProgressBar(_ref) {
  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      rtl = _ref.rtl;

  return _react2.default.createElement('div', _extends({}, (0, _glamor.css)(styles(type, isRunning, hide, delay, rtl), typeof className !== 'string' && className), typeof className === 'string' && { className: className }, {
    onAnimationEnd: closeToast
  }));
}

ProgressBar.propTypes = {
  /**
   * The animation delay which determine when to close the toast
   */
  delay: _propTypes2.default.number.isRequired,

  /**
   * Whether or not the animation is running or paused
   */
  isRunning: _propTypes2.default.bool.isRequired,

  /**
   * Func to close the current toast
   */
  closeToast: _propTypes2.default.func.isRequired,

  /**
   * Support rtl content
   */
  rtl: _propTypes2.default.bool.isRequired,

  /**
   * Optional type : info, success ...
   */
  type: _propTypes2.default.string,

  /**
   * Hide or not the progress bar
   */
  hide: _propTypes2.default.bool,

  /**
   * Optionnal className
   */
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

ProgressBar.defaultProps = {
  type: _constant.TYPE.DEFAULT,
  hide: false,
  className: ''
};

exports.default = ProgressBar;