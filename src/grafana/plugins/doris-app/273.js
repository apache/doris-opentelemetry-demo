"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[273],{

/***/ 2560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UB: () => (/* binding */ DEFAULT_OPERATION),
  aR: () => (/* binding */ DEFAULT_SERVICE),
  fU: () => (/* binding */ FORMAT_DATE),
  Bg: () => (/* binding */ IntervalEnum),
  bw: () => (/* binding */ ROUTES),
  Vy: () => (/* binding */ getAutoInterval),
  VA: () => (/* binding */ translationDateIntervalType)
});

// UNUSED EXPORTS: AUTO_INTERVALS, CAN_SEARCH_FIELD_TYPE, ENABLE_SEARCH_FIELD_TYPE, PLUGIN_BASE_URL

;// ./plugin.json
const plugin_namespaceObject = {};
// EXTERNAL MODULE: ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js + 4 modules
var groupBy = __webpack_require__(7170);
;// ./constants.ts


const PLUGIN_BASE_URL = (/* unused pure expression or super */ null && (`/a/${pluginJson.id}`));
var ROUTES = /*#__PURE__*/ function(ROUTES) {
    ROUTES["One"] = "one";
    ROUTES["Discover"] = "discover";
    ROUTES["Traces"] = "traces";
    ROUTES["Dashboard"] = "dashboard";
    return ROUTES;
}({});
const FORMAT_DATE = 'YYYY-MM-DD HH:mm:ss';
var IntervalEnum = /*#__PURE__*/ function(IntervalEnum) {
    IntervalEnum["Auto"] = "auto";
    IntervalEnum["Day"] = "day";
    IntervalEnum["Week"] = "week";
    IntervalEnum["Month"] = "month";
    IntervalEnum["Year"] = "year";
    IntervalEnum["Hour"] = "hour";
    IntervalEnum["Minute"] = "minute";
    IntervalEnum["Second"] = "second";
    return IntervalEnum;
}({});
const DEFAULT_SERVICE = {
    value: 'all',
    label: 'ALL'
};
const DEFAULT_OPERATION = {
    value: 'all',
    label: 'ALL'
};
const AUTO_INTERVALS = [
    {
        current_date_range: 3,
        current_type: 'year',
        interval_unit: 'month',
        interval_value: 1
    },
    {
        current_date_range: 1,
        current_type: 'year',
        interval_unit: 'week',
        interval_value: 1
    },
    {
        current_date_range: 1,
        current_type: 'month',
        interval_unit: 'day',
        interval_value: 1
    },
    {
        current_date_range: 1,
        current_type: 'week',
        interval_unit: 'hour',
        interval_value: 12
    },
    {
        current_date_range: 4,
        current_type: 'day',
        interval_unit: 'hour',
        interval_value: 3
    },
    {
        current_date_range: 1,
        current_type: 'day',
        interval_unit: 'hour',
        interval_value: 1
    },
    {
        current_date_range: 16,
        current_type: 'hour',
        interval_unit: 'minute',
        interval_value: 30
    },
    {
        current_date_range: 8,
        current_type: 'hour',
        interval_unit: 'minute',
        interval_value: 10
    },
    {
        current_date_range: 2,
        current_type: 'hour',
        interval_unit: 'minute',
        interval_value: 5
    },
    {
        current_date_range: 38,
        current_type: 'minute',
        interval_unit: 'minute',
        interval_value: 1
    },
    {
        current_date_range: 13,
        current_type: 'minute',
        interval_unit: 'second',
        interval_value: 30
    },
    {
        current_date_range: 6,
        current_type: 'minute',
        interval_unit: 'second',
        interval_value: 10
    },
    {
        current_date_range: 4,
        current_type: 'minute',
        interval_unit: 'second',
        interval_value: 5
    },
    {
        current_date_range: 1,
        current_type: 'minute',
        interval_unit: 'second',
        interval_value: 1
    }
];
const CAN_SEARCH_FIELD_TYPE = (/* unused pure expression or super */ null && ([
    'STRING',
    'ARRAY',
    'NUMBER',
    'VARIANT'
]));
const ENABLE_SEARCH_FIELD_TYPE = (/* unused pure expression or super */ null && ([
    'DATETIME',
    'TIMESTAMP',
    'TIME'
]));
function getAutoInterval(currentDate) {
    const AUTO_INTERVALS_OBJ = (0,groupBy/* default */.A)(AUTO_INTERVALS, ({ current_type })=>current_type);
    const [startDate, endDate] = currentDate;
    const diffYear = endDate === null || endDate === void 0 ? void 0 : endDate.diff(startDate, 'year');
    const diffMonth = endDate === null || endDate === void 0 ? void 0 : endDate.diff(startDate, 'month');
    const diffWeek = endDate === null || endDate === void 0 ? void 0 : endDate.diff(startDate, 'week');
    const diffDay = endDate === null || endDate === void 0 ? void 0 : endDate.diff(startDate, 'day');
    const diffHour = endDate === null || endDate === void 0 ? void 0 : endDate.diff(startDate, 'hour');
    const diffMinute = endDate === null || endDate === void 0 ? void 0 : endDate.diff(startDate, 'minute');
    let intervalInfo = {};
    if (diffYear >= 3) {
        intervalInfo = AUTO_INTERVALS_OBJ['year'].find((item)=>{
            return item.current_date_range === 3;
        });
        return intervalInfo;
    }
    if (diffYear < 3 && diffYear >= 1) {
        intervalInfo = AUTO_INTERVALS_OBJ['year'].find((item)=>{
            return item.current_date_range === 1;
        });
        return intervalInfo;
    }
    if (diffMonth >= 1) {
        intervalInfo = AUTO_INTERVALS_OBJ['month'].find((item)=>{
            return item.current_date_range === 1;
        });
        return intervalInfo;
    }
    if (diffWeek >= 1) {
        intervalInfo = AUTO_INTERVALS_OBJ['week'].find((item)=>{
            return item.current_date_range === 1;
        });
        return intervalInfo;
    }
    if (diffDay >= 4) {
        intervalInfo = AUTO_INTERVALS_OBJ['day'].find((item)=>{
            return item.current_date_range === 4;
        });
        return intervalInfo;
    }
    if (diffDay >= 1 && diffDay < 4) {
        intervalInfo = AUTO_INTERVALS_OBJ['day'].find((item)=>{
            return item.current_date_range === 1;
        });
        return intervalInfo;
    }
    if (diffHour >= 16) {
        intervalInfo = AUTO_INTERVALS_OBJ['hour'].find((item)=>{
            return item.current_date_range === 16;
        });
        return intervalInfo;
    }
    if (diffHour >= 8) {
        intervalInfo = AUTO_INTERVALS_OBJ['hour'].find((item)=>{
            return item.current_date_range === 8;
        });
        return intervalInfo;
    }
    if (diffHour >= 2) {
        intervalInfo = AUTO_INTERVALS_OBJ['hour'].find((item)=>{
            return item.current_date_range === 2;
        });
        return intervalInfo;
    }
    if (diffMinute >= 38) {
        intervalInfo = AUTO_INTERVALS_OBJ['minute'].find((item)=>{
            return item.current_date_range === 38;
        });
        return intervalInfo;
    }
    if (diffMinute >= 13) {
        intervalInfo = AUTO_INTERVALS_OBJ['minute'].find((item)=>{
            return item.current_date_range === 13;
        });
        return intervalInfo;
    }
    if (diffMinute >= 6) {
        intervalInfo = AUTO_INTERVALS_OBJ['minute'].find((item)=>{
            return item.current_date_range === 6;
        });
        return intervalInfo;
    }
    if (diffMinute >= 4) {
        intervalInfo = AUTO_INTERVALS_OBJ['minute'].find((item)=>{
            return item.current_date_range === 4;
        });
        return intervalInfo;
    }
    if (diffMinute >= 1) {
        intervalInfo = AUTO_INTERVALS_OBJ['minute'].find((item)=>{
            return item.current_date_range === 1;
        });
        return intervalInfo;
    } else {
        intervalInfo = AUTO_INTERVALS_OBJ['minute'].find((item)=>{
            return item.current_date_range === 1;
        });
        return intervalInfo;
    }
}
function translationDateIntervalType(type) {
    if (type === 'auto') {
        return 'Auto';
    } else if (type === 'second') {
        return 'Second';
    } else if (type === 'minute') {
        return 'Minute';
    } else if (type === 'hour') {
        return 'Hour';
    } else if (type === 'day') {
        return 'Day';
    } else if (type === 'week') {
        return 'Week';
    } else if (type === 'month') {
        return 'Month';
    }
    return 'Year';
}


/***/ }),

/***/ 3455:
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


/***/ }),

/***/ 5582:
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
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7781);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8531);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2007);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(122);
/* harmony import */ var _services_metaservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6965);
/* harmony import */ var _testIds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3455);
/* harmony import */ var _store_discover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2539);
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
    const s = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
    const { enabled, pinned, jsonData, secureJsonFields } = plugin.meta;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        apiUrl: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.apiUrl) || '',
        apiKey: '',
        isApiKeySet: Boolean(secureJsonFields === null || secureJsonFields === void 0 ? void 0 : secureJsonFields.apiKey)
    });
    const logsConfig = (jsonData === null || jsonData === void 0 ? void 0 : jsonData.logsConfig) || {};
    const [currentLogsConfig, setCurrentLogsConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(logsConfig);
    const [databases, setDatabases] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__/* .useAtom */ .fp)(_store_discover__WEBPACK_IMPORTED_MODULE_9__/* .settingDatabasesAtom */ .AW);
    const [tables, setTables] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__/* .useAtom */ .fp)(_store_discover__WEBPACK_IMPORTED_MODULE_9__/* .settingTablesAtom */ .L);
    const isSubmitDisabled = Boolean(!state.apiUrl || !state.isApiKeySet && !state.apiKey);
    const fetchDatabases = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((ds)=>{
        if (!ds) {
            return undefined;
        }
        return (0,_services_metaservice__WEBPACK_IMPORTED_MODULE_7__/* .getDatabases */ .Hm)(ds).subscribe({
            next: (resp)=>{
                const { data, ok } = resp;
                if (ok) {
                    const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toDataFrame)(data.results.getDatabases.frames[0]);
                    const values = Array.from(frame.fields[0].values);
                    const options = values.map((item)=>({
                            label: item,
                            value: item
                        }));
                    setDatabases(options);
                }
            },
            error: (err)=>console.log('Fetch Error', err)
        });
    }, [
        setDatabases
    ]);
    const fetchTables = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((db)=>{
        if (!db) {
            return undefined;
        }
        return (0,_services_metaservice__WEBPACK_IMPORTED_MODULE_7__/* .getTablesService */ .Rw)({
            selectdbDS: currentLogsConfig.datasource,
            database: db
        }).subscribe({
            next: (resp)=>{
                const { data, ok } = resp;
                if (ok) {
                    const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toDataFrame)(data.results.getTables.frames[0]);
                    const values = Array.from(frame.fields[0].values);
                    const options = values.map((item)=>({
                            label: item,
                            value: item
                        }));
                    setTables(options);
                }
            },
            error: (err)=>console.log('Fetch Error', err)
        });
    }, [
        setTables,
        currentLogsConfig.datasource
    ]);
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
    const submitLogConfig = ()=>{
        updatePluginAndReload(plugin.meta.id, {
            enabled,
            pinned,
            jsonData: {
                apiUrl: state.apiUrl,
                logsConfig: _object_spread({}, currentLogsConfig)
            },
            // This cannot be queried later by the frontend.
            // We don't want to override it in case it was set previously and left untouched now.
            secureJsonData: state.isApiKeySet ? undefined : {
                apiKey: state.apiKey
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentLogsConfig.datasource) {
            return;
        }
        const subscription = fetchDatabases(currentLogsConfig.datasource);
        return ()=>subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
    }, [
        currentLogsConfig.datasource,
        fetchDatabases
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentLogsConfig.database) {
            return;
        }
        const subscription = fetchTables(currentLogsConfig.database);
        return ()=>subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
    }, [
        currentLogsConfig.database,
        fetchTables
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: onSubmit
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldSet, {
        label: "API Settings"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "API Key",
        description: "A secret key for authenticating to our custom API"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SecretInput, {
        width: 60,
        id: "config-api-key",
        "data-testid": _testIds__WEBPACK_IMPORTED_MODULE_8__/* .testIds */ .b.appConfig.apiKey,
        name: "apiKey",
        value: state.apiKey,
        isConfigured: state.isApiKeySet,
        placeholder: 'Your secret API key',
        onChange: onChange,
        onReset: onResetApiKey
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "API Url",
        description: "",
        className: s.marginTop
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {
        width: 60,
        name: "apiUrl",
        id: "config-api-url",
        "data-testid": _testIds__WEBPACK_IMPORTED_MODULE_8__/* .testIds */ .b.appConfig.apiUrl,
        value: state.apiUrl,
        placeholder: `E.g.: http://mywebsite.com/api/v1`,
        onChange: onChange
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: s.marginTop
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: "submit",
        "data-testid": _testIds__WEBPACK_IMPORTED_MODULE_8__/* .testIds */ .b.appConfig.submit,
        disabled: isSubmitDisabled
    }, "Save API settings")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        className: s.marginTop,
        onSubmit: submitLogConfig
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldSet, {
        label: "Logs"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "Datasource"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
        width: 20,
        type: 'mysql',
        current: currentLogsConfig.datasource,
        placeholder: "Choose",
        noDefault: true,
        filter: (ds)=>ds.type === 'mysql',
        onChange: (item)=>{
            setCurrentLogsConfig(_object_spread_props(_object_spread({}, currentLogsConfig), {
                datasource: item
            }));
            // Always fetch databases even if the same datasource is selected
            fetchDatabases(item);
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "Database"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
        width: 60,
        options: databases,
        value: currentLogsConfig.database,
        onChange: (selectedDatabase)=>{
            setCurrentLogsConfig(_object_spread_props(_object_spread({}, currentLogsConfig), {
                database: selectedDatabase.value
            }));
            fetchTables(selectedDatabase.value);
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "Logs Table"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
        options: tables,
        width: 60,
        value: currentLogsConfig.logsTable,
        onChange: (selectedTable)=>{
            setCurrentLogsConfig(_object_spread_props(_object_spread({}, currentLogsConfig), {
                logsTable: selectedTable.value
            }));
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "Trace Table"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
        options: tables,
        width: 60,
        value: currentLogsConfig.targetTraceTable,
        onChange: (selectedTable)=>{
            setCurrentLogsConfig(_object_spread_props(_object_spread({}, currentLogsConfig), {
                targetTraceTable: selectedTable.value
            }));
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: s.marginTop
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: "submit"
    }, "Save Logs settings")))));
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
        const response = yield (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().fetch({
            url: `/api/plugins/${pluginId}/settings`,
            method: 'POST',
            data
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(response);
    })();


/***/ })

}]);
//# sourceMappingURL=273.js.map?_cache=e9f92c7627444f872189