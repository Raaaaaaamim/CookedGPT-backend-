import { Context } from "hono";
import useGemini from "../../../transformer/useGemini";
import useOpenai from "../../../transformer/useOpenAI";
import useOpenRouter from "../../../transformer/useOpenRouter";
import { prisma } from "../../database";
import { REQUIRED_TRANSFORMATION_FIELDS } from "../../interfaces/transformation";
import generateTransformationPrompt from "../../utils/generateTransformationPrompt";
import getApiKey from "../../utils/getApiKey";
const transformationHandler = async (c: Context): Promise<Response> => {
  const body = await c.req.json();
  const { content, tags, type, modelId }: REQUIRED_TRANSFORMATION_FIELDS = body;

  if (content.length < 20 || content.length > 7000) {
    return c.json(
      { error: "Content must be between 20 and 7000 characters" },
      400
    );
  }

  let finalOutput = null;
  if (!content || !tags || !type || !modelId) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  if (!Array.isArray(tags)) {
    return c.json({ error: "Tags must be an array" }, 400);
  }

  let uppercaseTags = tags.map((tag: string) =>
    tag.toUpperCase().split(" ").join("").trim()
  );
  if (uppercaseTags.length === 0) {
    uppercaseTags = ["SAVAGE"];
  }

  const prompt = await generateTransformationPrompt({
    tags: uppercaseTags,
    content,
    c,
  });
  if (type.toUpperCase() === "GEMINI") {
    let key = await getApiKey("GEMINI", c);
    if (!key) {
      return c.json({ error: "no api keys were found" }, 400);
    }

    const transformation = await useGemini({
      prompt: prompt as string,
      modelId,
      key: key as string,
    });
    finalOutput = transformation;
  } else if (type.toUpperCase() === "OPENROUTER") {
    const key = await getApiKey("OPENROUTER", c);
    if (!key) {
      return c.json({ error: "no api keys were found" }, 400);
    }
    const transformation = await useOpenRouter({
      prompt: prompt as string,
      modelId,
      key: key as string,
    });
    finalOutput = transformation;
  } else if (type.toUpperCase() === "OPENAI") {
    const key = await getApiKey("OPENAI", c);
    if (!key) {
      return c.json(
        {
          error: "No key found",
        },
        400
      );
    }
    if (!key) {
      return c.json({ error: "no api keys were found" }, 400);
    }
    const transformation = await useOpenai({
      prompt: prompt as string,
      modelId,
      key,
    });
    finalOutput = transformation;
  } else {
    return c.json({ error: "Invalid type" }, 400);
  }
  if (finalOutput) {
    const author = await prisma.users.findUnique({
      where: {
        clerkId: c.get("clerkAuth")?.userId!,
      },
      select: {
        id: true,
      },
    });
    if (!author) {
      return c.json({ error: "User not found" }, 404);
    }
    const transformation = await prisma.transformations.create({
      data: {
        content: finalOutput.content,
        tags: uppercaseTags,
        modelId,
        authorId: author.id,
        modelName: finalOutput.modelName,
        input: content.trim(),
      },
    });
    console.log(transformation);
    return c.json(transformation, 200);
  }
  return c.json({ error: "Transformation failed" }, 500);
};
export default transformationHandler;
