import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  findAll(companyId?: number) {
    console.log('companyId', companyId);
    return companyId
      ? this.productRepository.find({ where: { companyId } })
      : this.productRepository.find({});
  }

  findOne(id: number, companyId?: number) {
    console.log('companyId', companyId);
    return companyId
      ? this.productRepository.findOne({ where: { productId: id, companyId } })
      : this.productRepository.findOne({ where: { productId: id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
