import { Application } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { RootTypes } from "./graphql/index.ts";
import { Resolvers } from "./graphql/index.ts";
import { DB } from "./database/index.ts";

const app = new Application();

await DB.sync();
