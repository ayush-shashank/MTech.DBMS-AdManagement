import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { User } from 'src/users/entities/user.entity';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Login } from './dto/login.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private entity: EntityManager,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const user = await this.userRepository.save(createEmployeeDto.user);
    const employeeDto = {
      companyId: createEmployeeDto.companyId,
      userId: user.userId,
    };
    return this.employeeRepository.save(employeeDto);
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  async login(credentials: Login) {
    return this.entity.query(
      `
    SELECT U.username, U.name, U.userId, U.userId, U.emailId, U.dateOfBirth, U.phoneNumber,
      C.companyName, C.companyId, C.industry, C.website, C.annualRevenue, C.numberOfEmployees
    FROM tbl_Employee E
      LEFT JOIN tbl_User U ON E.userId = U.userId
      LEFT JOIN tbl_Company C ON E.companyId = C.companyId
    WHERE U.username = ? AND U.password = ? AND C.website = ?
    LIMIT 1
    `,
      [credentials.username, credentials.password, credentials.website],
    );
  }
}
