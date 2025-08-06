/*
  Warnings:

  - You are about to alter the column `apiKey` on the `Keys` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `Models` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(70)`.
  - You are about to alter the column `name` on the `Tags` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `prompt` on the `Tags` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(5000)`.
  - You are about to alter the column `content` on the `Transformations` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(5000)`.
  - You are about to alter the column `modelName` on the `Transformations` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(70)`.
  - You are about to alter the column `input` on the `Transformations` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(7000)`.
  - You are about to alter the column `fullName` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(70)`.

*/
-- AlterTable
ALTER TABLE "Keys" ALTER COLUMN "apiKey" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Models" ALTER COLUMN "name" SET DATA TYPE VARCHAR(70);

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "prompt" SET DATA TYPE VARCHAR(5000);

-- AlterTable
ALTER TABLE "Transformations" ALTER COLUMN "content" SET DATA TYPE VARCHAR(5000),
ALTER COLUMN "modelName" SET DATA TYPE VARCHAR(70),
ALTER COLUMN "input" SET DATA TYPE VARCHAR(7000);

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "fullName" SET DATA TYPE VARCHAR(70);
