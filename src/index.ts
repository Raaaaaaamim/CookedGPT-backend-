import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { connectToDB } from "./database/index.js";
import admin from "./routes/admin.js";
import aiModel from "./routes/aiModel.js";
import apiKey from "./routes/apiKey.js";
import { transform } from "./routes/transform.js";
import user from "./routes/user.js";
import webhooks from "./routes/webhooks.js";
const app = new Hono();
connectToDB();

const BASE_URL = "/api/v1";
app.use("*", clerkMiddleware());
const api = app.basePath(BASE_URL);
api.route(`/transform`, transform);
api.route(`/user`, user);
api.route(`/admin`, admin);
api.route(`/apikey`, apiKey);
api.route(`/webhooks`, webhooks);
api.route(`/ai-model`, aiModel);

api.get("/", (c) => c.json({ message: "Hello World" }));
api.onError((err, ctx) => ctx.json({ error: err.message }, 500));
export default {
  fetch: app.fetch,
  port: process.env.PORT,
};
