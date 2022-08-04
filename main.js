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
    welcomeText.textContent = "Looks like you have no existing projects. To create one - use the Projects menu on the left.";

    const catPicture = document.createElement('img');
    catPicture.src = _cat_jpg__WEBPACK_IMPORTED_MODULE_1__; 

    emptyPageDiv.replaceChildren(welcomeText, catPicture)

    contentDiv.replaceChildren(emptyPageDiv);

    //hide button to add new list items
    openModalBtn.classList.add('hidden');
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
            renderToDoList(this);
            currentProject = this;
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

const renderToDoList = (project) => {
 
    const projectPage = document.createElement('div');
    projectPage.classList.add('project-page');
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectTitle.classList.add('project-page__title')
    const projectDesc = document.createElement('p');
    projectDesc.textContent = project.desc;
    projectDesc.classList.add('project-page__desc');
    const projectList = document.createElement('div');
    projectList.classList.add('project-page__list');

    project.listItemArr.forEach((item, index, arr) => {
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
        }.bind(arr[index]);

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
        }

        projectList.appendChild(listItem);
    })

    projectPage.replaceChildren(projectTitle, projectDesc, projectList, openModalBtn);
    contentDiv.replaceChildren(projectPage);

    //reveal button to add new list items
    openModalBtn.classList.remove('hidden');
}

const renderNewItem = () => {
    const item = currentProject.listItemArr[currentProject.listItemArr.length-1];
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
    listItem.style.setProperty('--order',  1); // for animation
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
    }

    projectList.appendChild(listItem);
    console.log(currentProject);
}

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
        renderNewItem();
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
    let testItem1 = listItem("Buy carrots", "22.09.22", 1, "" );
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

(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createProject)("Rengar", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createProject)("Beluga", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

(0,_objects__WEBPACK_IMPORTED_MODULE_2__.createProject)("Lalulila", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

(0,_DOMrenders__WEBPACK_IMPORTED_MODULE_1__.renderProjectsList)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMyQjtBQUNQOztBQUUxQztBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUosdURBQWE7O0FBRWIsdURBQWE7O0FBRWIsdURBQWE7O0FBRWIsK0RBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza3IvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90YXNrci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90YXNrci8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdGFza3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFza3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2tyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFza3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrci8uL3NyYy9ET01yZW5kZXJzLmpzIiwid2VicGFjazovL3Rhc2tyLy4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdGFza3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFza3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGFza3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rhc2tyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90YXNrci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xY2g7XFxuICAtLWhlYWRlci1jb2xvcjogI2ZkYmE3NDtcXG4gIC0tcHJvamVjdHMtbWVudS1jb2xvcjogIzU2YWFkMTtcXG4gIC0tdGV4dC1jb2xvci1ncmF5OiAjNTc1MzRlO1xcbiAgLS1hY2NlbnQtb3JhbmdlOiAjZjk3MzE2O1xcbiAgLS1jYXQtYmFja2dyb3VuZDogcmdiKDI1NCwgMjUzLCAyNDkpO1xcbiAgLS1hY2NlbnQtZ3JlZW46ICNiZWYyNjQ7XFxuICAtLWFjY2VudC15ZWxsb3c6ICNmZGUwNDc7XFxuICAtLWFjY2VudC1yZWQ6ICNmY2E1YTU7XFxuICAtLWxpZ2h0LWdyYXk6ICNlNWU1ZTU7XFxuICAtLWxpZ2h0LWdyYXktdGV4dDogI2EzYTNhMztcXG4gIC0tbGlnaHQtZ3JheS1hY2NlbnQ6ICNkNGQ0ZDQ7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGF5b3V0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RzLW1lbnUtY29sb3IpO1xcbn1cXG4ucHJvamVjdHNfX3RpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLnByb2plY3RzX19saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5wcm9qZWN0c19faXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuLnByb2plY3RzX19pdGVtOmhvdmVyIHtcXG4gIG91dGxpbmU6IHZhcigtLWhlYWRlci1jb2xvcikgMnB4IHNvbGlkO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbkBrZXlmcmFtZXMgc3RhZ2dlciB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICB9XFxufVxcbi5wcm9qZWN0LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZ3JheSk7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX3RpdGxlIHtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCB2YXIoLS1hY2NlbnQtb3JhbmdlKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnByb2plY3QtcGFnZV9fZGVzYyB7XFxuICB3aWR0aDogbWluKDcwJSwgNjByZW0pO1xcbn1cXG4ucHJvamVjdC1wYWdlX19saXN0IHtcXG4gIHdpZHRoOiBtaW4oNzAlLCA2MHJlbSk7XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogI2ZkYmE3NCAzcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBzdGFnZ2VyIGVhc2Utb3V0IDAuM3MgZm9yd2FyZHMgMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1vcmRlcikgKiAwLjFzKTtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdC1pdGVtOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYm9yZGVyOiAjZmRiYTc0IDNweCBzb2xpZDtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdC1pdGVtLmxvdy1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7XFxufVxcbi5wcm9qZWN0LXBhZ2VfX2xpc3QtaXRlbS5tZWRpdW0tcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQteWVsbG93KTtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdC1pdGVtLmhpZ2gtcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdC1pdGVtLmRvbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheS10ZXh0KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheS10ZXh0KTtcXG59XFxuLnByb2plY3QtcGFnZV9fbGlzdC1pdGVtLmRvbmU6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5LWFjY2VudCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdGV4dCk7XFxufVxcblxcbi5lbXB0eVBhZ2Uge1xcbiAgZmxleDogMTtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2F0LWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZ3JheSk7XFxufVxcbi5lbXB0eVBhZ2UgPiBpbWcge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuLmVtcHR5UGFnZSA+IHAge1xcbiAgbWF4LXdpZHRoOiA1MGNoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmV3VG9Eb0J0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ubmV3VG9Eb0J0bi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubmV3VG9Eb0RpYWxvZ19fZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi50b0RvX19hZGQtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUNBQUE7RUFFQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQUpKO0FBTUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9JO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBTFI7QUFTSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQVBSO0FBUVE7RUFDSSxzQ0FBQTtBQU5aOztBQVlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7QUFWSjs7QUFhQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBVk47RUFZRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFQVZOO0FBQ0Y7QUFhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0FBWko7QUFjSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVpSO0FBZUk7RUFDSSxzQkFBQTtBQWJSO0FBZ0JJO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBZFI7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7QUFuQlI7QUFxQlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUFuQlo7QUFzQlE7RUFDSSxxQ0FBQTtBQXBCWjtBQXVCUTtFQUNJLHNDQUFBO0FBckJaO0FBd0JRO0VBQ0ksbUNBQUE7QUF0Qlo7QUF5QlE7RUFDSSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUF2Qlo7QUF5Qlk7RUFDSSwwQ0FBQTtFQUNBLG9DQUFBO0FBdkJoQjs7QUE2QkE7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtBQTFCSjtBQTRCSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBMUJSO0FBNkJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBM0JSOztBQStCQTtFQUNJLGFBQUE7QUE1Qko7QUE4Qkk7RUFDSSxrQkFBQTtBQTVCUjs7QUFpQ0k7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUE5QlI7O0FBbUNBO0VBQ0ksYUFBQTtBQWhDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290e1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFjaDtcXG5cXG4gICAgLS1oZWFkZXItY29sb3I6ICNmZGJhNzQ7XFxuICAgIC0tcHJvamVjdHMtbWVudS1jb2xvcjogIzU2YWFkMTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyYXk6ICM1NzUzNGU7XFxuICAgIC0tYWNjZW50LW9yYW5nZTogI2Y5NzMxNjtcXG4gICAgLS1jYXQtYmFja2dyb3VuZDogcmdiKDI1NCwgMjUzLCAyNDkpO1xcbiAgICAtLWFjY2VudC1ncmVlbjogI2JlZjI2NDtcXG4gICAgLS1hY2NlbnQteWVsbG93OiAjZmRlMDQ3O1xcbiAgICAtLWFjY2VudC1yZWQ6ICNmY2E1YTU7XFxuICAgIC0tbGlnaHQtZ3JheTogI2U1ZTVlNTtcXG4gICAgLS1saWdodC1ncmF5LXRleHQ6ICNhM2EzYTM7XFxuICAgIC0tbGlnaHQtZ3JheS1hY2NlbnQ6ICNkNGQ0ZDQ7XFxufVxcblxcbmJvZHksaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGF5b3V0e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIHdpZHRoOiAxMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtbWVudS1jb2xvcik7XFxuXFxuICAgICZfX3RpdGxlLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2xpc3R7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ2FwOiAxLjVyZW07XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcblxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW17XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgb3V0bGluZTogdmFyKC0taGVhZGVyLWNvbG9yKSAycHggc29saWQ7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgIFxcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbkBrZXlmcmFtZXMgc3RhZ2dlciB7XFxuICAgIGZyb217XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdC1wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xcblxcbiAgICAmX190aXRsZXtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCB2YXIoLS1hY2NlbnQtb3JhbmdlKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcblxcbiAgICAmX19kZXNje1xcbiAgICAgICAgd2lkdGg6IG1pbig3MCUsIDYwcmVtKTtcXG4gICAgfVxcblxcbiAgICAmX19saXN0e1xcbiAgICAgICAgd2lkdGg6IG1pbig3MCUsIDYwcmVtKTtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICZfX2xpc3QtaXRlbXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgICAgIHBhZGRpbmc6MC41cmVtICAxLjVyZW0gO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBib3JkZXI6ICNmZGJhNzQgM3B4IHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbi8vIGFuaW1hdGlvbiBzdHVmZiA6KVxcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGFuaW1hdGlvbjogc3RhZ2dlciBlYXNlLW91dCAwLjNzIGZvcndhcmRzIDE7XFxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tb3JkZXIpICogMC4xcyk7XFxuXFxuICAgICAgICAmOjpiZWZvcmV7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBsZWZ0OiAtM3JlbTtcXG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgICAgICBib3JkZXI6ICNmZGJhNzQgM3B4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMjVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG5cXG4gICAgICAgIH1cXG4gICAgICAgICYubG93LXByaW9yaXR5OjpiZWZvcmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWdyZWVuKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYubWVkaXVtLXByaW9yaXR5OjpiZWZvcmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXllbGxvdyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmhpZ2gtcHJpb3JpdHk6OmJlZm9yZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuZG9uZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheS10ZXh0KTtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdGV4dCk7XFxuXFxuICAgICAgICAgICAgJjo6YmVmb3Jle1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5LWFjY2VudCk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheS10ZXh0KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmVtcHR5UGFnZXtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXQtYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xcblxcbiAgICAmPmltZ3tcXG4gICAgICAgIGhlaWdodDogNDAwcHg7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgIH1cXG5cXG4gICAgJj5we1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MGNoO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5uZXdUb0RvQnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAmLmhpZGRlbntcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG4ubmV3VG9Eb0RpYWxvZ3tcXG4gICAgJl9fZm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgfVxcblxcbn1cXG5cXG4udG9Eb19fYWRkLWJ0bntcXG4gICAgcGFkZGluZzogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSwgYWRkTGlzdEl0ZW0gfSBmcm9tIFwiLi9vYmplY3RzXCI7XG5pbXBvcnQgY2F0IGZyb20gJy4vY2F0LmpwZyc7XG5cbmxldCBjdXJyZW50UHJvamVjdDsgLy8gdmFyaWFibGUgaG9sZGluZyB0aGUgcHJvamVjdCB0aGUgcGFnZSBvZiB3aGljaCBpcyBvcGVuIGF0bVxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX2xpc3QnKTtcbmNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xub3Blbk1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoJ25ld1RvRG9CdG4nKTtcblxuY29uc3QgcmVuZGVyRW1wdHlQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5UGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5UGFnZURpdi5jbGFzc0xpc3QuYWRkKCdlbXB0eVBhZ2UnKTtcblxuICAgIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2VtcHR5UGFnZV9fd2VsY29tZScpO1xuICAgIHdlbGNvbWVUZXh0LnRleHRDb250ZW50ID0gXCJMb29rcyBsaWtlIHlvdSBoYXZlIG5vIGV4aXN0aW5nIHByb2plY3RzLiBUbyBjcmVhdGUgb25lIC0gdXNlIHRoZSBQcm9qZWN0cyBtZW51IG9uIHRoZSBsZWZ0LlwiO1xuXG4gICAgY29uc3QgY2F0UGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhdFBpY3R1cmUuc3JjID0gY2F0OyBcblxuICAgIGVtcHR5UGFnZURpdi5yZXBsYWNlQ2hpbGRyZW4od2VsY29tZVRleHQsIGNhdFBpY3R1cmUpXG5cbiAgICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbihlbXB0eVBhZ2VEaXYpO1xuXG4gICAgLy9oaWRlIGJ1dHRvbiB0byBhZGQgbmV3IGxpc3QgaXRlbXNcbiAgICBvcGVuTW9kYWxCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgaWYgKHByb2plY3RzQXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgcmVuZGVyRW1wdHlQYWdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdHNOb2RlcyA9IFtdO1xuXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCwgYXJyKSA9PiB7XG4vLyBpZiBwcm9qZWN0IGlzIG5vdCBkZWxldGVkIGkuZSB1bmRlZmluZWRcbiAgICAgICAgaWYgKHByb2plY3Qpe1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX2l0ZW0nKTtcbiAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4vLyBiaW5kIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCBidXR0b24gKGRpc3BsYXkgcHJvamVjdFBhZ2UgYW5kIGNoYW5nZSBjdXJyZW50IHByb2plY3QgdG8gXCJ0aGlzXCIpXG4gICAgICAgIGNvbnN0IGRpc3BsYXlUb0RvTGlzdCA9IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgICAgIHJlbmRlclRvRG9MaXN0KHRoaXMpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSB0aGlzO1xuICAgICAgICB9LmJpbmQoYXJyW2luZGV4XSk7XG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VG9Eb0xpc3QpO1xuXG4vLyBpZiBjdXJyZW50IHByb2plY3QgaXMgdW5kZWZpbmVkIChmaXJzdCBvbmUgY3JlYXRlZCBvciBkZWxldGVkKSBvcGVuIGZpcnN0IG5vdC11bmRlZmluZWQgcHJvamVjdCBvbiB0aGUgbGlzdDtcbiAgICAgICAgaWYgKCFjdXJyZW50UHJvamVjdCl7XG4gICAgICAgICAgICBkaXNwbGF5VG9Eb0xpc3QuY2FsbChhcnJbaW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdHNOb2Rlcy5wdXNoKHByb2plY3REaXYpO1xuICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvamVjdHNOb2Rlcy5sZW5ndGggPT09IDApe1xuICAgICAgICByZW5kZXJFbXB0eVBhZ2UoKTtcbiAgICB9XG4gICAgcHJvamVjdHNMaXN0LnJlcGxhY2VDaGlsZHJlbiguLi5wcm9qZWN0c05vZGVzKTtcblxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVG9Eb0xpc3QgPSAocHJvamVjdCkgPT4ge1xuIFxuICAgIGNvbnN0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFBhZ2UuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wYWdlJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBhZ2VfX3RpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgICBwcm9qZWN0RGVzYy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBhZ2VfX2Rlc2MnKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZV9fbGlzdCcpO1xuXG4gICAgcHJvamVjdC5saXN0SXRlbUFyci5mb3JFYWNoKChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZV9fbGlzdC1pdGVtJyk7XG4vLyB1cHBlciByb3cgaXRlbXMsIHZpc2libGUgYmVmb3JlIGV4cGFuc2lvblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbV9fdGl0bGUnKTtcbiAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgY29uc3QgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2RhdGUnKTtcbiAgICAgICAgaXRlbURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG4gICAgICAgIGNvbnN0IGl0ZW1Jc0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpdGVtSXNEb25lLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBpdGVtSXNEb25lLmNoZWNrZWQgPSBpdGVtLmlzRG9uZTtcblxuICAgICAgICBjb25zdCB0b2dnbGVEb25lU3RhdHVzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdGhpcy5pc0RvbmUgPSB0aGlzLmlzRG9uZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB9LmJpbmQoYXJyW2luZGV4XSk7XG5cbiAgICAgICAgaXRlbUlzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZURvbmVTdGF0dXMpO1xuXG4gICAgICAgIGNvbnN0IHRvZ2dsZURvbmVDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgICAgIH0uYmluZChsaXN0SXRlbSlcblxuICAgICAgICBpdGVtSXNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRG9uZUNsYXNzKTtcblxuICAgICAgICBsaXN0SXRlbS5yZXBsYWNlQ2hpbGRyZW4oaXRlbVRpdGxlLCBpdGVtRGF0ZSwgaXRlbUlzRG9uZSk7XG4gICAgICAgIGxpc3RJdGVtLnN0eWxlLnNldFByb3BlcnR5KCctLW9yZGVyJywgaW5kZXggKyAxKTsgLy8gZm9yIGFuaW1hdGlvblxuICAgICAgICBpZiAoaXRlbS5pc0RvbmUpe1xuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoaXRlbS5wcmlvcml0eSl7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdFBhZ2UucmVwbGFjZUNoaWxkcmVuKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MsIHByb2plY3RMaXN0LCBvcGVuTW9kYWxCdG4pO1xuICAgIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKHByb2plY3RQYWdlKTtcblxuICAgIC8vcmV2ZWFsIGJ1dHRvbiB0byBhZGQgbmV3IGxpc3QgaXRlbXNcbiAgICBvcGVuTW9kYWxCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmNvbnN0IHJlbmRlck5ld0l0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQcm9qZWN0Lmxpc3RJdGVtQXJyW2N1cnJlbnRQcm9qZWN0Lmxpc3RJdGVtQXJyLmxlbmd0aC0xXTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBhZ2VfX2xpc3QnKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wYWdlX19saXN0LWl0ZW0nKTtcbi8vIHVwcGVyIHJvdyBpdGVtcywgdmlzaWJsZSBiZWZvcmUgZXhwYW5zaW9uXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbV9fdGl0bGUnKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIGNvbnN0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2RhdGUnKTtcbiAgICBpdGVtRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBjb25zdCBpdGVtSXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpdGVtSXNEb25lLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGl0ZW1Jc0RvbmUuY2hlY2tlZCA9IGl0ZW0uaXNEb25lO1xuXG4gICAgY29uc3QgdG9nZ2xlRG9uZVN0YXR1cyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSB0aGlzLmlzRG9uZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfS5iaW5kKGl0ZW0pO1xuXG4gICAgaXRlbUlzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZURvbmVTdGF0dXMpO1xuXG4gICAgY29uc3QgdG9nZ2xlRG9uZUNsYXNzID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgIH0uYmluZChsaXN0SXRlbSlcblxuICAgIGl0ZW1Jc0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEb25lQ2xhc3MpO1xuXG4gICAgbGlzdEl0ZW0ucmVwbGFjZUNoaWxkcmVuKGl0ZW1UaXRsZSwgaXRlbURhdGUsIGl0ZW1Jc0RvbmUpO1xuICAgIGxpc3RJdGVtLnN0eWxlLnNldFByb3BlcnR5KCctLW9yZGVyJywgIDEpOyAvLyBmb3IgYW5pbWF0aW9uXG4gICAgaWYgKGl0ZW0uaXNEb25lKXtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGl0ZW0ucHJpb3JpdHkpe1xuICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuY29uc3QgdG9Eb01vZGFsID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9Eb0RpYWxvZycpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvX19hZGQtYnRuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb19fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9fX2Rlc2MnKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9fX2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvX19wcmlvcml0eScpO1xuXG4gICAgY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSl7XG4gICAgICAgIGFkZExpc3RJdGVtKGN1cnJlbnRQcm9qZWN0LCB0aXRsZS52YWx1ZSwgZGVzYy52YWx1ZSwgZGF0ZS52YWx1ZSwgcGFyc2VJbnQocHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gMTtcbiAgICAgICAgcmVuZGVyTmV3SXRlbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTGlzdEl0ZW0pO1xuXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtvcGVuTW9kYWx9O1xufSkoKTtcblxub3Blbk1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9Eb01vZGFsLm9wZW5Nb2RhbCk7IiwiY29uc3QgbGlzdEl0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2M9XCJcIiwgaXNEb25lPWZhbHNlLCBpc0V4cGFuZGVkPWZhbHNlKXtcbiAgICByZXR1cm4ge3RpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzYywgaXNEb25lLCBpc0V4cGFuZGVkfTtcbn1cbi8vIHByaW9yaXR5IC0gMSBmb3IgbG93LCAyIGZvciBtZWRpdW0sIDMgZm9yIGhpZ2hcblxuY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjPVwiXCIsbGlzdEl0ZW1BcnI9W10pe1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGxpc3RJdGVtQXJyfTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2M9XCJcIikgPT4ge1xuICAgIGxldCB0ZXN0SXRlbTEgPSBsaXN0SXRlbShcIkJ1eSBjYXJyb3RzXCIsIFwiMjIuMDkuMjJcIiwgMSwgXCJcIiApO1xuICAgIGxldCB0ZXN0SXRlbTIgPSBsaXN0SXRlbShcIkJhbmFhc1wiLCBcIjIyLjA5LjIyXCIsIDEsIFwiXCIgKTtcbiAgICBsZXQgdGVzdEl0ZW0zID0gbGlzdEl0ZW0oXCJZYXJpYnUgS2FsYW9tZSdyaVwiLCBcIjEyLjA5LjIyXCIsIDIsIFwiXCIgKTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCh0aXRsZSxkZXNjLCBbdGVzdEl0ZW0xLCB0ZXN0SXRlbTIsIHRlc3RJdGVtM10pKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpc3RJdGVtID0gKHByb2plY3QsIGl0ZW1UaXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBpZiAoZHVlRGF0ZSA9PT0gJycpIGR1ZURhdGUgPSdObyBkdWUgZGF0ZSc7XG4gICAgcHJvamVjdC5saXN0SXRlbUFyci5wdXNoKGxpc3RJdGVtKGl0ZW1UaXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2MpKTtcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3QubGlzdEl0ZW1BcnIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHNMaXN0fSBmcm9tIFwiLi9ET01yZW5kZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vb2JqZWN0c1wiO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX2FkZC1idXR0b24nKTtcblxuLy8gbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuLy8gfSlcblxuY3JlYXRlUHJvamVjdChcIlJlbmdhclwiLCBcIkEgY2hhcm1pbmcgaHVtYW5vaWQtY2F0LXBlcnNvbiB3aXRoIGEgcmVsYXRpdmVseSBodW50eS1pc2ggcGVyc29uYWxpdHkuIEhlIGxvb2tzIGxpa2UgaGUgY291bGQgdXNlIHNvbWUgaHVtYW4ga2luZG5lc3MgYW5kIEkgZG9uJ3Qga25vdyB3aGF0IHRvIHdyaXRlIGxvcmVtMjAgZG9lc24ndCBzZWVtIHRvIGJlIHdvcmtpbmcgd2l0aGluIGEgc3RyaW5nIGJvZHkgOiguXCIpO1xuXG5jcmVhdGVQcm9qZWN0KFwiQmVsdWdhXCIsIFwiQSBjaGFybWluZyBodW1hbm9pZC1jYXQtcGVyc29uIHdpdGggYSByZWxhdGl2ZWx5IGh1bnR5LWlzaCBwZXJzb25hbGl0eS4gSGUgbG9va3MgbGlrZSBoZSBjb3VsZCB1c2Ugc29tZSBodW1hbiBraW5kbmVzcyBhbmQgSSBkb24ndCBrbm93IHdoYXQgdG8gd3JpdGUgbG9yZW0yMCBkb2Vzbid0IHNlZW0gdG8gYmUgd29ya2luZyB3aXRoaW4gYSBzdHJpbmcgYm9keSA6KC5cIik7XG5cbmNyZWF0ZVByb2plY3QoXCJMYWx1bGlsYVwiLCBcIkEgY2hhcm1pbmcgaHVtYW5vaWQtY2F0LXBlcnNvbiB3aXRoIGEgcmVsYXRpdmVseSBodW50eS1pc2ggcGVyc29uYWxpdHkuIEhlIGxvb2tzIGxpa2UgaGUgY291bGQgdXNlIHNvbWUgaHVtYW4ga2luZG5lc3MgYW5kIEkgZG9uJ3Qga25vdyB3aGF0IHRvIHdyaXRlIGxvcmVtMjAgZG9lc24ndCBzZWVtIHRvIGJlIHdvcmtpbmcgd2l0aGluIGEgc3RyaW5nIGJvZHkgOiguXCIpO1xuXG5yZW5kZXJQcm9qZWN0c0xpc3QoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9