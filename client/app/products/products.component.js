"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_service_1 = require("./products.service");
var ProductsComponent = (function () {
    function ProductsComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsService.getProducts()
            .subscribe(function (products) { return _this.products = products.slice(1, 5); }, function (error) { return _this.errorMessage = error; });
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.router.navigate(['/products/products', product.id]);
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'products',
        templateUrl: 'products.component.html',
        styleUrls: ['products.component.css'],
        providers: [products_service_1.ProductsService]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        router_1.Router])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map