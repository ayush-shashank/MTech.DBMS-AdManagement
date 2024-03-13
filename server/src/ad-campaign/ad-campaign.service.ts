import { Injectable } from '@nestjs/common';
import { CreateAdCampaignDto } from './dto/create-ad-campaign.dto';
import { UpdateAdCampaignDto } from './dto/update-ad-campaign.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { AdCampaign } from './entities/ad-campaign.entity';

@Injectable()
export class AdCampaignService {
  constructor(
    @InjectRepository(AdCampaign)
    private campaignRepository: Repository<AdCampaign>,
    private entity: EntityManager,
  ) {}
  create(createAdCampaignDto: CreateAdCampaignDto) {
    return this.campaignRepository.save(createAdCampaignDto);
  }

  findAll(managerId?: number) {
    // return managerId
    //   ? this.campaignRepository.find({
    //       where: { managerId },
    //     })
    //   : this.campaignRepository.find({});

    const query = managerId
      ? `
      SELECT C.campaignId, C.managerId, C.productId, C.campaignName, C.targetAudience, C.startDate,
        C.endDate, P.productName
      FROM tbl_AdCampaign C
        INNER JOIN tbl_Product P ON C.productId = P.productId
      WHERE C.managerId = ?
      `
      : `
      SELECT C.campaignId, C.managerId, C.productId, C.campaignName, C.targetAudience, C.startDate,
      C.endDate, P.productName, P.productName
      FROM tbl_AdCampaign C
        INNER JOIN tbl_Product P ON C.productId = P.productId
      `;
    return this.entity.query(query, [managerId]).;
  }

  findOne(id: number, managerId?: number) {
    return managerId
      ? this.campaignRepository.findOne({
          where: { campaignId: id, managerId },
        })
      : this.campaignRepository.findOne({ where: { campaignId: id } });
  }

  update(id: number, updateAdCampaignDto: UpdateAdCampaignDto) {
    return `This action updates a #${id} adCampaign`;
  }

  remove(id: number) {
    return `This action removes a #${id} adCampaign`;
  }
}
