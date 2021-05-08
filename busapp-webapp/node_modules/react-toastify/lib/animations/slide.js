'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAnimation;

var _constant = require('./../utils/constant');

// animation state used by enter:to and exit:from
var commonState = { transform: 'translate3d(0, 0, 0)' };

function getAnimation(pos) {
  var animation = void 0;

  switch (pos) {
    case _constant.POSITION.TOP_RIGHT:
    case _constant.POSITION.BOTTOM_RIGHT:
    default:
      animation = {
        enter: {
          from: {
            transform: 'translate3d(100%, 0, 0)',
            visibility: 'visible'
          }
        },
        exit: {
          to: {
            visibility: 'hidden',
            transform: 'translate3d(100%, 0, 0)'
          }
        }
      };
      break;
    case _constant.POSITION.TOP_LEFT:
    case _constant.POSITION.BOTTOM_LEFT:
      animation = {
        enter: {
          from: {
            transform: 'translate3d(-100%, 0, 0)',
            visibility: 'visible'
          }
        },
        exit: {
          to: {
            visibility: 'hidden',
            transform: 'translate3d(-100%, 0, 0)'
          }
        }
      };
      break;
    case _constant.POSITION.BOTTOM_CENTER:
      animation = {
        enter: {
          from: {
            transform: 'translate3d(0, 100%, 0)',
            visibility: 'visible'
          }
        },
        exit: {
          to: {
            visibility: 'hidden',
            transform: 'translate3d(0, 100%, 0)'
          }
        }
      };
      break;
    case _constant.POSITION.TOP_CENTER:
      animation = {
        enter: {
          from: {
            transform: 'translate3d(0, -100%, 0)',
            visibility: 'visible'
          }
        },
        exit: {
          to: {
            visibility: 'hidden',
            transform: 'translate3d(0, -100%, 0)'
          }
        }
      };
      break;
  }

  animation.enter.to = animation.exit.from = commonState;

  return animation;
}