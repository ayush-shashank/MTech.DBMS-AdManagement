import {
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  isAlphanumeric,
  isDataURI,
} from 'class-validator';

export class CreateUserDto {
  username: string;
  name: string;
  dateOfBirth: Date;
  @IsPhoneNumber('IN')
  phoneNumber: number;
  @IsEmail()
  emailId: string;
  @IsStrongPassword()
  password: string;
}
