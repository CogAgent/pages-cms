// import "@/db/envConfig"; // Not needed for drizzle-kit config
import { defineConfig } from "drizzle-kit";

// Check for required environment variables for D1 HTTP config
if (!process.env.CLOUDFLARE_ACCOUNT_ID) {
  throw new Error("CLOUDFLARE_ACCOUNT_ID environment variable is required for drizzle config");
}
if (!process.env.CLOUDFLARE_D1_DATABASE_ID) {
  throw new Error("CLOUDFLARE_D1_DATABASE_ID environment variable is required for drizzle config");
}
if (!process.env.CLOUDFLARE_API_TOKEN) {
  throw new Error("CLOUDFLARE_API_TOKEN environment variable is required for drizzle config");
}

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "sqlite", // D1 uses the SQLite dialect
  driver: "d1-http", // Use d1-http driver when relying on API token env vars

  // Read credentials directly from environment variables
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    databaseId: process.env.CLOUDFLARE_D1_DATABASE_ID,
    token: process.env.CLOUDFLARE_API_TOKEN,
  },
  // Optionally, add verbose and strict flags for drizzle-kit
  // verbose: true,
  // strict: true,
});
