import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonPreview } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private _http: HttpClient) { }

  getPokemonDetail(url:string): Observable<PokemonDetail>{
    return this._http.get<PokemonDetail>(url);
  }

  getPokemonList(first: number, limit: number): Observable<any>{
    return this._http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${first}`);
  }
}
