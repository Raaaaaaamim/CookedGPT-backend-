/*
  Warnings:

  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "ROLE" NOT NULL;
