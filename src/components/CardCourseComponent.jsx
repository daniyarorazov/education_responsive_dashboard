import React from 'react';
import './CardCourseComponent.css';

const CardCourseComponent = () => {
    return (
        <div className="card-course">
            <div className="card__block">
                <h2>Learn English</h2>
                <span>Intermediate grammar</span>
                <div className="card__row ">
                    <div><img src="" alt=""/><span>2 months</span></div>
                    <div><img src="" alt=""/><span>16 lessons</span></div>
                </div>
                <hr/>
                <div className="card__row">
                    <span>Price <b>$199</b></span>
                    <span><img src="" alt=""/>4.8</span>
                </div>
            </div>
        </div>
    );
};

export default CardCourseComponent;