const { User, Tab, Drink } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id);

        return user;
      }
      throw new AuthenticationError('Not logged in')
    },
    // drink: async (parent, { id }, context) => {
    //   if (context.drink){
    //     const drink = await Drink.findById(context.drink.id)

    //     return drink
    //   }
    //   throw new AuthenticationError('Drink does not exist')
    // }
    drink: async (parent, { _id }) => {
      const drink = await Drink.findById(_id)
      if (drink) {
        return drink
      }
      throw new AuthenticationError('Drink does not exist')
    },
    drinks: async (parent, { drinkName }) => {
      const params = {};

      if (drinkName) {
        params.drinkName = {
          $regex: drinkName,
        };
      }

      return Drink.find(params).populate('drinkName');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addDrink: async (parent, args) => {
      const drink = await Drink.create(args);

      return { drink };
    },
    addTab: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Tab({ products });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
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
    addTab: async (parent, { drinks }, context) => {
      console.log(context);
      if (context.user) {
        const tab = new Tab({ drinks });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { tabs: tab },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;
