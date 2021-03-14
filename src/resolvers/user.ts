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

@InputType()
class UpdateUserInput {
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

  @Query(() => User)
  async user(@Arg("id") id: string) {
    const users = await User.findOne({ where: { id }});

    return users;
  }

  @Mutation(() => User)
  async addUser(@Arg('obj') obj: AddUserInput): Promise<User> {
    const user = await User.create(obj);

    await user.save();

    return user;
  }

  @Mutation(() => User)
  async updateUser(@Arg("id") id: string, @Arg("obj") obj: UpdateUserInput) {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw new Error(`The user with id: ${id} does not exist!`);
    }

    Object.assign(user, obj);
    await user.save();

    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string) {
    const user = await User.findOne({ where: { id }});

    if (!user) {
      throw new Error(`The user with id: ${id} does not exist!`);
    }

    await user.remove();
    return true;
  }
}