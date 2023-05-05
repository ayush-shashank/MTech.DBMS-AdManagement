import { Module } from '@nestjs/common';
import { AdvertiserService } from './advertiser.service';
import { AdvertiserController } from './advertiser.controller';
import { Advertiser } from './entities/advertiser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AdvertiserController],
  imports: [TypeOrmModule.forFeature([Advertiser])],
  providers: [AdvertiserService],
})
export class AdvertiserModule {}
