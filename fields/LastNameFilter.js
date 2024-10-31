
import React from "react";

const LastNameFilter = ({ value, onChange }) => (
  <div className="filter-field">
    <label>Last Name</label>
    <input
      type="text"
      name="lastName"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default LastNameFilter;
