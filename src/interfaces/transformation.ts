export interface DEFAULT_TRANSFORMER_PROPS {
  modelId: string;
  prompt: string;
  key: string | null;
}
export interface DEFAULT_TRANSFORMER_OUTPUT {
  content: string;
  modelName: string;
  type: string;
}
export interface REQUIRED_TRANSFORMATION_FIELDS {
  content: string;
  tags: string[];
  type: "OPENROUTER" | "OPENAI" | "GEMINI";
  modelId: string;
}
