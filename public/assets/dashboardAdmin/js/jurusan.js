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
/*!*******************************************************!*\
  !*** ./resources/assets/dashboardAdmin/js/jurusan.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
// Fungsi Search pada Jurusan
function handleSearch() {
  search();
}
function search() {
  var input, filter, tabels, i, j, txtValue;
  input = document.getElementById("cari");
  filter = input.value.toUpperCase();
  tabels = document.querySelectorAll('.tabel');
  tabels.forEach(function (tabel) {
    var rows = tabel.querySelectorAll('.table-data-jurusan tr');
    var tabelMatch = false;
    for (i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var rowMatch = false;
      for (j = 0; j < cells.length; j++) {
        txtValue = cells[j].textContent || cells[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          rowMatch = true;
          tabelMatch = true;
          break;
        }
      }
    }
    if (tabelMatch) {
      tabel.style.display = "block";
    } else {
      tabel.style.display = "none";
    }
  });
}
document.getElementById("cari").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  } else {
    search();
  }
});

// Konfirmasi Tambah Jurusan
document.getElementById("buttonFormCon").addEventListener("click", function () {
  var confirmElement1 = document.getElementById("confirm1");
  confirmElement1.classList.add("aktif");
});
document.getElementById("noButton").addEventListener("click", function () {
  var confirmElement1 = document.getElementById("confirm1");
  confirmElement1.classList.remove("aktif");
});

// Fungsi input Nama
var alertShown = false;
var namaInputs = document.querySelectorAll('[id^="namaKajur"]');
namaInputs.forEach(function (input) {
  input.addEventListener('input', function (event) {
    if (!/^[a-zA-Z\s\.']+$/g.test(event.target.value)) {
      if (!alertShown) {
        showToastAlert("Input tidak valid!");
        alertShown = true;
        setTimeout(function () {
          alertShown = false;
        }, 3000);
      }
      event.target.value = event.target.value.replace(/[^a-zA-Z\s\.']/g, '');
    } else {
      alertShown = false;
    }
  });
});
function showToastAlert(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: 'right',
    backgroundColor: "#0099ff",
    stopOnFocus: true
  }).showToast();
}

// Fungsi untuk membuka modal edit
var editButtons = document.querySelectorAll("#editButtonJurusan");
editButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var modalElement = document.getElementById("editModalJurusan");
    modalElement.style.display = "block";
  });
});
document.getElementById("closeButton").addEventListener("click", function () {
  var modalElement = document.getElementById("editModalJurusan");
  modalElement.style.display = "none";
});
/******/ })()
;