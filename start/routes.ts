/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ArticlesController = () => import('#controllers/articles_controller')
const DemoController = () => import('#controllers/demo_controller')

// Welcome route
router.get('/', async () => {
  return {
    message: 'Welcome to News Summary API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      setup: '/api/setup',
      demoArticles: '/api/demo/articles',
      articles: '/api/articles',
      search: '/api/articles/search',
      bySource: '/api/articles/source/:source',
      latest: '/api/articles/latest',
      scrape: '/api/scrape',
      status: '/api/status',
    },
  }
})

// API routes group
router
  .group(() => {
    // Health check
    router.get('/health', async () => {
      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      }
    })

    // Demo routes (work without API keys)
    router.get('/demo/articles', [DemoController, 'generateDemoData'])
    router.get('/setup', [DemoController, 'getSetupInstructions'])

    // Articles routes
    router.get('/articles', [ArticlesController, 'index'])
    router.get('/articles/search', [ArticlesController, 'search'])
    router.get('/articles/latest', [ArticlesController, 'latest'])
    router.get('/articles/source/:source', [ArticlesController, 'bySource'])

    // Scraping routes
    router.post('/scrape', [ArticlesController, 'scrape'])
    router.get('/status', [ArticlesController, 'status'])
  })
  .prefix('/api')
