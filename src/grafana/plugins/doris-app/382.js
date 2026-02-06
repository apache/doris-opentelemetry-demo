"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[382],{

/***/ 382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PageDiscover)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(6089);
// EXTERNAL MODULE: external "@grafana/runtime"
var runtime_ = __webpack_require__(8531);
// EXTERNAL MODULE: external "@grafana/ui"
var ui_ = __webpack_require__(2007);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.11.1_@types+react@19.2.2_react@17.0.2__@types+react@19.2.2_react@17.0.2/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 8 modules
var emotion_styled_browser_esm = __webpack_require__(31);
;// ./components/discover-filter/discover-filter.style.ts


const DiscoverFilterWrapper = emotion_styled_browser_esm/* default */.A.div`
    display: flex;
    align-items: center;
    .filter {
        align-self: flex-start;
        margin-top: 3px;
        margin-right: 8px;
        font-weight: 500;
        font-size: 14px;
        font-style: normal;
        line-height: 18px;
    }
    .filter-tag {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 8px;
        column-gap: 8px;
        padding: 0 8px;
        .tag {
            display: flex;
            align-items: center;
            max-width: 400px;
            height: 24px;
            padding: 2px 8px;
            font-weight: 400;
            font-size: 12px;
            font-style: normal;
            line-height: 18px;
            border: 0px;
            border-radius: 6px;
            .text {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
`;
const containerStyle = (0,css_.css)`
    width: 320px;
`;
const rowStyle = (0,css_.css)`
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
`;
const colStyle = (0,css_.css)`
    flex: 1;
`;
const footerStyle = (0,css_.css)`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;

    & button {
        flex: 1;
        display: block;
        text-align: center;
        
        span {
            display: inline;
        }
    }
`;

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 27 modules
var es = __webpack_require__(9496);
// EXTERNAL MODULE: ../node_modules/.pnpm/jotai@2.15.0_@babel+core@7.28.4_@babel+template@7.27.2_@types+react@19.2.2_react@17.0.2/node_modules/jotai/esm/react.mjs
var react = __webpack_require__(122);
// EXTERNAL MODULE: ../node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.browser.js + 1 modules
var index_browser = __webpack_require__(8776);
// EXTERNAL MODULE: ./store/discover.ts
var discover = __webpack_require__(2539);
// EXTERNAL MODULE: ./utils/data.ts
var utils_data = __webpack_require__(9008);
// EXTERNAL MODULE: ../node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(4199);
// EXTERNAL MODULE: ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js + 9 modules
var uniqBy = __webpack_require__(7892);
;// ./components/discover-filter/filter-content.tsx
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









function FilterContent({ onHide, dataFilterValue }) {
    var _errors_field, _errors_operator, _errors_label;
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const [dataFilter, setDataFilter] = (0,react/* useAtom */.fp)(discover/* dataFilterAtom */.EA);
    const [tableFieldValue, setTableFieldValue] = (0,react/* useAtom */.fp)(discover/* tableFieldValuesAtom */.CL);
    const tableData = (0,react/* useAtomValue */.md)(discover/* tableDataAtom */.q3);
    const indexes = (0,react/* useAtomValue */.md)(discover/* indexesAtom */.Eq);
    const { control, handleSubmit, watch, register, setValue, formState: { errors } } = (0,index_esm/* useForm */.mN)({
        defaultValues: {
            field: {
                label: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.fieldName,
                value: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.fieldName
            },
            operator: {
                label: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.operator,
                value: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.operator
            },
            value: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value,
            minValue: Array.isArray(dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value) ? dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value[0] : '',
            maxValue: Array.isArray(dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value) ? dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value[1] : '',
            label: (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.label) || '',
            showLabel: !!(dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.label)
        }
    });
    const field = watch('field');
    const operator = watch('operator');
    const showLabel = watch('showLabel');
    // When user turns off the Custom Label switch, clear the label form value so it won't persist.
    external_react_default().useEffect(()=>{
        if (!showLabel) {
            // Clear the label in the form state so it won't be saved or re-displayed.
            setValue('label', '');
            // If we're editing an existing filter, also remove the label from the stored filter
            // so the filter chip/list updates immediately and the switch remains off when reopened.
            if (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id) {
                setDataFilter((prev)=>{
                    let changed = false;
                    const updated = prev.map((f)=>{
                        if (f.id === dataFilterValue.id) {
                            if (f.label) {
                                changed = true;
                                return _object_spread_props(_object_spread({}, f), {
                                    label: ''
                                });
                            }
                            return f;
                        }
                        return f;
                    });
                    return changed ? updated : prev;
                });
            }
        }
    }, [
        showLabel,
        setValue,
        dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id,
        setDataFilter
    ]);
    // use centralized getFieldType from utils
    const selectedFieldType = external_react_default().useMemo(()=>{
        const fieldName = typeof field === 'string' ? field : field === null || field === void 0 ? void 0 : field.value;
        if (!fieldName) {
            return '';
        }
        const tf = tableFields.find((f)=>f.Field === fieldName);
        return (0,utils_data/* getFieldType */.Re)(tf === null || tf === void 0 ? void 0 : tf.Type);
    }, [
        field,
        tableFields
    ]);
    const isNumberField = selectedFieldType === 'NUMBER';
    const isBooleanField = selectedFieldType === 'BOOLEAN';
    const isTimeField = selectedFieldType === 'DATE';
    // Normalize OPERATORS to the form {label, value} and filter out inapplicable operators based on field type.
    const operatorOptions = external_react_default().useMemo(()=>{
        const normalized = (utils_data/* OPERATORS */.we || []).map((op)=>({
                label: op && op.label || op,
                value: op && op.value || op
            }));
        // match_* operators require doris inverted index. Keep LIKE/NOT LIKE available for string-like fields
        const matchOnlyOps = [
            'match_all',
            'match_any',
            'match_phrase',
            'match_phrase_prefix'
        ];
        if (isBooleanField) {
            // BOOLEAN should only allow equality and null checks
            const allowed = new Set([
                '=',
                '!=',
                'is null',
                'is not null'
            ]);
            return normalized.filter((opItem)=>allowed.has(String(opItem.value)));
        }
        const isNumberOrTime = isNumberField || isTimeField;
        if (isNumberOrTime) {
            // remove text match ops (including LIKE/NOT LIKE and match_*) for number or time fields
            return normalized.filter((opItem)=>{
                const v = String(opItem.value).toLowerCase();
                return !(v === 'like' || v === 'not like' || matchOnlyOps.includes(v));
            });
        }
        // non-number, non-boolean, non-time fields: keep full list
        // For string-like fields, only allow doris inverted-index text operators when the field has an inverted index
        try {
            const fieldName = typeof field === 'string' ? field : field === null || field === void 0 ? void 0 : field.value;
            // If the user hasn't selected a field yet, show the full list (no gating)
            if (!fieldName) {
                return normalized;
            }
            // treat "string" here as any type except NUMBER, BOOLEAN, DATE
            if (!isNumberField && !isBooleanField && !isTimeField) {
                const hasInverted = Array.isArray(indexes) && indexes.some((idx)=>{
                    if (!idx || !idx.columnName) {
                        return false;
                    }
                    const t = idx.type || '';
                    return String(idx.columnName) === String(fieldName) && t.toUpperCase().includes('INVERT');
                });
                if (!hasInverted) {
                    // remove only the match_* operators; allow LIKE/NOT LIKE to remain because they work without inverted index
                    return normalized.filter((opItem)=>{
                        const v = String(opItem.value).toLowerCase();
                        return !matchOnlyOps.includes(v);
                    });
                }
            }
        } catch (e) {
        // swallow any unexpected errors and fall back to returning full list
        }
        return normalized;
    }, [
        isNumberField,
        isBooleanField,
        isTimeField,
        field,
        indexes
    ]);
    const getValue = (value)=>isNaN(+value) ? value : +value;
    // Convert an input value according to current field type.
    // Preserve explicit empty string ('') so users can set an empty-string value.
    const convertValue = (v)=>{
        // Preserve explicit empty string so the user can set ''
        if (v === '') {
            return '';
        }
        if (v === undefined || v === null) {
            return v;
        }
        // If array, convert each element
        if (Array.isArray(v)) {
            return v.map(convertValue);
        }
        // Handle booleans
        if (v === true || v === 'true') {
            return true;
        }
        if (v === false || v === 'false') {
            return false;
        }
        // Prefer field-type-based conversion when possible
        if (isNumberField) {
            return getValue(String(v));
        }
        // NOTE: removed previous fallback that converted numeric-looking strings to Number for
        // non-number fields. Now we only convert to Number when the field type is numeric.
        return v;
    };
    const onSubmit = (formValues)=>{
        const { field, operator: opField, value, minValue, maxValue, label, showLabel } = formValues;
        const current = dataFilter.find((f)=>f.id === (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id));
        const id = (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id) || (0,index_browser/* nanoid */.Ak)();
        // The compatible operator could be string or {label, value}.
        const opValue = typeof opField === 'string' ? opField : opField === null || opField === void 0 ? void 0 : opField.value;
        let newValue = [];
        if (opValue === 'between' || opValue === 'not between') {
            // Use convertValue so numbers/booleans are properly typed; preserve empty strings if provided
            if (minValue !== undefined && minValue !== '' && maxValue !== undefined && maxValue !== '') {
                newValue = [
                    convertValue(minValue),
                    convertValue(maxValue)
                ];
            }
        } else if (value !== undefined) {
            // accept empty string, 0 and other falsy numeric values.
            if (Array.isArray(value)) {
                newValue = value.map((v)=>convertValue(v));
            } else {
                newValue = [
                    convertValue(value)
                ];
            }
        }
        const newItem = {
            id,
            fieldName: field.value,
            operator: opValue,
            // Only persist label when showLabel is true. Otherwise ensure it's empty.
            label: showLabel ? label : '',
            value: newValue
        };
        if (current) {
            const updated = dataFilter.map((f)=>f.id === id ? newItem : f);
            setDataFilter(updated);
        } else {
            setDataFilter([
                ...dataFilter,
                newItem
            ]);
        }
        onHide();
    };
    function renderFiledComponent() {
        // const currentField = field.value;
        // console.log(operator);
        console.log(operator);
        const currentOperator = typeof operator === 'string' ? operator : operator === null || operator === void 0 ? void 0 : operator.value;
        if (currentOperator && currentOperator !== 'is null' && currentOperator !== 'is not null' && (currentOperator === 'between' || currentOperator === 'not between')) {
            var _errors_minValue, _errors_maxValue;
            return /*#__PURE__*/ external_react_default().createElement("div", {
                className: rowStyle
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Min Value",
                invalid: !!errors.minValue,
                error: (_errors_minValue = errors.minValue) === null || _errors_minValue === void 0 ? void 0 : _errors_minValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('minValue', {
                required: 'Enter the minValue'
            })))), /*#__PURE__*/ external_react_default().createElement("div", {
                className: colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Max Value",
                invalid: !!errors.maxValue,
                error: (_errors_maxValue = errors.maxValue) === null || _errors_maxValue === void 0 ? void 0 : _errors_maxValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('maxValue', {
                required: 'Enter the maxValue'
            })))));
        }
        console.log('currentOperator', currentOperator);
        if (currentOperator === '=' || currentOperator === '!=' || currentOperator === 'like' || currentOperator === 'not like' || currentOperator === 'match_all' || currentOperator === 'match_any' || currentOperator === 'match_phrase' || currentOperator === 'match_phrase_prefix') {
            var _errors_value;
            return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Value",
                invalid: !!errors.value,
                error: (_errors_value = errors.value) === null || _errors_value === void 0 ? void 0 : _errors_value.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('value', {
                validate: (v)=>v !== undefined || 'Enter the value'
            }))));
        }
        if (currentOperator === 'in' || currentOperator === 'not in') {
            var _errors_value1;
            return /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Value",
                invalid: !!errors.value,
                error: (_errors_value1 = errors.value) === null || _errors_value1 === void 0 ? void 0 : _errors_value1.message
            }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
                name: "value",
                control: control,
                rules: {
                    required: 'Enter the value'
                },
                render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, _object_spread_props(_object_spread({}, field), {
                        isMulti: true,
                        options: tableFieldValue.map((item)=>({
                                label: item.value,
                                value: item.value
                            })),
                        placeholder: "Select value",
                        onChange: (selected)=>field.onChange(selected ? selected.map((s)=>s.value) : []),
                        value: tableFieldValue.filter((item)=>Array.isArray(field.value) && field.value.includes(item.value)).map((item)=>({
                                label: item.value,
                                value: item.value
                            }))
                    }))
            }));
        }
        return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null);
    }
    return /*#__PURE__*/ external_react_default().createElement("form", {
        onSubmit: handleSubmit(onSubmit),
        className: containerStyle
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: rowStyle
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: colStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Columns",
        invalid: !!errors.field,
        error: (_errors_field = errors.field) === null || _errors_field === void 0 ? void 0 : _errors_field.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "field",
        control: control,
        rules: {
            required: 'Select Field'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, _object_spread_props(_object_spread({}, field), {
                onChange: (selected)=>{
                    // Only update tableFieldValue when we actually have table data and a selected field
                    if ((selected === null || selected === void 0 ? void 0 : selected.value) && Array.isArray(tableData) && tableData.length > 0) {
                        setTableFieldValue((0,uniqBy/* default */.A)(tableData.map((item)=>({
                                label: selected.value,
                                value: item._original[selected.value]
                            })), 'value'));
                    } else {
                        setTableFieldValue([]);
                    }
                    field.onChange(selected);
                },
                options: tableFields.map((f)=>({
                        label: f.Field,
                        value: f.Field
                    }))
            }))
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: colStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Operator",
        invalid: !!errors.operator,
        error: (_errors_operator = errors.operator) === null || _errors_operator === void 0 ? void 0 : _errors_operator.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "operator",
        control: control,
        rules: {
            required: 'Select Operator'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, _object_spread_props(_object_spread({}, field), {
                options: operatorOptions
            }))
    })))), renderFiledComponent(), /*#__PURE__*/ external_react_default().createElement(ui_.InlineFieldRow, null, /*#__PURE__*/ external_react_default().createElement(ui_.InlineField, {
        label: "Custom Label"
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "showLabel",
        control: control,
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.InlineSwitch, field)
    }))), showLabel && /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        invalid: !!errors.label,
        error: (_errors_label = errors.label) === null || _errors_label === void 0 ? void 0 : _errors_label.message
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('label', {
        required: 'Please enter label'
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: footerStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        variant: "secondary",
        onClick: (e)=>{
            e.preventDefault();
            onHide();
        }
    }, "Cancel"), /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        type: "submit"
    }, "Confirm")));
}

;// ./components/discover-filter/index.tsx
function discover_filter_define_property(obj, key, value) {
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
function discover_filter_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            discover_filter_define_property(target, key, source[key]);
        });
    }
    return target;
}
function discover_filter_ownKeys(object, enumerableOnly) {
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
function discover_filter_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        discover_filter_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}









// import { set } from 'lodash-es';
function DiscoverFilter() {
    const [dataFilter, setDataFilter] = (0,react/* useAtom */.fp)(discover/* dataFilterAtom */.EA);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [dataFilterOpen, setDataFilterOpen] = (0,external_react_.useState)({});
    const discoverFilterRef = (0,external_react_.useRef)(null);
    const { t } = (0,es/* useTranslation */.Bd)();
    const [_loc, setLoc] = (0,react/* useAtom */.fp)(discover/* locationAtom */.JT);
    const theme = (0,ui_.useTheme2)();
    return(//  className="mt-px rounded-b-sm bg-n8 p-4 pb-6"
    /*#__PURE__*/ external_react_default().createElement(DiscoverFilterWrapper, {
        ref: discoverFilterRef,
        className: (0,css_.css)`
                background-color: ${theme.isDark ? 'rgb(24, 27, 31)' : '#FFF'};
                padding: 1rem;
                padding-bottom: 1.5rem;
                margin-top: 1px;
                border-radius: 0 0 0.25rem 0.25rem;
            `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "text-xs font-medium"
    }, t`Filter`), /*#__PURE__*/ external_react_default().createElement("div", {
        className: "filter-tag"
    }, dataFilter.map((dataFilterValue, index)=>{
        return /*#__PURE__*/ external_react_default().createElement("div", {
            key: index.toString(),
            className: (0,css_.css)`
                                margin: '0 4px';
                            `
        }, /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
            show: dataFilterOpen[dataFilterValue.id],
            onOpen: ()=>{
                setDataFilterOpen(discover_filter_object_spread_props(discover_filter_object_spread({}, dataFilterOpen), {
                    [dataFilterValue.id]: true
                }));
            },
            onClose: ()=>{
                setDataFilterOpen(discover_filter_object_spread_props(discover_filter_object_spread({}, dataFilterOpen), {
                    [dataFilterValue.id]: false
                }));
            },
            closeButton: true,
            content: /*#__PURE__*/ external_react_default().createElement(FilterContent, {
                onHide: ()=>{
                    setDataFilterOpen(discover_filter_object_spread_props(discover_filter_object_spread({}, dataFilterOpen), {
                        [dataFilterValue.id]: false
                    }));
                },
                dataFilterValue: dataFilterValue
            }),
            placement: "bottom"
        }, /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Badge, {
            // className="mx-1 rounded px-2 py-[2px] text-xs leading-[18px] text-n3 first:ml-2 hover:border-b7 group-data-[state=open]:border-b7 dark:hover:border-b3 dark:group-data-[state=open]:border-b3"
            key: index,
            text: /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: space-between;
                                                `
            }, /*#__PURE__*/ external_react_default().createElement("span", null, dataFilterValue.label ? /*#__PURE__*/ external_react_default().createElement("span", null, dataFilterValue.label) : /*#__PURE__*/ external_react_default().createElement("span", null, (0,utils_data/* getFilterSQL */.t9)(dataFilterValue))), /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                                                        margin-left: 0.5rem;
                                                        cursor: pointer;
                                                    `,
                onClick: ()=>{
                    const data_filters = dataFilter.filter((e)=>e !== dataFilterValue);
                    setDataFilter(data_filters);
                    setLoc((prev)=>{
                        const searchParams = prev.searchParams;
                        searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('data_filters', JSON.stringify(data_filters));
                        return discover_filter_object_spread_props(discover_filter_object_spread({}, prev), {
                            searchParams
                        });
                    });
                }
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
                name: "times"
            }))),
            color: "blue"
        }))));
    }), /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
        show: open,
        closeButton: false,
        onOpen: ()=>{
            setOpen(true);
        },
        content: /*#__PURE__*/ external_react_default().createElement(FilterContent, {
            onHide: ()=>{
                console.log('onHide');
                setOpen(false);
            }
        }),
        placement: "bottom"
    }, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus",
        tooltip: "Add filter",
        style: {
            marginLeft: 10
        }
    })))));
}

;// ./utils/icon.tsx


const FIELD_TYPES = [
    {
        key: 'STRING',
        value: [
            'VARCHAR',
            'STRING',
            'CHAR',
            'TEXT'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "text-fields"
        })
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
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "list-ol"
        })
    },
    {
        key: 'DATE',
        value: [
            'DATE',
            'DATETIME',
            'DATEV2',
            'DATETIMEV2'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "clock-nine"
        })
    },
    {
        key: 'JSONB',
        value: [
            'JSONB'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "brackets-curly"
        }),
        complex: true
    },
    {
        key: 'ARRAY',
        value: [
            'ARRAY'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "list-ul"
        }),
        complex: true
    },
    {
        key: 'BOOLEAN',
        value: [
            'BOOLEAN'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "toggle-on"
        })
    },
    {
        key: 'BITMAP',
        value: [
            'BITMAP'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "building"
        }),
        complex: true
    },
    {
        key: 'HLL',
        value: [
            'HLL'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "draggabledots"
        }),
        complex: true
    },
    {
        key: 'VARIANT',
        value: [
            'VARIANT'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "brackets-curly"
        }),
        complex: true
    },
    {
        key: 'JSON',
        value: [
            'JSON'
        ],
        icon: /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
            name: "brackets-curly"
        }),
        complex: true
    }
];
const getFieldIcon = (columnType)=>{
    const currentColumnType = FIELD_TYPES.find((item)=>item.value.some((val)=>columnType.toLocaleUpperCase().includes(val)));
    return currentColumnType === null || currentColumnType === void 0 ? void 0 : currentColumnType.icon;
};

// EXTERNAL MODULE: ../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3372);
// EXTERNAL MODULE: ../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(7297);
;// ./utils/tailwind.ts


function cn(...inputs) {
    return (0,bundle_mjs/* twMerge */.QP)((0,clsx/* clsx */.$)(inputs));
}

// EXTERNAL MODULE: ../node_modules/.pnpm/antd@5.27.6_date-fns@2.30.0_moment@2.29.4_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/antd/es/progress/index.js + 15 modules
var progress = __webpack_require__(3113);
// EXTERNAL MODULE: ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.js
var get = __webpack_require__(7981);
;// ./components/discover-sidebar/field-item/top-data/top-data.tsx









function countValueDistribution(jsonArray, key) {
    const valueCountMap = new Map();
    jsonArray.forEach((obj)=>{
        let value = (0,get/* default */.A)(obj, key);
        if (value === undefined) {
            value = '';
        }
        valueCountMap.set(value, (valueCountMap.get(value) || 0) + 1);
    });
    const result = {};
    valueCountMap.forEach((times, valueStr)=>{
        const value = valueStr;
        result[value] = times;
    });
    return result;
}
function TopData({ field }) {
    var _field_Type;
    console.log(field);
    const topData = (0,react/* useAtomValue */.md)(discover/* topDataAtom */.l_);
    const tableTotalCount = (0,react/* useAtomValue */.md)(discover/* tableTotalCountAtom */.HC);
    const [dataFilter, setDataFilter] = (0,react/* useAtom */.fp)(discover/* dataFilterAtom */.EA);
    const canDisplayTopData = (field === null || field === void 0 ? void 0 : (_field_Type = field.Type) === null || _field_Type === void 0 ? void 0 : _field_Type.toUpperCase()) !== 'VARIANT';
    const res = Object.entries(countValueDistribution(topData, field.Field)).sort((a, b)=>b[1].count - a[1].count);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                max-height: 400px;
                overflow-y: auto;
                padding: 8px;
            `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "mb-2 mt-2 break-words text-xs text-n5"
    }, /*#__PURE__*/ external_react_default().createElement("span", {
        className: "mr-2"
    }, field.Field), /*#__PURE__*/ external_react_default().createElement("span", null, "(", field.Type, ")")), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        font-size: 16px;
                        margin: 8px 0;
                    `
    }, "TOP5"), /*#__PURE__*/ external_react_default().createElement("small", {
        className: "text-n2"
    }, tableTotalCount >= 500 ? 500 : tableTotalCount, " Items")), canDisplayTopData ? /*#__PURE__*/ external_react_default().createElement("div", {
        className: "mt-3 space-y-3 text-n5"
    }, res.map(([value, count], index)=>index < 5 && /*#__PURE__*/ external_react_default().createElement("div", {
            key: index,
            className: "flex items-center justify-between"
        }, /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            white-space: nowrap;
                                        `
        }, /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                                                display: flex;
                                                align-items: center;
                                                width: 180px;
                                                justify-content: space-between;
                                            `
        }, /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                                                    flex: 1 1 0%;
                                                    overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    white-space: nowrap;
                                                `
        }, value), /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                                                    margin-left: 20px;
                                                    flex-shrink: 0;
                                                `
        }, +(count * 100 / topData.length).toFixed(1), "%")), /*#__PURE__*/ external_react_default().createElement(progress/* default */.A, {
            size: 4,
            className: (0,css_.css)`
                                                .ant-progress-outer {
                                                    .ant-progress-inner {
                                                        position: absolute;
                                                        top: 0px;
                                                    }
                                                }
                                            `,
            style: {
                width: '100%',
                height: '0px'
            },
            percent: +(count * 100 / topData.length).toFixed(1),
            status: "normal",
            showInfo: false
        })), !(0,utils_data/* isComplexType */.tF)(field.Type) && /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                                                margin-left: 30px;
                                            `
        }, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
            name: "plus-circle",
            onClick: (e)=>{
                console.log(value);
                setDataFilter([
                    ...dataFilter,
                    {
                        fieldName: field.Field,
                        operator: '=',
                        value: [
                            typeof value === 'string' ? value : +value
                        ],
                        id: (0,index_browser/* nanoid */.Ak)()
                    }
                ]);
                e.stopPropagation();
            },
            tooltip: "Equivalent filtration"
        }), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
            name: "minus-circle",
            style: {
                marginLeft: '4px'
            },
            tooltip: "Nonequivalent filtration",
            onClick: (e)=>{
                setDataFilter([
                    ...dataFilter,
                    {
                        fieldName: field.Field,
                        operator: '!=',
                        value: [
                            typeof value ? value : +value
                        ],
                        id: (0,index_browser/* nanoid */.Ak)()
                    }
                ]);
                e.stopPropagation();
            }
        }))))) : /*#__PURE__*/ external_react_default().createElement("div", {
        className: "mt-2 text-xs text-n5"
    }, "Does not supported"));
}

;// ./components/discover-sidebar/field-item/field-item.tsx






function FieldItem(props) {
    const theme = (0,ui_.useTheme2)();
    const { field } = props;
    field.key = field.Field;
    if (field.children) {
        field.icon = /*#__PURE__*/ external_react_default().createElement("div", {
            className: "w-4 text-sm leading-8 text-n4"
        });
        return /*#__PURE__*/ external_react_default().createElement("div", {
            className: "-ml-3 flex"
        }, "Tree");
    }
    return /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
        placement: "right",
        content: /*#__PURE__*/ external_react_default().createElement(TopData, {
            field: field
        })
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        width: 100%;
                        text-align: left;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 32px;
                        padding: 0 8px;
                        cursor: pointer;
                        &:hover .icon-wrapper {
                            opacity: 1;
                        }
                        &:hover {
                            background-color: ${theme.colors.background.secondary};
                        }
                    `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "flex"
    }, /*#__PURE__*/ external_react_default().createElement("div", null, getFieldIcon(field['Type'])), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                                display: flex;
                                margin-left: 4px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                max-width: 130px;
                            `
    }, field['Field'])), /*#__PURE__*/ external_react_default().createElement("div", {
        className: cn('icon-wrapper', (0,css_.css)`
                                opacity: 0;
                                transition: opacity 0.2s;
                                margin-left: auto;
                                display: flex;
                                align-items: center;
                                color: ${theme.colors.text.secondary};
                                &:hover {
                                    color: ${theme.colors.text.primary};
                                }
                            `)
    }, props.type === 'add' ? /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus",
        tooltip: "Add to table",
        onClick: (e)=>{
            var _props_onAdd;
            props === null || props === void 0 ? void 0 : (_props_onAdd = props.onAdd) === null || _props_onAdd === void 0 ? void 0 : _props_onAdd.call(props, field);
            e.stopPropagation();
        }
    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "minus",
        tooltip: "Delete from table",
        onClick: (e)=>{
            var _props_onRemove;
            props === null || props === void 0 ? void 0 : (_props_onRemove = props.onRemove) === null || _props_onRemove === void 0 ? void 0 : _props_onRemove.call(props, field);
            e.stopPropagation();
        }
    })))));
}

;// ./components/discover-sidebar/filter-content/filter-content.tsx







function filter_content_FilterContent() {
    const { t } = (0,es/* useTranslation */.Bd)();
    const [searchable, setSearchable] = (0,react/* useAtom */.fp)(discover/* searchableAtom */.Mb);
    const [aggregatable, setAggregatable] = (0,react/* useAtom */.fp)(discover/* aggregatableAtom */.UR);
    const [fieldType, setFieldType] = (0,react/* useAtom */.fp)(discover/* fieldTypeAtom */.m5);
    return(//  className="w-auto divide-y rounded-md dark:divide-gray-700"
    /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
      width: auto;
      border-radius: 0.375rem;
    `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
        font-size: 1.125rem;
        font-weight: 500;
        `
    }, `Field Filter`), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
          margin-top: 1rem;
          border: none;
        `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          `
    }, t`Aggregatable`), /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.RadioButtonGroup, {
        //   name="aggregatable"
        options: utils_data/* AGGREGATABLE */.hO,
        value: aggregatable,
        onChange: (val)=>{
            setAggregatable(val);
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
          margin-top: 1rem;
          border: none;
        `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          `
    }, t`Searchable`), /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.RadioButtonGroup, {
        //   name="searchable"
        options: utils_data/* SEARCHABLE */.$X,
        value: searchable,
        onChange: (val)=>{
            setSearchable(val);
        }
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
          margin-top: 1rem;
          border: none;
        `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          `
    }, t`Type`), /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        value: fieldType,
        onChange: (value)=>{
            setFieldType(value);
        },
        options: [
            {
                value: 'ANY',
                label: 'Any'
            },
            {
                value: 'STRING',
                label: 'String'
            },
            {
                value: 'NUMBER',
                label: 'Number'
            },
            {
                value: 'DATE',
                label: 'Date'
            }
        ]
    }))));
}

;// ./components/discover-sidebar/index.tsx








function DiscoverSidebar() {
    const [selectedFields, setSelectedFields] = (0,react/* useAtom */.fp)(discover/* selectedFieldsAtom */.Wg);
    const [selectedSurroundingFields, setSelectedSurroundingFields] = (0,react/* useAtom */.fp)(discover/* surroundingSelectedFieldsAtom */.gj);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const [searchable, _setSearchable] = (0,react/* useAtom */.fp)(discover/* searchableAtom */.Mb);
    const [aggregatable, _setAggregatable] = (0,react/* useAtom */.fp)(discover/* aggregatableAtom */.UR);
    const [fieldType, _setFieldType] = (0,react/* useAtom */.fp)(discover/* fieldTypeAtom */.m5);
    const [searchValue, setSearchValue] = (0,external_react_.useState)('');
    const indexes = (0,react/* useAtomValue */.md)(discover/* indexesAtom */.Eq);
    const theme = (0,ui_.useTheme2)();
    const filteredFields = tableFields.filter((field)=>{
        if (aggregatable === utils_data/* AggregatableEnum */.SY.ANY) {
            return true;
        }
        if (aggregatable === utils_data/* AggregatableEnum */.SY.YES) {
            return (0,utils_data/* getFieldType */.Re)(field.Type) === 'NUMBER';
        }
        if (aggregatable === utils_data/* AggregatableEnum */.SY.NO) {
            return (0,utils_data/* getFieldType */.Re)(field.Type) !== 'NUMBER';
        }
        return false;
    }).filter((field)=>{
        if (searchable === utils_data/* SearchableEnum */.Yp.ANY) {
            return true;
        }
        if (searchable === utils_data/* SearchableEnum */.Yp.YES) {
            return indexes.some((index)=>field.Field === index.Field);
        }
        if (searchable === utils_data/* SearchableEnum */.Yp.NO) {
            return !indexes.some((index)=>field.Field === index.Field);
        }
        return false;
    }).filter((field)=>{
        if (fieldType === utils_data/* FieldTypeEnum */.wI.ANY) {
            return true;
        }
        return (0,utils_data/* getFieldType */.Re)(field.Type) === fieldType;
    });
    const hasSelectedFields = selectedFields.length > 0;
    const availableFields = filteredFields.filter((filed)=>{
        if (selectedFields.find((item)=>filed['Field'] === item['Field'])) {
            return false;
        }
        return true;
    });
    function handleAdd(field) {
        setSelectedFields([
            ...selectedFields,
            field
        ]);
        setSelectedSurroundingFields([
            ...selectedSurroundingFields,
            field
        ]);
    }
    function handleRemove(field) {
        const index = selectedFields.findIndex((item)=>item.Field === field.Field);
        selectedFields.splice(index, 1);
        const surIndex = selectedSurroundingFields.findIndex((item)=>item.Field === field.Field);
        selectedSurroundingFields.splice(surIndex, 1);
        setSelectedFields([
            ...selectedFields
        ]);
        setSelectedSurroundingFields([
            ...selectedSurroundingFields
        ]);
    }
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                display: flex;
                flex-direction: column;
                height: 100%;
            `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    background-color: ${theme.isDark ? 'rgb(24, 27, 31)' : '#FFF'};
                    padding: 1rem 0.5rem;
                    border-raduis: 0.25rem 0;
                    align-items: center;
                    column-gap: 0.5rem;
                `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
        name: "search"
    }), /*#__PURE__*/ external_react_default().createElement(ui_.Input, {
        placeholder: `Search`,
        className: (0,css_.css)`
                        border: none;
                    `,
        value: searchValue,
        onChange: (e)=>setSearchValue(e.target.value)
    }), /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
        content: /*#__PURE__*/ external_react_default().createElement(filter_content_FilterContent, null)
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
        name: "filter"
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    margin-top: 1px;
                    flex: 1;
                    padding: 0.5rem 1rem 0.5rem 1rem;
                    background-color: ${theme.isDark ? 'rgb(24, 27, 31)' : '#FFF'};
                    height: 100%;
                    overflow: auto;
                `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.CollapsableSection, {
        label: /*#__PURE__*/ external_react_default().createElement("span", {
            className: (0,css_.css)`
                        margin-left: 4px;
                        font-size: 14px;
                        line-height: 32px;
                    `
        }, "Selected fields"),
        isOpen: true
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            width: 100%;
                        `
    }, hasSelectedFields ? /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                                    width: 100%;
                                `
    }, selectedFields.filter((field)=>{
        return field['Field'].toLowerCase().includes(searchValue.toLowerCase());
    }).map((field, index)=>/*#__PURE__*/ external_react_default().createElement(FieldItem, {
            type: "remove",
            key: index,
            field: field,
            onRemove: (field)=>handleRemove(field)
        }))) : /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        icon: "arrow",
        size: "sm",
        variant: "secondary",
        fill: "text",
        fullWidth: true,
        className: (0,css_.css)`
                                    width: 100%;
                                    text-align: left;
                                    justify-content: flex-start;
                                `
    }, "_source"))), /*#__PURE__*/ external_react_default().createElement(ui_.CollapsableSection, {
        label: /*#__PURE__*/ external_react_default().createElement("span", {
            className: (0,css_.css)`
                        margin-left: 4px;
                        font-size: 14px;
                        line-height: 32px;
                    `
        }, "Available fields"),
        isOpen: true
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            width: 100%;
                        `
    }, availableFields.filter((field)=>{
        return field['Field'].toLowerCase().includes(searchValue.toLowerCase());
    }).map((field, index)=>/*#__PURE__*/ external_react_default().createElement(FieldItem, {
            type: "add",
            field: field,
            key: index,
            onAdd: (field)=>handleAdd(field)
        }))))));
}

// EXTERNAL MODULE: ../node_modules/.pnpm/echarts-for-react@3.0.2_echarts@5.6.0_react@17.0.2/node_modules/echarts-for-react/esm/index.js + 557 modules
var esm = __webpack_require__(4059);
// EXTERNAL MODULE: ../node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(228);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./types/type.ts
var type = __webpack_require__(6452);
// EXTERNAL MODULE: ./constants.ts + 1 modules
var constants = __webpack_require__(2560);
;// ./components/discover-histogram/index.tsx
function discover_histogram_define_property(obj, key, value) {
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
function discover_histogram_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            discover_histogram_define_property(target, key, source[key]);
        });
    }
    return target;
}
function discover_histogram_ownKeys(object, enumerableOnly) {
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
function discover_histogram_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        discover_histogram_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}










function DiscoverHistogram() {
    var _currentDate_, _currentDate_1;
    const theme = (0,ui_.useTheme2)().isDark ? 'dark' : 'light';
    const [currentDate, setCurrentDate] = (0,react/* useAtom */.fp)(discover/* currentDateAtom */.Zb);
    const ReactEChartsInstance = (0,external_react_.useRef)(null);
    const [discoverCurrent, setDiscoverCurrent] = (0,react/* useAtom */.fp)(discover/* discoverCurrentAtom */.WN);
    const setActiveItem = (0,react/* useSetAtom */.Xr)(discover/* activeShortcutAtom */.m_);
    const tableDataCharts = (0,react/* useAtomValue */.md)(discover/* tableDataChartsAtom */.pB);
    if (false) // removed by dead control flow
{}
    const [interval_value, setInterval_value] = (0,external_react_.useState)(1);
    const [interval, setInterval] = (0,react/* useAtom */.fp)(discover/* intervalAtom */.le);
    if (false) // removed by dead control flow
{}
    const tableTotalCount = (0,react/* useAtomValue */.md)(discover/* tableTotalCountAtom */.HC);
    const [_timeRange, setTimeRange] = (0,react/* useAtom */.fp)(discover/* timeRangeAtom */.U9);
    const [_pageSize, setPageSize] = (0,react/* useAtom */.fp)(discover/* pageSizeAtom */.Ol);
    const setPage = (0,react/* useSetAtom */.Xr)(discover/* pageAtom */.fs);
    (0,external_react_.useEffect)(()=>{
        const v = (0,constants/* getAutoInterval */.Vy)(currentDate).interval_value;
        setInterval_value(v);
    }, [
        currentDate
    ]);
    const timeInterval = interval === type/* IntervalEnum */.B.Auto ? (0,constants/* translationDateIntervalType */.VA)(interval) : `${interval_value} ${(0,constants/* translationDateIntervalType */.VA)(interval)}`;
    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let data = [
        [
            base,
            Math.random() * 300
        ]
    ];
    for(let i = 1; i < 20000; i++){
        let now = new Date(base += oneDay);
        data.push([
            +now,
            Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])
        ]);
    }
    const options = {
        title: {
            subtext: `${`Time Interval`}: ${timeInterval}`,
            left: 'right',
            top: 12
        },
        grid: {
            left: '32px',
            right: '32px',
            bottom: '0px',
            containLabel: true
        },
        color: theme === 'light' ? [
            '#608DFF'
        ] : [
            '#608DFF'
        ],
        xAxis: {
            type: 'category',
            data: tableDataCharts.map((e)=>e['TT']),
            axisLabel: {
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
                color: theme === 'light' ? '#9F9FA2' : '#5F5F64'
            },
            axisLine: {
                lineStyle: {
                    width: 0.5,
                    color: theme === 'light' ? '#BFBFC1' : '#3F3F45'
                }
            },
            axisTick: {
                show: false
            }
        },
        toolbox: {
            show: false
        },
        brush: {
            xAxisIndex: 0
        },
        yAxis: {
            name: `Count`,
            nameTextStyle: {
                align: 'right',
                padding: [
                    5,
                    0
                ]
            },
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    width: 0.5,
                    color: theme === 'light' ? '#BFBFC1' : '#3F3F45'
                }
            },
            axisLabel: {
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            padding: 0,
            borderWidth: 0,
            backgroundColor: theme === 'light' ? '#ffffff' : 'rgba(63, 63, 69, 0.64)',
            formatter: function(params) {
                const html = `<div className="text-n2"
                                       style="
                                          padding: 8px;
                                          min-width: 120px;
                                          border-radius: 6px;
                                          backdrop-filter: blur(12px);
                                          color: ${theme === 'light' ? '#1F1F26' : '#EFEFF0'};
                                        ">
                                      <div style="padding-bottom: 4px; border-bottom: 1px solid ${theme === 'light' ? '#DFDFE0' : '#3F3F45'};">${[
                    params[0].name
                ]}</div>
                                      <div style="padding-top:4px;display: flex;justify-content: space-between;"><span>Count:</span><span style="font-family:DIN Alternate;font-size:14;font-weight:500;">${[
                    params[0].value || 0
                ]}</span></div>
                                  </div>`;
                return html;
            }
        },
        series: [
            {
                data: tableDataCharts.map((e)=>e['sum(cnt)']),
                type: 'bar',
                barWidth: '99.3%'
            }
        ],
        animation: false
    };
    (0,external_react_.useEffect)(()=>{
        const chart = ReactEChartsInstance.current;
        if (chart && tableDataCharts.length > 0) {
            const handler = ({ areas })=>{
                if (!areas.length) {
                    return;
                }
                setPage(1);
                setPageSize(50);
                setActiveItem(undefined);
                const [startIndex, endIndex] = areas[0].coordRange;
                const timeInterval = interval === type/* IntervalEnum */.B.Auto ? (0,constants/* getAutoInterval */.Vy)(currentDate).interval_unit : interval;
                const chartsEndDate = dayjs_min_default()(new Date(tableDataCharts[endIndex]['TT'])).add(interval_value, timeInterval);
                console.log('aaa', discoverCurrent);
                setDiscoverCurrent(discover_histogram_object_spread_props(discover_histogram_object_spread({}, discoverCurrent), {
                    date: [
                        dayjs_min_default()(tableDataCharts[startIndex]['TT']),
                        chartsEndDate
                    ]
                }));
                setCurrentDate([
                    dayjs_min_default()(tableDataCharts[startIndex]['TT']),
                    chartsEndDate
                ]);
                const timeRange = {
                    from: dayjs_min_default()(tableDataCharts[startIndex]['TT']).format(constants/* FORMAT_DATE */.fU),
                    to: chartsEndDate.format(constants/* FORMAT_DATE */.fU),
                    raw: {
                        from: dayjs_min_default()(tableDataCharts[startIndex]['TT']).format(constants/* FORMAT_DATE */.fU),
                        to: chartsEndDate.format(constants/* FORMAT_DATE */.fU)
                    }
                };
                setTimeRange(timeRange);
                chart.getEchartsInstance().dispatchAction({
                    type: 'brush',
                    command: 'clear',
                    areas: []
                });
            };
            if (chart.ele) {
                chart.getEchartsInstance().dispatchAction({
                    type: 'takeGlobalCursor',
                    key: 'brush',
                    brushOption: {
                        brushType: 'lineX'
                    }
                });
                chart.getEchartsInstance().on('brushEnd', handler);
                return ()=>{
                    if (chart.ele) {
                        chart.getEchartsInstance().off('brushEnd', handler);
                    }
                };
            }
        }
        return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tableDataCharts
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`padding: 0 16px;`
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                `
    }, /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement("span", {
        className: (0,css_.css)`
                            font-size: 24px;
                            font-weight: 600;
                        `
    }, tableTotalCount ? tableTotalCount.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : '0'), ' ', /*#__PURE__*/ external_react_default().createElement("span", {
        className: (0,css_.css)`font-size: 12px;`
    }, `hits`)), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        font-size: 14px;
                        color: rgb(190,190,193)
                    `
    }, currentDate && `${(_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU)} ~ ${(_currentDate_1 = currentDate[1]) === null || _currentDate_1 === void 0 ? void 0 : _currentDate_1.format(constants/* FORMAT_DATE */.fU)} `), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        width: 160px;
                    `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        value: interval,
        onChange: (selectdbInterval)=>{
            setInterval(selectdbInterval.value);
        },
        options: utils_data/* TIME_INTERVALS */.NG
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    height: 300px;
                `
    }, /*#__PURE__*/ external_react_default().createElement(esm/* default */.A, {
        option: options,
        ref: ReactEChartsInstance
    })));
}

// EXTERNAL MODULE: ../node_modules/.pnpm/antd@5.27.6_date-fns@2.30.0_moment@2.29.4_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/antd/es/tooltip/index.js + 91 modules
var tooltip = __webpack_require__(8644);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@5.27.6_date-fns@2.30.0_moment@2.29.4_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/antd/es/button/index.js + 19 modules
var es_button = __webpack_require__(3682);
// EXTERNAL MODULE: ../node_modules/.pnpm/@tanstack+react-table@8.21.3_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(3248);
// EXTERNAL MODULE: ../node_modules/.pnpm/@tanstack+table-core@8.21.3/node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(7608);
;// ./components/selectdb-ui/sd-collapsible-table/index.tsx




function SDCollapsibleTable(props) {
    const { data, columns, renderSubComponent, getRowCanExpand, className } = props;
    const theme = (0,ui_.useTheme2)();
    const table = (0,lib/* useReactTable */.N4)({
        data,
        columns,
        getRowCanExpand,
        getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
        getExpandedRowModel: (0,build_lib/* getExpandedRowModel */.D0)()
    });
    return /*#__PURE__*/ external_react_default().createElement("table", {
        className: className
    }, /*#__PURE__*/ external_react_default().createElement("thead", null, table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ external_react_default().createElement("tr", {
            key: headerGroup.id,
            className: (0,css_.css)`${theme.isDark ? 'border-bottom: 1px solid hsl(var(--border-dark));' : 'border-bottom: 1px solid hsl(var(--border));'} `
        }, headerGroup.headers.map((header)=>{
            return /*#__PURE__*/ external_react_default().createElement("th", {
                key: header.id,
                colSpan: header.colSpan,
                className: (0,css_.css)`
                                            position: sticky;
                                            top: 0;
                                            z-index: 2;
                                            height: 48px; 
                                            white-space: nowrap;
                                            background-color: ${theme.isLight ? 'hsl(var(--table-header-background)' : 'hsl(var(--table-header-background-dark)'} ); 
                                            padding-left: 16px; 
                                            padding-right: 16px;
                                            text-align: left;
                                            vertical-align: middle;
                                            font-size: 14px;
                                            font-weight: 500;    
                                            color: hsl(var(--n2)}  

                                            &:has([role="checkbox"]) {
                                                padding-right: 0;
                                            }
                                        `
            }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext()));
        })))), /*#__PURE__*/ external_react_default().createElement("tbody", {
        className: (0,css_.css)`
                    #selected {
                        background-color: #3f3f46cc;
                    }
                `
    }, table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map((row)=>{
        return /*#__PURE__*/ external_react_default().createElement(external_react_.Fragment, {
            key: row.id
        }, /*#__PURE__*/ external_react_default().createElement("tr", {
            id: row.original.selected ? 'selected' : '',
            // className={classNames(
            //     'transition-colors dark:hover:bg-n7/80 hover:bg-b1/80 data-[state=selected]:bg-muted',
            //     row.getIsExpanded() ? 'border-none' : 'border-b',
            //     row.original.selected ? 'dark:bg-n7 bg-b1/60' : 'hsl(val(--n8))',
            // )}
            className: (0,css_.css)`
                                        ${row.getIsExpanded() ? `border:none;` : `${theme.isDark ? 'border-bottom: 1px solid hsl(var(--border-dark));' : 'border-bottom: 1px solid hsl(var(--border));'} `}

                                        ${theme.isLight ? `
                                             background-color: ${row.original.selected ? 'hsl(var(--b1) / 0.6)' : 'hsl(val(--n8))'}; 
                                        &:hover {
                                            background-color: hsl(var(--b1) / 0.8);
                                        }
                                            ` : `
                                            background-color: ${row.original.selected ? 'hsl(var(--n7))' : 'hsl(val(--n8))'}; 
                                            &:hover {
                                                    background-color: hsl(var(--n7) / 0.8);
                                                }
                                            }
                                            `}
                                    `
        }, row.getVisibleCells().map((cell)=>{
            return /*#__PURE__*/ external_react_default().createElement("td", {
                key: cell.id,
                className: (0,css_.css)`
                                                height: 48px;
                                                padding: 0 16px;
                                                font-size: 14px;
                                            `
            }, cell.getContext().getValue() !== null ? (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()) : '-');
        })), row.getIsExpanded() && /*#__PURE__*/ external_react_default().createElement("tr", {
            //  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            className: (0,css_.css)`
                                        border-bottom: 1px solid rgb(63,63,70);
                                        transition-property: background-color, border-color, color, fill, stroke;
                                        transition-duration: 150ms;
                                        transition-timing-function: ease-in-out;
                                        
                                        &:hover {
                                            background-color: hsl(var(--muted) / 0.5);
                                        }
                                        
                                        [data-state="selected"] {
                                            background-color: hsl(var(--muted))
                                        }
                                    `
        }, /*#__PURE__*/ external_react_default().createElement("td", {
            colSpan: row.getVisibleCells().length,
            className: (0,css_.css)`
                                                height: 32px;
                                                padding: 0;
                                            `
        }, renderSubComponent({
            row
        }))));
    }) : /*#__PURE__*/ external_react_default().createElement("tr", null, /*#__PURE__*/ external_react_default().createElement("td", {
        colSpan: columns.length
    }, /*#__PURE__*/ external_react_default().createElement(ui_.EmptySearchResult, null, `No Data`)))));
}

;// ./components/discover-content/discover-content.style.ts


const HoverStyle = (0,css_.css)`
    &:hover {
        .filter-content {
            visibility: visible;
        }
    }
`;
const ColumnStyleWrapper = emotion_styled_browser_esm/* default */.A.div`
    .field-key {
        padding: 0px 4px 2px;
        margin-right: 4px;
        border-radius: 4px;
    }
`;

;// ./components/discover-content/content-table-actions.tsx






function ContentTableActions({ fieldName, fieldValue }) {
    var _tableFields_find;
    const [selectedFields, setSelectedFields] = (0,react/* useAtom */.fp)(discover/* selectedFieldsAtom */.Wg);
    const [dataFilter, setDataFilter] = (0,react/* useAtom */.fp)(discover/* dataFilterAtom */.EA);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const fieldType = (_tableFields_find = tableFields.find((field)=>field.Field === fieldName)) === null || _tableFields_find === void 0 ? void 0 : _tableFields_find.Type;
    const hasField = selectedFields.some((item)=>item.Field === fieldName);
    const filterValue = typeof fieldValue === 'object' ? JSON.stringify(fieldValue) : fieldValue;
    return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "icons",
        style: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }, !(0,utils_data/* isComplexType */.tF)(fieldType) && /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus-circle",
        tooltip: "Equivalent filtration",
        onClick: ()=>{
            setDataFilter([
                ...dataFilter,
                {
                    fieldName: fieldName,
                    operator: '=',
                    value: [
                        filterValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
        }
    }), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "minus-circle",
        tooltip: "Nonequivalent filtration",
        onClick: ()=>{
            setDataFilter([
                ...dataFilter,
                {
                    fieldName: fieldName,
                    operator: '!=',
                    value: [
                        filterValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
        }
    })), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus",
        tooltip: hasField ? 'Delete From Table' : 'Add To Table',
        onClick: ()=>{
            const field = tableFields.find((field)=>field.Field === fieldName);
            if (hasField) {
                const index = selectedFields.findIndex((item)=>item.Field === fieldName);
                selectedFields.splice(index, 1);
                setSelectedFields([
                    ...selectedFields
                ]);
            } else {
                setSelectedFields([
                    ...selectedFields,
                    field
                ]);
            }
        }
    })));
}

;// ./components/discover-content/content-item.tsx







function ContentItem({ fieldName, fieldValue, fieldType }) {
    const [dataFilter, setDataFilter] = (0,react/* useAtom */.fp)(discover/* dataFilterAtom */.EA);
    return /*#__PURE__*/ external_react_default().createElement("div", null, !(0,utils_data/* isComplexType */.tF)(fieldType) && /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    alignItems: 'center';
                    margin-left: 10px;
                `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus-circle",
        onClick: (e)=>{
            setDataFilter([
                ...dataFilter,
                {
                    fieldName,
                    operator: '=',
                    value: [
                        fieldValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
            e.stopPropagation();
        },
        tooltip: "Equivalent filtration"
    }), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "minus-circle",
        style: {
            marginLeft: '4px'
        },
        onClick: (e)=>{
            setDataFilter([
                ...dataFilter,
                {
                    fieldName,
                    operator: '!=',
                    value: [
                        fieldValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
            e.stopPropagation();
        },
        tooltip: "Nonequivalent filtration"
    })));
}

// EXTERNAL MODULE: ../node_modules/.pnpm/ahooks@3.9.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/ahooks/es/useRequest/index.js + 32 modules
var useRequest = __webpack_require__(8533);
;// ./components/surrounding-logs/surrounding-content-item.tsx







function SurroundingContentItem({ fieldName, fieldValue, fieldType }) {
    const [surroundingDataFilter, setSurroundingDataFilter] = (0,react/* useAtom */.fp)(discover/* surroundingDataFilterAtom */.wc);
    return /*#__PURE__*/ external_react_default().createElement("div", null, !(0,utils_data/* isComplexType */.tF)(fieldType) && /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    alignItems: 'center';
                    margin-left: 10px;
                `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus-circle",
        onClick: (e)=>{
            setSurroundingDataFilter([
                ...surroundingDataFilter,
                {
                    fieldName,
                    operator: '=',
                    value: [
                        fieldValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
            e.stopPropagation();
        },
        tooltip: "Equivalent filtration"
    }), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "minus-circle",
        style: {
            marginLeft: '4px'
        },
        onClick: (e)=>{
            setSurroundingDataFilter([
                ...surroundingDataFilter,
                {
                    fieldName,
                    operator: '!=',
                    value: [
                        fieldValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
            e.stopPropagation();
        },
        tooltip: "Nonequivalent filtration"
    })));
}

;// ./components/surrounding-logs/logs-actions.tsx




function SurroundingLogsActions(props) {
    const { getSurroundingData, getSurroundingDataLoading, time, timeFieldPageSize, tips, count, type } = props;
    const { t } = (0,es/* useTranslation */.Bd)();
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                display: flex;
                align-items: center;
                justify-content: flex-start;
            `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        // loading={getSurroundingDataLoading}
        className: "font-normal text-n2 hover:text-b7 hover:no-underline",
        onClick: ()=>{
            getSurroundingData({
                time: time
            });
        },
        type: "reset"
    }, !getSurroundingDataLoading && /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, type === 'before' ? /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "arrow-up",
        "aria-label": `Load After`
    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "arrow-down",
        "aria-label": `Load Before`
    })), `Load`, " ", timeFieldPageSize, " ", t`Items`), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    margin-left: 8px;
                `
    }, count, " ", `Items`, " ", ` `, tips));
}

;// ./components/surrounding-logs/discover-filter/discover-filter.style.ts


const discover_filter_style_DiscoverFilterWrapper = emotion_styled_browser_esm/* default */.A.div`
    display: flex;
    align-items: center;
    .filter {
        align-self: flex-start;
        margin-top: 3px;
        margin-right: 8px;
        font-weight: 500;
        font-size: 14px;
        font-style: normal;
        line-height: 18px;
    }
    .filter-tag {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 8px;
        .tag {
            display: flex;
            align-items: center;
            max-width: 400px;
            height: 24px;
            padding: 2px 8px;
            font-weight: 400;
            font-size: 12px;
            font-style: normal;
            line-height: 18px;
            border: 0px;
            border-radius: 6px;
            .text {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
`;
const discover_filter_style_containerStyle = (0,css_.css)`
    width: 320px;
`;
const discover_filter_style_rowStyle = (0,css_.css)`
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
`;
const discover_filter_style_colStyle = (0,css_.css)`
    flex: 1;
`;
const discover_filter_style_footerStyle = (0,css_.css)`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`;

;// ./components/surrounding-logs/discover-filter/filter-content.tsx
function filter_content_define_property(obj, key, value) {
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
function filter_content_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            filter_content_define_property(target, key, source[key]);
        });
    }
    return target;
}
function filter_content_ownKeys(object, enumerableOnly) {
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
function filter_content_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        filter_content_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}









function discover_filter_filter_content_FilterContent(props) {
    var _errors_field, _errors_operator, _errors_label;
    const { onHide, dataFilterValue } = props;
    const [surroundingDataFilter, setSurroundingDataFilter] = (0,react/* useAtom */.fp)(discover/* surroundingDataFilterAtom */.wc);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const indexes = (0,react/* useAtomValue */.md)(discover/* indexesAtom */.Eq);
    if (false) // removed by dead control flow
{}
    const [tableFieldValue, setTableFieldValue] = (0,react/* useAtom */.fp)(discover/* tableFieldValuesAtom */.CL);
    const tableData = (0,react/* useAtomValue */.md)(discover/* tableDataAtom */.q3);
    const { control, handleSubmit, watch, register, setValue, formState: { errors } } = (0,index_esm/* useForm */.mN)({
        defaultValues: {
            field: {
                label: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.fieldName,
                value: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.fieldName
            },
            operator: {
                label: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.operator,
                value: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.operator
            },
            value: dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value,
            minValue: Array.isArray(dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value) ? dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value[0] : '',
            maxValue: Array.isArray(dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value) ? dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.value[1] : '',
            label: (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.label) || '',
            showLabel: !!(dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.label)
        }
    });
    const field = watch('field');
    const operator = watch('operator');
    const showLabel = watch('showLabel');
    const getValue = (value)=>isNaN(+value) ? value : +value;
    // use centralized getFieldType from utils
    const selectedFieldType = external_react_default().useMemo(()=>{
        const fieldName = typeof field === 'string' ? field : field === null || field === void 0 ? void 0 : field.value;
        if (!fieldName) {
            return '';
        }
        const tf = tableFields.find((f)=>f.Field === fieldName);
        return (0,utils_data/* getFieldType */.Re)(tf === null || tf === void 0 ? void 0 : tf.Type);
    }, [
        field,
        tableFields
    ]);
    const isNumberField = selectedFieldType === 'NUMBER';
    const isBooleanField = selectedFieldType === 'BOOLEAN';
    const isTimeField = selectedFieldType === 'DATE';
    // Normalize OPERATORS to the form {label, value} and filter out inapplicable operators based on field type.
    const operatorOptions = external_react_default().useMemo(()=>{
        const normalized = (utils_data/* OPERATORS */.we || []).map((op)=>({
                label: op && op.label || op,
                value: op && op.value || op
            }));
        // match_* operators require doris inverted index. Keep LIKE/NOT LIKE available for string-like fields
        const matchOnlyOps = [
            'match_all',
            'match_any',
            'match_phrase',
            'match_phrase_prefix'
        ];
        if (isBooleanField) {
            // BOOLEAN should only allow equality and null checks
            const allowed = new Set([
                '=',
                '!=',
                'is null',
                'is not null'
            ]);
            return normalized.filter((opItem)=>allowed.has(String(opItem.value)));
        }
        const isNumberOrTime = isNumberField || isTimeField;
        if (isNumberOrTime) {
            // remove text match ops (including LIKE/NOT LIKE and match_*) for number or time fields
            return normalized.filter((opItem)=>{
                const v = String(opItem.value).toLowerCase();
                return !(v === 'like' || v === 'not like' || matchOnlyOps.includes(v));
            });
        }
        // non-number, non-boolean, non-time fields: keep full list but gate match_* on inverted index
        try {
            const fieldName = typeof field === 'string' ? field : field === null || field === void 0 ? void 0 : field.value;
            if (!fieldName) {
                return normalized;
            }
            if (!isNumberField && !isBooleanField && !isTimeField) {
                const hasInverted = Array.isArray(indexes) && indexes.some((idx)=>{
                    if (!idx || !idx.columnName) {
                        return false;
                    }
                    const t = idx.type || '';
                    return String(idx.columnName) === String(fieldName) && t.toUpperCase().includes('INVERT');
                });
                if (!hasInverted) {
                    // remove only the match_* operators; allow LIKE/NOT LIKE to remain
                    return normalized.filter((opItem)=>{
                        const v = String(opItem.value).toLowerCase();
                        return !matchOnlyOps.includes(v);
                    });
                }
            }
        } catch (e) {
        // fallback to full list
        }
        return normalized;
    }, [
        isNumberField,
        isBooleanField,
        isTimeField,
        field,
        indexes
    ]);
    // Convert an input value according to current field type.
    // Preserve explicit empty string ('') so users can set an empty-string value.
    const convertValue = (v)=>{
        // Preserve explicit empty string so the user can set ''
        if (v === '') {
            return '';
        }
        if (v === undefined || v === null) {
            return v;
        }
        // If array, convert each element
        if (Array.isArray(v)) {
            return v.map(convertValue);
        }
        // Handle booleans
        if (v === true || v === 'true') {
            return true;
        }
        if (v === false || v === 'false') {
            return false;
        }
        // Prefer field-type-based conversion when possible
        if (isNumberField) {
            return getValue(String(v));
        }
        // NOTE: only convert to Number when the field type is numeric. For non-number fields
        // preserve the original string so values like '00123' remain strings.
        return v;
    };
    const onSubmit = (formValues)=>{
        const { field, operator: opField, value, minValue, maxValue, label, showLabel } = formValues;
        const current = surroundingDataFilter.find((f)=>f.id === (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id));
        const id = (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id) || (0,index_browser/* nanoid */.Ak)();
        // The compatible operator could be string or {label, value}.
        const opValue = typeof opField === 'string' ? opField : opField === null || opField === void 0 ? void 0 : opField.value;
        let newValue = [];
        if (opValue === 'between' || opValue === 'not between') {
            // Use convertValue so numbers/booleans are properly typed; preserve empty strings if provided
            if (minValue !== undefined && minValue !== '' && maxValue !== undefined && maxValue !== '') {
                newValue = [
                    convertValue(minValue),
                    convertValue(maxValue)
                ];
            }
        } else if (value !== undefined) {
            // accept empty string, 0 and other falsy numeric values.
            if (Array.isArray(value)) {
                newValue = value.map((v)=>convertValue(v));
            } else {
                newValue = [
                    convertValue(value)
                ];
            }
        }
        const newItem = {
            id,
            fieldName: field.value,
            operator: opValue,
            // Only persist label when showLabel is true. Otherwise ensure it's empty.
            label: showLabel ? label : '',
            value: newValue
        };
        if (current) {
            const updated = surroundingDataFilter.map((f)=>f.id === id ? newItem : f);
            setSurroundingDataFilter(updated);
        } else {
            setSurroundingDataFilter([
                ...surroundingDataFilter,
                newItem
            ]);
        }
        onHide();
    };
    // When user turns off the Custom Label switch, clear the label form value so it won't persist.
    external_react_default().useEffect(()=>{
        // watch 'showLabel' via the form's watch above; this effect runs when showLabel changes
        // but we need access to the current 'showLabel' value - use watch above.
        const currentShowLabel = watch('showLabel');
        if (!currentShowLabel) {
            // Clear the label in the form state so it won't be saved or re-displayed.
            setValue('label', '');
            // If we're editing an existing filter, also remove the label from the stored filter
            // so the filter chip/list updates immediately and the switch remains off when reopened.
            if (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id) {
                setSurroundingDataFilter((prev)=>{
                    let changed = false;
                    const updated = prev.map((f)=>{
                        if (f.id === dataFilterValue.id) {
                            if (f.label) {
                                changed = true;
                                return filter_content_object_spread_props(filter_content_object_spread({}, f), {
                                    label: ''
                                });
                            }
                            return f;
                        }
                        return f;
                    });
                    return changed ? updated : prev;
                });
            }
        }
    // We only want this effect to run when the form's showLabel changes or when editing a different filter
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        watch,
        setValue,
        dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id,
        setSurroundingDataFilter
    ]);
    function renderFiledComponent() {
        const currentOperator = typeof operator === 'string' ? operator : operator === null || operator === void 0 ? void 0 : operator.value;
        if (currentOperator && currentOperator !== 'is null' && currentOperator !== 'is not null' && (currentOperator === 'between' || currentOperator === 'not between')) {
            var _errors_minValue, _errors_maxValue;
            return /*#__PURE__*/ external_react_default().createElement("div", {
                className: discover_filter_style_rowStyle
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: discover_filter_style_colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Min Value",
                invalid: !!errors.minValue,
                error: (_errors_minValue = errors.minValue) === null || _errors_minValue === void 0 ? void 0 : _errors_minValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('minValue', {
                required: 'Enter the minValue'
            })))), /*#__PURE__*/ external_react_default().createElement("div", {
                className: discover_filter_style_colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Max Value",
                invalid: !!errors.maxValue,
                error: (_errors_maxValue = errors.maxValue) === null || _errors_maxValue === void 0 ? void 0 : _errors_maxValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('maxValue', {
                required: 'Enter the maxValue'
            })))));
        }
        if (currentOperator === '=' || currentOperator === '!=' || currentOperator === 'like' || currentOperator === 'not like' || currentOperator === 'match_all' || currentOperator === 'match_any' || currentOperator === 'match_phrase' || currentOperator === 'match_phrase_prefix') {
            var _errors_value;
            return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Value",
                invalid: !!errors.value,
                error: (_errors_value = errors.value) === null || _errors_value === void 0 ? void 0 : _errors_value.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('value', {
                validate: (v)=>v !== undefined || 'Enter the value'
            }))));
        }
        if (currentOperator === 'in' || currentOperator === 'not in') {
            var _errors_value1;
            return /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "Value",
                invalid: !!errors.value,
                error: (_errors_value1 = errors.value) === null || _errors_value1 === void 0 ? void 0 : _errors_value1.message
            }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
                name: "value",
                control: control,
                rules: {
                    required: 'Enter the value'
                },
                render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, filter_content_object_spread_props(filter_content_object_spread({}, field), {
                        isMulti: true,
                        options: tableFieldValue.map((item)=>({
                                label: item.value,
                                value: item.value
                            })),
                        placeholder: "Select value",
                        onChange: (selected)=>field.onChange(selected ? selected.map((s)=>s.value) : []),
                        value: tableFieldValue.filter((item)=>Array.isArray(field.value) && field.value.includes(item.value)).map((item)=>({
                                label: item.value,
                                value: item.value
                            }))
                    }))
            }));
        }
        return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null);
    }
    return /*#__PURE__*/ external_react_default().createElement("form", {
        onSubmit: handleSubmit(onSubmit),
        className: discover_filter_style_containerStyle
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: discover_filter_style_rowStyle
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: discover_filter_style_colStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Columns",
        invalid: !!errors.field,
        error: (_errors_field = errors.field) === null || _errors_field === void 0 ? void 0 : _errors_field.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "field",
        control: control,
        rules: {
            required: 'Select Field'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, filter_content_object_spread_props(filter_content_object_spread({}, field), {
                onChange: (selected)=>{
                    // Only update tableFieldValue when we actually have table data and a selected field
                    if ((selected === null || selected === void 0 ? void 0 : selected.value) && Array.isArray(tableData) && tableData.length > 0) {
                        setTableFieldValue((0,uniqBy/* default */.A)(tableData.map((item)=>({
                                label: selected.value,
                                value: item._original[selected.value]
                            })), 'value'));
                    } else {
                        setTableFieldValue([]);
                    }
                    field.onChange(selected);
                },
                options: tableFields.map((f)=>({
                        label: f.Field,
                        value: f.Field
                    }))
            }))
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: discover_filter_style_colStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Operator",
        invalid: !!errors.operator,
        error: (_errors_operator = errors.operator) === null || _errors_operator === void 0 ? void 0 : _errors_operator.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "operator",
        control: control,
        rules: {
            required: 'Select Operator'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, filter_content_object_spread_props(filter_content_object_spread({}, field), {
                options: operatorOptions
            }))
    })))), renderFiledComponent(), /*#__PURE__*/ external_react_default().createElement(ui_.InlineFieldRow, null, /*#__PURE__*/ external_react_default().createElement(ui_.InlineField, {
        label: "Custom Label"
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "showLabel",
        control: control,
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.InlineSwitch, field)
    }))), showLabel && /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        invalid: !!errors.label,
        error: (_errors_label = errors.label) === null || _errors_label === void 0 ? void 0 : _errors_label.message
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('label', {
        required: 'Please enter label'
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: discover_filter_style_footerStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        variant: "secondary",
        onClick: (e)=>{
            e.preventDefault();
            onHide();
        }
    }, "Cancel"), /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        type: "submit"
    }, "Confirm")));
}

;// ./components/surrounding-logs/discover-filter/index.tsx
function surrounding_logs_discover_filter_define_property(obj, key, value) {
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
function surrounding_logs_discover_filter_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            surrounding_logs_discover_filter_define_property(target, key, source[key]);
        });
    }
    return target;
}
function surrounding_logs_discover_filter_ownKeys(object, enumerableOnly) {
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
function surrounding_logs_discover_filter_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        surrounding_logs_discover_filter_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}









function SurroundingDiscoverFilter(props) {
    const [surroundingDataFilter, setSurroundingDataFilter] = (0,react/* useAtom */.fp)(discover/* surroundingDataFilterAtom */.wc);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [dataFilterOpen, setDataFilterOpen] = (0,external_react_.useState)({});
    const discoverFilterRef = (0,external_react_.useRef)(null);
    const { t } = (0,es/* useTranslation */.Bd)();
    const theme = (0,ui_.useTheme2)();
    console.log('surroundingDataFilter', surroundingDataFilter);
    return /*#__PURE__*/ external_react_default().createElement(discover_filter_style_DiscoverFilterWrapper, {
        ref: discoverFilterRef,
        className: (0,css_.css)`
                background-color: ${theme.isDark ? 'rgb(24, 27, 31)' : '#FFF'};
                padding: 1rem;
                padding-bottom: 1.5rem;
                margin-top: 1px;
                border-radius: 0 0 0.25rem 0.25rem;
            `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "text-xs font-medium"
    }, t`Filter`), /*#__PURE__*/ external_react_default().createElement("div", {
        className: "filter-tag"
    }, surroundingDataFilter.map((dataFilterValue, index)=>{
        return /*#__PURE__*/ external_react_default().createElement("div", {
            key: index.toString(),
            className: (0,css_.css)`
                                margin-left: 8px;
                            `
        }, /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
            show: dataFilterOpen[dataFilterValue.id],
            onOpen: ()=>{
                setDataFilterOpen(surrounding_logs_discover_filter_object_spread_props(surrounding_logs_discover_filter_object_spread({}, dataFilterOpen), {
                    [dataFilterValue.id]: true
                }));
            },
            onClose: ()=>{
                setDataFilterOpen(surrounding_logs_discover_filter_object_spread_props(surrounding_logs_discover_filter_object_spread({}, dataFilterOpen), {
                    [dataFilterValue.id]: false
                }));
            },
            closeButton: true,
            content: /*#__PURE__*/ external_react_default().createElement(discover_filter_filter_content_FilterContent, {
                onHide: ()=>{
                    setDataFilterOpen(surrounding_logs_discover_filter_object_spread_props(surrounding_logs_discover_filter_object_spread({}, dataFilterOpen), {
                        [dataFilterValue.id]: false
                    }));
                },
                dataFilterValue: dataFilterValue
            }),
            placement: "bottom"
        }, /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(ui_.Badge, {
            key: index,
            text: /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: space-between;
                                                `
            }, /*#__PURE__*/ external_react_default().createElement("span", null, dataFilterValue.label ? /*#__PURE__*/ external_react_default().createElement("span", null, dataFilterValue.label) : /*#__PURE__*/ external_react_default().createElement("span", null, (0,utils_data/* getFilterSQL */.t9)(dataFilterValue))), /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                                                        margin-left: 0.5rem;
                                                        cursor: pointer;
                                                    `,
                onClick: ()=>{
                    const data_filters = surroundingDataFilter.filter((e)=>e !== dataFilterValue) || [];
                    console.log('data_filters', data_filters);
                    setSurroundingDataFilter(data_filters);
                // setLoc(prev => {
                //     const searchParams = prev.searchParams;
                //     searchParams?.set('data_filters', JSON.stringify(data_filters));
                //     return {
                //         ...prev,
                //         searchParams,
                //     };
                // });
                }
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
                name: "times"
            }))),
            color: "blue"
        }))));
    }), /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
        show: open,
        closeButton: false,
        onOpen: ()=>{
            setOpen(true);
        },
        content: /*#__PURE__*/ external_react_default().createElement(discover_filter_filter_content_FilterContent, {
            onHide: ()=>{
                console.log('onHide');
                setOpen(false);
            }
        }),
        placement: "bottom"
    }, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus",
        tooltip: "Add filter",
        style: {
            marginLeft: 10
        }
    }))));
}

// EXTERNAL MODULE: ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js + 7 modules
var sortBy = __webpack_require__(7739);
;// ./services/sql.ts
function getQueryTableResultSQL(params) {
    const indexesStatement = params.indexes_statement;
    let statement = `SELECT * FROM \`${params.database}\`.\`${params.table}\` WHERE`;
    if (indexesStatement && params.search_type === 'Search') {
        statement += ` (${indexesStatement}) AND`;
    }
    // timeField 加上反引号
    statement += ` (\`${params.timeField}\` BETWEEN '${params.startDate}' AND '${params.endDate}') `;
    statement = params.data_filters.reduce((prev, curr)=>{
        return addSqlFilter(prev, curr);
    }, statement);
    if (params.search_type === 'SQL' && params.search_value) {
        statement = statement + ` AND ${params.search_value}`;
    }
    if (params.search_type === 'Lucene' && params.lucene_where) {
        statement = statement + ` AND (${params.lucene_where})`;
    }
    // ORDER BY 的 timeField 也加反引号
    statement = statement + ` ORDER BY \`${params.timeField}\` DESC LIMIT ${+params.page_size} OFFSET ${(+(params === null || params === void 0 ? void 0 : params.page) - 1) * params.page_size} `;
    return statement;
}
function getQueryTableChartsSQL(params) {
    const indexes = params.indexes;
    let statement = `SELECT ${params.interval}_FLOOR(table_per_time.T,${params.interval_value}) as TT,sum(table_per_time.cnt) FROM (SELECT ${params.interval}_FLOOR(${params.timeField}) as T,count(*) as cnt FROM \`${params.database}\`.\`${params.table}\` WHERE`;
    if (indexes && params.search_type === 'Search') {
        statement += ` (${indexes}) AND`;
    }
    statement += ` (\`${params.timeField}\` between '${params.startDate}' AND '${params.endDate}') `;
    if (params.data_filters.length > 0) {
        statement = params.data_filters.reduce((prev, curr)=>{
            return addSqlFilter(prev, curr);
        }, statement);
    }
    if (params.search_type === 'SQL' && params.search_value) {
        statement = statement + ` ` + `AND ${params.search_value}`;
    }
    if (params.search_type === 'Lucene' && params.lucene_where) {
        statement = statement + ` AND (${params.lucene_where})`;
    }
    statement = statement + ` ` + `GROUP BY T ORDER BY T) as table_per_time GROUP BY TT ORDER BY TT`;
    return statement;
}
function getQueryTableResultCountSQL(params) {
    const indexes = params.indexes;
    let statement = `SELECT SUM(table_per_time.cnt) AS total_count
        FROM (
          SELECT ${params.interval}_FLOOR(${params.timeField}) as T, COUNT(*) as cnt
          FROM \`${params.database}\`.\`${params.table}\`
          WHERE`;
    if (indexes && params.search_type === 'Search') {
        statement += ` (${indexes}) AND`;
    }
    statement += ` (\`${params.timeField}\` between '${params.startDate}' AND '${params.endDate}')`;
    if (params.data_filters.length > 0) {
        statement = params.data_filters.reduce((prev, curr)=>{
            return addSqlFilter(prev, curr);
        }, statement);
    }
    if (params.search_type === 'SQL' && params.search_value) {
        statement = statement + ` ` + `AND ${params.search_value}`;
    }
    if (params.search_type === 'Lucene' && params.lucene_where) {
        statement = statement + ` AND (${params.lucene_where})`;
    }
    statement = statement + ` ` + `GROUP BY T) AS table_per_time;`;
    return statement;
}
function getSurroundingSQL(params) {
    let statement = `SELECT * FROM \`${params.database}\`.\`${params.table}\` WHERE`;
    statement += ` (\`${params.timeField}\` ${params.operator} '${params.time}')`;
    statement = params.data_filters.reduce((prev, curr)=>{
        return addSqlFilter(prev, curr);
    }, statement);
    const orderSymbol = params.operator === '<' ? 'DESC' : 'ASC';
    statement = statement + ` ` + `ORDER BY \`${params.timeField}\` ${orderSymbol} LIMIT ${+params.pageSize}`;
    return statement;
}
function getFilterSQL({ fieldName, operator, value }) {
    const valueString = value.map((e)=>{
        if (typeof e === 'string') {
            return `'${e}'`;
        } else {
            return e;
        }
    });
    const transformedFieldName = transformFieldPath(fieldName);
    if (operator === '=' || operator === '!=' || operator === 'like' || operator === 'not like' || operator === 'match_all' || operator === 'match_any' || operator === 'match_phrase' || operator === 'match_phrase_prefix') {
        return `${transformedFieldName} ${operator} ${valueString[0]}`;
    }
    if (operator === 'is null' || operator === 'is not null') {
        return `${transformedFieldName} ${operator}`;
    }
    if (operator === 'between' || operator === 'not between') {
        return `${transformedFieldName} ${operator} ${valueString[0]} AND ${valueString[1]}`;
    }
    if (operator === 'in' || operator === 'not in') {
        return `${transformedFieldName} ${operator} ('${valueString}')`;
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
function transformFieldPath(fieldPath) {
    const parts = fieldPath.split('.');
    return parts[0] + parts.slice(1).map((part)=>`['${part}']`).join('');
}

;// ./services/discover.ts
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
    const QueryTableResultSQL = getQueryTableResultSQL(rest);
    const response = (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTableData',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: QueryTableResultSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
    return response;
}
function getTableDataChartsService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const QueryTableChartsSQL = getQueryTableChartsSQL(rest);
    const response = (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTableDataCharts',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: QueryTableChartsSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
    return response;
}
function getTopDataService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const QueryTableResultSQL = getQueryTableResultSQL(rest);
    const response = (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTableTopData',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: QueryTableResultSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
    return response;
}
function getTableDataCountService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const QueryTableResultCountSQL = getQueryTableResultCountSQL(rest);
    const response = (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getTableCountData',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: QueryTableResultCountSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
    return response;
}
function getSurroundingDataService(payload) {
    const { selectdbDS } = payload, rest = _object_without_properties(payload, [
        "selectdbDS"
    ]);
    const surroundingSQL = getSurroundingSQL(rest);
    const response = (0,runtime_.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
            queries: [
                {
                    refId: 'getSurroundingData',
                    datasource: {
                        type: 'mysql',
                        uid: selectdbDS.uid
                    },
                    rawSql: surroundingSQL,
                    format: 'table'
                }
            ]
        },
        credentials: 'include'
    });
    return response;
}

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(1269);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(8763);
;// ./components/surrounding-logs/content/content-table-actions.tsx







function SurroundingContentTableActions({ fieldName, fieldValue }) {
    console.log(fieldName, fieldValue);
    // const [selectedSurroundingFields, setSelectedSurroundingFields] = useAtom(surroundingSelectedFieldsAtom);
    const [surroundingDataFilter, setSurroundingDataFilter] = (0,react/* useAtom */.fp)(discover/* surroundingDataFilterAtom */.wc);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const fieldType = tableFields.find((field)=>field.Field === fieldName).Type;
    // const hasField = selectedSurroundingFields.some((item: any) => item.Field === fieldName);
    // const filterValue = typeof fieldValue === 'object' ? JSON.stringify(fieldValue) : fieldValue;
    return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "icons",
        style: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }, !(0,utils_data/* isComplexType */.tF)(fieldType) && /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            display: flex;
                            align-items: 'center';
                            margin-left: 10px;
                        `
    }, /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "plus-circle",
        onClick: (e)=>{
            console.log(e);
            setSurroundingDataFilter([
                ...surroundingDataFilter,
                {
                    fieldName,
                    operator: '=',
                    value: [
                        fieldValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
            e.stopPropagation();
        },
        tooltip: "Equivalent filtration"
    }), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "minus-circle",
        style: {
            marginLeft: '4px'
        },
        onClick: (e)=>{
            console.log(e);
            setSurroundingDataFilter([
                ...surroundingDataFilter,
                {
                    fieldName,
                    operator: '!=',
                    value: [
                        fieldValue
                    ],
                    id: (0,index_browser/* nanoid */.Ak)()
                }
            ]);
            e.stopPropagation();
        },
        tooltip: "Nonequivalent filtration"
    }))));
}

;// ./components/surrounding-logs/index.tsx
'use client';
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
function surrounding_logs_define_property(obj, key, value) {
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
function surrounding_logs_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            surrounding_logs_define_property(target, key, source[key]);
        });
    }
    return target;
}
function surrounding_logs_ownKeys(object, enumerableOnly) {
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
function surrounding_logs_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        surrounding_logs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}











// import dayjs from 'dayjs';






function SurroundingLogs() {
    const theme = (0,ui_.useTheme2)();
    const selectedRow = (0,react/* useAtomValue */.md)(discover/* selectedRowAtom */.nn);
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [selectedSurroundingFields, setSelectedSurroundingFields] = (0,react/* useAtom */.fp)(discover/* surroundingSelectedFieldsAtom */.gj);
    const [surroundingDataFilter] = (0,react/* useAtom */.fp)(discover/* surroundingDataFilterAtom */.wc);
    const hasSelectedFields = selectedSurroundingFields.length > 0;
    const [fields, setFields] = (0,external_react_.useState)([]);
    const currentCluster = (0,react/* useAtomValue */.md)(discover/* currentClusterAtom */.bP);
    const currentTable = (0,react/* useAtomValue */.md)(discover/* currentTableAtom */.$w);
    const currentCatalog = (0,react/* useAtomValue */.md)(discover/* currentCatalogAtom */.K0);
    const currentDatabase = (0,react/* useAtomValue */.md)(discover/* currentDatabaseAtom */.Cf);
    const [surroundingTableData, setSurroundingTableData] = (0,react/* useAtom */.fp)(discover/* surroundingTableDataAtom */.mj);
    const [beforeCount, setBeforeCount] = (0,react/* useAtom */.fp)(discover/* beforeCountAtom */.cn);
    const [afterCount, setAfterCount] = (0,react/* useAtom */.fp)(discover/* afterCountAtom */.f5);
    const [beforeTimeFieldPageSize, setBeforeTimeFieldPageSize] = (0,react/* useAtom */.fp)(discover/* beforeTimeFieldPageSizeAtom */.qX);
    const [afterTimeFieldPageSize, setAfterTimeFieldPageSize] = (0,react/* useAtom */.fp)(discover/* afterTimeFieldPageSizeAtom */.NJ);
    const [beforeTime, setBeforeTime] = (0,react/* useAtom */.fp)(discover/* beforeTimeAtom */.uz);
    const [afterTime, setAfterTime] = (0,react/* useAtom */.fp)(discover/* afterTimeAtom */.ps);
    const [state, updateState] = (0,external_react_.useState)([
        {
            label: 'Table',
            value: 'Table',
            active: true
        },
        {
            label: 'JSON',
            value: 'JSON',
            active: false
        }
    ]);
    function handleRemove(field) {
        const index = selectedSurroundingFields.findIndex((item)=>item.Field === field.Field);
        selectedSurroundingFields.splice(index, 1);
        setSelectedSurroundingFields([
            ...selectedSurroundingFields
        ]);
    }
    const getAfterResultWrap = (result)=>{
        const [_, ...newResult] = result;
        return newResult;
    };
    const { loading: getAfterSurroundingDataLoading, run: getAfterSurroundingData } = (0,useRequest/* default */.A)(({ pageSize = afterTimeFieldPageSize, time = afterTime })=>{
        console.log(time);
        const params = getQueryParams({
            pageSize: pageSize + 1,
            operator: '>',
            time
        });
        console.log(params.time);
        return (0,external_rxjs_.lastValueFrom)(getSurroundingDataService(surrounding_logs_object_spread({
            selectdbDS
        }, params)));
    }, {
        manual: true,
        onSuccess: (res, params)=>_async_to_generator(function*() {
                if (res.ok) {
                    const rowsData = (0,utils_data/* convertColumnToRow */.HL)(res.data.results.getSurroundingData.frames[0]);
                    const result = getAfterResultWrap(generateSurroundingResult(rowsData, currentTimeField));
                    let data = [
                        ...surroundingTableData
                    ];
                    data.push(...result);
                    setAfterCount(afterCount + result.length);
                    setAfterTime(result[result.length - 1]._original[currentTimeField]);
                    setSurroundingTableData(data);
                // setTimeout(() => {
                //     scrollToSelectedRow();
                // }, 50);
                }
            })()
    });
    function getQueryParams({ pageSize = 5, operator = '>', time = selectedRow.time }) {
        const params = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            time,
            data_filters: [],
            pageSize,
            operator,
            cluster: currentCluster,
            theme: theme.isDark ? 'dark' : 'light'
        };
        if (surroundingDataFilter.length > 0) {
            params.data_filters = surroundingDataFilter;
        }
        return params;
    }
    const { loading: getBeforeSurroundingDataLoading, run: getBeforeSurroundingData } = (0,useRequest/* default */.A)(({ pageSize = beforeTimeFieldPageSize, time = selectedRow.time })=>{
        const params = getQueryParams({
            pageSize,
            operator: '<',
            time
        });
        return (0,external_rxjs_.lastValueFrom)(getSurroundingDataService(surrounding_logs_object_spread({
            selectdbDS
        }, params)));
    }, {
        manual: true,
        onSuccess: (res, params)=>_async_to_generator(function*() {
                if (res.ok) {
                    const rowsData = (0,utils_data/* convertColumnToRow */.HL)(res.data.results.getSurroundingData.frames[0]);
                    const result = generateSurroundingResult(rowsData, currentTimeField);
                    let data = [
                        ...surroundingTableData
                    ];
                    data.unshift(...result);
                    setBeforeCount(beforeCount + result.length);
                    setBeforeTime(result[0]._original[currentTimeField]);
                    setSurroundingTableData(data);
                // setTimeout(() => {
                //     scrollToSelectedRow();
                // }, 50);
                }
            })()
    });
    function scrollToSelectedRow() {
        const selectedElement = document.getElementById('selected');
        if (selectedElement) {
            selectedElement.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            });
        }
    }
    const { loading: initLoading } = (0,useRequest/* default */.A)(()=>{
        const prevTimeParams = getQueryParams({
            operator: '<'
        });
        const afterTimeParams = getQueryParams({
            operator: '>',
            pageSize: 6
        });
        return Promise.all([
            (0,external_rxjs_.lastValueFrom)(getSurroundingDataService(surrounding_logs_object_spread({
                selectdbDS
            }, prevTimeParams))),
            (0,external_rxjs_.lastValueFrom)(getSurroundingDataService(surrounding_logs_object_spread({
                selectdbDS
            }, afterTimeParams)))
        ]);
    }, {
        refreshDeps: [
            surroundingDataFilter
        ],
        onSuccess: (res)=>_async_to_generator(function*() {
                if (res[0].ok && res[1].ok) {
                    const rowsData1 = (0,utils_data/* convertColumnToRow */.HL)(res[0].data.results.getSurroundingData.frames[0]);
                    const rowsData2 = (0,utils_data/* convertColumnToRow */.HL)(res[1].data.results.getSurroundingData.frames[0]);
                    const result1 = generateSurroundingResult(rowsData1, currentTimeField);
                    const result2 = getAfterResultWrap(generateSurroundingResult(rowsData2, currentTimeField));
                    const selectedResult = generateSurroundingResult([
                        selectedRow._original
                    ], currentTimeField);
                    const data = [
                        ...result1,
                        ...selectedResult,
                        ...result2
                    ];
                    const rowsDataWithUID = yield (0,utils/* generateTableDataUID */.sd)(data);
                    if (result1.length > 0) {
                        setBeforeCount(result1.length);
                        setBeforeTime(result1[0]._original[currentTimeField]);
                    } else {
                        setBeforeTime(selectedRow.time);
                    }
                    if (result2.length > 0) {
                        setAfterCount(result2.length);
                        setAfterTime(result2[result2.length - 1]._original[currentTimeField]);
                    } else {
                        setAfterTime(selectedRow.time);
                    }
                    setSurroundingTableData(rowsDataWithUID);
                    setTimeout(()=>{
                        scrollToSelectedRow();
                    }, 50);
                } else {
                // toast.error(res[1].message);
                }
            })(),
        onError: (err)=>{
            console.log(err);
        }
    });
    (0,external_react_.useEffect)(()=>{
        const data = surroundingTableData.map((item)=>{
            var _item__original;
            return {
                _original: item._original,
                time: ((_item__original = item._original) === null || _item__original === void 0 ? void 0 : _item__original[currentTimeField]) || '',
                _source: item._source,
                _uid: item._uid,
                selected: item._uid === selectedRow._uid
            };
        });
        setFields(data);
    }, [
        surroundingTableData,
        currentTimeField,
        selectedRow._uid
    ]);
    const renderBeforeLoadingBar = ()=>{
        if (initLoading || getBeforeSurroundingDataLoading) {
            return /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    `
            }, /*#__PURE__*/ external_react_default().createElement(ui_.LoadingBar, {
                width: 100
            }));
        }
        return null;
    };
    const renderAfterLoadingBar = ()=>{
        if (initLoading || getAfterSurroundingDataLoading) {
            return /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                    `
            }, /*#__PURE__*/ external_react_default().createElement(ui_.LoadingBar, {
                width: 100
            }));
        }
        return null;
    };
    const renderSubComponent = ({ row })=>{
        // processObject copied/adapted from discover-content to normalize stringified JSON inside fields
        const processObject = (obj)=>{
            if (typeof obj !== 'object' || obj === null) {
                return obj;
            }
            const result = {};
            for(const key in obj){
                if (obj.hasOwnProperty(key)) {
                    let value = obj[key];
                    if (typeof value === 'string') {
                        let cleanValue = value.trim();
                        // check for escaped double quotes
                        if (cleanValue.includes('\\"')) {
                            try {
                                cleanValue = JSON.parse(`"${cleanValue}"`);
                            } catch (e) {
                            // if parsing fails, keep the original value
                            }
                        }
                        // check for JSON
                        if (cleanValue.startsWith('{') && cleanValue.endsWith('}') || cleanValue.startsWith('[') && cleanValue.endsWith(']')) {
                            try {
                                const parsed = JSON.parse(cleanValue);
                                value = processObject(parsed);
                            } catch (e) {
                                value = obj[key];
                            }
                        } else {
                            value = obj[key];
                        }
                    } else if (Array.isArray(value)) {
                        value = value.map((item)=>{
                            if (typeof item === 'string') {
                                let cleanItem = item.trim();
                                if (cleanItem.includes('\\"')) {
                                    try {
                                        cleanItem = JSON.parse(`"${cleanItem}"`);
                                    } catch (e) {}
                                }
                                if (cleanItem.startsWith('{') && cleanItem.endsWith('}') || cleanItem.startsWith('[') && cleanItem.endsWith(']')) {
                                    try {
                                        const parsed = JSON.parse(cleanItem);
                                        return processObject(parsed);
                                    } catch (e) {
                                        return item;
                                    }
                                }
                                return item;
                            }
                            return typeof item === 'object' && item !== null ? processObject(item) : item;
                        });
                    } else if (typeof value === 'object' && value !== null) {
                        value = processObject(value);
                    }
                    result[key] = value;
                }
            }
            return result;
        };
        const processedData = processObject(row.original._original);
        const subTableData = Object.keys(processedData).map((key)=>{
            return {
                field: key,
                value: row.original._original[key]
            };
        });
        return /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                    position: relative;
                `
        }, /*#__PURE__*/ external_react_default().createElement(ui_.TabsBar, {
            className: (0,css_.css)`
                        ${theme.isDark ? 'background-color: hsl(var(--n9) / 0.4);' : 'background-color: hsl(var(--b1) / 0.6);'}
                    `
        }, state.map((tab, index)=>{
            return /*#__PURE__*/ external_react_default().createElement(ui_.Tab, {
                key: index,
                label: tab.label,
                active: tab.active,
                onChangeTab: ()=>updateState(state.map((tab, idx)=>surrounding_logs_object_spread_props(surrounding_logs_object_spread({}, tab), {
                            active: idx === index
                        }))),
                counter: subTableData.length
            });
        })), /*#__PURE__*/ external_react_default().createElement(ui_.TabContent, null, state[0].active && /*#__PURE__*/ external_react_default().createElement("table", {
            className: "bg-b1/20 pl-4 backdrop-blur-md dark:bg-n9/60"
        }, /*#__PURE__*/ external_react_default().createElement("tbody", null, subTableData.map((item)=>{
            let fieldValue = item.value;
            const fieldName = item.field;
            if (typeof fieldValue === 'object') {
                fieldValue = JSON.stringify(fieldValue);
            }
            const tableRowStyle = (0,css_.css)`
                                        &:hover {
                                            .filter-table-content {
                                                visibility: visible;
                                            }
                                        }
                                    `;
            return /*#__PURE__*/ external_react_default().createElement("tr", {
                className: `${tableRowStyle}`,
                key: fieldName
            }, /*#__PURE__*/ external_react_default().createElement("td", {
                className: (0,css_.css)`
                                                    height: 32px;
                                                    width: 70px;
                                                `
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: `filter-table-content ${(0,css_.css)`
                                                        visibility: hidden;
                                                    `}`
            }, /*#__PURE__*/ external_react_default().createElement(SurroundingContentTableActions, {
                fieldName: fieldName,
                fieldValue: fieldValue
            }))), /*#__PURE__*/ external_react_default().createElement("td", {
                className: "h-8 text-xs"
            }, fieldName || '-'), /*#__PURE__*/ external_react_default().createElement("td", {
                className: "h-8 whitespace-normal text-xs"
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: "w-full break-all"
            }, fieldValue || '-')));
        }))), state[1].active && /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement("pre", {
            className: (0,css_.css)`
                                    padding: 16px;
                                    margin: 0;
                                    overflow-x: auto;
                                    white-space: pre-wrap;
                                    word-break: break-all;
                                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                                    font-size: 12px;
                                    line-height: 1.5;
                                    ${theme.isDark ? 'background-color: #1e1e1e; color: #d4d4d4;' : 'background-color: #f5f5f5; color: #333;'}
                                    border-radius: 4px;
                                    max-height: 400px;
                                    overflow-y: auto;
                                `
        }, JSON.stringify(processedData, null, 2)))));
    };
    function generateSurroundingResult(result, timeField) {
        const sortedResult = (0,sortBy/* default */.A)(result, timeField);
        const _sourceResult = sortedResult.map((item)=>{
            let itemSource = '';
            for(const key in item){
                let highlightValue = item[key];
                // 兼容 Variant 类型
                if (typeof highlightValue === 'object') {
                    highlightValue = JSON.stringify(highlightValue);
                }
                itemSource += `<span style="background-color: ${theme.isDark ? '#3F3F4F' : '#BED8FD'} ; padding: 0px 4px 2px; margin-right: 4px; border-radius: 4px;">${key}:</span>${highlightValue} `;
            }
            return {
                _original: item,
                _source: itemSource
            };
        });
        return _sourceResult;
    }
    const columns = (0,external_react_.useMemo)(()=>{
        let dynamicColumns = [
            {
                accessorKey: 'collapse',
                header: ``,
                cell: ({ row, getValue })=>{
                    return row.getCanExpand() && /*#__PURE__*/ external_react_default().createElement("div", null, row.getIsExpanded() ? /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-down",
                        tooltip: "Collapse"
                    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-right",
                        tooltip: "Expand"
                    }), /*#__PURE__*/ external_react_default().createElement("div", {
                        className: "ml-1"
                    }, getValue()));
                }
            },
            {
                header: 'Time',
                accessorKey: 'time',
                cell: ({ row, getValue })=>{
                    const fieldValue = getValue();
                    const fieldName = currentTimeField;
                    const fieldType = 'DATE';
                    const timeField = (0,utils_data/* formatTimestampToDateTime */.My)(fieldValue);
                    return /*#__PURE__*/ external_react_default().createElement("div", {
                        className: `${(0,css_.css)`
                                width: 230px;
                            `} ${HoverStyle}`
                    }, /*#__PURE__*/ external_react_default().createElement("div", {
                        className: (0,css_.css)`
                                    display: flex;
                                    align-items: center;
                                `
                    }, timeField, /*#__PURE__*/ external_react_default().createElement("div", {
                        className: `filter-content ${(0,css_.css)`
                                        visibility: hidden;
                                    `}`
                    }, /*#__PURE__*/ external_react_default().createElement(SurroundingContentItem, {
                        fieldName: fieldName,
                        fieldValue: fieldValue,
                        fieldType: fieldType
                    }))));
                }
            }
        ];
        if (!hasSelectedFields) {
            dynamicColumns.push({
                accessorKey: '_source',
                header: '_source',
                cell: ({ row, getValue })=>{
                    function createMarkup() {
                        return {
                            __html: getValue()
                        };
                    }
                    return /*#__PURE__*/ external_react_default().createElement("div", {
                        className: (0,css_.css)`
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                font-size: 0.875rem;
                                line-height: 1.25rem;
                            `
                    }, /*#__PURE__*/ external_react_default().createElement(ColumnStyleWrapper, {
                        className: (0,css_.css)`
                                    .field-key {
                                        background-color: ${theme.isDark ? '#3f3f4f' : 'rgb(191, 217, 253)'};
                                    }
                                `
                    }, /*#__PURE__*/ external_react_default().createElement("div", {
                        dangerouslySetInnerHTML: createMarkup(),
                        className: (0,css_.css)`
                                        max-height: 12rem;
                                        overflow: auto;
                                        word-break: break-all;
                                        white-space: pre-wrap;
                                    `
                    })));
                }
            });
        } else {
            dynamicColumns = [
                ...dynamicColumns,
                ...selectedSurroundingFields.map((field)=>{
                    return {
                        accessorKey: field.Field,
                        header: ()=>/*#__PURE__*/ external_react_default().createElement("div", {
                                className: (0,css_.css)`
                                    display: flex;
                                    align-items: center;
                                `
                            }, /*#__PURE__*/ external_react_default().createElement("div", null, field.Field), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                                name: "times",
                                tooltip: "Remove",
                                style: {
                                    marginLeft: '8px',
                                    cursor: 'pointer',
                                    marginTop: '2px'
                                },
                                onClick: (e)=>{
                                    handleRemove(field);
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            })),
                        cell: ({ row, getValue })=>{
                            // let fieldValue = row.original._original[field.Field];
                            let fieldValue = (0,get/* default */.A)(row.original._original, field.Field);
                            const fieldName = field.Field;
                            const fieldType = field.Type;
                            if (typeof fieldValue === 'object') {
                                fieldValue = JSON.stringify(fieldValue);
                            }
                            return /*#__PURE__*/ external_react_default().createElement("div", {
                                className: `${HoverStyle} ${(0,css_.css)`
                                        display: flex;
                                        align-items: center;
                                        min-height: 48px;
                                    `}`
                            }, /*#__PURE__*/ external_react_default().createElement("div", {
                                className: `max-h-48 overflow-auto`
                            }, /*#__PURE__*/ external_react_default().createElement("div", {
                                className: "flex items-center break-all py-4"
                            }, field.value === 'trace_id' && fieldValue ? /*#__PURE__*/ external_react_default().createElement(ui_.Button, null, fieldValue) : /*#__PURE__*/ external_react_default().createElement("span", {
                                className: "text-xs"
                            }, fieldValue))), fieldValue ? /*#__PURE__*/ external_react_default().createElement("div", {
                                className: `filter-content ${(0,css_.css)`
                                            visibility: hidden;
                                        `}`
                            }, /*#__PURE__*/ external_react_default().createElement(SurroundingContentItem, {
                                fieldName: fieldName,
                                fieldValue: fieldValue,
                                fieldType: fieldType
                            })) : null);
                        }
                    };
                })
            ];
        }
        return dynamicColumns;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentTimeField,
        handleRemove,
        hasSelectedFields,
        selectedSurroundingFields
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(SurroundingDiscoverFilter, {
        dataFilter: surroundingDataFilter
    }), /*#__PURE__*/ external_react_default().createElement("div", {
        className: "h-[2px] bg-b1 dark:bg-black"
    }), /*#__PURE__*/ external_react_default().createElement("div", {
        style: {
            position: 'relative'
        }
    }, /*#__PURE__*/ external_react_default().createElement(SurroundingLogsActions, {
        getSurroundingData: getBeforeSurroundingData,
        getSurroundingDataLoading: getBeforeSurroundingDataLoading,
        time: beforeTime,
        type: "before",
        timeFieldPageSize: beforeTimeFieldPageSize,
        setTimeFieldPageSize: setBeforeTimeFieldPageSize,
        tips: "Old records",
        count: beforeCount
    }), renderBeforeLoadingBar()), /*#__PURE__*/ external_react_default().createElement("div", {
        style: {
            height: 'calc(100vh - 220px)',
            overflow: 'auto',
            position: 'relative'
        }
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: "mx-6 border"
    }, /*#__PURE__*/ external_react_default().createElement(SDCollapsibleTable, {
        data: fields,
        columns: columns,
        getRowCanExpand: ()=>true,
        renderSubComponent: renderSubComponent
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        style: {
            position: 'relative'
        }
    }, renderAfterLoadingBar(), /*#__PURE__*/ external_react_default().createElement(SurroundingLogsActions, {
        getSurroundingData: getAfterSurroundingData,
        getSurroundingDataLoading: getAfterSurroundingDataLoading,
        time: afterTime,
        type: "after",
        timeFieldPageSize: afterTimeFieldPageSize,
        setTimeFieldPageSize: setAfterTimeFieldPageSize,
        tips: `New records`,
        count: afterCount
    })));
}

// EXTERNAL MODULE: ./components/trace-detail/index.tsx
var trace_detail = __webpack_require__(7273);
// EXTERNAL MODULE: external "@grafana/data"
var data_ = __webpack_require__(7781);
;// ./components/discover-content/index.tsx
'use client';
function discover_content_define_property(obj, key, value) {
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
function discover_content_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            discover_content_define_property(target, key, source[key]);
        });
    }
    return target;
}
function discover_content_ownKeys(object, enumerableOnly) {
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
function discover_content_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        discover_content_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function discover_content_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = discover_content_object_without_properties_loose(source, excluded);
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
function discover_content_object_without_properties_loose(source, excluded) {
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















function DiscoverContent({ fetchNextPage, getTraceData }) {
    const theme = (0,ui_.useTheme2)();
    const [fields, setFields] = (0,external_react_.useState)([]);
    const tableTotalCount = (0,react/* useAtomValue */.md)(discover/* tableTotalCountAtom */.HC);
    const [tableData, _setTableData] = (0,react/* useAtom */.fp)(discover/* tableDataAtom */.q3);
    const [selectedFields, setSelectedFields] = (0,react/* useAtom */.fp)(discover/* selectedFieldsAtom */.Wg);
    const hasSelectedFields = selectedFields.length > 0;
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    // const [surroundingOpen, setSurroundingOpen] = useState(false);
    const [selectedRow, setSelectedRow] = (0,react/* useAtom */.fp)(discover/* selectedRowAtom */.nn);
    const setSurroundingTableData = (0,react/* useSetAtom */.Xr)(discover/* surroundingTableDataAtom */.mj);
    const setSurroundingDataFilter = (0,react/* useSetAtom */.Xr)(discover/* surroundingDataFilterAtom */.wc);
    const setBeforeCount = (0,react/* useSetAtom */.Xr)(discover/* beforeCountAtom */.cn);
    const setAfterCount = (0,react/* useSetAtom */.Xr)(discover/* afterCountAtom */.f5);
    const [pageSize, _setPageSize] = (0,react/* useAtom */.fp)(discover/* pageSizeAtom */.Ol);
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const [drawerOpen, setDrawerOpen] = (0,external_react_.useState)(false);
    const [surroundingLogsOpen, setSurroundingLogsOpen] = (0,external_react_.useState)(false);
    const [_fieldKeyBg, setFieldKeyBg] = (0,external_react_.useState)('#3f3f4f');
    const discoverCurrent = (0,react/* useAtomValue */.md)(discover/* discoverCurrentAtom */.WN);
    const currentDatasource = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const context = (0,data_.usePluginContext)();
    // user settings
    const jsonData = context.meta.jsonData || {};
    console.log('jsonData', jsonData);
    const { logsConfig = {} } = jsonData;
    const { database = "", datasource = {}, logsTable = "", targetTraceTable = "" } = logsConfig;
    // local input state for page-jump control
    const [jumpPage, setJumpPage] = (0,external_react_.useState)(String(page));
    (0,external_react_.useEffect)(()=>{
        setJumpPage(String(page));
    }, [
        page
    ]);
    const isTargetLogTable = discoverCurrent.table === logsTable && discoverCurrent.database === database && (currentDatasource === null || currentDatasource === void 0 ? void 0 : currentDatasource.id) === (datasource === null || datasource === void 0 ? void 0 : datasource.id);
    (0,external_react_.useEffect)(()=>{
        if (theme.isDark) {
            setFieldKeyBg('#3f3f4f');
        } else {
            setFieldKeyBg('rgb(191, 217, 253)');
        }
    }, [
        theme.isDark
    ]);
    const [state, updateState] = (0,external_react_.useState)([
        {
            label: 'Table',
            value: 'Table',
            active: true
        },
        {
            label: 'JSON',
            value: 'JSON',
            active: false
        }
    ]);
    (0,external_react_.useEffect)(()=>{
        const data = tableData.map((item)=>{
            var _item__original;
            return {
                _original: item._original,
                time: ((_item__original = item._original) === null || _item__original === void 0 ? void 0 : _item__original[currentTimeField]) || '',
                _source: item._source,
                _uid: item === null || item === void 0 ? void 0 : item._uid
            };
        });
        setFields(data);
    }, [
        tableData,
        currentTimeField
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRemove = external_react_default().useCallback((field)=>{
        const index = selectedFields.findIndex((item)=>item.Field === field.Field);
        selectedFields.splice(index, 1);
        setSelectedFields([
            ...selectedFields
        ]);
    }, [
        selectedFields,
        setSelectedFields
    ]);
    const renderSubComponent = ({ row })=>{
        // process object
        const processObject = (obj)=>{
            if (typeof obj !== 'object' || obj === null) {
                return obj;
            }
            const result = {};
            for(const key in obj){
                if (obj.hasOwnProperty(key)) {
                    let value = obj[key];
                    if (typeof value === 'string') {
                        let cleanValue = value.trim();
                        // check for escaped double quotes
                        if (cleanValue.includes('\\"')) {
                            try {
                                cleanValue = JSON.parse(`"${cleanValue}"`);
                            } catch (e) {
                            // if parsing fails, keep the original value
                            }
                        }
                        // check for JSON
                        if (cleanValue.startsWith('{') && cleanValue.endsWith('}') || cleanValue.startsWith('[') && cleanValue.endsWith(']')) {
                            try {
                                const parsed = JSON.parse(cleanValue);
                                value = processObject(parsed);
                            } catch (e) {
                                value = obj[key];
                            }
                        } else {
                            value = obj[key];
                        }
                    } else if (Array.isArray(value)) {
                        value = value.map((item)=>{
                            if (typeof item === 'string') {
                                let cleanItem = item.trim();
                                if (cleanItem.includes('\\"')) {
                                    try {
                                        cleanItem = JSON.parse(`"${cleanItem}"`);
                                    } catch (e) {}
                                }
                                if (cleanItem.startsWith('{') && cleanItem.endsWith('}') || cleanItem.startsWith('[') && cleanItem.endsWith(']')) {
                                    try {
                                        const parsed = JSON.parse(cleanItem);
                                        return processObject(parsed);
                                    } catch (e) {
                                        return item;
                                    }
                                }
                                return item;
                            }
                            return typeof item === 'object' && item !== null ? processObject(item) : item;
                        });
                    } else if (typeof value === 'object' && value !== null) {
                        value = processObject(value);
                    }
                    result[key] = value;
                }
            }
            return result;
        };
        const processedData = processObject(row.original._original);
        const subTableData = Object.keys(processedData).map((key)=>{
            return {
                field: key,
                value: row.original._original[key]
            };
        });
        return /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                    position: relative;
                `
        }, /*#__PURE__*/ external_react_default().createElement(ui_.TabsBar, {
            className: (0,css_.css)`
                        ${theme.isDark ? 'background-color: hsl(var(--n9) / 0.4);' : 'background-color: hsl(var(--b1) / 0.6);'}
                    `
        }, state.map((tab, index)=>{
            return /*#__PURE__*/ external_react_default().createElement(ui_.Tab, {
                key: index,
                label: tab.label,
                active: tab.active,
                onChangeTab: ()=>updateState(state.map((tab, idx)=>discover_content_object_spread_props(discover_content_object_spread({}, tab), {
                            active: idx === index
                        }))),
                counter: subTableData.length
            });
        })), /*#__PURE__*/ external_react_default().createElement(ui_.TabContent, null, state[0].active && /*#__PURE__*/ external_react_default().createElement("table", {
            // className="bg-b1/20 pl-4 backdrop-blur-md dark:bg-n9/60"
            className: (0,css_.css)`
                                padding-left: 16px;
                                backdrop-filter: blur(12px);
                                -webkit-backdrop-filter: blur(12px);
                                width: 100%;
                                ${theme.isDark ? 'background-color: hsl(var(--n9) / 0.6);' : 'background-color: hsl(var(--b1) / 0.2)'}
                            `
        }, /*#__PURE__*/ external_react_default().createElement("tbody", null, subTableData.map((item)=>{
            let fieldValue = item.value;
            const fieldName = item.field;
            if (typeof fieldValue === 'object') {
                fieldValue = JSON.stringify(fieldValue);
            }
            const tableRowStyle = (0,css_.css)`
                                        &:hover {
                                            .filter-table-content {
                                                visibility: visible;
                                            }
                                        }
                                    `;
            return /*#__PURE__*/ external_react_default().createElement("tr", {
                className: `${tableRowStyle}`,
                key: fieldName
            }, /*#__PURE__*/ external_react_default().createElement("td", {
                className: (0,css_.css)`
                                                    height: 32px;
                                                    width: 70px;
                                                `
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: `filter-table-content ${(0,css_.css)`
                                                        visibility: hidden;
                                                    `}`
            }, /*#__PURE__*/ external_react_default().createElement(ContentTableActions, {
                fieldName: fieldName,
                fieldValue: fieldValue
            }))), /*#__PURE__*/ external_react_default().createElement("td", {
                className: (0,css_.css)`
                                                    height: 32px;
                                                    font-size: 12px;
                                                `
            }, fieldName || '-'), /*#__PURE__*/ external_react_default().createElement("td", {
                className: (0,css_.css)`
                                                    height: 32px;
                                                    font-size: 12px;
                                                    white-space: normal;
                                                `
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: (0,css_.css)`
                                                        width: 100%;
                                                        word-break: break-all;
                                                    `
            }, fieldValue || '-')));
        }))), state[1].active && /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement("pre", {
            className: (0,css_.css)`
                                    padding: 16px;
                                    margin: 0;
                                    overflow-x: auto;
                                    white-space: pre-wrap;
                                    word-break: break-all;
                                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                                    font-size: 12px;
                                    line-height: 1.5;
                                    ${theme.isDark ? 'background-color: #1e1e1e; color: #d4d4d4;' : 'background-color: #f5f5f5; color: #333;'}
                                    border-radius: 4px;
                                    max-height: 400px;
                                    overflow-y: auto;
                                `
        }, JSON.stringify(processedData, null, 2)))), /*#__PURE__*/ external_react_default().createElement(tooltip/* default */.A, {
            title: "Surrounding Items will ignore the existing interface's filter conditions and view the context through time."
        }, /*#__PURE__*/ external_react_default().createElement("a", {
            onClick: ()=>{
                console.log('row', row);
                setSurroundingLogsOpen(true);
                setSelectedRow(row.original);
            },
            className: (0,css_.css)`
                        position: absolute;
                        right: 1rem;
                        top: 0;
                        cursor: pointer;
                        padding-top: 0.5rem;
                        &:hover {
                            color: #3D71D9;
                        }
                    `
        }, "Surrounding items")));
    };
    const callback = (status)=>{
        if (status >= 200 && status <= 299) {
            setDrawerOpen(true);
        }
    };
    const openTraceDrawer = (traceId, table)=>{
        // request
        getTraceData(traceId, table, callback);
    };
    const columns = (0,external_react_.useMemo)(()=>{
        let dynamicColumns = [
            {
                accessorKey: 'collapse',
                header: ``,
                cell: ({ row, getValue })=>{
                    return row.getCanExpand() && /*#__PURE__*/ external_react_default().createElement("div", {
                        className: "flex items-center"
                    }, row.getIsExpanded() ? /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-down",
                        tooltip: "Collapse"
                    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-right",
                        tooltip: "Expand"
                    }), /*#__PURE__*/ external_react_default().createElement("div", {
                        className: "ml-1"
                    }, getValue()));
                }
            },
            {
                header: ()=>currentTimeField || 'Time',
                accessorKey: 'time',
                cell: ({ row, getValue })=>{
                    const fieldValue = getValue();
                    const fieldName = currentTimeField;
                    // try to find field type from tableFields
                    const fieldInfo = tableFields.find((f)=>f.value === currentTimeField);
                    const fieldType = (fieldInfo === null || fieldInfo === void 0 ? void 0 : fieldInfo.Type) || '';
                    let timeField = fieldValue;
                    // If this field is a valid time field type, try to format it
                    try {
                        if (fieldInfo && (0,utils_data/* isValidTimeFieldType */.Q3)(String(fieldInfo.Type).toUpperCase())) {
                            // if numeric timestamp, convert
                            const num = Number(fieldValue);
                            if (!Number.isNaN(num)) {
                                timeField = (0,utils_data/* formatTimestampToDateTime */.My)(num);
                            } else {
                                // otherwise keep raw string (or attempt Date parse)
                                timeField = String(fieldValue || '');
                            }
                        }
                    } catch (e) {
                        // fallback to raw
                        timeField = fieldValue;
                    }
                    return /*#__PURE__*/ external_react_default().createElement("div", {
                        className: `${(0,css_.css)`
                                 width: 240px;
                             `} ${HoverStyle}`
                    }, /*#__PURE__*/ external_react_default().createElement("div", {
                        className: (0,css_.css)`
                                     display: flex;
                                     align-items: center;
                                 `
                    }, timeField, /*#__PURE__*/ external_react_default().createElement("div", {
                        className: `filter-content ${(0,css_.css)`
                                         visibility: hidden;
                                     `}`
                    }, /*#__PURE__*/ external_react_default().createElement(ContentItem, {
                        fieldName: fieldName,
                        fieldValue: fieldValue,
                        fieldType: fieldType
                    }))));
                }
            }
        ];
        if (!hasSelectedFields) {
            dynamicColumns.push({
                accessorKey: '_source',
                header: '_source',
                cell: (_param)=>{
                    var { row, getValue } = _param, rest = discover_content_object_without_properties(_param, [
                        "row",
                        "getValue"
                    ]);
                    const html = getValue();
                    const handleClick = (e)=>{
                        const target = e.target;
                        if (!target) {
                            return;
                        }
                        const link = target.closest('[data-trace-id]');
                        if (!link) {
                            return;
                        }
                        const traceId = link.getAttribute('data-trace-id');
                        if (!traceId) {
                            return;
                        }
                        e.preventDefault();
                        if (isTargetLogTable && targetTraceTable) {
                            openTraceDrawer(traceId, targetTraceTable);
                        } else {
                            openTraceDrawer(traceId);
                        }
                    };
                    return /*#__PURE__*/ external_react_default().createElement("div", {
                        className: (0,css_.css)`
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                font-size: 0.875rem;
                                line-height: 1.25rem;
                            `
                    }, /*#__PURE__*/ external_react_default().createElement(ColumnStyleWrapper, {
                        className: (0,css_.css)`
                                    & .field-key {
                                        background-color: ${theme.isDark ? '#3f3f4f' : 'rgb(191, 217, 253)'};
                                    }
                                    & .trace-link {
                                        cursor: pointer;
                                        text-decoration: underline;
                                        color: #3D71D9;
                                    }
                                `
                    }, /*#__PURE__*/ external_react_default().createElement("div", {
                        onClick: handleClick,
                        dangerouslySetInnerHTML: {
                            __html: html
                        },
                        className: (0,css_.css)`
                                        max-height: 12rem;
                                        overflow: auto;
                                        word-break: break-all;
                                        white-space: pre-wrap;
                                    `
                    })));
                }
            });
        } else {
            dynamicColumns = [
                ...dynamicColumns,
                ...selectedFields.map((field)=>{
                    return {
                        accessorKey: field.Field,
                        header: ()=>/*#__PURE__*/ external_react_default().createElement("div", {
                                className: (0,css_.css)`
                                    display: flex;
                                    align-items: center;
                                `
                            }, /*#__PURE__*/ external_react_default().createElement("div", null, field.Field), /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                                name: "times",
                                tooltip: "Remove",
                                style: {
                                    marginLeft: '8px',
                                    cursor: 'pointer',
                                    marginTop: '2px'
                                },
                                onClick: (e)=>{
                                    handleRemove(field);
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            })),
                        cell: ({ row, getValue })=>{
                            // let fieldValue = row.original._original[field.Field];
                            let fieldValue = (0,get/* default */.A)(row.original._original, field.Field);
                            const fieldName = field.Field;
                            const fieldType = field.Type;
                            if (typeof fieldValue === 'object') {
                                fieldValue = JSON.stringify(fieldValue);
                            }
                            return /*#__PURE__*/ external_react_default().createElement("div", {
                                className: `${HoverStyle} ${(0,css_.css)`
                                        display: flex;
                                        align-items: center;
                                        min-height: 48px;
                                    `}`
                            }, /*#__PURE__*/ external_react_default().createElement("div", {
                                className: (0,css_.css)`
                                            max-height: 192px;
                                            overflow: auto;
                                        `
                            }, /*#__PURE__*/ external_react_default().createElement("div", {
                                className: (0,css_.css)`
                                                display: flex;
                                                align-items: center;
                                                padding: 16px 16px 16px 0;
                                                word-break: break-all;
                                            `
                            }, field.value === 'trace_id' ? /*#__PURE__*/ external_react_default().createElement(es_button/* default */.Ay, {
                                className: (0,css_.css)`padding-left: 0px;`,
                                onClick: ()=>{
                                    if (isTargetLogTable && targetTraceTable) {
                                        openTraceDrawer(fieldValue, targetTraceTable);
                                    } else {
                                        openTraceDrawer(fieldValue);
                                    }
                                },
                                type: "link"
                            }, fieldValue) : /*#__PURE__*/ external_react_default().createElement("span", {
                                className: (0,css_.css)`
                                                        font-size: 12px;
                                                        white-space: nowrap;
                                                        text-overflow: ellipsis;
                                                        overflow: hidden;
                                                        max-width: 200px;
                                                    `
                            }, fieldValue))), /*#__PURE__*/ external_react_default().createElement("div", {
                                className: `filter-content ${(0,css_.css)`
                                            visibility: hidden;
                                        `}`
                            }, /*#__PURE__*/ external_react_default().createElement(ContentItem, {
                                fieldName: fieldName,
                                fieldValue: fieldValue,
                                fieldType: fieldType
                            })));
                        }
                    };
                })
            ];
        }
        return dynamicColumns;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentTimeField,
        handleRemove,
        hasSelectedFields,
        selectedFields,
        theme.isDark
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                overflow-x: scroll;
            `
    }, /*#__PURE__*/ external_react_default().createElement(SDCollapsibleTable, {
        className: (0,css_.css)`
                    width: 100%;
                `,
        data: fields,
        columns: columns,
        getRowCanExpand: ()=>true,
        renderSubComponent: renderSubComponent
    }), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    padding-bottom: 20px;
                `
    }, /*#__PURE__*/ external_react_default().createElement("div", null, "Total ", tableTotalCount, " rows"), /*#__PURE__*/ external_react_default().createElement("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Pagination, {
        currentPage: page,
        numberOfPages: Math.ceil(tableTotalCount / pageSize) || 1,
        onNavigate: (toPage)=>{
            setPage(toPage);
        }
    }), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            display: flex;
                            align-items: center;
                            gap: 8px;
                        `
    }, /*#__PURE__*/ external_react_default().createElement("input", {
        type: "number",
        min: 1,
        step: 1,
        value: jumpPage,
        onChange: (e)=>{
            setJumpPage(e.target.value);
        },
        onKeyDown: (e)=>{
            if (e.key === 'Enter') {
                const num = Number(jumpPage);
                const total = Math.max(Math.ceil(tableTotalCount / pageSize) || 1, 1);
                if (!Number.isNaN(num)) {
                    const target = Math.min(Math.max(1, Math.floor(num)), total);
                    setPage(target);
                    try {
                        fetchNextPage && fetchNextPage(target);
                    } catch (e) {}
                    setJumpPage(String(target));
                } else {
                    // reset to current page if invalid
                    setJumpPage(String(page));
                }
            }
        },
        className: (0,css_.css)`
                                width: 72px;
                                padding: 6px 8px;
                                border-radius: 4px;
                                border: 1px solid rgba(0,0,0,0.15);
                            `
    }), /*#__PURE__*/ external_react_default().createElement("button", {
        onClick: ()=>{
            const num = Number(jumpPage);
            const total = Math.max(Math.ceil(tableTotalCount / pageSize) || 1, 1);
            if (!Number.isNaN(num)) {
                const target = Math.min(Math.max(1, Math.floor(num)), total);
                setPage(target);
                try {
                    fetchNextPage && fetchNextPage(target);
                } catch (e) {}
                setJumpPage(String(target));
            } else {
                setJumpPage(String(page));
            }
        },
        className: (0,css_.css)`
                                padding: 6px 10px;
                                border-radius: 4px;
                                border: 1px solid rgba(0,0,0,0.15);
                                background: transparent;
                                cursor: pointer;
                            `
    }, "Go")))), /*#__PURE__*/ external_react_default().createElement(trace_detail/* default */.A, {
        onClose: ()=>setDrawerOpen(false),
        open: drawerOpen,
        traceId: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.trace_id,
        traceTable: "otel_traces"
    }), surroundingLogsOpen && /*#__PURE__*/ external_react_default().createElement(ui_.Drawer, {
        size: "lg",
        title: "Surrounding items",
        onClose: ()=>{
            setSurroundingTableData([]);
            setSurroundingDataFilter([]);
            setBeforeCount(0);
            setAfterCount(0);
            // setSelectedSurroundingFields([]);
            setSurroundingLogsOpen(false);
        }
    }, /*#__PURE__*/ external_react_default().createElement(SurroundingLogs, null)));
}

;// ./components/discover-header/discover-header.style.ts


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

;// ./components/discover-header/search-type.tsx






function SearchType() {
    const { t } = (0,es/* useTranslation */.Bd)();
    const [searchType, setSearchType] = (0,react/* useAtom */.fp)(discover/* searchTypeAtom */.WM);
    const setSearchValue = (0,react/* useSetAtom */.Xr)(discover/* searchValueAtom */.P8);
    const disabledOptions = (0,react/* useAtomValue */.md)(discover/* disabledOptionsAtom */.IH);
    const indexes = (0,react/* useAtomValue */.md)(discover/* indexesAtom */.Eq);
    const setSelectedIndexes = (0,react/* useSetAtom */.Xr)(discover/* selectedIndexesAtom */.pG);
    const [currentIndex, setCurrentIndex] = (0,react/* useAtom */.fp)(discover/* currentIndexAtom */.TY);
    const searchMode = searchType === 'Search';
    const theme = (0,ui_.useTheme2)();
    const options = [
        // {
        //     label: t`Search`,
        //     value: 'Search',
        //     disabled: indexes.length === 0,
        //     tips: t`Discover.SearchType.Search.DisabledText`,
        // },
        {
            label: 'SQL',
            value: 'SQL'
        },
        {
            label: 'Lucene',
            value: 'Lucene'
        }
    ];
    function DropdownQueryType() {
        return /*#__PURE__*/ external_react_default().createElement("div", {
            className: "w-[232px]"
        }, /*#__PURE__*/ external_react_default().createElement(ui_.RadioButtonGroup, {
            options: options,
            disabledOptions: disabledOptions,
            value: searchType,
            onChange: (val)=>{
                setSearchType(val);
                setSearchValue('');
            }
        }), indexes && searchMode ? /*#__PURE__*/ external_react_default().createElement("div", {
            className: "mt-4"
        }, /*#__PURE__*/ external_react_default().createElement(ui_.MultiSelect, {
            options: indexes.filter((item)=>item.type === 'INVERTED'),
            value: currentIndex,
            onChange: (item, actionMeta)=>{
                const selectedIndexes = [];
                item.forEach((selectedValue)=>{
                    indexes.forEach((item)=>{
                        if (item.value === selectedValue) {
                            selectedIndexes.push(item);
                        }
                    });
                });
                setSelectedIndexes(selectedIndexes);
                setCurrentIndex(item);
            }
        })) : /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null));
    }
    return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Toggletip, {
        closeButton: false,
        content: /*#__PURE__*/ external_react_default().createElement(DropdownQueryType, null),
        placement: "bottom"
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                        cursor: pointer;
                        border: 1px solid rgba(204, 204, 220, 0.2);
                        width: 80px;
                        height: 32px;
                        line-height: 32px;
                        background-color: ${theme.isDark ? 'rgb(17, 18, 23)' : '#FFF'};
                        padding-left: 8px;
                        border-radius: 2px;
                        display: flex;
                        justify-content: space-between;
                    `
    }, /*#__PURE__*/ external_react_default().createElement("span", null, searchType), /*#__PURE__*/ external_react_default().createElement("span", {
        style: {
            marginRight: 6
        }
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Icon, {
        name: "angle-down"
    })))));
}

;// ./components/discover-header/sql-search.tsx


// import { useTranslation } from 'react-i18next';
// import { SQL_OPERATORS } from 'utils/data';
// import { cn } from 'utils/tailwind';


// import { CodeEditor, CodeEditorSuggestionItem, ReactMonacoEditor } from '@grafana/ui';
function SQLSearch({ style, onQuerying }) {
    const searchType = (0,react/* useAtomValue */.md)(discover/* searchTypeAtom */.WM);
    // const setSearchFocus = useSetAtom(searchFocusAtom);
    // const [tableFields, setTableFields] = useAtom(tableFieldsAtom);
    const [searchValue, setSearchValue] = (0,react/* useAtom */.fp)(discover/* searchValueAtom */.P8);
    // const currentTimeField = useAtomValue(currentTimeFieldAtom);
    if (false) // removed by dead control flow
{}
    // const [options, setOptions] = useState<Array<{ value: string; label: string }>>([]);
    // const inputRef = useRef<any>(null);
    // let disableEnter = false;
    //   const getSuggestions = (): CodeEditorSuggestionItem[] => {
    //     return [];
    //   };
    return /*#__PURE__*/ external_react_default().createElement(ui_.Input, {
        value: searchValue,
        onChange: (e)=>{
            var _e_target;
            console.log(e);
            setSearchValue((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);
        },
        onKeyDown: (e)=>{
            // Ignore composition (IME) events
            const native = e.nativeEvent;
            if (e.key === 'Enter' && !(native && native.isComposing)) {
                // Trigger query callback if provided
                try {
                    onQuerying === null || onQuerying === void 0 ? void 0 : onQuerying();
                } catch (err) {
                    // swallow errors from callback to avoid breaking the input
                    // eslint-disable-next-line no-console
                    console.error('onQuerying handler error:', err);
                }
            }
        },
        placeholder: searchType === 'SQL' ? "SQL WHERE. e.g.(event_type = 'ForkApplyEvent AND action = 'none')" : 'Keyword',
        style: style
    });
}

// EXTERNAL MODULE: ./services/metaservice.ts
var metaservice = __webpack_require__(6965);
;// ./components/discover-header/lucene.tsx




function Lucene({ onQuerying }) {
    const [searchValue, setSearchValue] = (0,react/* useAtom */.fp)(discover/* searchValueAtom */.P8);
    if (false) // removed by dead control flow
{}
    return /*#__PURE__*/ external_react_default().createElement(ui_.Input, {
        value: searchValue,
        onChange: (e)=>{
            var _e_target;
            console.log(e);
            setSearchValue((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);
        },
        onKeyDown: (e)=>{
            const native = e.nativeEvent;
            if (e.key === 'Enter' && !(native && native.isComposing)) {
                try {
                    onQuerying === null || onQuerying === void 0 ? void 0 : onQuerying();
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.error('onQuerying handler error:', err);
                }
            }
        },
        placeholder: "usage: field:value AND field2:value2"
    });
}

;// ./components/discover-header/index.tsx
'use client';
function discover_header_define_property(obj, key, value) {
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
function discover_header_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            discover_header_define_property(target, key, source[key]);
        });
    }
    return target;
}
function discover_header_ownKeys(object, enumerableOnly) {
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
function discover_header_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        discover_header_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}















function DiscoverHeader(props) {
    // const catalog = 'internal';
    // const catalogs = useAtomValue(catalogAtom);
    const setIndexes = (0,react/* useSetAtom */.Xr)(discover/* indexesAtom */.Eq);
    // const setSearchType = useSetAtom(searchTypeAtom);
    const [discoverCurrent, setDiscoverCurrent] = (0,react/* useAtom */.fp)(discover/* discoverCurrentAtom */.WN);
    if (false) // removed by dead control flow
{}
    const [_loc, setLoc] = (0,react/* useAtom */.fp)(discover/* locationAtom */.JT);
    // const [currentCluster, setCurrentCluster] = useAtom(currentClusterAtom);
    const setTableFields = (0,react/* useSetAtom */.Xr)(discover/* tableFieldsAtom */.D_);
    const [timeFields, setTimeFields] = (0,react/* useAtom */.fp)(discover/* timeFieldsAtom */.Gg);
    const [_currentDate, setCurrentDate] = (0,react/* useAtom */.fp)(discover/* currentDateAtom */.Zb);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [, setCurrentIndex] = (0,react/* useAtom */.fp)(discover/* currentIndexAtom */.TY);
    const searchFocus = (0,react/* useAtomValue */.md)(discover/* searchFocusAtom */.MM);
    // const { databaseList } = useDatabaseList();
    const [activeItem, _setActiveItem] = (0,react/* useAtom */.fp)(discover/* activeShortcutAtom */.m_);
    // const [clusters, setClusters] = useState<any[]>([]);
    // const database = loc.searchParams?.get('database');
    // const table = loc.searchParams?.get('table');
    // const cluster = loc.searchParams?.get('cluster');
    // const startTime = loc.searchParams?.get('startTime');
    // const endTime = loc.searchParams?.get('endTime');
    const [selectedDatasource, setSelectedDatasource] = (0,react/* useAtom */.fp)(discover/* selectedDatasourceAtom */.SW);
    const [timeRange, setTimeRange] = (0,react/* useAtom */.fp)(discover/* timeRangeAtom */.U9);
    const [currentTable, setCurrentTable] = (0,react/* useAtom */.fp)(discover/* currentTableAtom */.$w);
    const [databases, setDatabases] = (0,react/* useAtom */.fp)(discover/* databasesAtom */.SK);
    const [tables, setTables] = (0,react/* useAtom */.fp)(discover/* tablesAtom */.b9);
    const [_datasources] = (0,react/* useAtom */.fp)(discover/* datasourcesAtom */.ui);
    const searchType = (0,react/* useAtomValue */.md)(discover/* searchTypeAtom */.WM);
    const searchMode = searchType === 'Search';
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const theme = (0,ui_.useTheme2)();
    const fetchDatabases = external_react_default().useCallback((ds)=>{
        if (!ds) {
            return undefined;
        }
        return (0,metaservice/* getDatabases */.Hm)(ds).subscribe({
            next: (resp)=>{
                const { data, ok } = resp;
                if (ok) {
                    const frame = (0,data_.toDataFrame)(data.results.getDatabases.frames[0]);
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
    (0,external_react_.useEffect)(()=>{
        if (!selectdbDS) {
            return;
        }
        const subscription = fetchDatabases(selectdbDS);
        return ()=>subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
    }, [
        selectdbDS,
        fetchDatabases
    ]);
    function getFields(selectedTable) {
        (0,metaservice/* getFieldsService */.H1)({
            selectdbDS,
            database: discoverCurrent.database,
            table: selectedTable.value
        }).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    const frame = (0,data_.toDataFrame)(data.results.getFields.frames[0]);
                    console.log('frame', frame);
                    const values = Array.from(frame.fields[0].values);
                    const fieldTypes = Array.from(frame.fields[1].values);
                    const tableFields = values.map((item, index)=>{
                        return {
                            label: item,
                            Field: item,
                            value: item,
                            Type: fieldTypes[index]
                        };
                    });
                    setTableFields(tableFields);
                    if (values) {
                        var _options_;
                        const options = values.filter((field, index)=>{
                            return (0,utils_data/* isValidTimeFieldType */.Q3)(fieldTypes[index].toUpperCase());
                        }).map((item)=>{
                            return {
                                label: item,
                                value: item
                            };
                        });
                        console.log('bbb,', discoverCurrent);
                        setDiscoverCurrent(discover_header_object_spread_props(discover_header_object_spread({}, discoverCurrent), {
                            table: selectedTable.value,
                            timeField: ((_options_ = options[0]) === null || _options_ === void 0 ? void 0 : _options_.value) || ''
                        }));
                        setTimeFields(options);
                    }
                }
            },
            error: (err)=>{
                console.log('Fetch Error', err);
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
                    const frame = (0,data_.toDataFrame)(data.results.getIndexes.frames[0]);
                    const values = Array.from(frame.fields[2].values);
                    const columnNames = Array.from(frame.fields[4].values);
                    const indexesTypes = Array.from(frame.fields[10].values);
                    if (!values || values.length === 0) {
                        setIndexes([]);
                        setCurrentIndex([]);
                        return;
                    }
                    const tableIndexes = values === null || values === void 0 ? void 0 : values.map((item, index)=>{
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
                console.log('Fetch Error', err);
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
            `
    }, /*#__PURE__*/ external_react_default().createElement(DiscoverHeaderSearch, {
        className: "h-8 rounded border border-solid border-n9 dark:border-n7"
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
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
            // Always fetch databases even if the same datasource is selected
            fetchDatabases(item);
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
            setDiscoverCurrent(discover_header_object_spread_props(discover_header_object_spread({}, discoverCurrent), {
                database: selectedDatabase.value
            }));
            (0,metaservice/* getTablesService */.Rw)({
                selectdbDS,
                database: selectedDatabase.value
            }).subscribe({
                next: (resp)=>{
                    const { data, ok } = resp;
                    if (ok) {
                        const frame = (0,data_.toDataFrame)(data.results.getTables.frames[0]);
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
            console.log('selectedTable.value', selectedTable.value);
            setDiscoverCurrent(discover_header_object_spread_props(discover_header_object_spread({}, discoverCurrent), {
                table: selectedTable.value
            }));
            setCurrentTable(selectedTable.value);
            getFields(selectedTable);
            getIndexes(selectedTable);
        }
    })), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Mode",
        style: {
            marginLeft: 8,
            marginRight: 8,
            width: '120px'
        }
    }, /*#__PURE__*/ external_react_default().createElement(SearchType, null)), searchType === 'Lucene' ? /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Lucene",
        style: {
            width: '100%'
        }
    }, /*#__PURE__*/ external_react_default().createElement(Lucene, {
        onQuerying: ()=>props === null || props === void 0 ? void 0 : props.onQuerying()
    })) : /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: searchMode ? 'Search' : 'SQL',
        style: {
            width: '100%'
        }
    }, /*#__PURE__*/ external_react_default().createElement(SQLSearch, {
        style: {
            flex: '1'
        },
        onQuerying: ()=>{
            props === null || props === void 0 ? void 0 : props.onQuerying();
        }
    }))), !searchFocus && /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Time Field"
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Select, {
        value: currentTimeField,
        options: timeFields,
        onChange: (selectdbTimeFiled)=>{
            setDiscoverCurrent(discover_header_object_spread_props(discover_header_object_spread({}, discoverCurrent), {
                timeField: selectdbTimeFiled.value
            }));
            setLoc((prev)=>{
                const searchParams = prev.searchParams;
                searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('timeField', selectdbTimeFiled.value);
                return discover_header_object_spread_props(discover_header_object_spread({}, prev), {
                    searchParams
                });
            });
        },
        placeholder: 'Time Field'
    })), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Time Range",
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
                return discover_header_object_spread_props(discover_header_object_spread({}, prev), {
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
    }))), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: ""
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        onClick: ()=>{
            const latestTime = (0,utils_data/* getLatestTime */.hC)(activeItem === null || activeItem === void 0 ? void 0 : activeItem.key);
            if (latestTime) {
                const [latestStartTime, latestEndTime] = latestTime;
                setLoc((prev)=>{
                    const searchParams = prev.searchParams;
                    searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('startTime', dayjs_min_default()(latestStartTime).format(constants/* FORMAT_DATE */.fU));
                    searchParams === null || searchParams === void 0 ? void 0 : searchParams.set('endTime', dayjs_min_default()(latestEndTime).format(constants/* FORMAT_DATE */.fU));
                    return discover_header_object_spread_props(discover_header_object_spread({}, prev), {
                        searchParams
                    });
                });
            }
            props === null || props === void 0 ? void 0 : props.onQuerying();
        },
        variant: "primary",
        className: "h-8",
        icon: (props === null || props === void 0 ? void 0 : props.loading) ? 'fa fa-spinner' : 'sync',
        disabled: !currentTimeField
    }, `Query`)));
}

// EXTERNAL MODULE: ./components/testIds.ts
var testIds = __webpack_require__(3455);
// EXTERNAL MODULE: ./services/traces.ts + 1 modules
var traces = __webpack_require__(4338);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@5.27.6_date-fns@2.30.0_moment@2.29.4_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/antd/es/message/index.js + 38 modules
var message = __webpack_require__(5334);
// EXTERNAL MODULE: ../node_modules/.pnpm/@hyperdx+lucene@3.1.1/node_modules/@hyperdx/lucene/lib/lucene.js
var lucene = __webpack_require__(3596);
;// ./utils/query-parser/tokenUtils.ts
function encodeSpecialTokens(query) {
    return query.replace(/\\\\/g, 'HDX_BACKSLASH_LITERAL').replace('http://', 'http_COLON_//').replace('https://', 'https_COLON_//').replace(/localhost:(\d{1,5})/, 'localhost_COLON_$1').replace(/\\:/g, 'HDX_COLON');
}
function decodeSpecialTokens(query) {
    return query.replace(/\\"/g, '"').replace(/HDX_BACKSLASH_LITERAL/g, '\\').replace('http_COLON_//', 'http://').replace('https_COLON_//', 'https://').replace(/localhost_COLON_(\d{1,5})/, 'localhost:$1').replace(/HDX_COLON/g, ':');
}

;// ./utils/query-parser/constants.ts
const constants_IMPLICIT_FIELD = '<implicit>';
const CLICK_HOUSE_JSON_NUMBER_TYPES = [
    'Int8',
    'Int16',
    'Int32',
    'Int64',
    'Int128',
    'Int256',
    'UInt8',
    'UInt16',
    'UInt32',
    'UInt64',
    'UInt128',
    'UInt256',
    'Float32',
    'Float64'
];

;// ./utils/query-parser/sqlstring-browser.ts
const RAW_FLAG = '__raw';
const escapeString = (value)=>{
    const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `'${escaped}'`;
};
const formatDate = (value)=>{
    const pad = (input)=>input.toString().padStart(2, '0');
    const year = value.getFullYear();
    const month = pad(value.getMonth() + 1);
    const day = pad(value.getDate());
    const hours = pad(value.getHours());
    const minutes = pad(value.getMinutes());
    const seconds = pad(value.getSeconds());
    return `'${year}-${month}-${day} ${hours}:${minutes}:${seconds}'`;
};
const escapePrimitive = (value)=>{
    if (isRaw(value)) {
        return value.value;
    }
    if (value === null || value === undefined) {
        return 'NULL';
    }
    if (value instanceof Date) {
        return formatDate(value);
    }
    switch(typeof value){
        case 'number':
        case 'bigint':
            return `${value}`;
        case 'boolean':
            return value ? '1' : '0';
        default:
            return escapeString(String(value));
    }
};
const escapeIdentifier = (identifier)=>{
    if (isRaw(identifier)) {
        return identifier.value;
    }
    return identifier.split('.').map((part)=>{
        if (part === '*') {
            return '*';
        }
        return `\`${part.replace(/`/g, '``')}\``;
    }).join('.');
};
const escapeValue = (value)=>{
    if (isRaw(value)) {
        return value.value;
    }
    if (Array.isArray(value)) {
        const list = value.map((item)=>escapeValue(item));
        return `(${list.join(', ')})`;
    }
    if (value && typeof value === 'object' && !(value instanceof Date)) {
        return escapeString(JSON.stringify(value));
    }
    return escapePrimitive(value);
};
const isRaw = (value)=>Boolean(value && typeof value === 'object' && RAW_FLAG in value);
const format = (sql, values)=>{
    if (!values || values.length === 0) {
        return sql;
    }
    let index = 0;
    return sql.replace(/\?\?|\?/g, (placeholder)=>{
        if (index >= values.length) {
            return placeholder;
        }
        const value = values[index++];
        if (placeholder === '??') {
            if (Array.isArray(value)) {
                return value.map((v)=>escapeIdentifier(v)).join(', ');
            }
            return escapeIdentifier(value);
        }
        return escapeValue(value);
    });
};
const raw = (value)=>({
        __raw: true,
        value
    });
const SqlString = {
    format,
    raw
};
/* harmony default export */ const sqlstring_browser = (SqlString);

;// ./utils/query-parser/enums.ts
var JSDataType = /*#__PURE__*/ function(JSDataType) {
    JSDataType["Array"] = "array";
    JSDataType["Date"] = "date";
    JSDataType["Map"] = "map";
    JSDataType["Number"] = "number";
    JSDataType["String"] = "string";
    JSDataType["Tuple"] = "tuple";
    JSDataType["Bool"] = "bool";
    JSDataType["JSON"] = "json";
    JSDataType["Dynamic"] = "dynamic";
    return JSDataType;
}({});
const convertCHDataTypeToJSType = (dataType)=>{
    if (dataType.startsWith('Date')) {
        return "date";
    } else if (dataType.startsWith('Tuple')) {
        return "tuple";
    } else if (dataType.startsWith('Map')) {
        return "map";
    } else if (dataType.startsWith('Array')) {
        return "array";
    } else if (dataType.startsWith('Int') || dataType.startsWith('UInt') || dataType.startsWith('Float') || // Nullable types are possible (charts)
    dataType.startsWith('Nullable(Int') || dataType.startsWith('Nullable(UInt') || dataType.startsWith('Nullable(Float')) {
        return "number";
    } else if (dataType.startsWith('String') || dataType.startsWith('FixedString') || dataType.startsWith('Enum') || dataType.startsWith('UUID') || dataType.startsWith('IPv4') || dataType.startsWith('IPv6')) {
        return "string";
    } else if (dataType === 'Bool') {
        return "bool";
    } else if (dataType.startsWith('JSON')) {
        return "json";
    } else if (dataType.startsWith('Dynamic')) {
        return "dynamic";
    } else if (dataType.startsWith('LowCardinality')) {
        return convertCHDataTypeToJSType(dataType.slice(15, -1));
    }
    return null;
};
const convertCHTypeToPrimitiveJSType = (dataType)=>{
    const jsType = convertCHDataTypeToJSType(dataType);
    if (jsType === "map" || jsType === "array" || jsType === "tuple") {
        throw new Error('Map, Array or Tuple type is not a primitive type');
    } else if (jsType === "date") {
        return "number";
    }
    return jsType;
};

;// ./utils/query-parser/utils.ts
// Replace splitAndTrimCSV, should remove splitAndTrimCSV later
function splitAndTrimWithBracket(input) {
    let parenCount = 0;
    let squareCount = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    const res = [];
    let cur = '';
    for (const c of input + ','){
        if (c === '"' && !inSingleQuote) {
            inDoubleQuote = !inDoubleQuote;
            cur += c;
            continue;
        }
        if (c === "'" && !inDoubleQuote) {
            inSingleQuote = !inSingleQuote;
            cur += c;
            continue;
        }
        // Only count brackets when not in quotes
        if (!inSingleQuote && !inDoubleQuote) {
            if (c === '(') {
                parenCount++;
            } else if (c === ')') {
                parenCount--;
            } else if (c === '[') {
                squareCount++;
            } else if (c === ']') {
                squareCount--;
            }
        }
        if (c === ',' && parenCount === 0 && squareCount === 0 && !inSingleQuote && !inDoubleQuote) {
            const trimString = cur.trim();
            if (trimString) {
                res.push(trimString);
            }
            ;
            cur = '';
        } else {
            cur += c;
        }
    }
    return res;
}

;// ./utils/query-parser/serializers.ts
// @ts-ignore: no type declarations for '@hyperdx/lucene'
function serializers_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function serializers_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                serializers_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                serializers_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function serializers_define_property(obj, key, value) {
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





class serializers_EnglishSerializer {
    translateField(field) {
        if (field === IMPLICIT_FIELD) {
            return 'event';
        }
        return `'${field}'`;
    }
    operator(op) {
        switch(op){
            case 'NOT':
            case 'AND NOT':
                return 'AND NOT';
            case 'OR NOT':
                return 'OR NOT';
            // @ts-ignore TODO: Types need to be fixed upstream
            case '&&':
            case '<implicit>':
            case 'AND':
                return 'AND';
            // @ts-ignore TODO: Types need to be fixed upstream
            case '||':
            case 'OR':
                return 'OR';
            default:
                throw new Error(`Unexpected operator. ${op}`);
        }
    }
    eq(field, term, isNegatedField) {
        return serializers_async_to_generator(function*() {
            return `${this.translateField(field)} ${isNegatedField ? 'is not' : 'is'} ${term}`;
        }).call(this);
    }
    isNotNull(field, isNegatedField) {
        return serializers_async_to_generator(function*() {
            return `${this.translateField(field)} ${isNegatedField ? 'is null' : 'is not null'}`;
        }).call(this);
    }
    gte(field, term) {
        return serializers_async_to_generator(function*() {
            return `${this.translateField(field)} is greater than or equal to ${term}`;
        }).call(this);
    }
    lte(field, term) {
        return serializers_async_to_generator(function*() {
            return `${this.translateField(field)} is less than or equal to ${term}`;
        }).call(this);
    }
    lt(field, term) {
        return serializers_async_to_generator(function*() {
            return `${this.translateField(field)} is less than ${term}`;
        }).call(this);
    }
    gt(field, term) {
        return serializers_async_to_generator(function*() {
            return `${this.translateField(field)} is greater than ${term}`;
        }).call(this);
    }
    fieldSearch(field, term, isNegatedField, prefixWildcard, suffixWildcard, isPhrase) {
        return serializers_async_to_generator(function*() {
            if (field === IMPLICIT_FIELD) {
                return `${this.translateField(field)} ${prefixWildcard && suffixWildcard ? isNegatedField ? 'does not contain' : 'contains' : prefixWildcard ? isNegatedField ? 'does not end with' : 'ends with' : suffixWildcard ? isNegatedField ? 'does not start with' : 'starts with' : isNegatedField ? 'does not have whole word' : 'has whole word'} ${term}`;
            }
            return `${this.translateField(field)} ${isNegatedField ? 'does not contain' : 'contains'} ${term}`;
        }).call(this);
    }
    range(field, start, end, isNegatedField) {
        return serializers_async_to_generator(function*() {
            return `${field} ${isNegatedField ? 'is not' : 'is'} between ${start} and ${end}`;
        })();
    }
}
class SQLSerializer {
    operator(op) {
        switch(op){
            case 'NOT':
            case 'AND NOT':
                return 'AND NOT';
            case 'OR NOT':
                return 'OR NOT';
            // @ts-ignore TODO: Types need to be fixed upstream
            case '&&':
            case '<implicit>':
            case 'AND':
                return 'AND';
            // @ts-ignore TODO: Types need to be fixed upstream
            case '||':
            case 'OR':
                return 'OR';
            default:
                throw new Error(`Unexpected operator. ${op}`);
        }
    }
    eq(field, term, isNegatedField) {
        return serializers_async_to_generator(function*() {
            const { column, columnJSON, found, propertyType, supportsTextSearch, sourceColumn } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.Bool) {
                const normTerm = `${term}`.trim().toLowerCase();
                return sqlstring_browser.format(`(?? ${isNegatedField ? '!' : ''}= ?)`, [
                    column,
                    normTerm === 'true' ? 1 : normTerm === 'false' ? 0 : parseInt(normTerm, 10)
                ]);
            } else if (propertyType === JSDataType.Number) {
                return sqlstring_browser.format(`(${column} ${isNegatedField ? '!' : ''}= CAST(?, 'Float64'))`, [
                    term
                ]);
            } else if (propertyType === JSDataType.JSON) {
                return sqlstring_browser.format(`(${columnJSON === null || columnJSON === void 0 ? void 0 : columnJSON.string} ${isNegatedField ? '!' : ''}= ?)`, [
                    term
                ]);
            } else if (propertyType === JSDataType.String && supportsTextSearch) {
                const searchTarget = column && column.length > 0 ? column : sourceColumn;
                if (!searchTarget) {
                    return this.NOT_FOUND_QUERY;
                }
                return sqlstring_browser.format(`(? ${isNegatedField ? 'NOT ' : ''}MATCH_PHRASE ?)`, [
                    sqlstring_browser.raw(searchTarget),
                    term
                ]);
            }
            return sqlstring_browser.format(`(${column} ${isNegatedField ? '!' : ''}= ?)`, [
                term
            ]);
        }).call(this);
    }
    isNotNull(field, isNegatedField) {
        return serializers_async_to_generator(function*() {
            const { column, columnJSON, found, propertyType } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.JSON) {
                return `notEmpty(${columnJSON === null || columnJSON === void 0 ? void 0 : columnJSON.string}) ${isNegatedField ? '!' : ''}= 1`;
            }
            return `notEmpty(${column}) ${isNegatedField ? '!' : ''}= 1`;
        }).call(this);
    }
    gte(field, term) {
        return serializers_async_to_generator(function*() {
            const { column, columnJSON, found, propertyType } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.JSON) {
                return sqlstring_browser.format(`(${columnJSON === null || columnJSON === void 0 ? void 0 : columnJSON.number} >= ?)`, [
                    term
                ]);
            }
            return sqlstring_browser.format(`(${column} >= ?)`, [
                term
            ]);
        }).call(this);
    }
    lte(field, term) {
        return serializers_async_to_generator(function*() {
            const { column, columnJSON, found, propertyType } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.JSON) {
                return sqlstring_browser.format(`(${columnJSON === null || columnJSON === void 0 ? void 0 : columnJSON.number} <= ?)`, [
                    term
                ]);
            }
            return sqlstring_browser.format(`(${column} <= ?)`, [
                term
            ]);
        }).call(this);
    }
    lt(field, term) {
        return serializers_async_to_generator(function*() {
            const { column, columnJSON, found, propertyType } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.JSON) {
                return sqlstring_browser.format(`(${columnJSON === null || columnJSON === void 0 ? void 0 : columnJSON.number} < ?)`, [
                    term
                ]);
            }
            return sqlstring_browser.format(`(${column} < ?)`, [
                term
            ]);
        }).call(this);
    }
    gt(field, term) {
        return serializers_async_to_generator(function*() {
            const { column, columnJSON, found, propertyType } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.JSON) {
                return sqlstring_browser.format(`(${columnJSON === null || columnJSON === void 0 ? void 0 : columnJSON.number} > ?)`, [
                    term
                ]);
            }
            return sqlstring_browser.format(`(${column} > ?)`, [
                term
            ]);
        }).call(this);
    }
    attemptToParseNumber(term) {
        const number = Number.parseFloat(term);
        if (Number.isNaN(number)) {
            return term;
        }
        return number;
    }
    tokenizeTerm(term) {
        return term.split(/[ -/:-@[-`{-~\t\n\r]+/).filter((t)=>t.length > 0);
    }
    termHasSeperators(term) {
        return term.match(/[ -/:-@[-`{-~\t\n\r]+/) != null;
    }
    fieldSearch(field, term, isNegatedField, prefixWildcard, suffixWildcard, isPhrase) {
        return serializers_async_to_generator(function*() {
            const isImplicitField = field === constants_IMPLICIT_FIELD;
            const { column, found, propertyType, supportsTextSearch, sourceColumn, implicitTargets } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            if (propertyType === JSDataType.Bool) {
                const normTerm = `${term}`.trim().toLowerCase();
                return sqlstring_browser.format(`(?? ${isNegatedField ? '!' : ''}= ?)`, [
                    column,
                    normTerm === 'true' ? 1 : normTerm === 'false' ? 0 : parseInt(normTerm, 10)
                ]);
            } else if (propertyType === JSDataType.Number) {
                return sqlstring_browser.format(`(?? ${isNegatedField ? '!' : ''}= CAST(?, 'Float64'))`, [
                    column,
                    term
                ]);
            } else if (propertyType === JSDataType.JSON && supportsTextSearch === false) {
                return this.NOT_FOUND_QUERY;
            }
            if (term.length === 0) {
                return '(1=1)';
            }
            if (isImplicitField) {
                if (implicitTargets && implicitTargets.length > 0) {
                    const usePhrasePrefix = !isPhrase && suffixWildcard && !prefixWildcard;
                    const matchTerm = isPhrase ? term : usePhrasePrefix ? term : `${prefixWildcard ? '*' : ''}${term}${suffixWildcard ? '*' : ''}`;
                    const clauses = implicitTargets.map((target)=>{
                        if (!target) {
                            return null;
                        }
                        if (isPhrase && target.propertyType !== JSDataType.String && target.propertyType !== JSDataType.JSON) {
                            return null;
                        }
                        if ((target.propertyType === JSDataType.String || target.propertyType === JSDataType.JSON) && target.supportsTextSearch) {
                            var _target_sourceColumn;
                            const identifier = (_target_sourceColumn = target.sourceColumn) !== null && _target_sourceColumn !== void 0 ? _target_sourceColumn : target.column;
                            if (!identifier) {
                                return null;
                            }
                            const operator = isPhrase ? 'MATCH_PHRASE' : usePhrasePrefix ? 'MATCH_PHRASE_PREFIX' : 'MATCH_ANY';
                            return sqlstring_browser.format(`(?? ${operator} ?)`, [
                                identifier,
                                matchTerm
                            ]);
                        }
                        if (target.propertyType === JSDataType.Number) {
                            var _target_sourceColumn1;
                            const identifier = (_target_sourceColumn1 = target.sourceColumn) !== null && _target_sourceColumn1 !== void 0 ? _target_sourceColumn1 : target.column;
                            if (!identifier) {
                                return null;
                            }
                            return sqlstring_browser.format(`(?? = CAST(?, 'Float64'))`, [
                                identifier,
                                term
                            ]);
                        }
                        if (target.propertyType === JSDataType.Bool) {
                            var _target_sourceColumn2;
                            const identifier = (_target_sourceColumn2 = target.sourceColumn) !== null && _target_sourceColumn2 !== void 0 ? _target_sourceColumn2 : target.column;
                            if (!identifier) {
                                return null;
                            }
                            const normTerm = `${term}`.trim().toLowerCase();
                            const boolValue = normTerm === 'true' ? 1 : normTerm === 'false' ? 0 : parseInt(normTerm, 10);
                            return sqlstring_browser.format(`(?? = ?)`, [
                                identifier,
                                boolValue
                            ]);
                        }
                        return null;
                    }).filter((clause)=>clause != null);
                    if (clauses.length === 0) {
                        return this.NOT_FOUND_QUERY;
                    }
                    const orClause = clauses.join(' OR ');
                    const wrapped = clauses.length === 1 ? clauses[0] : `(${orClause})`;
                    if (isNegatedField) {
                        return `(NOT ${wrapped})`;
                    }
                    return wrapped;
                }
                if (column) {
                    if (prefixWildcard || suffixWildcard) {
                        return sqlstring_browser.format(`(lower(?) ${isNegatedField ? 'NOT ' : ''}LIKE lower(?))`, [
                            sqlstring_browser.raw(column !== null && column !== void 0 ? column : ''),
                            `${prefixWildcard ? '%' : ''}${term}${suffixWildcard ? '%' : ''}`
                        ]);
                    } else {
                        const hasSeperators = this.termHasSeperators(term);
                        if (hasSeperators) {
                            const tokens = this.tokenizeTerm(term);
                            return `(${isNegatedField ? 'NOT (' : ''}${[
                                ...tokens.map((token)=>sqlstring_browser.format(`hasToken(lower(?), lower(?))`, [
                                        sqlstring_browser.raw(column !== null && column !== void 0 ? column : ''),
                                        token
                                    ])),
                                sqlstring_browser.format(`(lower(?) LIKE lower(?))`, [
                                    sqlstring_browser.raw(column !== null && column !== void 0 ? column : ''),
                                    `%${term}%`
                                ])
                            ].join(' AND ')}${isNegatedField ? ')' : ''})`;
                        }
                        return sqlstring_browser.format(`(${isNegatedField ? 'NOT ' : ''}hasToken(lower(?), lower(?)))`, [
                            sqlstring_browser.raw(column !== null && column !== void 0 ? column : ''),
                            term
                        ]);
                    }
                }
                return this.NOT_FOUND_QUERY;
            } else {
                if (supportsTextSearch === false) {
                    return this.NOT_FOUND_QUERY;
                }
                const searchTarget = column && column.length > 0 ? column : sourceColumn;
                if (!searchTarget) {
                    return this.NOT_FOUND_QUERY;
                }
                const usePhrasePrefix = !isPhrase && suffixWildcard && !prefixWildcard;
                const matchTerm = isPhrase ? term : usePhrasePrefix ? term : `${prefixWildcard ? '*' : ''}${term}${suffixWildcard ? '*' : ''}`;
                const operator = isPhrase ? 'MATCH_PHRASE' : usePhrasePrefix ? 'MATCH_PHRASE_PREFIX' : 'MATCH_ANY';
                return sqlstring_browser.format(`(? ${isNegatedField ? 'NOT ' : ''}${operator} ?)`, [
                    sqlstring_browser.raw(searchTarget),
                    matchTerm
                ]);
            }
        }).call(this);
    }
    range(field, start, end, isNegatedField) {
        return serializers_async_to_generator(function*() {
            const { column, found } = yield this.getColumnForField(field);
            if (!found) {
                return this.NOT_FOUND_QUERY;
            }
            return sqlstring_browser.format(`(${column} ${isNegatedField ? 'NOT ' : ''}BETWEEN ? AND ?)`, [
                this.attemptToParseNumber(start),
                this.attemptToParseNumber(end)
            ]);
        }).call(this);
    }
    constructor(){
        serializers_define_property(this, "NOT_FOUND_QUERY", '(1 = 0)');
    }
}
class CustomSchemaSQLSerializerV2 extends SQLSerializer {
    fetchColumnMetadata(column) {
        return serializers_async_to_generator(function*() {
            var _this_legacyMetadataProvider;
            if (this.columnMetadataCache.has(column)) {
                var _this_columnMetadataCache_get;
                return (_this_columnMetadataCache_get = this.columnMetadataCache.get(column)) !== null && _this_columnMetadataCache_get !== void 0 ? _this_columnMetadataCache_get : null;
            }
            let resolved = null;
            try {
                const result = yield (0,metaservice/* getColumn */.bf)({
                    connectionId: this.connectionId,
                    database: this.databaseName,
                    table: this.tableName,
                    column,
                    datasourceType: this.datasourceType
                });
                if (result) {
                    resolved = {
                        name: result.name,
                        type: result.normalizedType || result.columnType || result.dataType || 'Unknown',
                        dataType: result.dataType,
                        columnType: result.columnType
                    };
                }
            } catch (error) {
            // ignore service errors and fallback to legacy metadata provider if available
            }
            if (!resolved && ((_this_legacyMetadataProvider = this.legacyMetadataProvider) === null || _this_legacyMetadataProvider === void 0 ? void 0 : _this_legacyMetadataProvider.getColumn)) {
                try {
                    const legacy = yield this.legacyMetadataProvider.getColumn({
                        databaseName: this.databaseName,
                        tableName: this.tableName,
                        column,
                        connectionId: this.connectionId
                    });
                    if (legacy) {
                        resolved = {
                            name: legacy.name,
                            type: legacy.type || 'Unknown'
                        };
                    }
                } catch (legacyError) {
                // swallow legacy metadata errors
                }
            }
            this.columnMetadataCache.set(column, resolved);
            return resolved;
        }).call(this);
    }
    loadInvertedIndexColumns() {
        return serializers_async_to_generator(function*() {
            if (this.invertedIndexColumns) {
                return this.invertedIndexColumns;
            }
            if (!this.invertedIndexColumnsPromise) {
                this.invertedIndexColumnsPromise = (()=>serializers_async_to_generator(function*() {
                        try {
                            const columns = yield (0,metaservice/* getInvertedIndexColumns */.Dr)({
                                connectionId: this.connectionId,
                                database: this.databaseName,
                                table: this.tableName,
                                datasourceType: this.datasourceType
                            });
                            return new Set(columns.map((name)=>name.toLowerCase()));
                        } catch (error) {
                            return new Set();
                        }
                    }).call(this))();
            }
            const resolved = yield this.invertedIndexColumnsPromise;
            this.invertedIndexColumns = resolved;
            return resolved;
        }).call(this);
    }
    columnHasInvertedIndex(column) {
        return serializers_async_to_generator(function*() {
            if (!column) {
                return false;
            }
            const indexes = yield this.loadInvertedIndexColumns();
            return indexes.has(column.toLowerCase());
        }).call(this);
    }
    buildColumnExpressionFromField(field) {
        return serializers_async_to_generator(function*() {
            const exactMatch = yield this.fetchColumnMetadata(field);
            if (exactMatch) {
                return {
                    found: true,
                    columnType: exactMatch.type,
                    columnExpression: exactMatch.name,
                    sourceColumn: exactMatch.name
                };
            }
            const fieldPrefix = field.split('.')[0];
            const prefixMatch = yield this.fetchColumnMetadata(fieldPrefix);
            if (prefixMatch) {
                const fieldPostfix = field.split('.').slice(1).join('.');
                if (prefixMatch.type.startsWith('Map')) {
                    var _prefixMatch_type_match;
                    const valueType = (_prefixMatch_type_match = prefixMatch.type.match(/,\s+(\w+)\)$/)) === null || _prefixMatch_type_match === void 0 ? void 0 : _prefixMatch_type_match[1];
                    return {
                        found: true,
                        columnExpression: sqlstring_browser.format(`??[?]`, [
                            prefixMatch.name,
                            fieldPostfix
                        ]),
                        columnType: valueType !== null && valueType !== void 0 ? valueType : 'Unknown',
                        sourceColumn: prefixMatch.name
                    };
                } else if (prefixMatch.type.startsWith('JSON')) {
                    return {
                        found: true,
                        columnExpression: '',
                        columnExpressionJSON: {
                            string: sqlstring_browser.format(`toString(??)`, [
                                field
                            ]),
                            number: sqlstring_browser.format(`dynamicType(??) in (?) and ??`, [
                                field,
                                CLICK_HOUSE_JSON_NUMBER_TYPES,
                                field
                            ])
                        },
                        columnType: 'JSON',
                        sourceColumn: prefixMatch.name
                    };
                } else if (prefixMatch.type === 'String') {
                    const nestedPaths = fieldPostfix.split('.');
                    return {
                        found: true,
                        columnExpression: sqlstring_browser.format(`JSONExtractString(??, ${Array(nestedPaths.length).fill('?').join(',')})`, [
                            prefixMatch.name,
                            ...nestedPaths
                        ]),
                        columnType: 'String',
                        sourceColumn: prefixMatch.name
                    };
                }
                throw new Error('Unsupported column type for prefix match');
            }
            return {
                found: true,
                columnExpression: field,
                columnType: 'Unknown',
                sourceColumn: field
            };
        }).call(this);
    }
    getColumnForField(field) {
        return serializers_async_to_generator(function*() {
            if (field === constants_IMPLICIT_FIELD) {
                if (!this.implicitColumnExpression) {
                    throw new Error('Can not search bare text without an implicit column set.');
                }
                const expressions = splitAndTrimWithBracket(this.implicitColumnExpression);
                const implicitFieldCandidates = Array.from(new Set(expressions.reduce((acc, expression)=>{
                    acc.push(...this.extractFieldNamesFromExpression(expression));
                    return acc;
                }, []).filter((name)=>!!name)));
                const implicitTargets = (yield Promise.all(implicitFieldCandidates.map((candidate)=>serializers_async_to_generator(function*() {
                        try {
                            const candidateExpression = yield this.buildColumnExpressionFromField(candidate);
                            var _convertCHTypeToPrimitiveJSType;
                            const candidatePropertyType = (_convertCHTypeToPrimitiveJSType = convertCHTypeToPrimitiveJSType(candidateExpression.columnType)) !== null && _convertCHTypeToPrimitiveJSType !== void 0 ? _convertCHTypeToPrimitiveJSType : undefined;
                            let candidateSupportsTextSearch;
                            if ((candidatePropertyType === JSDataType.String || candidatePropertyType === JSDataType.JSON) && candidateExpression.sourceColumn && candidateExpression.columnExpression === candidateExpression.sourceColumn) {
                                candidateSupportsTextSearch = yield this.columnHasInvertedIndex(candidateExpression.sourceColumn);
                            } else if (candidatePropertyType === JSDataType.String || candidatePropertyType === JSDataType.JSON) {
                                candidateSupportsTextSearch = false;
                            }
                            var _candidateExpression_sourceColumn;
                            return {
                                column: candidateExpression.columnExpression,
                                sourceColumn: (_candidateExpression_sourceColumn = candidateExpression.sourceColumn) !== null && _candidateExpression_sourceColumn !== void 0 ? _candidateExpression_sourceColumn : candidate,
                                propertyType: candidatePropertyType,
                                supportsTextSearch: candidateSupportsTextSearch
                            };
                        } catch (error) {
                            return null;
                        }
                    }).call(this)))).filter((target)=>target !== null);
                return {
                    column: expressions.length > 1 ? `concatWithSeparator(';',${expressions.join(',')})` : this.implicitColumnExpression,
                    columnJSON: undefined,
                    propertyType: JSDataType.String,
                    supportsTextSearch: undefined,
                    sourceColumn: undefined,
                    implicitTargets,
                    found: true
                };
            }
            const expression = yield this.buildColumnExpressionFromField(field);
            var _convertCHTypeToPrimitiveJSType;
            const propertyType = (_convertCHTypeToPrimitiveJSType = convertCHTypeToPrimitiveJSType(expression.columnType)) !== null && _convertCHTypeToPrimitiveJSType !== void 0 ? _convertCHTypeToPrimitiveJSType : undefined;
            let supportsTextSearch;
            if ((propertyType === JSDataType.String || propertyType === JSDataType.JSON) && expression.sourceColumn && expression.columnExpression === expression.sourceColumn) {
                supportsTextSearch = yield this.columnHasInvertedIndex(expression.sourceColumn);
            } else if (propertyType === JSDataType.String || propertyType === JSDataType.JSON) {
                supportsTextSearch = false;
            }
            return {
                column: expression.columnExpression,
                columnJSON: expression === null || expression === void 0 ? void 0 : expression.columnExpressionJSON,
                propertyType,
                supportsTextSearch,
                sourceColumn: expression.sourceColumn,
                implicitTargets: undefined,
                found: expression.found
            };
        }).call(this);
    }
    extractFieldNamesFromExpression(expression) {
        const matches = expression.match(/`([^`]+)`/g);
        if (!matches) {
            return [];
        }
        return matches.map((match)=>match.slice(1, -1));
    }
    constructor({ metadata, databaseName, tableName, connectionId, implicitColumnExpression, datasourceType }){
        super(), serializers_define_property(this, "tableName", void 0), serializers_define_property(this, "databaseName", void 0), serializers_define_property(this, "implicitColumnExpression", void 0), serializers_define_property(this, "connectionId", void 0), serializers_define_property(this, "datasourceType", void 0), serializers_define_property(this, "legacyMetadataProvider", void 0), serializers_define_property(this, "columnMetadataCache", new Map()), serializers_define_property(this, "invertedIndexColumns", void 0), serializers_define_property(this, "invertedIndexColumnsPromise", void 0);
        this.legacyMetadataProvider = metadata;
        this.databaseName = databaseName;
        this.tableName = tableName;
        this.implicitColumnExpression = implicitColumnExpression;
        this.connectionId = connectionId;
        this.datasourceType = datasourceType;
    }
}

;// ./utils/query-parser/ast.ts
// @ts-ignore: no type declarations for '@hyperdx/lucene'
function ast_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function ast_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                ast_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                ast_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}




function ast_parse(query) {
    return lucene.parse(encodeSpecialTokens(query));
}
function nodeTerm(node, serializer) {
    return ast_async_to_generator(function*() {
        const field = node.field[0] === '-' ? node.field.slice(1) : node.field;
        let isNegatedField = node.field[0] === '-';
        const isImplicitField = node.field === constants_IMPLICIT_FIELD;
        if (node.term != null) {
            const nodeTermInstance = node;
            let term = decodeSpecialTokens(nodeTermInstance.term);
            if (isImplicitField && nodeTermInstance.prefix === '-') {
                isNegatedField = true;
            }
            if (!isImplicitField && nodeTermInstance.prefix === '-') {
                term = nodeTermInstance.prefix + decodeSpecialTokens(nodeTermInstance.term);
            }
            if (nodeTermInstance.quoted && !isImplicitField) {
                return serializer.eq(field, term, isNegatedField);
            }
            if (!nodeTermInstance.quoted && term === '*') {
                return serializer.isNotNull(field, isNegatedField);
            }
            if (!nodeTermInstance.quoted && term.substring(0, 2) === '>=') {
                if (isNegatedField) {
                    return serializer.lt(field, term.slice(2));
                }
                return serializer.gte(field, term.slice(2));
            }
            if (!nodeTermInstance.quoted && term.substring(0, 2) === '<=') {
                if (isNegatedField) {
                    return serializer.gt(field, term.slice(2));
                }
                return serializer.lte(field, term.slice(2));
            }
            if (!nodeTermInstance.quoted && term[0] === '>') {
                if (isNegatedField) {
                    return serializer.lte(field, term.slice(1));
                }
                return serializer.gt(field, term.slice(1));
            }
            if (!nodeTermInstance.quoted && term[0] === '<') {
                if (isNegatedField) {
                    return serializer.gte(field, term.slice(1));
                }
                return serializer.lt(field, term.slice(1));
            }
            let prefixWildcard = false;
            let suffixWildcard = false;
            if (!nodeTermInstance.quoted && term[0] === '*') {
                prefixWildcard = true;
                term = term.slice(1);
            }
            if (!nodeTermInstance.quoted && term[term.length - 1] === '*') {
                suffixWildcard = true;
                term = term.slice(0, -1);
            }
            return serializer.fieldSearch(field, term, isNegatedField, prefixWildcard, suffixWildcard, nodeTermInstance.quoted);
        }
        if (node.inclusive != null) {
            const rangedTerm = node;
            return serializer.range(field, rangedTerm.term_min, rangedTerm.term_max, isNegatedField);
        }
        throw new Error(`Unexpected Node type. ${node}`);
    })();
}
function serialize(ast, serializer) {
    return ast_async_to_generator(function*() {
        if (ast.term != null) {
            return yield nodeTerm(ast, serializer);
        }
        if (ast.inclusive != null) {
            return yield nodeTerm(ast, serializer);
        }
        if (ast.right != null) {
            const binaryAST = ast;
            const operator = serializer.operator(binaryAST.operator);
            const parenthesized = binaryAST.parenthesized;
            return `${parenthesized ? '(' : ''}${yield serialize(binaryAST.left, serializer)} ${operator} ${yield serialize(binaryAST.right, serializer)}${parenthesized ? ')' : ''}`;
        }
        if (ast.left != null) {
            const leftOnlyAST = ast;
            const parenthesized = leftOnlyAST.parenthesized;
            return `${parenthesized ? '(' : ''}${leftOnlyAST.start !== undefined ? `${leftOnlyAST.start} ` : ''}${yield serialize(leftOnlyAST.left, serializer)}${parenthesized ? ')' : ''}`;
        }
        return '';
    })();
}
function ast_genWhereSQL(ast, serializer) {
    return ast_async_to_generator(function*() {
        return yield serialize(ast, serializer);
    })();
}
function genEnglishExplanation(query) {
    return ast_async_to_generator(function*() {
        try {
            const parsedQ = ast_parse(query);
            if (parsedQ) {
                const serializer = new EnglishSerializer();
                return yield serialize(parsedQ, serializer);
            }
        } catch (e) {
            console.warn('Parse failure', query, e);
        }
        return `Message containing ${query}`;
    })();
}

;// ./utils/query-parser/query-parser.ts
function query_parser_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function query_parser_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                query_parser_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                query_parser_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function query_parser_define_property(obj, key, value) {
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



class SearchQueryBuilder {
    setSerializer(serializer) {
        this.serializer = serializer;
        return this;
    }
    getSerializer() {
        return this.serializer;
    }
    genSearchQuery() {
        return query_parser_async_to_generator(function*() {
            if (!this.searchQ) {
                return '';
            }
            const parsedQ = parse(this.searchQ);
            return yield genWhereSQL(parsedQ, this.serializer);
        }).call(this);
    }
    and(condition) {
        if (condition && condition.trim()) {
            this.conditions.push(`(${condition})`);
        }
        return this;
    }
    build() {
        return query_parser_async_to_generator(function*() {
            const searchQuery = yield this.genSearchQuery();
            if (this.searchQ) {
                this.and(searchQuery);
            }
            return this.conditions.join(' AND ');
        }).call(this);
    }
    constructor(searchQ, serializer){
        query_parser_define_property(this, "searchQ", void 0);
        query_parser_define_property(this, "conditions", void 0);
        query_parser_define_property(this, "serializer", void 0);
        this.conditions = [];
        this.searchQ = searchQ;
        this.serializer = serializer;
    }
}

;// ./services/lucene.ts
function lucene_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function lucene_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                lucene_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                lucene_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

function getWhereSQLViaLucene(_0) {
    return lucene_async_to_generator(function*({ query, databaseName, tableName, connectionId, implicitColumnExpression, datasourceType }) {
        const trimmedQuery = query === null || query === void 0 ? void 0 : query.trim();
        if (!trimmedQuery) {
            return '';
        }
        const serializer = new CustomSchemaSQLSerializerV2({
            databaseName,
            tableName,
            connectionId,
            implicitColumnExpression,
            datasourceType
        });
        try {
            const ast = ast_parse(trimmedQuery);
            const whereSQL = yield ast_genWhereSQL(ast, serializer);
            console.log({
                query,
                whereSQL
            });
            return whereSQL;
        } catch (error) {
            console.error('Failed to generate Lucene WHERE SQL', error);
            throw error;
        }
    }).apply(this, arguments);
}

;// ./pages/PageDiscover/useLuceneWhereClause.ts
function useLuceneWhereClause_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function useLuceneWhereClause_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                useLuceneWhereClause_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                useLuceneWhereClause_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}




function useLuceneWhereClause() {
    const searchType = (0,react/* useAtomValue */.md)(discover/* searchTypeAtom */.WM);
    const searchValue = (0,react/* useAtomValue */.md)(discover/* searchValueAtom */.P8);
    const currentTable = (0,react/* useAtomValue */.md)(discover/* currentTableAtom */.$w);
    const currentDatabase = (0,react/* useAtomValue */.md)(discover/* currentDatabaseAtom */.Cf);
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    return (0,external_react_.useCallback)(()=>useLuceneWhereClause_async_to_generator(function*() {
            if (searchType !== 'Lucene') {
                return '';
            }
            const trimmedQuery = searchValue === null || searchValue === void 0 ? void 0 : searchValue.trim();
            if (!trimmedQuery || !currentTable || !currentDatabase || !selectdbDS) {
                return '';
            }
            const candidateFieldNames = (tableFields || []).map((field)=>{
                var _field_Field, _ref;
                const rawName = (_ref = (_field_Field = field === null || field === void 0 ? void 0 : field.Field) !== null && _field_Field !== void 0 ? _field_Field : field === null || field === void 0 ? void 0 : field.value) !== null && _ref !== void 0 ? _ref : field === null || field === void 0 ? void 0 : field.name;
                var _field_Type;
                const type = String((_field_Type = field === null || field === void 0 ? void 0 : field.Type) !== null && _field_Type !== void 0 ? _field_Type : '').toUpperCase();
                if (!rawName) {
                    return null;
                }
                if (!type) {
                    return rawName;
                }
                return /(CHAR|TEXT|STRING|JSON|VARIANT)/.test(type) ? rawName : null;
            }).filter(Boolean);
            const implicitExpressions = candidateFieldNames.slice(0, 10).map((name)=>`coalesce(\`${name}\`, '')`);
            let implicitColumnExpression;
            if (implicitExpressions.length > 0) {
                implicitColumnExpression = implicitExpressions.join(',\n');
            } else if (currentTimeField) {
                implicitColumnExpression = `coalesce(\`${currentTimeField}\`, '')`;
            }
            return yield getWhereSQLViaLucene({
                query: trimmedQuery,
                databaseName: currentDatabase,
                tableName: currentTable,
                connectionId: selectdbDS.uid,
                datasourceType: selectdbDS.type,
                implicitColumnExpression
            });
        })(), [
        currentDatabase,
        currentTable,
        currentTimeField,
        searchType,
        searchValue,
        selectdbDS,
        tableFields
    ]);
}

;// ./pages/PageDiscover/useDiscoverData.ts
function useDiscoverData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function useDiscoverData_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                useDiscoverData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                useDiscoverData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function useDiscoverData_define_property(obj, key, value) {
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
function useDiscoverData_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            useDiscoverData_define_property(target, key, source[key]);
        });
    }
    return target;
}
function useDiscoverData_ownKeys(object, enumerableOnly) {
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
function useDiscoverData_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        useDiscoverData_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}











function useDiscoverData() {
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const pageSize = (0,react/* useAtomValue */.md)(discover/* pageSizeAtom */.Ol);
    const setTableData = (0,react/* useSetAtom */.Xr)(discover/* tableDataAtom */.q3);
    const setTableDataCharts = (0,react/* useSetAtom */.Xr)(discover/* tableDataChartsAtom */.pB);
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const interval = (0,react/* useAtomValue */.md)(discover/* intervalAtom */.le);
    const currentIndexes = (0,react/* useAtomValue */.md)(discover/* currentIndexAtom */.TY);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const searchType = (0,react/* useAtomValue */.md)(discover/* searchTypeAtom */.WM);
    const dataFilter = (0,react/* useAtomValue */.md)(discover/* dataFilterAtom */.EA);
    const searchValue = (0,react/* useAtomValue */.md)(discover/* searchValueAtom */.P8);
    const setTopData = (0,react/* useSetAtom */.Xr)(discover/* topDataAtom */.l_);
    const currentTable = (0,react/* useAtomValue */.md)(discover/* currentTableAtom */.$w);
    const currentCatalog = (0,react/* useAtomValue */.md)(discover/* currentCatalogAtom */.K0);
    const currentDatabase = (0,react/* useAtomValue */.md)(discover/* currentDatabaseAtom */.Cf);
    const currentDate = (0,react/* useAtomValue */.md)(discover/* currentDateAtom */.Zb);
    const setTableTotalCount = (0,react/* useSetAtom */.Xr)(discover/* tableTotalCountAtom */.HC);
    const setTraceData = (0,react/* useSetAtom */.Xr)(discover/* tableTracesDataAtom */.UB);
    const [loading, setLoading] = (0,react/* useAtom */.fp)(discover/* discoverLoadingAtom */.jU);
    const buildLuceneWhereClause = useLuceneWhereClause();
    const getTableData = (0,external_react_.useCallback)(()=>useDiscoverData_async_to_generator(function*() {
            var _currentDate_;
            if (!currentTable || !currentDatabase || !selectdbDS) {
                return;
            }
            setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                    getTableData: true
                }));
            const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
            const payload = {
                catalog: currentCatalog,
                database: currentDatabase,
                table: currentTable,
                timeField: currentTimeField,
                startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
                endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
                cluster: '',
                sort: 'DESC',
                search_type: searchType,
                indexes: '',
                page: page,
                page_size: pageSize
            };
            if (searchType === 'Search') {
                payload.indexes_statement = indexesStatement;
            }
            payload.data_filters = dataFilter.length > 0 ? dataFilter : [];
            if (searchType === 'Lucene') {
                try {
                    const luceneWhere = yield buildLuceneWhereClause();
                    if (luceneWhere) {
                        payload.lucene_where = luceneWhere;
                    }
                } catch (error) {
                    setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                            getTableData: false
                        }));
                    setTableData([]);
                    console.error('Lucene query build failed', error);
                    return;
                }
            }
            if (searchValue && searchType !== 'Lucene') {
                payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
            }
            getTableDataService(useDiscoverData_object_spread({
                selectdbDS
            }, payload)).subscribe({
                next: ({ data, ok })=>useDiscoverData_async_to_generator(function*() {
                        var _data_results_getTableData, _data_results;
                        setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                                getTableData: false
                            }));
                        if (!ok) {
                            // Clear table data when backend reports failure so UI does not display stale results
                            setTableData([]);
                            return;
                        }
                        const frames = data === null || data === void 0 ? void 0 : (_data_results = data.results) === null || _data_results === void 0 ? void 0 : (_data_results_getTableData = _data_results.getTableData) === null || _data_results_getTableData === void 0 ? void 0 : _data_results_getTableData.frames;
                        if (!frames || !frames[0]) {
                            setTableData([]);
                            return;
                        }
                        const rowsData = (0,utils_data/* convertColumnToRow */.HL)(frames[0]);
                        const resData = (0,utils_data/* generateHighlightedResults */.F9)({
                            search_value: searchValue,
                            indexes: currentIndexes || []
                        }, rowsData);
                        const rowsDataWithUid = yield (0,utils/* generateTableDataUID */.sd)(resData);
                        setTableData(rowsDataWithUid);
                    })(),
                error: (err)=>{
                    setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                            getTableData: false
                        }));
                    // Clear table data on network / connection errors to ensure UI refreshes
                    setTableData([]);
                    console.log('Fetch Error', err);
                }
            });
        })(), [
        buildLuceneWhereClause,
        currentCatalog,
        currentDate,
        currentDatabase,
        currentIndexes,
        currentTable,
        currentTimeField,
        dataFilter,
        page,
        pageSize,
        searchType,
        searchValue,
        selectdbDS,
        setLoading,
        setTableData,
        tableFields
    ]);
    const getTableDataCharts = (0,external_react_.useCallback)(()=>useDiscoverData_async_to_generator(function*() {
            var _currentDate_;
            if (!currentTable || !currentDatabase || !selectdbDS) {
                return;
            }
            setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                    getTableDataCharts: true
                }));
            const autoInterval = (0,constants/* getAutoInterval */.Vy)(currentDate);
            const timeInterval = interval === constants/* IntervalEnum */.Bg.Auto ? autoInterval.interval_unit : interval;
            const timeIntervalValue = interval === constants/* IntervalEnum */.Bg.Auto ? autoInterval.interval_value : 1;
            const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
            const payload = {
                catalog: 'internal',
                database: currentDatabase,
                table: currentTable,
                timeField: currentTimeField,
                startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
                endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
                cluster: '',
                data_filters: [],
                sort: 'DESC',
                interval: timeInterval,
                interval_value: timeIntervalValue,
                search_type: searchType,
                indexes: indexesStatement
            };
            if (dataFilter.length > 0) {
                payload.data_filters = dataFilter;
            }
            if (searchType === 'Lucene') {
                try {
                    const luceneWhere = yield buildLuceneWhereClause();
                    if (luceneWhere) {
                        payload.lucene_where = luceneWhere;
                    }
                } catch (error) {
                    setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                            getTableDataCharts: false
                        }));
                    setTableDataCharts([]);
                    console.error('Lucene query build failed', error);
                    return;
                }
            }
            if (searchValue && searchType !== 'Lucene') {
                payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
            }
            getTableDataChartsService(useDiscoverData_object_spread({
                selectdbDS
            }, payload)).subscribe({
                next: ({ data, ok })=>{
                    var _frame_fields_, _frame_fields_1;
                    setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                            getTableDataCharts: false
                        }));
                    if (!ok) {
                        // Clear charts when backend reports failure
                        setTableDataCharts([]);
                        return;
                    }
                    const frame = (0,data_.toDataFrame)(data.results.getTableDataCharts.frames[0]);
                    const times = Array.from((frame === null || frame === void 0 ? void 0 : (_frame_fields_ = frame.fields[0]) === null || _frame_fields_ === void 0 ? void 0 : _frame_fields_.values) || []);
                    const values = Array.from((frame === null || frame === void 0 ? void 0 : (_frame_fields_1 = frame.fields[1]) === null || _frame_fields_1 === void 0 ? void 0 : _frame_fields_1.values) || []);
                    if (!times.length || !values.length) {
                        setTableDataCharts([]);
                        return;
                    }
                    const tableDataCharts = times.map((item, index)=>({
                            TT: item,
                            'sum(cnt)': values[index]
                        }));
                    const chartsData = (0,utils_data/* getChartsData */.Wd)(tableDataCharts, currentDate);
                    setTableDataCharts(chartsData);
                },
                error: (err)=>{
                    setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                            getTableDataCharts: false
                        }));
                    // Clear charts on network / connection errors
                    setTableDataCharts([]);
                    console.log('Fetch Error', err);
                }
            });
        })(), [
        buildLuceneWhereClause,
        currentDate,
        currentDatabase,
        currentIndexes,
        currentTable,
        currentTimeField,
        dataFilter,
        interval,
        searchType,
        searchValue,
        selectdbDS,
        setLoading,
        setTableDataCharts,
        tableFields
    ]);
    const getTopData = (0,external_react_.useCallback)(()=>useDiscoverData_async_to_generator(function*() {
            var _currentDate_;
            if (!currentTable || !currentDatabase || !selectdbDS) {
                return;
            }
            const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
            const payload = {
                catalog: currentCatalog,
                database: currentDatabase,
                table: currentTable,
                timeField: currentTimeField,
                startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
                endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
                cluster: '',
                sort: 'DESC',
                search_type: searchType,
                indexes: '',
                page: page,
                page_size: 500
            };
            if (searchType === 'Search') {
                payload.indexes_statement = indexesStatement;
            }
            payload.data_filters = dataFilter.length > 0 ? dataFilter : [];
            if (searchValue && searchType !== 'Lucene') {
                payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
            }
            if (searchType === 'Lucene') {
                try {
                    const luceneWhere = yield buildLuceneWhereClause();
                    if (luceneWhere) {
                        payload.lucene_where = luceneWhere;
                    }
                } catch (error) {
                    console.error('Lucene query build failed', error);
                    setTopData([]);
                    return;
                }
            }
            getTopDataService(useDiscoverData_object_spread({
                selectdbDS
            }, payload)).subscribe({
                next: ({ data, ok })=>{
                    var _data_results_getTableTopData, _data_results;
                    if (!ok) {
                        return;
                    }
                    const frames = data === null || data === void 0 ? void 0 : (_data_results = data.results) === null || _data_results === void 0 ? void 0 : (_data_results_getTableTopData = _data_results.getTableTopData) === null || _data_results_getTableTopData === void 0 ? void 0 : _data_results_getTableTopData.frames;
                    if (!frames || !frames[0]) {
                        setTopData([]);
                        return;
                    }
                    const rowsData = (0,utils_data/* convertColumnToRowViaFieldsType */.ml)(frames[0], tableFields);
                    setTopData(rowsData);
                },
                error: (err)=>{
                    console.log('Fetch Error', err);
                    setTopData([]);
                }
            });
        })(), [
        buildLuceneWhereClause,
        currentCatalog,
        currentDate,
        currentDatabase,
        currentIndexes,
        currentTable,
        currentTimeField,
        dataFilter,
        page,
        searchType,
        searchValue,
        selectdbDS,
        setTopData,
        tableFields
    ]);
    const getTableDataCount = (0,external_react_.useCallback)(()=>useDiscoverData_async_to_generator(function*() {
            var _currentDate_;
            if (!currentTable || !currentDatabase || !selectdbDS) {
                return;
            }
            const autoInterval = (0,constants/* getAutoInterval */.Vy)(currentDate);
            const timeInterval = interval === constants/* IntervalEnum */.Bg.Auto ? autoInterval.interval_unit : interval;
            const timeIntervalValue = interval === constants/* IntervalEnum */.Bg.Auto ? autoInterval.interval_value : 1;
            const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
            const payload = {
                catalog: 'internal',
                database: currentDatabase,
                table: currentTable,
                timeField: currentTimeField,
                startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
                endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
                cluster: '',
                sort: 'DESC',
                interval: timeInterval,
                data_filters: [],
                interval_value: timeIntervalValue,
                search_type: searchType,
                indexes: indexesStatement
            };
            if (dataFilter.length > 0) {
                payload.data_filters = dataFilter;
            }
            if (searchType === 'Lucene') {
                try {
                    const luceneWhere = yield buildLuceneWhereClause();
                    if (luceneWhere) {
                        payload.lucene_where = luceneWhere;
                    }
                } catch (error) {
                    console.error('Lucene query build failed', error);
                    setTableTotalCount(0);
                    return;
                }
            }
            if (searchValue && searchType !== 'Lucene') {
                payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
            }
            getTableDataCountService(useDiscoverData_object_spread({
                selectdbDS
            }, payload)).subscribe({
                next: ({ data, ok })=>{
                    var _frame_fields_;
                    setLoading((prev)=>useDiscoverData_object_spread_props(useDiscoverData_object_spread({}, prev), {
                            getTableDataCount: false
                        }));
                    if (!ok) {
                        // Clear count when backend reports failure
                        setTableTotalCount(0);
                        return;
                    }
                    const frame = (0,data_.toDataFrame)(data.results.getTableCountData.frames[0]);
                    const totalCount = (_frame_fields_ = frame.fields[0]) === null || _frame_fields_ === void 0 ? void 0 : _frame_fields_.values[0];
                    if (!totalCount) {
                        setTableTotalCount(0);
                        return;
                    }
                    setTableTotalCount(totalCount);
                },
                error: (err)=>{
                    // Ensure we clear the count on error so UI doesn't keep previous value
                    setTableTotalCount(0);
                    console.log('Fetch Error', err);
                }
            });
        })(), [
        buildLuceneWhereClause,
        currentDate,
        currentDatabase,
        currentIndexes,
        currentTable,
        currentTimeField,
        dataFilter,
        interval,
        searchType,
        searchValue,
        selectdbDS,
        setTableTotalCount,
        tableFields
    ]);
    const getTraceData = (0,external_react_.useCallback)((trace_id, table, callback)=>{
        var _currentDate_;
        const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
        const payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: table || currentTable || 'otel_traces',
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            cluster: '',
            sort: 'DESC',
            search_type: searchType,
            indexes: '',
            page: page,
            page_size: pageSize,
            trace_id
        };
        if (searchType === 'Search') {
            payload.indexes_statement = indexesStatement;
        }
        payload.data_filters = dataFilter.length > 0 ? dataFilter : [];
        if (searchValue) {
            payload.search_value = (0,utils_data/* encodeBase64 */.WG)(searchValue);
        }
        (0,traces/* getTableDataTraceService */.hA)(useDiscoverData_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                callback && callback(data.results.getTableDataTrace.status);
                if (!ok) {
                    message/* default */.Ay.error('Failed to request trace');
                    return;
                }
                const formattedData = (0,utils_data/* formatTracesResData */.O1)(data.results.getTableDataTrace.frames[0]);
                setTraceData(formattedData);
            },
            error: (err)=>{
                // Clear trace data on error
                setTraceData([]);
                console.log('Fetch Error', err);
                callback && callback(err.status);
                message/* default */.Ay.error('Failed to request trace');
                setTraceData(null);
            }
        });
    }, [
        currentCatalog,
        currentDate,
        currentDatabase,
        currentIndexes,
        currentTable,
        currentTimeField,
        dataFilter,
        page,
        pageSize,
        searchType,
        searchValue,
        selectdbDS,
        setTraceData,
        tableFields
    ]);
    const clearData = (0,external_react_.useCallback)(()=>{
        setTableDataCharts([]);
        setTableTotalCount(0);
        setTableData([]);
        setTopData([]);
    }, [
        setTableData,
        setTableDataCharts,
        setTableTotalCount,
        setTopData
    ]);
    const refreshData = (0,external_react_.useCallback)(({ skipPageReset = false } = {})=>{
        if (!skipPageReset) {
            setPage(1);
        }
        if (!currentTimeField) {
            clearData();
            return;
        }
        void getTableDataCharts();
        void getTableDataCount();
        void getTableData();
        void getTopData();
    }, [
        clearData,
        currentTimeField,
        getTableData,
        getTableDataCharts,
        getTableDataCount,
        getTopData,
        setPage
    ]);
    const handleQuerying = (0,external_react_.useCallback)(()=>{
        if (!currentTimeField) {
            clearData();
            return;
        }
        refreshData();
    }, [
        clearData,
        currentTimeField,
        refreshData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!currentTimeField) {
            return;
        }
        void getTableData();
        void getTopData();
        void getTableDataCharts();
        void getTableDataCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentTimeField,
        page
    ]);
    (0,external_react_.useEffect)(()=>{
        refreshData({
            skipPageReset: false
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentDate,
        currentTimeField,
        dataFilter,
        interval
    ]);
    return {
        loading,
        onQuerying: handleQuerying,
        getTraceData
    };
}

;// ./pages/PageDiscover.tsx











function PageDiscover() {
    const theme = (0,ui_.useTheme2)();
    const { loading, onQuerying, getTraceData } = useDiscoverData();
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                & > div > div {
                    background-color: ${theme.isDark ? '#111217' : '#F4F5F5'};
                    padding: 0 1rem;
                }
            `
    }, /*#__PURE__*/ external_react_default().createElement(runtime_.PluginPage, {
        pageNav: {
            text: ''
        }
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        "data-testid": testIds/* testIds */.b.pageTwo.container
    }, /*#__PURE__*/ external_react_default().createElement(DiscoverHeader, {
        onQuerying: onQuerying,
        loading: loading.getTableData || loading.getTableDataCharts
    }), /*#__PURE__*/ external_react_default().createElement(DiscoverFilter, null)), /*#__PURE__*/ external_react_default().createElement("section", {
        className: (0,css_.css)`
                        display: grid;
                        grid-template-columns: 2fr 8fr;
                        grid-template-rows: 1fr;
                        grid-template-areas: 'sidebar content';
                        padding-top: 0.5rem;
                        gap: 0.5rem;
                    `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        style: {
            height: 'calc(100vh - 210px)'
        }
    }, /*#__PURE__*/ external_react_default().createElement(DiscoverSidebar, null)), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                            grid-area: content;
                            display: flex;
                            flex-direction: column;
                            overflow: auto;
                            height: calc(100vh - 210px);
                            background-color: ${theme.isDark ? 'rgb(24, 27, 31)' : '#FFF'};
                            position: relative;
                            padding: 16px 0;
                        `
    }, /*#__PURE__*/ external_react_default().createElement("div", {
        style: {
            position: 'absolute',
            top: 0,
            width: '100%'
        }
    }, loading.getTableDataCharts && /*#__PURE__*/ external_react_default().createElement(ui_.LoadingBar, {
        width: 100
    })), /*#__PURE__*/ external_react_default().createElement(DiscoverHistogram, null), /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                                margin-top: 24px;
                            `
    }, /*#__PURE__*/ external_react_default().createElement(DiscoverContent, {
        getTraceData: getTraceData,
        fetchNextPage: ()=>{}
    }))))));
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


/***/ })

}]);
//# sourceMappingURL=382.js.map?_cache=e94df3781c745de07e6e