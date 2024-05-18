"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var LoginRegisterForm_module_scss_1 = require("./LoginRegisterForm.module.scss");
var Button_1 = require("shared/ui/Button");
var react_i18next_1 = require("react-i18next");
var react_hook_form_1 = require("react-hook-form");
var StoreProvider_1 = require("app/providers/StoreProvider");
var LoginByEmail_1 = require("../../model/services/LoginByEmail/LoginByEmail");
var react_redux_1 = require("react-redux");
var getLogin_1 = require("features/AuthByEmail/model/selectors/getLogin/getLogin");
var LoginForm = function () {
    var t = react_i18next_1.useTranslation().t;
    var dispatch = StoreProvider_1.useAppDispatch();
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit, watch = _a.watch, errors = _a.formState.errors;
    var _b = react_redux_1.useSelector(getLogin_1.getLogin), email = _b.email, password = _b.password, error = _b.error, isLoading = _b.isLoading;
    var onSubmit = function (data) {
        console.log("click login");
        dispatch(LoginByEmail_1.LoginByEmail(data));
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: LoginRegisterForm_module_scss_1["default"].centerWrap },
        error && React.createElement("h4", { className: LoginRegisterForm_module_scss_1["default"].errorTitle }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"),
        React.createElement("h4", { className: LoginRegisterForm_module_scss_1["default"].cardTitle }, t("Log In")),
        React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].formGroup },
            React.createElement("input", __assign({}, register("email", { required: true }), { type: "email", className: LoginRegisterForm_module_scss_1["default"].formStyle, placeholder: t("Your Email") }))),
        React.createElement("div", { className: LoginRegisterForm_module_scss_1["default"].formGroup },
            React.createElement("input", __assign({}, register("password", { required: true }), { type: "password", className: LoginRegisterForm_module_scss_1["default"].formStyle, placeholder: t("Your Password") }))),
        React.createElement(Button_1["default"], null, t("Submit")),
        React.createElement("p", null,
            React.createElement("a", { href: "#0", className: LoginRegisterForm_module_scss_1["default"].link }, t("Forgot your password?")))));
};
exports["default"] = LoginForm;
