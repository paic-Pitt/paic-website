import { client } from './client'

// Fetch while the site is being built. If Sanity can't be reached the build still goes through
// with the fallback, and the page loads the real content in the browser (see useSanityQuery).
export async function fetchAtBuild<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  try {
    return await client.fetch<T>(query, params)
  } catch (error) {
    console.warn('Sanity fetch failed during build, using fallback:', error)
    return fallback
  }
}
