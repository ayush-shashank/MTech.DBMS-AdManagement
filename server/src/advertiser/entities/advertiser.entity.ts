import { Column, Entity } from 'typeorm';

@Entity('Advertiser')
export class Advertiser {
  @Column()
  userId: number;
  @Column()
  platformId: number;
  @Column()
  userPlatformId: string;
}
