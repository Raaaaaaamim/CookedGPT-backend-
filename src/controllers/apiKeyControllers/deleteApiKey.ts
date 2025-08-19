import type { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const deleteApiKey = async (c: Context): Promise<Response> => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ error: "Missing id" }, 400);
  }

  const clerkId = c.get("clerkAuth")?.userId;
  const user = await verifyUser(clerkId as string);

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }

  const key = await prisma.keys.delete({
    where: { id: id, authorId: user.id },
  });
  return c.json(key);
};
export default deleteApiKey;
