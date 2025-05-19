import { Hono } from "hono";
import getAllLLM from "../controllers/aiModelControllers/getAllLLM";
import ProtectedRoute from "../middlewares/protectedRoute";
import { TryCatch } from "../utils/TryCatch";

const aiModel = new Hono();

aiModel.get("/all", ProtectedRoute, TryCatch(getAllLLM));

export default aiModel;
