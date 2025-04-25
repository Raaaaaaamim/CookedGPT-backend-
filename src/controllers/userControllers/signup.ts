import { Context } from "hono";
import { prisma } from "../../database";

const signup = async (c: Context): Promise<Response> => {
  const body = await c.req.json();
  const { fullName, username, email, clerkId } = body;
  if (!fullName || !username || !email || !clerkId) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  const user = await prisma.user.create({
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
