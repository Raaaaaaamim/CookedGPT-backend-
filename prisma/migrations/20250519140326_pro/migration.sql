/*
  Warnings:

  - You are about to drop the column `pro` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Models" ADD COLUMN     "pro" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "pro";
