import { prisma } from "../database";

const verifyUser = async (clerkId: string) => {
  const user = await prisma.users.findUnique({
    where: { clerkId },
    select: { id: true },
  });

  return user;
};

export default verifyUser;
