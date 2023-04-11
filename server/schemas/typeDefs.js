const { gql } = require('apollo-server-express');

// incomplete code, must be finished
const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    blogs: [Blog]!
  }

  type Blog {
    _id: ID
    blogTitle: String
    blogText: String
    blogAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }
 
# used to retrive data
  type Query {
    profiles: [Profile]
    profile(username: String!): Profile
    blogs: [Blog]
    blog(blogId: ID!): Blog
    # user(username: String!): User
    # blogs(username: String): [Blog]
    # blogs(blogId: ID!): Blog
    # Finish code
  }
# used to modify data
  type Mutation {
    addProfile(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    addBlog(blogText: String!, blogTitle: String!, blogAuthor: String!): Blog
    addComment(
      commentId: ID!
      commentText: String!
      commentAuthor: String!
    ): Blog
    removeBlog(blogId: ID!): Blog
    removeComment(blogId: ID!, commentId: ID!): Blog
    removeProfile(username: String!, password: String!): Profile
  }
`;

module.exports = typeDefs;