import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import { createTestClient } from 'apollo-server-testing';
import { resolvers, typeDefs, middlewares } from '../../graphqlServer';
import prismaMockInstance from './prismaMockInstance';

const createGraphqlTestClient = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const schemaWithMiddleware = applyMiddleware(schema, ...middlewares);
  const testServer = new ApolloServer({
    schema: schemaWithMiddleware,
    context: request => ({
      ...request,
      prisma: prismaMockInstance,
    }),
  });

  return createTestClient(testServer);
};

export default createGraphqlTestClient;
