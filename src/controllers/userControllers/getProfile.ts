import type { Context } from "hono";
import { prisma } from "../../database";

const getProfile = async (c: Context): Promise<Response> => {
  const clerkId = c.get("clerkAuth")?.userId;

  if (!clerkId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const verifiedUser = await prisma.users.findUnique({
    where: {
      clerkId,
    },
  });
  const totalTransformations = await prisma.transformations.count({
    where: {
      authorId: verifiedUser?.id,
    },
  });

  if (!verifiedUser) {
    return c.json({ error: "User not found" }, 404);
  }

  return c.json(
    {
      user: verifiedUser,
      totalTransformations,
    },
    200
  );
};

export default getProfile;
