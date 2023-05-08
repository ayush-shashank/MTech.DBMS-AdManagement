import { Component } from '@angular/core';
import { AdCampaign } from '../model/ad-campaign';
import { CoreService } from '../core/core.service';
import { ActivatedRoute } from '@angular/router';
import { DtoService } from '../core/dto.service';

@Component({
  selector: 'app-ad-campaign',
  templateUrl: './ad-campaign.component.html',
  styleUrls: ['./ad-campaign.component.scss'],
})
export class AdCampaignComponent {
  managerId = 0;
  campaignId: number | undefined = undefined;
  adCampaigns: AdCampaign[] = [];
  newCampaign: AdCampaign = {} as AdCampaign;
  isRequired = false;
  constructor(
    private core: CoreService,
    private route: ActivatedRoute,
    private dto: DtoService
  ) {
    if (this.core.isEmployee) this.managerId = this.core.user?.userId!;
    let id = this.route.snapshot.paramMap.get('campaignId');
    this.campaignId = id ? +id : undefined;
  }

  getCampaigns() {
    this.dto.getAdCampaign();
  }
  getProducts() {
    // this.dto.getProducts();
  }
  addNewCampaign() {
    if (!!this.newCampaign.campaignName && !!this.newCampaign.productId) {
      this.isRequired = false;
      const campaignDto = {
        ...this.newCampaign,
        managerId: this.core.user?.userId!,
      };
      console.log('dto', campaignDto);
    } else {
      this.isRequired = true;
    }
  }
}
