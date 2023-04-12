import React from 'react';
import { Link } from 'react-router-dom';

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
            <div key={blog._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {blog.name} <br />
                </h4>
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/blogs/${blog._id}`}
                >
                  View blogs.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
