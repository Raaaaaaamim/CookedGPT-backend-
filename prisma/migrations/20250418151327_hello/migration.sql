/*
  Warnings:

  - The `tags` column on the `Transformations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id]` on the table `Keys` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId]` on the table `Keys` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Transformations" DROP COLUMN "tags",
ADD COLUMN     "tags" TEXT[];

-- DropEnum
DROP TYPE "TAGS";

-- CreateTable
CREATE TABLE "Tag" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "authorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_id_key" ON "Tag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_authorId_key" ON "Tag"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Keys_id_key" ON "Keys"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Keys_authorId_key" ON "Keys"("authorId");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
