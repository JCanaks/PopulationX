export const CREATE_LOCATION = `
    mutation createLocation($name: String!, $noOfFemales: Int!, $noOfMales: Int!, $locatedIn: String) {
      createLocation(name: $name, noOfFemales: $noOfFemales, noOfMales: $noOfMales, locatedIn: $locatedIn) {
        name
        noOfFemales
        noOfMales
        totalResidents
        parentLocation {
          name
        }
        childLocations {
          name
        }
      }
    }
`;

export const UPDATE_LOCATION = `
    mutation updateLocation($id: ID!, $name: String, $noOfFemales: Int, $noOfMales: Int, $locatedIn: String) {
      updateLocation(id: $id, name: $name, noOfFemales: $noOfFemales, noOfMales: $noOfMales, locatedIn: $locatedIn) {
        name
        noOfFemales
        noOfMales
        totalResidents
        parentLocation {
          name
        }
        childLocations {
          name
        }
      }
    }
`;

export const GET_LOCATIONS = `
    query {
        allLocations {
        name
        noOfFemales
        noOfMales
        totalResidents
        parentLocation {
          name
        }
        childLocations {
          name
        }
      }
    }
`;

export const DELETE_LOCATION = `
    mutation deleteLocation($id: ID!) {
        deleteLocation(id: $id) {
        name
      }
    }
`;
