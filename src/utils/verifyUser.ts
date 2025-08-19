import { prisma } from "../database";

const verifyUser = async (clerkId: string) => {
  const user = await prisma.users.findUnique({
    where: { clerkId },
    select: { id: true },
  });

  if (!user) {
    return null;
  }

  return user;
};

export default verifyUser;
