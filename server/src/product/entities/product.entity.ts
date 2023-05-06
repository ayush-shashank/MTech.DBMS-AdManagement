import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;
  @Column()
  companyId: number;
  @Column()
  productName: string;
  @Column()
  price: number;
  @Column()
  category: string;
  @Column()
  description: string;
  @Column()
  productImage: string;
  @Column()
  createTime: Date;
  @Column()
  updateTime: Date;
}
