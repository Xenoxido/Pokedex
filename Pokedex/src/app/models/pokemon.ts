export interface PokemonPreview{
    name: string;
    url: string;
}

export interface PokemonDetail{
    name: string;
    id: number;
    weight: number;
    height: number;
    types: Types[];
    sprites: Sprites;
}

export interface Types {
    type: {
        name: string;
    }
}

export interface Sprites{
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}