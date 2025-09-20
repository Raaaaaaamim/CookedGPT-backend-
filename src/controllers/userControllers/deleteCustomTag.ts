import { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const deleteCustomTag = async (c: Context): Promise<Response> => {
  const id = c.req.param("id");
  if (!id) {
    return c.json({ error: "Missing id" }, 400);
  }
  const clerkId = c.get("clerkAuth")?.userId;
  const user = await verifyUser(clerkId as string);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const keyExists =
    (await prisma.tags.count({
      where: {
        id: id,
      },
    })) > 0;
  if (!keyExists) {
    return c.json({ error: "Key not found" }, 404);
  }

  const key = await prisma.tags.delete({
    where: {
      id: id,
      authorId: user.id,
    },
  });
  return c.json(key, 200);
};

export default deleteCustomTag;
