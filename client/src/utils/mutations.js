import { gql } from '@apollo/client';

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
