import { gql } from '@apollo/client';

// Retrieve all Profiles
// still need to attach blogs to profiles
export const QUERY_PROFILES = gql`
  query Profiles {
  profiles {
    _id
    firstName
    lastName
    username
    email
  }
}
`;

// Retrieve a specific Profile
// still need to attach blogs
export const QUERY_SINGLE_PROFILE = gql`
  query Profiles($username: String!) {
  profile(username: $username) {
    _id
    firstName
    lastName
    username
    email
  }
}
`;

// Retrieve all Blogs
export const QUERY_BLOGS = gql`
  query Blogs {
  blogs {
    _id
    blogTitle
    blogText
    blogAuthor
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`;

// Retreive a Specific Blog
export const QUERY_SINGLE_BLOG = gql`
  query Blog($blogId: ID!) {
  blog(blogId: $blogId) {
    _id
    blogTitle
    blogText
    blogAuthor
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`;
