import { Context } from "hono";
import { StatusCodes } from "../../enums/ErrorEnums";
import { prisma } from "../database";
import { CustomError } from "./CustomError";
import { decrypt } from "./encryptDecrypt";
const getApiKey = async (
  type: "OPENAI" | "OPENROUTER" | "GEMINI",
  c: Context
): Promise<string> => {
  const user = await prisma.users.findUnique({
    where: {
      clerkId: c.get("clerkAuth")?.userId!,
    },

    select: {
      apiKeys: {
        where: {
          type: type,
        },
        select: {
          apiKey: true,
        },
      },
    },
  });

  console.log(user, "hello");

  if (!user) {
    throw new CustomError("User not found", StatusCodes.NOT_FOUND);
  }

  if (user.apiKeys.length === 0) {
    throw new CustomError("No key found", StatusCodes.BAD_REQUEST);
  }

  const key = user.apiKeys[0].apiKey;

  const decodedKey = decrypt(key);
  console.log(decodedKey, "hello g");

  if (!decodedKey) {
    throw new CustomError("Invalid key", StatusCodes.BAD_REQUEST);
  }
  return decodedKey;
};
export default getApiKey;
