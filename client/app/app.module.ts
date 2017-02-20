import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { AppComponent }          from './app.component';
import { AppRoutingModule }      from './app-routing.module';
import { CrisisListComponent }   from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { ProductsModule }        from './products/products.module';
import { HeroesModule }          from './heroes/heroes.module';
import { HeaderComponent }       from './shared/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductsModule,
    HeroesModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }