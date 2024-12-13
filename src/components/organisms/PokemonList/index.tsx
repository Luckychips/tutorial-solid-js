import { createEffect, createSignal, lazy, For } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { fetcher } from '@/utils/core';
import { BaseObjet } from '@/types/Base';
import * as S from './styles';

const LazyImage = lazy(async () => {
    await new Promise(r => setTimeout(r, 0));
    return import('@/components/atoms/LazyImage');
});

interface Retrieved {
    count: number;
    next?: string;
    previous?: string;
    results: BaseObjet[];
}

const PokemonList = () => {
    const [count, setCount] = createSignal(0);
    const [retrieved, setRetrieved] = createSignal<Retrieved | null>(null);
    const state = createQuery(() => ({
        queryKey: ['get:pokemon_list', { url: `https://pokeapi.co/api/v2/pokemon/?limit=${count()}&offset=0` }],
        queryFn: fetcher,
        retry: 0,
        throwOnError: true,
    }));

    const getPrefixZero = (number: number) => {
        if (number > 0 && number < 10) {
            return `000${number}`;
        } else if (number >= 10 && number < 100) {
            return `00${number}`;
        } else if (number >= 100 && number < 999) {
            return `0${number}`;
        } else {
            return number;
        }
    };

    createEffect(() => {
        if (state.data) {
            // setCount(state.data.count);
            setCount(1025);
            setRetrieved(state.data);
        }
    });

    return (
        <S.Container>
            <For each={retrieved()?.results} fallback={<div>Loading...</div>}>
                {(item, index) => (
                    <S.ListItem>
                        <div>
                            <span>{getPrefixZero(index() + 1)}</span>
                            <S.CharacterName>{item.name}</S.CharacterName>
                        </div>
                        <S.ThumbnailContainer>
                            <LazyImage
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index() + 1}.png`}
                                alt={item.name}
                            />
                        </S.ThumbnailContainer>
                    </S.ListItem>
                )}
            </For>
        </S.Container>
    );
};

export default PokemonList;