(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"default~home-home-module~login-login-module",
		"home-home-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"default~home-home-module~login-login-module",
		"login-login-module"
	],
	"./sefhome/sefhome.module": [
		"./src/app/sefhome/sefhome.module.ts",
		"sefhome-sefhome-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		2
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		3
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		4
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		5
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		6
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		8
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		9
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		10
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		11
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		0,
		"common",
		12
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		0,
		"common",
		13
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		14
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		15
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		16
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		17
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		18
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		19
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		20
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		21
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		22
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		23
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		24
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		25
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		26
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		27
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		28
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		29
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		30
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		32
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		33
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		34
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		35
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		36
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		37
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		0,
		"common",
		38
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		0,
		"common",
		39
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		40
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		41
	],
	"./ion-nav_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_4.entry.js",
		"common",
		42
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		43
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		45
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		46
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		47
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		48
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		49
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		51
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		53
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		54
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		55
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		56
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		57
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		58
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		59
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		60
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		61
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		62
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		"common",
		63
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		"common",
		64
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		65
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		66
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		67
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		68
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		69
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		70
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu type=\"overlay\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n         \n          <ion-item (click)=\"openBordro()\" >\n            <ion-icon slot=\"start\" name=\"paper\" ></ion-icon>\n            Bordro\n          </ion-item>\n          <ion-item (click)=\"LogOut()\" >\n            <ion-icon slot=\"start\" name=\"power\" ></ion-icon>\n            Çıkış\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/storage.service */ "./src/app/_services/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let AuthGuard = class AuthGuard {
    constructor(router, _storageService, userService, storage, navCtrl) {
        this.router = router;
        this._storageService = _storageService;
        this.userService = userService;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    canActivate(next, state) {
        let roles = next.data["roles"];
        return this.RoleControl(roles);
    }
    RoleControl(roles) {
        return new Promise((resolve, reject) => {
            this.storage.get('currentUser').then((val) => {
                if (val == null) {
                    this.navCtrl.navigateRoot('/login');
                    return resolve(false);
                }
                else {
                    this.currentuser = (val);
                    let user = JSON.parse(this.currentuser);
                    var userRoles = user.role;
                    roles.forEach(element => {
                        if (userRoles.indexOf(element) > -1) {
                            return resolve(true);
                        }
                        else {
                            this.navCtrl.navigateRoot('/login');
                            return resolve(false);
                        }
                    });
                }
            })
                .catch((err) => {
                return resolve(false);
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/Unauthorized-error.ts":
/*!************************************************!*\
  !*** ./src/app/_helpers/Unauthorized-error.ts ***!
  \************************************************/
/*! exports provided: UnautorizedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnautorizedError", function() { return UnautorizedError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/_helpers/app-error.ts");

class UnautorizedError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
    /**
     *
     */
    constructor(gelenmesaj) {
        super();
        this.message = gelenmesaj;
    }
}
UnautorizedError.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/_helpers/app-error.ts":
/*!***************************************!*\
  !*** ./src/app/_helpers/app-error.ts ***!
  \***************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError, message) {
        this.originalError = originalError;
        this.message = message;
    }
}
AppError.ctorParameters = () => [
    { type: undefined },
    { type: String }
];


/***/ }),

/***/ "./src/app/_helpers/bad-input.ts":
/*!***************************************!*\
  !*** ./src/app/_helpers/bad-input.ts ***!
  \***************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/_helpers/app-error.ts");

class BadInput extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
    constructor(mesajgelen) {
        super();
        this.message = mesajgelen;
    }
}
BadInput.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/_helpers/not-found-error.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/not-found-error.ts ***!
  \*********************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/_helpers/app-error.ts");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/_models/UserModel.ts":
/*!**************************************!*\
  !*** ./src/app/_models/UserModel.ts ***!
  \**************************************/
/*! exports provided: UserModel, RegisterResponseModel, SignalModel, State, loginmodel, PersonelModel, GetMesaiModel, IDT_IK_MESAI_KAYIT_HAZIRLIK_Model, sefOnayModel, Birlesik, DurumSecim, IzinliDurum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterResponseModel", function() { return RegisterResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalModel", function() { return SignalModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginmodel", function() { return loginmodel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonelModel", function() { return PersonelModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMesaiModel", function() { return GetMesaiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDT_IK_MESAI_KAYIT_HAZIRLIK_Model", function() { return IDT_IK_MESAI_KAYIT_HAZIRLIK_Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sefOnayModel", function() { return sefOnayModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Birlesik", function() { return Birlesik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurumSecim", function() { return DurumSecim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzinliDurum", function() { return IzinliDurum; });
class UserModel {
}
class RegisterResponseModel {
}
class SignalModel {
}
class State {
}
class loginmodel {
}
class PersonelModel {
}
class GetMesaiModel {
}
class IDT_IK_MESAI_KAYIT_HAZIRLIK_Model {
}
class sefOnayModel {
}
class Birlesik {
}
class DurumSecim {
}
class IzinliDurum {
}


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helpers_bad_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/bad-input */ "./src/app/_helpers/bad-input.ts");
/* harmony import */ var _helpers_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/not-found-error */ "./src/app/_helpers/not-found-error.ts");
/* harmony import */ var _helpers_Unauthorized_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/Unauthorized-error */ "./src/app/_helpers/Unauthorized-error.ts");
/* harmony import */ var _helpers_app_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/app-error */ "./src/app/_helpers/app-error.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_models/UserModel */ "./src/app/_models/UserModel.ts");












const LoginhttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        //original
        //'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True',
        'Content-Type': 'application/json', 'No-Auth': 'True',
    })
};
let AuthenticationService = class AuthenticationService {
    // 'http://  92.45.19.226';
    //readonly rootUrl = 'http://78.189.86.247:118';
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.rootUrl = 'http://92.45.19.226:80';
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(new _helpers_bad_input__WEBPACK_IMPORTED_MODULE_3__["BadInput"](error.error.Message));
        if (error.status === 404)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(new _helpers_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]());
        if (error.status === 401)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(new _helpers_Unauthorized_error__WEBPACK_IMPORTED_MODULE_5__["UnautorizedError"]('Oturum süreniz sona erdi. İşlem yapabilmek için lütfen tekrar giriş yapınız.'));
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(new _helpers_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
    }
    //#region Token AL!! 
    getToken(Tc, password) {
        let body = new _models_UserModel__WEBPACK_IMPORTED_MODULE_11__["loginmodel"]();
        body.Tc = Tc;
        body.Password = password;
        return this.http.post(this.rootUrl + '/api/account/login', body, LoginhttpOptions); //.map(user => user).catch(this.handleError)
    }
    getCurrentPersonel() {
        return new Promise(resolve => {
            this.storage.ready().then(() => {
                this.storage.get('currentUser').then(val => {
                    resolve(JSON.parse(val));
                }).catch((err) => {
                    console.log(err);
                });
            });
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/puantaj.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/puantaj.service.ts ***!
  \**********************************************/
/*! exports provided: PuantajService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuantajService", function() { return PuantajService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _helpers_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/bad-input */ "./src/app/_helpers/bad-input.ts");
/* harmony import */ var _helpers_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/not-found-error */ "./src/app/_helpers/not-found-error.ts");
/* harmony import */ var _helpers_Unauthorized_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/Unauthorized-error */ "./src/app/_helpers/Unauthorized-error.ts");
/* harmony import */ var _helpers_app_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/app-error */ "./src/app/_helpers/app-error.ts");
/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_models/UserModel */ "./src/app/_models/UserModel.ts");










let PuantajService = class PuantajService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        //readonly rootUrl = 'http://78.189.86.247:118/';
        this.rootUrl = 'http://92.45.19.226:80/';
    }
    handleError(error) {
        console.log(error);
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(new _helpers_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.error.Message));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(new _helpers_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        if (error.status === 401)
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(new _helpers_Unauthorized_error__WEBPACK_IMPORTED_MODULE_7__["UnautorizedError"]('Oturum süreniz sona erdi. İşlem yapabilmek için lütfen tekrar giriş yapınız.'));
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(new _helpers_app_error__WEBPACK_IMPORTED_MODULE_8__["AppError"](error));
    }
    getPuantajTableOnthisDate(user, date) {
        let MesaiModel = new _models_UserModel__WEBPACK_IMPORTED_MODULE_9__["GetMesaiModel"]();
        MesaiModel.PersonelID = user.PERSONEL_ID;
        MesaiModel.Tarih = date;
        return this.http.post(this.rootUrl + 'api/Mesai/GetThisDate', MesaiModel).map(response => response).catch(this.handleError);
    }
    getLastRecod(user) {
        let MesaiModel = new _models_UserModel__WEBPACK_IMPORTED_MODULE_9__["GetMesaiModel"]();
        MesaiModel.PersonelID = user.PERSONEL_ID;
        return this.http.post(this.rootUrl + 'api/Mesai/LastRecord', MesaiModel).map(response => response).catch(this.handleError);
    }
    insertPuantaj(MesaiModel) {
        return this.http.post(this.rootUrl + 'api/Mesai/InsertMesai', MesaiModel).map(response => response).catch(this.handleError);
    }
    insertPuantajSef(MesaiModel) {
        return this.http.post(this.rootUrl + 'api/Mesai/InsertMesaiSef', MesaiModel).map(response => response).catch(this.handleError);
    }
    CancelOnaySef(model) {
        return this.http.post(this.rootUrl + 'api/Mesai/SefOnayKaldir', model).map(response => response).catch(this.handleError);
    }
    getSefPersoneli(user) {
        let MesaiModel = new _models_UserModel__WEBPACK_IMPORTED_MODULE_9__["GetMesaiModel"]();
        MesaiModel.PersonelID = user.PERSONEL_ID;
        return this.http.post(this.rootUrl + 'api/Mesai/SefPersonali', MesaiModel).map(response => response).catch(this.handleError);
    }
};
PuantajService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
];
PuantajService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
], PuantajService);



/***/ }),

/***/ "./src/app/_services/storage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/storage.service.ts ***!
  \**********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    getUserRoles() {
        return this.storage.ready().then(() => {
            return this.storage.get('userRoles');
        });
    }
    getToken() {
        return this.storage.get('userRoles').then((val) => {
            return val;
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], StorageService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _helpers_bad_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/bad-input */ "./src/app/_helpers/bad-input.ts");
/* harmony import */ var _helpers_not_found_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/not-found-error */ "./src/app/_helpers/not-found-error.ts");
/* harmony import */ var _helpers_Unauthorized_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/Unauthorized-error */ "./src/app/_helpers/Unauthorized-error.ts");
/* harmony import */ var _helpers_app_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/app-error */ "./src/app/_helpers/app-error.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage.service */ "./src/app/_services/storage.service.ts");










let UserService = class UserService {
    constructor(http, storage, _storageService) {
        this.http = http;
        this.storage = storage;
        this._storageService = _storageService;
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _helpers_bad_input__WEBPACK_IMPORTED_MODULE_4__["BadInput"](error.error.Message));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _helpers_not_found_error__WEBPACK_IMPORTED_MODULE_5__["NotFoundError"]());
        if (error.status === 401)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _helpers_Unauthorized_error__WEBPACK_IMPORTED_MODULE_6__["UnautorizedError"]('Oturum süreniz sona erdi. İşlem yapabilmek için lütfen tekrar giriş yapınız.'));
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _helpers_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"](error));
    }
    roleMatch(allowedRoles) {
        var isMatch = 0;
        var userRoles;
        this._storageService.getToken().then((token) => {
            userRoles = JSON.parse(token);
        });
        return isMatch;
    }
    allowedRolesCheck(userRoles, allowedRoles) {
        if (userRoles != undefined) {
            allowedRoles.forEach(element => {
                if (userRoles.indexOf(element) > -1) {
                    return true;
                }
            });
            return false;
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]])
], UserService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'sefhome', loadChildren: './sefhome/sefhome.module#SefhomePageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZGVha3RpZm1hYy9EZXNrdG9wL1Byb2plY3RzL3JlcG8vUHVhbnRhaiBBcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsc0VBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");







let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, navCtrl, storage, themeableBrowser) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.themeableBrowser = themeableBrowser;
        this.appPages = [
            {
                title: 'Puantaj',
                url: '/home',
                icon: 'home'
            },
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    LogOut() {
        this.splashScreen.hide();
        this.statusBar.styleDefault();
        this.storage.ready().then(() => {
            this.storage.remove('currentUser');
            this.navCtrl.navigateRoot('');
        });
    }
    openBordro() {
        const options = {
            toolbar: {
                height: 64,
                color: '#423a3a'
            },
            title: {
                color: '#fffffff',
                showPageTitle: true,
                staticText: 'Kuşgöz Vinc'
            },
            closeButton: {
                wwwImage: 'assets/img/home.png',
                align: 'left',
                event: 'closePressed'
            },
            backButton: {
                wwwImage: 'assets/img/backBtn.png',
                align: 'right',
                event: 'backPressed'
            },
            forwardButton: {
                wwwImage: 'assets/img/forwardBtn.png',
                align: 'right',
                event: 'forwardPressed'
            }
        };
        const browser = this.themeableBrowser.create('http://92.45.19.226:90/home/loginBordro', '_blank', options);
        browser.on('closePressed').subscribe(res => {
            browser.close();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["ThemeableBrowser"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["ThemeableBrowser"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/storage.service */ "./src/app/_services/storage.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_puantaj_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/puantaj.service */ "./src/app/_services/puantaj.service.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot({ positionClass: 'toast-bottom-right' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(),
        ],
        providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__["InAppBrowser"], _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_21__["ThemeableBrowser"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__["Toast"],
            _services_puantaj_service__WEBPACK_IMPORTED_MODULE_18__["PuantajService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ideaktifmac/Desktop/Projects/repo/Puantaj App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map