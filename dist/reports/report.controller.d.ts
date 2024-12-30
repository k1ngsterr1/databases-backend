import { ReportService } from './report.service';
import { CreateReportDto } from './dto/report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    createReport(createReportDto: CreateReportDto): Promise<{
        id: string;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        author: string | null;
    }>;
    getAllReports(): Promise<{
        id: string;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        author: string | null;
    }[]>;
    getReportById(id: string): Promise<{
        id: string;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        author: string | null;
    }>;
    updateReport(id: string, updateReportDto: any): Promise<{
        id: string;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        author: string | null;
    }>;
    deleteReport(id: string): Promise<{
        id: string;
        tableNames: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        results: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        author: string | null;
    }>;
}
