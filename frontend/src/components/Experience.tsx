import React from 'react';

const Experience = () => {
    return (
        <div className={'container pt-16'}>
            <h1 className={'display-md text-center m-0'}>Experiencia</h1>
            <div className={'container-sm py-20'}>
                <p className={'text-center pb-40'}>
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
                                <li>Mantenimiento y solucion de problemas</li>
                                <li>Implementación de mejoras</li>
                                <li>Soporte técnico</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
