import { Database } from "https://deno.land/x/denodb/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

export const DB = new Database("mysql", {
  database: Deno.env.get("DB") || "test",
  host: Deno.env.get("HOSTNAME") || "localhost",
  username: Deno.env.get("USERNAME") || "",
  password: Deno.env.get("PASSWORD") || "",
  port: 3306,
});
