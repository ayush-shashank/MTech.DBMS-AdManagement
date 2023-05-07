import { Injectable } from '@nestjs/common';
import { CreateAdvertiserDto } from './dto/create-advertiser.dto';
import { UpdateAdvertiserDto } from './dto/update-advertiser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertiser } from './entities/advertiser.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertiserService {
  constructor(
    @InjectRepository(Advertiser)
    private advertiserRepository: Repository<Advertiser>,
  ) {}
  create(createAdvertiserDto: CreateAdvertiserDto) {
    return this.advertiserRepository.insert(createAdvertiserDto);
  }

  findAll() {
    return `This action returns all advertiser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advertiser`;
  }

  update(id: number, updateAdvertiserDto: UpdateAdvertiserDto) {
    return this.advertiserRepository.update(
      { userId: id },
      updateAdvertiserDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} advertiser`;
  }
}
