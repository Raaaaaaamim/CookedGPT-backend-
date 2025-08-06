import { Context } from "hono";
import { StatusCodes } from "../../enums/ErrorEnums";
import { prisma } from "../database";
import { CustomError } from "./CustomError";

const getApiKey = async (
  type: "OPENAI" | "OPENROUTER" | "GEMINI",
  c: Context
): Promise<string | null> => {
  const user = await prisma.users.findUnique({
    where: {
      clerkId: c.get("clerkAuth")?.userId!,
    },
    include: {
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
  if (!user) {
    throw new CustomError("User not found", StatusCodes.NOT_FOUND);
  }

  if (user.apiKeys.length === 0) {
    return null;
  }

  const key = user.apiKeys[0].apiKey.toString();
  return key;
};
export default getApiKey;
