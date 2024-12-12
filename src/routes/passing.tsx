import { lazy } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import { MetaHead } from '@/components';

import Home from '@/pages/Home';
import PokeDex from '@/pages/PokeDex';
import PokeShow from '@/pages/PokeShow';
const Pokemon = lazy(() => import('@/pages/Pokemon'));

const Passing = () => {
    return (
        <Router root={(props) => (
            <>
                <MetaHead />
                <header></header>
                <main>{props.children}</main>
                <footer></footer>
            </>
        )}>
            <Route path="/" component={Home} />
            <Route path="/pokedex" component={PokeDex} />
            <Route path="/pokeshow" component={PokeShow} />
            <Route path="/pokemon/:id" component={Pokemon} />
        </Router>
    );
};

export default Passing;