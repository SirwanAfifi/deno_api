import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export const UserTypes = (gql as any)`
    type User {
        firstName: String
        lastName: String
        age: Int
    }

    input UserInput {
        firstName: String!
        lastName: String!
        age: Int!
    }
`;
