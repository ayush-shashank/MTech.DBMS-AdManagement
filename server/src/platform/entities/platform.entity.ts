import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Platform')
export class Platform {
  @PrimaryGeneratedColumn()
  platformId: number;
  @Column()
  platformName: string;
  @Column()
  platformType: string;
}
