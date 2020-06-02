(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"bee-about\" *ngIf=\"loading\">\n        <div class=\"bee-about-cover\">\n            <div class=\"about-title\">\n                {{data.name}}\n            </div>\n            <div class=\"about-cover\">\n                <img [src]=\"host + data.weixin\">\n            </div>\n            <div class=\"about-address\">\n                {{data.address}}\n            </div>\n        </div>\n\n        <div class=\"bee-about-content\">\n            <div class=\"bee-item\" (click)=\"itemClick(1)\"> ᠮᠦᠽᠧᠶ ᠶᠢᠨ ᠲᠣᠪᠴᠢ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠭ᠎ᠠ </div>\n            <div class=\"bee-item\" (click)=\"itemClick(2)\"> ᠬᠥᠭᠵᠢᠯᠲᠡ ᠶᠢᠨ ᠶᠠᠪᠤᠴᠠ </div>\n            <div class=\"bee-item\" (click)=\"itemClick(3)\"> ᠨᠡᠭᠡᠭᠡᠬᠦ ᠴᠠᠭ </div>\n            <div class=\"bee-item\" (click)=\"itemClick(5)\"> ᠵᠠᠮ ᠬᠠᠷᠢᠯᠴᠠᠭᠠᠨ ᠤ ᠵᠦᠭᠯᠡᠭᠦᠷ </div>\n            <div class=\"bee-item\" (click)=\"itemClick(6)\"> ᠵᠤᠭᠠᠴᠠᠭᠰᠠᠳ ᠤᠨ ᠮᠡᠳᠡᠬᠦ ᠶᠣᠰᠣᠲᠠᠶ ᠵᠦᠶᠯ </div>\n            <div class=\"bee-item\" (click)=\"itemClick(7)\"> ᠠᠵᠢᠯ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠦᠯᠦᠭ </div>\n            <div class=\"bee-item\" (click)=\"itemClick(8)\"> ᠰᠣᠶᠣᠯ ᠤᠨ ᠡᠭᠦᠳᠦᠯᠲᠡ ᠶᠢᠨ ᠪᠢᠴᠢᠯ ᠳᠡᠯᠭᠡᠭᠦᠷ </div>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/course/course.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/course/course.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"bee-detail\">\n        <div class=\"bee-detail-header\">\n            <ion-toolbar color=\"primary\" mode=\"ios\">\n                <ion-buttons slot=\"start\">\n                    <ion-back-button text=\"\" icon=\"chevron-back\" defaultHref=\"/views/about\"></ion-back-button>\n                </ion-buttons>\n\n                <ion-title style=\"text-align: center\">\n                    <ion-label class=\"title\"> 发展历程 </ion-label>\n                </ion-title>\n            </ion-toolbar>\n        </div>\n\n        <div class=\"bee-detail-segment\">\n            <ion-segment scrollable [value]=\"courseId\" (ionChange)=\"segmentChange($event)\">\n                <ion-segment-button *ngFor=\"let item of data;\" [value]=\"item.scode\">\n                    {{ item.name }}\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <div *ngIf=\"loading && detail.ico\" class=\"bee-detail-cover\">\n            <img [src]=\"host + detail.ico\">\n        </div>\n\n        <div *ngIf=\"loading\" class=\"bee-detail-content\" [innerHTML]=\"detail.content\"></div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/introduce/introduce.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/introduce/introduce.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"bee-detail\">\n        <div class=\"bee-detail-header\">\n            <ion-toolbar color=\"primary\" mode=\"ios\">\n                <ion-buttons slot=\"start\">\n                    <ion-back-button text=\"\" icon=\"chevron-back\" defaultHref=\"/views/about\"></ion-back-button>\n                </ion-buttons>\n\n                <ion-title style=\"text-align: center\">\n                    <ion-label class=\"title\"> 简介 </ion-label>\n                </ion-title>\n            </ion-toolbar>\n        </div>\n\n        <div *ngIf=\"loading && data.ico\" class=\"bee-detail-cover\">\n            <img [src]=\"host + data.ico\">\n        </div>\n        <div *ngIf=\"loading\" class=\"bee-detail-content\" [innerHTML]=\"data.content\"></div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/notice/notice.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/notice/notice.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"bee-detail\">\n        <div class=\"bee-detail-header\">\n            <ion-toolbar color=\"primary\" mode=\"ios\">\n                <ion-buttons slot=\"start\">\n                    <ion-back-button text=\"\" icon=\"chevron-back\" defaultHref=\"/views/about\"></ion-back-button>\n                </ion-buttons>\n\n                <ion-title style=\"text-align: center\">\n                    <ion-label class=\"title\"> 游客须知 </ion-label>\n                </ion-title>\n            </ion-toolbar>\n        </div>\n\n        <div *ngIf=\"loading && data.ico\" class=\"bee-detail-cover\">\n            <img [src]=\"host + data.ico\">\n        </div>\n        <div *ngIf=\"loading\" class=\"bee-detail-content\" [innerHTML]=\"data.content\"></div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/qrcode/qrcode.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/qrcode/qrcode.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bee-container\">\n    <ion-toolbar mode=\"ios\" style=\"--background: rgba(0,0,0,0)\">\n        <ion-title style=\"text-align: center\">\n            <ion-label class=\"title\"> {{title}} </ion-label>\n        </ion-title>\n\n        <ion-buttons slot=\"end\" style=\"font-size: 30px;\" (click)=\"close()\">\n            <ion-icon name=\"close\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <img class=\"qrcode\" *ngIf=\"type === 1\" src=\"../../../assets/image/qun.jpg\">\n    <img class=\"qrcode\" *ngIf=\"type === 2\" src=\"../../../assets/image/weidian.png\">\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/time/time.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/time/time.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"bee-detail\">\n        <div class=\"bee-detail-header\">\n            <ion-toolbar color=\"primary\" mode=\"ios\">\n                <ion-buttons slot=\"start\">\n                    <ion-back-button text=\"\" icon=\"chevron-back\" defaultHref=\"/views/about\"></ion-back-button>\n                </ion-buttons>\n\n                <ion-title style=\"text-align: center\">\n                    <ion-label class=\"title\"> 开放时间 </ion-label>\n                </ion-title>\n            </ion-toolbar>\n        </div>\n\n        <div *ngIf=\"loading && data.ico\" class=\"bee-detail-cover\">\n            <img [src]=\"host + data.ico\">\n        </div>\n        <div *ngIf=\"loading\" class=\"bee-detail-content\" [innerHTML]=\"data.content\"></div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/traffic/traffic.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/traffic/traffic.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"bee-detail\">\n        <div class=\"bee-detail-header\">\n            <ion-toolbar color=\"primary\" mode=\"ios\">\n                <ion-buttons slot=\"start\">\n                    <ion-back-button text=\"\" icon=\"chevron-back\" defaultHref=\"/views/about\"></ion-back-button>\n                </ion-buttons>\n\n                <ion-title style=\"text-align: center\">\n                    <ion-label class=\"title\"> 交通指南 </ion-label>\n                </ion-title>\n            </ion-toolbar>\n        </div>\n\n        <div *ngIf=\"loading && data.ico\" class=\"bee-detail-cover\">\n            <img [src]=\"host + data.ico\">\n        </div>\n        <div *ngIf=\"loading\" class=\"bee-detail-content\" [innerHTML]=\"data.content\"></div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introduce/introduce.component */ "./src/app/about/introduce/introduce.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/course.component */ "./src/app/about/course/course.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time/time.component */ "./src/app/about/time/time.component.ts");
/* harmony import */ var _traffic_traffic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./traffic/traffic.component */ "./src/app/about/traffic/traffic.component.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/about/notice/notice.component.ts");









const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'introduce',
        component: _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_4__["IntroduceComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_5__["CourseComponent"]
    },
    {
        path: 'time',
        component: _time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"]
    },
    {
        path: 'traffic',
        component: _traffic_traffic_component__WEBPACK_IMPORTED_MODULE_7__["TrafficComponent"]
    },
    {
        path: 'notice',
        component: _notice_notice_component__WEBPACK_IMPORTED_MODULE_8__["NoticeComponent"]
    }
];
let AboutRoutingModule = class AboutRoutingModule {
};
AboutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutRoutingModule);



/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-about {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bee-about-cover {\n  min-height: 260px;\n  max-height: 260px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  background-color: var(--ion-color-primary);\n}\n.bee-about-cover .about-title {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding: var(--bee-padding);\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 18px;\n  color: #fff;\n}\n.bee-about-cover .about-cover {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #fff;\n}\n.bee-about-cover .about-cover img {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.bee-about-cover .about-address {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: calc(var(--bee-padding) * 2) var(--bee-padding);\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 14px;\n  color: #fff;\n}\n.bee-about-content {\n  flex: 1;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  overflow-y: hidden;\n  overflow-x: auto;\n  padding: var(--bee-padding) 0;\n  font-family: var(--bee-font-family);\n}\n.bee-about-content .bee-item {\n  font-size: 16px;\n  padding: 0 var(--bee-padding);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-left: 1px solid var(--ion-color-primary);\n}\n.bee-about-content .bee-item:first-child {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXHByb2plY3RcXG15IHByb2plY3RcXGNhcGFjaXRvciBwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNDUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQVMsTUFBQTtFQUFRLFNBQUE7RUFDakIsMkJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0daO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0VaO0FEQVk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFaEI7QURFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLE1BQUE7RUFBUSxTQUFBO0VBQ2xCLHdEQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFWjtBREVJO0VBQ0ksT0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ0FaO0FERVk7RUFDSSxZQUFBO0FDQWhCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVlLWFib3V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJi1jb3ZlciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgICAgICAgLmFib3V0LXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwOyB0b3A6IDA7IGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hYm91dC1jb3ZlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hYm91dC1hZGRyZXNzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDsgdG9wOiAwOyBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpICogMikgdmFyKC0tYmVlLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcblxyXG4gICAgICAgIC5iZWUtaXRlbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCB2YXIoLS1iZWUtcGFkZGluZyk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtYWJvdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJlZS1hYm91dC1jb3ZlciB7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICBtYXgtaGVpZ2h0OiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmJlZS1hYm91dC1jb3ZlciAuYWJvdXQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJlZS1hYm91dC1jb3ZlciAuYWJvdXQtY292ZXIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYmVlLWFib3V0LWNvdmVyIC5hYm91dC1jb3ZlciBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJlZS1hYm91dC1jb3ZlciAuYWJvdXQtYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAqIDIpIHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmVlLWFib3V0LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbn1cbi5iZWUtYWJvdXQtY29udGVudCAuYmVlLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYmVlLWFib3V0LWNvbnRlbnQgLmJlZS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qrcode/qrcode.component */ "./src/app/about/qrcode/qrcode.component.ts");







let AboutComponent = class AboutComponent {
    constructor(http, router, modal, load) {
        this.http = http;
        this.router = router;
        this.modal = modal;
        this.load = load;
        this.host = _config__WEBPACK_IMPORTED_MODULE_3__["default"].host;
        this.loading = false;
    }
    ngOnInit() {
        this.getAbout();
    }
    getAbout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/cms/company`,
            };
            this.http.get(params).subscribe(res => {
                if (res.code === 1) {
                    this.loading = true;
                    this.data = res.data;
                }
                loading.dismiss();
            });
        });
    }
    itemClick(type) {
        switch (type) {
            case 1:
                this.router.navigate(['/views/about/introduce']);
                break;
            case 2:
                this.router.navigate(['/views/about/course']);
                break;
            case 3:
                this.router.navigate(['/views/about/time']);
                break;
            case 5:
                this.router.navigate(['/views/about/traffic']);
                break;
            case 6:
                this.router.navigate(['/views/about/notice']);
                break;
            case 7:
                this.setModal(1);
                break;
            case 8:
                this.setModal(2);
                break;
        }
    }
    setModal(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                componentProps: {
                    type,
                    title: type === 1 ? '行业群' : '文创微店'
                },
                component: _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_6__["QrcodeComponent"]
            });
            return yield modal.present();
        });
    }
};
AboutComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduce/introduce.component */ "./src/app/about/introduce/introduce.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course/course.component */ "./src/app/about/course/course.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time/time.component */ "./src/app/about/time/time.component.ts");
/* harmony import */ var _traffic_traffic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./traffic/traffic.component */ "./src/app/about/traffic/traffic.component.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/about/notice/notice.component.ts");
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./qrcode/qrcode.component */ "./src/app/about/qrcode/qrcode.component.ts");













let AboutModule = class AboutModule {
};
AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
            _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_7__["IntroduceComponent"],
            _course_course_component__WEBPACK_IMPORTED_MODULE_8__["CourseComponent"],
            _time_time_component__WEBPACK_IMPORTED_MODULE_9__["TimeComponent"],
            _traffic_traffic_component__WEBPACK_IMPORTED_MODULE_10__["TrafficComponent"],
            _notice_notice_component__WEBPACK_IMPORTED_MODULE_11__["NoticeComponent"],
            _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_12__["QrcodeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"],
            _component_component_module__WEBPACK_IMPORTED_MODULE_5__["ComponentModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
        ],
        entryComponents: [
            _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_12__["QrcodeComponent"]
        ]
    })
], AboutModule);



/***/ }),

/***/ "./src/app/about/course/course.component.scss":
/*!****************************************************!*\
  !*** ./src/app/about/course/course.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-detail {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-cover {\n  max-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bee-detail-cover img {\n  display: flex;\n  width: 100%;\n}\n.bee-detail-content {\n  flex: 1;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding) 0;\n  overflow-y: hidden;\n  overflow-x: auto;\n  font-size: 16px;\n  font-family: var(--bee-font-family);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvY291cnNlL0Q6XFxwcm9qZWN0XFxteSBwcm9qZWN0XFxjYXBhY2l0b3IgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxhYm91dFxcY291cnNlXFxjb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDWjtBREdJO0VBQ0ksT0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVlLWRldGFpbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYtY292ZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iZWUtZGV0YWlsLWNvdmVyIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1kZXRhaWwtY292ZXIgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmVlLWRldGFpbC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/course/course.component.ts":
/*!**************************************************!*\
  !*** ./src/app/about/course/course.component.ts ***!
  \**************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CourseComponent = class CourseComponent {
    constructor(http, load) {
        this.http = http;
        this.load = load;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
        this.loading = false;
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/cms/nav/scode/20`,
            };
            this.http.get(params).subscribe(res => {
                if (res.code === 1) {
                    this.data = res.data;
                    this.courseId = res.data[0].scode;
                    this.getDetail();
                }
                loading.dismiss();
            });
        });
    }
    getDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/about/${this.courseId}`,
            };
            this.http.get(params).subscribe(res => {
                console.log(res, '5544');
                if (res.code === 1) {
                    this.loading = true;
                    this.detail = res.data;
                }
                loading.dismiss();
            });
        });
    }
    segmentChange(event) {
        this.loading = false;
        this.courseId = event.detail.value;
        this.getDetail();
    }
};
CourseComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
CourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/course/course.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./course.component.scss */ "./src/app/about/course/course.component.scss")).default]
    })
], CourseComponent);



/***/ }),

/***/ "./src/app/about/introduce/introduce.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/about/introduce/introduce.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-detail {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-cover {\n  max-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bee-detail-cover img {\n  display: flex;\n  width: 100%;\n}\n.bee-detail-content {\n  flex: 1;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding) 0;\n  overflow-y: hidden;\n  overflow-x: auto;\n  font-size: 18px;\n  font-family: var(--bee-font-family);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvaW50cm9kdWNlL0Q6XFxwcm9qZWN0XFxteSBwcm9qZWN0XFxjYXBhY2l0b3IgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxhYm91dFxcaW50cm9kdWNlXFxpbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2ludHJvZHVjZS9pbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDWjtBREdJO0VBQ0ksT0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2ludHJvZHVjZS9pbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVlLWRldGFpbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYtY292ZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iZWUtZGV0YWlsLWNvdmVyIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1kZXRhaWwtY292ZXIgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmVlLWRldGFpbC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/introduce/introduce.component.ts":
/*!********************************************************!*\
  !*** ./src/app/about/introduce/introduce.component.ts ***!
  \********************************************************/
/*! exports provided: IntroduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceComponent", function() { return IntroduceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");





let IntroduceComponent = class IntroduceComponent {
    constructor(http, load) {
        this.http = http;
        this.load = load;
        this.host = _config__WEBPACK_IMPORTED_MODULE_4__["default"].host;
        this.loading = false;
    }
    ngOnInit() {
        this.getDetail();
    }
    getDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/about/1`,
            };
            this.http.get(params).subscribe(res => {
                if (res.code === 1) {
                    this.loading = true;
                    this.data = res.data;
                }
                loading.dismiss();
            });
        });
    }
};
IntroduceComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
IntroduceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-introduce',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./introduce.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/introduce/introduce.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./introduce.component.scss */ "./src/app/about/introduce/introduce.component.scss")).default]
    })
], IntroduceComponent);



/***/ }),

/***/ "./src/app/about/notice/notice.component.scss":
/*!****************************************************!*\
  !*** ./src/app/about/notice/notice.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-detail {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-cover {\n  max-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bee-detail-cover img {\n  display: flex;\n  width: 100%;\n}\n.bee-detail-content {\n  flex: 1;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding) 0;\n  overflow-y: hidden;\n  overflow-x: auto;\n  font-size: 18px;\n  font-family: var(--bee-font-family);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvbm90aWNlL0Q6XFxwcm9qZWN0XFxteSBwcm9qZWN0XFxjYXBhY2l0b3IgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxhYm91dFxcbm90aWNlXFxub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDWjtBREdJO0VBQ0ksT0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVlLWRldGFpbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYtY292ZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iZWUtZGV0YWlsLWNvdmVyIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1kZXRhaWwtY292ZXIgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmVlLWRldGFpbC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/notice/notice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/about/notice/notice.component.ts ***!
  \**************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let NoticeComponent = class NoticeComponent {
    constructor(http, load) {
        this.http = http;
        this.load = load;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
        this.loading = false;
    }
    ngOnInit() {
        this.getDetail();
    }
    getDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/about/25`,
            };
            this.http.get(params).subscribe(res => {
                if (res.code === 1) {
                    this.loading = true;
                    this.data = res.data;
                }
                loading.dismiss();
            });
        });
    }
};
NoticeComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
NoticeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/notice/notice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notice.component.scss */ "./src/app/about/notice/notice.component.scss")).default]
    })
], NoticeComponent);



/***/ }),

/***/ "./src/app/about/qrcode/qrcode.component.scss":
/*!****************************************************!*\
  !*** ./src/app/about/qrcode/qrcode.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".qrcode {\n  display: flex;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvcXJjb2RlL0Q6XFxwcm9qZWN0XFxteSBwcm9qZWN0XFxjYXBhY2l0b3IgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxhYm91dFxccXJjb2RlXFxxcmNvZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L3FyY29kZS9xcmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQVcsUUFBQTtFQUNYLGdDQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvcXJjb2RlL3FyY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xcmNvZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTsgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59XHJcbiIsIi5xcmNvZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXgtd2lkdGg6IDgwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/qrcode/qrcode.component.ts":
/*!**************************************************!*\
  !*** ./src/app/about/qrcode/qrcode.component.ts ***!
  \**************************************************/
/*! exports provided: QrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeComponent", function() { return QrcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let QrcodeComponent = class QrcodeComponent {
    constructor(modal) {
        this.modal = modal;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
    }
    ngOnInit() {
    }
    close() {
        this.modal.dismiss();
    }
};
QrcodeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QrcodeComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QrcodeComponent.prototype, "type", void 0);
QrcodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrcode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./qrcode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/qrcode/qrcode.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./qrcode.component.scss */ "./src/app/about/qrcode/qrcode.component.scss")).default]
    })
], QrcodeComponent);



/***/ }),

/***/ "./src/app/about/time/time.component.scss":
/*!************************************************!*\
  !*** ./src/app/about/time/time.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-detail {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-cover {\n  max-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bee-detail-cover img {\n  display: flex;\n  width: 100%;\n}\n.bee-detail-content {\n  flex: 1;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding) 0;\n  overflow-y: hidden;\n  overflow-x: auto;\n  font-size: 18px;\n  font-family: var(--bee-font-family);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvdGltZS9EOlxccHJvamVjdFxcbXkgcHJvamVjdFxcY2FwYWNpdG9yIHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcYWJvdXRcXHRpbWVcXHRpbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L3RpbWUvdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NaO0FER0k7RUFDSSxPQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvdGltZS90aW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlZS1kZXRhaWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmLWNvdmVyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgIH1cclxufVxyXG4iLCIuYmVlLWRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmVlLWRldGFpbC1jb3ZlciB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtZGV0YWlsLWNvdmVyIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJlZS1kZXRhaWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/about/time/time.component.ts":
/*!**********************************************!*\
  !*** ./src/app/about/time/time.component.ts ***!
  \**********************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let TimeComponent = class TimeComponent {
    constructor(http, load) {
        this.http = http;
        this.load = load;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
        this.loading = false;
    }
    ngOnInit() {
        this.getDetail();
    }
    getDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/about/23`,
            };
            this.http.get(params).subscribe(res => {
                if (res.code === 1) {
                    this.loading = true;
                    this.data = res.data;
                }
                loading.dismiss();
            });
        });
    }
};
TimeComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
TimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-time',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./time.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/time/time.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./time.component.scss */ "./src/app/about/time/time.component.scss")).default]
    })
], TimeComponent);



/***/ }),

/***/ "./src/app/about/traffic/traffic.component.scss":
/*!******************************************************!*\
  !*** ./src/app/about/traffic/traffic.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-detail {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-cover {\n  max-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bee-detail-cover img {\n  display: flex;\n  width: 100%;\n}\n.bee-detail-content {\n  flex: 1;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding) 0;\n  overflow-y: hidden;\n  overflow-x: auto;\n  font-size: 18px;\n  font-family: var(--bee-font-family);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvdHJhZmZpYy9EOlxccHJvamVjdFxcbXkgcHJvamVjdFxcY2FwYWNpdG9yIHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcYWJvdXRcXHRyYWZmaWNcXHRyYWZmaWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L3RyYWZmaWMvdHJhZmZpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NaO0FER0k7RUFDSSxPQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvdHJhZmZpYy90cmFmZmljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlZS1kZXRhaWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmLWNvdmVyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgIH1cclxufVxyXG4iLCIuYmVlLWRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmVlLWRldGFpbC1jb3ZlciB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtZGV0YWlsLWNvdmVyIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJlZS1kZXRhaWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/about/traffic/traffic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about/traffic/traffic.component.ts ***!
  \****************************************************/
/*! exports provided: TrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficComponent", function() { return TrafficComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let TrafficComponent = class TrafficComponent {
    constructor(http, load) {
        this.http = http;
        this.load = load;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
        this.loading = false;
    }
    ngOnInit() {
        this.getDetail();
    }
    getDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                duration: 2000,
                mode: 'ios'
            });
            yield loading.present();
            const params = {
                url: `api.php/about/24`,
            };
            this.http.get(params).subscribe(res => {
                if (res.code === 1) {
                    this.loading = true;
                    this.data = res.data;
                }
                loading.dismiss();
            });
        });
    }
};
TrafficComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
TrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-traffic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./traffic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/traffic/traffic.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./traffic.component.scss */ "./src/app/about/traffic/traffic.component.scss")).default]
    })
], TrafficComponent);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map