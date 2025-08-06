import type { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";
const getTransformations = async (c: Context) => {
  const { page = 1, limit = 5 } = c.req.query();
  const tag = c.req.param("tag");
  const clerkId = c.get("clerkAuth")?.userId!;
  const user = await verifyUser(clerkId);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const transformationCount = await prisma.transformations.count({
    where: {
      authorId: user.id,
    },
  });

  const clc = Number(page) * Number(limit) + 1;
  const hasNextPage = clc <= Number(transformationCount);

  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 5;
  const items = limitNum;
  const skip = Math.max(0, (pageNum - 1) * items);

  if (tag && tag !== "ALL") {
    const transformations = await prisma.transformations.findMany({
      skip,
      take: items,
      where: {
        authorId: user.id,
        tags: {
          has: tag.toUpperCase().trim(),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const foundTransformations = await prisma.transformations.count({
      where: {
        authorId: user.id,
        tags: {
          has: tag.toUpperCase().trim(),
        },
      },
    });
    return c.json({
      transformations,
      hasNextPage,
      foundTransformations,
      totalTransformations: transformationCount,
      page: pageNum,
      limit: limitNum,
    });
  } else {
    const transformations = await prisma.transformations.findMany({
      skip,
      take: items,
      where: {
        authorId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return c.json({
      transformations,
      hasNextPage,
      foundTransformations: transformationCount,
      totalTransformations: transformationCount,
      page: pageNum,
      limit: limitNum,
    });
  }
};

export default getTransformations;
