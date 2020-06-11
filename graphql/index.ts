import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

import { Queries } from "./resolvers/index.ts";
import { Mutaitons } from "./resolvers/index.ts";

import * as QueryType from "./types/queries.ts";
import * as MutationType from "./types/mutations.ts";
import { UserTypes } from "./types/custom.ts";

export const RootTypes = (gql as any)`
    ${UserTypes}
    ${QueryType.Queries}
    ${MutationType.Mutations}
`;

export const Resolvers = {
  Query: { ...Queries },
  Mutation: { ...Mutaitons },
};
