/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css"
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  gap: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: rgb(64, 58, 58);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n/* Grid Layout */\r\n#app {\r\n  display: grid;\r\n  grid-template-columns: 250px 1fr;\r\n  grid-template-rows: 60px 1fr 30px;\r\n  height: 100vh;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n  grid-column: 1 / -1;\r\n  background-color: #f3d8b872;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /* padding-left: 24px; */\r\n  padding-bottom: 10px;\r\n}\r\n\r\n/* Sidebar  */\r\n#sidebar {\r\n  grid-column: 1 / 2;\r\n  /* background-color: #f3d8b872; */\r\n  padding: 15px;\r\n  border-right: 1px solid #ddd;\r\n}\r\n\r\n#sidebar h2 {\r\n  margin-bottom: 16px;\r\n  font-size: 18px;\r\n  /* color: #333; */\r\n}\r\n\r\n/* Main Content  */\r\n#main-content {\r\n  grid-column: 2 / 3;\r\n  /* background-color: #f3d8b8; */\r\n  padding: 20px;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* Modal Overlay */\r\n.modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.modal-overlay.hidden {\r\n  display: none;\r\n}\r\n\r\n.modal-box {\r\n  background: white;\r\n  border-radius: 8px;\r\n  width: 420px;\r\n  max-width: 90%;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 16px 20px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.modal-header h3 {\r\n  margin: 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.modal-close {\r\n  background: none;\r\n  border: none;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  color: #999;\r\n  line-height: 1;\r\n}\r\n\r\n.modal-close:hover {\r\n  color: #333;\r\n}\r\n\r\n#modal-form {\r\n  padding: 20px;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.form-group label {\r\n  display: block;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  margin-bottom: 4px;\r\n  color: rgb(64, 58, 58);\r\n}\r\n\r\n.form-group input,\r\n.form-group select,\r\n.form-group textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  font-family: inherit;\r\n}\r\n\r\n.form-group input:focus,\r\n.form-group select:focus,\r\n.form-group textarea:focus {\r\n  outline: none;\r\n  border-color: #f3d8b8;\r\n}\r\n\r\n.modal-submit {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background: #f3d8b8;\r\n  color: rgb(64, 58, 58);\r\n  border: none;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  margin-top: 8px;\r\n}\r\n\r\n.modal-submit:hover {\r\n  background: #e8c8a8;\r\n}\r\n\r\n/* Sidebar Buttons */\r\n#projects-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.project-item {\r\n  display: flex;\r\n  gap: 4px;\r\n  align-items: center;\r\n}\r\n\r\n.project-btn {\r\n  flex: 1;\r\n  padding: 10px 12px;\r\n  background: white;\r\n  border: 1px solid #ddd;\r\n  border-radius: 6px;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n}\r\n\r\n.project-btn:hover {\r\n  background: #f3d8b844;\r\n}\r\n\r\n.project-delete-btn {\r\n  background: none;\r\n  border: 1px solid transparent;\r\n  color: #ccc;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  padding: 4px 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.project-delete-btn:hover {\r\n  color: #c62828;\r\n  border-color: #ddd;\r\n}\r\n\r\n#add-project-btn {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background: #f3d8b8;\r\n  color: rgb(64, 58, 58);\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n#add-project-btn:hover {\r\n  background: #e8c8a8;\r\n}\r\n\r\n/* Todo Header */\r\n.todo-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.todo-header h2 {\r\n  font-size: 22px;\r\n}\r\n\r\n#add-todo-btn {\r\n  padding: 8px 16px;\r\n  background: #f3d8b8;\r\n  color: rgb(64, 58, 58);\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n#add-todo-btn:hover {\r\n  background: #e8c8a8;\r\n}\r\n\r\n/* Todo Cards */\r\n.todo-card {\r\n  background: #fafafa;\r\n  border: 1px solid #eee;\r\n  border-radius: 8px;\r\n  padding: 12px 16px;\r\n  margin-bottom: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-card:hover {\r\n  border-color: #f3d8b8;\r\n}\r\n\r\n.todo-title {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n\r\n.todo-due-date {\r\n  font-size: 12px;\r\n  color: #999;\r\n}\r\n\r\n.todo-priority {\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  border-radius: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n.priority-low {\r\n  background: #e8f5e9;\r\n  color: #2e7d32;\r\n}\r\n\r\n.priority-medium {\r\n  background: #fff3e0;\r\n  color: #e65100;\r\n}\r\n\r\n.priority-high {\r\n  background: #fbe9e7;\r\n  color: #c62828;\r\n}\r\n\r\n/* Status Counter */\r\n.status-counter {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n  padding-bottom: 12px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.counter-item {\r\n  font-size: 13px;\r\n  padding: 4px 12px;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.counter-todo { background: #f3d8b844; }\r\n.counter-doing { background: #fff3e0; color: #e65100; }\r\n.counter-done { background: #e8f5e9; color: #2e7d32; }\r\n\r\n/* Todo Card Right Side */\r\n.todo-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.todo-actions {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n/* Status Buttons */\r\n.status-buttons {\r\n  display: flex;\r\n  gap: 3px;\r\n}\r\n\r\n.status-btn {\r\n  font-size: 11px;\r\n  padding: 4px 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  background: white;\r\n  color: #999;\r\n  transition: all 0.15s;\r\n}\r\n\r\n.status-btn:hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.status-btn.active {\r\n  border-color: transparent;\r\n  cursor: default;\r\n}\r\n\r\n.status-btn.status-todo.active {\r\n  background: #f3d8b8;\r\n  color: rgb(64, 58, 58);\r\n}\r\n\r\n.status-btn.status-doing.active {\r\n  background: #fff3e0;\r\n  color: #e65100;\r\n  border-color: #ffcc80;\r\n}\r\n\r\n.status-btn.status-done.active {\r\n  background: #e8f5e9;\r\n  color: #2e7d32;\r\n  border-color: #a5d6a7;\r\n}\r\n\r\n.delete-btn {\r\n  background: none;\r\n  border: none;\r\n  color: #ccc;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  padding: 4px 8px;\r\n}\r\n\r\n.delete-btn:hover {\r\n  color: #c62828;\r\n}\r\n\r\n/* Footer  */\r\nfooter {\r\n  grid-column: 1 / -1;\r\n  background: #f3d8b872;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  font-size: 12px;\r\n}\r\n\r\nfooter a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\nfooter a:hover {\r\n  text-decoration: underline;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/assets/style.css"
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/assets/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/dom/handler.js"
/*!****************************!*\
  !*** ./src/dom/handler.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddProject: () => (/* binding */ handleAddProject),\n/* harmony export */   handleAddTodo: () => (/* binding */ handleAddTodo),\n/* harmony export */   handleDeleteProject: () => (/* binding */ handleDeleteProject),\n/* harmony export */   handleDeleteTodo: () => (/* binding */ handleDeleteTodo),\n/* harmony export */   handleModalSubmit: () => (/* binding */ handleModalSubmit),\n/* harmony export */   handleStatusChange: () => (/* binding */ handleStatusChange),\n/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject)\n/* harmony export */ });\n/* harmony import */ var _logic_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/app.js */ \"./src/logic/app.js\");\n/* harmony import */ var _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/todo.js */ \"./src/logic/todo.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/dom/ui.js\");\n\r\n\r\n\r\n\r\nlet activeProject = null;\r\n\r\nconst setActiveProject = (project) => {\r\n  activeProject = project;\r\n};\r\n\r\nconst handleAddProject = () => {\r\n  const fields = `\r\n  <div class='form-group'>\r\n  <label for='project-name'>Project Name</label>\r\n  <input type='text' id='project-name' required />\r\n  </div>\r\n  `;\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.showModal)(\"New Project\", fields);\r\n};\r\n\r\nconst handleAddTodo = (project) => {\r\n  if (!activeProject) return;\r\n\r\n  const fields = `\r\n      <div class=\"form-group\">\r\n      <label for=\"todo-title\">Title</label>\r\n      <input type=\"text\" id=\"todo-title\" required />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"todo-desc\">Description</label>\r\n      <textarea id=\"todo-desc\" rows=\"3\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"todo-date\">Due Date</label>\r\n      <input type=\"date\" id=\"todo-date\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"todo-priority\">Priority</label>\r\n      <select id=\"todo-priority\">\r\n        <option value=\"low\">Low</option>\r\n        <option value=\"medium\" selected>Medium</option>\r\n        <option value=\"high\">High</option>\r\n      </select>\r\n    </div>\r\n  `;\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.showModal)(\"Add Todo\", fields);\r\n};\r\n\r\nconst handleModalSubmit = () => {\r\n  const title = document.getElementById(\"modal-title\").textContent;\r\n\r\n  if (title === \"New Project\") {\r\n    const data = (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.getModalData)([\"project-name\"]);\r\n    if (data[\"project-name\"].trim()) {\r\n      (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(data[\"project-name\"].trim());\r\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderSidebar)();\r\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.hideModal)();\r\n    }\r\n  }\r\n\r\n  if (title === \"Add Todo\") {\r\n    const data = (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.getModalData)([\r\n      \"todo-title\",\r\n      \"todo-desc\",\r\n      \"todo-date\",\r\n      \"todo-priority\",\r\n    ]);\r\n    if (data[\"todo-title\"].trim()) {\r\n      const newTodo = (0,_logic_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\r\n        data[\"todo-title\"].trim(),\r\n        data[\"todo-desc\"],\r\n        data[\"todo-date\"],\r\n        data[\"todo-priority\"],\r\n      );\r\n      (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.addTodoToProject)(activeProject.name, newTodo);\r\n      const updatedProject = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByName)(activeProject.name);\r\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(updatedProject);\r\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.hideModal)();\r\n    }\r\n  }\r\n};\r\n\r\nconst handleDeleteTodo = (projectName, todoId) => {\r\n  (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.removeTodoFromProject)(projectName, todoId);\r\n  const updatedProject = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByName)(projectName);\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(updatedProject);\r\n};\r\n\r\nconst handleStatusChange = (projectName, todoId, newStatus) => {\r\n  const project = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByName)(projectName);\r\n  if (!project) return;\r\n  const todo = project.todos.find((t) => t.id === todoId);\r\n  if (!todo) return;\r\n\r\n  todo.status = newStatus;\r\n  (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.saveAllProjects)();\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(project);\r\n};\r\n\r\nconst handleDeleteProject = (projectName) => {\r\n  if (projectName === \"Default\") {\r\n    alert(\"Cannot delete the Default project!\");\r\n    return;\r\n  }\r\n  (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectName);\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderSidebar)();\r\n  const projects = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();\r\n  if (projects.length > 0) {\r\n    setActiveProject(projects[0]);\r\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(projects[0]);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://odin-todo/./src/dom/handler.js?\n}");

/***/ },

/***/ "./src/dom/ui.js"
/*!***********************!*\
  !*** ./src/dom/ui.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getModalData: () => (/* binding */ getModalData),\n/* harmony export */   hideModal: () => (/* binding */ hideModal),\n/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos),\n/* harmony export */   showModal: () => (/* binding */ showModal)\n/* harmony export */ });\n/* harmony import */ var _logic_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/app.js */ \"./src/logic/app.js\");\n/* harmony import */ var _handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler.js */ \"./src/dom/handler.js\");\n\r\n\r\n\r\n// const projects = [{ name: \"default\" }];\r\n\r\n// render sidebar\r\nconst renderSidebar = () => {\r\n  const container = document.getElementById(\"projects-list\");\r\n  const projects = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();\r\n\r\n  container.innerHTML = \"\";\r\n\r\n  projects.forEach((project) => {\r\n    const item = document.createElement(\"div\");\r\n    item.classList.add(\"project-item\");\r\n\r\n    const btn = document.createElement(\"button\");\r\n    btn.textContent = project.name;\r\n    btn.classList.add(\"project-btn\");\r\n\r\n    btn.addEventListener(\"click\", () => {\r\n      renderTodos(project);\r\n    });\r\n\r\n    item.appendChild(btn);\r\n\r\n    const delBtn = document.createElement(\"button\");\r\n    delBtn.textContent = \"×\";\r\n    delBtn.classList.add(\"project-delete-btn\");\r\n    delBtn.dataset.project = project.name;\r\n\r\n    item.appendChild(delBtn);\r\n    container.appendChild(item);\r\n  });\r\n};\r\n\r\n// render todo\r\nconst renderTodos = (project) => {\r\n  const container = document.getElementById(\"main-content\");\r\n\r\n  // Hitung jumlah per status\r\n  const todos = project.todos.filter((t) => t.status === \"todo\").length;\r\n  const doings = project.todos.filter((t) => t.status === \"doing\").length;\r\n  const dones = project.todos.filter((t) => t.status === \"done\").length;\r\n\r\n  container.innerHTML = `\r\n  <div class='todo-header'>\r\n  <h2>${project.name}</h2>\r\n  <button id='add-todo-btn'>+Add Todo</button>\r\n  </div>\r\n  <div class=\"status-counter\">\r\n    <span class=\"counter-item counter-todo\">📋 ${todos}</span>\r\n    <span class=\"counter-item counter-doing\">🔄 ${doings}</span>\r\n    <span class=\"counter-item counter-done\">✅ ${dones}</span>\r\n  </div>\r\n  `;\r\n\r\n  project.todos.forEach((todo) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"todo-card\");\r\n\r\n    let priorityClass = \"priority-low\";\r\n    if (todo.priority === \"medium\") priorityClass = \"priority-medium\";\r\n    if (todo.priority === \"high\") priorityClass = \"priority-high\";\r\n\r\n    const isTodo = todo.status === \"todo\";\r\n    const isDoing = todo.status === \"doing\";\r\n    const isDone = todo.status === \"done\";\r\n\r\n    card.innerHTML = `\r\n      <div style=\"flex: 1;\">\r\n        <div class=\"todo-title\">${todo.title}</div>\r\n        <div class=\"todo-due-date\">${todo.dueDate || \"No date\"}</div>\r\n      </div>\r\n      <div class=\"todo-right\">\r\n        <div class=\"status-buttons\">\r\n          <button class=\"status-btn ${isTodo ? \"active\" : \"\"} status-todo\" data-id=\"${todo.id}\" data-status=\"todo\">Todo</button>\r\n          <button class=\"status-btn ${isDoing ? \"active\" : \"\"} status-doing\" data-id=\"${todo.id}\" data-status=\"doing\">Doing</button>\r\n          <button class=\"status-btn ${isDone ? \"active\" : \"\"} status-done\" data-id=\"${todo.id}\" data-status=\"done\">Done</button>\r\n        </div>\r\n        <div class=\"todo-actions\">\r\n          <span class=\"todo-priority ${priorityClass}\">${todo.priority}</span>\r\n          <button class=\"delete-btn\" data-id=\"${todo.id}\">&times;</button>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n    container.appendChild(card);\r\n  });\r\n};\r\n\r\nconst showModal = (title, fieldsHTML) => {\r\n  const overlay = document.getElementById(\"modal-overlay\");\r\n  document.getElementById(\"modal-title\").textContent = title;\r\n  document.getElementById(\"modal-fields\").innerHTML = fieldsHTML;\r\n  overlay.classList.remove(\"hidden\");\r\n};\r\n\r\nconst hideModal = () => {\r\n  const overlay = document.getElementById(\"modal-overlay\");\r\n  overlay.classList.add(\"hidden\");\r\n\r\n  document.getElementById(\"modal-form\").reset();\r\n};\r\n\r\nconst getModalData = (fieldsIds) => {\r\n  const data = {};\r\n  fieldsIds.map((id) => {\r\n    const el = document.getElementById(id);\r\n    if (el) data[id] = el.value;\r\n  });\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://odin-todo/./src/dom/ui.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/todo.js */ \"./src/logic/todo.js\");\n/* harmony import */ var _logic_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/project.js */ \"./src/logic/project.js\");\n/* harmony import */ var _logic_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/app.js */ \"./src/logic/app.js\");\n/* harmony import */ var _dom_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/ui.js */ \"./src/dom/ui.js\");\n/* harmony import */ var _dom_handler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/handler.js */ \"./src/dom/handler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n  (0,_dom_ui_js__WEBPACK_IMPORTED_MODULE_4__.renderSidebar)();\r\n\r\n  const projects = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_3__.getProjects)();\r\n  if (projects.length > 0) {\r\n    (0,_dom_ui_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(projects[0]);\r\n    (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.setActiveProject)(projects[0]);\r\n  }\r\n\r\n  document.getElementById(\"add-project-btn\").addEventListener(\"click\", () => {\r\n    (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleAddProject)();\r\n    console.log(\"add di pencet\");\r\n  });\r\n\r\n  document\r\n    .getElementById(\"modal-close-btn\")\r\n    .addEventListener(\"click\", _dom_ui_js__WEBPACK_IMPORTED_MODULE_4__.hideModal);\r\n\r\n  document.getElementById(\"modal-form\").addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleModalSubmit)();\r\n  });\r\n\r\n  document.getElementById(\"modal-overlay\").addEventListener(\"click\", (e) => {\r\n    if (e.target === document.getElementById(\"modal-overlay\")) {\r\n      (0,_dom_ui_js__WEBPACK_IMPORTED_MODULE_4__.hideModal)();\r\n    }\r\n  });\r\n\r\n  document.getElementById(\"main-content\").addEventListener(\"click\", (e) => {\r\n    if (e.target.id === \"add-todo-btn\") {\r\n      (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleAddTodo)();\r\n    }\r\n\r\n    if (e.target.classList.contains(\"delete-btn\")) {\r\n      const projectName = document.querySelector(\".todo-header h2\").textContent;\r\n      (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleDeleteTodo)(projectName, e.target.dataset.id);\r\n    }\r\n\r\n    if (e.target.classList.contains(\"status-btn\")) {\r\n      const projectName = document.querySelector(\".todo-header h2\").textContent;\r\n      (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleStatusChange)(projectName, e.target.dataset.id, e.target.dataset.status);\r\n    }\r\n  });\r\n\r\n  document.getElementById(\"projects-list\").addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"project-delete-btn\")) {\r\n      (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleDeleteProject)(e.target.dataset.project);\r\n    }\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", init);\r\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?\n}");

/***/ },

/***/ "./src/logic/app.js"
/*!**************************!*\
  !*** ./src/logic/app.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   getProjectByName: () => (/* binding */ getProjectByName),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   removeProject: () => (/* binding */ removeProject),\n/* harmony export */   removeTodoFromProject: () => (/* binding */ removeTodoFromProject),\n/* harmony export */   saveAllProjects: () => (/* binding */ saveAllProjects)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/logic/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/logic/todo.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/logic/storage.js\");\n\r\n\r\n\r\n\r\nlet projects = [];\r\n\r\nconst initData = () => {\r\n  const saved = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjects)();\r\n  if (saved.length > 0) {\r\n    projects = saved;\r\n  } else {\r\n    const defaultProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Default\");\r\n    defaultProject.addTodo((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Belajar Webpack\", \"Menyelesaikan modul webpack di Odin Project\", \"2026-07-15\", \"high\"));\r\n    defaultProject.addTodo((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Baca dokumentasi\", \"Membaca docs date-fns dan localStorage\", \"2026-07-12\", \"medium\", \"doing\"));\r\n    projects.push(defaultProject);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n  }\r\n};\r\n\r\ninitData();\r\n\r\nconst getProjects = () => {\r\n  return projects;\r\n};\r\n\r\nconst addProject = (name) => {\r\n  const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\r\n  projects.push(newProject);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n};\r\n\r\nconst getProjectByName = (name) => {\r\n  return projects.find((p) => p.name === name);\r\n};\r\n\r\nconst removeProject = (name) => {\r\n  projects = projects.filter((p) => p.name !== name);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n};\r\n\r\nconst addTodoToProject = (projectName, todo) => {\r\n  const project = getProjectByName(projectName);\r\n  if (project) {\r\n    project.addTodo(todo);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n  }\r\n};\r\n\r\nconst removeTodoFromProject = (projectName, todoId) => {\r\n  const project = getProjectByName(projectName);\r\n  if (project) {\r\n    project.removeTodo(todoId);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n  }\r\n};\r\n\r\nconst saveAllProjects = () => {\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n};\r\n\n\n//# sourceURL=webpack://odin-todo/./src/logic/app.js?\n}");

/***/ },

/***/ "./src/logic/project.js"
/*!******************************!*\
  !*** ./src/logic/project.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(name) {\r\n  return {\r\n    name,\r\n    todos: [],\r\n    addTodo(todo) {\r\n      this.todos.push(todo);\r\n    },\r\n    removeTodo(id) {\r\n      this.todos = this.todos.filter((t) => t.id !== id);\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://odin-todo/./src/logic/project.js?\n}");

/***/ },

/***/ "./src/logic/storage.js"
/*!******************************!*\
  !*** ./src/logic/storage.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearProject: () => (/* binding */ clearProject),\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/logic/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/logic/todo.js\");\n\r\n\r\n\r\nconst STORAGE_KEY = \"odin-todo-data\";\r\n\r\nconst saveProjects = (projects) => {\r\n  try {\r\n    const jsonString = JSON.stringify(projects);\r\n    localStorage.setItem(STORAGE_KEY, jsonString);\r\n  } catch (err) {\r\n    console.error(\"gagal menyimpan data ke local storage\");\r\n  }\r\n};\r\n\r\nfunction loadProjects() {\r\n  try {\r\n    const jsonString = localStorage.getItem(STORAGE_KEY);\r\n\r\n    if (!jsonString) return [];\r\n\r\n    const rawProject = JSON.parse(jsonString);\r\n    const project = rawProject.map((rp) => {\r\n      const project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(rp.name);\r\n\r\n      project.todos = rp.todos.map((rt) => {\r\n        return (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(rt.title, rt.description, rt.dueDate, rt.priority, rt.status);\r\n      });\r\n      return project;\r\n    });\r\n    return project;\r\n  } catch (err) {\r\n    console.error(\"gagal memuat data dari local storage\", err);\r\n    return [];\r\n  }\r\n}\r\n\r\nfunction clearProject() {\r\n  localStorage.removeItem(STORAGE_KEY);\r\n}\r\n\n\n//# sourceURL=webpack://odin-todo/./src/logic/storage.js?\n}");

/***/ },

/***/ "./src/logic/todo.js"
/*!***************************!*\
  !*** ./src/logic/todo.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nconst createTodo = (title, description, dueDate, priority, status = \"todo\") => {\r\n  return {\r\n    id: crypto.randomUUID(),\r\n    title,\r\n    description,\r\n    dueDate,\r\n    priority,\r\n    status, // \"todo\" | \"doing\" | \"done\"\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://odin-todo/./src/logic/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;