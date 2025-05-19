import { WebhookEvent } from "@clerk/backend";
import type { Context } from "hono";
import { Webhook } from "svix";
import { StatusCodes } from "../../../enums/ErrorEnums";
import { prisma } from "../../database";
const clerk = async (c: Context): Promise<Response> => {
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    return c.json(
      { error: "Clerk Webhook Secret is not configured." },
      StatusCodes.SERVER_ERROR
    );
  }
  const headers = c.req.header();
  const svix_id = headers["svix-id"];
  const svix_timestamp = headers["svix-timestamp"];
  const svix_signature = headers["svix-signature"];
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return c.json({ error: "Missing headers" }, StatusCodes.BAD_REQUEST);
  }
  const payload = await c.req.text(); // Get the raw body as text
  const wh = new Webhook(CLERK_WEBHOOK_SECRET);
  let evt: WebhookEvent;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err: any) {
    console.error("Error verifying webhook:", err.message);
    return c.json(
      { error: "Webhook verification failed" },
      StatusCodes.BAD_REQUEST
    );
  }
  const eventType = evt.type;
  if (
    eventType === "user.created" ||
    eventType === "user.deleted" ||
    eventType === "user.updated"
  ) {
    if (eventType === "user.created") {
      const userData = evt.data;
      const primaryEmail = userData.email_addresses.find(
        (email) => email.id === userData.primary_email_address_id
      );
      if (!primaryEmail) {
        return c.json(
          { error: "Primary email not found" },
          StatusCodes.BAD_REQUEST
        );
      }
      const user = await prisma.users.create({
        data: {
          username: `${userData.first_name}_${userData.last_name}_${userData.id}`,
          email: primaryEmail.email_address,
          fullName: userData.first_name + " " + userData.last_name,
          clerkId: userData.id,
          avatar: userData.image_url,
        },
      });
      return c.json(
        { message: "User created successfully" },
        StatusCodes.SUCCESS
      );
    } else if (eventType === "user.deleted") {
      const userData = evt.data;
      const user = await prisma.users.delete({
        where: {
          clerkId: userData.id,
        },
      });
      return c.json(
        { message: "User deleted successfully" },
        StatusCodes.SUCCESS
      );
    } else if (eventType === "user.updated") {
      const userData = evt.data;

      const user = await prisma.users.findUnique({
        where: {
          clerkId: userData.id,
        },
      });
      if (!user) {
        return c.json({ error: "User not found" }, StatusCodes.BAD_REQUEST);
      }

      await prisma.users.update({
        where: {
          clerkId: userData.id,
        },
        data: {
          username:
            `${userData.first_name}_${userData.last_name}_${userData.id}` ||
            user.username,
          email:
            userData.email_addresses.find(
              (email) => email.id === userData.primary_email_address_id
            )?.email_address || user.email,
          fullName:
            userData.first_name + " " + userData.last_name || user.fullName,
          clerkId: userData.id || user.clerkId,
          avatar: userData.image_url || user.avatar,
        },
      });
      return c.json(
        { message: "User updated successfully" },
        StatusCodes.SUCCESS
      );
    }
  }
  return c.json({ error: "Invalid event type" }, StatusCodes.BAD_REQUEST);
};

export default clerk;
