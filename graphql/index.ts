import { Queries } from "./resolvers/index.ts";
import { Mutaitons } from "./resolvers/index.ts";

export const Resolvers = {
  Query: { ...Queries },
  Mutation: { ...Mutaitons },
};
