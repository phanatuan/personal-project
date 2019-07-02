import { Prisma } from "prisma-binding"

// const { Prisma } = require('prisma-binding')

const prisma = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: "https://us1.prisma.sh/public-buttongriffin-781/backend/dev",
  });
  
export { prisma as default }

