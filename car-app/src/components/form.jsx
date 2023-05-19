import React, { useState } from "react";
import "./form1.css";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    carMake: "",
    carModel: "",
    year: "",
    mileage: "",
    condition: "",
    features: [],
    transmission: "",
    priceRange: "",
    contactNumber: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? handleCheckboxChange(name, value, checked) : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleCheckboxChange = (name, value, checked) => {
    if (checked) {
      return [...formData[name], value];
    } else {
      return formData[name].filter((item) => item !== value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));

    // Validate the form fields
    const errors = {};
    if (!formData.carMake) {
      errors.carMake = "Car Make is required";
    }
    if (!formData.carModel) {
      errors.carModel = "Car Model is required";
    }
    if (!formData.year) {
      errors.year = "Year is required";
    }
    if (!formData.mileage) {
      errors.mileage = "Mileage is required";
    }
    if (!formData.condition) {
      errors.condition = "Please choose a condition";
    }
    if (formData.features.length === 0) {
      errors.features = "Please select at least one feature";
    }
    if (!formData.transmission) {
      errors.transmission = "Please select a transmission";
    }
    if (!formData.priceRange) {
      errors.priceRange = "Price Range is required";
    }
    if (!formData.contactNumber) {
      errors.contactNumber = "Contact number is required";
    }

    // Set the form errors and handle form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle form submission
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="formInput">
      <form onSubmit={handleSubmit}>
        <label>Car Make</label><br/>
        <input
          type="text"
          name="carMake"
          placeholder="Car make"
          value={formData.carMake}
          onChange={handleChange}
        /><br/>
        {formErrors.carMake && <span className="error">{formErrors.carMake}</span>}<br/>

        <label>Car Model</label><br/>
        <input
          type="text"
          name="carModel"
          placeholder="Car model"
          value={formData.carModel}
          onChange={handleChange}
        /><br/>
        {formErrors.carModel && <span className="error">{formErrors.carModel}</span>}<br/>

        <label htmlFor="year">Year</label><br/>
        <input
          type="number"
          id="year"
          name="year"
          min="1900"
          max="2099"
          step="1"
          value={formData.year}
          onChange={handleChange}
        /><br/>
        {formErrors.year && <span className="error">{formErrors.year}</span>}<br/>

        <label>Mileage</label><br/>
        <input
          type="number"
          name="mileage"
          placeholder="Mileage"
          value={formData.mileage}
          onChange={handleChange}
        /><br/>
        {formErrors.mileage && <span className="error">{formErrors.mileage}</span>}<br/>

        <div className="radio">
          <label htmlFor="condition">Condition</label><br/>
          <input
            type="radio"
            id="excellent"
            name="condition"
            value="excellent"
            checked={formData.condition === "excellent"}
            onChange={handleChange}
          />
          <label htmlFor="excellent">Excellent</label><br/>
          <input
            type="radio"
            id="good"
            name="condition"
            value="good"
            checked={formData.condition === "good"}
            onChange={handleChange}
          />
          <label htmlFor="good">Good</label><br/>
          <input
            type="radio"
            id="fair"
            name="condition"
            value="fair"
            checked={formData.condition === "fair"}
            onChange={handleChange}
          />
          <label htmlFor="fair">Fair</label><br/>
          <input
            type="radio"
            id="poor"
            name="condition"
            value="poor"
            checked={formData.condition === "poor"}
            onChange={handleChange}
          />
          <label htmlFor="poor">Poor</label><br/>
        </div>
        {formErrors.condition && <span className="error">{formErrors.condition}</span>}<br/>

        <label htmlFor="features">Features</label><br/>
        <input
          type="checkbox"
          id="airConditioning"
          name="features"
          value="airConditioning"
          checked={formData.features.includes("airConditioning")}
          onChange={handleChange}
        />
        <label htmlFor="airConditioning">Air Conditioning</label><br/>
        <input
          type="checkbox"
          id="powerSteering"
          name="features"
          value="powerSteering"
          checked={formData.features.includes("powerSteering")}
          onChange={handleChange}
        />
        <label htmlFor="powerSteering">Power Steering</label><br/>
        <input
          type="checkbox"
          id="powerWindows"
          name="features"
          value="powerWindows"
          checked={formData.features.includes("powerWindows")}
          onChange={handleChange}
        />
        <label htmlFor="powerWindows">Power Windows</label><br/>
        <input
          type="checkbox"
          id="abs"
          name="features"
          value="abs"
          checked={formData.features.includes("abs")}
          onChange={handleChange}
        />
        <label htmlFor="abs">ABS</label><br/>
        <input
          type="checkbox"
          id="navigationSystem"
          name="features"
          value="navigationSystem"
          checked={formData.features.includes("navigationSystem")}
          onChange={handleChange}
        />
        <label htmlFor="navigationSystem">Navigation System</label><br/>
        {formErrors.features && <span className="error">{formErrors.features}</span>}<br/>

        <label htmlFor="transmission">Transmission</label>
        <select
          id="transmission"
          name="transmission"
          value={formData.transmission}
          onChange={handleChange}
        >
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select><br/>
       

        <label htmlFor="priceRange">Price Range</label><br/>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="100"
          step="1"
          value={formData.priceRange}
          onChange={handleChange}
        /><br/>
        {formErrors.priceRange && <span className="error">{formErrors.priceRange}</span>}<br/>

        <label htmlFor="contactNumber">Contact Number</label><br/>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          placeholder="Enter contact number"
          value={formData.contactNumber}
          onChange={handleChange}
        /><br/>
        {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}<br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

