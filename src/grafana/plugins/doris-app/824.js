"use strict";
(self["webpackChunkdoris_app"] = self["webpackChunkdoris_app"] || []).push([[824],{

/***/ 6824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PageTrace)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5959);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// ../node_modules/.pnpm/lucide-react@0.513.0_react@17.0.2/node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map

;// ../node_modules/.pnpm/lucide-react@0.513.0_react@17.0.2/node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// ../node_modules/.pnpm/lucide-react@0.513.0_react@17.0.2/node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,external_react_.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,external_react_.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,external_react_.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map

;// ../node_modules/.pnpm/lucide-react@0.513.0_react@17.0.2/node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,external_react_.forwardRef)(
    ({ className, ...props }, ref) => (0,external_react_.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map

;// ../node_modules/.pnpm/lucide-react@0.513.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/circle-help.js
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode);


//# sourceMappingURL=circle-help.js.map

// EXTERNAL MODULE: external "@grafana/ui"
var ui_ = __webpack_require__(2007);
// EXTERNAL MODULE: ../node_modules/.pnpm/jotai@2.15.0_@babel+core@7.28.4_@babel+template@7.27.2_@types+react@19.2.2_react@17.0.2/node_modules/jotai/esm/react.mjs
var react = __webpack_require__(122);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@5.27.6_date-fns@2.30.0_moment@2.29.4_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/antd/es/tooltip/index.js + 91 modules
var tooltip = __webpack_require__(8644);
// EXTERNAL MODULE: ./store/traces.ts
var store_traces = __webpack_require__(8882);
// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(6089);
// EXTERNAL MODULE: ./store/discover.ts
var discover = __webpack_require__(2539);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(8763);
;// ./components/traces/search-sidebar/index.tsx
'use client';









function SearchSidebar(props) {
    const tracesServices = (0,react/* useAtomValue */.md)(store_traces/* tracesServicesAtom */.E);
    const traceOperations = (0,react/* useAtomValue */.md)(store_traces/* traceOperationsAtom */.VA);
    const [currentService, setCurrentService] = (0,react/* useAtom */.fp)(store_traces/* currentServiceAtom */.gL);
    const [currentOperation, setCurrentOperation] = (0,react/* useAtom */.fp)(store_traces/* currentOperationAtom */.mH);
    const [tags, setTags] = (0,react/* useAtom */.fp)(store_traces/* tagsAtom */.jB);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [minDuration, setMinDuration] = (0,react/* useAtom */.fp)(store_traces/* minDurationAtom */.oC);
    const [maxDuration, setMaxDuration] = (0,react/* useAtom */.fp)(store_traces/* maxDurationAtom */.uS);
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
                                `
        }, "Tags", /*#__PURE__*/ external_react_default().createElement(tooltip/* default */.A, {
            title: /*#__PURE__*/ external_react_default().createElement("div", null, "Filter traces using ", /*#__PURE__*/ external_react_default().createElement("a", {
                className: (0,css_.css)`font-weight:500px;color:#3D71D9;`,
                href: "https://brandur.org/logfmt",
                target: "_blank"
            }, "logfmt"), " syntax:", /*#__PURE__*/ external_react_default().createElement("br", null), /*#__PURE__*/ external_react_default().createElement("ul", {
                className: (0,css_.css)`list-style-type: disc;list-style-position: inside;`
            }, /*#__PURE__*/ external_react_default().createElement("li", null, "Equality: http.status_code=200"), /*#__PURE__*/ external_react_default().createElement("li", null, "Inequality: error!=true"), /*#__PURE__*/ external_react_default().createElement("li", null, 'Contains: message~="timeout"'), /*#__PURE__*/ external_react_default().createElement("li", null, "Multiple (AND): method=POST duration>1000"), /*#__PURE__*/ external_react_default().createElement("li", null, "OR conditions: error=true OR status>=500")))
        }, /*#__PURE__*/ external_react_default().createElement(CircleHelp, {
            size: 16,
            className: (0,css_.css)`
                                        margin-left: 4px;
                                    `
        }))),
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
            const value = (0,utils/* trimSpacesAroundEquals */.gw)((_e_target1 = e.target) === null || _e_target1 === void 0 ? void 0 : _e_target1.value);
            setTags(value);
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

                &:hover {
                    background-color: rgb(34, 37, 43);
                    cursor: pointer;
                }
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

// EXTERNAL MODULE: ../node_modules/.pnpm/echarts-for-react@3.0.2_echarts@5.6.0_react@17.0.2/node_modules/echarts-for-react/esm/index.js + 557 modules
var esm = __webpack_require__(4059);
// EXTERNAL MODULE: ./components/trace-detail/index.tsx
var trace_detail = __webpack_require__(7273);
;// ./components/traces/traces-viewer/index.tsx









const TraceView = /*#__PURE__*/ external_react_default().memo(({ traces: propTraces, onSortByChange })=>{
    var _propTraces_;
    const theme = (0,ui_.useTheme2)();
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const pageSize = (0,react/* useAtomValue */.md)(discover/* pageSizeAtom */.Ol);
    const total = ((_propTraces_ = propTraces[0]) === null || _propTraces_ === void 0 ? void 0 : _propTraces_.total) || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const traces = propTraces || [];
    const [sort, setSort] = (0,react/* useAtom */.fp)(store_traces/* currentSortAtom */.fy);
    const [drawerOpen, setDrawerOpen] = external_react_default().useState(false);
    const [traceId, setTraceId] = external_react_default().useState('');
    // 预处理 series 数据，计算 symbolSize
    const seriesData = (0,external_react_.useMemo)(()=>{
        return traces.map((s)=>({
                name: `${s.root_service}:${s.operation}`,
                spans: s.spans,
                value: s.trace_duration_ms,
                trace_id: s.trace_id,
                symbolSize: Math.max(12, Math.min(30, s.spans || 1))
            }));
    }, [
        traces
    ]);
    const option = (0,external_react_.useMemo)(()=>{
        return {
            tooltip: {
                trigger: 'item',
                padding: 0,
                borderWidth: 0,
                backgroundColor: theme.isLight ? '#ffffff' : 'rgba(63, 63, 69, 0.64)',
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
                    type: 'scatter',
                    data: seriesData,
                    symbolSize: (data)=>data.symbolSize
                }
            ]
        };
    }, [
        seriesData,
        traces,
        theme
    ]);
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
        option: option,
        notMerge: false,
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
            onSortByChange(option.value);
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
        numberOfPages: Math.ceil(total / pageSize) || 1,
        onNavigate: (toPage)=>setPage(toPage)
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
});

// EXTERNAL MODULE: ../node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(228);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.11.1_@types+react@19.2.2_react@17.0.2__@types+react@19.2.2_react@17.0.2/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 8 modules
var emotion_styled_browser_esm = __webpack_require__(31);
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
var utils_data = __webpack_require__(9008);
// EXTERNAL MODULE: ./constants.ts + 1 modules
var constants = __webpack_require__(2560);
// EXTERNAL MODULE: ./services/metaservice.ts
var metaservice = __webpack_require__(6965);
// EXTERNAL MODULE: external "@grafana/data"
var data_ = __webpack_require__(7781);
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
    // const catalogs = useAtomValue(catalogAtom);
    const setIndexes = (0,react/* useSetAtom */.Xr)(discover/* indexesAtom */.Eq);
    const [discoverCurrent, setDiscoverCurrent] = (0,react/* useAtom */.fp)(discover/* discoverCurrentAtom */.WN);
    if (false) // removed by dead control flow
{}
    const setLoc = (0,react/* useSetAtom */.Xr)(discover/* locationAtom */.JT);
    const setTableFields = (0,react/* useSetAtom */.Xr)(discover/* tableFieldsAtom */.D_);
    const [timeFields, setTimeFields] = (0,react/* useAtom */.fp)(discover/* timeFieldsAtom */.Gg);
    const [_currentDate, setCurrentDate] = (0,react/* useAtom */.fp)(discover/* currentDateAtom */.Zb);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [currentIndex, setCurrentIndex] = (0,react/* useAtom */.fp)(discover/* currentIndexAtom */.TY);
    const searchFocus = (0,react/* useAtomValue */.md)(discover/* searchFocusAtom */.MM);
    const [selectedDatasource, setSelectedDatasource] = (0,react/* useAtom */.fp)(discover/* selectedDatasourceAtom */.SW);
    const [timeRange, setTimeRange] = (0,react/* useAtom */.fp)(discover/* timeRangeAtom */.U9);
    const [currentTable, setCurrentTable] = (0,react/* useAtom */.fp)(store_traces/* currentTraceTableAtom */.AZ);
    const [databases, setDatabases] = (0,react/* useAtom */.fp)(discover/* databasesAtom */.SK);
    const [tables, setTables] = (0,react/* useAtom */.fp)(discover/* tablesAtom */.b9);
    const [_datasources, setDataSource] = (0,react/* useAtom */.fp)(discover/* datasourcesAtom */.ui);
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
        if (!selectdbDS) {
            return;
        }
        const subscription = (0,metaservice/* getDatabases */.Hm)(selectdbDS).subscribe({
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
        return ()=>subscription.unsubscribe();
    }, [
        selectdbDS,
        setDatabases
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
                        setDiscoverCurrent(_object_spread_props(_object_spread({}, discoverCurrent), {
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
            setDiscoverCurrent(_object_spread_props(_object_spread({}, discoverCurrent), {
                table: selectedTable.value
            }));
            setCurrentTable(selectedTable.value);
            getFields(selectedTable);
            getIndexes(selectedTable);
        }
    }))), !searchFocus && /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Time Field"
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

// EXTERNAL MODULE: ./services/traces.ts + 1 modules
var services_traces = __webpack_require__(4338);
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














function PageTrace() {
    const theme = (0,ui_.useTheme2)();
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const currentTable = (0,react/* useAtomValue */.md)(store_traces/* currentTraceTableAtom */.AZ);
    const currentCatalog = (0,react/* useAtomValue */.md)(discover/* currentCatalogAtom */.K0);
    const currentDatabase = (0,react/* useAtomValue */.md)(discover/* currentDatabaseAtom */.Cf);
    const currentDate = (0,react/* useAtomValue */.md)(discover/* currentDateAtom */.Zb);
    const selectdbDS = (0,react/* useAtomValue */.md)(discover/* selectedDatasourceAtom */.SW);
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const pageSize = (0,react/* useAtomValue */.md)(discover/* pageSizeAtom */.Ol);
    const [traces, setTraces] = (0,react/* useAtom */.fp)(store_traces/* tracesAtom */.ok);
    const setTracesServices = (0,react/* useSetAtom */.Xr)(store_traces/* tracesServicesAtom */.E);
    const setTraceOperations = (0,react/* useSetAtom */.Xr)(store_traces/* traceOperationsAtom */.VA);
    const [loading, setLoading] = external_react_default().useState(false);
    const currentService = (0,react/* useAtomValue */.md)(store_traces/* currentServiceAtom */.gL);
    const currentOperation = (0,react/* useAtomValue */.md)(store_traces/* currentOperationAtom */.mH);
    const tags = (0,react/* useAtomValue */.md)(store_traces/* tagsAtom */.jB);
    const minDuration = (0,react/* useAtomValue */.md)(store_traces/* minDurationAtom */.oC);
    const maxDuration = (0,react/* useAtomValue */.md)(store_traces/* maxDurationAtom */.uS);
    const sort = (0,react/* useAtomValue */.md)(store_traces/* currentSortAtom */.fy);
    const getTraces = external_react_default().useCallback(()=>{
        var _currentDate_;
        if (!currentTable || !currentDatabase || !selectdbDS) {
            return;
        }
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
            sortBy: sort
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
        (0,services_traces/* getTracesService */.Cy)(PageTrace_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    const rowsData = (0,utils_data/* convertColumnToRow */.HL)(data.results.getTraces.frames[0]);
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
                console.log('Fetch Error', err);
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
        if (!currentTable || !currentDatabase || !selectdbDS) {
            return;
        }
        let payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            cluster: ''
        };
        (0,services_traces/* getServiceListService */.FC)(PageTrace_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    const frame = (0,data_.toDataFrame)(data.results.getServiceList.frames[0]);
                    const values = Array.from(frame.fields[0].values);
                    if (values) {
                        const options = values.map((item)=>{
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
            },
            error: (err)=>{
                setLoading(false);
                console.log('Fetch Error', err);
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
            service_name: currentService.value,
            cluster: ''
        };
        (0,services_traces/* getOperationListService */.jo)(PageTrace_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading(false);
                if (ok) {
                    // const frame = toDataFrame(data.results.getOperationList.frames[0]);
                    // const values = Array.from(frame.fields[0].values);
                    // const values = frame.data.values
                    const values = data.results.getOperationList.frames[0].data.values[0];
                    if (values) {
                        const options = values.map((item)=>{
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
            },
            error: (err)=>{
                setLoading(false);
                console.log('Fetch Error', err);
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
        if (currentTimeField && currentTable && currentCatalog && currentDatabase && currentDate) {
            getTracesServices();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentTimeField,
        currentDate,
        sort
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentTimeField && currentTable && currentCatalog && currentDatabase && currentService) {
            getTracesOperations();
        }
    }, [
        currentTimeField,
        currentService,
        getTracesOperations,
        currentTable,
        currentCatalog,
        currentDatabase
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: (0,css_.css)`
                height: 100%;
                width: 100%;
                overflow: hidden;
                & > div {
                    height: 100%;
                }
                & > div > div {
                    padding: 0 1rem;
                    height: 100%;
                }
            `
    }, /*#__PURE__*/ external_react_default().createElement(runtime_.PluginPage, {
        pageNav: {
            text: ''
        }
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
    })))));
}


/***/ })

}]);
//# sourceMappingURL=824.js.map?_cache=82f7b759265fefdd1d12