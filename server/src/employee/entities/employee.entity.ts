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

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employeeId: number;
  @Column()
  userId: number;
  @Column()
  companyId: number;

  @OneToOne(() => User)
  user: User;
  @ManyToOne(() => Company)
  company: Company;

  @BeforeInsert()
  mapIds() {
    this.userId = this.user.userId;
    this.companyId = this.company.companyId;
  }
}
