import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateEmployeeDto {
  @ApiProperty()
  companyId: number;
  @ApiProperty()
  user: CreateUserDto;
}
