import React from 'react';

const SkillCard = ({ url_img = '', w = 56 }) => {
    return (
        <div className={'card-tec text-center'}>
            <img className={'w-' + w} src={url_img} />{' '}
        </div>
    );
};

export default SkillCard;
