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

// @Resolver(User)
@Resolver(User)
export default class UserResolver {
  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    return User.find();
  }

  @Mutation(() => User)
  async addUser(@Arg('obj') obj: AddUserInput) {
    const user = User.create(obj);

    await user.save();

    return user;
  }
}