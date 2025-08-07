"use strict";
(self["webpackChunkselectdb_discover_app"] = self["webpackChunkselectdb_discover_app"] || []).push([[911],{

/***/ 1885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TraceDetail)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8531);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2007);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_discover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7626);
/* harmony import */ var _store_discover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6247);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6700);
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








function TraceDetail(props) {
    const currentTable = (0,jotai__WEBPACK_IMPORTED_MODULE_7__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_5__/* .currentTableAtom */ .$w);
    const currentCatalog = (0,jotai__WEBPACK_IMPORTED_MODULE_7__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_5__/* .currentCatalogAtom */ .K0);
    const currentDatabase = (0,jotai__WEBPACK_IMPORTED_MODULE_7__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_5__/* .currentDatabaseAtom */ .Cf);
    const [traceData, setTraceData] = (0,jotai__WEBPACK_IMPORTED_MODULE_7__/* .useAtom */ .fp)(_store_discover__WEBPACK_IMPORTED_MODULE_5__/* .tableTracesDataAtom */ .UB);
    const selectedRow = (0,jotai__WEBPACK_IMPORTED_MODULE_7__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_5__/* .selectedRowAtom */ .nn);
    const selectdbDS = (0,jotai__WEBPACK_IMPORTED_MODULE_7__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_5__/* .selectedDatasourceAtom */ .SW);
    const { open, traceId } = props;
    const getTraceData = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(()=>{
        let payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: currentTable || 'otel_traces',
            cluster: '',
            sort: 'DESC',
            trace_id: traceId || ''
        };
        (0,_services_discover__WEBPACK_IMPORTED_MODULE_4__/* .getTableDataTraceService */ .hA)(_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    const formatedData = (0,_utils_data__WEBPACK_IMPORTED_MODULE_6__/* .formatTracesResData */ .O1)(data);
                    setTraceData(formatedData);
                }
            },
            error: (err)=>{
                console.log('查询错误', err);
            }
        });
    }, [
        currentCatalog,
        currentDatabase,
        currentTable,
        selectdbDS,
        setTraceData,
        traceId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (traceId) {
            getTraceData();
        }
    }, [
        selectedRow.trace_id,
        currentCatalog,
        currentDatabase,
        selectdbDS,
        setTraceData,
        getTraceData,
        traceId
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, open && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
        title: "Trace Panel",
        onClose: ()=>{
            var _props_onClose;
            props === null || props === void 0 ? void 0 : (_props_onClose = props.onClose) === null || _props_onClose === void 0 ? void 0 : _props_onClose.call(props);
        },
        size: "lg"
    }, traceData ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.PanelRenderer, {
        title: "test",
        width: 200,
        height: 300,
        pluginId: "traces",
        options: {},
        data: {
            state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
            series: [
                traceData
            ],
            timeRange: {
                from: new Date(Date.now() - 15 * 60 * 1000),
                to: new Date(),
                raw: {
                    from: 'now-15m',
                    to: 'now'
                }
            }
        }
    }) : null));
}


/***/ }),

/***/ 2351:
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
// EXTERNAL MODULE: ../node_modules/lodash-es/groupBy.js + 4 modules
var groupBy = __webpack_require__(35);
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

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App_App)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(1159);
// EXTERNAL MODULE: ./constants.ts + 1 modules
var constants = __webpack_require__(2351);
// EXTERNAL MODULE: ../node_modules/lucide-react/dist/esm/icons/circle-help.js + 4 modules
var circle_help = __webpack_require__(3010);
// EXTERNAL MODULE: external "@grafana/ui"
var ui_ = __webpack_require__(2007);
// EXTERNAL MODULE: ../node_modules/jotai/esm/react.mjs
var react = __webpack_require__(3689);
// EXTERNAL MODULE: ../node_modules/jotai/esm/vanilla.mjs
var vanilla = __webpack_require__(4945);
;// ./store/traces.ts


const currentServiceAtom = (0,vanilla/* atom */.eU)(constants/* DEFAULT_SERVICE */.aR);
const currentOperationAtom = (0,vanilla/* atom */.eU)(constants/* DEFAULT_OPERATION */.UB);
const currentSortAtom = (0,vanilla/* atom */.eU)('most-recent');
const tagsAtom = (0,vanilla/* atom */.eU)('');
const tracesAtom = (0,vanilla/* atom */.eU)([]);
const tracesServicesAtom = (0,vanilla/* atom */.eU)([]);
const traceOperationsAtom = (0,vanilla/* atom */.eU)([]);
const minDurationAtom = (0,vanilla/* atom */.eU)('');
const maxDurationAtom = (0,vanilla/* atom */.eU)('');

// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(6089);
// EXTERNAL MODULE: ./store/discover.ts
var discover = __webpack_require__(6247);
;// ./components/traces/search-sidebar/index.tsx
'use client';







function SearchSidebar(props) {
    const tracesServices = (0,react/* useAtomValue */.md)(tracesServicesAtom);
    const traceOperations = (0,react/* useAtomValue */.md)(traceOperationsAtom);
    const [currentService, setCurrentService] = (0,react/* useAtom */.fp)(currentServiceAtom);
    const [currentOperation, setCurrentOperation] = (0,react/* useAtom */.fp)(currentOperationAtom);
    const [tags, setTags] = (0,react/* useAtom */.fp)(tagsAtom);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [minDuration, setMinDuration] = (0,react/* useAtom */.fp)(minDurationAtom);
    const [maxDuration, setMaxDuration] = (0,react/* useAtom */.fp)(maxDurationAtom);
    (0,external_react_.useEffect)(()=>{
        setCurrentService({
            value: 'all',
            label: 'ALL'
        });
    }, [
        currentTimeField,
        setCurrentService
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: "space-y-6"
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "space-y-4"
    }, /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Service",
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        width: 15,
        options: tracesServices,
        value: currentService,
        onChange: (selectedService)=>{
            // Handle service change
            setCurrentService(selectedService);
            setCurrentOperation({
                value: 'all',
                label: 'ALL'
            });
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Operation",
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        width: 15,
        options: traceOperations,
        value: currentOperation,
        onChange: (selectedOperation)=>{
            setCurrentOperation(selectedOperation);
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: /*#__PURE__*/ external_react_default().createElement("span", {
            className: (0,css_.css)`
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                `
        }, "Tags", /*#__PURE__*/ external_react_default().createElement(circle_help/* default */.A, {
            className: (0,css_.css)`
                                        margin-left: 4px;
                                    `
        })),
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, {
        id: "tags",
        placeholder: "http.status_code=200 error=true",
        className: "mt-1",
        value: tags,
        onChange: (e)=>{
            var _e_target, _e_target1;
            console.log((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);
            setTags((_e_target1 = e.target) === null || _e_target1 === void 0 ? void 0 : _e_target1.value);
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Min Duration",
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, {
        id: "min-duration",
        placeholder: "e.g. 1.2s, 100ms, 500us",
        className: "mt-1",
        value: minDuration,
        onChange: (e)=>{
            var _e_target, _e_target1, _props_onMinDurationChange;
            setMinDuration((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);
            props === null || props === void 0 ? void 0 : (_props_onMinDurationChange = props.onMinDurationChange) === null || _props_onMinDurationChange === void 0 ? void 0 : _props_onMinDurationChange.call(props, (_e_target1 = e.target) === null || _e_target1 === void 0 ? void 0 : _e_target1.value);
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Max Duration",
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, {
        id: "max-duration",
        placeholder: "e.g. 1.2s, 100ms, 500us",
        className: "mt-1",
        value: maxDuration,
        onChange: (e)=>{
            var _e_target, _e_target1, _props_onMaxDurationChange;
            setMaxDuration((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);
            props === null || props === void 0 ? void 0 : (_props_onMaxDurationChange = props.onMaxDurationChange) === null || _props_onMaxDurationChange === void 0 ? void 0 : _props_onMaxDurationChange.call(props, (_e_target1 = e.target) === null || _e_target1 === void 0 ? void 0 : _e_target1.value);
        }
    })))), /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        onClick: ()=>{
            var _props_onQuerying;
            props === null || props === void 0 ? void 0 : (_props_onQuerying = props.onQuerying) === null || _props_onQuerying === void 0 ? void 0 : _props_onQuerying.call(props);
        },
        style: {
            marginLeft: 8
        }
    }, "Find Traces")));
}

;// ./components/traces/traces-viewer/trace-item.tsx



const TraceItem = ({ trace, onClick })=>{
    const theme = (0,ui_.useTheme2)();
    return /*#__PURE__*/ external_react_default().createElement("div", {
        onClick: onClick,
        className: (0,css_.css)`
                display: flex;
                align-items: center;
                background: ${theme.colors.background.primary};
                border: 1px solid ${theme.colors.border.weak};
                border-radius: ${theme.shape.borderRadius()};
                padding: ${theme.spacing(1.5)};
                position: relative;
                overflow: hidden;
                box-shadow: ${theme.shadows.z1};
            `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: ${trace.progress}%;
                    background: ${theme.colors.primary.main};
                    opacity: 0.1;
                `
    }), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    flex: 1;
                    display: grid;
                    gap: ${theme.spacing(0.5)};
                    z-index: 10;
                `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        display: flex;
                        justify-content: space-between;
                        font-weight: ${theme.typography.fontWeightMedium};
                        color: ${theme.colors.text.primary};
                    `
    }, /*#__PURE__*/ external_react_default().createElement("span", null, trace.root_service, ":", trace.operation, ' ', /*#__PURE__*/ external_react_default().createElement("span", {
        className: (0,css_.css)`
                                color: ${theme.colors.text.secondary};
                            `
    }, trace.trace_id)), /*#__PURE__*/ external_react_default().createElement("span", null, trace.trace_duration_ms, " ms")), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        display: flex;
                        justify-content: space-between;
                        font-size: ${theme.typography.size.sm};
                        color: ${theme.colors.text.secondary};
                    `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            display: flex;
                            align-items: center;
                            gap: ${theme.spacing(1)};
                        `
    }, /*#__PURE__*/ external_react_default().createElement("span", null, trace.spans, " Spans"), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                                display: flex;
                                gap: ${theme.spacing(0.5)};
                            `
    }, JSON.parse(trace.services).map((service, index)=>/*#__PURE__*/ external_react_default().createElement("span", {
            key: index,
            className: (0,css_.css)`
                                        padding: 2px 6px;
                                        border-radius: 9999px;
                                        font-size: ${theme.typography.size.xs};
                                        color: ${theme.colors.text.secondary};
                                    `
        }, service)))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            text-align: right;
                        `
    }, /*#__PURE__*/ external_react_default().createElement("div", null, trace.time), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                                font-size: ${theme.typography.size.xs};
                                color: ${theme.colors.text.disabled};
                            `
    }, trace.timeAgo)))));
};

// EXTERNAL MODULE: ../node_modules/echarts-for-react/esm/index.js + 557 modules
var esm = __webpack_require__(1244);
// EXTERNAL MODULE: ./components/trace-detail/index.tsx
var trace_detail = __webpack_require__(1885);
;// ./components/traces/traces-viewer/index.tsx









const TraceView = (props)=>{
    var _props_traces_;
    const theme = (0,ui_.useTheme2)();
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const pageSize = (0,react/* useAtomValue */.md)(discover/* pageSizeAtom */.Ol);
    const total = ((_props_traces_ = props.traces[0]) === null || _props_traces_ === void 0 ? void 0 : _props_traces_.total) || 0;
    const traces = props.traces || [];
    const [sort, setSort] = (0,react/* useAtom */.fp)(currentSortAtom);
    const [drawerOpen, setDrawerOpen] = external_react_default().useState(false);
    const [traceId, setTraceId] = external_react_default().useState('');
    const getOption = ()=>{
        return {
            tooltip: {
                trigger: 'item',
                padding: 0,
                borderWidth: 0,
                backgroundColor: theme.isLight ? '#ffffff' : 'rgba(63, 63, 69, 0.64)',
                onClick: (params)=>{
                    setTraceId(params.data.trace_id);
                    setDrawerOpen(true);
                },
                formatter: function(params) {
                    const html = `<div
                                       style="
                                          padding: 8px;
                                          min-width: 120px;
                                          border-radius: 6px;
                                          backdrop-filter: blur(12px);
                                          color: ${theme.isLight ? '#1F1F26' : '#EFEFF0'};
                                        ">
                                      <div style="padding-bottom: 4px; border-bottom: 1px solid ${theme.isLight ? '#DFDFE0' : '#3F3F45'};">${[
                        params.name
                    ]}</div>
                                      <div style="padding-top:4px;display: flex;justify-content: space-between;"><span>Durations：</span><span style="font-family:DIN Alternate;font-size:14;font-weight:500;">${[
                        `${params.value} ms` || 'No Data'
                    ]}</span></div>
                                      <div style="padding-top:4px;display: flex;justify-content: space-between;"><span>Spans：</span><span style="font-family:DIN Alternate;font-size:14;font-weight:500;">${[
                        params.data.spans || 'No Data'
                    ]}</span></div>
                                  </div>`;
                    return html;
                }
            },
            xAxis: {
                type: 'category',
                name: 'Time',
                data: traces.map((s)=>s.time),
                axisLabel: {
                    color: theme.colors.text.primary
                },
                axisLine: {
                    lineStyle: {
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'Duration (ms)',
                axisLabel: {
                    color: theme.colors.text.primary
                },
                axisLine: {
                    lineStyle: {
                        color: theme.colors.text.secondary
                    }
                }
            },
            series: [
                {
                    symbolSize: (value, params)=>{
                        // 使用 spans 数量决定点的大小，设一个基本缩放，例如：
                        const trace = traces[params.dataIndex];
                        return Math.max(12, Math.min(30, trace.spans || 1)); // 控制在6~30之间
                    },
                    data: traces.map((s)=>{
                        return {
                            name: `${s.root_service}:${s.operation}`,
                            spans: s.spans,
                            value: s.trace_duration_ms,
                            trace_id: s.trace_id
                        };
                    }),
                    type: 'scatter'
                }
            ]
        };
    };
    const onEvents = {
        click: (params)=>{
            setTraceId(params.data.trace_id);
            setDrawerOpen(true);
        }
    };
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                display: flex;
                flex-direction: column;
                gap: 16px;
                background: ${theme.colors.background.primary};
                color: ${theme.colors.text.primary};
            `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    margin-top: -20px;
                    height: 300px;
                `
    }, /*#__PURE__*/ external_react_default().createElement(esm/* default */.A, {
        option: getOption(),
        notMerge: true,
        lazyUpdate: true,
        style: {
            height: '100%'
        },
        onEvents: onEvents
    })), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        display: flex;
                        gap: 8px;
                        align-items: center;
                    `
    }, /*#__PURE__*/ external_react_default().createElement("span", null, "Sort:"), /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        options: [
            {
                label: 'Most Recent',
                value: 'most-recent'
            },
            {
                label: 'Longest Duration',
                value: 'longest-duration'
            },
            {
                label: 'Shortest Duration',
                value: 'shortest-duration'
            },
            {
                label: 'Most Spans',
                value: 'most-spans'
            },
            {
                label: 'Least Spans',
                value: 'least-spans'
            }
        ],
        value: sort,
        onChange: (option)=>{
            setPage(1);
            setSort(option.value);
            props === null || props === void 0 ? void 0 : props.onSortByChange(option.value);
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 20px;
                `
    }, /*#__PURE__*/ external_react_default().createElement("h3", {
        className: (0,css_.css)`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 8px;
                    `
    }, /*#__PURE__*/ external_react_default().createElement("div", null, traces.length, " Traces, "), /*#__PURE__*/ external_react_default().createElement("div", null, "Total ", total)), /*#__PURE__*/ external_react_default().createElement(ui_.Pagination, {
        currentPage: page,
        numberOfPages: Math.floor(total / pageSize) || 1,
        onNavigate: (toPage)=>{
            setPage(toPage);
        }
    })), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                `
    }, traces.map((trace)=>/*#__PURE__*/ external_react_default().createElement(TraceItem, {
            key: trace.id,
            trace: trace,
            onClick: ()=>{
                setTraceId(trace.trace_id);
                setDrawerOpen(true);
            }
        }))), /*#__PURE__*/ external_react_default().createElement(trace_detail/* default */.A, {
        onClose: ()=>setDrawerOpen(false),
        open: drawerOpen,
        traceId: traceId
    }));
};

// EXTERNAL MODULE: ../node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(5285);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 8 modules
var emotion_styled_browser_esm = __webpack_require__(2742);
;// ./components/traces/traces-header/discover-header.style.ts


const DiscoverHeaderSearch = emotion_styled_browser_esm/* default */.A.div`
    flex: 2;
    display: flex;
    border-radius: 6px;
    align-items: center;
    margin-right: 8px;
    .ant-select-open {
        .ant-select-arrow {
            .anticon {
                transform: rotate(-180deg);
            }
        }
    }
    .select-database {
        width: 160px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .ant-select-single {
        height: 30px;
    }
`;
const DiscoverHeaderTimeSelect = emotion_styled_browser_esm/* default */.A.div`
    flex: 1;
    display: flex;
    border-radius: 6px;
    align-items: center;
    margin-right: 8px;

    div.trp-time-label {
        border: 0px;
    }
`;
const CascaderStyle = (0,css_.css)`
    width: 184px;
    .ant-select-selector {
        padding: 0 16px 0 40px !important;
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
        margin-top: 2px;
    }
    .ant-select-selector>.ant-select-selection-search>.ant-select-selection-search-input {
        margin-left: 1.8rem;
    }
`;

// EXTERNAL MODULE: external "@grafana/runtime"
var runtime_ = __webpack_require__(8531);
// EXTERNAL MODULE: ./utils/data.ts
var utils_data = __webpack_require__(6700);
// EXTERNAL MODULE: ./services/metaservice.ts
var metaservice = __webpack_require__(8161);
;// ./components/traces/traces-header/index.tsx
'use client';
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











function TracesHeader() {
    const catalog = 'internal';
    // const catalogs = useAtomValue(catalogAtom);
    const setIndexes = (0,react/* useSetAtom */.Xr)(discover/* indexesAtom */.Eq);
    const [discoverCurrent, setDiscoverCurrent] = (0,react/* useAtom */.fp)(discover/* discoverCurrentAtom */.WN);
    if (false) // removed by dead control flow
{}
    const [loc, setLoc] = (0,react/* useAtom */.fp)(discover/* locationAtom */.JT);
    const [currentCluster, setCurrentCluster] = (0,react/* useAtom */.fp)(discover/* currentClusterAtom */.bP);
    const setTableFields = (0,react/* useSetAtom */.Xr)(discover/* tableFieldsAtom */.D_);
    const [timeFields, setTimeFields] = (0,react/* useAtom */.fp)(discover/* timeFieldsAtom */.Gg);
    const [currentDate, setCurrentDate] = (0,react/* useAtom */.fp)(discover/* currentDateAtom */.Zb);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [currentIndex, setCurrentIndex] = (0,react/* useAtom */.fp)(discover/* currentIndexAtom */.TY);
    const searchFocus = (0,react/* useAtomValue */.md)(discover/* searchFocusAtom */.MM);
    const [selectedDatasource, setSelectedDatasource] = (0,react/* useAtom */.fp)(discover/* selectedDatasourceAtom */.SW);
    const [timeRange, setTimeRange] = (0,react/* useAtom */.fp)(discover/* timeRangeAtom */.U9);
    const [currentTable, setCurrentTable] = (0,react/* useAtom */.fp)(discover/* currentTableAtom */.$w);
    const [databases, setDatabases] = (0,react/* useAtom */.fp)(discover/* databasesAtom */.SK);
    const [tables, setTables] = (0,react/* useAtom */.fp)(discover/* tablesAtom */.b9);
    const [datasources, setDataSource] = (0,react/* useAtom */.fp)(discover/* datasourcesAtom */.ui);
    const setDisabledOptions = (0,react/* useSetAtom */.Xr)(discover/* disabledOptionsAtom */.IH);
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    (0,external_react_.useEffect)(()=>{
        const datasources = (0,runtime_.getDataSourceSrv)().getList();
        setDataSource(datasources);
    }, [
        setDataSource
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentIndex.length > 0) {
            setDisabledOptions([]);
        } else {
            setDisabledOptions([
                'Search'
            ]);
        }
    }, [
        currentIndex,
        setDisabledOptions
    ]);
    const theme = (0,ui_.useTheme2)();
    (0,external_react_.useEffect)(()=>{
        if (selectdbDS) {
            const res = (0,metaservice/* getDatabases */.Hm)(selectdbDS);
            res.subscribe({
                next: ({ data, ok })=>{
                    if (ok) {
                        var _data_results__data, _data_results_;
                        const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                        if (value) {
                            const options = value.map((item)=>{
                                return {
                                    label: item,
                                    value: item
                                };
                            });
                            setDatabases(options);
                        }
                    }
                },
                error: (err)=>{
                    console.log('查询错误', err);
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectdbDS
    ]);
    // useEffect(() => {
    //     if (startTime && endTime) {
    //         setCurrentDate([dayjs(startTime), dayjs(endTime)]);
    //     }
    // }, [startTime, endTime, setCurrentDate]);
    function getFields(selectedTable) {
        (0,metaservice/* getFieldsService */.H1)({
            selectdbDS,
            database: discoverCurrent.database,
            table: selectedTable.value
        }).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    var _data_results__data, _data_results_, _data_results__data1, _data_results_1, _data_results__data2, _data_results_2;
                    const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                    const fieldTypes = data === null || data === void 0 ? void 0 : (_data_results_1 = data.results[0]) === null || _data_results_1 === void 0 ? void 0 : (_data_results__data1 = _data_results_1.data) === null || _data_results__data1 === void 0 ? void 0 : _data_results__data1.values[1];
                    const tableFields = data === null || data === void 0 ? void 0 : (_data_results_2 = data.results[0]) === null || _data_results_2 === void 0 ? void 0 : (_data_results__data2 = _data_results_2.data) === null || _data_results__data2 === void 0 ? void 0 : _data_results__data2.values[0].map((item, index)=>{
                        return {
                            label: item,
                            Field: item,
                            value: item,
                            Type: fieldTypes[index]
                        };
                    });
                    setTableFields(tableFields);
                    if (value) {
                        var _options_;
                        const options = value.filter((field, index)=>{
                            return (0,utils_data/* isValidTimeFieldType */.Q3)(fieldTypes[index].toUpperCase());
                        }).map((item)=>{
                            return {
                                label: item,
                                value: item
                            };
                        });
                        setDiscoverCurrent(_object_spread_props(_object_spread({}, discoverCurrent), {
                            timeField: ((_options_ = options[0]) === null || _options_ === void 0 ? void 0 : _options_.value) || ''
                        }));
                        setTimeFields(options);
                    }
                }
            },
            error: (err)=>{
                console.log('查询错误', err);
            }
        });
    }
    function getIndexes(selectedTable) {
        (0,metaservice/* getIndexesService */.s1)({
            selectdbDS,
            database: discoverCurrent.database,
            table: selectedTable.value
        }).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    var _data_results__data, _data_results_, _data_results__data1, _data_results_1, _data_results__data2, _data_results_2;
                    const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[2];
                    const columnNames = data === null || data === void 0 ? void 0 : (_data_results_1 = data.results[0]) === null || _data_results_1 === void 0 ? void 0 : (_data_results__data1 = _data_results_1.data) === null || _data_results__data1 === void 0 ? void 0 : _data_results__data1.values[4];
                    const indexesTypes = data === null || data === void 0 ? void 0 : (_data_results_2 = data.results[0]) === null || _data_results_2 === void 0 ? void 0 : (_data_results__data2 = _data_results_2.data) === null || _data_results__data2 === void 0 ? void 0 : _data_results__data2.values[10];
                    if (!value || value.length === 0) {
                        setIndexes([]);
                        setCurrentIndex([]);
                        return;
                    }
                    const tableIndexes = value === null || value === void 0 ? void 0 : value.map((item, index)=>{
                        return {
                            label: item,
                            value: item,
                            type: indexesTypes[index],
                            columnName: columnNames[index]
                        };
                    });
                    setIndexes(tableIndexes);
                    if (tableIndexes) {
                        setCurrentIndex(tableIndexes);
                    }
                }
            },
            error: (err)=>{
                console.log('查询错误', err);
            }
        });
    }
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                padding: 1rem;
                padding-top: 1.5rem;
                background-color: ${theme.isDark ? 'rgb(24, 27, 31)' : '#FFF'};
                display: flex;
                border-radius: 0.25rem 0.25rem 0 0;
                border-bottom: 1px solid ${theme.colors.border.medium};
            `
    }, /*#__PURE__*/ external_react_default().createElement(DiscoverHeaderSearch, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Datasource"
    }, /*#__PURE__*/ external_react_default().createElement(runtime_.DataSourcePicker, {
        width: 20,
        type: 'mysql',
        current: selectedDatasource,
        placeholder: "Choose",
        noDefault: true,
        filter: (ds)=>ds.type === 'mysql',
        onChange: (item)=>{
            console.log('item', item);
            setSelectedDatasource(item);
        }
    })), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Database",
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        width: 15,
        options: databases,
        value: discoverCurrent.database,
        onChange: (selectedDatabase)=>{
            setDiscoverCurrent(_object_spread_props(_object_spread({}, discoverCurrent), {
                database: selectedDatabase.value
            }));
            (0,metaservice/* getTables */.oI)({
                selectdbDS,
                database: selectedDatabase.value
            }).subscribe({
                next: ({ data, ok })=>{
                    if (ok) {
                        var _data_results__data, _data_results_;
                        const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                        if (value) {
                            const options = value.map((item)=>{
                                return {
                                    label: item,
                                    value: item
                                };
                            });
                            setTables(options);
                        }
                    }
                },
                error: (err)=>{
                    console.log('查询错误', err);
                }
            });
        }
    })), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Table",
        style: {
            marginLeft: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        options: tables,
        width: 15,
        value: currentTable,
        onChange: (selectedTable)=>{
            setDiscoverCurrent(_object_spread_props(_object_spread({}, discoverCurrent), {
                table: selectedTable.value
            }));
            setCurrentTable(selectedTable.value);
            getFields(selectedTable);
            getIndexes(selectedTable);
        }
    }))), !searchFocus && /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "时间字段"
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        value: currentTimeField,
        options: timeFields,
        onChange: (selectdbTimeFiled)=>{
            setDiscoverCurrent(_object_spread_props(_object_spread({}, discoverCurrent), {
                timeField: selectdbTimeFiled.value
            }));
            setLoc((prev)=>{
                const searchParams = prev.searchParams;
                searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('timeField', selectdbTimeFiled.value);
                return _object_spread_props(_object_spread({}, prev), {
                    searchParams
                });
            });
        },
        placeholder: '时间字段'
    })), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "时间范围",
        style: {
            marginLeft: 8,
            marginRight: 8
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.TimeRangeInput, {
        isReversed: false,
        onChange: (timeRange)=>{
            const start = dayjs_min_default()(timeRange.from.toDate());
            const end = dayjs_min_default()(timeRange.to.toDate());
            setLoc((prev)=>{
                const searchParams = prev.searchParams;
                searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('startTime', start.format(constants/* FORMAT_DATE */.fU));
                searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('endTime', end.format(constants/* FORMAT_DATE */.fU));
                return _object_spread_props(_object_spread({}, prev), {
                    searchParams
                });
            });
            setCurrentDate([
                start,
                end
            ]);
            setTimeRange(timeRange);
        },
        value: timeRange
    }))));
}

// EXTERNAL MODULE: ./services/discover.ts
var services_discover = __webpack_require__(7626);
;// ./pages/PageTrace.tsx
function PageTrace_define_property(obj, key, value) {
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
function PageTrace_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            PageTrace_define_property(target, key, source[key]);
        });
    }
    return target;
}
function PageTrace_ownKeys(object, enumerableOnly) {
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
function PageTrace_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        PageTrace_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}












function PageDashboard() {
    const theme = (0,ui_.useTheme2)();
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const currentTable = (0,react/* useAtomValue */.md)(discover/* currentTableAtom */.$w);
    const currentCatalog = (0,react/* useAtomValue */.md)(discover/* currentCatalogAtom */.K0);
    const currentDatabase = (0,react/* useAtomValue */.md)(discover/* currentDatabaseAtom */.Cf);
    const currentDate = (0,react/* useAtomValue */.md)(discover/* currentDateAtom */.Zb);
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const pageSize = (0,react/* useAtomValue */.md)(discover/* pageSizeAtom */.Ol);
    const [traces, setTraces] = (0,react/* useAtom */.fp)(tracesAtom);
    const setTracesServices = (0,react/* useSetAtom */.Xr)(tracesServicesAtom);
    const setTraceOperations = (0,react/* useSetAtom */.Xr)(traceOperationsAtom);
    const [loading, setLoading] = external_react_default().useState(false);
    const currentService = (0,react/* useAtomValue */.md)(currentServiceAtom);
    const currentOperation = (0,react/* useAtomValue */.md)(currentOperationAtom);
    const tags = (0,react/* useAtomValue */.md)(tagsAtom);
    const minDuration = (0,react/* useAtomValue */.md)(minDurationAtom);
    const maxDuration = (0,react/* useAtomValue */.md)(maxDurationAtom);
    const sort = (0,react/* useAtomValue */.md)(currentSortAtom);
    const getTraces = external_react_default().useCallback(()=>{
        var _currentDate_;
        setLoading(true);
        const payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            cluster: '',
            page: page,
            page_size: pageSize,
            service_name: currentService.value,
            operation: currentOperation.value,
            sort_by: sort
        };
        if (minDuration) {
            console.log('minDuration', minDuration);
            payload.minDuration = minDuration;
        }
        if (maxDuration) {
            console.log('maxDuration', maxDuration);
            payload.maxDuration = maxDuration;
        }
        if (tags && tags.length > 0) {
            payload.tags = tags;
        }
        (0,services_discover/* getTracesService */.Cy)(PageTrace_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    const rowsData = (0,utils_data/* convertColumnToRow */.HL)(data);
                    // console.log('查询结果', rowsData);
                    const formateData = rowsData.map((item)=>{
                        var _item_trace_duration_ms;
                        return PageTrace_object_spread_props(PageTrace_object_spread({}, item), {
                            trace_duration_ms: ((_item_trace_duration_ms = item.trace_duration_ms) === null || _item_trace_duration_ms === void 0 ? void 0 : _item_trace_duration_ms.toFixed(2)) || 0
                        });
                    });
                    setTraces(formateData);
                }
            },
            error: (err)=>{
                setLoading(false);
                console.log('查询错误', err);
            }
        });
    }, [
        currentCatalog,
        currentDatabase,
        currentTable,
        currentTimeField,
        currentDate,
        page,
        pageSize,
        currentService.value,
        currentOperation.value,
        sort,
        minDuration,
        maxDuration,
        tags,
        selectdbDS,
        setTraces
    ]);
    const getTracesServices = external_react_default().useCallback(()=>{
        var _currentDate_;
        let payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            cluster: ''
        };
        (0,services_discover/* getTracesServicesService */.Cq)(PageTrace_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    if (ok) {
                        var _data_results__data, _data_results_;
                        const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                        if (value) {
                            const options = value.map((item)=>{
                                return {
                                    label: item,
                                    value: item
                                };
                            });
                            setTracesServices([
                                constants/* DEFAULT_SERVICE */.aR,
                                ...options
                            ]);
                        }
                    }
                }
            },
            error: (err)=>{
                setLoading(false);
                console.log('查询错误', err);
            }
        });
    }, [
        currentCatalog,
        currentDatabase,
        currentDate,
        currentTable,
        currentTimeField,
        selectdbDS,
        setTracesServices
    ]);
    const getTracesOperations = external_react_default().useCallback(()=>{
        var _currentDate_;
        let payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            serviceName: currentService.value,
            cluster: ''
        };
        (0,services_discover/* getTraceOperationsService */.H7)(PageTrace_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    if (ok) {
                        var _data_results__data, _data_results_;
                        const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                        if (value) {
                            const options = value.map((item)=>{
                                return {
                                    label: item,
                                    value: item
                                };
                            });
                            setTraceOperations([
                                constants/* DEFAULT_OPERATION */.UB,
                                ...options
                            ]);
                        } else {
                            setTraceOperations([
                                constants/* DEFAULT_OPERATION */.UB
                            ]);
                        }
                    }
                }
            },
            error: (err)=>{
                setLoading(false);
                console.log('查询错误', err);
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentCatalog,
        currentDatabase,
        currentDate,
        currentService,
        currentTable,
        currentTimeField,
        selectdbDS,
        setTraceOperations
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentTimeField && currentTable && currentCatalog && currentDatabase && currentDate) {
            getTraces();
            getTracesServices();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        page,
        pageSize,
        currentTimeField,
        currentDate,
        sort
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentTimeField && currentService) {
            getTracesOperations();
        }
    }, [
        currentTimeField,
        currentService,
        getTracesOperations
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                height: 100%;
                width: 100%;
                overflow: hidden;
            `
    }, /*#__PURE__*/ external_react_default().createElement(TracesHeader, null), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    height: calc(100% - 103px);
                    width: 100%;
                    overflow: hidden;
                    background-color: ${theme.colors.background.primary};
                    color: ${theme.colors.text.primary};
                `
    }, /*#__PURE__*/ external_react_default().createElement("aside", {
        className: (0,css_.css)`
                        width: 320px;
                        flex-shrink: 0;
                        border-right: 1px solid ${theme.colors.border.medium};
                        padding: 16px;
                    `
    }, /*#__PURE__*/ external_react_default().createElement(SearchSidebar, {
        onQuerying: ()=>{
            setPage(1);
            getTraces();
        }
    })), /*#__PURE__*/ external_react_default().createElement("main", {
        className: (0,css_.css)`
                        flex: 1;
                        height: 100%;
                        padding: 24px;
                        overflow-y: auto;
                    `
    }, loading && /*#__PURE__*/ external_react_default().createElement(ui_.LoadingBar, {
        width: 100
    }), /*#__PURE__*/ external_react_default().createElement(TraceView, {
        traces: traces
    }))));
}

;// ./components/App/App.tsx



// import PageDashboard from 'pages/PageDashboard';

// import { ROUTES } from '../../constants';
const Discover = /*#__PURE__*/ external_react_default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(723), __webpack_require__.e(973)]).then(__webpack_require__.bind(__webpack_require__, 5973)));
// const PageTwo = React.lazy(() => import('../../pages/PageTwo'));
// const PageThree = React.lazy(() => import('../../pages/PageThree'));
// const PageFour = React.lazy(() => import('../../pages/PageFour'));
function App(props) {
    return /*#__PURE__*/ external_react_default().createElement(external_react_router_.Routes, null, /*#__PURE__*/ external_react_default().createElement(external_react_router_.Route, {
        path: constants/* ROUTES */.bw.Discover,
        element: /*#__PURE__*/ external_react_default().createElement(Discover, null)
    }), /*#__PURE__*/ external_react_default().createElement(external_react_router_.Route, {
        path: constants/* ROUTES */.bw.Traces,
        element: /*#__PURE__*/ external_react_default().createElement(PageDashboard, null)
    }), /*#__PURE__*/ external_react_default().createElement(external_react_router_.Route, {
        path: "*",
        element: /*#__PURE__*/ external_react_default().createElement(Discover, null)
    }));
}
/* harmony default export */ const App_App = (App);


/***/ }),

/***/ 6247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $w: () => (/* binding */ currentTableAtom),
/* harmony export */   CA: () => (/* binding */ currentTimeFieldAtom),
/* harmony export */   CL: () => (/* binding */ tableFieldValuesAtom),
/* harmony export */   Cf: () => (/* binding */ currentDatabaseAtom),
/* harmony export */   D_: () => (/* binding */ tableFieldsAtom),
/* harmony export */   EA: () => (/* binding */ dataFilterAtom),
/* harmony export */   Eq: () => (/* binding */ indexesAtom),
/* harmony export */   Gg: () => (/* binding */ timeFieldsAtom),
/* harmony export */   HC: () => (/* binding */ tableTotalCountAtom),
/* harmony export */   IH: () => (/* binding */ disabledOptionsAtom),
/* harmony export */   JT: () => (/* binding */ locationAtom),
/* harmony export */   K0: () => (/* binding */ currentCatalogAtom),
/* harmony export */   MM: () => (/* binding */ searchFocusAtom),
/* harmony export */   Mb: () => (/* binding */ searchableAtom),
/* harmony export */   NJ: () => (/* binding */ afterTimeFieldPageSizeAtom),
/* harmony export */   Ol: () => (/* binding */ pageSizeAtom),
/* harmony export */   P8: () => (/* binding */ searchValueAtom),
/* harmony export */   SK: () => (/* binding */ databasesAtom),
/* harmony export */   SW: () => (/* binding */ selectedDatasourceAtom),
/* harmony export */   TY: () => (/* binding */ currentIndexAtom),
/* harmony export */   U9: () => (/* binding */ timeRangeAtom),
/* harmony export */   UB: () => (/* binding */ tableTracesDataAtom),
/* harmony export */   UR: () => (/* binding */ aggregatableAtom),
/* harmony export */   WM: () => (/* binding */ searchTypeAtom),
/* harmony export */   WN: () => (/* binding */ discoverCurrentAtom),
/* harmony export */   Wg: () => (/* binding */ selectedFieldsAtom),
/* harmony export */   Zb: () => (/* binding */ currentDateAtom),
/* harmony export */   b9: () => (/* binding */ tablesAtom),
/* harmony export */   bP: () => (/* binding */ currentClusterAtom),
/* harmony export */   cn: () => (/* binding */ beforeCountAtom),
/* harmony export */   f5: () => (/* binding */ afterCountAtom),
/* harmony export */   fs: () => (/* binding */ pageAtom),
/* harmony export */   gj: () => (/* binding */ surroundingSelectedFieldsAtom),
/* harmony export */   jU: () => (/* binding */ discoverLoadingAtom),
/* harmony export */   l_: () => (/* binding */ topDataAtom),
/* harmony export */   le: () => (/* binding */ intervalAtom),
/* harmony export */   m5: () => (/* binding */ fieldTypeAtom),
/* harmony export */   m_: () => (/* binding */ activeShortcutAtom),
/* harmony export */   mj: () => (/* binding */ surroundingTableDataAtom),
/* harmony export */   nn: () => (/* binding */ selectedRowAtom),
/* harmony export */   pB: () => (/* binding */ tableDataChartsAtom),
/* harmony export */   pG: () => (/* binding */ selectedIndexesAtom),
/* harmony export */   ps: () => (/* binding */ afterTimeAtom),
/* harmony export */   q3: () => (/* binding */ tableDataAtom),
/* harmony export */   qX: () => (/* binding */ beforeTimeFieldPageSizeAtom),
/* harmony export */   ui: () => (/* binding */ datasourcesAtom),
/* harmony export */   uz: () => (/* binding */ beforeTimeAtom),
/* harmony export */   wc: () => (/* binding */ surroundingDataFilterAtom)
/* harmony export */ });
/* unused harmony exports dorisInfoAtom, tableEChartsDataAtom, surroundingTableFieldsAtom */
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4945);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6303);
/* harmony import */ var jotai_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7264);
/* harmony import */ var _types_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7944);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6700);


// import { focusAtom } from 'jotai-optics'



const locationAtom = (0,jotai_location__WEBPACK_IMPORTED_MODULE_2__/* .atomWithLocation */ .N)();
const dataFilterAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const discoverCurrentAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_utils_data__WEBPACK_IMPORTED_MODULE_1__/* .DISCOVER_DEFAULT_STATUS */ .lv);
// databases
const databasesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const tablesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const currentCatalogAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('internal');
const searchTypeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('SQL');
const currentDatabaseAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__/* .selectAtom */ .mg)(discoverCurrentAtom, (current)=>current.database);
const currentTableAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('');
const currentClusterAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('');
const currentTimeFieldAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__/* .selectAtom */ .mg)(discoverCurrentAtom, (current)=>current.timeField);
const currentDateAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_utils_data__WEBPACK_IMPORTED_MODULE_1__/* .DISCOVER_SHORTCUTS */ .oU[2].range());
const currentIndexAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const selectedIndexesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const searchValueAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('');
const searchFocusAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(false);
const activeShortcutAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_utils_data__WEBPACK_IMPORTED_MODULE_1__/* .DISCOVER_SHORTCUTS */ .oU[2]);
const dorisInfoAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)({});
const disabledOptionsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const selectedFieldsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const tableFieldsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const timeFieldsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const tableDataAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const topDataAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const surroundingTableDataAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const tableDataChartsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const intervalAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_types_type__WEBPACK_IMPORTED_MODULE_0__/* .IntervalEnum */ .B.Auto);
const tableTotalCountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(0);
const tableEChartsDataAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const tableTracesDataAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)();
// Filter Content Atom
const searchableAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_utils_data__WEBPACK_IMPORTED_MODULE_1__/* .SearchableEnum */ .Yp.ANY);
const aggregatableAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_utils_data__WEBPACK_IMPORTED_MODULE_1__/* .AggregatableEnum */ .SY.ANY);
const fieldTypeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(_utils_data__WEBPACK_IMPORTED_MODULE_1__/* .FieldTypeEnum */ .wI.ANY);
const indexesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const selectedRowAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)({});
const tableFieldValuesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const pageAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(1);
const pageSizeAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__/* .atomWithStorage */ .tG)('discover-pagination-size', 50);
// Surrounding Data Atoms
const surroundingDataFilterAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const beforeTimeFieldPageSizeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(5);
const afterTimeFieldPageSizeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(5);
const beforeTimeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('');
const afterTimeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('');
const beforeCountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(0);
const afterCountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)(0);
const surroundingTableFieldsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const surroundingSelectedFieldsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const datasourcesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const selectedDatasourceAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)();
const timeRangeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)({
    from: _utils_data__WEBPACK_IMPORTED_MODULE_1__/* .DISCOVER_SHORTCUTS */ .oU[2].range()[0].toDate(),
    to: _utils_data__WEBPACK_IMPORTED_MODULE_1__/* .DISCOVER_SHORTCUTS */ .oU[2].range()[1].toDate(),
    raw: _utils_data__WEBPACK_IMPORTED_MODULE_1__/* .DISCOVER_SHORTCUTS */ .oU[2].raw
});
const discoverLoadingAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)({
    getTableData: false,
    getTopData: false,
    getSurroundingData: false,
    getTableDataCharts: false,
    getTableFieldValues: false,
    getIndexes: false,
    getTimeFields: false,
    getTableFields: false
});


/***/ }),

/***/ 6700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: () => (/* binding */ SEARCHABLE),
/* harmony export */   F9: () => (/* binding */ generateHighlightedResults),
/* harmony export */   HL: () => (/* binding */ convertColumnToRow),
/* harmony export */   NG: () => (/* binding */ TIME_INTERVALS),
/* harmony export */   O1: () => (/* binding */ formatTracesResData),
/* harmony export */   Q3: () => (/* binding */ isValidTimeFieldType),
/* harmony export */   Re: () => (/* binding */ getFieldType),
/* harmony export */   SY: () => (/* binding */ AggregatableEnum),
/* harmony export */   WG: () => (/* binding */ encodeBase64),
/* harmony export */   Wd: () => (/* binding */ getChartsData),
/* harmony export */   Yp: () => (/* binding */ SearchableEnum),
/* harmony export */   cE: () => (/* binding */ getIndexesStatement),
/* harmony export */   hC: () => (/* binding */ getLatestTime),
/* harmony export */   hO: () => (/* binding */ AGGREGATABLE),
/* harmony export */   lv: () => (/* binding */ DISCOVER_DEFAULT_STATUS),
/* harmony export */   ml: () => (/* binding */ convertColumnToRowViaFieldsType),
/* harmony export */   oU: () => (/* binding */ DISCOVER_SHORTCUTS),
/* harmony export */   t9: () => (/* binding */ getFilterSQL),
/* harmony export */   tF: () => (/* binding */ isComplexType),
/* harmony export */   wI: () => (/* binding */ FieldTypeEnum),
/* harmony export */   we: () => (/* binding */ OPERATORS)
/* harmony export */ });
/* unused harmony exports SQL_OPERATORS, TIME_FIELD_TYPES, CAN_SEARCH_FIELD_TYPE, ENABLE_SEARCH_FIELD_TYPE, ParamsKeyEnum, addSqlFilter, SURROUNDING_LOGS_OPERATORS, PAGESIZE_OPTIONS, FIELD_TYPES, decodeBase64, formatDate, resetDate, getDateRange */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2351);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5285);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3819);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1163);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8880);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8987);
/* harmony import */ var _types_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7944);
/* harmony import */ var js_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4132);
/* harmony import */ var js_tokens__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_tokens__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_localeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(892);
/* harmony import */ var dayjs_plugin_localeData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localeData__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7781);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4486);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6__);









dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6___default()));
dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_localeData__WEBPACK_IMPORTED_MODULE_4___default()));
const OPERATORS = [
    '=',
    '!=',
    'in',
    'not in',
    'is null',
    'is not null',
    'like',
    'not like',
    'between',
    'not between',
    'match_any',
    'match_all',
    'match_phrase'
];
const SQL_OPERATORS = (/* unused pure expression or super */ null && ([
    '=',
    '!=',
    '>',
    '<',
    '>=',
    '<=',
    'LIKE',
    'IN',
    'AND',
    'OR',
    'BETWEEN'
]));
const TIME_FIELD_TYPES = [
    'DATETIME',
    'DATE',
    'DATETIMEV2',
    'DATAV2',
    'TIME'
];
function isValidTimeFieldType(fieldType) {
    // 提取基础字段类型（移除括号及其内容）
    const baseFieldType = fieldType.split('(')[0];
    return TIME_FIELD_TYPES.includes(baseFieldType);
}
const CAN_SEARCH_FIELD_TYPE = [
    'STRING',
    'ARRAY',
    'NUMBER',
    'VARIANT'
];
const ENABLE_SEARCH_FIELD_TYPE = (/* unused pure expression or super */ null && ([
    'DATETIME',
    'TIMESTAMP',
    'TIME'
]));
const getFieldType = (columnType)=>{
    if (!columnType) {
        return '';
    }
    const currentColumnType = FIELD_TYPES.find((item)=>item.value.some((val)=>columnType.toLocaleUpperCase().includes(val)));
    return currentColumnType === null || currentColumnType === void 0 ? void 0 : currentColumnType.key;
};
const DISCOVER_DEFAULT_STATUS = {
    catalog: 'internal',
    database: '',
    table: '',
    cluster: '',
    timeField: '',
    date: []
};
var SearchableEnum = /*#__PURE__*/ function(SearchableEnum) {
    SearchableEnum["ANY"] = "ANY";
    SearchableEnum["YES"] = "YES";
    SearchableEnum["NO"] = "NO";
    return SearchableEnum;
}({});
var AggregatableEnum = /*#__PURE__*/ function(AggregatableEnum) {
    AggregatableEnum["ANY"] = "ANY";
    AggregatableEnum["YES"] = "YES";
    AggregatableEnum["NO"] = "NO";
    return AggregatableEnum;
}({});
const SEARCHABLE = [
    {
        label: `Any`,
        value: "ANY"
    },
    {
        label: 'Yes',
        value: "YES"
    },
    {
        label: 'No',
        value: "NO"
    }
];
const AGGREGATABLE = [
    {
        label: `Any`,
        value: "ANY"
    },
    {
        label: 'Yes',
        value: "YES"
    },
    {
        label: 'No',
        value: "NO"
    }
];
var FieldTypeEnum = /*#__PURE__*/ function(FieldTypeEnum) {
    FieldTypeEnum["ANY"] = "ANY";
    FieldTypeEnum["STRING"] = "STRING";
    FieldTypeEnum["NUMBER"] = "NUMBER";
    FieldTypeEnum["DATE"] = "DATE";
    return FieldTypeEnum;
}({});
var ParamsKeyEnum = /*#__PURE__*/ function(ParamsKeyEnum) {
    ParamsKeyEnum["sqlCatalog"] = "sqlCatalog";
    ParamsKeyEnum["sqlDatabase"] = "sqlDatabase";
    ParamsKeyEnum["startDate"] = "startDateRange";
    ParamsKeyEnum["endDate"] = "endDateRange";
    ParamsKeyEnum["sqlSearch"] = "sqlSearch";
    ParamsKeyEnum["selectedTable"] = "selectedTable";
    ParamsKeyEnum["dateInterval"] = "dateInterval";
    ParamsKeyEnum["selectedField"] = "selectedField";
    ParamsKeyEnum["dataFilter"] = "dataFilter";
    ParamsKeyEnum["selectedTimeField"] = "selectedTimeField";
    ParamsKeyEnum["sortedField"] = "sortedField";
    ParamsKeyEnum["searchType"] = "searchType";
    ParamsKeyEnum["selectedIndex"] = "selectedIndex";
    ParamsKeyEnum["selectedCluster"] = "selectedCluster";
    return ParamsKeyEnum;
}({});
function getFilterSQL({ fieldName, operator, value }) {
    const valueString = value.map((e)=>{
        if (typeof e === 'string') {
            return `'${e}'`;
        } else {
            return e;
        }
    });
    if (operator === '=' || operator === '!=' || operator === 'like' || operator === 'not like' || operator === 'match_all' || operator === 'match_any' || operator === 'match_phrase') {
        return `\`${fieldName}\` ${operator} ${valueString[0]}`;
    }
    if (operator === 'is null' || operator === 'is not null') {
        return `\`${fieldName}\` ${operator}`;
    }
    if (operator === 'between' || operator === 'not between') {
        return `\`${fieldName}\` ${operator} ${valueString[0]} AND ${valueString[1]}`;
    }
    if (operator === 'in' || operator === 'not in') {
        return `\`${fieldName}\` ${operator} (${valueString})`;
    }
    return '';
}
function addSqlFilter(sql, dataFilterValue) {
    let result = sql;
    if (!sql.toUpperCase().includes('WHERE')) {
        result += ' WHERE';
    } else {
        result += ' AND';
    }
    result += ` (${getFilterSQL(dataFilterValue)})`;
    return result;
}
function isWrappedInQuotes(inputString) {
    const pattern = /(["'])(.*?)\1/;
    return pattern.test(inputString);
}
function getIndexesStatement(indexes, allField, keywords) {
    let operator = 'MATCH_ANY';
    let searchValue = keywords.trim();
    if (!searchValue || !indexes) {
        return '';
    }
    if (isWrappedInQuotes(keywords)) {
        operator = 'MATCH_PHRASE';
    } else {
        searchValue = `'${searchValue}'`;
    }
    const indexesNames = indexes.map((item)=>item.columnName);
    return indexesNames.reduce((prevValue, currValue)=>{
        var _getFieldType;
        const currentField = allField.find((field)=>`${field.value}` === currValue);
        const currentFieldType = (_getFieldType = getFieldType(currentField.Type)) === null || _getFieldType === void 0 ? void 0 : _getFieldType.toUpperCase();
        if (currentFieldType === 'NUMBER') {
            operator = '=';
        }
        if (currentFieldType === 'STRING' || currentFieldType === 'ARRAY') {
            if (isWrappedInQuotes(keywords)) {
                operator = 'MATCH_PHRASE';
            } else {
                operator = 'MATCH_ANY';
            }
        }
        const canSearchField = CAN_SEARCH_FIELD_TYPE.includes(currentFieldType);
        if (canSearchField) {
            if (prevValue) {
                return `${prevValue} OR \`${currValue}\` ${operator} ${searchValue}`;
            } else {
                return `\`${currValue}\` ${operator} ${searchValue}`;
            }
        }
        return prevValue;
    }, '');
}
const DISCOVER_SHORTCUTS = [
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 5 Minutes`,
        label: `Last 5 Minutes`,
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-5, 'minute').startOf('second'),
                now
            ],
        format: 'HH:mm',
        raw: {
            from: 'now-5m',
            to: 'now'
        },
        type: 'minute',
        number: -5
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 15 Minutes`,
        label: `Last 15 Minutes`,
        raw: {
            from: 'now-15m',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-15, 'minute').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'minute',
        number: -15
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 1 Hour`,
        label: `Last 1 Hour`,
        raw: {
            from: 'now-1h',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-1, 'hour').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'hour',
        number: -1
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 1 Day`,
        label: `Last 1 Day`,
        raw: {
            from: 'now-1d',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-1, 'day').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'day',
        number: -1
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 7 Days`,
        label: `Last 1 Days`,
        raw: {
            from: 'now-7d',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-7, 'day').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'day',
        number: -7
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 1 Month`,
        label: `Last 1 Month`,
        raw: {
            from: 'now-1M',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-1, 'month').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'month',
        number: -1
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 3 Months`,
        label: `Last 3 Months`,
        raw: {
            from: 'now-3M',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-3, 'month').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'month',
        number: -3
    },
    {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__/* .nanoid */ .Ak)(),
        text: `Last 1 Year`,
        label: `Last 1 Year`,
        raw: {
            from: 'now-1y',
            to: 'now'
        },
        range: (now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()())=>[
                now.add(-1, 'year').startOf('second'),
                now
            ],
        format: 'HH:mm',
        type: 'year',
        number: -1
    }
];
const SURROUNDING_LOGS_OPERATORS = [
    {
        label: '5',
        value: '5'
    },
    {
        label: '10',
        value: '10'
    }
];
function getLatestTime(id) {
    if (!id) {
        return null;
    }
    const selectedItem = DISCOVER_SHORTCUTS.find((item)=>item.key === id);
    return selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.range();
}
const TIME_INTERVALS = [
    {
        value: 'auto',
        label: `Auto`
    },
    {
        value: 'second',
        label: `Second`
    },
    {
        value: 'minute',
        label: `Minute`
    },
    {
        value: 'hour',
        label: `Hour`
    },
    {
        value: 'day',
        label: `Day`
    },
    {
        value: 'week',
        label: `Week`
    },
    {
        value: 'month',
        label: `Month`
    },
    {
        value: 'year',
        label: `Year`
    }
];
const PAGESIZE_OPTIONS = (/* unused pure expression or super */ null && ([
    10,
    20,
    50,
    100,
    200
]));
const FIELD_TYPES = [
    {
        key: 'STRING',
        value: [
            'VARCHAR',
            'STRING',
            'CHAR',
            'TEXT'
        ],
        icon: ''
    },
    {
        key: 'NUMBER',
        value: [
            'INT',
            'LARGEINT',
            'SMALLINT',
            'TINYINT',
            'DECIMAL',
            'BIGINT',
            'FLOAT',
            'DOUBLE'
        ],
        icon: ''
    },
    {
        key: 'DATE',
        value: [
            'DATE',
            'DATETIME',
            'DATEV2',
            'DATETIMEV2'
        ],
        icon: ''
    },
    {
        key: 'JSONB',
        value: [
            'JSONB'
        ],
        icon: '',
        complex: true
    },
    {
        key: 'ARRAY',
        value: [
            'ARRAY'
        ],
        icon: '',
        complex: true
    },
    {
        key: 'BOOLEAN',
        value: [
            'BOOLEAN'
        ],
        icon: ''
    },
    {
        key: 'BITMAP',
        value: [
            'BITMAP'
        ],
        icon: '',
        complex: true
    },
    {
        key: 'HLL',
        value: [
            'HLL'
        ],
        icon: '',
        complex: true
    },
    {
        key: 'VARIANT',
        value: [
            'VARIANT'
        ],
        icon: '',
        complex: true
    },
    {
        key: 'JSON',
        value: [
            'JSON'
        ],
        icon: '',
        complex: true
    }
];
function encodeBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1)=>String.fromCharCode(parseInt('0x' + p1, 10))));
}
function decodeBase64(base64) {
    return decodeURIComponent(Array.from(atob(base64)).map((c)=>'%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
}
const isComplexType = (columnType)=>{
    if (!columnType) {
        return false;
    }
    const currentColumnType = FIELD_TYPES.find((item)=>item.value.some((val)=>columnType.toLocaleUpperCase().includes(val)));
    if (currentColumnType) {
        return !!currentColumnType.complex;
    }
    return true;
};
function formatDate(interval) {
    let date_format = 'YYYY-MM-DD HH:mm:ss';
    switch(interval){
        case 'year':
            date_format = 'YYYY';
            break;
        case 'month':
            date_format = 'YYYY-MM';
            break;
        case 'week':
            date_format = 'YYYY-MM-DD';
            break;
        case 'day':
            date_format = 'YYYY-MM-DD';
            break;
        case 'hour':
            date_format = 'YYYY-MM-DD HH:mm:ss';
            break;
        case 'minute':
            date_format = 'YYYY-MM-DD HH:mm:ss';
            break;
        case 'second':
        default:
            date_format = 'YYYY-MM-DD HH:mm:ss';
            break;
    }
    return date_format;
}
function resetDate(date, interval) {
    let date_reset = date;
    switch(interval){
        case 'year':
            date_reset.set('month', 1).set('date', 1).set('hour', 0).set('minute', 0).set('second', 0);
            break;
        case 'month':
            date_reset.set('date', 1).set('hour', 0).set('minute', 0).set('second', 0);
            break;
        case 'week':
            date_reset.set('hour', 0).set('minute', 0).set('second', 0);
            break;
        case 'day':
            date_reset.set('hour', 0).set('minute', 0).set('second', 0);
            break;
        case 'hour':
            date_reset.set('minute', 0).set('second', 0);
            break;
        case 'minute':
            date_reset.set('second', 0);
            break;
        case 'second':
        default:
            break;
    }
    return date_reset;
}
function getDateRange(startDate, endDate, interval) {
    const DATE_FORMAT = formatDate(interval.interval_unit);
    if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDate, DATE_FORMAT).isSame(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(endDate, DATE_FORMAT), interval.interval_unit)) {
        return [
            endDate
        ];
    }
    let date = resetDate(startDate, interval.interval_unit);
    const formatStartDate = date.format(DATE_FORMAT);
    const dates = [
        formatStartDate
    ];
    do {
        date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).add(interval.interval_value, interval.interval_unit);
        if (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).isBefore(endDate)) {
            dates.push(date.format(DATE_FORMAT));
        }
    }while (dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).isBefore(endDate))
    return dates;
}
function getChartsData(tableDataCharts, currentDate) {
    const selectInterval = (0,_constants__WEBPACK_IMPORTED_MODULE_0__/* .getAutoInterval */ .Vy)(currentDate);
    const [startDate, endDate] = currentDate;
    const intervalUnit = selectInterval.interval_unit || _types_type__WEBPACK_IMPORTED_MODULE_2__/* .IntervalEnum */ .B.Auto;
    const timeInterval = intervalUnit === _types_type__WEBPACK_IMPORTED_MODULE_2__/* .IntervalEnum */ .B.Auto ? selectInterval : {
        interval_value: 1,
        interval_unit: intervalUnit
    };
    const dates = getDateRange(startDate, endDate, timeInterval);
    const tableDataMap = new Map();
    const result = [];
    const DATE_FORMAT_FROM_INTERVAL = formatDate(timeInterval.interval_unit);
    tableDataCharts.forEach((e)=>{
        const currentLocale = dayjs__WEBPACK_IMPORTED_MODULE_1___default().locale();
        const date = dayjs__WEBPACK_IMPORTED_MODULE_1___default().utc(e['TT']).locale(currentLocale).format(DATE_FORMAT_FROM_INTERVAL);
        tableDataMap.set(date, e['sum(cnt)']);
    });
    dates.forEach((date)=>{
        const newDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format(DATE_FORMAT_FROM_INTERVAL);
        if (!tableDataMap.get(newDate)) {
            tableDataMap.set(newDate, null);
        }
    });
    tableDataMap.forEach((value, key)=>{
        result.push({
            TT: key,
            ['sum(cnt)']: value
        });
    });
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(result, [
        'TT'
    ], [
        'asc'
    ]);
}
function convertColumnToRow(jsonData) {
    const frame = jsonData.results[0];
    const fieldNames = frame.schema.fields.map((f)=>f.name);
    const columns = frame.data.values;
    if (columns.length === 0) {
        return [];
    }
    const numRows = columns[0].length;
    const rows = [];
    for(let i = 0; i < numRows; i++){
        const row = {};
        for(let j = 0; j < columns.length; j++){
            row[fieldNames[j]] = columns[j][i];
            if (isValidTimeFieldType(frame.schema.fields[j].type.toUpperCase())) {
                // 如果是时间字段，转换为 Dayjs 对象
                row[fieldNames[j]] = formatTimestampToDateTime(row[fieldNames[j]], frame.schema.fields[j].precision || 3);
            // row[fieldNames[j]] = dayjs.utc(row[fieldNames[j]]).locale(currentLocale).format('YYYY-MM-DD HH:mm:ss.SSS');
            }
            if (frame.schema.fields[j].type === 'VARIANT') {
                // 如果是 VARIANT 类型，转换为 JSON 对象
                try {
                    row[fieldNames[j]] = JSON.parse(row[fieldNames[j]]);
                } catch (e) {
                    console.error(`Error parsing VARIANT field ${fieldNames[j]}:`, e);
                }
            }
        }
        rows.push(row);
    }
    return rows;
}
// 通过查询 Doris 的字段判断类型，不依赖 Grafana 类型
function convertColumnToRowViaFieldsType(jsonData, fields) {
    console.log('fields', fields);
    const frame = jsonData.results[0];
    const fieldNames = frame.schema.fields.map((f)=>f.name);
    const columns = frame.data.values;
    if (columns.length === 0) {
        return [];
    }
    const numRows = columns[0].length;
    const rows = [];
    for(let i = 0; i < numRows; i++){
        const row = {};
        for(let j = 0; j < columns.length; j++){
            row[fieldNames[j]] = columns[j][i];
            if (isValidTimeFieldType(frame.schema.fields[j].type.toUpperCase())) {
                // 如果是时间字段，转换为 Dayjs 对象
                row[fieldNames[j]] = formatTimestampToDateTime(row[fieldNames[j]], frame.schema.fields[j].precision || 3);
            // row[fieldNames[j]] = dayjs.utc(row[fieldNames[j]]).locale(currentLocale).format('YYYY-MM-DD HH:mm:ss.SSS');
            }
            const currentFieldInfo = fields.filter((item)=>item.Field === frame.schema.fields[j].name)[0];
            // 如果是 VARIANT 类型，转换为 JSON 对象
            if (currentFieldInfo && currentFieldInfo.Type.toUpperCase() === 'VARIANT') {
                try {
                    row[fieldNames[j]] = JSON.parse(row[fieldNames[j]]);
                } catch (e) {
                    console.error(`Error parsing VARIANT field ${fieldNames[j]}:`, e);
                }
            }
        }
        rows.push(row);
    }
    return rows;
}
// 格式化时间戳为 DATETIME([number]) 格式
function formatTimestampToDateTime(timestamp, precision = 3) {
    const currentLocale = dayjs__WEBPACK_IMPORTED_MODULE_1___default().locale();
    // 基础格式：YYYY-MM-DD HH:mm:ss
    let formatString = 'YYYY-MM-DD HH:mm:ss';
    // 根据精度添加毫秒部分
    if (precision > 0) {
        formatString += `.${'S'.repeat(precision)}`;
    }
    // 转换时间戳并格式化
    return dayjs__WEBPACK_IMPORTED_MODULE_1___default().utc(timestamp).locale(currentLocale).format(formatString);
}
function formatTracesResData(resData) {
    const frame = resData.results[0];
    const { data } = frame;
    const traceDataFrame = {
        name: 'Trace ID',
        refId: frame.schema.refId || 'Trace ID',
        fields: frame.schema.fields.map((f, i)=>({
                name: f.name,
                type: f.type,
                values: data.values[i],
                typeInfo: f.typeInfo,
                config: {}
            })),
        length: data.values[0].length
    };
    try {
        traceDataFrame.fields.forEach((f)=>{
            if (f.name === 'serviceTags' || f.name === 'tags') {
                f.type = _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.other;
                f.values = f.values.map((item)=>JSON.parse(item));
            }
        });
    } catch (err) {
        console.log('err:', err);
    }
    console.log('traceDataFrame', traceDataFrame);
    return traceDataFrame;
}
function getSearchTableData(tokenizeFields, tableResult) {
    const result = [
        ...tokenizeFields
    ];
    tableResult.forEach((tableItem)=>{
        result.forEach((token)=>{
            token['searchValue'] = tableItem[token.columnName];
        });
    });
    return result;
}
function searchField(data, searchString) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(data, (item)=>item.columnName === searchString);
}
function parseKeywords(keyword) {
    if (keyword.length >= 2 && keyword[0] === keyword[keyword.length - 1] && (keyword[0] === `'` || keyword[0] === `"`)) {
        keyword = keyword.substring(1, keyword.length - 1);
    }
    return keyword;
}
function highlightDelimiter(inputStr, delimiter) {
    const highlighted = inputStr.replace(new RegExp(`${delimiter}`, 'g'), `<mark>${delimiter}</mark>`);
    return highlighted;
}
function insertUnderscore(arr) {
    return arr.reduce((result, item, index)=>{
        result.push(item);
        if (index < arr.length - 1) {
            result.push('_');
        }
        return result;
    }, []);
}
function compare_ignore_quotes(s1, s2) {
    // 移除双引号和单引号
    const cleanS1 = s1.replace(/['"]/g, '');
    const cleanS2 = s2.replace(/['"]/g, '');
    // 比较
    return cleanS1 === cleanS2;
}
function generateHighlightedResults(data, result) {
    const keyword = data.search_value || '';
    const searchTableData = getSearchTableData(data.indexes, result);
    const keywordsTokens = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(Array.from(js_tokens__WEBPACK_IMPORTED_MODULE_3___default()(keyword)).filter((item)=>item.type !== 'Punctuator').map((item)=>{
        let res = item.value.toLowerCase();
        return item.value.includes('_') ? item.value.split('_').map((str)=>str.toLowerCase()) : res;
    }));
    const _sourceResult = result.map((item)=>{
        let itemSource = '';
        for(const key in item){
            let highlightValue = item[key];
            let itemValue = item[key];
            if (typeof highlightValue === 'object') {
                highlightValue = JSON.stringify(highlightValue);
                itemValue = JSON.stringify(itemValue);
            }
            if (keyword && searchField(searchTableData, key)) {
                const strValue = typeof itemValue === 'string' ? itemValue : itemValue + '';
                if (isWrappedInQuotes(keyword)) {
                    const parsedKeyword = parseKeywords(keyword);
                    if (parsedKeyword === strValue) {
                        highlightValue = `<mark>${itemValue}</mark>`;
                    } else if (strValue.includes(parsedKeyword)) {
                        highlightValue = highlightDelimiter(strValue, parsedKeyword);
                    }
                } else {
                    const tokenizedAns = Array.from(js_tokens__WEBPACK_IMPORTED_MODULE_3___default()(strValue)).map((item)=>item.value);
                    let ans = [];
                    if (tokenizedAns.includes(keyword)) {
                        ans = tokenizedAns;
                    } else {
                        const ansWithUnderscore = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(tokenizedAns.map((item)=>{
                            if (item.includes('_')) {
                                return insertUnderscore(item.split('_'));
                            }
                            return item;
                        }));
                        ans = ansWithUnderscore;
                    }
                    if (ans.length > 0) {
                        highlightValue = ans.reduce((acc, curr)=>{
                            if (keywordsTokens.find((token)=>compare_ignore_quotes(token, curr.toLowerCase())) || compare_ignore_quotes(keyword.toLowerCase(), curr.toLowerCase())) {
                                return acc + `<mark>${curr}</mark>`;
                            }
                            return acc + curr;
                        }, '');
                    }
                }
            }
            itemSource += `<span class="field-key">${key}:</span>${highlightValue} `;
        }
        return {
            _original: item,
            _source: itemSource.trim()
        };
    });
    return _sourceResult;
}


/***/ }),

/***/ 7626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $g: () => (/* binding */ getTableDataCountService),
/* harmony export */   Cq: () => (/* binding */ getTracesServicesService),
/* harmony export */   Cy: () => (/* binding */ getTracesService),
/* harmony export */   EF: () => (/* binding */ getTableDataService),
/* harmony export */   H7: () => (/* binding */ getTraceOperationsService),
/* harmony export */   N: () => (/* binding */ getTopDataService),
/* harmony export */   Rp: () => (/* binding */ getTableDataChartsService),
/* harmony export */   hA: () => (/* binding */ getTableDataTraceService),
/* harmony export */   oq: () => (/* binding */ getSurroundingDataService)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8531);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

function getTableDataService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/table_data',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTableDataChartsService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/table_data_charts',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTopDataService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/top_data',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTableDataCountService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/table_data_count',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTableDataTraceService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/table_data_trace',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTracesService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/traces',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTracesServicesService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/traces_services',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getTraceOperationsService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/traces_operations',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}
function getSurroundingDataService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/surrounding_data',
        method: 'POST',
        data: _object_spread_props(_object_spread({}, rest), {
            ds: selectdbDS.uid
        }),
        credentials: 'include'
    });
    return response;
}


/***/ }),

/***/ 7944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ IntervalEnum)
/* harmony export */ });
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


/***/ }),

/***/ 8161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H1: () => (/* binding */ getFieldsService),
/* harmony export */   Hm: () => (/* binding */ getDatabases),
/* harmony export */   oI: () => (/* binding */ getTables),
/* harmony export */   s1: () => (/* binding */ getIndexesService)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8531);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);

// import { lastValueFrom } from 'rxjs';
function getDatabases(selectdbDS) {
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/database',
        method: 'GET',
        params: {
            ds: selectdbDS.uid
        },
        credentials: 'include'
    });
    return response;
// const res = await lastValueFrom(response);
// return res;
}
function getTables({ selectdbDS, database }) {
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/table',
        method: 'GET',
        params: {
            ds: selectdbDS.uid,
            database
        },
        credentials: 'include'
    });
    return response;
}
function getFieldsService({ selectdbDS, database, table }) {
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/fields',
        method: 'GET',
        params: {
            ds: selectdbDS.uid,
            database,
            table
        },
        credentials: 'include'
    });
    return response;
}
function getIndexesService({ selectdbDS, database, table }) {
    const response = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
        url: '/api/plugins/selectdb-discover-app/resources/indexes',
        method: 'GET',
        params: {
            ds: selectdbDS.uid,
            database,
            table
        },
        credentials: 'include'
    });
    return response;
}


/***/ })

}]);
//# sourceMappingURL=911.js.map?_cache=da346721f0a49d38e2db