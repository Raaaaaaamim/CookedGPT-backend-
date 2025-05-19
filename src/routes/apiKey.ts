import { Hono } from "hono";
import createApiKey from "../controllers/apiKeyControllers/createApiKey";
import updateApiKey from "../controllers/apiKeyControllers/updateApiKey";

const router = new Hono();
router.post("/create", createApiKey);
router.put("/update", updateApiKey);

export default router;
