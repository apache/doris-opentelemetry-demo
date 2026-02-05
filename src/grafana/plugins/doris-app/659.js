"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[659],{

/***/ 4338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jo: () => (/* binding */ getOperationListService),
  FC: () => (/* binding */ getServiceListService),
  hA: () => (/* binding */ getTableDataTraceService),
  Cy: () => (/* binding */ getTracesService)
});

// EXTERNAL MODULE: external "@grafana/runtime"
var runtime_ = __webpack_require__(8531);
;// ./services/traces.sql.ts
// 查询某个Table的Trace详情
function getQueryTableTraceSQL(params) {
    const { table, trace_id, database } = params;
    const sql = `
      SELECT
        trace_id AS traceID,
        span_id AS spanID,
        parent_span_id AS parentSpanID,
        span_name AS operationName,
        service_name AS serviceName,
        CONCAT(
          '[',
          array_join(
            array_map(
              (x, y) -> json_object('key', x, 'value', y),
              map_keys(CAST(CAST(resource_attributes AS TEXT) AS MAP<STRING, STRING>)),
              map_values(CAST(CAST(resource_attributes AS TEXT) AS MAP<STRING, STRING>))
            ),
            ','
          ),
          ']'
        ) AS serviceTags,
        UNIX_TIMESTAMP(timestamp) * 1000 AS startTime,
        duration / 1000 AS duration,
        CONCAT(
          '[',
          array_join(
            array_map(
              (x, y) -> json_object('key', x, 'value', y),
              map_keys(CAST(CAST(span_attributes AS TEXT) AS MAP<STRING, STRING>)),
              map_values(CAST(CAST(span_attributes AS TEXT) AS MAP<STRING, STRING>))
            ),
            ','
          ),
          ']'
        ) AS tags,
        span_kind AS kind,
        CASE status_code
          WHEN 'STATUS_CODE_OK' THEN 1
          WHEN 'STATUS_CODE_ERROR' THEN 2
          ELSE 0
        END AS statusCode,
        status_message AS statusMessage,
        scope_name AS instrumentationLibraryName,
        scope_version AS instrumentationLibraryVersion,
        trace_state AS traceState
      FROM ${database}.\`${table}\`
      WHERE trace_id = '${trace_id}';
    `;
    return sql;
}
function parseDuration(input) {
    if (!input) {
        return 0;
    }
    if (input.endsWith('ms')) {
        return parseFloat(input.replace('ms', ''));
    } else if (input.endsWith('us')) {
        return parseFloat(input.replace('us', '')) / 1000;
    } else if (input.endsWith('s')) {
        return parseFloat(input.replace('s', '')) * 1000;
    }
    return 0;
}
function tagsToDorisSQLConditions(tags) {
    if (!tags) {
        return '1=1';
    }
    const conditions = [];
    const regex = /([\w.]+)=(?:"([^"]+)"|'([^']+)'|([^\s]+))/g;
    let match;
    while((match = regex.exec(tags)) !== null){
        const key = match[1];
        const val = match[2] || match[3] || match[4];
        conditions.push(`span_attributes['${key}'] = '${val}'`);
    }
    return conditions.length > 0 ? conditions.join(' AND ') : '1=1';
}
function buildTraceAggSQLFromParams(params) {
    const timeFilter = `${params.timeField} >= '${params.startDate}' AND ${params.timeField} < '${params.endDate}'`;
    const serviceFilter = params.service_name && params.service_name !== 'all' ? `service_name = '${params.service_name}'` : '1=1';
    const operationFilter = params.operation && params.operation !== 'all' ? `span_name = '${params.operation}'` : '1=1';
    const statusFilter = params.statusCode && params.statusCode !== 'all' ? `status_code = '${params.statusCode}'` : '1=1';
    const minDuration = parseDuration(params.minDuration);
    const maxDuration = parseDuration(params.maxDuration);
    let durationFilter = '1=1';
    if (minDuration > 0 && maxDuration > 0) {
        durationFilter = `trace_duration BETWEEN ${minDuration} AND ${maxDuration}`;
    } else if (minDuration > 0) {
        durationFilter = `trace_duration >= ${minDuration}`;
    } else if (maxDuration > 0) {
        durationFilter = `trace_duration <= ${maxDuration}`;
    }
    const tagsFilter = tagsToDorisSQLConditions(params.tags);
    let rootSpansFilter = '1=1';
    if (params.service_name && params.service_name !== 'all') {
        rootSpansFilter = `service_name = '${params.service_name}'`;
    }
    if (params.operation && params.operation !== 'all') {
        rootSpansFilter += ` AND span_name = '${params.operation}'`;
    }
    var _params_page_size;
    const limit = (_params_page_size = params.page_size) !== null && _params_page_size !== void 0 ? _params_page_size : 1000;
    var _params_page;
    const offset = Math.max((((_params_page = params.page) !== null && _params_page !== void 0 ? _params_page : 1) - 1) * limit, 0);
    let rowNumberOrderBy = 'time DESC';
    switch(params.sortBy){
        case 'longest-duration':
            rowNumberOrderBy = 'trace_duration_ms DESC';
            break;
        case 'shortest-duration':
            rowNumberOrderBy = 'trace_duration_ms ASC';
            break;
        case 'most-spans':
            rowNumberOrderBy = 'spans DESC';
            break;
        case 'least-spans':
            rowNumberOrderBy = 'spans ASC';
            break;
        case 'most-recent':
            rowNumberOrderBy = 'time DESC';
            break;
    }
    const query = `
USE ${params.database};

WITH
  trace_durations AS (
    SELECT
      trace_id,
      (UNIX_TIMESTAMP(MAX(end_time)) - UNIX_TIMESTAMP(MIN(timestamp))) * 1000 AS trace_duration
    FROM ${params.table}
    WHERE ${timeFilter}
    GROUP BY trace_id
  ),
  all_trace_ids AS (
    SELECT
      t.trace_id,
      MIN(t.${params.timeField}) AS time,
      d.trace_duration
    FROM ${params.table} t
    JOIN trace_durations d ON t.trace_id = d.trace_id
    WHERE
      ${timeFilter}
      AND ${serviceFilter}
      AND ${operationFilter}
      AND ${statusFilter}
      AND ${tagsFilter}
      AND 1=1
      AND ${durationFilter}
    GROUP BY t.trace_id, d.trace_duration
  ),
  root_spans AS (
    SELECT trace_id, span_name AS operation, service_name AS root_service
    FROM ${params.table}
    WHERE (parent_span_id IS NULL
    OR parent_span_id = '')
    AND ${timeFilter}
    AND ${rootSpansFilter}
    group by trace_id,operation,root_service
  ),
  aggregated AS (
    SELECT
      UNIX_TIMESTAMP(MIN(t.${params.timeField})) AS time,
      t.trace_id,
      r.operation,
      r.root_service,
      COLLECT_SET(t.service_name) AS services,
      COUNT(*) AS spans,
      SUM(IF(status_code = 'STATUS_CODE_ERROR', 1, 0)) AS error_spans,
      MAX(duration) / 1000 AS max_span_duration_ms,
      MAX(UNIX_TIMESTAMP(t.timestamp) * 1000 + duration / 1000) - MIN(UNIX_TIMESTAMP(t.timestamp) * 1000) AS trace_duration_ms,
      MAX(IF(t.parent_span_id IS NULL OR t.parent_span_id = '', duration, 0)) / 1000 AS root_span_duration_ms
    FROM ${params.table} t
    JOIN all_trace_ids a ON t.trace_id = a.trace_id
    JOIN root_spans r ON t.trace_id = r.trace_id
    GROUP BY t.trace_id, r.operation, r.root_service
  ),
  numbered AS (
    SELECT
      a.*,
      COUNT(*) OVER() AS total_count,
      ROW_NUMBER() OVER(ORDER BY ${rowNumberOrderBy}) AS rn
    FROM aggregated a
  )

SELECT
  *,
  total_count AS total
FROM numbered
WHERE rn > ${offset} AND rn <= ${offset + limit}
ORDER BY ${rowNumberOrderBy};
`;
    return query;
}
function getServiceListSQL(params) {
    return `
    SELECT DISTINCT service_name 
    FROM ${params.table} 
    WHERE ${params.timeField} BETWEEN '${params.startDate}' AND '${params.endDate}' 
    ORDER BY service_name ASC
  `;
}
function getOperationListSQL(params) {
    return `
    SELECT DISTINCT span_name 
    FROM ${params.table} 
    WHERE ${params.timeField} BETWEEN '${params.startDate}' AND '${params.endDate}' 
    AND service_name = '${params.service_name}'
    ORDER BY span_name ASC
  `;
}

;// ./services/traces.ts
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


// 获取table的Trace数据
function getTableDataTraceService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const traceSQL = getQueryTableTraceSQL(rest);
    return (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTableDataTrace',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: traceSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
}
// 查询Traces
function getTracesService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const getTracesSQL = buildTraceAggSQLFromParams(rest);
    return (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTraces',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: getTracesSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
}
// 查询Trace Services
function getServiceListService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const serviceListSQL = getServiceListSQL(rest);
    return (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getServiceList',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: serviceListSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
}
// 查询Trace Operations
function getOperationListService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const operationListSQL = getOperationListSQL(rest);
    return (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getOperationList',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: operationListSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
}


/***/ }),

/***/ 7273:
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
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_traces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4338);
/* harmony import */ var _store_discover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2539);
/* harmony import */ var _store_traces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8882);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9008);
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
    const currentTable = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useAtomValue */ .md)(_store_traces__WEBPACK_IMPORTED_MODULE_7__/* .currentTraceTableAtom */ .AZ);
    const currentCatalog = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_6__/* .currentCatalogAtom */ .K0);
    const currentDatabase = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_6__/* .currentDatabaseAtom */ .Cf);
    const [traceData, setTraceData] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useAtom */ .fp)(_store_discover__WEBPACK_IMPORTED_MODULE_6__/* .tableTracesDataAtom */ .UB);
    const selectedRow = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_6__/* .selectedRowAtom */ .nn);
    const selectdbDS = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useAtomValue */ .md)(_store_discover__WEBPACK_IMPORTED_MODULE_6__/* .selectedDatasourceAtom */ .SW);
    const traceTable = (props === null || props === void 0 ? void 0 : props.traceTable) || currentTable || 'otel_traces';
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const { open, traceId } = props;
    const getTraceData = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback(()=>{
        let payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: traceTable,
            cluster: '',
            sort: 'DESC',
            trace_id: traceId || ''
        };
        setLoading(true);
        (0,_services_traces__WEBPACK_IMPORTED_MODULE_5__/* .getTableDataTraceService */ .hA)(_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    const formatedData = (0,_utils_data__WEBPACK_IMPORTED_MODULE_8__/* .formatTracesResData */ .O1)(data.results.getTableDataTrace.frames[0]);
                    setTraceData(formatedData);
                }
            },
            error: (err)=>{
                setLoading(false);
                console.log('Fetch Error', err);
            }
        });
    }, [
        currentCatalog,
        currentDatabase,
        traceTable,
        selectdbDS,
        setTraceData,
        traceId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
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
    function renderTracePanel() {
        if (traceData) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.PanelRenderer, {
                title: "trace panel",
                width: 200,
                height: 300,
                pluginId: "traces",
                options: {},
                data: {
                    state: loading ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading : _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
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
            });
        }
        return null;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, open && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
        title: "Trace Panel",
        onClose: ()=>{
            var _props_onClose;
            props === null || props === void 0 ? void 0 : (_props_onClose = props.onClose) === null || _props_onClose === void 0 ? void 0 : _props_onClose.call(props);
        },
        size: "lg"
    }, loading ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: `Loading`
    }) : renderTracePanel()));
}


/***/ }),

/***/ 8763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gw: () => (/* binding */ trimSpacesAroundEquals),
/* harmony export */   sd: () => (/* binding */ generateTableDataUID)
/* harmony export */ });
/* unused harmony exports generateUid, isIgnorableHighlightToken */
// --- stable stringify: 递归排序键，避免循环引用导致崩溃 ---
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
function stableStringify(value) {
    const seen = new WeakSet();
    const recur = (v)=>{
        if (v === null) {
            return 'null';
        }
        const t = typeof v;
        if (t === 'number') {
            return Number.isFinite(v) ? String(v) : 'null';
        }
        if (t === 'boolean') {
            return v ? 'true' : 'false';
        }
        if (t === 'string') {
            return JSON.stringify(v);
        }
        if (t === 'bigint') {
            return JSON.stringify(v.toString());
        }
        if (t === 'undefined' || t === 'function' || t === 'symbol') {
            return 'null';
        }
        // object / array
        if (seen.has(v)) {
            return '"[Circular]"';
        }
        seen.add(v);
        if (Array.isArray(v)) {
            return '[' + v.map(recur).join(',') + ']';
        }
        const keys = Object.keys(v).sort();
        const body = keys.map((k)=>JSON.stringify(k) + ':' + recur(v[k])).join(',');
        return '{' + body + '}';
    };
    return recur(value);
}
// --- 小工具 ---
function u8ToHex(u8) {
    let out = '';
    for(let i = 0; i < u8.length; i++){
        out += u8[i].toString(16).padStart(2, '0');
    }
    return out;
}
function hasSubtle() {
    var _window_crypto_subtle;
    return typeof window !== 'undefined' && !!window.crypto && !!window.isSecureContext && typeof ((_window_crypto_subtle = window.crypto.subtle) === null || _window_crypto_subtle === void 0 ? void 0 : _window_crypto_subtle.digest) === 'function';
}
// --- 纯 JS 的 SHA-256 fallback（简实现，无依赖） ---
function sha256HexJS(data) {
    // 常量
    const K = new Uint32Array([
        0x428a2f98,
        0x71374491,
        0xb5c0fbcf,
        0xe9b5dba5,
        0x3956c25b,
        0x59f111f1,
        0x923f82a4,
        0xab1c5ed5,
        0xd807aa98,
        0x12835b01,
        0x243185be,
        0x550c7dc3,
        0x72be5d74,
        0x80deb1fe,
        0x9bdc06a7,
        0xc19bf174,
        0xe49b69c1,
        0xefbe4786,
        0x0fc19dc6,
        0x240ca1cc,
        0x2de92c6f,
        0x4a7484aa,
        0x5cb0a9dc,
        0x76f988da,
        0x983e5152,
        0xa831c66d,
        0xb00327c8,
        0xbf597fc7,
        0xc6e00bf3,
        0xd5a79147,
        0x06ca6351,
        0x14292967,
        0x27b70a85,
        0x2e1b2138,
        0x4d2c6dfc,
        0x53380d13,
        0x650a7354,
        0x766a0abb,
        0x81c2c92e,
        0x92722c85,
        0xa2bfe8a1,
        0xa81a664b,
        0xc24b8b70,
        0xc76c51a3,
        0xd192e819,
        0xd6990624,
        0xf40e3585,
        0x106aa070,
        0x19a4c116,
        0x1e376c08,
        0x2748774c,
        0x34b0bcb5,
        0x391c0cb3,
        0x4ed8aa4a,
        0x5b9cca4f,
        0x682e6ff3,
        0x748f82ee,
        0x78a5636f,
        0x84c87814,
        0x8cc70208,
        0x90befffa,
        0xa4506ceb,
        0xbef9a3f7,
        0xc67178f2
    ]);
    // 初始哈希
    let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a, h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
    // 预处理：填充
    const l = data.length;
    const bitLenHi = l >>> 29 >>> 0;
    const bitLenLo = l << 3 >>> 0;
    const nBlocks = (l + 9 >> 6) + 1 << 4; // 以 16 个 32bit 为一组
    const M = new Uint32Array(nBlocks);
    for(let i = 0; i < l; i++){
        M[i >> 2] |= data[i] << (3 - (i & 3) << 3);
    }
    M[l >> 2] |= 0x80 << (3 - (l & 3) << 3);
    M[nBlocks - 2] = bitLenHi;
    M[nBlocks - 1] = bitLenLo;
    const W = new Uint32Array(64);
    const rotr = (x, n)=>x >>> n | x << 32 - n;
    for(let i = 0; i < nBlocks; i += 16){
        for(let t = 0; t < 16; t++){
            W[t] = M[i + t];
        }
        for(let t = 16; t < 64; t++){
            const s0 = (rotr(W[t - 15], 7) ^ rotr(W[t - 15], 18) ^ W[t - 15] >>> 3) >>> 0;
            const s1 = (rotr(W[t - 2], 17) ^ rotr(W[t - 2], 19) ^ W[t - 2] >>> 10) >>> 0;
            W[t] = W[t - 16] + s0 + W[t - 7] + s1 >>> 0;
        }
        let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
        for(let t = 0; t < 64; t++){
            const S1 = (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) >>> 0;
            const ch = (e & f ^ ~e & g) >>> 0;
            const T1 = h + S1 + ch + K[t] + W[t] >>> 0;
            const S0 = (rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) >>> 0;
            const maj = (a & b ^ a & c ^ b & c) >>> 0;
            const T2 = S0 + maj >>> 0;
            h = g;
            g = f;
            f = e;
            e = d + T1 >>> 0;
            d = c;
            c = b;
            b = a;
            a = T1 + T2 >>> 0;
        }
        h0 = h0 + a >>> 0;
        h1 = h1 + b >>> 0;
        h2 = h2 + c >>> 0;
        h3 = h3 + d >>> 0;
        h4 = h4 + e >>> 0;
        h5 = h5 + f >>> 0;
        h6 = h6 + g >>> 0;
        h7 = h7 + h >>> 0;
    }
    const out = new Uint8Array(32);
    const H = [
        h0,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7
    ];
    for(let i = 0; i < 8; i++){
        out[i * 4 + 0] = H[i] >>> 24 & 0xff;
        out[i * 4 + 1] = H[i] >>> 16 & 0xff;
        out[i * 4 + 2] = H[i] >>> 8 & 0xff;
        out[i * 4 + 3] = H[i] & 0xff;
    }
    return u8ToHex(out);
}
// --- 通用 SHA-256（浏览器优先，fallback 到纯 JS） ---
function sha256Hex(input) {
    return _async_to_generator(function*() {
        const data = new TextEncoder().encode(input);
        if (hasSubtle()) {
            const buf = yield window.crypto.subtle.digest('SHA-256', data);
            return u8ToHex(new Uint8Array(buf));
        }
        // 非 https 或老环境：走纯 JS
        return sha256HexJS(data);
    })();
}
// --- 你的两个导出函数 ---
function generateUid(obj) {
    return _async_to_generator(function*() {
        const json = stableStringify(obj);
        return sha256Hex(json);
    })();
}
function generateTableDataUID(items) {
    return _async_to_generator(function*() {
        // 允许 _original 缺失时退回整个 item；并发计算，更快
        const sources = items.map((it)=>{
            var _ref;
            return (_ref = it && it._original) !== null && _ref !== void 0 ? _ref : it;
        });
        const uids = yield Promise.all(sources.map(generateUid));
        return items.map((it, i)=>_object_spread_props(_object_spread({}, it), {
                _uid: uids[i]
            }));
    })();
}
function isIgnorableHighlightToken(token) {
    const ignoreChars = new Set([
        ',',
        '.',
        ';',
        ':',
        '(',
        ')',
        '{',
        '}',
        '[',
        ']',
        '+',
        '-',
        '*',
        '/',
        '=',
        '<',
        '>',
        '!',
        '?',
        '|',
        '&',
        '%',
        '^',
        '$',
        '#',
        '@',
        '~',
        '`',
        '\\',
        "'",
        '"'
    ]);
    // 全是空格或换行
    if (!token.trim()) {
        return true;
    }
    // 单个字符且在 ignoreChars 中
    if (token.length === 1 && ignoreChars.has(token)) {
        return true;
    }
    // 多个字符但全是标点符号
    if (/^[\u2000-\u206F\u2E00-\u2E7F!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/.test(token)) {
        return true;
    }
    return false;
}
function trimSpacesAroundEquals(str) {
    // 去掉等于号两边所有空格
    return str.replace(/\s*=\s*/g, '=');
}


/***/ }),

/***/ 8882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AZ: () => (/* binding */ currentTraceTableAtom),
/* harmony export */   E: () => (/* binding */ tracesServicesAtom),
/* harmony export */   VA: () => (/* binding */ traceOperationsAtom),
/* harmony export */   fy: () => (/* binding */ currentSortAtom),
/* harmony export */   gL: () => (/* binding */ currentServiceAtom),
/* harmony export */   jB: () => (/* binding */ tagsAtom),
/* harmony export */   mH: () => (/* binding */ currentOperationAtom),
/* harmony export */   oC: () => (/* binding */ minDurationAtom),
/* harmony export */   ok: () => (/* binding */ tracesAtom),
/* harmony export */   uS: () => (/* binding */ maxDurationAtom)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2560);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1750);


const currentTraceTableAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)('');
const currentServiceAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_SERVICE */ .aR);
const currentOperationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_OPERATION */ .UB);
const currentSortAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)('most-recent');
const tagsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)('');
const tracesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)([]);
const tracesServicesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)([]);
const traceOperationsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)([]);
const minDurationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)('');
const maxDurationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .atom */ .eU)('');


/***/ })

}]);
//# sourceMappingURL=659.js.map?_cache=e4956ecb2028c715bcab