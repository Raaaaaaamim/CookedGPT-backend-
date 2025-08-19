import { Context } from "hono";
import { prisma } from "../../database";
import { encrypt } from "../../utils/encryptDecrypt";
import verifyUser from "../../utils/verifyUser";
const updateApiKey = async (c: Context): Promise<Response> => {
  const { id, apiKey } = await c.req.json();
  console.log(id, apiKey);

  const clerkId = c.get("clerkAuth")?.userId;
  if (!clerkId) {
    return c.json({ error: "Clerk id not found" }, 404);
  }
  console.log(clerkId);

  const user = await verifyUser(clerkId);
  const encryptedKey = encrypt(apiKey);
  if (!encryptedKey) {
    return c.json({ error: "could not encrypt the key " }, 400);
  }
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const existingKey =
    (await prisma.keys.count({
      where: {
        id: id,
      },
    })) > 0;
  if (!existingKey) {
    return c.json({ error: "Key not found" }, 404);
  }

  const key = await prisma.keys.update({
    where: {
      id: id,
    },
    data: {
      apiKey: encryptedKey,
    },
  });
  return c.json(key);
};

export default updateApiKey;
