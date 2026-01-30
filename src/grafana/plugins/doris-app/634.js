(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[634],{

/***/ 174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5866);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8860);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9031);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7731);





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,_eq_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(object[index], value);
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIterateeCall);


/***/ }),

/***/ 1163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_some)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/_arraySome.js
var _arraySome = __webpack_require__(9774);
// EXTERNAL MODULE: ../node_modules/lodash-es/_baseIteratee.js + 34 modules
var _baseIteratee = __webpack_require__(7561);
// EXTERNAL MODULE: ../node_modules/lodash-es/_baseEach.js + 4 modules
var _baseEach = __webpack_require__(8570);
;// ../node_modules/lodash-es/_baseSome.js


/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  (0,_baseEach/* default */.A)(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

/* harmony default export */ const _baseSome = (baseSome);

// EXTERNAL MODULE: ../node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(8675);
// EXTERNAL MODULE: ../node_modules/lodash-es/_isIterateeCall.js
var _isIterateeCall = __webpack_require__(174);
;// ../node_modules/lodash-es/some.js






/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = (0,isArray/* default */.A)(collection) ? _arraySome/* default */.A : _baseSome;
  if (guard && (0,_isIterateeCall/* default */.A)(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, (0,_baseIteratee/* default */.A)(predicate, 3));
}

/* harmony default export */ const lodash_es_some = (some);


/***/ }),

/***/ 1573:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseFlatten)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/_arrayPush.js
var _arrayPush = __webpack_require__(9538);
// EXTERNAL MODULE: ../node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(807);
// EXTERNAL MODULE: ../node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__(3477);
// EXTERNAL MODULE: ../node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(8675);
;// ../node_modules/lodash-es/_isFlattenable.js




/** Built-in value references. */
var spreadableSymbol = _Symbol/* default */.A ? _Symbol/* default */.A.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,isArray/* default */.A)(value) || (0,isArguments/* default */.A)(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ const _isFlattenable = (isFlattenable);

;// ../node_modules/lodash-es/_baseFlatten.js



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        (0,_arrayPush/* default */.A)(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ const _baseFlatten = (baseFlatten);


/***/ }),

/***/ 3627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseOrderBy)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__(6046);
// EXTERNAL MODULE: ../node_modules/lodash-es/_baseGet.js
var _baseGet = __webpack_require__(9696);
// EXTERNAL MODULE: ../node_modules/lodash-es/_baseIteratee.js + 34 modules
var _baseIteratee = __webpack_require__(7561);
// EXTERNAL MODULE: ../node_modules/lodash-es/_baseEach.js + 4 modules
var _baseEach = __webpack_require__(8570);
// EXTERNAL MODULE: ../node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(8860);
;// ../node_modules/lodash-es/_baseMap.js



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = (0,isArrayLike/* default */.A)(collection) ? Array(collection.length) : [];

  (0,_baseEach/* default */.A)(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ const _baseMap = (baseMap);

;// ../node_modules/lodash-es/_baseSortBy.js
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/* harmony default export */ const _baseSortBy = (baseSortBy);

// EXTERNAL MODULE: ../node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__(9131);
// EXTERNAL MODULE: ../node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(932);
;// ../node_modules/lodash-es/_compareAscending.js


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = (0,isSymbol/* default */.A)(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = (0,isSymbol/* default */.A)(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/* harmony default export */ const _compareAscending = (compareAscending);

;// ../node_modules/lodash-es/_compareMultiple.js


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/* harmony default export */ const _compareMultiple = (compareMultiple);

// EXTERNAL MODULE: ../node_modules/lodash-es/identity.js
var identity = __webpack_require__(3910);
// EXTERNAL MODULE: ../node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(8675);
;// ../node_modules/lodash-es/_baseOrderBy.js










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = (0,_arrayMap/* default */.A)(iteratees, function(iteratee) {
      if ((0,isArray/* default */.A)(iteratee)) {
        return function(value) {
          return (0,_baseGet/* default */.A)(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity/* default */.A];
  }

  var index = -1;
  iteratees = (0,_arrayMap/* default */.A)(iteratees, (0,_baseUnary/* default */.A)(_baseIteratee/* default */.A));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = (0,_arrayMap/* default */.A)(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

/* harmony default export */ const _baseOrderBy = (baseOrderBy);


/***/ }),

/***/ 3689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xr: () => (/* binding */ useSetAtom),
/* harmony export */   fp: () => (/* binding */ useAtom),
/* harmony export */   md: () => (/* binding */ useAtomValue)
/* harmony export */ });
/* unused harmony exports Provider, useStore */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4945);
/* harmony import */ var jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4366);
'use client';




const StoreContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);
function useStore(options) {
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StoreContext);
  return (options == null ? void 0 : options.store) || store || (0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__/* .getDefaultStore */ .zp)();
}
function Provider({
  children,
  store
}) {
  const storeRef = useRef(void 0);
  if (!store && !storeRef.current) {
    storeRef.current = createStore();
  }
  return createElement(
    StoreContext.Provider,
    {
      value: store || storeRef.current
    },
    children
  );
}

const isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
const attachPromiseStatus = (promise) => {
  if (!promise.status) {
    promise.status = "pending";
    promise.then(
      (v) => {
        promise.status = "fulfilled";
        promise.value = v;
      },
      (e) => {
        promise.status = "rejected";
        promise.reason = e;
      }
    );
  }
};
const use = react__WEBPACK_IMPORTED_MODULE_0__.use || // A shim for older React versions
((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    attachPromiseStatus(promise);
    throw promise;
  }
});
const continuablePromiseMap = /* @__PURE__ */ new WeakMap();
const createContinuablePromise = (promise, getValue) => {
  let continuablePromise = continuablePromiseMap.get(promise);
  if (!continuablePromise) {
    continuablePromise = new Promise((resolve, reject) => {
      let curr = promise;
      const onFulfilled = (me) => (v) => {
        if (curr === me) {
          resolve(v);
        }
      };
      const onRejected = (me) => (e) => {
        if (curr === me) {
          reject(e);
        }
      };
      const onAbort = () => {
        try {
          const nextValue = getValue();
          if (isPromiseLike(nextValue)) {
            continuablePromiseMap.set(nextValue, continuablePromise);
            curr = nextValue;
            nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
            (0,jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_2__/* .INTERNAL_registerAbortHandler */ .MO)(nextValue, onAbort);
          } else {
            resolve(nextValue);
          }
        } catch (e) {
          reject(e);
        }
      };
      promise.then(onFulfilled(promise), onRejected(promise));
      (0,jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_2__/* .INTERNAL_registerAbortHandler */ .MO)(promise, onAbort);
    });
    continuablePromiseMap.set(promise, continuablePromise);
  }
  return continuablePromise;
};
function useAtomValue(atom, options) {
  const { delay, unstable_promiseStatus: promiseStatus = !react__WEBPACK_IMPORTED_MODULE_0__.use } = options || {};
  const store = useStore(options);
  const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(
    (prev) => {
      const nextValue = store.get(atom);
      if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
        return prev;
      }
      return [nextValue, store, atom];
    },
    void 0,
    () => [store.get(atom), store, atom]
  );
  let value = valueFromReducer;
  if (storeFromReducer !== store || atomFromReducer !== atom) {
    rerender();
    value = store.get(atom);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const unsub = store.sub(atom, () => {
      if (promiseStatus) {
        try {
          const value2 = store.get(atom);
          if (isPromiseLike(value2)) {
            attachPromiseStatus(
              createContinuablePromise(value2, () => store.get(atom))
            );
          }
        } catch (e) {
        }
      }
      if (typeof delay === "number") {
        setTimeout(rerender, delay);
        return;
      }
      rerender();
    });
    rerender();
    return unsub;
  }, [store, atom, delay, promiseStatus]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(value);
  if (isPromiseLike(value)) {
    const promise = createContinuablePromise(value, () => store.get(atom));
    if (promiseStatus) {
      attachPromiseStatus(promise);
    }
    return use(promise);
  }
  return value;
}

function useSetAtom(atom, options) {
  const store = useStore(options);
  const setAtom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (...args) => {
      if (( false ? 0 : void 0) !== "production" && !("write" in atom)) {
        throw new Error("not writable atom");
      }
      return store.set(atom, ...args);
    },
    [store, atom]
  );
  return setAtom;
}

function useAtom(atom, options) {
  return [
    useAtomValue(atom, options),
    // We do wrong type assertion here, which results in throwing an error.
    useSetAtom(atom, options)
  ];
}




/***/ }),

/***/ 3819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseOrderBy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3627);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8675);



/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return (0,_baseOrderBy_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(collection, iteratees, orders);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderBy);


/***/ }),

/***/ 4132:
/***/ ((module) => {

// Copyright 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 Simon Lydell
// License: MIT.
var HashbangComment, Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace, jsTokens;
RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
SingleLineComment = /\/\/.*/y;
HashbangComment = /^#!.*/;
JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
JSXText = /[^<>{}]+/y;
TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
Newline = RegExp(LineTerminatorSequence.source);
module.exports = jsTokens = function*(input, {jsx = false} = {}) {
	var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
	({length} = input);
	lastIndex = 0;
	lastSignificantToken = "";
	stack = [
		{tag: "JS"}
	];
	braces = [];
	parenNesting = 0;
	postfixIncDec = false;
	if (match = HashbangComment.exec(input)) {
		yield ({
			type: "HashbangComment",
			value: match[0]
		});
		lastIndex = match[0].length;
	}
	while (lastIndex < length) {
		mode = stack[stack.length - 1];
		switch (mode.tag) {
			case "JS":
			case "JSNonExpressionParen":
			case "InterpolationInTemplate":
			case "InterpolationInJSX":
				if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
					RegularExpressionLiteral.lastIndex = lastIndex;
					if (match = RegularExpressionLiteral.exec(input)) {
						lastIndex = RegularExpressionLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "RegularExpressionLiteral",
							value: match[0],
							closed: match[1] !== void 0 && match[1] !== "\\"
						});
						continue;
					}
				}
				Punctuator.lastIndex = lastIndex;
				if (match = Punctuator.exec(input)) {
					punctuator = match[0];
					nextLastIndex = Punctuator.lastIndex;
					nextLastSignificantToken = punctuator;
					switch (punctuator) {
						case "(":
							if (lastSignificantToken === "?NonExpressionParenKeyword") {
								stack.push({
									tag: "JSNonExpressionParen",
									nesting: parenNesting
								});
							}
							parenNesting++;
							postfixIncDec = false;
							break;
						case ")":
							parenNesting--;
							postfixIncDec = true;
							if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
								stack.pop();
								nextLastSignificantToken = "?NonExpressionParenEnd";
								postfixIncDec = false;
							}
							break;
						case "{":
							Punctuator.lastIndex = 0;
							isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
							braces.push(isExpression);
							postfixIncDec = false;
							break;
						case "}":
							switch (mode.tag) {
								case "InterpolationInTemplate":
									if (braces.length === mode.nesting) {
										Template.lastIndex = lastIndex;
										match = Template.exec(input);
										lastIndex = Template.lastIndex;
										lastSignificantToken = match[0];
										if (match[1] === "${") {
											lastSignificantToken = "?InterpolationInTemplate";
											postfixIncDec = false;
											yield ({
												type: "TemplateMiddle",
												value: match[0]
											});
										} else {
											stack.pop();
											postfixIncDec = true;
											yield ({
												type: "TemplateTail",
												value: match[0],
												closed: match[1] === "`"
											});
										}
										continue;
									}
									break;
								case "InterpolationInJSX":
									if (braces.length === mode.nesting) {
										stack.pop();
										lastIndex += 1;
										lastSignificantToken = "}";
										yield ({
											type: "JSXPunctuator",
											value: "}"
										});
										continue;
									}
							}
							postfixIncDec = braces.pop();
							nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
							break;
						case "]":
							postfixIncDec = true;
							break;
						case "++":
						case "--":
							nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
							break;
						case "<":
							if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
								stack.push({tag: "JSXTag"});
								lastIndex += 1;
								lastSignificantToken = "<";
								yield ({
									type: "JSXPunctuator",
									value: punctuator
								});
								continue;
							}
							postfixIncDec = false;
							break;
						default:
							postfixIncDec = false;
					}
					lastIndex = nextLastIndex;
					lastSignificantToken = nextLastSignificantToken;
					yield ({
						type: "Punctuator",
						value: punctuator
					});
					continue;
				}
				Identifier.lastIndex = lastIndex;
				if (match = Identifier.exec(input)) {
					lastIndex = Identifier.lastIndex;
					nextLastSignificantToken = match[0];
					switch (match[0]) {
						case "for":
						case "if":
						case "while":
						case "with":
							if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
								nextLastSignificantToken = "?NonExpressionParenKeyword";
							}
					}
					lastSignificantToken = nextLastSignificantToken;
					postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
					yield ({
						type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
						value: match[0]
					});
					continue;
				}
				StringLiteral.lastIndex = lastIndex;
				if (match = StringLiteral.exec(input)) {
					lastIndex = StringLiteral.lastIndex;
					lastSignificantToken = match[0];
					postfixIncDec = true;
					yield ({
						type: "StringLiteral",
						value: match[0],
						closed: match[2] !== void 0
					});
					continue;
				}
				NumericLiteral.lastIndex = lastIndex;
				if (match = NumericLiteral.exec(input)) {
					lastIndex = NumericLiteral.lastIndex;
					lastSignificantToken = match[0];
					postfixIncDec = true;
					yield ({
						type: "NumericLiteral",
						value: match[0]
					});
					continue;
				}
				Template.lastIndex = lastIndex;
				if (match = Template.exec(input)) {
					lastIndex = Template.lastIndex;
					lastSignificantToken = match[0];
					if (match[1] === "${") {
						lastSignificantToken = "?InterpolationInTemplate";
						stack.push({
							tag: "InterpolationInTemplate",
							nesting: braces.length
						});
						postfixIncDec = false;
						yield ({
							type: "TemplateHead",
							value: match[0]
						});
					} else {
						postfixIncDec = true;
						yield ({
							type: "NoSubstitutionTemplate",
							value: match[0],
							closed: match[1] === "`"
						});
					}
					continue;
				}
				break;
			case "JSXTag":
			case "JSXTagEnd":
				JSXPunctuator.lastIndex = lastIndex;
				if (match = JSXPunctuator.exec(input)) {
					lastIndex = JSXPunctuator.lastIndex;
					nextLastSignificantToken = match[0];
					switch (match[0]) {
						case "<":
							stack.push({tag: "JSXTag"});
							break;
						case ">":
							stack.pop();
							if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
								nextLastSignificantToken = "?JSX";
								postfixIncDec = true;
							} else {
								stack.push({tag: "JSXChildren"});
							}
							break;
						case "{":
							stack.push({
								tag: "InterpolationInJSX",
								nesting: braces.length
							});
							nextLastSignificantToken = "?InterpolationInJSX";
							postfixIncDec = false;
							break;
						case "/":
							if (lastSignificantToken === "<") {
								stack.pop();
								if (stack[stack.length - 1].tag === "JSXChildren") {
									stack.pop();
								}
								stack.push({tag: "JSXTagEnd"});
							}
					}
					lastSignificantToken = nextLastSignificantToken;
					yield ({
						type: "JSXPunctuator",
						value: match[0]
					});
					continue;
				}
				JSXIdentifier.lastIndex = lastIndex;
				if (match = JSXIdentifier.exec(input)) {
					lastIndex = JSXIdentifier.lastIndex;
					lastSignificantToken = match[0];
					yield ({
						type: "JSXIdentifier",
						value: match[0]
					});
					continue;
				}
				JSXString.lastIndex = lastIndex;
				if (match = JSXString.exec(input)) {
					lastIndex = JSXString.lastIndex;
					lastSignificantToken = match[0];
					yield ({
						type: "JSXString",
						value: match[0],
						closed: match[2] !== void 0
					});
					continue;
				}
				break;
			case "JSXChildren":
				JSXText.lastIndex = lastIndex;
				if (match = JSXText.exec(input)) {
					lastIndex = JSXText.lastIndex;
					lastSignificantToken = match[0];
					yield ({
						type: "JSXText",
						value: match[0]
					});
					continue;
				}
				switch (input[lastIndex]) {
					case "<":
						stack.push({tag: "JSXTag"});
						lastIndex++;
						lastSignificantToken = "<";
						yield ({
							type: "JSXPunctuator",
							value: "<"
						});
						continue;
					case "{":
						stack.push({
							tag: "InterpolationInJSX",
							nesting: braces.length
						});
						lastIndex++;
						lastSignificantToken = "?InterpolationInJSX";
						postfixIncDec = false;
						yield ({
							type: "JSXPunctuator",
							value: "{"
						});
						continue;
				}
		}
		WhiteSpace.lastIndex = lastIndex;
		if (match = WhiteSpace.exec(input)) {
			lastIndex = WhiteSpace.lastIndex;
			yield ({
				type: "WhiteSpace",
				value: match[0]
			});
			continue;
		}
		LineTerminatorSequence.lastIndex = lastIndex;
		if (match = LineTerminatorSequence.exec(input)) {
			lastIndex = LineTerminatorSequence.lastIndex;
			postfixIncDec = false;
			if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
				lastSignificantToken = "?NoLineTerminatorHere";
			}
			yield ({
				type: "LineTerminatorSequence",
				value: match[0]
			});
			continue;
		}
		MultiLineComment.lastIndex = lastIndex;
		if (match = MultiLineComment.exec(input)) {
			lastIndex = MultiLineComment.lastIndex;
			if (Newline.test(match[0])) {
				postfixIncDec = false;
				if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
					lastSignificantToken = "?NoLineTerminatorHere";
				}
			}
			yield ({
				type: "MultiLineComment",
				value: match[0],
				closed: match[1] !== void 0
			});
			continue;
		}
		SingleLineComment.lastIndex = lastIndex;
		if (match = SingleLineComment.exec(input)) {
			lastIndex = SingleLineComment.lastIndex;
			postfixIncDec = false;
			yield ({
				type: "SingleLineComment",
				value: match[0]
			});
			continue;
		}
		firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
		lastIndex += firstCodePoint.length;
		lastSignificantToken = firstCodePoint;
		postfixIncDec = false;
		yield ({
			type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
			value: firstCodePoint
		});
	}
	return void 0;
};


/***/ }),

/***/ 4366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MO: () => (/* binding */ INTERNAL_registerAbortHandler),
/* harmony export */   _w: () => (/* binding */ INTERNAL_buildStoreRev1),
/* harmony export */   eE: () => (/* binding */ INTERNAL_initializeStoreHooks)
/* harmony export */ });
/* unused harmony exports INTERNAL_abortPromise, INTERNAL_addPendingPromiseToDependency, INTERNAL_getBuildingBlocksRev1, INTERNAL_getMountedOrPendingDependents, INTERNAL_hasInitialValue, INTERNAL_isActuallyWritableAtom, INTERNAL_isAtomStateInitialized, INTERNAL_isPendingPromise, INTERNAL_isPromiseLike, INTERNAL_isSelfAtom, INTERNAL_promiseStateMap, INTERNAL_returnAtomValue, INTERNAL_setAtomStateValueOrPromise */
const isSelfAtom = (atom, a) => atom.unstable_is ? atom.unstable_is(a) : a === atom;
const hasInitialValue = (atom) => "init" in atom;
const isActuallyWritableAtom = (atom) => !!atom.write;
const isAtomStateInitialized = (atomState) => "v" in atomState || "e" in atomState;
const returnAtomValue = (atomState) => {
  if ("e" in atomState) {
    throw atomState.e;
  }
  if (( false ? 0 : void 0) !== "production" && !("v" in atomState)) {
    throw new Error("[Bug] atom state is not initialized");
  }
  return atomState.v;
};
const promiseStateMap = /* @__PURE__ */ new WeakMap();
const isPendingPromise = (value) => {
  var _a;
  return isPromiseLike(value) && !!((_a = promiseStateMap.get(value)) == null ? void 0 : _a[0]);
};
const abortPromise = (promise) => {
  const promiseState = promiseStateMap.get(promise);
  if (promiseState == null ? void 0 : promiseState[0]) {
    promiseState[0] = false;
    promiseState[1].forEach((fn) => fn());
  }
};
const registerAbortHandler = (promise, abortHandler) => {
  let promiseState = promiseStateMap.get(promise);
  if (!promiseState) {
    promiseState = [true, /* @__PURE__ */ new Set()];
    promiseStateMap.set(promise, promiseState);
    const settle = () => {
      promiseState[0] = false;
    };
    promise.then(settle, settle);
  }
  promiseState[1].add(abortHandler);
};
const isPromiseLike = (p) => typeof (p == null ? void 0 : p.then) === "function";
const addPendingPromiseToDependency = (atom, promise, dependencyAtomState) => {
  if (!dependencyAtomState.p.has(atom)) {
    dependencyAtomState.p.add(atom);
    promise.then(
      () => {
        dependencyAtomState.p.delete(atom);
      },
      () => {
        dependencyAtomState.p.delete(atom);
      }
    );
  }
};
const setAtomStateValueOrPromise = (atom, valueOrPromise, ensureAtomState) => {
  const atomState = ensureAtomState(atom);
  const hasPrevValue = "v" in atomState;
  const prevValue = atomState.v;
  if (isPromiseLike(valueOrPromise)) {
    for (const a of atomState.d.keys()) {
      addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState(a));
    }
  }
  atomState.v = valueOrPromise;
  delete atomState.e;
  if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
    ++atomState.n;
    if (isPromiseLike(prevValue)) {
      abortPromise(prevValue);
    }
  }
};
const getMountedOrPendingDependents = (atom, atomState, mountedMap) => {
  var _a;
  const dependents = /* @__PURE__ */ new Set();
  for (const a of ((_a = mountedMap.get(atom)) == null ? void 0 : _a.t) || []) {
    if (mountedMap.has(a)) {
      dependents.add(a);
    }
  }
  for (const atomWithPendingPromise of atomState.p) {
    dependents.add(atomWithPendingPromise);
  }
  return dependents;
};
const createStoreHook = () => {
  const callbacks = /* @__PURE__ */ new Set();
  const notify = () => {
    callbacks.forEach((fn) => fn());
  };
  notify.add = (fn) => {
    callbacks.add(fn);
    return () => {
      callbacks.delete(fn);
    };
  };
  return notify;
};
const createStoreHookForAtoms = () => {
  const all = {};
  const callbacks = /* @__PURE__ */ new WeakMap();
  const notify = (atom) => {
    var _a, _b;
    (_a = callbacks.get(all)) == null ? void 0 : _a.forEach((fn) => fn(atom));
    (_b = callbacks.get(atom)) == null ? void 0 : _b.forEach((fn) => fn());
  };
  notify.add = (atom, fn) => {
    const key = atom || all;
    const fns = (callbacks.has(key) ? callbacks : callbacks.set(key, /* @__PURE__ */ new Set())).get(key);
    fns.add(fn);
    return () => {
      fns == null ? void 0 : fns.delete(fn);
      if (!fns.size) {
        callbacks.delete(key);
      }
    };
  };
  return notify;
};
const initializeStoreHooks = (storeHooks) => {
  storeHooks.c || (storeHooks.c = createStoreHookForAtoms());
  storeHooks.m || (storeHooks.m = createStoreHookForAtoms());
  storeHooks.u || (storeHooks.u = createStoreHookForAtoms());
  storeHooks.f || (storeHooks.f = createStoreHook());
  return storeHooks;
};
const BUILDING_BLOCKS = Symbol();
const getBuildingBlocks = (store) => store[BUILDING_BLOCKS];
const buildStore = (atomStateMap = /* @__PURE__ */ new WeakMap(), mountedMap = /* @__PURE__ */ new WeakMap(), invalidatedAtoms = /* @__PURE__ */ new WeakMap(), changedAtoms = /* @__PURE__ */ new Set(), mountCallbacks = /* @__PURE__ */ new Set(), unmountCallbacks = /* @__PURE__ */ new Set(), storeHooks = {}, atomRead = (atom, ...params) => atom.read(...params), atomWrite = (atom, ...params) => atom.write(...params), atomOnInit = (atom, store) => {
  var _a;
  return (_a = atom.unstable_onInit) == null ? void 0 : _a.call(atom, store);
}, atomOnMount = (atom, setAtom) => {
  var _a;
  return (_a = atom.onMount) == null ? void 0 : _a.call(atom, setAtom);
}, ...buildingBlockFunctions) => {
  const ensureAtomState = buildingBlockFunctions[0] || ((atom) => {
    if (( false ? 0 : void 0) !== "production" && !atom) {
      throw new Error("Atom is undefined or null");
    }
    let atomState = atomStateMap.get(atom);
    if (!atomState) {
      atomState = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 };
      atomStateMap.set(atom, atomState);
      atomOnInit == null ? void 0 : atomOnInit(atom, store);
    }
    return atomState;
  });
  const flushCallbacks = buildingBlockFunctions[1] || (() => {
    const errors = [];
    const call = (fn) => {
      try {
        fn();
      } catch (e) {
        errors.push(e);
      }
    };
    do {
      if (storeHooks.f) {
        call(storeHooks.f);
      }
      const callbacks = /* @__PURE__ */ new Set();
      const add = callbacks.add.bind(callbacks);
      changedAtoms.forEach((atom) => {
        var _a;
        return (_a = mountedMap.get(atom)) == null ? void 0 : _a.l.forEach(add);
      });
      changedAtoms.clear();
      unmountCallbacks.forEach(add);
      unmountCallbacks.clear();
      mountCallbacks.forEach(add);
      mountCallbacks.clear();
      callbacks.forEach(call);
      if (changedAtoms.size) {
        recomputeInvalidatedAtoms();
      }
    } while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size);
    if (errors.length) {
      throw new AggregateError(errors);
    }
  });
  const recomputeInvalidatedAtoms = buildingBlockFunctions[2] || (() => {
    const topSortedReversed = [];
    const visiting = /* @__PURE__ */ new WeakSet();
    const visited = /* @__PURE__ */ new WeakSet();
    const stack = Array.from(changedAtoms);
    while (stack.length) {
      const a = stack[stack.length - 1];
      const aState = ensureAtomState(a);
      if (visited.has(a)) {
        stack.pop();
        continue;
      }
      if (visiting.has(a)) {
        if (invalidatedAtoms.get(a) === aState.n) {
          topSortedReversed.push([a, aState]);
        } else if (( false ? 0 : void 0) !== "production" && invalidatedAtoms.has(a)) {
          throw new Error("[Bug] invalidated atom exists");
        }
        visited.add(a);
        stack.pop();
        continue;
      }
      visiting.add(a);
      for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
        if (!visiting.has(d)) {
          stack.push(d);
        }
      }
    }
    for (let i = topSortedReversed.length - 1; i >= 0; --i) {
      const [a, aState] = topSortedReversed[i];
      let hasChangedDeps = false;
      for (const dep of aState.d.keys()) {
        if (dep !== a && changedAtoms.has(dep)) {
          hasChangedDeps = true;
          break;
        }
      }
      if (hasChangedDeps) {
        readAtomState(a);
        mountDependencies(a);
      }
      invalidatedAtoms.delete(a);
    }
  });
  const readAtomState = buildingBlockFunctions[3] || ((atom) => {
    var _a;
    const atomState = ensureAtomState(atom);
    if (isAtomStateInitialized(atomState)) {
      if (mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n) {
        return atomState;
      }
      if (Array.from(atomState.d).every(
        ([a, n]) => (
          // Recursively, read the atom state of the dependency, and
          // check if the atom epoch number is unchanged
          readAtomState(a).n === n
        )
      )) {
        return atomState;
      }
    }
    atomState.d.clear();
    let isSync = true;
    const mountDependenciesIfAsync = () => {
      if (mountedMap.has(atom)) {
        mountDependencies(atom);
        recomputeInvalidatedAtoms();
        flushCallbacks();
      }
    };
    const getter = (a) => {
      var _a2;
      if (isSelfAtom(atom, a)) {
        const aState2 = ensureAtomState(a);
        if (!isAtomStateInitialized(aState2)) {
          if (hasInitialValue(a)) {
            setAtomStateValueOrPromise(a, a.init, ensureAtomState);
          } else {
            throw new Error("no atom init");
          }
        }
        return returnAtomValue(aState2);
      }
      const aState = readAtomState(a);
      try {
        return returnAtomValue(aState);
      } finally {
        atomState.d.set(a, aState.n);
        if (isPendingPromise(atomState.v)) {
          addPendingPromiseToDependency(atom, atomState.v, aState);
        }
        (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t.add(atom);
        if (!isSync) {
          mountDependenciesIfAsync();
        }
      }
    };
    let controller;
    let setSelf;
    const options = {
      get signal() {
        if (!controller) {
          controller = new AbortController();
        }
        return controller.signal;
      },
      get setSelf() {
        if (( false ? 0 : void 0) !== "production" && !isActuallyWritableAtom(atom)) {
          console.warn("setSelf function cannot be used with read-only atom");
        }
        if (!setSelf && isActuallyWritableAtom(atom)) {
          setSelf = (...args) => {
            if (( false ? 0 : void 0) !== "production" && isSync) {
              console.warn("setSelf function cannot be called in sync");
            }
            if (!isSync) {
              try {
                return writeAtomState(atom, ...args);
              } finally {
                recomputeInvalidatedAtoms();
                flushCallbacks();
              }
            }
          };
        }
        return setSelf;
      }
    };
    const prevEpochNumber = atomState.n;
    try {
      const valueOrPromise = atomRead(atom, getter, options);
      setAtomStateValueOrPromise(atom, valueOrPromise, ensureAtomState);
      if (isPromiseLike(valueOrPromise)) {
        registerAbortHandler(valueOrPromise, () => controller == null ? void 0 : controller.abort());
        valueOrPromise.then(
          mountDependenciesIfAsync,
          mountDependenciesIfAsync
        );
      }
      return atomState;
    } catch (error) {
      delete atomState.v;
      atomState.e = error;
      ++atomState.n;
      return atomState;
    } finally {
      isSync = false;
      if (prevEpochNumber !== atomState.n && invalidatedAtoms.get(atom) === prevEpochNumber) {
        invalidatedAtoms.set(atom, atomState.n);
        changedAtoms.add(atom);
        (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, atom);
      }
    }
  });
  const invalidateDependents = buildingBlockFunctions[4] || ((atom) => {
    const stack = [atom];
    while (stack.length) {
      const a = stack.pop();
      const aState = ensureAtomState(a);
      for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
        const dState = ensureAtomState(d);
        invalidatedAtoms.set(d, dState.n);
        stack.push(d);
      }
    }
  });
  const writeAtomState = buildingBlockFunctions[5] || ((atom, ...args) => {
    let isSync = true;
    const getter = (a) => returnAtomValue(readAtomState(a));
    const setter = (a, ...args2) => {
      var _a;
      const aState = ensureAtomState(a);
      try {
        if (isSelfAtom(atom, a)) {
          if (!hasInitialValue(a)) {
            throw new Error("atom not writable");
          }
          const prevEpochNumber = aState.n;
          const v = args2[0];
          setAtomStateValueOrPromise(a, v, ensureAtomState);
          mountDependencies(a);
          if (prevEpochNumber !== aState.n) {
            changedAtoms.add(a);
            (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
            invalidateDependents(a);
          }
          return void 0;
        } else {
          return writeAtomState(a, ...args2);
        }
      } finally {
        if (!isSync) {
          recomputeInvalidatedAtoms();
          flushCallbacks();
        }
      }
    };
    try {
      return atomWrite(atom, getter, setter, ...args);
    } finally {
      isSync = false;
    }
  });
  const mountDependencies = buildingBlockFunctions[6] || ((atom) => {
    var _a;
    const atomState = ensureAtomState(atom);
    const mounted = mountedMap.get(atom);
    if (mounted && !isPendingPromise(atomState.v)) {
      for (const [a, n] of atomState.d) {
        if (!mounted.d.has(a)) {
          const aState = ensureAtomState(a);
          const aMounted = mountAtom(a);
          aMounted.t.add(atom);
          mounted.d.add(a);
          if (n !== aState.n) {
            changedAtoms.add(a);
            (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
            invalidateDependents(a);
          }
        }
      }
      for (const a of mounted.d || []) {
        if (!atomState.d.has(a)) {
          mounted.d.delete(a);
          const aMounted = unmountAtom(a);
          aMounted == null ? void 0 : aMounted.t.delete(atom);
        }
      }
    }
  });
  const mountAtom = buildingBlockFunctions[7] || ((atom) => {
    var _a;
    const atomState = ensureAtomState(atom);
    let mounted = mountedMap.get(atom);
    if (!mounted) {
      readAtomState(atom);
      for (const a of atomState.d.keys()) {
        const aMounted = mountAtom(a);
        aMounted.t.add(atom);
      }
      mounted = {
        l: /* @__PURE__ */ new Set(),
        d: new Set(atomState.d.keys()),
        t: /* @__PURE__ */ new Set()
      };
      mountedMap.set(atom, mounted);
      (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom);
      if (isActuallyWritableAtom(atom)) {
        const processOnMount = () => {
          let isSync = true;
          const setAtom = (...args) => {
            try {
              return writeAtomState(atom, ...args);
            } finally {
              if (!isSync) {
                recomputeInvalidatedAtoms();
                flushCallbacks();
              }
            }
          };
          try {
            const onUnmount = atomOnMount(atom, setAtom);
            if (onUnmount) {
              mounted.u = () => {
                isSync = true;
                try {
                  onUnmount();
                } finally {
                  isSync = false;
                }
              };
            }
          } finally {
            isSync = false;
          }
        };
        mountCallbacks.add(processOnMount);
      }
    }
    return mounted;
  });
  const unmountAtom = buildingBlockFunctions[8] || ((atom) => {
    var _a;
    const atomState = ensureAtomState(atom);
    let mounted = mountedMap.get(atom);
    if (mounted && !mounted.l.size && !Array.from(mounted.t).some((a) => {
      var _a2;
      return (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.d.has(atom);
    })) {
      if (mounted.u) {
        unmountCallbacks.add(mounted.u);
      }
      mounted = void 0;
      mountedMap.delete(atom);
      (_a = storeHooks.u) == null ? void 0 : _a.call(storeHooks, atom);
      for (const a of atomState.d.keys()) {
        const aMounted = unmountAtom(a);
        aMounted == null ? void 0 : aMounted.t.delete(atom);
      }
      return void 0;
    }
    return mounted;
  });
  const buildingBlocks = [
    // store state
    atomStateMap,
    mountedMap,
    invalidatedAtoms,
    changedAtoms,
    mountCallbacks,
    unmountCallbacks,
    storeHooks,
    // atom interceptors
    atomRead,
    atomWrite,
    atomOnInit,
    atomOnMount,
    // building-block functions
    ensureAtomState,
    flushCallbacks,
    recomputeInvalidatedAtoms,
    readAtomState,
    invalidateDependents,
    writeAtomState,
    mountDependencies,
    mountAtom,
    unmountAtom
  ];
  const store = {
    get: (atom) => returnAtomValue(readAtomState(atom)),
    set: (atom, ...args) => {
      try {
        return writeAtomState(atom, ...args);
      } finally {
        recomputeInvalidatedAtoms();
        flushCallbacks();
      }
    },
    sub: (atom, listener) => {
      const mounted = mountAtom(atom);
      const listeners = mounted.l;
      listeners.add(listener);
      flushCallbacks();
      return () => {
        listeners.delete(listener);
        unmountAtom(atom);
        flushCallbacks();
      };
    }
  };
  Object.defineProperty(store, BUILDING_BLOCKS, { value: buildingBlocks });
  return store;
};
const INTERNAL_buildStoreRev1 = buildStore;
const INTERNAL_getBuildingBlocksRev1 = (/* unused pure expression or super */ null && (getBuildingBlocks));
const INTERNAL_initializeStoreHooks = initializeStoreHooks;
const INTERNAL_isSelfAtom = (/* unused pure expression or super */ null && (isSelfAtom));
const INTERNAL_hasInitialValue = (/* unused pure expression or super */ null && (hasInitialValue));
const INTERNAL_isActuallyWritableAtom = (/* unused pure expression or super */ null && (isActuallyWritableAtom));
const INTERNAL_isAtomStateInitialized = (/* unused pure expression or super */ null && (isAtomStateInitialized));
const INTERNAL_returnAtomValue = (/* unused pure expression or super */ null && (returnAtomValue));
const INTERNAL_promiseStateMap = (/* unused pure expression or super */ null && (promiseStateMap));
const INTERNAL_isPendingPromise = (/* unused pure expression or super */ null && (isPendingPromise));
const INTERNAL_abortPromise = (/* unused pure expression or super */ null && (abortPromise));
const INTERNAL_registerAbortHandler = registerAbortHandler;
const INTERNAL_isPromiseLike = (/* unused pure expression or super */ null && (isPromiseLike));
const INTERNAL_addPendingPromiseToDependency = (/* unused pure expression or super */ null && (addPendingPromiseToDependency));
const INTERNAL_setAtomStateValueOrPromise = (/* unused pure expression or super */ null && (setAtomStateValueOrPromise));
const INTERNAL_getMountedOrPendingDependents = (/* unused pure expression or super */ null && (getMountedOrPendingDependents));




/***/ }),

/***/ 4945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eU: () => (/* binding */ atom),
/* harmony export */   zp: () => (/* binding */ getDefaultStore)
/* harmony export */ });
/* unused harmony exports INTERNAL_overrideCreateStore, createStore */
/* harmony import */ var jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4366);


let keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString() {
      return ( false ? 0 : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
    }
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = defaultRead;
    config.write = defaultWrite;
  }
  if (write) {
    config.write = write;
  }
  return config;
}
function defaultRead(get) {
  return get(this);
}
function defaultWrite(get, set, arg) {
  return set(
    this,
    typeof arg === "function" ? arg(get(this)) : arg
  );
}

const createDevStoreRev4 = () => {
  let inRestoreAtom = 0;
  const storeHooks = (0,jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_initializeStoreHooks */ .eE)({});
  const atomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedAtoms = /* @__PURE__ */ new WeakMap();
  const store = (0,jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_buildStoreRev1 */ ._w)(
    atomStateMap,
    mountedAtoms,
    void 0,
    void 0,
    void 0,
    void 0,
    storeHooks,
    void 0,
    (atom, get, set, ...args) => {
      if (inRestoreAtom) {
        return set(atom, ...args);
      }
      return atom.write(get, set, ...args);
    }
  );
  const debugMountedAtoms = /* @__PURE__ */ new Set();
  storeHooks.m.add(void 0, (atom) => {
    debugMountedAtoms.add(atom);
    const atomState = atomStateMap.get(atom);
    atomState.m = mountedAtoms.get(atom);
  });
  storeHooks.u.add(void 0, (atom) => {
    debugMountedAtoms.delete(atom);
    const atomState = atomStateMap.get(atom);
    delete atomState.m;
  });
  const devStore = {
    // store dev methods (these are tentative and subject to change without notice)
    dev4_get_internal_weak_map: () => {
      console.log("Deprecated: Use devstore from the devtools library");
      return atomStateMap;
    },
    dev4_get_mounted_atoms: () => debugMountedAtoms,
    dev4_restore_atoms: (values) => {
      const restoreAtom = {
        read: () => null,
        write: (_get, set) => {
          ++inRestoreAtom;
          try {
            for (const [atom, value] of values) {
              if ("init" in atom) {
                set(atom, value);
              }
            }
          } finally {
            --inRestoreAtom;
          }
        }
      };
      store.set(restoreAtom);
    }
  };
  return Object.assign(store, devStore);
};
let overiddenCreateStore;
function INTERNAL_overrideCreateStore(fn) {
  overiddenCreateStore = fn(overiddenCreateStore);
}
function createStore() {
  if (overiddenCreateStore) {
    return overiddenCreateStore();
  }
  if (( false ? 0 : void 0) !== "production") {
    return createDevStoreRev4();
  }
  return (0,jotai_vanilla_internals__WEBPACK_IMPORTED_MODULE_0__/* .INTERNAL_buildStoreRev1 */ ._w)();
}
let defaultStore;
function getDefaultStore() {
  if (!defaultStore) {
    defaultStore = createStore();
    if (( false ? 0 : void 0) !== "production") {
      globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
      if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
        console.warn(
          "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
        );
      }
    }
  }
  return defaultStore;
}




/***/ }),

/***/ 6303:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mg: () => (/* binding */ selectAtom),
/* harmony export */   tG: () => (/* binding */ atomWithStorage)
/* harmony export */ });
/* unused harmony exports RESET, atomFamily, atomWithDefault, atomWithLazy, atomWithObservable, atomWithReducer, atomWithRefresh, atomWithReset, createJSONStorage, freezeAtom, freezeAtomCreator, loadable, splitAtom, unstable_withStorageValidator, unwrap */
/* harmony import */ var jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4945);


const RESET = Symbol(
  ( false ? 0 : void 0) !== "production" ? "RESET" : ""
);

function atomWithReset(initialValue) {
  const anAtom = atom(
    initialValue,
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(anAtom)) : update;
      set(anAtom, nextValue === RESET ? initialValue : nextValue);
    }
  );
  return anAtom;
}

function atomWithReducer(initialValue, reducer) {
  return atom(initialValue, function(get, set, action) {
    set(this, reducer(get(this), action));
  });
}

function atomFamily(initializeAtom, areEqual) {
  let shouldRemove = null;
  const atoms = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Set();
  const createAtom = (param) => {
    let item;
    if (areEqual === void 0) {
      item = atoms.get(param);
    } else {
      for (const [key, value] of atoms) {
        if (areEqual(key, param)) {
          item = value;
          break;
        }
      }
    }
    if (item !== void 0) {
      if (shouldRemove == null ? void 0 : shouldRemove(item[1], param)) {
        createAtom.remove(param);
      } else {
        return item[0];
      }
    }
    const newAtom = initializeAtom(param);
    atoms.set(param, [newAtom, Date.now()]);
    notifyListeners("CREATE", param, newAtom);
    return newAtom;
  };
  const notifyListeners = (type, param, atom) => {
    for (const listener of listeners) {
      listener({ type, param, atom });
    }
  };
  createAtom.unstable_listen = (callback) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  };
  createAtom.getParams = () => atoms.keys();
  createAtom.remove = (param) => {
    if (areEqual === void 0) {
      if (!atoms.has(param)) return;
      const [atom] = atoms.get(param);
      atoms.delete(param);
      notifyListeners("REMOVE", param, atom);
    } else {
      for (const [key, [atom]] of atoms) {
        if (areEqual(key, param)) {
          atoms.delete(key);
          notifyListeners("REMOVE", key, atom);
          break;
        }
      }
    }
  };
  createAtom.setShouldRemove = (fn) => {
    shouldRemove = fn;
    if (!shouldRemove) return;
    for (const [key, [atom, createdAt]] of atoms) {
      if (shouldRemove(createdAt, key)) {
        atoms.delete(key);
        notifyListeners("REMOVE", key, atom);
      }
    }
  };
  return createAtom;
}

const getCached$2 = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k);
const cache1$3 = /* @__PURE__ */ new WeakMap();
const memo3 = (create, dep1, dep2, dep3) => {
  const cache2 = getCached$2(() => /* @__PURE__ */ new WeakMap(), cache1$3, dep1);
  const cache3 = getCached$2(() => /* @__PURE__ */ new WeakMap(), cache2, dep2);
  return getCached$2(create, cache3, dep3);
};
function selectAtom(anAtom, selector, equalityFn = Object.is) {
  return memo3(
    () => {
      const EMPTY = Symbol();
      const selectValue = ([value, prevSlice]) => {
        if (prevSlice === EMPTY) {
          return selector(value);
        }
        const slice = selector(value, prevSlice);
        return equalityFn(prevSlice, slice) ? prevSlice : slice;
      };
      const derivedAtom = (0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .eU)((get) => {
        const prev = get(derivedAtom);
        const value = get(anAtom);
        return selectValue([value, prev]);
      });
      derivedAtom.init = EMPTY;
      return derivedAtom;
    },
    anAtom,
    selector,
    equalityFn
  );
}

const frozenAtoms = /* @__PURE__ */ new WeakSet();
const deepFreeze = (value) => {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  Object.freeze(value);
  const propNames = Object.getOwnPropertyNames(value);
  for (const name of propNames) {
    deepFreeze(value[name]);
  }
  return value;
};
function freezeAtom(anAtom) {
  if (frozenAtoms.has(anAtom)) {
    return anAtom;
  }
  frozenAtoms.add(anAtom);
  const origRead = anAtom.read;
  anAtom.read = function(get, options) {
    return deepFreeze(origRead.call(this, get, options));
  };
  if ("write" in anAtom) {
    const origWrite = anAtom.write;
    anAtom.write = function(get, set, ...args) {
      return origWrite.call(
        this,
        get,
        (...setArgs) => {
          if (setArgs[0] === anAtom) {
            setArgs[1] = deepFreeze(setArgs[1]);
          }
          return set(...setArgs);
        },
        ...args
      );
    };
  }
  return anAtom;
}
function freezeAtomCreator(createAtom) {
  if (( false ? 0 : void 0) !== "production") {
    console.warn(
      "[DEPRECATED] freezeAtomCreator is deprecated, define it on users end"
    );
  }
  return (...args) => freezeAtom(createAtom(...args));
}

const getCached$1 = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k);
const cache1$2 = /* @__PURE__ */ new WeakMap();
const memo2$1 = (create, dep1, dep2) => {
  const cache2 = getCached$1(() => /* @__PURE__ */ new WeakMap(), cache1$2, dep1);
  return getCached$1(create, cache2, dep2);
};
const cacheKeyForEmptyKeyExtractor = {};
const isWritable = (atom2) => !!atom2.write;
const isFunction = (x) => typeof x === "function";
function splitAtom(arrAtom, keyExtractor) {
  return memo2$1(
    () => {
      const mappingCache = /* @__PURE__ */ new WeakMap();
      const getMapping = (arr, prev) => {
        let mapping = mappingCache.get(arr);
        if (mapping) {
          return mapping;
        }
        const prevMapping = prev && mappingCache.get(prev);
        const atomList = [];
        const keyList = [];
        arr.forEach((item, index) => {
          const key = keyExtractor ? keyExtractor(item) : index;
          keyList[index] = key;
          const cachedAtom = prevMapping && prevMapping.atomList[prevMapping.keyList.indexOf(key)];
          if (cachedAtom) {
            atomList[index] = cachedAtom;
            return;
          }
          const read = (get) => {
            const prev2 = get(mappingAtom);
            const currArr = get(arrAtom);
            const mapping2 = getMapping(currArr, prev2 == null ? void 0 : prev2.arr);
            const index2 = mapping2.keyList.indexOf(key);
            if (index2 < 0 || index2 >= currArr.length) {
              const prevItem = arr[getMapping(arr).keyList.indexOf(key)];
              if (prevItem) {
                return prevItem;
              }
              throw new Error("splitAtom: index out of bounds for read");
            }
            return currArr[index2];
          };
          const write = (get, set, update) => {
            const prev2 = get(mappingAtom);
            const arr2 = get(arrAtom);
            const mapping2 = getMapping(arr2, prev2 == null ? void 0 : prev2.arr);
            const index2 = mapping2.keyList.indexOf(key);
            if (index2 < 0 || index2 >= arr2.length) {
              throw new Error("splitAtom: index out of bounds for write");
            }
            const nextItem = isFunction(update) ? update(arr2[index2]) : update;
            if (!Object.is(arr2[index2], nextItem)) {
              set(arrAtom, [
                ...arr2.slice(0, index2),
                nextItem,
                ...arr2.slice(index2 + 1)
              ]);
            }
          };
          atomList[index] = isWritable(arrAtom) ? atom(read, write) : atom(read);
        });
        if (prevMapping && prevMapping.keyList.length === keyList.length && prevMapping.keyList.every((x, i) => x === keyList[i])) {
          mapping = prevMapping;
        } else {
          mapping = { arr, atomList, keyList };
        }
        mappingCache.set(arr, mapping);
        return mapping;
      };
      const mappingAtom = atom((get) => {
        const prev = get(mappingAtom);
        const arr = get(arrAtom);
        const mapping = getMapping(arr, prev == null ? void 0 : prev.arr);
        return mapping;
      });
      if (( false ? 0 : void 0) !== "production") {
        mappingAtom.debugPrivate = true;
      }
      mappingAtom.init = void 0;
      const splittedAtom = isWritable(arrAtom) ? atom(
        (get) => get(mappingAtom).atomList,
        (get, set, action) => {
          switch (action.type) {
            case "remove": {
              const index = get(splittedAtom).indexOf(action.atom);
              if (index >= 0) {
                const arr = get(arrAtom);
                set(arrAtom, [
                  ...arr.slice(0, index),
                  ...arr.slice(index + 1)
                ]);
              }
              break;
            }
            case "insert": {
              const index = action.before ? get(splittedAtom).indexOf(action.before) : get(splittedAtom).length;
              if (index >= 0) {
                const arr = get(arrAtom);
                set(arrAtom, [
                  ...arr.slice(0, index),
                  action.value,
                  ...arr.slice(index)
                ]);
              }
              break;
            }
            case "move": {
              const index1 = get(splittedAtom).indexOf(action.atom);
              const index2 = action.before ? get(splittedAtom).indexOf(action.before) : get(splittedAtom).length;
              if (index1 >= 0 && index2 >= 0) {
                const arr = get(arrAtom);
                if (index1 < index2) {
                  set(arrAtom, [
                    ...arr.slice(0, index1),
                    ...arr.slice(index1 + 1, index2),
                    arr[index1],
                    ...arr.slice(index2)
                  ]);
                } else {
                  set(arrAtom, [
                    ...arr.slice(0, index2),
                    arr[index1],
                    ...arr.slice(index2, index1),
                    ...arr.slice(index1 + 1)
                  ]);
                }
              }
              break;
            }
          }
        }
      ) : atom((get) => get(mappingAtom).atomList);
      return splittedAtom;
    },
    arrAtom,
    keyExtractor || cacheKeyForEmptyKeyExtractor
  );
}

function atomWithDefault(getDefault) {
  const EMPTY = Symbol();
  const overwrittenAtom = atom(EMPTY);
  if (( false ? 0 : void 0) !== "production") {
    overwrittenAtom.debugPrivate = true;
  }
  const anAtom = atom(
    (get, options) => {
      const overwritten = get(overwrittenAtom);
      if (overwritten !== EMPTY) {
        return overwritten;
      }
      return getDefault(get, options);
    },
    (get, set, update) => {
      if (update === RESET) {
        set(overwrittenAtom, EMPTY);
      } else if (typeof update === "function") {
        const prevValue = get(anAtom);
        set(overwrittenAtom, update(prevValue));
      } else {
        set(overwrittenAtom, update);
      }
    }
  );
  return anAtom;
}

const isPromiseLike$3 = (x) => typeof (x == null ? void 0 : x.then) === "function";
function withStorageValidator(validator) {
  return (unknownStorage) => {
    const storage = {
      ...unknownStorage,
      getItem: (key, initialValue) => {
        const validate = (value2) => {
          if (!validator(value2)) {
            return initialValue;
          }
          return value2;
        };
        const value = unknownStorage.getItem(key, initialValue);
        if (isPromiseLike$3(value)) {
          return value.then(validate);
        }
        return validate(value);
      }
    };
    return storage;
  };
}
function createJSONStorage(getStringStorage = () => {
  try {
    return window.localStorage;
  } catch (e) {
    if (( false ? 0 : void 0) !== "production") {
      if (typeof window !== "undefined") {
        console.warn(e);
      }
    }
    return void 0;
  }
}, options) {
  var _a;
  let lastStr;
  let lastValue;
  const storage = {
    getItem: (key, initialValue) => {
      var _a2, _b;
      const parse = (str2) => {
        str2 = str2 || "";
        if (lastStr !== str2) {
          try {
            lastValue = JSON.parse(str2, options == null ? void 0 : options.reviver);
          } catch (e) {
            return initialValue;
          }
          lastStr = str2;
        }
        return lastValue;
      };
      const str = (_b = (_a2 = getStringStorage()) == null ? void 0 : _a2.getItem(key)) != null ? _b : null;
      if (isPromiseLike$3(str)) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (key, newValue) => {
      var _a2;
      return (_a2 = getStringStorage()) == null ? void 0 : _a2.setItem(
        key,
        JSON.stringify(newValue, options == null ? void 0 : options.replacer)
      );
    },
    removeItem: (key) => {
      var _a2;
      return (_a2 = getStringStorage()) == null ? void 0 : _a2.removeItem(key);
    }
  };
  const createHandleSubscribe = (subscriber2) => (key, callback, initialValue) => subscriber2(key, (v) => {
    let newValue;
    try {
      newValue = JSON.parse(v || "");
    } catch (e) {
      newValue = initialValue;
    }
    callback(newValue);
  });
  let subscriber;
  try {
    subscriber = (_a = getStringStorage()) == null ? void 0 : _a.subscribe;
  } catch (e) {
  }
  if (!subscriber && typeof window !== "undefined" && typeof window.addEventListener === "function" && window.Storage) {
    subscriber = (key, callback) => {
      if (!(getStringStorage() instanceof window.Storage)) {
        return () => {
        };
      }
      const storageEventCallback = (e) => {
        if (e.storageArea === getStringStorage() && e.key === key) {
          callback(e.newValue);
        }
      };
      window.addEventListener("storage", storageEventCallback);
      return () => {
        window.removeEventListener("storage", storageEventCallback);
      };
    };
  }
  if (subscriber) {
    storage.subscribe = createHandleSubscribe(subscriber);
  }
  return storage;
}
const defaultStorage = createJSONStorage();
function atomWithStorage(key, initialValue, storage = defaultStorage, options) {
  const getOnInit = options == null ? void 0 : options.getOnInit;
  const baseAtom = (0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .eU)(
    getOnInit ? storage.getItem(key, initialValue) : initialValue
  );
  if (( false ? 0 : void 0) !== "production") {
    baseAtom.debugPrivate = true;
  }
  baseAtom.onMount = (setAtom) => {
    setAtom(storage.getItem(key, initialValue));
    let unsub;
    if (storage.subscribe) {
      unsub = storage.subscribe(key, setAtom, initialValue);
    }
    return unsub;
  };
  const anAtom = (0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .eU)(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(baseAtom)) : update;
      if (nextValue === RESET) {
        set(baseAtom, initialValue);
        return storage.removeItem(key);
      }
      if (isPromiseLike$3(nextValue)) {
        return nextValue.then((resolvedValue) => {
          set(baseAtom, resolvedValue);
          return storage.setItem(key, resolvedValue);
        });
      }
      set(baseAtom, nextValue);
      return storage.setItem(key, nextValue);
    }
  );
  return anAtom;
}

const isPromiseLike$2 = (x) => typeof (x == null ? void 0 : x.then) === "function";
function atomWithObservable(getObservable, options) {
  const returnResultData = (result) => {
    if ("e" in result) {
      throw result.e;
    }
    return result.d;
  };
  const observableResultAtom = atom((get) => {
    var _a;
    let observable = getObservable(get);
    const itself = (_a = observable[Symbol.observable]) == null ? void 0 : _a.call(observable);
    if (itself) {
      observable = itself;
    }
    let resolve;
    const makePending = () => new Promise((r) => {
      resolve = r;
    });
    const initialResult = options && "initialValue" in options ? {
      d: typeof options.initialValue === "function" ? options.initialValue() : options.initialValue
    } : makePending();
    let setResult;
    let lastResult;
    const listener = (result) => {
      lastResult = result;
      resolve == null ? void 0 : resolve(result);
      setResult == null ? void 0 : setResult(result);
    };
    let subscription;
    let timer;
    const isNotMounted = () => !setResult;
    const unsubscribe = () => {
      if (subscription) {
        subscription.unsubscribe();
        subscription = void 0;
      }
    };
    const start = () => {
      if (subscription) {
        clearTimeout(timer);
        subscription.unsubscribe();
      }
      subscription = observable.subscribe({
        next: (d) => listener({ d }),
        error: (e) => listener({ e }),
        complete: () => {
        }
      });
      if (isNotMounted() && (options == null ? void 0 : options.unstable_timeout)) {
        timer = setTimeout(unsubscribe, options.unstable_timeout);
      }
    };
    start();
    const resultAtom = atom(lastResult || initialResult);
    if (( false ? 0 : void 0) !== "production") {
      resultAtom.debugPrivate = true;
    }
    resultAtom.onMount = (update) => {
      setResult = update;
      if (lastResult) {
        update(lastResult);
      }
      if (subscription) {
        clearTimeout(timer);
      } else {
        start();
      }
      return () => {
        setResult = void 0;
        if (options == null ? void 0 : options.unstable_timeout) {
          timer = setTimeout(unsubscribe, options.unstable_timeout);
        } else {
          unsubscribe();
        }
      };
    };
    return [resultAtom, observable, makePending, start, isNotMounted];
  });
  if (( false ? 0 : void 0) !== "production") {
    observableResultAtom.debugPrivate = true;
  }
  const observableAtom = atom(
    (get) => {
      const [resultAtom] = get(observableResultAtom);
      const result = get(resultAtom);
      if (isPromiseLike$2(result)) {
        return result.then(returnResultData);
      }
      return returnResultData(result);
    },
    (get, set, data) => {
      const [resultAtom, observable, makePending, start, isNotMounted] = get(observableResultAtom);
      if ("next" in observable) {
        if (isNotMounted()) {
          set(resultAtom, makePending());
          start();
        }
        observable.next(data);
      } else {
        throw new Error("observable is not subject");
      }
    }
  );
  return observableAtom;
}

const cache1$1 = /* @__PURE__ */ new WeakMap();
const memo1 = (create, dep1) => (cache1$1.has(dep1) ? cache1$1 : cache1$1.set(dep1, create())).get(dep1);
const isPromiseLike$1 = (p) => typeof (p == null ? void 0 : p.then) === "function";
const LOADING = { state: "loading" };
function loadable(anAtom) {
  return memo1(() => {
    const loadableCache = /* @__PURE__ */ new WeakMap();
    const refreshAtom = atom(0);
    if (( false ? 0 : void 0) !== "production") {
      refreshAtom.debugPrivate = true;
    }
    const derivedAtom = atom(
      (get, { setSelf }) => {
        get(refreshAtom);
        let value;
        try {
          value = get(anAtom);
        } catch (error) {
          return { state: "hasError", error };
        }
        if (!isPromiseLike$1(value)) {
          return { state: "hasData", data: value };
        }
        const promise = value;
        const cached1 = loadableCache.get(promise);
        if (cached1) {
          return cached1;
        }
        promise.then(
          (data) => {
            loadableCache.set(promise, { state: "hasData", data });
            setSelf();
          },
          (error) => {
            loadableCache.set(promise, { state: "hasError", error });
            setSelf();
          }
        );
        const cached2 = loadableCache.get(promise);
        if (cached2) {
          return cached2;
        }
        loadableCache.set(promise, LOADING);
        return LOADING;
      },
      (_get, set) => {
        set(refreshAtom, (c) => c + 1);
      }
    );
    if (( false ? 0 : void 0) !== "production") {
      derivedAtom.debugPrivate = true;
    }
    return atom((get) => get(derivedAtom));
  }, anAtom);
}

const getCached = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k);
const cache1 = /* @__PURE__ */ new WeakMap();
const memo2 = (create, dep1, dep2) => {
  const cache2 = getCached(() => /* @__PURE__ */ new WeakMap(), cache1, dep1);
  return getCached(create, cache2, dep2);
};
const isPromiseLike = (p) => typeof (p == null ? void 0 : p.then) === "function";
const defaultFallback = () => void 0;
function unwrap(anAtom, fallback = defaultFallback) {
  return memo2(
    () => {
      const promiseErrorCache = /* @__PURE__ */ new WeakMap();
      const promiseResultCache = /* @__PURE__ */ new WeakMap();
      const refreshAtom = atom(0);
      if (( false ? 0 : void 0) !== "production") {
        refreshAtom.debugPrivate = true;
      }
      const promiseAndValueAtom = atom(
        (get, { setSelf }) => {
          get(refreshAtom);
          const prev = get(promiseAndValueAtom);
          const promise = get(anAtom);
          if (!isPromiseLike(promise)) {
            return { v: promise };
          }
          if (promise !== (prev == null ? void 0 : prev.p)) {
            promise.then(
              (v) => {
                promiseResultCache.set(promise, v);
                setSelf();
              },
              (e) => {
                promiseErrorCache.set(promise, e);
                setSelf();
              }
            );
          }
          if (promiseErrorCache.has(promise)) {
            throw promiseErrorCache.get(promise);
          }
          if (promiseResultCache.has(promise)) {
            return {
              p: promise,
              v: promiseResultCache.get(promise)
            };
          }
          if (prev && "v" in prev) {
            return { p: promise, f: fallback(prev.v), v: prev.v };
          }
          return { p: promise, f: fallback() };
        },
        (_get, set) => {
          set(refreshAtom, (c) => c + 1);
        }
      );
      promiseAndValueAtom.init = void 0;
      if (( false ? 0 : void 0) !== "production") {
        promiseAndValueAtom.debugPrivate = true;
      }
      return atom(
        (get) => {
          const state = get(promiseAndValueAtom);
          if ("f" in state) {
            return state.f;
          }
          return state.v;
        },
        (_get, set, ...args) => set(anAtom, ...args)
      );
    },
    anAtom,
    fallback
  );
}

function atomWithRefresh(read, write) {
  const refreshAtom = atom(0);
  if (( false ? 0 : void 0) !== "production") {
    refreshAtom.debugPrivate = true;
  }
  return atom(
    (get, options) => {
      get(refreshAtom);
      return read(get, options);
    },
    (get, set, ...args) => {
      if (args.length === 0) {
        set(refreshAtom, (c) => c + 1);
      } else if (write) {
        return write(get, set, ...args);
      } else if (( false ? 0 : void 0) !== "production") {
        throw new Error("refresh must be called without arguments");
      }
    }
  );
}

function atomWithLazy(makeInitial) {
  const a = atom(void 0);
  delete a.init;
  Object.defineProperty(a, "init", {
    get() {
      return makeInitial();
    }
  });
  return a;
}




/***/ }),

/***/ 7264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ atomWithLocation)
/* harmony export */ });
/* harmony import */ var jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4945);

const getLocation = () => {
    if (typeof window === 'undefined' || !window.location) {
        return {};
    }
    return {
        pathname: window.location.pathname,
        searchParams: new URLSearchParams(window.location.search),
        hash: window.location.hash,
    };
};
const applyLocation = (location, options) => {
    const url = new URL(window.location.href);
    if ('pathname' in location) {
        url.pathname = location.pathname;
    }
    if ('searchParams' in location) {
        url.search = location.searchParams.toString();
    }
    if ('hash' in location) {
        url.hash = location.hash;
    }
    if (options === null || options === void 0 ? void 0 : options.replace) {
        window.history.replaceState(window.history.state, '', url);
    }
    else {
        window.history.pushState(null, '', url);
    }
};
const subscribe = (callback) => {
    window.addEventListener('popstate', callback);
    return () => window.removeEventListener('popstate', callback);
};
function atomWithLocation(options) {
    var _a;
    const getL = (options === null || options === void 0 ? void 0 : options.getLocation) ||
        getLocation;
    const appL = (options === null || options === void 0 ? void 0 : options.applyLocation) ||
        applyLocation;
    const sub = (options === null || options === void 0 ? void 0 : options.subscribe) || subscribe;
    const baseAtom = (0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .eU)((_a = options === null || options === void 0 ? void 0 : options.preloaded) !== null && _a !== void 0 ? _a : getL());
    if (false) // removed by dead control flow
{}
    baseAtom.onMount = (set) => {
        const callback = () => set(getL());
        const unsub = sub(callback);
        callback();
        return unsub;
    };
    const derivedAtom = (0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .eU)((get) => get(baseAtom), (get, set, arg, atomOptions = {}) => {
        set(baseAtom, arg);
        appL(get(baseAtom), { ...options, ...atomOptions });
    });
    return derivedAtom;
}


/***/ }),

/***/ 8880:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1573);


/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(array, 1) : [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatten);


/***/ }),

/***/ 8987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ak: () => (/* binding */ nanoid)
});

// UNUSED EXPORTS: customAlphabet, customRandom, random, urlAlphabet

;// ../node_modules/nanoid/url-alphabet/index.js
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

;// ../node_modules/nanoid/index.browser.js
/* @ts-self-types="./index.d.ts" */


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << Math.log2(alphabet.length - 1)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step | 0
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length >= size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size | 0, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)))
  while (size--) {
    id += urlAlphabet[bytes[size] & 63]
  }
  return id
}


/***/ })

}]);
//# sourceMappingURL=634.js.map?_cache=f42fac99ac75156e104f