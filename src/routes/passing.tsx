import { lazy } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import App from './core';

import Home from '@/pages/Home';
import PokeDex from '@/pages/PokeDex';
import PokeShow from '@/pages/PokeShow';
const Pokemon = lazy(() => import('@/pages/Pokemon'));

const Passing = () => {
    return (
        <Router root={App}>
            <Route path="/" component={Home} />
            <Route path="/pokedex" component={PokeDex} />
            <Route path="/pokeshow" component={PokeShow} />
            <Route path="/pokemon/:id" component={Pokemon} />
        </Router>
    );
};

export default Passing;