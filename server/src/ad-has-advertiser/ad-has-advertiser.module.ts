import { Module } from '@nestjs/common';
import { AdHasAdvertiserService } from './ad-has-advertiser.service';
import { AdHasAdvertiserController } from './ad-has-advertiser.controller';

@Module({
  controllers: [AdHasAdvertiserController],
  providers: [AdHasAdvertiserService]
})
export class AdHasAdvertiserModule {}
