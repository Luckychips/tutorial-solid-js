import type { Component } from 'solid-js';
import { PokemonCard } from './components/atoms';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header></header>
      <main>
        <PokemonCard />
      </main>
    </div>
  );
};

export default App;
