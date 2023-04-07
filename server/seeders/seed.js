const db = require('../config/connection');
const { User, Blog } = require('../models');
const userSeeds = require('./userSeeds.json');
const blogSeeds = require('./blogSeeds.json');

db.once('open', async () => {
    try {
        // incomplete
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('Data has successfully seeded!');
    process.exit(0);
  });
  