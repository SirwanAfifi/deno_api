import { Application } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { RootTypes } from "./graphql/types/index.ts";
import { resolvers } from "./graphql/resolvers/index.ts";

const app = new Application();

const GraphQLService = await applyGraphQL({
  typeDefs: RootTypes,
  resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server listening at http://localhost:8080");

await app.listen({ port: 8080 });
