import { Hono } from "hono";
import { connectToDB, prisma } from "./database/index.js";

const app = new Hono();
connectToDB();
app.get("/", async (c) => {
  await prisma.user.create({
    data: {
      clerkId: "abc",
      fullName: "John Doe",
      username: "johndoe",
    },
  });
  return c.text("Hello Hono!");
});

export default {
  fetch: app.fetch,
  port: 4000,
};
