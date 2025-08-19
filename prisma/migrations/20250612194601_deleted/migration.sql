/*
  Warnings:

  - You are about to drop the column `modelId` on the `Keys` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[apiKey]` on the table `Keys` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Keys" DROP CONSTRAINT "Keys_modelId_fkey";

-- AlterTable
ALTER TABLE "Keys" DROP COLUMN "modelId";

-- CreateIndex
CREATE UNIQUE INDEX "Keys_apiKey_key" ON "Keys"("apiKey");
