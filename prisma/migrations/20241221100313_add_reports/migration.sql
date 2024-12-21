-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "tableName" TEXT NOT NULL,
    "filters" JSONB NOT NULL,
    "results" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
