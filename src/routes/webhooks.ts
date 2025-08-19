import { Hono } from "hono";
import clerk from "../controllers/webhookControllers/clerk";
import { TryCatch } from "../utils/TryCatch";

const webhooks = new Hono();

webhooks.post("/clerk", TryCatch(clerk));

export default webhooks;
