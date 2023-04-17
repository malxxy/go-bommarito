import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BLOG } from '../utils/mutations';

function EditBlog() {
  const [formState, setFormState] = useState({
    blogTitle: '',
    blogAuthor: '',
    blogText: '',
  });

  // Set up our mutation with an option to handle errors
  const [addBlog, { error } ] = useMutation(ADD_BLOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addBlog({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'blogTitle' ) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'blogAuthor') {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'blogText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl my-5'>
        <div className="flex-grow">
          <div>
          <h1 className='text-xl block m-5'>Publish a Blog Post</h1>
            <form className='form'>
                <input
                value={formState.blogTitle}
                name="blogTitle"
                onChange={handleChange}
                type="text"
                placeholder="Blog Title"
                className='form-input block'
                />
                <input
                value={formState.blogAuthor}
                name="blogAuthor"
                onChange={handleChange}
                type="text"
                placeholder="Blog Author"
                className='form-input block'
                />
                <input
                className='form-input block'
                value={formState.blogText}
                name="blogText"
                onChange={handleChange}
                type="text"
                placeholder="Write blog here"
                />
            <button className='bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite' onClick={handleFormSubmit}>Publish</button>
            {error && (
            <div className="col-12 my-3 text-black p-3">
            Something went wrong...
            </div>
        )}
            </form>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;