"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var products_component_1 = require("./products.component");
var product_detail_component_1 = require("./product-detail.component");
var products_routing_module_1 = require("./products-routing.module");
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, common_1.CommonModule, products_routing_module_1.ProductRoutingModule],
        declarations: [products_component_1.ProductsComponent, product_detail_component_1.ProductDetailComponent],
        exports: [http_1.HttpModule],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map