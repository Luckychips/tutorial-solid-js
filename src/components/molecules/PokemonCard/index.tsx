import { createSignal, createEffect, Show } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { Pokemon } from '@/types/Objet';

interface ComponentProps {
    dexId: string;
}

const PokemonCard = ({ dexId }: ComponentProps) => {
    const [pokemon, setPokemon] = createSignal<Pokemon | null>(null);
    const state = createQuery(() => ({
        queryKey: ['get:pokemon', dexId],
        queryFn: async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexId}`);
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }

            return await response.json();
        },
        retry: 0,
        throwOnError: true,
    }));

    createEffect(() => {
        setPokemon(state.data);
    });

    return (
        <Show when={pokemon()}>
            <div>{pokemon()?.name}</div>
            <img
                src={pokemon()?.sprites.front_default}
                alt={pokemon()?.name}
            />
        </Show>
    );
};

export default PokemonCard;