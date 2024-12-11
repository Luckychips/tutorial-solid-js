import { createEffect, createSignal, For } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { BaseObjet } from '@/types/Base';
import * as S from './styles';

interface Retrieved {
    count: number;
    next?: string;
    previous?: string;
    results: BaseObjet[];
}

const PokemonList = () => {
    const [retrieved, setRetrieved] = createSignal<Retrieved | null>(null);
    const state = createQuery(() => ({
        queryKey: ['get:pokemon_list'],
        queryFn: async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return await response.json();
        },
        retry: 0,
        throwOnError: true,
    }));

    const getPrefixZero = (number: number) => {
        if (number > 0 && number < 10) {
            return `00${number}`;
        } else if (number >= 10 && number < 100) {
            return `0${number}`;
        } else {
            return number;
        }
    };

    createEffect(() => {
        setRetrieved(state.data);
    });

    return (
        <S.Container>
            <For each={retrieved()?.results} fallback={<div>Loading...</div>}>
                {(item, index) => (
                    <S.ListItem>
                        <span>{getPrefixZero(index()+1)}</span>
                        <span>{item.name}</span>
                    </S.ListItem>
                )}
            </For>
        </S.Container>
    );
};

export default PokemonList;