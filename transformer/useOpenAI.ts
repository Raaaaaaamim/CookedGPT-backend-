import OpenAI from "openai";
import { StatusCodes } from "../enums/ErrorEnums";
import {
  DEFAULT_TRANSFORMER_OUTPUT,
  DEFAULT_TRANSFORMER_PROPS,
} from "../src/interfaces/transformation";
import { CustomError } from "../src/utils/CustomError";
import getModelById from "../src/utils/getModelById";

const useOpenai = async ({
  key,
  prompt,
  modelId,
}: DEFAULT_TRANSFORMER_PROPS): Promise<DEFAULT_TRANSFORMER_OUTPUT | void> => {
  try {
    const model = await getModelById(modelId, "OPENAI");

    const client = new OpenAI({
      apiKey: key!!,
    });

    const response = await client.responses.create({
      model: model.name,
      input: prompt,
    });

    console.log(response.output_text);
    return {
      content: response.output_text.trim(),
      modelName: model.name,
      type: model.type,
    };
  } catch (error: any) {
    console.error("Error generating content with Gemini:", error);
    new CustomError(
      `Failed to generate content: ${error.message}`,
      StatusCodes.BAD_REQUEST
    );
  }
};
export default useOpenai;
