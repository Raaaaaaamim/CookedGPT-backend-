import { Context } from "hono";
import { prisma } from "../../database";
import { encrypt } from "../../utils/encryptDecrypt";
import verifyUser from "../../utils/verifyUser";
const createApiKey = async (c: Context): Promise<Response> => {
  const { apiKey, type } = await c.req.json();
  console.log(apiKey, type);

  const clerkId = c.get("clerkAuth")?.userId;
  if (!clerkId) {
    return c.json({ error: "User not found" }, 404);
  }
  const user = await verifyUser(clerkId);
  const providers = ["GEMINI", "OPENROUTER", "OPENAI"];
  if (!providers.includes(type.toUpperCase().trim())) {
    return c.json({ error: "Invalid type" }, 400);
  }

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const existingKey = await prisma.keys.findFirst({
    where: {
      authorId: user.id,
      type: type.toUpperCase().trim(),
    },
  });
  if (existingKey) {
    return c.json({ error: "Key already exists" }, 400);
  }
  const encryptedKey = encrypt(apiKey);

  const key = await prisma.keys.create({
    data: {
      apiKey: encryptedKey!,
      authorId: user.id,
      type: type.toUpperCase().trim(),
    },
  });
  return c.json(key);
};

export default createApiKey;
