import React from "react";
import Button from "./Button";

const RecordCard = ({ record, openCard = () => {}, onDelete = () => {} }) => {
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
        <span>Area</span> {record.area} Km²
      </div>
      <div className="action flex flex-row justify-between mt-4">
        <Button label="Edit" variant="edit" onClick={() => openCard(record)} />
        <Button
          label="Delete"
          variant="delete"
          onClick={() => onDelete(record.id)}
        />
      </div>
    </div>
  );
};

export default RecordCard;
