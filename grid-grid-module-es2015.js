(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-grid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grid/grid.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grid/grid.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" scrollable [(ngModel)]=\"segmentValue\">\n        <ion-segment-button *ngFor=\"let item of data; let i = index;\" [value]=\"item.id\">\n            <bee-icon [name]=\"item.ico\" size=\"24\" [color]=\"segmentValue === item.id ? 'primary' : ''\"></bee-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh()\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-segment (ionChange)=\"segmentChanged2($event)\" scrollable [(ngModel)]=\"segmentValue2\">\n        <ion-segment-button *ngFor=\"let item of data2; let i = index;\" [value]=\"item.scode\">\n            <div class=\"bee-label\">{{item.name}}</div>\n        </ion-segment-button>\n    </ion-segment>\n\n    <ion-slides [options]=\"slideConfig\" (ionSlideDidChange)=\"slideChange()\" #slides>\n        <ion-slide *ngFor=\"let item of data; let i = index;\">\n            <bee-list [cover]=\"coverUrl\" [data]=\"list\" (onItemClick)=\"detailChange($event)\"></bee-list>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData()\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/grid/grid-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/grid/grid-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoutingModule", function() { return GridRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.component */ "./src/app/grid/grid.component.ts");




const routes = [
    {
        path: '',
        component: _grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]
    }
];
let GridRoutingModule = class GridRoutingModule {
};
GridRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GridRoutingModule);



/***/ }),

/***/ "./src/app/grid/grid.component.scss":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bee-label {\n  font-size: 12px;\n  height: 100px;\n  width: inherit;\n  display: block;\n  white-space: normal;\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family) !important;\n  font-weight: normal;\n  font-style: normal;\n  -webkit-text-orientation: sideways-right;\n  padding: calc(var(--bee-padding) / 2) 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9EOlxccHJvamVjdFxcbXkgcHJvamVjdFxcY2FwYWNpdG9yIHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcZ3JpZFxcZ3JpZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC10ZXh0LW9yaWVudGF0aW9uOiBzaWRld2F5cy1yaWdodDtcclxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMikgMDtcclxufVxyXG4iLCIuYmVlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC10ZXh0LW9yaWVudGF0aW9uOiBzaWRld2F5cy1yaWdodDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKSAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var _service_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/utils/utils.service */ "./src/app/service/utils/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let GridComponent = class GridComponent {
    constructor(http, router, toast) {
        this.http = http;
        this.router = router;
        this.toast = toast;
        this.host = _config__WEBPACK_IMPORTED_MODULE_3__["default"].host;
        this.list = [];
        this.segmentValue = '';
        this.segmentValue2 = null;
        this.coverUrl = '';
        this.data2 = [];
        this.data = [];
        this.page = 1;
        this.limit = 10;
        this.initStatus = true;
        this.slideConfig = {
            initialSlide: 0
        };
    }
    ngOnInit() {
        this.getTabs();
    }
    getTabs() {
        const params = {
            url: 'api.php/cms/nav',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
                this.segmentValue = res.data[0].id;
                this.coverUrl = res.data[0].pic;
                this.data2 = res.data[0].son;
                this.segmentValue2 = res.data[0].son.length ? res.data[0].son[0].scode : '';
                setTimeout(() => {
                    this.initStatus = false;
                }, 500);
                if (this.segmentValue2) {
                    this.getData();
                }
            }
        });
    }
    getData() {
        const params = {
            url: `api.php/list/${this.segmentValue2}/page/${this.page}/num/${this.limit}`,
            data: {}
        };
        this.http.get(params).subscribe(res => {
            this.refresher.complete();
            this.infiniteScroll.complete();
            if (res.code === 1) {
                this.list = this.list.concat(res.data);
                if (this.list.length === res.rowtotal) {
                    this.toast.showToast('ᠲᠦᠷ ᠨᠠᠩ ᠣᠯᠠᠨ ᠲᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠮᠲᠠ ᠪᠠᠶᠬᠤ ᠦᠭᠡᠢ', 'top');
                    this.infiniteScroll.disabled = true;
                }
                else {
                    this.infiniteScroll.disabled = false;
                }
            }
            else {
                this.toast.showToast('错误', 'top');
            }
        });
    }
    segmentChanged(event) {
        this.segmentValue = event.detail.value;
        const index = this.data.findIndex(el => el.id === event.detail.value);
        this.coverUrl = this.data[index].pic;
        this.data2 = this.data[index].son;
        this.segmentValue2 = this.data2.length ? this.data2[0].scode : '';
        this.slides.slideTo(index, 400);
    }
    slideChange() {
        this.slides.getActiveIndex().then(res => {
            this.segmentValue = this.data[res].id;
        });
    }
    segmentChanged2(event) {
        this.segmentValue2 = event.detail.value;
        if (!this.initStatus) {
            this.page = 1;
            this.list = [];
            if (this.segmentValue2) {
                this.getData();
            }
            this.infiniteScroll.disabled = false;
        }
    }
    doRefresh() {
        this.page = 1;
        this.list = [];
        this.infiniteScroll.disabled = false;
        if (this.segmentValue2) {
            this.getData();
        }
        else {
            this.refresher.complete();
        }
    }
    loadData() {
        this.page += 1;
        this.getData();
    }
    detailChange(event) {
        this.router.navigate(['/detail'], { queryParams: { id: event.id } });
    }
};
GridComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _service_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true })
], GridComponent.prototype, "infiniteScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], { static: false })
], GridComponent.prototype, "refresher", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true })
], GridComponent.prototype, "slides", void 0);
GridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grid/grid.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grid.component.scss */ "./src/app/grid/grid.component.scss")).default]
    })
], GridComponent);



/***/ }),

/***/ "./src/app/grid/grid.module.ts":
/*!*************************************!*\
  !*** ./src/app/grid/grid.module.ts ***!
  \*************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-routing.module */ "./src/app/grid/grid-routing.module.ts");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let GridModule = class GridModule {
};
GridModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _component_component_module__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]
    })
], GridModule);



/***/ })

}]);
//# sourceMappingURL=grid-grid-module-es2015.js.map