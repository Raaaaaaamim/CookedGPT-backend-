import type { Context } from "hono";
import { prisma } from "../../database";

const getTags = async (c: Context) => {
  const default_tags = ["GENZ", "SAVAGE", "PRO", "INSULT", "RIZZ"];
  const custom_tags = await prisma.users.findUnique({
    where: {
      clerkId: c.get("clerkAuth")?.userId!,
    },
    select: {
      Tags: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json({
    default_tags,
    custom_tags: custom_tags?.Tags,
  });
};

export default getTags;
