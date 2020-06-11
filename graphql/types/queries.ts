import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export const Queries = (gql as any)`
    type Query {
        getUsers: [User!]!
    }
`;
