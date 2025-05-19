import { Hono } from "hono";
import getProfile from "../controllers/userControllers/getProfile";
import signup from "../controllers/userControllers/signup";
import { TryCatch } from "../utils/TryCatch";

const user = new Hono();

user.post("/signup", TryCatch(signup));
user.get("/profile", TryCatch(getProfile));

export default user;
