const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { isValidPassword } = require('mongoose-custom-validators')


const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: isValidPassword,
      message: 'Password must have at least: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.'
    }
  },
  post: [
    {
      type: String,
      trim: true,
    },
  ],
});

// Middelware to safely save password with bcrypt
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Check for correct password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;