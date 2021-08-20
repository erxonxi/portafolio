import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className={'container'}>
            <h1 className={'display-md text-center title-gradiant m-0'}>
                Portafolio
            </h1>
            <div className={'container'}>
                <p className={'text-center'}>
                    Aqui puedes echar un vistazo a mis diferentes proyectos.
                    Podras ver el codigo en mi Github.
                </p>
                <div className={'grid col-2 sm-col-1 py-40'}>
                    <div className={'card'}>
                        <h2>Web Personal</h2>
                        <img src="img/portafolio_img.png" alt="" />
                        <p>
                            Siempre quise desarollar una web para mostrar mis
                            proyectos. Ese dia llego y puedes ver el codigo y la
                            evolucion aqui.
                        </p>
                        <div className={'container-full grid col-2'}>
                            <a className={'btn'} href={'/'}>
                                VER DEMO
                            </a>
                            <a className={'btn'} href={'https://github.com/erxonxi/portafolio'}>
                                <FaGithub className={'mr-12'} />
                                VER CODIGO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
