/*
  Warnings:

  - You are about to drop the column `tableName` on the `Report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "tableName",
ADD COLUMN     "tableNames" TEXT[];
