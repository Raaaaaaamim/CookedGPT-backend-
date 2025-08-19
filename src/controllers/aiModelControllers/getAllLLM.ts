import type { Context } from "hono";
import { prisma } from "../../database";

const getAllLLM = async (c: Context) => {
  const { page, limit } = c.req.query();
  if (page) {
    const items = Number(limit) || 5;
    const skip = (Number(page) - 1) * items;
    const llms = await prisma.models.findMany({
      skip,
      take: items,
    });
    return c.json(llms);
  } else {
    const llms = await prisma.models.findMany();
    return c.json(llms);
  }
};

export default getAllLLM;
