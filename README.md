# News Summary API

A comprehensive news scraping API built with AdonisJS that automatically scrapes articles from The Verge, CNET, and Wired, generates AI-powered summaries using Google Gemini, and stores everything in Supabase.

## 🎯 Features

- **Multi-source scraping**: Automatically scrapes articles from The Verge, CNET, and Wired
- **AI-powered summaries**: Uses Google Gemini (free tier) to generate article summaries
- **Automated scheduling**: Configurable cron jobs for regular scraping
- **Duplicate prevention**: Avoids scraping the same article twice
- **RESTful API**: Full CRUD operations with search capabilities
- **Supabase integration**: Cloud database with no local setup required
- **Real-time monitoring**: Track scraping job status

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- A Supabase account (free tier available)
- A Google AI/Gemini API key (free tier available)

### 1. Environment Setup

Copy the `.env` file and fill in your credentials:

```bash
# Get your Supabase credentials from: https://supabase.com/dashboard
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# Get your Gemini API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your-gemini-api-key

# Optional: Configure scraping interval (default: 30 minutes)
SCRAPING_INTERVAL_MINUTES=30
```

### 2. Supabase Database Setup

1. Go to your Supabase dashboard
2. Open the SQL Editor
3. Copy and paste the contents of `database/supabase_setup.sql`
4. Run the SQL to create the articles table and indexes

### 3. Install and Run

```bash
# Install dependencies (already done)
npm install

# Start the development server
npm run dev
```

The API will be available at `http://localhost:3333`

## 📋 API Endpoints

### Articles

- `GET /api/articles` - Get all articles with pagination
  - Query params: `page`, `limit`
- `GET /api/articles/latest` - Get latest articles from all sources
  - Query params: `limit`
- `GET /api/articles/search` - Search articles by title or content
  - Query params: `q` (required), `limit`
- `GET /api/articles/source/:source` - Get articles by source
  - Sources: "The Verge", "CNET", "Wired"
  - Query params: `limit`

### Scraping Control

- `POST /api/scrape` - Trigger manual scraping job
- `GET /api/status` - Get current scraping job status

### Examples

```bash
# Get latest 10 articles
curl "http://localhost:3333/api/articles/latest?limit=10"

# Search for articles about "AI"
curl "http://localhost:3333/api/articles/search?q=AI&limit=5"

# Get articles from The Verge
curl "http://localhost:3333/api/articles/source/The%20Verge"

# Trigger manual scraping
curl -X POST "http://localhost:3333/api/scrape"
```

## 🔧 Configuration

### Scraping Interval

The scraping interval can be configured via the `SCRAPING_INTERVAL_MINUTES` environment variable. The cron job will run every N minutes to scrape new articles.

### Supported News Sources

- **The Verge** (`theverge.com`) - Tech news and reviews
- **CNET** (`cnet.com`) - Technology news and product reviews
- **Wired** (`wired.com`) - Technology, science, and culture

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AdonisJS API  │────│  Puppeteer +    │────│   News Websites │
│                 │    │   Cheerio       │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Google Gemini │────│   Supabase DB   │────│   Cron Service  │
│   (AI Summary)  │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📁 Project Structure

```
app/
├── controllers/
│   └── articles_controller.ts    # API endpoints
├── models/
│   └── article.ts               # Article model
└── services/
    ├── ai_service.ts            # Google Gemini integration
    ├── scraper_service.ts       # Web scraping logic
    ├── supabase_service.ts      # Database operations
    └── cron_service.ts          # Scheduled jobs
```

## 🔍 Data Schema

Each article is stored with the following structure:

```typescript
{
  _id: string,          // UUID primary key
  title: string,        // Article title
  source: string,       // Source website name
  url: string,          // Original article URL
  content: string,      // Full article content
  summary: string,      // AI-generated summary
  createdAt: Date,      // When scraped
  updatedAt: Date       // Last updated
}
```

## 🤖 AI Summary Generation

The system uses Google Gemini's free tier to generate concise summaries (2-3 sentences) of each article. The AI service includes:

- Intelligent content summarization
- Fallback to truncated content if AI fails
- Content enhancement and cleanup

## 🔒 Security & Best Practices

- Row Level Security enabled on Supabase
- Rate limiting for web scraping (2-second delays)
- Duplicate article prevention
- Error handling and logging
- Configurable scraping intervals

## 🐛 Troubleshooting

### Common Issues

1. **Scraping fails**: Check if target websites have changed their structure
2. **AI summaries not working**: Verify your Gemini API key
3. **Database errors**: Ensure Supabase table is created correctly
4. **Rate limiting**: Increase delays in scraper service

### Logs

The application provides detailed logging for:

- Scraping progress and errors
- API requests and responses
- Cron job execution
- Database operations

## 📈 Monitoring

- Check scraping job status: `GET /api/status`
- Monitor logs for errors and performance
- Use Supabase dashboard for database monitoring

## 🚀 Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Configure proper logging levels
3. Set up monitoring and alerting
4. Consider using PM2 for process management
5. Implement proper rate limiting

## 📝 License

This project is licensed under the MIT License.
