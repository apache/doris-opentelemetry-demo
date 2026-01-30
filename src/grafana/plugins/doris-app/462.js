"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[462],{

/***/ 462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1159);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2351);



const Discover = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(634), __webpack_require__.e(17), __webpack_require__.e(513), __webpack_require__.e(815), __webpack_require__.e(285)]).then(__webpack_require__.bind(__webpack_require__, 9285)));
const PageTrace = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().lazy(()=>Promise.all(/* import() */[__webpack_require__.e(634), __webpack_require__.e(17), __webpack_require__.e(815), __webpack_require__.e(600)]).then(__webpack_require__.bind(__webpack_require__, 2600)));
// const PageDashboard = React.lazy(() => import('../../pages/PageDashboard'));
function App(_props) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: _constants__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES */ .bw.Discover,
        element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Discover, null)
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: `${_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES */ .bw.Traces}`,
        element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageTrace, null)
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "*",
        element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Discover, null)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


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


/***/ })

}]);
//# sourceMappingURL=462.js.map?_cache=77196585ebf8c2590f7c