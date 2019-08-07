export const SIGNUP_USER = `
    mutation signup($name: String!, $email: String!, $password: String!) {
      signup(name: $name, email: $email, password: $password) {
        user {
          name
          email
        }
      }
    }
`;

export const LOGIN_USER = `
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          name
          email
        }
      }
    }
`;

export const GET_WELCOME_MESSAGE = `
query {
  info
}`;
