import { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const updateApiKey = async (c: Context): Promise<Response> => {
  const { id, apiKey } = await c.req.json();

  const clerkId = c.get("clerkAuth")?.userId;
  if (!clerkId) {
    return c.json({ error: "User not found" }, 404);
  }
  const user = await verifyUser(clerkId);

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const existingKey = await prisma.keys.findFirst({
    where: {
      authorId: user.id,
      id: id,
      apiKey: apiKey.trim(),
    },
  });
  if (!existingKey) {
    return c.json({ error: "Key not found" }, 404);
  }
  const key = await prisma.keys.update({
    where: {
      id: id,
    },
    data: {
      apiKey: apiKey.trim(),
    },
  });
  return c.json(key);
};

export default updateApiKey;
