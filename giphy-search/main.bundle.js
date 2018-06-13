webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html,body{\r\n    background-color: black;\r\n}\r\n\r\nh1{\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n        background: red;\r\n        background: -webkit-gradient(linear, left top, right top, from(violet)  , color-stop(yellow), color-stop(wheat), color-stop(cyan), color-stop(blue), to(violet));\r\n        background: linear-gradient(to right, violet  , yellow, wheat, cyan, blue, violet);\r\n        -webkit-background-clip: text;\r\n        background-clip: text;\r\n        -webkit-text-fill-color: transparent;    \r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body id=\"main\">\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to <span>{{ title }}!</span>\n  </h1>\n<br>\n <app-gif-search></app-gif-search>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Giphy Search';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.getElementById('gif').style.backgroundColor = "black";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gif_search_gif_search_component__ = __webpack_require__("./src/app/gif-search/gif-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__gif_search_gif_search_component__["a" /* GifSearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gif-search/gif-search.component.css":
/***/ (function(module, exports) {

module.exports = "html,body{\r\n    background-color: black;\r\n}\r\n\r\nh1{\r\n    font-family: cursive;\r\n    color:whitesmoke;\r\n    margin-top:-10px;\r\n    text-align: left;\r\n    margin-left: 5%;\r\n}\r\n\r\ninput{\r\n    max-width:80%;\r\n    margin-left:10%;\r\n    height:50px;\r\n    z-index: 1;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 17px;\r\n}\r\n\r\n.btn{\r\n    height:50px;\r\n    width:70px;\r\n    position: relative;\r\n    top:-50px;\r\n    margin-left:75.2%;\r\n    color:black;\r\n    background-color: transparent;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n.btn:hover{\r\n    color:black;\r\n    background-color: red;\r\n    \r\n}\r\n\r\ni{\r\n    font-size: 25px;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\ni:hover{\r\n    -webkit-transform:rotate(360deg);\r\n            transform:rotate(360deg);\r\n}\r\n\r\nimg{\r\n    height:220px;\r\n    width:240px;\r\n    margin:3px;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n\r\n}\r\n\r\nimg:hover{\r\n -webkit-transform:scale(1.1,1.1);\r\n         transform:scale(1.1,1.1);\r\n -webkit-box-shadow:5px 5px 10px black;\r\n         box-shadow:5px 5px 10px black;\r\n}\r\n\r\n.content{\r\n    margin:2%;\r\n    float:top;\r\n}\r\n\r\n.contentDef{\r\n    margin:2%;\r\n    float:top;\r\n}"

/***/ }),

/***/ "./src/app/gif-search/gif-search.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> \n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.13/css/all.css\" integrity=\"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp\" crossorigin=\"anonymous\">\n\n\n<body id=\"gif\">\n<input type=\"search\" #searchTerm class=\"form-control\">\n\n<button type=\"submit\" class=\"btn\"><i class=\"fab fa-searchengin\" (click)='performSearch(searchTerm)'></i></button>\n<h1>{{searchTerm.value}}</h1>\n\n<div id=\"contentDef\">\n    <a *ngFor=\"let g of giphiesDef\" [href]='g.images.original.url'><img src=\"{{g.images.original.url}}\"></a>\n  </div>\n<div class=\"content\">\n  <a *ngFor=\"let g of giphies\" [href]='g.images.original.url'><img src=\"{{g.images.original.url}}\"></a>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/gif-search/gif-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GifSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GifSearchComponent = /** @class */ (function () {
    function GifSearchComponent(http) {
        this.link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
        this.giphies = [];
        this.giphiesDef = [];
        this.http = http;
    }
    GifSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById('gif').style.backgroundColor = "black";
        // $(document).ready(function(){        
        //   $("form").submit(function() { return false; });
        // });
        this.apiLinkDef = this.link + 'goku';
        this.http.get(this.apiLinkDef)
            .subscribe(function (res) {
            _this.giphiesDef = res.json().data;
            console.log(res.json());
        });
    };
    GifSearchComponent.prototype.performSearch = function (searchTerm) {
        var _this = this;
        this.apiLink = this.link + searchTerm.value;
        console.log('sarthak');
        document.getElementById('contentDef').style.display = 'none';
        this.http.get(this.apiLink)
            .subscribe(function (res) {
            _this.giphies = res.json().data;
            _this.len = _this.giphies.length;
            console.log(res.json());
            console.log(_this.len);
        });
    };
    GifSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-gif-search',
            template: __webpack_require__("./src/app/gif-search/gif-search.component.html"),
            styles: [__webpack_require__("./src/app/gif-search/gif-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GifSearchComponent);
    return GifSearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map