(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"ion-padding box\">\n    <input (click)='clear(\"expression\")' class='input' type=\"text\" [(ngModel)]=\"expression\">\n    <input (click)='clear(\"nv\")' class='input small' type=\"text\" [(ngModel)]=\"nv\">\n    <button class='btn' (click)=\"capture()\">send</button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  background: #8E2DE2;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #4A00E0, #8E2DE2);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.input {\n  outline: none;\n  background-color: inherit;\n  border: none;\n  text-align: center;\n  color: white;\n  font-size: 2rem; }\n\n.small {\n  font-size: 1rem;\n  margin-bottom: 1rem; }\n\n.btn {\n  width: 10rem;\n  height: 2rem;\n  background-color: inherit;\n  border: 1px solid white;\n  color: white;\n  font-size: 1rem;\n  outline: none; }\n\n.btn:hover {\n    background-color: white;\n    color: indigo; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW8vRGVza3RvcC9Db2Rlcy9Jb25pYy9ib29sQXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EscURBQXFEO0VBQ3JELHFFQUFBLEVBQXNFOztBQUcxRTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBUGpCO0lBU1EsdUJBQXVCO0lBQ3ZCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzhFMkRFMjtcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNEEwMEUwLCAjOEUyREUyKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM0QTAwRTAsICM4RTJERTIpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuLmlucHV0e1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5zbWFsbHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmJ0bntcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogaW5kaWdvO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomePage = /** @class */ (function () {
    function HomePage(http) {
        this.http = http;
        this.expression = 'Expressão booleana aqui';
        this.nv = 'Numero de variaveis';
        this.net = {};
    }
    HomePage.prototype.capture = function () {
        var _this = this;
        var arr = [];
        if (this.expression[0] === '0' || this.expression[0] === '1') {
            for (var i = 0; i < this.expression.length; i++) {
                if (this.expression[i] === '1') {
                    arr.push(Math.log(Math.pow(2, i)) / Math.log(2));
                }
            }
        }
        else {
            arr = this.translate();
        }
        console.log(arr);
        this.http.post('https://zerone-app.herokuapp.com/solver', { nv: +this.nv, num: arr })
            .subscribe(function (response) {
            _this.expression = response['exp'];
        });
    };
    HomePage.prototype.clear = function (key) {
        this[key] = '';
    };
    HomePage.prototype.translate = function () {
        var _this = this;
        var num = [];
        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var trimmed = this.expression.replace(/\s/g, '');
        var arr = trimmed.split('+');
        var upperLimit = Math.pow(2, +this.nv);
        var table = {};
        for (var i2 = 1; i2 <= +this.nv; i2++) {
            var limit = upperLimit / Math.pow(2, i2);
            var counter = 0;
            var SWITCH = false;
            for (var i = (upperLimit - 1); i >= 0; i--) {
                var letter = alphabet[i2 - 1];
                if (counter === limit) {
                    SWITCH = !SWITCH;
                    counter = 0;
                }
                if (SWITCH) {
                    letter = letter + "'";
                }
                if (table[i] === undefined) {
                    table[i] = letter;
                }
                else {
                    table[i] = table[i] + letter;
                }
                counter++;
            }
        }
        console.log(table);
        arr.forEach(function (s) {
            console.log(s);
            for (var count = 0; count < upperLimit; count++) {
                if (_this.isSubstring(table[count], s)) {
                    if (!num.includes(count)) {
                        num.push(count);
                    }
                }
            }
        });
        num.sort(function (a, b) { return (a - b); });
        return num;
    };
    HomePage.prototype.isSubstring = function (arr, arr2) {
        var index = 0;
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < arr2.length; i++) {
            var comp = void 0;
            if (arr2[i + 1] === "'") {
                comp = arr2[i] + arr2[i + 1];
                i++;
            }
            else {
                comp = arr2[i];
            }
            index = arr.indexOf(comp, index);
            if (arr[index + 1] === "'" && arr2[i] !== "'") {
                return false;
            }
            else {
                comp = arr2[i];
            }
            if (index === -1) {
                console.log('* STRING: ' + arr + ' SUBSTRING: ' + arr2);
                return false;
            }
        }
        console.log('STRING: ' + arr + 'SUBSTRING: ' + arr2);
        return true;
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map