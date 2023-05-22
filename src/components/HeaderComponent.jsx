import React from 'react';
import imageUrl from '../assets/photo_2023-05-22_14-35-44.jpg';
const HeaderComponent = () => {
    return (
        <div className="section-header">
            <div className="section__row">
                <div className="section__block">
                    <img className="section__img" src={imageUrl} alt=""/>
                    <div className="section__subblock">
                        <span>Hello,</span>
                        <h2>Daniel</h2>
                    </div>
                </div>
                <div className="section__block"></div>
            </div>
        </div>
    );
};

export default HeaderComponent;