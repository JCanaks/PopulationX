import { GraphQLServer } from 'graphql-yoga';
import { merge } from 'lodash';
import { prisma } from './generated/prisma-client';
import { typeDef as Location } from './schemas/location';
import { typeDef as Auth, resolvers as authResolvers } from './schemas/auth';

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
  typeDefs: [Query, Mutation, Auth, Location],
  resolvers: merge(resolvers, authResolvers),
  context: request => ({
    ...request,
    prisma,
  }),
  middlewares,
});

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));
