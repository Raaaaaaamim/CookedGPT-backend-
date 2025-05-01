import { Hono } from "hono";
import createAIModel from "../controllers/adminControllers/createAIModel";
import { TryCatch } from "../utils/TryCatch";

const router = new Hono();

router.post("/llm/create", TryCatch(createAIModel));

export default router;
