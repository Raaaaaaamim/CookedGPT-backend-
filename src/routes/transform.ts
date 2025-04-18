import { Hono } from "hono";
import transformationHandler from "../controllers/transformationControllers/transformationHandler";

export const transform = new Hono();

transform.post("/", transformationHandler);
