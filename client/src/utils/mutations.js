import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_BLOG = gql`
  mutation addBlog($profileId: ID!, $blog: String!) {
    addBlog(profileId: $profileId, blog: $blog) {
      _id
      name
      blogs
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_BLOG = gql`
  mutation removeBlog($blog: String!) {
    removeBlog(blog: $blog) {
      _id
      name
      blogs
    }
  }
`;
