import { Hono } from "hono";
import transformationHandler from "../controllers/transformationControllers/transformationHandler";
import ProtectedRoute from "../middlewares/protectedRoute";
import { TryCatch } from "../utils/TryCatch";

export const transform = new Hono();

transform.post("/", ProtectedRoute, TryCatch(transformationHandler));
