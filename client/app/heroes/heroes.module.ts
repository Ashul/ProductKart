import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent} from './heroes-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
    imports:[CommonModule, HttpModule, FormsModule, HeroesRoutingModule],
    declarations:[HeroesComponent, HeroDetailComponent],
    exports:[]
})

export class HeroesModule{}