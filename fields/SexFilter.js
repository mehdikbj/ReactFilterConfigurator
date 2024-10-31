
import React from "react";

const SexFilter = ({ value, onChange }) => (
  <div className="filter-field">
    <label>Sex</label>
    <select
      name="sex"
      value={value}
      onChange={onChange}
    >
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
);

export default SexFilter;
