import React from "react";

const AvailableService = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default AvailableService;
