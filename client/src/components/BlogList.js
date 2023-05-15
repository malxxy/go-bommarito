import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/discover.css'
import Singleblog from './pages/Blog';
import { Routes, Route } from 'react-router-dom';
import { FaBold } from 'react-icons/fa';

const BlogList = ({ blogs }) => {
  if (!blogs.length) {
    return <h3>No blogs Yet</h3>;
  }

  return (
    <div>
      <h2 className="flex justify-center">Recent Posts</h2>
      <div className="flex-row justify-space-between my-4">
        {blogs &&
          blogs.map((blog) => (
            <Link className="btn btn-block btn-squared btn-light text-dark" to={`/blogs/${blog._id}`}>
            <div key={blog._id} className="blogitem col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header text-darkestBlue p-2 m-0">
                  {blog.blogTitle} <br />
                </h4>
                <div className='bloginfo'>
                  <div>
                    <h2 className='text-grey'>
                      Author: {blog.blogAuthor}
                    </h2>
                    <p className='text-grey'>
                      Published: {blog.createdAt}
                    </p>
                  </div>
                </div>
                  
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
