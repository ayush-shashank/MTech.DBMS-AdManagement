import { Component, OnInit } from '@angular/core';
import { AdCampaign } from '../model/ad-campaign';
import { CoreService } from '../core/core.service';
import { ActivatedRoute } from '@angular/router';
import { DtoService } from '../core/dto.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-ad-campaign',
  templateUrl: './ad-campaign.component.html',
  styleUrls: ['./ad-campaign.component.scss'],
})
export class AdCampaignComponent implements OnInit {
  managerId = 0;
  campaignId: number | undefined = undefined;
  adCampaigns: AdCampaign[] = [];
  adCampaignList: AdCampaign[] = [];
  newCampaign: AdCampaign = {} as AdCampaign;
  isRequired = false;
  productList: Product[] = [];
  constructor(
    private core: CoreService,
    private route: ActivatedRoute,
    private dto: DtoService
  ) {
    if (this.core.isEmployee) this.managerId = this.core.user?.userId!;
    let id = this.route.snapshot.paramMap.get('campaignId');
    this.campaignId = id ? +id : undefined;
  }
  ngOnInit(): void {
    this.fetchCampaigns();
    this.fetchProducts();
  }

  fetchCampaigns() {
    this.dto
      .getAdCampaigns(this.core.user?.userId!)
      .subscribe((campaigns: AdCampaign[]) => {
        this.adCampaigns = campaigns;
        this.adCampaignList = campaigns;
      });
  }

  fetchProducts() {
    const companyId = this.core.company?.companyId!;
    this.dto.getProducts(companyId).subscribe((products) => {
      this.productList = products;
    });
  }

  addNewCampaign() {
    console.log('campaign clicked');
    if (!!this.newCampaign.campaignName && !!this.newCampaign.productId) {
      this.isRequired = false;
      const campaignDto = {
        ...this.newCampaign,
        managerId: this.core.user?.userId!,
      };
      console.log('dto', campaignDto);
      this.dto.createAdCampaign(campaignDto).subscribe(() => {
        this.fetchCampaigns();
        this.newCampaign = {} as AdCampaign;
      });
    } else {
      this.isRequired = true;
    }
  }
}
