import 'reflect-metadata'
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import { connectionDB } from './database'

async function mainServer () {
  await connectionDB()

  const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    allUsers: [User]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    allUsers: () => ([{ name: "Genilson Araújo" }]),
  },
};

const app = express();

const server = new ApolloServer({ 
  resolvers,
  playground: true,
  typeDefs
});

server.applyMiddleware({ app });

app.listen(3333, () => console.log(`Server is running ... Graphql path: ${server.graphqlPath}`));
}


mainServer()