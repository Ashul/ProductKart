import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {HttpModule } from '@angular/http';

import {ProductsComponent } from './products.component';
import {ProductDetailComponent} from './product-detail.component';

import {ProductRoutingModule } from './products-routing.module';


@NgModule({
    imports:[HttpModule, CommonModule, ProductRoutingModule],
    declarations:[ProductsComponent,ProductDetailComponent],
    exports:[HttpModule],

})

export class ProductsModule{}