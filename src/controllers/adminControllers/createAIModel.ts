import { Context } from "hono";
import { prisma } from "../../database";

const createAIModel = async (c: Context): Promise<Response> => {
  const body = await c.req.json();
  const { name, performance, type } = body;
  if (!name || !performance || !type) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const model = await prisma.models.create({
    data: { name, type, performance },
  });
  return c.json(model);
};

export default createAIModel;
