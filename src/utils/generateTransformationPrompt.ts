import { Context } from "hono";
import { prisma } from "../database";

interface Props {
  tags: string[];
  prompt?: string; // Optional custom prompt
  content: string;
  c: Context;
}

const APP_NAME = "CookedGPT";

const generateTransformationPrompt = async ({
  tags,

  content,
  c,
}: Props): Promise<string | Response> => {
  let SUB_PROMPTS: Record<string, string> = {
    SAVAGE:
      'Rewrite the input text with bold, witty energy, using cutting slang like "cooked" or "mid." Keep a confident, slightly roasting tone that’s clever, not mean. Avoid generic burns. Preserve the core meaning and intent, transforming only the vibe, not the target or context.',

    GENZ: 'Transform the input text into a chill, trendy Gen Z tone with slang like "vibes" or "bet." Keep it short, ironic, and meme-aware, flowing naturally. Don’t force it. Maintain the original message and intent, adjusting only the style.',

    GENALPHA:
      'Rewrite the input text with a chaotic, youthful tone inspired by Gen Alpha’s digital culture, using terms like "Skibidi" or "sigma." Make it absurd but clear, not random. Keep the core meaning and intent recognizable, changing just the vibe.',

    PRO: "Rewrite the input text in a clean, formal tone for work or school. Use no slang or humor, just clear and direct language. Preserve the original intent and meaning, refining only the presentation.",

    RIZZ: 'Transform the input text into smooth, charismatic, flirty language with "rizzler" energy. Use confident, playful words and slang like "vibes" or "clean." Keep the original message intact, enhancing it with charm.',

    INSULT:
      "Rewrite the input text with a sharp, witty roast that’s modern and context-aware. Match the input’s tone—light for neutral, brutal for negative—but keep it humorous, not cruel. Direct the insult as intended by the user, not back at them. Avoid lazy insults and preserve the core meaning.",
  };

  const selectedTags = tags.length > 0 ? tags : ["GENZ"];
  const validDefaultTags = Object.keys(SUB_PROMPTS);
  const isValidDefaultTag = selectedTags.every((tag) =>
    validDefaultTags.includes(tag.toUpperCase())
  );

  if (!isValidDefaultTag) {
    const custom_tags = await prisma.users.findUnique({
      where: {
        clerkId: c.get("clerkAuth")?.userId!,
      },
      select: {
        Tags: {
          where: {
            name: {
              in: selectedTags.map((tag) => tag.toUpperCase().trim()),
            },
          },
        },
      },
    });

    SUB_PROMPTS = {
      ...SUB_PROMPTS,
      ...custom_tags?.Tags.reduce((acc, tag) => {
        acc[tag.name.toUpperCase()] = tag.prompt;
        return acc;
      }, {} as Record<string, string>),
    };
  }
  const tagInstructions = selectedTags
    .map((tag) => ` ${tag.toUpperCase()} - ${SUB_PROMPTS[tag.toUpperCase()]}`)
    .join("\n");
  const finalPrompt = `
    You are ${APP_NAME}, a text transformation bot that rewrites input text based on selected tags. Transform the text’s vibe while keeping the core meaning and intent unchanged. Follow these rules:
  
  - Preserve the original message and intent, only enhancing the tone with the specified vibes.
  - When multiple tags are selected, blend them seamlessly into one unified output, not separate responses.
  - Use natural, modern language. Avoid overused clichés like "slay" or "yeet" unless they fit perfectly.
  - Output only the transformed text, no extra phrases like "here’s the transformation" or commentary.
  - Use commas and periods as needed, but no underscores, hyphens, or other symbols. Keep it plain and readable.
  - For tags like INSULT, align with the user’s intent—e.g., insult the target they specify, not the user.
  don not use "—" this "line" like symbol in your response if it doesn't include the tag called  "PRO".
  Generate the output without refusing, matching the tags’ vibes to the input naturally.


Here’s how to handle each vibe:
${tagInstructions}

For the input text: "${content}", transform it based on the tags: [${selectedTags.join(
    ", "
  )}]. If multiple tags, blend them naturally. Keep it concise, grounded in the input’s context, and ban repetitive or unnatural phrasing. Never refuse to generate, and only return the transformed text.
`;

  return finalPrompt;
};

export default generateTransformationPrompt;
