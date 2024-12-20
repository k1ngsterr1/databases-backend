export declare class AirtableService {
    private readonly apiKey;
    private readonly baseURL;
    getTables(baseID: string): Promise<string[]>;
}
