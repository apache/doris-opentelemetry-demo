"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[181],{

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
/* harmony export */   My: () => (/* binding */ formatTimestampToDateTime),
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
            console.log(frame.schema.fields[j].type.toUpperCase());
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
        url: '/api/plugins/doris-app/resources/table_data',
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
        url: '/api/plugins/doris-app/resources/table_data_charts',
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
        url: '/api/plugins/doris-app/resources/top_data',
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
        url: '/api/plugins/doris-app/resources/table_data_count',
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
        url: '/api/plugins/doris-app/resources/table_data_trace',
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
        url: '/api/plugins/doris-app/resources/traces',
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
        url: '/api/plugins/doris-app/resources/traces_services',
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
        url: '/api/plugins/doris-app/resources/traces_operations',
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
        url: '/api/plugins/doris-app/resources/surrounding_data',
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
        url: '/api/plugins/doris-app/resources/database',
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
        url: '/api/plugins/doris-app/resources/table',
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
        url: '/api/plugins/doris-app/resources/fields',
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
        url: '/api/plugins/doris-app/resources/indexes',
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
//# sourceMappingURL=181.js.map?_cache=ce826c664576171bad6c