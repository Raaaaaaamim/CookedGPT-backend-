import { Hono } from "hono";
import deleteTransformation from "../controllers/transformationControllers/deleteTransformation";
import getTransformations from "../controllers/transformationControllers/getTransformations";
import searchTransformations from "../controllers/transformationControllers/searchTransformations";
import getProfile from "../controllers/userControllers/getProfile";
import getTags from "../controllers/userControllers/getTags";
import signup from "../controllers/userControllers/signup";
import ProtectedRoute from "../middlewares/protectedRoute";
import { TryCatch } from "../utils/TryCatch";

const user = new Hono();

user.post("/signup", TryCatch(signup));
user.get("/profile", ProtectedRoute, TryCatch(getProfile));
user.get("/tags", ProtectedRoute, TryCatch(getTags));
user.get(
  "/transformations/search/for",
  ProtectedRoute,
  TryCatch(searchTransformations)
);
user.delete(
  "/transformations/:id",
  ProtectedRoute,
  TryCatch(deleteTransformation)
);

user.get("/transformations/:tag", ProtectedRoute, TryCatch(getTransformations));

export default user;
