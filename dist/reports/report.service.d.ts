import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class ReportService {
    private prisma;
    constructor(prisma: PrismaService);
    createReport(data: Prisma.ReportCreateInput): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    getAllReports(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }[]>;
    getReportById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    updateReport(id: string, data: Prisma.ReportUpdateInput): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    deleteReport(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: Prisma.JsonValue;
        results: Prisma.JsonValue;
        author: string | null;
    }>;
    deleteAllReports(): Promise<Prisma.BatchPayload>;
}
