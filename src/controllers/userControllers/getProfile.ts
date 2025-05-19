import type { Context } from "hono";
import { prisma } from "../../database";

const getProfile = async (c: Context) => {
  const clerkId = c.get("clerkAuth")?.userId;

  if (!clerkId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const verifiedUser = await prisma.users.findUnique({
    where: {
      clerkId,
    },
    select: {
      id: true,
      fullName: true,
      username: true,
      email: true,
      createdAt: true,
      avatar: true,
    },
  });

  if (!verifiedUser) {
    return c.json({ error: "User not found" }, 404);
  }

  return c.json(verifiedUser);
};

export default getProfile;
