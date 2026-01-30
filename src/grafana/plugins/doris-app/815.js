"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[815],{

/***/ 2551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dW: () => (/* binding */ isIgnorableHighlightToken),
/* harmony export */   gw: () => (/* binding */ trimSpacesAroundEquals),
/* harmony export */   sd: () => (/* binding */ generateTableDataUID)
/* harmony export */ });
/* unused harmony export generateUid */
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

/***/ 6247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $w: () => (/* binding */ currentTableAtom),
/* harmony export */   AW: () => (/* binding */ settingDatabasesAtom),
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
/* harmony export */   L: () => (/* binding */ settingTablesAtom),
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
const settingDatabasesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const tablesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const settingTablesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)([]);
const currentCatalogAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('internal');
const searchTypeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .atom */ .eU)('Lucene');
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
/* unused harmony exports SQL_OPERATORS, TIME_FIELD_TYPES, CAN_SEARCH_FIELD_TYPE, ENABLE_SEARCH_FIELD_TYPE, ParamsKeyEnum, addSqlFilter, SURROUNDING_LOGS_OPERATORS, PAGESIZE_OPTIONS, FIELD_TYPES, decodeBase64, formatDate, resetDate, getDateRange, QUERY_TRACE_FIELDS */
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2551);










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
    'match_phrase',
    'match_phrase_prefix'
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
    'DATEV2',
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
    if (operator === '=' || operator === '!=' || operator === 'like' || operator === 'not like' || operator === 'match_all' || operator === 'match_any' || operator === 'match_phrase' || operator === 'match_phrase_prefix') {
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
function convertColumnToRow(frame) {
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
function convertColumnToRowViaFieldsType(frame, fields) {
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
function formatTracesResData(frame) {
    var _frame_schema, _frame_schema1;
    const { data } = frame;
    const traceDataFrame = {
        name: 'Trace ID',
        refId: ((_frame_schema = frame.schema) === null || _frame_schema === void 0 ? void 0 : _frame_schema.refId) || 'Trace ID',
        fields: (_frame_schema1 = frame.schema) === null || _frame_schema1 === void 0 ? void 0 : _frame_schema1.fields.map((f, i)=>({
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
    // Detect simple Lucene "field:value" pattern so we can highlight the specified field
    // even when `indexes` (tokenizeFields) is empty. Example: "service_name:frontend"
    const luceneFieldMatch = keyword && keyword.match(/^\s*([^\s:]+)\s*:/);
    const luceneField = luceneFieldMatch ? luceneFieldMatch[1].replace(/['"]+/g, '') : null;
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
            if (keyword && (searchField(searchTableData, key) || luceneField && key === luceneField)) {
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
                            if (keywordsTokens.filter((token)=>!(0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .isIgnorableHighlightToken */ .dW)(token)).find((token)=>compare_ignore_quotes(token, curr.toLowerCase())) || compare_ignore_quotes(keyword.toLowerCase(), curr.toLowerCase())) {
                                return acc + `<mark>${curr}</mark>`;
                            }
                            return acc + curr;
                        }, '');
                    }
                }
            }
            // ✅ 这里改成用 data-trace-id + class，方便事件委托识别
            if (key === 'trace_id') {
                const traceId = typeof itemValue === 'string' ? itemValue : String(itemValue);
                const content = highlightValue || traceId;
                highlightValue = `<a 
                href="javascript:void(0)" 
                class="trace-link" 
                data-trace-id="${traceId}"
            >${content}</a>`;
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
const QUERY_TRACE_FIELDS = (/* unused pure expression or super */ null && ([
    'trace_id',
    'span_id',
    'parent_span_id',
    'span_name',
    'service_name'
]));


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
/* harmony export */   Dr: () => (/* binding */ getInvertedIndexColumns),
/* harmony export */   H1: () => (/* binding */ getFieldsService),
/* harmony export */   Hm: () => (/* binding */ getDatabases),
/* harmony export */   Rw: () => (/* binding */ getTablesService),
/* harmony export */   bf: () => (/* binding */ getColumn),
/* harmony export */   s1: () => (/* binding */ getIndexesService)
/* harmony export */ });
/* unused harmony export getColumnFromFieldService */
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8531);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1269);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
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



const escapeSqlLiteral = (value)=>value.replace(/'/g, "''");
const normalizeColumnType = ({ dataType, columnType })=>{
    const source = (columnType || dataType || '').trim();
    if (!source) {
        return '';
    }
    const lower = source.toLowerCase();
    if (lower.startsWith('nullable(') && lower.endsWith(')')) {
        const inner = source.slice(9, -1);
        const normalizedInner = normalizeColumnType({
            dataType: inner,
            columnType: undefined
        });
        return normalizedInner ? `Nullable(${normalizedInner})` : source;
    }
    if (lower.startsWith('map')) {
        return source.replace(/^map/i, 'Map');
    }
    if (lower.startsWith('array')) {
        return source.replace(/^array/i, 'Array');
    }
    if (lower.startsWith('json') || lower.startsWith('variant')) {
        return 'JSON';
    }
    if (lower === 'bool' || lower === 'boolean' || lower.startsWith('tinyint(1)')) {
        return 'Bool';
    }
    if (lower.startsWith('tinyint')) {
        return 'Int8';
    }
    if (lower.startsWith('smallint')) {
        return 'Int16';
    }
    if (lower.startsWith('mediumint')) {
        return 'Int32';
    }
    if (lower.startsWith('bigint') || lower.startsWith('int') || lower.startsWith('integer')) {
        return 'Int64';
    }
    if (lower.startsWith('float') || lower.startsWith('double') || lower.startsWith('real')) {
        return 'Float64';
    }
    if (lower.startsWith('decimal') || lower.startsWith('numeric')) {
        return 'Float64';
    }
    if (lower.startsWith('date')) {
        return source.replace(/^date/i, 'Date');
    }
    if (lower.startsWith('timestamp') || lower.startsWith('datetime')) {
        return 'DateTime';
    }
    if (lower.startsWith('enum')) {
        return source.replace(/^enum/i, 'Enum');
    }
    if (lower.startsWith('uuid')) {
        return 'UUID';
    }
    if (lower.startsWith('ipv4')) {
        return 'IPv4';
    }
    if (lower.startsWith('ipv6')) {
        return 'IPv6';
    }
    if (lower.startsWith('tuple')) {
        return source.replace(/^tuple/i, 'Tuple');
    }
    if (lower.startsWith('struct')) {
        return source.replace(/^struct/i, 'Tuple');
    }
    if (lower.startsWith('char') || lower.startsWith('varchar') || lower.startsWith('text') || lower.startsWith('string')) {
        return 'String';
    }
    return source;
};
function getColumn(_0) {
    return _async_to_generator(function*({ connectionId, database, table, column, datasourceType = 'mysql' }) {
        if (!connectionId || !database || !table || !column) {
            return null;
        }
        const query = `
SELECT
  COLUMN_NAME AS Field,
  DATA_TYPE AS DataType,
  COLUMN_TYPE AS ColumnType
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = '${escapeSqlLiteral(database)}'
  AND TABLE_NAME = '${escapeSqlLiteral(table)}'
  AND COLUMN_NAME = '${escapeSqlLiteral(column)}'
LIMIT 1;
`;
        const response$ = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
            url: '/api/ds/query',
            method: 'POST',
            data: {
                queries: [
                    {
                        refId: 'getColumn',
                        datasource: {
                            type: datasourceType,
                            uid: connectionId
                        },
                        rawSql: query,
                        format: 'table'
                    }
                ]
            }
        });
        try {
            var _resultData_results_getColumn_frames, _resultData_results_getColumn, _resultData_results, _nameField_values_get, _nameField_values, _dataTypeField_values_get, _dataTypeField_values, _columnTypeField_values_get, _columnTypeField_values;
            const { data, ok } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(response$);
            if (!ok) {
                return null;
            }
            const resultData = data;
            const frame = resultData === null || resultData === void 0 ? void 0 : (_resultData_results = resultData.results) === null || _resultData_results === void 0 ? void 0 : (_resultData_results_getColumn = _resultData_results.getColumn) === null || _resultData_results_getColumn === void 0 ? void 0 : (_resultData_results_getColumn_frames = _resultData_results_getColumn.frames) === null || _resultData_results_getColumn_frames === void 0 ? void 0 : _resultData_results_getColumn_frames[0];
            if (!frame) {
                return null;
            }
            const dataFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toDataFrame)(frame);
            var _dataFrame_fields_find;
            const nameField = (_dataFrame_fields_find = dataFrame.fields.find((field)=>field.name === 'Field')) !== null && _dataFrame_fields_find !== void 0 ? _dataFrame_fields_find : dataFrame.fields[0];
            const dataTypeField = dataFrame.fields.find((field)=>field.name === 'DataType');
            const columnTypeField = dataFrame.fields.find((field)=>field.name === 'ColumnType');
            const name = nameField === null || nameField === void 0 ? void 0 : (_nameField_values = nameField.values) === null || _nameField_values === void 0 ? void 0 : (_nameField_values_get = _nameField_values.get) === null || _nameField_values_get === void 0 ? void 0 : _nameField_values_get.call(_nameField_values, 0);
            if (!name) {
                return null;
            }
            const dataTypeValue = dataTypeField === null || dataTypeField === void 0 ? void 0 : (_dataTypeField_values = dataTypeField.values) === null || _dataTypeField_values === void 0 ? void 0 : (_dataTypeField_values_get = _dataTypeField_values.get) === null || _dataTypeField_values_get === void 0 ? void 0 : _dataTypeField_values_get.call(_dataTypeField_values, 0);
            const columnTypeValue = columnTypeField === null || columnTypeField === void 0 ? void 0 : (_columnTypeField_values = columnTypeField.values) === null || _columnTypeField_values === void 0 ? void 0 : (_columnTypeField_values_get = _columnTypeField_values.get) === null || _columnTypeField_values_get === void 0 ? void 0 : _columnTypeField_values_get.call(_columnTypeField_values, 0);
            const columnInfo = {
                name: String(name),
                dataType: dataTypeValue != null ? String(dataTypeValue) : undefined,
                columnType: columnTypeValue != null ? String(columnTypeValue) : undefined
            };
            const normalizedType = normalizeColumnType({
                dataType: columnInfo.dataType,
                columnType: columnInfo.columnType
            });
            return _object_spread_props(_object_spread({}, columnInfo), {
                normalizedType
            });
        } catch (error) {
            console.error('Failed to fetch column metadata', error);
            return null;
        }
    }).apply(this, arguments);
}
function getInvertedIndexColumns(_0) {
    return _async_to_generator(function*({ connectionId, database, table, datasourceType = 'mysql' }) {
        if (!connectionId || !database || !table) {
            return [];
        }
        const query = `SHOW INDEXES FROM \`${database}\`.\`${table}\``;
        const response$ = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
            url: '/api/ds/query',
            method: 'POST',
            data: {
                queries: [
                    {
                        refId: 'getInvertedIndexes',
                        datasource: {
                            type: datasourceType,
                            uid: connectionId
                        },
                        rawSql: query,
                        format: 'table'
                    }
                ]
            }
        });
        try {
            var _resultData_results_getInvertedIndexes_frames, _resultData_results_getInvertedIndexes, _resultData_results, _resultData_results_getIndexes_frames, _resultData_results_getIndexes, _resultData_results1;
            const { data, ok } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(response$);
            if (!ok) {
                return [];
            }
            const resultData = data;
            var _resultData_results_getInvertedIndexes_frames_;
            const frame = (_resultData_results_getInvertedIndexes_frames_ = resultData === null || resultData === void 0 ? void 0 : (_resultData_results = resultData.results) === null || _resultData_results === void 0 ? void 0 : (_resultData_results_getInvertedIndexes = _resultData_results.getInvertedIndexes) === null || _resultData_results_getInvertedIndexes === void 0 ? void 0 : (_resultData_results_getInvertedIndexes_frames = _resultData_results_getInvertedIndexes.frames) === null || _resultData_results_getInvertedIndexes_frames === void 0 ? void 0 : _resultData_results_getInvertedIndexes_frames[0]) !== null && _resultData_results_getInvertedIndexes_frames_ !== void 0 ? _resultData_results_getInvertedIndexes_frames_ : resultData === null || resultData === void 0 ? void 0 : (_resultData_results1 = resultData.results) === null || _resultData_results1 === void 0 ? void 0 : (_resultData_results_getIndexes = _resultData_results1.getIndexes) === null || _resultData_results_getIndexes === void 0 ? void 0 : (_resultData_results_getIndexes_frames = _resultData_results_getIndexes.frames) === null || _resultData_results_getIndexes_frames === void 0 ? void 0 : _resultData_results_getIndexes_frames[0];
            if (!frame) {
                return [];
            }
            const dataFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toDataFrame)(frame);
            var _dataFrame_fields_find;
            const columnNameField = (_dataFrame_fields_find = dataFrame.fields.find((field)=>field.name === 'Column_name')) !== null && _dataFrame_fields_find !== void 0 ? _dataFrame_fields_find : dataFrame.fields.find((field)=>field.name === 'COLUMN_NAME');
            var _dataFrame_fields_find1;
            const indexTypeField = (_dataFrame_fields_find1 = dataFrame.fields.find((field)=>field.name === 'Index_type')) !== null && _dataFrame_fields_find1 !== void 0 ? _dataFrame_fields_find1 : dataFrame.fields.find((field)=>field.name === 'INDEX_TYPE');
            if (!columnNameField || !indexTypeField) {
                return [];
            }
            var _columnNameField_values;
            const columnNames = Array.from((_columnNameField_values = columnNameField.values) !== null && _columnNameField_values !== void 0 ? _columnNameField_values : []);
            var _indexTypeField_values;
            const indexTypes = Array.from((_indexTypeField_values = indexTypeField.values) !== null && _indexTypeField_values !== void 0 ? _indexTypeField_values : []);
            const indexedColumns = new Set();
            for(let i = 0; i < columnNames.length; i += 1){
                const columnName = columnNames[i];
                const indexType = indexTypes[i];
                if (typeof columnName !== 'string' || columnName.length === 0) {
                    continue;
                }
                if (typeof indexType !== 'string') {
                    continue;
                }
                if (indexType.toUpperCase().includes('INVERT')) {
                    indexedColumns.add(columnName);
                }
            }
            return Array.from(indexedColumns);
        } catch (error) {
            console.error('Failed to fetch inverted index metadata', error);
            return [];
        }
    }).apply(this, arguments);
}
function getDatabases(selectdbDS) {
    const response$ = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getDatabases',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: 'SHOW DATABASES',
                    format: 'table'
                }
            ]
        }
    });
    return response$;
}
function getTablesService({ selectdbDS, database }) {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTables',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: `SHOW TABLES FROM \`${database}\``,
                    format: 'table'
                }
            ]
        }
    });
}
function getFieldsService({ selectdbDS, database, table }) {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getFields',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: `SHOW COLUMNS FROM \`${database}\`.\`${table}\``,
                    format: 'table'
                }
            ]
        }
    });
}
function getColumnFromFieldService({ selectdbDS, database, table }) {
// return getBackendSrv().fetch({
//     url: '/api/ds/query',
//     method: 'POST',
//     data: {
//         queries: [
//             {
//                 refId: 'getColumnFromFieldService',
//                 datasource: { type: 'mysql', uid: selectdbDS.uid },
//                 rawSql: `SHOW COLUMNS FROM \`${database}\`.\`${table}\``,
//                 format: 'table',
//             },
//         ],
//     },
// });
}
function getIndexesService({ selectdbDS, database, table }) {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getIndexes',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: `SHOW INDEXES FROM \`${database}\`.\`${table}\``,
                    format: 'table'
                }
            ]
        }
    });
}


/***/ })

}]);
//# sourceMappingURL=815.js.map?_cache=98566353430631706e1b