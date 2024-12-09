import { BaseObjet } from './Base';
import { GameIndices, GameItem } from './Game';

interface BaseAbility {
    ability: BaseObjet;
    is_hidden: boolean;
    slot: number;
}

interface BasePokemonShape {
    /*original*/
    back_gray?: string;
    back_transparent?: string;
    front_gray?: string;
    front_transparent?: string;
    /*gen-2*/
    back_shiny_transparent?: string;
    front_shiny_transparent?: string;

    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}

interface PokemonAbility {
    move: BaseObjet;
    version_group_details: {
        level_learned_at: number;
        move_learn_method: BaseObjet;
        version_group: BaseObjet;
    }[];
}

interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: BaseObjet;
}

export interface Pokemon {
    id: number;
    order: number;
    is_default: boolean;
    location_area_encounters: string;
    base_experience: number;
    name: string;
    height: number;
    weight: number;
    cries: {
        latest: string;
        legacy: string;
    };
    abilities: BaseAbility[];
    forms: BaseObjet[];
    game_indices: GameIndices[];
    held_items: GameItem[];
    moves: PokemonAbility[];
    past_abilities: any[];
    past_types: any[];
    species: BaseObjet;
    sprites: {
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
        other: {
            dream_world: BasePokemonShape;
            home: BasePokemonShape;
            'official-artwork': BasePokemonShape;
            showdown: BasePokemonShape;
        };
        versions: {
            'generation-i': {
                'red-blue': BasePokemonShape;
                yellow: BasePokemonShape;
            };
            'generation-ii': {
                crystal: BasePokemonShape;
                gold: BasePokemonShape;
                silver: BasePokemonShape;
            };
            'generation-iii': {
                emerald: BasePokemonShape;
                'firered-leafgreen': BasePokemonShape;
                'ruby-sapphire': BasePokemonShape;
            };
            'generation-iv': {
                'diamond-pearl': BasePokemonShape;
                'heartgold-soulsilver': BasePokemonShape;
                platinum: BasePokemonShape;
            };
            'generation-v': {
                'black-white': {
                    animated: BasePokemonShape;
                    back_default?: string;
                    back_female?: string;
                    back_shiny?: string;
                    back_shiny_female?: string;
                    front_default?: string;
                    front_female?: string;
                    front_shiny?: string;
                    front_shiny_female?: string;
                };
            };
            'generation-vi': {
                'omegaruby-alphasapphire': BasePokemonShape;
                'x-y': BasePokemonShape;
            };
            'generation-vii': {
                icons: BasePokemonShape;
                'ultra-sun-ultra-moon': BasePokemonShape;
            };
            'generation-viii': {
                icons: BasePokemonShape;
            };
        };
    };
    stats: PokemonStat[];
    types: {
        slot: number;
        type: BaseObjet;
    }[];
}