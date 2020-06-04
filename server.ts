import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();
router.get(
  "/",
  async ({ request, response }: { request: any; response: any }) => {
    response.body = { message: "OK" };
    response.status = 200;
  }
);
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server listening at http://localhost:8080");

await app.listen({ port: 8080 });
