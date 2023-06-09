"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Sort.js":
/*!**********************************!*\
  !*** ./pages/components/Sort.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sort.module.css */ \"./pages/components/Sort.module.css\");\n/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Sort_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ButtonMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonMenu */ \"./pages/components/ButtonMenu.js\");\n/* harmony import */ var _utils_date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date.formatter */ \"./pages/utils/date.formatter.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Sort(param) {\n    let { handleNewNoteClick  } = param;\n    _s();\n    const options = [\n        \"date\",\n        \"work\",\n        \"perso\",\n        \"others\"\n    ];\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"date\");\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    const handleOptionSelect = (option)=>{\n        setSelectedOption(option);\n        setIsMenuOpen(false);\n    };\n    const handleNewNote = ()=>{\n        const createdAt = (0,_utils_date_formatter__WEBPACK_IMPORTED_MODULE_3__.formateDate)(new Date());\n        const newNote = {\n            title: \"\",\n            content: \"\",\n            createdAt: createdAt\n        };\n        handleNewNoteClick(newNote);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selectedOption: selectedOption,\n                options: options,\n                onSelect: handleOptionSelect,\n                isMenuOpen: isMenuOpen,\n                onToggleMenu: toggleMenu\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/Sort.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"border\",\n                onClick: handleNewNote,\n                children: \"New Note\"\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/Sort.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/Sort.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Sort, \"7wGI2P4JOMjlytiYvL/iVzc/fhw=\");\n_c = Sort;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sort);\nvar _c;\n$RefreshReg$(_c, \"Sort\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NvcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRDtBQUNEO0FBQ2dCO0FBRXJELFNBQVNLLEtBQUssS0FBc0I7UUFBdEIsRUFBRUMsbUJBQWtCLEVBQUUsR0FBdEI7O0lBQ1osTUFBTUMsVUFBVTtRQUFDO1FBQVE7UUFBUTtRQUFTO0tBQVM7SUFDbkQsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVcsYUFBYTtRQUNqQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1HLHFCQUFxQixDQUFDQztRQUMxQkwsa0JBQWtCSztRQUNsQkgsY0FBYztJQUNoQjtJQUVBLE1BQU1JLGdCQUFnQjtRQUNwQixNQUFNQyxZQUFZWixrRUFBV0EsQ0FBQyxJQUFJYTtRQUNsQyxNQUFNQyxVQUFVO1lBQ2RDLE9BQU87WUFDUEMsU0FBUztZQUNUSixXQUFXQTtRQUNiO1FBQ0FWLG1CQUFtQlk7SUFDckI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV3BCLG1FQUFnQnFCOzswQkFDOUIsOERBQUNwQixtREFBVUE7Z0JBQ1RLLGdCQUFnQkE7Z0JBQ2hCRCxTQUFTQTtnQkFDVGlCLFVBQVVYO2dCQUNWSCxZQUFZQTtnQkFDWmUsY0FBY2I7Ozs7OzswQkFFaEIsOERBQUNjO2dCQUFPSixXQUFVO2dCQUFTSyxTQUFTWjswQkFBZTs7Ozs7Ozs7Ozs7O0FBS3pEO0dBdENTVjtLQUFBQTtBQXdDVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1NvcnQuanM/MWExZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb3J0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgQnV0dG9uTWVudSBmcm9tICcuL0J1dHRvbk1lbnUnXG5pbXBvcnQgeyBmb3JtYXRlRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUuZm9ybWF0dGVyJ1xuXG5mdW5jdGlvbiBTb3J0KHsgaGFuZGxlTmV3Tm90ZUNsaWNrIH0pIHtcbiAgY29uc3Qgb3B0aW9ucyA9IFsnZGF0ZScsICd3b3JrJywgJ3BlcnNvJywgJ290aGVycyddXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoJ2RhdGUnKVxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pXG4gIH1cblxuICBjb25zdCBoYW5kbGVPcHRpb25TZWxlY3QgPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24ob3B0aW9uKVxuICAgIHNldElzTWVudU9wZW4oZmFsc2UpXG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdOb3RlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRBdCA9IGZvcm1hdGVEYXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgY3JlYXRlZEF0OiBjcmVhdGVkQXQsXG4gICAgfVxuICAgIGhhbmRsZU5ld05vdGVDbGljayhuZXdOb3RlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8QnV0dG9uTWVudVxuICAgICAgICBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIG9uU2VsZWN0PXtoYW5kbGVPcHRpb25TZWxlY3R9XG4gICAgICAgIGlzTWVudU9wZW49e2lzTWVudU9wZW59XG4gICAgICAgIG9uVG9nZ2xlTWVudT17dG9nZ2xlTWVudX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlclwiIG9uQ2xpY2s9e2hhbmRsZU5ld05vdGV9PlxuICAgICAgICBOZXcgTm90ZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJCdXR0b25NZW51IiwiZm9ybWF0ZURhdGUiLCJTb3J0IiwiaGFuZGxlTmV3Tm90ZUNsaWNrIiwib3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJoYW5kbGVPcHRpb25TZWxlY3QiLCJvcHRpb24iLCJoYW5kbGVOZXdOb3RlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5ld05vdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJvblNlbGVjdCIsIm9uVG9nZ2xlTWVudSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Sort.js\n"));

/***/ })

});