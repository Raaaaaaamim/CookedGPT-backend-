/*
  Warnings:

  - Added the required column `modelId` to the `Transformations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transformations" ADD COLUMN     "modelId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Transformations" ADD CONSTRAINT "Transformations_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
