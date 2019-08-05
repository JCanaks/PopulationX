import { makePrismaClientClass } from 'prisma-client-lib';
import { typeDefs } from '../../generated/prisma-client/prisma-schema';
import { models } from '../../generated/prisma-client';

const PrismaMockInstance = makePrismaClientClass({
  typeDefs,
  models,
  endpoint: 'http://localhost:4499',
});
export default new PrismaMockInstance();
