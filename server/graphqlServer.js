import { GraphQLServer } from 'graphql-yoga';
import { merge } from 'lodash';
import { prisma } from './generated/prisma-client';
import {
  typeDef as Location,
  resolvers as locationResolvers,
  authMiddleware, locationValidationMiddleware,
} from './schemas/location';
import {
  typeDef as Auth,
  resolvers as authResolvers,
  authValidationMiddleware,
} from './schemas/auth';


const Query = `
type Query {
    info: String!
  }`;

const Mutation = `
type Mutation {
  _empty: String,
}`;

export const resolvers = {
  Query: {
    info: () => 'Welcome to PopulationX, an Easy-to-use Population Management System',
  },
};

export const typeDefs = [Query, Mutation, Auth, Location];
export const middlewares = [authMiddleware, authValidationMiddleware, locationValidationMiddleware];
const graphqlServer = new GraphQLServer({
  typeDefs,
  resolvers: merge(resolvers, authResolvers, locationResolvers),
  context: request => ({
    ...request,
    prisma,
  }),
  middlewares,
});

export default graphqlServer;
