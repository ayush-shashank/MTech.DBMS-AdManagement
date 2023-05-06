import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AdvertismentHasAdvertiser')
export class AdHasAdvertiser {
  @Column()
  advertismentId: number;
  @Column()
  userId: number;
  @Column()
  platformId: number;
  @Column()
  placement: string;
  @Column()
  cost: number;
  @Column()
  clicks: number;
  @Column()
  conversions: number;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
}
