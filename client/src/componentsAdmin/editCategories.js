import React, { useState } from 'react';
import '../styles/output.css';

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
    <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl my-10'>
        <div className="flex-grow">
          <div>
          <h1 className='justify-center text-2xl block m-5'>Add a Category</h1>
            <form className='form'>
                <input
                value={category}
                name="category"
                onChange={handleInputChange}
                type="text"
                placeholder="New Category"
                className='block'
                />
            <button className='bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite' onClick={handleFormSubmit}>Add Category</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default EditCategories;