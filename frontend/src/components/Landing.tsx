import React from 'react';

const Landing = () => {
    return (
        <div className={'container pt-100 mb-40'}>
            <h1>
                Hola! Soy <span className={'text-orange'}>Rubén</span>👋
            </h1>
            <h1 className={'text-orange display-xl'}>
                Full Stack Junior Developer
            </h1>
            <p className={'font-24'}>
                Soy un desarrollador autodidacta de España. Actualmente trabajo
                en Nemon Intelligence In Business manteniendo y mejorando un
                E.R.P y CRM para comercializadoras electricas.
            </p>
            <p className={'font-28'}>
                Puedes echar un vistazo a mi trabajo ⚡️ Espero que te guste 🙌
            </p>
        </div>
    );
};

export default Landing;
