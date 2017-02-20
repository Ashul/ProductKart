import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent} from './heroes-detail.component';

const heroesRoute:Routes=[
       { path: '', redirectTo: 'heroes', pathMatch: 'full'},
       { path:'', component:HeroesComponent},
       { path:'detail/:id', component:HeroDetailComponent}
]

@NgModule({
    imports:[RouterModule.forChild(heroesRoute)],
    exports:[RouterModule]
})

export class HeroesRoutingModule{}