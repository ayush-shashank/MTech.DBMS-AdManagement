import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const result = await this.userRepository.save(createUserDto);
    return { userId: result.userId };
  }

  findAll() {
    return this.userRepository.find();
    // return `This action returns all users`;
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ userId: id });
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id);
    return result;
    // return `This action removes a #${id} user`;
  }

  login(credentials: { username: string; password: string }) {
    return this.userRepository.findOneOrFail({
      select: {
        userId: true,
        username: true,
        name: true,
        emailId: true,
        dateOfBirth: true,
        phoneNumber: true,
      },
      where: { username: credentials.username, password: credentials.password },
    });
  }
}
