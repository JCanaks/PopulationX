import graphqlServer from './graphqlServer';
// eslint-disable-next-line no-console
graphqlServer.start(() => console.log('Server is running on http://localhost:4000'));
