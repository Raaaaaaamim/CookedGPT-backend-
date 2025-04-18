import { Hono } from "hono";
import { connectToDB } from "./database/index.js";
import { transform } from "./routes/transform.js";

const app = new Hono();
connectToDB();
const BASE_URL = "/api/v1";
app.route(`${BASE_URL}/transform`, transform);

export default {
  fetch: app.fetch,
  port: 4000,
};
