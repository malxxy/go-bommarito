// if email = (pre insert admin emails), then display admin pages

// (check if user is an admin in the resolvers, not the schema)

const { AuthenticationError } = require('apollo-server-express');
const { Profile, Blog } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      profiles: async () => {
        return Profile.find();
      },
  
      profile: async (parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
      },
      blogs: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Blog.find(params).sort({ createdAt: -1 });
      },
      blog: async (parent, { blogId }) => {
        return Blog.findOne({ _id: blogId });
      },
    },
  
    Mutation: {
      addProfile: async (parent, { firstName, lastName, email, password }) => {
        const profile = await Profile.create({ firstName, lastName, email, password });
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
  
      addBlog: async (parent, { profileId, post }) => {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { posts: post },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
      removeProfile: async (parent, { profileId }) => {
        return Profile.findOneAndDelete({ _id: profileId });
      },
      removeBlog: async (parent, { profileId, post }) => {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $pull: { posts: post } },
          { new: true }
        );
      },
      addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
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