export interface INamedAPIResource {
  name: string;
  url: string;
}

export interface IPokemonMoveVersion {
  move_learn_method: INamedAPIResource;
  version_group: INamedAPIResource;
  level_learned_at: number;
}

export interface IPokemonMove {
  move: INamedAPIResource;
  version_group_details: IPokemonMoveVersion[];
}

export interface IVersionGameIndex {
  game_index: number;
  version: INamedAPIResource;
}

export interface IPokemonSprites {
  front_default: string;
}

export interface IPokemon {
  name: string;
  weight: number;
  moves: IPokemonMove[];
  game_indices: IVersionGameIndex[];
  sprites: IPokemonSprites;
}

export interface INamedAPIResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: INamedAPIResource[];
}

export interface IPokemonUrl {
  url: string;
}