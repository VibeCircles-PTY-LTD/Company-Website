"use strict";

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const connectionString = process.env.DATABASE_URL;
const adapter = connectionString ? new PrismaPg({ connectionString }) : null;
const prisma = adapter
  ? new PrismaClient({ adapter })
  : null;

/**
 * Use this in API routes / server code.
 * Returns null if DATABASE_URL is not set (e.g. before DB is configured).
 */
function getPrisma() {
  return prisma;
}

module.exports = { getPrisma, prisma };
