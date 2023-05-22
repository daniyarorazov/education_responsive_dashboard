import React from 'react';

const FilterListItemComponent = ({value, onClick}) => {
    const styles = {
        borderRadius: "100px",
        padding: "10px 20px",
        border: "1px solid #2C2C2C",
        background: "transparent"
    }

    const styleActive = {
        background: "#2C2C2C"
    }
    return (
        <button className="filter-button" onClick={onClick} style={styles}>{value}</button>
    );
};

export default FilterListItemComponent;