(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[513],{

/***/ 1433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(5380);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_CheckCircleFilled)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
;// ../node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js
// This icon file is generated automatically.
var CheckCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
/* harmony default export */ const asn_CheckCircleFilled = (CheckCircleFilled);

// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(7916);
;// ../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckCircleFilled_CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_CheckCircleFilled
  }));
};

/**![check-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xOTMuNSAzMDEuN2wtMjEwLjYgMjkyYTMxLjggMzEuOCAwIDAxLTUxLjcgMEwzMTguNSA0ODQuOWMtMy44LTUuMyAwLTEyLjcgNi41LTEyLjdoNDYuOWMxMC4yIDAgMTkuOSA0LjkgMjUuOSAxMy4zbDcxLjIgOTguOCAxNTcuMi0yMThjNi04LjMgMTUuNi0xMy4zIDI1LjktMTMuM0g2OTljNi41IDAgMTAuMyA3LjQgNi41IDEyLjd6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/external_react_.forwardRef(CheckCircleFilled_CheckCircleFilled);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_CheckCircleFilled = (RefIcon);

/***/ }),

/***/ 1738:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 1750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ clsx)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (clsx)));

/***/ }),

/***/ 2140:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 2459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_LoadingOutlined)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
;// ../node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
// This icon file is generated automatically.
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
/* harmony default export */ const asn_LoadingOutlined = (LoadingOutlined);

// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(7916);
;// ../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LoadingOutlined_LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_LoadingOutlined
  }));
};

/**![loading](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk4OCA1NDhjLTE5LjkgMC0zNi0xNi4xLTM2LTM2IDAtNTkuNC0xMS42LTExNy0zNC42LTE3MS4zYTQ0MC40NSA0NDAuNDUgMCAwMC05NC4zLTEzOS45IDQzNy43MSA0MzcuNzEgMCAwMC0xMzkuOS05NC4zQzYyOSA4My42IDU3MS40IDcyIDUxMiA3MmMtMTkuOSAwLTM2LTE2LjEtMzYtMzZzMTYuMS0zNiAzNi0zNmM2OS4xIDAgMTM2LjIgMTMuNSAxOTkuMyA0MC4zQzc3Mi4zIDY2IDgyNyAxMDMgODc0IDE1MGM0NyA0NyA4My45IDEwMS44IDEwOS43IDE2Mi43IDI2LjcgNjMuMSA0MC4yIDEzMC4yIDQwLjIgMTk5LjMuMSAxOS45LTE2IDM2LTM1LjkgMzZ6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/external_react_.forwardRef(LoadingOutlined_LoadingOutlined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_LoadingOutlined = (RefIcon);

/***/ }),

/***/ 2781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(1433);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 2858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(6177),
    isObject = __webpack_require__(8953);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 2934:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 2997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(8812),
    isObject = __webpack_require__(8953),
    isSymbol = __webpack_require__(5414);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 3664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(1433);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 4199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mN: () => (/* binding */ useForm),
/* harmony export */   xI: () => (/* binding */ Controller)
/* harmony export */ });
/* unused harmony exports FormProvider, appendErrors, get, set, useController, useFieldArray, useFormContext, useFormState, useWatch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var getControllerValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj = {}, path, defaultValue) => {
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const FormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormContext);
const FormProvider = (props) => (React.createElement(FormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (isProxyEnabled, formState, readFormStateRef, localReadFormStateRef, isRoot = true) => isProxyEnabled
    ? new Proxy(formState, {
        get: (obj, prop) => {
            if (prop in obj) {
                if (readFormStateRef.current[prop] !== VALIDATION_MODE.all) {
                    readFormStateRef.current[prop] = isRoot
                        ? VALIDATION_MODE.all
                        : true;
                }
                localReadFormStateRef &&
                    (localReadFormStateRef.current[prop] = true);
                return obj[prop];
            }
            return undefined;
        },
    })
    : formState;

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, readFormStateRef, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(readFormStateRef).length ||
        Object.keys(formState).find((key) => readFormStateRef[key] ===
            (isRoot ? VALIDATION_MODE.all : true)));
};

var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];

var isWeb = typeof window !== UNDEFINED &&
    typeof window.HTMLElement !== UNDEFINED &&
    typeof document !== UNDEFINED;

const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;

function useFormState(props) {
    const { control, name } = props || {};
    const methods = useFormContext();
    const { formStateRef, formStateSubjectRef, readFormStateRef } = control || methods.control;
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    nameRef.current = name;
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(formStateRef.current);
    const readFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = formStateSubjectRef.current.subscribe({
            next: (formState) => (!nameRef.current ||
                !formState.name ||
                convertToArrayPayload(nameRef.current).includes(formState.name)) &&
                shouldRenderFormState(formState, readFormState.current) &&
                updateFormState(Object.assign(Object.assign({}, formStateRef.current), formState)),
        });
        return () => formStateSubscription.unsubscribe();
    }, []);
    return getProxyFormState(isProxyEnabled, formState, readFormStateRef, readFormState, false);
}

function useController({ name, rules, defaultValue, control, shouldUnregister, }) {
    const methods = useFormContext();
    const { defaultValuesRef, register, fieldsRef, unregister, fieldArrayNamesRef, controllerSubjectRef, shouldUnmountUnregister, inFieldArrayActionRef, } = control || methods.control;
    const { onChange, onBlur, ref } = register(name, rules);
    const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
    const [value, setInputStateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isUndefined(get(fieldsRef.current, name)._f.value) || isFieldArray
        ? isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue
        : get(fieldsRef.current, name)._f.value);
    const formState = useFormState({
        control: control || methods.control,
        name,
    });
    get(fieldsRef.current, name)._f.value = value;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const controllerSubscription = controllerSubjectRef.current.subscribe({
            next: (data) => (!data.name || name === data.name) &&
                setInputStateValue(get(data.values, name)),
        });
        return () => {
            controllerSubscription.unsubscribe();
            const shouldUnmount = shouldUnmountUnregister || shouldUnregister;
            if (isFieldArray
                ? shouldUnmount && !inFieldArrayActionRef.current
                : shouldUnmount) {
                unregister(name);
            }
            else if (get(fieldsRef.current, name)) {
                get(fieldsRef.current, name)._f.mount = false;
            }
        };
    }, [name]);
    return {
        field: {
            onChange: (event) => {
                const value = getControllerValue(event);
                setInputStateValue(value);
                onChange({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            },
            onBlur: () => {
                onBlur({
                    target: {
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            },
            name,
            value,
            ref: (elm) => elm && ref(elm),
        },
        formState,
        fieldState: Object.defineProperties({}, {
            invalid: {
                get() {
                    return !!get(formState.errors, name);
                },
            },
            isDirty: {
                get() {
                    return !!get(formState.dirtyFields, name);
                },
            },
            isTouched: {
                get() {
                    return !!get(formState.touchedFields, name);
                },
            },
            error: {
                get() {
                    return get(formState.errors, name);
                },
            },
        }),
    };
}

const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

const getFieldsValues = (fieldsRef, defaultValuesRef, output = {}) => {
    for (const name in fieldsRef.current) {
        const field = fieldsRef.current[name];
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            set(output, name, _f
                ? _f.ref.disabled || (_f.refs && _f.refs.every((ref) => ref.disabled))
                    ? undefined
                    : _f.value
                : Array.isArray(field)
                    ? []
                    : {});
            if (current) {
                getFieldsValues({
                    current,
                }, defaultValuesRef, output[name]);
            }
        }
    }
    return Object.assign(Object.assign({}, defaultValuesRef), output);
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var mapIds = (values = [], keyName) => values.map((value) => (Object.assign({ [keyName]: (value && value[keyName]) || generateId() }, value)));

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        object1 instanceof Date ||
        object2 instanceof Date) {
        return object1 === object2;
    }
    if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

function append(data, value) {
    return [...data, ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...data];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const useFieldArray = ({ control, name, keyName = 'id', shouldUnregister, }) => {
    const methods = useFormContext();
    const focusNameRef = React.useRef('');
    const { isWatchAllRef, watchFieldsRef, getIsDirty, watchSubjectRef, fieldArraySubjectRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, formStateRef, formStateSubjectRef, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, unregister, shouldUnmountUnregister, inFieldArrayActionRef, } = control || methods.control;
    const [fields, setFields] = React.useState(mapIds(get(fieldsRef.current, name)
        ? get(getFieldsValues(fieldsRef), name)
        : get(fieldArrayDefaultValuesRef.current, getNodeParentName(name))
            ? get(fieldArrayDefaultValuesRef.current, name, [])
            : get(defaultValuesRef.current, name, []), keyName));
    set(fieldArrayDefaultValuesRef.current, name, [...fields]);
    fieldArrayNamesRef.current.add(name);
    const omitKey = (fields) => fields.map((field) => omit((field || {}), keyName));
    const getCurrentFieldsValues = () => {
        const values = get(getFieldsValues(fieldsRef, defaultValuesRef.current), name, []);
        return mapIds(get(fieldArrayDefaultValuesRef.current, name, []).map((item, index) => (Object.assign(Object.assign({}, item), values[index]))), keyName);
    };
    const getFocusDetail = (index, options) => options
        ? !isUndefined(options.focusIndex)
            ? `${name}.${options.focusIndex}`
            : options.focusName
                ? options.focusName
                : !options.shouldFocus
                    ? ''
                    : `${name}.${index}`
        : `${name}.${index}`;
    const resetFields = (index) => convertToArrayPayload(index).forEach((currentIndex) => set(fieldsRef.current, `${name}${isUndefined(currentIndex) ? '' : `.${currentIndex}`}`, isUndefined(currentIndex) ? [] : undefined));
    const setFieldsAndNotify = (fieldsValues = []) => setFields(mapIds(fieldsValues, keyName));
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => updatedFieldArrayValues &&
        set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
    const batchStateUpdate = (method, args, updatedFieldArrayValues = [], shouldSet = true) => {
        inFieldArrayActionRef.current = true;
        if (get(fieldsRef.current, name)) {
            const output = method(get(fieldsRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldsRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touchedFields &&
            get(formStateRef.current.touchedFields, name)) {
            const output = method(get(formStateRef.current.touchedFields, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touchedFields, name, output);
            cleanup(formStateRef.current.touchedFields);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updateDirtyFieldsWithDefaultValues(updatedFieldArrayValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (readFormStateRef.current.isValid) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        formStateSubjectRef.current.next({
            isDirty: getIsDirty(name, omitKey(updatedFieldArrayValues)),
            errors: formStateRef.current.errors,
            isValid: formStateRef.current.isValid,
        });
    };
    const registerFieldArray = (values, index = 0, parentName = '') => values.forEach((appendValueItem, valueIndex) => !isPrimitive(appendValueItem) &&
        Object.entries(appendValueItem).forEach(([key, value]) => {
            const inputName = `${parentName || name}.${parentName ? valueIndex : index + valueIndex}.${key}`;
            Array.isArray(value)
                ? registerFieldArray(value, valueIndex, inputName)
                : set(fieldsRef.current, inputName, {
                    _f: {
                        ref: {
                            name: inputName,
                        },
                        name: inputName,
                        value,
                    },
                });
        }));
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = append(getCurrentFieldsValues(), appendValue);
        const currentIndex = updatedFieldArrayValues.length - appendValue.length;
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(append, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues, false);
        registerFieldArray(appendValue, currentIndex);
        focusNameRef.current = getFocusDetail(currentIndex, options);
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), prependValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(prepend, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(prependValue);
        focusNameRef.current = getFocusDetail(0, options);
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(getCurrentFieldsValues(), index);
        resetFields(index);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(removeArrayAt, {
            argA: index,
        }, updatedFieldArrayValues);
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = insert(getCurrentFieldsValues(), index, insertValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(insert, {
            argA: index,
            argB: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(insertValue, index);
        focusNameRef.current = getFocusDetail(index, options);
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, fieldValues, false);
        setFieldsAndNotify(fieldValues);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        setFieldsAndNotify(fieldValues);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
        }, fieldValues, false);
    };
    React.useEffect(() => {
        inFieldArrayActionRef.current = false;
        if (isWatchAllRef.current) {
            formStateSubjectRef.current.next({});
        }
        else {
            for (const watchField of watchFieldsRef.current) {
                if (name.startsWith(watchField)) {
                    formStateSubjectRef.current.next({});
                    break;
                }
            }
        }
        watchSubjectRef.current.next({
            name,
            value: get(getFieldsValues(fieldsRef, defaultValuesRef.current), name, []),
        });
        focusNameRef.current &&
            focusFieldBy(fieldsRef.current, (key) => key.startsWith(focusNameRef.current));
        focusNameRef.current = '';
        fieldArraySubjectRef.current.next({
            name,
            fields: omitKey([...fields]),
        });
    }, [fields, name]);
    React.useEffect(() => {
        const fieldArraySubscription = fieldArraySubjectRef.current.subscribe({
            next({ name: inputFieldArrayName, fields, isReset }) {
                if (isReset) {
                    unset(fieldsRef.current, inputFieldArrayName || name);
                    inputFieldArrayName
                        ? set(fieldArrayDefaultValuesRef.current, inputFieldArrayName, fields)
                        : (fieldArrayDefaultValuesRef.current = fields);
                    setFieldsAndNotify(get(fieldArrayDefaultValuesRef.current, name));
                }
            },
        });
        !get(fieldsRef.current, name) && set(fieldsRef.current, name, []);
        return () => {
            fieldArraySubscription.unsubscribe();
            (shouldUnmountUnregister || shouldUnregister) && unregister(name);
        };
    }, []);
    return {
        swap: React.useCallback(swap, [name]),
        move: React.useCallback(move, [name]),
        prepend: React.useCallback(prepend$1, [name]),
        append: React.useCallback(append$1, [name]),
        remove: React.useCallback(remove, [name]),
        insert: React.useCallback(insert$1, [name]),
        fields: fields,
    };
};

function getFields(fieldsNames, fieldsRefs) {
    const currentFields = {};
    for (const name of fieldsNames) {
        const field = get(fieldsRefs, name);
        if (field) {
            !isKey(name)
                ? set(currentFields, name, field._f)
                : (currentFields[name] = field._f);
        }
    }
    return currentFields;
}

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

var isRadioInput = (element) => element.type === 'radio';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => valueAsNumber
    ? value === ''
        ? NaN
        : +value
    : valueAsDate
        ? new Date(value)
        : setValueAs
            ? setValueAs(value)
            : value;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(field) {
    if (field && field._f) {
        const ref = field._f.ref;
        if (ref.disabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field._f.refs).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field._f.refs).value;
        }
        return getFieldValueAs(isUndefined(ref.value) ? field._f.ref.value : ref.value, field._f);
    }
}

var hasValidation = (options, mounted) => options &&
    mounted &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var isFunction = (value) => typeof value === 'function';

var isString = (value) => typeof value === 'string';

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

var isRegex = (value) => value instanceof RegExp;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async ({ _f: { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, value: inputValue, valueAsNumber, mount, }, }, validateAllFieldCriteria) => {
    if (!mount) {
        return {};
    }
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox ? (refs || [])[0] || {} : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if ((!isNullOrUndefined(min) || !isNullOrUndefined(max)) &&
        inputValue !== '') {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(inputValue) && !isEmpty && (maxLength || minLength)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(inputValue) && pattern && !isEmpty) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const validateRef = isRadioOrCheckbox && refs ? refs[0] : ref;
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(inputValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isHTMLElement = (value) => value instanceof HTMLElement;

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

class Subscription {
    constructor() {
        this.tearDowns = [];
    }
    add(tearDown) {
        this.tearDowns.push(tearDown);
    }
    unsubscribe() {
        for (const teardown of this.tearDowns) {
            teardown();
        }
        this.tearDowns = [];
    }
}
class Subscriber {
    constructor(observer, subscription) {
        this.observer = observer;
        this.closed = false;
        subscription.add(() => (this.closed = true));
    }
    next(value) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
    subscribe(observer) {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        this.observers.push(subscriber);
        return subscription;
    }
    unsubscribe() {
        this.observers = [];
    }
}

const isWindowUndefined = typeof window === UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister, criteriaMode, } = {}) {
    const fieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const fieldsNamesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const formStateSubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const unregisterFieldsNamesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const watchSubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const controllerSubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const fieldArraySubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const fieldArrayDefaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const inFieldArrayActionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const watchFieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const fieldsWithValidationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const validFieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const defaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultValues);
    const isWatchAllRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const contextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(context);
    const resolverRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(resolver);
    const fieldArrayNamesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const validationMode = getValidationModes(mode);
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !validationMode.isOnSubmit,
        errors: {},
    });
    const readFormStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touchedFields: !isProxyEnabled,
        isValidating: !isProxyEnabled,
        isValid: !isProxyEnabled,
        errors: !isProxyEnabled,
    });
    const formStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(formState);
    contextRef.current = context;
    resolverRef.current = resolver;
    const getIsValid = () => (formStateRef.current.isValid =
        deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
            isEmptyObject(formStateRef.current.errors));
    const shouldRenderBaseOnError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, error, shouldRender = false, state = {}, isValid, isWatched) => {
        const previousError = get(formStateRef.current.errors, name);
        let shouldReRender = shouldRender ||
            !deepEqual(previousError, error, true) ||
            (readFormStateRef.current.isValid &&
                isUndefined(error) &&
                get(fieldsWithValidationRef.current, name) &&
                !get(validFieldsRef.current, name));
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state) ||
            isWatched) {
            const updatedFormState = Object.assign(Object.assign({}, state), { isValid: resolverRef.current ? !!isValid : getIsValid(), errors: formStateRef.current.errors, name });
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), updatedFormState);
            formStateSubjectRef.current.next(isWatched ? { name } : updatedFormState);
        }
        formStateSubjectRef.current.next({
            isValidating: false,
        });
    }, []);
    const setFieldValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, rawValue, options = {}, shouldRender, shouldRegister) => {
        shouldRegister && register(name);
        const _f = get(fieldsRef.current, name, {})._f;
        if (_f) {
            const value = isWeb && isHTMLElement(_f.ref) && isNullOrUndefined(rawValue)
                ? ''
                : rawValue;
            _f.value = getFieldValueAs(rawValue, _f);
            if (isRadioInput(_f.ref)) {
                (_f.refs || []).forEach((radioRef) => (radioRef.checked = radioRef.value === value));
            }
            else if (isFileInput(_f.ref) && !isString(value)) {
                _f.ref.files = value;
            }
            else if (isMultipleSelect(_f.ref)) {
                [..._f.ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
            }
            else if (isCheckBoxInput(_f.ref) && _f.refs) {
                _f.refs.length > 1
                    ? _f.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(value)
                        ? !!value.find((data) => data === checkboxRef.value)
                        : value === checkboxRef.value))
                    : (_f.refs[0].checked = !!value);
            }
            else {
                _f.ref.value = value;
            }
            if (shouldRender) {
                const values = getFieldsValues(fieldsRef);
                set(values, name, rawValue);
                controllerSubjectRef.current.next({
                    values: Object.assign(Object.assign({}, defaultValuesRef.current), values),
                    name,
                });
            }
            options.shouldDirty && updateAndGetDirtyState(name, value);
            options.shouldValidate && trigger(name);
        }
    }, []);
    const getIsDirty = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, data) => {
        const formValues = getFieldsValues(fieldsRef);
        name && data && set(formValues, name, data);
        return !deepEqual(formValues, defaultValuesRef.current);
    }, []);
    const updateAndGetDirtyState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, inputValue, shouldRender = true) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            const isFieldDirty = !deepEqual(get(defaultValuesRef.current, name), inputValue);
            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            const previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            formStateRef.current.isDirty = getIsDirty();
            const state = {
                isDirty: formStateRef.current.isDirty,
                dirtyFields: formStateRef.current.dirtyFields,
                name,
            };
            const isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            isChanged && shouldRender && formStateSubjectRef.current.next(state);
            return isChanged ? state : {};
        }
        return {};
    }, []);
    const executeValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name, skipReRender) => {
        const error = (await validateField(get(fieldsRef.current, name), isValidateAllFieldCriteria))[name];
        shouldRenderBaseOnError(name, error, skipReRender);
        return isUndefined(error);
    }, [isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (names, currentNames = []) => {
        const { errors } = await resolverRef.current(getFieldsValues(fieldsRef, shouldUnregister ? {} : defaultValuesRef.current), contextRef.current, {
            criteriaMode,
            names: currentNames,
            fields: getFields(fieldsNamesRef.current, fieldsRef.current),
        });
        for (const name of names) {
            const error = get(errors, name);
            error
                ? set(formStateRef.current.errors, name, error)
                : unset(formStateRef.current.errors, name);
        }
        return errors;
    }, [criteriaMode]);
    const validateForm = async (fieldsRef) => {
        let isValid = true;
        for (const name in fieldsRef) {
            const field = fieldsRef[name];
            if (field) {
                const _f = field._f;
                const current = omit(field, '_f');
                if (_f) {
                    const fieldError = await validateField(field, isValidateAllFieldCriteria);
                    if (fieldError[_f.name]) {
                        isValid = false;
                        set(formStateRef.current.errors, _f.name, fieldError[_f.name]);
                        unset(validFieldsRef.current, _f.name);
                    }
                    else if (get(fieldsWithValidationRef.current, _f.name)) {
                        set(validFieldsRef.current, _f.name, true);
                        unset(formStateRef.current.errors, _f.name);
                    }
                }
                current && (await validateForm(current));
            }
        }
        return isValid;
    };
    const trigger = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name) => {
        const fields = isUndefined(name)
            ? Object.keys(fieldsRef.current)
            : convertToArrayPayload(name);
        let isValid;
        let schemaResult = {};
        formStateSubjectRef.current.next({
            isValidating: true,
        });
        if (resolverRef.current) {
            schemaResult = await executeSchemaOrResolverValidation(fields, isUndefined(name) ? undefined : fields);
            isValid = fields.every((name) => !get(schemaResult, name));
        }
        else {
            isValid = isUndefined(name)
                ? await validateForm(fieldsRef.current)
                : (await Promise.all(fields
                    .filter((fieldName) => get(fieldsRef.current, fieldName))
                    .map(async (fieldName) => await executeValidation(fieldName, null)))).every(Boolean);
        }
        formStateSubjectRef.current.next(Object.assign(Object.assign({}, (isString(name) ? { name } : {})), { errors: formStateRef.current.errors, isValidating: false, isValid: resolverRef.current
                ? isEmptyObject(schemaResult)
                : getIsValid() }));
        return isValid;
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, value, options) => Object.entries(value).forEach(([inputKey, inputValue]) => {
        const fieldName = `${name}.${inputKey}`;
        const field = get(fieldsRef.current, fieldName);
        const isFieldArray = fieldArrayNamesRef.current.has(name);
        isFieldArray || (field && !field._f)
            ? setInternalValues(fieldName, inputValue, options)
            : setFieldValue(fieldName, inputValue, options, true, !field);
    }), [trigger]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const updateValidAndValue = (name, options, ref, isWithinRefCallback) => {
        const field = get(fieldsRef.current, name);
        const defaultValue = isUndefined(field._f.value)
            ? get(defaultValuesRef.current, name)
            : field._f.value;
        if (field && !isUndefined(defaultValue)) {
            if (ref && ref.defaultChecked) {
                field._f.value = getFieldValue(field);
            }
            else if (!isNameInFieldArray(fieldArrayNamesRef.current, name)) {
                setFieldValue(name, defaultValue);
            }
            else {
                field._f.value = defaultValue;
            }
        }
        if ((!isUndefined(defaultValue) || isWithinRefCallback) &&
            hasValidation(options, field._f.mount) &&
            !validationMode.isOnSubmit &&
            field &&
            readFormStateRef.current.isValid) {
            validateField(field, isValidateAllFieldCriteria).then((error) => {
                isEmptyObject(error)
                    ? set(validFieldsRef.current, name, true)
                    : unset(validFieldsRef.current, name);
                formStateRef.current.isValid !== getIsValid() &&
                    updateFormState(Object.assign(Object.assign({}, formStateRef.current), { isValid: getIsValid() }));
            });
        }
        return defaultValue;
    };
    const setValue = (name, value, options = {}) => {
        const field = get(fieldsRef.current, name);
        const isFieldArray = fieldArrayNamesRef.current.has(name);
        if (isFieldArray) {
            fieldArraySubjectRef.current.next({
                fields: value,
                name,
                isReset: true,
            });
            if ((readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) &&
                options.shouldDirty) {
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                formStateSubjectRef.current.next({
                    name,
                    dirtyFields: formStateRef.current.dirtyFields,
                    isDirty: getIsDirty(name, value),
                });
            }
            !value.length &&
                set(fieldsRef.current, name, []) &&
                set(fieldArrayDefaultValuesRef.current, name, []);
        }
        (field && !field._f) || isFieldArray
            ? setInternalValues(name, value, isFieldArray ? {} : options)
            : setFieldValue(name, value, options, true, !field);
        isFieldWatched(name) && formStateSubjectRef.current.next({});
        watchSubjectRef.current.next({ name, value });
    };
    const handleChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async ({ type, target, target: { value, type: inputType } }) => {
        let name = target.name;
        let error;
        let isValid;
        const field = get(fieldsRef.current, name);
        if (field) {
            let inputValue = inputType ? getFieldValue(field) : undefined;
            inputValue = isUndefined(inputValue) ? value : inputValue;
            const isBlurEvent = type === EVENTS.BLUR;
            const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = getValidationModes(reValidateMode);
            const shouldSkipValidation = (!hasValidation(field._f, field._f.mount) &&
                !resolverRef.current &&
                !get(formStateRef.current.errors, name)) ||
                skipValidation(Object.assign({ isBlurEvent, isTouched: !!get(formStateRef.current.touchedFields, name), isSubmitted: formStateRef.current.isSubmitted, isReValidateOnBlur,
                    isReValidateOnChange }, validationMode));
            const isWatched = !isBlurEvent && isFieldWatched(name);
            if (!isUndefined(inputValue)) {
                field._f.value = inputValue;
            }
            const state = updateAndGetDirtyState(name, field._f.value, false);
            if (isBlurEvent && !get(formStateRef.current.touchedFields, name)) {
                set(formStateRef.current.touchedFields, name, true);
                readFormStateRef.current.touchedFields &&
                    (state.touchedFields = formStateRef.current.touchedFields);
            }
            let shouldRender = !isEmptyObject(state) || isWatched;
            if (shouldSkipValidation) {
                !isBlurEvent &&
                    watchSubjectRef.current.next({
                        name,
                        type,
                        value: inputValue,
                    });
                return (shouldRender &&
                    formStateSubjectRef.current.next(isWatched ? { name } : Object.assign(Object.assign({}, state), { name })));
            }
            formStateSubjectRef.current.next({
                isValidating: true,
            });
            if (resolverRef.current) {
                const { errors } = await resolverRef.current(getFieldsValues(fieldsRef, shouldUnregister ? {} : defaultValuesRef.current), contextRef.current, {
                    criteriaMode,
                    fields: getFields([name], fieldsRef.current),
                    names: [name],
                });
                const previousFormIsValid = formStateRef.current.isValid;
                error = get(errors, name);
                if (isCheckBoxInput(target) && !error) {
                    const parentNodeName = getNodeParentName(name);
                    const currentError = get(errors, parentNodeName, {});
                    currentError.type && currentError.message && (error = currentError);
                    if (currentError ||
                        get(formStateRef.current.errors, parentNodeName)) {
                        name = parentNodeName;
                    }
                }
                isValid = isEmptyObject(errors);
                previousFormIsValid !== isValid && (shouldRender = true);
            }
            else {
                error = (await validateField(field, isValidateAllFieldCriteria))[name];
            }
            !isBlurEvent &&
                watchSubjectRef.current.next({
                    name,
                    type,
                    value: inputValue,
                });
            shouldRenderBaseOnError(name, error, shouldRender, state, isValid, isWatched);
        }
    }, []);
    const getValues = (fieldNames) => {
        const values = isMountedRef.current
            ? getFieldsValues(fieldsRef, shouldUnregister ? {} : defaultValuesRef.current)
            : defaultValuesRef.current;
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const updateIsValid = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (values = {}) => {
        const previousIsValid = formStateRef.current.isValid;
        if (resolver) {
            const { errors } = await resolverRef.current(Object.assign(Object.assign({}, getFieldsValues(fieldsRef, shouldUnregister ? {} : defaultValuesRef.current)), values), contextRef.current, {
                criteriaMode,
                fields: getFields(fieldsNamesRef.current, fieldsRef.current),
            });
            formStateRef.current.isValid = isEmptyObject(errors);
        }
        else {
            getIsValid();
        }
        previousIsValid !== formStateRef.current.isValid &&
            formStateSubjectRef.current.next({
                isValid: formStateRef.current.isValid,
            });
    }, [criteriaMode]);
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(formStateRef.current.errors, inputName))
            : (formStateRef.current.errors = {});
        formStateSubjectRef.current.next({
            errors: formStateRef.current.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = ((get(fieldsRef.current, name) || { _f: {} })._f || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        formStateSubjectRef.current.next({
            name,
            errors: formStateRef.current.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watchInternal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((fieldNames, defaultValue, isGlobal) => {
        const isArrayNames = Array.isArray(fieldNames);
        const fieldValues = isMountedRef.current
            ? getFieldsValues(fieldsRef, defaultValuesRef.current)
            : isUndefined(defaultValue)
                ? defaultValuesRef.current
                : isArrayNames
                    ? defaultValue || {}
                    : { [fieldNames]: defaultValue };
        if (isUndefined(fieldNames)) {
            isGlobal && (isWatchAllRef.current = true);
            return fieldValues;
        }
        const result = [];
        for (const fieldName of isArrayNames ? fieldNames : [fieldNames]) {
            isGlobal && watchFieldsRef.current.add(fieldName);
            result.push(get(fieldValues, fieldName));
        }
        return isArrayNames ? result : result[0];
    }, []);
    const watch = (fieldName, defaultValue) => isFunction(fieldName)
        ? watchSubjectRef.current.subscribe({
            next: (info) => fieldName(watchInternal(undefined, defaultValue), info),
        })
        : watchInternal(fieldName, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const inputName of name
            ? convertToArrayPayload(name)
            : Object.keys(fieldsNamesRef.current)) {
            fieldsNamesRef.current.delete(inputName);
            fieldArrayNamesRef.current.delete(inputName);
            if (get(fieldsRef.current, inputName)) {
                if (!options.keepIsValid) {
                    unset(fieldsWithValidationRef.current, inputName);
                    unset(validFieldsRef.current, inputName);
                }
                !options.keepError && unset(formStateRef.current.errors, inputName);
                !options.keepValue && unset(fieldsRef.current, inputName);
                !options.keepDirty &&
                    unset(formStateRef.current.dirtyFields, inputName);
                !options.keepTouched &&
                    unset(formStateRef.current.touchedFields, inputName);
                !shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(defaultValuesRef.current, inputName);
                watchSubjectRef.current.next({
                    name: inputName,
                });
            }
        }
        formStateSubjectRef.current.next(Object.assign(Object.assign(Object.assign({}, formStateRef.current), (!options.keepDirty ? {} : { isDirty: getIsDirty() })), (resolverRef.current ? {} : { isValid: getIsValid() })));
        !options.keepIsValid && updateIsValid();
    };
    const registerFieldRef = (name, ref, options) => {
        register(name, options);
        let field = get(fieldsRef.current, name);
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        if (ref === field._f.ref ||
            (isWeb && isHTMLElement(field._f.ref) && !isHTMLElement(ref)) ||
            (isRadioOrCheckbox &&
                Array.isArray(field._f.refs) &&
                compact(field._f.refs).find((option) => option === ref))) {
            return;
        }
        field = {
            _f: isRadioOrCheckbox
                ? Object.assign(Object.assign({}, field._f), { refs: [
                        ...compact(field._f.refs || []).filter((ref) => isHTMLElement(ref) && document.contains(ref)),
                        ref,
                    ], ref: { type: ref.type, name } }) : Object.assign(Object.assign({}, field._f), { ref }),
        };
        set(fieldsRef.current, name, field);
        const defaultValue = updateValidAndValue(name, options, ref, true);
        if (isRadioOrCheckbox && Array.isArray(defaultValue)
            ? !deepEqual(get(fieldsRef.current, name)._f.value, defaultValue)
            : isUndefined(get(fieldsRef.current, name)._f.value)) {
            get(fieldsRef.current, name)._f.value = getFieldValue(get(fieldsRef.current, name));
        }
    };
    const register = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, options) => {
        const isInitialRegister = !get(fieldsRef.current, name);
        set(fieldsRef.current, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (isInitialRegister
                ? { ref: { name } }
                : Object.assign({ ref: (get(fieldsRef.current, name)._f || {}).ref }, get(fieldsRef.current, name)._f))), { name, mount: true }), options),
        });
        hasValidation(options, true) &&
            set(fieldsWithValidationRef.current, name, true);
        fieldsNamesRef.current.add(name);
        isInitialRegister && updateValidAndValue(name, options);
        return isWindowUndefined
            ? { name: name }
            : {
                name,
                onChange: handleChange,
                onBlur: handleChange,
                ref: (ref) => {
                    if (ref) {
                        registerFieldRef(name, ref, options);
                    }
                    else {
                        const field = get(fieldsRef.current, name);
                        const shouldUnmount = shouldUnregister || (options && options.shouldUnregister);
                        field && (field._f.mount = false);
                        if (isWeb &&
                            (isNameInFieldArray(fieldArrayNamesRef.current, name)
                                ? shouldUnmount && !inFieldArrayActionRef.current
                                : shouldUnmount)) {
                            unregisterFieldsNamesRef.current.add(name);
                        }
                    }
                },
            };
    }, [defaultValuesRef.current]);
    const handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = getFieldsValues(fieldsRef, shouldUnregister ? {} : defaultValuesRef.current);
        formStateSubjectRef.current.next({
            isSubmitting: true,
        });
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, {
                    criteriaMode,
                    fields: getFields(fieldsNamesRef.current, fieldsRef.current),
                });
                formStateRef.current.errors = errors;
                fieldValues = values;
            }
            else {
                await validateForm(fieldsRef.current);
            }
            if (isEmptyObject(formStateRef.current.errors) &&
                Object.keys(formStateRef.current.errors).every((name) => get(fieldValues, name))) {
                formStateSubjectRef.current.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), fieldsNamesRef.current);
            }
        }
        catch (_a) {
            hasNoPromiseError = false;
        }
        finally {
            formStateRef.current.isSubmitted = true;
            formStateSubjectRef.current.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors) && hasNoPromiseError,
                submitCount: formStateRef.current.submitCount + 1,
                errors: formStateRef.current.errors,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria, criteriaMode]);
    const resetFromState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({ keepErrors, keepDirty, keepIsSubmitted, keepTouched, keepDefaultValues, keepIsValid, keepSubmitCount, }, values) => {
        if (!keepIsValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        formStateSubjectRef.current.next({
            submitCount: keepSubmitCount ? formStateRef.current.submitCount : 0,
            isDirty: keepDirty
                ? formStateRef.current.isDirty
                : keepDefaultValues
                    ? deepEqual(values, defaultValuesRef.current)
                    : false,
            isSubmitted: keepIsSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: keepIsValid
                ? formStateRef.current.isValid
                : !!updateIsValid(values),
            dirtyFields: keepDirty ? formStateRef.current.dirtyFields : {},
            touchedFields: keepTouched ? formStateRef.current.touchedFields : {},
            errors: keepErrors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    }, []);
    const reset = (values, keepStateOptions = {}) => {
        const updatedValues = values || defaultValuesRef.current;
        if (isWeb && !keepStateOptions.keepValues) {
            for (const name of fieldsNamesRef.current) {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    const inputRef = Array.isArray(field._f.refs)
                        ? field._f.refs[0]
                        : field._f.ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        !keepStateOptions.keepDefaultValues &&
            (defaultValuesRef.current = Object.assign({}, updatedValues));
        if (!keepStateOptions.keepValues) {
            fieldsRef.current = {};
            controllerSubjectRef.current.next({
                values: Object.assign({}, updatedValues),
            });
            watchSubjectRef.current.next({
                value: Object.assign({}, updatedValues),
            });
            fieldArraySubjectRef.current.next({
                fields: Object.assign({}, updatedValues),
                isReset: true,
            });
        }
        resetFromState(keepStateOptions, values);
        isMountedRef.current = false;
    };
    const setFocus = (name) => get(fieldsRef.current, name)._f.ref.focus();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = formStateSubjectRef.current.subscribe({
            next(formState) {
                if (shouldRenderFormState(formState, readFormStateRef.current, true)) {
                    formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), formState);
                    updateFormState(formStateRef.current);
                }
            },
        });
        const useFieldArraySubscription = fieldArraySubjectRef.current.subscribe({
            next(state) {
                if (state.fields && state.name && readFormStateRef.current.isValid) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, state.name, state.fields);
                    updateIsValid(values);
                }
            },
        });
        resolverRef.current && readFormStateRef.current.isValid && updateIsValid();
        return () => {
            watchSubjectRef.current.unsubscribe();
            formStateSubscription.unsubscribe();
            useFieldArraySubscription.unsubscribe();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const isLiveInDom = (ref) => !isHTMLElement(ref) || !document.contains(ref);
        isMountedRef.current = true;
        unregisterFieldsNamesRef.current.forEach((name) => {
            const field = get(fieldsRef.current, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every(isLiveInDom)
                    : isLiveInDom(field._f.ref)) &&
                unregister(name);
        });
        unregisterFieldsNamesRef.current = new Set();
    });
    return {
        control: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
            register,
            isWatchAllRef,
            inFieldArrayActionRef,
            watchFieldsRef,
            getIsDirty,
            formStateSubjectRef,
            fieldArraySubjectRef,
            controllerSubjectRef,
            watchSubjectRef,
            watchInternal,
            fieldsRef,
            validFieldsRef,
            fieldsWithValidationRef,
            fieldArrayNamesRef,
            readFormStateRef,
            formStateRef,
            defaultValuesRef,
            fieldArrayDefaultValuesRef,
            unregister,
            shouldUnmountUnregister: shouldUnregister,
        }), []),
        formState: getProxyFormState(isProxyEnabled, formState, readFormStateRef),
        trigger,
        register,
        handleSubmit,
        watch: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(watch, []),
        setValue: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setValue, [setInternalValues]),
        getValues: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(getValues, []),
        reset: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(reset, []),
        clearErrors: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(clearErrors, []),
        unregister: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(unregister, []),
        setError: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setError, []),
        setFocus: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setFocus, []),
    };
}

function useWatch(props) {
    const { control, name, defaultValue } = props || {};
    const methods = useFormContext();
    const nameRef = React.useRef(name);
    nameRef.current = name;
    const { watchInternal, watchSubjectRef } = control || methods.control;
    const [value, updateValue] = React.useState(isUndefined(defaultValue)
        ? watchInternal(name)
        : defaultValue);
    React.useEffect(() => {
        watchInternal(name);
        const watchSubscription = watchSubjectRef.current.subscribe({
            next: ({ name: inputName, value }) => (!nameRef.current ||
                !inputName ||
                convertToArrayPayload(nameRef.current).some((fieldName) => inputName &&
                    fieldName &&
                    (fieldName.startsWith(inputName) ||
                        inputName.startsWith(fieldName)))) &&
                updateValue(isString(inputName) &&
                    nameRef.current === inputName &&
                    !isUndefined(value)
                    ? value
                    : watchInternal(nameRef.current, defaultValue)),
        });
        return () => watchSubscription.unsubscribe();
    }, []);
    return value;
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { start: peg$parsestart },
      peg$startRuleFunction  = peg$parsestart,

      peg$c0 = function(node) {
              return node[0];
          },
      peg$c1 = function() {
              return {};
          },
      peg$c2 = function(operator) {
              return {
                  'operator': operator,
              };
          },
      peg$c3 = function(start, left, operator, right) {
              var node = {
                  'start': start,
                  'left': left,
              };

              var right =
                      right.length == 0
                      ? null
                      : right[0]['right'] == null
                          ? right[0]['left']
                          : right[0];

              if (right != null) {
                  node['operator'] = operator == '' ? '<implicit>' : operator[0];
                  node['right'] = right;
              }

              return node;
          },
      peg$c4 = function(operator, right) {
              return right;
          },
      peg$c5 = function(left, operator, right) {
              var node = {
                  'left':left
              };

              var right =
                      right.length == 0
                      ? null
                      : right[0]['right'] == null
                          ? right[0]['left']
                          : right[0];

              if (right != null) {
                  node['operator'] = operator == '' ? '<implicit>' : operator[0];
                  node['right'] = right;
              }

              return node;
          },
      peg$c6 = function(field_exp) {
              return field_exp;
          },
      peg$c7 = "(",
      peg$c8 = peg$literalExpectation("(", false),
      peg$c9 = ")",
      peg$c10 = peg$literalExpectation(")", false),
      peg$c11 = function(node) {
              node[0]['parenthesized'] = true;
              return node[0];
          },
      peg$c12 = function(fieldname, range) {
              range['field'] =
                  fieldname == null || fieldname.label == ''
                      ? "<implicit>"
                      : fieldname.label;
              range['fieldLocation'] =
              fieldname == null || fieldname.label == ''
                  ? null
                  : fieldname.location;

              return range;
          },
      peg$c13 = function(fieldname, node) {
              node['field']= fieldname.label;
              node['fieldLocation'] = fieldname.location;
              return node;
          },
      peg$c14 = function(fieldname, term) {
              var fieldexp = {
                  'field':
                      fieldname == null || fieldname.label == ''
                          ? "<implicit>"
                          : fieldname.label,
                  'fieldLocation':
                      fieldname == null || fieldname.label == ''
                          ? null
                          : fieldname.location,


                  };

              for(var key in term)
                  fieldexp[key] = term[key];

              return fieldexp;
          },
      peg$c15 = /^[:]/,
      peg$c16 = peg$classExpectation([":"], false, false),
      peg$c17 = function(fieldname) {
              return {
                label: fieldname.label,
                location: fieldname.location
              }

          },
      peg$c18 = function(op, term, proximity, boost) {
              var result = {
                'term': term,
                'quoted': true,
                'regex' : false,
                'termLocation': location()
              };

              if('' != proximity)
              {
                  result['proximity'] = proximity;
              }
              if('' != boost)
              {
                  result['boost'] = boost;
              }
              if('' != op)
              {
                  result['prefix'] = op;
              }

              return result;
          },
      peg$c19 = function(op, term, similarity, boost) {
              var result = {
                'term': term.label,
                'quoted': false,
                'regex': false,
                'termLocation': location()
              };
              if('' != similarity)
              {
                  result['similarity'] = similarity;
              }
              if('' != boost)
              {
                  result['boost'] = boost;
              }
              if('' != op)
              {
                  result['prefix'] = op;
              }
              return result;
          },
      peg$c20 = "\\",
      peg$c21 = peg$literalExpectation("\\", false),
      peg$c22 = function(sequence) { return '\\' + sequence; },
      peg$c23 = ".",
      peg$c24 = peg$literalExpectation(".", false),
      peg$c25 = /^[^ \t\r\n\f{}()"\/\^~[\]]/,
      peg$c26 = peg$classExpectation([" ", "\t", "\r", "\n", "\f", "{", "}", "(", ")", "\"", "/", "^", "~", "[", "]"], true, false),
      peg$c27 = function(term) {
              return term.join('');
          },
      peg$c28 = function(term) {
              return {
                label: term.join(''),
                location: location(),
              };
          },
      peg$c29 = /^[^: \t\r\n\f{}()"\^~[\]]/,
      peg$c30 = peg$classExpectation([":", " ", "\t", "\r", "\n", "\f", "{", "}", "(", ")", "\"", "^", "~", "[", "]"], true, false),
      peg$c31 = "\"",
      peg$c32 = peg$literalExpectation("\"", false),
      peg$c33 = function(chars) { return chars.join(''); },
      peg$c34 = "/",
      peg$c35 = peg$literalExpectation("/", false),
      peg$c36 = function(chars) { return chars.join('') },
      peg$c37 = peg$anyExpectation(),
      peg$c38 = function(char) { return char; },
      peg$c39 = "+",
      peg$c40 = peg$literalExpectation("+", false),
      peg$c41 = "-",
      peg$c42 = peg$literalExpectation("-", false),
      peg$c43 = "!",
      peg$c44 = peg$literalExpectation("!", false),
      peg$c45 = "{",
      peg$c46 = peg$literalExpectation("{", false),
      peg$c47 = "}",
      peg$c48 = peg$literalExpectation("}", false),
      peg$c49 = "[",
      peg$c50 = peg$literalExpectation("[", false),
      peg$c51 = "]",
      peg$c52 = peg$literalExpectation("]", false),
      peg$c53 = "^",
      peg$c54 = peg$literalExpectation("^", false),
      peg$c55 = "?",
      peg$c56 = peg$literalExpectation("?", false),
      peg$c57 = ":",
      peg$c58 = peg$literalExpectation(":", false),
      peg$c59 = "&",
      peg$c60 = peg$literalExpectation("&", false),
      peg$c61 = "|",
      peg$c62 = peg$literalExpectation("|", false),
      peg$c63 = "'",
      peg$c64 = peg$literalExpectation("'", false),
      peg$c65 = "~",
      peg$c66 = peg$literalExpectation("~", false),
      peg$c67 = "*",
      peg$c68 = peg$literalExpectation("*", false),
      peg$c69 = " ",
      peg$c70 = peg$literalExpectation(" ", false),
      peg$c71 = function(proximity) {
              return proximity;
          },
      peg$c72 = function(boost) {
              return boost;
          },
      peg$c73 = function(fuzziness) {
              return fuzziness == '' || fuzziness == null ? 0.5 : fuzziness;
          },
      peg$c74 = "0.",
      peg$c75 = peg$literalExpectation("0.", false),
      peg$c76 = /^[0-9]/,
      peg$c77 = peg$classExpectation([["0", "9"]], false, false),
      peg$c78 = function(val) {
              return parseFloat("0." + val.join(''));
          },
      peg$c79 = function(val) {
              return parseInt(val.join(''));
          },
      peg$c80 = "TO",
      peg$c81 = peg$literalExpectation("TO", false),
      peg$c82 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'both'
              };
          },
      peg$c83 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'none'
              };
          },
      peg$c84 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'left'
              };
          },
      peg$c85 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'right'
              };
          },
      peg$c86 = function(operator) {
              return operator;
          },
      peg$c87 = "OR NOT",
      peg$c88 = peg$literalExpectation("OR NOT", false),
      peg$c89 = "AND NOT",
      peg$c90 = peg$literalExpectation("AND NOT", false),
      peg$c91 = "OR",
      peg$c92 = peg$literalExpectation("OR", false),
      peg$c93 = "AND",
      peg$c94 = peg$literalExpectation("AND", false),
      peg$c95 = "NOT",
      peg$c96 = peg$literalExpectation("NOT", false),
      peg$c97 = "||",
      peg$c98 = peg$literalExpectation("||", false),
      peg$c99 = "&&",
      peg$c100 = peg$literalExpectation("&&", false),
      peg$c101 = peg$otherExpectation("whitespace"),
      peg$c102 = /^[ \t\r\n\f]/,
      peg$c103 = peg$classExpectation([" ", "\t", "\r", "\n", "\f"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsenode();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsenode();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseEOF();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c1();
        }
        s0 = s1;
      }
    }

    return s0;
  }

  function peg$parsenode() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseoperator_exp();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEOF();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseoperator_exp();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsegroup_exp();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoperator_exp();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseoperator_exp();
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsenode();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsenode();
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseoperator_exp();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsenode();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsegroup_exp();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseoperator_exp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseoperator_exp();
            }
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parsenode();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsenode();
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c5(s1, s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parsegroup_exp() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsefield_exp();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseparen_exp();
    }

    return s0;
  }

  function peg$parseparen_exp() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c7;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c8); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsenode();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsenode();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 41) {
            s4 = peg$c9;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c11(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefield_exp() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parsefieldname();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parserange_operator_exp();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c12(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsefieldname();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseparen_exp();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsefieldname();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseterm();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c14(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parsefieldname() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseunquoted_term();
    if (s1 !== peg$FAILED) {
      if (peg$c15.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c17(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseterm() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseprefix_operator_exp();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsequoted_term();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseproximity_modifier();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseboost_modifier();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c18(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseprefix_operator_exp();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseunquoted_term();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefuzzy_modifier();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseboost_modifier();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parse_();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parse_();
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c19(s1, s2, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parserterm_char() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c20;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEscapeSequence();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c22(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s0 = peg$c23;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c25.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
      }
    }

    return s0;
  }

  function peg$parseranged_term() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parserterm_char();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parserterm_char();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c27(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseunquoted_term() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseterm_char();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseterm_char();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c28(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseterm_char() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c20;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEscapeSequence();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c22(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s0 = peg$c23;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c29.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
      }
    }

    return s0;
  }

  function peg$parsequoted_term() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c31;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c32); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseDoubleStringCharacter();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseDoubleStringCharacter();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c31;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c32); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c33(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseregex_term() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 47) {
      s1 = peg$c34;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseRegexCharacter();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseRegexCharacter();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s3 = peg$c34;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c35); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c36(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDoubleStringCharacter() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 34) {
      s2 = peg$c31;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c32); }
    }
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 92) {
        s2 = peg$c20;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c38(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c20;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEscapeSequence();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseRegexCharacter() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 47) {
      s2 = peg$c34;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 92) {
        s2 = peg$c20;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c38(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c20;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEscapeSequence();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseEscapeSequence() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 43) {
      s0 = peg$c39;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c40); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s0 = peg$c41;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 33) {
          s0 = peg$c43;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s0 = peg$c7;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s0 = peg$c9;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c10); }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s0 = peg$c45;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c46); }
              }
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s0 = peg$c47;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c48); }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 91) {
                    s0 = peg$c49;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c50); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s0 = peg$c51;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c52); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 94) {
                        s0 = peg$c53;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c54); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 34) {
                          s0 = peg$c31;
                          peg$currPos++;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c32); }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 63) {
                            s0 = peg$c55;
                            peg$currPos++;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c56); }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 58) {
                              s0 = peg$c57;
                              peg$currPos++;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c58); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 92) {
                                s0 = peg$c20;
                                peg$currPos++;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c21); }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 38) {
                                  s0 = peg$c59;
                                  peg$currPos++;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c60); }
                                }
                                if (s0 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 124) {
                                    s0 = peg$c61;
                                    peg$currPos++;
                                  } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c62); }
                                  }
                                  if (s0 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 39) {
                                      s0 = peg$c63;
                                      peg$currPos++;
                                    } else {
                                      s0 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c64); }
                                    }
                                    if (s0 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 47) {
                                        s0 = peg$c34;
                                        peg$currPos++;
                                      } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c35); }
                                      }
                                      if (s0 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 126) {
                                          s0 = peg$c65;
                                          peg$currPos++;
                                        } else {
                                          s0 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c66); }
                                        }
                                        if (s0 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 42) {
                                            s0 = peg$c67;
                                            peg$currPos++;
                                          } else {
                                            s0 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c68); }
                                          }
                                          if (s0 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                              s0 = peg$c69;
                                              peg$currPos++;
                                            } else {
                                              s0 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c70); }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseproximity_modifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c65;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c66); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseint_exp();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c71(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseboost_modifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 94) {
      s1 = peg$c53;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c54); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsedecimal_or_int_exp();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c72(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefuzzy_modifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c65;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c66); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsedecimal_exp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c73(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedecimal_or_int_exp() {
    var s0;

    s0 = peg$parsedecimal_exp();
    if (s0 === peg$FAILED) {
      s0 = peg$parseint_exp();
    }

    return s0;
  }

  function peg$parsedecimal_exp() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c74) {
      s1 = peg$c74;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c75); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c76.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c77); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c76.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c77); }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c78(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseint_exp() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c76.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c77); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c76.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c77); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c79(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parserange_operator_exp() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c49;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c50); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseranged_term();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c80) {
            s4 = peg$c80;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c81); }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parse_();
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseranged_term();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 93) {
                  s7 = peg$c51;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c52); }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c82(s2, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c45;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c46); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseranged_term();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          if (s3 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c80) {
              s4 = peg$c80;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c81); }
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parse_();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseranged_term();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c47;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c48); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c83(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 91) {
          s1 = peg$c49;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c50); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseranged_term();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parse_();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_();
            }
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c80) {
                s4 = peg$c80;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c81); }
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parse_();
                  }
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseranged_term();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s7 = peg$c47;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c48); }
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c84(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c45;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseranged_term();
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parse_();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parse_();
              }
              if (s3 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c80) {
                  s4 = peg$c80;
                  peg$currPos += 2;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c81); }
                }
                if (s4 !== peg$FAILED) {
                  s5 = [];
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    while (s6 !== peg$FAILED) {
                      s5.push(s6);
                      s6 = peg$parse_();
                    }
                  } else {
                    s5 = peg$FAILED;
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseranged_term();
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s7 = peg$c51;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c52); }
                      }
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c85(s2, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parseoperator_exp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseoperator();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c86(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseoperator();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseEOF();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c86(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseoperator() {
    var s0;

    if (input.substr(peg$currPos, 6) === peg$c87) {
      s0 = peg$c87;
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c88); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 7) === peg$c89) {
        s0 = peg$c89;
        peg$currPos += 7;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c90); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c91) {
          s0 = peg$c91;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c92); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c93) {
            s0 = peg$c93;
            peg$currPos += 3;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c94); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c95) {
              s0 = peg$c95;
              peg$currPos += 3;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c96); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c97) {
                s0 = peg$c97;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c98); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c99) {
                  s0 = peg$c99;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c100); }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseprefix_operator_exp() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseprefix_operator();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c86(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseprefix_operator() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 43) {
      s0 = peg$c39;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c40); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s0 = peg$c41;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 33) {
          s0 = peg$c43;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c44); }
        }
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c102.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c103); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c102.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c103); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c101); }
    }

    return s0;
  }

  function peg$parseEOF() {
    var s0, s1;

    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c37); }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var IconContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconContext);

/***/ }),

/***/ 4749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ es_message)
});

// UNUSED EXPORTS: actDestroy, actWrapper

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(4318);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// ../node_modules/antd/es/app/context.js

const AppConfigContext = /*#__PURE__*/external_react_default().createContext({});
const AppContext = /*#__PURE__*/external_react_default().createContext({
  message: {},
  notification: {},
  modal: {}
});
/* harmony default export */ const context = ((/* unused pure expression or super */ null && (AppContext)));
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(6451);
// EXTERNAL MODULE: ../node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var es = __webpack_require__(8656);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(4705);
// EXTERNAL MODULE: ../node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(8500);
// EXTERNAL MODULE: ../node_modules/rc-util/es/utils/set.js + 1 modules
var set = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(8761);
;// ../node_modules/antd/es/form/validateMessagesContext.js
"use client";


// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
/* harmony default export */ const validateMessagesContext = (/*#__PURE__*/(0,external_react_.createContext)(undefined));
;// ../node_modules/rc-pagination/es/locale/en_US.js
var locale = {
  // Options
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
};
/* harmony default export */ const en_US = (locale);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7405);
;// ../node_modules/rc-picker/es/locale/common.js
var commonLocale = {
  yearFormat: 'YYYY',
  dayFormat: 'D',
  cellMeridiemFormat: 'A',
  monthBeforeYear: true
};
;// ../node_modules/rc-picker/es/locale/en_US.js


var en_US_locale = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, commonLocale), {}, {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  week: 'Week',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  dateFormat: 'M/D/YYYY',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
});
/* harmony default export */ const locale_en_US = (en_US_locale);
;// ../node_modules/antd/es/time-picker/locale/en_US.js
const locale_en_US_locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ const time_picker_locale_en_US = (locale_en_US_locale);
;// ../node_modules/antd/es/date-picker/locale/en_US.js


// Merge into a locale object
const date_picker_locale_en_US_locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US),
  timePickerLocale: Object.assign({}, time_picker_locale_en_US)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ const date_picker_locale_en_US = (date_picker_locale_en_US_locale);
;// ../node_modules/antd/es/calendar/locale/en_US.js

/* harmony default export */ const calendar_locale_en_US = (date_picker_locale_en_US);
;// ../node_modules/antd/es/locale/en_US.js




const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select',
    close: 'Close'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckAll: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    deselectAll: 'Deselect all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand',
    collapse: 'Collapse'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh',
    scanned: 'Scanned'
  },
  ColorPicker: {
    presetEmpty: 'Empty',
    transparent: 'Transparent',
    singleColor: 'Single',
    gradientColor: 'Gradient'
  }
};
/* harmony default export */ const es_locale_en_US = (localeValues);
;// ../node_modules/antd/es/modal/locale.js

let runtimeLocale = Object.assign({}, es_locale_en_US.Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale) => Object.assign(Object.assign({}, merged), locale), es_locale_en_US.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter(locale => locale !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, es_locale_en_US.Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}
;// ../node_modules/antd/es/locale/context.js

const LocaleContext = /*#__PURE__*/(0,external_react_.createContext)(undefined);
/* harmony default export */ const locale_context = (LocaleContext);
;// ../node_modules/antd/es/locale/index.js
"use client";






const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (false) // removed by dead control flow
{}
  external_react_.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale === null || locale === void 0 ? void 0 : locale.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = external_react_.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/external_react_.createElement(locale_context.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_locale = (LocaleProvider);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/themes/default/theme.js + 9 modules
var default_theme = __webpack_require__(9925);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/context.js
var theme_context = __webpack_require__(98);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(111);
// EXTERNAL MODULE: ../node_modules/@ant-design/colors/es/index.js + 2 modules
var colors_es = __webpack_require__(9328);
// EXTERNAL MODULE: ../node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(8540);
// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(9370);
// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/dynamicCSS.js + 1 modules
var dynamicCSS = __webpack_require__(4908);
;// ../node_modules/antd/es/config-provider/cssVariables.js





const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new fast_color_es/* FastColor */.Y(colorVal);
    const colorPalettes = (0,colors_es/* generate */.cM)(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setA(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new fast_color_es/* FastColor */.Y(theme.primaryColor);
    const primaryColors = (0,colors_es/* generate */.cM)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setA(c.a * 0.12));
    const primaryActiveColor = new fast_color_es/* FastColor */.Y(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setA(c.a * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if ((0,canUseDom/* default */.A)()) {
    (0,dynamicCSS/* updateCSS */.BD)(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
     false ? 0 : void 0;
  }
}
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(5155);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(9812);
;// ../node_modules/antd/es/config-provider/hooks/useConfig.js



function useConfig() {
  const componentDisabled = (0,external_react_.useContext)(DisabledContext/* default */.A);
  const componentSize = (0,external_react_.useContext)(SizeContext/* default */.A);
  return {
    componentDisabled,
    componentSize
  };
}
/* harmony default export */ const hooks_useConfig = (useConfig);
// EXTERNAL MODULE: ../node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(2086);
;// ../node_modules/antd/es/config-provider/hooks/useThemeKey.js

const fullClone = Object.assign({}, external_react_);
const {
  useId
} = fullClone;
const useEmptyId = () => '';
const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
/* harmony default export */ const hooks_useThemeKey = (useThemeKey);
;// ../node_modules/antd/es/config-provider/hooks/useTheme.js





function useTheme(theme, parentTheme, config) {
  var _a, _b;
  const warning = (0,_util_warning/* devUseWarning */.rJ)('ConfigProvider');
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, theme_context/* defaultConfig */.sb), {
    hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : theme_context/* defaultConfig */.sb.hashed,
    cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
  }) : parentTheme;
  const themeKey = hooks_useThemeKey();
  if (false) // removed by dead control flow
{}
  return (0,useMemo/* default */.A)(() => {
    var _a, _b;
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
    const mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: config === null || config === void 0 ? void 0 : config.prefixCls
    }, typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0,isEqual/* default */.A)(prevTheme, nextTheme, true);
  }));
}
// EXTERNAL MODULE: ../node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(4406);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/useToken.js + 3 modules
var useToken = __webpack_require__(6531);
;// ../node_modules/antd/es/config-provider/MotionWrapper.js
"use client";




function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token] = (0,useToken/* default */.Ay)();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = external_react_.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/external_react_.createElement(rc_motion_es/* Provider */.Kq, {
      motion: motion
    }, children);
  }
  return children;
}
;// ../node_modules/antd/es/config-provider/PropWarning.js
"use client";



/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(({
  dropdownMatchSelectWidth
}) => {
  const warning = devUseWarning('ConfigProvider');
  warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
  return null;
})));
if (false) // removed by dead control flow
{}
/* harmony default export */ const config_provider_PropWarning = ( false ? 0 : () => null);
// EXTERNAL MODULE: ../node_modules/antd/es/style/index.js
var style = __webpack_require__(4029);
;// ../node_modules/antd/es/theme/util/useResetIconStyle.js



const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = (0,useToken/* default */.Ay)();
  // Generate style for icons
  return (0,es/* useStyleRegister */.IV)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
    layer: {
      name: 'antd'
    }
  }, () => [(0,style/* genIconStyle */.jz)(iconPrefixCls)]);
};
/* harmony default export */ const util_useResetIconStyle = (useResetIconStyle);
;// ../node_modules/antd/es/config-provider/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






















/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
const warnContext = (/* unused pure expression or super */ null && ( false ? 0 : /* istanbul ignore next */
null));

const configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale']));
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'input', 'pagination', 'form', 'select', 'button'];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || config_provider_context/* defaultPrefixCls */.yH;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || config_provider_context/* defaultIconPrefixCls */.pM;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some(key => key.endsWith('Color'));
}
const setGlobalConfig = props => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ('holderRender' in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
       false ? 0 : void 0;
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale,
    componentSize,
    direction,
    space,
    splitter,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    textArea,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  } = props;
  // =================================== Context ===================================
  const getPrefixCls = external_react_.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || config_provider_context/* defaultIconPrefixCls */.pM;
  const csp = customCsp || parentContext.csp;
  util_useResetIconStyle(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls('')
  });
  if (false) // removed by dead control flow
{}
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale || legacyLocale,
    direction,
    space,
    splitter,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    textArea,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  };
  if (false) // removed by dead control flow
{}
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== 'undefined') {
    // merge deprecated api
    config.button = Object.assign({
      autoInsertSpace: autoInsertSpaceInButton
    }, config.button);
  }
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0,useMemo/* default */.A)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const {
    layer
  } = external_react_.useContext(es/* StyleContext */.J);
  const memoIconContextValue = external_react_.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp,
    layer: layer ? 'antd' : undefined
  }), [iconPrefixCls, csp, layer]);
  let childNode = /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement(config_provider_PropWarning, {
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }), children);
  const validateMessages = external_react_.useMemo(() => {
    var _a, _b, _c, _d;
    return (0,set/* merge */.h)(((_a = es_locale_en_US.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/external_react_.createElement(validateMessagesContext.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale) {
    childNode = /*#__PURE__*/external_react_.createElement(es_locale, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/external_react_.createElement(Context/* default */.A.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/external_react_.createElement(SizeContext/* SizeContextProvider */.c, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/external_react_.createElement(MotionWrapper, null, childNode);
  // ================================ Dynamic theme ================================
  const memoTheme = external_react_.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token,
        components,
        cssVar
      } = _a,
      rest = __rest(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,es/* createTheme */.an)(algorithm) : default_theme/* default */.A;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(([componentName, componentToken]) => {
      const parsedToken = Object.assign({}, componentToken);
      if ('algorithm' in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
          parsedToken.theme = (0,es/* createTheme */.an)(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, seed/* default */.A), token);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar: cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/external_react_.createElement(theme_context/* DesignTokenContext */.vG.Provider, {
      value: memoTheme
    }, childNode);
  }
  // ================================== Warning ===================================
  if (memoedConfig.warning) {
    childNode = /*#__PURE__*/external_react_.createElement(_util_warning/* WarningContext */._n.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/external_react_.createElement(DisabledContext/* DisabledContextProvider */.X, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/external_react_.createElement(config_provider_context/* ConfigContext */.QO.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = external_react_.useContext(config_provider_context/* ConfigContext */.QO);
  const antLocale = external_react_.useContext(locale_context);
  return /*#__PURE__*/external_react_.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.QO;
ConfigProvider.SizeContext = SizeContext/* default */.A;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = hooks_useConfig;
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
     false ? 0 : void 0;
    return SizeContext/* default */.A;
  }
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const config_provider = (ConfigProvider);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/UnstableContext.js + 1 modules
var UnstableContext = __webpack_require__(6982);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(1607);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(8033);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
;// ../node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js
// This icon file is generated automatically.
var ExclamationCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
/* harmony default export */ const asn_ExclamationCircleFilled = (ExclamationCircleFilled);

// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(7916);
;// ../node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ExclamationCircleFilled_ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_ExclamationCircleFilled
  }));
};

/**![exclamation-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0tMzIgMjMyYzAtNC40IDMuNi04IDgtOGg0OGM0LjQgMCA4IDMuNiA4IDh2MjcyYzAgNC40LTMuNiA4LTggOGgtNDhjLTQuNCAwLTgtMy42LTgtOFYyOTZ6bTMyIDQ0MGE0OC4wMSA0OC4wMSAwIDAxMC05NiA0OC4wMSA0OC4wMSAwIDAxMCA5NnoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/external_react_.forwardRef(ExclamationCircleFilled_ExclamationCircleFilled);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_ExclamationCircleFilled = (RefIcon);
;// ../node_modules/@ant-design/icons-svg/es/asn/InfoCircleFilled.js
// This icon file is generated automatically.
var InfoCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
/* harmony default export */ const asn_InfoCircleFilled = (InfoCircleFilled);

;// ../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var InfoCircleFilled_InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_InfoCircleFilled
  }));
};

/**![info-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0zMiA2NjRjMCA0LjQtMy42IDgtOCA4aC00OGMtNC40IDAtOC0zLjYtOC04VjQ1NmMwLTQuNCAzLjYtOCA4LThoNDhjNC40IDAgOCAzLjYgOCA4djI3MnptLTMyLTM0NGE0OC4wMSA0OC4wMSAwIDAxMC05NiA0OC4wMSA0OC4wMSAwIDAxMCA5NnoiIC8+PC9zdmc+) */
var InfoCircleFilled_RefIcon = /*#__PURE__*/external_react_.forwardRef(InfoCircleFilled_InfoCircleFilled);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_InfoCircleFilled = (InfoCircleFilled_RefIcon);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(2459);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(4452);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(7346);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(9644);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(8398);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1705);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(694);
;// ../node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ const es_KeyCode = (KeyCode);
;// ../node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,objectSpread2/* default */.A)({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
;// ../node_modules/rc-notification/es/Notice.js








var Notify = /*#__PURE__*/external_react_.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    className = props.className,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 4.5 : _props$duration,
    showProgress = props.showProgress,
    _props$pauseOnHover = props.pauseOnHover,
    pauseOnHover = _props$pauseOnHover === void 0 ? true : _props$pauseOnHover,
    eventKey = props.eventKey,
    content = props.content,
    closable = props.closable,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? 'x' : _props$closeIcon,
    divProps = props.props,
    onClick = props.onClick,
    onNoticeClose = props.onNoticeClose,
    times = props.times,
    forcedHovering = props.hovering;
  var _React$useState = external_react_.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    hovering = _React$useState2[0],
    setHovering = _React$useState2[1];
  var _React$useState3 = external_react_.useState(0),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    percent = _React$useState4[0],
    setPercent = _React$useState4[1];
  var _React$useState5 = external_react_.useState(0),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    spentTime = _React$useState6[0],
    setSpentTime = _React$useState6[1];
  var mergedHovering = forcedHovering || hovering;
  var mergedShowProgress = duration > 0 && showProgress;

  // ======================== Close =========================
  var onInternalClose = function onInternalClose() {
    onNoticeClose(eventKey);
  };
  var onCloseKeyDown = function onCloseKeyDown(e) {
    if (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === es_KeyCode.ENTER) {
      onInternalClose();
    }
  };

  // ======================== Effect ========================
  external_react_.useEffect(function () {
    if (!mergedHovering && duration > 0) {
      var start = Date.now() - spentTime;
      var timeout = setTimeout(function () {
        onInternalClose();
      }, duration * 1000 - spentTime);
      return function () {
        if (pauseOnHover) {
          clearTimeout(timeout);
        }
        setSpentTime(Date.now() - start);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, mergedHovering, times]);
  external_react_.useEffect(function () {
    if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
      var start = performance.now();
      var animationFrame;
      var calculate = function calculate() {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(function (timestamp) {
          var runtime = timestamp + spentTime - start;
          var progress = Math.min(runtime / (duration * 1000), 1);
          setPercent(progress * 100);
          if (progress < 1) {
            calculate();
          }
        });
      };
      calculate();
      return function () {
        if (pauseOnHover) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, spentTime, mergedHovering, mergedShowProgress, times]);

  // ======================== Closable ========================
  var closableObj = external_react_.useMemo(function () {
    if ((0,esm_typeof/* default */.A)(closable) === 'object' && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon: closeIcon
      };
    }
    return {};
  }, [closable, closeIcon]);
  var ariaProps = pickAttrs(closableObj, true);

  // ======================== Progress ========================
  var validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent);

  // ======================== Render ========================
  var noticePrefixCls = "".concat(prefixCls, "-notice");
  return /*#__PURE__*/external_react_.createElement("div", (0,esm_extends/* default */.A)({}, divProps, {
    ref: ref,
    className: classnames_default()(noticePrefixCls, className, (0,defineProperty/* default */.A)({}, "".concat(noticePrefixCls, "-closable"), closable)),
    style: style,
    onMouseEnter: function onMouseEnter(e) {
      var _divProps$onMouseEnte;
      setHovering(true);
      divProps === null || divProps === void 0 || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      var _divProps$onMouseLeav;
      setHovering(false);
      divProps === null || divProps === void 0 || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e);
    },
    onClick: onClick
  }), /*#__PURE__*/external_react_.createElement("div", {
    className: "".concat(noticePrefixCls, "-content")
  }, content), closable && /*#__PURE__*/external_react_.createElement("a", (0,esm_extends/* default */.A)({
    tabIndex: 0,
    className: "".concat(noticePrefixCls, "-close"),
    onKeyDown: onCloseKeyDown,
    "aria-label": "Close"
  }, ariaProps, {
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onInternalClose();
    }
  }), closableObj.closeIcon), mergedShowProgress && /*#__PURE__*/external_react_.createElement("progress", {
    className: "".concat(noticePrefixCls, "-progress"),
    max: "100",
    value: validPercent
  }, validPercent + '%'));
});
/* harmony default export */ const Notice = (Notify);
;// ../node_modules/rc-notification/es/NotificationProvider.js

var NotificationContext = /*#__PURE__*/external_react_default().createContext({});
var NotificationProvider = function NotificationProvider(_ref) {
  var children = _ref.children,
    classNames = _ref.classNames;
  return /*#__PURE__*/external_react_default().createElement(NotificationContext.Provider, {
    value: {
      classNames: classNames
    }
  }, children);
};
/* harmony default export */ const es_NotificationProvider = (NotificationProvider);
;// ../node_modules/rc-notification/es/hooks/useStack.js

var DEFAULT_OFFSET = 8;
var DEFAULT_THRESHOLD = 3;
var DEFAULT_GAP = 16;
var useStack = function useStack(config) {
  var result = {
    offset: DEFAULT_OFFSET,
    threshold: DEFAULT_THRESHOLD,
    gap: DEFAULT_GAP
  };
  if (config && (0,esm_typeof/* default */.A)(config) === 'object') {
    var _config$offset, _config$threshold, _config$gap;
    result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET;
    result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD;
    result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
  }
  return [!!config, result];
};
/* harmony default export */ const hooks_useStack = (useStack);
;// ../node_modules/rc-notification/es/NoticeList.js






var _excluded = ["className", "style", "classNames", "styles"];






var NoticeList = function NoticeList(props) {
  var configList = props.configList,
    placement = props.placement,
    prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    motion = props.motion,
    onAllNoticeRemoved = props.onAllNoticeRemoved,
    onNoticeClose = props.onNoticeClose,
    stackConfig = props.stack;
  var _useContext = (0,external_react_.useContext)(NotificationContext),
    ctxCls = _useContext.classNames;
  var dictRef = (0,external_react_.useRef)({});
  var _useState = (0,external_react_.useState)(null),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    latestNotice = _useState2[0],
    setLatestNotice = _useState2[1];
  var _useState3 = (0,external_react_.useState)([]),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    hoverKeys = _useState4[0],
    setHoverKeys = _useState4[1];
  var keys = configList.map(function (config) {
    return {
      config: config,
      key: String(config.key)
    };
  });
  var _useStack = hooks_useStack(stackConfig),
    _useStack2 = (0,slicedToArray/* default */.A)(_useStack, 2),
    stack = _useStack2[0],
    _useStack2$ = _useStack2[1],
    offset = _useStack2$.offset,
    threshold = _useStack2$.threshold,
    gap = _useStack2$.gap;
  var expanded = stack && (hoverKeys.length > 0 || keys.length <= threshold);
  var placementMotion = typeof motion === 'function' ? motion(placement) : motion;

  // Clean hover key
  (0,external_react_.useEffect)(function () {
    if (stack && hoverKeys.length > 1) {
      setHoverKeys(function (prev) {
        return prev.filter(function (key) {
          return keys.some(function (_ref) {
            var dataKey = _ref.key;
            return key === dataKey;
          });
        });
      });
    }
  }, [hoverKeys, keys, stack]);

  // Force update latest notice
  (0,external_react_.useEffect)(function () {
    var _keys;
    if (stack && dictRef.current[(_keys = keys[keys.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
      var _keys2;
      setLatestNotice(dictRef.current[(_keys2 = keys[keys.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
    }
  }, [keys, stack]);
  return /*#__PURE__*/external_react_default().createElement(rc_motion_es/* CSSMotionList */.aF, (0,esm_extends/* default */.A)({
    key: placement,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.list, className, (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
    style: style,
    keys: keys,
    motionAppear: true
  }, placementMotion, {
    onAllRemoved: function onAllRemoved() {
      onAllNoticeRemoved(placement);
    }
  }), function (_ref2, nodeRef) {
    var config = _ref2.config,
      motionClassName = _ref2.className,
      motionStyle = _ref2.style,
      motionIndex = _ref2.index;
    var _ref3 = config,
      key = _ref3.key,
      times = _ref3.times;
    var strKey = String(key);
    var _ref4 = config,
      configClassName = _ref4.className,
      configStyle = _ref4.style,
      configClassNames = _ref4.classNames,
      configStyles = _ref4.styles,
      restConfig = (0,objectWithoutProperties/* default */.A)(_ref4, _excluded);
    var dataIndex = keys.findIndex(function (item) {
      return item.key === strKey;
    });

    // If dataIndex is -1, that means this notice has been removed in data, but still in dom
    // Should minus (motionIndex - 1) to get the correct index because keys.length is not the same as dom length
    var stackStyle = {};
    if (stack) {
      var index = keys.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1);
      var transformX = placement === 'top' || placement === 'bottom' ? '-50%' : '0';
      if (index > 0) {
        var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
        stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetHeight;

        // Transform
        var verticalOffset = 0;
        for (var i = 0; i < index; i++) {
          var _dictRef$current$keys;
          verticalOffset += ((_dictRef$current$keys = dictRef.current[keys[keys.length - 1 - i].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
        }
        var transformY = (expanded ? verticalOffset : index * offset) * (placement.startsWith('top') ? 1 : -1);
        var scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetWidth) - offset * 2 * (index < 3 ? index : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
        stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
      } else {
        stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
      }
    }
    return /*#__PURE__*/external_react_default().createElement("div", {
      ref: nodeRef,
      className: classnames_default()("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames === null || configClassNames === void 0 ? void 0 : configClassNames.wrapper),
      style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, motionStyle), stackStyle), configStyles === null || configStyles === void 0 ? void 0 : configStyles.wrapper),
      onMouseEnter: function onMouseEnter() {
        return setHoverKeys(function (prev) {
          return prev.includes(strKey) ? prev : [].concat((0,toConsumableArray/* default */.A)(prev), [strKey]);
        });
      },
      onMouseLeave: function onMouseLeave() {
        return setHoverKeys(function (prev) {
          return prev.filter(function (k) {
            return k !== strKey;
          });
        });
      }
    }, /*#__PURE__*/external_react_default().createElement(Notice, (0,esm_extends/* default */.A)({}, restConfig, {
      ref: function ref(node) {
        if (dataIndex > -1) {
          dictRef.current[strKey] = node;
        } else {
          delete dictRef.current[strKey];
        }
      },
      prefixCls: prefixCls,
      classNames: configClassNames,
      styles: configStyles,
      className: classnames_default()(configClassName, ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.notice),
      style: configStyle,
      times: times,
      key: key,
      eventKey: key,
      onNoticeClose: onNoticeClose,
      hovering: stack && hoverKeys.length > 0
    })));
  });
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_NoticeList = (NoticeList);
;// ../node_modules/rc-notification/es/Notifications.js






// ant-notification ant-notification-topRight
var Notifications = /*#__PURE__*/external_react_.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-notification' : _props$prefixCls,
    container = props.container,
    motion = props.motion,
    maxCount = props.maxCount,
    className = props.className,
    style = props.style,
    onAllRemoved = props.onAllRemoved,
    stack = props.stack,
    renderNotifications = props.renderNotifications;
  var _React$useState = external_react_.useState([]),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    configList = _React$useState2[0],
    setConfigList = _React$useState2[1];

  // ======================== Close =========================
  var onNoticeClose = function onNoticeClose(key) {
    var _config$onClose;
    // Trigger close event
    var config = configList.find(function (item) {
      return item.key === key;
    });
    config === null || config === void 0 || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
    setConfigList(function (list) {
      return list.filter(function (item) {
        return item.key !== key;
      });
    });
  };

  // ========================= Refs =========================
  external_react_.useImperativeHandle(ref, function () {
    return {
      open: function open(config) {
        setConfigList(function (list) {
          var clone = (0,toConsumableArray/* default */.A)(list);

          // Replace if exist
          var index = clone.findIndex(function (item) {
            return item.key === config.key;
          });
          var innerConfig = (0,objectSpread2/* default */.A)({}, config);
          if (index >= 0) {
            var _list$index;
            innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
            clone[index] = innerConfig;
          } else {
            innerConfig.times = 0;
            clone.push(innerConfig);
          }
          if (maxCount > 0 && clone.length > maxCount) {
            clone = clone.slice(-maxCount);
          }
          return clone;
        });
      },
      close: function close(key) {
        onNoticeClose(key);
      },
      destroy: function destroy() {
        setConfigList([]);
      }
    };
  });

  // ====================== Placements ======================
  var _React$useState3 = external_react_.useState({}),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    placements = _React$useState4[0],
    setPlacements = _React$useState4[1];
  external_react_.useEffect(function () {
    var nextPlacements = {};
    configList.forEach(function (config) {
      var _config$placement = config.placement,
        placement = _config$placement === void 0 ? 'topRight' : _config$placement;
      if (placement) {
        nextPlacements[placement] = nextPlacements[placement] || [];
        nextPlacements[placement].push(config);
      }
    });

    // Fill exist placements to avoid empty list causing remove without motion
    Object.keys(placements).forEach(function (placement) {
      nextPlacements[placement] = nextPlacements[placement] || [];
    });
    setPlacements(nextPlacements);
  }, [configList]);

  // Clean up container if all notices fade out
  var onAllNoticeRemoved = function onAllNoticeRemoved(placement) {
    setPlacements(function (originPlacements) {
      var clone = (0,objectSpread2/* default */.A)({}, originPlacements);
      var list = clone[placement] || [];
      if (!list.length) {
        delete clone[placement];
      }
      return clone;
    });
  };

  // Effect tell that placements is empty now
  var emptyRef = external_react_.useRef(false);
  external_react_.useEffect(function () {
    if (Object.keys(placements).length > 0) {
      emptyRef.current = true;
    } else if (emptyRef.current) {
      // Trigger only when from exist to empty
      onAllRemoved === null || onAllRemoved === void 0 || onAllRemoved();
      emptyRef.current = false;
    }
  }, [placements]);
  // ======================== Render ========================
  if (!container) {
    return null;
  }
  var placementList = Object.keys(placements);
  return /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, placementList.map(function (placement) {
    var placementConfigList = placements[placement];
    var list = /*#__PURE__*/external_react_.createElement(es_NoticeList, {
      key: placement,
      configList: placementConfigList,
      placement: placement,
      prefixCls: prefixCls,
      className: className === null || className === void 0 ? void 0 : className(placement),
      style: style === null || style === void 0 ? void 0 : style(placement),
      motion: motion,
      onNoticeClose: onNoticeClose,
      onAllNoticeRemoved: onAllNoticeRemoved,
      stack: stack
    });
    return renderNotifications ? renderNotifications(list, {
      prefixCls: prefixCls,
      key: placement
    }) : list;
  })), container);
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Notifications = (Notifications);
// EXTERNAL MODULE: ../node_modules/rc-util/es/index.js
var rc_util_es = __webpack_require__(3690);
;// ../node_modules/rc-notification/es/hooks/useNotification.js



var useNotification_excluded = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"];



var defaultGetContainer = function defaultGetContainer() {
  return document.body;
};
var uniqueKey = 0;
function mergeConfig() {
  var clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        if (val !== undefined) {
          clone[key] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification() {
  var rootConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _rootConfig$getContai = rootConfig.getContainer,
    getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai,
    motion = rootConfig.motion,
    prefixCls = rootConfig.prefixCls,
    maxCount = rootConfig.maxCount,
    className = rootConfig.className,
    style = rootConfig.style,
    onAllRemoved = rootConfig.onAllRemoved,
    stack = rootConfig.stack,
    renderNotifications = rootConfig.renderNotifications,
    shareConfig = (0,objectWithoutProperties/* default */.A)(rootConfig, useNotification_excluded);
  var _React$useState = external_react_.useState(),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    container = _React$useState2[0],
    setContainer = _React$useState2[1];
  var notificationsRef = external_react_.useRef();
  var contextHolder = /*#__PURE__*/external_react_.createElement(es_Notifications, {
    container: container,
    ref: notificationsRef,
    prefixCls: prefixCls,
    motion: motion,
    maxCount: maxCount,
    className: className,
    style: style,
    onAllRemoved: onAllRemoved,
    stack: stack,
    renderNotifications: renderNotifications
  });
  var _React$useState3 = external_react_.useState([]),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    taskQueue = _React$useState4[0],
    setTaskQueue = _React$useState4[1];
  var open = (0,rc_util_es/* useEvent */._q)(function (config) {
    var mergedConfig = mergeConfig(shareConfig, config);
    if (mergedConfig.key === null || mergedConfig.key === undefined) {
      mergedConfig.key = "rc-notification-".concat(uniqueKey);
      uniqueKey += 1;
    }
    setTaskQueue(function (queue) {
      return [].concat((0,toConsumableArray/* default */.A)(queue), [{
        type: 'open',
        config: mergedConfig
      }]);
    });
  });

  // ========================= Refs =========================
  var api = external_react_.useMemo(function () {
    return {
      open: open,
      close: function close(key) {
        setTaskQueue(function (queue) {
          return [].concat((0,toConsumableArray/* default */.A)(queue), [{
            type: 'close',
            key: key
          }]);
        });
      },
      destroy: function destroy() {
        setTaskQueue(function (queue) {
          return [].concat((0,toConsumableArray/* default */.A)(queue), [{
            type: 'destroy'
          }]);
        });
      }
    };
  }, []);

  // ======================= Container ======================
  // React 18 should all in effect that we will check container in each render
  // Which means getContainer should be stable.
  external_react_.useEffect(function () {
    setContainer(getContainer());
  });

  // ======================== Effect ========================
  external_react_.useEffect(function () {
    // Flush task when node ready
    if (notificationsRef.current && taskQueue.length) {
      taskQueue.forEach(function (task) {
        switch (task.type) {
          case 'open':
            notificationsRef.current.open(task.config);
            break;
          case 'close':
            notificationsRef.current.close(task.key);
            break;
          case 'destroy':
            notificationsRef.current.destroy();
            break;
        }
      });

      // https://github.com/ant-design/ant-design/issues/52590
      // React `startTransition` will run once `useEffect` but many times `setState`,
      // So `setTaskQueue` with filtered array will cause infinite loop.
      // We cache the first match queue instead.
      var oriTaskQueue;
      var tgtTaskQueue;

      // React 17 will mix order of effect & setState in async
      // - open: setState[0]
      // - effect[0]
      // - open: setState[1]
      // - effect setState([]) * here will clean up [0, 1] in React 17
      setTaskQueue(function (oriQueue) {
        if (oriTaskQueue !== oriQueue || !tgtTaskQueue) {
          oriTaskQueue = oriQueue;
          tgtTaskQueue = oriQueue.filter(function (task) {
            return !taskQueue.includes(task);
          });
        }
        return tgtTaskQueue;
      });
    }
  }, [taskQueue]);

  // ======================== Return ========================
  return [api, contextHolder];
}
;// ../node_modules/rc-notification/es/index.js




;// ../node_modules/antd/es/config-provider/hooks/useCSSVarCls.js

/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */
const useCSSVarCls = prefixCls => {
  const [,,,, cssVar] = (0,useToken/* default */.Ay)();
  return cssVar ? `${prefixCls}-css-var` : '';
};
/* harmony default export */ const hooks_useCSSVarCls = (useCSSVarCls);
// EXTERNAL MODULE: ../node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(8735);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(2506);
// EXTERNAL MODULE: ../node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(3889);
;// ../node_modules/antd/es/message/style/index.js




const genMessageStyle = token => {
  const {
    componentCls,
    iconCls,
    boxShadow,
    colorText,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    contentPadding,
    contentBg
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const messageMoveIn = new es/* Keyframes */.Mo('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0
    },
    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1
    }
  });
  const messageMoveOut = new es/* Keyframes */.Mo('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  const noticeStyle = {
    padding: paddingXS,
    textAlign: 'center',
    [`${componentCls}-custom-content`]: {
      display: 'flex',
      alignItems: 'center'
    },
    [`${componentCls}-custom-content > ${iconCls}`]: {
      marginInlineEnd: marginXS,
      // affected by ltr or rtl
      fontSize: fontSizeLG
    },
    [`${noticeCls}-content`]: {
      display: 'inline-block',
      padding: contentPadding,
      background: contentBg,
      borderRadius: borderRadiusLG,
      boxShadow,
      pointerEvents: 'all'
    },
    [`${componentCls}-success > ${iconCls}`]: {
      color: colorSuccess
    },
    [`${componentCls}-error > ${iconCls}`]: {
      color: colorError
    },
    [`${componentCls}-warning > ${iconCls}`]: {
      color: colorWarning
    },
    [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
      color: colorInfo
    }
  };
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.dF)(token)), {
      color: colorText,
      position: 'fixed',
      top: marginXS,
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup,
      [`${componentCls}-move-up`]: {
        animationFillMode: 'forwards'
      },
      [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
        animationName: messageMoveIn,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-move-up-leave`]: {
        animationName: messageMoveOut,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
        animationPlayState: 'running'
      },
      '&-rtl': {
        direction: 'rtl',
        span: {
          direction: 'rtl'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [componentCls]: {
      [`${noticeCls}-wrapper`]: Object.assign({}, noticeStyle)
    }
  },
  // ============================= Pure =============================
  {
    [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
      padding: 0,
      textAlign: 'start'
    })
  }];
};
const prepareComponentToken = token => ({
  zIndexPopup: token.zIndexPopupBase + useZIndex/* CONTAINER_MAX_OFFSET */.jH + 10,
  contentBg: token.colorBgElevated,
  contentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
});
// ============================== Export ==============================
/* harmony default export */ const message_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Message', token => {
  // Gen-style functions here
  const combinedToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    height: 150
  });
  return [genMessageStyle(combinedToken)];
}, prepareComponentToken));
;// ../node_modules/antd/es/message/PurePanel.js
"use client";

var PurePanel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











const TypeIcon = {
  info: /*#__PURE__*/external_react_.createElement(icons_InfoCircleFilled, null),
  success: /*#__PURE__*/external_react_.createElement(CheckCircleFilled/* default */.A, null),
  error: /*#__PURE__*/external_react_.createElement(CloseCircleFilled/* default */.A, null),
  warning: /*#__PURE__*/external_react_.createElement(icons_ExclamationCircleFilled, null),
  loading: /*#__PURE__*/external_react_.createElement(LoadingOutlined/* default */.A, null)
};
const PureContent = ({
  prefixCls,
  type,
  icon,
  children
}) => (/*#__PURE__*/external_react_.createElement("div", {
  className: classnames_default()(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
}, icon || TypeIcon[type], /*#__PURE__*/external_react_.createElement("span", null, children)));
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: staticPrefixCls,
      className,
      type,
      icon,
      content
    } = props,
    restProps = PurePanel_rest(props, ["prefixCls", "className", "type", "icon", "content"]);
  const {
    getPrefixCls
  } = external_react_.useContext(config_provider_context/* ConfigContext */.QO);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const rootCls = hooks_useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = message_style(prefixCls, rootCls);
  return wrapCSSVar(/*#__PURE__*/external_react_.createElement(Notice, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    className: classnames_default()(className, hashId, `${prefixCls}-notice-pure-panel`, cssVarCls, rootCls),
    eventKey: "pure",
    duration: null,
    content: /*#__PURE__*/external_react_.createElement(PureContent, {
      prefixCls: prefixCls,
      type: type,
      icon: icon
    }, content)
  })));
};
/* harmony default export */ const message_PurePanel = (PurePanel);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(7560);
;// ../node_modules/antd/es/message/util.js
function getMotion(prefixCls, transitionName) {
  return {
    motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
  };
}
/** Wrap message open with promise like function */
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
;// ../node_modules/antd/es/message/useMessage.js
"use client";

var useMessage_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const useMessage_DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const Wrapper = ({
  children,
  prefixCls
}) => {
  const rootCls = hooks_useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = message_style(prefixCls, rootCls);
  return wrapCSSVar(/*#__PURE__*/external_react_.createElement(es_NotificationProvider, {
    classNames: {
      list: classnames_default()(hashId, cssVarCls, rootCls)
    }
  }, children));
};
const renderNotifications = (node, {
  prefixCls,
  key
}) => (/*#__PURE__*/external_react_.createElement(Wrapper, {
  prefixCls: prefixCls,
  key: key
}, node));
const Holder = /*#__PURE__*/external_react_.forwardRef((props, ref) => {
  const {
    top,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    duration = DEFAULT_DURATION,
    rtl,
    transitionName,
    onAllRemoved
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    message,
    direction
  } = external_react_.useContext(config_provider_context/* ConfigContext */.QO);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  // =============================== Style ===============================
  const getStyle = () => ({
    left: '50%',
    transform: 'translateX(-50%)',
    top: top !== null && top !== void 0 ? top : useMessage_DEFAULT_OFFSET
  });
  const getClassName = () => classnames_default()({
    [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'
  });
  // ============================== Motion ===============================
  const getNotificationMotion = () => getMotion(prefixCls, transitionName);
  // ============================ Close Icon =============================
  const mergedCloseIcon = /*#__PURE__*/external_react_.createElement("span", {
    className: `${prefixCls}-close-x`
  }, /*#__PURE__*/external_react_.createElement(CloseOutlined/* default */.A, {
    className: `${prefixCls}-close-icon`
  }));
  // ============================== Origin ===============================
  const [api, holder] = useNotification({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: false,
    closeIcon: mergedCloseIcon,
    duration,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved,
    renderNotifications
  });
  // ================================ Ref ================================
  external_react_.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    message
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = external_react_.useRef(null);
  const warning = (0,_util_warning/* devUseWarning */.rJ)('Message');
  // ================================ API ================================
  const wrapAPI = external_react_.useMemo(() => {
    // Wrap with notification content
    // >>> close
    const close = key => {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    // >>> Open
    const open = config => {
      if (!holderRef.current) {
         false ? 0 : void 0;
        const fakeResult = () => {};
        fakeResult.then = () => {};
        return fakeResult;
      }
      const {
        open: originOpen,
        prefixCls,
        message
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          content,
          icon,
          type,
          key,
          className,
          style,
          onClose
        } = config,
        restConfig = useMessage_rest(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let mergedKey = key;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }
      return wrapPromiseFn(resolve => {
        originOpen(Object.assign(Object.assign({}, restConfig), {
          key: mergedKey,
          content: (/*#__PURE__*/external_react_.createElement(PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content)),
          placement: 'top',
          className: classnames_default()(type && `${noticePrefixCls}-${type}`, className, message === null || message === void 0 ? void 0 : message.className),
          style: Object.assign(Object.assign({}, message === null || message === void 0 ? void 0 : message.style), style),
          onClose: () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            resolve();
          }
        }));
        // Return close function
        return () => {
          close(mergedKey);
        };
      });
    };
    // >>> destroy
    const destroy = key => {
      var _a;
      if (key !== undefined) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(type => {
      const typeOpen = (jointContent, duration, onClose) => {
        let config;
        if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        // Params
        let mergedDuration;
        let mergedOnClose;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        const mergedConfig = Object.assign(Object.assign({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type
        });
        return open(mergedConfig);
      };
      clone[type] = typeOpen;
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/external_react_.createElement(Holder, Object.assign({
    key: "message-holder"
  }, messageConfig, {
    ref: holderRef
  }))];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}
;// ../node_modules/antd/es/message/index.js
"use client";









let message = null;
let act = callback => callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
  const {
    getContainer,
    duration,
    rtl,
    maxCount,
    top
  } = defaultGlobalConfig;
  const mergedContainer = (getContainer === null || getContainer === void 0 ? void 0 : getContainer()) || document.body;
  return {
    getContainer: () => mergedContainer,
    duration,
    rtl,
    maxCount,
    top
  };
}
const GlobalHolder = /*#__PURE__*/external_react_default().forwardRef((props, ref) => {
  const {
    messageConfig,
    sync
  } = props;
  const {
    getPrefixCls
  } = (0,external_react_.useContext)(config_provider_context/* ConfigContext */.QO);
  const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls('message');
  const appConfig = (0,external_react_.useContext)(AppConfigContext);
  const [api, holder] = useInternalMessage(Object.assign(Object.assign(Object.assign({}, messageConfig), {
    prefixCls
  }), appConfig.message));
  external_react_default().useImperativeHandle(ref, () => {
    const instance = Object.assign({}, api);
    Object.keys(instance).forEach(method => {
      instance[method] = (...args) => {
        sync();
        return api[method].apply(api, args);
      };
    });
    return {
      instance,
      sync
    };
  });
  return holder;
});
const GlobalHolderWrapper = /*#__PURE__*/external_react_default().forwardRef((_, ref) => {
  const [messageConfig, setMessageConfig] = external_react_default().useState(getGlobalContext);
  const sync = () => {
    setMessageConfig(getGlobalContext);
  };
  external_react_default().useEffect(sync, []);
  const global = globalConfig();
  const rootPrefixCls = global.getRootPrefixCls();
  const rootIconPrefixCls = global.getIconPrefixCls();
  const theme = global.getTheme();
  const dom = /*#__PURE__*/external_react_default().createElement(GlobalHolder, {
    ref: ref,
    sync: sync,
    messageConfig: messageConfig
  });
  return /*#__PURE__*/external_react_default().createElement(config_provider, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls,
    theme: theme
  }, global.holderRender ? global.holderRender(dom) : dom);
});
function flushNotice() {
  if (!message) {
    const holderFragment = document.createDocumentFragment();
    const newMessage = {
      fragment: holderFragment
    };
    message = newMessage;
    // Delay render to avoid sync issue
    act(() => {
      const reactRender = (0,UnstableContext/* unstableSetRender */.L)();
      reactRender(/*#__PURE__*/external_react_default().createElement(GlobalHolderWrapper, {
        ref: node => {
          const {
            instance,
            sync
          } = node || {};
          // React 18 test env will throw if call immediately in ref
          Promise.resolve().then(() => {
            if (!newMessage.instance && instance) {
              newMessage.instance = instance;
              newMessage.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!message.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(task => {
    const {
      type,
      skipped
    } = task;
    // Only `skipped` when user call notice but cancel it immediately
    // and instance not ready
    if (!skipped) {
      switch (type) {
        case 'open':
          {
            act(() => {
              const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
            break;
          }
        case 'destroy':
          act(() => {
            message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
          });
          break;
        // Other type open
        default:
          {
            act(() => {
              var _message$instance;
              const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0,toConsumableArray/* default */.A)(task.args));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
          }
      }
    }
  });
  // Clean up
  taskQueue = [];
}
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setMessageGlobalConfig(config) {
  defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(() => {
    var _a;
    (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
  });
}
function message_open(config) {
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type: 'open',
      config,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function typeOpen(type, args) {
  const global = globalConfig();
  if (false) // removed by dead control flow
{}
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type,
      args,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
const destroy = key => {
  taskQueue.push({
    type: 'destroy',
    key
  });
  flushNotice();
};
const methods = ['success', 'info', 'warning', 'error', 'loading'];
const baseStaticMethods = {
  open: message_open,
  destroy,
  config: setMessageGlobalConfig,
  useMessage: useMessage,
  _InternalPanelDoNotUseOrYouWillBeFired: message_PurePanel
};
const staticMethods = baseStaticMethods;
methods.forEach(type => {
  staticMethods[type] = (...args) => typeOpen(type, args);
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = () => {};
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actWrapper = (/* unused pure expression or super */ null && (noop));
if (false) // removed by dead control flow
{}
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actDestroy = (/* unused pure expression or super */ null && (noop));
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_message = (staticMethods);

/***/ }),

/***/ 5041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ omit)
/* harmony export */ });
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ }),

/***/ 5092:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_sortBy)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/_baseFlatten.js + 1 modules
var _baseFlatten = __webpack_require__(1573);
// EXTERNAL MODULE: ../node_modules/lodash-es/_baseOrderBy.js + 4 modules
var _baseOrderBy = __webpack_require__(3627);
// EXTERNAL MODULE: ../node_modules/lodash-es/identity.js
var identity = __webpack_require__(3910);
;// ../node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const _apply = (apply);

;// ../node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ const _overRest = (overRest);

;// ../node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const lodash_es_constant = (constant);

// EXTERNAL MODULE: ../node_modules/lodash-es/_defineProperty.js
var _defineProperty = __webpack_require__(6977);
;// ../node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty/* default */.A ? identity/* default */.A : function(func, string) {
  return (0,_defineProperty/* default */.A)(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ const _baseSetToString = (baseSetToString);

;// ../node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const _shortOut = (shortOut);

;// ../node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ const _setToString = (setToString);

;// ../node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity/* default */.A), func + '');
}

/* harmony default export */ const _baseRest = (baseRest);

// EXTERNAL MODULE: ../node_modules/lodash-es/_isIterateeCall.js
var _isIterateeCall = __webpack_require__(174);
;// ../node_modules/lodash-es/sortBy.js





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = _baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && (0,_isIterateeCall/* default */.A)(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && (0,_isIterateeCall/* default */.A)(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return (0,_baseOrderBy/* default */.A)(collection, (0,_baseFlatten/* default */.A)(iteratees, 1), []);
});

/* harmony default export */ const lodash_es_sortBy = (sortBy);


/***/ }),

/***/ 5155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   X: () => (/* binding */ DisabledContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";


const DisabledContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const DisabledContextProvider = ({
  children,
  disabled
}) => {
  const originDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisabledContext);

/***/ }),

/***/ 5380:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 5414:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7148),
    isObjectLike = __webpack_require__(2934);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 5494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_useRequest)
});

// UNUSED EXPORTS: clearCache

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(4629);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
;// ../node_modules/ahooks/es/createUpdateEffect/index.js

var createUpdateEffect = function (hook) {
  return function (effect, deps) {
    var isMounted = (0,external_react_.useRef)(false);
    // for react-refresh
    hook(function () {
      return function () {
        isMounted.current = false;
      };
    }, []);
    hook(function () {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };
};
/* harmony default export */ const es_createUpdateEffect = ((/* unused pure expression or super */ null && (createUpdateEffect)));
;// ../node_modules/ahooks/es/useUpdateEffect/index.js


/* harmony default export */ const useUpdateEffect = (createUpdateEffect(external_react_.useEffect));
;// ../node_modules/ahooks/es/useRequest/src/plugins/useAutoRunPlugin.js



// support refreshDeps & ready
var useAutoRunPlugin = function (fetchInstance, _a) {
  var manual = _a.manual,
    _b = _a.ready,
    ready = _b === void 0 ? true : _b,
    _c = _a.defaultParams,
    defaultParams = _c === void 0 ? [] : _c,
    _d = _a.refreshDeps,
    refreshDeps = _d === void 0 ? [] : _d,
    refreshDepsAction = _a.refreshDepsAction;
  var hasAutoRun = (0,external_react_.useRef)(false);
  hasAutoRun.current = false;
  useUpdateEffect(function () {
    if (!manual && ready) {
      hasAutoRun.current = true;
      fetchInstance.run.apply(fetchInstance, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(defaultParams), false));
    }
  }, [ready]);
  useUpdateEffect(function () {
    if (hasAutoRun.current) {
      return;
    }
    if (!manual) {
      hasAutoRun.current = true;
      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        fetchInstance.refresh();
      }
    }
  }, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(refreshDeps), false));
  return {
    onBefore: function () {
      if (!ready) {
        return {
          stopNow: true
        };
      }
    }
  };
};
useAutoRunPlugin.onInit = function (_a) {
  var _b = _a.ready,
    ready = _b === void 0 ? true : _b,
    manual = _a.manual;
  return {
    loading: !manual && ready
  };
};
/* harmony default export */ const plugins_useAutoRunPlugin = (useAutoRunPlugin);
;// ../node_modules/ahooks/es/utils/depsAreSame.js
function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) {
    return true;
  }
  for (var i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const utils_depsAreSame = (depsAreSame);
;// ../node_modules/ahooks/es/useCreation/index.js


var useCreation = function (factory, deps) {
  var current = (0,external_react_.useRef)({
    deps: deps,
    obj: undefined,
    initialized: false
  }).current;
  if (current.initialized === false || !utils_depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  return current.obj;
};
/* harmony default export */ const es_useCreation = (useCreation);
;// ../node_modules/ahooks/es/useLatest/index.js

function useLatest(value) {
  var ref = (0,external_react_.useRef)(value);
  ref.current = value;
  return ref;
}
/* harmony default export */ const es_useLatest = (useLatest);
;// ../node_modules/ahooks/es/utils/index.js
var isObject = function (value) {
  return value !== null && typeof value === 'object';
};
var isFunction = function (value) {
  return typeof value === 'function';
};
var isString = function (value) {
  return typeof value === 'string';
};
var isBoolean = function (value) {
  return typeof value === 'boolean';
};
var isNumber = function (value) {
  return typeof value === 'number';
};
var isUndef = function (value) {
  return typeof value === 'undefined';
};
;// ../node_modules/ahooks/es/utils/isDev.js
var isDev =  false || "production" === 'test';
/* harmony default export */ const utils_isDev = (isDev);
;// ../node_modules/ahooks/es/useUnmount/index.js




var useUnmount = function (fn) {
  if (utils_isDev) {
    if (!isFunction(fn)) {
      console.error("useUnmount expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = es_useLatest(fn);
  (0,external_react_.useEffect)(function () {
    return function () {
      fnRef.current();
    };
  }, []);
};
/* harmony default export */ const es_useUnmount = (useUnmount);
;// ../node_modules/ahooks/es/useRequest/src/utils/cache.js

var cache = new Map();
var setCache = function (key, cacheTime, cachedData) {
  var currentCache = cache.get(key);
  if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) {
    clearTimeout(currentCache.timer);
  }
  var timer = undefined;
  if (cacheTime > -1) {
    // if cache out, clear it
    timer = setTimeout(function () {
      cache.delete(key);
    }, cacheTime);
  }
  cache.set(key, (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, cachedData), {
    timer: timer
  }));
};
var getCache = function (key) {
  return cache.get(key);
};
var clearCache = function (key) {
  if (key) {
    var cacheKeys = Array.isArray(key) ? key : [key];
    cacheKeys.forEach(function (cacheKey) {
      return cache.delete(cacheKey);
    });
  } else {
    cache.clear();
  }
};

;// ../node_modules/ahooks/es/useRequest/src/utils/cachePromise.js
var cachePromise = new Map();
var getCachePromise = function (cacheKey) {
  return cachePromise.get(cacheKey);
};
var setCachePromise = function (cacheKey, promise) {
  // Should cache the same promise, cannot be promise.finally
  // Because the promise.finally will change the reference of the promise
  cachePromise.set(cacheKey, promise);
  // no use promise.finally for compatibility
  promise.then(function (res) {
    cachePromise.delete(cacheKey);
    return res;
  }).catch(function () {
    cachePromise.delete(cacheKey);
  });
};

;// ../node_modules/ahooks/es/useRequest/src/utils/cacheSubscribe.js
var listeners = {};
var trigger = function (key, data) {
  if (listeners[key]) {
    listeners[key].forEach(function (item) {
      return item(data);
    });
  }
};
var subscribe = function (key, listener) {
  if (!listeners[key]) {
    listeners[key] = [];
  }
  listeners[key].push(listener);
  return function unsubscribe() {
    var index = listeners[key].indexOf(listener);
    listeners[key].splice(index, 1);
  };
};

;// ../node_modules/ahooks/es/useRequest/src/plugins/useCachePlugin.js







var useCachePlugin = function (fetchInstance, _a) {
  var cacheKey = _a.cacheKey,
    _b = _a.cacheTime,
    cacheTime = _b === void 0 ? 5 * 60 * 1000 : _b,
    _c = _a.staleTime,
    staleTime = _c === void 0 ? 0 : _c,
    customSetCache = _a.setCache,
    customGetCache = _a.getCache;
  var unSubscribeRef = (0,external_react_.useRef)(undefined);
  var currentPromiseRef = (0,external_react_.useRef)(undefined);
  var _setCache = function (key, cachedData) {
    if (customSetCache) {
      customSetCache(cachedData);
    } else {
      setCache(key, cacheTime, cachedData);
    }
    trigger(key, cachedData.data);
  };
  var _getCache = function (key, params) {
    if (params === void 0) {
      params = [];
    }
    if (customGetCache) {
      return customGetCache(params);
    }
    return getCache(key);
  };
  es_useCreation(function () {
    if (!cacheKey) {
      return;
    }
    // get data from cache when init
    var cacheData = _getCache(cacheKey);
    if (cacheData && Object.hasOwnProperty.call(cacheData, 'data')) {
      fetchInstance.state.data = cacheData.data;
      fetchInstance.state.params = cacheData.params;
      if (staleTime === -1 || Date.now() - cacheData.time <= staleTime) {
        fetchInstance.state.loading = false;
      }
    }
    // subscribe same cachekey update, trigger update
    unSubscribeRef.current = subscribe(cacheKey, function (data) {
      fetchInstance.setState({
        data: data
      });
    });
  }, []);
  es_useUnmount(function () {
    var _a;
    (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
  });
  if (!cacheKey) {
    return {};
  }
  return {
    onBefore: function (params) {
      var cacheData = _getCache(cacheKey, params);
      if (!cacheData || !Object.hasOwnProperty.call(cacheData, 'data')) {
        return {};
      }
      // If the data is fresh, stop request
      if (staleTime === -1 || Date.now() - cacheData.time <= staleTime) {
        return {
          loading: false,
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
          error: undefined,
          returnNow: true
        };
      } else {
        // If the data is stale, return data, and request continue
        return {
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
          error: undefined
        };
      }
    },
    onRequest: function (service, args) {
      var servicePromise = getCachePromise(cacheKey);
      // If has servicePromise, and is not trigger by self, then use it
      if (servicePromise && servicePromise !== currentPromiseRef.current) {
        return {
          servicePromise: servicePromise
        };
      }
      servicePromise = service.apply(void 0, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(args), false));
      currentPromiseRef.current = servicePromise;
      setCachePromise(cacheKey, servicePromise);
      return {
        servicePromise: servicePromise
      };
    },
    onSuccess: function (data, params) {
      var _a;
      if (cacheKey) {
        // cancel subscribe, avoid trgger self
        (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
        _setCache(cacheKey, {
          data: data,
          params: params,
          time: Date.now()
        });
        // resubscribe
        unSubscribeRef.current = subscribe(cacheKey, function (d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    },
    onMutate: function (data) {
      var _a;
      if (cacheKey) {
        // cancel subscribe, avoid trigger self
        (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
        _setCache(cacheKey, {
          data: data,
          params: fetchInstance.state.params,
          time: Date.now()
        });
        // resubscribe
        unSubscribeRef.current = subscribe(cacheKey, function (d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    }
  };
};
/* harmony default export */ const plugins_useCachePlugin = (useCachePlugin);
// EXTERNAL MODULE: ../node_modules/lodash/debounce.js
var debounce = __webpack_require__(6177);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// ../node_modules/ahooks/es/useRequest/src/plugins/useDebouncePlugin.js



var useDebouncePlugin = function (fetchInstance, _a) {
  var debounceWait = _a.debounceWait,
    debounceLeading = _a.debounceLeading,
    debounceTrailing = _a.debounceTrailing,
    debounceMaxWait = _a.debounceMaxWait;
  var debouncedRef = (0,external_react_.useRef)(undefined);
  var options = (0,external_react_.useMemo)(function () {
    var ret = {};
    if (debounceLeading !== undefined) {
      ret.leading = debounceLeading;
    }
    if (debounceTrailing !== undefined) {
      ret.trailing = debounceTrailing;
    }
    if (debounceMaxWait !== undefined) {
      ret.maxWait = debounceMaxWait;
    }
    return ret;
  }, [debounceLeading, debounceTrailing, debounceMaxWait]);
  (0,external_react_.useEffect)(function () {
    if (debounceWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
      debouncedRef.current = debounce_default()(function (callback) {
        callback();
      }, debounceWait, options);
      // debounce runAsync should be promise
      // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398
      fetchInstance.runAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
          var _a;
          (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.call(debouncedRef, function () {
            _originRunAsync_1.apply(void 0, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(args), false)).then(resolve).catch(reject);
          });
        });
      };
      return function () {
        var _a;
        (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
        fetchInstance.runAsync = _originRunAsync_1;
      };
    }
  }, [debounceWait, options]);
  if (!debounceWait) {
    return {};
  }
  return {
    onCancel: function () {
      var _a;
      (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
    }
  };
};
/* harmony default export */ const plugins_useDebouncePlugin = (useDebouncePlugin);
;// ../node_modules/ahooks/es/useRequest/src/plugins/useLoadingDelayPlugin.js

var useLoadingDelayPlugin = function (fetchInstance, _a) {
  var loadingDelay = _a.loadingDelay,
    ready = _a.ready;
  var timerRef = (0,external_react_.useRef)(undefined);
  if (!loadingDelay) {
    return {};
  }
  var cancelTimeout = function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
  return {
    onBefore: function () {
      cancelTimeout();
      // Two cases:
      // 1. ready === undefined
      // 2. ready === true
      if (ready !== false) {
        timerRef.current = setTimeout(function () {
          fetchInstance.setState({
            loading: true
          });
        }, loadingDelay);
      }
      return {
        loading: false
      };
    },
    onFinally: function () {
      cancelTimeout();
    },
    onCancel: function () {
      cancelTimeout();
    }
  };
};
/* harmony default export */ const plugins_useLoadingDelayPlugin = (useLoadingDelayPlugin);
;// ../node_modules/ahooks/es/utils/isBrowser.js
var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/* harmony default export */ const utils_isBrowser = (isBrowser);
;// ../node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js

function isDocumentVisible() {
  if (utils_isBrowser) {
    return document.visibilityState !== 'hidden';
  }
  return true;
}
;// ../node_modules/ahooks/es/useRequest/src/utils/subscribeReVisible.js


var subscribeReVisible_listeners = [];
function subscribeReVisible_subscribe(listener) {
  subscribeReVisible_listeners.push(listener);
  return function unsubscribe() {
    var index = subscribeReVisible_listeners.indexOf(listener);
    subscribeReVisible_listeners.splice(index, 1);
  };
}
if (utils_isBrowser) {
  var revalidate = function () {
    if (!isDocumentVisible()) return;
    for (var i = 0; i < subscribeReVisible_listeners.length; i++) {
      var listener = subscribeReVisible_listeners[i];
      listener();
    }
  };
  window.addEventListener('visibilitychange', revalidate, false);
}
/* harmony default export */ const subscribeReVisible = (subscribeReVisible_subscribe);
;// ../node_modules/ahooks/es/useRequest/src/plugins/usePollingPlugin.js




var usePollingPlugin = function (fetchInstance, _a) {
  var pollingInterval = _a.pollingInterval,
    _b = _a.pollingWhenHidden,
    pollingWhenHidden = _b === void 0 ? true : _b,
    _c = _a.pollingErrorRetryCount,
    pollingErrorRetryCount = _c === void 0 ? -1 : _c;
  var timerRef = (0,external_react_.useRef)(undefined);
  var unsubscribeRef = (0,external_react_.useRef)(undefined);
  var countRef = (0,external_react_.useRef)(0);
  var stopPolling = function () {
    var _a;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    (_a = unsubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unsubscribeRef);
  };
  useUpdateEffect(function () {
    if (!pollingInterval) {
      stopPolling();
    }
  }, [pollingInterval]);
  if (!pollingInterval) {
    return {};
  }
  return {
    onBefore: function () {
      stopPolling();
    },
    onError: function () {
      countRef.current += 1;
    },
    onSuccess: function () {
      countRef.current = 0;
    },
    onFinally: function () {
      if (pollingErrorRetryCount === -1 ||
      // When an error occurs, the request is not repeated after pollingErrorRetryCount retries
      pollingErrorRetryCount !== -1 && countRef.current <= pollingErrorRetryCount) {
        timerRef.current = setTimeout(function () {
          // if pollingWhenHidden = false && document is hidden, then stop polling and subscribe revisible
          if (!pollingWhenHidden && !isDocumentVisible()) {
            unsubscribeRef.current = subscribeReVisible(function () {
              fetchInstance.refresh();
            });
          } else {
            fetchInstance.refresh();
          }
        }, pollingInterval);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function () {
      stopPolling();
    }
  };
};
/* harmony default export */ const plugins_usePollingPlugin = (usePollingPlugin);
;// ../node_modules/ahooks/es/useRequest/src/utils/limit.js

function limit(fn, timespan) {
  var pending = false;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (pending) return;
    pending = true;
    fn.apply(void 0, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(args), false));
    setTimeout(function () {
      pending = false;
    }, timespan);
  };
}
;// ../node_modules/ahooks/es/useRequest/src/utils/isOnline.js

var isOnline = function () {
  if (utils_isBrowser && typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }
  return true;
};
/* harmony default export */ const utils_isOnline = (isOnline);
;// ../node_modules/ahooks/es/useRequest/src/utils/subscribeFocus.js
// from swr



var subscribeFocus_listeners = [];
function subscribeFocus_subscribe(listener) {
  subscribeFocus_listeners.push(listener);
  return function unsubscribe() {
    var index = subscribeFocus_listeners.indexOf(listener);
    if (index > -1) {
      subscribeFocus_listeners.splice(index, 1);
    }
  };
}
if (utils_isBrowser) {
  var subscribeFocus_revalidate = function () {
    if (!isDocumentVisible() || !utils_isOnline()) return;
    for (var i = 0; i < subscribeFocus_listeners.length; i++) {
      var listener = subscribeFocus_listeners[i];
      listener();
    }
  };
  window.addEventListener('visibilitychange', subscribeFocus_revalidate, false);
  window.addEventListener('focus', subscribeFocus_revalidate, false);
}
/* harmony default export */ const subscribeFocus = (subscribeFocus_subscribe);
;// ../node_modules/ahooks/es/useRequest/src/plugins/useRefreshOnWindowFocusPlugin.js




var useRefreshOnWindowFocusPlugin = function (fetchInstance, _a) {
  var refreshOnWindowFocus = _a.refreshOnWindowFocus,
    _b = _a.focusTimespan,
    focusTimespan = _b === void 0 ? 5000 : _b;
  var unsubscribeRef = (0,external_react_.useRef)(undefined);
  var stopSubscribe = function () {
    var _a;
    (_a = unsubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unsubscribeRef);
  };
  (0,external_react_.useEffect)(function () {
    if (refreshOnWindowFocus) {
      var limitRefresh_1 = limit(fetchInstance.refresh.bind(fetchInstance), focusTimespan);
      unsubscribeRef.current = subscribeFocus(function () {
        limitRefresh_1();
      });
    }
    return function () {
      stopSubscribe();
    };
  }, [refreshOnWindowFocus, focusTimespan]);
  es_useUnmount(function () {
    stopSubscribe();
  });
  return {};
};
/* harmony default export */ const plugins_useRefreshOnWindowFocusPlugin = (useRefreshOnWindowFocusPlugin);
;// ../node_modules/ahooks/es/useRequest/src/plugins/useRetryPlugin.js

var useRetryPlugin = function (fetchInstance, _a) {
  var retryInterval = _a.retryInterval,
    retryCount = _a.retryCount;
  var timerRef = (0,external_react_.useRef)(undefined);
  var countRef = (0,external_react_.useRef)(0);
  var triggerByRetry = (0,external_react_.useRef)(false);
  if (!retryCount) {
    return {};
  }
  return {
    onBefore: function () {
      if (!triggerByRetry.current) {
        countRef.current = 0;
      }
      triggerByRetry.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    onSuccess: function () {
      countRef.current = 0;
    },
    onError: function () {
      countRef.current += 1;
      if (retryCount === -1 || countRef.current <= retryCount) {
        // Exponential backoff
        var timeout = retryInterval !== null && retryInterval !== void 0 ? retryInterval : Math.min(1000 * Math.pow(2, countRef.current), 30000);
        timerRef.current = setTimeout(function () {
          triggerByRetry.current = true;
          fetchInstance.refresh();
        }, timeout);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function () {
      countRef.current = 0;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };
};
/* harmony default export */ const plugins_useRetryPlugin = (useRetryPlugin);
// EXTERNAL MODULE: ../node_modules/lodash/throttle.js
var throttle = __webpack_require__(2858);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
;// ../node_modules/ahooks/es/useRequest/src/plugins/useThrottlePlugin.js



var useThrottlePlugin = function (fetchInstance, _a) {
  var throttleWait = _a.throttleWait,
    throttleLeading = _a.throttleLeading,
    throttleTrailing = _a.throttleTrailing;
  var throttledRef = (0,external_react_.useRef)(undefined);
  var options = {};
  if (throttleLeading !== undefined) {
    options.leading = throttleLeading;
  }
  if (throttleTrailing !== undefined) {
    options.trailing = throttleTrailing;
  }
  (0,external_react_.useEffect)(function () {
    if (throttleWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
      throttledRef.current = throttle_default()(function (callback) {
        callback();
      }, throttleWait, options);
      // throttle runAsync should be promise
      // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398
      fetchInstance.runAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
          var _a;
          (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.call(throttledRef, function () {
            _originRunAsync_1.apply(void 0, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(args), false)).then(resolve).catch(reject);
          });
        });
      };
      return function () {
        var _a;
        fetchInstance.runAsync = _originRunAsync_1;
        (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
      };
    }
  }, [throttleWait, throttleLeading, throttleTrailing]);
  if (!throttleWait) {
    return {};
  }
  return {
    onCancel: function () {
      var _a;
      (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
    }
  };
};
/* harmony default export */ const plugins_useThrottlePlugin = (useThrottlePlugin);
;// ../node_modules/ahooks/es/useMemoizedFn/index.js



function useMemoizedFn(fn) {
  if (utils_isDev) {
    if (!isFunction(fn)) {
      console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = (0,external_react_.useRef)(fn);
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = (0,external_react_.useMemo)(function () {
    return fn;
  }, [fn]);
  var memoizedFn = (0,external_react_.useRef)(undefined);
  if (!memoizedFn.current) {
    memoizedFn.current = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
/* harmony default export */ const es_useMemoizedFn = (useMemoizedFn);
;// ../node_modules/ahooks/es/useMount/index.js



var useMount = function (fn) {
  if (utils_isDev) {
    if (!isFunction(fn)) {
      console.error("useMount: parameter `fn` expected to be a function, but got \"".concat(typeof fn, "\"."));
    }
  }
  (0,external_react_.useEffect)(function () {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};
/* harmony default export */ const es_useMount = (useMount);
;// ../node_modules/ahooks/es/useUpdate/index.js


var useUpdate = function () {
  var _a = (0,tslib_es6/* __read */.zs)((0,external_react_.useState)({}), 2),
    setState = _a[1];
  return (0,external_react_.useCallback)(function () {
    return setState({});
  }, []);
};
/* harmony default export */ const es_useUpdate = (useUpdate);
;// ../node_modules/ahooks/es/useRequest/src/Fetch.js


var Fetch = /** @class */function () {
  function Fetch(serviceRef, options, subscribe, initState) {
    if (initState === void 0) {
      initState = {};
    }
    this.serviceRef = serviceRef;
    this.options = options;
    this.subscribe = subscribe;
    this.initState = initState;
    this.count = 0;
    this.state = {
      loading: false,
      params: undefined,
      data: undefined,
      error: undefined
    };
    this.state = (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, this.state), {
      loading: !options.manual
    }), initState);
  }
  Fetch.prototype.setState = function (s) {
    if (s === void 0) {
      s = {};
    }
    this.state = (0,tslib_es6/* __assign */.Cl)((0,tslib_es6/* __assign */.Cl)({}, this.state), s);
    this.subscribe();
  };
  Fetch.prototype.runPluginHandler = function (event) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }
    // @ts-ignore
    var r = this.pluginImpls.map(function (i) {
      var _a;
      return (_a = i[event]) === null || _a === void 0 ? void 0 : _a.call.apply(_a, (0,tslib_es6/* __spreadArray */.fX)([i], (0,tslib_es6/* __read */.zs)(rest), false));
    }).filter(Boolean);
    return Object.assign.apply(Object, (0,tslib_es6/* __spreadArray */.fX)([{}], (0,tslib_es6/* __read */.zs)(r), false));
  };
  Fetch.prototype.runAsync = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    return (0,tslib_es6/* __awaiter */.sH)(this, void 0, void 0, function () {
      var currentCount, _a, _b, stopNow, _c, returnNow, state, servicePromise, res, error_1;
      var _d;
      var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
      return (0,tslib_es6/* __generator */.YH)(this, function (_q) {
        switch (_q.label) {
          case 0:
            this.count += 1;
            currentCount = this.count;
            _a = this.runPluginHandler('onBefore', params), _b = _a.stopNow, stopNow = _b === void 0 ? false : _b, _c = _a.returnNow, returnNow = _c === void 0 ? false : _c, state = (0,tslib_es6/* __rest */.Tt)(_a, ["stopNow", "returnNow"]);
            // stop request
            if (stopNow) {
              return [2 /*return*/, new Promise(function () {})];
            }
            this.setState((0,tslib_es6/* __assign */.Cl)({
              loading: true,
              params: params
            }, state));
            // return now
            if (returnNow) {
              return [2 /*return*/, Promise.resolve(state.data)];
            }
            (_f = (_e = this.options).onBefore) === null || _f === void 0 ? void 0 : _f.call(_e, params);
            _q.label = 1;
          case 1:
            _q.trys.push([1, 3,, 4]);
            servicePromise = this.runPluginHandler('onRequest', this.serviceRef.current, params).servicePromise;
            if (!servicePromise) {
              servicePromise = (_d = this.serviceRef).current.apply(_d, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(params), false));
            }
            return [4 /*yield*/, servicePromise];
          case 2:
            res = _q.sent();
            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2 /*return*/, new Promise(function () {})];
            }
            // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;
            this.setState({
              data: res,
              error: undefined,
              loading: false
            });
            (_h = (_g = this.options).onSuccess) === null || _h === void 0 ? void 0 : _h.call(_g, res, params);
            this.runPluginHandler('onSuccess', res, params);
            (_k = (_j = this.options).onFinally) === null || _k === void 0 ? void 0 : _k.call(_j, params, res, undefined);
            if (currentCount === this.count) {
              this.runPluginHandler('onFinally', params, res, undefined);
            }
            return [2 /*return*/, res];
          case 3:
            error_1 = _q.sent();
            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2 /*return*/, new Promise(function () {})];
            }
            this.setState({
              error: error_1,
              loading: false
            });
            (_m = (_l = this.options).onError) === null || _m === void 0 ? void 0 : _m.call(_l, error_1, params);
            this.runPluginHandler('onError', error_1, params);
            (_p = (_o = this.options).onFinally) === null || _p === void 0 ? void 0 : _p.call(_o, params, undefined, error_1);
            if (currentCount === this.count) {
              this.runPluginHandler('onFinally', params, undefined, error_1);
            }
            throw error_1;
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Fetch.prototype.run = function () {
    var _this = this;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    this.runAsync.apply(this, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(params), false)).catch(function (error) {
      if (!_this.options.onError) {
        console.error(error);
      }
    });
  };
  Fetch.prototype.cancel = function () {
    this.count += 1;
    this.setState({
      loading: false
    });
    this.runPluginHandler('onCancel');
  };
  Fetch.prototype.refresh = function () {
    // @ts-ignore
    this.run.apply(this, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(this.state.params || []), false));
  };
  Fetch.prototype.refreshAsync = function () {
    // @ts-ignore
    return this.runAsync.apply(this, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(this.state.params || []), false));
  };
  Fetch.prototype.mutate = function (data) {
    var targetData = isFunction(data) ? data(this.state.data) : data;
    this.runPluginHandler('onMutate', targetData);
    this.setState({
      data: targetData
    });
  };
  return Fetch;
}();
/* harmony default export */ const src_Fetch = (Fetch);
;// ../node_modules/ahooks/es/useRequest/src/useRequestImplement.js









function useRequestImplement(service, options, plugins) {
  if (options === void 0) {
    options = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var _a = options.manual,
    manual = _a === void 0 ? false : _a,
    _b = options.ready,
    ready = _b === void 0 ? true : _b,
    rest = (0,tslib_es6/* __rest */.Tt)(options, ["manual", "ready"]);
  if (utils_isDev) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn("expected defaultParams is array, got ".concat(typeof options.defaultParams));
    }
  }
  var fetchOptions = (0,tslib_es6/* __assign */.Cl)({
    manual: manual,
    ready: ready
  }, rest);
  var serviceRef = es_useLatest(service);
  var update = es_useUpdate();
  var fetchInstance = es_useCreation(function () {
    var initState = plugins.map(function (p) {
      var _a;
      return (_a = p === null || p === void 0 ? void 0 : p.onInit) === null || _a === void 0 ? void 0 : _a.call(p, fetchOptions);
    }).filter(Boolean);
    return new src_Fetch(serviceRef, fetchOptions, update, Object.assign.apply(Object, (0,tslib_es6/* __spreadArray */.fX)([{}], (0,tslib_es6/* __read */.zs)(initState), false)));
  }, []);
  fetchInstance.options = fetchOptions;
  // run all plugins hooks
  fetchInstance.pluginImpls = plugins.map(function (p) {
    return p(fetchInstance, fetchOptions);
  });
  es_useMount(function () {
    if (!manual && ready) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      var params = fetchInstance.state.params || options.defaultParams || [];
      // @ts-ignore
      fetchInstance.run.apply(fetchInstance, (0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(params), false));
    }
  });
  es_useUnmount(function () {
    fetchInstance.cancel();
  });
  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: es_useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: es_useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: es_useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: es_useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: es_useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: es_useMemoizedFn(fetchInstance.mutate.bind(fetchInstance))
  };
}
/* harmony default export */ const src_useRequestImplement = (useRequestImplement);
;// ../node_modules/ahooks/es/useRequest/src/useRequest.js










// function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>(
//   service: Service<TData, TParams>,
//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TFormated, TParams>
// function useRequest<TData, TParams extends any[]>(
//   service: Service<TData, TParams>,
//   options?: OptionsWithoutFormat<TData, TParams>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TData, TParams>
function useRequest(service, options, plugins) {
  return src_useRequestImplement(service, options, (0,tslib_es6/* __spreadArray */.fX)((0,tslib_es6/* __spreadArray */.fX)([], (0,tslib_es6/* __read */.zs)(plugins || []), false), [plugins_useDebouncePlugin, plugins_useLoadingDelayPlugin, plugins_usePollingPlugin, plugins_useRefreshOnWindowFocusPlugin, plugins_useThrottlePlugin, plugins_useAutoRunPlugin, plugins_useCachePlugin, plugins_useRetryPlugin], false));
}
/* harmony default export */ const src_useRequest = (useRequest);
;// ../node_modules/ahooks/es/useRequest/index.js



/* harmony default export */ const es_useRequest = (src_useRequest);

/***/ }),

/***/ 6177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(8953),
    now = __webpack_require__(3664),
    toNumber = __webpack_require__(2997);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 6666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D0: () => (/* binding */ getExpandedRowModel),
/* harmony export */   HT: () => (/* binding */ getCoreRowModel),
/* harmony export */   ZR: () => (/* binding */ createTable)
/* harmony export */ });
/* unused harmony exports ColumnFaceting, ColumnFiltering, ColumnGrouping, ColumnOrdering, ColumnPinning, ColumnSizing, ColumnVisibility, GlobalFaceting, GlobalFiltering, Headers, RowExpanding, RowPagination, RowPinning, RowSelection, RowSorting, _getVisibleLeafColumns, aggregationFns, buildHeaderGroups, createCell, createColumn, createColumnHelper, createRow, defaultColumnSizing, expandRows, filterFns, flattenBy, functionalUpdate, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getMemoOptions, getPaginationRowModel, getSortedRowModel, isFunction, isNumberArray, isRowSelected, isSubRowSelected, makeStateUpdater, memo, noop, orderColumns, passiveEventSupported, reSplitAlphaNumeric, selectRowsFn, shouldAutoRemoveFilter, sortingFns */
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
//   createdAt: Date
//   nested: {
//     foo: [
//       {
//         bar: 'bar'
//       }
//     ]
//     bar: { subBar: boolean }[]
//     baz: {
//       foo: 'foo'
//       bar: {
//         baz: 'baz'
//       }
//     }
//   }
// }

// const test: DeepKeys<Person> = 'nested.foo.0.bar'
// const test2: DeepKeys<Person> = 'nested.bar'

// const helper = createColumnHelper<Person>()

// helper.accessor('nested.foo', {
//   cell: info => info.getValue(),
// })

// helper.accessor('nested.foo.0.bar', {
//   cell: info => info.getValue(),
// })

// helper.accessor('nested.bar', {
//   cell: info => info.getValue(),
// })

function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === 'function' ? {
        ...column,
        accessorFn: accessor
      } : {
        ...column,
        accessorKey: accessor
      };
    },
    display: column => column,
    group: column => column
  };
}

// Is this type a tuple?

// If this type is a tuple, what indices are allowed?

///

function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function noop() {
  //
}
function makeStateUpdater(key, instance) {
  return updater => {
    instance.setState(old => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every(val => typeof val === 'number');
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = subArr => {
    subArr.forEach(item => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return depArgs => {
    let depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    const newDeps = getDeps(depArgs);
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = ' ' + str;
          }
          return str;
        };
        console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
  return {
    debug: () => {
      var _tableOptions$debugAl;
      return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
    },
    key:  false && 0,
    onChange
  };
}

function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table, column, row, cell) => ({
      table,
      column,
      row,
      cell: cell,
      getValue: cell.getValue,
      renderValue: cell.renderValue
    }), getMemoOptions(table.options, 'debugCells', 'cell.getContext'))
  };
  table._features.forEach(feature => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}

function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? typeof String.prototype.replaceAll === 'function' ? accessorKey.replaceAll('.', '_') : accessorKey.replace(/\./g, '_') : undefined) != null ? _ref : typeof resolvedColumnDef.header === 'string' ? resolvedColumnDef.header : undefined;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    // Support deep accessor keys
    if (accessorKey.includes('.')) {
      accessorFn = originalRow => {
        let result = originalRow;
        for (const key of accessorKey.split('.')) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
          if (false) // removed by dead control flow
{}
        }
        return result;
      };
    } else {
      accessorFn = originalRow => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    if (false) // removed by dead control flow
{}
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent: parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...((_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap(d => d.getFlatColumns()))];
    }, getMemoOptions(table.options, 'debugColumns', 'column.getFlatColumns')),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], orderColumns => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap(column => column.getLeafColumns());
        return orderColumns(leafColumns);
      }
      return [column];
    }, getMemoOptions(table.options, 'debugColumns', 'column.getLeafColumns'))
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }

  // Yes, we have to convert table to unknown, because we know more than the compiler here.
  return column;
}

const debug = 'debugHeaders';
//

function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = h => {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header: header,
      column
    })
  };
  table._features.forEach(feature => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
const Headers = {
  createTable: table => {
    // Header Groups

    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter(column => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, getMemoOptions(table.options, debug, 'getHeaderGroups'));
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter(column => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, 'center');
    }, getMemoOptions(table.options, debug, 'getCenterHeaderGroups'));
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'left');
    }, getMemoOptions(table.options, debug, 'getLeftHeaderGroups'));
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'right');
    }, getMemoOptions(table.options, debug, 'getRightHeaderGroups'));

    // Footer Groups

    table.getFooterGroups = memo(() => [table.getHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, 'getFooterGroups'));
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, 'getLeftFooterGroups'));
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, 'getCenterFooterGroups'));
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, 'getRightFooterGroups'));

    // Flat Headers

    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], headerGroups => {
      return headerGroups.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, 'getFlatHeaders'));
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, 'getLeftFlatHeaders'));
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, 'getCenterFlatHeaders'));
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, 'getRightFlatHeaders'));

    // Leaf Headers

    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, getMemoOptions(table.options, debug, 'getCenterLeafHeaders'));
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, getMemoOptions(table.options, debug, 'getLeftLeafHeaders'));
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, getMemoOptions(table.options, debug, 'getRightLeafHeaders'));
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...((_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : []), ...((_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : []), ...((_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : [])].map(header => {
        return header.getLeafHeaders();
      }).flat();
    }, getMemoOptions(table.options, debug, 'getLeafHeaders'));
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  // Find the max depth of the columns:
  // build the leaf column row
  // build each buffer row going up
  //    placeholder for non-existent level
  //    real column for existing level

  let maxDepth = 0;
  const findMaxDepth = function (columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter(column => column.getIsVisible()).forEach(column => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    // The header group we are creating
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join('_'),
      headers: []
    };

    // The parent columns we're going to scan next
    const pendingParentHeaders = [];

    // Scan each column for parents
    headersToGroup.forEach(headerToGroup => {
      // What is the latest (last) parent column?

      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        // The parent header is new
        column = headerToGroup.column.parent;
      } else {
        // The parent header is repeated
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        // This column is repeated. Add it as a sub header to the next batch
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        // This is a new header. Let's create it
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join('_'),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter(d => d.column === column).length}` : undefined,
          depth,
          index: pendingParentHeaders.length
        });

        // Add the headerToGroup as a subHeader of the new header
        header.subHeaders.push(headerToGroup);
        // Add the new header to the pendingParentHeaders to get grouped
        // in the next batch
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();

  // headerGroups = headerGroups.filter(headerGroup => {
  //   return !headerGroup.headers.every(header => header.isPlaceholder)
  // })

  const recurseHeadersForSpans = headers => {
    const filteredHeaders = headers.filter(header => header.column.getIsVisible());
    return filteredHeaders.map(header => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach(_ref => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}

const createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: columnId => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return undefined;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: columnId => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return undefined;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: columnId => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: subRows != null ? subRows : [],
    getLeafRows: () => flattenBy(row.subRows, d => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : undefined,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], leafColumns => {
      return leafColumns.map(column => {
        return createCell(table, row, column, column.id);
      });
    }, getMemoOptions(table.options, 'debugRows', 'getAllCells')),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], allCells => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, getMemoOptions(table.options, 'debugRows', 'getAllCellsByColumnId'))
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};

//

const ColumnFaceting = {
  createColumn: (column, table) => {
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return undefined;
      }
      return column._getFacetedMinMaxValues();
    };
  }
};

const includesString = (row, columnId, filterValue) => {
  var _filterValue$toString, _row$getValue;
  const search = filterValue == null || (_filterValue$toString = filterValue.toString()) == null ? void 0 : _filterValue$toString.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = val => testFalsey(val);
const includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = val => testFalsey(val);
const equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = val => testFalsey(val);
const arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = val => testFalsey(val);
const arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some(val => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some(val => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = val => testFalsey(val);
const weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = val => testFalsey(val);
const inNumberRange = (row, columnId, filterValue) => {
  let [min, max] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min && rowValue <= max;
};
inNumberRange.resolveFilterValue = val => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== 'number' ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== 'number' ? parseFloat(unsafeMax) : unsafeMax;
  let min = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return [min, max];
};
inNumberRange.autoRemove = val => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);

// Export

const filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
// Utils

function testFalsey(val) {
  return val === undefined || val === null || val === '';
}

//

const ColumnFiltering = {
  getDefaultColumnDef: () => {
    return {
      filterFn: 'auto'
    };
  },
  getInitialState: state => {
    return {
      columnFilters: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnFiltersChange: makeStateUpdater('columnFilters', table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'string') {
        return filterFns.includesString;
      }
      if (typeof value === 'number') {
        return filterFns.inNumberRange;
      }
      if (typeof value === 'boolean') {
        return filterFns.equals;
      }
      if (value !== null && typeof value === 'object') {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === 'auto' ? column.getAutoFilterFn() : // @ts-ignore
      (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find(d => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex(d => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = value => {
      table.setColumnFilters(old => {
        const filterFn = column.getFilterFn();
        const previousFilter = old == null ? void 0 : old.find(d => d.id === column.id);
        const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : undefined);

        //
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter(d => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousFilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map(d => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
  },
  createRow: (row, _table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: table => {
    table.setColumnFilters = updater => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = old => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter(filter => {
          const column = leafColumns.find(d => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.resetColumnFilters = defaultState => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === 'undefined' || typeof value === 'string' && !value;
}

const sum = (columnId, _leafRows, childRows) => {
  // It's faster to just add the aggregations together instead of
  // process leaf nodes individually
  return childRows.reduce((sum, next) => {
    const nextValue = next.getValue(columnId);
    return sum + (typeof nextValue === 'number' ? nextValue : 0);
  }, 0);
};
const min = (columnId, _leafRows, childRows) => {
  let min;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null && (min > value || min === undefined && value >= value)) {
      min = value;
    }
  });
  return min;
};
const max = (columnId, _leafRows, childRows) => {
  let max;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null && (max < value || max === undefined && value >= value)) {
      max = value;
    }
  });
  return max;
};
const extent = (columnId, _leafRows, childRows) => {
  let min;
  let max;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min === undefined) {
        if (value >= value) min = max = value;
      } else {
        if (min > value) min = value;
        if (max < value) max = value;
      }
    }
  });
  return [min, max];
};
const mean = (columnId, leafRows) => {
  let count = 0;
  let sum = 0;
  leafRows.forEach(row => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count, sum += value;
    }
  });
  if (count) return sum / count;
  return;
};
const median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map(row => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map(d => d.getValue(columnId))).values());
};
const uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map(d => d.getValue(columnId))).size;
};
const count = (_columnId, leafRows) => {
  return leafRows.length;
};
const aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};

//

const ColumnGrouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: props => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: 'auto'
    };
  },
  getInitialState: state => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onGroupingChange: makeStateUpdater('grouping', table),
      groupedColumnMode: 'reorder'
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping(old => {
        // Find any existing grouping for this column
        if (old != null && old.includes(column.id)) {
          return old.filter(d => d !== column.id);
        }
        return [...(old != null ? old : []), column.id];
      });
    };
    column.getCanGroup = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup) return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'number') {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === '[object Date]') {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === 'auto' ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: table => {
    table.setGrouping = updater => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = defaultState => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = columnId => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter(col => !grouping.includes(col.id));
  if (groupedColumnMode === 'remove') {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map(g => leafColumns.find(col => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}

//

const ColumnOrdering = {
  getInitialState: state => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnOrderChange: makeStateUpdater('columnOrder', table)
    };
  },
  createColumn: (column, table) => {
    column.getIndex = memo(position => [_getVisibleLeafColumns(table, position)], columns => columns.findIndex(d => d.id === column.id), getMemoOptions(table.options, 'debugColumns', 'getIndex'));
    column.getIsFirstColumn = position => {
      var _columns$;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
    };
    column.getIsLastColumn = position => {
      var _columns;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
    };
  },
  createTable: table => {
    table.setColumnOrder = updater => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = defaultState => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => columns => {
      // Sort grouped columns to the start of the column list
      // before the headers are built
      let orderedColumns = [];

      // If there is no order, return the normal columns
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];

        // If there is an order, make a copy of the columns
        const columnsCopy = [...columns];

        // And make a new ordered array of the columns

        // Loop over the columns and place them in order into the new array
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex(d => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }

        // If there are any columns left, add them to the end
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, getMemoOptions(table.options, 'debugTable', '_getOrderColumnsFn'));
  }
};

//

const getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
const ColumnPinning = {
  getInitialState: state => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnPinningChange: makeStateUpdater('columnPinning', table)
    };
  },
  createColumn: (column, table) => {
    column.pin = position => {
      const columnIds = column.getLeafColumns().map(d => d.id).filter(Boolean);
      table.setColumnPinning(old => {
        var _old$left3, _old$right3;
        if (position === 'right') {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter(d => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter(d => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === 'left') {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter(d => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter(d => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter(d => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter(d => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some(d => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map(d => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some(d => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some(d => right == null ? void 0 : right.includes(d));
      return isLeft ? 'left' : isRight ? 'right' : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...(left != null ? left : []), ...(right != null ? right : [])];
      return allCells.filter(d => !leftAndRight.includes(d.column.id));
    }, getMemoOptions(table.options, 'debugRows', 'getCenterVisibleCells'));
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left], (allCells, left) => {
      const cells = (left != null ? left : []).map(columnId => allCells.find(cell => cell.column.id === columnId)).filter(Boolean).map(d => ({
        ...d,
        position: 'left'
      }));
      return cells;
    }, getMemoOptions(table.options, 'debugRows', 'getLeftVisibleCells'));
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map(columnId => allCells.find(cell => cell.column.id === columnId)).filter(Boolean).map(d => ({
        ...d,
        position: 'right'
      }));
      return cells;
    }, getMemoOptions(table.options, 'debugRows', 'getRightVisibleCells'));
  },
  createTable: table => {
    table.setColumnPinning = updater => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = defaultState => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = position => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map(columnId => allColumns.find(column => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, 'debugColumns', 'getLeftLeafColumns'));
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map(columnId => allColumns.find(column => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, 'debugColumns', 'getRightLeafColumns'));
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...(left != null ? left : []), ...(right != null ? right : [])];
      return allColumns.filter(d => !leftAndRight.includes(d.id));
    }, getMemoOptions(table.options, 'debugColumns', 'getCenterLeafColumns'));
  }
};

function safelyAccessDocument(_document) {
  return _document || (typeof document !== 'undefined' ? document : null);
}

//

//

const defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
const getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
const ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: state => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      columnResizeMode: 'onEnd',
      columnResizeDirection: 'ltr',
      onColumnSizingChange: makeStateUpdater('columnSizing', table),
      onColumnSizingInfoChange: makeStateUpdater('columnSizingInfo', table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = memo(position => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(0, column.getIndex(position)).reduce((sum, column) => sum + column.getSize(), 0), getMemoOptions(table.options, 'debugColumns', 'getStart'));
    column.getAfter = memo(position => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(column.getIndex(position) + 1).reduce((sum, column) => sum + column.getSize(), 0), getMemoOptions(table.options, 'debugColumns', 'getAfter'));
    column.resetSize = () => {
      table.setColumnSizing(_ref2 => {
        let {
          [column.id]: _,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum = 0;
      const recurse = header => {
        if (header.subHeaders.length) {
          header.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum += (_header$column$getSiz = header.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = _contextDocument => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return e => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          // lets not respond to multiple touches (e.g. 2 or 3 fingers)
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map(d => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== 'number') {
            return;
          }
          table.setColumnSizingInfo(old => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === 'rtl' ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach(_ref3 => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === 'onChange' || eventType === 'end') {
            table.setColumnSizing(old => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = clientXPos => updateOffset('move', clientXPos);
        const onEnd = clientXPos => {
          updateOffset('end', clientXPos);
          table.setColumnSizingInfo(old => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = safelyAccessDocument(_contextDocument);
        const mouseEvents = {
          moveHandler: e => onMove(e.clientX),
          upHandler: e => {
            contextDocument == null || contextDocument.removeEventListener('mousemove', mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener('mouseup', mouseEvents.upHandler);
            onEnd(e.clientX);
          }
        };
        const touchEvents = {
          moveHandler: e => {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }
            onMove(e.touches[0].clientX);
            return false;
          },
          upHandler: e => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener('touchmove', touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener('touchend', touchEvents.upHandler);
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }
            onEnd((_e$touches$ = e.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          contextDocument == null || contextDocument.addEventListener('touchmove', touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener('touchend', touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener('mousemove', mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener('mouseup', mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo(old => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: table => {
    table.setColumnSizing = updater => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = updater => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = defaultState => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = defaultState => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
let passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === 'boolean') return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop = () => {};
    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === 'touchstart';
}

//

const ColumnVisibility = {
  getInitialState: state => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnVisibilityChange: makeStateUpdater('columnVisibility', table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = value => {
      if (column.getCanHide()) {
        table.setColumnVisibility(old => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _ref, _table$getState$colum;
      const childColumns = column.columns;
      return (_ref = childColumns.length ? childColumns.some(c => c.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return e => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], cells => {
      return cells.filter(cell => cell.column.getIsVisible());
    }, getMemoOptions(table.options, 'debugRows', '_getAllVisibleCells'));
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], getMemoOptions(table.options, 'debugRows', 'getVisibleCells'));
  },
  createTable: table => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter(d => d.getIsVisible()).map(d => d.id).join('_')], columns => {
        return columns.filter(d => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, getMemoOptions(table.options, 'debugColumns', key));
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod('getVisibleFlatColumns', () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod('getVisibleLeafColumns', () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod('getLeftVisibleLeafColumns', () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod('getRightVisibleLeafColumns', () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod('getCenterVisibleLeafColumns', () => table.getCenterLeafColumns());
    table.setColumnVisibility = updater => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = defaultState => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = value => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some(column => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some(column => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return e => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
function _getVisibleLeafColumns(table, position) {
  return !position ? table.getVisibleLeafColumns() : position === 'center' ? table.getCenterVisibleLeafColumns() : position === 'left' ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}

//

const GlobalFaceting = {
  createTable: table => {
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, '__global__');
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, '__global__');
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, '__global__');
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};

//

const GlobalFiltering = {
  getInitialState: state => {
    return {
      globalFilter: undefined,
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onGlobalFilterChange: makeStateUpdater('globalFilter', table),
      globalFilterFn: 'auto',
      getColumnCanGlobalFilter: column => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === 'string' || typeof value === 'number';
      }
    };
  },
  createColumn: (column, table) => {
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
      return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
  },
  createTable: table => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      const {
        globalFilterFn: globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === 'auto' ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
    };
    table.setGlobalFilter = updater => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = defaultState => {
      table.setGlobalFilter(defaultState ? undefined : table.initialState.globalFilter);
    };
  }
};

//

const RowExpanding = {
  getInitialState: state => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onExpandedChange: makeStateUpdater('expanded', table),
      paginateExpandedRows: true
    };
  },
  createTable: table => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = updater => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = expanded => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = defaultState => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some(row => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return e => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;

      // If expanded is true, save some cycles and return true
      if (typeof expanded === 'boolean') {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }

      // If any row is not expanded, return false
      if (table.getRowModel().flatRows.some(row => !row.getIsExpanded())) {
        return false;
      }

      // They must all be expanded :shrug:
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach(id => {
        const splitId = id.split('.');
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = expanded => {
      table.setExpanded(old => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach(rowId => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand) return;
        row.toggleExpanded();
      };
    };
  }
};

//

const defaultPageIndex = 0;
const defaultPageSize = 10;
const getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
const RowPagination = {
  getInitialState: state => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...(state == null ? void 0 : state.pagination)
      }
    };
  },
  getDefaultOptions: table => {
    return {
      onPaginationChange: makeStateUpdater('pagination', table)
    };
  },
  createTable: table => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = updater => {
      const safeUpdater = old => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = defaultState => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = updater => {
      table.setPagination(old => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === 'undefined' || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = defaultState => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = defaultState => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = updater => {
      table.setPagination(old => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    //deprecated
    table.setPageCount = updater => table.setPagination(old => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === 'number') {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], pageCount => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
      }
      return pageOptions;
    }, getMemoOptions(table.options, 'debugTable', 'getPageOptions'));
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex(old => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex(old => {
        return old + 1;
      });
    };
    table.firstPage = () => {
      return table.setPageIndex(0);
    };
    table.lastPage = () => {
      return table.setPageIndex(table.getPageCount() - 1);
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
    };
    table.getRowCount = () => {
      var _table$options$rowCou;
      return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
    };
  }
};

//

const getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
const RowPinning = {
  getInitialState: state => {
    return {
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onRowPinningChange: makeStateUpdater('rowPinning', table)
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map(_ref => {
        let {
          id
        } = _ref;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map(_ref2 => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const rowIds = new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning(old => {
        var _old$top3, _old$bottom3;
        if (position === 'bottom') {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter(d => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter(d => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === 'top') {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter(d => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter(d => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter(d => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter(d => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref3;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === 'function') {
        return enableRowPinning(row);
      }
      return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some(d => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some(d => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? 'top' : isBottom ? 'bottom' : false;
    };
    row.getPinnedIndex = () => {
      var _ref4, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position) return -1;
      const visiblePinnedRowIds = (_ref4 = position === 'top' ? table.getTopRows() : table.getBottomRows()) == null ? void 0 : _ref4.map(_ref5 => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
  },
  createTable: table => {
    table.setRowPinning = updater => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = defaultState => {
      var _table$initialState$r, _table$initialState;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = position => {
      var _pinningState$positio;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table._getPinnedRows = (visibleRows, pinnedRowIds, position) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ?
      //get all rows that are pinned even if they would not be otherwise visible
      //account for expanded parent rows, but not pagination or filtering
      (pinnedRowIds != null ? pinnedRowIds : []).map(rowId => {
        const row = table.getRow(rowId, true);
        return row.getIsAllParentsExpanded() ? row : null;
      }) :
      //else get only visible rows that are pinned
      (pinnedRowIds != null ? pinnedRowIds : []).map(rowId => visibleRows.find(row => row.id === rowId));
      return rows.filter(Boolean).map(d => ({
        ...d,
        position
      }));
    };
    table.getTopRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top], (allRows, topPinnedRowIds) => table._getPinnedRows(allRows, topPinnedRowIds, 'top'), getMemoOptions(table.options, 'debugRows', 'getTopRows'));
    table.getBottomRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.bottom], (allRows, bottomPinnedRowIds) => table._getPinnedRows(allRows, bottomPinnedRowIds, 'bottom'), getMemoOptions(table.options, 'debugRows', 'getBottomRows'));
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = new Set([...(top != null ? top : []), ...(bottom != null ? bottom : [])]);
      return allRows.filter(d => !topAndBottom.has(d.id));
    }, getMemoOptions(table.options, 'debugRows', 'getCenterRows'));
  }
};

//

const RowSelection = {
  getInitialState: state => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onRowSelectionChange: makeStateUpdater('rowSelection', table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: table => {
    table.setRowSelection = updater => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = defaultState => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = value => {
      table.setRowSelection(old => {
        value = typeof value !== 'undefined' ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;

        // We don't use `mutateRowIsSelected` here for performance reasons.
        // All of the rows are flat already, so it wouldn't be worth it
        if (value) {
          preGroupedFlatRows.forEach(row => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach(row => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = value => table.setRowSelection(old => {
      const resolvedValue = typeof value !== 'undefined' ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach(row => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });

    // addRowSelectionRange: rowId => {
    //   const {
    //     rows,
    //     rowsById,
    //     options: { selectGroupingRows, selectSubRows },
    //   } = table

    //   const findSelectedRow = (rows: Row[]) => {
    //     let found
    //     rows.find(d => {
    //       if (d.getIsSelected()) {
    //         found = d
    //         return true
    //       }
    //       const subFound = findSelectedRow(d.subRows || [])
    //       if (subFound) {
    //         found = subFound
    //         return true
    //       }
    //       return false
    //     })
    //     return found
    //   }

    //   const firstRow = findSelectedRow(rows) || rows[0]
    //   const lastRow = rowsById[rowId]

    //   let include = false
    //   const selectedRowIds = {}

    //   const addRow = (row: Row) => {
    //     mutateRowIsSelected(selectedRowIds, row.id, true, {
    //       rowsById,
    //       selectGroupingRows: selectGroupingRows!,
    //       selectSubRows: selectSubRows!,
    //     })
    //   }

    //   table.rows.forEach(row => {
    //     const isFirstRow = row.id === firstRow.id
    //     const isLastRow = row.id === lastRow.id

    //     if (isFirstRow || isLastRow) {
    //       if (!include) {
    //         include = true
    //       } else if (include) {
    //         addRow(row)
    //         include = false
    //       }
    //     }

    //     if (include) {
    //       addRow(row)
    //     }
    //   })

    //   table.setRowSelection(selectedRowIds)
    // },
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, 'debugTable', 'getSelectedRowModel'));
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, 'debugTable', 'getFilteredSelectedRowModel'));
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, 'debugTable', 'getGroupedSelectedRowModel'));

    ///

    // getGroupingRowCanSelect: rowId => {
    //   const row = table.getRow(rowId)

    //   if (!row) {
    //     throw new Error()
    //   }

    //   if (typeof table.options.enableGroupingRowSelection === 'function') {
    //     return table.options.enableGroupingRowSelection(row)
    //   }

    //   return table.options.enableGroupingRowSelection ?? false
    // },

    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some(row => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter(row => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some(row => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter(row => row.getCanSelect()).some(d => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return e => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return e => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection(old => {
        var _opts$selectChildren;
        value = typeof value !== 'undefined' ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === 'some';
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === 'all';
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === 'function') {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === 'function') {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === 'function') {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return e => {
        var _target;
        if (!canSelect) return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
const mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);

  // const isGrouped = row.getIsGrouped()

  // if ( // TODO: enforce grouping row selection rules
  //   !isGrouped ||
  //   (isGrouped && table.options.enableGroupingRowSelection)
  // ) {
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach(key => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  // }

  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach(row => mutateRowIsSelected(selectedRowIds, row.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};

  // Filters top level and nested rows
  const recurseRows = function (rows, depth) {
    return rows.map(row => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach(subRow => {
    // Bail out early if we know both of these
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }

    // Check row selection of nested subrows
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === 'all') {
        someSelected = true;
      } else if (subRowChildrenSelected === 'some') {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? 'all' : someSelected ? 'some' : false;
}

const reSplitAlphaNumeric = /([0-9]+)/gm;
const alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};

// The text filter is more basic (less numeric support)
// but is much faster
const text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};

// The text filter is more basic (less numeric support)
// but is much faster
const textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const datetime = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);

  // Can handle nullish values
  // Use > and < because == (and ===) doesn't work with
  // Date objects (would require calling getTime()).
  return a > b ? 1 : a < b ? -1 : 0;
};
const basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};

// Utils

function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }
    return String(a);
  }
  if (typeof a === 'string') {
    return a;
  }
  return '';
}

// Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity
function compareAlphanumeric(aStr, bStr) {
  // Split on number groups, but keep the delimiter
  // Then remove falsey split values
  const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);

  // While
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();

    // Both are string
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }

    // One is a string, one is a number
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }

    // Both are numbers
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}

// Exports

const sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};

//

const RowSorting = {
  getInitialState: state => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: 'auto',
      sortUndefined: 1
    };
  },
  getDefaultOptions: table => {
    return {
      onSortingChange: makeStateUpdater('sorting', table),
      isMultiSortEvent: e => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === '[object Date]') {
          return sortingFns.datetime;
        }
        if (typeof value === 'string') {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'string') {
        return 'asc';
      }
      return 'desc';
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === 'auto' ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      // if (column.columns.length) {
      //   column.columns.forEach((c, i) => {
      //     if (c.id) {
      //       table.toggleColumnSorting(c.id, undefined, multi || !!i)
      //     }
      //   })
      //   return
      // }

      // this needs to be outside of table.setSorting to be in sync with rerender
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== 'undefined' && desc !== null;
      table.setSorting(old => {
        // Find any existing sorting for this column
        const existingSorting = old == null ? void 0 : old.find(d => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex(d => d.id === column.id);
        let newSorting = [];

        // What should we do with this sort action?
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === 'desc';

        // Multi-mode
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = 'toggle';
          } else {
            sortAction = 'add';
          }
        } else {
          // Normal mode
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = 'replace';
          } else if (existingSorting) {
            sortAction = 'toggle';
          } else {
            sortAction = 'replace';
          }
        }

        // Handle toggle states that will remove the sorting
        if (sortAction === 'toggle') {
          // If we are "actually" toggling (not a manual set value), should we remove the sorting?
          if (!hasManualValue) {
            // Is our intention to remove?
            if (!nextSortingOrder) {
              sortAction = 'remove';
            }
          }
        }
        if (sortAction === 'add') {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          // Take latest n columns
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === 'toggle') {
          // This flips (or sets) the
          newSorting = old.map(d => {
            if (d.id === column.id) {
              return {
                ...d,
                desc: nextDesc
              };
            }
            return d;
          });
        } else if (sortAction === 'remove') {
          newSorting = old.filter(d => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === 'desc';
      return sortDescFirst ? 'desc' : 'asc';
    };
    column.getNextSortingOrder = multi => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && (
      // If enableSortRemove, enable in general
      multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true) // If multi, don't allow if enableMultiRemove))
      ) {
        return false;
      }
      return isSorted === 'desc' ? 'asc' : 'desc';
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find(d => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? 'desc' : 'asc';
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex(d => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      //clear sorting for just 1 column
      table.setSorting(old => old != null && old.length ? old.filter(d => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return e => {
        if (!canSort) return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(undefined, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: table => {
    table.setSorting = updater => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = defaultState => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};

const builtInFeatures = [Headers, ColumnVisibility, ColumnOrdering, ColumnPinning, ColumnFaceting, ColumnFiltering, GlobalFaceting,
//depends on ColumnFaceting
GlobalFiltering,
//depends on ColumnFiltering
RowSorting, ColumnGrouping,
//depends on RowSorting
RowExpanding, RowPagination, RowPinning, RowSelection, ColumnSizing];

//

function createTable(options) {
  var _options$_features, _options$initialState;
  if (false) // removed by dead control flow
{}
  const _features = [...builtInFeatures, ...((_options$_features = options._features) != null ? _options$_features : [])];
  let table = {
    _features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = options => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options);
    }
    return {
      ...defaultOptions,
      ...options
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...((_options$initialState = options.initialState) != null ? _options$initialState : {})
  };
  table._features.forEach(feature => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: cb => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;

        // Schedule a microtask to run the queued callbacks after
        // the current call stack (render, etc) has finished.
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch(error => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: updater => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: updater => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join('.') : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up

    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          if (false) // removed by dead control flow
{}
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], defaultColumn => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: props => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: props => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, getMemoOptions(options, 'debugColumns', '_getDefaultColumnDef')),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], columnDefs => {
      const recurseColumns = function (columnDefs, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs.map(columnDef => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, getMemoOptions(options, 'debugColumns', 'getAllColumns')),
    getAllFlatColumns: memo(() => [table.getAllColumns()], allColumns => {
      return allColumns.flatMap(column => {
        return column.getFlatColumns();
      });
    }, getMemoOptions(options, 'debugColumns', 'getAllFlatColumns')),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], flatColumns => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, getMemoOptions(options, 'debugColumns', 'getAllFlatColumnsById')),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns) => {
      let leafColumns = allColumns.flatMap(column => column.getLeafColumns());
      return orderColumns(leafColumns);
    }, getMemoOptions(options, 'debugColumns', 'getAllLeafColumns')),
    getColumn: columnId => {
      const column = table._getAllFlatColumnsById()[columnId];
      if (false) // removed by dead control flow
{}
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}

function getCoreRowModel() {
  return table => memo(() => [table.options.data], data => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function (originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        // This could be an expensive check at scale, so we should move it somewhere else, but where?
        // if (!id) {
        //   if (process.env.NODE_ENV !== 'production') {
        //     throw new Error(`getRowId expected an ID, but got ${id}`)
        //   }
        // }

        // Make the row
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, undefined, parentRow == null ? void 0 : parentRow.id);

        // Keep track of every row in a flat array
        rowModel.flatRows.push(row);
        // Also keep track of every row by its ID
        rowModel.rowsById[row.id] = row;
        // Push table row into parent
        rows.push(row);

        // Get the original subrows
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);

          // Then recursively access them
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, getMemoOptions(table.options, 'debugTable', 'getRowModel', () => table._autoResetPageIndex()));
}

function getExpandedRowModel() {
  return table => memo(() => [table.getState().expanded, table.getPreExpandedRowModel(), table.options.paginateExpandedRows], (expanded, rowModel, paginateExpandedRows) => {
    if (!rowModel.rows.length || expanded !== true && !Object.keys(expanded != null ? expanded : {}).length) {
      return rowModel;
    }
    if (!paginateExpandedRows) {
      // Only expand rows at this point if they are being paginated
      return rowModel;
    }
    return expandRows(rowModel);
  }, getMemoOptions(table.options, 'debugTable', 'getExpandedRowModel'));
}
function expandRows(rowModel) {
  const expandedRows = [];
  const handleRow = row => {
    var _row$subRows;
    expandedRows.push(row);
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
      row.subRows.forEach(handleRow);
    }
  };
  rowModel.rows.forEach(handleRow);
  return {
    rows: expandedRows,
    flatRows: rowModel.flatRows,
    rowsById: rowModel.rowsById
  };
}

function getFacetedMinMaxValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, facetedRowModel => {
    if (!facetedRowModel) return undefined;
    const uniqueValues = facetedRowModel.flatRows.flatMap(flatRow => {
      var _flatRow$getUniqueVal;
      return (_flatRow$getUniqueVal = flatRow.getUniqueValues(columnId)) != null ? _flatRow$getUniqueVal : [];
    }).map(Number).filter(value => !Number.isNaN(value));
    if (!uniqueValues.length) return;
    let facetedMinValue = uniqueValues[0];
    let facetedMaxValue = uniqueValues[uniqueValues.length - 1];
    for (const value of uniqueValues) {
      if (value < facetedMinValue) facetedMinValue = value;else if (value > facetedMaxValue) facetedMaxValue = value;
    }
    return [facetedMinValue, facetedMaxValue];
  }, getMemoOptions(table.options, 'debugTable', 'getFacetedMinMaxValues'));
}

function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) {
    return filterRowModelFromLeafs(rows, filterRowImpl, table);
  }
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  var _table$options$maxLea;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
  const recurseFilterRows = function (rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];

    // Filter from children up first
    for (let i = 0; i < rowsToFilter.length; i++) {
      var _row$subRows;
      let row = rowsToFilter[i];
      const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
      newRow.columnFilters = row.columnFilters;
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        row = newRow;
        if (filterRow(row) && !newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
        if (filterRow(row) || newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
      } else {
        row = newRow;
        if (filterRow(row)) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
        }
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  var _table$options$maxLea2;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;

  // Filters top level and nested rows
  const recurseFilterRows = function (rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    // Filter from parents downward first

    const rows = [];

    // Apply the filter to any subRows
    for (let i = 0; i < rowsToFilter.length; i++) {
      let row = rowsToFilter[i];
      const pass = filterRow(row);
      if (pass) {
        var _row$subRows2;
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
          const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
        }
        rows.push(row);
        newFilteredFlatRows.push(row);
        newFilteredRowsById[row.id] = row;
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}

function getFacetedRowModel() {
  return (table, columnId) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter, table.getFilteredRowModel()], (preRowModel, columnFilters, globalFilter) => {
    if (!preRowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      return preRowModel;
    }
    const filterableIds = [...columnFilters.map(d => d.id).filter(d => d !== columnId), globalFilter ? '__global__' : undefined].filter(Boolean);
    const filterRowsImpl = row => {
      // Horizontally filter rows through each column
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };
    return filterRows(preRowModel.rows, filterRowsImpl, table);
  }, getMemoOptions(table.options, 'debugTable', 'getFacetedRowModel'));
}

function getFacetedUniqueValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, facetedRowModel => {
    if (!facetedRowModel) return new Map();
    let facetedUniqueValues = new Map();
    for (let i = 0; i < facetedRowModel.flatRows.length; i++) {
      const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        if (facetedUniqueValues.has(value)) {
          var _facetedUniqueValues$;
          facetedUniqueValues.set(value, ((_facetedUniqueValues$ = facetedUniqueValues.get(value)) != null ? _facetedUniqueValues$ : 0) + 1);
        } else {
          facetedUniqueValues.set(value, 1);
        }
      }
    }
    return facetedUniqueValues;
  }, getMemoOptions(table.options, 'debugTable', `getFacetedUniqueValues_${columnId}`));
}

function getFilteredRowModel() {
  return table => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter], (rowModel, columnFilters, globalFilter) => {
    if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      for (let i = 0; i < rowModel.flatRows.length; i++) {
        rowModel.flatRows[i].columnFilters = {};
        rowModel.flatRows[i].columnFiltersMeta = {};
      }
      return rowModel;
    }
    const resolvedColumnFilters = [];
    const resolvedGlobalFilters = [];
    (columnFilters != null ? columnFilters : []).forEach(d => {
      var _filterFn$resolveFilt;
      const column = table.getColumn(d.id);
      if (!column) {
        return;
      }
      const filterFn = column.getFilterFn();
      if (!filterFn) {
        if (false) // removed by dead control flow
{}
        return;
      }
      resolvedColumnFilters.push({
        id: d.id,
        filterFn,
        resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
      });
    });
    const filterableIds = (columnFilters != null ? columnFilters : []).map(d => d.id);
    const globalFilterFn = table.getGlobalFilterFn();
    const globallyFilterableColumns = table.getAllLeafColumns().filter(column => column.getCanGlobalFilter());
    if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
      filterableIds.push('__global__');
      globallyFilterableColumns.forEach(column => {
        var _globalFilterFn$resol;
        resolvedGlobalFilters.push({
          id: column.id,
          filterFn: globalFilterFn,
          resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
        });
      });
    }
    let currentColumnFilter;
    let currentGlobalFilter;

    // Flag the prefiltered row model with each filter state
    for (let j = 0; j < rowModel.flatRows.length; j++) {
      const row = rowModel.flatRows[j];
      row.columnFilters = {};
      if (resolvedColumnFilters.length) {
        for (let i = 0; i < resolvedColumnFilters.length; i++) {
          currentColumnFilter = resolvedColumnFilters[i];
          const id = currentColumnFilter.id;

          // Tag the row with the column filter state
          row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, filterMeta => {
            row.columnFiltersMeta[id] = filterMeta;
          });
        }
      }
      if (resolvedGlobalFilters.length) {
        for (let i = 0; i < resolvedGlobalFilters.length; i++) {
          currentGlobalFilter = resolvedGlobalFilters[i];
          const id = currentGlobalFilter.id;
          // Tag the row with the first truthy global filter state
          if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, filterMeta => {
            row.columnFiltersMeta[id] = filterMeta;
          })) {
            row.columnFilters.__global__ = true;
            break;
          }
        }
        if (row.columnFilters.__global__ !== true) {
          row.columnFilters.__global__ = false;
        }
      }
    }
    const filterRowsImpl = row => {
      // Horizontally filter rows through each column
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };

    // Filter final rows using all of the active filters
    return filterRows(rowModel.rows, filterRowsImpl, table);
  }, getMemoOptions(table.options, 'debugTable', 'getFilteredRowModel', () => table._autoResetPageIndex()));
}

function getGroupedRowModel() {
  return table => memo(() => [table.getState().grouping, table.getPreGroupedRowModel()], (grouping, rowModel) => {
    if (!rowModel.rows.length || !grouping.length) {
      rowModel.rows.forEach(row => {
        row.depth = 0;
        row.parentId = undefined;
      });
      return rowModel;
    }

    // Filter the grouping list down to columns that exist
    const existingGrouping = grouping.filter(columnId => table.getColumn(columnId));
    const groupedFlatRows = [];
    const groupedRowsById = {};
    // const onlyGroupedFlatRows: Row[] = [];
    // const onlyGroupedRowsById: Record<RowId, Row> = {};
    // const nonGroupedFlatRows: Row[] = [];
    // const nonGroupedRowsById: Record<RowId, Row> = {};

    // Recursively group the data
    const groupUpRecursively = function (rows, depth, parentId) {
      if (depth === void 0) {
        depth = 0;
      }
      // Grouping depth has been been met
      // Stop grouping and simply rewrite thd depth and row relationships
      if (depth >= existingGrouping.length) {
        return rows.map(row => {
          row.depth = depth;
          groupedFlatRows.push(row);
          groupedRowsById[row.id] = row;
          if (row.subRows) {
            row.subRows = groupUpRecursively(row.subRows, depth + 1, row.id);
          }
          return row;
        });
      }
      const columnId = existingGrouping[depth];

      // Group the rows together for this level
      const rowGroupsMap = groupBy(rows, columnId);

      // Perform aggregations for each group
      const aggregatedGroupedRows = Array.from(rowGroupsMap.entries()).map((_ref, index) => {
        let [groupingValue, groupedRows] = _ref;
        let id = `${columnId}:${groupingValue}`;
        id = parentId ? `${parentId}>${id}` : id;

        // First, Recurse to group sub rows before aggregation
        const subRows = groupUpRecursively(groupedRows, depth + 1, id);
        subRows.forEach(subRow => {
          subRow.parentId = id;
        });

        // Flatten the leaf rows of the rows in this group
        const leafRows = depth ? flattenBy(groupedRows, row => row.subRows) : groupedRows;
        const row = createRow(table, id, leafRows[0].original, index, depth, undefined, parentId);
        Object.assign(row, {
          groupingColumnId: columnId,
          groupingValue,
          subRows,
          leafRows,
          getValue: columnId => {
            // Don't aggregate columns that are in the grouping
            if (existingGrouping.includes(columnId)) {
              if (row._valuesCache.hasOwnProperty(columnId)) {
                return row._valuesCache[columnId];
              }
              if (groupedRows[0]) {
                var _groupedRows$0$getVal;
                row._valuesCache[columnId] = (_groupedRows$0$getVal = groupedRows[0].getValue(columnId)) != null ? _groupedRows$0$getVal : undefined;
              }
              return row._valuesCache[columnId];
            }
            if (row._groupingValuesCache.hasOwnProperty(columnId)) {
              return row._groupingValuesCache[columnId];
            }

            // Aggregate the values
            const column = table.getColumn(columnId);
            const aggregateFn = column == null ? void 0 : column.getAggregationFn();
            if (aggregateFn) {
              row._groupingValuesCache[columnId] = aggregateFn(columnId, leafRows, groupedRows);
              return row._groupingValuesCache[columnId];
            }
          }
        });
        subRows.forEach(subRow => {
          groupedFlatRows.push(subRow);
          groupedRowsById[subRow.id] = subRow;
          // if (subRow.getIsGrouped?.()) {
          //   onlyGroupedFlatRows.push(subRow);
          //   onlyGroupedRowsById[subRow.id] = subRow;
          // } else {
          //   nonGroupedFlatRows.push(subRow);
          //   nonGroupedRowsById[subRow.id] = subRow;
          // }
        });
        return row;
      });
      return aggregatedGroupedRows;
    };
    const groupedRows = groupUpRecursively(rowModel.rows, 0);
    groupedRows.forEach(subRow => {
      groupedFlatRows.push(subRow);
      groupedRowsById[subRow.id] = subRow;
      // if (subRow.getIsGrouped?.()) {
      //   onlyGroupedFlatRows.push(subRow);
      //   onlyGroupedRowsById[subRow.id] = subRow;
      // } else {
      //   nonGroupedFlatRows.push(subRow);
      //   nonGroupedRowsById[subRow.id] = subRow;
      // }
    });
    return {
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById
    };
  }, getMemoOptions(table.options, 'debugTable', 'getGroupedRowModel', () => {
    table._queue(() => {
      table._autoResetExpanded();
      table._autoResetPageIndex();
    });
  }));
}
function groupBy(rows, columnId) {
  const groupMap = new Map();
  return rows.reduce((map, row) => {
    const resKey = `${row.getGroupingValue(columnId)}`;
    const previous = map.get(resKey);
    if (!previous) {
      map.set(resKey, [row]);
    } else {
      previous.push(row);
    }
    return map;
  }, groupMap);
}

function getPaginationRowModel(opts) {
  return table => memo(() => [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? undefined : table.getState().expanded], (pagination, rowModel) => {
    if (!rowModel.rows.length) {
      return rowModel;
    }
    const {
      pageSize,
      pageIndex
    } = pagination;
    let {
      rows,
      flatRows,
      rowsById
    } = rowModel;
    const pageStart = pageSize * pageIndex;
    const pageEnd = pageStart + pageSize;
    rows = rows.slice(pageStart, pageEnd);
    let paginatedRowModel;
    if (!table.options.paginateExpandedRows) {
      paginatedRowModel = expandRows({
        rows,
        flatRows,
        rowsById
      });
    } else {
      paginatedRowModel = {
        rows,
        flatRows,
        rowsById
      };
    }
    paginatedRowModel.flatRows = [];
    const handleRow = row => {
      paginatedRowModel.flatRows.push(row);
      if (row.subRows.length) {
        row.subRows.forEach(handleRow);
      }
    };
    paginatedRowModel.rows.forEach(handleRow);
    return paginatedRowModel;
  }, getMemoOptions(table.options, 'debugTable', 'getPaginationRowModel'));
}

function getSortedRowModel() {
  return table => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];

    // Filter out sortings that correspond to non existing columns
    const availableSorting = sortingState.filter(sort => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach(sortEntry => {
      const column = table.getColumn(sortEntry.id);
      if (!column) return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = rows => {
      // This will also perform a stable sorting using the row index
      // if needed.
      const sortedData = rows.map(row => ({
        ...row
      }));
      sortedData.sort((rowA, rowB) => {
        for (let i = 0; i < availableSorting.length; i += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i];
          const columnInfo = columnInfoById[sortEntry.id];
          const sortUndefined = columnInfo.sortUndefined;
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;

          // All sorting ints should always return in ascending order
          if (sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === undefined;
            const bUndefined = bValue === undefined;
            if (aUndefined || bUndefined) {
              if (sortUndefined === 'first') return aUndefined ? -1 : 1;
              if (sortUndefined === 'last') return aUndefined ? 1 : -1;
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? sortUndefined : -sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }

          // If sorting is non-zero, take care of desc and inversion
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });

      // If there are sub-rows, sort them
      sortedData.forEach(row => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, getMemoOptions(table.options, 'debugTable', 'getSortedRowModel', () => table._autoResetPageIndex()));
}


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 6982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ unstableSetRender)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(8398);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js + 8 modules
var regeneratorRuntime = __webpack_require__(5407);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5841);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(694);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7405);
;// ../node_modules/rc-util/es/React/render.js





// Let compiler not to search module usage
var fullClone = (0,objectSpread2/* default */.A)({}, external_react_dom_);
var version = fullClone.version,
  reactRender = fullClone.render,
  unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {
  // Do nothing;
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0,esm_typeof/* default */.A)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = '__rc_react_root__';

// ========================== Render ==========================

function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}
function legacyRender(node, container) {
  reactRender === null || reactRender === void 0 || reactRender(node, container);
}

/** @private Test usage. Not work in prod */
function _r(node, container) {
  if (false) // removed by dead control flow
{}
}
function render(node, container) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender(node, container);
}

// ========================= Unmount ==========================
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(container) {
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function () {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}

/** @private Test usage. Not work in prod */
function _u(container) {
  if (false) // removed by dead control flow
{}
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2(container) {
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(createRoot !== undefined)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 2:
          legacyUnmount(container);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}
;// ../node_modules/antd/es/config-provider/UnstableContext.js
"use client";





const defaultReactRender = (node, container) => {
  // TODO: Remove in v6
  // Warning for React 19
  if (false) // removed by dead control flow
{}
  render(node, container);
  return () => {
    return unmount(container);
  };
};
let unstableRender = defaultReactRender;
/**
 * @deprecated Set React render function for compatible usage.
 * This is internal usage only compatible with React 19.
 * And will be removed in next major version.
 */
function unstableSetRender(render) {
  if (render) {
    unstableRender = render;
  }
  return unstableRender;
}

/***/ }),

/***/ 7148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2781),
    getRawTag = __webpack_require__(7903),
    objectToString = __webpack_require__(1738);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 7151:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ es_button)
});

// UNUSED EXPORTS: _ButtonColorTypes, _ButtonVariantTypes, convertLegacyProps, isString, isTwoCNChar, isUnBorderedButtonVariant, spaceChildren

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(4452);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../node_modules/rc-util/es/omit.js
var omit = __webpack_require__(5041);
// EXTERNAL MODULE: ../node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(8483);
// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(1247);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(6451);
// EXTERNAL MODULE: ../node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(5046);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(2506);
;// ../node_modules/antd/es/_util/wave/style.js

const genWaveStyle = token => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(','),
        '&-active': {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        '&.wave-quick': {
          transition: [`box-shadow ${token.motionDurationSlow} ${token.motionEaseInOut}`, `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`].join(',')
        }
      }
    }
  };
};
/* harmony default export */ const style = ((0,genStyleUtils/* genComponentStyleHook */.Or)('Wave', token => [genWaveStyle(token)]));
// EXTERNAL MODULE: ../node_modules/rc-util/es/hooks/useEvent.js
var hooks_useEvent = __webpack_require__(8728);
// EXTERNAL MODULE: ../node_modules/rc-util/es/raf.js
var raf = __webpack_require__(6599);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/useToken.js + 3 modules
var theme_useToken = __webpack_require__(6531);
;// ../node_modules/antd/es/_util/wave/interface.js

const TARGET_CLS = `${context/* defaultPrefixCls */.yH}-wave-target`;
// EXTERNAL MODULE: ../node_modules/rc-motion/es/index.js + 13 modules
var es = __webpack_require__(4406);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/UnstableContext.js + 1 modules
var UnstableContext = __webpack_require__(6982);
;// ../node_modules/antd/es/_util/wave/util.js
function isValidWaveColor(color) {
  return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && !/rgba\((?:\d*, ){3}0\)/.test(color) &&
  // any transparent rgba color
  color !== 'transparent';
}
function getTargetWaveColor(node) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
;// ../node_modules/antd/es/_util/wave/WaveEffect.js
"use client";









function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = props => {
  const {
    className,
    target,
    component,
    registerUnmount
  } = props;
  const divRef = external_react_.useRef(null);
  // ====================== Refs ======================
  const unmountRef = external_react_.useRef(null);
  external_react_.useEffect(() => {
    unmountRef.current = registerUnmount();
  }, []);
  // ===================== Effect =====================
  const [color, setWaveColor] = external_react_.useState(null);
  const [borderRadius, setBorderRadius] = external_react_.useState([]);
  const [left, setLeft] = external_react_.useState(0);
  const [top, setTop] = external_react_.useState(0);
  const [width, setWidth] = external_react_.useState(0);
  const [height, setHeight] = external_react_.useState(0);
  const [enabled, setEnabled] = external_react_.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map(radius => `${radius}px`).join(' ')
  };
  if (color) {
    waveStyle['--wave-color'] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    // Get wave color from target
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === 'static';
    // Rect
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    // Get border radius
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(radius => validateNum(parseFloat(radius))));
  }
  external_react_.useEffect(() => {
    if (target) {
      // We need delay to check position here
      // since UI may change after click
      const id = (0,raf/* default */.A)(() => {
        syncPos();
        setEnabled(true);
      });
      // Add resize observer to follow size
      let resizeObserver;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        raf/* default */.A.cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === 'Checkbox' || component === 'Radio') && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
  return /*#__PURE__*/external_react_.createElement(es/* default */.Ay, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5000,
    onAppearEnd: (_, event) => {
      var _a, _b;
      if (event.deadline || event.propertyName === 'opacity') {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        (_b = unmountRef.current) === null || _b === void 0 ? void 0 : _b.call(unmountRef).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, ({
    className: motionClassName
  }, ref) => (/*#__PURE__*/external_react_.createElement("div", {
    ref: (0,es_ref/* composeRef */.K4)(divRef, ref),
    className: classnames_default()(className, motionClassName, {
      'wave-quick': isSmallComponent
    }),
    style: waveStyle
  })));
};
const showWaveEffect = (target, info) => {
  var _a;
  const {
    component
  } = info;
  // Skip for unchecked checkbox
  if (component === 'Checkbox' && !((_a = target.querySelector('input')) === null || _a === void 0 ? void 0 : _a.checked)) {
    return;
  }
  // Create holder
  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = '0px';
  holder.style.top = '0px';
  target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
  const reactRender = (0,UnstableContext/* unstableSetRender */.L)();
  let unmountCallback = null;
  function registerUnmount() {
    return unmountCallback;
  }
  unmountCallback = reactRender(/*#__PURE__*/external_react_.createElement(WaveEffect, Object.assign({}, info, {
    target: target,
    registerUnmount: registerUnmount
  })), holder);
};
/* harmony default export */ const wave_WaveEffect = (showWaveEffect);
;// ../node_modules/antd/es/_util/wave/useWave.js







const useWave = (nodeRef, className, component) => {
  const {
    wave
  } = external_react_.useContext(context/* ConfigContext */.QO);
  const [, token, hashId] = (0,theme_useToken/* default */.Ay)();
  const showWave = (0,hooks_useEvent/* default */.A)(event => {
    const node = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node) {
      return;
    }
    const targetNode = node.querySelector(`.${TARGET_CLS}`) || node;
    const {
      showEffect
    } = wave || {};
    // Customize wave effect
    (showEffect || wave_WaveEffect)(targetNode, {
      className,
      token,
      component,
      event,
      hashId
    });
  });
  const rafId = external_react_.useRef(null);
  // Merge trigger event into one for each frame
  const showDebounceWave = event => {
    raf/* default */.A.cancel(rafId.current);
    rafId.current = (0,raf/* default */.A)(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
};
/* harmony default export */ const wave_useWave = (useWave);
;// ../node_modules/antd/es/_util/wave/index.js








const Wave = props => {
  const {
    children,
    disabled,
    component
  } = props;
  const {
    getPrefixCls
  } = (0,external_react_.useContext)(context/* ConfigContext */.QO);
  const containerRef = (0,external_react_.useRef)(null);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('wave');
  const [, hashId] = style(prefixCls);
  // =============================== Wave ===============================
  const showWave = wave_useWave(containerRef, classnames_default()(prefixCls, hashId), component);
  // ============================== Effect ==============================
  external_react_default().useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }
    // Click handler
    const onClick = e => {
      // Fix radio button click twice
      if (!(0,isVisible/* default */.A)(e.target) ||
      // No need wave
      !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
        return;
      }
      showWave(e);
    };
    // Bind events
    node.addEventListener('click', onClick, true);
    return () => {
      node.removeEventListener('click', onClick, true);
    };
  }, [disabled]);
  // ============================== Render ==============================
  if (! /*#__PURE__*/external_react_default().isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = (0,es_ref/* supportRef */.f3)(children) ? (0,es_ref/* composeRef */.K4)((0,es_ref/* getNodeRef */.A9)(children), containerRef) : containerRef;
  return (0,reactNode/* cloneElement */.Ob)(children, {
    ref
  });
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const wave = (Wave);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(5155);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(9812);
;// ../node_modules/antd/es/config-provider/hooks/useSize.js


const useSize = customSize => {
  const size = external_react_default().useContext(SizeContext/* default */.A);
  const mergedSize = external_react_default().useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === 'string') {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (typeof customSize === 'function') {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
/* harmony default export */ const hooks_useSize = (useSize);
// EXTERNAL MODULE: ../node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(8227);
;// ../node_modules/antd/es/button/button-group.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const GroupSizeContext = /*#__PURE__*/external_react_.createContext(undefined);
const ButtonGroup = props => {
  const {
    getPrefixCls,
    direction
  } = external_react_.useContext(context/* ConfigContext */.QO);
  const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props,
    others = __rest(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  const [,, hashId] = (0,theme_useToken/* default */.Ay)();
  const sizeCls = external_react_.useMemo(() => {
    switch (size) {
      case 'large':
        return 'lg';
      case 'small':
        return 'sm';
      default:
        return '';
    }
  }, [size]);
  if (false) // removed by dead control flow
{}
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return /*#__PURE__*/external_react_.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/external_react_.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
/* harmony default export */ const button_group = (ButtonGroup);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(4318);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/interface/presetColors.js
var presetColors = __webpack_require__(5378);
;// ../node_modules/antd/es/button/buttonHelpers.js
"use client";





const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonVariant(type) {
  return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === undefined) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,reactNode/* cloneElement */.Ob)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? /*#__PURE__*/external_react_default().createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/external_react_default().createElement("span", null, child);
  }
  if ((0,reactNode/* isFragment */.zv)(child)) {
    return /*#__PURE__*/external_react_default().createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  external_react_default().Children.forEach(children, child => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return external_react_default().Children.map(childList, child => splitCNCharsBySpace(child, needInserted));
}
const _ButtonTypes = (/* unused pure expression or super */ null && (['default', 'primary', 'dashed', 'link', 'text']));
const _ButtonShapes = (/* unused pure expression or super */ null && (['default', 'circle', 'round']));
const _ButtonHTMLTypes = (/* unused pure expression or super */ null && (['submit', 'button', 'reset']));
const _ButtonVariantTypes = (/* unused pure expression or super */ null && (['outlined', 'dashed', 'solid', 'filled', 'text', 'link']));
const _ButtonColorTypes = ['default', 'primary', 'danger'].concat((0,toConsumableArray/* default */.A)(presetColors/* PresetColors */.s));
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(2459);
;// ../node_modules/antd/es/button/IconWrapper.js
"use client";



const IconWrapper = /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => {
  const {
    className,
    style,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = classnames_default()(`${prefixCls}-icon`, className);
  return /*#__PURE__*/external_react_default().createElement("span", {
    ref: ref,
    className: iconWrapperCls,
    style: style
  }, children);
});
/* harmony default export */ const button_IconWrapper = (IconWrapper);
;// ../node_modules/antd/es/button/DefaultLoadingIcon.js
"use client";






const InnerLoadingIcon = /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => {
  const {
    prefixCls,
    className,
    style,
    iconClassName
  } = props;
  const mergedIconCls = classnames_default()(`${prefixCls}-loading-icon`, className);
  return /*#__PURE__*/external_react_default().createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: mergedIconCls,
    style: style,
    ref: ref
  }, /*#__PURE__*/external_react_default().createElement(LoadingOutlined/* default */.A, {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)'
});
const getRealWidth = node => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)'
});
const DefaultLoadingIcon = props => {
  const {
    prefixCls,
    loading,
    existIcon,
    className,
    style,
    mount
  } = props;
  const visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/external_react_default().createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: className,
      style: style
    });
  }
  return /*#__PURE__*/external_react_default().createElement(es/* default */.Ay, {
    visible: visible,
    // Used for minus flex gap style only
    motionName: `${prefixCls}-loading-icon-motion`,
    motionAppear: !mount,
    motionEnter: !mount,
    motionLeave: !mount,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, ({
    className: motionCls,
    style: motionStyle
  }, ref) => {
    const mergedStyle = Object.assign(Object.assign({}, style), motionStyle);
    return /*#__PURE__*/external_react_default().createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: classnames_default()(className, motionCls),
      style: mergedStyle,
      ref: ref
    });
  });
};
/* harmony default export */ const button_DefaultLoadingIcon = (DefaultLoadingIcon);
// EXTERNAL MODULE: ../node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(8656);
// EXTERNAL MODULE: ../node_modules/antd/es/style/index.js
var es_style = __webpack_require__(4029);
// EXTERNAL MODULE: ../node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(3889);
;// ../node_modules/antd/es/button/style/group.js
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    '&:not(:last-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }
    },
    '&:not(:first-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = token => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [{
      position: 'relative',
      display: 'inline-flex',
      // Border
      [`> span, > ${componentCls}`]: {
        '&:not(:last-child)': {
          [`&, & > ${componentCls}`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        '&:not(:first-child)': {
          marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
          [`&, & > ${componentCls}`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      },
      [componentCls]: {
        position: 'relative',
        zIndex: 1,
        '&:hover, &:focus, &:active': {
          zIndex: 2
        },
        '&[disabled]': {
          zIndex: 0
        }
      },
      [`${componentCls}-icon-only`]: {
        fontSize
      }
    },
    // Border Color
    genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor), genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)]
  };
};
/* harmony default export */ const group = (genGroupStyle);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2099);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8183);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(171);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(4690);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7405);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(9644);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(694);
// EXTERNAL MODULE: ../node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(8540);
;// ../node_modules/@rc-component/color-picker/es/color.js







var _excluded = ["b"],
  _excluded2 = ["v"];

var getRoundNumber = function getRoundNumber(value) {
  return Math.round(Number(value || 0));
};
var convertHsb2Hsv = function convertHsb2Hsv(color) {
  if (color instanceof fast_color_es/* FastColor */.Y) {
    return color;
  }
  if (color && (0,esm_typeof/* default */.A)(color) === 'object' && 'h' in color && 'b' in color) {
    var _ref = color,
      b = _ref.b,
      resets = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
    return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, resets), {}, {
      v: b
    });
  }
  if (typeof color === 'string' && /hsb/.test(color)) {
    return color.replace(/hsb/, 'hsv');
  }
  return color;
};
var color_Color = /*#__PURE__*/function (_FastColor) {
  (0,inherits/* default */.A)(Color, _FastColor);
  var _super = (0,createSuper/* default */.A)(Color);
  function Color(color) {
    (0,classCallCheck/* default */.A)(this, Color);
    return _super.call(this, convertHsb2Hsv(color));
  }
  (0,createClass/* default */.A)(Color, [{
    key: "toHsbString",
    value: function toHsbString() {
      var hsb = this.toHsb();
      var saturation = getRoundNumber(hsb.s * 100);
      var lightness = getRoundNumber(hsb.b * 100);
      var hue = getRoundNumber(hsb.h);
      var alpha = hsb.a;
      var hsbString = "hsb(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
      var hsbaString = "hsba(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%, ").concat(alpha.toFixed(alpha === 0 ? 0 : 2), ")");
      return alpha === 1 ? hsbString : hsbaString;
    }
  }, {
    key: "toHsb",
    value: function toHsb() {
      var _this$toHsv = this.toHsv(),
        v = _this$toHsv.v,
        resets = (0,objectWithoutProperties/* default */.A)(_this$toHsv, _excluded2);
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, resets), {}, {
        b: v,
        a: this.a
      });
    }
  }]);
  return Color;
}(fast_color_es/* FastColor */.Y);
;// ../node_modules/@rc-component/color-picker/es/util.js


var util_ColorPickerPrefixCls = 'rc-color-picker';
var util_generateColor = function generateColor(color) {
  if (color instanceof color_Color) {
    return color;
  }
  return new color_Color(color);
};
var util_defaultColor = util_generateColor('#1677ff');
var util_calculateColor = function calculateColor(props) {
  var offset = props.offset,
    targetRef = props.targetRef,
    containerRef = props.containerRef,
    color = props.color,
    type = props.type;
  var _containerRef$current = containerRef.current.getBoundingClientRect(),
    width = _containerRef$current.width,
    height = _containerRef$current.height;
  var _targetRef$current$ge = targetRef.current.getBoundingClientRect(),
    targetWidth = _targetRef$current$ge.width,
    targetHeight = _targetRef$current$ge.height;
  var centerOffsetX = targetWidth / 2;
  var centerOffsetY = targetHeight / 2;
  var saturation = (offset.x + centerOffsetX) / width;
  var bright = 1 - (offset.y + centerOffsetY) / height;
  var hsb = color.toHsb();
  var alphaOffset = saturation;
  var hueOffset = (offset.x + centerOffsetX) / width * 360;
  if (type) {
    switch (type) {
      case 'hue':
        return util_generateColor(_objectSpread(_objectSpread({}, hsb), {}, {
          h: hueOffset <= 0 ? 0 : hueOffset
        }));
      case 'alpha':
        return util_generateColor(_objectSpread(_objectSpread({}, hsb), {}, {
          a: alphaOffset <= 0 ? 0 : alphaOffset
        }));
    }
  }
  return util_generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
};
var util_calcOffset = function calcOffset(color, type) {
  var hsb = color.toHsb();
  switch (type) {
    case 'hue':
      return {
        x: hsb.h / 360 * 100,
        y: 50
      };
    case 'alpha':
      return {
        x: color.a * 100,
        y: 50
      };

    // Picker panel
    default:
      return {
        x: hsb.s * 100,
        y: (1 - hsb.b) * 100
      };
  }
};
;// ../node_modules/@rc-component/color-picker/es/components/ColorBlock.js


var ColorBlock_ColorBlock = function ColorBlock(_ref) {
  var color = _ref.color,
    prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var colorBlockCls = "".concat(prefixCls, "-color-block");
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(colorBlockCls, className),
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(colorBlockCls, "-inner"),
    style: {
      background: color
    }
  }));
};
/* harmony default export */ const components_ColorBlock = ((/* unused pure expression or super */ null && (ColorBlock_ColorBlock)));
;// ../node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js


function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  var scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  var scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
function useColorDrag_useColorDrag(props) {
  var targetRef = props.targetRef,
    containerRef = props.containerRef,
    direction = props.direction,
    onDragChange = props.onDragChange,
    onDragChangeComplete = props.onDragChangeComplete,
    calculate = props.calculate,
    color = props.color,
    disabledDrag = props.disabledDrag;
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    offsetValue = _useState2[0],
    setOffsetValue = _useState2[1];
  var mouseMoveRef = useRef(null);
  var mouseUpRef = useRef(null);

  // Always get position from `color`
  useEffect(function () {
    setOffsetValue(calculate());
  }, [color]);
  useEffect(function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveRef.current);
      document.removeEventListener('mouseup', mouseUpRef.current);
      document.removeEventListener('touchmove', mouseMoveRef.current);
      document.removeEventListener('touchend', mouseUpRef.current);
      mouseMoveRef.current = null;
      mouseUpRef.current = null;
    };
  }, []);
  var updateOffset = function updateOffset(e) {
    var _getPosition = getPosition(e),
      pageX = _getPosition.pageX,
      pageY = _getPosition.pageY;
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      rectX = _containerRef$current.x,
      rectY = _containerRef$current.y,
      width = _containerRef$current.width,
      height = _containerRef$current.height;
    var _targetRef$current$ge = targetRef.current.getBoundingClientRect(),
      targetWidth = _targetRef$current$ge.width,
      targetHeight = _targetRef$current$ge.height;
    var centerOffsetX = targetWidth / 2;
    var centerOffsetY = targetHeight / 2;
    var offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    var offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    var calcOffset = {
      x: offsetX,
      y: direction === 'x' ? offsetValue.y : offsetY
    };

    // Exclusion of boundary cases
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return false;
    }
    onDragChange === null || onDragChange === void 0 || onDragChange(calcOffset);
  };
  var onDragMove = function onDragMove(e) {
    e.preventDefault();
    updateOffset(e);
  };
  var onDragStop = function onDragStop(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    document.removeEventListener('touchmove', mouseMoveRef.current);
    document.removeEventListener('touchend', mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
    onDragChangeComplete === null || onDragChangeComplete === void 0 || onDragChangeComplete();
  };
  var onDragStart = function onDragStart(e) {
    // https://github.com/ant-design/ant-design/issues/43529
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragStop);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };
  return [offsetValue, onDragStart];
}
/* harmony default export */ const hooks_useColorDrag = ((/* unused pure expression or super */ null && (useColorDrag_useColorDrag)));
// EXTERNAL MODULE: ../node_modules/rc-util/es/index.js
var rc_util_es = __webpack_require__(3690);
;// ../node_modules/@rc-component/color-picker/es/components/Handler.js



var Handler_Handler = function Handler(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size,
    color = _ref.color,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-handler"), _defineProperty({}, "".concat(prefixCls, "-handler-sm"), size === 'small')),
    style: {
      backgroundColor: color
    }
  });
};
/* harmony default export */ const components_Handler = ((/* unused pure expression or super */ null && (Handler_Handler)));
;// ../node_modules/@rc-component/color-picker/es/components/Palette.js


var Palette_Palette = function Palette(_ref) {
  var children = _ref.children,
    style = _ref.style,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-palette"),
    style: _objectSpread({
      position: 'relative'
    }, style)
  }, children);
};
/* harmony default export */ const components_Palette = ((/* unused pure expression or super */ null && (Palette_Palette)));
;// ../node_modules/@rc-component/color-picker/es/components/Transform.js

var Transform_Transform = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function (props, ref) {
  var children = props.children,
    x = props.x,
    y = props.y;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      left: "".concat(x, "%"),
      top: "".concat(y, "%"),
      zIndex: 1,
      transform: 'translate(-50%, -50%)'
    }
  }, children);
})));
/* harmony default export */ const components_Transform = ((/* unused pure expression or super */ null && (Transform_Transform)));
;// ../node_modules/@rc-component/color-picker/es/components/Picker.js








var Picker_Picker = function Picker(_ref) {
  var color = _ref.color,
    onChange = _ref.onChange,
    prefixCls = _ref.prefixCls,
    onChangeComplete = _ref.onChangeComplete,
    disabled = _ref.disabled;
  var pickerRef = useRef();
  var transformRef = useRef();
  var colorRef = useRef(color);
  var onDragChange = useEvent(function (offsetValue) {
    var calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: pickerRef,
      color: color
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });
  var _useColorDrag = useColorDrag({
      color: color,
      containerRef: pickerRef,
      targetRef: transformRef,
      calculate: function calculate() {
        return calcOffset(color);
      },
      onDragChange: onDragChange,
      onDragChangeComplete: function onDragChangeComplete() {
        return onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(colorRef.current);
      },
      disabledDrag: disabled
    }),
    _useColorDrag2 = _slicedToArray(_useColorDrag, 2),
    offset = _useColorDrag2[0],
    dragStartHandle = _useColorDrag2[1];
  return /*#__PURE__*/React.createElement("div", {
    ref: pickerRef,
    className: "".concat(prefixCls, "-select"),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, /*#__PURE__*/React.createElement(Palette, {
    prefixCls: prefixCls
  }, /*#__PURE__*/React.createElement(Transform, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, /*#__PURE__*/React.createElement(Handler, {
    color: color.toRgbString(),
    prefixCls: prefixCls
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(color.toHsb().h, ",100%, 50%)"),
      backgroundImage: 'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))'
    }
  })));
};
/* harmony default export */ const components_Picker = ((/* unused pure expression or super */ null && (Picker_Picker)));
;// ../node_modules/@rc-component/color-picker/es/hooks/useColorState.js




var useColorState_useColorState = function useColorState(defaultValue, value) {
  var _useMergedState = useMergedState(defaultValue, {
      value: value
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var color = useMemo(function () {
    return generateColor(mergedValue);
  }, [mergedValue]);
  return [color, setValue];
};
/* harmony default export */ const hooks_useColorState = ((/* unused pure expression or super */ null && (useColorState_useColorState)));
;// ../node_modules/@rc-component/color-picker/es/components/Gradient.js



var Gradient_Gradient = function Gradient(_ref) {
  var colors = _ref.colors,
    children = _ref.children,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'to right' : _ref$direction,
    type = _ref.type,
    prefixCls = _ref.prefixCls;
  var gradientColors = useMemo(function () {
    return colors.map(function (color, idx) {
      var result = generateColor(color);
      if (type === 'alpha' && idx === colors.length - 1) {
        result = new Color(result.setA(1));
      }
      return result.toRgbString();
    }).join(',');
  }, [colors, type]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-gradient"),
    style: {
      position: 'absolute',
      inset: 0,
      background: "linear-gradient(".concat(direction, ", ").concat(gradientColors, ")")
    }
  }, children);
};
/* harmony default export */ const components_Gradient = ((/* unused pure expression or super */ null && (Gradient_Gradient)));
;// ../node_modules/@rc-component/color-picker/es/components/Slider.js











var Slider_Slider = function Slider(props) {
  var prefixCls = props.prefixCls,
    colors = props.colors,
    disabled = props.disabled,
    onChange = props.onChange,
    onChangeComplete = props.onChangeComplete,
    color = props.color,
    type = props.type;
  var sliderRef = useRef();
  var transformRef = useRef();
  var colorRef = useRef(color);
  var getValue = function getValue(c) {
    return type === 'hue' ? c.getHue() : c.a * 100;
  };
  var onDragChange = useEvent(function (offsetValue) {
    var calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color: color,
      type: type
    });
    colorRef.current = calcColor;
    onChange(getValue(calcColor));
  });
  var _useColorDrag = useColorDrag({
      color: color,
      targetRef: transformRef,
      containerRef: sliderRef,
      calculate: function calculate() {
        return calcOffset(color, type);
      },
      onDragChange: onDragChange,
      onDragChangeComplete: function onDragChangeComplete() {
        onChangeComplete(getValue(colorRef.current));
      },
      direction: 'x',
      disabledDrag: disabled
    }),
    _useColorDrag2 = _slicedToArray(_useColorDrag, 2),
    offset = _useColorDrag2[0],
    dragStartHandle = _useColorDrag2[1];
  var handleColor = React.useMemo(function () {
    if (type === 'hue') {
      var hsb = color.toHsb();
      hsb.s = 1;
      hsb.b = 1;
      hsb.a = 1;
      var lightColor = new Color(hsb);
      return lightColor;
    }
    return color;
  }, [color, type]);

  // ========================= Gradient =========================
  var gradientList = React.useMemo(function () {
    return colors.map(function (info) {
      return "".concat(info.color, " ").concat(info.percent, "%");
    });
  }, [colors]);

  // ========================== Render ==========================
  return /*#__PURE__*/React.createElement("div", {
    ref: sliderRef,
    className: classNames("".concat(prefixCls, "-slider"), "".concat(prefixCls, "-slider-").concat(type)),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, /*#__PURE__*/React.createElement(Palette, {
    prefixCls: prefixCls
  }, /*#__PURE__*/React.createElement(Transform, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, /*#__PURE__*/React.createElement(Handler, {
    size: "small",
    color: handleColor.toHexString(),
    prefixCls: prefixCls
  })), /*#__PURE__*/React.createElement(Gradient, {
    colors: gradientList,
    type: type,
    prefixCls: prefixCls
  })));
};
/* harmony default export */ const components_Slider = ((/* unused pure expression or super */ null && (Slider_Slider)));
;// ../node_modules/@rc-component/color-picker/es/hooks/useComponent.js


function useComponent_useComponent(components) {
  return React.useMemo(function () {
    var _ref = components || {},
      slider = _ref.slider;
    return [slider || Slider];
  }, [components]);
}
;// ../node_modules/@rc-component/color-picker/es/ColorPicker.js











var HUE_COLORS = [{
  color: 'rgb(255, 0, 0)',
  percent: 0
}, {
  color: 'rgb(255, 255, 0)',
  percent: 17
}, {
  color: 'rgb(0, 255, 0)',
  percent: 33
}, {
  color: 'rgb(0, 255, 255)',
  percent: 50
}, {
  color: 'rgb(0, 0, 255)',
  percent: 67
}, {
  color: 'rgb(255, 0, 255)',
  percent: 83
}, {
  color: 'rgb(255, 0, 0)',
  percent: 100
}];
var ColorPicker_ColorPicker = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function (props, ref) {
  var value = props.value,
    defaultValue = props.defaultValue,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? ColorPickerPrefixCls : _props$prefixCls,
    onChange = props.onChange,
    onChangeComplete = props.onChangeComplete,
    className = props.className,
    style = props.style,
    panelRender = props.panelRender,
    _props$disabledAlpha = props.disabledAlpha,
    disabledAlpha = _props$disabledAlpha === void 0 ? false : _props$disabledAlpha,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    components = props.components;

  // ========================== Components ==========================
  var _useComponent = useComponent(components),
    _useComponent2 = _slicedToArray(_useComponent, 1),
    Slider = _useComponent2[0];

  // ============================ Color =============================
  var _useColorState = useColorState(defaultValue || defaultColor, value),
    _useColorState2 = _slicedToArray(_useColorState, 2),
    colorValue = _useColorState2[0],
    setColorValue = _useColorState2[1];
  var alphaColor = useMemo(function () {
    return colorValue.setA(1).toRgbString();
  }, [colorValue]);

  // ============================ Events ============================
  var handleChange = function handleChange(data, type) {
    if (!value) {
      setColorValue(data);
    }
    onChange === null || onChange === void 0 || onChange(data, type);
  };

  // Convert
  var getHueColor = function getHueColor(hue) {
    return new Color(colorValue.setHue(hue));
  };
  var getAlphaColor = function getAlphaColor(alpha) {
    return new Color(colorValue.setA(alpha / 100));
  };

  // Slider change
  var onHueChange = function onHueChange(hue) {
    handleChange(getHueColor(hue), {
      type: 'hue',
      value: hue
    });
  };
  var onAlphaChange = function onAlphaChange(alpha) {
    handleChange(getAlphaColor(alpha), {
      type: 'alpha',
      value: alpha
    });
  };

  // Complete
  var onHueChangeComplete = function onHueChangeComplete(hue) {
    if (onChangeComplete) {
      onChangeComplete(getHueColor(hue));
    }
  };
  var onAlphaChangeComplete = function onAlphaChangeComplete(alpha) {
    if (onChangeComplete) {
      onChangeComplete(getAlphaColor(alpha));
    }
  };

  // ============================ Render ============================
  var mergeCls = classNames("".concat(prefixCls, "-panel"), className, _defineProperty({}, "".concat(prefixCls, "-panel-disabled"), disabled));
  var sharedSliderProps = {
    prefixCls: prefixCls,
    disabled: disabled,
    color: colorValue
  };
  var defaultPanel = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Picker, _extends({
    onChange: handleChange
  }, sharedSliderProps, {
    onChangeComplete: onChangeComplete
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-slider-container")
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-slider-group"), _defineProperty({}, "".concat(prefixCls, "-slider-group-disabled-alpha"), disabledAlpha))
  }, /*#__PURE__*/React.createElement(Slider, _extends({}, sharedSliderProps, {
    type: "hue",
    colors: HUE_COLORS,
    min: 0,
    max: 359,
    value: colorValue.getHue(),
    onChange: onHueChange,
    onChangeComplete: onHueChangeComplete
  })), !disabledAlpha && /*#__PURE__*/React.createElement(Slider, _extends({}, sharedSliderProps, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: 'rgba(255, 0, 4, 0)'
    }, {
      percent: 100,
      color: alphaColor
    }],
    min: 0,
    max: 100,
    value: colorValue.a * 100,
    onChange: onAlphaChange,
    onChangeComplete: onAlphaChangeComplete
  }))), /*#__PURE__*/React.createElement(ColorBlock, {
    color: colorValue.toRgbString(),
    prefixCls: prefixCls
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: mergeCls,
    style: style,
    ref: ref
  }, typeof panelRender === 'function' ? panelRender(defaultPanel) : defaultPanel);
})));
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_ColorPicker = ((/* unused pure expression or super */ null && (ColorPicker_ColorPicker)));
;// ../node_modules/@rc-component/color-picker/es/index.js




/* harmony default export */ const color_picker_es = ((/* unused pure expression or super */ null && (ColorPicker)));
;// ../node_modules/antd/es/color-picker/color.js



const toHexFormat = (value, alpha) => (value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, '').slice(0, alpha ? 8 : 6)) || '';
const getHex = (value, alpha) => value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/function () {
  function AggregationColor(color) {
    (0,classCallCheck/* default */.A)(this, AggregationColor);
    var _a;
    this.cleared = false;
    // Clone from another AggregationColor
    if (color instanceof AggregationColor) {
      this.metaColor = color.metaColor.clone();
      this.colors = (_a = color.colors) === null || _a === void 0 ? void 0 : _a.map(info => ({
        color: new AggregationColor(info.color),
        percent: info.percent
      }));
      this.cleared = color.cleared;
      return;
    }
    const isArray = Array.isArray(color);
    if (isArray && color.length) {
      this.colors = color.map(({
        color: c,
        percent
      }) => ({
        color: new AggregationColor(c),
        percent
      }));
      this.metaColor = new color_Color(this.colors[0].color.metaColor);
    } else {
      this.metaColor = new color_Color(isArray ? '' : color);
    }
    if (!color || isArray && !this.colors) {
      this.metaColor = this.metaColor.setA(0);
      this.cleared = true;
    }
  }
  return (0,createClass/* default */.A)(AggregationColor, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function toCssString() {
      const {
        colors
      } = this;
      // CSS line-gradient
      if (colors) {
        const colorsStr = colors.map(c => `${c.color.toRgbString()} ${c.percent}%`).join(', ');
        return `linear-gradient(90deg, ${colorsStr})`;
      }
      return this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function equals(color) {
      if (!color || this.isGradient() !== color.isGradient()) {
        return false;
      }
      if (!this.isGradient()) {
        return this.toHexString() === color.toHexString();
      }
      return this.colors.length === color.colors.length && this.colors.every((c, i) => {
        const target = color.colors[i];
        return c.percent === target.percent && c.color.equals(target.color);
      });
    }
  }]);
}();
// EXTERNAL MODULE: ../node_modules/rc-util/es/hooks/useMergedState.js
var hooks_useMergedState = __webpack_require__(9273);
;// ../node_modules/antd/es/color-picker/components/ColorPresets.js
"use client";









const genPresetColor = list => list.map(value => {
  value.colors = value.colors.map(generateColor);
  return value;
});
const isBright = (value, bgColorToken) => {
  const {
    r,
    g,
    b,
    a
  } = value.toRgb();
  const hsv = new color_Color(value.toRgbString()).onBackground(bgColorToken).toHsv();
  if (a <= 0.5) {
    // Adapted to dark mode
    return hsv.v > 0.5;
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const genCollapsePanelKey = (preset, index) => {
  var _a;
  const mergedKey = (_a = preset.key) !== null && _a !== void 0 ? _a : index;
  return `panel-${mergedKey}`;
};
const ColorPresets = ({
  prefixCls,
  presets,
  value: color,
  onChange
}) => {
  const [locale] = useLocale('ColorPicker');
  const [, token] = useToken();
  const [presetsValue] = useMergedState(genPresetColor(presets), {
    value: genPresetColor(presets),
    postState: genPresetColor
  });
  const colorPresetsPrefixCls = `${prefixCls}-presets`;
  const activeKeys = useMemo(() => presetsValue.reduce((acc, preset, index) => {
    const {
      defaultOpen = true
    } = preset;
    if (defaultOpen) {
      acc.push(genCollapsePanelKey(preset, index));
    }
    return acc;
  }, []), [presetsValue]);
  const handleClick = colorValue => {
    onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
  };
  const items = presetsValue.map((preset, index) => {
    var _a;
    return {
      key: genCollapsePanelKey(preset, index),
      label: /*#__PURE__*/React.createElement("div", {
        className: `${colorPresetsPrefixCls}-label`
      }, preset === null || preset === void 0 ? void 0 : preset.label),
      children: (/*#__PURE__*/React.createElement("div", {
        className: `${colorPresetsPrefixCls}-items`
      }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map((presetColor, index) => (/*#__PURE__*/React.createElement(ColorBlock
      // eslint-disable-next-line react/no-array-index-key
      , {
        // eslint-disable-next-line react/no-array-index-key
        key: `preset-${index}-${presetColor.toHexString()}`,
        color: generateColor(presetColor).toRgbString(),
        prefixCls: prefixCls,
        className: classNames(`${colorPresetsPrefixCls}-color`, {
          [`${colorPresetsPrefixCls}-color-checked`]: presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString()),
          [`${colorPresetsPrefixCls}-color-bright`]: isBright(presetColor, token.colorBgElevated)
        }),
        onClick: () => handleClick(presetColor)
      }))) : (/*#__PURE__*/React.createElement("span", {
        className: `${colorPresetsPrefixCls}-empty`
      }, locale.presetEmpty))))
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: colorPresetsPrefixCls
  }, /*#__PURE__*/React.createElement(Collapse, {
    defaultActiveKey: activeKeys,
    ghost: true,
    items: items
  }));
};
/* harmony default export */ const components_ColorPresets = ((/* unused pure expression or super */ null && (ColorPresets)));
// EXTERNAL MODULE: ../node_modules/antd/es/theme/themes/shared/genFontSizes.js
var genFontSizes = __webpack_require__(2561);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/util/getAlphaColor.js
var getAlphaColor = __webpack_require__(5857);
;// ../node_modules/antd/es/button/style/token.js






const prepareToken = token => {
  const {
    paddingInline,
    onlyIconSize
  } = token;
  const buttonToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
const prepareComponentToken = token => {
  var _a, _b, _c, _d, _e, _f;
  const contentFontSize = (_a = token.contentFontSize) !== null && _a !== void 0 ? _a : token.fontSize;
  const contentFontSizeSM = (_b = token.contentFontSizeSM) !== null && _b !== void 0 ? _b : token.fontSize;
  const contentFontSizeLG = (_c = token.contentFontSizeLG) !== null && _c !== void 0 ? _c : token.fontSizeLG;
  const contentLineHeight = (_d = token.contentLineHeight) !== null && _d !== void 0 ? _d : (0,genFontSizes/* getLineHeight */.k)(contentFontSize);
  const contentLineHeightSM = (_e = token.contentLineHeightSM) !== null && _e !== void 0 ? _e : (0,genFontSizes/* getLineHeight */.k)(contentFontSizeSM);
  const contentLineHeightLG = (_f = token.contentLineHeightLG) !== null && _f !== void 0 ? _f : (0,genFontSizes/* getLineHeight */.k)(contentFontSizeLG);
  const solidTextColor = isBright(new AggregationColor(token.colorBgSolid), '#fff') ? '#000' : '#fff';
  const shadowColorTokens = presetColors/* PresetColors */.s.reduce((prev, colorKey) => Object.assign(Object.assign({}, prev), {
    [`${colorKey}ShadowColor`]: `0 ${(0,cssinjs_es/* unit */.zA)(token.controlOutlineWidth)} 0 ${(0,getAlphaColor/* default */.A)(token[`${colorKey}1`], token.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, shadowColorTokens), {
    fontWeight: 400,
    defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
    primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
    dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
    primaryColor: token.colorTextLightSolid,
    dangerColor: token.colorTextLightSolid,
    borderColorDisabled: token.colorBorder,
    defaultGhostColor: token.colorBgContainer,
    ghostBg: 'transparent',
    defaultGhostBorderColor: token.colorBgContainer,
    paddingInline: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineSM: 8 - token.lineWidth,
    onlyIconSize: 'inherit',
    onlyIconSizeSM: 'inherit',
    onlyIconSizeLG: 'inherit',
    groupBorderColor: token.colorPrimaryHover,
    linkHoverBg: 'transparent',
    textTextColor: token.colorText,
    textTextHoverColor: token.colorText,
    textTextActiveColor: token.colorText,
    textHoverBg: token.colorFillTertiary,
    defaultColor: token.colorText,
    defaultBg: token.colorBgContainer,
    defaultBorderColor: token.colorBorder,
    defaultBorderColorDisabled: token.colorBorder,
    defaultHoverBg: token.colorBgContainer,
    defaultHoverColor: token.colorPrimaryHover,
    defaultHoverBorderColor: token.colorPrimaryHover,
    defaultActiveBg: token.colorBgContainer,
    defaultActiveColor: token.colorPrimaryActive,
    defaultActiveBorderColor: token.colorPrimaryActive,
    solidTextColor,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
    paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
    paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0)
  });
};
;// ../node_modules/antd/es/button/style/index.js






// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls,
    fontWeight,
    opacityLoading,
    motionDurationSlow,
    motionEaseInOut,
    marginXS,
    calc
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-flex',
      gap: token.marginXS,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      background: 'transparent',
      border: `${(0,cssinjs_es/* unit */.zA)(token.lineWidth)} ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      color: token.colorText,
      '&:disabled > *': {
        pointerEvents: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${componentCls}-icon > svg`]: (0,es_style/* resetIcon */.Nk)(),
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': (0,es_style/* genFocusStyle */.K8)(token),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: '0.34em'
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: '-0.34em',
        letterSpacing: '0.34em'
      },
      [`&${componentCls}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${componentCls}-compact-item`]: {
          flex: 'none'
        },
        [`&${componentCls}-round`]: {
          width: 'auto'
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: opacityLoading,
        cursor: 'default'
      },
      [`${componentCls}-loading-icon`]: {
        transition: ['width', 'opacity', 'margin'].map(transition => `${transition} ${motionDurationSlow} ${motionEaseInOut}`).join(',')
      },
      // iconPosition
      [`&:not(${componentCls}-icon-end)`]: {
        [`${componentCls}-loading-icon-motion`]: {
          '&-appear-start, &-enter-start': {
            marginInlineEnd: calc(marginXS).mul(-1).equal()
          },
          '&-appear-active, &-enter-active': {
            marginInlineEnd: 0
          },
          '&-leave-start': {
            marginInlineEnd: 0
          },
          '&-leave-active': {
            marginInlineEnd: calc(marginXS).mul(-1).equal()
          }
        }
      },
      '&-icon-end': {
        flexDirection: 'row-reverse',
        [`${componentCls}-loading-icon-motion`]: {
          '&-appear-start, &-enter-start': {
            marginInlineStart: calc(marginXS).mul(-1).equal()
          },
          '&-appear-active, &-enter-active': {
            marginInlineStart: 0
          },
          '&-leave-start': {
            marginInlineStart: 0
          },
          '&-leave-active': {
            marginInlineStart: calc(marginXS).mul(-1).equal()
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.calc(token.controlHeight).div(2).equal(),
  paddingInlineEnd: token.calc(token.controlHeight).div(2).equal()
});
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.borderColorDisabled,
  color: token.colorTextDisabled,
  background: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || undefined,
    background,
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    background
  }, hoverStyle), Object.assign({
    background
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token))
});
const genPureDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// ============================== Variant =============================
const genVariantButtonStyle = (token, hoverStyle, activeStyle, variant) => {
  const isPureDisabled = variant && ['link', 'text'].includes(variant);
  const genDisabledButtonStyle = isPureDisabled ? genPureDisabledButtonStyle : genSolidDisabledButtonStyle;
  return Object.assign(Object.assign({}, genDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, hoverStyle, activeStyle));
};
const genSolidButtonStyle = (token, textColor, background, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-solid`]: Object.assign({
    color: textColor,
    background
  }, genVariantButtonStyle(token, hoverStyle, activeStyle))
});
const genOutlinedDashedButtonStyle = (token, borderColor, background, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-outlined, &${token.componentCls}-variant-dashed`]: Object.assign({
    borderColor,
    background
  }, genVariantButtonStyle(token, hoverStyle, activeStyle))
});
const genDashedButtonStyle = token => ({
  [`&${token.componentCls}-variant-dashed`]: {
    borderStyle: 'dashed'
  }
});
const genFilledButtonStyle = (token, background, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-filled`]: Object.assign({
    boxShadow: 'none',
    background
  }, genVariantButtonStyle(token, hoverStyle, activeStyle))
});
const genTextLinkButtonStyle = (token, textColor, variant, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-${variant}`]: Object.assign({
    color: textColor,
    boxShadow: 'none'
  }, genVariantButtonStyle(token, hoverStyle, activeStyle, variant))
});
// =============================== Color ==============================
const genPresetColorStyle = token => {
  const {
    componentCls
  } = token;
  return presetColors/* PresetColors */.s.reduce((prev, colorKey) => {
    const darkColor = token[`${colorKey}6`];
    const lightColor = token[`${colorKey}1`];
    const hoverColor = token[`${colorKey}5`];
    const lightHoverColor = token[`${colorKey}2`];
    const lightBorderColor = token[`${colorKey}3`];
    const activeColor = token[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev), {
      [`&${componentCls}-color-${colorKey}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: darkColor,
        boxShadow: token[`${colorKey}ShadowColor`]
      }, genSolidButtonStyle(token, token.colorTextLightSolid, darkColor, {
        background: hoverColor
      }, {
        background: activeColor
      })), genOutlinedDashedButtonStyle(token, darkColor, token.colorBgContainer, {
        color: hoverColor,
        borderColor: hoverColor,
        background: token.colorBgContainer
      }, {
        color: activeColor,
        borderColor: activeColor,
        background: token.colorBgContainer
      })), genDashedButtonStyle(token)), genFilledButtonStyle(token, lightColor, {
        background: lightHoverColor
      }, {
        background: lightBorderColor
      })), genTextLinkButtonStyle(token, darkColor, 'link', {
        color: hoverColor
      }, {
        color: activeColor
      })), genTextLinkButtonStyle(token, darkColor, 'text', {
        color: hoverColor,
        background: lightColor
      }, {
        color: activeColor,
        background: lightBorderColor
      }))
    });
  }, {});
};
const genDefaultButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token.defaultColor,
  boxShadow: token.defaultShadow
}, genSolidButtonStyle(token, token.solidTextColor, token.colorBgSolid, {
  color: token.solidTextColor,
  background: token.colorBgSolidHover
}, {
  color: token.solidTextColor,
  background: token.colorBgSolidActive
})), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorFillTertiary, {
  background: token.colorFillSecondary
}, {
  background: token.colorFill
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.defaultGhostColor, token.defaultGhostBorderColor, token.colorTextDisabled, token.colorBorder)), genTextLinkButtonStyle(token, token.textTextColor, 'link', {
  color: token.colorLinkHover,
  background: token.linkHoverBg
}, {
  color: token.colorLinkActive
}));
const genPrimaryButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token.colorPrimary,
  boxShadow: token.primaryShadow
}, genOutlinedDashedButtonStyle(token, token.colorPrimary, token.colorBgContainer, {
  color: token.colorPrimaryTextHover,
  borderColor: token.colorPrimaryHover,
  background: token.colorBgContainer
}, {
  color: token.colorPrimaryTextActive,
  borderColor: token.colorPrimaryActive,
  background: token.colorBgContainer
})), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorPrimaryBg, {
  background: token.colorPrimaryBgHover
}, {
  background: token.colorPrimaryBorder
})), genTextLinkButtonStyle(token, token.colorPrimaryText, 'text', {
  color: token.colorPrimaryTextHover,
  background: token.colorPrimaryBg
}, {
  color: token.colorPrimaryTextActive,
  background: token.colorPrimaryBorder
})), genTextLinkButtonStyle(token, token.colorPrimaryText, 'link', {
  color: token.colorPrimaryTextHover,
  background: token.linkHoverBg
}, {
  color: token.colorPrimaryTextActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
}));
const genDangerousStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token.colorError,
  boxShadow: token.dangerShadow
}, genSolidButtonStyle(token, token.dangerColor, token.colorError, {
  background: token.colorErrorHover
}, {
  background: token.colorErrorActive
})), genOutlinedDashedButtonStyle(token, token.colorError, token.colorBgContainer, {
  color: token.colorErrorHover,
  borderColor: token.colorErrorBorderHover
}, {
  color: token.colorErrorActive,
  borderColor: token.colorErrorActive
})), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorErrorBg, {
  background: token.colorErrorBgFilledHover
}, {
  background: token.colorErrorBgActive
})), genTextLinkButtonStyle(token, token.colorError, 'text', {
  color: token.colorErrorHover,
  background: token.colorErrorBg
}, {
  color: token.colorErrorHover,
  background: token.colorErrorBgActive
})), genTextLinkButtonStyle(token, token.colorError, 'link', {
  color: token.colorErrorHover
}, {
  color: token.colorErrorActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
  color: token.colorErrorHover,
  borderColor: token.colorErrorHover
}, {
  color: token.colorErrorActive,
  borderColor: token.colorErrorActive
}));
const genLinkStyle = token => Object.assign(Object.assign({}, genTextLinkButtonStyle(token, token.colorLink, 'link', {
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorInfo, token.colorInfo, token.colorTextDisabled, token.colorBorder, {
  color: token.colorInfoHover,
  borderColor: token.colorInfoHover
}, {
  color: token.colorInfoActive,
  borderColor: token.colorInfoActive
}));
const genColorButtonStyle = token => {
  const {
    componentCls
  } = token;
  return Object.assign({
    [`${componentCls}-color-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-color-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-color-dangerous`]: genDangerousStyle(token),
    [`${componentCls}-color-link`]: genLinkStyle(token)
  }, genPresetColorStyle(token));
};
// =========== Compatible with versions earlier than 5.21.0 ===========
const genCompatibleButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedDashedButtonStyle(token, token.defaultBorderColor, token.defaultBg, {
  color: token.defaultHoverColor,
  borderColor: token.defaultHoverBorderColor,
  background: token.defaultHoverBg
}, {
  color: token.defaultActiveColor,
  borderColor: token.defaultActiveBorderColor,
  background: token.defaultActiveBg
})), genTextLinkButtonStyle(token, token.textTextColor, 'text', {
  color: token.textTextHoverColor,
  background: token.textHoverBg
}, {
  color: token.textTextActiveColor,
  background: token.colorBgTextActive
})), genSolidButtonStyle(token, token.primaryColor, token.colorPrimary, {
  background: token.colorPrimaryHover,
  color: token.primaryColor
}, {
  background: token.colorPrimaryActive,
  color: token.primaryColor
})), genTextLinkButtonStyle(token, token.colorLink, 'link', {
  color: token.colorLinkHover,
  background: token.linkHoverBg
}, {
  color: token.colorLinkActive
}));
// =============================== Size ===============================
const genButtonStyle = (token, prefixCls = '') => {
  const {
    componentCls,
    controlHeight,
    fontSize,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical,
    buttonIconOnlyFontSize
  } = token;
  return [{
    [prefixCls]: {
      fontSize,
      height: controlHeight,
      padding: `${(0,cssinjs_es/* unit */.zA)(buttonPaddingVertical)} ${(0,cssinjs_es/* unit */.zA)(buttonPaddingHorizontal)}`,
      borderRadius,
      [`&${componentCls}-icon-only`]: {
        width: controlHeight,
        [iconCls]: {
          fontSize: buttonIconOnlyFontSize
        }
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token)
  }, {
    [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => {
  const baseToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    fontSize: token.contentFontSize
  });
  return genButtonStyle(baseToken, token.componentCls);
};
const genSizeSmallButtonStyle = token => {
  const smallToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    controlHeight: token.controlHeightSM,
    fontSize: token.contentFontSizeSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: token.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: token.borderRadiusSM,
    buttonIconOnlyFontSize: token.onlyIconSizeSM
  });
  return genButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.contentFontSizeLG,
    buttonPaddingHorizontal: token.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: token.borderRadiusLG,
    buttonIconOnlyFontSize: token.onlyIconSizeLG
  });
  return genButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ const button_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Button', token => {
  const buttonToken = prepareToken(token);
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeBaseButtonStyle(buttonToken), genSizeSmallButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Color
  genColorButtonStyle(buttonToken),
  // https://github.com/ant-design/ant-design/issues/50969
  genCompatibleButtonStyle(buttonToken),
  // Button Group
  group(buttonToken)];
}, prepareComponentToken, {
  unitless: {
    fontWeight: true,
    contentLineHeight: true,
    contentLineHeightSM: true,
    contentLineHeightLG: true
  }
}));
;// ../node_modules/antd/es/style/compact-item.js
// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => `&:${n} ${childCombinator}`).join(',');
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : '';
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token, options = {
  focus: true
}) {
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
;// ../node_modules/antd/es/style/compact-item-vertical.js
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
;// ../node_modules/antd/es/button/style/compact.js




const genButtonCompactStyle = token => {
  const {
    componentCls,
    colorPrimaryHover,
    lineWidth,
    calc
  } = token;
  const insetOffset = calc(lineWidth).mul(-1).equal();
  const getCompactBorderStyle = vertical => {
    const selector = `${componentCls}-compact${vertical ? '-vertical' : ''}-item${componentCls}-primary:not([disabled])`;
    return {
      [`${selector} + ${selector}::before`]: {
        position: 'absolute',
        top: vertical ? insetOffset : 0,
        insetInlineStart: vertical ? 0 : insetOffset,
        backgroundColor: colorPrimaryHover,
        content: '""',
        width: vertical ? '100%' : lineWidth,
        height: vertical ? lineWidth : '100%'
      }
    };
  };
  // Special styles for Primary Button
  return Object.assign(Object.assign({}, getCompactBorderStyle()), getCompactBorderStyle(true));
};
// ============================== Export ==============================
/* harmony default export */ const compact = ((0,genStyleUtils/* genSubStyleComponent */.bf)(['Button', 'compact'], token => {
  const buttonToken = prepareToken(token);
  return [
  // Space Compact
  genCompactItemStyle(buttonToken), genCompactItemVerticalStyle(buttonToken), genButtonCompactStyle(buttonToken)];
}, prepareComponentToken));
;// ../node_modules/antd/es/button/button.js
"use client";

var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















function getLoadingConfig(loading) {
  if (typeof loading === 'object' && loading) {
    let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
const ButtonTypeMap = {
  default: ['default', 'outlined'],
  primary: ['primary', 'solid'],
  dashed: ['default', 'dashed'],
  // `link` is not a real color but we should compatible with it
  link: ['link', 'link'],
  text: ['default', 'text']
};
const InternalCompoundedButton = /*#__PURE__*/external_react_default().forwardRef((props, ref) => {
  var _a, _b;
  const {
      loading = false,
      prefixCls: customizePrefixCls,
      color,
      variant,
      type,
      danger = false,
      shape = 'default',
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      iconPosition = 'start',
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = 'button',
      classNames: customClassNames,
      style: customStyle = {},
      autoInsertSpace,
      autoFocus
    } = props,
    rest = button_rest(props, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]);
  // https://github.com/ant-design/ant-design/issues/47605
  // Compatible with original `type` behavior
  const mergedType = type || 'default';
  const {
    button
  } = external_react_default().useContext(context/* ConfigContext */.QO);
  const [mergedColor, mergedVariant] = (0,external_react_.useMemo)(() => {
    // >>>>> Local
    // Color & Variant
    if (color && variant) {
      return [color, variant];
    }
    // Sugar syntax
    if (type || danger) {
      const colorVariantPair = ButtonTypeMap[mergedType] || [];
      if (danger) {
        return ['danger', colorVariantPair[1]];
      }
      return colorVariantPair;
    }
    // >>> Context fallback
    if ((button === null || button === void 0 ? void 0 : button.color) && (button === null || button === void 0 ? void 0 : button.variant)) {
      return [button.color, button.variant];
    }
    return ['default', 'outlined'];
  }, [type, color, variant, danger, button === null || button === void 0 ? void 0 : button.variant, button === null || button === void 0 ? void 0 : button.color]);
  const isDanger = mergedColor === 'danger';
  const mergedColorText = isDanger ? 'dangerous' : mergedColor;
  const {
    getPrefixCls,
    direction,
    autoInsertSpace: contextAutoInsertSpace,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.TP)('button');
  const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : contextAutoInsertSpace) !== null && _a !== void 0 ? _a : true;
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = button_style(prefixCls);
  const disabled = (0,external_react_.useContext)(DisabledContext/* default */.A);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = (0,external_react_.useContext)(GroupSizeContext);
  const loadingOrDelay = (0,external_react_.useMemo)(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = (0,external_react_.useState)(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = (0,external_react_.useState)(false);
  const buttonRef = (0,external_react_.useRef)(null);
  const mergedRef = (0,es_ref/* useComposeRef */.xK)(ref, buttonRef);
  const needInserted = external_react_.Children.count(children) === 1 && !icon && !isUnBorderedButtonVariant(mergedVariant);
  // ========================= Mount ==========================
  // Record for mount status.
  // This will help to no to show the animation of loading on the first mount.
  const isMountRef = (0,external_react_.useRef)(true);
  external_react_default().useEffect(() => {
    isMountRef.current = false;
    return () => {
      isMountRef.current = true;
    };
  }, []);
  // ========================= Effect =========================
  // Loading
  (0,external_react_.useEffect)(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  // Two chinese characters check
  (0,external_react_.useEffect)(() => {
    // FIXME: for HOC usage like <FormatMessage />
    if (!buttonRef.current || !mergedInsertSpace) {
      return;
    }
    const buttonText = buttonRef.current.textContent || '';
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  });
  // Auto focus
  (0,external_react_.useEffect)(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  // ========================= Events =========================
  const handleClick = external_react_default().useCallback(e => {
    var _a;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, 'href' in props ? e : e);
  }, [props.onClick, innerLoading, mergedDisabled]);
  // ========================== Warn ==========================
  if (false) // removed by dead control flow
{}
  // ========================== Size ==========================
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.RQ)(prefixCls, direction);
  const sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  const sizeFullName = hooks_useSize(ctxSize => {
    var _a, _b;
    return (_b = (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : groupSize) !== null && _b !== void 0 ? _b : ctxSize;
  });
  const sizeCls = sizeFullName ? (_b = sizeClassNameMap[sizeFullName]) !== null && _b !== void 0 ? _b : '' : '';
  const iconType = innerLoading ? 'loading' : icon;
  const linkButtonRestProps = (0,omit/* default */.A)(rest, ['navigate']);
  // ========================= Render =========================
  const classes = classnames_default()(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    // Compatible with versions earlier than 5.21.0
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-dangerous`]: danger,
    [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
    [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonVariant(mergedVariant),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-icon-end`]: iconPosition === 'end'
  }, compactItemClassnames, className, rootClassName, contextClassName);
  const fullStyle = Object.assign(Object.assign({}, contextStyle), customStyle);
  const iconClasses = classnames_default()(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, contextClassNames.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), contextStyles.icon || {});
  const iconNode = icon && !innerLoading ? (/*#__PURE__*/external_react_default().createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon)) : loading && typeof loading === 'object' && loading.icon ? (/*#__PURE__*/external_react_default().createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: iconClasses,
    style: iconStyle
  }, loading.icon)) : (/*#__PURE__*/external_react_default().createElement(button_DefaultLoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: innerLoading,
    mount: isMountRef.current
  }));
  const kids = children || children === 0 ? spaceChildren(children, needInserted && mergedInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return wrapCSSVar(/*#__PURE__*/external_react_default().createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classnames_default()(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? undefined : linkButtonRestProps.href,
      style: fullStyle,
      onClick: handleClick,
      ref: mergedRef,
      tabIndex: mergedDisabled ? -1 : 0
    }), iconNode, kids));
  }
  let buttonNode = /*#__PURE__*/external_react_default().createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: mergedRef
  }), iconNode, kids, compactItemClassnames && /*#__PURE__*/external_react_default().createElement(compact, {
    prefixCls: prefixCls
  }));
  if (!isUnBorderedButtonVariant(mergedVariant)) {
    buttonNode = /*#__PURE__*/external_react_default().createElement(wave, {
      component: "Button",
      disabled: innerLoading
    }, buttonNode);
  }
  return wrapCSSVar(buttonNode);
});
const Button = InternalCompoundedButton;
Button.Group = button_group;
Button.__ANT_BUTTON = true;
if (false) // removed by dead control flow
{}
/* harmony default export */ const button_button = (Button);
;// ../node_modules/antd/es/button/index.js
"use client";



/* harmony default export */ const es_button = (button_button);

/***/ }),

/***/ 7560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_CloseOutlined)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
;// ../node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
// This icon file is generated automatically.
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
/* harmony default export */ const asn_CloseOutlined = (CloseOutlined);

// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(7916);
;// ../node_modules/@ant-design/icons/es/icons/CloseOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CloseOutlined_CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_CloseOutlined
  }));
};

/**![close](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzk5Ljg2IDE2Ni4zMWMuMDIgMCAuMDQuMDIuMDguMDZsNTcuNjkgNTcuN2MuMDQuMDMuMDUuMDUuMDYuMDhhLjEyLjEyIDAgMDEwIC4wNmMwIC4wMy0uMDIuMDUtLjA2LjA5TDU2OS45MyA1MTJsMjg3LjcgMjg3LjdjLjA0LjA0LjA1LjA2LjA2LjA5YS4xMi4xMiAwIDAxMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMyAwLS4wNS0uMDItLjA5LS4wNkw1MTIgNTY5LjkzbC0yODcuNyAyODcuN2MtLjA0LjA0LS4wNi4wNS0uMDkuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMiAwLS4wNC0uMDItLjA4LS4wNmwtNTcuNjktNTcuN2MtLjA0LS4wMy0uMDUtLjA1LS4wNi0uMDdhLjEyLjEyIDAgMDEwLS4wN2MwLS4wMy4wMi0uMDUuMDYtLjA5TDQ1NC4wNyA1MTJsLTI4Ny43LTI4Ny43Yy0uMDQtLjA0LS4wNS0uMDYtLjA2LS4wOWEuMTIuMTIgMCAwMTAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMDEuMDcgMGMuMDMgMCAuMDUuMDIuMDkuMDZMNTEyIDQ1NC4wN2wyODcuNy0yODcuN2MuMDQtLjA0LjA2LS4wNS4wOS0uMDZhLjEyLjEyIDAgMDEuMDcgMHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/external_react_.forwardRef(CloseOutlined_CloseOutlined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_CloseOutlined = (RefIcon);

/***/ }),

/***/ 7796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kv: () => (/* binding */ flexRender),
/* harmony export */   N4: () => (/* binding */ useReactTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6666);
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */




//

/**
 * If rendering headers, cells, or footers with custom markup, use flexRender instead of `cell.getValue()` or `cell.renderValue()`.
 */
function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === 'function' && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}
function useReactTable(options) {
  // Compose in the generic options to the user options
  const resolvedOptions = {
    state: {},
    // Dummy state
    onStateChange: () => {},
    // noop
    renderFallbackValue: null,
    ...options
  };

  // Create a new table and store it in state
  const [tableRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => ({
    current: (0,_tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__/* .createTable */ .ZR)(resolvedOptions)
  }));

  // By default, manage table state here using the table's initial state
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => tableRef.current.initialState);

  // Compose the default state above with any user state. This will allow the user
  // to only control a subset of the state if desired.
  tableRef.current.setOptions(prev => ({
    ...prev,
    ...options,
    state: {
      ...state,
      ...options.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: updater => {
      setState(updater);
      options.onStateChange == null || options.onStateChange(updater);
    }
  }));
  return tableRef.current;
}


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 7903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2781);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 7916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AntdIcon)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(7346);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1705);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(9644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(4452);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../node_modules/@ant-design/colors/es/index.js + 2 modules
var es = __webpack_require__(9328);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(4705);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7405);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(694);
// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/dynamicCSS.js + 1 modules
var dynamicCSS = __webpack_require__(4908);
// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/shadow.js
var shadow = __webpack_require__(493);
// EXTERNAL MODULE: ../node_modules/rc-util/es/warning.js
var warning = __webpack_require__(4358);
;// ../node_modules/@ant-design/icons/es/utils.js








function camelCase(input) {
  return input.replace(/-(.)/g, function (match, g) {
    return g.toUpperCase();
  });
}
function utils_warning(valid, message) {
  (0,warning/* default */.Ay)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0,esm_typeof/* default */.A)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0,esm_typeof/* default */.A)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/external_react_default().createElement(node.tag, (0,objectSpread2/* default */.A)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/external_react_default().createElement(node.tag, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0,es/* generate */.cM)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
  var _useContext = (0,external_react_.useContext)(Context/* default */.A),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls,
    layer = _useContext.layer;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  if (layer) {
    mergedStyleStr = "@layer ".concat(layer, " {\n").concat(mergedStyleStr, "\n}");
  }
  (0,external_react_.useEffect)(function () {
    var ele = eleRef.current;
    var shadowRoot = (0,shadow/* getShadowRoot */.j)(ele);
    (0,dynamicCSS/* updateCSS */.BD)(mergedStyleStr, '@ant-design-icons', {
      prepend: !layer,
      csp: csp,
      attachTo: shadowRoot
    });
  }, []);
};
;// ../node_modules/@ant-design/icons/es/components/IconBase.js


var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];


var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return (0,objectSpread2/* default */.A)({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = (0,objectWithoutProperties/* default */.A)(props, _excluded);
  var svgRef = external_react_.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ const components_IconBase = (IconBase);
;// ../node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = (0,slicedToArray/* default */.A)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
;// ../node_modules/@ant-design/icons/es/components/AntdIcon.js
'use client';





var AntdIcon_excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];







// Initial setting
// should move it to antd main repo?
setTwoToneColor(es/* blue */.z1.primary);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720

var Icon = /*#__PURE__*/external_react_.forwardRef(function (props, ref) {
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = (0,objectWithoutProperties/* default */.A)(props, AntdIcon_excluded);
  var _React$useContext = external_react_.useContext(Context/* default */.A),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames_default()(rootClassName, prefixCls, (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = (0,slicedToArray/* default */.A)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/external_react_.createElement("span", (0,esm_extends/* default */.A)({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/external_react_.createElement(components_IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ const AntdIcon = (Icon);

/***/ }),

/***/ 8033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_CloseCircleFilled)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
;// ../node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js
// This icon file is generated automatically.
var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
/* harmony default export */ const asn_CloseCircleFilled = (CloseCircleFilled);

// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(7916);
;// ../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CloseCircleFilled_CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_CloseCircleFilled
  }));
};

/**![close-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTEyIDY0YzI0Ny40IDAgNDQ4IDIwMC42IDQ0OCA0NDhTNzU5LjQgOTYwIDUxMiA5NjAgNjQgNzU5LjQgNjQgNTEyIDI2NC42IDY0IDUxMiA2NHptMTI3Ljk4IDI3NC44MmgtLjA0bC0uMDguMDZMNTEyIDQ2Ni43NSAzODQuMTQgMzM4Ljg4Yy0uMDQtLjA1LS4wNi0uMDYtLjA4LS4wNmEuMTIuMTIgMCAwMC0uMDcgMGMtLjAzIDAtLjA1LjAxLS4wOS4wNWwtNDUuMDIgNDUuMDJhLjIuMiAwIDAwLS4wNS4wOS4xMi4xMiAwIDAwMCAuMDd2LjAyYS4yNy4yNyAwIDAwLjA2LjA2TDQ2Ni43NSA1MTIgMzM4Ljg4IDYzOS44NmMtLjA1LjA0LS4wNi4wNi0uMDYuMDhhLjEyLjEyIDAgMDAwIC4wN2MwIC4wMy4wMS4wNS4wNS4wOWw0NS4wMiA0NS4wMmEuMi4yIDAgMDAuMDkuMDUuMTIuMTIgMCAwMC4wNyAwYy4wMiAwIC4wNC0uMDEuMDgtLjA1TDUxMiA1NTcuMjVsMTI3Ljg2IDEyNy44N2MuMDQuMDQuMDYuMDUuMDguMDVhLjEyLjEyIDAgMDAuMDcgMGMuMDMgMCAuMDUtLjAxLjA5LS4wNWw0NS4wMi00NS4wMmEuMi4yIDAgMDAuMDUtLjA5LjEyLjEyIDAgMDAwLS4wN3YtLjAyYS4yNy4yNyAwIDAwLS4wNS0uMDZMNTU3LjI1IDUxMmwxMjcuODctMTI3Ljg2Yy4wNC0uMDQuMDUtLjA2LjA1LS4wOGEuMTIuMTIgMCAwMDAtLjA3YzAtLjAzLS4wMS0uMDUtLjA1LS4wOWwtNDUuMDItNDUuMDJhLjIuMiAwIDAwLS4wOS0uMDUuMTIuMTIgMCAwMC0uMDcgMHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/external_react_.forwardRef(CloseCircleFilled_CloseCircleFilled);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_CloseCircleFilled = (RefIcon);

/***/ }),

/***/ 8392:
/***/ ((__unused_webpack_module, exports) => {

exports.escape = function escape(s) {
  return s.replace(/[\+\-\!\(\)\{\}\[\]\^\"\?\:\\\&\|\'\/\s\*\~]/g, prefixCharWithBackslashes);
};

function prefixCharWithBackslashes(char) {
  return '\\' + char;
}

exports.unescape = function unescape(s) {
  return s.replace(/\\([\+\-\!\(\)\{\}\[\]\^\"\?\:\\\&\|\'\/\s\*\~])/g, extractChar);
};

function extractChar(match, char) {
  return char;
}

exports.escapePhrase = function escapePhrase(s) {
  return s.replace(/"/g, prefixCharWithBackslashes);
};

exports.unescapePhrase = function unescapePhrase(s) {
  return s.replace(/\\(")/g, extractChar);
};


/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";


var implicit = '<implicit>';

module.exports = function toString(ast) {
  if (!ast) {
    return '';
  }

  var result = '';

  if (ast.start != null) {
    result += (ast.parenthesized ? '(' : '') + ast.start + ' ';
  }

  if (ast.field && ast.field !== implicit) {
    result += ast.field + ':';
  }

  if (ast.left) {
    if (ast.parenthesized && !ast.start) {
      result += '(';
    }
    result += toString(ast.left);

    if (ast.parenthesized && !ast.right) {
      result += ')';
    }
  }

  if (ast.operator) {
    if (ast.left) {
      result += ' ';
    }

    if (ast.operator !== implicit) {
      result += ast.operator;
    }
  }

  if (ast.right) {
    if (ast.operator && ast.operator !== implicit) {
      result += ' ';
    }
    result += toString(ast.right);

    if (ast.parenthesized) {
      result += ')';
    }
  }

  if (ast.term || (ast.term === '' && ast.quoted)) {
    if (ast.prefix) {
      result += ast.prefix;
    }
    if (ast.quoted) {
      result += '"';
      result += ast.term;
      result += '"';
    } else if (ast.regex) {
      result += '/';
      result += ast.term;
      result += '/';
    } else {
      result += ast.term;
    }

    if (ast.proximity != null) {
      result += '~' + ast.proximity;
    }

    if (ast.boost != null) {
      result += '^' + ast.boost;
    }
  }

  if (ast.term_min) {
    if (ast.inclusive === 'both' || ast.inclusive === 'left') {
      result += '[';
    } else {
      result += '{';
    }

    result += ast.term_min;
    result += ' TO ';
    result += ast.term_max;

    if (ast.inclusive === 'both' || ast.inclusive === 'right') {
      result += ']';
    } else {
      result += '}';
    }
  }

  if (ast.similarity) {
    result += '~';

    if (ast.similarity !== 0.5) {
      result += ast.similarity;
    }
  }

  return result;
};


/***/ }),

/***/ 8812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(2140);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 8890:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QP: () => (/* binding */ twMerge)
/* harmony export */ });
/* unused harmony exports createTailwindMerge, extendTailwindMerge, fromTheme, getDefaultConfig, mergeConfigs, twJoin, validators */
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = className => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = func => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = config => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  const parseClassName = className => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return className => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const sortModifiers = modifiers => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = mix => {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = key => {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = value => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = value => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = value => getIsArbitraryValue(value, 'number', isNumber);
const isInteger = value => Boolean(value) && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isTshirtSize = value => tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
const isArbitrarySize = value => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
const isArbitraryImage = value => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, '', isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const validators = /*#__PURE__*/Object.defineProperty({
  __proto__: null,
  isAny,
  isArbitraryImage,
  isArbitraryLength,
  isArbitraryNumber,
  isArbitraryPosition,
  isArbitraryShadow,
  isArbitrarySize,
  isArbitraryValue,
  isInteger,
  isLength,
  isNumber,
  isPercent,
  isTshirtSize
}, Symbol.toStringTag, {
  value: 'Module'
});
const getDefaultConfig = () => {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
};

/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
const mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, 'cacheSize', cacheSize);
  overrideProperty(baseConfig, 'prefix', prefix);
  overrideProperty(baseConfig, 'separator', separator);
  overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== undefined) {
    baseObject[overrideKey] = overrideValue;
  }
};
const overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
const mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== undefined) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
};
const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

//# sourceMappingURL=bundle-mjs.mjs.map


/***/ }),

/***/ 8953:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 9315:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bd: () => (/* reexport */ useTranslation_useTranslation)
});

// UNUSED EXPORTS: I18nContext, I18nextProvider, Trans, TransWithoutContext, Translation, composeInitialProps, date, getDefaults, getI18n, getInitialProps, initReactI18next, number, plural, select, selectOrdinal, setDefaults, setI18n, time, useSSR, withSSR, withTranslation

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
// EXTERNAL MODULE: ../node_modules/void-elements/index.js
var void_elements = __webpack_require__(7151);
var void_elements_default = /*#__PURE__*/__webpack_require__.n(void_elements);
;// ../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements_default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const html_parse_stringify_module = ((/* unused pure expression or super */ null && (c)));
//# sourceMappingURL=html-parse-stringify.module.js.map

;// ../node_modules/react-i18next/dist/es/utils.js
function utils_warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function utils_warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  utils_warn.apply(void 0, args);
}

var loadedClb = function loadedClb(i18n, cb) {
  return function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  };
};

function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
}
function loadLanguages(i18n, lng, ns, cb) {
  if (typeof ns === 'string') ns = [ns];
  ns.forEach(function (n) {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
}

function oldI18nextHasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };

  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    utils_warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;

  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }

  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: function precheck(i18nInstance, loadNotPending) {
      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
}
function utils_getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1705);
;// ../node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};

var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
  return htmlEntities[m];
};

var unescape_unescape = function unescape(text) {
  return text.replace(matchHtmlEntity, unescapeHtmlEntity);
};
;// ../node_modules/react-i18next/dist/es/defaults.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.A)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: unescape_unescape
};
function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
}
function defaults_getDefaults() {
  return defaultOptions;
}
;// ../node_modules/react-i18next/dist/es/TransWithoutContext.js



var _excluded = (/* unused pure expression or super */ null && (["format"])),
    _excluded2 = (/* unused pure expression or super */ null && (["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"]));

function TransWithoutContext_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function TransWithoutContext_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TransWithoutContext_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TransWithoutContext_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}

function getChildren(node) {
  if (!node) return [];
  return node.props ? node.props.children : node.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return isValidElement(child);
  });
}

function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}

function mergeProps(source, target) {
  var newTarget = TransWithoutContext_objectSpread({}, target);

  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}

function nodesToString(children, i18nOptions) {
  if (!children) return '';
  var stringNode = '';
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach(function (child, childIndex) {
    if (typeof child === 'string') {
      stringNode += "".concat(child);
    } else if (isValidElement(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;

      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      warn("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if (_typeof(child) === 'object') {
      var format = child.format,
          clone = _objectWithoutProperties(child, _excluded);

      var keys = Object.keys(clone);

      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        warn("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      warn("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
  if (targetString === '') return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};

  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if (_typeof(child) === 'object' && !isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  var ast = HTML.parse("<0>".concat(targetString, "</0>"));

  var opts = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, data), combinedTOpts);

  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }

  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
    if (child.dummy) child.children = inner;
    mem.push(cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? undefined : inner));
  }

  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

      if (node.type === 'tag') {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = isValidElement(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && _typeof(child) === 'object' && child.dummy && !isElement;
        var isKnownComponent = _typeof(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

        if (typeof child === 'string') {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);

          mem.push(cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);

            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push(createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if (_typeof(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push(cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push(cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;

        var _content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

        if (wrapTextNodes) {
          mem.push(createElement(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }

      return mem;
    }, []);
  }

  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      context = _ref.context,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      shouldUnescape = _ref.shouldUnescape,
      additionalProps = _objectWithoutProperties(_ref, _excluded2);

  var i18n = i18nFromProps || getI18n();

  if (!i18n) {
    warnOnce('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  if (context) tOptions.context = context;

  var reactI18nextOptions = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, getDefaults()), i18n.options && i18n.options.react);

  var namespaces = ns || t.ns || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? tOptions.interpolation : {
    interpolation: TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, tOptions.interpolation), {}, {
      prefix: '#$?',
      suffix: '?$#'
    })
  };

  var combinedTOpts = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread(TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, tOptions), {}, {
    count: count
  }, values), interpolationOverride), {}, {
    defaultValue: defaultValue,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? createElement(useAsParent, additionalProps, content) : content;
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2099);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8183);
;// ../node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
function setI18n(instance) {
  i18nInstance = instance;
}
function i18nInstance_getI18n() {
  return i18nInstance;
}
;// ../node_modules/react-i18next/dist/es/initReactI18next.js


var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
;// ../node_modules/react-i18next/dist/es/context.js




function context_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function context_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { context_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { context_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var context_I18nContext = (0,external_react_.createContext)();
var ReportNamespaces = function () {
  function ReportNamespaces() {
    (0,classCallCheck/* default */.A)(this, ReportNamespaces);

    this.usedNamespaces = {};
  }

  (0,createClass/* default */.A)(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);

  return ReportNamespaces;
}();
function context_composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(context_objectSpread(context_objectSpread({}, componentsInitialProps), i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  };
}
function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}
;// ../node_modules/react-i18next/dist/es/Trans.js


var Trans_excluded = (/* unused pure expression or super */ null && (["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"]));

function Trans_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Trans_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Trans_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Trans_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Trans_Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      context = _ref.context,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      shouldUnescape = _ref.shouldUnescape,
      additionalProps = _objectWithoutProperties(_ref, Trans_excluded);

  var _ref2 = useContext(I18nContext) || {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || getI18n();
  var t = tFromProps || i18n && i18n.t.bind(i18n);
  return TransWithoutContext(Trans_objectSpread({
    children: children,
    count: count,
    parent: parent,
    i18nKey: i18nKey,
    context: context,
    tOptions: tOptions,
    values: values,
    defaults: defaults,
    components: components,
    ns: ns || t && t.ns || defaultNSFromContext || i18n && i18n.options && i18n.options.defaultNS,
    i18n: i18n,
    t: tFromProps,
    shouldUnescape: shouldUnescape
  }, additionalProps));
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(7346);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(694);
;// ../node_modules/react-i18next/dist/es/useTranslation.js




function useTranslation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function useTranslation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useTranslation_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.A)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useTranslation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var usePrevious = function usePrevious(value, ignore) {
  var ref = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(function () {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};

function useTranslation_useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0,external_react_.useContext)(context_I18nContext) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || i18nInstance_getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();

  if (!i18n) {
    utils_warnOnce('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k, optsOrDefaultValue) {
      if (typeof optsOrDefaultValue === 'string') return optsOrDefaultValue;
      if (optsOrDefaultValue && (0,esm_typeof/* default */.A)(optsOrDefaultValue) === 'object' && typeof optsOrDefaultValue.defaultValue === 'string') return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) utils_warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = useTranslation_objectSpread(useTranslation_objectSpread(useTranslation_objectSpread({}, defaults_getDefaults()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense,
      keyPrefix = i18nOptions.keyPrefix;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return hasLoadedNamespace(n, i18n, i18nOptions);
  });

  function getT() {
    return i18n.getFixedT(props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  }

  var _useState = (0,external_react_.useState)(getT),
      _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var joinedNS = namespaces.join();
  if (props.lng) joinedNS = "".concat(props.lng).concat(joinedNS);
  var previousJoinedNS = usePrevious(joinedNS);
  var isMounted = (0,external_react_.useRef)(true);
  (0,external_react_.useEffect)(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, function () {
          if (isMounted.current) setT(getT);
        });
      } else {
        loadNamespaces(i18n, namespaces, function () {
          if (isMounted.current) setT(getT);
        });
      }
    }

    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getT);
    }

    function boundReset() {
      if (isMounted.current) setT(getT);
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [i18n, joinedNS]);
  var isInitial = (0,external_react_.useRef)(true);
  (0,external_react_.useEffect)(function () {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }

    isInitial.current = false;
  }, [i18n, keyPrefix]);
  var ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, function () {
        return resolve();
      });
    } else {
      loadNamespaces(i18n, namespaces, function () {
        return resolve();
      });
    }
  });
}
;// ../node_modules/react-i18next/dist/es/withTranslation.js



var withTranslation_excluded = (/* unused pure expression or super */ null && (["forwardedRef"]));

function withTranslation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function withTranslation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withTranslation_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withTranslation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      var forwardedRef = _ref.forwardedRef,
          rest = _objectWithoutProperties(_ref, withTranslation_excluded);

      var _useTranslation = useTranslation(ns, withTranslation_objectSpread(withTranslation_objectSpread({}, rest), {}, {
        keyPrefix: options.keyPrefix
      })),
          _useTranslation2 = _slicedToArray(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = withTranslation_objectSpread(withTranslation_objectSpread({}, rest), {}, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }

      return createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat(getDisplayName(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;

    var forwardRef = function forwardRef(props, ref) {
      return createElement(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };

    return options.withRef ? forwardRefReact(forwardRef) : I18nextWithTranslation;
  };
}
;// ../node_modules/react-i18next/dist/es/Translation.js


var Translation_excluded = (/* unused pure expression or super */ null && (["ns", "children"]));

function Translation(props) {
  var ns = props.ns,
      children = props.children,
      options = _objectWithoutProperties(props, Translation_excluded);

  var _useTranslation = useTranslation(ns, options),
      _useTranslation2 = _slicedToArray(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}
;// ../node_modules/react-i18next/dist/es/I18nextProvider.js


function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  var value = useMemo(function () {
    return {
      i18n: i18n,
      defaultNS: defaultNS
    };
  }, [i18n, defaultNS]);
  return createElement(I18nContext.Provider, {
    value: value
  }, children);
}
;// ../node_modules/react-i18next/dist/es/useSSR.js


function useSSR_useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;

  var _ref = useContext(I18nContext) || {},
      i18nFromContext = _ref.i18n;

  var i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n.options && i18n.options.isClone) return;

  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
      Object.keys(lngResources).forEach(function (ns) {
        if (mem.indexOf(ns) < 0) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }

  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}
;// ../node_modules/react-i18next/dist/es/withSSR.js


var withSSR_excluded = (/* unused pure expression or super */ null && (["initialI18nStore", "initialLanguage"]));

function withSSR_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function withSSR_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withSSR_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withSSR_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage,
          rest = _objectWithoutProperties(_ref, withSSR_excluded);

      useSSR(initialI18nStore, initialLanguage);
      return createElement(WrappedComponent, withSSR_objectSpread({}, rest));
    }

    I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat(getDisplayName(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}
;// ../node_modules/react-i18next/dist/es/index.js












var date = function date() {
  return '';
};
var time = function time() {
  return '';
};
var number = function number() {
  return '';
};
var es_select = function select() {
  return '';
};
var plural = function plural() {
  return '';
};
var selectOrdinal = function selectOrdinal() {
  return '';
};

/***/ }),

/***/ 9351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_progress)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
// EXTERNAL MODULE: ../node_modules/@ant-design/fast-color/es/index.js + 1 modules
var es = __webpack_require__(8540);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(1607);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
;// ../node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ const asn_CheckOutlined = (CheckOutlined);

// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(7916);
;// ../node_modules/@ant-design/icons/es/icons/CheckOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckOutlined_CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/external_react_.createElement(AntdIcon/* default */.A, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    icon: asn_CheckOutlined
  }));
};

/**![check](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44eiIgLz48L3N2Zz4=) */
var RefIcon = /*#__PURE__*/external_react_.forwardRef(CheckOutlined_CheckOutlined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const icons_CheckOutlined = (RefIcon);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(8033);
// EXTERNAL MODULE: ../node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(7560);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(4452);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../node_modules/rc-util/es/omit.js
var omit = __webpack_require__(5041);
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(6451);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7405);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(9644);
;// ../node_modules/rc-progress/es/common.js

var defaultProps = {
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  trailColor: '#D9D9D9',
  trailWidth: 1,
  gapPosition: 'bottom'
};
var useTransitionDuration = function useTransitionDuration() {
  var pathsRef = (0,external_react_.useRef)([]);
  var prevTimeStamp = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    var now = Date.now();
    var updated = false;
    pathsRef.current.forEach(function (path) {
      if (!path) {
        return;
      }
      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });
    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return pathsRef.current;
};
;// ../node_modules/rc-progress/es/Line.js



var _excluded = ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"];



var Line = function Line(props) {
  var _defaultProps$props = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, defaultProps), props),
    className = _defaultProps$props.className,
    percent = _defaultProps$props.percent,
    prefixCls = _defaultProps$props.prefixCls,
    strokeColor = _defaultProps$props.strokeColor,
    strokeLinecap = _defaultProps$props.strokeLinecap,
    strokeWidth = _defaultProps$props.strokeWidth,
    style = _defaultProps$props.style,
    trailColor = _defaultProps$props.trailColor,
    trailWidth = _defaultProps$props.trailWidth,
    transition = _defaultProps$props.transition,
    restProps = (0,objectWithoutProperties/* default */.A)(_defaultProps$props, _excluded);

  // eslint-disable-next-line no-param-reassign
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
  var paths = useTransitionDuration();
  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
  var viewBoxString = "0 0 100 ".concat(strokeWidth);
  var stackPtg = 0;
  return /*#__PURE__*/external_react_.createElement("svg", (0,esm_extends/* default */.A)({
    className: classnames_default()("".concat(prefixCls, "-line"), className),
    viewBox: viewBoxString,
    preserveAspectRatio: "none",
    style: style
  }, restProps), /*#__PURE__*/external_react_.createElement("path", {
    className: "".concat(prefixCls, "-line-trail"),
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0"
  }), percentList.map(function (ptg, index) {
    var dashPercent = 1;
    switch (strokeLinecap) {
      case 'round':
        dashPercent = 1 - strokeWidth / 100;
        break;
      case 'square':
        dashPercent = 1 - strokeWidth / 2 / 100;
        break;
      default:
        dashPercent = 1;
        break;
    }
    var pathStyle = {
      strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
      strokeDashoffset: "-".concat(stackPtg, "px"),
      transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
    };
    var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
    stackPtg += ptg;
    return /*#__PURE__*/external_react_.createElement("path", {
      key: index,
      className: "".concat(prefixCls, "-line-path"),
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: color,
      strokeWidth: strokeWidth,
      fillOpacity: "0",
      ref: function ref(elem) {
        // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
        // React will call the ref callback with the DOM element when the component mounts,
        // and call it with `null` when it unmounts.
        // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.

        paths[index] = elem;
      },
      style: pathStyle
    });
  }));
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Line = (Line);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(694);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(7346);
// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(9370);
;// ../node_modules/rc-progress/es/hooks/useId.js



var uuid = 0;

/** Is client side and not jsdom */
var isBrowserClient =  true && (0,canUseDom/* default */.A)();

/** Get unique id for accessibility usage */
function getUUID() {
  var retId;

  // Test never reach
  /* istanbul ignore if */
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
/* harmony default export */ const useId = (function (id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = external_react_.useState(),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  external_react_.useEffect(function () {
    setInnerId("rc_progress_".concat(getUUID()));
  }, []);
  return id || innerId;
});
;// ../node_modules/rc-progress/es/Circle/PtgCircle.js


var Block = function Block(_ref) {
  var bg = _ref.bg,
    children = _ref.children;
  return /*#__PURE__*/external_react_.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: bg
    }
  }, children);
};
function getPtgColors(color, scale) {
  return Object.keys(color).map(function (key) {
    var parsedKey = parseFloat(key);
    var ptgKey = "".concat(Math.floor(parsedKey * scale), "%");
    return "".concat(color[key], " ").concat(ptgKey);
  });
}
var PtgCircle = /*#__PURE__*/external_react_.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    color = props.color,
    gradientId = props.gradientId,
    radius = props.radius,
    circleStyleForStack = props.style,
    ptg = props.ptg,
    strokeLinecap = props.strokeLinecap,
    strokeWidth = props.strokeWidth,
    size = props.size,
    gapDegree = props.gapDegree;
  var isGradient = color && (0,esm_typeof/* default */.A)(color) === 'object';
  var stroke = isGradient ? "#FFF" : undefined;

  // ========================== Circle ==========================
  var halfSize = size / 2;
  var circleNode = /*#__PURE__*/external_react_.createElement("circle", {
    className: "".concat(prefixCls, "-circle-path"),
    r: radius,
    cx: halfSize,
    cy: halfSize,
    stroke: stroke,
    strokeLinecap: strokeLinecap,
    strokeWidth: strokeWidth,
    opacity: ptg === 0 ? 0 : 1,
    style: circleStyleForStack,
    ref: ref
  });

  // ========================== Render ==========================
  if (!isGradient) {
    return circleNode;
  }
  var maskId = "".concat(gradientId, "-conic");
  var fromDeg = gapDegree ? "".concat(180 + gapDegree / 2, "deg") : '0deg';
  var conicColors = getPtgColors(color, (360 - gapDegree) / 360);
  var linearColors = getPtgColors(color, 1);
  var conicColorBg = "conic-gradient(from ".concat(fromDeg, ", ").concat(conicColors.join(', '), ")");
  var linearColorBg = "linear-gradient(to ".concat(gapDegree ? 'bottom' : 'top', ", ").concat(linearColors.join(', '), ")");
  return /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement("mask", {
    id: maskId
  }, circleNode), /*#__PURE__*/external_react_.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: size,
    height: size,
    mask: "url(#".concat(maskId, ")")
  }, /*#__PURE__*/external_react_.createElement(Block, {
    bg: linearColorBg
  }, /*#__PURE__*/external_react_.createElement(Block, {
    bg: conicColorBg
  }))));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const Circle_PtgCircle = (PtgCircle);
;// ../node_modules/rc-progress/es/Circle/util.js
var VIEW_BOX_SIZE = 100;
var getCircleStyle = function getCircleStyle(perimeter, perimeterWithoutGap, offset, percent, rotateDeg, gapDegree, gapPosition, strokeColor, strokeLinecap, strokeWidth) {
  var stepSpace = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
  var offsetDeg = offset / 100 * 360 * ((360 - gapDegree) / 360);
  var positionDeg = gapDegree === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[gapPosition];
  var strokeDashoffset = (100 - percent) / 100 * perimeterWithoutGap;
  // Fix percent accuracy when strokeLinecap is round
  // https://github.com/ant-design/ant-design/issues/35009
  if (strokeLinecap === 'round' && percent !== 100) {
    strokeDashoffset += strokeWidth / 2;
    // when percent is small enough (<= 1%), keep smallest value to avoid it's disappearance
    if (strokeDashoffset >= perimeterWithoutGap) {
      strokeDashoffset = perimeterWithoutGap - 0.01;
    }
  }
  var halfSize = VIEW_BOX_SIZE / 2;
  return {
    stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
    strokeDasharray: "".concat(perimeterWithoutGap, "px ").concat(perimeter),
    strokeDashoffset: strokeDashoffset + stepSpace,
    transform: "rotate(".concat(rotateDeg + offsetDeg + positionDeg, "deg)"),
    transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
    fillOpacity: 0
  };
};
;// ../node_modules/rc-progress/es/Circle/index.js




var Circle_excluded = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];






function toArray(value) {
  var mergedValue = value !== null && value !== void 0 ? value : [];
  return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
}
var Circle = function Circle(props) {
  var _defaultProps$props = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, defaultProps), props),
    id = _defaultProps$props.id,
    prefixCls = _defaultProps$props.prefixCls,
    steps = _defaultProps$props.steps,
    strokeWidth = _defaultProps$props.strokeWidth,
    trailWidth = _defaultProps$props.trailWidth,
    _defaultProps$props$g = _defaultProps$props.gapDegree,
    gapDegree = _defaultProps$props$g === void 0 ? 0 : _defaultProps$props$g,
    gapPosition = _defaultProps$props.gapPosition,
    trailColor = _defaultProps$props.trailColor,
    strokeLinecap = _defaultProps$props.strokeLinecap,
    style = _defaultProps$props.style,
    className = _defaultProps$props.className,
    strokeColor = _defaultProps$props.strokeColor,
    percent = _defaultProps$props.percent,
    restProps = (0,objectWithoutProperties/* default */.A)(_defaultProps$props, Circle_excluded);
  var halfSize = VIEW_BOX_SIZE / 2;
  var mergedId = useId(id);
  var gradientId = "".concat(mergedId, "-gradient");
  var radius = halfSize - strokeWidth / 2;
  var perimeter = Math.PI * 2 * radius;
  var rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
  var perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
  var _ref = (0,esm_typeof/* default */.A)(steps) === 'object' ? steps : {
      count: steps,
      gap: 2
    },
    stepCount = _ref.count,
    stepGap = _ref.gap;
  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function (color) {
    return color && (0,esm_typeof/* default */.A)(color) === 'object';
  });
  var isConicGradient = gradient && (0,esm_typeof/* default */.A)(gradient) === 'object';
  var mergedStrokeLinecap = isConicGradient ? 'butt' : strokeLinecap;
  var circleStyle = getCircleStyle(perimeter, perimeterWithoutGap, 0, 100, rotateDeg, gapDegree, gapPosition, trailColor, mergedStrokeLinecap, strokeWidth);
  var paths = useTransitionDuration();
  var getStokeList = function getStokeList() {
    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, ptg, rotateDeg, gapDegree, gapPosition, color, mergedStrokeLinecap, strokeWidth);
      stackPtg += ptg;
      return /*#__PURE__*/external_react_.createElement(Circle_PtgCircle, {
        key: index,
        color: color,
        ptg: ptg,
        radius: radius,
        prefixCls: prefixCls,
        gradientId: gradientId,
        style: circleStyleForStack,
        strokeLinecap: mergedStrokeLinecap,
        strokeWidth: strokeWidth,
        gapDegree: gapDegree,
        ref: function ref(elem) {
          // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
          // React will call the ref callback with the DOM element when the component mounts,
          // and call it with `null` when it unmounts.
          // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.

          paths[index] = elem;
        },
        size: VIEW_BOX_SIZE
      });
    }).reverse();
  };
  var getStepStokeList = function getStepStokeList() {
    // only show the first percent when pass steps
    var current = Math.round(stepCount * (percentList[0] / 100));
    var stepPtg = 100 / stepCount;
    var stackPtg = 0;
    return new Array(stepCount).fill(null).map(function (_, index) {
      var color = index <= current - 1 ? strokeColorList[0] : trailColor;
      var stroke = color && (0,esm_typeof/* default */.A)(color) === 'object' ? "url(#".concat(gradientId, ")") : undefined;
      var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, stepPtg, rotateDeg, gapDegree, gapPosition, color, 'butt', strokeWidth, stepGap);
      stackPtg += (perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepGap) * 100 / perimeterWithoutGap;
      return /*#__PURE__*/external_react_.createElement("circle", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        r: radius,
        cx: halfSize,
        cy: halfSize,
        stroke: stroke,
        strokeWidth: strokeWidth,
        opacity: 1,
        style: circleStyleForStack,
        ref: function ref(elem) {
          paths[index] = elem;
        }
      });
    });
  };
  return /*#__PURE__*/external_react_.createElement("svg", (0,esm_extends/* default */.A)({
    className: classnames_default()("".concat(prefixCls, "-circle"), className),
    viewBox: "0 0 ".concat(VIEW_BOX_SIZE, " ").concat(VIEW_BOX_SIZE),
    style: style,
    id: id,
    role: "presentation"
  }, restProps), !stepCount && /*#__PURE__*/external_react_.createElement("circle", {
    className: "".concat(prefixCls, "-circle-trail"),
    r: radius,
    cx: halfSize,
    cy: halfSize,
    stroke: trailColor,
    strokeLinecap: mergedStrokeLinecap,
    strokeWidth: trailWidth || strokeWidth,
    style: circleStyle
  }), stepCount ? getStepStokeList() : getStokeList());
};
if (false) // removed by dead control flow
{}
/* harmony default export */ const es_Circle = (Circle);
;// ../node_modules/rc-progress/es/index.js



/* harmony default export */ const rc_progress_es = ({
  Line: es_Line,
  Circle: es_Circle
});
// EXTERNAL MODULE: ../node_modules/antd/es/tooltip/index.js + 90 modules
var tooltip = __webpack_require__(5395);
// EXTERNAL MODULE: ../node_modules/@ant-design/colors/es/index.js + 2 modules
var colors_es = __webpack_require__(9328);
;// ../node_modules/antd/es/progress/utils.js

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent({
  success,
  successPercent
}) {
  let percent = successPercent;
  /** @deprecated Use `percent` instead */
  if (success && 'progress' in success) {
    percent = success.progress;
  }
  if (success && 'percent' in success) {
    percent = success.percent;
  }
  return percent;
}
const getPercentage = ({
  percent,
  success,
  successPercent
}) => {
  const realSuccessPercent = validProgress(getSuccessPercent({
    success,
    successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
};
const getStrokeColor = ({
  success = {},
  strokeColor
}) => {
  const {
    strokeColor: successColor
  } = success;
  return [successColor || colors_es/* presetPrimaryColors */.uy.green, strokeColor || null];
};
const getSize = (size, type, extra) => {
  var _a, _b, _c, _d;
  let width = -1;
  let height = -1;
  if (type === 'step') {
    const steps = extra.steps;
    const strokeWidth = extra.strokeWidth;
    if (typeof size === 'string' || typeof size === 'undefined') {
      width = size === 'small' ? 2 : 14;
      height = strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 8;
    } else if (typeof size === 'number') {
      [width, height] = [size, size];
    } else {
      [width = 14, height = 8] = Array.isArray(size) ? size : [size.width, size.height];
    }
    width *= steps;
  } else if (type === 'line') {
    const strokeWidth = extra === null || extra === void 0 ? void 0 : extra.strokeWidth;
    if (typeof size === 'string' || typeof size === 'undefined') {
      height = strokeWidth || (size === 'small' ? 6 : 8);
    } else if (typeof size === 'number') {
      [width, height] = [size, size];
    } else {
      [width = -1, height = 8] = Array.isArray(size) ? size : [size.width, size.height];
    }
  } else if (type === 'circle' || type === 'dashboard') {
    if (typeof size === 'string' || typeof size === 'undefined') {
      [width, height] = size === 'small' ? [60, 60] : [120, 120];
    } else if (typeof size === 'number') {
      [width, height] = [size, size];
    } else if (Array.isArray(size)) {
      width = (_b = (_a = size[0]) !== null && _a !== void 0 ? _a : size[1]) !== null && _b !== void 0 ? _b : 120;
      height = (_d = (_c = size[0]) !== null && _c !== void 0 ? _c : size[1]) !== null && _d !== void 0 ? _d : 120;
    }
  }
  return [width, height];
};
;// ../node_modules/antd/es/progress/Circle.js
"use client";






const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = width => CIRCLE_MIN_STROKE_WIDTH / width * 100;
const Circle_Circle = props => {
  const {
    prefixCls,
    trailColor = null,
    strokeLinecap = 'round',
    gapPosition,
    gapDegree,
    width: originWidth = 120,
    type,
    children,
    success,
    size = originWidth,
    steps
  } = props;
  const [width, height] = getSize(size, 'circle');
  let {
    strokeWidth
  } = props;
  if (strokeWidth === undefined) {
    strokeWidth = Math.max(getMinPercent(width), 6);
  }
  const circleStyle = {
    width,
    height,
    fontSize: width * 0.15 + 6
  };
  const realGapDegree = external_react_.useMemo(() => {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  }, [gapDegree, type]);
  const percentArray = getPercentage(props);
  const gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
  // using className to style stroke color
  const isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  const strokeColor = getStrokeColor({
    success,
    strokeColor: props.strokeColor
  });
  const wrapperClassName = classnames_default()(`${prefixCls}-inner`, {
    [`${prefixCls}-circle-gradient`]: isGradient
  });
  const circleContent = /*#__PURE__*/external_react_.createElement(es_Circle, {
    steps: steps,
    percent: steps ? percentArray[1] : percentArray,
    strokeWidth: strokeWidth,
    trailWidth: strokeWidth,
    strokeColor: steps ? strokeColor[1] : strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: realGapDegree,
    gapPosition: gapPos
  });
  const smallCircle = width <= 20;
  const node = /*#__PURE__*/external_react_.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, circleContent, !smallCircle && children);
  if (smallCircle) {
    return /*#__PURE__*/external_react_.createElement(tooltip/* default */.A, {
      title: children
    }, node);
  }
  return node;
};
/* harmony default export */ const progress_Circle = (Circle_Circle);
// EXTERNAL MODULE: ../node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(8656);
// EXTERNAL MODULE: ../node_modules/antd/es/style/index.js
var style = __webpack_require__(4029);
// EXTERNAL MODULE: ../node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(2506);
// EXTERNAL MODULE: ../node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(3889);
;// ../node_modules/antd/es/progress/style/index.js



const LineStrokeColorVar = '--progress-line-stroke-color';
const Percent = '--progress-percent';
const genAntProgressActive = isRtl => {
  const direction = isRtl ? '100%' : '-100%';
  return new cssinjs_es/* Keyframes */.Mo(`antProgress${isRtl ? 'RTL' : 'LTR'}Active`, {
    '0%': {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.1
    },
    '20%': {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.5
    },
    to: {
      transform: 'translateX(0) scaleX(1)',
      opacity: 0
    }
  });
};
const genBaseStyle = token => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.dF)(token)), {
      display: 'inline-block',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-line': {
        position: 'relative',
        width: '100%',
        fontSize: token.fontSize
      },
      [`${progressCls}-outer`]: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%'
      },
      [`${progressCls}-inner`]: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        flex: 1,
        overflow: 'hidden',
        verticalAlign: 'middle',
        backgroundColor: token.remainingColor,
        borderRadius: token.lineBorderRadius
      },
      [`${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.defaultColor
        }
      },
      [`${progressCls}-success-bg, ${progressCls}-bg`]: {
        position: 'relative',
        background: token.defaultColor,
        borderRadius: token.lineBorderRadius,
        transition: `all ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`
      },
      [`${progressCls}-layout-bottom`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [`${progressCls}-text`]: {
          width: 'max-content',
          marginInlineStart: 0,
          marginTop: token.marginXXS
        }
      },
      [`${progressCls}-bg`]: {
        overflow: 'hidden',
        '&::after': {
          content: '""',
          background: {
            _multi_value_: true,
            value: ['inherit', `var(${LineStrokeColorVar})`]
          },
          height: '100%',
          width: `calc(1 / var(${Percent}) * 100%)`,
          display: 'block'
        },
        [`&${progressCls}-bg-inner`]: {
          minWidth: 'max-content',
          '&::after': {
            content: 'none'
          },
          [`${progressCls}-text-inner`]: {
            color: token.colorWhite,
            [`&${progressCls}-text-bright`]: {
              color: 'rgba(0, 0, 0, 0.45)'
            }
          }
        }
      },
      [`${progressCls}-success-bg`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: token.colorSuccess
      },
      [`${progressCls}-text`]: {
        display: 'inline-block',
        marginInlineStart: token.marginXS,
        color: token.colorText,
        lineHeight: 1,
        width: '2em',
        whiteSpace: 'nowrap',
        textAlign: 'start',
        verticalAlign: 'middle',
        wordBreak: 'normal',
        [iconPrefixCls]: {
          fontSize: token.fontSize
        },
        [`&${progressCls}-text-outer`]: {
          width: 'max-content'
        },
        [`&${progressCls}-text-outer${progressCls}-text-start`]: {
          width: 'max-content',
          marginInlineStart: 0,
          marginInlineEnd: token.marginXS
        }
      },
      [`${progressCls}-text-inner`]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginInlineStart: 0,
        padding: `0 ${(0,cssinjs_es/* unit */.zA)(token.paddingXXS)}`,
        [`&${progressCls}-text-start`]: {
          justifyContent: 'start'
        },
        [`&${progressCls}-text-end`]: {
          justifyContent: 'end'
        }
      },
      [`&${progressCls}-status-active`]: {
        [`${progressCls}-bg::before`]: {
          position: 'absolute',
          inset: 0,
          backgroundColor: token.colorBgContainer,
          borderRadius: token.lineBorderRadius,
          opacity: 0,
          animationName: genAntProgressActive(),
          animationDuration: token.progressActiveMotionDuration,
          animationTimingFunction: token.motionEaseOutQuint,
          animationIterationCount: 'infinite',
          content: '""'
        }
      },
      [`&${progressCls}-rtl${progressCls}-status-active`]: {
        [`${progressCls}-bg::before`]: {
          animationName: genAntProgressActive(true)
        }
      },
      [`&${progressCls}-status-exception`]: {
        [`${progressCls}-bg`]: {
          backgroundColor: token.colorError
        },
        [`${progressCls}-text`]: {
          color: token.colorError
        }
      },
      [`&${progressCls}-status-exception ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.colorError
        }
      },
      [`&${progressCls}-status-success`]: {
        [`${progressCls}-bg`]: {
          backgroundColor: token.colorSuccess
        },
        [`${progressCls}-text`]: {
          color: token.colorSuccess
        }
      },
      [`&${progressCls}-status-success ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.colorSuccess
        }
      }
    })
  };
};
const genCircleStyle = token => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: {
      [`${progressCls}-circle-trail`]: {
        stroke: token.remainingColor
      },
      [`&${progressCls}-circle ${progressCls}-inner`]: {
        position: 'relative',
        lineHeight: 1,
        backgroundColor: 'transparent'
      },
      [`&${progressCls}-circle ${progressCls}-text`]: {
        position: 'absolute',
        insetBlockStart: '50%',
        insetInlineStart: 0,
        width: '100%',
        margin: 0,
        padding: 0,
        color: token.circleTextColor,
        fontSize: token.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: 'normal',
        textAlign: 'center',
        transform: 'translateY(-50%)',
        [iconPrefixCls]: {
          fontSize: token.circleIconFontSize
        }
      },
      [`${progressCls}-circle&-status-exception`]: {
        [`${progressCls}-text`]: {
          color: token.colorError
        }
      },
      [`${progressCls}-circle&-status-success`]: {
        [`${progressCls}-text`]: {
          color: token.colorSuccess
        }
      }
    },
    [`${progressCls}-inline-circle`]: {
      lineHeight: 1,
      [`${progressCls}-inner`]: {
        verticalAlign: 'bottom'
      }
    }
  };
};
const genStepStyle = token => {
  const {
    componentCls: progressCls
  } = token;
  return {
    [progressCls]: {
      [`${progressCls}-steps`]: {
        display: 'inline-block',
        '&-outer': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        },
        '&-item': {
          flexShrink: 0,
          minWidth: token.progressStepMinWidth,
          marginInlineEnd: token.progressStepMarginInlineEnd,
          backgroundColor: token.remainingColor,
          transition: `all ${token.motionDurationSlow}`,
          '&-active': {
            backgroundColor: token.defaultColor
          }
        }
      }
    }
  };
};
const genSmallLine = token => {
  const {
    componentCls: progressCls,
    iconCls: iconPrefixCls
  } = token;
  return {
    [progressCls]: {
      [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-text ${iconPrefixCls}`]: {
        fontSize: token.fontSizeSM
      }
    }
  };
};
const prepareComponentToken = token => ({
  circleTextColor: token.colorText,
  defaultColor: token.colorInfo,
  remainingColor: token.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: '1em',
  circleIconFontSize: `${token.fontSize / token.fontSizeSM}em`
});
/* harmony default export */ const progress_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Progress', token => {
  const progressStepMarginInlineEnd = token.calc(token.marginXXS).div(2).equal();
  const progressToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    progressStepMarginInlineEnd,
    progressStepMinWidth: progressStepMarginInlineEnd,
    progressActiveMotionDuration: '2.4s'
  });
  return [genBaseStyle(progressToken), genCircleStyle(progressToken), genStepStyle(progressToken), genSmallLine(progressToken)];
}, prepareComponentToken));
;// ../node_modules/antd/es/progress/Line.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */
const sortGradient = gradients => {
  let tempArr = [];
  Object.keys(gradients).forEach(key => {
    const formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!Number.isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(({
    key,
    value
  }) => `${value} ${key}%`).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
const handleGradient = (strokeColor, directionConfig) => {
  const {
      from = colors_es/* presetPrimaryColors */.uy.blue,
      to = colors_es/* presetPrimaryColors */.uy.blue,
      direction = directionConfig === 'rtl' ? 'to left' : 'to right'
    } = strokeColor,
    rest = __rest(strokeColor, ["from", "to", "direction"]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest);
    const background = `linear-gradient(${direction}, ${sortedGradients})`;
    return {
      background,
      [LineStrokeColorVar]: background
    };
  }
  const background = `linear-gradient(${direction}, ${from}, ${to})`;
  return {
    background,
    [LineStrokeColorVar]: background
  };
};
const Line_Line = props => {
  const {
    prefixCls,
    direction: directionConfig,
    percent,
    size,
    strokeWidth,
    strokeColor,
    strokeLinecap = 'round',
    children,
    trailColor = null,
    percentPosition,
    success
  } = props;
  const {
    align: infoAlign,
    type: infoPosition
  } = percentPosition;
  const backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    [LineStrokeColorVar]: strokeColor,
    background: strokeColor
  };
  const borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
  const mergedSize = size !== null && size !== void 0 ? size : [-1, strokeWidth || (size === 'small' ? 6 : 8)];
  const [width, height] = getSize(mergedSize, 'line', {
    strokeWidth
  });
  if (false) // removed by dead control flow
{}
  const trailStyle = {
    backgroundColor: trailColor || undefined,
    borderRadius
  };
  const percentStyle = Object.assign(Object.assign({
    width: `${validProgress(percent)}%`,
    height,
    borderRadius
  }, backgroundProps), {
    [Percent]: validProgress(percent) / 100
  });
  const successPercent = getSuccessPercent(props);
  const successPercentStyle = {
    width: `${validProgress(successPercent)}%`,
    height,
    borderRadius,
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  const outerStyle = {
    width: width < 0 ? '100%' : width
  };
  const lineInner = /*#__PURE__*/external_react_.createElement("div", {
    className: `${prefixCls}-inner`,
    style: trailStyle
  }, /*#__PURE__*/external_react_.createElement("div", {
    className: classnames_default()(`${prefixCls}-bg`, `${prefixCls}-bg-${infoPosition}`),
    style: percentStyle
  }, infoPosition === 'inner' && children), successPercent !== undefined && (/*#__PURE__*/external_react_.createElement("div", {
    className: `${prefixCls}-success-bg`,
    style: successPercentStyle
  })));
  const isOuterStart = infoPosition === 'outer' && infoAlign === 'start';
  const isOuterEnd = infoPosition === 'outer' && infoAlign === 'end';
  return infoPosition === 'outer' && infoAlign === 'center' ? (/*#__PURE__*/external_react_.createElement("div", {
    className: `${prefixCls}-layout-bottom`
  }, lineInner, children)) : (/*#__PURE__*/external_react_.createElement("div", {
    className: `${prefixCls}-outer`,
    style: outerStyle
  }, isOuterStart && children, lineInner, isOuterEnd && children));
};
/* harmony default export */ const progress_Line = (Line_Line);
;// ../node_modules/antd/es/progress/Steps.js
"use client";




const Steps = props => {
  const {
    size,
    steps,
    rounding: customRounding = Math.round,
    percent = 0,
    strokeWidth = 8,
    strokeColor,
    trailColor = null,
    prefixCls,
    children
  } = props;
  const current = customRounding(steps * (percent / 100));
  const stepWidth = size === 'small' ? 2 : 14;
  const mergedSize = size !== null && size !== void 0 ? size : [stepWidth, strokeWidth];
  const [width, height] = getSize(mergedSize, 'step', {
    steps,
    strokeWidth
  });
  const unitWidth = width / steps;
  const styledSteps = Array.from({
    length: steps
  });
  for (let i = 0; i < steps; i++) {
    const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = /*#__PURE__*/external_react_.createElement("div", {
      key: i,
      className: classnames_default()(`${prefixCls}-steps-item`, {
        [`${prefixCls}-steps-item-active`]: i <= current - 1
      }),
      style: {
        backgroundColor: i <= current - 1 ? color : trailColor,
        width: unitWidth,
        height
      }
    });
  }
  return /*#__PURE__*/external_react_.createElement("div", {
    className: `${prefixCls}-steps-outer`
  }, styledSteps, children);
};
/* harmony default export */ const progress_Steps = (Steps);
;// ../node_modules/antd/es/progress/progress.js
"use client";

var progress_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















const ProgressTypes = (/* unused pure expression or super */ null && (['line', 'circle', 'dashboard']));
const ProgressStatuses = ['normal', 'exception', 'active', 'success'];
const Progress = /*#__PURE__*/external_react_.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      steps,
      strokeColor,
      percent = 0,
      size = 'default',
      showInfo = true,
      type = 'line',
      status,
      format,
      style,
      percentPosition = {}
    } = props,
    restProps = progress_rest(props, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style", "percentPosition"]);
  const {
    align: infoAlign = 'end',
    type: infoPosition = 'outer'
  } = percentPosition;
  const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  const strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
  const strokeColorIsBright = external_react_.useMemo(() => {
    if (strokeColorNotArray) {
      const color = typeof strokeColorNotArray === 'string' ? strokeColorNotArray : Object.values(strokeColorNotArray)[0];
      return new es/* FastColor */.Y(color).isLight();
    }
    return false;
  }, [strokeColor]);
  const percentNumber = external_react_.useMemo(() => {
    var _a, _b;
    const successPercent = getSuccessPercent(props);
    return parseInt(successPercent !== undefined ? (_a = successPercent !== null && successPercent !== void 0 ? successPercent : 0) === null || _a === void 0 ? void 0 : _a.toString() : (_b = percent !== null && percent !== void 0 ? percent : 0) === null || _b === void 0 ? void 0 : _b.toString(), 10);
  }, [percent, props.success, props.successPercent]);
  const progressStatus = external_react_.useMemo(() => {
    if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
      return 'success';
    }
    return status || 'normal';
  }, [status, percentNumber]);
  const {
    getPrefixCls,
    direction,
    progress: progressStyle
  } = external_react_.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('progress', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = progress_style(prefixCls);
  const isLineType = type === 'line';
  const isPureLineType = isLineType && !steps;
  const progressInfo = external_react_.useMemo(() => {
    if (!showInfo) {
      return null;
    }
    const successPercent = getSuccessPercent(props);
    let text;
    const textFormatter = format || (number => `${number}%`);
    const isBrightInnerColor = isLineType && strokeColorIsBright && infoPosition === 'inner';
    if (infoPosition === 'inner' || format || progressStatus !== 'exception' && progressStatus !== 'success') {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === 'exception') {
      text = isLineType ? /*#__PURE__*/external_react_.createElement(CloseCircleFilled/* default */.A, null) : /*#__PURE__*/external_react_.createElement(CloseOutlined/* default */.A, null);
    } else if (progressStatus === 'success') {
      text = isLineType ? /*#__PURE__*/external_react_.createElement(CheckCircleFilled/* default */.A, null) : /*#__PURE__*/external_react_.createElement(icons_CheckOutlined, null);
    }
    return /*#__PURE__*/external_react_.createElement("span", {
      className: classnames_default()(`${prefixCls}-text`, {
        [`${prefixCls}-text-bright`]: isBrightInnerColor,
        [`${prefixCls}-text-${infoAlign}`]: isPureLineType,
        [`${prefixCls}-text-${infoPosition}`]: isPureLineType
      }),
      title: typeof text === 'string' ? text : undefined
    }, text);
  }, [showInfo, percent, percentNumber, progressStatus, type, prefixCls, format]);
  if (false) // removed by dead control flow
{}
  let progress;
  // Render progress shape
  if (type === 'line') {
    progress = steps ? (/*#__PURE__*/external_react_.createElement(progress_Steps, Object.assign({}, props, {
      strokeColor: strokeColorNotGradient,
      prefixCls: prefixCls,
      steps: typeof steps === 'object' ? steps.count : steps
    }), progressInfo)) : (/*#__PURE__*/external_react_.createElement(progress_Line, Object.assign({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      direction: direction,
      percentPosition: {
        align: infoAlign,
        type: infoPosition
      }
    }), progressInfo));
  } else if (type === 'circle' || type === 'dashboard') {
    progress = /*#__PURE__*/external_react_.createElement(progress_Circle, Object.assign({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      progressStatus: progressStatus
    }), progressInfo);
  }
  const classString = classnames_default()(prefixCls, `${prefixCls}-status-${progressStatus}`, {
    [`${prefixCls}-${type === 'dashboard' && 'circle' || type}`]: type !== 'line',
    [`${prefixCls}-inline-circle`]: type === 'circle' && getSize(size, 'circle')[0] <= 20,
    [`${prefixCls}-line`]: isPureLineType,
    [`${prefixCls}-line-align-${infoAlign}`]: isPureLineType,
    [`${prefixCls}-line-position-${infoPosition}`]: isPureLineType,
    [`${prefixCls}-steps`]: steps,
    [`${prefixCls}-show-info`]: showInfo,
    [`${prefixCls}-${size}`]: typeof size === 'string',
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.className, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/external_react_.createElement("div", Object.assign({
    ref: ref,
    style: Object.assign(Object.assign({}, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.style), style),
    className: classString,
    role: "progressbar",
    "aria-valuenow": percentNumber,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, (0,omit/* default */.A)(restProps, ['trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent'])), progress));
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const progress = (Progress);
;// ../node_modules/antd/es/progress/index.js
"use client";


/* harmony default export */ const es_progress = (progress);

/***/ }),

/***/ 9812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   c: () => (/* binding */ SizeContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";


const SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const SizeContextProvider = ({
  children,
  size
}) => {
  const originSize = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SizeContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeContext);

/***/ }),

/***/ 9851:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_uniqBy)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/_baseIteratee.js + 34 modules
var _baseIteratee = __webpack_require__(7561);
// EXTERNAL MODULE: ../node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__(4070);
;// ../node_modules/lodash-es/_baseFindIndex.js
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ const _baseFindIndex = (baseFindIndex);

;// ../node_modules/lodash-es/_baseIsNaN.js
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ const _baseIsNaN = (baseIsNaN);

;// ../node_modules/lodash-es/_strictIndexOf.js
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ const _strictIndexOf = (strictIndexOf);

;// ../node_modules/lodash-es/_baseIndexOf.js




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ const _baseIndexOf = (baseIndexOf);

;// ../node_modules/lodash-es/_arrayIncludes.js


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

/* harmony default export */ const _arrayIncludes = (arrayIncludes);

;// ../node_modules/lodash-es/_arrayIncludesWith.js
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const _arrayIncludesWith = (arrayIncludesWith);

// EXTERNAL MODULE: ../node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__(8097);
// EXTERNAL MODULE: ../node_modules/lodash-es/_Set.js
var _Set = __webpack_require__(8779);
;// ../node_modules/lodash-es/noop.js
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ const lodash_es_noop = (noop);

// EXTERNAL MODULE: ../node_modules/lodash-es/_setToArray.js
var _setToArray = __webpack_require__(2801);
;// ../node_modules/lodash-es/_createSet.js




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set/* default */.A && (1 / (0,_setToArray/* default */.A)(new _Set/* default */.A([,-0]))[1]) == INFINITY) ? lodash_es_noop : function(values) {
  return new _Set/* default */.A(values);
};

/* harmony default export */ const _createSet = (createSet);

;// ../node_modules/lodash-es/_baseUniq.js







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return (0,_setToArray/* default */.A)(set);
    }
    isCommon = false;
    includes = _cacheHas/* default */.A;
    seen = new _SetCache/* default */.A;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ const _baseUniq = (baseUniq);

;// ../node_modules/lodash-es/uniqBy.js



/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, (0,_baseIteratee/* default */.A)(iteratee, 2)) : [];
}

/* harmony default export */ const lodash_es_uniqBy = (uniqBy);


/***/ }),

/***/ 9894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var queryParser = __webpack_require__(4589);
var escaping = __webpack_require__(8392);

exports.parse = queryParser.parse.bind(queryParser);
exports.toString = __webpack_require__(8704);

exports.term = {
  escape: escaping.escape,
  unescape: escaping.unescape
};

exports.phrase = {
  escape: escaping.escapePhrase,
  unescape: escaping.unescapePhrase
};


/***/ })

}]);
//# sourceMappingURL=513.js.map?_cache=b2c1251679e558fd193b