import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Ensure DATABASE_URL is defined at runtime to satisfy TypeScript
if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not set in the environment variables.");
  process.exit(1);
}

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  client: {
    // Add NEXT_PUBLIC_ vars here if needed
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  onValidationError: (error) => {
    console.error("❌ Environment variable validation failed:");
    console.error(error);
    process.exit(1);
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
