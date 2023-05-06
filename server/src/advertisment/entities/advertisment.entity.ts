import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Advertisment')
export class Advertisment {
  @PrimaryGeneratedColumn()
  advertismentId: number;
  @Column()
  adCampaignId: number;
  @Column()
  platformId: number;
  @Column()
  adContent: string;
  @Column()
  type: string;
  @Column()
  createTime: Date;
  @Column()
  updateTime: Date;
}
