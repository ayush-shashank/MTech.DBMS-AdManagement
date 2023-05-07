import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Advertiser')
export class Advertiser {
  @PrimaryColumn()
  userId: number;
  @PrimaryColumn()
  platformId: number;
  @Column()
  userPlatformId: string;
}
