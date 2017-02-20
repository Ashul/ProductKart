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
var common_1 = require("@angular/common");
var products_service_1 = require("./products.service");
require("rxjs/add/operator/switchMap");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productsService, route, location) {
        this.productsService = productsService;
        this.route = route;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.productsService.getProduct(params['id']); })
            .subscribe(function (product) { return _this.product = product; });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-product-detail',
        template: "\n    <div *ngIf=\"product\">\n      <h2>{{product.additionalFeatures}} details!</h2>\n      <div>\n        <label>id: </label>{{product.id}}\n      </div>\n      <div>\n        <label>name: </label>{{product.name}}\n      </div>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        router_1.ActivatedRoute,
        common_1.Location])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map