
import React from "react";

const AddressFilter = ({ value, onChange }) => (
  <div className="filter-field">
    <label>Address</label>
    <input
      type="text"
      name="address"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default AddressFilter;
