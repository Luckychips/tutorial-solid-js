import {createSignal, createEffect, Switch, Match, createRenderEffect, batch, Accessor} from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { fetcher } from '@/utils/core';
import { Pokemon } from '@/types/Objet';

interface ComponentProps {
    accessorDexId?: Accessor<number>;
    dexId?: string;
}

const PokemonCard = ({ accessorDexId, dexId }: ComponentProps) => {
    const [pokemon, setPokemon] = createSignal<Pokemon | null>(null);
    const state = createQuery(() => ({
        queryKey: ['get:pokemon', { url: `https://pokeapi.co/api/v2/pokemon/${accessorDexId ? accessorDexId() : dexId}` }],
        queryFn: fetcher,
        retry: 0,
        throwOnError: true,
    }));

    createEffect(() => {
        setPokemon(state.data);
    });

    return (
        <>
            <Switch fallback={<div>loading...</div>}>
                <Match when={pokemon()}>
                    <div>{pokemon()?.id}</div>
                    <div>{pokemon()?.name}</div>
                    <img
                        src={pokemon()?.sprites.front_default}
                        alt={pokemon()?.name}
                    />
                </Match>
            </Switch>
        </>

    );
};

export default PokemonCard;