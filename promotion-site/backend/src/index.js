import prisma from './prisma';
const { GraphQLServer } = require('graphql-yoga')
import { AuthenticationError, UserInputError } from 'apollo-server';

const resolvers = {
  Query: {
    brands: async (parent, args, {prisma}, info) => { 
      return await prisma.query.brands(null, info)
    }, 
    promotions: async (parent, args, {prisma}, info) => { 
      return await prisma.query.promotions(null, info)
    }
  },

  Mutation: { 
    login: async (parent, args , {prisma}, info) => { 
      const {email, password } = args.data
      const user = await prisma.query.user({ 
        where: { email }
      })

      if (!user) { 
        throw new UserInputError('Cannot log in')
      }

      const passwordCheck = password === user.password
      if (!passwordCheck) { 
        throw new AuthenticationError('Wrong Password')
      }

      return user
    }, 
    createUser: async(parent, args, {prisma}, info) => { 
      const {email, password} = args.data
      return await prisma.mutation.createUser({data: {email, password}})
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {
    return {
      prisma,
      request
    };
  }, 
})

server.start(() => console.log('Server is running on http://localhost:4000'))


