import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Report')
export class Report {
  @PrimaryGeneratedColumn()
  reportId: number;
  @Column()
  campaignId: number;
  @Column()
  startDate: number;
  @Column()
  endDate: number;
}
