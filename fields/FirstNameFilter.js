
import React from "react";

const FirstNameFilter = ({ value, onChange }) => (
  <div className="filter-field">
    <label>First Name</label>
    <input
      type="text"
      name="firstName"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FirstNameFilter;
