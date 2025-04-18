import axios from "axios";

interface Props {
  prompt: string;
  model?: string;
}
const useOpenRouter = async ({
  prompt,
  model = "openai/gpt-4o-mini-2024-07-18",
}: Props): Promise<string> => {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export default useOpenRouter;
