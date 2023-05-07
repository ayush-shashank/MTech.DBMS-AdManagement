import { ApiProperty } from '@nestjs/swagger';

export class CreateAdvertiserDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  platformId: number;
  @ApiProperty()
  userPlatformId: string;
}
