import { createEffect, createSignal, Match } from 'solid-js';
import { useParams } from '@solidjs/router';
import { Link, Meta, Title } from '@solidjs/meta';


const MetaHead = () => {
    const [data, setData] = createSignal<any>(null);
    const { id } = useParams();

    createEffect(async () => {
        if (id) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const json = await response.json();
            console.log(json);
            setData(json);
        }
    });

    return (
        <>
            <Title>Title of page</Title>
            <Link rel="canonical" href="http://solidjs.com/" />
            <Meta name="example" content="whatever" />
            {data() && (
                <>
                    <Meta name="og:title" content={data()?.name} />
                    <Meta name="og:image" content={data()?.sprites.front_default} />
                    <Meta name="og:description" content={`${data()?.height}-${data()?.weight}`} />
                </>
            )}
        </>
    );
};

export default MetaHead;