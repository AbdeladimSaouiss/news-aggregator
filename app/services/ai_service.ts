import { GoogleGenerativeAI } from '@google/generative-ai'
import env from '#start/env'

export class AIService {
  private genAI: GoogleGenerativeAI
  private model

  constructor() {
    const apiKey = env.get('GEMINI_API_KEY')

    // Validate environment variables
    if (!apiKey || apiKey === 'your-gemini-api-key') {
      throw new Error(
        'Please set GEMINI_API_KEY in your .env file. Get it from https://makersuite.google.com/app/apikey'
      )
    }

    this.genAI = new GoogleGenerativeAI(apiKey)
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  }

  async generateSummary(content: string, title: string): Promise<string> {
    try {
      const prompt = `
        Please create a concise summary (2-3 sentences) of the following article:
        
        Title: ${title}
        
        Content: ${content}
        
        The summary should capture the main points and key information from the article.
        Keep it professional and informative.
      `

      const result = await this.model.generateContent(prompt)
      const summary = result.response.text()

      return summary.trim()
    } catch (error) {
      console.error('Error generating summary:', error)
      // Fallback to a simple truncated version
      return content.substring(0, 200) + '...'
    }
  }

  async enhanceContent(content: string): Promise<string> {
    try {
      const prompt = `
        Please clean up and format the following article content for better readability:
        
        ${content}
        
        Remove any redundant information, fix formatting issues, and ensure the content flows well.
        Return only the cleaned content without any additional commentary.
      `

      const result = await this.model.generateContent(prompt)
      return result.response.text().trim()
    } catch (error) {
      console.error('Error enhancing content:', error)
      return content // Return original content if enhancement fails
    }
  }
}
