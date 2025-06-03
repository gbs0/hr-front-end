import { configDotenv } from "dotenv";
import { defineConfig } from "drizzle-kit";

configDotenv();
configDotenv({ path: `.env.local`, override: true });

export default defineConfig({
  schema: "./db/schema.ts",
  out: ".drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
