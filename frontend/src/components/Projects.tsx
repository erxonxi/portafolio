import React from 'react';
import Project from './Project/Project';

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
                <div className={'grid col-2 md-col-1 py-40'}>
                    <Project
                        title={'Web Personal'}
                        description={
                            'Siempre quise desarollar una web para mostrar mis proyectos. Ese dia llego y puedes ver el codigo y la evolucion aqui.'
                        }
                        img={'img/portafolio_img.png'}
                        img_alt={'Portafolio'}
                        url_demo={'/'}
                        url_github={'https://github.com/erxonxi/portafolio'}
                    />
                    <Project
                        title={'Giff App'}
                        description={
                            'Mi primer proyecto con ReactJS, aprendiendo ha hacer peticiones a una API.'
                        }
                        img={'img/project_giff_app.png'}
                        img_alt={'Giff App'}
                        url_demo={'https://giff-app.rubenruizpedreira.es'}
                        url_github={'https://github.com/erxonxi/gif-app'}
                    />
                    <Project
                        title={'ToDo App'}
                        description={'Pequeña practica con ReactJS'}
                        img={'img/project_todo_app.png'}
                        img_alt={'ToDo App'}
                        url_demo={'https://todo.rubenruizpedreira.es'}
                        url_github={'https://github.com/erxonxi/todoapp'}
                    />
                    <div className={'card'}>
                        <h1 className={'text-center'}>
                            Working in deploy more apps...
                        </h1>
                        <div className={'container-full text-center'}>
                            <div className={'lds-ellipsis'}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
