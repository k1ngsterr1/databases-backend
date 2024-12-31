import { ReportService } from './report.service';
import { CreateReportDto } from './dto/report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    createReport(createReportDto: CreateReportDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        author: string | null;
    }>;
    getAllReports(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        author: string | null;
    }[]>;
    getReportById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        author: string | null;
    }>;
    updateReport(id: string, updateReportDto: any): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        author: string | null;
    }>;
    deleteReport(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        author: string | null;
    }>;
    deleteAllReports(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
