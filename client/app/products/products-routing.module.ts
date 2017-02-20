import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';


const productRoutes: Routes = [
   { path: '', redirectTo: 'products', pathMatch: 'full'},
   { path: '',    component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];
   
@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }

