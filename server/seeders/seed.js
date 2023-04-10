const db = require('../config/connection');
const { Profile, Blog } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const blogSeeds = require('./blogSeeds.json');

db.once('open', async () => {
    try {

      // empties out the database before seeding it again
      await Profile.deleteMany({})
      await Blog.deleteMany({});

      // seeds all existing profile info
      await Profile.create(profileSeeds);
      // seeds all exisiting blog info
      for (let i = 0; i < blogSeeds.length; i++) {
        const { _id, blogAuthor } = await Blog.create(blogSeeds[i]);
        const user = await Profile.findOneAndUpdate(
          { username: blogAuthor },
          {
            $addToSet: {
              Blog: _id,
            },
          }
        );
      }
      console.log('Data has successfully seeded!');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    process.exit(0);
  });
  