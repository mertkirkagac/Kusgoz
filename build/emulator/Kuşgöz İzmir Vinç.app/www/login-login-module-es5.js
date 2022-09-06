(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ion-content  padding class=\"scroll-content\"  >\n    <div  class=\"loginLogoPoint\" fxLayout=\"row\"  fxLayout.lt-sm=\"row\" fxLayout.lt-xs=\"row\" fxLayout.lt-md=\"row\"  >\n        <div  fxFlex=\"100%\"  >\n    \n        </div>\n         <div  fxFlex=\"100%\" >\n          <div  fxLayout=\"row\" style=\"margin-top: 2rem\"  >\n            <a class=\"navbar-brand\"  >\n              <img   alt=\"logo\" src=\"../../assets/images/LOGO.JPG\">\n          </a> \n          </div>\n        </div>\n        <div  fxFlex=\"100%\" >\n    \n        </div>\n       \n       \n     \n      </div>\n  <div class=\"Container-smp\">\n  \n  <div  class=\"loginFormPoint\" fxLayout=\"row\"  fxLayout.lt-sm=\"row\" fxLayout.lt-xs=\"row\" fxLayout.lt-md=\"row\"  >\n    <div  fxFlex=\"100%\"  >\n\n    </div>\n     <div  fxFlex=\"100%\" >\n      <div  fxLayout=\"row\" >\n     \n       \n          <form [formGroup]=\"LoginForm\" autocomplete=\"off\"    style=\"display: grid;\" (ngSubmit)=\"onSubmit()\">\n    \n\n      \n            <mat-form-field class=\"FormFieldLogin \" >\n              <mat-icon matSuffix>mode_edit</mat-icon>\n                <input matInput   type=\"text\" formControlName=\"Tc\"    maxlength=\"11\" placeholder=\"TC Kimlik\" >\n                   \n              </mat-form-field>\n              <div *ngIf=\"editLF.Tc.touched && !editLF.Tc.valid\">\n      \n                <small style=\"color:#f15c2d;font-weight: bold;\"  *ngIf=\"editLF.Tc.errors.required\">\n                -  TC Alanı Zorunludur .\n                </small>\n                <small style=\"color:#ff704d ;font-weight: bold\" *ngIf=\"editLF.Tc.errors.TcValidation\">\n                  - Tc Kimlik Formatına Uymuyor.\n                 </small>\n             \n                 \n            </div>\n            <mat-form-field   class=\"form-field-trade FormFieldLogin \" >\n      \n            <input matInput  type=\"password\" formControlName=\"password\" placeholder=\"Şifre \" >\n            \n          </mat-form-field>\n          <div *ngIf=\"editLF.password.touched && !editLF.password.valid\">\n \n              <small style=\"color:#f15c2d;font-weight: bold;\"   *ngIf=\"editLF.password.errors.required\">\n              - Şifre Alanı Zorunludur .\n              </small>\n      \n          </div>\n                   \n            <div>\n                    <button mat-stroked-button  class=\"Login-btn\" type=\"submit\"  color=\"primary\" >Giriş</button>\n                    <!-- <div  style=\"margin-top: 5%\">\n                      <div  fxFlex=\"100%\" >\n                        <a  routerLink=\"/forgotpassword\" style=\"\n                        color: #f9b839;\"> Şifremi unuttum</a>\n                      </div>\n                  \n                 \n              </div>    -->\n                  \n     \n      \n              </div>\n      \n          </form>\n     \n   \n      </div>\n    </div>\n    <div  fxFlex=\"100%\" >\n\n    </div>\n   \n   \n \n  </div>\n </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/_helpers/customValidators.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/customValidators.ts ***!
  \**********************************************/
/*! exports provided: myValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myValidators", function() { return myValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");



var myValidators = /** @class */ (function () {
    function myValidators(authenticationService) {
        this.authenticationService = authenticationService;
    }
    myValidators.cannotContainSpace = function (control) {
        if (control.value != null) {
            if (control.value.indexOf(' ') >= 0 ||
                control.value.indexOf('ö') >= 0 ||
                control.value.indexOf('Ö') >= 0 ||
                control.value.indexOf('ğ') >= 0 ||
                control.value.indexOf('Ğ') >= 0 ||
                control.value.indexOf('ü') >= 0 ||
                control.value.indexOf('Ü') >= 0 ||
                control.value.indexOf('ç') >= 0 ||
                control.value.indexOf('Ç') >= 0 ||
                control.value.indexOf('ş') >= 0 ||
                control.value.indexOf('Ş') >= 0) {
                return { cannotContainSpace: true };
            }
            else if (control.value.indexOf('.') < 1) {
                return { cannotContainSpace: true };
            }
            return null;
        }
    };
    myValidators.invalidCost = function (control) {
        if (control.value != null) {
            if (control.value.indexOf(' ') >= 0 ||
                control.value.indexOf('ö') >= 0 ||
                control.value.indexOf('Ö') >= 0 ||
                control.value.indexOf('ğ') >= 0 ||
                control.value.indexOf('Ğ') >= 0 ||
                control.value.indexOf('ü') >= 0 ||
                control.value.indexOf('Ü') >= 0 ||
                control.value.indexOf('ç') >= 0 ||
                control.value.indexOf('Ç') >= 0 ||
                control.value.indexOf('ş') >= 0 ||
                control.value.indexOf('Ş') >= 0 ||
                control.value.split(".").length - 1 > 1) {
                return { invalidCost: true };
            }
            return null;
        }
    };
    myValidators.passwordConfirming = function (c) {
        if (!c.parent || !c) {
            return;
        }
        var pwd = c.parent.get('ReqPassword');
        var cpwd = c.parent.get('ReqPasswordConfirm');
        if (!pwd || !cpwd) {
            return;
        }
        if (pwd.value !== cpwd.value) {
            return { invalid: true };
        }
    };
    myValidators.passwordConfirmingForReset = function (c) {
        if (!c.parent || !c) {
            return;
        }
        var pwd = c.parent.get('Password');
        var cpwd = c.parent.get('ConfirmPassword');
        if (!pwd || !cpwd) {
            return;
        }
        if (pwd.value !== cpwd.value) {
            return { invalid: true };
        }
    };
    myValidators.InvalidValue = function (control) {
        if (+control.value < 0 || control.value == "" || control.value == undefined || control.value == Infinity || control.value == NaN || +control.value == 0) {
            return { InvalidValue: true };
        }
    };
    myValidators.TcValidation = function (control) {
        if (control.value != null) {
            if (control.value.indexOf(' ') >= 0) {
                return { TcValidation: true };
            }
            else if (control.value.length != 11) {
                return { TcValidation: true };
            }
            return null;
        }
    };
    myValidators.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    myValidators = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], myValidators);
    return myValidators;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-content {\n  overflow: hidden !important;\n}\n\n.Login-btn.mat-stroked-button.mat-primary {\n  width: 100%;\n  color: white !important;\n  border-color: #87cefa;\n  background-color: #6fa237;\n}\n\n.Container-smp {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  word-wrap: break-word;\n  background-color: #fcfefb;\n  background-clip: border-box;\n  margin: 0 auto;\n  position: relative;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  min-height: 390px;\n  padding: 2rem;\n  margin-top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZGVha3RpZm1hYy9EZXNrdG9wL1Byb2plY3RzL3JlcG8vUHVhbnRhaiBBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLDJCQUFBO0FDQ0o7O0FERVE7RUFJSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNGLHlCQUFBO0FDRlY7O0FEUUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0gsaUJBQUE7RUFDQSxhQUFBO0VBQ0csZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5zY3JvbGwtY29udGVudHtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbiAgICAgICAgLkxvZ2luLWJ0bi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xuICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzg3Y2VmYTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZhMjM3O1xuICAgICAgICAgICBcbiAgICAgICAgIH1cblxuXG5cbi5Db250YWluZXItc21we1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmVmYjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblx0bWluLWhlaWdodDogMzkwcHg7XG5cdHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufSIsIi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLkxvZ2luLWJ0bi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzg3Y2VmYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmYTIzNztcbn1cblxuLkNvbnRhaW5lci1zbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZlZmI7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _helpers_customValidators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/customValidators */ "./src/app/_helpers/customValidators.ts");








var LoginPage = /** @class */ (function () {
    function LoginPage(alertController, fb, authenticationService, storage, toastr, navCtrl) {
        this.alertController = alertController;
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.toastr = toastr;
        this.navCtrl = navCtrl;
        this.LoginForm = this.fb.group({
            Tc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _helpers_customValidators__WEBPACK_IMPORTED_MODULE_7__["myValidators"].TcValidation
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])],
        });
    }
    Object.defineProperty(LoginPage.prototype, "editLF", {
        get: function () { return this.LoginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.getToken(this.editLF.Tc.value, this.editLF.password.value).subscribe(function (data) {
            _this.storage.set('currentUser', JSON.stringify(data));
            _this.navCtrl.navigateRoot('/home');
        }, function (error) {
            _this.presentAlert("Kullanıcı Bilgileri Hatalı. - " + JSON.stringify(error));
        });
    };
    LoginPage.prototype.presentAlert = function (reason) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Uyarı',
                            subHeader: '',
                            message: reason,
                            buttons: ['Tamam']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map