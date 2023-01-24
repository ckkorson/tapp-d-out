const { User, Tab, Drink } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("tabs");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("tabs");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    tabs: async (parent, args, context) => {
      if (context.user) {
        const tabs = await Tab.find({ tabOwner: context.user.username }).sort({
          createdAt: -1,
        });
        // console.log("THESE ARE THE TABS");
        // console.log(tabs);
        return tabs;
      }
    },
    tab: async (parent, args, context) => {
      if (context.user) {
        const tab = await Tab.findOne({ tabOwner: context.user.username }).sort(
          {
            createdAt: -1,
          }
        );
        // console.log("THIS IS THE ONE TAB");
        // console.log(tab);
        return tab;
      }
    },
  },
  Mutation: {
    addUser: async (parent, { name, username, email, password }) => {
      const user = await User.create({ name, username, email, password });
      const token = signToken(user);
      console.log("NEW USER");
      console.log(user);
      return { token, user };
    },
    addDrink: async (parent, { tabId, drinkType, price }, context) => {
      // if (context.user) {
      return Tab.findOneAndUpdate(
        { _id: tabId },
        {
          $addToSet: {
            drinks: { drinkType, price },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addTab: async (parent, { description, location }, context) => {
      // console.log(context);
      if (context.user) {
        const tab = await Tab.create({
          description,
          location,
          tabOwner: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { tabs: tab._id } }
        );

        return tab;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
