import React from 'react';
import Experience from './components/Experience';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

const App = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <Landing />

            <Skills />

            <Experience />
        </>
    );
};

export default App;
