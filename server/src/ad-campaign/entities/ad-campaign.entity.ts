import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AdCampaign')
export class AdCampaign {
  @PrimaryGeneratedColumn()
  campaignId: number;
  @Column()
  managerId: number;
  @Column()
  productId: number;
  @Column()
  campaignName: string;
  @Column()
  targetAudience: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @Column()
  createTime: Date;
  @Column()
  updateTime: Date;
}
