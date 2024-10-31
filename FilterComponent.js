
import React, { useState } from "react";
import filterConfig from "./filterConfig";

// Import all field components
import FirstNameFilter from "./fields/FirstNameFilter";
import LastNameFilter from "./fields/LastNameFilter";
import AgeFilter from "./fields/AgeFilter";
import SexFilter from "./fields/SexFilter";
import AddressFilter from "./fields/AddressFilter";

// Mapping field names to their respective components
const fieldComponents = {
  firstName: FirstNameFilter,
  lastName: LastNameFilter,
  age: AgeFilter,
  sex: SexFilter,
  address: AddressFilter
};

const FilterComponent = ({ userLocation }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    age: "",
    sex: "",
    address: ""
  });

  // Determine fields to display based on user location
  const fieldsToDisplay = filterConfig[userLocation] || filterConfig.default;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="filter-component">
      {fieldsToDisplay.map((fieldKey) => {
        const FieldComponent = fieldComponents[fieldKey];
        return (
          <FieldComponent
            key={fieldKey}
            value={filters[fieldKey]}
            onChange={handleInputChange}
          />
        );
      })}
      <button
        onClick={() => {
          console.log("Filters applied:", filters);
        }}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
