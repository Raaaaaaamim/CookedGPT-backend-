import { StatusCodes } from "../../enums/ErrorEnums";
import { prisma } from "../database";
import { CustomError } from "./CustomError";

const getModelById = async (
  id: string,
  type: "OPENROUTER" | "OPENAI" | "GEMINI"
) => {
  const model = await prisma.models.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      type: true,
    },
  });
  if (!model) {
    throw new CustomError("Model not found", StatusCodes.NOT_FOUND);
  }
  if (model.type !== type) {
    throw new CustomError("Model type does not match", StatusCodes.BAD_REQUEST);
  }
  return model;
};
export default getModelById;
