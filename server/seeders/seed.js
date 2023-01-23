const db = require("../config/connection");
const { User, Tab } = require("../models");
const userSeeds = require("./userSeeds.json");
const tabSeeds = require("./tabSeeds.json");

db.once("open", async () => {
  await User.deleteMany({});
  await User.create(userSeeds);
  await Tab.deleteMany({});
  await Tab.create(tabSeeds);

  console.log("all done!");
  process.exit(0);
});
