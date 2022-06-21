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
  private sprites: string[] = [];
  private spritesIndex: number = 0;

  private notFoundImagePath: string = '../../../../assets/unownQuestion.png'

  constructor() { }

  ngOnInit(): void {
    // Initialise sprite array
    (this.pokemon?.sprites.front_default) ? this.sprites.push(this.pokemon.sprites.front_default) : this.sprites.push(this.notFoundImagePath);
    (this.pokemon?.sprites.back_default) ? this.sprites.push(this.pokemon.sprites.back_default) : this.sprites.push(this.notFoundImagePath);
    (this.pokemon?.sprites.front_shiny) ? this.sprites.push(this.pokemon.sprites.front_shiny) : this.sprites.push(this.notFoundImagePath);
    (this.pokemon?.sprites.back_shiny) ? this.sprites.push(this.pokemon.sprites.back_shiny) : this.sprites.push(this.notFoundImagePath);

    this.sprite = this.sprites[this.spritesIndex];
  }

  OnClickHeader(): void {
    this.spritesIndex = (this.spritesIndex + 1) % this.sprites.length;
    this.sprite = this.sprites[ this.spritesIndex ];
  }

}
