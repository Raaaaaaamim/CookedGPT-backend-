import { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const createCustomTag = async (c: Context): Promise<Response> => {
  const body = await c.req.json();
  const { name, prompt } = body;
  if (!name || !prompt) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  const clerkId = c.get("clerkAuth")?.userId!;
  const user = await verifyUser(clerkId);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const existingTag = await prisma.tags.findFirst({
    where: {
      authorId: user.id,
      name: name,
    },
  });
  if (existingTag) {
    return c.json({ error: "Tag already exists" }, 400);
  }
  const tag = await prisma.tags.create({
    data: {
      name,
      prompt,
      authorId: user.id,
    },
  });
  return c.json(tag);
};

export default createCustomTag;
