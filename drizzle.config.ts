// import "@/db/envConfig"; // Not needed for drizzle-kit config
import { defineConfig } from "drizzle-kit";

// The D1 database name (must match the binding name in wrangler.toml and Cloudflare dashboard)
const d1DatabaseName = "pages-cms-db";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "sqlite", // D1 uses the SQLite dialect
  driver: "d1-http", // Specify the d1-http driver for drizzle-kit via API

  // By omitting wranglerConfigPath and providing dbName,
  // drizzle-kit will expect Cloudflare API credentials via environment variables
  // (CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID)
  // to interact with the D1 database for migrations/generation.
  dbCredentials: {
    dbName: d1DatabaseName,
  },
  // Optionally, add verbose and strict flags for drizzle-kit
  // verbose: true,
  // strict: true,
});
