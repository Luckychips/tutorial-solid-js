import { lazy } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import App from './core';

import Home from '@/pages/Home';
const Pokemon = lazy(() => import('@/pages/Pokemon'));

const Passing = () => {
    return (
        <Router root={App}>
            <Route path="/" component={Home} />
            <Route path="/pokemon/:id" component={Pokemon} />
        </Router>
    );
};

export default Passing;