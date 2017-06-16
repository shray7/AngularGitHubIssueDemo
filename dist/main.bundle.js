webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    margin: 1em;\n}\n\n.border{\n    border: 0.1mm solid black;\n    margin: 0.5em;\n}\n\nnav{\n    background-color: dodgerblue;\n    color: white;\n}\n\na{\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <p>\n  <a href=\"https://github.com/angular/angular/issues\" class=\"navbar-text\">Issues</a> |\n  <a href=\"https://github.com/shray7/AngularGitHubIssueDemo\" class=\"navbar-text\">GitHub</a> |\n  <a href=\"https://angular.io/guide/displaying-data\" class=\"navbar-text\">Angular</a>\n  </p>\n</nav>\n<div>\n  <app-issue-list></app-issue-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__issue_issue_component__ = __webpack_require__("../../../../../src/app/issue/issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__issue_list_issue_list_component__ = __webpack_require__("../../../../../src/app/issue-list/issue-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_http_git_service__ = __webpack_require__("../../../../../src/app/http-git.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__issue_issue_component__["a" /* IssueComponent */],
            __WEBPACK_IMPORTED_MODULE_5__issue_list_issue_list_component__["a" /* IssueListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_http_git_service__["a" /* HttpGitService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/http-git.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpGitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpGitService = (function () {
    function HttpGitService(http) {
        this.http = http;
        this.server_url = 'https://api.github.com/repos/angular/angular/issues?since=';
        this.data = '';
    }
    HttpGitService.prototype.FetchData = function () {
        return this.loaddata();
    };
    HttpGitService.prototype.loaddata = function () {
        // 2017-06-15T15:56:00Z
        var date = new Date();
        date.setDate(date.getDate() - 7);
        this.server_url = this.server_url + date.toISOString();
        console.log(this.server_url);
        return this.http.get(this.server_url) // define a variable server_url to assign the requested url
            .map(this.extractData);
    };
    HttpGitService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        this.data = res.json();
        return this.data || 'nope';
    };
    return HttpGitService;
}());
HttpGitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpGitService);

var _a;
//# sourceMappingURL=http-git.service.js.map

/***/ }),

/***/ "../../../../../src/app/issue-list/issue-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Racing+Sans+One);", ""]);

// module
exports.push([module.i, "div {\n    margin: 1em;\n}\n\n.border{\n    border: 0.1mm solid black;\n    margin: 0.5em;\n}\n\n.collapseBtn {\n     margin-top: 2px;\n     margin-right: 2px;\n     position:absolute;\n     top:0;\n     right:0;\n     border-radius: 5pt;\n }\n/*     \nhttps://bootsnipp.com/snippets/BDk3p\n*/\n\nbody {\n    background: #EEE;\n}\n    \n.bg_load {\n    position: fixed;\n\tleft: 0px;\n\ttop: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #EEE;\n}\n\n.wrapper {\n    /* Size and position */\n\tfont-size: 25px; /* 1em */\n    width: 8em;\n\theight: 8em;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    margin-top: -100px;\n    margin-left: -100px;\n\n    /* Styles */\n\tborder-radius: 50%;\n    background: rgba(255,255,255,0.1);\n    border: 1em dashed rgba(138,189,195,0.5);\n    box-shadow: \n        inset 0 0 2em rgba(255,255,255,0.3),\n        0 0 0 0.7em rgba(255,255,255,0.3);\n    -webkit-animation: rota 3.5s linear infinite;\n            animation: rota 3.5s linear infinite;\n\n    /* Font styles */\n    font-family: 'Racing Sans One', sans-serif;\n    \n    color: #444;\n    text-align: center;\n    text-transform: uppercase;\n    text-shadow: 0 .04em rgba(255,255,255,0.9);\n    line-height: 6em;\n}\n\n.wrapper:before,\n.wrapper:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    border-radius: inherit;\n    box-shadow: inset 0 0 2em rgba(255,255,255,0.3);\n    border: 1em dashed;\n}\n\n.wrapper:before {\n    border-color: rgba(138,189,195,0.2);\n\ttop: 0; right: 0; bottom: 0; left: 0;\n}\n\n.wrapper:after {\n\tborder-color: rgba(138,189,195,0.4);\n    top: 1em; right: 1em; bottom: 1em; left: 1em; \n}\n\n.wrapper .inner {\n    width: 100%;\n    height: 100%;\n    -webkit-animation: rota 3.5s linear reverse infinite;\n            animation: rota 3.5s linear reverse infinite;\n}\n\n.wrapper span {\n    display: inline-block;\n    -webkit-animation: placeholder 1.5s ease-out infinite;\n            animation: placeholder 1.5s ease-out infinite;\n}\n\n.wrapper span:nth-child(1)  { -webkit-animation-name: loading-1; animation-name: loading-1;  }\n.wrapper span:nth-child(2)  { -webkit-animation-name: loading-2; animation-name: loading-2;  }\n.wrapper span:nth-child(3)  { -webkit-animation-name: loading-3; animation-name: loading-3;  }\n.wrapper span:nth-child(4)  { -webkit-animation-name: loading-4; animation-name: loading-4;  }\n.wrapper span:nth-child(5)  { -webkit-animation-name: loading-5; animation-name: loading-5;  }\n.wrapper span:nth-child(6)  { -webkit-animation-name: loading-6; animation-name: loading-6;  }\n.wrapper span:nth-child(7)  { -webkit-animation-name: loading-7; animation-name: loading-7;  }\n\n@-webkit-keyframes rota {\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes rota {\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@-webkit-keyframes loading-1 {\n    14.28% { opacity: 0.3; }\n}\n\n@keyframes loading-1 {\n    14.28% { opacity: 0.3; }\n}\n\n@-webkit-keyframes loading-2 {\n    28.57% { opacity: 0.3; }\n}\n\n@keyframes loading-2 {\n    28.57% { opacity: 0.3; }\n}\n\n@-webkit-keyframes loading-3 {\n    42.86% { opacity: 0.3; }\n}\n\n@keyframes loading-3 {\n    42.86% { opacity: 0.3; }\n}\n\n@-webkit-keyframes loading-4 {\n    57.14% { opacity: 0.3; }\n}\n\n@keyframes loading-4 {\n    57.14% { opacity: 0.3; }\n}\n\n@-webkit-keyframes loading-5 {\n    71.43% { opacity: 0.3; }\n}\n\n@keyframes loading-5 {\n    71.43% { opacity: 0.3; }\n}\n\n@-webkit-keyframes loading-6 {\n    85.71% { opacity: 0.3; }\n}\n\n@keyframes loading-6 {\n    85.71% { opacity: 0.3; }\n}\n\n@-webkit-keyframes loading-7 {\n    100% { opacity: 0.3; }\n}\n\n@keyframes loading-7 {\n    100% { opacity: 0.3; }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue-list/issue-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let issue of issues\" class=\"card\" style=\"background-color: lightgray\" >\n    <div >\n      <h3> Title : {{issue.title}}</h3>\n    </div>\n    <div style=\"background-color:lightslategrey; border-radius: 5pt; margin:10px;padding:10px;\" >\n      <b>Body</b>:\n      <p [innerHTML]=\"issue.body\"  ></p>\n    </div>\n\n    <div>\n      <b>User Login</b> : {{issue.userLogin}}\n    </div>\n    <div>\n      <b>Assignee Login</b> : {{issue.assigneeLogin}}\n    </div>\n  </div>\n</div>\n<div class=\"wrapper\" *ngIf=\"isItemVisible\">\n    <div class=\"inner\">\n        <span>L</span>\n        <span>o</span>\n        <span>a</span>\n        <span>d</span>\n        <span>i</span>\n        <span>n</span>\n        <span>g</span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/issue-list/issue-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_git_service__ = __webpack_require__("../../../../../src/app/http-git.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issue__ = __webpack_require__("../../../../../src/app/issue.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssueListComponent = (function () {
    function IssueListComponent(httpService) {
        this.httpService = httpService;
        this.isItemVisible = true;
        this.issues = new Array();
    }
    IssueListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    IssueListComponent.prototype.getData = function () {
        var _this = this;
        this.httpService.FetchData().subscribe(function (d) {
            for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                var entry = d_1[_i];
                var issue = new __WEBPACK_IMPORTED_MODULE_2__issue__["a" /* Issue */]();
                issue.title = entry['title'];
                issue.body = entry['body'];
                issue.userLogin = entry['user']['login'];
                if (entry['assignee'] != null) {
                    console.log(entry['assignee']);
                    issue.assigneeLogin = entry['assignee']['login'];
                }
                else {
                    issue.assigneeLogin = 'None';
                }
                _this.issues.push(issue);
            }
        });
        setInterval(function () { return _this.isItemVisible = false; }, 1000);
    };
    return IssueListComponent;
}());
IssueListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-issue-list',
        template: __webpack_require__("../../../../../src/app/issue-list/issue-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue-list/issue-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_git_service__["a" /* HttpGitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_git_service__["a" /* HttpGitService */]) === "function" && _a || Object])
], IssueListComponent);

var _a;
//# sourceMappingURL=issue-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/issue.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue; });
var Issue = (function () {
    function Issue() {
    }
    return Issue;
}());

//# sourceMappingURL=issue.js.map

/***/ }),

/***/ "../../../../../src/app/issue/issue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    margin: 1em;\n}\n\n.border{\n    border: 0.1mm solid black;\n    margin: 0.5em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/issue.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Issue\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/issue/issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssueComponent = (function () {
    function IssueComponent() {
    }
    IssueComponent.prototype.ngOnInit = function () {
    };
    return IssueComponent;
}());
IssueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-issue',
        template: __webpack_require__("../../../../../src/app/issue/issue.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue/issue.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IssueComponent);

//# sourceMappingURL=issue.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map