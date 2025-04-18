import { Context } from "hono";
import generateTransformationPrompt from "../../utils/generateTransformationPrompt";
import useGemini from "../../utils/useGemini";

const transformationHandler = async (c: Context): Promise<Response> => {
  const body = await c.req.json();
  const { content, tags, model, type } = body;
  const uppercaseTags = tags.map((tag: string) => tag.toUpperCase());
  const prompt = generateTransformationPrompt({
    tags: uppercaseTags,
    content,
  });
  if (type === "gemini") {
    const transformedText = await useGemini({ prompt, model });
    return c.json({ transformedText });
  }
};
export default transformationHandler;
