import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/discover.css'

const BlogList = ({ blogs, title }) => {
  if (!blogs.length) {
    return <h3>No blogs Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog._id} className="blogitem col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {blog.blogTitle} <br />
                </h4>
                <div className='bloginfo'>
                  <div>
                    <h2>
                      created by: {blog.blogAuthor}
                    </h2>
                    <p>
                      {blog.createdAt}
                    </p>
                  </div>
                </div>
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/blogs/${blog._id}`}
                >
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
