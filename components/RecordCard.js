import React from "react";

const RecordCard = (props) => {
  const { record } = props;
  return (
    <div className="record-card rounded-md p-3">
      <div className="">
        <span>Country name:</span> {record.country}
      </div>
      <div className="">
        <span>Year:</span> {record.year}
      </div>
      <div className="">
        <span>Total Poluation:</span> {record.totalPopulation}
      </div>
      <div className="">
        <span>Area</span> {record.area} Km2
      </div>
    </div>
  );
};

export default RecordCard;
