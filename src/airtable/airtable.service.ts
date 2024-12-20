import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AirtableService {
  private readonly apiKey = process.env.AIRTABLE_API_KEY; // Airtable API Key
  private readonly baseURL = 'https://api.airtable.com/v0';

  /**
   * Fetch all tables from the provided Airtable base.
   * @param baseID - The ID of the Airtable base.
   * @returns {Promise<string[]>} Array of table names.
   */
  async getTables(baseID: string): Promise<string[]> {
    try {
      const response = await axios.get(
        `https://api.airtable.com/v0/meta/bases/${baseID}/tables`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );

      return response.data.tables.map((table: { name: string }) => table.name);
    } catch (error) {
      throw new HttpException(
        `Failed to fetch tables: ${error.response?.data?.error?.message || error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
