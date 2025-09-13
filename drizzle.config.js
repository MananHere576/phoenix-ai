/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_aXxHPLy3w4eC@ep-ancient-lab-ad12aj9i-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    }
  };