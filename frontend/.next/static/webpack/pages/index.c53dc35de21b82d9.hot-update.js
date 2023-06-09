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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainTitle */ \"./pages/components/MainTitle.js\");\n/* harmony import */ var _components_ScrollableDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScrollableDiv */ \"./pages/components/ScrollableDiv.js\");\n/* harmony import */ var _components_Sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Sort */ \"./pages/components/Sort.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_FullNote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FullNote */ \"./pages/components/FullNote.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedNote, setSelectedNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data[0] || null);\n    const [createdAt, setCreatedAt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchData = ()=>{\n        fetch(\"http://localhost:5000/api/v1/notes\").then((response)=>{\n            return response.json();\n        }).then((data)=>{\n            setData(data.reverse());\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleNoteClick = async (noteId)=>{\n        try {\n            // Perform API call to retrieve the selected note based on its ID\n            // For example:\n            const response = await fetch(\"http://localhost:5000/api/v1/notes/\".concat(noteId));\n            const clickedNote = await response.json();\n            // Update the selected note in the state to display it on the right side\n            setSelectedNote(clickedNote);\n        } catch (error) {\n            console.error(\"Error retrieving selected note:\", error);\n        }\n    };\n    const handleNewNoteClick = (timestamp)=>{\n        setSelectedNote({});\n        setCreatedAt(timestamp);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data.length > 0) {\n            setSelectedNote(data[0]);\n        }\n    }, [\n        data\n    ]);\n    const handleDeleteNote = (noteId)=>{\n        // Make an API call to delete the note\n        fetch(\"http://localhost:5000/api/v1/notes/\".concat(noteId), {\n            method: \"DELETE\"\n        }).then((response)=>{\n            if (response.ok) {\n                // Note deleted successfully, update the state\n                setData((prevData)=>prevData.filter((note)=>note._id !== noteId));\n                // Update the selected note if the currently selected note is the one being deleted\n                if (selectedNote && selectedNote._id === noteId) {\n                    setSelectedNote(data[0] || null);\n                }\n                console.log(\"Note deleted successfully\");\n            } else {\n                console.error(\"Error deleting note:\", response.statusText);\n            // Handle the error case if needed\n            }\n        }).catch((error)=>{\n            console.error(\"Error deleting note:\", error);\n        // Handle the error case if needed\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 w-screen h-scree\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/4 h-screen border-r-2 border-gray-300 bg-slate-50 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"NOTES\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollableDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: data,\n                            handleNoteClick: handleNoteClick,\n                            handleDeleteNote: handleDeleteNote\n                        }, void 0, false, {\n                            fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sort__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/4 h-screen\",\n                    children: selectedNote && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FullNote__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: selectedNote,\n                        createdAt: createdAt\n                    }, void 0, false, {\n                        fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 58\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lionelfloriani/Code/WebDev/notes-app/frontend/pages/index.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"AJwY0nY8SmKxUynleGLnZvdTwVE=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7QUFDUTtBQUNsQjtBQUNIO0FBQ1c7QUFFN0IsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDTyxJQUFJLENBQUMsRUFBRSxJQUFJO0lBQzVELE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNYSxZQUFZO1FBQ2hCQyxNQUFNLHNDQUNIQyxLQUFLLENBQUNDO1lBQ0wsT0FBT0EsU0FBU0M7UUFDbEIsR0FDQ0YsS0FBSyxDQUFDUjtZQUNMQyxRQUFRRCxLQUFLVztRQUNmO0lBQ0o7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JZO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sa0JBQWtCLE9BQU9DO1FBQzdCLElBQUk7WUFDRixpRUFBaUU7WUFDakUsZUFBZTtZQUNmLE1BQU1KLFdBQVcsTUFBTUYsTUFBTSxzQ0FBNkMsT0FBUE07WUFDbkUsTUFBTUMsY0FBYyxNQUFNTCxTQUFTQztZQUNuQyx3RUFBd0U7WUFDeEVQLGdCQUFnQlc7UUFDbEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELE1BQU0sbUNBQW1DQTtRQUNuRDtJQUNGO0lBRUEsTUFBTUUscUJBQXFCLENBQUNDO1FBQzFCZixnQkFBZ0IsQ0FBQztRQUNqQkUsYUFBYWE7SUFDZjtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxLQUFLbUIsU0FBUyxHQUFHO1lBQ25CaEIsZ0JBQWdCSCxJQUFJLENBQUMsRUFBRTtRQUN6QjtJQUNGLEdBQUc7UUFBQ0E7S0FBSztJQUVULE1BQU1vQixtQkFBbUIsQ0FBQ1A7UUFDeEIsc0NBQXNDO1FBQ3RDTixNQUFNLHNDQUE2QyxPQUFQTSxTQUFVO1lBQ3BEUSxRQUFRO1FBQ1YsR0FDR2IsS0FBSyxDQUFDQztZQUNMLElBQUlBLFNBQVNhLElBQUk7Z0JBQ2YsOENBQThDO2dCQUM5Q3JCLFFBQVEsQ0FBQ3NCLFdBQWFBLFNBQVNDLE9BQU8sQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUWI7Z0JBRTdELG1GQUFtRjtnQkFDbkYsSUFBSVgsZ0JBQWdCQSxhQUFhd0IsUUFBUWIsUUFBUTtvQkFDL0NWLGdCQUFnQkgsSUFBSSxDQUFDLEVBQUUsSUFBSTtnQkFDN0I7Z0JBRUFnQixRQUFRVyxJQUFJO1lBQ2QsT0FBTztnQkFDTFgsUUFBUUQsTUFBTSx3QkFBd0JOLFNBQVNtQjtZQUMvQyxrQ0FBa0M7WUFDcEM7UUFDRixHQUNDQyxNQUFNLENBQUNkO1lBQ05DLFFBQVFELE1BQU0sd0JBQXdCQTtRQUN0QyxrQ0FBa0M7UUFDcEM7SUFDSjtJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDcEMsNkRBQVNBOzRCQUFDcUMsT0FBTTs7Ozs7O3NDQUNqQiw4REFBQ3BDLGlFQUFhQTs0QkFBQ0ksTUFBTUE7NEJBQU1ZLGlCQUFpQkE7NEJBQWlCUSxrQkFBa0JBOzs7Ozs7c0NBQy9FLDhEQUFDdkIsd0RBQUlBOzs7Ozs7Ozs7Ozs4QkFFUCw4REFBQ2lDO29CQUFJQyxXQUFVOzhCQUFrQjdCLDhCQUFnQiw4REFBQ0osNERBQVFBO3dCQUFDRSxNQUFNRTt3QkFBY0UsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEc7R0FsRndCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWluVGl0bGUgZnJvbSAnLi9jb21wb25lbnRzL01haW5UaXRsZSdcbmltcG9ydCBTY3JvbGxhYmxlRGl2IGZyb20gJy4vY29tcG9uZW50cy9TY3JvbGxhYmxlRGl2J1xuaW1wb3J0IFNvcnQgZnJvbSAnLi9jb21wb25lbnRzL1NvcnQnXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcbmltcG9ydCBGdWxsTm90ZSBmcm9tICcuL2NvbXBvbmVudHMvRnVsbE5vdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzZWxlY3RlZE5vdGUsIHNldFNlbGVjdGVkTm90ZV0gPSB1c2VTdGF0ZShkYXRhWzBdIHx8IG51bGwpXG4gIGNvbnN0IFtjcmVhdGVkQXQsIHNldENyZWF0ZWRBdF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbm90ZXMnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXREYXRhKGRhdGEucmV2ZXJzZSgpKVxuICAgICAgfSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlTm90ZUNsaWNrID0gYXN5bmMgKG5vdGVJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBQZXJmb3JtIEFQSSBjYWxsIHRvIHJldHJpZXZlIHRoZSBzZWxlY3RlZCBub3RlIGJhc2VkIG9uIGl0cyBJRFxuICAgICAgLy8gRm9yIGV4YW1wbGU6XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL25vdGVzLyR7bm90ZUlkfWApXG4gICAgICBjb25zdCBjbGlja2VkTm90ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgLy8gVXBkYXRlIHRoZSBzZWxlY3RlZCBub3RlIGluIHRoZSBzdGF0ZSB0byBkaXNwbGF5IGl0IG9uIHRoZSByaWdodCBzaWRlXG4gICAgICBzZXRTZWxlY3RlZE5vdGUoY2xpY2tlZE5vdGUpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgc2VsZWN0ZWQgbm90ZTonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdOb3RlQ2xpY2sgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWROb3RlKHt9KVxuICAgIHNldENyZWF0ZWRBdCh0aW1lc3RhbXApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFNlbGVjdGVkTm90ZShkYXRhWzBdKVxuICAgIH1cbiAgfSwgW2RhdGFdKVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU5vdGUgPSAobm90ZUlkKSA9PiB7XG4gICAgLy8gTWFrZSBhbiBBUEkgY2FsbCB0byBkZWxldGUgdGhlIG5vdGVcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9ub3Rlcy8ke25vdGVJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgLy8gTm90ZSBkZWxldGVkIHN1Y2Nlc3NmdWxseSwgdXBkYXRlIHRoZSBzdGF0ZVxuICAgICAgICAgIHNldERhdGEoKHByZXZEYXRhKSA9PiBwcmV2RGF0YS5maWx0ZXIoKG5vdGUpID0+IG5vdGUuX2lkICE9PSBub3RlSWQpKVxuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWxlY3RlZCBub3RlIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbm90ZSBpcyB0aGUgb25lIGJlaW5nIGRlbGV0ZWRcbiAgICAgICAgICBpZiAoc2VsZWN0ZWROb3RlICYmIHNlbGVjdGVkTm90ZS5faWQgPT09IG5vdGVJZCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWROb3RlKGRhdGFbMF0gfHwgbnVsbClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnTm90ZSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgbm90ZTonLCByZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgY2FzZSBpZiBuZWVkZWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgbm90ZTonLCBlcnJvcilcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBjYXNlIGlmIG5lZWRlZFxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC1zY3JlZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgaC1zY3JlZW4gYm9yZGVyLXItMiBib3JkZXItZ3JheS0zMDAgYmctc2xhdGUtNTAgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxNYWluVGl0bGUgdGl0bGU9XCJOT1RFU1wiPjwvTWFpblRpdGxlPlxuICAgICAgICAgIDxTY3JvbGxhYmxlRGl2IGRhdGE9e2RhdGF9IGhhbmRsZU5vdGVDbGljaz17aGFuZGxlTm90ZUNsaWNrfSBoYW5kbGVEZWxldGVOb3RlPXtoYW5kbGVEZWxldGVOb3RlfSAvPlxuICAgICAgICAgIDxTb3J0PjwvU29ydD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgaC1zY3JlZW5cIj57c2VsZWN0ZWROb3RlICYmIDxGdWxsTm90ZSBkYXRhPXtzZWxlY3RlZE5vdGV9IGNyZWF0ZWRBdD17Y3JlYXRlZEF0fSAvPn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYWluVGl0bGUiLCJTY3JvbGxhYmxlRGl2IiwiU29ydCIsIkZ1bGxOb3RlIiwiQXBwIiwiZGF0YSIsInNldERhdGEiLCJzZWxlY3RlZE5vdGUiLCJzZXRTZWxlY3RlZE5vdGUiLCJjcmVhdGVkQXQiLCJzZXRDcmVhdGVkQXQiLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXZlcnNlIiwiaGFuZGxlTm90ZUNsaWNrIiwibm90ZUlkIiwiY2xpY2tlZE5vdGUiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVOZXdOb3RlQ2xpY2siLCJ0aW1lc3RhbXAiLCJsZW5ndGgiLCJoYW5kbGVEZWxldGVOb3RlIiwibWV0aG9kIiwib2siLCJwcmV2RGF0YSIsImZpbHRlciIsIm5vdGUiLCJfaWQiLCJsb2ciLCJzdGF0dXNUZXh0IiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});