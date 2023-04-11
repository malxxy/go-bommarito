import { gql } from '@apollo/client';

// input requires user
export const LOGIN_USER = gql`
  mutation Login ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      username
    }
  }
}
`;

export const ADD_PROFILE = gql`
  mutation Add_Profile ($username: String!, $email: String!, $password: String!, $firsName: String!, $lastName: String!) {
  addProfile(username: $username, email: $email, password: $password, firstName: $firsName, lastName: $lastName) {
    token
    profile {
      _id
      firstName
      lastName
      username
      email
      password
    }
  }
}
`;

export const ADD_BLOG = gql`
  mutation AddBlog($blogText: String!, $blogTitle: String!, $blogAuthor: String!) {
  addBlog(blogText: $blogText, blogTitle: $blogTitle, blogAuthor: $blogAuthor) {
    _id
    blogTitle
    blogText
    blogAuthor
    createdAt
  }
}
`;

export const ADD_COMMENT = gql`
  mutation Comment($blogId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(blogId: $blogId, commentText: $commentText, commentAuthor: $commentAuthor) {
    _id
    commentText
    createdAt
  }
}
`;

export const REMOVE_BLOG = gql`
 mutation Mutation($blogId: ID!) {
  removeBlog(blogId: $blogId) {
    blogTitle
    createdAt
  }
}
`;

export const REMOVE_COMMENT = gql`
 mutation RemoveComment($blogId: ID!, $commentId: ID!) {
  removeComment(blogId: $blogId, commentId: $commentId) {
    _id
    commentText
    createdAt
  }
}
`;

export const DELETE_PROFILE = gql`
 mutation RemoveProfile($username: String!, $password: String!) {
  removeProfile(username: $username, password: $password) {
    _id
    firstName
    lastName
    username
    email
    password
  }
}
`;


