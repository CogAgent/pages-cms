import "@/db/envConfig";
import { drizzle } from "drizzle-orm/d1"; // Use Drizzle's D1 adapter
import type { D1Database } from '@cloudflare/workers-types'; // Import type for the binding
import * as schema from './schema';

// --- How to get the D1 binding? ---
// This depends on how the Cloudflare environment (bindings) are exposed
// to your Next.js app via @cloudflare/next-on-pages or similar.
// It might be via `process.env`, context, or passed during initialization.
// Placeholder: Assuming it's accessible via `process.env.DB` (this might need adjustment)
const d1 = process.env.DB as D1Database;

// Basic check to ensure the binding is present at runtime
if (!d1) {
  // In local dev (outside CF runtime), this binding won't exist.
  // You might need different logic/mocking for local development without wrangler.
  // For production/preview on Cloudflare, this should be provided.
  console.warn("D1Database binding 'DB' not found. Using placeholder/mock if available, or this will fail.");
  // Depending on local dev strategy, you might throw an error or use a local SQLite DB here.
  // throw new Error("D1Database binding 'DB' not found in environment. Check Cloudflare setup.");
}

// Instantiate Drizzle with the D1 binding object
export const db = drizzle(d1, { schema });
