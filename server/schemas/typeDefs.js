const { gql } = require('apollo-server-express');

// everything works except for some reason the database is not recognizing blogs in teh Profile type
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
    commentAuthor: String
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
    blogs(username: String): [Blog]
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
      blogId: ID!
      commentText: String!
      commentAuthor: String!
    ): Comment
    removeBlog(blogId: ID!): Blog
    removeComment(blogId: ID!, commentId: ID!): Comment
    removeProfile(username: String!, password: String!): Profile
  }
`;

module.exports = typeDefs;