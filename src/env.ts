import { z }from 'zod'

console.log(import.meta.env)

const envSchema = z.object({
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_KEY: z.string().min(1).optional(),
})

const env = envSchema.safeParse({
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_KEY,
  VITE_SUPABASE_KEY: process.env.VITE_SUPABASE_KEY
})

if (!env.success) {
  throw new Error('Environment validation failed: ' + env.error.issues[0].message);
}

export default env.data
