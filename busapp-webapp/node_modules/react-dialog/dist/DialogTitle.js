"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogTitle = function DialogTitle(_ref) {
    var title = _ref.title,
        hasCloseIcon = _ref.hasCloseIcon,
        onClose = _ref.onClose,
        allowMinimize = _ref.allowMinimize,
        isMinimized = _ref.isMinimized,
        onMinimize = _ref.onMinimize,
        allowMaximize = _ref.allowMaximize,
        isMaximized = _ref.isMaximized,
        onMaximize = _ref.onMaximize,
        onRestore = _ref.onRestore;

    var closeIcon = void 0;
    if (hasCloseIcon !== false) {
        closeIcon = _react2.default.createElement("i", { className: "icon icon-close", onClick: onClose });
    }

    var minimizeIcon = void 0;
    if (allowMinimize) {
        if (isMinimized) {
            minimizeIcon = _react2.default.createElement("i", { className: "icon icon-restore", onClick: onRestore });
        } else {
            minimizeIcon = _react2.default.createElement("i", { className: "icon icon-minimize", onClick: onMinimize });
        }
    }

    var maximizeIcon = void 0;
    if (allowMaximize) {
        if (isMaximized) {
            maximizeIcon = _react2.default.createElement("i", { className: "icon icon-restore", onClick: onRestore });
        } else {
            maximizeIcon = _react2.default.createElement("i", { className: "icon icon-maximize", onClick: onMaximize });
        }
    }

    return _react2.default.createElement(
        "header",
        { className: "ui-dialog-titlebar" },
        _react2.default.createElement(
            "div",
            { className: "title" },
            title
        ),
        _react2.default.createElement(
            "div",
            { className: "action-items" },
            minimizeIcon,
            maximizeIcon,
            closeIcon
        )
    );
};

DialogTitle.propTypes = {
    hasCloseIcon: _propTypes2.default.bool,
    allowMinimize: _propTypes2.default.bool,
    allowMaximize: _propTypes2.default.bool,
    isMinimized: _propTypes2.default.bool,
    isMaximized: _propTypes2.default.bool,
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    onClose: _propTypes2.default.func.isRequired,
    onMinimize: _propTypes2.default.func,
    onMaximize: _propTypes2.default.func,
    onRestore: _propTypes2.default.func
};

exports.default = DialogTitle;