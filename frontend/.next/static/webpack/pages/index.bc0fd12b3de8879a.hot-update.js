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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FullNote(param) {\n    let { data , createdAt , onUpdatedNote  } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editedNote, setEditedNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const handleSaveNote = ()=>{\n        setIsEditing(false);\n        // Make an API call to update the note\n        fetch(\"http://localhost:5000/api/v1/notes/\".concat(data._id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(editedNote)\n        }).then((response)=>{\n            if (response.ok) {\n                // Note updated successfully, update the state in the parent component\n                onUpdateNote(data._id, editedNote);\n                console.log(\"Note updated successfully\");\n            } else {\n                console.error(\"Error updating note:\", response.statusText);\n            // Handle the error case if needed\n            }\n        }).catch((error)=>{\n            console.error(\"Error updating note:\", error);\n        // Handle the error case if needed\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-4 bg-white\",\n        children: [\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: editedNote.title,\n                onChange: (e)=>setEditedNote({\n                        ...editedNote,\n                        title: e.target.value\n                    }),\n                className: \"text-2xl font-bold mb-4\"\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: data.title\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500 text-xs mb-2\",\n                children: data.createdAt\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: editedNote.content,\n                onChange: (e)=>setEditedNote({\n                        ...editedNote,\n                        content: e.target.value\n                    }),\n                className: \"flex-1 bg-transparent outline-none\"\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex-1 bg-transparent outline-none\",\n                children: data.content\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end\",\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSaveNote,\n                    className: \"mr-2\",\n                    children: \"Save\"\n                }, void 0, false, {\n                    fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsEditing(true),\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/components/FullNote.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(FullNote, \"GSbzhQwIaML0M6CDGdrAEDcDUHs=\");\n_c = FullNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullNote);\nvar _c;\n$RefreshReg$(_c, \"FullNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Z1bGxOb3RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxTQUFTRSxTQUFTLEtBQWtDO1FBQWxDLEVBQUVDLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxjQUFhLEVBQUUsR0FBbEM7O0lBQ2hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUNFO0lBRTdDLE1BQU1PLGlCQUFpQjtRQUNyQkgsYUFBYTtRQUNiLHNDQUFzQztRQUN0Q0ksTUFBTSxzQ0FBK0MsT0FBVFIsS0FBS1MsTUFBTztZQUN0REMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxVQUFVVDtRQUN2QixHQUNHVSxLQUFLLENBQUNDO1lBQ0wsSUFBSUEsU0FBU0MsSUFBSTtnQkFDZixzRUFBc0U7Z0JBQ3RFQyxhQUFhbEIsS0FBS1MsS0FBS0o7Z0JBQ3ZCYyxRQUFRQyxJQUFJO1lBQ2QsT0FBTztnQkFDTEQsUUFBUUUsTUFBTSx3QkFBd0JMLFNBQVNNO1lBQy9DLGtDQUFrQztZQUNwQztRQUNGLEdBQ0NDLE1BQU0sQ0FBQ0Y7WUFDTkYsUUFBUUUsTUFBTSx3QkFBd0JBO1FBQ3RDLGtDQUFrQztRQUNwQztJQUNKO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7O1lBQ1p0QiwwQkFDQyw4REFBQ3VCO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPdkIsV0FBV3dCO2dCQUNsQkMsVUFBVSxDQUFDQyxJQUFNekIsY0FBYzt3QkFBRSxHQUFHRCxVQUFVO3dCQUFFd0IsT0FBT0UsRUFBRUMsT0FBT0o7b0JBQU07Z0JBQ3RFSCxXQUFVOzs7OztxQ0FHWiw4REFBQ1E7Z0JBQUdSLFdBQVU7MEJBQTJCekIsS0FBSzZCOzs7Ozs7MEJBRWhELDhEQUFDSztnQkFBRVQsV0FBVTswQkFBOEJ6QixLQUFLQzs7Ozs7O1lBQy9DRSwwQkFDQyw4REFBQ2dDO2dCQUNDUCxPQUFPdkIsV0FBVytCO2dCQUNsQk4sVUFBVSxDQUFDQyxJQUFNekIsY0FBYzt3QkFBRSxHQUFHRCxVQUFVO3dCQUFFK0IsU0FBU0wsRUFBRUMsT0FBT0o7b0JBQU07Z0JBQ3hFSCxXQUFVOzs7OztxQ0FHWiw4REFBQ1M7Z0JBQUVULFdBQVU7MEJBQXNDekIsS0FBS29DOzs7Ozs7MEJBRTFELDhEQUFDWjtnQkFBSUMsV0FBVTswQkFDWnRCLDBCQUNDLDhEQUFDa0M7b0JBQU9DLFNBQVMvQjtvQkFBZ0JrQixXQUFVOzhCQUFPOzs7Ozt5Q0FJbEQsOERBQUNZO29CQUFPQyxTQUFTLElBQU1sQyxhQUFhOzhCQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRDtHQS9EU0w7S0FBQUE7QUFpRVQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9GdWxsTm90ZS5qcz81NWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEZ1bGxOb3RlKHsgZGF0YSwgY3JlYXRlZEF0LCBvblVwZGF0ZWROb3RlIH0pIHtcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZWRpdGVkTm90ZSwgc2V0RWRpdGVkTm90ZV0gPSB1c2VTdGF0ZShkYXRhKVxuXG4gIGNvbnN0IGhhbmRsZVNhdmVOb3RlID0gKCkgPT4ge1xuICAgIHNldElzRWRpdGluZyhmYWxzZSlcbiAgICAvLyBNYWtlIGFuIEFQSSBjYWxsIHRvIHVwZGF0ZSB0aGUgbm90ZVxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL25vdGVzLyR7ZGF0YS5faWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlZGl0ZWROb3RlKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIC8vIE5vdGUgdXBkYXRlZCBzdWNjZXNzZnVsbHksIHVwZGF0ZSB0aGUgc3RhdGUgaW4gdGhlIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgICBvblVwZGF0ZU5vdGUoZGF0YS5faWQsIGVkaXRlZE5vdGUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ05vdGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIG5vdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGNhc2UgaWYgbmVlZGVkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIG5vdGU6JywgZXJyb3IpXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgY2FzZSBpZiBuZWVkZWRcbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTQgYmctd2hpdGVcIj5cbiAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17ZWRpdGVkTm90ZS50aXRsZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRlZE5vdGUoeyAuLi5lZGl0ZWROb3RlLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICl9XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHMgbWItMlwiPntkYXRhLmNyZWF0ZWRBdH08L3A+XG4gICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB2YWx1ZT17ZWRpdGVkTm90ZS5jb250ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGVkTm90ZSh7IC4uLmVkaXRlZE5vdGUsIGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZVwiPntkYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZU5vdGV9IGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX0+RWRpdDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbE5vdGVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRnVsbE5vdGUiLCJkYXRhIiwiY3JlYXRlZEF0Iiwib25VcGRhdGVkTm90ZSIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImVkaXRlZE5vdGUiLCJzZXRFZGl0ZWROb3RlIiwiaGFuZGxlU2F2ZU5vdGUiLCJmZXRjaCIsIl9pZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwib25VcGRhdGVOb3RlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3RhdHVzVGV4dCIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJ0aXRsZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImgxIiwicCIsInRleHRhcmVhIiwiY29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/FullNote.js\n"));

/***/ })

});