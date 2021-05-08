"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogFooter = function DialogFooter(props) {
    var buttons = props.buttons;
    if (!buttons || buttons.length == 0) {
        return false;
    }

    var dialogButtons = buttons.map(function (button, index) {
        if (_react2.default.isValidElement(button)) {
            return button;
        }

        var text = button.text,
            onClick = button.onClick,
            className = button.className;


        return _react2.default.createElement(
            "button",
            {
                key: "button-" + index,
                type: "button",
                className: (0, _classnames2.default)("button", className),
                onClick: onClick },
            text
        );
    }, undefined);

    return _react2.default.createElement(
        "div",
        { className: "ui-dialog-buttonpane" },
        _react2.default.createElement(
            "div",
            { className: "ui-dialog-buttonset" },
            dialogButtons
        )
    );
};

DialogFooter.propTypes = {
    buttons: _propTypes2.default.array,
    onClose: _propTypes2.default.func.isRequired
};

exports.default = DialogFooter;