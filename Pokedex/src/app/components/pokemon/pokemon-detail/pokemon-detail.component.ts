import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: PokemonDetail | undefined ;

  public sprite: string = "";

  constructor() { }

  ngOnInit(): void {
    this.sprite = (this.pokemon) ? this.pokemon.sprites.front_default : "";
  }

  OnClickHeader(): void { // TODO
    if(!this.pokemon){
      return;
    }
    switch(this.sprite){ 
      case this.pokemon.sprites.front_default:
        this.sprite = this.pokemon.sprites.back_default;
        break;
      case this.pokemon.sprites.back_default:
        this.sprite = this.pokemon.sprites.front_shiny;
        break;
      case this.pokemon.sprites.front_shiny:
        this.sprite = this.pokemon.sprites.back_shiny;
        break;
      default:
        this.sprite = this.pokemon.sprites.front_default;
    }
  }

}
