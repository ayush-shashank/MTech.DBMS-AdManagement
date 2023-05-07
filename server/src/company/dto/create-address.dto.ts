import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  companyId: number;
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  country: string;
}
