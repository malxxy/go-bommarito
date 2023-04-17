import React from 'react';
import '../../../styles/singleblog.css'
// import { Link } from 'react-router-dom';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE } from '../../../utils/queries';

const Singleprofile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`

  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // pass URL parameter
    variables: { profileId: profileId },
  });

  console.log(data)
  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <p>
        <h1> Welcome</h1>
            <h2>
                {profile.username}  
            </h2>
    </p>
    
  );
};

export default Singleprofile;
