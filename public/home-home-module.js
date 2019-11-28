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

module.exports = "<ion-content>\n  <div class='box'>\n    <div *ngIf=\"!visible\" class='box_br deepgreenblues'>\n      <input (click)='clear(\"expression\")' class='input' type=\"text\" [(ngModel)]=\"expression\">\n      <input (click)='clear(\"nv\")' class='input small' type=\"text\" [(ngModel)]=\"nv\">\n      <button class='btn' (click)=\"capture()\">send</button>\n    </div>\n\n    <div *ngIf=\"visible\" class='box_br deepgreenblues'>\n      <p class='smaller'>{{ expression }}</p>\n      <p class='result' *ngFor='let e of results'> {{ e }} </p>\n      <button class='btn' (click)='reset()'>Reset</button>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 6rem;\n  font-family: 'Nothing You Could Do', cursive;\n  background-image: linear-gradient(to right, #a8ff78, #78ffd6);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  font-weight: 200; }\n\n.box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%; }\n\n.shalala {\n  width: inherit;\n  height: inherit;\n  background: #D66D75;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #E29587, #D66D75);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.deepgreenblues {\n  width: inherit;\n  height: inherit;\n  background: #00C9FF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #92FE9D, #00C9FF);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  transition: opacity 1s; }\n\n.input {\n  outline: none;\n  background-color: inherit;\n  border: none;\n  text-align: center;\n  color: white;\n  font-size: 1.5rem; }\n\n.smaller {\n  font-size: 0.8rem;\n  color: white; }\n\n.small {\n  font-size: 1rem;\n  margin-bottom: 1rem; }\n\n.btn {\n  width: 10rem;\n  height: 2rem;\n  background-color: inherit;\n  border: 1px solid white;\n  color: white;\n  font-size: 1rem;\n  outline: none;\n  border-radius: 5px; }\n\n.btn:hover {\n    background-color: white;\n    color: #78ffd6; }\n\n.result {\n  font-size: 1.5rem;\n  color: whitesmoke; }\n\n.box_br {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW8vRGVza3RvcC9Db2Rlcy9Jb25pYy9ib29sQXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsNkRBQTZEO0VBQzdELGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHNEQUFzRDtFQUN0RCxxRUFBQSxFQUFzRTs7QUFHMUU7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBQTtFQUVBLCtCQUFBO0VBQ0Esc0RBQXNEO0VBQ3RELHFFQUFBO0VBQ0Esc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBUnRCO0lBV1EsdUJBQXVCO0lBQ3ZCLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgZm9udC1mYW1pbHk6ICdOb3RoaW5nIFlvdSBDb3VsZCBEbycsIGN1cnNpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYThmZjc4LCAjNzhmZmQ2KTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cblxuLmJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hhbGFsYSB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6ICNENjZENzU7XG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNFMjk1ODcsICNENjZENzUpO1xuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNFMjk1ODcsICNENjZENzUpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuLmRlZXBncmVlbmJsdWVze1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBDOUZGO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjOTJGRTlELCAjMDBDOUZGKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjOTJGRTlELCAjMDBDOUZGKTtcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbn1cblxuLmlucHV0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zbWFsbGVyIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5idG4ge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzc4ZmZkNjtcbiAgICB9XG59XG5cbi5yZXN1bHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYm94X2JyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

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
        this.results = [];
        this.visible = 0;
    }
    HomePage.prototype.capture = function () {
        var _this = this;
        if (+this.nv > 9) {
            return;
        }
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
        this.http.post('https://zerone-app.herokuapp.com/solver', { nv: +this.nv, num: arr })
            .subscribe(function (response) {
            _this.results = response['exp'];
            _this.visible = 1;
        });
    };
    HomePage.prototype.clear = function (key) {
        this[key] = '';
    };
    HomePage.prototype.translate = function () {
        var _this = this;
        var num = [];
        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var trimmed = this.expression.toUpperCase().replace(/\s/g, '');
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
        arr.forEach(function (s) {
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
                return false;
            }
        }
        return true;
    };
    HomePage.prototype.reset = function () {
        this.expression = 'Expressão booleana aqui';
        this.nv = 'Numero de variaveis';
        this.net = {};
        this.results = [];
        this.visible = 0;
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