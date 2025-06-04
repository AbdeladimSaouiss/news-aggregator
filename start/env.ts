/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),

  // Supabase Configuration
  SUPABASE_URL: Env.schema.string(),
  SUPABASE_ANON_KEY: Env.schema.string(),

  // Google Gemini API Configuration
  GEMINI_API_KEY: Env.schema.string(),

  // Scraping Configuration
  SCRAPING_INTERVAL_MINUTES: Env.schema.number.optional(),
})
