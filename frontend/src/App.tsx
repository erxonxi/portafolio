import React from 'react';

const App = () => {
    return (
        <>
            <header>
                <nav className={'nav'}>
                    <div className={'container'}>
                        <a href="#" className={'active'}>
                            HOME
                        </a>
                        <a href="#">ABOUT ME</a>
                        <a href="#">SKILLS</a>
                        <a href="#">PORTFOLIO</a>
                    </div>
                </nav>
            </header>
            <div className={'container card'}>
                <h1 className={''}>Encabezado H1</h1>
                <h2 className={''}>Encabezado H2</h2>
                <h3 className={''}>Encabezado H3</h3>
                <h4 className={''}>Encabezado H4</h4>
                <h5 className={''}>Encabezado H5</h5>
                <h6 className={''}>Encabezado H6</h6>
            </div>

            <div className={'container card'}>
                <h1 className={'display-xl'}>Display 1</h1>
                <h2 className={'display-lg'}>Display 2</h2>
                <h3 className={'display-sm'}>Display 3</h3>
            </div>

            <div className={'container'}>
                <main className={'grid col-3 md-col-2 sm-col-1'}>
                    <div className={'card'}>Card 1</div>
                    <div className={'card'}>Card 2</div>
                    <div className={'card'}>Card 3</div>
                    <div className={'card'}>Card 4</div>
                    <div className={'card'}>Card 5</div>
                    <div className={'card'}>Card 6</div>
                </main>
            </div>

            <div className={'container'}>
                <div className={'grid col-3'}>
                    <div className={'span-2 md-span-3'}>
                        <div className={'card'}>
                            <h1>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit
                            </h1>
                            <p>
                                Fugiat nemo autem deserunt, nobis quasi aliquam
                                asperiores tempora animi magni. Enim autem
                                sapiente modi laborum. Quaerat hic illo
                                consequuntur vel exercitationem.
                            </p>
                        </div>
                        <div className={'card'}>
                            <h1>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit
                            </h1>
                            <p>
                                Fugiat nemo autem deserunt, nobis quasi aliquam
                                asperiores tempora animi magni. Enim autem
                                sapiente modi laborum. Quaerat hic illo
                                consequuntur vel exercitationem.
                            </p>
                        </div>
                    </div>
                    <div className={'card span-1 md-span-3'}>
                        <h3>Registrate</h3>
                        <form action="">
                            <input className={'input'} type="text" placeholder="Correo Electronico" />
                            <input className={'input'} type="password" placeholder="Contraseña" />
                            <button className={'btn red'}>Suscribete</button>
                            <button className={'btn green'}>Registrarte</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
