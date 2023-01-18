const db = require('../config/connection');
const { User, Drink } = require('../models');
const userSeeds = require('./userSeeds.json');
const drinkSeeds =require ('./drinkSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);
  await Drink.deleteMany({});
  await Drink.create(drinkSeeds);

  console.log('all done!');
  process.exit(0);
});
