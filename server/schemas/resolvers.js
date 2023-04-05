// if email = (pre insert admin emails), then display admin pages

// (check if user is an admin in the resolvers, not the schema)
const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');