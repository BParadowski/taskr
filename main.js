/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n  letter-spacing: 0.1ch;\n  --header-color: #fdba74;\n  --projects-menu-color: #56aad1;\n  --text-color-gray: #57534e;\n  --accent-orange: #f97316;\n  --cat-background: rgb(254, 253, 249);\n  --accent-green: #bef264;\n  --accent-yellow: #fde047;\n  --accent-red: #fca5a5;\n  --light-gray: #e5e5e5;\n  --light-gray-text: #a3a3a3;\n  --light-gray-accent: #d4d4d4;\n}\n\nbody, html {\n  height: 100%;\n}\n\n.layout {\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n}\n\n.header {\n  grid-column: 1/-1;\n  height: 4rem;\n  padding: 1rem 2rem;\n  background-color: var(--header-color);\n  font-size: 2.5rem;\n  display: flex;\n  align-items: center;\n}\n\n.projects {\n  width: 12rem;\n  padding: 2rem;\n  background-color: var(--projects-menu-color);\n}\n.projects__title-container {\n  display: flex;\n  justify-content: space-evenly;\n  font-weight: 700;\n  padding-bottom: 2rem;\n  font-size: 1.7rem;\n}\n.projects__list {\n  display: grid;\n  gap: 1.5rem;\n  justify-content: center;\n  font-size: 1.4rem;\n}\n.projects__item {\n  cursor: pointer;\n  padding: 0.5rem 2rem;\n}\n.projects__item:hover {\n  outline: var(--header-color) 2px solid;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 2rem;\n  overflow-y: scroll;\n}\n\n@keyframes stagger {\n  from {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.project-page {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  align-items: center;\n  color: var(--text-color-gray);\n}\n.project-page__title {\n  padding: 1rem 2rem;\n  width: fit-content;\n  text-align: center;\n  box-shadow: 0 3px 0 0 var(--accent-orange);\n  font-size: 1.7rem;\n  font-weight: 700;\n}\n.project-page__desc {\n  width: min(70%, 60rem);\n}\n.project-page__list {\n  width: min(70%, 60rem);\n  gap: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.project-page__list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0.5rem 1.5rem;\n  width: 100%;\n  height: 3rem;\n  border: #fdba74 3px solid;\n  border-radius: 1.25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: none;\n  overflow: hidden;\n  position: relative;\n  opacity: 0;\n  animation: stagger ease-out 0.3s forwards 1;\n  animation-delay: calc(var(--order) * 0.1s);\n}\n.project-page__list-item::before {\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  left: -3rem;\n  width: 3rem;\n  border: #fdba74 3px solid;\n  border-right: none;\n  z-index: 1;\n  border-top-left-radius: 1.25rem;\n  border-bottom-left-radius: 1.25rem;\n}\n.project-page__list-item.low-priority::before {\n  background-color: var(--accent-green);\n}\n.project-page__list-item.medium-priority::before {\n  background-color: var(--accent-yellow);\n}\n.project-page__list-item.high-priority::before {\n  background-color: var(--accent-red);\n}\n.project-page__list-item.done {\n  background-color: var(--light-gray);\n  color: var(--light-gray-text);\n  border-color: var(--light-gray-text);\n}\n.project-page__list-item.done::before {\n  background-color: var(--light-gray-accent);\n  border-color: var(--light-gray-text);\n}\n\n.emptyPage {\n  flex: 1;\n  align-self: stretch;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n  background-color: var(--cat-background);\n  color: var(--text-color-gray);\n}\n.emptyPage > img {\n  height: 400px;\n  width: 400px;\n}\n.emptyPage > p {\n  max-width: 50ch;\n  text-align: center;\n}\n\n.newToDoBtn {\n  padding: 10px;\n}\n.newToDoBtn.hidden {\n  visibility: hidden;\n}\n\n.newToDoDialog__form {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.toDo__add-btn {\n  padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;AAAJ;;AAGA;EACI,eAAA;EACA,sBAAA;EACA,+BAAA;EACA,qBAAA;EAEA,uBAAA;EACA,8BAAA;EACA,0BAAA;EACA,wBAAA;EACA,oCAAA;EACA,uBAAA;EACA,wBAAA;EACA,qBAAA;EACA,qBAAA;EACA,0BAAA;EACA,4BAAA;AADJ;;AAIA;EACI,YAAA;AADJ;;AAIA;EACI,YAAA;EACA,aAAA;EACA,+BAAA;EACA,4BAAA;AADJ;;AAIA;EACI,iBAAA;EACA,YAAA;EACA,kBAAA;EAEA,qCAAA;EAEA,iBAAA;EAEA,aAAA;EACA,mBAAA;AAJJ;;AAOA;EACI,YAAA;EACA,aAAA;EACA,4CAAA;AAJJ;AAMI;EACI,aAAA;EACA,6BAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;AAJR;AAOI;EACI,aAAA;EACA,WAAA;EACA,uBAAA;EACA,iBAAA;AALR;AASI;EACI,eAAA;EACA,oBAAA;AAPR;AAQQ;EACI,sCAAA;AANZ;;AAYA;EACI,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,aAAA;EAEA,kBAAA;AAVJ;;AAaA;EACI;IACI,UAAA;IACA,2BAAA;EAVN;EAYE;IACI,UAAA;IACA,2BAAA;EAVN;AACF;AAaA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;EAEA,6BAAA;AAZJ;AAcI;EACI,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,0CAAA;EACA,iBAAA;EACA,gBAAA;AAZR;AAeI;EACI,sBAAA;AAbR;AAgBI;EACI,sBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;AAdR;AAiBI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sBAAA;EAEA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,sBAAA;EACA,yBAAA;EACA,4BAAA;EACA,iBAAA;EAEA,gBAAA;EAEA,kBAAA;EAEA,UAAA;EACA,2CAAA;EACA,0CAAA;AAnBR;AAqBQ;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,+BAAA;EACA,kCAAA;AAnBZ;AAsBQ;EACI,qCAAA;AApBZ;AAuBQ;EACI,sCAAA;AArBZ;AAwBQ;EACI,mCAAA;AAtBZ;AAyBQ;EACI,mCAAA;EACA,6BAAA;EACA,oCAAA;AAvBZ;AAyBY;EACI,0CAAA;EACA,oCAAA;AAvBhB;;AA6BA;EACI,OAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;EACA,uCAAA;EACA,6BAAA;AA1BJ;AA4BI;EACI,aAAA;EACA,YAAA;AA1BR;AA6BI;EACI,eAAA;EACA,kBAAA;AA3BR;;AA+BA;EACI,aAAA;AA5BJ;AA8BI;EACI,kBAAA;AA5BR;;AAiCI;EACI,aAAA;EACA,gCAAA;AA9BR;;AAmCA;EACI,aAAA;AAhCJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    font-size: 16px;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n    letter-spacing: 0.1ch;\n\n    --header-color: #fdba74;\n    --projects-menu-color: #56aad1;\n    --text-color-gray: #57534e;\n    --accent-orange: #f97316;\n    --cat-background: rgb(254, 253, 249);\n    --accent-green: #bef264;\n    --accent-yellow: #fde047;\n    --accent-red: #fca5a5;\n    --light-gray: #e5e5e5;\n    --light-gray-text: #a3a3a3;\n    --light-gray-accent: #d4d4d4;\n}\n\nbody,html{\n    height: 100%;\n}\n\n.layout{\n    height: 100%;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n}\n\n.header{\n    grid-column: 1/-1;\n    height: 4rem;\n    padding: 1rem 2rem;\n    \n    background-color: var(--header-color);\n\n    font-size: 2.5rem;\n\n    display: flex;\n    align-items: center;\n}\n\n.projects{\n    width: 12rem;\n    padding: 2rem;\n    background-color: var(--projects-menu-color);\n\n    &__title-container{\n        display: flex;\n        justify-content: space-evenly;\n        font-weight: 700;\n        padding-bottom: 2rem;\n        font-size: 1.7rem;\n    }\n\n    &__list{\n        display: grid;\n        gap: 1.5rem;\n        justify-content: center;\n        font-size: 1.4rem;\n\n    }\n\n    &__item{\n        cursor: pointer;\n        padding: 0.5rem 2rem;\n        &:hover{\n            outline: var(--header-color) 2px solid;\n        }\n    }\n     \n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 2rem;\n\n    overflow-y: scroll;\n}\n\n@keyframes stagger {\n    from{\n        opacity: 0;\n        transform: translateY(3rem);\n    }\n    to{\n        opacity: 1;\n        transform: translateY(0rem);\n    }\n}\n\n.project-page{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n\n    color: var(--text-color-gray);\n\n    &__title{\n        padding: 1rem 2rem;\n        width: fit-content;\n        text-align: center;\n        box-shadow: 0 3px 0 0 var(--accent-orange);\n        font-size: 1.7rem;\n        font-weight: 700;\n    }\n\n    &__desc{\n        width: min(70%, 60rem);\n    }\n\n    &__list{\n        width: min(70%, 60rem);\n        gap: 1rem;\n        display: flex;\n        flex-direction: column;\n    }\n\n    &__list-item{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        box-sizing: border-box;\n\n        padding:0.5rem  1.5rem ;\n        width: 100%;\n        height: 3rem;\n        border: #fdba74 3px solid;\n        border-radius: 1.25rem;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-left: none;\n\n        overflow: hidden;\n\n        position: relative;\n// animation stuff :)\n        opacity: 0;\n        animation: stagger ease-out 0.3s forwards 1;\n        animation-delay: calc(var(--order) * 0.1s);\n\n        &::before{\n            position: absolute;\n            content: \"\";\n            height: 100%;\n            left: -3rem;\n            width: 3rem;\n            border: #fdba74 3px solid;\n            border-right: none;\n            z-index: 1;\n            border-top-left-radius: 1.25rem;\n            border-bottom-left-radius: 1.25rem;\n\n        }\n        &.low-priority::before{\n            background-color: var(--accent-green);\n        }\n\n        &.medium-priority::before{\n            background-color: var(--accent-yellow);\n        }\n\n        &.high-priority::before{\n            background-color: var(--accent-red);\n        }\n\n        &.done{\n            background-color: var(--light-gray);\n            color: var(--light-gray-text);\n            border-color: var(--light-gray-text);\n\n            &::before{\n                background-color: var(--light-gray-accent);\n                border-color: var(--light-gray-text);\n            }\n        }\n    }\n}\n\n.emptyPage{\n    flex: 1;\n    align-self: stretch;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    padding: 2rem;\n    background-color: var(--cat-background);\n    color: var(--text-color-gray);\n\n    &>img{\n        height: 400px;\n        width: 400px;\n    }\n\n    &>p{\n        max-width: 50ch;\n        text-align: center;\n    }\n}\n\n.newToDoBtn{\n    padding: 10px;\n\n    &.hidden{\n        visibility: hidden;\n    }\n}\n\n.newToDoDialog{\n    &__form{\n        display: grid;\n        grid-template-columns: auto auto;\n    }\n\n}\n\n.toDo__add-btn{\n    padding: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMrenders.js":
/*!***************************!*\
  !*** ./src/DOMrenders.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectsList": () => (/* binding */ renderProjectsList),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _cat_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat.jpg */ "./src/cat.jpg");



let currentProject; // variable holding the project the page of which is open atm
const contentDiv = document.querySelector('.content');
const projectsList = document.querySelector('.projects__list');
const openModalBtn = document.createElement('button');
openModalBtn.classList.add('newToDoBtn');

const renderEmptyPage = () => {
    const emptyPageDiv = document.createElement('div');
    emptyPageDiv.classList.add('emptyPage');

    const welcomeText = document.createElement('p');
    welcomeText.classList.add('emptyPage__welcome');
    welcomeText.textContent = "It looks like you have no existing projects. To create one - use the Projects menu 🠔 ";

    const catPicture = document.createElement('img');
    catPicture.src = _cat_jpg__WEBPACK_IMPORTED_MODULE_1__; 

    emptyPageDiv.replaceChildren(welcomeText, catPicture)

    contentDiv.replaceChildren(emptyPageDiv);

    //hide button to add new list items
    openModalBtn.classList.add('hidden');
}

const expandItem = function(item) {
    this.classList.toggle('expanded');
    item.isExpanded = item.isExpanded ? false : true;
}

const renderItem = (item, index=0) => {
    const projectList = document.querySelector('.project-page__list');

    const listItem = document.createElement('div');
    listItem.classList.add('project-page__list-item');
// upper row items, visible before expansion
    const itemTitle = document.createElement('h4');
    itemTitle.classList.add('item__title');
    itemTitle.textContent = item.title;
    const itemDate = document.createElement('p');
    itemDate.classList.add('item__date');
    itemDate.textContent = item.dueDate;
    const itemIsDone = document.createElement('input');
    itemIsDone.type = 'checkbox';
    itemIsDone.checked = item.isDone;

    const toggleDoneStatus = function(e) {
        this.isDone = this.isDone ? false : true;
        console.log(this);
    }.bind(item);

    itemIsDone.addEventListener('click', toggleDoneStatus);

    const toggleDoneClass = function(e){
        this.classList.toggle('done');
    }.bind(listItem)

    itemIsDone.addEventListener('click', toggleDoneClass);

    listItem.replaceChildren(itemTitle, itemDate, itemIsDone);
    listItem.style.setProperty('--order', index + 1); // for animation
    if (item.isDone){
        listItem.classList.add('done');
    }
    switch (item.priority){
        case 1: 
            listItem.classList.add('low-priority');
            break;
        case 2:
            listItem.classList.add('medium-priority');
            break;
        case 3:
            listItem.classList.add('high-priority');
            break;
        default:
            listItem.classList.add('medium-priority');
    }
// stuff visible after expanding
    const itemDetails = document.createElement('p');
    itemDetails.textContent = item.desc;
    itemDetails.classList.add('item__details');

//expansion eventListener
    listItem.addEventListener('click', expandItem.bind(listItem, item));
    projectList.appendChild(listItem);
    console.log(currentProject);
}

const renderProjectsList = () => {
    console.log(_objects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
    if (_objects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length === 0){
        renderEmptyPage();
        return;
    }
    const projectsNodes = [];

    _objects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project, index, arr) => {
// if project is not deleted i.e undefined
        if (project){
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projects__item');
        projectDiv.textContent = project.title;
// bind event listener to each project button (display projectPage and change current project to "this")
        const displayToDoList = function (e){
            if (currentProject !== this){
            currentProject = this;
            renderToDoList();}
        }.bind(arr[index]);
        projectDiv.addEventListener('click', displayToDoList);

// if current project is undefined (first one created or deleted) open first not-undefined project on the list;
        if (!currentProject){
            displayToDoList.call(arr[index])
        }

        projectsNodes.push(projectDiv);
    }
    });
    if (projectsNodes.length === 0){
        renderEmptyPage();
    }
    projectsList.replaceChildren(...projectsNodes);

}

const renderToDoList = () => {
    
    // create page "skeleton"
    const projectPage = document.createElement('div');
    projectPage.classList.add('project-page');
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = currentProject.title;
    projectTitle.classList.add('project-page__title')
    const projectDesc = document.createElement('p');
    projectDesc.textContent = currentProject.desc;
    projectDesc.classList.add('project-page__desc');
    const projectList = document.createElement('div');
    projectList.classList.add('project-page__list');

    projectPage.replaceChildren(projectTitle, projectDesc, projectList, openModalBtn);
    contentDiv.replaceChildren(projectPage);
    
    //append items to it
    currentProject.listItemArr.forEach((item, index) => renderItem(item, index));

    //reveal button to add new list items
    openModalBtn.classList.remove('hidden');
}

// modal module

const toDoModal = (function(){
    const modal = document.querySelector('.newToDoDialog');
    const addBtn = document.querySelector('.toDo__add-btn');
    const title = document.getElementById('toDo__title');
    const desc = document.getElementById('toDo__desc');
    const date = document.getElementById('toDo__date');
    const priority = document.getElementById('toDo__priority');

    const createListItem = () => {
        if (title.value){
        (0,_objects__WEBPACK_IMPORTED_MODULE_0__.addListItem)(currentProject, title.value, desc.value, date.value, parseInt(priority.value));
        title.value = "";
        desc.value = "";
        date.value = "";
        priority.value = 1;
        renderItem(currentProject.listItemArr[currentProject.listItemArr.length-1]);
        }
    }

    addBtn.addEventListener('click', createListItem);

    const openModal = () => {
        modal.showModal();
    }
    return {openModal};
})();

openModalBtn.addEventListener('click', toDoModal.openModal);

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListItem": () => (/* binding */ addListItem),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray)
/* harmony export */ });
const listItem = function(title, dueDate, priority, desc="", isDone=false, isExpanded=false){
    return {title, dueDate, priority, desc, isDone, isExpanded};
}
// priority - 1 for low, 2 for medium, 3 for high

const project = function(title, desc="",listItemArr=[]){
    return {title, desc, listItemArr};
}

const projectsArray = [];

const createProject = (title, desc="") => {
    let testItem1 = listItem("Buy carrots", "22.09.22", 1, "Eat your vegetables, they're good for you." );
    let testItem2 = listItem("Banaas", "22.09.22", 1, "" );
    let testItem3 = listItem("Yaribu Kalaome'ri", "12.09.22", 2, "" );
    projectsArray.push(project(title,desc, [testItem1, testItem2, testItem3]));
}

const addListItem = (project, itemTitle, desc, dueDate, priority) => {
    if (dueDate === '') dueDate ='No due date';
    project.listItemArr.push(listItem(itemTitle, dueDate, priority, desc));
    console.table(project.listItemArr);
}


/***/ }),

/***/ "./src/cat.jpg":
/*!*********************!*\
  !*** ./src/cat.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "755922d7b4906d7bf7bf.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _DOMrenders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMrenders */ "./src/DOMrenders.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/objects.js");




const contentDiv = document.querySelector('.content');
const newProjectBtn = document.querySelector('.projects__add-button');

// newProjectBtn.addEventListener('click', () => {

// })

(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createProject)("Example project", "A medium-length description which can be used to outline some key facts about the project. You can put some reminders or motivating quotes here if you wish. Or don't do that at all and use only the list items - it is an optional field afterall.");

(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createProject)("Beluga", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createProject)("Lalulila", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

(0,_DOMrenders__WEBPACK_IMPORTED_MODULE_1__.renderProjectsList)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDMkI7QUFDUDs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKLHVEQUFhOztBQUViLHVEQUFhOztBQUViLHVEQUFhOztBQUViLCtEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2tyLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGFza3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza3IvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YXNrci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza3IvLi9zcmMvRE9NcmVuZGVycy5qcyIsIndlYnBhY2s6Ly90YXNrci8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFza3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90YXNrci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGFza3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWNoO1xcbiAgLS1oZWFkZXItY29sb3I6ICNmZGJhNzQ7XFxuICAtLXByb2plY3RzLW1lbnUtY29sb3I6ICM1NmFhZDE7XFxuICAtLXRleHQtY29sb3ItZ3JheTogIzU3NTM0ZTtcXG4gIC0tYWNjZW50LW9yYW5nZTogI2Y5NzMxNjtcXG4gIC0tY2F0LWJhY2tncm91bmQ6IHJnYigyNTQsIDI1MywgMjQ5KTtcXG4gIC0tYWNjZW50LWdyZWVuOiAjYmVmMjY0O1xcbiAgLS1hY2NlbnQteWVsbG93OiAjZmRlMDQ3O1xcbiAgLS1hY2NlbnQtcmVkOiAjZmNhNWE1O1xcbiAgLS1saWdodC1ncmF5OiAjZTVlNWU1O1xcbiAgLS1saWdodC1ncmF5LXRleHQ6ICNhM2EzYTM7XFxuICAtLWxpZ2h0LWdyYXktYWNjZW50OiAjZDRkNGQ0O1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxheW91dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0cy1tZW51LWNvbG9yKTtcXG59XFxuLnByb2plY3RzX190aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5wcm9qZWN0c19fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4ucHJvamVjdHNfX2l0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcbi5wcm9qZWN0c19faXRlbTpob3ZlciB7XFxuICBvdXRsaW5lOiB2YXIoLS1oZWFkZXItY29sb3IpIDJweCBzb2xpZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0YWdnZXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbn1cXG4ucHJvamVjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xcbn1cXG4ucHJvamVjdC1wYWdlX190aXRsZSB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgdmFyKC0tYWNjZW50LW9yYW5nZSk7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2Rlc2Mge1xcbiAgd2lkdGg6IG1pbig3MCUsIDYwcmVtKTtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdCB7XFxuICB3aWR0aDogbWluKDcwJSwgNjByZW0pO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6ICNmZGJhNzQgM3B4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogc3RhZ2dlciBlYXNlLW91dCAwLjNzIGZvcndhcmRzIDE7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tb3JkZXIpICogMC4xcyk7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGJvcmRlcjogI2ZkYmE3NCAzcHggc29saWQ7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuMjVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbS5sb3ctcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4pO1xcbn1cXG4ucHJvamVjdC1wYWdlX19saXN0LWl0ZW0ubWVkaXVtLXByaW9yaXR5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXllbGxvdyk7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbS5oaWdoLXByaW9yaXR5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbS5kb25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdGV4dCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdGV4dCk7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbS5kb25lOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheS1hY2NlbnQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5LXRleHQpO1xcbn1cXG5cXG4uZW1wdHlQYWdlIHtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhdC1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xcbn1cXG4uZW1wdHlQYWdlID4gaW1nIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcbi5lbXB0eVBhZ2UgPiBwIHtcXG4gIG1heC13aWR0aDogNTBjaDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5ld1RvRG9CdG4ge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLm5ld1RvRG9CdG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm5ld1RvRG9EaWFsb2dfX2Zvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG5cXG4udG9Eb19fYWRkLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHFDQUFBO0VBRUEsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUFKSjtBQU1JO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUxSO0FBU0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFQUjtBQVFRO0VBQ0ksc0NBQUE7QUFOWjs7QUFZQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0FBVko7O0FBYUE7RUFDSTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFQVZOO0VBWUU7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFWTjtBQUNGO0FBYUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSw2QkFBQTtBQVpKO0FBY0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFaUjtBQWVJO0VBQ0ksc0JBQUE7QUFiUjtBQWdCSTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWRSO0FBaUJJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBRUEsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSwyQ0FBQTtFQUNBLDBDQUFBO0FBbkJSO0FBcUJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0FBbkJaO0FBc0JRO0VBQ0kscUNBQUE7QUFwQlo7QUF1QlE7RUFDSSxzQ0FBQTtBQXJCWjtBQXdCUTtFQUNJLG1DQUFBO0FBdEJaO0FBeUJRO0VBQ0ksbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBdkJaO0FBeUJZO0VBQ0ksMENBQUE7RUFDQSxvQ0FBQTtBQXZCaEI7O0FBNkJBO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsNkJBQUE7QUExQko7QUE0Qkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQTFCUjtBQTZCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTNCUjs7QUErQkE7RUFDSSxhQUFBO0FBNUJKO0FBOEJJO0VBQ0ksa0JBQUE7QUE1QlI7O0FBaUNJO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0FBOUJSOztBQW1DQTtFQUNJLGFBQUE7QUFoQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xY2g7XFxuXFxuICAgIC0taGVhZGVyLWNvbG9yOiAjZmRiYTc0O1xcbiAgICAtLXByb2plY3RzLW1lbnUtY29sb3I6ICM1NmFhZDE7XFxuICAgIC0tdGV4dC1jb2xvci1ncmF5OiAjNTc1MzRlO1xcbiAgICAtLWFjY2VudC1vcmFuZ2U6ICNmOTczMTY7XFxuICAgIC0tY2F0LWJhY2tncm91bmQ6IHJnYigyNTQsIDI1MywgMjQ5KTtcXG4gICAgLS1hY2NlbnQtZ3JlZW46ICNiZWYyNjQ7XFxuICAgIC0tYWNjZW50LXllbGxvdzogI2ZkZTA0NztcXG4gICAgLS1hY2NlbnQtcmVkOiAjZmNhNWE1O1xcbiAgICAtLWxpZ2h0LWdyYXk6ICNlNWU1ZTU7XFxuICAgIC0tbGlnaHQtZ3JheS10ZXh0OiAjYTNhM2EzO1xcbiAgICAtLWxpZ2h0LWdyYXktYWNjZW50OiAjZDRkNGQ0O1xcbn1cXG5cXG5ib2R5LGh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxheW91dHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcblxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICB3aWR0aDogMTJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLW1lbnUtY29sb3IpO1xcblxcbiAgICAmX190aXRsZS1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgfVxcblxcbiAgICAmX19saXN0e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdhcDogMS41cmVtO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG5cXG4gICAgfVxcblxcbiAgICAmX19pdGVte1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIG91dGxpbmU6IHZhcigtLWhlYWRlci1jb2xvcikgMnB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICBcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0YWdnZXIge1xcbiAgICBmcm9te1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3QtcGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ncmF5KTtcXG5cXG4gICAgJl9fdGl0bGV7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAgdmFyKC0tYWNjZW50LW9yYW5nZSk7XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG5cXG4gICAgJl9fZGVzY3tcXG4gICAgICAgIHdpZHRoOiBtaW4oNzAlLCA2MHJlbSk7XFxuICAgIH1cXG5cXG4gICAgJl9fbGlzdHtcXG4gICAgICAgIHdpZHRoOiBtaW4oNzAlLCA2MHJlbSk7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAmX19saXN0LWl0ZW17XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgICAgICBwYWRkaW5nOjAuNXJlbSAgMS41cmVtIDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgYm9yZGVyOiAjZmRiYTc0IDNweCBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcblxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4vLyBhbmltYXRpb24gc3R1ZmYgOilcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBhbmltYXRpb246IHN0YWdnZXIgZWFzZS1vdXQgMC4zcyBmb3J3YXJkcyAxO1xcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLW9yZGVyKSAqIDAuMXMpO1xcblxcbiAgICAgICAgJjo6YmVmb3Jle1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgbGVmdDogLTNyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICAgICAgYm9yZGVyOiAjZmRiYTc0IDNweCBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuMjVyZW07XFxuXFxuICAgICAgICB9XFxuICAgICAgICAmLmxvdy1wcmlvcml0eTo6YmVmb3Jle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLm1lZGl1bS1wcmlvcml0eTo6YmVmb3Jle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC15ZWxsb3cpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5oaWdoLXByaW9yaXR5OjpiZWZvcmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmRvbmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdGV4dCk7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5LXRleHQpO1xcblxcbiAgICAgICAgICAgICY6OmJlZm9yZXtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheS1hY2NlbnQpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdGV4dCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5lbXB0eVBhZ2V7XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2F0LWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ncmF5KTtcXG5cXG4gICAgJj5pbWd7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgICY+cHtcXG4gICAgICAgIG1heC13aWR0aDogNTBjaDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4ubmV3VG9Eb0J0bntcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgJi5oaWRkZW57XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuLm5ld1RvRG9EaWFsb2d7XFxuICAgICZfX2Zvcm17XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIH1cXG5cXG59XFxuXFxuLnRvRG9fX2FkZC1idG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzQXJyYXksIGFkZExpc3RJdGVtIH0gZnJvbSBcIi4vb2JqZWN0c1wiO1xuaW1wb3J0IGNhdCBmcm9tICcuL2NhdC5qcGcnO1xuXG5sZXQgY3VycmVudFByb2plY3Q7IC8vIHZhcmlhYmxlIGhvbGRpbmcgdGhlIHByb2plY3QgdGhlIHBhZ2Ugb2Ygd2hpY2ggaXMgb3BlbiBhdG1cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0Jyk7XG5jb25zdCBvcGVuTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm9wZW5Nb2RhbEJ0bi5jbGFzc0xpc3QuYWRkKCduZXdUb0RvQnRuJyk7XG5cbmNvbnN0IHJlbmRlckVtcHR5UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbXB0eVBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eVBhZ2VEaXYuY2xhc3NMaXN0LmFkZCgnZW1wdHlQYWdlJyk7XG5cbiAgICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKCdlbXB0eVBhZ2VfX3dlbGNvbWUnKTtcbiAgICB3ZWxjb21lVGV4dC50ZXh0Q29udGVudCA9IFwiSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBubyBleGlzdGluZyBwcm9qZWN0cy4gVG8gY3JlYXRlIG9uZSAtIHVzZSB0aGUgUHJvamVjdHMgbWVudSDwn6CUIFwiO1xuXG4gICAgY29uc3QgY2F0UGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhdFBpY3R1cmUuc3JjID0gY2F0OyBcblxuICAgIGVtcHR5UGFnZURpdi5yZXBsYWNlQ2hpbGRyZW4od2VsY29tZVRleHQsIGNhdFBpY3R1cmUpXG5cbiAgICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbihlbXB0eVBhZ2VEaXYpO1xuXG4gICAgLy9oaWRlIGJ1dHRvbiB0byBhZGQgbmV3IGxpc3QgaXRlbXNcbiAgICBvcGVuTW9kYWxCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmNvbnN0IGV4cGFuZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIGl0ZW0uaXNFeHBhbmRlZCA9IGl0ZW0uaXNFeHBhbmRlZCA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuY29uc3QgcmVuZGVySXRlbSA9IChpdGVtLCBpbmRleD0wKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wYWdlX19saXN0Jyk7XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZV9fbGlzdC1pdGVtJyk7XG4vLyB1cHBlciByb3cgaXRlbXMsIHZpc2libGUgYmVmb3JlIGV4cGFuc2lvblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3RpdGxlJyk7XG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICBjb25zdCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtX19kYXRlJyk7XG4gICAgaXRlbURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG4gICAgY29uc3QgaXRlbUlzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaXRlbUlzRG9uZS50eXBlID0gJ2NoZWNrYm94JztcbiAgICBpdGVtSXNEb25lLmNoZWNrZWQgPSBpdGVtLmlzRG9uZTtcblxuICAgIGNvbnN0IHRvZ2dsZURvbmVTdGF0dXMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMuaXNEb25lID0gdGhpcy5pc0RvbmUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH0uYmluZChpdGVtKTtcblxuICAgIGl0ZW1Jc0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEb25lU3RhdHVzKTtcblxuICAgIGNvbnN0IHRvZ2dsZURvbmVDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2RvbmUnKTtcbiAgICB9LmJpbmQobGlzdEl0ZW0pXG5cbiAgICBpdGVtSXNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRG9uZUNsYXNzKTtcblxuICAgIGxpc3RJdGVtLnJlcGxhY2VDaGlsZHJlbihpdGVtVGl0bGUsIGl0ZW1EYXRlLCBpdGVtSXNEb25lKTtcbiAgICBsaXN0SXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcmRlcicsIGluZGV4ICsgMSk7IC8vIGZvciBhbmltYXRpb25cbiAgICBpZiAoaXRlbS5pc0RvbmUpe1xuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgfVxuICAgIHN3aXRjaCAoaXRlbS5wcmlvcml0eSl7XG4gICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuICAgIH1cbi8vIHN0dWZmIHZpc2libGUgYWZ0ZXIgZXhwYW5kaW5nXG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURldGFpbHMudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgaXRlbURldGFpbHMuY2xhc3NMaXN0LmFkZCgnaXRlbV9fZGV0YWlscycpO1xuXG4vL2V4cGFuc2lvbiBldmVudExpc3RlbmVyXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtLmJpbmQobGlzdEl0ZW0sIGl0ZW0pKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJlbmRlckVtcHR5UGFnZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RzTm9kZXMgPSBbXTtcblxuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgsIGFycikgPT4ge1xuLy8gaWYgcHJvamVjdCBpcyBub3QgZGVsZXRlZCBpLmUgdW5kZWZpbmVkXG4gICAgICAgIGlmIChwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19pdGVtJyk7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuLy8gYmluZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QgYnV0dG9uIChkaXNwbGF5IHByb2plY3RQYWdlIGFuZCBjaGFuZ2UgY3VycmVudCBwcm9qZWN0IHRvIFwidGhpc1wiKVxuICAgICAgICBjb25zdCBkaXNwbGF5VG9Eb0xpc3QgPSBmdW5jdGlvbiAoZSl7XG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QgIT09IHRoaXMpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSB0aGlzO1xuICAgICAgICAgICAgcmVuZGVyVG9Eb0xpc3QoKTt9XG4gICAgICAgIH0uYmluZChhcnJbaW5kZXhdKTtcbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlUb0RvTGlzdCk7XG5cbi8vIGlmIGN1cnJlbnQgcHJvamVjdCBpcyB1bmRlZmluZWQgKGZpcnN0IG9uZSBjcmVhdGVkIG9yIGRlbGV0ZWQpIG9wZW4gZmlyc3Qgbm90LXVuZGVmaW5lZCBwcm9qZWN0IG9uIHRoZSBsaXN0O1xuICAgICAgICBpZiAoIWN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgICAgIGRpc3BsYXlUb0RvTGlzdC5jYWxsKGFycltpbmRleF0pXG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0c05vZGVzLnB1c2gocHJvamVjdERpdik7XG4gICAgfVxuICAgIH0pO1xuICAgIGlmIChwcm9qZWN0c05vZGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJlbmRlckVtcHR5UGFnZSgpO1xuICAgIH1cbiAgICBwcm9qZWN0c0xpc3QucmVwbGFjZUNoaWxkcmVuKC4uLnByb2plY3RzTm9kZXMpO1xuXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb0RvTGlzdCA9ICgpID0+IHtcbiAgICBcbiAgICAvLyBjcmVhdGUgcGFnZSBcInNrZWxldG9uXCJcbiAgICBjb25zdCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZScpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZV9fdGl0bGUnKVxuICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QuZGVzYztcbiAgICBwcm9qZWN0RGVzYy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBhZ2VfX2Rlc2MnKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZV9fbGlzdCcpO1xuXG4gICAgcHJvamVjdFBhZ2UucmVwbGFjZUNoaWxkcmVuKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3RMaXN0LCBvcGVuTW9kYWxCdG4pO1xuICAgIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKHByb2plY3RQYWdlKTtcbiAgICBcbiAgICAvL2FwcGVuZCBpdGVtcyB0byBpdFxuICAgIGN1cnJlbnRQcm9qZWN0Lmxpc3RJdGVtQXJyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSk7XG5cbiAgICAvL3JldmVhbCBidXR0b24gdG8gYWRkIG5ldyBsaXN0IGl0ZW1zXG4gICAgb3Blbk1vZGFsQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG4vLyBtb2RhbCBtb2R1bGVcblxuY29uc3QgdG9Eb01vZGFsID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9Eb0RpYWxvZycpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvX19hZGQtYnRuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb19fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9fX2Rlc2MnKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9fX2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvX19wcmlvcml0eScpO1xuXG4gICAgY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSl7XG4gICAgICAgIGFkZExpc3RJdGVtKGN1cnJlbnRQcm9qZWN0LCB0aXRsZS52YWx1ZSwgZGVzYy52YWx1ZSwgZGF0ZS52YWx1ZSwgcGFyc2VJbnQocHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gMTtcbiAgICAgICAgcmVuZGVySXRlbShjdXJyZW50UHJvamVjdC5saXN0SXRlbUFycltjdXJyZW50UHJvamVjdC5saXN0SXRlbUFyci5sZW5ndGgtMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTGlzdEl0ZW0pO1xuXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtvcGVuTW9kYWx9O1xufSkoKTtcblxub3Blbk1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9Eb01vZGFsLm9wZW5Nb2RhbCk7IiwiY29uc3QgbGlzdEl0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2M9XCJcIiwgaXNEb25lPWZhbHNlLCBpc0V4cGFuZGVkPWZhbHNlKXtcbiAgICByZXR1cm4ge3RpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzYywgaXNEb25lLCBpc0V4cGFuZGVkfTtcbn1cbi8vIHByaW9yaXR5IC0gMSBmb3IgbG93LCAyIGZvciBtZWRpdW0sIDMgZm9yIGhpZ2hcblxuY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjPVwiXCIsbGlzdEl0ZW1BcnI9W10pe1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGxpc3RJdGVtQXJyfTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2M9XCJcIikgPT4ge1xuICAgIGxldCB0ZXN0SXRlbTEgPSBsaXN0SXRlbShcIkJ1eSBjYXJyb3RzXCIsIFwiMjIuMDkuMjJcIiwgMSwgXCJFYXQgeW91ciB2ZWdldGFibGVzLCB0aGV5J3JlIGdvb2QgZm9yIHlvdS5cIiApO1xuICAgIGxldCB0ZXN0SXRlbTIgPSBsaXN0SXRlbShcIkJhbmFhc1wiLCBcIjIyLjA5LjIyXCIsIDEsIFwiXCIgKTtcbiAgICBsZXQgdGVzdEl0ZW0zID0gbGlzdEl0ZW0oXCJZYXJpYnUgS2FsYW9tZSdyaVwiLCBcIjEyLjA5LjIyXCIsIDIsIFwiXCIgKTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCh0aXRsZSxkZXNjLCBbdGVzdEl0ZW0xLCB0ZXN0SXRlbTIsIHRlc3RJdGVtM10pKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpc3RJdGVtID0gKHByb2plY3QsIGl0ZW1UaXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBpZiAoZHVlRGF0ZSA9PT0gJycpIGR1ZURhdGUgPSdObyBkdWUgZGF0ZSc7XG4gICAgcHJvamVjdC5saXN0SXRlbUFyci5wdXNoKGxpc3RJdGVtKGl0ZW1UaXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2MpKTtcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3QubGlzdEl0ZW1BcnIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHNMaXN0fSBmcm9tIFwiLi9ET01yZW5kZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vb2JqZWN0c1wiO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX2FkZC1idXR0b24nKTtcblxuLy8gbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuLy8gfSlcblxuY3JlYXRlUHJvamVjdChcIkV4YW1wbGUgcHJvamVjdFwiLCBcIkEgbWVkaXVtLWxlbmd0aCBkZXNjcmlwdGlvbiB3aGljaCBjYW4gYmUgdXNlZCB0byBvdXRsaW5lIHNvbWUga2V5IGZhY3RzIGFib3V0IHRoZSBwcm9qZWN0LiBZb3UgY2FuIHB1dCBzb21lIHJlbWluZGVycyBvciBtb3RpdmF0aW5nIHF1b3RlcyBoZXJlIGlmIHlvdSB3aXNoLiBPciBkb24ndCBkbyB0aGF0IGF0IGFsbCBhbmQgdXNlIG9ubHkgdGhlIGxpc3QgaXRlbXMgLSBpdCBpcyBhbiBvcHRpb25hbCBmaWVsZCBhZnRlcmFsbC5cIik7XG5cbmNyZWF0ZVByb2plY3QoXCJCZWx1Z2FcIiwgXCJBIGNoYXJtaW5nIGh1bWFub2lkLWNhdC1wZXJzb24gd2l0aCBhIHJlbGF0aXZlbHkgaHVudHktaXNoIHBlcnNvbmFsaXR5LiBIZSBsb29rcyBsaWtlIGhlIGNvdWxkIHVzZSBzb21lIGh1bWFuIGtpbmRuZXNzIGFuZCBJIGRvbid0IGtub3cgd2hhdCB0byB3cml0ZSBsb3JlbTIwIGRvZXNuJ3Qgc2VlbSB0byBiZSB3b3JraW5nIHdpdGhpbiBhIHN0cmluZyBib2R5IDooLlwiKTtcblxuY3JlYXRlUHJvamVjdChcIkxhbHVsaWxhXCIsIFwiQSBjaGFybWluZyBodW1hbm9pZC1jYXQtcGVyc29uIHdpdGggYSByZWxhdGl2ZWx5IGh1bnR5LWlzaCBwZXJzb25hbGl0eS4gSGUgbG9va3MgbGlrZSBoZSBjb3VsZCB1c2Ugc29tZSBodW1hbiBraW5kbmVzcyBhbmQgSSBkb24ndCBrbm93IHdoYXQgdG8gd3JpdGUgbG9yZW0yMCBkb2Vzbid0IHNlZW0gdG8gYmUgd29ya2luZyB3aXRoaW4gYSBzdHJpbmcgYm9keSA6KC5cIik7XG5cbnJlbmRlclByb2plY3RzTGlzdCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=