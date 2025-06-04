import type { ApplicationService } from '@adonisjs/core/types'
import { CronService } from '#services/cron_service'

export default class CronProvider {
  private cronService?: CronService

  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    // Register service without container binding for now
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    // Boot
  }

  /**
   * The application has been booted
   */
  async start() {
    try {
      // Only start cron if API keys are properly configured
      const supabaseUrl = process.env.SUPABASE_URL
      const geminiKey = process.env.GEMINI_API_KEY

      if (
        supabaseUrl &&
        supabaseUrl !== 'your-supabase-url' &&
        geminiKey &&
        geminiKey !== 'your-gemini-api-key'
      ) {
        this.cronService = new CronService()
        this.cronService.start()
        console.log('✅ Cron service started successfully')
      } else {
        console.log('⚠️  Cron service disabled - configure API keys to enable scraping')
        console.log('📖 Visit /api/setup for configuration instructions')
      }
    } catch (error) {
      console.error('❌ Failed to start cron service:', error.message)
      console.log('📖 Visit /api/setup for configuration instructions')
    }
  }

  /**
   * The process has been started
   */
  async ready() {
    // Ready
  }

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {
    // Cleanup
  }
}
