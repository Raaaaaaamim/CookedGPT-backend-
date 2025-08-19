import { prisma } from "./prisma";

export const connectToDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
