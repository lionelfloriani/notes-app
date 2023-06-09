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

/***/ "./pages/components/FullNote.js":
/*!**************************************!*\
  !*** ./pages/components/FullNote.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FullNote(param) {\n    let { data , createdAt , onUpdatedNote  } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editedNote, setEditedNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const [forceUpdate, setForceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSaveNote = ()=>{\n        setIsEditing(false);\n        // Make an API call to update the note\n        fetch(\"http://localhost:5000/api/v1/notes/\".concat(data._id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(editedNote)\n        }).then((response)=>{\n            if (response.ok) {\n                // Note updated successfully, update the state in the parent component\n                onUpdatedNote(data._id, editedNote);\n                console.log(\"Note updated successfully\");\n                setForceUpdate(!forceUpdate);\n            } else {\n                console.error(\"Error updating note:\", response.statusText);\n            // Handle the error case if needed\n            }\n        }).catch((error)=>{\n            console.error(\"Error updating note:\", error);\n        // Handle the error case if needed\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-4 bg-white\",\n        children: [\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: editedNote.title,\n                onChange: (e)=>setEditedNote({\n                        ...editedNote,\n                        title: e.target.value\n                    }),\n                className: \"text-2xl font-bold mb-4\"\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: data.title\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500 text-xs mb-2\",\n                children: data.createdAt\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: editedNote.content,\n                onChange: (e)=>setEditedNote({\n                        ...editedNote,\n                        content: e.target.value\n                    }),\n                className: \"flex-1 bg-transparent outline-none\"\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex-1 bg-transparent outline-none\",\n                children: data.content\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end\",\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSaveNote,\n                    className: \"mr-2\",\n                    children: \"Save\"\n                }, void 0, false, {\n                    fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsEditing(true),\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(FullNote, \"eEdL+yHuX2iDndmOZYGXjXJ35hI=\");\n_c = FullNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullNote);\nvar _c;\n$RefreshReg$(_c, \"FullNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Z1bGxOb3RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxTQUFTRSxTQUFTLEtBQWtDO1FBQWxDLEVBQUVDLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxjQUFhLEVBQUUsR0FBbEM7O0lBQ2hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUNFO0lBQzdDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVyxpQkFBaUI7UUFDckJMLGFBQWE7UUFDYixzQ0FBc0M7UUFDdENNLE1BQU0sc0NBQStDLE9BQVRWLEtBQUtXLE1BQU87WUFDdERDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsVUFBVVg7UUFDdkIsR0FDR1ksS0FBSyxDQUFDQztZQUNMLElBQUlBLFNBQVNDLElBQUk7Z0JBQ2Ysc0VBQXNFO2dCQUN0RWpCLGNBQWNGLEtBQUtXLEtBQUtOO2dCQUN4QmUsUUFBUUMsSUFBSTtnQkFDWmIsZUFBZSxDQUFDRDtZQUNsQixPQUFPO2dCQUNMYSxRQUFRRSxNQUFNLHdCQUF3QkosU0FBU0s7WUFDL0Msa0NBQWtDO1lBQ3BDO1FBQ0YsR0FDQ0MsTUFBTSxDQUFDRjtZQUNORixRQUFRRSxNQUFNLHdCQUF3QkE7UUFDdEMsa0NBQWtDO1FBQ3BDO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7WUFDWnZCLDBCQUNDLDhEQUFDd0I7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU94QixXQUFXeUI7Z0JBQ2xCQyxVQUFVLENBQUNDLElBQU0xQixjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUV5QixPQUFPRSxFQUFFQyxPQUFPSjtvQkFBTTtnQkFDdEVILFdBQVU7Ozs7O3FDQUdaLDhEQUFDUTtnQkFBR1IsV0FBVTswQkFBMkIxQixLQUFLOEI7Ozs7OzswQkFFaEQsOERBQUNLO2dCQUFFVCxXQUFVOzBCQUE4QjFCLEtBQUtDOzs7Ozs7WUFDL0NFLDBCQUNDLDhEQUFDaUM7Z0JBQ0NQLE9BQU94QixXQUFXZ0M7Z0JBQ2xCTixVQUFVLENBQUNDLElBQU0xQixjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUVnQyxTQUFTTCxFQUFFQyxPQUFPSjtvQkFBTTtnQkFDeEVILFdBQVU7Ozs7O3FDQUdaLDhEQUFDUztnQkFBRVQsV0FBVTswQkFBc0MxQixLQUFLcUM7Ozs7OzswQkFFMUQsOERBQUNaO2dCQUFJQyxXQUFVOzBCQUNadkIsMEJBQ0MsOERBQUNtQztvQkFBT0MsU0FBUzlCO29CQUFnQmlCLFdBQVU7OEJBQU87Ozs7O3lDQUlsRCw4REFBQ1k7b0JBQU9DLFNBQVMsSUFBTW5DLGFBQWE7OEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JEO0dBakVTTDtLQUFBQTtBQW1FVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0Z1bGxOb3RlLmpzPzU1YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gRnVsbE5vdGUoeyBkYXRhLCBjcmVhdGVkQXQsIG9uVXBkYXRlZE5vdGUgfSkge1xuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlZGl0ZWROb3RlLCBzZXRFZGl0ZWROb3RlXSA9IHVzZVN0YXRlKGRhdGEpXG4gIGNvbnN0IFtmb3JjZVVwZGF0ZSwgc2V0Rm9yY2VVcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlU2F2ZU5vdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKVxuICAgIC8vIE1ha2UgYW4gQVBJIGNhbGwgdG8gdXBkYXRlIHRoZSBub3RlXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbm90ZXMvJHtkYXRhLl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVkaXRlZE5vdGUpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgLy8gTm90ZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSwgdXBkYXRlIHRoZSBzdGF0ZSBpbiB0aGUgcGFyZW50IGNvbXBvbmVudFxuICAgICAgICAgIG9uVXBkYXRlZE5vdGUoZGF0YS5faWQsIGVkaXRlZE5vdGUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ05vdGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknKVxuICAgICAgICAgIHNldEZvcmNlVXBkYXRlKCFmb3JjZVVwZGF0ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBub3RlOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBjYXNlIGlmIG5lZWRlZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBub3RlOicsIGVycm9yKVxuICAgICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGNhc2UgaWYgbmVlZGVkXG4gICAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC00IGJnLXdoaXRlXCI+XG4gICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZE5vdGUudGl0bGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFZGl0ZWROb3RlKHsgLi4uZWRpdGVkTm90ZSwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICApfVxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIG1iLTJcIj57ZGF0YS5jcmVhdGVkQXR9PC9wPlxuICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZE5vdGUuY29udGVudH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRlZE5vdGUoeyAuLi5lZGl0ZWROb3RlLCBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lXCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcIj57ZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmVOb3RlfSBjbGFzc05hbWU9XCJtci0yXCI+XG4gICAgICAgICAgICBTYXZlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxOb3RlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZ1bGxOb3RlIiwiZGF0YSIsImNyZWF0ZWRBdCIsIm9uVXBkYXRlZE5vdGUiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJlZGl0ZWROb3RlIiwic2V0RWRpdGVkTm90ZSIsImZvcmNlVXBkYXRlIiwic2V0Rm9yY2VVcGRhdGUiLCJoYW5kbGVTYXZlTm90ZSIsImZldGNoIiwiX2lkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInRpdGxlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaDEiLCJwIiwidGV4dGFyZWEiLCJjb250ZW50IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/FullNote.js\n"));

/***/ })

});