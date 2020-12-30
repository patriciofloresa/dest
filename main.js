(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andres\Desktop\konex1.0\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
const _c1 = function () { return ["/polizas/agregar"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 4, consts: [[1, "bg-dark", "nav", "justify-content-end"], [1, "nav-item"], [3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Propuestas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".li[_ngcontent-%COMP%] {\r\n    background-color: #333;\r\n    overflow: hidden;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: #f2f2f2;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RDtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQSw4Q0FBOEM7QUFDOUM7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBLHVDQUF1QztBQUN2QztJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuLmxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbnVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG51bCBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "RO5S":
/*!*******************************************************!*\
  !*** ./src/app/components/editar/editar.component.ts ***!
  \*******************************************************/
/*! exports provided: EditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarComponent", function() { return EditarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/poliza/poliza.service */ "vroj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "tmjD");









function EditarComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Editar Propuesta ", ctx_r0.poliza.selectPoliza.nombrePropuesta, " ");
} }
function EditarComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Propuesta: Endoso de Incorporaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Propuesta: Endoso de Exclusi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Propuesta: Endoso de Modificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Propuesta: Endoso de Anulaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Propuesta: Endoso de Cancelaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_div_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r44.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EditarComponent_button_239_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_button_239_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r53.editarPropuesta(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EDITAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_button_241_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_button_241_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r55.incorporarPropuesta(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " INCORPORAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_button_243_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_button_243_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r57.excluirPropuesta(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EXCLUIR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_button_245_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_button_245_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r59.modificarPropuesta(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MODIFICAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_button_247_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_button_247_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r61.anularPropuesta(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ANULAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditarComponent_button_249_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_button_249_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r63.cancelarPropuesta(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CANCELAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditarComponent {
    constructor(route, poliza, toastr) {
        this.route = route;
        this.poliza = poliza;
        this.toastr = toastr;
        this.editar = true;
        this.incorporar = false;
        this.excluir = false;
        this.modificar = false;
        this.anular = false;
        this.cancelar = false;
        //Inicializar la fecha para distintos Endosos
        this.date = new Date().toISOString().slice(0, 10);
    }
    onFileSelect(event) {
        this.items = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.img = reader.result;
        reader.readAsDataURL(this.items);
    }
    toastrSucces(cuerpo, titulo) {
        this.toastr.success(cuerpo, titulo);
    }
    toastrError(cuerpo, titulo) {
        this.toastr.error(cuerpo, titulo);
    }
    ngOnInit() {
        this.loadScript();
        this._id = this.route.snapshot.params['_id'];
        this.traerPoliza();
    }
    nroProp() {
        this.poliza.nroPropuesta()
            .subscribe(res => {
            this.poliza.poliza = res;
            console.log(res);
            this.initNroDate(this.poliza.poliza);
        });
    }
    initNroDate(nro) {
        this.poliza.selectPoliza.nroPropuesta = nro;
        this.poliza.selectPoliza.fcPropuesta = this.date;
    }
    loadScript() {
        const node = document.createElement('script');
        node.src = 'assets/js/comuna.js';
        node.type = 'text/javascript';
        node.async = true;
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    //traemos la poliza
    traerPoliza() {
        this.poliza.getPoliza(this._id)
            .subscribe(data => {
            this.data = data;
            this.load(this.data);
            console.log(this.data);
        });
    }
    header() {
        if (this.polizaForm.value.nombrePropuesta == "POLIZA")
            this.editar = true;
        else if (this.polizaForm.value.nombrePropuesta == "MODIFICACION")
            this.editar = true;
        else if (this.polizaForm.value.nombrePropuesta == "INCORPORACION")
            this.incorporar = true;
        else if (this.polizaForm.value.nombrePropuesta == "EXCLUSION")
            this.excluir = true;
        else if (this.polizaForm.value.nombrePropuesta == "ANULACION")
            this.anular = true;
        else
            this.cancelar = true;
    }
    //cargamos la poliza
    load(poliza) {
        this.poliza.selectPoliza = poliza;
        if (this.poliza.selectPoliza.region)
            this.poliza.selectPoliza.comuna;
    }
    //metodo para editar propuesta
    editarPropuesta(form) {
        if (form.valid) {
            this.poliza.editPoliza(form.value, this.items)
                .subscribe(res => console.log('Propuesta Editada'));
            this.toastrSucces("Se ha editado correctamente la propuesta, será redirigido pronto a su descarga", "Edición exitosa!!");
        }
        else {
            this.toastrError("Error interno no deja realizar la accion de editar", "Error");
        }
    }
    //metodo para endoso de incorporacion
    incorporarPropuesta(form) {
        form.value.nombrePropuesta = "INCORPORACION";
        this.poliza.selectPoliza.nombrePropuesta = "INCORPORACION";
        if (form.valid) {
            this.poliza.endPoliza(form.value, this.items)
                .subscribe(res => console.log('Propuesta Añadida(incorporacion)'));
            this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga", "Incorporación exitosa!!");
        }
        else {
            this.toastrError("Error interno no deja realizar la accion de incorporar", "Error");
        }
    }
    //metodo para endoso de exclusion
    excluirPropuesta(form) {
        form.value.nombrePropuesta = "EXCLUSION";
        this.poliza.selectPoliza.nombrePropuesta = "EXCLUSION";
        if (form.valid) {
            this.poliza.endPoliza(form.value, this.items)
                .subscribe(res => console.log('Propuesta Añadida(exclucion)'));
            this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga", "Exclusión exitosa!!");
        }
        else {
            this.toastrError("Error interno no deja realizar la accion de excluir", "Error");
        }
    }
    //metodo para endoso de modificacion
    modificarPropuesta(form) {
        form.value.nombrePropuesta = "MODIFICACION";
        this.poliza.selectPoliza.nombrePropuesta = "MODIFICACION";
        if (form.valid) {
            this.poliza.endPoliza(form.value, this.items)
                .subscribe(res => console.log('Propuesta Añadida(modificacion)'));
            this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga", "Modificación exitosa!!");
        }
        else {
            this.toastrError("Error interno no deja realizar la accion de modificar", "Error");
        }
    }
    //metodo para endoso de anulacion
    anularPropuesta(form) {
        form.value.nombrePropuesta = "ANULACION";
        this.poliza.selectPoliza.nombrePropuesta = "ANULACION";
        if (form.valid) {
            this.poliza.endPoliza(form.value, this.items)
                .subscribe(res => console.log('Propuesta Añadida(anulacion)'));
            this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga", "Anulación exitosa!!");
        }
        else {
            this.toastrError("Error interno no deja realizar la accion de anular", "Error");
        }
    }
    //metodo para endoso de cancelacion
    cancelarPropuesta(form) {
        form.value.nombrePropuesta = "CANCELACION";
        this.poliza.selectPoliza.nombrePropuesta = "CANCELACION";
        if (form.valid) {
            this.poliza.endPoliza(form.value, this.items)
                .subscribe(res => console.log('Propuesta Añadida(cancelacion)'));
            this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga", "Cancelación exitosa!!");
        }
        else {
            this.toastrError("Error interno no deja realizar la accion de cancelar", "Error");
        }
    }
    editarBtn() {
        this.traerPoliza();
        this.editar = true;
        this.incorporar = false;
        this.excluir = false;
        this.anular = false;
        this.cancelar = false;
        this.modificar = false;
    }
    incorporarBtn() {
        this.nroProp();
        this.editar = false;
        this.incorporar = true;
        this.excluir = false;
        this.anular = false;
        this.cancelar = false;
        this.modificar = false;
    }
    excluirBtn() {
        this.nroProp();
        this.editar = false;
        this.incorporar = false;
        this.excluir = true;
        this.anular = false;
        this.cancelar = false;
        this.modificar = false;
    }
    modificarBtn() {
        this.nroProp();
        this.editar = false;
        this.incorporar = false;
        this.excluir = false;
        this.anular = false;
        this.cancelar = false;
        this.modificar = true;
    }
    anularBtn() {
        this.nroProp();
        this.editar = false;
        this.incorporar = false;
        this.excluir = false;
        this.anular = true;
        this.cancelar = false;
        this.modificar = false;
    }
    cancelarBtn() {
        this.nroProp();
        this.editar = false;
        this.incorporar = false;
        this.excluir = false;
        this.anular = false;
        this.cancelar = true;
        this.modificar = false;
    }
    calcularIva(afecta) {
        this.poliza.selectPoliza.iva = parseFloat((afecta * 0.19).toFixed(2));
        console.log("Iva: " + this.poliza.selectPoliza.iva);
        return this.poliza.selectPoliza.iva;
    }
    calcularNeta(afecta, exenta) {
        this.poliza.selectPoliza.primaNeta = (afecta + exenta);
        console.log("Neta: " + this.poliza.selectPoliza.primaNeta);
        this.calcularBruta(this.poliza.selectPoliza.primaNeta, this.calcularIva(afecta));
        return this.poliza.selectPoliza.primaNeta;
    }
    calcularBruta(neta, iva) {
        this.poliza.selectPoliza.primaBruta = ((neta + iva).toFixed(2));
        console.log("bruta: " + this.poliza.selectPoliza.primaBruta);
        return this.poliza.selectPoliza.primaBruta;
    }
    calcularKonex(comisionAfecta, comisionExenta, afecta, exenta) {
        const a = (afecta * (comisionAfecta / 100));
        const b = exenta * (comisionExenta / 100);
        console.log("A: " + a + "B: " + b);
        this.poliza.selectPoliza.montoTotal = parseFloat((a + b).toFixed(2));
        console.log("comision Konex: " + this.poliza.selectPoliza.montoTotal);
        return this.poliza.selectPoliza.montoTotal;
    }
    calcReferido(x) {
        const a = this.calcularKonex(this.poliza.selectPoliza.comisionAfecta, this.poliza.selectPoliza.comisionExenta, this.poliza.selectPoliza.primaAfecta, this.poliza.selectPoliza.primaExenta);
        console.log(a);
        this.poliza.selectPoliza.comisionReferido = parseFloat((+a * (x / 100)).toFixed(2));
        console.log("referido: " + this.poliza.selectPoliza.comisionReferido);
    }
}
EditarComponent.ɵfac = function EditarComponent_Factory(t) { return new (t || EditarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
EditarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditarComponent, selectors: [["app-editar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]])], decls: 250, vars: 52, consts: [["class", "center m-1 pt-2", 4, "ngIf"], [1, "d-flex", "justify-content-start"], ["onclick", "editar()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["onclick", "modificar()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["onclick", "incorporar()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["onclick", "excluir()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["onclick", "anular()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["onclick", "cancelar()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["ngNativeValidate", "", "enctype", "multipart/form-data", 1, "ml-5", "mr-5"], ["polizaForm", "ngForm"], [1, "p-1"], [1, "d-flex", "justify-content-end"], ["type", "hidden", "id", "_id", "name", "_id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_id", "ngModel"], ["type", "hidden", "id", "nombrePropuesta", "name", "nombrePropuesta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombrePropuesta", "ngModel"], [1, "col-sm-2", "col-md-2", "col-lg-2", "justify-content-start"], ["for", "nroPoliza"], ["type", "text", "id", "nroPoliza", "value", "0", "name", "nroPoliza", "mask", "separator.0", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["nroPoliza", "ngModel"], ["ng-If", "poliza.selectPoliza.nombrePropuesta !== 'POLIZA'", 1, "col-sm-2", "col-md-2", "col-lg-2", "justify-content-start"], ["for", "numeroEndoso"], ["type", "text", "id", "numeroEndoso", "value", "0", "name", "numeroEndoso", "mask", "separator.0", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["numeroEndoso", "ngModel"], [1, "col-sm-2", "col-md-2", "col-lg-2"], ["for", "fcPropuesta"], ["type", "date", "id", "fcPropuesta", "value", "", "name", "fcPropuesta", "required", "", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fcPropuesta", "ngModel"], ["for", "nroPropuesta"], ["type", "text", "value", "0", "id", "nroPropuesta", "name", "nroPropuesta", "mask", "separator.0", "readonly", "", "required", "", 1, "form-control", "textalign-right", "n", 3, "ngModel", "ngModelChange"], ["nroPropuesta", "ngModel"], [1, "p-3"], ["id", "DatosAsegurados", 1, "center", "form-row"], [1, "col-md-6"], ["for", "company", 1, "control-label"], ["type", "text", "placeholder", "Nombre Compa\u00F1ia", "id", "company", "name", "nombreAseguradora", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreAseguradora", "ngModel"], [1, "col-md-4", "col-lg-2"], ["for", "ramo"], ["type", "text", "placeholder", "Ej: Incendios", "id", "ramo", "name", "ramo", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ramo", "ngModel"], ["for", "montoAsegurado"], ["type", "text", "placeholder", "Ej: Incendios", "id", "montoAsegurado", "name", "montoAsegurado", "mask", "separator.2", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["montoAsegurado", "ngModel"], [1, "center", "form-row", "mt-3"], [1, "col-md-4", "col-lg-1"], ["for", "rutCliente"], ["type", "Text", "placeholder", "Rut Cliente", "id", "rutCliente", "name", "rutCliente", "mask", "90.000.000-A || 00.000.000-A", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rutCliente", "ngModel"], ["for", "alias"], ["type", "text", "placeholder", "Nombre Fantasia", "id", "alias", "name", "alias", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alias", "ngModel"], [1, "col-md-4", "col-lg-4"], ["for", "nombreCliente"], ["type", "text", "placeholder", "Raz\u00F3n Social / Nombre Cliente", "id", "nombreCliente", "name", "nombreCliente", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreCliente", "ngModel"], ["for", "rutAcreedor"], ["type", "Text", "placeholder", "Rut Acreedor", "id", "rutAcreedor", "name", "rutAcreedor", "mask", "90.000.00A-A || 00.000.00A-A", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rutAcreedor", "ngModel"], ["for", "nombreAcreedor"], ["type", "text", "placeholder", "Nombre Acreedor", "id", "nombreAcreedor", "name", "nombreAcreedor", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreAcreedor", "ngModel"], ["for", "nombreContacto"], ["type", "Text", "placeholder", "Nombre Contacto", "id", "nombreContacto", "name", "nombreContacto", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreContacto", "ngModel"], ["for", "telefonoContacto"], ["type", "text", "placeholder", "Fono Contacto", "id", "telefonoContacto", "name", "telefonoContacto", 1, "form-control", 3, "ngModel", "ngModelChange"], ["telefonoContacto", "ngModel"], [1, "col-md-3", "col-lg-3"], ["for", "direccion"], ["type", "text", "placeholder", "Direccion Comercial", "id", "direccion", "name", "direccion", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "regiones"], ["id", "regiones", "name", "region", 1, "form-control", 3, "ngModel", "ngModelChange"], ["region", "ngModel"], ["for", "comunas"], ["id", "comunas", "name", "comuna", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comuna", "ngModel"], ["for", "inicioVigencia"], ["type", "date", "id", "inicioVigencia", "name", "inicioVigencia", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["inicioVigencia", "ngModel"], ["for", "finVigencia"], ["type", "date", "id", "finVigencia", "name", "finVigencia", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["finVigencia", "ngModel"], ["for", "primaAfecta"], ["type", "number", "step", "any", "placeholder", "Prima Afecta", "id", "primaAfecta", "name", "primaAfecta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["primaAfecta", "ngModel"], ["for", "primaExenta"], ["type", "number", "step", "any", "id", "primaExenta", "placeholder", "Prima Exenta", "name", "primaExenta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["primaExenta", "ngModel"], ["for", "primaNeta"], ["type", "number", "step", "any", "id", "primaNeta", "placeholder", " Prima NETA ", "name", "primaNeta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["primaNeta", "ngModel"], ["for", "iva"], ["type", "number", "step", "any", "id", "iva", "placeholder", "iva", "name", "iva", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["iva", "ngModel"], ["for", "primaBruta"], ["type", "number", "step", "any", "id", "primaBruta", "placeholder", " Prima Bruta ", "name", "primaBruta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["primaBruta", "ngModel"], ["for", "tipoMoneda"], ["type", "text", "id", "tipoMoneda", "placeholder", "Tipo de moneda como se pagara", "name", "tipoMoneda", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tipoMoneda", "ngModel"], [1, "col-sm-2", "col-md-2", "col-lg-2", "mt-3"], ["for", "comisionAfecta"], ["type", "number", "step", "any", "placeholder", "Valor Afecta %", "id", "comisionAfecta", "name", "comisionAfecta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["comisionAfecta", "ngModel"], ["for", "comisionExenta"], ["type", "number", "step", "any", "id", "comisionExenta", "placeholder", " Valor Exenta % ", "name", "comisionExenta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["comisionExenta", "ngModel"], ["for", "montoTotal"], ["type", "number", "step", "any", "placeholder", " Monto Asegurado Total ", "value", "0", "id", "montoTotal", "name", "montoTotal", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["montoTotal", "ngModel"], [1, "col-sm-2", "col-md-1", "col-lg-1", "mt-3"], ["for", "porcentajeReferido"], ["type", "number", "step", "any", "value", "0", "id", "valorReferido", "name", "valorReferido", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["valorReferido", "ngModel"], ["for", "comisionReferido"], ["type", "number", "step", "any", "value", "0", "id", "comisionReferido", "name", "comisionReferido", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["comisionReferido", "ngModel"], ["for", "formaPago"], ["name", "", "id", "formaPago", "name", "formaPago", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formaPago", "ngModel"], ["value", "PAC"], ["value", "PAT"], ["value", "DIRECTO"], ["for", "nroCuotas"], ["type", "text", "id", "nroCuotas", "value", "0", "name", "nroCuotas", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["nroCuotas", "ngModel"], ["for", "fcPrimeraCuota"], ["type", "date", "id", "fcPrimeraCuota", "name", "fcPrimeraCuota", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fcPrimeraCuota", "ngModel"], ["for", "cobertura"], ["type", "text", "id", "my-textarea", "cols", "200", "rows", "2", "name", "cobertura", "wrap", "hard", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cobertura", "ngModel"], ["for", "limites"], ["cols", "200", "rows", "2", "id", "my-textarea", "name", "limites", 1, "form-control", 3, "ngModel", "ngModelChange"], ["limites", "ngModel"], [1, "col-lg-4", "col-md-4"], ["for", "items"], ["type", "file", "name", "photo", "observeFiles", "", 2, "box-shadow", "none", 3, "change"], ["class", "d-flex align-items-center justify-content-center", 4, "ngIf"], ["type", "hidden", "id", "estado", "name", "estado", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["estado", "ngModel"], ["type", "hidden", "id", "estadoPago", "name", "estadoPago", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["estadoPago", "ngModel"], [1, "d-flex", "justify-content-center"], ["type", "submit", "class", "btn btn-primary m-1", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary m-1", "onclick", "incorporar()", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary m-1", "onclick", "excluir()", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary m-1", "onclick", "modificar()", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary m-1", "onclick", "anular()", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary m-1", "onclick", "cancelar()", 3, "click", 4, "ngIf"], [1, "center", "m-1", "pt-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["alt", "", "name", "img", 1, "img-responsive", 3, "src"], ["type", "submit", 1, "btn", "btn-primary", "m-1", 3, "click"], ["type", "submit", "onclick", "incorporar()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["type", "submit", "onclick", "excluir()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["type", "submit", "onclick", "modificar()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["type", "submit", "onclick", "anular()", 1, "btn", "btn-primary", "m-1", 3, "click"], ["type", "submit", "onclick", "cancelar()", 1, "btn", "btn-primary", "m-1", 3, "click"]], template: function EditarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditarComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditarComponent_h2_1_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditarComponent_h2_2_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditarComponent_h2_3_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditarComponent_h2_4_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditarComponent_h2_5_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_Template_button_click_7_listener() { return ctx.editarBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EDITAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_Template_button_click_9_listener() { return ctx.modificarBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MODIFICAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_Template_button_click_11_listener() { return ctx.incorporarBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "INCORPORAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_Template_button_click_13_listener() { return ctx.excluirBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "EXCLUIR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_Template_button_click_15_listener() { return ctx.anularBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ANULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditarComponent_Template_button_click_17_listener() { return ctx.cancelarBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_23_listener($event) { return ctx.poliza.selectPoliza._id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_25_listener($event) { return ctx.poliza.selectPoliza.nombrePropuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "N\u00FAmero de Poliza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_30_listener($event) { return ctx.poliza.selectPoliza.nroPoliza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "N\u00FAmero de Endoso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_35_listener($event) { return ctx.poliza.selectPoliza.numeroEndoso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Fecha Propuesta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_40_listener($event) { return ctx.poliza.selectPoliza.fcPropuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Numero Propuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_45_listener($event) { return ctx.poliza.selectPoliza.nroPropuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Compa\u00F1ia Aseguradora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_53_listener($event) { return ctx.poliza.selectPoliza.nombreAseguradora = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Ramo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_58_listener($event) { return ctx.poliza.selectPoliza.ramo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Monto Asegurado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_63_listener($event) { return ctx.poliza.selectPoliza.montoAsegurado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Rut Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_69_listener($event) { return ctx.poliza.selectPoliza.rutCliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Nombre Fantasia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_74_listener($event) { return ctx.poliza.selectPoliza.alias = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Raz\u00F3n Social / Nombre Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_79_listener($event) { return ctx.poliza.selectPoliza.nombreCliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Rut Acreedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_84_listener($event) { return ctx.poliza.selectPoliza.rutAcreedor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Nombre Acreedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_89_listener($event) { return ctx.poliza.selectPoliza.nombreAcreedor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Nombre Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_94_listener($event) { return ctx.poliza.selectPoliza.nombreContacto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 66, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_99_listener($event) { return ctx.poliza.selectPoliza.telefonoContacto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Direccion Comercial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 70, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_105_listener($event) { return ctx.poliza.selectPoliza.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "select", 73, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_select_ngModelChange_110_listener($event) { return ctx.poliza.selectPoliza.region = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Comuna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "select", 76, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_select_ngModelChange_115_listener($event) { return ctx.poliza.selectPoliza.comuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Inicio Vigencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 79, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_123_listener($event) { return ctx.poliza.selectPoliza.inicioVigencia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Fin Vigencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_128_listener($event) { return ctx.poliza.selectPoliza.finVigencia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Prima Afecta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "input", 85, 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_136_listener($event) { return ctx.poliza.selectPoliza.primaAfecta = $event; })("change", function EditarComponent_Template_input_change_136_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](137); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](167); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](172); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](182); ctx.calcularIva(_r28.value); ctx.calcularNeta(_r28.value, _r29.value); ctx.calcularKonex(_r34.value, _r35.value, _r28.value, _r29.value); return ctx.calcReferido(_r37.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Prima Exenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "input", 88, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_141_listener($event) { return ctx.poliza.selectPoliza.primaExenta = $event; })("change", function EditarComponent_Template_input_change_141_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](137); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](167); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](172); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](182); ctx.calcularNeta(_r28.value, _r29.value); ctx.calcularKonex(_r34.value, _r35.value, _r28.value, _r29.value); return ctx.calcReferido(_r37.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Prima Neta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "input", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_146_listener($event) { return ctx.poliza.selectPoliza.primaNeta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " IVA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "input", 94, 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_151_listener($event) { return ctx.poliza.selectPoliza.iva = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Prima Bruta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "input", 97, 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_156_listener($event) { return ctx.poliza.selectPoliza.primaBruta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "label", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Tipo Moneda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "input", 100, 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_161_listener($event) { return ctx.poliza.selectPoliza.tipoMoneda = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "label", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Comision Afecta % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "input", 104, 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_166_listener($event) { return ctx.poliza.selectPoliza.comisionAfecta = $event; })("change", function EditarComponent_Template_input_change_166_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](137); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](167); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](172); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](182); ctx.calcularNeta(_r28.value, _r29.value); ctx.calcularKonex(_r34.value, _r35.value, _r28.value, _r29.value); return ctx.calcReferido(_r37.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "label", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Comisi\u00F3n Exenta % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "input", 107, 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_171_listener($event) { return ctx.poliza.selectPoliza.comisionExenta = $event; })("change", function EditarComponent_Template_input_change_171_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](137); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](167); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](172); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](182); ctx.calcularNeta(_r28.value, _r29.value); ctx.calcularKonex(_r34.value, _r35.value, _r28.value, _r29.value); return ctx.calcReferido(_r37.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "label", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Comision Total KONEX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "input", 110, 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_176_listener($event) { return ctx.poliza.selectPoliza.montoTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Com. referido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "input", 114, 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_181_listener($event) { return ctx.poliza.selectPoliza.valorReferido = $event; })("change", function EditarComponent_Template_input_change_181_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](182); return ctx.calcReferido(_r37.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Com. referido UF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "input", 117, 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_186_listener($event) { return ctx.poliza.selectPoliza.comisionReferido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Forma de Pago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "select", 120, 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_select_ngModelChange_194_listener($event) { return ctx.poliza.selectPoliza.formaPago = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " PAC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " PAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " DIRECTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Nro Cuotas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "input", 126, 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_205_listener($event) { return ctx.poliza.selectPoliza.nroCuotas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "label", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Primera Cuota ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "input", 129, 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_210_listener($event) { return ctx.poliza.selectPoliza.fcPrimeraCuota = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "label", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Coberturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "textarea", 132, 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_textarea_ngModelChange_218_listener($event) { return ctx.poliza.selectPoliza.cobertura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "label", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Limites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "textarea", 135, 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_textarea_ngModelChange_223_listener($event) { return ctx.poliza.selectPoliza.limites = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "label", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditarComponent_Template_input_change_230_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](232, EditarComponent_div_232_Template, 2, 1, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "input", 141, 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_234_listener($event) { return ctx.poliza.selectPoliza.estado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "input", 143, 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditarComponent_Template_input_ngModelChange_236_listener($event) { return ctx.poliza.selectPoliza.estadoPago = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, EditarComponent_button_239_Template, 2, 0, "button", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](241, EditarComponent_button_241_Template, 2, 0, "button", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, EditarComponent_button_243_Template, 2, 0, "button", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](245, EditarComponent_button_245_Template, 2, 0, "button", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](247, EditarComponent_button_247_Template, 2, 0, "button", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, EditarComponent_button_249_Template, 2, 0, "button", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.incorporar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.excluir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modificar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cancelar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombrePropuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroPoliza);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.numeroEndoso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.fcPropuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroPropuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreAseguradora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.ramo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.montoAsegurado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.rutCliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.alias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreCliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.rutAcreedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreAcreedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreContacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.telefonoContacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.inicioVigencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.finVigencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaAfecta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaExenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaNeta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaBruta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.tipoMoneda);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comisionAfecta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comisionExenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.montoTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.valorReferido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comisionReferido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.formaPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroCuotas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.fcPrimeraCuota);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.cobertura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.limites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.estadoPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.incorporar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.excluir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modificar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cancelar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_mask__WEBPACK_IMPORTED_MODULE_6__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["select[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n\r\n[_ngcontent-%COMP%]::selection{\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImVkaXRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0e1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editar',
                templateUrl: './editar.component.html',
                styleUrls: ['./editar.component.css'],
                providers: [_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Konex';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "containter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/polizas"]; };
class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 2, consts: [[1, "center"], [1, "dv", "divbg", 3, "routerLink"], ["src", "assets/img/Logo.jpg", "alt", "logo"], [1, "middle"], ["for", "email"], ["type", "text", "name", "", "id", "email", "placeholder", "Email", 1, "spacing"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Password", 1, "spacing"], [1, "trial"], ["type", "submit", 1, "btn", "primary"], [1, "btn", "secondary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  color: #FFFFFF;\r\n  padding: 12px;\r\n  width: 100%;\r\n  text-align: center;\r\n  transition-duration: 0.4s;\r\n  text-decoration: none;\r\n  overflow: hidden;\r\n  margin: 5px;\r\n  display: inline-block;\r\n}\r\n.primary[_ngcontent-%COMP%]{\r\n\tbackground-color: #008CBA;\r\n}\r\n.secondary[_ngcontent-%COMP%]{\r\n\tbackground-color: #f44336;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 95vh;\r\n}\r\n.spacing[_ngcontent-%COMP%]{\r\n\tmargin: 5px;\r\n}\r\n.dv[_ngcontent-%COMP%]{\r\n\theight: 40vh;\r\n\twidth: 30vh;\r\n}\r\n.trial[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: baseline;\r\n\talign-items: baseline;\r\n}\r\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 12px 20px;\r\n\tmargin: 8px 0;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n}\r\ninput[type=password][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 12px 20px;\r\n\tmargin: 8px 0;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 14px 20px;\r\n\tmargin: 8px 0;\r\n\tborder: none;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #45a049;\r\n}\r\n.divbg[_ngcontent-%COMP%] {\r\n\tborder-radius: 8px;\r\n\tbackground-color: #fff;\r\n\tborder:5px #eee solid ;\r\n\tpadding: 20px;\r\n}\r\n.center-Text[_ngcontent-%COMP%]{\r\n\ttext-align: center;\r\n}\r\n.middle[_ngcontent-%COMP%]{\r\n\tmargin-top: 40px;\r\n}\r\n.bottom[_ngcontent-%COMP%]{\r\n\tmargin-top: 100px;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n\tmax-width: 100%;\r\n    max-height: 100%;\t\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjtBQUVBO0NBQ0MsV0FBVztBQUNaO0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7QUFHQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnByaW1hcnl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcclxufVxyXG5cclxuLnNlY29uZGFyeXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDk1dmg7XHJcbn1cclxuXHJcbi5zcGFjaW5ne1xyXG5cdG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZHZ7XHJcblx0aGVpZ2h0OiA0MHZoO1xyXG5cdHdpZHRoOiAzMHZoO1xyXG59XHJcblxyXG4udHJpYWx7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xyXG5cdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxMnB4IDIwcHg7XHJcblx0bWFyZ2luOiA4cHggMDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1wYXNzd29yZF0sIHNlbGVjdCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMTJweCAyMHB4O1xyXG5cdG1hcmdpbjogOHB4IDA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiAgXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogMTRweCAyMHB4O1xyXG5cdG1hcmdpbjogOHB4IDA7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuICBcclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcbiAgXHJcbi5kaXZiZyB7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOjVweCAjZWVlIHNvbGlkIDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2VudGVyLVRleHR7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5taWRkbGV7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uYm90dG9te1xyXG5cdG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5pbWd7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcdFx0XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_polizas_polizas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/polizas/polizas.component */ "wjFR");
/* harmony import */ var _components_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/agregar/agregar.component */ "vUfH");
/* harmony import */ var _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/poliza/poliza.service */ "vroj");
/* harmony import */ var _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/descargar/descargar.component */ "x4zf");
/* harmony import */ var _components_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/editar/editar.component */ "RO5S");







//Addons







//routes




//Services







const routes = [
    { path: '', component: _components_polizas_polizas_component__WEBPACK_IMPORTED_MODULE_16__["PolizasComponent"] },
    { path: 'polizas/agregar', component: _components_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_17__["AgregarComponent"] },
    { path: 'polizas/editar/:_id', component: _components_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__["EditarComponent"] },
    { path: 'polizas/descargar/:_id', component: _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_19__["DescargarComponent"] },
];
const maskConfig = {
    validation: false,
};
class AppModule {
    constructor(route) {
        this.route = route;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
        _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_18__["PolizaService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLibModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot(maskConfig),
            angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                timeOut: 1500,
                progressBar: true,
                progressAnimation: 'increasing',
                preventDuplicates: true,
                positionClass: 'toast-bottom-left',
                closeButton: true,
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
        _components_polizas_polizas_component__WEBPACK_IMPORTED_MODULE_16__["PolizasComponent"],
        _components_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_17__["AgregarComponent"],
        _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_19__["DescargarComponent"],
        _components_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__["EditarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLibModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                    _components_polizas_polizas_component__WEBPACK_IMPORTED_MODULE_16__["PolizasComponent"],
                    _components_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_17__["AgregarComponent"],
                    _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_19__["DescargarComponent"],
                    _components_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__["EditarComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLibModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot(maskConfig),
                    angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                        timeOut: 1500,
                        progressBar: true,
                        progressAnimation: 'increasing',
                        preventDuplicates: true,
                        positionClass: 'toast-bottom-left',
                        closeButton: true,
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
                    _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_18__["PolizaService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZiEG":
/*!**********************************!*\
  !*** ./src/app/models/poliza.ts ***!
  \**********************************/
/*! exports provided: Poliza */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poliza", function() { return Poliza; });
class Poliza {
    constructor(_id = "", nombrePropuesta = "POLIZA", nroPoliza = 0, fcPropuesta = Date.now().toString(), montoAsegurado = 0, nombreAseguradora = "", alias = "", ramo = "", rutCliente = "", nombreCliente = "", rutAcreedor = "", nombreAcreedor = "", telefonoContacto = 0, nombreContacto = "", direccion = "", region = "", comuna = "", formaPago = "", nroCuotas = 0, fcPrimeraCuota = Date.now.toString(), comisionEmpresa = 0, inicioVigencia = Date.now.toString(), finVigencia = Date.now.toString(), primaAfecta = 0, primaExenta = 0, primaNeta = 0, iva = 0, primaBruta = 0, tipoMoneda = "", comisionExenta = 0, comisionAfecta = 0, montoTotal = 0, cobertura = "", limites = "", estado = "EMISION", estadoPago = "PENDIENTE", nombreReferido = "", comisionReferido = 0, valorReferido = 0, numeroEndoso = 0, items = "") {
        this._id = _id;
        this.numeroEndoso = numeroEndoso;
        this.nombrePropuesta = nombrePropuesta;
        this.fcPropuesta = fcPropuesta;
        this.montoAsegurado = montoAsegurado;
        this.nombreAseguradora = nombreAseguradora;
        this.ramo = ramo;
        this.nroPoliza = nroPoliza;
        this.alias = alias;
        this.rutCliente = rutCliente;
        this.nombreCliente = nombreCliente;
        this.rutAcreedor = rutAcreedor;
        this.nombreAcreedor = nombreAcreedor;
        this.telefonoContacto = telefonoContacto;
        this.direccion = direccion;
        this.region = region;
        this.comuna = comuna;
        this.formaPago = formaPago;
        this.nroCuotas = nroCuotas;
        this.fcPrimeraCuota = fcPrimeraCuota;
        this.inicioVigencia = inicioVigencia;
        this.finVigencia = finVigencia;
        this.primaAfecta = primaAfecta;
        this.primaExenta = primaExenta;
        this.primaNeta = primaNeta;
        this.iva = iva;
        this.primaBruta = primaBruta;
        this.tipoMoneda = tipoMoneda;
        this.comisionExenta = comisionExenta;
        this.comisionAfecta = comisionAfecta;
        this.montoTotal = montoTotal;
        this.cobertura = cobertura;
        this.limites = limites;
        this.estado = estado;
        this.estadoPago = estadoPago;
        this.nombreContacto = nombreContacto;
        this.nombreReferido = nombreReferido;
        this.comisionReferido = comisionReferido;
        this.valorReferido = valorReferido;
        this.items = items;
    }
}


/***/ }),

/***/ "vUfH":
/*!*********************************************************!*\
  !*** ./src/app/components/agregar/agregar.component.ts ***!
  \*********************************************************/
/*! exports provided: AgregarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarComponent", function() { return AgregarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/poliza/poliza.service */ "vroj");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AgregarComponent_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r38.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AgregarComponent {
    //form: FormData = new FormData();
    constructor(poliza, toastr, http) {
        this.poliza = poliza;
        this.toastr = toastr;
        this.http = http;
        this.date = new Date().toISOString().slice(0, 10);
        this.inicioVigencia = new Date().toISOString().slice(0, 10);
        this.finVigencia = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 10);
        this.primeraCuota = new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().slice(0, 10);
    }
    loadScript() {
        const node = document.createElement('script');
        node.src = 'assets/js/comuna.js'; // put there your js file location
        node.type = 'text/javascript';
        node.async = true;
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    ngOnInit() {
        this.poliza.poliza = [];
        this.loadScript();
        this.nroProp();
    }
    onFileSelect(event) {
        this.items = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.img = reader.result;
        reader.readAsDataURL(this.items);
    }
    createPoliza(form) {
        try {
            if (form.valid) {
                if (this.poliza.createPoliza(form.value, this.items)
                    .subscribe(res => console.log('Propuesta Añadida'))) {
                    this.toastrSucces();
                }
            }
        }
        catch (error) {
            console.log(error);
            this.toastrError();
        }
    }
    toastrSucces() {
        this.toastr.success('Se ha guardado la propuesta correctamente', 'Éxito!!');
    }
    toastrError() {
        this.toastr.error('No se ha podido  guardar la póliza, revise que los campos esten correctamente llenado', 'Error!!');
    }
    nroProp() {
        this.poliza.nroPropuesta()
            .subscribe(res => {
            this.poliza.poliza = res;
            console.log(res);
            this.load(this.poliza.poliza);
        });
    }
    load(nro) {
        this.poliza.selectPoliza.nroPropuesta = nro;
        this.poliza.selectPoliza.fcPropuesta = this.date;
        this.poliza.selectPoliza.inicioVigencia = this.inicioVigencia;
        this.poliza.selectPoliza.finVigencia = this.finVigencia;
        this.poliza.selectPoliza.formaPago = "PAC";
        this.poliza.selectPoliza.fcPrimeraCuota = this.primeraCuota;
    }
    calcularIva(afecta) {
        this.poliza.selectPoliza.iva = parseFloat((afecta * 0.19).toFixed(2));
        console.log("Iva: " + this.poliza.selectPoliza.iva);
        return this.poliza.selectPoliza.iva;
    }
    calcularNeta(afecta, exenta) {
        this.poliza.selectPoliza.primaNeta = (afecta + exenta);
        console.log("Neta: " + this.poliza.selectPoliza.primaNeta);
        this.calcularBruta(this.poliza.selectPoliza.primaNeta, this.calcularIva(afecta));
        return this.poliza.selectPoliza.primaNeta;
    }
    calcularBruta(neta, iva) {
        this.poliza.selectPoliza.primaBruta = ((neta + iva).toFixed(2));
        console.log("bruta: " + this.poliza.selectPoliza.primaBruta);
        return this.poliza.selectPoliza.primaBruta;
    }
    calcularKonex(comisionAfecta, comisionExenta, afecta, exenta) {
        const a = (afecta * (comisionAfecta / 100));
        const b = exenta * (comisionExenta / 100);
        console.log("A: " + a + "B: " + b);
        this.poliza.selectPoliza.montoTotal = parseFloat((a + b).toFixed(2));
        console.log("comision Konex: " + this.poliza.selectPoliza.montoTotal);
        return this.poliza.selectPoliza.montoTotal;
    }
    calcReferido(x) {
        const a = this.calcularKonex(this.poliza.selectPoliza.comisionAfecta, this.poliza.selectPoliza.comisionExenta, this.poliza.selectPoliza.primaAfecta, this.poliza.selectPoliza.primaExenta);
        console.log(a);
        this.poliza.selectPoliza.comisionReferido = parseFloat((+a * (x / 100)).toFixed(2));
        console.log("referido: " + this.poliza.selectPoliza.comisionReferido);
    }
}
AgregarComponent.ɵfac = function AgregarComponent_Factory(t) { return new (t || AgregarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AgregarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgregarComponent, selectors: [["app-agregar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]])], decls: 220, vars: 40, consts: [[1, "center", "m-1", "pt-2"], ["ngNativeValidate", "", "enctype", "multipart/form-data", "method", "POST", 1, "ml-5", "mr-5", 3, "ngSubmit"], ["polizaForm", "ngForm"], [1, "p-0.5"], [1, "d-flex", "justify-content-end"], ["type", "hidden", "id", "nombrePropuesta", "name", "nombrePropuesta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombrePropuesta", "ngModel"], ["type", "hidden", "id", "numeroEndoso", "name", "numeroEndoso", 1, "form-control", 3, "ngModel", "ngModelChange"], ["numeroEndoso", "ngModel"], [1, "col-sm-2", "col-md-2", "col-lg-2"], ["type", "hidden", "id", "nroPoliza", "value", "0", "name", "nroPoliza", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nroPoliza", "ngModel"], [1, "col-sm-2", "col-md-2", "col-lg-2", "justify-content-start"], ["type", "hidden", "id", "nroPoliza", "name", "nroPoliza", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "fcPropuesta"], ["type", "date", "id", "fcPropuesta", "name", "fcPropuesta", "readonly", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fcPropuesta", "ngModel"], ["for", "nroPropuesta n"], ["type", "Text", "value", "", "id", "nroPropuesta", "name", "nroPropuesta", "readonly", "", "required", "", 1, "form-control", "textalign-right", 3, "ngModel", "ngModelChange"], ["nroPropuesta", "ngModel"], [1, "p-3"], ["id", "DatosAsegurados", 1, "center", "form-row"], [1, "col-md-6"], ["for", "company", 1, "control-label"], ["type", "text", "placeholder", "Nombre Compa\u00F1ia", "id", "company", "name", "nombreAseguradora", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreAseguradora", "ngModel"], [1, "col-md-4", "col-lg-2"], ["for", "ramo"], ["type", "text", "placeholder", "Ej: Incendios", "id", "ramo", "name", "ramo", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ramo", "ngModel"], ["for", "montoAsegurado"], ["type", "text", "placeholder", "Ej: Incendios", "id", "montoAsegurado", "name", "montoAsegurado", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["montoAsegurado", "ngModel"], [1, "center", "form-row", "mt-3"], [1, "col-md-4", "col-lg-1"], ["for", "rutCliente"], ["type", "Text", "placeholder", "Rut Cliente", "id", "rutCliente", "name", "rutCliente", "mask", "90.000.000-A || 00.000.000-A", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rutCliente", "ngModel"], ["for", "alias"], ["type", "text", "placeholder", "Nombre Fantasia", "id", "alias", "name", "alias", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alias", "ngModel"], [1, "col-md-4", "col-lg-4"], ["for", "nombreCliente"], ["type", "text", "placeholder", "Raz\u00F3n Social / Nombre Cliente", "id", "nombreCliente", "name", "nombreCliente", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreCliente", "ngModel"], ["for", "rutAcreedor"], ["type", "Text", "placeholder", "Rut Acreedor", "id", "rutAcreedor", "name", "rutAcreedor", "mask", "90.000.000-A || 00.000.000-A", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rutAcreedor", "ngModel"], ["for", "nombreAcreedor"], ["type", "text", "placeholder", "Nombre Acreedor", "id", "nombreAcreedor", "name", "nombreAcreedor", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreAcreedor", "ngModel"], ["for", "nombreContacto"], ["type", "Text", "placeholder", "Nombre Contacto", "id", "nombreContacto", "name", "nombreContacto", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreContacto", "ngModel"], ["for", "telefonoContacto"], ["type", "number", "step", "any", "placeholder", "Fono Contacto", "id", "telefonoContacto", "name", "telefonoContacto", 1, "form-control", 3, "ngModel", "ngModelChange"], ["telefonoContacto", "ngModel"], [1, "col-md-3", "col-lg-3"], ["for", "direccion"], ["type", "text", "placeholder", "Direccion Comercial", "id", "direccion", "name", "direccion", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "regiones"], ["id", "regiones", "name", "region", "ng-required", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], ["region", "ngModel"], ["for", "comunas"], ["id", "comunas", "name", "comuna", "ng-required", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comuna", "ngModel"], ["for", "inicioVigencia"], ["type", "date", "id", "inicioVigencia", "name", "inicioVigencia", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["inicioVigencia", "ngModel"], ["for", "finVigencia"], ["type", "date", "id", "finVigencia", "name", "finVigencia", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["finVigencia", "ngModel"], ["for", "primaAfecta"], ["type", "number", "step", "any", "placeholder", "Prima Afecta", "id", "primaAfecta", "name", "primaAfecta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["primaAfecta", "ngModel"], ["for", "primaExenta"], ["type", "number", "step", "any", "id", "primaExenta", "placeholder", "Prima Exenta", "name", "primaExenta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["primaExenta", "ngModel"], ["for", "primaNeta"], ["type", "number", "step", "any", "id", "primaNeta", "placeholder", " Prima NETA ", "name", "primaNeta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["primaNeta", "ngModel"], ["for", "iva"], ["type", "number", "step", "any", "id", "iva", "placeholder", "iva", "name", "iva", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["iva", "ngModel"], ["for", "primaBruta"], ["type", "number", "step", "any", "id", "primaBruta", "placeholder", " Prima Bruta ", "name", "primaBruta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["primaBruta", "ngModel"], ["for", "tipoMoneda"], ["type", "text", "id", "tipoMoneda", "placeholder", "Tipo de moneda como se pagara", "name", "tipoMoneda", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tipoMoneda", "ngModel"], [1, "col-sm-2", "col-md-2", "col-lg-2", "mt-3"], ["for", "comisionAfecta"], ["type", "number", "step", "any", "placeholder", "Valor Afecta %", "id", "comisionAfecta", "name", "comisionAfecta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["comisionAfecta", "ngModel"], ["for", "comisionExenta"], ["type", "number", "step", "any", "id", "comisionExenta", "placeholder", " Valor Exenta % ", "name", "comisionExenta", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["comisionExenta", "ngModel"], ["for", "montoTotal"], ["type", "number", "step", "any", "placeholder", " Monto Asegurado Total ", "value", "0", "id", "montoTotal", "name", "montoTotal", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["montoTotal", "ngModel"], [1, "col-sm-2", "col-md-1", "col-lg-1", "mt-3"], ["for", "porcentajeReferido"], ["type", "number", "step", "any", "value", "0", "id", "valorReferido", "name", "valorReferido", 1, "form-control", "n", 3, "ngModel", "ngModelChange", "change"], ["valorReferido", "ngModel"], ["for", "comisionReferido"], ["type", "number", "step", "any", "value", "0", "id", "comisionReferido", "name", "comisionReferido", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["comisionReferido", "ngModel"], ["for", "formaPago"], ["name", "", "id", "formaPago", "name", "formaPago", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formaPago", "ngModel"], ["selected", "selected", "value", "PAC"], ["value", "PAT"], ["value", "DIRECTO"], ["for", "nroCuotas"], ["type", "number", "step", "any", "id", "nroCuotas", "value", "0", "name", "nroCuotas", "required", "", 1, "form-control", "n", 3, "ngModel", "ngModelChange"], ["nroCuotas", "ngModel"], ["for", "fcPrimeraCuota"], ["type", "date", "id", "fcPrimeraCuota", "name", "fcPrimeraCuota", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fcPrimeraCuota", "ngModel"], ["for", "cobertura"], ["id", "cobertura", "cols", "200", "rows", "auto", "name", "cobertura", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cobertura", "ngModel"], ["for", "limites"], ["cols", "200", "rows", "auto", "id", "limites", "name", "limites", 1, "form-control", 3, "ngModel", "ngModelChange"], ["limites", "ngModel"], [1, "col-lg-4", "col-md-4"], ["for", "items"], ["type", "file", "name", "photo", "observeFiles", "", 2, "box-shadow", "none", 3, "change"], ["class", "d-flex align-items-center justify-content-center", 4, "ngIf"], ["type", "hidden", "id", "estado", "name", "estado", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["estado", "ngModel"], ["type", "hidden", "id", "estadoPago", "name", "estadoPago", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["estadoPago", "ngModel"], [1, "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "bg-primary", "m-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["alt", "", "name", "img", "accept", "image/*", 1, "img-responsive", 3, "src"]], template: function AgregarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Propuesta Poliza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgregarComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createPoliza(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_6_listener($event) { return ctx.poliza.selectPoliza.nombrePropuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_8_listener($event) { return ctx.poliza.selectPoliza.numeroEndoso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_11_listener($event) { return ctx.poliza.selectPoliza.nroPoliza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_14_listener($event) { return ctx.poliza.selectPoliza.nroPoliza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fecha Propuesta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_19_listener($event) { return ctx.poliza.selectPoliza.fcPropuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Numero Propuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_24_listener($event) { return ctx.poliza.selectPoliza.nroPropuesta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Compa\u00F1ia Aseguradora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_32_listener($event) { return ctx.poliza.selectPoliza.nombreAseguradora = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Ramo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_37_listener($event) { return ctx.poliza.selectPoliza.ramo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Monto Asegurado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_42_listener($event) { return ctx.poliza.selectPoliza.montoAsegurado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Rut Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_48_listener($event) { return ctx.poliza.selectPoliza.rutCliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Nombre Fantasia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_53_listener($event) { return ctx.poliza.selectPoliza.alias = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Raz\u00F3n Social / Nombre Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_58_listener($event) { return ctx.poliza.selectPoliza.nombreCliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Rut Acreedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_63_listener($event) { return ctx.poliza.selectPoliza.rutAcreedor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Nombre Acreedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_68_listener($event) { return ctx.poliza.selectPoliza.nombreAcreedor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Nombre Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_73_listener($event) { return ctx.poliza.selectPoliza.nombreContacto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_78_listener($event) { return ctx.poliza.selectPoliza.telefonoContacto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Direccion Comercial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 59, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_84_listener($event) { return ctx.poliza.selectPoliza.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "select", 62, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_select_ngModelChange_89_listener($event) { return ctx.poliza.selectPoliza.region = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Comuna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 65, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_select_ngModelChange_94_listener($event) { return ctx.poliza.selectPoliza.comuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Inicio Vigencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 68, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_102_listener($event) { return ctx.poliza.selectPoliza.inicioVigencia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Fin Vigencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 71, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_107_listener($event) { return ctx.poliza.selectPoliza.finVigencia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Prima Afecta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_115_listener($event) { return ctx.poliza.selectPoliza.primaAfecta = $event; })("change", function AgregarComponent_Template_input_change_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](121); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](151); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161); ctx.calcularIva(_r22.value); ctx.calcularNeta(_r22.value, _r23.value); ctx.calcularKonex(_r28.value, _r29.value, _r22.value, _r23.value); return ctx.calcReferido(_r31.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Prima Exenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_120_listener($event) { return ctx.poliza.selectPoliza.primaExenta = $event; })("change", function AgregarComponent_Template_input_change_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](121); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](151); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161); ctx.calcularNeta(_r22.value, _r23.value); ctx.calcularKonex(_r28.value, _r29.value, _r22.value, _r23.value); return ctx.calcReferido(_r31.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Prima Neta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 80, 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_125_listener($event) { return ctx.poliza.selectPoliza.primaNeta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " IVA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "input", 83, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_130_listener($event) { return ctx.poliza.selectPoliza.iva = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Prima Bruta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_135_listener($event) { return ctx.poliza.selectPoliza.primaBruta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Tipo Moneda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "input", 89, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_140_listener($event) { return ctx.poliza.selectPoliza.tipoMoneda = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Comision Afecta % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "input", 93, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_145_listener($event) { return ctx.poliza.selectPoliza.comisionAfecta = $event; })("change", function AgregarComponent_Template_input_change_145_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](121); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](151); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161); ctx.calcularNeta(_r22.value, _r23.value); ctx.calcularKonex(_r28.value, _r29.value, _r22.value, _r23.value); return ctx.calcReferido(_r31.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Comisi\u00F3n Exenta % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 96, 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_150_listener($event) { return ctx.poliza.selectPoliza.comisionExenta = $event; })("change", function AgregarComponent_Template_input_change_150_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](121); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](151); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161); ctx.calcularNeta(_r22.value, _r23.value); ctx.calcularKonex(_r28.value, _r29.value, _r22.value, _r23.value); return ctx.calcReferido(_r31.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Comision Total KONEX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 99, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_155_listener($event) { return ctx.poliza.selectPoliza.montoTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Com. referido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "input", 103, 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_160_listener($event) { return ctx.poliza.selectPoliza.valorReferido = $event; })("change", function AgregarComponent_Template_input_change_160_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161); return ctx.calcReferido(_r31.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Com. referido UF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "input", 106, 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_165_listener($event) { return ctx.poliza.selectPoliza.comisionReferido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Forma de Pago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "select", 109, 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_select_ngModelChange_173_listener($event) { return ctx.poliza.selectPoliza.formaPago = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " PAC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " PAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " DIRECTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Nro Cuotas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 115, 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_184_listener($event) { return ctx.poliza.selectPoliza.nroCuotas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Primera Cuota ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "input", 118, 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_189_listener($event) { return ctx.poliza.selectPoliza.fcPrimeraCuota = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "label", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Coberturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "textarea", 121, 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_textarea_ngModelChange_197_listener($event) { return ctx.poliza.selectPoliza.cobertura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Limites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "textarea", 124, 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_textarea_ngModelChange_202_listener($event) { return ctx.poliza.selectPoliza.limites = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "label", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AgregarComponent_Template_input_change_209_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, AgregarComponent_div_211_Template, 2, 1, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "input", 130, 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_213_listener($event) { return ctx.poliza.selectPoliza.estado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "input", 132, 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_215_listener($event) { return ctx.poliza.selectPoliza.estadoPago = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombrePropuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.numeroEndoso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroPoliza);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroPoliza);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.fcPropuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroPropuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreAseguradora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.ramo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.montoAsegurado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.rutCliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.alias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreCliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.rutAcreedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreAcreedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nombreContacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.telefonoContacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.inicioVigencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.finVigencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaAfecta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaExenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaNeta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.iva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.primaBruta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.tipoMoneda);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comisionAfecta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comisionExenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.montoTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.valorReferido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.comisionReferido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.formaPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.nroCuotas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.fcPrimeraCuota);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.cobertura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.limites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poliza.selectPoliza.estadoPago);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".form-group.required[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]:after {\r\n    content:\"*\";\r\n    color:red;\r\n}\r\n\r\n.noFrame[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background-color: transparent;\r\n    border: 0px;\r\n    outline: none;\r\n    box-shadow: none;\r\n    width:5px;\r\n    color:transparent;\r\n    cursor:default;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n\r\n[_ngcontent-%COMP%]::selection{\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0VBQXNFO0lBQ3RFLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsYUFBYTtJQUdiLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYWdyZWdhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAucmVxdWlyZWQgLmNvbnRyb2wtbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIipcIjtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLm5vRnJhbWV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgd2lkdGg6NXB4O1xyXG4gICAgY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6ZGVmYXVsdDtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgregarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agregar',
                templateUrl: './agregar.component.html',
                styleUrls: ['./agregar.component.css'],
                providers: [_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]]
            }]
    }], function () { return [{ type: _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vroj":
/*!***************************************************!*\
  !*** ./src/app/services/poliza/poliza.service.ts ***!
  \***************************************************/
/*! exports provided: PolizaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolizaService", function() { return PolizaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_poliza__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/poliza */ "ZiEG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PolizaService {
    // readonly URI = 'http://25.1.200.237';
    constructor(http) {
        this.http = http;
        this.URI = 'http://localhost:3000';
        this.selectPoliza = new src_app_models_poliza__WEBPACK_IMPORTED_MODULE_1__["Poliza"]();
    }
    createPoliza(poliza, photo) {
        const fd = new FormData();
        fd.append('numeroEndoso', poliza.numeroEndoso.toString());
        fd.append('nroPropuesta', poliza.nroPropuesta.toString());
        fd.append('nombrePropuesta', poliza.nombrePropuesta);
        fd.append('fcPropuesta', poliza.fcPropuesta);
        fd.append('montoAsegurado', poliza.montoAsegurado.toString());
        fd.append('nombreAseguradora', poliza.nombreAseguradora);
        fd.append('ramo', poliza.ramo);
        fd.append('nroPoliza', poliza.nroPoliza.toString());
        fd.append('alias', poliza.alias);
        fd.append('rutCliente', poliza.rutCliente);
        fd.append('nombreCliente', poliza.nombreCliente);
        fd.append('rutAcreedor', poliza.rutAcreedor);
        fd.append('nombreAcreedor', poliza.nombreAcreedor);
        fd.append('telefonoContacto', poliza.telefonoContacto.toString());
        fd.append('nombreContacto', poliza.nombreContacto);
        fd.append('direccion', poliza.direccion);
        fd.append('region', poliza.region);
        fd.append('comuna', poliza.comuna);
        fd.append('formaPago', poliza.formaPago);
        fd.append('nroCuotas', poliza.nroCuotas.toString());
        fd.append('fcPrimeraCuota', poliza.fcPrimeraCuota);
        fd.append('inicioVigencia', poliza.inicioVigencia);
        fd.append('finVigencia', poliza.finVigencia);
        fd.append('primaAfecta', poliza.primaAfecta.toString());
        fd.append('primaExenta', poliza.primaExenta.toString());
        fd.append('primaNeta', poliza.primaNeta.toString());
        fd.append('iva', poliza.iva.toString());
        fd.append('primaBruta', poliza.primaBruta.toString());
        fd.append('tipoMoneda', poliza.tipoMoneda);
        fd.append('comisionExenta', poliza.comisionExenta.toString());
        fd.append('comisionAfecta', poliza.comisionAfecta.toString());
        fd.append('montoTotal', poliza.montoTotal.toString());
        fd.append('cobertura', poliza.cobertura);
        fd.append('limites', poliza.limites);
        fd.append('estado', poliza.estado);
        fd.append('estadoPago', poliza.estadoPago);
        fd.append('nombreReferido', poliza.nombreReferido);
        fd.append('comisionReferido', poliza.comisionReferido.toString());
        fd.append('valorReferido', poliza.valorReferido.toString());
        fd.append('items', photo);
        return this.http.post(this.URI + `/polizas/agregar`, fd);
    }
    nroPropuesta() {
        return this.http.get(this.URI + `/polizas/agregar`);
    }
    getPolizas() {
        return this.http.get(this.URI);
    }
    endPoliza(poliza, photo) {
        const fd = new FormData();
        fd.append('numeroEndoso', poliza.numeroEndoso.toString());
        fd.append('nroPropuesta', poliza.nroPropuesta.toString());
        fd.append('nombrePropuesta', poliza.nombrePropuesta);
        fd.append('fcPropuesta', poliza.fcPropuesta);
        fd.append('montoAsegurado', poliza.montoAsegurado.toString());
        fd.append('nombreAseguradora', poliza.nombreAseguradora);
        fd.append('ramo', poliza.ramo);
        fd.append('nroPoliza', poliza.nroPoliza.toString());
        fd.append('alias', poliza.alias);
        fd.append('rutCliente', poliza.rutCliente);
        fd.append('nombreCliente', poliza.nombreCliente);
        fd.append('rutAcreedor', poliza.rutAcreedor);
        fd.append('nombreAcreedor', poliza.nombreAcreedor);
        fd.append('telefonoContacto', poliza.telefonoContacto.toString());
        fd.append('nombreContacto', poliza.nombreContacto);
        fd.append('direccion', poliza.direccion);
        fd.append('region', poliza.region);
        fd.append('comuna', poliza.comuna);
        fd.append('formaPago', poliza.formaPago);
        fd.append('nroCuotas', poliza.nroCuotas.toString());
        fd.append('fcPrimeraCuota', poliza.fcPrimeraCuota);
        fd.append('inicioVigencia', poliza.inicioVigencia);
        fd.append('finVigencia', poliza.finVigencia);
        fd.append('primaAfecta', poliza.primaAfecta.toString());
        fd.append('primaExenta', poliza.primaExenta.toString());
        fd.append('primaNeta', poliza.primaNeta.toString());
        fd.append('iva', poliza.iva.toString());
        fd.append('primaBruta', poliza.primaBruta.toString());
        fd.append('tipoMoneda', poliza.tipoMoneda);
        fd.append('comisionExenta', poliza.comisionExenta.toString());
        fd.append('comisionAfecta', poliza.comisionAfecta.toString());
        fd.append('montoTotal', poliza.montoTotal.toString());
        fd.append('cobertura', poliza.cobertura);
        fd.append('limites', poliza.limites);
        fd.append('estado', poliza.estado);
        fd.append('estadoPago', poliza.estadoPago);
        fd.append('nombreReferido', poliza.nombreReferido);
        fd.append('comisionReferido', poliza.comisionReferido.toString());
        fd.append('valorReferido', poliza.valorReferido.toString());
        fd.append('items', photo);
        return this.http.post(this.URI + `/polizas/editar`, fd);
    }
    descPoliza(id) {
        return this.http.get(this.URI + `/polizas/descargar/` + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getPoliza(id) {
        return this.http.get(this.URI + `/polizas/descargar/` + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    mainPoliza(id) {
        return this.http.get(this.URI + `/` + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    editPoliza(poliza, photo) {
        if (photo != undefined || photo != null) {
            const fd = new FormData();
            fd.append('numeroEndoso', poliza.numeroEndoso.toString());
            fd.append('nroPropuesta', poliza.nroPropuesta.toString());
            fd.append('nombrePropuesta', poliza.nombrePropuesta);
            fd.append('fcPropuesta', poliza.fcPropuesta);
            fd.append('montoAsegurado', poliza.montoAsegurado.toString());
            fd.append('nombreAseguradora', poliza.nombreAseguradora);
            fd.append('ramo', poliza.ramo);
            fd.append('nroPoliza', poliza.nroPoliza.toString());
            fd.append('alias', poliza.alias);
            fd.append('rutCliente', poliza.rutCliente);
            fd.append('nombreCliente', poliza.nombreCliente);
            fd.append('rutAcreedor', poliza.rutAcreedor);
            fd.append('nombreAcreedor', poliza.nombreAcreedor);
            fd.append('telefonoContacto', poliza.telefonoContacto.toString());
            fd.append('nombreContacto', poliza.nombreContacto);
            fd.append('direccion', poliza.direccion);
            fd.append('region', poliza.region);
            fd.append('comuna', poliza.comuna);
            fd.append('formaPago', poliza.formaPago);
            fd.append('nroCuotas', poliza.nroCuotas.toString());
            fd.append('fcPrimeraCuota', poliza.fcPrimeraCuota);
            fd.append('inicioVigencia', poliza.inicioVigencia);
            fd.append('finVigencia', poliza.finVigencia);
            fd.append('primaAfecta', poliza.primaAfecta.toString());
            fd.append('primaExenta', poliza.primaExenta.toString());
            fd.append('primaNeta', poliza.primaNeta.toString());
            fd.append('iva', poliza.iva.toString());
            fd.append('primaBruta', poliza.primaBruta.toString());
            fd.append('tipoMoneda', poliza.tipoMoneda);
            fd.append('comisionExenta', poliza.comisionExenta.toString());
            fd.append('comisionAfecta', poliza.comisionAfecta.toString());
            fd.append('montoTotal', poliza.montoTotal.toString());
            fd.append('cobertura', poliza.cobertura);
            fd.append('limites', poliza.limites);
            fd.append('estado', poliza.estado);
            fd.append('estadoPago', poliza.estadoPago);
            fd.append('nombreReferido', poliza.nombreReferido);
            fd.append('comisionReferido', poliza.comisionReferido.toString());
            fd.append('valorReferido', poliza.valorReferido.toString());
            fd.append('items', photo);
            return this.http.put(this.URI + `/polizas/editar/${poliza._id}`, fd);
        }
        return this.http.put(this.URI + `/polizas/editar/${poliza._id}`, poliza);
    }
    estado(poliza) {
        return this.http.put(this.URI + `/${poliza._id}`, poliza);
    }
}
PolizaService.ɵfac = function PolizaService_Factory(t) { return new (t || PolizaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PolizaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolizaService, factory: PolizaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolizaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wjFR":
/*!*********************************************************!*\
  !*** ./src/app/components/polizas/polizas.component.ts ***!
  \*********************************************************/
/*! exports provided: PolizasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolizasComponent", function() { return PolizasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/poliza/poliza.service */ "vroj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ "tmjD");













const _c0 = function (a0) { return [a0]; };
function PolizasComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolizasComponent_tr_85_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const poliza_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89); ctx_r4.modalService.open(_r1); return ctx_r4.traerPoliza(poliza_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ESTADO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poliza_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, "/polizas/editar/" + poliza_r3._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, "/polizas/descargar/" + poliza_r3._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 40, poliza_r3.nroPropuesta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 44, poliza_r3.numeroEndoso, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 48, poliza_r3.nroPoliza, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.nombrePropuesta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.ramo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](23, 52, poliza_r3.montoAsegurado, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.alias, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.nombreAseguradora, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 56, poliza_r3.rutCliente, "99.000.000-A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.nombreCliente, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 59, poliza_r3.rutAcreedor, "99.000.000-A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.nombreAcreedor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.nombreContacto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.telefonoContacto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.direccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.comuna, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](50, 62, poliza_r3.inicioVigencia, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 65, poliza_r3.finVigencia, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](56, 68, poliza_r3.primaAfecta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](59, 72, poliza_r3.primaExenta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](62, 76, poliza_r3.primaNeta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](65, 80, poliza_r3.iva, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](68, 84, poliza_r3.primaBruta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.tipoMoneda, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](73, 88, poliza_r3.comisionAfecta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](76, 92, poliza_r3.comisionExenta, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](79, 96, poliza_r3.montoTotal, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](82, 100, poliza_r3.valorReferido, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](85, 104, poliza_r3.comisionReferido, "separator", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.formaPago, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.nroCuotas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](92, 108, poliza_r3.fcPrimeraCuota, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.cobertura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.limites, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.items, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", poliza_r3.estadoPago, " ");
} }
function PolizasComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Propuesta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " n\u00FAmero: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolizasComponent_ng_template_88_Template_button_click_6_listener() { const modal_r6 = ctx.$implicit; return modal_r6.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.polizaService.selectPoliza._id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.polizaService.selectPoliza.nroPropuesta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.polizaService.selectPoliza.nroPoliza = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.polizaService.selectPoliza.numeroEndoso = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.polizaService.selectPoliza.nombrePropuesta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.polizaService.selectPoliza.ramo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.polizaService.selectPoliza.montoAsegurado = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.polizaService.selectPoliza.alias = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.polizaService.selectPoliza.nombreAseguradora = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.polizaService.selectPoliza.rutCliente = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.polizaService.selectPoliza.nombreCliente = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.polizaService.selectPoliza.rutAcreedor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.polizaService.selectPoliza.nombreAcreedor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.polizaService.selectPoliza.nombreContacto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.polizaService.selectPoliza.telefonoContacto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.polizaService.selectPoliza.direccion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.polizaService.selectPoliza.region = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.polizaService.selectPoliza.comuna = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.polizaService.selectPoliza.inicioVigencia = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.polizaService.selectPoliza.finVigencia = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.polizaService.selectPoliza.primaAfecta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.polizaService.selectPoliza.primaExenta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.polizaService.selectPoliza.primaNeta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.polizaService.selectPoliza.iva = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.polizaService.selectPoliza.primaBruta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.polizaService.selectPoliza.tipoMoneda = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.polizaService.selectPoliza.comisionAfecta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.polizaService.selectPoliza.comisionExenta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_69_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.polizaService.selectPoliza.montoTotal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_71_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.polizaService.selectPoliza.comisionReferido = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.polizaService.selectPoliza.valorReferido = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_75_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.polizaService.selectPoliza.formaPago = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.polizaService.selectPoliza.nroCuotas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.polizaService.selectPoliza.cobertura = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.polizaService.selectPoliza.limites = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.polizaService.selectPoliza.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Estado de Propuesta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_90_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.polizaService.selectPoliza.estado = $event; })("click", function PolizasComponent_ng_template_88_Template_input_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.estadoPendiente(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " EMISION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_94_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.polizaService.selectPoliza.estado = $event; })("click", function PolizasComponent_ng_template_88_Template_input_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.estadoCerrado(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " CERRADO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Estado de Pago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_101_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.polizaService.selectPoliza.estadoPago = $event; })("click", function PolizasComponent_ng_template_88_Template_input_click_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.pagoPagado(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " PAGADO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_105_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.polizaService.selectPoliza.estadoPago = $event; })("click", function PolizasComponent_ng_template_88_Template_input_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.pagoPendiente(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " PENDIENTE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolizasComponent_ng_template_88_Template_input_ngModelChange_109_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.polizaService.selectPoliza.estadoPago = $event; })("click", function PolizasComponent_ng_template_88_Template_input_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.pagoAtrasado(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " ATRASADO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolizasComponent_ng_template_88_Template_button_click_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const modal_r6 = ctx.$implicit; const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r92.editarEstado(_r7); return modal_r6.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.polizaService.selectPoliza.nroPropuesta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nroPropuesta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nroPoliza);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.numeroEndoso);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nombrePropuesta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.ramo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.montoAsegurado);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nombreAseguradora);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.rutCliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nombreCliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.rutAcreedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nombreAcreedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nombreContacto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.telefonoContacto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.comuna);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.inicioVigencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.finVigencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.primaAfecta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.primaExenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.primaNeta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.iva);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.primaBruta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.tipoMoneda);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.comisionAfecta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.comisionExenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.montoTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.comisionReferido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.valorReferido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.formaPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.nroCuotas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.cobertura);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.limites);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.estadoPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.estadoPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.polizaService.selectPoliza.estadoPago);
} }
class PolizasComponent {
    constructor(polizaService, router, route, modalService, toastr) {
        this.polizaService = polizaService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.toastr = toastr;
        this.closeResult = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    toastrSucces(cuerpo, titulo) {
        this.toastr.success(cuerpo, titulo);
    }
    toastrError(cuerpo, titulo) {
        this.toastr.error(cuerpo, titulo);
    }
    ngOnInit() {
        this.polizaService.poliza = [];
        this.getPolizas();
        this._id = this.route.snapshot.params['_id'];
        this.dtOptions = {
            scrollY: true,
            sScroll: 100,
            scrollX: true,
            // Declare the use of the extension in the dom parameter
            dom: 'Bfrtip',
            // Configure the buttons
            buttons: [
                {
                    extend: 'colvis',
                    text: "Visibilidad Columnas"
                },
                {
                    extend: 'excel',
                    exportOptions: {
                        columns: ':visible',
                    },
                }
            ],
            language: {
                processing: "Procesando...",
                search: "Buscar:",
                lengthMenu: "Mostrar _MENU_ &eacute;l&eacute;ments",
                info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
                infoEmpty: "Mostrando ningún elemento.",
                infoFiltered: "(filtrado _MAX_ elementos total)",
                infoPostFix: "",
                loadingRecords: "Cargando registros...",
                zeroRecords: "No se encontraron registros",
                emptyTable: "No hay datos disponibles en la tabla",
                paginate: {
                    first: "Primero",
                    previous: "Anterior",
                    next: "Siguiente",
                    last: "Último"
                },
                aria: {
                    sortAscending: ": Activar para ordenar la tabla en orden ascendente",
                    sortDescending: ": Activar para ordenar la tabla en orden descendente"
                }
            }
        };
    }
    getPolizas() {
        this.polizaService.getPolizas()
            .subscribe(res => {
            this.polizaService.poliza = res;
            this.dtTrigger.next();
        });
    }
    ;
    traerPoliza(id) {
        this.polizaService.mainPoliza(id)
            .subscribe(data => {
            this.data = data;
            this.load(this.data);
        });
    }
    ;
    load(polizaService) {
        this.polizaService.selectPoliza = polizaService;
    }
    ;
    editarEstado(form) {
        if (form.valid) {
            this.polizaService.estado(form.value)
                .subscribe(res => console.log(form.value));
            this.toastrSucces("Estado modificado satisfactoriamente", "Modificacion de estado extiosa!!");
        }
        else {
            this.toastrError("No se ha podido guardar el estado debido a un problema interno, intente más tarde", "Modificación Fallida!! ");
        }
    }
    ;
    estadoPendiente(form) {
        form.value.estado = "EMISION";
        this.polizaService.selectPoliza.estado = "EMISION";
    }
    ;
    estadoCerrado(form) {
        form.value.estado = "INGRESADO";
        this.polizaService.selectPoliza.estado = "INGRESADO";
    }
    ;
    pagoPagado(form) {
        form.value.estadoPago = "PAGADO";
        this.polizaService.selectPoliza.estadoPago = "PAGADO";
    }
    ;
    pagoPendiente(form) {
        form.value.estadoPago = "PENDIENTE";
        this.polizaService.selectPoliza.estadoPago = "PENDIENTE";
    }
    ;
    pagoAtrasado(form) {
        form.value.estadoPago = "ATRASADO";
        this.polizaService.selectPoliza.estadoPago = "ATRASADO";
    }
    ;
    //abrir Modal
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    ;
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ;
}
PolizasComponent.ɵfac = function PolizasComponent_Factory(t) { return new (t || PolizasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
PolizasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolizasComponent, selectors: [["app-polizas"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]])], decls: 90, vars: 3, consts: [[1, "center", "m-4"], [1, "p-4"], ["cellspacing", "0", "datatable", "ng", "id", "propuesta", 1, "row-border", "hover", "fixed", "display", "nowrap", "cell-border", 2, "width", "fixed", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "btn", "btn-primary", "p-1", 3, "click"], [3, "routerLink"], ["src", "assets/img/edit-solid.svg", "alt", "", "srcset", "", 2, "height", "2rem", "width", "2rem"], [1, "btn", "p-1", 3, "routerLink"], ["src", "assets/img/download_111133.png", "alt", "descargar"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["modalForm", "ngForm"], ["type", "hidden", "id", "_id", "name", "_id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_id", "ngModel"], [1, "form-group", "m-2"], ["type", "hidden", "id", "nroPropuesta", "name", "nroPropuesta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nroPropuesta", "ngModel"], ["type", "hidden", "id", "nroPoliza", "name", "nroPoliza", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nroPoliza", "ngModel"], ["type", "hidden", "id", "numeroEndoso", "name", "numeroEndoso", 1, "form-control", 3, "ngModel", "ngModelChange"], ["numeroEndoso", "ngModel"], ["type", "hidden", "id", "nombrePropuesta", "name", "nombrePropuesta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombrePropuesta", "ngModel"], ["type", "hidden", "id", "ramo", "name", "ramo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ramo", "ngModel"], ["type", "hidden", "id", "montoAsegurado", "name", "montoAsegurado", 1, "form-control", 3, "ngModel", "ngModelChange"], ["montoAsegurado", "ngModel"], ["type", "hidden", "id", "alias", "name", "alias", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alias", "ngModel"], ["type", "hidden", "id", "nombreAseguradora", "name", "nombreAseguradora", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreAseguradora", "ngModel"], ["type", "hidden", "id", "rutCliente", "name", "rutCliente", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rutCliente", "ngModel"], ["type", "hidden", "id", "nombreCliente", "name", "nombreCliente", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreCliente", "ngModel"], ["type", "hidden", "id", "rutAcreedor", "name", "rutAcreedor", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rutAcreedor", "ngModel"], ["type", "hidden", "id", "nombreAcreedor", "name", "nombreAcreedor", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreAcreedor", "ngModel"], ["type", "hidden", "id", "nombreContacto", "name", "nombreContacto", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombreContacto", "ngModel"], ["type", "hidden", "id", "telefonoContacto", "name", "telefonoContacto", 1, "form-control", 3, "ngModel", "ngModelChange"], ["telefonoContacto", "ngModel"], ["type", "hidden", "id", "direccion", "name", "direccion", 1, "form-control", 3, "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["type", "hidden", "id", "region", "name", "region", 1, "form-control", 3, "ngModel", "ngModelChange"], ["region", "ngModel"], ["type", "hidden", "id", "comuna", "name", "comuna", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comuna", "ngModel"], ["type", "hidden", "id", "inicioVigencia", "name", "inicioVigencia", 1, "form-control", 3, "ngModel", "ngModelChange"], ["inicioVigencia", "ngModel"], ["type", "hidden", "id", "finVigencia", "name", "finVigencia", 1, "form-control", 3, "ngModel", "ngModelChange"], ["finVigencia", "ngModel"], ["type", "hidden", "id", "primaAfecta", "name", "primaAfecta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["primaAfecta", "ngModel"], ["type", "hidden", "id", "primaExenta", "name", "primaExenta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["primaExenta", "ngModel"], ["type", "hidden", "id", "primaNeta", "name", "primaNeta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["primaNeta", "ngModel"], ["type", "hidden", "id", "iva", "name", "iva", 1, "form-control", 3, "ngModel", "ngModelChange"], ["iva", "ngModel"], ["type", "hidden", "id", "primaBruta", "name", "primaBruta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["primaBruta", "ngModel"], ["type", "hidden", "id", "tipoMoneda", "name", "tipoMoneda", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tipoMoneda", "ngModel"], ["type", "hidden", "id", "comisionAfecta", "name", "comisionAfecta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comisionAfecta", "ngModel"], ["type", "hidden", "id", "comisionExenta", "name", "comisionExenta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comisionExenta", "ngModel"], ["type", "hidden", "id", "montoTotal", "name", "montoTotal", 1, "form-control", 3, "ngModel", "ngModelChange"], ["montoTotal", "ngModel"], ["type", "hidden", "id", "comisionReferido", "name", "comisionReferido", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comisionReferido", "ngModel"], ["type", "hidden", "id", "valorReferido", "name", "valorReferido", 1, "form-control", 3, "ngModel", "ngModelChange"], ["valorReferido", "ngModel"], ["type", "hidden", "id", "formaPago", "name", "formaPago", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formaPago", "ngModel"], ["type", "hidden", "id", "nroCuotas", "name", "nroCuotas", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nroCuotas", "ngModel"], ["type", "hidden", "id", "cobertura", "name", "cobertura", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cobertura", "ngModel"], ["type", "hidden", "id", "limites", "name", "limites", 1, "form-control", 3, "ngModel", "ngModelChange"], ["limites", "ngModel"], ["type", "hidden", "id", "items", "name", "items", 1, "form-control", 3, "ngModel", "ngModelChange"], ["items", "ngModel"], [1, "input-group", "d-flex", "justify-content-around"], ["for", "pendiente"], ["type", "radio", "name", "estado", "value", "EMISION", 2, "width", "20px", "height", "20px", 3, "ngModel", "ngModelChange", "click"], ["for", "cerrado"], ["type", "radio", "name", "estado", "value", "CERRADO", 3, "ngModel", "ngModelChange", "click"], [1, "input-group"], ["type", "radio", "name", "estadoPago", "value", "PAGADO", 3, "ngModel", "ngModelChange", "click"], ["type", "radio", "name", "estadoPago", "value", "PENDIENTE", 3, "ngModel", "ngModelChange", "click"], ["type", "radio", "name", "estadoPago", "value", "ATRASADO", 3, "ngModel", "ngModelChange", "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function PolizasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LISTADO DE PROPUESTAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nro Propuesta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Nro Endoso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Nro Poliza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Propuesta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ramo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Monto Asegurado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nombre Fantas\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Aseguradora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Rut Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Razon Social / Nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Rut Acreedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Nombre Acreedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Nombre Contacto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Telefono Contacto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Direccion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Comuna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Inicio Vigencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Fin Vigencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Prima Afecta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Prima Exenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Prima Neta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Prima Bruta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Tipo moneda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Comision Afecta %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Comision Exenta %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Comision Konex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Comision Referido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Comision Referido UF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Forma Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Nro Cuotas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "FechaPrimera Cuota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cobertura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Limites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Estado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Estado Pago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, PolizasComponent_tr_85_Template, 103, 115, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, PolizasComponent_ng_template_88_Template, 114, 42, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.polizaService.poliza);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]], pipes: [ngx_mask__WEBPACK_IMPORTED_MODULE_9__["MaskPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    margin: 1px;\r\n}\r\n.bg[_ngcontent-%COMP%]{\r\n    box-shadow: 1px 1px 1px 2px #6a6a6a;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { \r\n  white-space: nowrap;\r\n}\r\ndiv.dataTables_wrapper[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\ntable.dataTable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    clear: both;\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n    \r\n     }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n      font-weight: bold; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      padding: 10px 18px;\r\n      border-bottom: 1px solid black; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:active, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:active {\r\n        outline: none; }\r\ntable.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      padding: 10px 18px 6px 18px;\r\n      border-top: 1px solid black; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc_disabled[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc_disabled[_ngcontent-%COMP%] {\r\n      cursor: pointer;\r\n      *cursor: hand;\r\n      background-repeat: no-repeat;\r\n      background-position: center right; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n      background-color: #dbdbdb; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\r\n        background-color: #dbdbdb; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      padding: 8px 10px; }\r\ntable.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      border-top: 1px solid black; }\r\ntable.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], table.dataTable.row-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\r\n      border-top: none; }\r\ntable.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      border-top: 1px solid black;\r\n      border-right: 1px solid black; }\r\ntable.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n      border-left: 1px solid black; }\r\ntable.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], table.dataTable.cell-border[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\r\n      border-top: none; }\r\ntable.dataTable.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] {\r\n      background-color: #d5d5d5; }\r\ntable.dataTable.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%] {\r\n        background-color: #d5d5d5; }\r\ntable.dataTable.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n      background-color: lightgray; }\r\ntable.dataTable.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected, table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected {\r\n        background-color: lightgray; }\r\ntable.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #d6d6d6; }\r\ntable.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #d6d6d6; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%] {\r\n      background-color: #cfcfcf; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%] {\r\n      background-color: #d0d0d0; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #d2d2d2; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%] {\r\n      background-color: #cfcfcf; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%] {\r\n      background-color: #d0d0d0; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.odd.selected[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #d2d2d2; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%] {\r\n      background-color: #d6d6d6; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%] {\r\n      background-color: #d8d8d8; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #dadada; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%]    > .sorting_1[_ngcontent-%COMP%] {\r\n      background-color: #d6d6d6; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%]    > .sorting_2[_ngcontent-%COMP%] {\r\n      background-color: #d8d8d8; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.stripe[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even.selected[_ngcontent-%COMP%]    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #dadada; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > .sorting_1[_ngcontent-%COMP%] {\r\n      background-color: #c9c9c9; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > .sorting_2[_ngcontent-%COMP%] {\r\n      background-color: #cacaca; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #cdcdcd; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected    > .sorting_1[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected    > .sorting_1[_ngcontent-%COMP%] {\r\n      background-color: #c9c9c9; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected    > .sorting_2[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected    > .sorting_2[_ngcontent-%COMP%] {\r\n      background-color: #cacaca; }\r\ntable.dataTable.display[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected    > .sorting_3[_ngcontent-%COMP%], table.dataTable.order-column.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.selected    > .sorting_3[_ngcontent-%COMP%] {\r\n      background-color: #cdcdcd; }\r\ntable.dataTable.no-footer[_ngcontent-%COMP%] {\r\n      border-bottom: 1px solid black; }\r\ntable.dataTable.nowrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.nowrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      white-space: nowrap; }\r\ntable.dataTable.compact[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      padding: 4px 17px; }\r\ntable.dataTable.compact[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      padding: 4px; }\r\ntable.dataTable.compact[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable.compact[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      padding: 4px; }\r\ntable.dataTable[_ngcontent-%COMP%]   th.dt-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-left[_ngcontent-%COMP%] {\r\n      text-align: left; }\r\ntable.dataTable[_ngcontent-%COMP%]   th.dt-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dataTables_empty[_ngcontent-%COMP%] {\r\n      text-align: center; }\r\ntable.dataTable[_ngcontent-%COMP%]   th.dt-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-right[_ngcontent-%COMP%] {\r\n      text-align: right; }\r\ntable.dataTable[_ngcontent-%COMP%]   th.dt-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-justify[_ngcontent-%COMP%] {\r\n      text-align: justify; }\r\ntable.dataTable[_ngcontent-%COMP%]   th.dt-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td.dt-nowrap[_ngcontent-%COMP%] {\r\n      white-space: nowrap; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-left[_ngcontent-%COMP%] {\r\n      text-align: left; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-center[_ngcontent-%COMP%] {\r\n      text-align: center; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-right[_ngcontent-%COMP%] {\r\n      text-align: right; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-justify[_ngcontent-%COMP%] {\r\n      text-align: justify; }\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.dt-head-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.dt-head-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th.dt-head-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td.dt-head-nowrap[_ngcontent-%COMP%] {\r\n      white-space: nowrap; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-left[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-left[_ngcontent-%COMP%] {\r\n      text-align: left; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-center[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-center[_ngcontent-%COMP%] {\r\n      text-align: center; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-right[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-right[_ngcontent-%COMP%] {\r\n      text-align: right; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-justify[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-justify[_ngcontent-%COMP%] {\r\n      text-align: justify; }\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th.dt-body-nowrap[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.dt-body-nowrap[_ngcontent-%COMP%] {\r\n      white-space: nowrap; }\r\ntable.dataTable[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    box-sizing: content-box; }\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    clear: both;\r\n    *zoom: 1;\r\n    zoom: 1; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%] {\r\n      float: left; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n        border: 1px solid #aaa;\r\n        border-radius: 3px;\r\n        padding: 5px;\r\n        background-color: transparent;\r\n        padding: 4px; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%] {\r\n      float: right;\r\n      text-align: right; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        border: 1px solid #aaa;\r\n        border-radius: 3px;\r\n        padding: 5px;\r\n        background-color: transparent;\r\n        margin-left: 3px; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_info[_ngcontent-%COMP%] {\r\n      clear: both;\r\n      float: left;\r\n      padding-top: 0.755em; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%] {\r\n      float: right;\r\n      text-align: right;\r\n      padding-top: 0.25em; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%] {\r\n        box-sizing: border-box;\r\n        display: inline-block;\r\n        min-width: 1.5em;\r\n        padding: 0.5em 1em;\r\n        margin-left: 2px;\r\n        text-align: center;\r\n        text-decoration: none !important;\r\n        cursor: pointer;\r\n        *cursor: hand;\r\n        color: #333333 !important;\r\n        border: 1px solid transparent;\r\n        border-radius: 2px; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.current[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.current[_ngcontent-%COMP%]:hover {\r\n          color: #333333 !important;\r\n          border: 1px solid #979797;\r\n          background-color: white;\r\n          \r\n          \r\n          \r\n          \r\n          \r\n          background: linear-gradient(to bottom, white 0%, gainsboro 100%);\r\n           }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.disabled[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.disabled[_ngcontent-%COMP%]:hover, .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button.disabled[_ngcontent-%COMP%]:active {\r\n          cursor: default;\r\n          color: #666 !important;\r\n          border: 1px solid transparent;\r\n          background: transparent;\r\n          box-shadow: none; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%]:hover {\r\n          color: white !important;\r\n          border: 1px solid #111111;\r\n          background-color: #585858;\r\n          \r\n          \r\n          \r\n          \r\n          \r\n          background: linear-gradient(to bottom, #585858 0%, #111111 100%);\r\n           }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%]:active {\r\n          outline: none;\r\n          background-color: #2b2b2b;\r\n          \r\n          \r\n          \r\n          \r\n          \r\n          background: linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);\r\n          \r\n          box-shadow: inset 0 0 3px #111; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .ellipsis[_ngcontent-%COMP%] {\r\n        padding: 0 1em; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_processing[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      width: 100%;\r\n      height: 40px;\r\n      margin-left: -50%;\r\n      margin-top: -25px;\r\n      padding-top: 20px;\r\n      text-align: center;\r\n      font-size: 1.2em;\r\n      background-color: white;\r\n      background: linear-gradient(to right, rgba(219, 219, 219, 0) 0%, rgba(219, 219, 219, 0.9) 25%, rgba(219, 219, 219, 0.9) 75%, rgba(219, 219, 219, 0) 100%); }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_info[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_processing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%] {\r\n      color: #333333; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%] {\r\n      clear: both; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%] {\r\n        *margin-top: -1px;\r\n        -webkit-overflow-scrolling: touch; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n          vertical-align: middle; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > div.dataTables_sizing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]    > div.dataTables_sizing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > div.dataTables_sizing[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_scroll[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]    > div.dataTables_sizing[_ngcontent-%COMP%] {\r\n          height: 0;\r\n          overflow: hidden;\r\n          margin: 0 !important;\r\n          padding: 0 !important; }\r\n.dataTables_wrapper.no-footer[_ngcontent-%COMP%]   .dataTables_scrollBody[_ngcontent-%COMP%] {\r\n      border-bottom: 1px solid black; }\r\n.dataTables_wrapper.no-footer[_ngcontent-%COMP%]   div.dataTables_scrollHead[_ngcontent-%COMP%]   table.dataTable[_ngcontent-%COMP%], .dataTables_wrapper.no-footer[_ngcontent-%COMP%]   div.dataTables_scrollBody[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%] {\r\n      border-bottom: none; }\r\n.dataTables_wrapper[_ngcontent-%COMP%]:after {\r\n      visibility: hidden;\r\n      display: block;\r\n      content: \"\";\r\n      clear: both;\r\n      height: 0; }\r\n@media screen and (max-width: 767px) {\r\n    .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_info[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%] {\r\n      float: none;\r\n      text-align: center; }\r\n    .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%] {\r\n      margin-top: 0.5em; } }\r\n@media screen and (max-width: 640px) {\r\n    .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%], .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%] {\r\n      float: none;\r\n      text-align: center; }\r\n    .dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%] {\r\n      margin-top: 0.5em; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGl6YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7O0VBRUU7QUFDRDtJQUNHLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakI7O01BRUU7SUFDRjs7TUFFRSxFQUFFO0FBQ0o7O01BRUUsaUJBQWlCLEVBQUU7QUFDckI7O01BRUUsa0JBQWtCO01BQ2xCLDhCQUE4QixFQUFFO0FBQ2hDOztRQUVFLGFBQWEsRUFBRTtBQUNuQjs7TUFFRSwyQkFBMkI7TUFDM0IsMkJBQTJCLEVBQUU7QUFDL0I7Ozs7O01BS0UsZUFBZTtPQUNmLFlBQWE7TUFDYiw0QkFBNEI7TUFDNUIsaUNBQWlDLEVBQUU7QUFDckM7TUFDRSx5QkFBeUIsRUFBRTtBQUMzQjtRQUNFLHlCQUF5QixFQUFFO0FBQy9COztNQUVFLGlCQUFpQixFQUFFO0FBQ3JCO01BQ0UsMkJBQTJCLEVBQUU7QUFDL0I7OztNQUdFLGdCQUFnQixFQUFFO0FBQ3BCO01BQ0UsMkJBQTJCO01BQzNCLDZCQUE2QixFQUFFO0FBQ2pDOztNQUVFLDRCQUE0QixFQUFFO0FBQ2hDOztNQUVFLGdCQUFnQixFQUFFO0FBQ3BCO01BQ0UseUJBQXlCLEVBQUU7QUFDM0I7UUFDRSx5QkFBeUIsRUFBRTtBQUMvQjtNQUNFLDJCQUEyQixFQUFFO0FBQzdCO1FBQ0UsMkJBQTJCLEVBQUU7QUFDakM7Ozs7O01BS0UseUJBQXlCLEVBQUU7QUFDN0I7Ozs7O01BS0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSx5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSx5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSx5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSx5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSx5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSx5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSw4QkFBOEIsRUFBRTtBQUNsQztNQUNFLG1CQUFtQixFQUFFO0FBQ3ZCOztNQUVFLGlCQUFpQixFQUFFO0FBQ3JCOztNQUVFLFlBQVksRUFBRTtBQUNoQjs7TUFFRSxZQUFZLEVBQUU7QUFDaEI7O01BRUUsZ0JBQWdCLEVBQUU7QUFDcEI7OztNQUdFLGtCQUFrQixFQUFFO0FBQ3RCOztNQUVFLGlCQUFpQixFQUFFO0FBQ3JCOztNQUVFLG1CQUFtQixFQUFFO0FBQ3ZCOztNQUVFLG1CQUFtQixFQUFFO0FBQ3ZCOzs7O01BSUUsZ0JBQWdCLEVBQUU7QUFDcEI7Ozs7TUFJRSxrQkFBa0IsRUFBRTtBQUN0Qjs7OztNQUlFLGlCQUFpQixFQUFFO0FBQ3JCOzs7O01BSUUsbUJBQW1CLEVBQUU7QUFDdkI7Ozs7TUFJRSxtQkFBbUIsRUFBRTtBQUN2Qjs7TUFFRSxnQkFBZ0IsRUFBRTtBQUNwQjs7TUFFRSxrQkFBa0IsRUFBRTtBQUN0Qjs7TUFFRSxpQkFBaUIsRUFBRTtBQUNyQjs7TUFFRSxtQkFBbUIsRUFBRTtBQUN2Qjs7TUFFRSxtQkFBbUIsRUFBRTtBQUV6Qjs7O0lBR0UsdUJBQXVCLEVBQUU7QUFFM0I7O0lBRUU7QUFDRjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0tBQ1gsT0FBUTtJQUNSLE9BQU8sRUFBRTtBQUNUO01BQ0UsV0FBVyxFQUFFO0FBQ2I7UUFDRSxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiw2QkFBNkI7UUFDN0IsWUFBWSxFQUFFO0FBQ2xCO01BQ0UsWUFBWTtNQUNaLGlCQUFpQixFQUFFO0FBQ25CO1FBQ0Usc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLGdCQUFnQixFQUFFO0FBQ3RCO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxvQkFBb0IsRUFBRTtBQUN4QjtNQUNFLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUU7QUFDckI7UUFDRSxzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQ0FBZ0M7UUFDaEMsZUFBZTtTQUNmLFlBQWE7UUFDYix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLGtCQUFrQixFQUFFO0FBQ3BCO1VBQ0UseUJBQXlCO1VBQ3pCLHlCQUF5QjtVQUN6Qix1QkFBdUI7VUFFdkIsb0JBQW9CO1VBRXBCLHlCQUF5QjtVQUV6QixXQUFXO1VBRVgsVUFBVTtVQUVWLGlCQUFpQjtVQUNqQixnRUFBZ0U7VUFDaEUsUUFBUSxFQUFFO0FBQ1o7VUFDRSxlQUFlO1VBQ2Ysc0JBQXNCO1VBQ3RCLDZCQUE2QjtVQUM3Qix1QkFBdUI7VUFDdkIsZ0JBQWdCLEVBQUU7QUFDcEI7VUFDRSx1QkFBdUI7VUFDdkIseUJBQXlCO1VBQ3pCLHlCQUF5QjtVQUV6QixvQkFBb0I7VUFFcEIseUJBQXlCO1VBRXpCLFdBQVc7VUFFWCxVQUFVO1VBRVYsaUJBQWlCO1VBQ2pCLGdFQUFnRTtVQUNoRSxRQUFRLEVBQUU7QUFDWjtVQUNFLGFBQWE7VUFDYix5QkFBeUI7VUFFekIsb0JBQW9CO1VBRXBCLHlCQUF5QjtVQUV6QixXQUFXO1VBRVgsVUFBVTtVQUVWLGlCQUFpQjtVQUNqQixnRUFBZ0U7VUFDaEUsUUFBUTtVQUNSLDhCQUE4QixFQUFFO0FBQ3BDO1FBQ0UsY0FBYyxFQUFFO0FBQ3BCO01BQ0Usa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQU12Qix5SkFBeUosRUFBRTtBQUM3Sjs7Ozs7TUFLRSxjQUFjLEVBQUU7QUFDbEI7TUFDRSxXQUFXLEVBQUU7QUFDYjtTQUNFLGdCQUFpQjtRQUNqQixpQ0FBaUMsRUFBRTtBQUNuQztVQUNFLHNCQUFzQixFQUFFO0FBQzFCOzs7VUFHRSxTQUFTO1VBQ1QsZ0JBQWdCO1VBQ2hCLG9CQUFvQjtVQUNwQixxQkFBcUIsRUFBRTtBQUM3QjtNQUNFLDhCQUE4QixFQUFFO0FBQ2xDOztNQUVFLG1CQUFtQixFQUFFO0FBQ3ZCO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxXQUFXO01BQ1gsV0FBVztNQUNYLFNBQVMsRUFBRTtBQUVmO0lBQ0U7O01BRUUsV0FBVztNQUNYLGtCQUFrQixFQUFFO0lBQ3RCO01BQ0UsaUJBQWlCLEVBQUUsRUFBRTtBQUN6QjtJQUNFOztNQUVFLFdBQVc7TUFDWCxrQkFBa0IsRUFBRTtJQUN0QjtNQUNFLGlCQUFpQixFQUFFLEVBQUUiLCJmaWxlIjoicG9saXphcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcbi5iZ3tcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjNmE2YTZhO1xyXG59XHJcbnRoLCB0ZCB7IFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuICBcclxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLypcclxuICogVGFibGUgc3R5bGVzXHJcbiAqL1xyXG4gdGFibGUuZGF0YVRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIC8qXHJcbiAgICAgKiBIZWFkZXIgYW5kIGZvb3RlciBzdHlsZXNcclxuICAgICAqL1xyXG4gICAgLypcclxuICAgICAqIEJvZHkgc3R5bGVzXHJcbiAgICAgKi8gfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRmb290IHRoIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyB9XHJcbiAgICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aDphY3RpdmUsXHJcbiAgICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0ZDphY3RpdmUge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0aCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweCA2cHggMThweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmcsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2MsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICpjdXJzb3I6IGhhbmQ7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRib2R5IHRyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjsgfVxyXG4gICAgICB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0aCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUucm93LWJvcmRlciB0Ym9keSB0aCwgdGFibGUuZGF0YVRhYmxlLnJvdy1ib3JkZXIgdGJvZHkgdGQsIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRoLCB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ZCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjazsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLnJvdy1ib3JkZXIgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGgsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUucm93LWJvcmRlciB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCwgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGgsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZS5jZWxsLWJvcmRlciB0Ym9keSB0aCwgdGFibGUuZGF0YVRhYmxlLmNlbGwtYm9yZGVyIHRib2R5IHRkIHtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmNlbGwtYm9yZGVyIHRib2R5IHRyIHRoOmZpcnN0LWNoaWxkLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmNlbGwtYm9yZGVyIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjazsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmNlbGwtYm9yZGVyIHRib2R5IHRyOmZpcnN0LWNoaWxkIHRoLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmNlbGwtYm9yZGVyIHRib2R5IHRyOmZpcnN0LWNoaWxkIHRkIHtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLnN0cmlwZSB0Ym9keSB0ci5vZGQsIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyLm9kZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7IH1cclxuICAgICAgdGFibGUuZGF0YVRhYmxlLnN0cmlwZSB0Ym9keSB0ci5vZGQuc2VsZWN0ZWQsIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyLm9kZC5zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNTsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmhvdmVyIHRib2R5IHRyOmhvdmVyLCB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgfVxyXG4gICAgICB0YWJsZS5kYXRhVGFibGUuaG92ZXIgdGJvZHkgdHI6aG92ZXIuc2VsZWN0ZWQsIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyOmhvdmVyLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4gdGJvZHkgdHIgPiAuc29ydGluZ18xLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbiB0Ym9keSB0ciA+IC5zb3J0aW5nXzIsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uIHRib2R5IHRyID4gLnNvcnRpbmdfMywgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHIgPiAuc29ydGluZ18xLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHIgPiAuc29ydGluZ18yLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHIgPiAuc29ydGluZ18zIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbiB0Ym9keSB0ci5zZWxlY3RlZCA+IC5zb3J0aW5nXzEsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uIHRib2R5IHRyLnNlbGVjdGVkID4gLnNvcnRpbmdfMixcclxuICAgIHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4gdGJvZHkgdHIuc2VsZWN0ZWQgPiAuc29ydGluZ18zLCB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5zZWxlY3RlZCA+IC5zb3J0aW5nXzEsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5zZWxlY3RlZCA+IC5zb3J0aW5nXzIsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5zZWxlY3RlZCA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5vZGQgPiAuc29ydGluZ18xLCB0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLnN0cmlwZSB0Ym9keSB0ci5vZGQgPiAuc29ydGluZ18xIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHIub2RkID4gLnNvcnRpbmdfMiwgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIub2RkID4gLnNvcnRpbmdfMiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyLm9kZCA+IC5zb3J0aW5nXzMsIHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4uc3RyaXBlIHRib2R5IHRyLm9kZCA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5vZGQuc2VsZWN0ZWQgPiAuc29ydGluZ18xLCB0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLnN0cmlwZSB0Ym9keSB0ci5vZGQuc2VsZWN0ZWQgPiAuc29ydGluZ18xIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHIub2RkLnNlbGVjdGVkID4gLnNvcnRpbmdfMiwgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIub2RkLnNlbGVjdGVkID4gLnNvcnRpbmdfMiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyLm9kZC5zZWxlY3RlZCA+IC5zb3J0aW5nXzMsIHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4uc3RyaXBlIHRib2R5IHRyLm9kZC5zZWxlY3RlZCA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5ldmVuID4gLnNvcnRpbmdfMSwgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIuZXZlbiA+IC5zb3J0aW5nXzEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5ldmVuID4gLnNvcnRpbmdfMiwgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIuZXZlbiA+IC5zb3J0aW5nXzIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5ldmVuID4gLnNvcnRpbmdfMywgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIuZXZlbiA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5ldmVuLnNlbGVjdGVkID4gLnNvcnRpbmdfMSwgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIuZXZlbi5zZWxlY3RlZCA+IC5zb3J0aW5nXzEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5ldmVuLnNlbGVjdGVkID4gLnNvcnRpbmdfMiwgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIuZXZlbi5zZWxlY3RlZCA+IC5zb3J0aW5nXzIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0ci5ldmVuLnNlbGVjdGVkID4gLnNvcnRpbmdfMywgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHkgdHIuZXZlbi5zZWxlY3RlZCA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0cjpob3ZlciA+IC5zb3J0aW5nXzEsIHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4uaG92ZXIgdGJvZHkgdHI6aG92ZXIgPiAuc29ydGluZ18xIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHI6aG92ZXIgPiAuc29ydGluZ18yLCB0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLmhvdmVyIHRib2R5IHRyOmhvdmVyID4gLnNvcnRpbmdfMiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyOmhvdmVyID4gLnNvcnRpbmdfMywgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5ob3ZlciB0Ym9keSB0cjpob3ZlciA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjZGNkOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keSB0cjpob3Zlci5zZWxlY3RlZCA+IC5zb3J0aW5nXzEsIHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4uaG92ZXIgdGJvZHkgdHI6aG92ZXIuc2VsZWN0ZWQgPiAuc29ydGluZ18xIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHkgdHI6aG92ZXIuc2VsZWN0ZWQgPiAuc29ydGluZ18yLCB0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLmhvdmVyIHRib2R5IHRyOmhvdmVyLnNlbGVjdGVkID4gLnNvcnRpbmdfMiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5IHRyOmhvdmVyLnNlbGVjdGVkID4gLnNvcnRpbmdfMywgdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5ob3ZlciB0Ym9keSB0cjpob3Zlci5zZWxlY3RlZCA+IC5zb3J0aW5nXzMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjZGNkOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUubm8tZm9vdGVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUubm93cmFwIHRoLCB0YWJsZS5kYXRhVGFibGUubm93cmFwIHRkIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlLmNvbXBhY3QgdGhlYWQgdGgsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUuY29tcGFjdCB0aGVhZCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxN3B4OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuY29tcGFjdCB0Zm9vdCB0aCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZS5jb21wYWN0IHRmb290IHRkIHtcclxuICAgICAgcGFkZGluZzogNHB4OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUuY29tcGFjdCB0Ym9keSB0aCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZS5jb21wYWN0IHRib2R5IHRkIHtcclxuICAgICAgcGFkZGluZzogNHB4OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGguZHQtbGVmdCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0ZC5kdC1sZWZ0IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRoLmR0LWNlbnRlcixcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0ZC5kdC1jZW50ZXIsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGQuZGF0YVRhYmxlc19lbXB0eSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRoLmR0LXJpZ2h0LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRkLmR0LXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0aC5kdC1qdXN0aWZ5LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRkLmR0LWp1c3RpZnkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGguZHQtbm93cmFwLFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRkLmR0LW5vd3JhcCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aC5kdC1oZWFkLWxlZnQsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQuZHQtaGVhZC1sZWZ0LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRmb290IHRoLmR0LWhlYWQtbGVmdCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0ZC5kdC1oZWFkLWxlZnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGguZHQtaGVhZC1jZW50ZXIsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQuZHQtaGVhZC1jZW50ZXIsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGZvb3QgdGguZHQtaGVhZC1jZW50ZXIsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGZvb3QgdGQuZHQtaGVhZC1jZW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aC5kdC1oZWFkLXJpZ2h0LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRoZWFkIHRkLmR0LWhlYWQtcmlnaHQsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGZvb3QgdGguZHQtaGVhZC1yaWdodCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0ZC5kdC1oZWFkLXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aC5kdC1oZWFkLWp1c3RpZnksXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQuZHQtaGVhZC1qdXN0aWZ5LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRmb290IHRoLmR0LWhlYWQtanVzdGlmeSxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0ZC5kdC1oZWFkLWp1c3RpZnkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGguZHQtaGVhZC1ub3dyYXAsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQuZHQtaGVhZC1ub3dyYXAsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGZvb3QgdGguZHQtaGVhZC1ub3dyYXAsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGZvb3QgdGQuZHQtaGVhZC1ub3dyYXAge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGguZHQtYm9keS1sZWZ0LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRib2R5IHRkLmR0LWJvZHktbGVmdCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0aC5kdC1ib2R5LWNlbnRlcixcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ZC5kdC1ib2R5LWNlbnRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRib2R5IHRoLmR0LWJvZHktcmlnaHQsXHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQuZHQtYm9keS1yaWdodCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcbiAgICB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGguZHQtYm9keS1qdXN0aWZ5LFxyXG4gICAgdGFibGUuZGF0YVRhYmxlIHRib2R5IHRkLmR0LWJvZHktanVzdGlmeSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0aC5kdC1ib2R5LW5vd3JhcCxcclxuICAgIHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ZC5kdC1ib2R5LW5vd3JhcCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuICAgXHJcbiAgdGFibGUuZGF0YVRhYmxlLFxyXG4gIHRhYmxlLmRhdGFUYWJsZSB0aCxcclxuICB0YWJsZS5kYXRhVGFibGUgdGQge1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cclxuICAgXHJcbiAgLypcclxuICAgKiBDb250cm9sIGZlYXR1cmUgbGF5b3V0XHJcbiAgICovXHJcbiAgLmRhdGFUYWJsZXNfd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgICp6b29tOiAxO1xyXG4gICAgem9vbTogMTsgfVxyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19sZW5ndGgge1xyXG4gICAgICBmbG9hdDogbGVmdDsgfVxyXG4gICAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfZmlsdGVyIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gICAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfaW5mbyB7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNzU1ZW07IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC4yNWVtOyB9XHJcbiAgICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICpjdXJzb3I6IGhhbmQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cclxuICAgICAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5wYWdpbmF0ZV9idXR0b24uY3VycmVudCwgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uLmN1cnJlbnQ6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHdoaXRlKSwgY29sb3Itc3RvcCgxMDAlLCBnYWluc2Jvcm8pKTtcclxuICAgICAgICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCB3aGl0ZSAwJSwgZ2FpbnNib3JvIDEwMCUpO1xyXG4gICAgICAgICAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMCUsIGdhaW5zYm9ybyAxMDAlKTtcclxuICAgICAgICAgIC8qIEZGMy42KyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHdoaXRlIDAlLCBnYWluc2Jvcm8gMTAwJSk7XHJcbiAgICAgICAgICAvKiBJRTEwKyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMCUsIGdhaW5zYm9ybyAxMDAlKTtcclxuICAgICAgICAgIC8qIE9wZXJhIDExLjEwKyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMCUsIGdhaW5zYm9ybyAxMDAlKTtcclxuICAgICAgICAgIC8qIFczQyAqLyB9XHJcbiAgICAgICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uLmRpc2FibGVkLCAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5wYWdpbmF0ZV9idXR0b24uZGlzYWJsZWQ6aG92ZXIsIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbi5kaXNhYmxlZDphY3RpdmUge1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9XHJcbiAgICAgICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzExMTExMTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODU4NTg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjNTg1ODU4KSwgY29sb3Itc3RvcCgxMDAlLCAjMTExMTExKSk7XHJcbiAgICAgICAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzU4NTg1OCAwJSwgIzExMTExMSAxMDAlKTtcclxuICAgICAgICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM1ODU4NTggMCUsICMxMTExMTEgMTAwJSk7XHJcbiAgICAgICAgICAvKiBGRjMuNisgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjNTg1ODU4IDAlLCAjMTExMTExIDEwMCUpO1xyXG4gICAgICAgICAgLyogSUUxMCsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM1ODU4NTggMCUsICMxMTExMTEgMTAwJSk7XHJcbiAgICAgICAgICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1ODU4NTggMCUsICMxMTExMTEgMTAwJSk7XHJcbiAgICAgICAgICAvKiBXM0MgKi8gfVxyXG4gICAgICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbjphY3RpdmUge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjMmIyYjJiKSwgY29sb3Itc3RvcCgxMDAlLCAjMGMwYzBjKSk7XHJcbiAgICAgICAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzJiMmIyYiAwJSwgIzBjMGMwYyAxMDAlKTtcclxuICAgICAgICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMyYjJiMmIgMCUsICMwYzBjMGMgMTAwJSk7XHJcbiAgICAgICAgICAvKiBGRjMuNisgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjMmIyYjJiIDAlLCAjMGMwYzBjIDEwMCUpO1xyXG4gICAgICAgICAgLyogSUUxMCsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMyYjJiMmIgMCUsICMwYzBjMGMgMTAwJSk7XHJcbiAgICAgICAgICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyYjJiMmIgMCUsICMwYzBjMGMgMTAwJSk7XHJcbiAgICAgICAgICAvKiBXM0MgKi9cclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzExMTsgfVxyXG4gICAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5lbGxpcHNpcyB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcHJvY2Vzc2luZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMCkpLCBjb2xvci1zdG9wKDI1JSwgcmdiYSgyMTksIDIxOSwgMjE5LCAwLjkpKSwgY29sb3Itc3RvcCg3NSUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMC45KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIxOSwgMjE5LCAyMTksIDApIDAlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOSkgMjUlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOSkgNzUlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDApIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIxOSwgMjE5LCAyMTksIDApIDAlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOSkgMjUlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOSkgNzUlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDApIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjE5LCAyMTksIDIxOSwgMCkgMCUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMC45KSAyNSUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMC45KSA3NSUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMCkgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIxOSwgMjE5LCAyMTksIDApIDAlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOSkgMjUlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDAuOSkgNzUlLCByZ2JhKDIxOSwgMjE5LCAyMTksIDApIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjE5LCAyMTksIDIxOSwgMCkgMCUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMC45KSAyNSUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMC45KSA3NSUsIHJnYmEoMjE5LCAyMTksIDIxOSwgMCkgMTAwJSk7IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfbGVuZ3RoLFxyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19maWx0ZXIsXHJcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2luZm8sXHJcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3Byb2Nlc3NpbmcsXHJcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIHtcclxuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfc2Nyb2xsIHtcclxuICAgICAgY2xlYXI6IGJvdGg7IH1cclxuICAgICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19zY3JvbGwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB7XHJcbiAgICAgICAgKm1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XHJcbiAgICAgICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19zY3JvbGwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSA+IHRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLCAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3Njcm9sbCBkaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5ID4gdGFibGUgPiB0aGVhZCA+IHRyID4gdGQsIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfc2Nyb2xsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0aCwgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19zY3JvbGwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cclxuICAgICAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3Njcm9sbCBkaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5ID4gdGFibGUgPiB0aGVhZCA+IHRyID4gdGggPiBkaXYuZGF0YVRhYmxlc19zaXppbmcsXHJcbiAgICAgICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19zY3JvbGwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSA+IHRhYmxlID4gdGhlYWQgPiB0ciA+IHRkID4gZGl2LmRhdGFUYWJsZXNfc2l6aW5nLCAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3Njcm9sbCBkaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGggPiBkaXYuZGF0YVRhYmxlc19zaXppbmcsXHJcbiAgICAgICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19zY3JvbGwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkID4gZGl2LmRhdGFUYWJsZXNfc2l6aW5nIHtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlci5uby1mb290ZXIgLmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgfVxyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlci5uby1mb290ZXIgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsSGVhZCB0YWJsZS5kYXRhVGFibGUsXHJcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyLm5vLWZvb3RlciBkaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5ID4gdGFibGUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lOyB9XHJcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyOmFmdGVyIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIGhlaWdodDogMDsgfVxyXG4gICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19pbmZvLFxyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTsgfSB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfbGVuZ3RoLFxyXG4gICAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19maWx0ZXIge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2ZpbHRlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtOyB9IH1cclxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolizasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-polizas',
                templateUrl: './polizas.component.html',
                styleUrls: ['./polizas.component.css'],
                providers: [_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"]]
            }]
    }], function () { return [{ type: _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_1__["PolizaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "x4zf":
/*!*************************************************************!*\
  !*** ./src/app/components/descargar/descargar.component.ts ***!
  \*************************************************************/
/*! exports provided: DescargarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescargarComponent", function() { return DescargarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/poliza/poliza.service */ "vroj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "tmjD");










function DescargarComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " P\u00D3LIZA : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DescargarComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " N\u00DAMERO ENDOSO : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DescargarComponent_div_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " COBERTURAS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.data.cobertura, " ");
} }
function DescargarComponent_div_211_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LIMITES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.data.limites, " ");
} }
function DescargarComponent_div_211_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ITEMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onload", function DescargarComponent_div_211_div_7_Template_img_onload_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.data.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DescargarComponent_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CONDICIONES PARTICULARES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DescargarComponent_div_211_div_6_Template, 9, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DescargarComponent_div_211_div_7_Template, 6, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.data.limites);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.data.items);
} }
class DescargarComponent {
    constructor(route, poliza, toastr) {
        this.route = route;
        this.poliza = poliza;
        this.toastr = toastr;
        this.propuesta = "";
    }
    toastrSucces(cuerpo, titulo, progress) {
        this.toastr.success(cuerpo, titulo, {
            progressBar: progress
        });
    }
    toastrError(cuerpo, titulo) {
        this.toastr.error(cuerpo, titulo);
    }
    ngOnInit() {
        this._id = this.route.snapshot.params['_id'];
        this.data = [];
        this.descPoliza();
    }
    descPoliza() {
        this.poliza.descPoliza(this._id)
            .subscribe(data => {
            this.data = data;
            const toDataURL = url => fetch(this.data.items)
                .then(response => response.blob())
                .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            }));
            toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
                .then(dataUrl => {
                console.log('RESULT:', dataUrl);
                this.data.items = dataUrl;
                console.log(this.data.items);
            });
        });
    }
    // toDataURL(url, callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.onload = function() {
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //       callback(reader.result);
    //     }
    //     reader.readAsDataURL(xhr.response);
    //   };
    //   xhr.open('GET', url);
    //   xhr.responseType = 'blob';
    //   xhr.send();
    // }
    //Export to PDF
    downloadPDF(nroProp, tipo, company, cliente) {
        //Instance of jsPDF
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]('p', 'mm', 'letter');
        const pdf = document.getElementById('pdf');
        //Some Opts
        const options = {
            useCors: true,
            background: 'white',
            scale: 2
        };
        if (html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(pdf, options).then((canvas) => {
            var imgData = canvas.toDataURL('image/png');
            var imgWidth = 210;
            var pageHeight = 298;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var position = 0;
            const image_compression = 'FAST';
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, image_compression, 0);
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, image_compression, 0);
                heightLeft -= pageHeight;
            }
            return doc;
        }).then((docResult) => {
            docResult.save("Prop. " + nroProp + ", " + tipo + ", " + company + ", " + cliente + ".pdf");
        })) {
            this.toastrSucces("La descarga comenzará en breve, por favor sea paciente", "Descarga Exitosa", false);
        }
        else {
            this.toastrError("La descarga ha presentado un error interno y no ha podido realizarce, intente dentro de un tiempo", "Erro de descarga");
        }
    }
}
DescargarComponent.ɵfac = function DescargarComponent_Factory(t) { return new (t || DescargarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_3__["PolizaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
DescargarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescargarComponent, selectors: [["app-descargar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_3__["PolizaService"]])], decls: 222, vars: 77, consts: [["onprogress", "init()", 1, "btn", "btn-primary", 3, "click"], [1, "d-flex", "justify-content-center", "m-2"], ["name", "pdf", "id", "pdf", 1, "col-lg-6"], [1, "col-lg-12", "bg-white", "center", 2, "padding", "none", "margin", "none"], [1, "col-md-11", "bord"], [1, "d-flex", "align-content-around", "align-items-center"], [1, "col-lg-6", "d-flex", "justify-content-center"], [1, "d-flex", 2, "padding", "0"], ["src", "assets/img/konex.png", 1, "d-flex", 2, "height", "110%", "width", "70%", "padding", "0"], [1, "col-lg-12", "d-flex", "align-content-around", "bg-gray"], [1, "col-lg-3", "fz", "d-flex", "justify-content-end"], [4, "ngIf"], [1, "col-lg-2", "fz", "d-flex", "justify-content-start"], [1, "fec"], [1, "col-lg-12", "d-flex", "align-content-around"], [1, "col-lg-9", "fz", "d-flex", "justify-content-start"], ["contenteditable", ""], [1, "col-lg-12", "fz", "d-flex", "align-content-around"], [1, "col-lg-4", "fz", "d-flex", "justify-content-start"], [1, "col-lg-1", "fz", "d-flex", "justify-content-end"], [1, "col-lg-3", "fz", "d-flex", "justify-content-start"], [1, ""], [1, "col-lg-12", "d-flex", "flex-align-content-around"], [1, "col-lg-1", "fz", "d-flex", "justify-content-start"], [1, "col-lg-2", "fz", "d-flex", "justify-content-end"], [1, "m-2"], [1, "d-flex", "justify-content-start", 2, "padding-right", "30px"], ["src", "assets/img/firma.png", "alt", "", "srcset", ""], [2, "white-space", "pre"], [1, "col-lg-12", "fz", "d-flex", "justify-content-center", "bg-gray"], [1, "col-lg-12", "d-flex", "fz", "justify-content-center"], [1, "col-lg-11", "justify-content-start", 2, "white-space", "pre"], ["contenteditable", "true"], ["class", "col-lg-12 d-flex fz justify-content-center", 4, "ngIf"], [1, "col-lg-11", "justify-content-center"], [1, "d-flex", 2, "width", "100%", 3, "src", "onload"]], template: function DescargarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescargarComponent_Template_button_click_1_listener() { return ctx.downloadPDF(ctx.data.nroPropuesta, ctx.data.nombrePropuesta, ctx.data.nombreAseguradora, ctx.data.nombreCliente); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Imprimir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DescargarComponent_p_18_Template, 3, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " N\u00DAMERO PROPUESTA : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DescargarComponent_p_33_Template, 3, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " FECHA PROPUESTA : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "COMPA\u00D1IA DE SEGUROS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "RAMO :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " VIGENCIA DESDE : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " VIGENCIA HASTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " PRODUCTOR : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " KONEX CORREDORES DE SEGUROS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " RUT :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " 76.912.042-4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " CONTRATANTE : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " RUT :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " DIRECCION COMERCIAL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " PRIMA AFECTA : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](128, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " PRIMA EXENTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](136, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " IVA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " PRIMA BRUTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](153, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](162, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " FORMA DE PAGO :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " NRO. DE CUOTAS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " PRIMERA CUOTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](185, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " COMISION AFECTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " COMISION EXENTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " TIPO MONEDA : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, DescargarComponent_div_209_Template, 10, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, DescargarComponent_div_211_Template, 8, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Firma de Director de Cuentas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Konex Corredora de Seguros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" PROPUESTA DE ", ctx.data.nombrePropuesta, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.nroPoliza !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 30, ctx.data.nroPoliza, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](30, 34, ctx.data.nroPropuesta, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.nombrePropuesta !== "POLIZA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](37, 38, ctx.data.numeroEndoso, "separator", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 42, ctx.data.fcPropuesta, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.nombreAseguradora, " SEGUROS GENERALES S.A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.ramo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](70, 45, ctx.data.inicioVigencia, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](78, 48, ctx.data.finVigencia, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.nombreCliente, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](110, 51, ctx.data.rutCliente, "90.000.000-A"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.data.direccion, ", ", ctx.data.comuna, ", ", ctx.data.region, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](128, 54, ctx.data.primaAfecta, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](136, 58, ctx.data.primaExenta, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](145, 62, ctx.data.iva, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](153, 66, ctx.data.primaBruta, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MONTO ASEGURADO ", ctx.data.tipoMoneda, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](162, 70, ctx.data.montoAsegurado, "separator.2", ","), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.formaPago, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.nroCuotas, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](185, 74, ctx.data.fcPrimeraCuota, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.comisionAfecta, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.comisionExenta, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.tipoMoneda, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data.cobertura == null || ctx.data.cobertura == " " || ctx.data.cobertura == ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.limites || ctx.data.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [ngx_mask__WEBPACK_IMPORTED_MODULE_7__["MaskPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["h3[_ngcontent-%COMP%]{\r\n    font-family: 'Calibri', sans-serif, Times, serif;\r\n    font-size: 28px;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.bord[_ngcontent-%COMP%]{\r\n    border: 2px solid black;\r\n}\r\n.end[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n.bg-gray[_ngcontent-%COMP%]{\r\n    background-color: lightgrey;\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n    height: 1px;\r\n    background-color: black;\r\n}\r\n.fz[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    font-family: 'Calibri';\r\n    font-size: 13px\r\n}\r\n.fec[_ngcontent-%COMP%]{\r\n    flex: row-reverse;\r\n}\r\ntextarea[_ngcontent-%COMP%]{\r\n    border: 0 none white;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    outline: none;\r\n    resize: none;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Calibri', sans-serif;\r\n    margin: 5px;\r\n    white-space:pre;\r\n    -webkit-hyphens:auto;\r\n    hyphens:auto;\r\n    word-wrap:break-word;\r\n}\r\npre[_ngcontent-%COMP%]{\r\n    font-family: 'Calibri', sans-serif;\r\n    font-size: 13px;\r\n    margin: 0;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\r\nstrong[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n}\r\n.element[_ngcontent-%COMP%]::-webkit-scrollbar { width: 0 !important }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2Nhcmdhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0RBQWdEO0lBQ2hELGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxlQUFlO0lBR2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBLDhCQUE4QixvQkFBb0IiLCJmaWxlIjoiZGVzY2FyZ2FyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FsaWJyaScsIHNhbnMtc2VyaWYsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5kaXZ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uYm9yZHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5lbmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5iZy1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbmhye1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uZnp7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FsaWJyaSc7XHJcbiAgICBmb250LXNpemU6IDEzcHhcclxufVxyXG4uZmVje1xyXG4gICAgZmxleDogcm93LXJldmVyc2U7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IDAgbm9uZSB3aGl0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWxpYnJpJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6cHJlO1xyXG4gICAgLW1vei1oeXBoZW5zOmF1dG87XHJcbiAgICAtbXMtaHlwaGVuczphdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOmF1dG87XHJcbiAgICBoeXBoZW5zOmF1dG87XHJcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxufVxyXG5wcmV7XHJcbiAgICBmb250LWZhbWlseTogJ0NhbGlicmknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbnNwYW4ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuc3Ryb25ne1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmVsZW1lbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDAgIWltcG9ydGFudCB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescargarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-descargar',
                templateUrl: './descargar.component.html',
                styleUrls: ['./descargar.component.css'],
                providers: [_services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_3__["PolizaService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_poliza_poliza_service__WEBPACK_IMPORTED_MODULE_3__["PolizaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map