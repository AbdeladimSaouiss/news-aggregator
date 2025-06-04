import cron from 'node-cron'
import { ScraperService } from './scraper_service.js'
import env from '#start/env'

export class CronService {
  private scraperService: ScraperService
  private isRunning: boolean = false

  constructor() {
    this.scraperService = new ScraperService()
  }

  start(): void {
    const intervalMinutes = env.get('SCRAPING_INTERVAL_MINUTES', 30)
    
    // Convert minutes to cron expression
    const cronExpression = `*/${intervalMinutes} * * * *`
    
    console.log(`📅 Starting cron job to run every ${intervalMinutes} minutes`)
    
    cron.schedule(cronExpression, async () => {
      if (this.isRunning) {
        console.log('⏳ Scraping job is already running, skipping this execution')
        return
      }

      this.isRunning = true
      console.log(`🕐 Cron job triggered at ${new Date().toISOString()}`)
      
      try {
        await this.scraperService.scrapeAllSources()
        console.log('✅ Cron job completed successfully')
      } catch (error) {
        console.error('❌ Cron job failed:', error)
      } finally {
        this.isRunning = false
      }
    })

    // Also run immediately on startup
    console.log('🚀 Running initial scrape...')
    this.runManualScrape()
  }

  async runManualScrape(): Promise<void> {
    if (this.isRunning) {
      throw new Error('Scraping job is already running')
    }

    this.isRunning = true
    try {
      await this.scraperService.scrapeAllSources()
    } finally {
      this.isRunning = false
    }
  }

  getStatus(): { isRunning: boolean } {
    return { isRunning: this.isRunning }
  }
}
