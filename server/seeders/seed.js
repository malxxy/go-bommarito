const db = require('../config/connection');
const { Profile, Blog } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const blogSeeds = require('./blogSeeds.json');
const commentSeeds = require('./commentSeeds.json')


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

        await Profile.findOneAndUpdate(
          { username: blogAuthor },
          {
            $addToSet: {
              blogs: _id,
            },
          }
        );
      }
     
      
      for (let i = 0; i < commentSeeds.length; i++) {
        let updated = await Blog.findOneAndUpdate(
          { _id: commentSeeds[i].blogId },
          {
            $addToSet: {
              comments: {
                $commentText: commentSeeds[i].commentText,
                $commentAuthor: commentSeeds[i].commentAuthor
              },
            },
            new: true,
            runValidators: true,
          }
        )
      }
      console.log('Data has successfully seeded!');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    process.exit(0);
  });
  