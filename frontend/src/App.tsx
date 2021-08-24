import React, { useState } from 'react';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Landing from './components/Landing';
import LoadingPage from './components/LoadingPage/LoadingPage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
    const [loadingPage, setLoadingPage] = useState(true);

    if (loadingPage) {
        setTimeout(() => {
            setLoadingPage(false);
        }, 3000);
        return <LoadingPage />;
    }

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
