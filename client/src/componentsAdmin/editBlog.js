import React, { useState } from 'react';
import '../styles/output.css';

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
    <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl'>
        <div className="flex-grow">
          <div>
          <h1 className='justify-center text-xl block m-5'>Edit Blog Post</h1>
            <form className='form'>
                <input
                value={blogTitle}
                name="blogTitle"
                onChange={handleInputChange}
                type="text"
                placeholder="Blog Title"
                className='form-input block'
                />
                <input
                value={blogAuthor}
                name="blogAuthor"
                onChange={handleInputChange}
                type="text"
                placeholder="Blog Author"
                className='form-input block'
                />
                <input
                className='form-input block w-full h-200 m-2'
                value={blogText}
                name="blogText"
                onChange={handleInputChange}
                type="text"
                placeholder="Write blog here"
                />
            <button className='bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite' onClick={handleFormSubmit}>Publish</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;