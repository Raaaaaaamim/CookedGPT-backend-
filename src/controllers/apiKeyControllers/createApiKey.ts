import { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const createApiKey = async (c: Context): Promise<Response> => {
  const { clerkId, apiKey, modelId, type } = await c.req.json();
  const user = await verifyUser(clerkId);

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const key = await prisma.keys.create({
    data: {
      apiKey,
      authorId: user.id,
      modelId,
      type,
    },
  });
  return c.json(key);
};

export default createApiKey;
