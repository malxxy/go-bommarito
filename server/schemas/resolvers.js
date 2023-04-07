// if email = (pre insert admin emails), then display admin pages

// (check if user is an admin in the resolvers, not the schema)

const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      profiles: async () => {
        return Profile.find();
      },
  
      profile: async (parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
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
  
      addPost: async (parent, { profileId, post }) => {
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
      removePost: async (parent, { profileId, post }) => {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $pull: { posts: post } },
          { new: true }
        );
      },
    },
  };
  
  module.exports = resolvers;