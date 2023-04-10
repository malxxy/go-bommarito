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
    post: [Blog]!
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
    user: User
  }
 
# used to retrive data
  type Query {
    Profiles: [Profile]
    Blogs: [Blog]
    Comments: [Comment]
    # user(username: String!): User
    # blogs(username: String): [Blog]
    # blogs(blogId: ID!): Blog
    # Finish code
  }
# used to modify data
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBlog(blogText: String!, blogAuthor: String!): Blog
    addComment(
      commentId: ID!
      commentText: String!
      commentAuthor: String!
    ): Blog
    removeBlog(blogId: ID!): Blog
    removeComment(blogId: ID!, commentId: ID!): Blog
  }
`;

module.exports = typeDefs;