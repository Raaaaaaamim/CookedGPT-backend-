/*
  Warnings:

  - Added the required column `modelName` to the `Transformations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transformations" ADD COLUMN     "modelName" TEXT NOT NULL;
