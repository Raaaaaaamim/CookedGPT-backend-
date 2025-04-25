import axios from "axios";

interface Props {
  prompt: string;
  model?: string;
}
const useOpenRouter = async ({
  prompt,
  model = "google/gemini-2.5-pro-exp-03-25:free",
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
