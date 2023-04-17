import React from 'react';
import '../../../styles/singleblog.css'

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_BLOG } from '../../../utils/queries';

const Singleblog = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`

  const { blogId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_BLOG, {
    // pass URL parameter
    variables: { blogId: blogId },
  });

  console.log(data)
  const blog = data?.blog || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='blogpage'>
    <div className="singleblog">
        <div className='bloghead'>
            <h2>
                {blog.blogTitle}  
            </h2>
            <h3>
                <span className='publish'>published by:</span> {blog.blogAuthor}
            </h3>
            <p>
                {blog.createdAt}
            </p>
        </div>
        <div className="blogtext">
            <p>
            {blog.blogText}
            </p>
        </div>
    </div>
    <div className='comments'>
        <div className='commenthead'>
            <h2>Comments</h2>

        </div>
    </div>

    </div>
  );
};

export default Singleblog;
