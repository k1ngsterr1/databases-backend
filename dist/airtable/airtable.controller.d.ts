import { AirtableService } from './airtable.service';
export declare class AirtableController {
    private readonly airtableService;
    constructor(airtableService: AirtableService);
    getTables(baseID: string): Promise<string[]>;
}
