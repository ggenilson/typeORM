import { Resolver, Query, Mutation, InputType, Field, Arg } from 'type-graphql';

import { User } from '../database';


@InputType()
class AddUserInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  birthDate!: string;
}
@Resolver(User)
export default class UserResolver {
  @Query(() => [User])
  async allUsers(): Promise<User[]> {

    const users = await User.find();

    return users;
  }

  @Mutation(() => User)
  async addUser( @Arg('obj') obj: AddUserInput

  ): Promise<User> {

    const user = await User.create(obj);

    return user

  }
}