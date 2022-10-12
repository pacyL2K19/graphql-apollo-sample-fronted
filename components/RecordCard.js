import React from 'react';

const RecordCard = (props) => {
    const { record } = props;
    return (
        <div className="">
            <div className="">{record.country}</div>
            <div className="">{record.year}</div>
            <div className="">{record.totalPopulation}</div>
            <div className="">{record.area} Km2</div>
        </div>
    )
}

export default RecordCard;
