/*
  Warnings:

  - You are about to drop the column `apiKey` on the `Models` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Models` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Models` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `type` on the `Keys` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `performance` to the `Models` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Models` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PERFORMANCE" AS ENUM ('AVERAGE', 'GOOD', 'EXCELLENT');

-- CreateEnum
CREATE TYPE "TYPE" AS ENUM ('OPENAI', 'OPENROUTER', 'GEMINI');

-- DropIndex
DROP INDEX "Models_fullName_key";

-- AlterTable
ALTER TABLE "Keys" DROP COLUMN "type",
ADD COLUMN     "type" "TYPE" NOT NULL;

-- AlterTable
ALTER TABLE "Models" DROP COLUMN "apiKey",
DROP COLUMN "fullName",
ADD COLUMN     "performance" "PERFORMANCE" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "TYPE" NOT NULL;

-- DropEnum
DROP TYPE "Type";

-- CreateIndex
CREATE UNIQUE INDEX "Models_name_key" ON "Models"("name");
