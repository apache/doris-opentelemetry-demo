"use strict";
(self["webpackChunkselectdb_discover_app"] = self["webpackChunkselectdb_discover_app"] || []).push([[202],{

/***/ 202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1269);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6089);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8531);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2007);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _testIds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5611);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}






const AppConfig = ({ plugin })=>{
    const s = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
    const { enabled, pinned, jsonData, secureJsonFields } = plugin.meta;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        apiUrl: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.apiUrl) || '',
        apiKey: '',
        isApiKeySet: Boolean(secureJsonFields === null || secureJsonFields === void 0 ? void 0 : secureJsonFields.apiKey)
    });
    const isSubmitDisabled = Boolean(!state.apiUrl || !state.isApiKeySet && !state.apiKey);
    const onResetApiKey = ()=>setState(_object_spread_props(_object_spread({}, state), {
            apiKey: '',
            isApiKeySet: false
        }));
    const onChange = (event)=>{
        setState(_object_spread_props(_object_spread({}, state), {
            [event.target.name]: event.target.value.trim()
        }));
    };
    const onSubmit = ()=>{
        if (isSubmitDisabled) {
            return;
        }
        updatePluginAndReload(plugin.meta.id, {
            enabled,
            pinned,
            jsonData: {
                apiUrl: state.apiUrl
            },
            // This cannot be queried later by the frontend.
            // We don't want to override it in case it was set previously and left untouched now.
            secureJsonData: state.isApiKeySet ? undefined : {
                apiKey: state.apiKey
            }
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: onSubmit
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FieldSet, {
        label: "API Settings"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: "API Key",
        description: "A secret key for authenticating to our custom API"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SecretInput, {
        width: 60,
        id: "config-api-key",
        "data-testid": _testIds__WEBPACK_IMPORTED_MODULE_5__/* .testIds */ .b.appConfig.apiKey,
        name: "apiKey",
        value: state.apiKey,
        isConfigured: state.isApiKeySet,
        placeholder: 'Your secret API key',
        onChange: onChange,
        onReset: onResetApiKey
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: "API Url",
        description: "",
        className: s.marginTop
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
        width: 60,
        name: "apiUrl",
        id: "config-api-url",
        "data-testid": _testIds__WEBPACK_IMPORTED_MODULE_5__/* .testIds */ .b.appConfig.apiUrl,
        value: state.apiUrl,
        placeholder: `E.g.: http://mywebsite.com/api/v1`,
        onChange: onChange
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: s.marginTop
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "submit",
        "data-testid": _testIds__WEBPACK_IMPORTED_MODULE_5__/* .testIds */ .b.appConfig.submit,
        disabled: isSubmitDisabled
    }, "Save API settings"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppConfig);
const getStyles = (theme)=>({
        colorWeak: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)`
    color: ${theme.colors.text.secondary};
  `,
        marginTop: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)`
    margin-top: ${theme.spacing(3)};
  `
    });
const updatePluginAndReload = (pluginId, data)=>_async_to_generator(function*() {
        try {
            yield updatePlugin(pluginId, data);
            // Reloading the page as the changes made here wouldn't be propagated to the actual plugin otherwise.
            // This is not ideal, however unfortunately currently there is no supported way for updating the plugin state.
            window.location.reload();
        } catch (e) {
            console.error('Error while updating the plugin', e);
        }
    })();
const updatePlugin = (pluginId, data)=>_async_to_generator(function*() {
        const response = yield (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
            url: `/api/plugins/${pluginId}/settings`,
            method: 'POST',
            data
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(response);
    })();


/***/ }),

/***/ 5611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ testIds)
/* harmony export */ });
const testIds = {
    appConfig: {
        apiKey: 'data-testid ac-api-key',
        apiUrl: 'data-testid ac-api-url',
        submit: 'data-testid ac-submit-form'
    },
    pageOne: {
        container: 'data-testid pg-one-container',
        navigateToFour: 'data-testid navigate-to-four'
    },
    pageTwo: {
        container: 'data-testid pg-two-container'
    },
    pageThree: {
        container: 'data-testid pg-three-container'
    },
    pageFour: {
        container: 'data-testid pg-four-container',
        navigateBack: 'data-testid navigate-back'
    }
};


/***/ })

}]);
//# sourceMappingURL=202.js.map?_cache=cca91c670b951e00d547