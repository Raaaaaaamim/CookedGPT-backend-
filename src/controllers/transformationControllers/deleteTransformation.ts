import { Context } from "hono";
import { prisma } from "../../database";

const deleteTransformation = async (c: Context): Promise<Response> => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ error: "Missing id" }, 400);
  }
  const keyExists =
    (await prisma.transformations.count({
      where: {
        id: id,
      },
    })) > 0;
  if (!keyExists) {
    return c.json({ error: "Key not found" }, 404);
  }
  const key = await prisma.transformations.delete({
    where: { id: id },
  });
  return c.json(key, 200);
};

export default deleteTransformation;
