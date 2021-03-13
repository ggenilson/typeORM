import { Resolver, Query } from 'type-graphql'

import { User } from '../database'

@Resolver(User)
export default class UserResolver {
  @Query(() => [User])
  async allUsers(): Promise<User[]> {

    const users = await User.find()

    return users
  }
}