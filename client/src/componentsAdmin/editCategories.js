import React, { useState } from 'react';
import './styles/forms.css';

function EditCategories() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [category, setCategory] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'category') {
      setCategory(inputValue);
    } else {
        alert("No category input found");
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setCategory('');
  };

  return (
    <div>
        <card>
            <form className="form">
                <input
                value={category}
                name="category"
                onChange={handleInputChange}
                type="text"
                placeholder="New Category Title"
                />
                <button type="button" onClick={handleFormSubmit}>Submit Catgeory</button>
            </form>
      </card>
    </div>
  );
}

export default EditCategories;