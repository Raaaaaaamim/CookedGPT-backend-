import { Hono } from "hono";
import { connectToDB } from "./database/index.js";
import { transform } from "./routes/transform.js";
import user from "./routes/user.js";

const app = new Hono();
connectToDB();
const BASE_URL = "/api/v1";

const api = app.basePath(BASE_URL);
api.route(`/transform`, transform);
api.route(`/user`, user);
api.onError((err, ctx) => ctx.json({ error: err.message }, 500));
export default {
  fetch: app.fetch,
  port: 4000,
};
