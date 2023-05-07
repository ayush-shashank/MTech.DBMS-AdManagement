import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
