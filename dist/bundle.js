/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nconsole.log('index linked');\r\nconst logic = __webpack_require__(/*! ./src/logic.js */ \"./src/logic.js\");\r\nconsole.log(logic);\r\nconsole.log(logic.verifyPW(8));\r\nconsole.log(logic.verifyPIN(4));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\nconst a = ['a', 'A', '@', '4', 'alpha'];\nconst b = ['b', 'B', '8', 'bravo'];\nconst c = ['c', 'C', '(', 'charlie'];\nconst d = ['d', 'D', '|)', 'delta'];\nconst e = ['e', 'E', '3', 'echo'];\nconst f = ['f', 'F', '|=', 'foxtrot'];\nconst g = ['g', 'G', '6', 'golf'];\nconst h = ['h', 'H', '|-|', 'hotel']; \nconst i = ['i', 'I', 'l', '1', '!', 'india'];\nconst j = ['j', 'J', 'juliet'];\nconst k = ['k', 'K', '|<', 'kilo'];\nconst l = ['l', 'L', '|', 'lima'];\nconst m = ['m', 'M', '|\\\\/|', 'mike'];\nconst n = ['n', 'N', '|\\\\|', 'november'];\nconst o = ['o', 'O', '0', '()', 'oscar'];\nconst p = ['p', 'P', '|*', 'papa'];\nconst q = ['q', 'Q', '9', 'quebec'];\nconst r = ['r', 'R', 'romeo'];\nconst s = ['s', 'S', '$', '5', 'sierra'];\nconst t = ['t', 'T', '+', '7', 'tango']; \nconst u = ['u', 'U', '|_|', 'uniform'];\nconst v = ['v', 'V', '\\\\/', 'victor'];\nconst w = ['w', 'W', '\\\\^/', 'whiskey'];\nconst x = ['x', 'X', '><', 'xray'];\nconst y = ['y', 'Y', 'yankee'];\nconst z = ['z', 'Z', '2', '7', 'zulu'];\n\n// Use a filter to find the letter in the remix function.\n\n// For easy mode, make sure you only use option 1 or 2 to keep the letters only and ignore the more obscure options. Use them for Hard Mode.\n\nconst alphabet = [ a, b , c, d, e, f, g, h, i , j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ];\n\nconst nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];\n\nconst spChars = ['!', '@', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', '\\\\', '\\'', ',', '.', ':', ';', '<', '=', '>', '?', '[', ']', '^', '_', '{', '|', '}', '~', '`' ];\n\n//Function to split and check password\n\n// let verifyPW = function(str){\n//   let arr = str.split('');\n//   console.log(arr);\n// };\n\nlet passwordContainer = [];\nlet passwordReturn = [];\n\nlet pinContainer = [];\n\n\n\nlet passPoint = function(){\n  return Math.round(Math.random()*25);\n};\n\nlet pinPoint = function(){\n  return Math.round(Math.random()*9);\n};\n\n\n\nlet verifyPW = function(num){\n\n  passwordContainer = [];\n\n  console.log(num);\n\n  for(let i = 0; i < num; i++){\n    passwordContainer.push(alphabet[passPoint()]);\n  }\n\n  for(let i = 0; i < num; i++){\n    passwordReturn.push(passwordContainer.find(element => element = passwordContainer[j]));\n  }\n\n  // scramble(passwordContainer);\n\n  console.log(passwordContainer);\n  console.log(passwordReturn);\n};\n\n\n\nlet verifyPIN = function(num){\n\n  pinContainer = [];\n\n  console.log(num);\n\n  for(let i = 0; i < num; i++){\n    pinContainer.push(nums[pinPoint()]);\n  }\n\n  console.log(pinContainer);\n};\n\nmodule.exports = { verifyPW, verifyPIN };\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ })

/******/ });