import { createSignal } from 'solid-js';
import { PokemonCard } from '@/components/molecules';

const PokeShowPage = () => {
    const [dexId, setDexId] = createSignal(1);

    setInterval(() => {
        setDexId(i => i + 1);
    }, 500);

    return (
        <section>
            <PokemonCard accessorDexId={dexId} />
        </section>
    );
};

export default PokeShowPage;