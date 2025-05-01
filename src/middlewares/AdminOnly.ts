import { Context, Next } from "hono";
import { ErrorMessages, StatusCodes } from "../../enums/ErrorEnums";

const AdminOnly = async (c: Context, next: Next): Promise<void | Response> => {
  const body = await c.req.json();
  const { email } = body;
  if (email !== "orramim4@gmail") {
    return c.json(
      { message: ErrorMessages.UNAUTHORIZED },
      StatusCodes.UNAUTHORIZED
    );
  }

  return next();
};
export default AdminOnly;
