import { Context } from "hono";
import { prisma } from "../../database";
import generateTransformationPrompt from "../../utils/generateTransformationPrompt";
import useGemini from "../../utils/useGemini";
import useOpenRouter from "../../utils/useOpenAI";
const transformationHandler = async (c: Context): Promise<Response> => {
  const body = await c.req.json();

  const { content, tags, model, type } = body;
  const user = await prisma.users.findUnique({
    where: {
      clerkId: c.get("clerkAuth")?.userId!,
    },
    include: {
      apiKeys: {
        where: {
          type: "OPENROUTER",
        },
        select: {
          apiKey: true,
        },
      },
    },
  });
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }

  if (user.apiKeys.length === 0) {
    return c.json({ error: "No api key found for openrouter" }, 400);
  }

  const key = user.apiKeys[0].apiKey.toString();
  if (!content || !tags || !model || !type) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  if (!Array.isArray(tags)) {
    return c.json({ error: "Tags must be an array" }, 400);
  }

  const uppercaseTags = tags.map((tag: string) =>
    tag.toUpperCase().split(" ").join("").trim()
  );
  const prompt = generateTransformationPrompt({
    tags: uppercaseTags,
    content,
  });
  if (type.toLowerCase() === "gemini") {
    const transformedText = await useGemini({ prompt, model });
    return c.json({ transformedText });
  } else if (type.toLowerCase() === "openai") {
    const transformedText = await useOpenRouter({ prompt, model, key });
    return c.json({ transformedText });
  } else if (type.toLowerCase() === "openrouter") {
    const transformedText = await useOpenRouter({ prompt, model, key });
    return c.json({ transformedText });
  } else {
    return c.json({ error: "Invalid type" }, 400);
  }
};
export default transformationHandler;
