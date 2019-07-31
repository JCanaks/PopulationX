import authenticateUser from '../utils/middleware/authMiddleware';

export const typeDef = `

extend type Mutation {
    createLocation(name: String!, noOfFemales: Int!, noOfMales: Int!, locatedIn: String): Location!
}

extend type Query {
    allLocations:[Location!]!
}

type Location {
    id: ID!
    name: String!
    noOfFemales: Int!
    noOfMales: Int!
    totalResidents: Int!
    parentLocation: Location # The place where the location is found (optional)
    childLocations: [Location] # The locations found within the location (nested locations) (optional)
}`;

export const resolvers = {
  Query: {
    allLocations: (parent, args, context) => context.prisma.locations(),
  },
  Mutation: {
    createLocation: (parent, args, context) => context.prisma.createLocation({
      name: args.name.toLowerCase(),
      noOfFemales: args.noOfFemales,
      noOfMales: args.noOfMales,
      parentLocation: args.locatedIn ? { connect: { name: args.locatedIn.toLowerCase() } } : null,
    }),
  },
  Location: {
    totalResidents: async parent => parent.noOfFemales + parent.noOfMales,
    parentLocation: (parent, args, context) => context.prisma.location({
      id: parent.id,
    }).parentLocation(),
    childLocations: async (parent, args, context) => context.prisma.locations({
      where: {
        parentLocation: await context.prisma.location({
          id: parent.id,
        }),
      },
    }),
  },
};

export const authMiddleware = {
  Mutation: {
    createLocation: authenticateUser,
  },
};
