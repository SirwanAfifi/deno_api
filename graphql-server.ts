import { Application } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod.ts";

const app = new Application();

const types = (gql as any)`
    type User {
        firstName: String
        lastName: String
        age: Int
    }

    type Query {
        getUsers: [User!]!
    }
`;

const users = [
  {
    firstName: "Sirwan",
    lastName: "Afifi",
    age: 30,
  },
];

const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
  },
};

const GraphQLService = await applyGraphQL({
  typeDefs: types,
  resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server listening at http://localhost:8080");

await app.listen({ port: 8080 });
