import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Address } from 'src/company/entities/address.entity';

@Module({
  controllers: [CompanyController],
  imports: [TypeOrmModule.forFeature([Company, Address])],
  providers: [CompanyService],
})
export class CompanyModule {}
