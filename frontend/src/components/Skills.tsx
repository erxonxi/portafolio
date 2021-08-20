import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className={'container'}>
            <h1 className={'display-md text-center m-0 title-gradiant'}>
                Skills
            </h1>
            <div className={'container-sm py-20'}>
                <p className={'text-center'}>
                    Estas son mis habilidades con tecnologías y lenguajes de
                    programación que he aprendido hasta ahora. Podras ver mas
                    sobre mis habilidades viendo pryectos de mi portafolio.
                </p>
            </div>
            <div className={'grid col-4 md-col-2 p-16'}>
                <SkillCard
                    url_img={'http://pngimg.com/uploads/php/php_PNG7.png'}
                />
                <SkillCard
                    url_img={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg'
                    }
                />
                <SkillCard
                    url_img={
                        'https://nodejs.org/static/images/logo-hexagon-card.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://www.pngkey.com/png/full/347-3470911_css3-html-css-js-logo-white.png'
                    }
                />
                <SkillCard
                    url_img={
                        'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
                    }
                />
            </div>
        </div>
    );
};

export default Skills;
