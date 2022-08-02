import { Component, OnInit } from '@angular/core';
import { PokemonDetail, PokemonPreview } from 'src/app/models/pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
  providers: [PokemonApiService]
})
export class PokemonPageComponent implements OnInit {

  public pokeList : PokemonPreview[] = [];
  public loading: boolean = true;

  public first : number = 0;
  public pokemonPerPage: number = 10;

  public pokemonSelected: PokemonDetail | undefined;
  public showDetail: boolean = false;

  public limitPokemon : number[] = [0,1125] // Hardcoded

  constructor(private _pokeApi: PokemonApiService) { }

  ngOnInit(): void {
    this.getPokemonPreviewList(this.first,this.pokemonPerPage);
  }

  getPokemonPreviewList(limit: number, perPage: number) {
    this.loading = true;
    this._pokeApi.getPokemonList(limit,perPage).subscribe((res)=>{
      this.pokeList = res;
      this.loading = false;
      console.log(this.pokeList);
    });
  }

  filterByName(name:string):void{
    this.pokeList.filter((pkm)=> pkm.name === name);
  }

  OnrefreshPokemonList(limits:number[]):void {
    this.first = limits[0];
    this.getPokemonPreviewList(this.first,this.pokemonPerPage);
  }

  OnClickPokemon(url:string): void {
    this.loading = true;
    this._pokeApi.getPokemonDetail(url).subscribe( (pkmSelected) => {
      this.pokemonSelected = pkmSelected;
      console.log(this.pokemonSelected);
      this.showDetail = true;
      this.loading = false;
    })
  }

  OnClickTitle(): void {
    this.first = 0;
    this.getPokemonPreviewList(this.first,this.pokemonPerPage);
    this.showDetail=false;
  }
}
