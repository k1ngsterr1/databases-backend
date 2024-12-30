import {
  IsString,
  IsArray,
  IsObject,
  IsOptional,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class FilterDto {
  @IsString()
  column: string;

  @IsArray()
  values: string[];

  @IsOptional()
  booleanValue?: boolean;

  @IsOptional()
  @IsObject()
  range?: { min: number; max: number };
}

class ResultDto {
  @IsString()
  requirement: string;

  @IsString()
  filter: string;
}

export class CreateReportDto {
  @IsString()
  tableNames: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilterDto)
  filters: FilterDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResultDto)
  results: ResultDto[];

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date;
}
