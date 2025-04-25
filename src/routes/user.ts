import { Hono } from "hono";
import signup from "../controllers/userControllers/signup";
import { TryCatch } from "../utils/TryCatch";

const user = new Hono();

user.post("/signup", TryCatch(signup));

export default user;
