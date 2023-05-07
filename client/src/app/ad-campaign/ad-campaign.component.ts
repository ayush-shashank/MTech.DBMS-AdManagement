import { Component } from '@angular/core';
import { AdCampaign } from '../model/ad-cmapaign';

@Component({
  selector: 'app-ad-campaign',
  templateUrl: './ad-campaign.component.html',
  styleUrls: ['./ad-campaign.component.scss'],
})
export class AdCampaignComponent {
  adCampaigns: AdCampaign[] = [];
}
