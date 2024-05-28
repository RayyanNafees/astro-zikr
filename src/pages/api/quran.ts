import quran from '../../data/quran.json'
import type { APIRoute } from 'astro'

export const ALL: APIRoute = async() => {
  return new Response(JSON.stringify(quran))
}