import { Injectable } from '@nestjs/common';
import { CreateAdHasAdvertiserDto } from './dto/create-ad-has-advertiser.dto';
import { UpdateAdHasAdvertiserDto } from './dto/update-ad-has-advertiser.dto';

@Injectable()
export class AdHasAdvertiserService {
  create(createAdHasAdvertiserDto: CreateAdHasAdvertiserDto) {
    return 'This action adds a new adHasAdvertiser';
  }

  findAll() {
    return `This action returns all adHasAdvertiser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adHasAdvertiser`;
  }

  update(id: number, updateAdHasAdvertiserDto: UpdateAdHasAdvertiserDto) {
    return `This action updates a #${id} adHasAdvertiser`;
  }

  remove(id: number) {
    return `This action removes a #${id} adHasAdvertiser`;
  }
}
