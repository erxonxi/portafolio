import React from 'react';

const Landing = () => {
    return (
        <div className={'container pt-100 mb-40'}>
            <h1>
                Hola! Soy <span className={'title-gradiant'}>Rubén</span>👋
            </h1>
            <h1 className={'display-xl title-gradiant'}>
                Full Stack Junior Developer
            </h1>
            <p className={'font-20'}>
                Soy un desarrollador autodidacta de España. Actualmente trabajo
                en Nemon Intelligence In Business manteniendo y mejorando un
                E.R.P y CRM para comercializadoras electricas.
            </p>
            <p className={'font-20'}>
                Te recomiendo revisar algunos de mis proyectos. Espero que te
                guste 🙌
            </p>
        </div>
    );
};

export default Landing;
