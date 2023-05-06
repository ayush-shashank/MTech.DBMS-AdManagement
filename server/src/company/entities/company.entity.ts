import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Company')
export class Company {
  @PrimaryGeneratedColumn()
  companyId: number;
  @Column()
  companyName: string;
  @Column()
  phoneNumber: number;
  @Column()
  industry: string;
  @Column({ default: 'example.com' })
  website: string;
  @Column()
  annualRevenue: number;
  @Column()
  numberOfEmployees: number;
  @Column({ default: new Date() })
  createTime: Date = new Date();
  @Column({ default: new Date() })
  updateTime: Date = new Date();
}
