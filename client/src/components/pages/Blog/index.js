import React from 'react';
import '../../../styles/singleblog.css'
import { Link } from 'react-router-dom';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentForm from '../../commentform.js';

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
            {blog.comments.map((comment) => (
                <div className='combox'>
                    <p className='commenttext'>{comment.commentText}</p>
                    <p className='createdat'>{comment.commentAuthor} @ {comment.createdAt}</p>
                </div>
            ))}
        </div>
        <div className='addcomment'>
            <div>
                <button>Add a comment +</button>
                
                <p>
                You need to be logged in to share your thoughts. Please{' '}
                <Link to="/login"><span className='commentlink'>login</span></Link> or <Link to="/signup"><span className='commentlink'>signup</span></Link>
                </p>
            </div>
        </div>
    </div>
        
    </div>
    
  );
};

export default Singleblog;
