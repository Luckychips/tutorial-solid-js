import { useParams } from '@solidjs/router';
import { PokemonCard } from '../../components/molecules';

const PokemonPage = () => {
    const { id } = useParams();

    return (
        <section>
            <PokemonCard dexId={id} />
        </section>
    );
};

export default PokemonPage;