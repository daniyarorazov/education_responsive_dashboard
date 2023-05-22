import React from 'react';
import FilterListItemComponent from "./FilterListItemComponent.jsx";
import './FilterListCoursesComponent.css';

const FilterListCoursesComponent = () => {

    const filters = ['All', 'English', 'Development', 'Design', '3D Modelling'];

    function activeFilterHandler(event) {
        const buttons = document.querySelectorAll('.filter-button');

        buttons.forEach((button) => {
            if (button === event.target) {
                button.style.backgroundColor = "#2C2C2C";
                button.style.color = "white";
            } else {
                button.style.backgroundColor = "white";
                button.style.color = "#2C2C2C";

            }
        });
    }

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container">
                {
                    filters.map((el) => <FilterListItemComponent value={el} onClick={activeFilterHandler} />)
                }
            </div>
        </div>
    );
};

export default FilterListCoursesComponent;