import { Module } from '@nestjs/common';
import { AdCampaignService } from './ad-campaign.service';
import { AdCampaignController } from './ad-campaign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdCampaign } from './entities/ad-campaign.entity';

@Module({
  controllers: [AdCampaignController],
  imports: [TypeOrmModule.forFeature([AdCampaign])],
  providers: [AdCampaignService],
})
export class AdCampaignModule {}
