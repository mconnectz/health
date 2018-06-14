webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "{{user.username}}\r\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(auth) {
        this.auth = auth;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.user = this.auth.currentUser;
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\r\n    -ms-flex: 1 1 auto;\r\n        flex: 1 1 auto;\r\n  }\r\n.fxcontainer {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .mobile .toolbar {\r\n    position: fixed;\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.name {\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .sidenav-container {\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n  }\r\n\r\n  button,h1{\r\n    font-family: 'Myriad Pro Bold';\r\n\r\n  }\r\n  .mat-drawer{\r\n    background-color:grey;\r\n   \r\n   }\r\n   .mat-nav-list .mat-list-item{\r\n    color:white;\r\n   }\r\n.mat-toolbar{\r\n  background-color:black;\r\n}\r\n.col{\r\n  background-color:grey\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fxcontainer\" fxLayout=\"row wrap\"[class.mobile]=\"mobileQuery.matches\" >\r\n    <mat-toolbar color=\"primary\" class=\"toolbar\" *ngIf=\"auth.loggedIn\">\r\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n      <h1 class=\"name\" routerLink=\"/home\">DOCAPP</h1>\r\n      <span class=\"spacer\"></span>\r\n      <button id=\"menu\" class=\"col\" mat-icon-button [matMenuTriggerFor]=\"menu\">{{auth.currentUser.username | uppercase |slice:0:1 }}</button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>{{auth.currentUser.username}}</button>\r\n            <button mat-menu-item>{{auth.currentUser._id }}</button>\r\n            <button mat-menu-item (click)=\"onLogoutClick()\" >Logut<mat-icon>exit_to_app</mat-icon></button>\r\n        </mat-menu>\r\n    </mat-toolbar>\r\n  \r\n    <mat-sidenav-container class=\"sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n        <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n          <mat-nav-list>\r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/dashboard\" *ngIf=\"auth.loggedIn\" >Dashboard</a>\r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/profile\" *ngIf=\"auth.loggedIn\" >ProfileForm</a>\r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/lab\" *ngIf=\"auth.isSadmin\">Laboratory</a>\r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/hospital\" *ngIf=\"auth.isSadmin\">Hospital</a>\r\n           <!-- <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/account\" *ngIf=\"auth.loggedIn\">Profile</a>-->\r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/myprofile\" *ngIf=\"auth.loggedIn\">MyProfile</a>\r\n          \r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/diagnosis\" *ngIf=\"auth.loggedIn\">Diagnosis</a>\r\n          \r\n            <div *ngIf=\"user.role=='Doctor'\">\r\n            <a mat-list-item  routerLinkActive=\"active\" routerLink=\"/history\" *ngIf=\"auth.loggedIn || user.role=='Doctor' \">History</a>\r\n          </div>\r\n          </mat-nav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n          <router-outlet></router-outlet>\r\n        </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(changeDetectorRef, media, auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {};
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    // Function to logout user
    AppComponent.prototype.onLogoutClick = function () {
        this.auth.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    AppComponent.prototype.ngOnInit = function () {
        this.user = this.auth.currentUser;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_material_material_module__ = __webpack_require__("../../../../../src/assets/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routing__ = __webpack_require__("../../../../../src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_typing_animation__ = __webpack_require__("../../../../angular-typing-animation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toast__ = __webpack_require__("../../../../../src/app/services/toast.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_login_service__ = __webpack_require__("../../../../../src/app/services/auth-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lab_lab_component__ = __webpack_require__("../../../../../src/app/lab/lab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__hospital_hospital_component__ = __webpack_require__("../../../../../src/app/hospital/hospital.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pharm_pharm_component__ = __webpack_require__("../../../../../src/app/pharm/pharm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sadmin__ = __webpack_require__("../../../../../src/app/services/sadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_Pharm_service__ = __webpack_require__("../../../../../src/app/services/Pharm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_Patient_service__ = __webpack_require__("../../../../../src/app/services/Patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_Padmin_service__ = __webpack_require__("../../../../../src/app/services/Padmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_Ladmin_service__ = __webpack_require__("../../../../../src/app/services/Ladmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_Labassist_service__ = __webpack_require__("../../../../../src/app/services/Labassist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_Lab_service__ = __webpack_require__("../../../../../src/app/services/Lab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_Hospital_service__ = __webpack_require__("../../../../../src/app/services/Hospital.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_Hadmin_service__ = __webpack_require__("../../../../../src/app/services/Hadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_Doctor_service__ = __webpack_require__("../../../../../src/app/services/Doctor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__viewprofile_profile_service__ = __webpack_require__("../../../../../src/app/viewprofile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__lab_lab_service__ = __webpack_require__("../../../../../src/app/lab/lab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__hospital_hospital_service__ = __webpack_require__("../../../../../src/app/hospital/hospital.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__myprofile_myprofile_component__ = __webpack_require__("../../../../../src/app/myprofile/myprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__viewprofile_viewprofile_component__ = __webpack_require__("../../../../../src/app/viewprofile/viewprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__diagnosis_diagnosis_component__ = __webpack_require__("../../../../../src/app/diagnosis/diagnosis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__diaview_diaview_component__ = __webpack_require__("../../../../../src/app/diaview/diaview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12_angular_typing_animation__["a" /* TypingAnimationDirective */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_20__lab_lab_component__["a" /* LabComponent */],
                __WEBPACK_IMPORTED_MODULE_21__hospital_hospital_component__["a" /* HospitalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pharm_pharm_component__["a" /* PharmComponent */],
                __WEBPACK_IMPORTED_MODULE_36__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_37__myprofile_myprofile_component__["a" /* MyprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_38__viewprofile_viewprofile_component__["a" /* ViewprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_39__editprofile_editprofile_component__["a" /* EditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_40__diagnosis_diagnosis_component__["a" /* DiagnosisComponent */],
                __WEBPACK_IMPORTED_MODULE_41__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_42__diaview_diaview_component__["a" /* DiaviewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__assets_material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__routing__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: { tokenGetter: tokenGetter }
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_toast__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_login_service__["a" /* AuthGuardLogin */],
                __WEBPACK_IMPORTED_MODULE_23__services_sadmin__["a" /* SuperAdmin */],
                __WEBPACK_IMPORTED_MODULE_24__services_Pharm_service__["a" /* Pharmacy */],
                __WEBPACK_IMPORTED_MODULE_25__services_Patient_service__["a" /* Patient */],
                __WEBPACK_IMPORTED_MODULE_26__services_Padmin_service__["a" /* PharmacyAdmin */],
                __WEBPACK_IMPORTED_MODULE_27__services_Ladmin_service__["a" /* LabAdmin */],
                __WEBPACK_IMPORTED_MODULE_28__services_Labassist_service__["a" /* LabAssist */],
                __WEBPACK_IMPORTED_MODULE_29__services_Lab_service__["a" /* Lab */],
                __WEBPACK_IMPORTED_MODULE_30__services_Hospital_service__["a" /* Hospital */],
                __WEBPACK_IMPORTED_MODULE_31__services_Hadmin_service__["a" /* HospitalAdmin */],
                __WEBPACK_IMPORTED_MODULE_32__services_Doctor_service__["a" /* Doctor */],
                __WEBPACK_IMPORTED_MODULE_34__lab_lab_service__["a" /* LabService */],
                __WEBPACK_IMPORTED_MODULE_35__hospital_hospital_service__["a" /* HospitalService */],
                __WEBPACK_IMPORTED_MODULE_33__viewprofile_profile_service__["a" /* ProfileService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-flow: row wrap;\r\n        flex-flow: row wrap;\r\n     }\r\n  \r\n   .flex-container > div {\r\n  \r\n    margin: 10px;\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    margin-left:50px;\r\n    margin-right:40px;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    margin-top:20px;\r\n   }\r\n   .box .one{\r\n    width:50px;\r\n    height:60px;\r\n    margin-right:5px;\r\n   }\r\n   .rev{\r\n    background-color:#C51162 ;\r\n    color:white;\r\n    width:350px;\r\n   }\r\n   .rev1{\r\n    background-color: rgb(131, 7, 7);\r\n    color:white;\r\n    width:350px;\r\n   }\r\n   .rev2{\r\n    background-color:#2962FF;\r\n    color:white;\r\n    width:350px;\r\n   }\r\n   .rev3{\r\n    background-color: #00BFA5;\r\n    color:white;\r\n    width:350px;\r\n   }\r\n   .rev4{\r\n    background-color: #FF6D00;\r\n    color:white;\r\n    width:350px;\r\n   }\r\n   .rev5{\r\n    background-color: #1565C0;\r\n    color:white;\r\n    width:350px;\r\n   }\r\n   .rev6{\r\n    background-color:grey;\r\n    color:white;\r\n    width:350px;\r\n   }\r\n  \r\n   p{\r\n    font-size:15px;\r\n   }\r\n   .one{\r\n    -ms-flex-positive:2;\r\n        flex-grow:2;\r\n    height:50%;\r\n   width:30px;\r\n   }\r\n   .two{\r\n    -ms-flex-positive:2;\r\n        flex-grow:2;\r\n    height:50%;\r\n    width:30px;\r\n   }\r\n   .three{\r\n    -ms-flex-positive:2;\r\n        flex-grow:2;\r\n    height:50%;\r\n    width:30px;\r\n   }\r\n  \r\n   .wrapper{\r\n    overflow:auto;\r\n   }\r\n   @media only screen and (max-width: 500px) {\r\n    h3 {\r\n        font-size: 15px;\r\n        margin-left:-5px;\r\n    }\r\n   p{\r\n     font-size: 15px;\r\n     margin-left:-5px;\r\n    }\r\n   }\r\n   .mat-icon{\r\n    color:#fff;\r\n    float:right;\r\n    font-size:60px;\r\n    margin-top:-85px;\r\n    margin-right:15px;\r\n    padding-right:50px;\r\n    padding-top:10px;\r\n    }\r\n    span{\r\n      color:#00BFA5;  \r\n    }\r\n    .row{\r\n        display:-ms-flexbox;\r\n        display:flex;\r\n        margin-top:20px;\r\n      }\r\n      .container1 {\r\n        width:650px;\r\n        margin-left:35px;\r\n      }\r\n      .container2{\r\n        width:650px;\r\n        margin-left:25px;\r\n      }\r\n      \r\n      .works{\r\n         float:left;\r\n      margin-left:-15px;\r\n      top:30px;\r\n      position: relative;\r\n      font-size:20px;\r\n      \r\n      }\r\n      \r\n      h4{\r\n        margin-left:55px;\r\n        margin-top:-20px;\r\n      }\r\n      .mat-icon{\r\n     \r\n        float:right;\r\n        font-size:60px;\r\n        margin-top:-85px;\r\n        margin-right:15px;\r\n        }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Sadmin'\">\r\n    Hello {{user.username}}, welcome Super Admin.\r\n    </div>\r\n    \r\n    <div *ngIf=\"user.role=='Hadmin'\">\r\n    Hello {{user.username}}, welcome Hospital Admin.\r\n    </div>\r\n    \r\n    <div *ngIf=\"user.role=='Ladmin'\">\r\n    <h3>Hello <span>{{user.username}}</span>, Welcome Lab Admin.</h3>\r\n    <div class=\"flex-container\">\r\n     \r\n      <div class=\"rev\">\r\n       <h3>0</h3>\r\n       <p>Today's Appointment</p>\r\n       <mat-icon>language</mat-icon>\r\n      </div>\r\n    \r\n    <div class=\"rev1\">\r\n         <h3>0</h3>\r\n         <p>Total Appointment</p>\r\n         <mat-icon>today</mat-icon>\r\n    </div>\r\n    <div class=\"rev5\">\r\n        <h3>0</h3>\r\n        <p>Today's Earn</p>\r\n        <mat-icon>stars</mat-icon>\r\n  </div> \r\n       \r\n    </div> \r\n    \r\n    <div class=\"flex-container\">\r\n      <div class=\"rev3\">\r\n         <h3>0</h3>\r\n         <p>Today's Patient Count</p>\r\n         <mat-icon>language</mat-icon>\r\n     </div>\r\n       \r\n         <div class=\"rev4\">\r\n           <h3>{{pharmcounts}}</h3>\r\n           <p>Total reports</p>\r\n           <mat-icon>today</mat-icon>\r\n         </div>\r\n    \r\n     \r\n    \r\n     </div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <div *ngIf=\"user.role=='Padmin'\">\r\n    <h3>Hello <span>{{user.username}}</span>, welcome Pharma Admin.</h3>\r\n    <div class=\"flex-container\">\r\n     \r\n      <div class=\"rev\">\r\n       <h3>0</h3>\r\n       <p>Total Stock</p>\r\n       <mat-icon>language</mat-icon>\r\n      </div>\r\n    \r\n    <div class=\"rev1\">\r\n         <h3>0</h3>\r\n         <p>Total Appointment</p>\r\n         <mat-icon>today</mat-icon>\r\n    </div>\r\n     \r\n       <div class=\"rev2\">\r\n         <h3>{{pharmcounts}}</h3>\r\n         <p>Total prescription</p>\r\n         <mat-icon>stars</mat-icon>\r\n        </div>  \r\n    </div> \r\n    \r\n    <div class=\"flex-container\">\r\n      <div class=\"rev3\">\r\n         <h3>0</h3>\r\n         <p>Today's prescription</p>\r\n         <mat-icon>language</mat-icon>\r\n     </div>\r\n       \r\n       \r\n    \r\n     \r\n         <div class=\"rev5\">\r\n           <h3>0</h3>\r\n           <p>Today's Earn</p>\r\n           <mat-icon>stars</mat-icon>\r\n     </div>  \r\n     </div>\r\n    </div>\r\n    \r\n    \r\n    <div *ngIf=\"user.role=='Doctor'\">\r\n    <h3>Hello <span>{{user.username}}</span>, Welcome Doctor.</h3>\r\n    <div class=\"flex-container\">\r\n     \r\n        <div class=\"rev\">\r\n         <h3>0</h3>\r\n         <p>Today's Appointment</p>\r\n         <mat-icon>language</mat-icon>\r\n        </div>\r\n      \r\n      <div class=\"rev1\">\r\n           <h3>0</h3>\r\n           <p>Total Appointment</p>\r\n           <mat-icon>today</mat-icon>\r\n      </div>\r\n       \r\n         <div class=\"rev2\">\r\n           <h3>0</h3>\r\n           <p>Today's prescription</p>\r\n           <mat-icon>stars</mat-icon>\r\n          </div>  \r\n      </div> \r\n      \r\n      <div class=\"flex-container\">\r\n        <div class=\"rev3\">\r\n           <h3>{{pharmcounts}}</h3>\r\n           <p>Total prescription</p>\r\n           <mat-icon>language</mat-icon>\r\n       </div>\r\n         \r\n           <div class=\"rev4\">\r\n             <h3>0</h3>\r\n             <p>Today's Patient</p>\r\n             <mat-icon>today</mat-icon>\r\n           </div>\r\n      \r\n       \r\n           <div class=\"rev5\">\r\n             <h3>{{pharmcounts}}</h3>\r\n             <p>Total patient</p>\r\n             <mat-icon>stars</mat-icon>\r\n       </div>  \r\n       <div class=\"rev6\">\r\n        <h3>0</h3>\r\n        <p>Today's Earn</p>\r\n        <mat-icon>stars</mat-icon>\r\n  </div>  \r\n       </div>\r\n    </div>\r\n    \r\n    \r\n    <div *ngIf=\"user.role=='Patient'\">\r\n    <h3>Hello <span> {{user.username}}</span>, welcome User.</h3>\r\n    <div class=\"flex-container\">\r\n     \r\n        <div class=\"rev\">\r\n         <h3>0</h3>\r\n         <p>Today's Appointment</p>\r\n         <mat-icon>language</mat-icon>\r\n        </div>\r\n      \r\n      <div class=\"rev1\">\r\n           <h3>0</h3>\r\n           <p>Total Appointment </p>\r\n           <mat-icon>today</mat-icon>\r\n      </div>\r\n       \r\n         <div class=\"rev2\">\r\n           <h3>{{pharmcounts}}</h3>\r\n           <p>Total prescription</p>\r\n           <mat-icon>stars</mat-icon>\r\n          </div>  \r\n      </div> \r\n      \r\n      <div class=\"flex-container\">\r\n        <div class=\"rev3\">\r\n           <h3>0</h3>\r\n           <p>Today's prescription</p>\r\n           <mat-icon>language</mat-icon>\r\n       </div>\r\n         \r\n           <div class=\"rev4\">\r\n             <h3>{{profile}}</h3>\r\n             <p>Total Profiles </p>\r\n             <mat-icon>today</mat-icon>\r\n           </div>\r\n      \r\n       \r\n             \r\n       </div>\r\n    \r\n    </div>\r\n    \r\n    <div *ngIf=\"user.role=='Lab'\">\r\n    Hello {{user.username}}, welcome Lab.\r\n    </div>\r\n    \r\n    \r\n    "

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
        this.user = {};
        this.pharmcounts = {};
        this.pat = {};
        this.profile = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.auth.currentUser;
        this.profId = this.auth.currentUser._id;
        this.getcount();
        this.getpatcount();
        this.procount();
    };
    DashboardComponent.prototype.procount = function () {
        var _this = this;
        this.auth.profilecount(this.profId).subscribe(function (res) {
            console.log(res);
            _this.profile = res;
            console.log(_this.profile);
        });
    };
    DashboardComponent.prototype.getcount = function () {
        var _this = this;
        this.auth.pharmcount().subscribe(function (res) {
            console.log(res);
            _this.pharmcounts = res;
            console.log(_this.pharmcounts);
        });
    };
    DashboardComponent.prototype.getpatcount = function () {
        var _this = this;
        this.auth.patcount().subscribe(function (res) {
            console.log(res);
            _this.pat = res;
            console.log(_this.pat);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/diagnosis/diagnosis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.box{\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -ms-flex-flow:row wrap;\r\n        flex-flow:row wrap;\r\n    }\r\n    .box1{\r\n      -ms-flex-positive:1;\r\n          flex-grow:1;\r\n    }\r\n    .box2{\r\n      -ms-flex-positive:1;\r\n          flex-grow:1;\r\n    \r\n    }\r\n    .example-section {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n      height: 60px;\r\n    }\r\n    \r\n    .example-margin {\r\n      margin: 20px;\r\n      \r\n    }\r\n    .example-margin1 {\r\n      margin: 15px;\r\n      padding:0px;\r\n    }\r\n  \r\n   .mat-form-field{\r\n    width:100%;\r\n   }\r\n \r\n    thead{\r\n      background-color:turquoise;\r\n    }\r\n    .button {\r\n      background-color: #4CAF50; /* Green */\r\n    \r\n  }\r\n  \r\n  .button2 {background-color: #008CBA;} /* Blue */\r\n  .button3 {background-color: #f44336;} /* Red */\r\n  h4{\r\n    color:black;\r\n  }\r\n  b{\r\n    color:black;\r\n  }\r\n  .example-radio-button {\r\n      padding: 10px;\r\n }\r\n .example-section {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 60px;\r\n  }\r\n  \r\n  .example-margin {\r\n    margin: 0 10px;\r\n  }\r\n  .example-selected-value {\r\n   margin: 15px 0;\r\n }\r\n .mat-card {\r\n    max-width: 700px;\r\n    margin: 4em auto;\r\n    text-align: center;\r\n  }\r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  .mat-table {\r\n    overflow: auto;  \r\n    max-height: 450px;\r\n    }\r\n    .mat-row:hover{\r\n      background-color:#EDE7F6;\r\n    }\r\n    .example-header {\r\n      min-height: 64px;\r\n      padding: 8px 24px 0;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n     .mat-header-row{\r\n      background-color:#7986CB;\r\n      color:#fff;\r\n    }\r\n    .mat-header-row,.mat-row{\r\n      border-bottom-color:#D7CCC8;\r\n    }\r\n    .mat-paginator{\r\n      color:#7986CB;\r\n      margin-left:20px;\r\n      margin-right:20px;\r\n    }\r\n    .mat-header-cell{\r\n      color:white;\r\n      font-family:verdana;\r\n      font-style:normal;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/diagnosis/diagnosis.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"userr.role=='Sadmin'\">\n    Hello {{userr.username}}, welcome SuperAdmin.\n    </div>\n    \n    <div *ngIf=\"userr.role=='Hadmin'\">\n    Hello {{userr.username}}, welcome HospitalAdmin.\n    </div>\n    \n    <div *ngIf=\"userr.role=='Ladmin'\">\n    Hello {{userr.username}}, welcome LabAdmin.\n    </div>\n    \n    <div *ngIf=\"userr.role=='Padmin'\">\n    Hello {{userr.username}}, welcome PharmAdmin.\n    </div>\n    \n    <div *ngIf=\"userr.role=='Doctor'\">\n        <mat-card>\n            <mat-form-field>\n                <mat-select placeholder=\"Select Patient Id\" [(ngModel)]=\"id2\">\n                  <mat-option *ngFor=\"let p of pprofiles\" [value]=\"p._id\" >\n                    {{ p._id }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n           <!-- <mat-form-field>\n                <mat-select placeholder=\"Select Patient\" [(ngModel)]=\"patientname\">\n                  <mat-option *ngFor=\"let p of pprofiles\" [value]=\"p.username\" >\n                    {{ p.username }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>-->\n            <mat-horizontal-stepper>\n                <mat-step >\n                  <form >\n                    <ng-template matStepLabel>Info</ng-template>\n                    </form>\n                    <div class=\"sub1\">\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Patient Helath Isuues\" [(ngModel)]=\"healthissue\"></textarea>\n                      </mat-form-field>\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Diagnosis Report\" [(ngModel)]=\"diagnosisreport\"></textarea>\n                      </mat-form-field>\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Other Remarks\" [(ngModel)]=\"otherremark\" ></textarea>\n                      </mat-form-field>\n                      </div>\n                      <div>\n                        <button  color=\"primary\" mat-raised-button matStepperNext>Next</button>\n                      </div>\n                    </mat-step>\n                    <mat-step >\n                      <form >\n                        <ng-template matStepLabel>Types of Tests</ng-template>\n                        \n                        <div class=\"sub1\">\n                          <mat-form-field>\n                              <mat-select placeholder=\"Types of Test\" [formControl]=\"types\" multiple [(ngModel)]=\"test\">\n                                <mat-option *ngFor=\"let type of type\" [value]=\"type\">{{type}}</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                             </div> \n                             <mat-form-field >\n                              <textarea matInput placeholder=\"Comments\" [(ngModel)]=\"comments\"  [ngModelOptions]=\"{standalone: true}\"></textarea>\n                            </mat-form-field>\n                            <button color=\"primary\" mat-raised-button matStepperPrevious>Back</button> <button color=\"primary\" mat-raised-button matStepperNext>Next</button>\n                       </form>\n                      </mat-step>\n                    <mat-step >\n                        <form >\n                          <ng-template matStepLabel>Prescription Details</ng-template>\n                         \n                          <mat-form-field color=\"accent\">\n                            <input type=\"text\" placeholder=\"Medicines Name\" [(ngModel)]=\"medicine\" name=\"option\"aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n                               <mat-autocomplete #auto=\"matAutocomplete\">\n                                   <mat-option *ngFor=\"let medicine of filteredmedicines| async\" [value]=\"medicine\">\n                                       {{medicine}}\n                                   </mat-option>\n                               </mat-autocomplete>    \n                           </mat-form-field>\n                              <div class=\"sub1\">\n                              <mat-form-field color=\"accent\">\n                                  <input type=\"text\" matInput  placeholder=\"Frequency\" [(ngModel)]=\"frequency\" [ngModelOptions]=\"{standalone: true}\">\n                                </mat-form-field>\n                              </div>\n                              <section class=\"example-section\">\n                                  <label class=\"example-margin\">Dosage:</label>\n                                  <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"dosage1\" [ngModelOptions]=\"{standalone: true}\">\n                                    <mat-radio-button class=\"example-radio-button\" *ngFor=\"let dosage of dosages\" [value]=\"dosage\">\n                                      {{dosage}}\n                                    </mat-radio-button>\n                                  </mat-radio-group>\n                                </section>\n                             \n               \n                       <button color=\"primary\" mat-raised-button matStepperPrevious>Back</button>   <button color=\"primary\" (click)=\"reset()\" mat-raised-button matStepperNext> Clear</button> <button color=\"primary\" (click)=\"add(userr._id,id2)\" mat-raised-button matStepperNext> Submit</button>       \n                           \n                            </form>\n                            <mat-card>\n                              <table class=\"table table-bordered table-hover\">\n                                <thead>\n                                  <tr>\n                                    <th>Medicine</th>\n                                    <th>Frequency</th>\n                                    <th>Dosage</th>\n                                    <th>Diagonis</th>\n                                    \n                                    <th>Action</th>\n                                    </tr>\n                                </thead>\n                               \n                                <tr *ngFor=\"let u of user1 let i=index\"  >\n                                  \n                                  <td>{{u.medicine[i]}}</td>\n                                  <td>{{u.frequency[i]}}</td>\n                                 \n                                  <td> {{u.dosage[i]}}</td>\n                                  <td>{{u.diagnosisreport[i]}}</td>\n                              \n                                  <td>\n                                     <pre> Delete</pre>\n                \n                \n                                  </td>\n                \n                                 \n                                </tr>\n                           \n                            \n                             \n                              </table>\n                            </mat-card> \n                          </mat-step>\n                        \n                  </mat-horizontal-stepper> \n                </mat-card>\n               \n                      \n                      \n          \n    </div>\n    \n    \n    <div *ngIf=\"userr.role=='Patient'\">  \n      <div class=\"mat-elevation-z8 center\" >\n          <div class=\"example-header\">\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n            </div>\n        \n          <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear>\n            <ng-container matColumnDef=\"doctors\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Doctor's Id </mat-header-cell>\n              <mat-cell *matCellDef=\"let d\"> {{d.doctor}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"patientname\">\n              <mat-header-cell *matHeaderCellDef  mat-sort-header>Patient's Id </mat-header-cell>\n              <mat-cell *matCellDef=\"let d\"> {{d.patient}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"date\">\n              <mat-header-cell *matHeaderCellDef  mat-sort-header> Date </mat-header-cell>\n              <mat-cell *matCellDef=\"let d\"> {{d.date | date: 'dd'}}/{{d.date | date: 'MM'}}/{{d.date | date: 'yyyy'}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"healthissue\">\n              <mat-header-cell *matHeaderCellDef  mat-sort-header> Health Issue </mat-header-cell>\n              <mat-cell *matCellDef=\"let d\"> {{d.healthissue}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"actions\">\n              <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n                <mat-cell *matCellDef=\"let d\">\n                  <button mat-icon-button color=\"primary\" routerLink=\"/diaview/{{d._id}}\">\n                   <mat-icon aria-label=\"View\">visibility</mat-icon>\n                  </button>\n                <button mat-icon-button color=\"accent\" routerLink=\"/diagedit/{{d._id}}\">\n                  <mat-icon aria-label=\"Send\" (click)=\"pharmshow()\" >send</mat-icon>\n                </button>\n        \n                <button mat-icon-button color=\"warn\"(click)=\"convert(d)\">\n                  <mat-icon aria-label=\"Download\">vertical_align_bottom</mat-icon>\n                </button>\n               </mat-cell>\n            </ng-container>\n        \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n        \n      <mat-paginator \n          [length]=\"dataSource.resultsLength\"\n          [pageSize]=\"5\" \n          [pageSizeOptions]=\"[1, 2, 3, 5]\">\n      </mat-paginator>\n        \n        </div>\n        <mat-card *ngIf=\"!show\">\n            <mat-form-field>\n                <mat-select placeholder=\"Select Pharmacy Id\" [(ngModel)]=\"phaid\">\n                  <mat-option *ngFor=\"let p of pharmid\" [value]=\"p._id\" >\n                    {{ p._id }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              </mat-card>\n      </div>\n    \n    <div *ngIf=\"userr.role=='Lab'\">\n    Hello {{userr.username}}, welcome Lab.\n    </div>\n    \n    <div *ngIf=\"userr.role=='LabAssist'\">\n    Hello {{userr.username}}, welcome LabAssist.\n    </div>\n    \n    <div *ngIf=\"userr.role=='Pharmacy'\">\n    Hello {{userr.username}}, welcome Pharmacy.\n    </div>\n    \n"

/***/ }),

/***/ "../../../../../src/app/diagnosis/diagnosis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DiagnosisComponent = (function () {
    function DiagnosisComponent(auth, router, formBuilder) {
        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userr = {};
        this.dprofiles = [];
        this.pharmid = [];
        this.types = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.id2 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.type = ['Glucose Fasting',
            'HbA1c Test',
            'Thyroid Function Test Total (TFT)',
            'Lipid Profile',
            'Liver Function Tests (LFT)',
            'Kidney Function Test (KFT)'];
        this.period = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.events = [];
        this.health = [];
        this.diagonis = [];
        this.other = [];
        this.frequent = [];
        this.command = [];
        this.testies = [];
        this.pharma = [];
        this.labar = [];
        this.medi = [];
        this.mor = [];
        this.aft = [];
        this.periods = ['Morning', 'AfterNoon', 'Night'];
        this.locations = [];
        this.user = [];
        this.ids = [];
        this.user1 = [];
        this.user2 = [];
        this.drugs = [{ "healthissue": "", "diagnosisreport": "", "otherremark": "", "frequency": "", "comments": "", "test": "", "pharmacie": "", "lab": "", "dosage": "", "medicine": "", "patientname": "" }];
        this.drugs1 = [{ "healthissue": "", "diagnosisreport": "", "otherremark": "", "frequency": "", "comments": "", "test": "", "pharmacie": "", "lab": "", "dosage": "", "medicine": "", "patientname": "" }];
        this.medicine = '';
        this.opt = '';
        this.duration = '';
        this.value = '';
        this.value1 = '';
        this.value2 = '';
        this.value3 = '';
        this.healthissue = '';
        this.diagnosisreport = '';
        this.otherremark = '';
        this.beforefoods = '';
        this.afterfood = '';
        this.frequency = '';
        this.comments = '';
        this.pharmacie = '';
        this.test = '';
        this.lab = '';
        this.dosage1 = '';
        this.patientname = '';
        this.doc_id = '';
        this.pat_id = '';
        this.details = [];
        this.medicines = [
            'Aceclofenac',
            'Acetaminophen',
            'Asprin',
            'Chlorzoxazone',
            'Aceclofenac',
            'Acetaminophen',
            'Asprin',
            'Chlorzoxazone',
            'Aceclofenac',
            'Acetaminophen',
            'Asprin',
            'Chlorzoxazone'
        ];
        this.dosage = [
            '1 tablet',
            '1/2 tablet',
            '5ml',
            '10ml',
            '15ml',
            '20ml',
            '25ml',
        ];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.Control = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.Control1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.Control2 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.pharmacies = [
            'Annanagar',
            'Ambattur',
            'Avadi',
            'Mogappair',
            'Mylopore',
            'Vadapalani',
            'Tambaram',
            'Koyembedu'
        ];
        this.tests = [
            'Glucose Fasting',
            'HbA1c Test',
            'Thyroid Function Test Total (TFT)',
            'Lipid Profile',
            'Liver Function Tests (LFT)',
            'Kidney Function Test (KFT)'
        ];
        this.labs = [
            'Medall Diagnostics',
            'Emhealth.in',
            'A P Diagnostic Centre',
            'Lister Metropolis Laboratory',
            'Bio Surya Lab'
        ];
        this.dosages = [
            'Beforefood',
            'Afterfood'
        ];
        this.show = true;
        this.displayedColumns = ['doctors', 'patientname', 'date', 'healthissue', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatTableDataSource */](this.dataSource);
    }
    DiagnosisComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    DiagnosisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userr = this.auth.currentUser;
        this.profId = this.auth.currentUser._id;
        this.auth.getPro(this.profId)
            .subscribe(function (data) { return _this.pprofiles = JSON.parse(JSON.stringify(data)); });
        this.auth.getpharmid(this.profId)
            .subscribe(function (data) { return _this.pharmid = JSON.parse(JSON.stringify(data)); });
        //this.auth.getpatdiaid(this.profId)
        //.subscribe(data => 
        //this.dprofiles = JSON.parse(JSON.stringify(data)) );
        //console.log(this.dprofiles);
        this.auth.getpatdiaid(this.profId)
            .subscribe(function (data) {
            _this.dprofiles = JSON.parse(JSON.stringify(data));
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatTableDataSource */](_this.dprofiles);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            console.log(_this.dprofiles);
        });
        console.log(this.dprofiles);
        this.filteredmedicines = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
        this.filteredpharmacies = this.Control.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter1(val); }));
        this.filteredtests = this.Control1.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter2(val); }));
        this.filteredlabs = this.Control2.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter3(val); }));
    };
    DiagnosisComponent.prototype.filter = function (val) {
        return this.medicines.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    DiagnosisComponent.prototype.pharmshow = function () {
        this.show = false;
    };
    DiagnosisComponent.prototype.filter1 = function (val) {
        return this.pharmacies.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    DiagnosisComponent.prototype.filter2 = function (val) {
        return this.tests.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    DiagnosisComponent.prototype.filter3 = function (val) {
        return this.labs.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    DiagnosisComponent.prototype.add = function (id1, id2) {
        this.drugs.medicine = this.medicine;
        this.drugs.healthissue = this.healthissue;
        this.drugs.diagnosisreport = this.diagnosisreport;
        this.drugs.otherremark = this.otherremark;
        this.drugs.test = this.test;
        this.drugs.dosage = this.dosage1;
        this.drugs.frequency = this.frequency;
        this.drugs.comments = this.comments;
        this.drugs.pharmacie = this.pharmacie;
        this.drugs.lab = this.lab;
        this.drugs.patientname = this.patientname;
        this.clear();
        this.display();
        this.patid = this.id2;
        this.call(id1, id2);
        console.log(this.user);
        this.postid();
    };
    DiagnosisComponent.prototype.profdelete = function (id) {
        var _this = this;
        this.auth.diagfdelete(id).subscribe(function (res) {
            console.log(res);
            _this.locations = res;
            _this.ngOnInit();
        });
    };
    DiagnosisComponent.prototype.clear = function () {
        this.drugs1.medicine = this.drugs.medicine;
        this.drugs1.healthissue = this.drugs.healthissue;
        this.drugs1.diagnosisreport = this.drugs.diagnosisreport;
        this.drugs1.otherremark = this.drugs.otherremark;
        this.drugs1.test = this.drugs.test;
        this.drugs1.dosage = this.drugs.dosage;
        this.drugs1.frequency = this.drugs.frequency;
        this.drugs1.comments = this.drugs.comments;
        this.drugs1.pharmacie = this.drugs.pharmacie;
        this.drugs1.lab = this.drugs.lab;
        this.drugs1.patientname = this.drugs.patientname;
    };
    DiagnosisComponent.prototype.reset = function () {
        this.medicine = '';
        this.dosage1 = '';
        this.frequency = '';
        this.afterfood = '';
    };
    DiagnosisComponent.prototype.call = function (id1, id2) {
        this.user = { "medicine": this.medi, "healthissue": this.health, "diagnosisreport": this.diagonis, "otherremark": this.other, "dosage": this.mor, "afterfood": this.aft, "frequency": this.frequent, "comments": this.command, "pharmacie": this.pharma, "test": this.testies, "lab": this.labar, "patientname": this.patientname };
        this.auth.saveDiag(id1, id2, this.user).subscribe(function (res) {
            console.log(res);
        });
    };
    DiagnosisComponent.prototype.display = function () {
        this.events.push(" " + this.drugs1.healthissue + " " + this.drugs1.diagnosisreport + " " + this.drugs1.otherremark + " " + this.drugs1.medicine + "  " + this.drugs1.beforefoods + " " + this.drugs1.afterfood + " " + this.drugs1.frequency + "  " + this.drugs1.comments + " " + this.drugs1.pharmacie + " " + this.drugs1.test + " " + this.drugs1.lab);
        this.health.push(" " + this.drugs1.healthissue);
        this.diagonis.push("" + this.drugs1.diagnosisreport);
        this.other.push("" + this.drugs1.otherremark);
        this.frequent.push("" + this.drugs1.frequency);
        this.command.push("" + this.drugs1.comments);
        this.testies.push("" + this.drugs1.test);
        this.pharma.push(" " + this.drugs1.pharmacie);
        this.labar.push("" + this.drugs1.lab);
        this.medi.push("" + this.drugs1.medicine);
        this.mor.push("" + this.drugs1.dosage);
        this.aft.push("" + this.drugs1.afterfood);
        this.user1.push({ healthissue: this.health, medicine: this.medi, diagnosisreport: this.diagonis, otherremark: this.other, dosage: this.mor, afterfood: this.aft, frequency: this.frequent, comments: this.command, pharmacie: this.pharma, test: this.testies, lab: this.labar });
        this.user2.push({ healthissue: this.health, diagnosisreport: this.diagonis, otherremark: this.other, comments: this.command });
        console.log(this.medi);
    };
    DiagnosisComponent.prototype.find = function () {
        var _this = this;
        this.auth.search({ search: this.query }).subscribe(function (res) {
            _this.dprofiles = res;
        });
    };
    DiagnosisComponent.prototype.profdeletediag = function (id) {
        var _this = this;
        this.auth.diagfdelete(id).subscribe(function (res) {
            console.log(res);
            _this.dprofiles = res;
            _this.ngOnInit();
        });
    };
    DiagnosisComponent.prototype.postid = function () {
        var _this = this;
        this.ids = { "doc_id": this.profId, "pat_id": this.patid };
        console.log(this.profId);
        console.log(this.patid);
        this.auth.postdocpatid(this.ids).subscribe(function (res) {
            console.log(res);
            console.log(_this.ids);
        });
    };
    DiagnosisComponent.prototype.convert = function (p) {
        var doc = new jsPDF();
        var col = ["Details", "Values"];
        var rows = [];
        for (var key in p) {
            var temp = [key, p[key]];
            rows.push(temp);
        }
        doc.autoTable(col, rows);
        doc.text(20, 20, 'Prescription');
        doc.save('Prescription.pdf');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatPaginator */])
    ], DiagnosisComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatSort */])
    ], DiagnosisComponent.prototype, "sort", void 0);
    DiagnosisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'app-diagnosis',
            template: __webpack_require__("../../../../../src/app/diagnosis/diagnosis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/diagnosis/diagnosis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], DiagnosisComponent);
    return DiagnosisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/diaview/diaview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    \r\n }\r\n .table{\r\n    margin-top:40px;\r\n    width:650px;\r\n    table-layout: fixed;\r\n    margin-left:300px;\r\n    \r\n   }\r\n   table.table-bordered{\r\n    border:1px solid #1a237e;\r\n    margin-top:20px;\r\n   }\r\n   table.table-bordered > thead > tr > th{\r\n    border:1px solid #1a237e;\r\n   }\r\n   table.table-bordered > tbody > tr > td{\r\n    border:1px solid #1a237e;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/diaview/diaview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Patient'\">\n\n        <table class=\"table  table-bordered table-hover\" >\n                <colgroup>\n                    <col span=\"1\" style=\"width: 25%;\">\n                    <col span=\"1\" style=\"width: 75%;\">\n                  </colgroup>\n                <tr>\n                <td>Patient Id:</td>\n                <td>{{prescriptions.patient}}</td>\n                </tr>\n                <tr>\n                    <td>Doctor Id:</td>\n                    <td>{{prescriptions.doctor}}</td>\n                    </tr>\n               \n          \n         <tr>\n            <td>Health Issue:</td>\n           <td>{{prescriptions.healthissue}}</td>\n       </tr>\n       <tr>\n          <td>Other Remark:</td>\n         <td>{{prescriptions.otherremark}}</td>\n     </tr>\n     <tr>\n            <td>Medicine:</td>\n           <td>{{prescriptions.medicine}}</td>\n       </tr>\n     <tr>\n        <td>Frequency:</td>\n       <td>{{prescriptions.frequency}}</td>\n   </tr>\n   <tr>\n        <td>Dosage:</td>\n       <td>{{prescriptions.dosage}}</td>\n    </tr>\n <tr>\n    <td>Test:</td>\n   <td>{{prescriptions.test}}</td>\n</tr>\n</table>       \n \n\n   \n</div>\n<div *ngIf=\"user.role=='Doctor'\">\n    <div >\n        <table class=\"table  table-bordered table-hover\">\n                <colgroup>\n                    <col span=\"1\" style=\"width: 25%;\">\n                    <col span=\"1\" style=\"width: 75%;\">\n                  </colgroup>\n            <tr>\n            <td>Patient Id:</td>\n            <td>{{prescriptions.patient}}</td>\n            </tr>\n            \n         <tr>\n            <td>Health Issue:</td>\n           <td>{{prescriptions.healthissue}}</td>\n       </tr>\n       <tr>\n          <td>Other Remark:</td>\n         <td>{{prescriptions.otherremark}}</td>\n     </tr>\n     <tr>\n            <td>Medicine:</td>\n           <td>{{prescriptions.medicine}}</td>\n       </tr>\n     <tr>\n        <td>Frequency:</td>\n       <td>{{prescriptions.frequency}}</td>\n   </tr>\n   <tr>\n        <td>Dosage:</td>\n       <td>{{prescriptions.dosage}}</td>\n    </tr>\n <tr>\n    <td>Test:</td>\n   <td>{{prescriptions.test}}</td>\n</tr>\n\n   \n         </table>\n         </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/diaview/diaview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiaviewComponent = (function () {
    function DiaviewComponent(service, router) {
        this.service = service;
        this.router = router;
        this.id = this.router.snapshot.params['id'];
    }
    DiaviewComponent.prototype.ngOnInit = function () {
        this.user = this.service.currentUser;
        this.profId = this.service.currentUser._id;
        this.diagData();
    };
    DiaviewComponent.prototype.diagData = function () {
        var _this = this;
        this.service.getDiagId(this.profId, this.id).subscribe(function (res) {
            console.log(res);
            _this.prescriptions = res;
            console.log(_this.prescriptions);
        });
    };
    DiaviewComponent.prototype.profdelete = function (id) {
        var _this = this;
        this.service.profdelete(this.profId, id).subscribe(function (res) {
            console.log(res);
            _this.user = res;
            _this.ngOnInit();
        });
    };
    DiaviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-diaview',
            template: __webpack_require__("../../../../../src/app/diaview/diaview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/diaview/diaview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DiaviewComponent);
    return DiaviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box1{\r\n    -ms-flex: 2;\r\n        flex: 2;\r\n    -ms-flex-order: 1;\r\n        order: 1;\r\n  }\r\n  .box2{\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n    -ms-flex-order: 2;\r\n        order: 2;\r\n  }\r\n  .sub1 mat-form-field{\r\n    width: 100%;\r\n   \r\n  }\r\n  .sub2 mat-form-field{\r\n    width: 100%;\r\n  }\r\n  .mat{\r\n       margin-right:20px;\r\n       width:300px;\r\n      \r\n  }\r\n  .mat1{\r\n    color: #00BCD4;\r\n  }\r\n  .size{\r\n     width:50%;\r\n  }\r\n  \r\n  \r\n  \r\n  @media(min-width:700px){\r\n    .container{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    }\r\n    .sub1{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    }\r\n  }\r\n  .mat-card {\r\n    max-width: 700px;\r\n    margin: 0em auto;\r\n    text-align: center;\r\n  }\r\n  .signin-content {\r\n    padding: 60px 1rem;\r\n  }\r\n  .full-width-input {\r\n    width: 100%;\r\n  }\r\n  .example-section {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 60px;\r\n   }\r\n   .example-margin {\r\n    margin: 0 10px;\r\n   }\r\n   .go{\r\n    padding:73px;\r\n   }\r\n   .go1{\r\n    margin-left:1px;\r\n   }\r\n   .so{\r\n    padding:33px;\r\n   }\r\n   .so1{\r\n    padding:45px;\r\n   }\r\n   .ro{\r\n    padding:28px;\r\n   }\r\n   .ro1{\r\n    padding:50px;\r\n   }\r\n   label{\r\n  color: grey;\r\n  padding: 15px;\r\n  padding-top: 3px;\r\n   }\r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Sadmin'\">\n  Hello {{user.username}}, welcome SuperAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Hadmin'\">\n  Hello {{user.username}}, welcome HospitalAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Ladmin'\">\n  Hello {{user.username}}, welcome LabAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Padmin'\">\n  Hello {{user.username}}, welcome PharmAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Doctor'\">\n  Hello {{user.username}}, welcome Doctor.\n  </div>\n  \n  <div *ngIf=\"user.role=='Patient'\">\n    <mat-card>\n      <div >\n  <mat-toolbar>\n          <mat-toolbar-row>\n              <span>DETAILS</span>\n              <span class=\"spacer\"></span>\n              <mat-icon id=\"icon\" (click)=\"disabled = disabled\">edit</mat-icon>\n          </mat-toolbar-row>\n  </mat-toolbar>\n  \n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n      <mat-step> \n                        \n          <ng-template matStepLabel >Basic Details</ng-template>\n              \n                  <div class=\"sub1\" >\n                      <mat-form-field class=\"mat\" color=\"accent\">\n                          <input matInput name=\"Firstname\"  [(ngModel)]=\"patient.firstname\" placeholder=\"Firstname\" >\n                        </mat-form-field>\n                      <mat-form-field color=\"accent\" >\n                          <input matInput  [(ngModel)]=\"patient.lastname\" placeholder=\"Lastname\" >\n                      </mat-form-field>\n                  </div>\n                  <div class=\"sub1\">\n                          <mat-form-field class=\"mat\" color=\"accent\" >\n                                  <input matInput  [(ngModel)]=\"patient.relationship\" placeholder=\"Relationship\" >\n                              </mat-form-field>\n                          <mat-form-field  color=\"accent\">\n                              <input type=\"number\" matInput  [(ngModel)]=\"patient.mobile\" placeholder=\"Mobile\" >\n                            </mat-form-field>\n                            <mat-form-field>\n                                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\" [(ngModel)]=\"patient.dob\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1></mat-datepicker>\n                               </mat-form-field>\n                        </div>\n                  <div class=\"sub2\">\n                      <mat-form-field  class=\"mat\" color=\"accent\">\n                          <input matInput  [(ngModel)]=\"patient.email\" placeholder=\"Email\"  >\n                        </mat-form-field>\n                 \n                      </div>\n                      \n                      <div class=\"sub1\" >\n                          <mat-form-field class=\"mat\" color=\"accent\" >\n                              <mat-select placeholder=\"Blood Group\" [(value)]=\"patient.bloodgroup\" >\n                                  <mat-option value=\"A+\">A+</mat-option>\n                                  <mat-option value=\"A-\">A-</mat-option>\n                                  <mat-option value=\"B+\">B+</mat-option>\n                                  <mat-option value=\"B-\">B-</mat-option>\n                                  <mat-option value=\"O+\">O+</mat-option>\n                          \n                              </mat-select>\n                              </mat-form-field>\n                              <mat-form-field color=\"accent\">\n                                  <mat-select placeholder=\"Gender\" [(value)]=\"patient.gender\" >\n                                      <mat-option value=\"Male\">Male</mat-option>\n                                      <mat-option value=\"Female\">Female</mat-option>\n                                      <mat-option value=\"Others\">Others</mat-option>\n                                  </mat-select>\n                              </mat-form-field>\n                         \n                      </div>\n                    \n                  <div class=\"sub4\">\n                      <div class=\"sub1\">\n                          <mat-form-field color=\"accent\">\n                              <textarea matInput  [(ngModel)]=\"patient.address\" placeholder=\"Address\" ></textarea>\n                          </mat-form-field>\n                      </div>\n                      </div>\n                      <div class=\"sub1\">\n                            <mat-form-field class=\"example-full-width\">\n                                    <input type=\"text\" placeholder=\"City\" aria-label=\"Number\"  [(ngModel)]=\"patient.area\" matInput [formControl]=\"Control1\" [matAutocomplete]=\"auto2\">\n                                    <mat-autocomplete #auto2=\"matAutocomplete\">\n                                      <mat-option *ngFor=\"let area of filteredareas | async\" [value]=\"area\">\n                                        {{ area }}\n                                      </mat-option>\n                                    </mat-autocomplete>\n                                  </mat-form-field>\n                          </div>\n                      <div class=\"sub1\" >\n                            <mat-form-field class=\"example-full-width\">\n                                    <input type=\"text\" placeholder=\"City\" aria-label=\"Number\" [(ngModel)]=\"patient.city\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\n                                      <mat-option *ngFor=\"let city of filteredcities | async\" [value]=\"city\">\n                                        {{ city }}\n                                      </mat-option>\n                                    </mat-autocomplete>\n                                  </mat-form-field>\n                                  <mat-form-field class=\"example-full-width\">\n                                        <input type=\"text\" placeholder=\"State\" aria-label=\"Number\"  [(ngModel)]=\"patient.state\" matInput [formControl]=\"Control\" [matAutocomplete]=\"auto1\">\n                                        <mat-autocomplete #auto1=\"matAutocomplete\">\n                                          <mat-option *ngFor=\"let state of filteredstates | async\" [value]=\"state\">\n                                            {{ state }}\n                                          </mat-option>\n                                        </mat-autocomplete>\n                                      </mat-form-field>\n                         \n                      </div>\n                      <div class=\"sub1\">\n                              <mat-form-field class=\"mat\" color=\"accent\">\n                                  <mat-select placeholder=\"Country\" [(value)]=\"patient.country\">\n                                      <mat-option value=\"Algeria\">Algeria</mat-option>\n                                      <mat-option value=\"Bangladesh\"> Bangladesh</mat-option>\n                                      <mat-option value=\"Cambodia\">Cambodia</mat-option>\n                                      <mat-option value=\"Denmark\">Denmark</mat-option>\n                                      <mat-option value=\" Greece\">  Greece</mat-option>\n                                      <mat-option value=\"India\"> India </mat-option>\n                                      \n                                  </mat-select>\n                                </mat-form-field>\n                              <mat-form-field color=\"accent\">\n                                      <input  type=\"number\" matInput  [(ngModel)]=\"patient.pincode\" placeholder=\"PinCode\">\n                              </mat-form-field>\n                              \n                          </div>\n                          <div>\n                              <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n                          </div>\n                \n  \n      </mat-step>\n      <mat-step>\n          <ng-template matStepLabel>Health Info</ng-template>\n          \n                  <div class=\"sub1\">\n                      <mat-form-field class=\"mat\" color=\"accent\">\n                          <input matInput  [(ngModel)]=\"patient.height\" placeholder=\"Height (ft/cms)\" >\n                        </mat-form-field>\n                      <mat-form-field color=\"accent\" >\n                          <input matInput  [(ngModel)]=\"patient.weight\" placeholder=\"Weight ( kg/lbs)\" >\n                      </mat-form-field>\n                  </div>\n              \n                  <div class=\"sub4\">\n                  <div class=\"sub1\">\n                          <mat-form-field class=\"mat\" color=\"accent\">\n                              <input matInput  [(ngModel)]=\"patient.allergicto\" placeholder=\"Allergic\" >\n                            </mat-form-field>\n                          </div>\n                          </div>\n                 \n                    \n                     \n          <div>\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n        </div>\n    \n      </mat-step>\n      <mat-step>\n          <ng-template matStepLabel>Health information - Personal Habits:</ng-template>\n          <section class=\"example-section\">\n              <label class=\"example-margin\">1)Do you smoke? </label>\n              <mat-radio-group [(ngModel)]=\"patient.smoke\">\n                <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                <mat-radio-button  value=\"no\">No</mat-radio-button>\n              </mat-radio-group>\n            </section>\n            <section class=\"example-section\">\n              <label class=\"example-margin\"> 2)Do you use tobacco? </label>\n              <mat-radio-group [(ngModel)]=\"patient.tobacco\">\n                <mat-radio-button value=\"yes\">Yes</mat-radio-button>\n                <mat-radio-button  value=\"no\">No</mat-radio-button>\n              </mat-radio-group>\n            </section>\n            <section class=\"example-section\">\n              <label class=\"example-margin\"> 3)Do you drink alcohol? </label>\n              <mat-radio-group [(ngModel)]=\"patient.alcohol\">\n                <mat-radio-button class=\"example-margin\" value=\"yes\">Yes</mat-radio-button>\n                <mat-radio-button class=\"example-margin\" value=\"no\">No</mat-radio-button>\n              </mat-radio-group>\n            </section>\n            <div>\n              <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n              <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n          </mat-step>\n      <mat-step>\n                      \n                <ng-template matStepLabel>Insurance Info</ng-template>\n                \n                        <div class=\"sub1\">\n                            <mat-form-field class=\"mat\" color=\"accent\">\n                                <input matInput [(ngModel)]=\"patient.insuranceprovidername\" placeholder=\"Insurance Provider Name\">\n                              </mat-form-field>\n                            <mat-form-field color=\"accent\">\n                                <input matInput [(ngModel)]=\"patient.policyholdername\" placeholder=\"Policy holder name\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"sub1\">\n                                <mat-form-field class=\"mat\" color=\"accent\">\n                                    <input matInput [(ngModel)]=\"patient.policyno\" placeholder=\"Policy No\" >\n                                  </mat-form-field>\n                               \n                                <mat-form-field>\n                                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Policy issuance date\" [(ngModel)]=\"patient.policyissuancedate\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                      <mat-datepicker #picker></mat-datepicker>\n                                    </mat-form-field>\n                            </div>\n                             \n                <div>\n                  <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                 \n                  <button  mat-raised-button color=\"primary\"(click)=\"profedit(patient._id,patient)\"type=\"submit\">Update</button>\n                  <a class=\"btn btn-info\" (click)=\"goBack()\">Cancel</a>\n              </div>\n         \n            </mat-step>\n             \n      \n     \n  </mat-horizontal-stepper>\n</div>  \n  </mat-card>  \n  </div>\n  \n  <div *ngIf=\"user.role=='Lab'\">\n  Hello {{user.username}}, welcome Lab.\n  </div>\n  \n  <div *ngIf=\"user.role=='LabAssist'\">\n  Hello {{user.username}}, welcome LabAssist.\n  </div>\n  \n  <div *ngIf=\"user.role=='Pharmacy'\">\n  Hello {{user.username}}, welcome Pharmacy.\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditprofileComponent = (function () {
    function EditprofileComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.Control = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.Control1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.areas = [
            "Annanagar",
            "Ambattur",
            "Avadi",
            "Mogappair",
            "Mylopore",
            "Vadapalani",
            "Tambaram",
            "Koyembedu"
        ];
        this.cities = [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Vellore",
            "Thanjavur",
            "Kanchipuram"
        ];
        this.states = [
            "Andra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Orissa",
            "Punjab",
            "Puducherry",
            "Sikkim",
            "Tamil Nadu",
            "Uttaranchal",
            "West Bengal"
        ];
        this.user = {};
        this.id = this.route.snapshot.params['id'];
        this.patient = [];
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredcities = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
        this.filteredstates = this.Control.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter1(val); }));
        this.filteredsareas = this.Control1.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter2(val); }));
        this.user = this.auth.currentUser;
        this.profId = this.auth.currentUser._id;
        this.getData();
    };
    EditprofileComponent.prototype.getData = function () {
        var _this = this;
        this.auth.getProfId(this.profId, this.id).subscribe(function (res) {
            console.log(res);
            _this.patient = res;
        });
    };
    EditprofileComponent.prototype.profedit = function (id, user) {
        var _this = this;
        console.log(user);
        this.auth.profEdit(this.profId, id, user)
            .subscribe(function () { return _this.goBack(); });
    };
    EditprofileComponent.prototype.goBack = function () {
        this.router.navigate(['/myprofile']);
    };
    EditprofileComponent.prototype.filter = function (val) {
        return this.cities.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    EditprofileComponent.prototype.filter1 = function (val) {
        return this.states.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    EditprofileComponent.prototype.filter2 = function (val) {
        return this.areas.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    EditprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editprofile',
            template: __webpack_require__("../../../../../src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\r\n    width:75px;\r\n    margin-left:7px;\r\n    \r\n   }\r\n   .btn-success{\r\n    background-color:rgb(13, 58, 13);\r\n    color:white;\r\n   }\r\n   .btn-info{\r\n    background-color:rgb(25, 25, 134);\r\n   color:white;\r\n   }\r\n   .btn-danger{\r\n   background-color:rgb(122, 10, 10);\r\n   color:white;\r\n   }\r\n   thead{\r\n    background-color:#5C6BC0;\r\n   }\r\n   .container{\r\n       margin-top:20px;\r\n   }\r\n   .mat-table {\r\n    overflow: auto;  \r\n    max-height: 500px;\r\n    \r\n    margin-left:20px;\r\n    margin-right:20px;\r\n    }\r\n    .mat-row:hover{\r\n      background-color:#EDE7F6;\r\n    }\r\n    .example-header {\r\n      min-height: 64px;\r\n      padding: 8px 24px 0;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n     .mat-header-row{\r\n      background-color:#7986CB;\r\n      color:#fff;\r\n    }\r\n    .mat-header-row,.mat-row{\r\n      border-bottom-color:#D7CCC8;\r\n    }\r\n    .mat-paginator{\r\n      color:#7986CB;\r\n      margin-left:20px;\r\n      margin-right:20px;\r\n    }\r\n    .mat-header-cell{\r\n      color:white;\r\n      font-family:verdana;\r\n      font-style:normal;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Doctor'\">\n    <div class=\"example-header\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n  <div class=\"mat-elevation-z8 center\" >\n    <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear>\n    <ng-container matColumnDef=\"healthissue\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Health Issue</mat-header-cell>\n        <mat-cell *matCellDef=\"let h\"> {{h.healthissue}} </mat-cell>\n    </ng-container>\n            \n   <ng-container matColumnDef=\"patientname\">\n    <mat-header-cell *matHeaderCellDef  mat-sort-header>Patient's Id</mat-header-cell>\n    <mat-cell *matCellDef=\"let h\"> {{h.patient}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef  mat-sort-header>Date</mat-header-cell>\n      <mat-cell *matCellDef=\"let h\"> {{h.date | date: 'dd'}}/{{h.date | date: 'MM'}}/{{h.date | date: 'yyyy'}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n      <mat-cell *matCellDef=\"let h\">\n      <button mat-icon-button color=\"primary\" routerLink=\"/diaview/{{h._id}}\">\n      <mat-icon aria-label=\"View\">visibility</mat-icon>\n      </button>\n  \n      <button mat-icon-button color=\"accent\" routerLink=\"/diagedit/{{h._id}}\">\n      <mat-icon aria-label=\"Edit\">edit</mat-icon>\n      </button>\n            \n      <button mat-icon-button color=\"warn\"(click)=\"profdeletediag(h._id)\">\n      <mat-icon aria-label=\"Delete\">delete</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n            \n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n            \n  <mat-paginator \n    [length]=\"dataSource.resultsLength\"\n    [pageSize]=\"5\" \n    [pageSizeOptions]=\"[1, 2, 3, 5]\">\n  </mat-paginator>\n            \n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = (function () {
    function HistoryComponent(auth) {
        this.auth = auth;
        this.user = {};
        this.displayedColumns = ['healthissue', 'patientname', 'date', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTableDataSource */](this.dataSource);
        this.hprofiles = [];
        this.hid = [];
    }
    HistoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.currentUser;
        this.profId = this.auth.currentUser._id;
        //this.auth.getDocHis()
        //.subscribe(data => this.hprofiles = JSON.parse(JSON.stringify(data)) );
        this.auth.getDocHis(this.profId)
            .subscribe(function (data) {
            _this.hprofiles = JSON.parse(JSON.stringify(data));
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTableDataSource */](_this.hprofiles);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    HistoryComponent.prototype.profdeletediag = function (id) {
        var _this = this;
        this.auth.diagfdelete(id).subscribe(function (res) {
            console.log(res);
            _this.hprofiles = res;
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], HistoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSort */])
    ], HistoryComponent.prototype, "sort", void 0);
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n  max-width: 400px;\r\n  margin: auto;\r\n  margin-top: 220px;\r\n  text-align: center;\r\n  padding: 24px 16px;\r\n  font-size:25px;\r\n  font-family:impact;\r\n }\r\n .box{\r\n  margin-top:25px;\r\n }\r\n\r\n button{\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n  font-family:impact;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n \n  <span typingAnimation [typeSpeed]=\"50\" [condition]=\"start\" [startDelay]=\"500\" [hideCursorOnComplete]=\"true\">\n   Welcome to Healthcare101\n  </span>\n  <br>\n  <div class=\"box\">\n    <button mat-raised-button routerLink=\"/login\">LOGIN</button>\n    <button mat-raised-button color=\"accent\" routerLink=\"/register\">REGISTER</button>\n  </div>\n\n </div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.start = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.start = true; }, 200);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hospital/hospital.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hospital/hospital.component.html":
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"query\" (keyup)=\"find($event.target.value)\" placeholder=\"search\">\n<button (click)=\"find()\">search</button> \n\n<div *ngIf=\"!Editing\">\n\n    <table class=\"table table-bordered\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">phone</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.phone}}</td>\n          <td>\n            <button (click)=\"enableEditing(user)\">Edit</button>\n            <button (click)=\"delete(user._id)\">delete</button>  \n          </td>\n        </tr>  \n      </tbody>\n    </table>\n\n    <form [formGroup]=\"addForm\">\n        <input formControlName=\"name\" placeholder=\"Name\">\n        <input formControlName=\"phone\" placeholder=\"Phone\">\n        <button (click)=\"add()\" [disabled]=\"!addForm.valid\">Add</button>\n    </form>\n        \n</div>\n\n<div *ngIf=\"Editing\">\n    <form #form=\"ngForm\" (ngSubmit)=\"edit(user)\">\n        <input name=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Name\">\n        <input name=\"phone\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" >\n        <button type=\"submit\">Save</button>\n        <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\">Cancel</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/hospital/hospital.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hospital_service__ = __webpack_require__("../../../../../src/app/hospital/hospital.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HospitalComponent = (function () {
    function HospitalComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.user = {};
        this.query = '';
        this.Editing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, this.validNumber('phone')]);
    }
    HospitalComponent.prototype.ngOnInit = function () {
        this.get();
        this.addForm = this.fb.group({
            name: this.name,
            phone: this.phone
        });
    };
    HospitalComponent.prototype.validNumber = function (control) {
        return function (control) {
            var regex = /^[0-9]{10}$/;
            return regex.test(control.value) ? null : { invalid: true };
        };
    };
    HospitalComponent.prototype.get = function () {
        var _this = this;
        this.service.get().subscribe(function (res) { return _this.users = res; });
    };
    HospitalComponent.prototype.add = function () {
        var _this = this;
        this.service.insert(this.addForm.value).subscribe(function (res) {
            _this.users.push(res);
            console.log('Data inserted');
            _this.addForm.reset();
        });
    };
    HospitalComponent.prototype.enableEditing = function (user) {
        this.Editing = true;
        this.user = user;
    };
    HospitalComponent.prototype.cancelEditing = function () {
        this.Editing = false;
        this.get();
    };
    HospitalComponent.prototype.edit = function (info) {
        var _this = this;
        var id = this.user._id;
        console.log(id);
        this.service.update(id, info).subscribe(function (res) { return _this.Editing = false; }, function (error) { return console.log(error); });
    };
    HospitalComponent.prototype.find = function () {
        var _this = this;
        this.service.search({ search: this.query }).subscribe(function (res) {
            _this.users = res;
        });
    };
    HospitalComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.remove(id).subscribe(function (res) {
            _this.ngOnInit();
            console.log('Data deleted');
        });
    };
    HospitalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hospital',
            template: __webpack_require__("../../../../../src/app/hospital/hospital.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hospital/hospital.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hospital_service__["a" /* HospitalService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], HospitalComponent);
    return HospitalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hospital/hospital.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HospitalService = (function () {
    function HospitalService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    HospitalService.prototype.insert = function (data) {
        return this.http.post(this.url + '/hospital', data);
    };
    HospitalService.prototype.get = function () {
        return this.http.get(this.url + '/hospitals');
    };
    HospitalService.prototype.remove = function (id) {
        return this.http.delete(this.url + '/hospital/' + id, { responseType: 'text' });
    };
    HospitalService.prototype.update = function (id, data) {
        return this.http.put(this.url + '/hospital/' + id, data, { responseType: 'text' });
    };
    HospitalService.prototype.search = function (data) {
        return this.http.post(this.url + '/hospital/search', data);
    };
    HospitalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HospitalService);
    return HospitalService;
}());



/***/ }),

/***/ "../../../../../src/app/lab/lab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.html":
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"query\" (keyup)=\"find($event.target.value)\" placeholder=\"search\">\n<button (click)=\"find()\">search</button> \n\n<div *ngIf=\"!Editing\">\n\n    <table class=\"table table-bordered\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">phone</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.phone}}</td>\n          <td><img width=\"100\" height=\"100\" [src]=\"'data:image/jpg;base64,'+user.photo\"></td>\n          <td>\n            <button (click)=\"enableEditing(user)\">Edit</button>\n            <button (click)=\"delete(user._id)\">delete</button>  \n          </td>\n        </tr>  \n      </tbody>\n    </table>\n\n    <form [formGroup]=\"addForm\">\n        <input formControlName=\"name\" placeholder=\"Name\">\n        <input formControlName=\"phone\" placeholder=\"Phone\">\n        <input type=\"file\" (change)=\"handleFileSelect($event)\">\n        <input [ngModel]=\"pic\" formControlName=\"photo\" placeholder=\"pic\">\n        <button (click)=\"add()\" [disabled]=\"!addForm.valid\">Add</button>\n    </form>\n        \n</div>\n\n<div *ngIf=\"Editing\">\n    <form #form=\"ngForm\" (ngSubmit)=\"edit(user)\">\n        <input name=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Name\">\n        <input name=\"phone\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" >\n        <button type=\"submit\">Save</button>\n        <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\">Cancel</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lab_service__ = __webpack_require__("../../../../../src/app/lab/lab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabComponent = (function () {
    function LabComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.user = {};
        this.query = '';
        this.Editing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, this.validNumber('phone')]);
        this.photo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */];
    }
    LabComponent.prototype.ngOnInit = function () {
        this.get();
        this.addForm = this.fb.group({
            name: this.name,
            phone: this.phone,
            photo: this.photo
        });
    };
    LabComponent.prototype.validNumber = function (control) {
        return function (control) {
            var regex = /^[0-9]{10}$/;
            return regex.test(control.value) ? null : { invalid: true };
        };
    };
    LabComponent.prototype.get = function () {
        var _this = this;
        this.service.get().subscribe(function (res) { return _this.users = res; });
    };
    LabComponent.prototype.add = function () {
        var _this = this;
        this.service.insert(this.addForm.value).subscribe(function (res) {
            _this.users.push(res);
            console.log('Data inserted');
            _this.addForm.reset();
        });
    };
    LabComponent.prototype.enableEditing = function (user) {
        this.Editing = true;
        this.user = user;
    };
    LabComponent.prototype.cancelEditing = function () {
        this.Editing = false;
        this.get();
    };
    LabComponent.prototype.edit = function (info) {
        var _this = this;
        var id = this.user._id;
        console.log(id);
        this.service.update(id, info).subscribe(function (res) { return _this.Editing = false; }, function (error) { return console.log(error); });
    };
    LabComponent.prototype.find = function () {
        var _this = this;
        this.service.search({ search: this.query }).subscribe(function (res) {
            _this.users = res;
        });
    };
    LabComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.remove(id).subscribe(function (res) {
            _this.ngOnInit();
            console.log('Data deleted');
        });
    };
    LabComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    LabComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.pic = btoa(binaryString);
        this.users.photo = btoa(binaryString);
    };
    LabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lab',
            template: __webpack_require__("../../../../../src/app/lab/lab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lab/lab.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__lab_service__["a" /* LabService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], LabComponent);
    return LabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lab/lab.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabService = (function () {
    function LabService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    LabService.prototype.insert = function (data) {
        return this.http.post(this.url + '/lab', data);
    };
    LabService.prototype.get = function () {
        return this.http.get(this.url + '/labs');
    };
    LabService.prototype.remove = function (id) {
        return this.http.delete(this.url + '/lab/' + id, { responseType: 'text' });
    };
    LabService.prototype.update = function (id, data) {
        return this.http.put(this.url + '/lab/' + id, data, { responseType: 'text' });
    };
    LabService.prototype.search = function (data) {
        return this.http.post(this.url + '/lab/search', data);
    };
    LabService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LabService);
    return LabService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\r\n    max-width: 400px;\r\n    margin: auto;\r\n    text-align: center;\r\n    transition: all 1s;\r\n    padding: 110px  20px;\r\n    font-family:impact;\r\n\r\n}\r\n.space{\r\n    padding-right: 20px;\r\n}\r\nmat-form-field,button{\r\n    width:100%;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    font-family:impact;\r\n}\r\n::ng-deep .mat-tab-labels{\r\n    -ms-flex-pack: center;\r\n        justify-content: center; /* align items in Main Axis */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  \n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n    <h1>LOGIN</h1>\n      <span class=\"space\"></span>\n      <mat-form-field floatLabel=\"never\">\n          <input type=\"text\" placeholder=\"Role\" formControlName=\"role\" matInput [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n              {{ option }}\n            </mat-option>\n          </mat-autocomplete>\n      </mat-form-field>\n      <mat-form-field floatLabel=\"never\">\n        <input matInput placeholder=\"username\" formControlName=\"username\">\n      </mat-form-field>\n      <mat-form-field floatLabel=\"never\"  class=\"fullwidth\" color=\"accent\">\n          \n              <input matInput placeholder=\"password\" type=\"password\" name=\"password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" />\n              <mat-icon  matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n      <span class=\"space\"></span>\n      <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n      <button mat-raised-button routerLink=\"/home\">Back</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast__ = __webpack_require__("../../../../../src/app/services/toast.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, router, toast, auth) {
        this.fb = fb;
        this.router = router;
        this.toast = toast;
        this.auth = auth;
        this.hide = true;
        this.options = ['Doctor', 'Patient', 'Hospital', 'Hadmin', 'Ladmin', 'Sadmin', 'Padmin', 'Pharm', 'Lab', 'PharmAssist', 'LabAssisst'];
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(30)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)
        ]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/dashboard']);
        }
        this.loginForm = this.fb.group({
            username: this.username,
            password: this.password,
            role: this.role
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) {
            _this.toast.open('Welcome ' + _this.loginForm.get('username').value, 'success');
            _this.router.navigate(['/dashboard']);
        }, function (error) { return _this.toast.open('Invalid data', 'danger'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/myprofile/myprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\r\n    width:75px;\r\n    margin-left:7px;\r\n    \r\n   }\r\n   .btn-success{\r\n    background-color:rgb(13, 58, 13);\r\n    color:white;\r\n   }\r\n   .btn-info{\r\n    background-color:rgb(25, 25, 134);\r\n   color:white;\r\n   }\r\n   .btn-danger{\r\n   background-color:rgb(122, 10, 10);\r\n   color:white;\r\n   }\r\n   thead{\r\n    background-color:#5C6BC0;\r\n   }\r\n   .container{\r\n       margin-top:20px;\r\n   }\r\n\r\n.card.hovercard {\r\n position: relative;\r\nwidth:60%;\r\nmargin-top:100px;\r\n overflow: hidden;\r\n margin-left:300px;\r\n \r\n}\r\n\r\n.card.hovercard .cardheader {\r\n background-size: cover;\r\n height: 105px;\r\n}\r\n\r\n.card.hovercard .avatar {\r\n float:right;\r\n top: -60px;\r\n margin-bottom: -50px;\r\n}\r\n\r\n.card.hovercard .avatar img {\r\n width: 100px;\r\n height: 100px;\r\n max-width: 100px;\r\n max-height: 100px;\r\n border-radius: 50%;\r\n border: 5px solid rgba(255,255,255,0.5);\r\n}\r\n\r\nh2{\r\n float:left;\r\n margin-top:30px;\r\n font-family: Times New Roman;\r\n \r\n}\r\nh3{\r\n  text-align: center;\r\n  margin-left:-500px;\r\n  font-size:30px;\r\n}\r\nspan{\r\n color:#ff5722;\r\n}\r\n.table{\r\n margin-top:40px;\r\n width:650px;\r\n}\r\n.table thead th{\r\n color:white;\r\n}\r\nthead{\r\n background-color:#1a237e;\r\n color:white;\r\n}\r\n.line{\r\n border:1px solid #1a237e;\r\n margin-top:33px;\r\n}\r\ntable.table-bordered{\r\n border:1px solid #1a237e;\r\n margin-top:20px;\r\n}\r\ntable.table-bordered > thead > tr > th{\r\n border:1px solid #1a237e;\r\n}\r\ntable.table-bordered > tbody > tr > td{\r\n border:1px solid #1a237e;\r\n}\r\n.mat-table {\r\n  overflow: auto;  \r\n  max-height: 500px;\r\n  margin-left:20px;\r\n  margin-right:20px;\r\n}\r\n.mat-row:hover{\r\n background-color:#EDE7F6;\r\n}\r\n    .example-header {\r\n      min-height: 64px;\r\n      padding: 8px 24px 0;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n     .mat-header-row{\r\n      background-color:#7986CB;\r\n      color:#fff;\r\n    }\r\n    .mat-header-row,.mat-row{\r\n      border-bottom-color:#D7CCC8;\r\n    }\r\n    .mat-paginator{\r\n      color:#7986CB;\r\n      margin-left:20px;\r\n      margin-right:20px;\r\n    }\r\n    .mat-header-cell{\r\n      color:white;\r\n      font-family:verdana;\r\n      font-style:normal;\r\n    }\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myprofile/myprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Sadmin'\">\n  Hello {{user.username}}, welcome SuperAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Hadmin'\">\n  Hello {{user.username}}, welcome HospitalAdmin.\n  </div>\n \n  \n \n  \n  <div *ngIf=\"user.role=='Doctor'\">\n      <mat-card class=\"card hovercard\">\n      \n      <div class=\"cardheader\">\n        <h2> DOCTOR PROFILE DETAILS</h2>\n          <div class=\"avatar\">\n            <img width=\"100\" height=\"100\" [src]=\"'data:image/jpg;base64,'+dprofiles.dphoto\">\n            <h4><span><strong>{{dprofiles.dfirstname}}</strong></span></h4>\n          </div>\n      </div>\n      \n      <div class=\"line\"></div>\n     <div class=\"container\">\n      <table class=\"table  table-bordered table-hover\">\n        \n            <colgroup>\n              <col span=\"1\" style=\"width: 25%;\">\n              <col span=\"1\" style=\"width: 75%;\">\n            </colgroup>\n          <tr>\n            <td>Firstname:</td>\n            <td>{{dprofiles.dfirstname}}</td>\n          </tr>\n          <tr>\n            <td>Lastname:</td>\n            <td>{{dprofiles.dlastname}}</td>\n          </tr>\n          <tr>\n            <td>Email:</td>\n            <td>{{dprofiles.demail}}</td>\n          </tr>\n          <tr>\n            <td>Phone number:</td>\n            <td>{{dprofiles.dmobile}}</td>\n          </tr>\n          <tr>    \n            <td>Address:</td>\n            <td>{{dprofiles.daddress}}</td>\n          </tr>\n          <tr>          \n            <td>Area:</td>\n            <td>{{dprofiles.darea}}</td>\n          </tr>\n          <tr>\n            <td>City:</td>\n            <td>{{dprofiles.dcity}}</td>\n          </tr>\n          <tr>\n            <td>State:</td>\n            <td>{{dprofiles.dstate}}</td>\n          </tr>\n          <tr>\n            <td>Country:</td>\n            <td>{{dprofiles.dcountry}}</td>\n          </tr>\n          <tr>\n            <td>Pincode:</td>\n            <td>{{dprofiles.dpincode}}</td>\n          </tr>\n        \n      </table>\n     </div>\n     \n     <div class=\"container\">\n        <h3>Professional details</h3>\n      <table class=\"table  table-bordered table-hover\">                              \n          <colgroup>\n            <col span=\"1\" style=\"width: 25%;\">\n            <col span=\"1\" style=\"width: 75%;\">\n          </colgroup>\n        <tr>\n          <td>Education Details:</td>\n          <td>{{dprofiles.deducationdetails}}</td>\n        </tr>\n        <tr>\n         <td>Certificate No:</td>\n         <td>{{dprofiles.dcertificateno}}</td>\n        </tr>\n      <tr>\n        <td>Specialist:</td>\n        <td>{{dprofiles.dspecialist}}</td>\n      </tr>\n      <tr>\n        <td>Registration No:</td>\n        <td>{{dprofiles.dregistrationno}}</td>\n      </tr>\n      <tr>\n       <td>Years of Experience:</td>\n       <td>{{dprofiles.dyearsofexperience}}</td>\n      </tr>                  \n      </tbody>\n      </table>\n     </div>\n     </mat-card>\n     </div>\n  \n\n     <div *ngIf=\"user.role=='Patient'\">\n      <div class=\"mat-elevation-z8 center\" >\n          <div class=\"example-header\">\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n            </div>\n    \n          <mat-table #table [dataSource]=\"dataSource\" matSort matSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear>\n            <ng-container matColumnDef=\"firstname\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Firstname </mat-header-cell>\n              <mat-cell *matCellDef=\"let p\"> {{p.firstname}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"relationship\">\n              <mat-header-cell *matHeaderCellDef  mat-sort-header>Relationship</mat-header-cell>\n              <mat-cell *matCellDef=\"let p\"> {{p.relationship}} </mat-cell>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"gender\">\n              <mat-header-cell *matHeaderCellDef  mat-sort-header>Gender </mat-header-cell>\n              <mat-cell *matCellDef=\"let p\"> {{p.gender}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"actions\">\n              <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n        \n              <mat-cell *matCellDef=\"let p\">\n                  <button mat-icon-button color=\"primary\" routerLink=\"/viewprofile/{{p._id}}\">\n                      <mat-icon aria-label=\"View\">visibility</mat-icon>\n                    </button>\n                <button mat-icon-button color=\"accent\" routerLink=\"/editprofile/{{p._id}}\">\n                  <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                </button>\n        \n                <button mat-icon-button color=\"warn\"(click)=\"profdelete(p._id)\">\n                  <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                </button>\n               \n              </mat-cell>\n            </ng-container>\n        \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n        \n         <mat-paginator \n          [length]=\"dataSource.resultsLength\"\n          [pageSize]=\"5\" \n          [pageSizeOptions]=\"[1, 2, 3, 5]\">\n         </mat-paginator>\n        \n        </div>\n      </div>\n    \n\n  \n\n  \n  <div *ngIf=\"user.role=='Ladmin'\">\n    <mat-card class=\"card hovercard\">\n   <div class=\"cardheader\">\n      <h2>PROFILE DETAILS</h2>\n      <div class=\"avatar\">\n        <img width=\"100\" height=\"100\" [src]=\"'data:image/jpg;base64,'+labprofiles.lphoto\">\n        <h4><span><strong>{{labprofiles.lfirstname}}</strong></span></h4>\n      </div>\n   </div>\n   \n   <div class=\"line\"></div>\n   <div class=\"container\">\n    <table class=\"table  table-bordered table-hover\">\n        <tbody>\n            <colgroup>\n              <col span=\"1\" style=\"width: 25%;\">\n              <col span=\"1\" style=\"width: 75%;\">\n            </colgroup>\n          <tr>\n            <td>Firstname:</td>\n            <td>{{labprofiles.lfirstname}}</td>\n          </tr>\n          <tr>\n              <td>Lastname:</td>\n              <td>{{labprofiles.llastname}}</td>\n             </tr>\n          <tr>\n            <td>Email:</td>\n            <td>{{labprofiles.lemail}}</td>\n            </tr>\n             <tr>\n                <td>Phone number:</td>\n                <td>{{labprofiles.lphone}}</td>\n              </tr>\n                  <tr>    \n                      <td>Address:</td>\n                      <td>{{labprofiles.laddress}}</td>\n                      </tr>\n                      <tr>          \n                          <td>Area:</td>\n                          <td>{{labprofiles.larea}}</td>\n                          </tr>\n                          <tr>\n                              <td>City:</td>\n                              <td>{{labprofiles.lcity}}</td>\n                              </tr>\n                              <tr>\n                <td>State:</td>\n              <td>{{labprofiles.lstate}}</td>\n          </tr>\n        <tr>\n            <td>Country:</td>\n                <td>{{labprofiles.lcountry}}</td>\n              </tr>\n              <tr>\n                  <td>Pincode:</td>\n                  <td>{{labprofiles.lpincode}}</td>\n                </tr>\n                </tbody>\n                </table>\n                </div>\n                <div class=\"container\">\n                    <h3>Professional details</h3>\n                <table class=\"table  table-bordered table-hover\">                              \n                    <colgroup>\n                      <col span=\"1\" style=\"width: 25%;\">\n                      <col span=\"1\" style=\"width: 75%;\">\n                    </colgroup>\n          \n          <tr>\n          <td>Education Details:</td>\n           <td>{{labprofiles.leducationdetails}}</td>\n          </tr>\n          <tr>\n          <td>Certificate No:</td>\n          <td>{{labprofiles.lcertificateno}}</td>\n          </tr>\n          <tr>\n            <td>Specialist:</td>\n            <td>{{labprofiles.lspecialist}}</td>\n            </tr>\n        <tr>\n        <td>Years of Experience:</td>\n        <td>{{labprofiles.lyearsofexperience}}</td>\n        </tr>                  \n          </tbody>\n        </table>\n      </div>\n      </mat-card>\n    </div>\n\n\n  \n  <div *ngIf=\"user.role=='Padmin'\">\n <mat-card class=\"card hovercard\">\n <div class=\"cardheader\">\n <h2>Pharmacist Profile Details:</h2>\n <div class=\"avatar\">\n <img width=\"100\" height=\"100\" [src]=\"'data:image/jpg;base64,'+pharprofiles.pphoto\">\n <h4><span><strong>{{pharprofiles.pfirstname}}</strong></span></h4>\n </div>\n </div>\n\n<div class=\"line\"></div> \n<div class=\"container\">\n <table class=\"table  table-bordered table-hover\">\n    <colgroup>\n      <col span=\"1\" style=\"width: 25%;\">\n      <col span=\"1\" style=\"width: 75%;\">\n    </colgroup>\n <tr>\n  <td>Firstname:</td>\n  <td>{{pharprofiles.pfirstname}}</td>\n</tr>\n<tr>\n <td>Lastname:</td>\n<td>{{pharprofiles.plastname}}</td>\n</tr>\n <tr>\n <td>Email:</td>\n <td>{{pharprofiles.pemail}}</td>\n</tr>\n<tr>\n <td>Mobile number:</td>\n <td>{{pharprofiles.pmobile}}</td>\n</tr>\n <tr>\n   <td>Address:</td>\n   <td>{{pharprofiles.paddress}}</td>\n </tr>\n <tr>\n<td>Area:</td>\n<td>{{pharprofiles.parea}}</td>\n</tr>\n<tr>\n <td>City:</td>\n <td>{{pharprofiles.pcity}}</td>\n</tr>\n<tr>\n <td>State:</td>\n <td>{{pharprofiles.pstate}}</td>\n</tr>\n<tr>\n <td>Country:</td>\n <td>{{pharprofiles.pcountry}}</td>\n</tr>\n<tr>\n<td>Pincode:</td>\n<td>{{pharprofiles.ppincode}}</td>\n</tr>\n</table>\n</div>\n\n<div class=\"container\">\n   <h3>Professional details</h3>\n <table class=\"table  table-bordered table-hover\">                              \n    <colgroup>\n      <col span=\"1\" style=\"width: 25%;\">\n      <col span=\"1\" style=\"width: 75%;\">\n    </colgroup>\n <tr>\n <td>Education Details:</td>\n <td>{{pharprofiles.peducationdetails}}</td>\n</tr>\n<tr>\n <td>Certificate No:</td>\n <td>{{pharprofiles.pcertificateno}}</td>\n</tr>\n<tr>\n<td>Specialization:</td>\n<td>{{pharprofiles.pspecialization}}</td>\n</tr>\n<tr>\n<td>Registration No:</td>\n<td>{{pharprofiles.pregistrationno}}</td>\n</tr>\n<tr>\n <td>Years of Experience:</td>\n <td>{{pharprofiles.pyearofexperience}}</td>\n</tr>\n</table>\n</div>\n</mat-card>\n</div>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/myprofile/myprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyprofileComponent = (function () {
    function MyprofileComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.user = {};
        this.pprofiles = {};
        this.dprofiles = {};
        this.labprofiles = {};
        this.pharprofiles = {};
        this.patient = {};
        this.displayedColumns = ['firstname', 'relationship', 'gender', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatTableDataSource */](this.dataSource);
    }
    MyprofileComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    MyprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profId = this.auth.currentUser._id;
        console.log(this.profId);
        this.user = this.auth.currentUser;
        console.log(this.user.role);
        // this.auth.getProfile(this.profId)
        // .subscribe(data => this.pprofiles = JSON.parse(JSON.stringify(data)) );
        this.auth.getProfile(this.profId)
            .subscribe(function (data) {
            _this.pprofiles = JSON.parse(JSON.stringify(data));
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatTableDataSource */](_this.pprofiles);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
        this.auth.getDocid(this.profId)
            .subscribe(function (data) { return _this.dprofiles = JSON.parse(JSON.stringify(data)); });
        this.auth.getPharid(this.profId)
            .subscribe(function (data) { return _this.pharprofiles = JSON.parse(JSON.stringify(data)); });
        this.getData();
    };
    MyprofileComponent.prototype.profdelete = function (id) {
        var _this = this;
        this.auth.profdelete(this.profId, id).subscribe(function (res) {
            console.log(res);
            _this.patient = res;
            _this.ngOnInit();
        });
    };
    MyprofileComponent.prototype.getData = function () {
        var _this = this;
        this.auth.getLabid(this.profId).subscribe(function (res) {
            console.log(res);
            _this.labprofiles = res;
            console.log(_this.labprofiles);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatPaginator */])
    ], MyprofileComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSort */])
    ], MyprofileComponent.prototype, "sort", void 0);
    MyprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myprofile',
            template: __webpack_require__("../../../../../src/app/myprofile/myprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/myprofile/myprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MyprofileComponent);
    return MyprofileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pharm/pharm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pharm/pharm.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pharm works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pharm/pharm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PharmComponent = (function () {
    function PharmComponent() {
    }
    PharmComponent.prototype.ngOnInit = function () {
    };
    PharmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pharm',
            template: __webpack_require__("../../../../../src/app/pharm/pharm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pharm/pharm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PharmComponent);
    return PharmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box1{\r\n    -ms-flex: 2;\r\n        flex: 2;\r\n    -ms-flex-order: 1;\r\n        order: 1;\r\n  }\r\n  .box2{\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n    -ms-flex-order: 2;\r\n        order: 2;\r\n  }\r\n  .sub1 mat-form-field{\r\n    width: 100%;\r\n   \r\n  }\r\n  .sub2 mat-form-field{\r\n    width: 100%;\r\n  }\r\n  .mat{\r\n       margin-right:20px;\r\n       width:300px;\r\n      \r\n  }\r\n  .mat1{\r\n    color: #00BCD4;\r\n  }\r\n  .size{\r\n     width:50%;\r\n  }\r\n  \r\n  \r\n  \r\n  @media(min-width:700px){\r\n    .container{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    }\r\n    .sub1{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    }\r\n  }\r\n  .mat-card {\r\n    max-width: 700px;\r\n    margin: 0em auto;\r\n    text-align: center;\r\n  }\r\n  .signin-content {\r\n    padding: 60px 1rem;\r\n  }\r\n  .full-width-input {\r\n    width: 100%;\r\n  }\r\n  .example-section {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 60px;\r\n   }\r\n   .example-margin {\r\n    margin: 0 10px;\r\n   }\r\n   .go{\r\n    padding:73px;\r\n   }\r\n   .go1{\r\n    margin-left:1px;\r\n   }\r\n   .so{\r\n    padding:33px;\r\n   }\r\n   .so1{\r\n    padding:45px;\r\n   }\r\n   .ro{\r\n    padding:28px;\r\n   }\r\n   .ro1{\r\n    padding:50px;\r\n   }\r\n   label{\r\n  color: grey;\r\n  padding: 15px;\r\n  padding-top: 3px;\r\n   }\r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Sadmin'\">\n  Hello {{user.username}}, welcome SuperAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Hadmin'\">\n  Hello {{user.username}}, welcome HospitalAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Ladmin'\">\n        <mat-card>\n                <mat-toolbar>\n                  <mat-toolbar-row>\n                    <span>DETAILS</span>\n                   \n                </mat-toolbar-row>\n              </mat-toolbar>\n                \n              <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n              <mat-step> \n                   <ng-template matStepLabel>Basic Details</ng-template>\n              <div class=\"sub1\">\n                <mat-form-field class=\"mat\" color=\"accent\">\n                  <input matInput name=\"Firstname\"  [(ngModel)]=\"lab.lfirstname\" placeholder=\"Firstname\" >\n                </mat-form-field>\n                <mat-form-field color=\"accent\" >\n                  <input matInput  [(ngModel)]=\"lab.llastname\" placeholder=\"Lastname\" >\n                </mat-form-field>\n              </div>\n              <div class=\"sub1\">\n                    <label for=\"file\">Please Upload Your Profile</label>\n                    <input type=\"file\" (change)=\"handleFileSelect($event)\">\n                    </div>\n                    <div class=\"sub2\">\n                    <mat-form-field>\n                    <input matInput  [ngModel]=\"lab.lpic\" placeholder=\"Upload picture\">\n                </mat-form-field>\n            </div>\n            \n              \n              <div class=\"sub2\">\n                <mat-form-field  class=\"mat\" color=\"accent\">\n                  <input matInput  [(ngModel)]=\"lab.lemail\" placeholder=\"Email\">\n                </mat-form-field>\n                </div>\n              \n              <div class=\"sub2\">\n                  <mat-form-field  class=\"mat\" color=\"accent\">\n                      <textarea matInput  [(ngModel)]=\"lab.laddress\" placeholder=\"Address\"></textarea>\n                     </mat-form-field>\n                     </div>\n                     <div class=\"sub1\">\n                    <mat-form-field class=\"mat\" color=\"accent\">\n                        <input matInput #input maxlength=\"10\" [(ngModel)]=\"lab.lphone\" placeholder=\"Phone\">\n                     </mat-form-field>\n                     <mat-form-field>\n                        <input type=\"text\" placeholder=\"Area\" aria-label=\"Number\"   [(ngModel)]=\"lab.larea\" matInput [formControl]=\"Control2\" [matAutocomplete]=\"auto3\">\n                        <mat-autocomplete #auto3=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let area of filteredareas | async\" [value]=\"area\">\n                            {{ area }}\n                          </mat-option>\n                        </mat-autocomplete>\n                      </mat-form-field>\n              </div>\n          <div class=\"sub1\" >\n                <mat-form-field class=\"mat\">\n                        <input type=\"text\" placeholder=\"City\" aria-label=\"Number\" [(ngModel)]=\"lab.lcity\" matInput [formControl]=\"myControl1\" [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let city of filteredcities | async\" [value]=\"city\">\n                            {{ city }}\n                          </mat-option>\n                        </mat-autocomplete>\n                      </mat-form-field>\n                      <mat-form-field >\n                            <input type=\"text\" placeholder=\"State\" aria-label=\"Number\"  [(ngModel)]=\"lab.lstate\" matInput [formControl]=\"Control1\" [matAutocomplete]=\"auto1\">\n                            <mat-autocomplete #auto1=\"matAutocomplete\">\n                              <mat-option *ngFor=\"let state of filteredstates | async\" [value]=\"state\">\n                                {{ state }}\n                              </mat-option>\n                            </mat-autocomplete>\n                          </mat-form-field>\n            \n          </div>\n          <div class=\"sub1\">\n              \n                          <mat-form-field class=\"mat\">\n                                <input type=\"text\" placeholder=\"Country\" aria-label=\"Number\"  [(ngModel)]=\"lab.lcountry\" matInput [formControl]=\"Control3\" [matAutocomplete]=\"auto4\">\n                                <mat-autocomplete #auto4=\"matAutocomplete\">\n                                  <mat-option *ngFor=\"let country of filteredcountries | async\" [value]=\"country\">\n                                    {{ country }}\n                                  </mat-option>\n                                </mat-autocomplete>\n                              </mat-form-field>\n              \n              <mat-form-field >\n                <input matInput #input maxlength=\"6\" [(ngModel)]=\"lab.lpincode\" placeholder=\"PinCode\">\n               </mat-form-field>\n              </div>\n              \n               <div>\n                <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n              </div>\n              </mat-step>\n              \n              \n              <mat-step>\n                <ng-template matStepLabel>Professional Details</ng-template>\n              <div class=\"sub1\">\n               <mat-form-field class=\"mat\" color=\"accent\">\n                <input matInput  [(ngModel)]=\"lab.leducationdetails\" placeholder=\"Education Details\" >\n               </mat-form-field>\n              <mat-form-field color=\"accent\" >\n                <input matInput  [(ngModel)]=\"lab.lcertificateno\" placeholder=\"Certificate No\" >\n              </mat-form-field>\n              </div>\n              \n              <div class=\"sub2\">\n              <mat-form-field class=\"mat\" color=\"accent\">\n                <input matInput  [(ngModel)]=\"lab.lspecialist\" placeholder=\"Specialization\">\n              </mat-form-field>\n           </div>\n              \n           <div class=\"sub2\">\n              <mat-form-field class=\"mat\" color=\"accent\">\n               <input matInput  [(ngModel)]=\"lab.lyearsofexperience\" placeholder=\"Years of Experience\" >\n              </mat-form-field>\n             \n              </div>\n                      \n              <div>\n                  <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                  <button mat-raised-button color=\"primary\" (click)=\"callLab()\"type=\"submit\">Submit</button>\n              </div>\n                  \n              </mat-step>\n                  \n              </mat-horizontal-stepper>\n              </mat-card>  \n  </div>\n  \n\n  \n  <div *ngIf=\"user.role=='Doctor'\">\n \n<mat-card>\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n            <mat-step >\n                \n                <ng-template matStepLabel>\"Doctor Profile Form</ng-template>\n                 <div class=\"sub1\">\n                    <mat-form-field class=\"mat\" color=\"accent\">\n                        <input type=\"text\" matInput [(ngModel)]=\"doctor.dfirstname\" placeholder=\"Firstname\"  >\n                      </mat-form-field>\n                     \n                    <mat-form-field color=\"accent\" >\n                        <input  type=\"text\" matInput  [(ngModel)]=\"doctor.dlastname\" placeholder=\"Lastname\" >\n                    </mat-form-field>\n             </div>\n                 <div class=\"sub2\">\n                    <mat-form-field  class=\"mat\" color=\"accent\">\n                        <input matInput [(ngModel)]=\"doctor.demail\" placeholder=\"Email\" >\n                      </mat-form-field>\n                  \n                </div>\n                  <div class=\"sub1\">\n                        <label for=\"file\">Please Upload Your Profile</label>\n                        <input type=\"file\" (change)=\"handleFileSelect($event)\">\n                        </div>\n                        <div class=\"sub2\">\n                        <mat-form-field>\n                        <input matInput [ngModel]=\"doctor.dpic\" placeholder=\"Upload picture\">\n                    </mat-form-field>\n                </div>\n        \n                    <div class=\"sub2\">\n                            <mat-form-field class=\"mat\" color=\"accent\">\n                                    <input matInput #input maxlength=\"10\" [(ngModel)]=\"doctor.dmobile\" placeholder=\"Mobile\">\n                            </mat-form-field>\n                        </div>\n                <div class=\"sub4\">\n                    <div class=\"sub1\">\n                        <mat-form-field color=\"accent\">\n                            <textarea matInput [(ngModel)]=\"doctor.daddress\" placeholder=\"Address\" ></textarea>\n                        </mat-form-field>\n                        </div>\n                        \n                        <div class=\"sub2\">\n                            <mat-form-field class=\"mat\">\n                                <input type=\"text\" placeholder=\"Area\" aria-label=\"Number\"   [(ngModel)]=\"doctor.darea\" matInput [formControl]=\"Control2\" [matAutocomplete]=\"auto3\">\n                                <mat-autocomplete #auto3=\"matAutocomplete\">\n                                  <mat-option *ngFor=\"let area of filteredareas | async\" [value]=\"area\">\n                                    {{ area }}\n                                  </mat-option>\n                                </mat-autocomplete>\n                              </mat-form-field>\n                      </div>\n                  <div class=\"sub1\" >\n                        <mat-form-field class=\"mat\">\n                                <input type=\"text\" placeholder=\"City\" aria-label=\"Number\" [(ngModel)]=\"doctor.dcity\" matInput [formControl]=\"myControl1\" [matAutocomplete]=\"auto\">\n                                <mat-autocomplete #auto=\"matAutocomplete\">\n                                  <mat-option *ngFor=\"let city of filteredcities | async\" [value]=\"city\">\n                                    {{ city }}\n                                  </mat-option>\n                                </mat-autocomplete>\n                              </mat-form-field>\n                              <mat-form-field >\n                                    <input type=\"text\" placeholder=\"State\" aria-label=\"Number\"  [(ngModel)]=\"doctor.dstate\" matInput [formControl]=\"Control1\" [matAutocomplete]=\"auto1\">\n                                    <mat-autocomplete #auto1=\"matAutocomplete\">\n                                      <mat-option *ngFor=\"let state of filteredstates | async\" [value]=\"state\">\n                                        {{ state }}\n                                      </mat-option>\n                                    </mat-autocomplete>\n                                  </mat-form-field>\n                    \n                  </div>\n                  <div class=\"sub1\">\n                      \n                                  <mat-form-field class=\"mat\">\n                                        <input type=\"text\" placeholder=\"Country\" aria-label=\"Number\"  [(ngModel)]=\"doctor.dcountry\" matInput [formControl]=\"Control3\" [matAutocomplete]=\"auto4\">\n                                        <mat-autocomplete #auto4=\"matAutocomplete\">\n                                          <mat-option *ngFor=\"let country of filteredcountries | async\" [value]=\"country\">\n                                            {{ country }}\n                                          </mat-option>\n                                        </mat-autocomplete>\n                                    </mat-form-field>\n                              <mat-form-field  color=\"accent\">\n                                <input matInput #input maxlength=\"6\"  [(ngModel)]=\"doctor.dpincode\" placeholder=\"PinCode\">\n                               </mat-form-field>\n                            \n                            </div>\n                            <div>\n                                <button  mat-raised-button color=\"primary\" matStepperNext>Next</button>\n                           </div>\n                        </div>\n                       \n                      \n                       \n        \n                    </mat-step>\n                    \n                       <mat-step >\n                \n                            <ng-template matStepLabel>\"Doctor Proffession Form\"</ng-template>\n                  \n                      \n                            <div class=\"sub1\">\n                                <mat-form-field class=\"mat\" color=\"accent\">\n                                    <input matInput  [(ngModel)]=\"doctor.deducationdetails\" placeholder=\"Education Details\" >\n                                  </mat-form-field>\n                                <mat-form-field color=\"accent\" >\n                                    <input matInput  [(ngModel)]=\"doctor.dcertificateno\" placeholder=\"Certificate No\" >\n                                </mat-form-field>\n                            </div>\n                        \n                          \n                                  <div class=\"sub4\">     \n                            <div class=\"sub1\">\n                                <mat-form-field class=\"mat\" color=\"accent\" >\n                                    <input matInput  [(ngModel)]=\"doctor.dregistrationno\" placeholder=\"Registration No\" >\n                                </mat-form-field>\n                                <mat-form-field  color=\"accent\">\n                                    <input matInput  [(ngModel)]=\"doctor.dspecialist\" placeholder=\"Specialization\" >\n                                  </mat-form-field>\n                                  </div>\n                            </div>\n                           \n                            <div class=\"sub2\">\n                                <mat-form-field class=\"mat\" color=\"accent\">\n                                    <input matInput  [(ngModel)]=\"doctor.dyearsofexperience\" placeholder=\"Years of Experience\" >\n                                  </mat-form-field>\n                                  </div>\n                     <div>\n                            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                           <button mat-raised-button color=\"primary\" (click)=\"callDoc()\"type=\"submit\">Submit</button>\n                     </div>\n               </mat-step>\n            </mat-horizontal-stepper>\n        </mat-card>\n  </div>\n  \n  <div *ngIf=\"user.role=='Patient'\">\n    <mat-card>\n      <mat-toolbar>\n              <mat-toolbar-row>\n                  <span>DETAILS</span>\n               \n              </mat-toolbar-row>\n      </mat-toolbar>\n      \n      <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n          <mat-step> \n                            \n              <ng-template matStepLabel >Basic Details</ng-template>\n                   \n                      <div class=\"sub1\">\n                          <mat-form-field class=\"mat\" color=\"accent\">\n                              <input matInput name=\"Firstname\"  [(ngModel)]=\"User.firstname\" placeholder=\"Firstname\" >\n                            </mat-form-field>\n                          <mat-form-field color=\"accent\" >\n                              <input matInput  [(ngModel)]=\"User.lastname\" placeholder=\"Lastname\" >\n                          </mat-form-field>\n                      </div>\n                      <div class=\"sub2\">\n                        <mat-form-field class=\"mat\" color=\"accent\">\n                            <mat-select [(ngModel)]=\"User.relationship\" placeholder=\"Relationship\">\n                              <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                                {{ food.viewValue }}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                            </div>\n                      <div class=\"sub2\">\n                          <mat-form-field  class=\"mat\" color=\"accent\">\n                              <input matInput  [(ngModel)]=\"User.email\" placeholder=\"Email\"  >\n                            </mat-form-field>\n                     \n                          </div>\n                          <div class=\"sub1\">\n                          <mat-form-field  class=\"mat\" >\n                                <input matInput #input maxlength=\"10\" [(ngModel)]=\"User.mobile\" placeholder=\"Mobile\">\n                               </mat-form-field>\n                            \n                             <mat-form-field>\n                                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date Of Birth\" [(ngModel)]=\"User.dob\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1></mat-datepicker>\n                               </mat-form-field>\n                            </div>\n\n                          <div  class=\"sub1\">\n                         <label for=\"file\">Please Upload Your Profile</label>\n                          <input type=\"file\" (change)=\"handleFileSelect($event)\">\n                          </div>\n                          <div class=\"sub2\">\n                          <mat-form-field color=\"accent\">\n                          <input matInput [ngModel]=\"pic\" placeholder=\"Upload picture\">\n                        </mat-form-field>\n                          </div>\n                          <div class=\"sub1\" >\n                              <mat-form-field class=\"mat\" color=\"accent\" >\n                                  <mat-select placeholder=\"Blood Group\" [(value)]=\"User.bloodgroup\" >\n                                      <mat-option value=\"A+\">A+</mat-option>\n                                      <mat-option value=\"A-\">A-</mat-option>\n                                      <mat-option value=\"B+\">B+</mat-option>\n                                      <mat-option value=\"B-\">B-</mat-option>\n                                      <mat-option value=\"O+\">O+</mat-option>\n                              \n                                  </mat-select>\n                                  </mat-form-field>\n                                  <mat-form-field color=\"accent\">\n                                      <mat-select placeholder=\"Gender\" [(value)]=\"User.gender\" >\n                                          <mat-option value=\"Male\">Male</mat-option>\n                                          <mat-option value=\"Female\">Female</mat-option>\n                                          <mat-option value=\"Others\">Others</mat-option>\n                                      </mat-select>\n                                  </mat-form-field>\n                             \n                          </div>\n                        \n                      <div class=\"sub4\">\n                          <div class=\"sub1\">\n                              <mat-form-field color=\"accent\">\n                                  <textarea matInput  [(ngModel)]=\"User.address\" placeholder=\"Address\" ></textarea>\n                              </mat-form-field>\n                          </div>\n                          </div>\n                          <div class=\"sub1\" >\n                            <mat-form-field class=\"mat\">\n                                    <input type=\"text\" placeholder=\"City\" aria-label=\"Number\" [(ngModel)]=\"User.city\" matInput [formControl]=\"myControl1\" [matAutocomplete]=\"auto\">\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\n                                      <mat-option *ngFor=\"let city of filteredcities | async\" [value]=\"city\">\n                                        {{ city }}\n                                      </mat-option>\n                                    </mat-autocomplete>\n                                  </mat-form-field>\n                                  <mat-form-field >\n                                        <input type=\"text\" placeholder=\"State\" aria-label=\"Number\"  [(ngModel)]=\"User.state\" matInput [formControl]=\"Control1\" [matAutocomplete]=\"auto1\">\n                                        <mat-autocomplete #auto1=\"matAutocomplete\">\n                                          <mat-option *ngFor=\"let state of filteredstates | async\" [value]=\"state\">\n                                            {{ state }}\n                                          </mat-option>\n                                        </mat-autocomplete>\n                                      </mat-form-field>\n                        \n                      </div>\n                      <div class=\"sub1\">\n                          \n                                      <mat-form-field class=\"mat\">\n                                            <input type=\"text\" placeholder=\"Country\" aria-label=\"Number\"  [(ngModel)]=\"User.country\" matInput [formControl]=\"Control3\" [matAutocomplete]=\"auto4\">\n                                            <mat-autocomplete #auto4=\"matAutocomplete\">\n                                              <mat-option *ngFor=\"let country of filteredcountries | async\" [value]=\"country\">\n                                                {{ country }}\n                                              </mat-option>\n                                            </mat-autocomplete>\n                                        </mat-form-field>\n                            \n                                    <mat-form-field >\n                                            <input matInput #input maxlength=\"6\" [(ngModel)]=\"User.pincode\" placeholder=\"PinCode\">\n                                           </mat-form-field>\n                                </div>\n                              <div>\n                                  <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n                              </div>\n                    \n      \n          </mat-step>\n          <mat-step>\n              <ng-template matStepLabel>Health Info</ng-template>\n              \n                      <div class=\"sub1\">\n                          <mat-form-field class=\"mat\" color=\"accent\">\n                              <input matInput  [(ngModel)]=\"User.height\" placeholder=\"Height (ft/cms)\" >\n                            </mat-form-field>\n                          <mat-form-field color=\"accent\" >\n                              <input matInput  [(ngModel)]=\"User.weight\" placeholder=\"Weight ( kg/lbs)\" >\n                          </mat-form-field>\n                      </div>\n                  \n                      <div class=\"sub4\">\n                      <div class=\"sub1\">\n                              <mat-form-field class=\"mat\" color=\"accent\">\n                                  <input matInput  [(ngModel)]=\"User.allergicto\" placeholder=\"Allergic to\" >\n                                </mat-form-field>\n                              </div>\n                              </div>\n                     \n                        \n                         \n              <div>\n                <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n            </div>\n        \n          </mat-step>\n          <mat-step>\n              <ng-template matStepLabel>Health information - Personal Habits:</ng-template>\n              <section class=\"example-section\">\n                  <label class=\"example-margin\">1) Do you smoke? </label>\n                  <mat-radio-group [(ngModel)]=\"User.smoke\">\n                    <mat-radio-button class=\"go\" value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button class=\"go1\" value=\"no\">No</mat-radio-button>\n                  </mat-radio-group>\n                </section>\n                <section class=\"example-section\">\n                  <label class=\"example-margin\"> 2) Do you use tobacco? </label>\n                  <mat-radio-group [(ngModel)]=\"User.tobacco\">\n                    <mat-radio-button class=\"so\" value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button class=\"so1\" value=\"no\">No</mat-radio-button>\n                  </mat-radio-group>\n                </section>\n                <section class=\"example-section\">\n                  <label class=\"example-margin\"> 3) Do you drink alcohol? </label>\n                  <mat-radio-group [(ngModel)]=\"User.alcohol\">\n                    <mat-radio-button class=\"ro\" value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button class=\"ro1\" value=\"no\">No</mat-radio-button>\n                  </mat-radio-group>\n                </section>\n                <div>\n                  <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                  <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n              </div>\n              </mat-step>\n          <mat-step>\n                          \n                    <ng-template matStepLabel>Insurance Info</ng-template>\n                    \n                            <div class=\"sub1\">\n                                <mat-form-field class=\"mat\" color=\"accent\">\n                                    <input matInput [(ngModel)]=\"User.insuranceprovidername\" placeholder=\"Insurance Provider Name\">\n                                  </mat-form-field>\n                                <mat-form-field color=\"accent\">\n                                    <input matInput [(ngModel)]=\"User.policyholdername\" placeholder=\"Policy holder name\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"sub1\">\n                                    <mat-form-field class=\"mat\" color=\"accent\">\n                                        <input matInput [(ngModel)]=\"User.policyno\" placeholder=\"Policy No\" >\n                                      </mat-form-field>\n                                      <mat-form-field color=\"accent\">\n                                        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"User.policyissuancedate\" placeholder=\"Policy issuance date(dd/MM/YYYY)\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker></mat-datepicker>\n                                      </mat-form-field>\n                                    \n                                </div>\n                              \n                               \n                    <div>\n                      <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                     \n                      <button mat-raised-button color=\"primary\" (click)=\"call()\"type=\"submit\">Submit</button>\n                  </div>\n      \n                </mat-step>\n         \n      </mat-horizontal-stepper>\n      </mat-card>  \n  </div>\n  \n  <div *ngIf=\"user.role=='Lab'\">\n   \n  </div>\n  \n  <div *ngIf=\"user.role=='LabAssist'\">\n    <mat-card>\n        <mat-toolbar>\n          <mat-toolbar-row>\n            <span>DETAILS</span>\n            <span class=\"spacer\"></span>\n            <mat-icon id=\"icon\" (click)=\"disabled = !disabled\">edit</mat-icon>\n        </mat-toolbar-row>\n      </mat-toolbar>\n        \n      <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n      <mat-step> \n           <ng-template matStepLabel>Basic Details</ng-template>\n      <div class=\"sub1\">\n        <mat-form-field class=\"mat\" color=\"accent\">\n          <input matInput name=\"Firstname\"  [(ngModel)]=\"lab.lfirstname\" placeholder=\"Firstname\" >\n        </mat-form-field>\n        <mat-form-field color=\"accent\" >\n          <input matInput  [(ngModel)]=\"lab.llastname\" placeholder=\"Lastname\" >\n        </mat-form-field>\n      </div>\n      \n      <div class=\"sub1\">\n        <mat-form-field  class=\"mat\" color=\"accent\">\n          <input matInput  [(ngModel)]=\"lab.lemail\" placeholder=\"Email\">\n        </mat-form-field>\n       <mat-form-field class=\"mat\" color=\"accent\">\n       <input matInput #input maxlength=\"10\" [(ngModel)]=\"lab.lphone\"placeholder=\"Phone\">\n        </mat-form-field>\n        \n       \n      </div>\n      <div  class=\"sub1\">\n            <label for=\"file\">Please Upload Your Profile</label>\n            <input type=\"file\" (change)=\"handleFileSelect($event)\">\n            </div>\n            <div class=\"sub2\">\n            <input [ngModel]=\"lab.lpic\" placeholder=\"upload picture\">\n     </div>\n    \n                          \n      \n      <div class=\"sub1\">\n          <mat-form-field  class=\"mat\" color=\"accent\">\n              <textarea matInput  [(ngModel)]=\"lab.laddress\" placeholder=\"Address\"></textarea>\n             </mat-form-field>\n             <mat-form-field  class=\"mat\" color=\"accent\">\n              <input matInput  [(ngModel)]=\"lab.larea\" placeholder=\"Area\"  >\n             </mat-form-field>   \n       </div>\n      \n      \n      <div class=\"sub1\" >\n        <mat-form-field class=\"mat\" color=\"accent\">\n        <mat-select placeholder=\"City\" [(value)]=\"lab.lcity\">\n          <mat-option value=\"Chennai\">Chennai</mat-option>\n          <mat-option value=\"Madurai\">Madurai</mat-option>\n          <mat-option value=\"Vellore\">Vellore</mat-option>\n          <mat-option value=\"Vellore\">Tirupati</mat-option>\n        </mat-select>\n        </mat-form-field>\n      \n        <mat-form-field color=\"accent\">\n        <mat-select placeholder=\"State\" [(value)]=\"lab.lstate\">\n          <mat-option value=\"Bihar\">Andhra Pradesh</mat-option>\n          <mat-option value=\"Assam\">Assam</mat-option>\n          <mat-option value=\"Bihar\">Bihar</mat-option>\n          <mat-option value=\"Goa\">Goa</mat-option>\n          <mat-option value=\"Gujarat\">Gujarat</mat-option>\n          <mat-option value=\"Jammu and Kashmir\">Jammu and Kashmir</mat-option>\n          <mat-option value=\"Tamil Nadu\">Tamil Nadu</mat-option>\n          <mat-option value=\"Telangana\">Telangana</mat-option>\n          <mat-option value=\"Karnataka\">Karnataka</mat-option>\n          <mat-option value=\"Kerala\">Kerala</mat-option>\n         </mat-select>\n        </mat-form-field>\n      </div>\n      \n      <div class=\"sub1\">\n        <mat-form-field class=\"mat\" color=\"accent\">\n        <mat-select placeholder=\"Country\" [(value)]=\"lab.lcountry\">\n          <mat-option value=\"Algeria\">Algeria</mat-option>\n          <mat-option value=\"Bangladesh\">Bangladesh</mat-option>\n          <mat-option value=\"Cambodia\">Cambodia</mat-option>\n          <mat-option value=\"Denmark\">Denmark</mat-option>\n          <mat-option value=\" Greece\">Greece</mat-option>\n          <mat-option value=\"India\"> India </mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput #input maxlength=\"6\" [(ngModel)]=\"lab.lpincode\" placeholder=\"PinCode\">\n     </mat-form-field>\n      </div>\n      \n       <div>\n        <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n      </div>\n      </mat-step>\n      \n      \n      <mat-step>\n        <ng-template matStepLabel>Professional Details</ng-template>\n      <div class=\"sub1\">\n       <mat-form-field class=\"mat\" color=\"accent\">\n        <input matInput  [(ngModel)]=\"lab.leducationdetails\" placeholder=\"Education Details\" >\n       </mat-form-field>\n      <mat-form-field color=\"accent\" >\n        <input matInput  [(ngModel)]=\"lab.lcertificateno\" placeholder=\"Certificate No\" >\n      </mat-form-field>\n      </div>\n      \n      <div class=\"sub1\">\n      <mat-form-field class=\"mat\" color=\"accent\">\n        <input matInput  [(ngModel)]=\"lab.lspecialist\" placeholder=\"Specialization\">\n      </mat-form-field>\n      <mat-form-field class=\"mat\" color=\"accent\">\n            <input matInput  [(ngModel)]=\"lab.lregistrationno\" placeholder=\"Registration No\">\n          </mat-form-field>\n      </div>\n      \n   \n      \n      <div class=\"sub1\">\n      <mat-form-field class=\"mat\" color=\"accent\">\n       <input matInput  [(ngModel)]=\"lab.lyearsofexperience\" placeholder=\"Years of Experience\" >\n      </mat-form-field>\n      \n      </div>\n              \n      <div>\n          <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n          <button mat-raised-button color=\"primary\" (click)=\"callLab()\"type=\"submit\">Submit</button>\n      </div>\n          \n      </mat-step>\n          \n      </mat-horizontal-stepper>\n      </mat-card>  \n  </div>\n  \n  <div *ngIf=\"user.role=='Padmin'\">\n\n    <mat-card>\n        <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n                <mat-step >\n                    \n                    <ng-template matStepLabel>\"Pharmacy Profile Form</ng-template>\n                     <div class=\"sub1\">\n                        <mat-form-field class=\"mat\" color=\"accent\">\n                            <input type=\"text\" matInput [(ngModel)]=\"pharmacy.pfirstname\" placeholder=\"Firstname\"  >\n                          </mat-form-field>\n                         \n                        <mat-form-field color=\"accent\" >\n                            <input  type=\"text\" matInput  [(ngModel)]=\"pharmacy.plastname\" placeholder=\"Lastname\" >\n                        </mat-form-field>\n                 </div>\n                     <div class=\"sub2\">\n                         \n                        <mat-form-field  class=\"mat\" color=\"accent\">\n                            <input matInput [(ngModel)]=\"pharmacy.pemail\" placeholder=\"Email\" >\n                          </mat-form-field>\n                        \n                    </div>\n                     <div  class=\"sub1\">\n                         <label for=\"file\">Please Upload Your Profile</label>\n                          <input type=\"file\" (change)=\"handleFileSelect($event)\">\n                          </div>\n                          <div class=\"sub2\">\n                          <mat-form-field color=\"accent\">\n                          <input matInput [ngModel]=\"pic\" placeholder=\"Upload picture\">\n                        </mat-form-field>\n                          </div>\n                  \n                        <div class=\"sub2\">\n                                <mat-form-field color=\"accent\" >\n                                        <input matInput #input maxlength=\"10\"  [(ngModel)]=\"pharmacy.pmobile\" placeholder=\"Mobile\">\n                                       </mat-form-field>\n                            \n                            \n                        </div>\n                     \n                        <div class=\"sub1\">\n                            \n                           \n                        </div>\n                  \n                    <div class=\"sub4\">\n                        <div class=\"sub1\">\n                            <mat-form-field color=\"accent\">\n                                <textarea matInput [(ngModel)]=\"pharmacy.paddress\" placeholder=\"Address\" ></textarea>\n                            </mat-form-field>\n                            </div>\n                            <div class=\"sub2\">\n                                <mat-form-field>\n                                    <input type=\"text\" placeholder=\"Area\" aria-label=\"Number\"   [(ngModel)]=\"pharmacy.parea\" matInput [formControl]=\"Control2\" [matAutocomplete]=\"auto3\">\n                                    <mat-autocomplete #auto3=\"matAutocomplete\">\n                                      <mat-option *ngFor=\"let area of filteredareas | async\" [value]=\"area\">\n                                        {{ area }}\n                                      </mat-option>\n                                    </mat-autocomplete>\n                                  </mat-form-field>\n                          </div>\n                      <div class=\"sub1\" >\n                            <mat-form-field class=\"mat\">\n                                    <input type=\"text\" placeholder=\"City\" aria-label=\"Number\" [(ngModel)]=\"pharmacy.pcity\" matInput [formControl]=\"myControl1\" [matAutocomplete]=\"auto\">\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\n                                      <mat-option *ngFor=\"let city of filteredcities | async\" [value]=\"city\">\n                                        {{ city }}\n                                      </mat-option>\n                                    </mat-autocomplete>\n                                  </mat-form-field>\n                                  <mat-form-field >\n                                        <input type=\"text\" placeholder=\"State\" aria-label=\"Number\"  [(ngModel)]=\"pharmacy.pstate\" matInput [formControl]=\"Control1\" [matAutocomplete]=\"auto1\">\n                                        <mat-autocomplete #auto1=\"matAutocomplete\">\n                                          <mat-option *ngFor=\"let state of filteredstates | async\" [value]=\"state\">\n                                            {{ state }}\n                                          </mat-option>\n                                        </mat-autocomplete>\n                                      </mat-form-field>\n                        \n                      </div>\n                      <div class=\"sub1\">\n                          \n                                      <mat-form-field class=\"mat\">\n                                            <input type=\"text\" placeholder=\"Country\" aria-label=\"Number\"  [(ngModel)]=\"pharmacy.pcountry\" matInput [formControl]=\"Control3\" [matAutocomplete]=\"auto4\">\n                                            <mat-autocomplete #auto4=\"matAutocomplete\">\n                                              <mat-option *ngFor=\"let country of filteredcountries | async\" [value]=\"country\">\n                                                {{ country }}\n                                              </mat-option>\n                                            </mat-autocomplete>\n                                          </mat-form-field>\n                                  <mat-form-field color=\"accent\" >\n                                        <input matInput #input maxlength=\"6\"  [(ngModel)]=\"pharmacy.ppincode\" placeholder=\"PinCode\">\n                                       </mat-form-field>\n                                \n                                </div>\n                                <div>\n                                    <button  mat-raised-button color=\"primary\" matStepperNext>Next</button>\n                                    \n                                  </div>\n                            </div>\n                         \n                          \n                           \n            \n                        </mat-step>\n                        \n                           <mat-step >\n                    \n                                <ng-template matStepLabel>\"Pharmacy Proffession Form\"</ng-template>\n                      \n                          \n                            <div class=\"sub1\">\n                              <mat-form-field class=\"mat\" color=\"accent\">\n                                <input matInput  [(ngModel)]=\"pharmacy.peducationdetails\"placeholder=\"Education Details\">\n                              </mat-form-field>\n                              <mat-form-field color=\"accent\">\n                                <input matInput type=\"number\"[(ngModel)]=\"pharmacy.pcertificateno\" placeholder=\"Certificate No\" >\n                              </mat-form-field>\n                        </div>\n                        <div class=\"sub1\">\n                            <mat-form-field class=\"mat\"color=\"accent\">\n                                <mat-select placeholder=\"Specialization\" [(value)]=\"pharmacy.pspecialization\" >\n                                    <mat-option value=\"Dentist\">Dentist</mat-option>\n                                    <mat-option value=\"Cardiologist\">Cardiologist</mat-option>\n                                    <mat-option value=\"Opthalmologist\">Opthalmologist</mat-option>\n                                    <mat-option value=\"pediatrician\">pediatrician</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                          <mat-form-field color=\"accent\" >\n                             <input matInput type=\"number\" [(ngModel)]=\"pharmacy.pregistrationno\" placeholder=\"Registration No\">\n                          </mat-form-field>\n                        </div>\n                        <div class=\"sub2\">\n                                <mat-form-field class=\"mat\" color=\"accent\">\n                                   <input matInput  [(ngModel)]=\"pharmacy.pyearofexperience\" placeholder=\"Year of Experience\" >\n                                </mat-form-field>\n                                </div>\n                         <div>\n                                <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n                               <button mat-raised-button color=\"primary\" (click)=\"callPhar()\"type=\"submit\">Submit</button>\n                         </div>\n                   </mat-step>\n                </mat-horizontal-stepper>\n            </mat-card>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.myControl1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.Control1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.Control2 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.Control3 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.user = {};
        this.options = [];
        this.option1 = [];
        this.show1 = false;
        this.areas = [
            "Annanagar",
            "Ambattur",
            "Avadi",
            "Mogappair",
            "Mylopore",
            "Vadapalani",
            "Tambaram",
            "Koyembedu"
        ];
        this.cities = [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Vellore",
            "Thanjavur",
            "Kanchipuram"
        ];
        this.states = [
            "Andra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Orissa",
            "Punjab",
            "Puducherry",
            "Sikkim",
            "Tamil Nadu",
            "Uttaranchal",
            "West Bengal"
        ];
        this.countries = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia",
            "Bosnia",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cambodia",
            "Cameroon",
            "Central African",
            "Democratic",
            "Denmark",
            "Egypt",
            "Ethiopia",
            "Faroe Islands",
            "France",
            "Gabon",
            "Georgia",
            "Germany",
            "Greece",
            "Haiti",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Japan",
            "Kenya",
            "Liberia",
            "Libya",
            "Madagascar",
            "Malaysia",
            "Mexico",
            "Mongolia",
            "Myanmar",
            "Nepal",
            "Netherlands",
            "Nigeria",
            "Niue",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Philippines",
            "Poland",
            "Portugal",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon",
            "South Africa",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Togo",
            "Turkey",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United",
            "United States of America",
            "Zambia",
            "Zimbabwe"
        ];
        this.firstname = "";
        this.lastname = "";
        this.relationship = "";
        this.photo = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.mobile = "";
        this.email = "";
        this.bloodgroup = "";
        this.pincode = "";
        this.gender = "";
        this.dob = "";
        this.insuranceprovidername = "";
        this.policyholdername = "";
        this.policyno = "";
        this.policyissuancedate = "";
        this.height = "";
        this.weight = "";
        this.allergic_to = "";
        this.smoke = "";
        this.tobacco = "";
        this.alcohol = "";
        this.myControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.control = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.dfirstname = "";
        this.dlastname = "";
        this.demail = "";
        this.dphoto = "";
        this.daadharnumber = "";
        this.dmobile = "";
        this.daltmobile = "";
        this.daddress = "";
        this.darea = "";
        this.dcity = "";
        this.dstate = "";
        this.dcountry = "";
        this.dpincode = "";
        this.deducationdetails = "";
        this.dcertificateno = "";
        this.dspecialization = "";
        this.dspecialist = "";
        this.ddutyschedule = "";
        this.dtimeschedule = "";
        this.dregistrationno = "";
        this.dyearsofexperience = "";
        this.doctor = { "dfirstname": "", "dlastname": "", "dphoto": "", "dpic": "", "demail": "", "daadharnumber": "", "darea": "", "dmobile": "", "daltmobile": "", "educationdetails": "", "dcertificateno": "",
            "dspecialization": "", "daddress": "", "dcity": "", "dstate": "", "dcountry": "", "dpincode": "", "dspecialist": "", "ddutyschedule": "", "dtimeschedule": "",
            "dregistrationno": "", "dyearsofexperience": "" };
        this.lfirstname = "";
        this.llastname = "";
        this.lemail = "";
        this.lphoto = "";
        this.lphone = "";
        this.lalternateno = "";
        this.lbloodgroup = "";
        this.ldob = "";
        this.lgender = "";
        this.lmaritalstatus = "";
        this.laddress = "";
        this.larea = "";
        this.lcity = "";
        this.lstate = "";
        this.lcountry = "";
        this.lpincode = "";
        this.leducationdetails = "";
        this.lcertificateno = "";
        this.lspecialist = "";
        this.ldutyschedule = "";
        this.ltimeschedule = "";
        this.lregistrationno = "";
        this.lyearsofexperience = "";
        this.ltimeslot = "";
        this.lab = { "lfirstname": "", "llastname": "", "lphoto": "", "lemail": "", "lphone": "", "lalternateno": "", "lbloodgroup": "", "ldob": "", "lgender": "", "lmaritalstatus": "", "laddress": "", "larea": "", "lcity ": "", "lstate": "", "lcountry": "",
            "lpincode": "", "leducationdetails": "", "lcertificateno": "", "lspecialist": "", "ldutyschedule": "", "ltimeschedule": "", "lregistrationno": "", "lyearsofexperience": "", "ltimeslot": "" };
        this.User = { "firstname": "", "photo": "", "lastname": "", "dob": "", "relationship": "", "address": "", "city": "", "state": "", "country": "", "mobile": "", "email": "", "bloodgroup": "", "pincode": "", "gender": "",
            "insuranceprovidername": "", "policyholdername": "", "policyno": "", " policyissuancedate": "", "height": "", "weight": "", "allergicto": "",
            "smoke": "", "tobacco": "", "alcohol": "" };
        this.pfirstname = "";
        this.plastname = "";
        this.pemail = "";
        this.pphoto = "";
        this.pmobile = "";
        this.paddress = "";
        this.parea = "";
        this.pcity = "";
        this.pstate = "";
        this.pcountry = "";
        this.ppincode = "";
        this.peducationdetails = "";
        this.pspecialization = "";
        this.pcertificateno = "";
        this.pregistrationno = "";
        this.pyearofexperience = "";
        this.pharmacy = { "pfirstname": "", "plastname": "", "pphoto": "", "pemail": "", "pmobile": "", "paddress": "", "parea": "", "pcity": "", "pstate": "", "pcountry": "", "ppincode": "", "peducationdetails": "", "pspecialization": "", "pcertificateno": "", "pregistrationno": "", "pyearofexperience": "" };
        this.foods = [
            { value: 'self', viewValue: 'self' },
            { value: 'spouse', viewValue: 'spouse' },
            { value: 'son', viewValue: 'son' },
            { value: 'daughter', viewValue: 'daughter' },
            { value: 'father', viewValue: 'Father' },
            { value: 'mother', viewValue: 'Mother' },
            { value: 'brother', viewValue: 'Brother' },
            { value: 'sister', viewValue: 'Sister' },
            { value: 'grandfather', viewValue: 'grandfather' },
            { value: 'grandmother', viewValue: 'grandmother' },
            { value: 'guardian', viewValue: 'guardian' },
            { value: 'others', viewValue: 'others' },
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.currentUser;
        this.profId = this.auth.currentUser._id;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
        this.filteredOption1 = this.control.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter1(val); }));
        this.filteredcities = this.myControl1.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter2(val); }));
        this.filteredstates = this.Control1.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter3(val); }));
        this.filteredareas = this.Control2.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter4(val); }));
        this.filteredcountries = this.Control3.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter5(val); }));
        this.auth.getProfile(this.profId)
            .subscribe(function (data) { return _this.dprofiles = JSON.parse(JSON.stringify(data)); });
        this.auth.getDocid(this.profId)
            .subscribe(function (data) { return _this.doctor = JSON.parse(JSON.stringify(data)); });
    };
    ProfileComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    ProfileComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.pic = btoa(binaryString);
        this.User.photo = btoa(binaryString);
        this.dpic = btoa(binaryString);
        this.doctor.dphoto = btoa(binaryString);
    };
    ProfileComponent.prototype.call = function () {
        var _this = this;
        this.auth.saveData(this.profId, this.User).subscribe(function () {
            console.log(_this.User);
        });
    };
    ProfileComponent.prototype.callDoc = function () {
        var _this = this;
        this.auth.saveDocid(this.profId, this.doctor).subscribe(function () {
            console.log(_this.doctor);
        });
    };
    ProfileComponent.prototype.callPhar = function () {
        var _this = this;
        this.auth.savePharid(this.profId, this.pharmacy).subscribe(function () {
            console.log(_this.pharmacy);
        });
    };
    ProfileComponent.prototype.callLab = function () {
        var _this = this;
        this.auth.saveLabid(this.profId, this.lab).subscribe(function () {
            console.log(_this.lab);
        });
    };
    ProfileComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.filter1 = function (val) {
        return this.option1.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.filter2 = function (val) {
        return this.cities.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.filter3 = function (val) {
        return this.states.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.filter4 = function (val) {
        return this.areas.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.filter5 = function (val) {
        return this.countries.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    ProfileComponent.prototype.show = function () {
        this.show1 = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\r\n    max-width: 400px;\r\n    margin: auto;\r\n    text-align: center;\r\n    transition: all 1s;\r\n    padding: 50px 16px;\r\n    font-family:impact;\r\n}\r\n.space{\r\n    padding-right: 20px;\r\n}\r\nmat-form-field,button{\r\n    width:100%;\r\n    margin-bottom: 5px;\r\n    font-family:impact;\r\n}\r\n::ng-deep .mat-tab-labels{\r\n    -ms-flex-pack: center;\r\n        justify-content: center; /* align items in Main Axis */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <h1>SIGNUP</h1>\n  <span class=\"space\"></span>\n  <mat-form-field floatLabel=\"never\">\n          <input type=\"text\" placeholder=\"Role\" formControlName=\"role\" matInput [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n              {{ option }}\n            </mat-option>\n          </mat-autocomplete>\n  </mat-form-field>\n  <mat-form-field floatLabel=\"never\">\n    <input matInput placeholder=\"Email\" formControlName=\"email\" >\n  </mat-form-field>\n  <mat-form-field floatLabel=\"never\">\n    <input matInput placeholder=\"username\" formControlName=\"username\" >\n  </mat-form-field>\n  <mat-form-field floatLabel=\"never\" class=\"fullwidth\" color=\"accent\">\n      \n          <input matInput placeholder=\"password\" type=\"password\" name=\"password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" />\n          <mat-icon  matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n  <span class=\"space\"></span>\n  <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n  <br>\n  <button mat-raised-button routerLink=\"/home\">Back</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast__ = __webpack_require__("../../../../../src/app/services/toast.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, toast, router) {
        this.fb = fb;
        this.userService = userService;
        this.toast = toast;
        this.router = router;
        this.hide = true;
        this.options = ['Doctor', 'Patient', 'Hospital', 'Hadmin', 'Ladmin', 'Sadmin', 'Padmin', 'Pharm', 'Lab', 'PharmAssist', 'LabAssisst'];
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[a-zA-Z0-9_-\\s]*')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(6)
        ]);
        this.role = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            username: this.username,
            password: this.password,
            role: this.role,
            email: this.email
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.open('Thanks to Register', 'success');
            setTimeout(function () {
                console.log(res);
                _this.router.navigate(['/login']);
            }, 1800);
        }, function (error) { return _this.toast.open('Registration Failed', 'danger'); });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lab_lab_component__ = __webpack_require__("../../../../../src/app/lab/lab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hospital_hospital_component__ = __webpack_require__("../../../../../src/app/hospital/hospital.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pharm_pharm_component__ = __webpack_require__("../../../../../src/app/pharm/pharm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewprofile_viewprofile_component__ = __webpack_require__("../../../../../src/app/viewprofile/viewprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__myprofile_myprofile_component__ = __webpack_require__("../../../../../src/app/myprofile/myprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__diagnosis_diagnosis_component__ = __webpack_require__("../../../../../src/app/diagnosis/diagnosis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__ = __webpack_require__("../../../../../src/app/services/auth-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_sadmin__ = __webpack_require__("../../../../../src/app/services/sadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__diaview_diaview_component__ = __webpack_require__("../../../../../src/app/diaview/diaview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var route = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_5__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'myprofile', component: __WEBPACK_IMPORTED_MODULE_12__myprofile_myprofile_component__["a" /* MyprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_17__history_history_component__["a" /* HistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'diaview/:id', component: __WEBPACK_IMPORTED_MODULE_18__diaview_diaview_component__["a" /* DiaviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'diagnosis', component: __WEBPACK_IMPORTED_MODULE_13__diagnosis_diagnosis_component__["a" /* DiagnosisComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'viewprofile/:id', component: __WEBPACK_IMPORTED_MODULE_11__viewprofile_viewprofile_component__["a" /* ViewprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'editprofile/:id', component: __WEBPACK_IMPORTED_MODULE_14__editprofile_editprofile_component__["a" /* EditprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'lab', component: __WEBPACK_IMPORTED_MODULE_7__lab_lab_component__["a" /* LabComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_sadmin__["a" /* SuperAdmin */]] },
    { path: 'pharmacy', component: __WEBPACK_IMPORTED_MODULE_9__pharm_pharm_component__["a" /* PharmComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_sadmin__["a" /* SuperAdmin */]] },
    { path: 'hospital', component: __WEBPACK_IMPORTED_MODULE_8__hospital_hospital_component__["a" /* HospitalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_sadmin__["a" /* SuperAdmin */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(route)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/Doctor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Doctor = (function () {
    function Doctor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    Doctor.prototype.canActivate = function () {
        return this.auth.isDoctor;
    };
    Doctor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Doctor);
    return Doctor;
}());



/***/ }),

/***/ "../../../../../src/app/services/Hadmin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HospitalAdmin = (function () {
    function HospitalAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HospitalAdmin.prototype.canActivate = function () {
        return this.auth.isHadmin;
    };
    HospitalAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HospitalAdmin);
    return HospitalAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/services/Hospital.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hospital; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Hospital = (function () {
    function Hospital(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    Hospital.prototype.canActivate = function () {
        return this.auth.isHospital;
    };
    Hospital = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Hospital);
    return Hospital;
}());



/***/ }),

/***/ "../../../../../src/app/services/Lab.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Lab = (function () {
    function Lab(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    Lab.prototype.canActivate = function () {
        return this.auth.isLab;
    };
    Lab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Lab);
    return Lab;
}());



/***/ }),

/***/ "../../../../../src/app/services/Labassist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabAssist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabAssist = (function () {
    function LabAssist(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LabAssist.prototype.canActivate = function () {
        return this.auth.isLabAssist;
    };
    LabAssist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LabAssist);
    return LabAssist;
}());



/***/ }),

/***/ "../../../../../src/app/services/Ladmin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabAdmin = (function () {
    function LabAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LabAdmin.prototype.canActivate = function () {
        return this.auth.isLadmin;
    };
    LabAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LabAdmin);
    return LabAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/services/Padmin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PharmacyAdmin = (function () {
    function PharmacyAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    PharmacyAdmin.prototype.canActivate = function () {
        return this.auth.isPadmin;
    };
    PharmacyAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PharmacyAdmin);
    return PharmacyAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/services/Patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Patient = (function () {
    function Patient(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    Patient.prototype.canActivate = function () {
        return this.auth.isPatient;
    };
    Patient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Patient);
    return Patient;
}());



/***/ }),

/***/ "../../../../../src/app/services/Pharm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pharmacy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pharmacy = (function () {
    function Pharmacy(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    Pharmacy.prototype.canActivate = function () {
        return this.auth.isPharm;
    };
    Pharmacy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Pharmacy);
    return Pharmacy;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    AuthGuardLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardLogin);
    return AuthGuardLogin;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_model__ = __webpack_require__("../../../../../src/app/services/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(userService, router, jwtHelper, http) {
        this.userService = userService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.http = http;
        this.loggedIn = false;
        this.isSadmin = false;
        this.isHadmin = false;
        this.isPadmin = false;
        this.isLadmin = false;
        this.isDoctor = false;
        this.isHospital = false;
        this.isLab = false;
        this.isPharm = false;
        this.isLabAssist = false;
        this.isPatient = false;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_5__user_model__["a" /* User */]();
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.getToken = function () {
        return this.getoken = localStorage.getItem('token');
    };
    AuthService.prototype.login = function (usernameAndPassword) {
        var _this = this;
        return this.userService.login(usernameAndPassword).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isSadmin = false;
        this.isHadmin = false;
        this.isPadmin = false;
        this.isLadmin = false;
        this.isDoctor = false;
        this.isHospital = false;
        this.isLab = false;
        this.isPharm = false;
        this.isLabAssist = false;
        this.isPatient = false;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_5__user_model__["a" /* User */]();
        this.router.navigate(['/home']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'Doctor' ? this.isDoctor = true : this.isDoctor = false;
        decodedUser.role === 'Hadmin' ? this.isHadmin = true : this.isHadmin = false;
        decodedUser.role === 'Hospital' ? this.isHospital = true : this.isHospital = false;
        decodedUser.role === 'Lab' ? this.isLab = true : this.isLab = false;
        decodedUser.role === 'LabAssist' ? this.isLabAssist = true : this.isLabAssist = false;
        decodedUser.role === 'Ladmin' ? this.isLadmin = true : this.isLadmin = false;
        decodedUser.role === 'Padmin' ? this.isPadmin = true : this.isPadmin = false;
        decodedUser.role === 'Patient' ? this.isPatient = true : this.isPatient = false;
        decodedUser.role === 'Pharm' ? this.isPharm = true : this.isPharm = false;
        decodedUser.role === 'Sadmin' ? this.isSadmin = true : this.isSadmin = false;
        delete decodedUser.role;
    };
    AuthService.prototype.saveData = function (id, prof) {
        return this.http.post("http://localhost:3000/patient/" + id + "/profiles", prof).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function (id) {
        return this.http.get("http://localhost:3000/patient/" + id + "/profiles").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfId = function (id1, id2) {
        return this.http.get("http://localhost:3000/patient/" + id1 + "/profiles/" + id2).map(function (res) { return res.json(); });
    };
    AuthService.prototype.profEdit = function (id1, id2, data) {
        return this.http.put("http://localhost:3000/patient/" + id1 + "/profiles/" + id2, data);
    };
    AuthService.prototype.profdelete = function (id1, id2) {
        return this.http.delete("http://localhost:3000/patient/" + id1 + "/profiles/" + id2);
    };
    AuthService.prototype.showProf = function (id) {
        return this.http.get("http://localhost:3000/patient/" + id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPhar = function () {
        return this.http.get("http://localhost:3000/admin/pharm").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPharid = function (id) {
        return this.http.get("http://localhost:3000/admin/pharm/" + id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.savePhar = function (doc) {
        return this.http.post("http://localhost:3000/admin/pharm", doc).map(function (res) { return res.json(); });
    };
    AuthService.prototype.savePharid = function (id, doc) {
        return this.http.put("http://localhost:3000/admin/pharm/" + id, doc);
    };
    AuthService.prototype.getDoc = function () {
        return this.http.get("http://localhost:3000/doctor").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDocid = function (id) {
        return this.http.get("http://localhost:3000/doctor/" + id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveDoc = function (doc) {
        return this.http.post("http://localhost:3000/doctor", doc).map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveDocid = function (id, doc) {
        return this.http.put("http://localhost:3000/doctor/" + id, doc);
    };
    AuthService.prototype.getLab = function () {
        return this.http.get("http://localhost:3000/admin/lab").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getLabid = function (id) {
        return this.http.get("http://localhost:3000/admin/lab/" + id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveLab = function (doc) {
        return this.http.post("http://localhost:3000/admin/lab", doc).map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveLabid = function (id, doc) {
        return this.http.put("http://localhost:3000/admin/lab/" + id, doc);
    };
    AuthService.prototype.saveDiag = function (id1, id2, user) {
        return this.http.post("http://localhost:3000/doctor/" + id1 + "/patient/" + id2 + "/prescription/", user);
    };
    AuthService.prototype.getPro = function (id) {
        return this.http.get("http://localhost:3000/doctor/" + id + "/patient").map(function (res) { return res.json(); });
    };
    AuthService.prototype.profilecount = function (id) {
        return this.http.get("http://localhost:3000/patient/" + id + "/profiles/count").map(function (res) { return res.json(); });
    };
    AuthService.prototype.pharmcount = function () {
        return this.http.get("http://localhost:3000/prescriptions/count").map(function (res) { return res.json(); });
    };
    AuthService.prototype.patcount = function () {
        return this.http.get("http://localhost:3000/patient/count").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDiag = function () {
        return this.http.get("http://localhost:3000/doctor/prescription").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDocHis = function (id) {
        return this.http.get("http://localhost:3000/doctor/" + id + "/prescription").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDiagId = function (id1, id2) {
        return this.http.get("http://localhost:3000/doctor/" + id1 + "/prescription/" + id2).map(function (res) { return res.json(); });
    };
    AuthService.prototype.diagfdelete = function (id) {
        return this.http.delete("http://localhost:3000/doctors/prescriptions/" + id);
    };
    AuthService.prototype.search = function (data) {
        return this.http.post("http://localhost:3000/doctors/prescriptions/search", data);
    };
    AuthService.prototype.postdocpatid = function (data) {
        return this.http.post("http://localhost:3000/doctors/diagnose", data);
    };
    AuthService.prototype.getpatdiaid = function (id) {
        return this.http.get("http://localhost:3000/patient/" + id + "/prescription").map(function (res) { return res.json(); });
    };
    AuthService.prototype.getpharmid = function (id) {
        return this.http.get("http://localhost:3000/patients/" + id + "/padmin").map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sadmin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuperAdmin = (function () {
    function SuperAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SuperAdmin.prototype.canActivate = function () {
        return this.auth.isSadmin;
    };
    SuperAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SuperAdmin);
    return SuperAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/services/toast.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastService.prototype.open = function (message, cssClass) {
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSnackBarConfig */]();
        config.duration = 2000;
        config.extraClasses = [cssClass];
        this.snackBar.open(message, 'x', config);
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    UserService.prototype.register = function (user) {
        return this.http.post(this.url + '/register', user);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post(this.url + '/login', credentials);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/viewprofile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    ProfileService.prototype.showProf = function (id) {
        return this.http.get("http://localhost:3000/patient/" + id);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/viewprofile/viewprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    margin-top:20px;\r\n }\r\n .card.hovercard {\r\n position: relative;\r\n width:60%;\r\n margin-top:100px;\r\n overflow: hidden;\r\n margin-left:300px;\r\n\r\n }\r\n \r\n .card.hovercard .cardheader {\r\n \r\n background-size: cover;\r\n height: 105px;\r\n }\r\n \r\n .card.hovercard .avatar {\r\n float:right;\r\n top: -60px;\r\n margin-bottom: -50px;\r\n }\r\n \r\n .card.hovercard .avatar img {\r\n width: 100px;\r\n height: 100px;\r\n max-width: 100px;\r\n max-height: 100px;\r\n border-radius: 50%;\r\n border: 5px solid rgba(255,255,255,0.5);\r\n }\r\n \r\n h2{\r\n float:left;\r\n margin-top:30px;\r\n font-family: Times New Roman;\r\n \r\n }\r\n h3{\r\n   text-align: center;\r\n   margin-left:-500px;\r\n   font-size:30px;\r\n \r\n  }\r\n span{\r\n color:#ff5722;\r\n }\r\n .table{\r\n margin-top:40px;\r\n width:650px;\r\n \r\n }\r\n .table thead th{\r\n color:white;\r\n }\r\n thead{\r\n background-color:#1a237e;\r\n color:white;\r\n }\r\n .line{\r\n border:1px solid #1a237e;\r\n margin-top:33px;\r\n }\r\n table.table-bordered{\r\n border:1px solid #1a237e;\r\n margin-top:20px;\r\n }\r\n table.table-bordered > thead > tr > th{\r\n border:1px solid #1a237e;\r\n }\r\n table.table-bordered > tbody > tr > td{\r\n border:1px solid #1a237e;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewprofile/viewprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.role=='Sadmin'\">\n  Hello {{user.username}}, welcome SuperAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Hadmin'\">\n  Hello {{user.username}}, welcome HospitalAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Ladmin'\">\n  Hello {{user.username}}, welcome LabAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Padmin'\">\n  Hello {{user.username}}, welcome PharmAdmin.\n  </div>\n  \n  <div *ngIf=\"user.role=='Patient'\">\n  Hello {{user.username}}, welcome Doctor.\n  </div>\n  \n  <mat-toolbar>Relation:{{pat.relationship}}</mat-toolbar>\n  <mat-card class=\"card hovercard\">\n      <div class=\"cardheader\">\n          <h2> PATIENT PROFILE DETAILS</h2>\n          <div class=\"avatar\">\n      \n          <img width=\"100\" height=\"100\" [src]=\"'data:image/jpg;base64,'+pat.photo\">\n          <h4><span><strong>{{pat.firstname}}</strong></span></h4>\n        </div>\n    </div>\n    <div class=\"line\"></div>      \n    <div class=\"container\">\n        <table class=\"table table-bordered table-hover\">\n            <colgroup>\n              <col span=\"1\" style=\"width: 25%;\">\n              <col span=\"1\" style=\"width: 75%;\">\n            </colgroup>\n            <tr>\n              <td>Firstname:</td>\n             <td>{{pat.firstname}}</td>\n         </tr>\n       \n         <tr>\n           <td>Lastname:</td>\n             <td>{{pat.lastname}}</td>\n           </tr>\n         \n           <tr>\n           <td>Email:</td>\n           <td>{{pat.email}}</td>\n           </tr>\n       \n          <tr>\n          <td>Mobile number:</td>\n          <td>{{pat.mobile}}</td>\n           </tr>\n           \n          <tr>\n              <td>Date of birth:</td>\n              <td>{{pat.dob | date: 'dd'}}/{{pat.dob | date: 'MM'}}/{{pat.dob | date: 'yyyy'}}</td>\n               </tr>\n          \n           <tr>\n           <td>Blood group:</td>\n           <td>{{pat.bloodgroup}}</td>\n           </tr>\n      \n          <tr>\n          <td>Gender:</td>\n          <td>{{pat.gender}}</td>\n           </tr>\n          \n           <tr>\n            <td>Address:</td>\n           <td>{{pat.address}}</td>\n       </tr>\n  \n       <tr>\n         <td>City:</td>\n           <td>{{pat.city}}</td>\n         </tr>\n      \n         <tr>\n         <td>State:</td>\n         <td>{{pat.state}}</td>\n         </tr>\n     \n        <tr>\n        <td>Country:</td>\n        <td>{{pat.country}}</td>\n         </tr>\n    \n        <tr>\n        <td>Pincode:</td>\n        <td>{{pat.pincode}}</td>\n         </tr>\n         </table>\n    </div>\n   \n    <div class=\"container\">\n     <h3>Personal details</h3>\n        <table class=\"table  table-bordered table-hover\">                               \n            <colgroup>\n              <col span=\"1\" style=\"width: 25%;\">\n              <col span=\"1\" style=\"width: 75%;\">\n            </colgroup>   \n          <tr>\n            <td>Height (ft/cms):</td>\n           <td>{{pat.height}}</td>\n       </tr>\n     \n       <tr>\n         <td>Weight ( kg/lbs):</td>\n           <td>{{pat.weight}}</td>\n         </tr>\n        \n         <tr>\n         <td>Allergic To:</td>\n         <td>{{pat.allergicto}}</td>\n         </tr>\n        \n        <tr>\n        <td>Do you smoke?</td>\n        <td>{{pat.smoke}}</td>\n         </tr>\n         <tr>\n          <td>Do you use tobacco?</td>\n         <td>{{pat.tobacco}}</td>\n     </tr>\n     \n     <tr>\n       <td>Do you drink alcohol?</td>\n         <td>{{pat.alcohol}}</td>\n       </tr>\n      \n       <tr>\n       <td>Insurance Provider Name:</td>\n       <td>{{pat.insuranceprovidername}}</td>\n       </tr>\n   \n      <tr>\n      <td>Policy holder name:</td>\n      <td>{{pat.policyholdername}}</td>\n       </tr>\n       \n      <tr>\n      <td>Policy No:</td>\n      <td>{{pat.policyno}}</td>\n       </tr>\n    \n      <tr>\n      <td>Policy issuance date:</td>\n      <td>{{pat.policyissuancedate | date: 'dd'}}/{{pat.policyissuancedate | date: 'MM'}}/{{pat.policyissuancedate | date: 'yyyy'}}</td>\n       </tr>\n         </table>\n    </div>\n</mat-card>\n  \n  <div *ngIf=\"user.role=='Lab'\">\n  Hello {{user.username}}, welcome Lab.\n  </div>\n  \n  <div *ngIf=\"user.role=='LabAssist'\">\n  Hello {{user.username}}, welcome LabAssist.\n  </div>\n  \n  <div *ngIf=\"user.role=='Pharmacy'\">\n  Hello {{user.username}}, welcome Pharmacy.\n  </div>\n\n  \n"

/***/ }),

/***/ "../../../../../src/app/viewprofile/viewprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/viewprofile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewprofileComponent = (function () {
    function ViewprofileComponent(auth, router, service) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.user = {};
        this.photo = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */];
        this.id = this.router.snapshot.params['id'];
    }
    ViewprofileComponent.prototype.ngOnInit = function () {
        this.getData();
        this.profId = this.auth.currentUser._id;
    };
    ViewprofileComponent.prototype.getData = function () {
        var _this = this;
        this.auth.getProfId(this.profId, this.id).subscribe(function (res) {
            _this.pat = res;
            console.log(_this.pat);
        });
    };
    ViewprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viewprofile',
            template: __webpack_require__("../../../../../src/app/viewprofile/viewprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewprofile/viewprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]])
    ], ViewprofileComponent);
    return ViewprofileComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatStepperModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatStepperModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map