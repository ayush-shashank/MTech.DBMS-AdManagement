import { ApiProperty } from '@nestjs/swagger';

export class CreatePlatformDto {
  @ApiProperty()
  platformName: string;
  @ApiProperty()
  platformType: string;
}
