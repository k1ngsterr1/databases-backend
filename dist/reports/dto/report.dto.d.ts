declare class FilterDto {
    column: string;
    values: string[];
    booleanValue?: boolean;
    range?: {
        min: number;
        max: number;
    };
}
declare class ResultDto {
    requirement: string;
    filter: string;
}
export declare class CreateReportDto {
    tableName: string;
    filters: FilterDto[];
    results: ResultDto[];
    author?: string;
    createdAt?: Date;
}
export {};
