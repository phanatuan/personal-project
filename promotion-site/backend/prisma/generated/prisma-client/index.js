"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Promotion",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Brand",
    embedded: false
  },
  {
    name: "PromoStatus",
    embedded: false
  },
  {
    name: "PromoType",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-buttongriffin-781/backend/dev`
});
exports.prisma = new exports.Prisma();
