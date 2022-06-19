import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonPageComponent, PokemonCardComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [PokemonPageComponent]
})
export class PokemonModule { }
