import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import { isNumber } from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
