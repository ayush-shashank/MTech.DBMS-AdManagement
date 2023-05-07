import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/company/dto/create-address.dto';
import { Address } from 'src/company/entities/address.entity';

export class CreateCompanyDto {
  @ApiProperty()
  companyName: string;
  @ApiProperty()
  phoneNumber: number;
  @ApiPropertyOptional()
  industry: string;
  @ApiProperty({ type: 'string' })
  website = 'example.com';
  @ApiPropertyOptional()
  annualRevenue: number;
  @ApiPropertyOptional()
  numberOfEmployees: number;
  @ApiProperty({ type: () => CreateAddressDto })
  address: Address;
}
