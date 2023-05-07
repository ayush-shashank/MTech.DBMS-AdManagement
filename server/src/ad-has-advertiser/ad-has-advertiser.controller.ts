import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdHasAdvertiserService } from './ad-has-advertiser.service';
import { CreateAdHasAdvertiserDto } from './dto/create-ad-has-advertiser.dto';
import { UpdateAdHasAdvertiserDto } from './dto/update-ad-has-advertiser.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('advertisementHasAdvertiser')
@Controller('ad-has-advertiser')
export class AdHasAdvertiserController {
  constructor(
    private readonly adHasAdvertiserService: AdHasAdvertiserService,
  ) {}

  @Post()
  create(@Body() createAdHasAdvertiserDto: CreateAdHasAdvertiserDto) {
    return this.adHasAdvertiserService.create(createAdHasAdvertiserDto);
  }

  @Get()
  findAll() {
    return this.adHasAdvertiserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adHasAdvertiserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdHasAdvertiserDto: UpdateAdHasAdvertiserDto,
  ) {
    return this.adHasAdvertiserService.update(+id, updateAdHasAdvertiserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adHasAdvertiserService.remove(+id);
  }
}
