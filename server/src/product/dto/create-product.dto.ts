import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  companyId: number;
  @ApiProperty()
  productName: string;
  @ApiProperty()
  price: number;
  @ApiPropertyOptional()
  category: string;
  @ApiPropertyOptional()
  description: string;
  @ApiPropertyOptional()
  productImage: string;
}
