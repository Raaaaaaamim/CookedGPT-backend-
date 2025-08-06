import type { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const searchTransformations = async (c: Context): Promise<Response> => {
  const { keyword, page = 1, limit = 5 } = c.req.query();

  if (!keyword) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  const clerkId = c.get("clerkAuth")?.userId!;
  const user = await verifyUser(clerkId);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }

  const skip = (Number(page) - 1) * Number(limit);

  const transformations = await prisma.transformations.findMany({
    skip,
    take: Number(limit),
    where: {
      authorId: user.id,
      OR: [
        {
          content: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        {
          input: {
            contains: keyword,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const docCount = await prisma.transformations.count({
    where: {
      authorId: user.id,
      OR: [
        {
          content: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        {
          input: {
            contains: keyword,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  const hasNextPage = Number(page) * Number(limit) + 1 <= Number(docCount);

  return c.json({
    transformations,
    hasNextPage,
    totalTransformations: Number(docCount),
    page: Number(page),
    limit: Number(limit),
  });
};

export default searchTransformations;
