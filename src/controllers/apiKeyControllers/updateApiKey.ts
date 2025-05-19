import { Context } from "hono";

const updateApiKey = async (c: Context): Promise<Response> => {
  const { apiKey, id } = await c.req.json();
};

export default updateApiKey;
