import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTableDto {
  @IsString()
  @IsNotEmpty()
  databaseID: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
