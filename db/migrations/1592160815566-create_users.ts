import { Migration } from "https://deno.land/x/nessie/mod.ts";
import { Schema } from "https://deno.land/x/nessie/qb.ts";
import Dex from "https://deno.land/x/dex/mod.ts";

/** Runs on migrate */
export const up: Migration = () => {
  return new Schema().create("users", (table) => {
    table.id();
    table.string("firstName", 100).nullable();
    table.string("lastName", 100).nullable();
    table.integer("age").nullable();
  });
};

/** Runs on rollback */
export const down: Migration = () => {
  return new Schema().drop("users");
};
