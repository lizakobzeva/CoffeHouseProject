"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginRegisterForm_module_scss_1 = require("./LoginRegisterForm.module.scss");
var react_i18next_1 = require("react-i18next");
var LoginForm_1 = require("./LoginForm");
var RegisterForm_1 = require("./RegisterForm");
var react_redux_1 = require("react-redux");
// import { getLoading } from "../../model/selectors/getLoading/getLoading";
var Loader_1 = require("shared/ui/Loader");
var getRegister_1 = require("../../model/selectors/getRegister/getRegister");
var getLogin_1 = require("features/AuthByEmail/model/selectors/getLogin/getLogin");
var LoginRegisterForm = function () {
    var _a = react_1.useState(true), isSignUp = _a[0], setIsSignUp = _a[1];
    var t = react_i18next_1.useTranslation().t;
    var isLoadingLogin = react_redux_1.useSelector(getLogin_1.getLogin).isLoading;
    var isLoadingRegister = react_redux_1.useSelector(getRegister_1.getRegister).isLoading;
    return (React.createElement("article", { className: isSignUp ? LoginRegisterForm_module_scss_1["default"].Click : "" },
        React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].Titles },
            React.createElement("h3", { onClick: function () { return setIsSignUp(true); } }, t("Sign Up")),
            React.createElement("h3", { onClick: function () { return setIsSignUp(false); } }, t("Log In"))),
        React.createElement("label", { htmlFor: "reg-log" }),
        React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].card3DWrap },
            React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].card3DWrapper },
                React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].cardFront }, isLoadingLogin ? React.createElement(Loader_1["default"], null) : React.createElement(LoginForm_1["default"], null)),
                React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].cardBack }, isLoadingRegister ? React.createElement(Loader_1["default"], null) : React.createElement(RegisterForm_1["default"], null))))));
};
exports["default"] = LoginRegisterForm;
