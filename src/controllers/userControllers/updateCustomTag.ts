import { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const updateCustomTag = async (c: Context): Promise<Response> => {
  const body = await c.req.json();

  const { name, prompt, id } = body;
  if (!name || !prompt || !id) {
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
      id: id,
    },
  });
  if (!existingTag) {
    return c.json({ error: "Tag not found" }, 400);
  }
  const updatedTag = await prisma.tags.update({
    where: {
      id: id,
      authorId: user.id,
    },
    data: {
      name,
      prompt,
    },
  });
  return c.json(updatedTag);
};

export default updateCustomTag;
