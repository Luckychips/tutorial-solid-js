import type { ParentComponent } from 'solid-js';

const App: ParentComponent = (props) => {
    return (
        <>
            <header></header>
            <main>{props.children}</main>
            <footer></footer>
        </>
    );
};

export default App;
