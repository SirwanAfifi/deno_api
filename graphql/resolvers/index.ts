import { users } from "../../data/index.ts";

export const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
  },
};
