// import React from "react";

// function Discover() {
//     return (
//         <div>
//         <h1>Discover</h1>
        
//         </div>
//     );
//     }

//     export default Discover;

import React from 'react';
import { useQuery } from '@apollo/client';

import BlogList from '../../BlogList';

import { QUERY_BLOGS } from '../../../utils/queries';

const Discover = () => {
  const { loading, data } = useQuery(QUERY_BLOGS);
  const blogs = data?.blogs || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BlogList
              blogs={blogs}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Discover;
