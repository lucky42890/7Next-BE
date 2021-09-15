import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { INamedAPIResourceList, IPokemon, IPokemonUrl } from './pokes.interface';

const BASE_API = 'https://pokeapi.co/api/v2/';

@Injectable()
export class PokesService {
  constructor(private httpService: HttpService) {}

  /**
   * Get pokemon by name
   * @param name 
   * @returns 
   */
   getPokemonByName(name: string): Observable<IPokemon> {
    return this.httpService.get(BASE_API + `pokemon/${name}`).pipe(
      map(response => response.data)
    );
  }

  /**
   * Get pokemon list paginated
   * @param name 
   * @returns 
   */
  getPokemonList(offset: number, limit: number): Observable<INamedAPIResourceList> {
    return this.httpService.get(BASE_API + `pokemon?limit=${limit}&offset=${offset}`).pipe(
      map(response => response.data)
    );
  }

  /**
   * Get pokemon front image by name
   * @param name 
   * @returns 
   */
  getPokemonImageByName(name: string): Observable<IPokemonUrl> {
    return this.httpService.get(BASE_API + `pokemon/${name}`).pipe(
      map(response => response.data),
      map((pokemon: IPokemon) => {
        return {
          url: pokemon.sprites.front_default
        };
      })
    );
  }
}
