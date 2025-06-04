import { createClient } from '@supabase/supabase-js'
import env from '#start/env'
import { v4 as uuidv4 } from 'uuid'

export interface ArticleData {
  _id?: string
  title: string
  source: string
  url: string
  content: string
  summary: string
  createdAt?: Date
}

export class SupabaseService {
  private supabase

  constructor() {
    const supabaseUrl = env.get('SUPABASE_URL')
    const supabaseKey = env.get('SUPABASE_ANON_KEY')

    // Validate environment variables
    if (
      !supabaseUrl ||
      supabaseUrl === 'your-supabase-url' ||
      !supabaseUrl.startsWith('https://')
    ) {
      throw new Error(
        'Please set SUPABASE_URL in your .env file. Get it from https://supabase.com/dashboard'
      )
    }

    if (!supabaseKey || supabaseKey === 'your-supabase-anon-key') {
      throw new Error(
        'Please set SUPABASE_ANON_KEY in your .env file. Get it from https://supabase.com/dashboard'
      )
    }

    this.supabase = createClient(supabaseUrl, supabaseKey)
  }

  async createArticle(articleData: ArticleData) {
    const article = {
      _id: uuidv4(),
      ...articleData,
      createdAt: new Date(),
    }

    const { data, error } = await this.supabase.from('articles').insert([article]).select()

    if (error) {
      throw new Error(`Failed to create article: ${error.message}`)
    }

    return data?.[0]
  }

  async getArticles(limit = 10, offset = 0) {
    const { data, error } = await this.supabase
      .from('articles')
      .select('*')
      .order('createdAt', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      throw new Error(`Failed to fetch articles: ${error.message}`)
    }

    return data
  }

  async getArticleByUrl(url: string) {
    const { data, error } = await this.supabase.from('articles').select('*').eq('url', url).single()

    if (error && error.code !== 'PGRST116') {
      // PGRST116 is "not found"
      throw new Error(`Failed to fetch article: ${error.message}`)
    }

    return data
  }

  async searchArticles(query: string, limit = 10) {
    const { data, error } = await this.supabase
      .from('articles')
      .select('*')
      .or(`title.ilike.%${query}%, content.ilike.%${query}%`)
      .order('createdAt', { ascending: false })
      .limit(limit)

    if (error) {
      throw new Error(`Failed to search articles: ${error.message}`)
    }

    return data
  }

  async getArticlesBySource(source: string, limit = 10) {
    const { data, error } = await this.supabase
      .from('articles')
      .select('*')
      .eq('source', source)
      .order('createdAt', { ascending: false })
      .limit(limit)

    if (error) {
      throw new Error(`Failed to fetch articles by source: ${error.message}`)
    }

    return data
  }
}
