// define the schema of the blog database
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const blogSchema = new Schema({
  blogTitle: {
    type: String,
    required: 'You need to insert a title!',
    minlength: 1,
    maxlength: 200,
    trim: true,
  },
  blogText: {
    type: String,
    required: 'You need to insert text!',
    minlength: 1,
    trim: true,
  },
  blogAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;