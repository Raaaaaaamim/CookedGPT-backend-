import { Context, Next } from "hono";
import { ErrorTypes } from "../../types/ErrorTypes";

export const TryCatch =
  (controller: (c: Context, next: Next) => Promise<Response>) =>
  async (c: Context, next: Next) => {
    try {
      return await controller(c, next);
    } catch (error: any) {
      console.log(error);

      return c.json({ error: error?.message || ErrorTypes.SERVER_ERROR }, 500);
    }
  };
