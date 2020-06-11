import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export const Mutations = (gql as any)`
    type Mutation {
        addUser(input: UserInput!): Boolean!
    }
`;
