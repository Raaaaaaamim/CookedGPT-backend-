import type { Context } from "hono";
import { prisma } from "../../database";

const getAllLLM = async (c: Context) => {
  const llms = await prisma.models.findMany();

  return c.json(llms);
};

export default getAllLLM;
