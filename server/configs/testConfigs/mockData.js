export default {
  signupInput: {
    validUserInput: {
      name: 'TestUser Signup',
      email: 'jsignup@mail.com',
      password: '1111',
    },
    invalidUserInput: {
      name: '',
      email: '',
      password: '',
    },
  },
  loginInput: {
    validUserInput: {
      email: 'jsignup@mail.com',
      password: '1111',
    },
    invalidUserInput: {
      email: '',
      password: '',
    },
    invalidPassword: {
      name: 'TestUser Signup',
      email: 'jsignup@mail.com',
      password: '1112',
    },
    invalidUser: {
      name: 'Invalid User',
      email: 'invalid@mail.com',
      password: '1112',
    },
  },
  locationInput: {
    validCreateLocationInput: {
      name: 'Lagos',
      noOfFemales: 1000,
      noOfMales: 950,
    },
    invalidCreateLocationInput: {
      name: '',
      locatedIn: '',
    },
    invalidCreateLocationInput1: {
      name: 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
      locatedIn: 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
    },
    invalidCreateLocationInput2: {
      name: 'L',
      locatedIn: 'L',
    },
    validUpdateLocationInput: {
      name: 'Lasgidi',
      noOfFemales: 2000,
      noOfMales: 1950,
    },
    invalidUpdateLocationInput: {
      name: 'L',
      locatedIn: 'n',
    },
    invalidUpdateLocationInput1: {
      name: 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
      locatedIn: 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
    },
  },
};
