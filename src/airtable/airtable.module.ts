import { Module } from '@nestjs/common';
import { AirtableService } from './airtable.service';
import { AirtableController } from './airtable.controller';

@Module({
  controllers: [AirtableController],
  providers: [AirtableService],
})
export class AirtableModule {}
