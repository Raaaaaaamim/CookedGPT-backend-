import { getAuth } from "@hono/clerk-auth";
import { Context, Next } from "hono";
import { StatusCodes } from "../../enums/ErrorEnums";

const ProtectedRoute = (c: Context, next: Next) => {
  const auth = getAuth(c);
  console.log(auth);

  if (!auth?.userId) {
    return c.json(
      {
        message: "You are not logged in.",
      },
      StatusCodes.NOT_FOUND
    );
  }
  c.set("clerkAuth", auth);
  return next();
};
export default ProtectedRoute;
