import '@babel/polyfill';
import prismaMockInstance from '../configs/testConfigs/prismaMockInstance';
import createGraphqlTestServer from '../configs/testConfigs/testClient';
import { GET_WELCOME_MESSAGE } from '../configs/testConfigs/constants/authConstants';

const { query } = createGraphqlTestServer();

describe('Testing default home resolver in the graphQL server', () => {
    test('Introductory default welcome message', async () => {
      const { errors, data } = await query({
        query: GET_WELCOME_MESSAGE,
        variables: {},
      });
  
      expect(data).toBeDefined();
      expect(data).toMatchSnapshot();
      expect(errors).toBeUndefined();
    });
  });
  