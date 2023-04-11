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

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $thoughtId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      thoughtId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
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
