// edit/new blog page

// title input
// author input
// description input
// text input with rich text editor

//button to post blog 

import React, { useState } from 'react';
// import './style.css';

function EditBlog() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [blogTitle, setBlogTitle] = useState('');
  const [blogText, setBlogText] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'blogTitle') {
      setBlogTitle(inputValue);
    } else if (inputType === 'blogText') {
      setBlogText(inputValue);
    } else {
      setBlogAuthor(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setBlogTitle('');
    setBlogText('');
    setBlogAuthor('');
  };

  return (
    <div>
        <card>
            <form className="form">
                <input
                value={blogTitle}
                name="blogTitle"
                onChange={handleInputChange}
                type="text"
                placeholder="Blog Title"
                />
                <input
                value={blogAuthor}
                name="blogAuthor"
                onChange={handleInputChange}
                type="text"
                placeholder="Author"
                />
                <input
                value={blogText}
                name="blogText"
                onChange={handleInputChange}
                type="text"
                placeholder="Write blog here"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
      </card>
    </div>
  );
}

export default EditBlog;