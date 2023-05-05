import { Injectable } from '@nestjs/common';
import { CreateAdvertismentDto } from './dto/create-advertisment.dto';
import { UpdateAdvertismentDto } from './dto/update-advertisment.dto';

@Injectable()
export class AdvertismentService {
  create(createAdvertismentDto: CreateAdvertismentDto) {
    return 'This action adds a new advertisment';
  }

  findAll() {
    return `This action returns all advertisment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advertisment`;
  }

  update(id: number, updateAdvertismentDto: UpdateAdvertismentDto) {
    return `This action updates a #${id} advertisment`;
  }

  remove(id: number) {
    return `This action removes a #${id} advertisment`;
  }
}
