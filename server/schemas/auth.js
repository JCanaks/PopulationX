import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import authValidation from '../utils/middleware/validators/auth';

const { APP_SECRET } = process.env;

export const typeDef = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  extend type Mutation {
      signup(name: String!, email: String!, password: String!): AuthPayload
      login(email: String!, password: String!): AuthPayload
  }
  
  type AuthPayload {
      token: String
      user: User
  }`;

export const resolvers = {
  Mutation: {
    signup: async (parent, args, context) => {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.createUser({ ...args, password });
      const token = jwt.sign({
        userId: user.id,
      }, APP_SECRET, { expiresIn: '3h' });

      return {
        token,
        user,
      };
    },
    login: async (parent, args, context) => {
      const user = await context.prisma.user({ email: args.email });

      if (!user) {
        throw new Error('No such user found');
      }

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error('Invalid Password');
      }

      const token = jwt.sign({
        userId: user.id,
      }, APP_SECRET, { expiresIn: '3h' });

      return {
        token,
        user,
      };
    },
  },
};

export const authValidationMiddleware = {
  Mutation: {
    signup: authValidation.signup,
    login: authValidation.login,
  },
};
