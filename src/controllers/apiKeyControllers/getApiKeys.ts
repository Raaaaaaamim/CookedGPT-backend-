import type { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const getApiKeys = async (c: Context) => {
  const clerkId = c.get("clerkAuth")?.userId;

  if (!clerkId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const verifiedUser = await verifyUser(clerkId);

  if (!verifiedUser) {
    return c.json({ error: "User not found" }, 404);
  }

  const keys = await prisma.keys.findMany({
    where: {
      authorId: verifiedUser.id,
    },
  });

  return c.json(keys);
};

export default getApiKeys;
