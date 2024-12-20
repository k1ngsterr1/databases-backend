import { Controller, Get, Query } from '@nestjs/common';
import { AirtableService } from './airtable.service';

@Controller('airtable')
export class AirtableController {
  constructor(private readonly airtableService: AirtableService) {}

  /**
   * Fetch all tables in a base.
   * @param baseID - Query parameter for Airtable base ID.
   * @returns Array of table names.
   */
  @Get('tables')
  async getTables(@Query('baseID') baseID: string) {
    if (!baseID) {
      throw new Error('Base ID is required');
    }
    console.log('lol');
    return this.airtableService.getTables(baseID);
  }
}
