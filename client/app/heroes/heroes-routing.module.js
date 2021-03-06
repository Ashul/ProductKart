"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes.component");
var heroes_detail_component_1 = require("./heroes-detail.component");
var heroesRoute = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: '', component: heroes_component_1.HeroesComponent },
    { path: 'detail/:id', component: heroes_detail_component_1.HeroDetailComponent }
];
var HeroesRoutingModule = (function () {
    function HeroesRoutingModule() {
    }
    return HeroesRoutingModule;
}());
HeroesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(heroesRoute)],
        exports: [router_1.RouterModule]
    })
], HeroesRoutingModule);
exports.HeroesRoutingModule = HeroesRoutingModule;
//# sourceMappingURL=heroes-routing.module.js.map