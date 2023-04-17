import { gql } from '@apollo/client';
/*-----All client side queries. Each exported const allows the user to manipulate the database in a certain way----- */

// LOGIN - requires user email and password
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

// CREATE PROFILE - requires a username, email, firstname, lastname, and password
export const ADD_PROFILE = gql`
  mutation Add_Profile ($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addProfile(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    profile {
      _id
      username
      firstName
      lastName
      email
      password
    }
  }
}
`;

// POST A NEW BLOG - requires the actual blogs' text, title, and author (author should be pulled from the active user's username)
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

// ADD COMMMENT TO BLOG POST - requires the comment text, comment author (should also be pull from active user's username), and blogID
export const ADD_COMMENT = gql`
  mutation Comment($blogId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(blogId: $blogId, commentText: $commentText, commentAuthor: $commentAuthor) {
    _id
    commentText
    createdAt
  }
}
`;

// REMOVE BLOG POST - just requires the blog ID 
export const REMOVE_BLOG = gql`
 mutation Mutation($blogId: ID!) {
  removeBlog(blogId: $blogId) {
    blogTitle
    createdAt
  }
}
`;

// REMOVE COMMENT - requires both the comment ID and the blog ID
export const REMOVE_COMMENT = gql`
 mutation RemoveComment($blogId: ID!, $commentId: ID!) {
  removeComment(blogId: $blogId, commentId: $commentId) {
    _id
    commentText
    createdAt
  }
}
`;

// DELETE PROFILE - requires the username and password of the profile being deleted
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


