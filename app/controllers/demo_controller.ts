import type { HttpContext } from '@adonisjs/core/http'

export default class DemoController {
  /**
   * Generate demo data for testing without real API keys
   */
  async generateDemoData({ response }: HttpContext) {
    try {
      const demoArticles = [
        {
          _id: '1',
          title: 'AI Breakthrough: New Language Model Achieves Human-Level Performance',
          source: 'The Verge',
          url: 'https://example.com/ai-breakthrough',
          content:
            'A new artificial intelligence model has achieved unprecedented performance on language understanding tasks, marking a significant milestone in AI development...',
          summary:
            'Researchers have developed a new AI model that matches human performance on language tasks, representing a major advancement in artificial intelligence capabilities.',
          createdAt: new Date(),
        },
        {
          _id: '2',
          title: 'Revolutionary Battery Technology Could Change Electric Vehicles Forever',
          source: 'CNET',
          url: 'https://example.com/battery-tech',
          content:
            'Scientists have developed a new battery technology that could dramatically increase the range of electric vehicles while reducing charging times...',
          summary:
            'New battery technology promises to extend EV range significantly while cutting charging times, potentially revolutionizing electric transportation.',
          createdAt: new Date(),
        },
        {
          _id: '3',
          title: 'Quantum Computing Makes Major Leap Forward',
          source: 'Wired',
          url: 'https://example.com/quantum-computing',
          content:
            'Quantum computing researchers have achieved a new milestone in quantum error correction, bringing practical quantum computers closer to reality...',
          summary:
            'Advances in quantum error correction bring practical quantum computing applications significantly closer to commercial reality.',
          createdAt: new Date(),
        },
      ]

      return response.ok({
        success: true,
        message: 'Demo data generated successfully',
        data: demoArticles,
        note: 'This is demo data. To use real scraping, configure your Supabase and Gemini API keys.',
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        message: 'Failed to generate demo data',
        error: error.message,
      })
    }
  }

  /**
   * Get setup instructions
   */
  async getSetupInstructions({ response }: HttpContext) {
    const instructions = {
      title: 'News Summary API Setup Instructions',
      steps: [
        {
          step: 1,
          title: 'Create a Supabase account',
          description: 'Go to https://supabase.com and create a free account',
          action: 'Get your project URL and anon key from the API settings',
        },
        {
          step: 2,
          title: 'Set up the database',
          description: 'Run the SQL from database/supabase_setup.sql in your Supabase SQL editor',
          action: 'This creates the articles table with proper indexes',
        },
        {
          step: 3,
          title: 'Get a Gemini API key',
          description: 'Go to https://makersuite.google.com/app/apikey',
          action: 'Create a free API key for Google Gemini',
        },
        {
          step: 4,
          title: 'Update your .env file',
          description: 'Copy values from .env.example and fill in your keys',
          action: 'Set SUPABASE_URL, SUPABASE_ANON_KEY, and GEMINI_API_KEY',
        },
        {
          step: 5,
          title: 'Start scraping',
          description: 'Use POST /api/scrape to trigger manual scraping',
          action: 'The cron job will run automatically every N minutes',
        },
      ],
      currentConfig: {
        hasSupabase: process.env.SUPABASE_URL && process.env.SUPABASE_URL !== 'your-supabase-url',
        hasGemini:
          process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your-gemini-api-key',
        scrapingInterval: process.env.SCRAPING_INTERVAL_MINUTES || '30',
      },
    }

    return response.ok({
      success: true,
      data: instructions,
    })
  }
}
