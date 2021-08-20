import React from 'react';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
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

            <Projects />

            <Footer />
        </>
    );
};

export default App;
