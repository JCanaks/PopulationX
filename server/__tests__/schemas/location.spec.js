import '@babel/polyfill';
import prismaMockInstance from '../../configs/testConfigs/prismaMockInstance';
import mockData from '../../configs/testConfigs/mockData';
import { clearData, createTestUser, getLocationId } from '../../utils/helpers/testHelpers';
import createGraphqlTestServer from '../../configs/testConfigs/testClient';
import generateToken from '../../utils/services/tokenService';
import { CREATE_LOCATION, UPDATE_LOCATION, GET_LOCATIONS, DELETE_LOCATION } from '../../configs/testConfigs/constants/locationContants';

const { signupInput, locationInput } = mockData;
let user;
let location;

describe('Testing location resolvers', () => {
    beforeAll(async () => {
        await clearData(prismaMockInstance);
        user = await createTestUser(prismaMockInstance, signupInput.validUserInput);
    });

    afterAll(async () => {
        await clearData(prismaMockInstance);
    });
    
    test('Creating a location with valid user input', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }
        const { mutate } = createGraphqlTestServer(request);
        const args = locationInput.validCreateLocationInput;

        const { errors, data } = await mutate({
            mutation: CREATE_LOCATION,
            variables: args,
        });
        location = data.createLocation;

        expect(data).toBeDefined();
        expect(data).toMatchSnapshot();
        expect(errors).toBeUndefined();
    });

    test('Creating a location with invalid input', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }
    
      const { mutate } = createGraphqlTestServer(request);
      const args = locationInput.invalidCreateLocationInput;
      const { errors, data } = await mutate({
        mutation: CREATE_LOCATION,
        variables: args,
      });
      expect(data).toBeUndefined();
      expect(errors).toBeDefined();
      expect(errors).toMatchSnapshot();
    });

    test('Creating a location with name and locatedIn of invalid max value', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }
    
      const { mutate } = createGraphqlTestServer(request);
      const args = locationInput.invalidCreateLocationInput1;
      const { errors, data } = await mutate({
        mutation: CREATE_LOCATION,
        variables: args,
      });
      expect(data).toBeUndefined();
      expect(errors).toBeDefined();
      expect(errors).toMatchSnapshot();
    });

    test('Creating a location with name and locatedIn of invalid min value', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }
    
      const { mutate } = createGraphqlTestServer(request);
      const args = locationInput.invalidCreateLocationInput2;
      const { errors, data } = await mutate({
        mutation: CREATE_LOCATION,
        variables: args,
      });
      expect(data).toBeUndefined();
      expect(errors).toBeDefined();
      expect(errors).toMatchSnapshot();
    });

    test('Updating a location with valid user input', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }

        const { mutate } = createGraphqlTestServer(request);
        const args = locationInput.validUpdateLocationInput;

        const id = await getLocationId(prismaMockInstance, location.name)
        const { errors, data } = await mutate({
            mutation: UPDATE_LOCATION,
            variables: {id, ...args}
        });

        location = data.updateLocation;

        expect(data).toBeDefined();
        expect(data).toMatchSnapshot();
        expect(errors).toBeUndefined();
    });

    test('Updating a location with no user input', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }
        
        const { mutate } = createGraphqlTestServer(request);
        const { errors, data } = await mutate({
            mutation: UPDATE_LOCATION,
            variables: {}
        });
        
        expect(data).toBeUndefined();
        expect(errors).toBeDefined();
        expect(errors).toMatchSnapshot();
    });

    test('Updating a location with name and locatedIn of invalid min values', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        };

        const id = await getLocationId(prismaMockInstance, location.name)
        const { mutate } = createGraphqlTestServer(request);
        const args = locationInput.invalidUpdateLocationInput;
        const { errors } = await mutate({
            mutation: UPDATE_LOCATION,
            variables: {id, ...args}
        });
        
        expect(errors).toBeDefined();
        expect(errors).toMatchSnapshot();
    });

    test('Updating a location with name and locatedIn of invalid max values', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        };

        const id = await getLocationId(prismaMockInstance, location.name)
        const { mutate } = createGraphqlTestServer(request);
        const args = locationInput.invalidUpdateLocationInput1;
        const { errors } = await mutate({
            mutation: UPDATE_LOCATION,
            variables: {id, ...args}
        });
        
        expect(errors).toBeDefined();
        expect(errors).toMatchSnapshot();
    });

    test('Getting the list of locations available', async () => {
        const { query } = createGraphqlTestServer();
        const { errors, data } = await query({
          query: GET_LOCATIONS,
          variables: {},
        });
    
        expect(data).toBeDefined();
        expect(data).toMatchSnapshot();
        expect(errors).toBeUndefined();
      });


    test('Deleting a Location', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }

        const { mutate } = createGraphqlTestServer(request);

        const id = await getLocationId(prismaMockInstance, location.name)
        const { errors, data } = await mutate({
            mutation: DELETE_LOCATION,
            variables: { id },
        });

        expect(data).toBeDefined();
        expect(data).toMatchSnapshot();
        expect(errors).toBeUndefined();
    });

    test('Deleting a Location with no id specified', async () => {
        const request = {
            headers: {
                authorization: generateToken({ userId: user.id }, '3d'),
            }
        }

        const { mutate } = createGraphqlTestServer(request);

        const id = '';
        const { errors, data } = await mutate({
            mutation: DELETE_LOCATION,
            variables: {id},
        });

        expect(errors).toBeDefined();
        expect(errors).toMatchSnapshot();
    });
});

