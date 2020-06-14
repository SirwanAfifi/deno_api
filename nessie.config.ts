import { ClientSQLite } from "https://deno.land/x/nessie/mod.ts";

/** These are the default config options. */
const clientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
};
const clientSqLite = new ClientSQLite(clientOptions, "./sqlite.db");

/** This is the final config object */
const config = {
  client: clientSqLite,
  // Defaults to false, if you want the query builder exposed in migration files, set this to true.
  exposeQueryBuilder: false,
};

export default config;
