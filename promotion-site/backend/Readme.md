This is the boilerplate for GraphQL + Prisma + Prisma Bindings 

* Usage of: Prisma Bindings (Take me a while to recognize the difference between Prisma Client and Prisma Bindings)
* To sum up: Prisma Bindings help to query all the nested data for you without having extra work! 
* This is also set up with Babel enabled, so you could use the ES6 syntax for import/export 

The datamodel.prisma has Promotions and Brands. So do take them out before starting the project

Flow of the project: 

1. Update prisma/datamodel.prisma (for example: Create a table name `Student`)
2. Run primsa deploy
3. Run `yarn get-schema`. It will update the schema file for `prisma-bindings` at the location `src/generated/prisma.graphql`
4. Update the `schema.graphql`  
    * (in case you add a new field to an existing table and want it to render)
    * (or you wanna update a Query field or Mutation field)
5. I havent' put up the folder out for `resolvers` (with 3 type: `Query`, `Mutation` and `Subscription` yet. Will do soon! )
6. One more thing to update is the `Schema Stitching` for easier modulization of the project. 


It takes me the whole day for this. So the next time please use this to save time 


'apollo-server': throw error