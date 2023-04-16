// if email = (pre insert admin emails), then display admin pages

// (check if user is an admin in the resolvers, not the schema)

const { AuthenticationError } = require('apollo-server-express');
const { Profile, Blog } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      profiles: async () => {
        return Profile.find().populate('blogs')
      },
      profile: async (parent, { username }) => {
        return Profile.findOne({ username }).populate('blogs');
      },
      //returns all blogs in database from newest to oldest
      allblogs: async () => {
        return Blog.find()
      },
      //returns all blogs from single user
      blogs: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Blog.find(params).sort({ createdAt: -1 });
      },
      //returns single blog
      blog: async (parent, { blogId }) => {
        return Blog.findOne({ _id: blogId });
      },
    },
  
    Mutation: {
      addProfile: async (parent, { username, firstName, lastName, email, password }) => {
        const profile = await Profile.create({ username, firstName, lastName, email, password });
        const token = signToken(profile);
  
        return { token, profile };
      },
      login: async (parent, { email, password }) => {
        const profile = await Profile.findOne({ email });
  
        if (!profile) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(profile);
        return { token, profile };
      },
      addBlog: async (parent, { blogText, blogAuthor, blogTitle }) => {
        const blog = await Blog.create({ blogTitle, blogText, blogAuthor });
  
        await Profile.findOneAndUpdate(
          { username: blogAuthor },
          { $addToSet: { Profile: Blog._id } }
        );
  
        return blog;
      },
      removeProfile: async (parent, { profileId }) => {
        return Profile.findOneAndDelete({ _id: profileId });
      },
      removeBlog: async (parent, { blogId }) => {
        return Blog.findOneAndDelete({ _id: blogId })
      },
      addComment: async (parent, { blogId, commentText, commentAuthor }) => {
        return Blog.findOneAndUpdate(
          { _id: blogId },
          {
            $addToSet: { comments: { commentText, commentAuthor } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
      removeComment: async (parent, { blogId, commentId }) => {
        return Blog.findOneAndUpdate(
          { _id: blogId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
      }
    }
  };
  
  module.exports = resolvers;