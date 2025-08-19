import { Context, Next } from "hono";
import { StatusCodes } from "../../enums/ErrorEnums";

export const TryCatch =
  (controller: (c: Context, next: Next) => Promise<Response>) =>
  async (c: Context, next: Next) => {
    try {
      return await controller(c, next);
    } catch (error: any) {
      // console.log(error);

      return c.json({ error: error?.message || StatusCodes.SERVER_ERROR }, 500);
    }
  };
