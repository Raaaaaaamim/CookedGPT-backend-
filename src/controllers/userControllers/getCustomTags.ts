import { Context } from "hono";
import { prisma } from "../../database";
import verifyUser from "../../utils/verifyUser";

const getCustomTags = async (c: Context): Promise<Response> => {
  const clerkId = c.get("clerkAuth")?.userId;
  if (!clerkId) {
    return c.json({ error: "Clerk id not found" }, 404);
  }
  const user = await verifyUser(clerkId);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const tags = await prisma.tags.findMany({
    where: {
      authorId: user.id,
    },
  });
  if (!tags) return c.json({ data: false, message: "Query successful" }, 200);
  return c.json({ data: tags, message: "Query successful" }, 200);
};

export default getCustomTags;
