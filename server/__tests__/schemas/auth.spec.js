import '@babel/polyfill';
import prismaMockInstance from '../../configs/testConfigs/prismaMockInstance';
import mockData from '../../configs/testConfigs/mockData';
import clearData from '../../utils/helpers/testHelpers';
import createGraphqlTestServer from '../../configs/testConfigs/testClient';
import { SIGNUP_USER, LOGIN_USER } from '../../configs/testConfigs/testConstants';

const { signupInput, loginInput } = mockData;
const { mutate } = createGraphqlTestServer();

describe('Testing auth resolvers', () => {
  beforeAll(async () => {
    await clearData(prismaMockInstance);
  });

  afterAll(async () => {
    await clearData(prismaMockInstance);
  });


  test('Signup with valid user input', async () => {
    const args = signupInput.validUserInput;
    const { errors, data } = await mutate({
      mutation: SIGNUP_USER,
      variables: args,
    });

    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
    expect(errors).toBeUndefined();
  });

  test('Signup with invalid user input', async () => {
    const args = signupInput.invalidUserInput;
    const { errors } = await mutate({
      mutation: SIGNUP_USER,
      variables: args,
    });
    
    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
  });

  test('Login with valid user input', async () => {
    const args = loginInput.validUserInput;
    const { errors, data } = await mutate({
      mutation: LOGIN_USER,
      variables: args,
    });

    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
    expect(errors).toBeUndefined();
  });

  test('Login with invalid user input', async () => {
    const args = loginInput.invalidUserInput;
    const { errors } = await mutate({
      mutation: LOGIN_USER,
      variables: args,
    });
    
    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
  });
});
