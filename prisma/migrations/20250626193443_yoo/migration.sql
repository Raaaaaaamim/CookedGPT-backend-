/*
  Warnings:

  - Added the required column `input` to the `Transformations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transformations" ADD COLUMN     "input" TEXT NOT NULL;
