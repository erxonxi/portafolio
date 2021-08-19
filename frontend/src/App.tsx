import React from 'react';
import { FaJs, FaPhp } from 'react-icons/fa';
import {
    SiApollographql,
    SiCss3,
    SiGit,
    SiGraphql,
    SiHtml5,
    SiNodeDotJs,
    SiPostgresql,
    SiReact,
    SiSass,
    SiTypescript,
} from 'react-icons/si';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <div className={'container pt-100 mb-40'}>
                <h1>
                    Hola! Soy <span className={'text-orange'}>Rubén</span>👋
                </h1>
                <h1 className={'text-orange display-xl'}>
                    Full Stack Junior Developer
                </h1>
                <p className={'font-24'}>
                    Soy un desarrollador autodidacta de España. Actualmente
                    trabajo en Nemon Intelligence In Business manteniendo y
                    mejorando un E.R.P y CRM para comercializadoras electricas.
                </p>
                <p className={'font-28'}>
                    Puedes echar un vistazo a mi trabajo ⚡️ Espero que te guste
                    🙌
                </p>
            </div>

            <div className={'container'}>
                <h1 className={'display-md text-center m-0'}>Skills</h1>
                <div className={'container-sm py-20'}>
                    <p className={'text-center'}>
                        Estas son mis habilidades con tecnologías y lenguajes de
                        programación que he aprendido hasta ahora. Podras ver
                        mas sobre mis habilidades viendo pryectos de mi
                        portafolio.
                    </p>
                </div>
                <div className={'grid col-4 md-col-2 p-16'}>
                    <div className={'card-tec text-center'}>
                        <FaPhp className={'font-56 dark-blue'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiPostgresql className={'font-56 dark-blue'} />
                    </div>
                    <div className={'card-tec text-center yellow'}>
                        <FaJs className={'font-56'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiTypescript className={'font-56 dark-blue'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiGraphql className={'font-56 purple'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiApollographql className={'font-56'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiReact className={'font-56 blue-ligth'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiNodeDotJs className={'font-56 green-dark'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiSass className={'font-56 purple'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiHtml5 className={'font-56 orange'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiCss3 className={'font-56 green-dark'} />
                    </div>
                    <div className={'card-tec text-center'}>
                        <SiGit className={'font-56 orange'} />
                    </div>
                </div>
            </div>

            <div className={'container pt-16'}>
                <h1 className={'display-md text-center m-0'}>Experiencia</h1>
                <div className={'container-sm py-20'}>
                    <p className={'text-center'}>
                        Esta es mi experiencia laboral. Actualmente solo eh
                        trabajado en la empresa en la que me encuentro.
                    </p>
                    <div className={'container-sm'}>
                        <div className={'card'}>
                            <h2>Nemon Intelligence In Business</h2>
                            <p>Junior Developer</p>
                            <p>
                                Software ERP y CRM para comercializadoras
                                electricas, con la modalidad de programa como
                                servicio.
                                <ul>
                                    <li>
                                        Mantenimiento y solucion de problemas
                                    </li>
                                    <li>Implementación de mejoras</li>
                                    <li>Soporte técnico</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
