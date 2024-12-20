/*
  Warnings:

  - You are about to drop the `Table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Table";

-- CreateTable
CREATE TABLE "Database" (
    "id" SERIAL NOT NULL,
    "databaseID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Database_pkey" PRIMARY KEY ("id")
);
