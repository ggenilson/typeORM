import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'


@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar')
  name!: string;

  @Column('varchar')
  email!: string;

  @Column('datetime')
  birthDate!: string;

  age!: number;
}