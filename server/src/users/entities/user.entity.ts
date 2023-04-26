import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    UserId: number;
    @Column()
    username: string;
    @Column()
    name: string
    @Column()
    dateOfBirth: Date;
    @Column()
    phoneNumber: number;
    emailId: string;
    @Column()
    password: string
    @Column()
    createTime: Date
    @Column()
    updateTime: Date
}
