import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { ProductsService } from './products.service';
import {Product} from './product';

@Component({
  moduleId:module.id,
  selector:'products',
  templateUrl:'products.component.html',
  styleUrls:['products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {
  errorMessage: string;
  products:Product[];
  selectedProduct:Product;

  constructor( private productsService:ProductsService,
               private router:Router){}
    ngOnInit():void{
   this.getProducts();
  }

      getProducts() {
      this.productsService.getProducts()
                   .subscribe(
                     products => this.products = products.slice(1, 5),
                     error =>  this.errorMessage = <any>error);
                    }
     
    onSelect(product: Product): void {
    
    this.router.navigate(['/products/products', product.id]); 
   }

   

 }