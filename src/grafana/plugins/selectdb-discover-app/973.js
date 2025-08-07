"use strict";
(self["webpackChunkselectdb_discover_app"] = self["webpackChunkselectdb_discover_app"] || []).push([[973],{

/***/ 5365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(278);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        --background: 215 100% 95%;
        --foreground: 240 10% 14%;

        --muted: 0 0% 96.1%;
        --muted-foreground: 0 0% 45.1%;

        --popover: 0 0% 100%;
        --popover-foreground: 240 10% 14%;

        --border: 240 2% 88%;
        --input: 240 2% 75%;

        --card: 0 0% 100%;
        --card-foreground: 0 0% 3.9%;

        --primary: 240 2% 88%;
        --primary-foreground: 0 0% 98%;

        --secondary: 0 0% 96.1%;
        --secondary-foreground: 0 0% 9%;

        --accent: 215 100% 95%;
        --accent-foreground: 215 100% 95%;

        --destructive: 0 86% 63%;
        --destructive-foreground: 0 0% 98%;

        --ring: 0 0% 3.9%;

        --radius: 0.5rem;

        --table-header-background: 214 100% 97%;

        /* Primary Color */
        --b1: 215 100% 95%;
        --b2: 215 94% 87%;
        --b3: 216 96% 79%;
        --b4: 216 97% 72%;
        --b5: 216 98% 65%;
        --b6: 216 98% 57%;
        --b7: 216 100% 50%;
        --b8: 216 100% 42%;

        /* 中性色板 (Neutral color) */
        --n1: 240 100% 2%;
        --n2: 240 10% 14%;
        --n3: 240 5% 26%;
        --n4: 240 3% 38%;
        --n5: 240 2% 51%;
        --n6: 240 2% 63%;
        --n7: 240 2% 75%;
        --n8: 0 0% 100%;
        --n9: 240 2% 88%;

        /* Success Color */
        --g1: 134 100% 35%;
        --g2: 132 70% 45%;
        --g3: 136 100% 30%;
        --g4: 128 63% 68%;
        --g5: 126 68% 81%;
        --g6: 125 100% 95%;

        /* Warning Color */
        --o1: 29 100% 50%;
        --o2: 31 100% 59%;
        --o3: 33 100% 41%;
        --o4: 35 100% 77%;
        --o5: 37 100% 86%;
        --o6: 39 100% 94%;

        /* Error Color */
        --r1: 0 86% 63%;
        --r2: 2 87% 71%;
        --r3: 4 66% 52%;
        --r4: 6 86% 78%;
        --r5: 8 86% 89%;
        --r6: 10 89% 96%;

        --chart-1: 12 76% 61%;
        --chart-2: 173 58% 39%;
        --chart-3: 197 37% 24%;
        --chart-4: 43 74% 66%;
        --chart-5: 27 87% 67%;
        --sidebar-background: 215 100% 95%;
        --sidebar-foreground: 240 5.3% 26.1%;
        --sidebar-primary: 240 5.9% 10%;
        --sidebar-primary-foreground: 0 0% 98%;
        --sidebar-accent: 0 0% 100%;
        --sidebar-accent-foreground: 240 10% 14%;
        --sidebar-border: 220 13% 91%;
        --sidebar-ring: 217.2 91.2% 59.8%;
    }

    .theme-dark {
        --background: 240 100% 1.96%;
        --foreground: 213 31% 91%;

        --muted: 240 3.7% 15.9%;
        --muted-foreground: 240 3% 38%;
        --accent: 240 5% 26%;
        --accent-foreground: 240 5% 26%;

        /* --muted: 223 47% 11%;
    --muted-foreground: 240 3% 94%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%; */

        --popover: 240 5% 26%;
        --popover-foreground: 215 20.2% 65.1%;

        --border-dark: 240 5% 26%;
        --input: 240 5% 26%;

        --card: 0 0% 0%;
        --card-foreground: 213 31% 91%;

        --primary: 223, 100%, 69%;
        --primary-foreground: 222.2 47.4% 1.2%;

        --secondary: 222.2 47.4% 11.2%;
        --secondary-foreground: 210 40% 98%;

        --destructive: 0 86% 63%;
        --destructive-foreground: 210 40% 98%;

        --ring: 216 34% 17%;

        --radius: 0.5rem;

        --table-header-background-dark: 240 5% 26%;

        /* Primary Color */
        --b1: 223 100% 90%;
        --b2: 223 100% 79%;
        --b3: 223 100% 69%;
        --b4: 223 98% 58%;
        --b5: 223 71% 44%;
        --b6: 222 72% 29%;
        --b7: 221 73% 15%;
        --b8: 226 33% 18%;

        /* 中性色板 (Neutral color) */
        --n1: 0 0% 100%;
        --n2: 240 3% 94%;
        --n3: 240 2% 75%;
        --n4: 240 2% 63%;
        --n5: 240 2% 51%;
        --n6: 240 3% 38%;
        --n7: 240 5% 26%;
        --n8: 240 10% 14%;
        --n9: 240 100% 2%;

        /* Success Color */
        --g1: 132 70% 45%;
        --g2: 134 100% 35%;
        --g3: 136 82% 26%;
        --g4: 138 65% 22%;
        --g5: 143 42% 17%;
        --g6: 158 21% 15%;

        /* Warning Color */
        --o1: 31 100% 59%;
        --o2: 29 100% 50%;
        --o3: 29 83% 35%;
        --o4: 28 68% 28%;
        --o5: 26 43% 21%;
        --o6: 17 15% 18%;

        /* Error Color */
        --r1: 2 87% 71%;
        --r2: 0 86% 63%;
        --r3: 358 45% 43%;
        --r4: 356 39% 33%;
        --r5: 351 28% 22%;
        --r6: 330 13% 18%;

        --chart-1: 220 70% 50%;
        --chart-2: 160 60% 45%;
        --chart-3: 30 80% 55%;
        --chart-4: 280 65% 60%;
        --chart-5: 340 75% 55%;
        --sidebar-background: 255 5.9% 10%;
        --sidebar-foreground: 240 4.8% 95.9%;
        --sidebar-primary: 224.3 76.3% 48%;
        --sidebar-primary-foreground: 0 0% 100%;
        --sidebar-accent: 240 5% 26%;
        --sidebar-accent-foreground: 240 3% 94%;
        --sidebar-border: 240 3.7% 15.9%;
        --sidebar-ring: 217.2 91.2% 59.8%;
    }
}

@layer base {
    * {
        @apply border-border;
    }

    input {
        @apply border-input;
    }

    input:focus-visible,
    select:focus-visible,
    button:focus-visible {
        @apply focus-visible:ring-0 focus-visible:ring-offset-0;
    }

    button:focus {
        @apply focus:ring-0 focus:ring-offset-0;
    }

    html {
        font-size: 16px;
    }
    body {
        @apply bg-background text-foreground;
        font-feature-settings:
            'rlig' 1,
            'calt' 1;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        box-shadow: 0 0 0px 1000px hsl(0 0% 100%) inset !important;
        -webkit-text-fill-color: #000 !important;
    }

    .dark {
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
            box-shadow: 0 0 0px 1000px hsl(240 10% 14%) inset !important;
            -webkit-text-fill-color: #efeff0 !important;
        }
    }
}

@layer components {
    .icon-hover-close {
        @apply dark:hover:bg-n7/80 hover:bg-b2/80 hover:text-n2 hover:p-[2px] rounded p-[2px];
    }

    .icon-hover {
        @apply hover:bg-n6/40 hover:text-n2 hover:p-1 rounded p-1;
    }
}

.ant-menu-submenu-popup {
    display: none !important;
}
`, "",{"version":3,"sources":["webpack://./styles/tailwind.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB;;AAEnB;IACI;QACI,0BAA0B;QAC1B,yBAAyB;;QAEzB,mBAAmB;QACnB,8BAA8B;;QAE9B,oBAAoB;QACpB,iCAAiC;;QAEjC,oBAAoB;QACpB,mBAAmB;;QAEnB,iBAAiB;QACjB,4BAA4B;;QAE5B,qBAAqB;QACrB,8BAA8B;;QAE9B,uBAAuB;QACvB,+BAA+B;;QAE/B,sBAAsB;QACtB,iCAAiC;;QAEjC,wBAAwB;QACxB,kCAAkC;;QAElC,iBAAiB;;QAEjB,gBAAgB;;QAEhB,uCAAuC;;QAEvC,kBAAkB;QAClB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,kBAAkB;QAClB,kBAAkB;;QAElB,yBAAyB;QACzB,iBAAiB;QACjB,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,eAAe;QACf,gBAAgB;;QAEhB,kBAAkB;QAClB,kBAAkB;QAClB,iBAAiB;QACjB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,kBAAkB;;QAElB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;;QAEjB,gBAAgB;QAChB,eAAe;QACf,eAAe;QACf,eAAe;QACf,eAAe;QACf,eAAe;QACf,gBAAgB;;QAEhB,qBAAqB;QACrB,sBAAsB;QACtB,sBAAsB;QACtB,qBAAqB;QACrB,qBAAqB;QACrB,kCAAkC;QAClC,oCAAoC;QACpC,+BAA+B;QAC/B,sCAAsC;QACtC,2BAA2B;QAC3B,wCAAwC;QACxC,6BAA6B;QAC7B,iCAAiC;IACrC;;IAEA;QACI,4BAA4B;QAC5B,yBAAyB;;QAEzB,uBAAuB;QACvB,8BAA8B;QAC9B,oBAAoB;QACpB,+BAA+B;;QAE/B;;;;uCAI+B;;QAE/B,qBAAqB;QACrB,qCAAqC;;QAErC,yBAAyB;QACzB,mBAAmB;;QAEnB,eAAe;QACf,8BAA8B;;QAE9B,yBAAyB;QACzB,sCAAsC;;QAEtC,8BAA8B;QAC9B,mCAAmC;;QAEnC,wBAAwB;QACxB,qCAAqC;;QAErC,mBAAmB;;QAEnB,gBAAgB;;QAEhB,0CAA0C;;QAE1C,kBAAkB;QAClB,kBAAkB;QAClB,kBAAkB;QAClB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;;QAEjB,yBAAyB;QACzB,eAAe;QACf,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,iBAAiB;QACjB,iBAAiB;;QAEjB,kBAAkB;QAClB,iBAAiB;QACjB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;;QAEjB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;QAChB,gBAAgB;;QAEhB,gBAAgB;QAChB,eAAe;QACf,eAAe;QACf,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;QACjB,iBAAiB;;QAEjB,sBAAsB;QACtB,sBAAsB;QACtB,qBAAqB;QACrB,sBAAsB;QACtB,sBAAsB;QACtB,kCAAkC;QAClC,oCAAoC;QACpC,kCAAkC;QAClC,uCAAuC;QACvC,4BAA4B;QAC5B,uCAAuC;QACvC,gCAAgC;QAChC,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,oBAAoB;IACxB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;;;QAGI,uDAAuD;IAC3D;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,eAAe;IACnB;IACA;QACI,oCAAoC;QACpC;;oBAEY;IAChB;;IAEA;;;;QAII,0DAA0D;QAC1D,wCAAwC;IAC5C;;IAEA;QACI;;;;YAII,4DAA4D;YAC5D,2CAA2C;QAC/C;IACJ;AACJ;;AAEA;IACI;QACI,qFAAqF;IACzF;;IAEA;QACI,yDAAyD;IAC7D;AACJ;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n    :root {\n        --background: 215 100% 95%;\n        --foreground: 240 10% 14%;\n\n        --muted: 0 0% 96.1%;\n        --muted-foreground: 0 0% 45.1%;\n\n        --popover: 0 0% 100%;\n        --popover-foreground: 240 10% 14%;\n\n        --border: 240 2% 88%;\n        --input: 240 2% 75%;\n\n        --card: 0 0% 100%;\n        --card-foreground: 0 0% 3.9%;\n\n        --primary: 240 2% 88%;\n        --primary-foreground: 0 0% 98%;\n\n        --secondary: 0 0% 96.1%;\n        --secondary-foreground: 0 0% 9%;\n\n        --accent: 215 100% 95%;\n        --accent-foreground: 215 100% 95%;\n\n        --destructive: 0 86% 63%;\n        --destructive-foreground: 0 0% 98%;\n\n        --ring: 0 0% 3.9%;\n\n        --radius: 0.5rem;\n\n        --table-header-background: 214 100% 97%;\n\n        /* Primary Color */\n        --b1: 215 100% 95%;\n        --b2: 215 94% 87%;\n        --b3: 216 96% 79%;\n        --b4: 216 97% 72%;\n        --b5: 216 98% 65%;\n        --b6: 216 98% 57%;\n        --b7: 216 100% 50%;\n        --b8: 216 100% 42%;\n\n        /* 中性色板 (Neutral color) */\n        --n1: 240 100% 2%;\n        --n2: 240 10% 14%;\n        --n3: 240 5% 26%;\n        --n4: 240 3% 38%;\n        --n5: 240 2% 51%;\n        --n6: 240 2% 63%;\n        --n7: 240 2% 75%;\n        --n8: 0 0% 100%;\n        --n9: 240 2% 88%;\n\n        /* Success Color */\n        --g1: 134 100% 35%;\n        --g2: 132 70% 45%;\n        --g3: 136 100% 30%;\n        --g4: 128 63% 68%;\n        --g5: 126 68% 81%;\n        --g6: 125 100% 95%;\n\n        /* Warning Color */\n        --o1: 29 100% 50%;\n        --o2: 31 100% 59%;\n        --o3: 33 100% 41%;\n        --o4: 35 100% 77%;\n        --o5: 37 100% 86%;\n        --o6: 39 100% 94%;\n\n        /* Error Color */\n        --r1: 0 86% 63%;\n        --r2: 2 87% 71%;\n        --r3: 4 66% 52%;\n        --r4: 6 86% 78%;\n        --r5: 8 86% 89%;\n        --r6: 10 89% 96%;\n\n        --chart-1: 12 76% 61%;\n        --chart-2: 173 58% 39%;\n        --chart-3: 197 37% 24%;\n        --chart-4: 43 74% 66%;\n        --chart-5: 27 87% 67%;\n        --sidebar-background: 215 100% 95%;\n        --sidebar-foreground: 240 5.3% 26.1%;\n        --sidebar-primary: 240 5.9% 10%;\n        --sidebar-primary-foreground: 0 0% 98%;\n        --sidebar-accent: 0 0% 100%;\n        --sidebar-accent-foreground: 240 10% 14%;\n        --sidebar-border: 220 13% 91%;\n        --sidebar-ring: 217.2 91.2% 59.8%;\n    }\n\n    .theme-dark {\n        --background: 240 100% 1.96%;\n        --foreground: 213 31% 91%;\n\n        --muted: 240 3.7% 15.9%;\n        --muted-foreground: 240 3% 38%;\n        --accent: 240 5% 26%;\n        --accent-foreground: 240 5% 26%;\n\n        /* --muted: 223 47% 11%;\n    --muted-foreground: 240 3% 94%;\n\n    --accent: 216 34% 17%;\n    --accent-foreground: 210 40% 98%; */\n\n        --popover: 240 5% 26%;\n        --popover-foreground: 215 20.2% 65.1%;\n\n        --border-dark: 240 5% 26%;\n        --input: 240 5% 26%;\n\n        --card: 0 0% 0%;\n        --card-foreground: 213 31% 91%;\n\n        --primary: 223, 100%, 69%;\n        --primary-foreground: 222.2 47.4% 1.2%;\n\n        --secondary: 222.2 47.4% 11.2%;\n        --secondary-foreground: 210 40% 98%;\n\n        --destructive: 0 86% 63%;\n        --destructive-foreground: 210 40% 98%;\n\n        --ring: 216 34% 17%;\n\n        --radius: 0.5rem;\n\n        --table-header-background-dark: 240 5% 26%;\n\n        /* Primary Color */\n        --b1: 223 100% 90%;\n        --b2: 223 100% 79%;\n        --b3: 223 100% 69%;\n        --b4: 223 98% 58%;\n        --b5: 223 71% 44%;\n        --b6: 222 72% 29%;\n        --b7: 221 73% 15%;\n        --b8: 226 33% 18%;\n\n        /* 中性色板 (Neutral color) */\n        --n1: 0 0% 100%;\n        --n2: 240 3% 94%;\n        --n3: 240 2% 75%;\n        --n4: 240 2% 63%;\n        --n5: 240 2% 51%;\n        --n6: 240 3% 38%;\n        --n7: 240 5% 26%;\n        --n8: 240 10% 14%;\n        --n9: 240 100% 2%;\n\n        /* Success Color */\n        --g1: 132 70% 45%;\n        --g2: 134 100% 35%;\n        --g3: 136 82% 26%;\n        --g4: 138 65% 22%;\n        --g5: 143 42% 17%;\n        --g6: 158 21% 15%;\n\n        /* Warning Color */\n        --o1: 31 100% 59%;\n        --o2: 29 100% 50%;\n        --o3: 29 83% 35%;\n        --o4: 28 68% 28%;\n        --o5: 26 43% 21%;\n        --o6: 17 15% 18%;\n\n        /* Error Color */\n        --r1: 2 87% 71%;\n        --r2: 0 86% 63%;\n        --r3: 358 45% 43%;\n        --r4: 356 39% 33%;\n        --r5: 351 28% 22%;\n        --r6: 330 13% 18%;\n\n        --chart-1: 220 70% 50%;\n        --chart-2: 160 60% 45%;\n        --chart-3: 30 80% 55%;\n        --chart-4: 280 65% 60%;\n        --chart-5: 340 75% 55%;\n        --sidebar-background: 255 5.9% 10%;\n        --sidebar-foreground: 240 4.8% 95.9%;\n        --sidebar-primary: 224.3 76.3% 48%;\n        --sidebar-primary-foreground: 0 0% 100%;\n        --sidebar-accent: 240 5% 26%;\n        --sidebar-accent-foreground: 240 3% 94%;\n        --sidebar-border: 240 3.7% 15.9%;\n        --sidebar-ring: 217.2 91.2% 59.8%;\n    }\n}\n\n@layer base {\n    * {\n        @apply border-border;\n    }\n\n    input {\n        @apply border-input;\n    }\n\n    input:focus-visible,\n    select:focus-visible,\n    button:focus-visible {\n        @apply focus-visible:ring-0 focus-visible:ring-offset-0;\n    }\n\n    button:focus {\n        @apply focus:ring-0 focus:ring-offset-0;\n    }\n\n    html {\n        font-size: 16px;\n    }\n    body {\n        @apply bg-background text-foreground;\n        font-feature-settings:\n            'rlig' 1,\n            'calt' 1;\n    }\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus,\n    input:-webkit-autofill:active {\n        box-shadow: 0 0 0px 1000px hsl(0 0% 100%) inset !important;\n        -webkit-text-fill-color: #000 !important;\n    }\n\n    .dark {\n        input:-webkit-autofill,\n        input:-webkit-autofill:hover,\n        input:-webkit-autofill:focus,\n        input:-webkit-autofill:active {\n            box-shadow: 0 0 0px 1000px hsl(240 10% 14%) inset !important;\n            -webkit-text-fill-color: #efeff0 !important;\n        }\n    }\n}\n\n@layer components {\n    .icon-hover-close {\n        @apply dark:hover:bg-n7/80 hover:bg-b2/80 hover:text-n2 hover:p-[2px] rounded p-[2px];\n    }\n\n    .icon-hover {\n        @apply hover:bg-n6/40 hover:text-n2 hover:p-1 rounded p-1;\n    }\n}\n\n.ant-menu-submenu-popup {\n    display: none !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5611:
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

/***/ 5973:
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
// EXTERNAL MODULE: ./components/testIds.ts
var testIds = __webpack_require__(5611);
// EXTERNAL MODULE: external "@grafana/runtime"
var runtime_ = __webpack_require__(8531);
// EXTERNAL MODULE: ../node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(5285);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(6089);
// EXTERNAL MODULE: ../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 8 modules
var emotion_styled_browser_esm = __webpack_require__(2742);
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

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(9315);
// EXTERNAL MODULE: ../node_modules/jotai/esm/react.mjs
var react = __webpack_require__(3689);
// EXTERNAL MODULE: ./store/discover.ts
var discover = __webpack_require__(6247);
// EXTERNAL MODULE: external "@grafana/ui"
var ui_ = __webpack_require__(2007);
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
        {
            label: t`Search`,
            value: 'Search',
            disabled: indexes.length === 0,
            tips: t`Discover.SearchType.Search.DisabledText`
        },
        {
            label: 'SQL',
            value: 'SQL'
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
        title: /*#__PURE__*/ external_react_default().createElement("p", null, "有倒排索引的表支持搜索模式"),
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
    }, /*#__PURE__*/ external_react_default().createElement("span", null, searchMode ? 'Search' : `SQL`), /*#__PURE__*/ external_react_default().createElement("span", {
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
function getWordPosLR(str, currentPos) {
    let posR = currentPos;
    let posL = currentPos;
    while(posR < str.length && str.charAt(posR) !== ' '){
        posR++;
    }
    while(posL >= 0 && str.charAt(posL) !== ' '){
        posL--;
    }
    return [
        posL,
        posR
    ];
}
function SQLSearch({ style, onQuerying }) {
    const searchType = (0,react/* useAtomValue */.md)(discover/* searchTypeAtom */.WM);
    const setSearchFocus = (0,react/* useSetAtom */.Xr)(discover/* searchFocusAtom */.MM);
    const [tableFields, setTableFields] = (0,react/* useAtom */.fp)(discover/* tableFieldsAtom */.D_);
    const [searchValue, setSearchValue] = (0,react/* useAtom */.fp)(discover/* searchValueAtom */.P8);
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
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
        placeholder: searchType === 'SQL' ? "SQL WHERE. e.g.(event_type = 'ForkApplyEvent AND action = 'none')" : 'Keyword'
    });
}

// EXTERNAL MODULE: ./utils/data.ts
var utils_data = __webpack_require__(6700);
// EXTERNAL MODULE: ./constants.ts + 1 modules
var constants = __webpack_require__(2351);
// EXTERNAL MODULE: ./services/metaservice.ts
var metaservice = __webpack_require__(8161);
;// ./components/discover-header/index.tsx
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













function DiscoverHeader(props) {
    const catalog = 'internal';
    // const catalogs = useAtomValue(catalogAtom);
    const setIndexes = (0,react/* useSetAtom */.Xr)(discover/* indexesAtom */.Eq);
    const setSearchType = (0,react/* useSetAtom */.Xr)(discover/* searchTypeAtom */.WM);
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
    // const { databaseList } = useDatabaseList();
    const [activeItem, setActiveItem] = (0,react/* useAtom */.fp)(discover/* activeShortcutAtom */.m_);
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
    const [datasources, setDataSource] = (0,react/* useAtom */.fp)(discover/* datasourcesAtom */.ui);
    const setDisabledOptions = (0,react/* useSetAtom */.Xr)(discover/* disabledOptionsAtom */.IH);
    const searchType = (0,react/* useAtomValue */.md)(discover/* searchTypeAtom */.WM);
    const searchMode = searchType === 'Search';
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
    })), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Mode",
        style: {
            marginLeft: 8,
            marginRight: 8,
            width: '120px'
        }
    }, /*#__PURE__*/ external_react_default().createElement(SearchType, null)), /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
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
                    return _object_spread_props(_object_spread({}, prev), {
                        searchParams
                    });
                });
            }
            props === null || props === void 0 ? void 0 : props.onQuerying();
        },
        variant: "primary",
        className: "h-8",
        icon: (props === null || props === void 0 ? void 0 : props.loading) ? "fa fa-spinner" : 'sync',
        disabled: !currentTimeField
    }, `Query`)));
}

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5292);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(9893);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(9383);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(6884);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9088);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(7997);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!./styles/tailwind.css
var tailwind = __webpack_require__(5365);
;// ./styles/tailwind.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tailwind/* default */.A, options);




       /* harmony default export */ const styles_tailwind = (tailwind/* default */.A && tailwind/* default */.A.locals ? tailwind/* default */.A.locals : undefined);

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

// EXTERNAL MODULE: ../node_modules/nanoid/index.browser.js + 1 modules
var index_browser = __webpack_require__(8987);
// EXTERNAL MODULE: ../node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(4199);
;// ./components/discover-filter/filter-content.tsx
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








function FilterContent({ onHide, dataFilterValue }) {
    var _errors_field, _errors_operator, _errors_label;
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const [dataFilter, setDataFilter] = (0,react/* useAtom */.fp)(discover/* dataFilterAtom */.EA);
    const tableFieldValue = (0,react/* useAtomValue */.md)(discover/* tableFieldValuesAtom */.CL);
    const { control, handleSubmit, watch, register, formState: { errors } } = (0,index_esm/* useForm */.mN)({
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
    const onSubmit = (formValues)=>{
        const { field, operator, value, minValue, maxValue, label } = formValues;
        const current = dataFilter.find((f)=>f.id === (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id));
        const id = (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id) || (0,index_browser/* nanoid */.Ak)();
        let newValue = [];
        if (operator.value === 'between' || operator.value === 'not between') {
            if (minValue && maxValue) {
                newValue = [
                    getValue(minValue),
                    getValue(maxValue)
                ];
            }
        } else if (value || typeof value === 'number') {
            newValue = [
                value
            ];
        }
        const newItem = {
            id,
            fieldName: field.value,
            operator: operator.value,
            label,
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
                label: "最小值",
                invalid: !!errors.minValue,
                error: (_errors_minValue = errors.minValue) === null || _errors_minValue === void 0 ? void 0 : _errors_minValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('minValue', {
                required: '请输入最小值'
            })))), /*#__PURE__*/ external_react_default().createElement("div", {
                className: colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "最大值",
                invalid: !!errors.maxValue,
                error: (_errors_maxValue = errors.maxValue) === null || _errors_maxValue === void 0 ? void 0 : _errors_maxValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('maxValue', {
                required: '请输入最大值'
            })))));
        }
        console.log('currentOperator', currentOperator);
        if (currentOperator === '=' || currentOperator === '!=' || currentOperator === 'like' || currentOperator === 'not like' || currentOperator === 'match_all' || currentOperator === 'match_any' || currentOperator === 'match_phrase') {
            var _errors_value;
            return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "值",
                invalid: !!errors.value,
                error: (_errors_value = errors.value) === null || _errors_value === void 0 ? void 0 : _errors_value.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, filter_content_object_spread_props(filter_content_object_spread({}, register('value', {
                required: '请输入值'
            })), {
                list: "field-value-list"
            }))), /*#__PURE__*/ external_react_default().createElement("datalist", {
                id: "field-value-list"
            }, tableFieldValue.map((item, idx)=>/*#__PURE__*/ external_react_default().createElement("option", {
                    key: idx,
                    value: item.value
                }))));
        }
        if (currentOperator === 'in' || currentOperator === 'not in') {
            var _errors_value1;
            return /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "值",
                invalid: !!errors.value,
                error: (_errors_value1 = errors.value) === null || _errors_value1 === void 0 ? void 0 : _errors_value1.message
            }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
                name: "value",
                control: control,
                rules: {
                    required: '请输入值'
                },
                render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, filter_content_object_spread_props(filter_content_object_spread({}, field), {
                        isMulti: true,
                        options: tableFieldValue.map((item)=>({
                                label: item.value,
                                value: item.value
                            })),
                        placeholder: "请选择值",
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
        label: "列名",
        invalid: !!errors.field,
        error: (_errors_field = errors.field) === null || _errors_field === void 0 ? void 0 : _errors_field.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "field",
        control: control,
        rules: {
            required: '请选择字段'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, filter_content_object_spread_props(filter_content_object_spread({}, field), {
                options: tableFields.map((f)=>({
                        label: f.Field,
                        value: f.Field
                    }))
            }))
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: colStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "条件",
        invalid: !!errors.operator,
        error: (_errors_operator = errors.operator) === null || _errors_operator === void 0 ? void 0 : _errors_operator.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "operator",
        control: control,
        rules: {
            required: '请选择操作符'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, filter_content_object_spread_props(filter_content_object_spread({}, field), {
                options: utils_data/* OPERATORS */.we.map((op)=>({
                        label: op,
                        value: op
                    }))
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
    }, "取消"), /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        type: "submit"
    }, "确定")));
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
    const [loc, setLoc] = (0,react/* useAtom */.fp)(discover/* locationAtom */.JT);
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


// export function getFieldIcon(type: string) {
//     if (type.toUpperCase().includes('STRING')) {
//         return <Icon name="text-fields" />;
//     }
//     if (type.toUpperCase().includes('NUMBER')) {
//         return <Icon name="github" />;
//     }
//     if (type.toUpperCase().includes('DATE')) {
//         return <Icon name="calendar-alt" />;
//     } else {
//         return <Icon name="brackets-curly" />;
//     }
// }
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
            name: "percentage"
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

// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1750);
// EXTERNAL MODULE: ../node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(8890);
;// ./utils/tailwind.ts


function cn(...inputs) {
    return (0,bundle_mjs/* twMerge */.QP)((0,clsx/* clsx */.$)(inputs));
}

// EXTERNAL MODULE: ../node_modules/antd/es/progress/index.js + 115 modules
var progress = __webpack_require__(180);
// EXTERNAL MODULE: ../node_modules/lodash-es/get.js
var get = __webpack_require__(7230);
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
    }, tableTotalCount >= 500 ? 500 : tableTotalCount, " 条")), canDisplayTopData ? /*#__PURE__*/ external_react_default().createElement("div", {
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
        tooltip: "添加到表格",
        onClick: (e)=>{
            var _props_onAdd;
            props === null || props === void 0 ? void 0 : (_props_onAdd = props.onAdd) === null || _props_onAdd === void 0 ? void 0 : _props_onAdd.call(props, field);
            e.stopPropagation();
        }
    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
        name: "minus",
        tooltip: "从表格删除",
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
    }, `筛选字段`), /*#__PURE__*/ external_react_default().createElement("div", {
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
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const [searchable, setSearchable] = (0,react/* useAtom */.fp)(discover/* searchableAtom */.Mb);
    const [aggregatable, setAggregatable] = (0,react/* useAtom */.fp)(discover/* aggregatableAtom */.UR);
    const [fieldType, setFieldType] = (0,react/* useAtom */.fp)(discover/* fieldTypeAtom */.m5);
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
    }
    function handleRemove(field) {
        const index = selectedFields.findIndex((item)=>item.Field === field.Field);
        selectedFields.splice(index, 1);
        setSelectedFields([
            ...selectedFields
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
        return field['Field'].includes(searchValue);
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
        return field['Field'].includes(searchValue);
    }).map((field, index)=>/*#__PURE__*/ external_react_default().createElement(FieldItem, {
            type: "add",
            field: field,
            key: index,
            onAdd: (field)=>handleAdd(field)
        }))))));
}

// EXTERNAL MODULE: ../node_modules/echarts-for-react/esm/index.js + 557 modules
var esm = __webpack_require__(1244);
// EXTERNAL MODULE: ./types/type.ts
var type = __webpack_require__(7944);
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
    const [timeRange, setTimeRange] = (0,react/* useAtom */.fp)(discover/* timeRangeAtom */.U9);
    const [pageSize, setPageSize] = (0,react/* useAtom */.fp)(discover/* pageSizeAtom */.Ol);
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
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
            subtext: `${`时间间隔`}: ${timeInterval}`,
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
                                      <div style="padding-top:4px;display: flex;justify-content: space-between;"><span>计数：</span><span style="font-family:DIN Alternate;font-size:14;font-weight:500;">${[
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
            }
            return ()=>{
                if (chart.ele) {
                    chart.getEchartsInstance().off('brushEnd', handler);
                }
            };
        }
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

// EXTERNAL MODULE: ../node_modules/@uiw/react-json-view/esm/index.js + 46 modules
var react_json_view_esm = __webpack_require__(5197);
// EXTERNAL MODULE: ../node_modules/antd/es/button/index.js + 40 modules
var es_button = __webpack_require__(6043);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(7796);
// EXTERNAL MODULE: ../node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(6666);
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

;// ./components/discover-content/json-viewer.theme.ts
const SELECTDB_THEME = {
    '--w-rjv-font-family': 'monospace',
    '--w-rjv-color': '#9cdcfe',
    '--w-rjv-key-number': 'rgb(123, 225, 136)',
    '--w-rjv-key-string': 'rgb(123, 225, 136)',
    '--w-rjv-background-color': 'black',
    '--w-rjv-line-color': '#36334280',
    '--w-rjv-arrow-color': '#838383',
    '--w-rjv-edit-color': 'var(--w-rjv-color)',
    '--w-rjv-info-color': '#9c9c9c7a',
    '--w-rjv-update-color': '#9cdcfe',
    '--w-rjv-copied-color': '#9cdcfe',
    '--w-rjv-copied-success-color': '#28a745',
    '--w-rjv-curlybraces-color': '#d4d4d4',
    '--w-rjv-colon-color': '#d4d4d4',
    '--w-rjv-brackets-color': '#d4d4d4',
    '--w-rjv-ellipsis-color': '#cb4b16',
    '--w-rjv-quotes-color': 'var(--w-rjv-key-string)',
    '--w-rjv-quotes-string-color': 'var(--w-rjv-type-string-color)',
    '--w-rjv-type-string-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-int-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-float-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-bigint-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-boolean-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-date-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-url-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-null-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-nan-color': 'rgb(149, 179, 255)',
    '--w-rjv-type-undefined-color': 'rgb(149, 179, 255)'
};
const SELECTDB_THEME_LIGHT = {
    '--w-rjv-font-family': 'monospace',
    '--w-rjv-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-key-number': 'rgb(123, 225, 136)',
    '--w-rjv-key-string': 'hsla(134, 100%, 35%, 1)',
    '--w-rjv-background-color': 'hsla(215, 100%, 95%, 0.2)',
    '--w-rjv-line-color': '#36334280',
    '--w-rjv-arrow-color': '#838383',
    '--w-rjv-edit-color': 'var(--w-rjv-color)',
    '--w-rjv-info-color': 'hsla(240, 5%, 26%, 1)',
    '--w-rjv-update-color': '#9cdcfe',
    '--w-rjv-copied-color': '#9cdcfe',
    '--w-rjv-copied-success-color': '#28a745',
    '--w-rjv-curlybraces-color': 'hsla(240, 5%, 26%, 1)',
    '--w-rjv-colon-color': 'hsla(240, 5%, 26%, 1)',
    '--w-rjv-brackets-color': 'hsla(240, 5%, 26%, 1)',
    '--w-rjv-ellipsis-color': '#cb4b16',
    '--w-rjv-quotes-color': 'var(--w-rjv-key-string)',
    '--w-rjv-quotes-string-color': 'var(--w-rjv-type-string-color)',
    '--w-rjv-type-string-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-int-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-float-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-bigint-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-boolean-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-date-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-url-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-null-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-nan-color': 'hsla(223, 98%, 58%, 1)',
    '--w-rjv-type-undefined-color': 'hsla(223, 98%, 58%, 1)'
};

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

// EXTERNAL MODULE: ../node_modules/ahooks/es/useRequest/index.js + 31 modules
var useRequest = __webpack_require__(5494);
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
function discover_filter_filter_content_define_property(obj, key, value) {
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
function discover_filter_filter_content_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            discover_filter_filter_content_define_property(target, key, source[key]);
        });
    }
    return target;
}
function discover_filter_filter_content_ownKeys(object, enumerableOnly) {
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
function discover_filter_filter_content_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        discover_filter_filter_content_ownKeys(Object(source)).forEach(function(key) {
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
    if (false) // removed by dead control flow
{}
    const tableFieldValue = (0,react/* useAtomValue */.md)(discover/* tableFieldValuesAtom */.CL);
    const { control, handleSubmit, watch, register, formState: { errors } } = (0,index_esm/* useForm */.mN)({
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
    const operator = watch('operator');
    const showLabel = watch('showLabel');
    const getValue = (value)=>isNaN(+value) ? value : +value;
    const onSubmit = (formValues)=>{
        const { field, operator, value, minValue, maxValue, label } = formValues;
        const current = surroundingDataFilter.find((f)=>f.id === (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id));
        const id = (dataFilterValue === null || dataFilterValue === void 0 ? void 0 : dataFilterValue.id) || (0,index_browser/* nanoid */.Ak)();
        let newValue = [];
        if (operator.value === 'between' || operator.value === 'not between') {
            if (minValue && maxValue) {
                newValue = [
                    getValue(minValue),
                    getValue(maxValue)
                ];
            }
        } else if (value || typeof value === 'number') {
            newValue = [
                value
            ];
        }
        const newItem = {
            id,
            fieldName: field.value,
            operator: operator.value,
            label,
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
    function renderFiledComponent() {
        const currentOperator = typeof operator === 'string' ? operator : operator === null || operator === void 0 ? void 0 : operator.value;
        if (currentOperator && currentOperator !== 'is null' && currentOperator !== 'is not null' && (currentOperator === 'between' || currentOperator === 'not between')) {
            var _errors_minValue, _errors_maxValue;
            return /*#__PURE__*/ external_react_default().createElement("div", {
                className: discover_filter_style_rowStyle
            }, /*#__PURE__*/ external_react_default().createElement("div", {
                className: discover_filter_style_colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "最小值",
                invalid: !!errors.minValue,
                error: (_errors_minValue = errors.minValue) === null || _errors_minValue === void 0 ? void 0 : _errors_minValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('minValue', {
                required: '请输入最小值'
            })))), /*#__PURE__*/ external_react_default().createElement("div", {
                className: discover_filter_style_colStyle
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "最大值",
                invalid: !!errors.maxValue,
                error: (_errors_maxValue = errors.maxValue) === null || _errors_maxValue === void 0 ? void 0 : _errors_maxValue.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, register('maxValue', {
                required: '请输入最大值'
            })))));
        }
        if (currentOperator === '=' || currentOperator === '!=' || currentOperator === 'like' || currentOperator === 'not like' || currentOperator === 'match_all' || currentOperator === 'match_any' || currentOperator === 'match_phrase') {
            var _errors_value;
            return /*#__PURE__*/ external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "值",
                invalid: !!errors.value,
                error: (_errors_value = errors.value) === null || _errors_value === void 0 ? void 0 : _errors_value.message
            }, /*#__PURE__*/ external_react_default().createElement(ui_.Input, discover_filter_filter_content_object_spread_props(discover_filter_filter_content_object_spread({}, register('value', {
                required: '请输入值'
            })), {
                list: "field-value-list"
            }))), /*#__PURE__*/ external_react_default().createElement("datalist", {
                id: "field-value-list"
            }, tableFieldValue.map((item, idx)=>/*#__PURE__*/ external_react_default().createElement("option", {
                    key: idx,
                    value: item.value
                }))));
        }
        if (currentOperator === 'in' || currentOperator === 'not in') {
            var _errors_value1;
            return /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
                label: "值",
                invalid: !!errors.value,
                error: (_errors_value1 = errors.value) === null || _errors_value1 === void 0 ? void 0 : _errors_value1.message
            }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
                name: "value",
                control: control,
                rules: {
                    required: '请输入值'
                },
                render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, discover_filter_filter_content_object_spread_props(discover_filter_filter_content_object_spread({}, field), {
                        isMulti: true,
                        options: tableFieldValue.map((item)=>({
                                label: item.value,
                                value: item.value
                            })),
                        placeholder: "请选择值",
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
        label: "列名",
        invalid: !!errors.field,
        error: (_errors_field = errors.field) === null || _errors_field === void 0 ? void 0 : _errors_field.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "field",
        control: control,
        rules: {
            required: '请选择字段'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, discover_filter_filter_content_object_spread_props(discover_filter_filter_content_object_spread({}, field), {
                options: tableFields.map((f)=>({
                        label: f.Field,
                        value: f.Field
                    }))
            }))
    }))), /*#__PURE__*/ external_react_default().createElement("div", {
        className: discover_filter_style_colStyle
    }, /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "条件",
        invalid: !!errors.operator,
        error: (_errors_operator = errors.operator) === null || _errors_operator === void 0 ? void 0 : _errors_operator.message
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "operator",
        control: control,
        rules: {
            required: '请选择操作符'
        },
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.Select, discover_filter_filter_content_object_spread_props(discover_filter_filter_content_object_spread({}, field), {
                options: utils_data/* OPERATORS */.we.map((op)=>({
                        label: op,
                        value: op
                    }))
            }))
    })))), renderFiledComponent(), /*#__PURE__*/ external_react_default().createElement(ui_.InlineFieldRow, null, /*#__PURE__*/ external_react_default().createElement(ui_.InlineField, {
        label: "Custom Label"
    }, /*#__PURE__*/ external_react_default().createElement(index_esm/* Controller */.xI, {
        name: "showLabel",
        control: control,
        render: ({ field })=>/*#__PURE__*/ external_react_default().createElement(ui_.InlineSwitch, field)
    }))), showLabel && /*#__PURE__*/ external_react_default().createElement(ui_.Field, {
        label: "Label",
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
    }, "取消"), /*#__PURE__*/ external_react_default().createElement(ui_.Button, {
        type: "submit"
    }, "确定")));
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

// EXTERNAL MODULE: ../node_modules/lodash-es/sortBy.js + 7 modules
var sortBy = __webpack_require__(5092);
// EXTERNAL MODULE: ./services/discover.ts
var services_discover = __webpack_require__(7626);
// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(1269);
;// ./utils/utils.ts
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
function generateUid(obj) {
    return _async_to_generator(function*() {
        // 将对象排序后转换为 JSON 字符串，以确保属性顺序不影响哈希结果
        const jsonString = JSON.stringify(obj, Object.keys(obj).sort());
        // 编码为 UTF-8
        const encoder = new TextEncoder();
        const data = encoder.encode(jsonString);
        // 计算 SHA-256 哈希值
        const hashBuffer = yield crypto.subtle.digest('SHA-256', data);
        // 将哈希值转换为十六进制字符串
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    })();
}
function generateTableDataUID(items) {
    return _async_to_generator(function*() {
        for (let item of items){
            const uid = yield generateUid(item._original);
            item['_uid'] = uid;
        }
        return items;
    })();
}

;// ./components/surrounding-logs/content/content-table-actions.tsx







function SurroundingContentTableActions({ fieldName, fieldValue }) {
    console.log(fieldName, fieldValue);
    const [selectedSurroundingFields, setSelectedSurroundingFields] = (0,react/* useAtom */.fp)(discover/* surroundingSelectedFieldsAtom */.gj);
    const [surroundingDataFilter, setSurroundingDataFilter] = (0,react/* useAtom */.fp)(discover/* surroundingDataFilterAtom */.wc);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const fieldType = tableFields.find((field)=>field.Field === fieldName).Type;
    const hasField = selectedSurroundingFields.some((item)=>item.Field === fieldName);
    const filterValue = typeof fieldValue === 'object' ? JSON.stringify(fieldValue) : fieldValue;
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
function surrounding_logs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function surrounding_logs_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                surrounding_logs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                surrounding_logs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
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
    const { loading: getAfterSurroundingDataLoading, run: getAfterSurroundingData } = (0,useRequest/* default */.A)(({ pageSize = afterTimeFieldPageSize, time = afterTime })=>{
        console.log(time);
        const params = getQueryParams({
            pageSize,
            operator: '>',
            time
        });
        console.log(params.time);
        return (0,external_rxjs_.lastValueFrom)((0,services_discover/* getSurroundingDataService */.oq)(surrounding_logs_object_spread({
            selectdbDS
        }, params)));
    }, {
        manual: true,
        onSuccess: (res, params)=>surrounding_logs_async_to_generator(function*() {
                if (res.ok) {
                    const rowsData = (0,utils_data/* convertColumnToRow */.HL)(res.data);
                    const result = generateSurroundingResult(rowsData, currentTimeField);
                    let data = [
                        ...surroundingTableData
                    ];
                    data.push(...result);
                    setAfterCount(afterCount + data.length);
                    setAfterTime(result[0]._original[currentTimeField]);
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
        return (0,external_rxjs_.lastValueFrom)((0,services_discover/* getSurroundingDataService */.oq)(surrounding_logs_object_spread({
            selectdbDS
        }, params)));
    }, {
        manual: true,
        onSuccess: (res, params)=>surrounding_logs_async_to_generator(function*() {
                if (res.ok) {
                    const rowsData = (0,utils_data/* convertColumnToRow */.HL)(res.data);
                    const result = generateSurroundingResult(rowsData, currentTimeField);
                    let data = [
                        ...surroundingTableData
                    ];
                    data.unshift(...res.data);
                    setBeforeCount(beforeCount + result.length);
                    setBeforeTime(res.data[0]._original[currentTimeField]);
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
            operator: '>'
        });
        return Promise.all([
            (0,external_rxjs_.lastValueFrom)((0,services_discover/* getSurroundingDataService */.oq)(surrounding_logs_object_spread({
                selectdbDS
            }, prevTimeParams))),
            (0,external_rxjs_.lastValueFrom)((0,services_discover/* getSurroundingDataService */.oq)(surrounding_logs_object_spread({
                selectdbDS
            }, afterTimeParams)))
        ]);
    }, {
        refreshDeps: [
            surroundingDataFilter
        ],
        onSuccess: (res)=>surrounding_logs_async_to_generator(function*() {
                if (res[0].ok && res[1].ok) {
                    const rowsData1 = (0,utils_data/* convertColumnToRow */.HL)(res[0].data);
                    const rowsData2 = (0,utils_data/* convertColumnToRow */.HL)(res[1].data);
                    const result1 = generateSurroundingResult(rowsData1, currentTimeField);
                    const result2 = generateSurroundingResult(rowsData2, currentTimeField);
                    const selectedResult = generateSurroundingResult([
                        selectedRow._original
                    ], currentTimeField);
                    const data = [
                        ...result1,
                        ...selectedResult,
                        ...result2
                    ];
                    const rowsDataWithUid = yield generateTableDataUID(data);
                    if (result1.length > 0) {
                        setBeforeCount(result1.length);
                        setBeforeTime(result1[0]._original[currentTimeField]);
                    } else {
                        setBeforeTime(selectedRow.time);
                    }
                    if (result1.length > 0) {
                        setAfterCount(result1.length);
                        setAfterTime(result1[0]._original[currentTimeField]);
                    } else {
                        setAfterTime(selectedRow.time);
                    }
                    setSurroundingTableData(rowsDataWithUid);
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
        const subTableData = Object.keys(row.original._original).map((key)=>{
            return {
                field: key,
                value: row.original._original[key]
            };
        });
        return /*#__PURE__*/ external_react_default().createElement("div", {
            className: (0,css_.css)`
                    position: relative;
                `
        }, /*#__PURE__*/ external_react_default().createElement(ui_.TabsBar, null, state.map((tab, index)=>{
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
        }))), state[1].active && /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(react_json_view_esm/* default */.Ay, {
            value: row.original._original,
            className: `-mt-2 pl-11 !leading-6 ${(0,css_.css)`
                                    .w-rjv-wrap {
                                        border-left: none !important;
                                    }
                                `}`,
            shortenTextAfterLength: 0,
            indentWidth: 36,
            displayDataTypes: false,
            enableClipboard: false,
            style: theme.isDark ? SELECTDB_THEME : SELECTDB_THEME_LIGHT
        }))));
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
                    return row.getCanExpand() && /*#__PURE__*/ external_react_default().createElement("div", {
                        className: "flex items-center"
                    }, row.getIsExpanded() ? /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-down",
                        tooltip: "收起"
                    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-right",
                        tooltip: "展开"
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
                    const timeField = dayjs_min_default()(fieldValue).format('YYYY-MM-DD HH:mm:ss');
                    return /*#__PURE__*/ external_react_default().createElement("div", {
                        className: `${(0,css_.css)`
                                width: 210px;
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
                            }, field.value === 'trace_id' ? /*#__PURE__*/ external_react_default().createElement(ui_.Button, null, fieldValue) : /*#__PURE__*/ external_react_default().createElement("span", {
                                className: "text-xs"
                            }, fieldValue))), /*#__PURE__*/ external_react_default().createElement("div", {
                                className: `filter-content ${(0,css_.css)`
                                            visibility: hidden;
                                        `}`
                            }, /*#__PURE__*/ external_react_default().createElement(SurroundingContentItem, {
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
var trace_detail = __webpack_require__(1885);
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















function DiscoverContent({ fetchNextPage, getTraceData }) {
    const theme = (0,ui_.useTheme2)();
    const [fields, setFields] = (0,external_react_.useState)([]);
    const tableTotalCount = (0,react/* useAtomValue */.md)(discover/* tableTotalCountAtom */.HC);
    const [tableData, setTableData] = (0,react/* useAtom */.fp)(discover/* tableDataAtom */.q3);
    const [selectedFields, setSelectedFields] = (0,react/* useAtom */.fp)(discover/* selectedFieldsAtom */.Wg);
    const hasSelectedFields = selectedFields.length > 0;
    const currentTimeField = (0,react/* useAtomValue */.md)(discover/* currentTimeFieldAtom */.CA);
    const [surroundingOpen, setSurroundingOpen] = (0,external_react_.useState)(false);
    const [selectedRow, setSelectedRow] = (0,react/* useAtom */.fp)(discover/* selectedRowAtom */.nn);
    const setSurroundingTableData = (0,react/* useSetAtom */.Xr)(discover/* surroundingTableDataAtom */.mj);
    const setSurroundingDataFilter = (0,react/* useSetAtom */.Xr)(discover/* surroundingDataFilterAtom */.wc);
    const setSelectedSurroundingFields = (0,react/* useSetAtom */.Xr)(discover/* surroundingSelectedFieldsAtom */.gj);
    const setBeforeCount = (0,react/* useSetAtom */.Xr)(discover/* beforeCountAtom */.cn);
    const setAfterCount = (0,react/* useSetAtom */.Xr)(discover/* afterCountAtom */.f5);
    const [pageSize, setPageSize] = (0,react/* useAtom */.fp)(discover/* pageSizeAtom */.Ol);
    const [tracesData, setTraceData] = (0,react/* useAtom */.fp)(discover/* tableTracesDataAtom */.UB);
    const [page, setPage] = (0,react/* useAtom */.fp)(discover/* pageAtom */.fs);
    const [drawerOpen, setDrawerOpen] = (0,external_react_.useState)(false);
    const [surroundingLogsOpen, setSurroundingLogsOpen] = (0,external_react_.useState)(false);
    const currentIndexes = (0,react/* useAtomValue */.md)(discover/* currentIndexAtom */.TY);
    const tableFields = (0,react/* useAtomValue */.md)(discover/* tableFieldsAtom */.D_);
    const [fieldKeyBg, setFieldKeyBg] = (0,external_react_.useState)('#3f3f4f');
    const loading = (0,react/* useAtomValue */.md)(discover/* discoverLoadingAtom */.jU);
    (0,external_react_.useEffect)(()=>{
        if (theme.isDark) {
            setFieldKeyBg('#3f3f4f');
        } else {
            setFieldKeyBg('rgb(191, 217, 253)');
        }
        console.log(theme.isDark);
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
    // 管理展开/收起状态
    const [expandedRows, setExpandedRows] = (0,external_react_.useState)({});
    const toggleRow = (index)=>{
        setExpandedRows((prev)=>discover_content_object_spread_props(discover_content_object_spread({}, prev), {
                [index]: !prev[index]
            }));
    };
    function onClose() {
        setSurroundingOpen(false);
    }
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
        const subTableData = Object.keys(row.original._original).map((key)=>{
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
        }))), state[1].active && /*#__PURE__*/ external_react_default().createElement("div", null, /*#__PURE__*/ external_react_default().createElement(react_json_view_esm/* default */.Ay, {
            value: row.original._original,
            className: `-mt-2 pl-11 !leading-6 ${(0,css_.css)`
                                    .w-rjv-wrap {
                                        border-left: none !important;
                                    }
                                `}`,
            shortenTextAfterLength: 0,
            indentWidth: 36,
            displayDataTypes: false,
            enableClipboard: false,
            style: theme.isDark ? SELECTDB_THEME : SELECTDB_THEME_LIGHT
        }))), /*#__PURE__*/ external_react_default().createElement("a", {
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
                            color: rgb(43, 102, 253);
                        }
                    `
        }, "Surrounding Logs"));
    };
    const openTraceDrawer = (traceId)=>{
        // request
        setDrawerOpen(true);
        getTraceData(traceId);
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
                        tooltip: "收起"
                    }) : /*#__PURE__*/ external_react_default().createElement(ui_.IconButton, {
                        onClick: row.getToggleExpandedHandler(),
                        name: "arrow-right",
                        tooltip: "展开"
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
                    const timeField = fieldValue;
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
                                    & .field-key {
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
                                                padding: 16px;
                                                word-break: break-all;
                                            `
                            }, field.value === 'trace_id' ? /*#__PURE__*/ external_react_default().createElement(es_button/* default */.Ay, {
                                onClick: ()=>openTraceDrawer(fieldValue),
                                type: "link"
                            }, fieldValue) : /*#__PURE__*/ external_react_default().createElement("span", {
                                className: (0,css_.css)`
                                                        font-size: 12px;
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
    }, /*#__PURE__*/ external_react_default().createElement("div", null, "Total ", tableTotalCount, " rows"), /*#__PURE__*/ external_react_default().createElement(ui_.Pagination, {
        currentPage: page,
        numberOfPages: Math.ceil(tableTotalCount / pageSize) || 1,
        onNavigate: (toPage)=>{
            setPage(toPage);
        }
    })), /*#__PURE__*/ external_react_default().createElement(trace_detail/* default */.A, {
        onClose: ()=>setDrawerOpen(false),
        open: drawerOpen,
        traceId: selectedRow === null || selectedRow === void 0 ? void 0 : selectedRow.trace_id
    }), surroundingLogsOpen && /*#__PURE__*/ external_react_default().createElement(ui_.Drawer, {
        size: "lg",
        title: "Surrounding Logs",
        onClose: ()=>{
            setSurroundingTableData([]);
            setSurroundingDataFilter([]);
            setBeforeCount(0);
            setAfterCount(0);
            setSelectedSurroundingFields([]);
            setSurroundingLogsOpen(false);
        }
    }, /*#__PURE__*/ external_react_default().createElement(SurroundingLogs, null)));
}

;// ./pages/PageDiscover.tsx
function PageDiscover_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function PageDiscover_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                PageDiscover_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                PageDiscover_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function PageDiscover_define_property(obj, key, value) {
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
function PageDiscover_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            PageDiscover_define_property(target, key, source[key]);
        });
    }
    return target;
}
function PageDiscover_ownKeys(object, enumerableOnly) {
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
function PageDiscover_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        PageDiscover_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}













// import { lastValueFrom } from 'rxjs';




function PageDiscover() {
    // const [getTableDataLoading] = React.useState(false);
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
    // const currentCluster = useAtomValue(currentClusterAtom);
    const currentTable = (0,react/* useAtomValue */.md)(discover/* currentTableAtom */.$w);
    const currentCatalog = (0,react/* useAtomValue */.md)(discover/* currentCatalogAtom */.K0);
    const currentDatabase = (0,react/* useAtomValue */.md)(discover/* currentDatabaseAtom */.Cf);
    const currentDate = (0,react/* useAtomValue */.md)(discover/* currentDateAtom */.Zb);
    const setTableTotalCount = (0,react/* useSetAtom */.Xr)(discover/* tableTotalCountAtom */.HC);
    const setTraceData = (0,react/* useSetAtom */.Xr)(discover/* tableTracesDataAtom */.UB);
    const [loading, setLoading] = (0,react/* useAtom */.fp)(discover/* discoverLoadingAtom */.jU);
    // const [appInfo, setAppInfo] = useAtomValue(dorisInfoAtom);
    // const shouldUseClusterParam = () => enableCloudNative(appInfo?.version, appInfo?.supportComputeGroup);
    // const discoverCurrent = useAtomValue(discoverCurrentAtom);
    const theme = (0,ui_.useTheme2)();
    (0,external_react_.useEffect)(()=>{
        if (currentTimeField) {
            getTableData();
            getTopData();
            getTableDataCharts();
            getTableDataCount();
        } else {
            setTableDataCharts([]);
            setTableTotalCount(NaN);
            setTableData([]);
            setTopData([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentTimeField,
        page
    ]);
    function getTableData() {
        var _currentDate_;
        setLoading((prev)=>PageDiscover_object_spread_props(PageDiscover_object_spread({}, prev), {
                getTableData: true
            }));
        const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
        let payload = {
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
        if (dataFilter.length > 0) {
            payload.data_filters = dataFilter;
        } else {
            payload.data_filters = [];
        }
        if (searchValue) {
            payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
        }
        (0,services_discover/* getTableDataService */.EF)(PageDiscover_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>PageDiscover_async_to_generator(function*() {
                    setLoading((prev)=>PageDiscover_object_spread_props(PageDiscover_object_spread({}, prev), {
                            getTableData: false
                        }));
                    if (ok) {
                        const rowsData = (0,utils_data/* convertColumnToRow */.HL)(data);
                        const resData = (0,utils_data/* generateHighlightedResults */.F9)({
                            search_value: searchValue,
                            indexes: currentIndexes || []
                        }, rowsData);
                        const rowsDataWithUid = yield generateTableDataUID(resData);
                        setTableData(rowsDataWithUid);
                    }
                })(),
            error: (err)=>{
                setLoading((prev)=>PageDiscover_object_spread_props(PageDiscover_object_spread({}, prev), {
                        getTableData: false
                    }));
                console.log('查询错误', err);
            }
        });
    }
    function getTableDataCharts() {
        var _currentDate_;
        setLoading((prev)=>PageDiscover_object_spread_props(PageDiscover_object_spread({}, prev), {
                getTableDataCharts: true
            }));
        const timeInterval = interval === constants/* IntervalEnum */.Bg.Auto ? (0,constants/* getAutoInterval */.Vy)(currentDate).interval_unit : interval;
        const timeIntervalValue = interval === constants/* IntervalEnum */.Bg.Auto ? (0,constants/* getAutoInterval */.Vy)(currentDate).interval_value : 1;
        const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
        let payload = {
            catalog: 'internal',
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            cluster: '',
            // cluster: shouldUseClusterParam() ? currentCluster : '',
            sort: 'DESC',
            interval: timeInterval,
            interval_value: timeIntervalValue,
            search_type: searchType,
            indexes: indexesStatement
        };
        if (dataFilter.length > 0) {
            payload.data_filters = dataFilter;
        }
        if (searchValue) {
            payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
        }
        (0,services_discover/* getTableDataChartsService */.Rp)(PageDiscover_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                setLoading((prev)=>PageDiscover_object_spread_props(PageDiscover_object_spread({}, prev), {
                        getTableDataCharts: false
                    }));
                if (ok) {
                    var _data_results__data, _data_results_, _data_results__data1, _data_results_1;
                    const value = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                    if (!value || value.length === 0) {
                        setTableDataCharts([]);
                        return;
                    }
                    const tableDataCharts = data === null || data === void 0 ? void 0 : (_data_results_1 = data.results[0]) === null || _data_results_1 === void 0 ? void 0 : (_data_results__data1 = _data_results_1.data) === null || _data_results__data1 === void 0 ? void 0 : _data_results__data1.values[0].map((item, index)=>{
                        var _data_results__data, _data_results_;
                        return {
                            TT: item,
                            'sum(cnt)': data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[1][index]
                        };
                    });
                    const chartsData = (0,utils_data/* getChartsData */.Wd)(tableDataCharts, currentDate);
                    setTableDataCharts(chartsData);
                }
            },
            error: (err)=>{
                setLoading((prev)=>PageDiscover_object_spread_props(PageDiscover_object_spread({}, prev), {
                        getTableDataCharts: false
                    }));
                console.log('查询错误', err);
            }
        });
    }
    function getTopData() {
        var _currentDate_;
        const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
        let payload = {
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
        if (dataFilter.length > 0) {
            payload.data_filters = dataFilter;
        } else {
            payload.data_filters = [];
        }
        if (searchValue) {
            payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
        }
        (0,services_discover/* getTopDataService */.N)(PageDiscover_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    const rowsData = (0,utils_data/* convertColumnToRowViaFieldsType */.ml)(data, tableFields);
                    console.log('rowsData', rowsData);
                    setTopData(rowsData);
                }
            },
            error: (err)=>{
                console.log('查询错误', err);
                setTopData([]);
            }
        });
    }
    function getTableDataCount() {
        var _currentDate_;
        const timeInterval = interval === constants/* IntervalEnum */.Bg.Auto ? (0,constants/* getAutoInterval */.Vy)(currentDate).interval_unit : interval;
        const timeIntervalValue = interval === constants/* IntervalEnum */.Bg.Auto ? (0,constants/* getAutoInterval */.Vy)(currentDate).interval_value : 1;
        const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
        let payload = {
            catalog: 'internal',
            database: currentDatabase,
            table: currentTable,
            timeField: currentTimeField,
            startDate: (_currentDate_ = currentDate[0]) === null || _currentDate_ === void 0 ? void 0 : _currentDate_.format(constants/* FORMAT_DATE */.fU),
            endDate: currentDate[1].format(constants/* FORMAT_DATE */.fU),
            cluster: '',
            // cluster: shouldUseClusterParam() ? currentCluster : '',
            sort: 'DESC',
            interval: timeInterval,
            interval_value: timeIntervalValue,
            search_type: searchType,
            indexes: indexesStatement
        };
        if (dataFilter.length > 0) {
            payload.data_filters = dataFilter;
        }
        if (searchValue) {
            payload.search_value = searchType === 'Search' ? (0,utils_data/* encodeBase64 */.WG)(searchValue) : searchValue;
        }
        (0,services_discover/* getTableDataCountService */.$g)(PageDiscover_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    var _data_results__data, _data_results_;
                    const total_count = data === null || data === void 0 ? void 0 : (_data_results_ = data.results[0]) === null || _data_results_ === void 0 ? void 0 : (_data_results__data = _data_results_.data) === null || _data_results__data === void 0 ? void 0 : _data_results__data.values[0];
                    if (!total_count) {
                        setTableTotalCount(0);
                        return;
                    }
                    setTableTotalCount(total_count);
                }
            },
            error: (err)=>{
                console.log('查询错误', err);
            }
        });
    }
    function getTraceData(trace_id) {
        var _currentDate_;
        const indexesStatement = (0,utils_data/* getIndexesStatement */.cE)(currentIndexes, tableFields, searchValue);
        let payload = {
            catalog: currentCatalog,
            database: currentDatabase,
            table: 'otel_traces',
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
        if (dataFilter.length > 0) {
            payload.data_filters = dataFilter;
        } else {
            payload.data_filters = [];
        }
        if (searchValue) {
            payload.search_value = (0,utils_data/* encodeBase64 */.WG)(searchValue);
        }
        (0,services_discover/* getTableDataTraceService */.hA)(PageDiscover_object_spread({
            selectdbDS
        }, payload)).subscribe({
            next: ({ data, ok })=>{
                if (ok) {
                    const formatedData = (0,utils_data/* formatTracesResData */.O1)(data);
                    setTraceData(formatedData);
                }
            },
            error: (err)=>{
                console.log('查询错误', err);
            }
        });
    }
    (0,external_react_.useEffect)(()=>{
        setPage(1);
        if (currentTimeField) {
            getTableDataCharts();
            getTableDataCount();
            getTableData();
            getTopData();
        } else {
            setTableDataCharts([]);
            setTableTotalCount(NaN);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentDate,
        currentTimeField,
        dataFilter,
        interval
    ]);
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
        onQuerying: ()=>{
            if (currentTimeField) {
                setPage(1);
                getTopData();
                getTableDataCharts();
                getTableDataCount();
                getTableData();
            }
        },
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


/***/ })

}]);
//# sourceMappingURL=973.js.map?_cache=6e6eb8228a493c0aa4cf