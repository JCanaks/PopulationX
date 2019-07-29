export const typeDef = `
type Location {
    id: ID!
    name: String!
    noOfFemales: Int!
    noOfMales: Int!
    totalResidents: Int!
    parentLocation: Location 
    nestedLocations: [Location]
}`;
