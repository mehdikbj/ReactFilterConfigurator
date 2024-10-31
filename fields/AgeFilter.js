
import React from "react";

const AgeFilter = ({ value, onChange }) => (
  <div className="filter-field">
    <label>Age</label>
    <input
      type="number"
      name="age"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default AgeFilter;
