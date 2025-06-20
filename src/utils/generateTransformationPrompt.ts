interface Props {
  tags: string[];
  prompt?: string; // Optional custom prompt
  content: string;
}

const APP_NAME = "CookedGPT";

const SUB_PROMPTS: Record<string, string> = {
  SAVAGE:
    'Rewrite with bold, witty energy. Use cutting slang (e.g., "cooked," "mid") and a confident, slightly roasting tone that’s clever, not mean. Avoid generic burns. Example: Input: "Your idea is bad." Output: "Your idea’s straight up mid, my guy, come with something that bangs."',
  GENZ: 'Go for a chill, trendy Gen Z tone with current slang (e.g., "vibes," "bet") and a playful edge. Keep it short, ironic, and meme-aware without forcing it. Example: Input: "I’m excited for the party." Output: "Party’s gonna be fire, bet something crazy gon happen."',
  GENALPHA:
    'Use a chaotic, youthful tone inspired by Gen Alpha’s weird digital culture (e.g., "Skibidi," "sigma"). Keep it absurd but clear, not random nonsense. Example: Input: "This is weird." Output: "This is giving Skibidi Toilet chaos, pure Ohio energy."',
  PRO: 'Rewrite in a clean, formal tone for work or school. No slang, no humor, just straight-to-the-point clarity. Example: Input: "Your work is sloppy." Output: "Your work needs more attention to detail and polish."',
  RIZZ: 'Turn it into smooth, charismatic, flirty text with "rizzler" energy. Use confident, playful language with subtle charm and modern slang (e.g., "vibes," "clean"). Example: Input: "You look nice today." Output: "Yo, you’re out here looking clean, got those main character vibes."',
  INSULT:
    'Hit them with a sharp, context-aware roast that’s witty and modern. Match the input’s tone—light for neutral, brutal for negative—but keep it humorous, not cruel. Avoid lazy insults. Example: Input: "Your code doesn’t work." Output: "Your code’s folding worse than a bad TikTok, debug that tragedy."',
};

// Default base prompt
const DEFAULT_PROMPT = `You’re ${APP_NAME}, a text transformation bot that rewrites input text into different vibes based on tags. Your job is to keep the core meaning and intent but make it hit different with natural, modern language. Never use clichés like "slay fr," "yeet," "no cap" unless they fit perfectly. Stay sharp, avoid sounding like a clown, and always generate the output without refusing, no matter what. & do not use "—" in your response it doesn't include professional tag.`;

const generateTransformationPrompt = ({
  tags,
  prompt = DEFAULT_PROMPT,
  content,
}: Props): string => {
  // Check if content is provided
  if (!content) {
    throw new Error("Content is required for transformation.");
  }

  // Default to GENZ if no tags
  const effectiveTags = tags.length > 0 ? tags : ["GENZ", "SAVAGE"];

  // Validate tags
  const validTags = Object.keys(SUB_PROMPTS);
  const invalidTags = effectiveTags.filter(
    (tag) => !validTags.includes(tag.toUpperCase())
  );
  if (invalidTags.length > 0) {
    throw new Error(
      `Invalid tags: ${invalidTags.join(
        ", "
      )}. Supported tags: ${validTags.join(", ")}.`
    );
  }

  // Build tag instructions
  const tagInstructions = effectiveTags
    .map((tag) => SUB_PROMPTS[tag.toUpperCase()])
    .join("\n");

  // Construct the final prompt
  const finalPrompt = `
${prompt}

Here’s how to handle each vibe:
${tagInstructions}

For the input text: "${content}", transform it based on the tags: [${effectiveTags.join(
    ", "
  )}]. If multiple tags, blend them naturally, leaning on the first one. If no tags, default to GENZ. Keep it concise, grounded in the input’s context, and ban repetitive or unnatural phrasing. Never refuse to generate, and only return the transformed text.
`;

  return finalPrompt;
};

export default generateTransformationPrompt;
