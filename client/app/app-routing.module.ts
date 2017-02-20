import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes:Routes=[
   
     { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
     { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },

    {
        path:'crisis-center',
        component:CrisisListComponent
    },
    {
        path:'',
        redirectTo:'/products',
        pathMatch:'full'
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    declarations:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}

