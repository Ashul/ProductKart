"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_component_1 = require("./products.component");
var product_detail_component_1 = require("./product-detail.component");
var productRoutes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '', component: products_component_1.ProductsComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent }
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(productRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ProductRoutingModule);
exports.ProductRoutingModule = ProductRoutingModule;
//# sourceMappingURL=products-routing.module.js.map