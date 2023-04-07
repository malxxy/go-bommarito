const jwt = require('jsonwebtoken');

const secret = 'private'; //will be eventually read from heroku
const expiration = '2h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};