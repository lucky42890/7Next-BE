import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { INamedAPIResourceList, IPokemon, IPokemonUrl } from './pokes.interface';
import { PokesService } from './pokes.service';

@Controller('pokes')
export class PokesController {
  constructor(private pokesService: PokesService) {}
  
  @Get(':name')
  getPokemonByName(@Param('name') name: string): Observable<IPokemon> {
    return this.pokesService.getPokemonByName(name);
  }

  @Get()
  getPokemonList(@Query('offset') offset: number, @Query('limit') limit: number): Observable<INamedAPIResourceList> {
    return this.pokesService.getPokemonList(offset, limit);
  }

  @Get(':name/image')
  getPokemonImageByName(@Param('name') name: string): Observable<IPokemonUrl> {
    return this.pokesService.getPokemonImageByName(name);
  }
}
