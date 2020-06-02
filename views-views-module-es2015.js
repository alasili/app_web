(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-views-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/views.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/views.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"grid\">\n            <bee-icon name=\"icontuijian\" size=\"25\"></bee-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"home\">\n            <bee-icon name=\"iconshouye\" size=\"25\"></bee-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"about\">\n            <bee-icon name=\"iconguanyuwomen\" size=\"25\"></bee-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/views/views-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/views-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ViewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsPageRoutingModule", function() { return ViewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views.page */ "./src/app/views/views.page.ts");




const routes = [
    {
        path: '',
        component: _views_page__WEBPACK_IMPORTED_MODULE_3__["ViewsPage"],
        children: [
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutModule)
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule)
            },
            {
                path: 'grid',
                loadChildren: () => __webpack_require__.e(/*! import() | grid-grid-module */ "grid-grid-module").then(__webpack_require__.bind(null, /*! ../grid/grid.module */ "./src/app/grid/grid.module.ts")).then(m => m.GridModule)
            },
            {
                path: '',
                redirectTo: '/views/home',
                pathMatch: 'full'
            }
        ]
    }
];
let ViewsPageRoutingModule = class ViewsPageRoutingModule {
};
ViewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewsPageRoutingModule);



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsPageModule", function() { return ViewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _views_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views-routing.module */ "./src/app/views/views-routing.module.ts");
/* harmony import */ var _views_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views.page */ "./src/app/views/views.page.ts");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/component.module */ "./src/app/component/component.module.ts");








let ViewsPageModule = class ViewsPageModule {
};
ViewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _views_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewsPageRoutingModule"],
            _component_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ],
        declarations: [
            _views_page__WEBPACK_IMPORTED_MODULE_6__["ViewsPage"]
        ]
    })
], ViewsPageModule);



/***/ }),

/***/ "./src/app/views/views.page.scss":
/*!***************************************!*\
  !*** ./src/app/views/views.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-icon {\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvRDpcXHByb2plY3RcXG15IHByb2plY3RcXGNhcGFjaXRvciBwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXHZpZXdzXFx2aWV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3ZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuIiwiLnRhYi1pY29uIHtcbiAgaGVpZ2h0OiAzNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/views.page.ts":
/*!*************************************!*\
  !*** ./src/app/views/views.page.ts ***!
  \*************************************/
/*! exports provided: ViewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsPage", function() { return ViewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ViewsPage = class ViewsPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 500,
            autoplay: {
                delay: 3000,
            },
            loop: true,
            autoHeight: true
        };
        this.segmentValue = 0;
        this.option = {
            initialSlide: 0,
            autoHeight: true
        };
        this.exhibition = {
            initialSlide: 0,
            width: 80,
            height: 45,
            speed: 500,
            loop: true,
        };
        this.showExhibition = {
            initialSlide: 0,
            autoHeight: true,
            speed: 500,
            autoplay: {
                delay: 3000,
            },
            loop: true,
        };
        this.bannerList = [
            {
                src: '../../assets/image/banner1.jpg',
                path: ''
            },
            {
                src: '../../assets/image/banner2.jpg',
                path: ''
            },
            {
                src: '../../assets/image/banner3.jpg',
                path: ''
            },
            {
                src: '../../assets/image/banner4.jpg',
                path: ''
            },
            {
                src: '../../assets/image/banner5.jpg',
                path: ''
            }
        ];
        this.data = [];
    }
    ngOnInit() {
        // this.http.get('http://localhost:8000/api/users').subscribe((res: any) => {
        //     console.log(res, 'ss');
        //     this.data = res.data;
        // });
    }
    slideTouchEnd() {
        this.slide01.startAutoplay();
    }
    slideChane() {
        this.slides.getActiveIndex().then(res => {
            console.log(res);
            this.segmentValue = res;
        });
    }
    exhibitionTouchEnd() {
        this.exhibition1.startAutoplay();
    }
    exhibitionChange1() {
        this.exhibition1.getActiveIndex().then(res => {
            this.exhibition2.slideTo(res, 500);
        });
    }
    segmentChanged(ev) {
        this.slides.slideTo(ev.detail.value, 400);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slide01', { static: true })
], ViewsPage.prototype, "slide01", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true })
], ViewsPage.prototype, "slides", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('exhibition1', { static: true })
], ViewsPage.prototype, "exhibition1", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('exhibition2', { static: true })
], ViewsPage.prototype, "exhibition2", void 0);
ViewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-views',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./views.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/views.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./views.page.scss */ "./src/app/views/views.page.scss")).default]
    })
], ViewsPage);



/***/ })

}]);
//# sourceMappingURL=views-views-module-es2015.js.map