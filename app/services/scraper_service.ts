import puppeteer from 'puppeteer'
import * as cheerio from 'cheerio'
import { SupabaseService } from './supabase_service.js'
import { AIService } from './ai_service.js'

export interface ScrapedArticle {
  title: string
  url: string
  source: string
  publishedAt: Date
}

export class ScraperService {
  private supabaseService: SupabaseService
  private aiService: AIService

  constructor() {
    this.supabaseService = new SupabaseService()
    this.aiService = new AIService()
  }

  private async scrapeTheVerge(): Promise<ScrapedArticle[]> {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    try {
      await page.goto('https://www.theverge.com', { waitUntil: 'networkidle2' })
      const html = await page.content()
      const $ = cheerio.load(html)

      const articles: ScrapedArticle[] = []

      $('article h2 a, article h3 a').each((_, element) => {
        const $element = $(element)
        const title = $element.text().trim()
        const url = $element.attr('href')

        if (title && url) {
          const fullUrl = url.startsWith('http') ? url : `https://www.theverge.com${url}`
          articles.push({
            title,
            url: fullUrl,
            source: 'The Verge',
            publishedAt: new Date(),
          })
        }
      })

      return articles.slice(0, 10) // Limit to 10 articles
    } catch (error) {
      console.error('Error scraping The Verge:', error)
      return []
    } finally {
      await browser.close()
    }
  }

  private async scrapeCNET(): Promise<ScrapedArticle[]> {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    try {
      await page.goto('https://www.cnet.com', { waitUntil: 'networkidle2' })
      const html = await page.content()
      const $ = cheerio.load(html)

      const articles: ScrapedArticle[] = []

      $('article h3 a, article h4 a, .latestScrollItems h4 a').each((_, element) => {
        const $element = $(element)
        const title = $element.text().trim()
        const url = $element.attr('href')

        if (title && url) {
          const fullUrl = url.startsWith('http') ? url : `https://www.cnet.com${url}`
          articles.push({
            title,
            url: fullUrl,
            source: 'CNET',
            publishedAt: new Date(),
          })
        }
      })

      return articles.slice(0, 10) // Limit to 10 articles
    } catch (error) {
      console.error('Error scraping CNET:', error)
      return []
    } finally {
      await browser.close()
    }
  }

  private async scrapeWired(): Promise<ScrapedArticle[]> {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    try {
      await page.goto('https://www.wired.com', { waitUntil: 'networkidle2' })
      const html = await page.content()
      const $ = cheerio.load(html)

      const articles: ScrapedArticle[] = []

      $('article h3 a, article h2 a, .summary-item__hed a').each((_, element) => {
        const $element = $(element)
        const title = $element.text().trim()
        const url = $element.attr('href')

        if (title && url) {
          const fullUrl = url.startsWith('http') ? url : `https://www.wired.com${url}`
          articles.push({
            title,
            url: fullUrl,
            source: 'Wired',
            publishedAt: new Date(),
          })
        }
      })

      return articles.slice(0, 10) // Limit to 10 articles
    } catch (error) {
      console.error('Error scraping Wired:', error)
      return []
    } finally {
      await browser.close()
    }
  }

  private async scrapeArticleContent(url: string): Promise<string> {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    try {
      await page.goto(url, { waitUntil: 'networkidle2' })
      const html = await page.content()
      const $ = cheerio.load(html)

      // Remove unwanted elements
      $('script, style, nav, header, footer, .ad, .advertisement, .social-share').remove()

      // Try different content selectors based on site
      const contentSelectors = [
        '.c-entry-content p', // The Verge
        '[data-module="ArticleBody"] p', // CNET
        '.article-wrap p', // Wired
      ]

      let content = ''
      for (const selector of contentSelectors) {
        const paragraphs = $(selector)
        if (paragraphs.length > 0) {
          content = paragraphs
            .map((_, el) => $(el).text().trim())
            .get()
            .join('\n\n')
          break
        }
      }

      return content || 'Content not available'
    } catch (error) {
      console.error('Error scraping article content:', error)
      return 'Content not available'
    } finally {
      await browser.close()
    }
  }

  async scrapeAllSources(): Promise<void> {
    try {
      console.log('🚀 Starting scraping process...')

      const allArticles = await Promise.allSettled([
        this.scrapeTheVerge(),
        this.scrapeCNET(),
        this.scrapeWired(),
      ])

      const articles = allArticles
        .filter((result) => result.status === 'fulfilled')
        .flatMap((result) => (result as PromiseFulfilledResult<ScrapedArticle[]>).value)

      console.log(`📄 Found ${articles.length} articles total`)

      // Process articles with AI summaries and save to database
      for (const article of articles) {
        try {
          console.log(`📖 Processing: ${article.title}`)

          const content = await this.scrapeArticleContent(article.url)
          const summary = await this.aiService.generateSummary(content, article.title)

          await this.supabaseService.createArticle({
            title: article.title,
            url: article.url,
            source: article.source,
            content: content,
            summary: summary,
          })

          console.log(`✅ Saved: ${article.title}`)

          // Add delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 2000))
        } catch (error) {
          console.error(`❌ Error processing article: ${article.title}`, error)
        }
      }

      console.log('🎉 Scraping process completed!')
    } catch (error) {
      console.error('❌ Scraping process failed:', error)
      throw error
    }
  }

  async scrapeSource(source: string): Promise<void> {
    try {
      console.log(`🚀 Starting scraping for ${source}...`)

      let articles: ScrapedArticle[] = []

      switch (source.toLowerCase()) {
        case 'theverge':
        case 'the verge':
          articles = await this.scrapeTheVerge()
          break
        case 'cnet':
          articles = await this.scrapeCNET()
          break
        case 'wired':
          articles = await this.scrapeWired()
          break
        default:
          throw new Error(`Unknown source: ${source}`)
      }

      console.log(`📄 Found ${articles.length} articles from ${source}`)

      // Process articles with AI summaries and save to database
      for (const article of articles) {
        try {
          console.log(`📖 Processing: ${article.title}`)

          const content = await this.scrapeArticleContent(article.url)
          const summary = await this.aiService.generateSummary(content, article.title)

          await this.supabaseService.createArticle({
            title: article.title,
            url: article.url,
            source: article.source,
            content: content,
            summary: summary,
          })

          console.log(`✅ Saved: ${article.title}`)

          // Add delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 2000))
        } catch (error) {
          console.error(`❌ Error processing article: ${article.title}`, error)
        }
      }

      console.log(`🎉 Scraping completed for ${source}!`)
    } catch (error) {
      console.error(`❌ Scraping failed for ${source}:`, error)
      throw error
    }
  }
}
