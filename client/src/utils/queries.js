import { gql } from '@apollo/client';

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

export const QUERY_BLOGS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
