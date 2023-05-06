import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty()
  CompanyName: string;
  @ApiProperty()
  PhoneNumber: number;
  @ApiPropertyOptional()
  Industry: string;
  @ApiProperty()
  Website = 'example.com';
  @ApiPropertyOptional()
  AnnualRevenue: number;
  @ApiPropertyOptional()
  NumberOfEmployees: number;
}
