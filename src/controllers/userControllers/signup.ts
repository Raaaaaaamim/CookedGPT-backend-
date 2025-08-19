import { Context } from "hono";
import { prisma } from "../../database";

const signup = async (c: Context): Promise<Response> => {
  const body = await c.req.json();

  const { fullName, username, email, clerkId } = body;
  // const clerkId = c.get("clerkAuth")?.userId;
  if (!fullName || !username || !email || !clerkId) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  const user = await prisma.users.create({
    data: {
      fullName,
      username,
      email,
      clerkId,
    },
  });
  return c.json(user);
};
export default signup;
