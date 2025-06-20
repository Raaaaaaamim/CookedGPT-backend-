import axios from "axios";

interface Props {
  prompt: string;
  model?: string;
  key: string;
}
const useOpenRouter = async ({
  prompt,
  model = "google/gemini-2.5-pro-exp-03-25:free",
  key,
}: Props): Promise<string> => {
  console.log("yoo");

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
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};
export default useOpenRouter;
