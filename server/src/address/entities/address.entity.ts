import { Company } from 'src/company/entities/company.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Address')
export class Address {
  @PrimaryGeneratedColumn()
  addressId: number;
  @Column()
  companyId: number;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  country: string;

  @ManyToOne(() => Company, (company) => company.companyId)
  company: Company;

  @BeforeInsert()
  mapCompany() {
    this.companyId = this.company.companyId;
  }
}
