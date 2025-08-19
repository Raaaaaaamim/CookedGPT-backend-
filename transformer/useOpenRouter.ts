import axios from "axios";
import {
  DEFAULT_TRANSFORMER_OUTPUT,
  DEFAULT_TRANSFORMER_PROPS,
} from "../src/interfaces/transformation";
import getModelById from "../src/utils/getModelById";

const useOpenRouter = async ({
  prompt,
  modelId,
  key,
}: DEFAULT_TRANSFORMER_PROPS): Promise<DEFAULT_TRANSFORMER_OUTPUT> => {
  const model = await getModelById(modelId, "OPENROUTER");

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: model.name,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${key?.toString()}`,
        "Content-Type": "application/json",
      },
    }
  );

  return {
    content: response.data.choices[0].message.content,
    modelName: model.name,
    type: model.type,
  };
};
export default useOpenRouter;
