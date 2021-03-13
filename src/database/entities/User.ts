import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

@Entity('users')
@ObjectType()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id!: string;

  @Column('varchar')
  @Field(() => String)
  name!: string;

  @Column('varchar')
  @Field(() => String)
  email!: string;

  @Column('datetime')
  @Field(() => String)
  birthDate!: string;

  @Field(() => Number)
  age!: number;
}