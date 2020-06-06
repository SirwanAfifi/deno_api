import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

const UserTypes = (gql as any)`
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

const Queries = (gql as any)`
    type Query {
        getUsers: [User!]!
    }
`;

const Mutations = (gql as any)`
    type Mutation {
        addUser(input: UserInput!): Boolean!
    }
`;

export const RootTypes = (gql as any)`
    ${UserTypes}
    ${Queries}
    ${Mutations}
`;
