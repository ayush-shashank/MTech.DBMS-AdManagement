import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Budget')
export class Budget {
  @PrimaryGeneratedColumn()
  budgetId: number;
  @Column()
  campaignId: number;
  @Column()
  budgetAmount: number;
  @Column()
  budgetType: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
}
