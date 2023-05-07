import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/company/entities/address.entity';
import { CreateAddressDto } from 'src/company/dto/create-address.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.companyRepository.save(createCompanyDto);
    const addressDto = {
      ...createCompanyDto.address,
      companyId: company.companyId,
    } as CreateAddressDto;
    return this.addressRepository.save(addressDto);
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
