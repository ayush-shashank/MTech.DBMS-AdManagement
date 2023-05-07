import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Employee')
export class Employee {
  @PrimaryGeneratedColumn()
  employeeId: number;
  @Column()
  userId: number;
  @Column()
  companyId: number;
}
