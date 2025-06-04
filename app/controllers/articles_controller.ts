import type { HttpContext } from '@adonisjs/core/http'
import { SupabaseService } from '#services/supabase_service'
import { CronService } from '#services/cron_service'

export default class ArticlesController {
  private getSupabaseService() {
    try {
      return new SupabaseService()
    } catch (error) {
      throw new Error('Supabase not configured. Please set up your environment variables.')
    }
  }

  private getCronService() {
    try {
      return new CronService()
    } catch (error) {
      throw new Error('Services not configured. Please set up your environment variables.')
    }
  }

  /**
   * Get all articles with pagination
   */
  async index({ request, response }: HttpContext) {
    try {
      const supabaseService = this.getSupabaseService()
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)
      const offset = (page - 1) * limit

      const articles = await supabaseService.getArticles(limit, offset)

      return response.ok({
        success: true,
        data: articles,
        pagination: {
          page,
          limit,
          offset,
        },
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: 'Failed to fetch articles',
        error: error.message,
      })
    }
  }

  /**
   * Search articles by title or content
   */
  async search({ request, response }: HttpContext) {
    try {
      const query = request.input('q')
      const limit = request.input('limit', 10)

      if (!query) {
        return response.badRequest({
          success: false,
          message: 'Search query is required',
        })
      }

      const supabaseService = this.getSupabaseService()
      const articles = await supabaseService.searchArticles(query, limit)

      return response.ok({
        success: true,
        data: articles,
        query,
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: 'Failed to search articles',
        error: error.message,
      })
    }
  }

  /**
   * Get articles by source
   */
  async bySource({ params, request, response }: HttpContext) {
    try {
      const { source } = params
      const limit = request.input('limit', 10)

      const supabaseService = this.getSupabaseService()
      const articles = await supabaseService.getArticlesBySource(source, limit)

      return response.ok({
        success: true,
        data: articles,
        source,
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: `Failed to fetch articles from ${params.source}`,
        error: error.message,
      })
    }
  }

  /**
   * Trigger manual scraping
   */
  async scrape({ response }: HttpContext) {
    try {
      const cronService = this.getCronService()
      const status = cronService.getStatus()

      if (status.isRunning) {
        return response.badRequest({
          success: false,
          message: 'Scraping job is already running',
        })
      }

      // Run scraping in background
      cronService.runManualScrape().catch((error: any) => {
        console.error('Manual scrape failed:', error)
      })

      return response.ok({
        success: true,
        message: 'Scraping job started successfully',
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: 'Failed to start scraping job',
        error: error.message,
      })
    }
  }

  /**
   * Get scraping job status
   */
  async status({ response }: HttpContext) {
    try {
      const cronService = this.getCronService()
      const status = cronService.getStatus()

      return response.ok({
        success: true,
        data: status,
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: 'Failed to get status',
        error: error.message,
      })
    }
  }

  /**
   * Get latest articles from all sources
   */
  async latest({ request, response }: HttpContext) {
    try {
      const limit = request.input('limit', 20)
      const supabaseService = this.getSupabaseService()
      const articles = await supabaseService.getArticles(limit, 0)

      // Group by source
      const groupedArticles = articles.reduce((acc: any, article: any) => {
        if (!acc[article.source]) {
          acc[article.source] = []
        }
        acc[article.source].push(article)
        return acc
      }, {})

      return response.ok({
        success: true,
        data: {
          all: articles,
          bySource: groupedArticles,
        },
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: 'Failed to fetch latest articles',
        error: error.message,
      })
    }
  }
}
