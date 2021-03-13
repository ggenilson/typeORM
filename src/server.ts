import 'reflect-metadata';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import  { buildSchema } from 'type-graphql';

import { connectionDB } from './database';

import UserResolver from './resolvers/user'

async function mainServer () {
  await connectionDB();

  const app = express();

  const schema = await buildSchema({
    resolvers: [UserResolver]
  });
 
  const server = new ApolloServer({ 
    schema,
    playground: true,
  });

  server.applyMiddleware({ app });

  app.listen(3333, () => console.log(`Server is running ... Graphql path: ${server.graphqlPath}`));
}

mainServer();