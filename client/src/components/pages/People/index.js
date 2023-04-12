import React from "react";

function People() {
    return (
      <main>
        <div>
        <h1>People</h1>
        </div>
    </main>
  );
};

    export default People;


    // import React from 'react';
    // import { useQuery } from '@apollo/client';
    
    // import ProfileList from '../../ProfileList';
    
    // import { QUERY_PROFILES } from '../../../utils/queries';
    
    // const Home = () => {
    //     console.log(QUERY_PROFILES, "**********************")
    //   const { loading, data } = useQuery(QUERY_PROFILES);
    //   console.log(loading, data, "**********************")
    //   const profiles = data?.profiles || [];
    
    //   return (
    //     <main>
    //       <div className="flex-row justify-center">
    //         <div className="col-12 col-md-10 my-3">
    //           {loading ? (
    //             <div>Loading...</div>
    //           ) : (
    //             <ProfileList
    //               profiles={profiles}
    //               title="Here's the current roster of friends..."
    //             />
    //           )}