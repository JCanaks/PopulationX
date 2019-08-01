import authenticateUser from '../utils/middleware/authMiddleware';
import locationValidation from '../utils/middleware/validators/location';


export const typeDef = `

extend type Mutation {
    createLocation(name: String!, noOfFemales: Int!, noOfMales: Int!, locatedIn: String): Location!
    updateLocation(id: ID!, name: String, noOfFemales: Int, noOfMales: Int, locatedIn: String): Location
    deleteLocation(id: ID!): DeletedLocationData!
}

type DeletedLocationData {
    id: ID!
    name: String!
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
    updateLocation: async (parent, args, context) => {
      const currentLocation = await context.prisma.location({
        id: args.id,
      });

      return context.prisma.updateLocation({
        data: {
          name: args.name ? args.name : currentLocation.name,
          noOfFemales: args.noOfFemales ? args.noOfFemales : currentLocation.noOfFemales,
          noOfMales: args.noOfMales ? args.noOfMales : currentLocation.noOfMales,
          parentLocation: args.locatedIn ? { connect: { name: args.locatedIn.toLowerCase() } }
            : currentLocation.parentLocation,
        },
        where: {
          id: args.id,
        },
      });
    },
    deleteLocation: async (parent, args, context) => {
      const location = await context.prisma.location({
        id: args.id,
      });

      /* Checking that the location exists before deleting child
       locations because some other locations may have a parentLocation of
       null and should not be deleted */
      if (location) {
        /* Delete all associated child locations */
        await context.prisma.deleteManyLocations({
          parentLocation: location,
        });
      }

      const deletedLocation = await context.prisma.deleteLocation({
        id: args.id,
      });

      return {
        id: deletedLocation.id,
        name: deletedLocation.name,
      };
    },
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
    updateLocation: authenticateUser,
    deleteLocation: authenticateUser,
  },
};

export const locationValidationMiddleware = {
  Mutation: {
    createLocation: locationValidation.createLocation,
    updateLocation: locationValidation.updateLocation,
    deleteLocation: locationValidation.deleteLocation,
  },
};
