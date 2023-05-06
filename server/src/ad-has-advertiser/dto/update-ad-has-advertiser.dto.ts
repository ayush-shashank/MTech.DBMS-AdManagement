import { PartialType } from '@nestjs/swagger';
import { CreateAdHasAdvertiserDto } from './create-ad-has-advertiser.dto';

export class UpdateAdHasAdvertiserDto extends PartialType(CreateAdHasAdvertiserDto) {}
