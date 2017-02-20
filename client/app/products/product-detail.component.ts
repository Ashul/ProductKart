import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {ProductsService } from './products.service';
import {Product } from './product';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'my-product-detail',
  template: `
    <div *ngIf="product">
      <h2>{{product.additionalFeatures}} details!</h2>
      <div>
        <label>id: </label>{{product.id}}
      </div>
      <div>
        <label>name: </label>{{product.name}}
      </div>
    </div>
  `,
})
export class ProductDetailComponent implements OnInit{
 product:Product;


constructor(
  private productsService:ProductsService,
  private route:ActivatedRoute,
  private location:Location
){}

ngOnInit():void{
  this.route.params
    .switchMap((params: Params) => this.productsService.getProduct(params['id']))
    .subscribe(product => this.product = product);
}

}

