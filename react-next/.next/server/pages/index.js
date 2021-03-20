module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/kojodos/Desktop/Matheus/React.js/react-next/pages/index.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // Nosso condigo e renderizado pelo Servidor e nosso codigo nao mais vai como JavaScript e sim como HTML Estatico.\n// Para rodar \"npm run dev\"\n// Um teste para verificar se esta funcionando e desativar o JavaScript do seu navegador e ve que a pagina carrega normalmente, no React comum isso nao iria funcionar!\n// Esta pratica melhora o SEO do seu Site\n// 1. Criar a pastado seu projeto\n// 2. Dentro da pasta dar \"npm init -y\"\n// 3. Instalar \"npm install react react-dom next\"\n// 4. Adicionar script no package.json {\"dev\": \"next\", \"build\": \"next build\", \"start\": \"next start\"}\n// \"dev\": \"next\" - Inicia o servidor, porem em modo de Desenvolvimento.\n// \"build\": \"next build\" - Faz o build da aplicacao.\n// \"start\": \"next start\" - Inicia o servidor, porem em modo de Producao.\n// 5. Criar um diretorio pages, e colocar todas as paginas do projeto la.\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Next.JS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"robots\",\n          content: \"index/follow\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"description\",\n          content: \"Site para teste do Next.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this), this.props.repositories.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: repo.name\n      }, repo.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this))]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n_defineProperty(Home, \"getInitialProps\", async () => {\n  const response = await fetch(\"https://api.github.com/orgs/rocketseat/repos\");\n  return {\n    repositories: await response.json()\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInJlcG9zaXRvcmllcyIsIm1hcCIsInJlcG8iLCJuYW1lIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNQSxJQUFOLFNBQW1CQywrQ0FBbkIsQ0FBNkI7QUFReENDLFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUlJO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0IsaUJBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUF5QixpQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFRSyxLQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLEdBQXhCLENBQTRCQyxJQUFJLGlCQUNqQztBQUFBLGtCQUNLQSxJQUFJLENBQUNDO0FBRFYsU0FBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQyxDQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZUM7O0FBeEJtQzs7Z0JBQXZCUixJLHFCQUNRLFlBQVk7QUFDakMsUUFBTVMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw4Q0FBRCxDQUE1QjtBQUNBLFNBQU87QUFDSE4sZ0JBQVksRUFBRSxNQUFNSyxRQUFRLENBQUNFLElBQVQ7QUFEakIsR0FBUDtBQUdILEMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG4vLyBOb3NzbyBjb25kaWdvIGUgcmVuZGVyaXphZG8gcGVsbyBTZXJ2aWRvciBlIG5vc3NvIGNvZGlnbyBuYW8gbWFpcyB2YWkgY29tbyBKYXZhU2NyaXB0IGUgc2ltIGNvbW8gSFRNTCBFc3RhdGljby5cclxuLy8gUGFyYSByb2RhciBcIm5wbSBydW4gZGV2XCJcclxuLy8gVW0gdGVzdGUgcGFyYSB2ZXJpZmljYXIgc2UgZXN0YSBmdW5jaW9uYW5kbyBlIGRlc2F0aXZhciBvIEphdmFTY3JpcHQgZG8gc2V1IG5hdmVnYWRvciBlIHZlIHF1ZSBhIHBhZ2luYSBjYXJyZWdhIG5vcm1hbG1lbnRlLCBubyBSZWFjdCBjb211bSBpc3NvIG5hbyBpcmlhIGZ1bmNpb25hciFcclxuLy8gRXN0YSBwcmF0aWNhIG1lbGhvcmEgbyBTRU8gZG8gc2V1IFNpdGVcclxuXHJcbi8vIDEuIENyaWFyIGEgcGFzdGFkbyBzZXUgcHJvamV0b1xyXG4vLyAyLiBEZW50cm8gZGEgcGFzdGEgZGFyIFwibnBtIGluaXQgLXlcIlxyXG4vLyAzLiBJbnN0YWxhciBcIm5wbSBpbnN0YWxsIHJlYWN0IHJlYWN0LWRvbSBuZXh0XCJcclxuLy8gNC4gQWRpY2lvbmFyIHNjcmlwdCBubyBwYWNrYWdlLmpzb24ge1wiZGV2XCI6IFwibmV4dFwiLCBcImJ1aWxkXCI6IFwibmV4dCBidWlsZFwiLCBcInN0YXJ0XCI6IFwibmV4dCBzdGFydFwifVxyXG4vLyBcImRldlwiOiBcIm5leHRcIiAtIEluaWNpYSBvIHNlcnZpZG9yLCBwb3JlbSBlbSBtb2RvIGRlIERlc2Vudm9sdmltZW50by5cclxuLy8gXCJidWlsZFwiOiBcIm5leHQgYnVpbGRcIiAtIEZheiBvIGJ1aWxkIGRhIGFwbGljYWNhby5cclxuLy8gXCJzdGFydFwiOiBcIm5leHQgc3RhcnRcIiAtIEluaWNpYSBvIHNlcnZpZG9yLCBwb3JlbSBlbSBtb2RvIGRlIFByb2R1Y2FvLlxyXG4vLyA1LiBDcmlhciB1bSBkaXJldG9yaW8gcGFnZXMsIGUgY29sb2NhciB0b2RhcyBhcyBwYWdpbmFzIGRvIHByb2pldG8gbGEuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9yb2NrZXRzZWF0L3JlcG9zXCIpO1xyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICByZXBvc2l0b3JpZXM6IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRGVmaW5pbmRvIHVtIHRpdHVsbyBwYXJhIGEgcGFnaW5hIGNvbSBOZXh0LmpzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5OZXh0LkpTPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgvZm9sbG93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2l0ZSBwYXJhIHRlc3RlIGRvIE5leHQuanNcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXBvc2l0b3JpZXMubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGgxIGtleT17cmVwby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlcG8ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDE+KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });