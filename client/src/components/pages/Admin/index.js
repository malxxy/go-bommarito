import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BLOG, ADD_COMMENT, DELETE_PROFILE,REMOVE_BLOG, REMOVE_COMMENT, } from '../../../utils/mutations';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS, QUERY_SINGLE_PROFILE, QUERY_BLOGS, QUERY_SINGLE_BLOG } from '../../../utils/queries';
import adminNav from '../../adminNav';
// import ant design

function Admin() {
    return (
        <div>
            <div {adminNav}></div>
        <h1>Admin Home</h1>
        </div>
    );
    }

   export default Admin;


// AntDesign table for displaying blog posts from admin view, ability to edit

// AntDesign table for displaying profiles from admin view 
