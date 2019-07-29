import { GraphQLServer } from 'graphql-yoga';
import { merge } from 'lodash';
import { prisma } from './generated/prisma-client';
import { typeDef as Location } from './schemas/location';

const Query = `
type Query {
    info: String!
  }`;

const Mutation = `
type Mutation {
  _empty: String,
}`;

const resolvers = {
  Query: {
    info: () => 'Welcome to PopulationX, an Easy-to-use Population Management System',
  },
};

const middlewares = [];
const server = new GraphQLServer({
  typeDefs: [Query, Mutation, Location],
  resolvers: merge(resolvers),
  context: request => ({
    ...request,
    prisma,
  }),
  middlewares,
});

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));
