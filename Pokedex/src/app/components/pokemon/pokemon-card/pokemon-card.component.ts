import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonPreview } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonPreview | undefined;

  @Output() selectPokemon: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  OnClick(): void {
    this.selectPokemon.emit(this.pokemon?.url);
  }

}
