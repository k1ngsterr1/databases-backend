import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './tables/databases.module';
import { SharedModule } from './shared/shared.module';
import { AdminAuthModule } from './auth/auth.module';
import { AirtableModule } from './airtable/airtable.module';

@Module({
  imports: [DatabasesModule, SharedModule, AdminAuthModule, AirtableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
