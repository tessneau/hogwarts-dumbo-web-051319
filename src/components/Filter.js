import React, { Component } from "react";

const Filter = ({ handleGreased, handleSelectChange, sortBy }) => {
  const handleClick = () => {
    handleGreased();
  };

  return (
    <div className="filter ui menu">
      <div className="ui item">
        <button className="ui blue basic button compact" onClick={handleClick}>
          Filter Greased Hogs
        </button>
      </div>
      <div className="ui item">
        <label>Sort By..</label>
        <select
          className="ui selection dropdown"
          onChange={handleSelectChange}
          value={sortBy}
        >
          <option value=""></option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
