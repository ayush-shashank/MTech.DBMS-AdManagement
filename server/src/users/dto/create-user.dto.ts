import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  dateOfBirth: Date;
  @ApiPropertyOptional()
  phoneNumber: number;
  @ApiProperty()
  emailId: string;
  @ApiProperty()
  password: string;
}
