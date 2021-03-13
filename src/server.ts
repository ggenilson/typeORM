import express from 'express';

import { ApolloServer } from 'apollo-server-express';

const schema = `
  type Query {
    allUsers: string;
  }
`;

const resolvers = {
  allUsers: () => "Hello user"
};

const app = express();

const server = new ApolloServer({ 
  schema,
  playground: true,
  resolvers
});

server.applyMiddleware({ app });

app.listen(3333, () => console.log(`Server is running ... Graphql port ${server.graphqlPath}`));