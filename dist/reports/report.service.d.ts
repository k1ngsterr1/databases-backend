import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class ReportService {
    private prisma;
    constructor(prisma: PrismaService);
    createReport(data: Prisma.ReportCreateInput): Promise<{
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    getAllReports(): Promise<{
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }[]>;
    getReportById(id: string): Promise<{
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    updateReport(id: string, data: Prisma.ReportUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    deleteReport(id: string): Promise<{
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
}
