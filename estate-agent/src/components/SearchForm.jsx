
// Updated SearchForm.jsx
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchForm({ onSearch }) {
  // State for React widgets
  const [propertyType, setPropertyType] = useState(null);
  const [dateAdded, setDateAdded] = useState(null);

  // Property Type Options
  const propertyTypeOptions = [
    { value: "any", label: "Any" },
    { value: "house", label: "House" },
    { value: "flat", label: "Flat" },
  ];

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect values from widgets and form
    const searchCriteria = {
      type: propertyType ? propertyType.value : "any",
      dateAdded: dateAdded ? dateAdded.toISOString().split("T")[0] : null,
      minPrice: e.target.minPrice.value || "",
      maxPrice: e.target.maxPrice.value || "",
      bedrooms: e.target.bedrooms.value || "",
      postcode: e.target.postcode.value || "",
    };

    onSearch(searchCriteria);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Property Type:
        <Select
          options={propertyTypeOptions}
          value={propertyType}
          onChange={setPropertyType}
          isClearable
          placeholder="Select a property type"
        />
      </label>
      <label>
        Min Price:
        <input type="number" name="minPrice" placeholder="100000" />
      </label>
      <label>
        Max Price:
        <input type="number" name="maxPrice" placeholder="500000" />
      </label>
      <label>
        Bedrooms:
        <input type="number" name="bedrooms" placeholder="e.g., 3" />
      </label>
      <label>
        Postcode:
        <input type="text" name="postcode" placeholder="e.g., NW1" />
      </label>
      <label>
        Date Added:
        <DatePicker
          selected={dateAdded}
          onChange={(date) => setDateAdded(date)}
          placeholderText="Select a date"
          dateFormat="yyyy-MM-dd"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
