import { Hono } from "hono";
import createApiKey from "../controllers/apiKeyControllers/createApiKey";
import deleteApiKey from "../controllers/apiKeyControllers/deleteApiKey";
import getApiKeys from "../controllers/apiKeyControllers/getApiKeys";
import updateApiKey from "../controllers/apiKeyControllers/updateApiKey";
import ProtectedRoute from "../middlewares/protectedRoute";
import { TryCatch } from "../utils/TryCatch";

const router = new Hono();
router.post("/create", ProtectedRoute, TryCatch(createApiKey));
router.put("/update", ProtectedRoute, TryCatch(updateApiKey));
router.get("/all", ProtectedRoute, TryCatch(getApiKeys));
router.delete("/:id", ProtectedRoute, TryCatch(deleteApiKey));

export default router;
