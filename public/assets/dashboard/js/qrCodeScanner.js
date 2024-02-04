/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./resources/assets/dashboard/js/qrCodeScanner.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
var scanNav = document.getElementById("scanNav");
if (scanNav) {
  scanNav.addEventListener('click', toggleScan);
}
function toggleScan() {
  var reader = document.getElementById("qrCodeReader");
  var qrcodeContainer = document.getElementById("qrcodeContainer");
  if (reader.style.display === "none") {
    reader.style.display = "block";
    qrcodeContainer.style.display = "none";
  } else {
    reader.style.display = "none";
    qrcodeContainer.style.display = "block";
  }
}
/******/ })()
;