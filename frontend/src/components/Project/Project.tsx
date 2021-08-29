import React from 'react';
import './project.css';
import { FaGithub } from 'react-icons/fa';

const Project = ({
    title = '',
    description = '',
    url_github = '',
    url_demo = '',
    img = '',
    img_alt = '',
}) => {
    return (
        <div className={'card'}>
            <h2>{title}</h2>
            <img className={'img__project'} src={img} alt={img_alt} />
            <p>{description}</p>
            <div className={'container-full grid col-2 sm-col-1'}>
                <a className={'btn'} href={url_demo}>
                    VER DEMO
                </a>
                <a className={'btn'} href={url_github}>
                    <FaGithub className={'mr-12'} />
                    VER CODIGO
                </a>
            </div>
        </div>
    );
};

export default Project;
