#!/usr/bin/env node

// Test script for the News Summary API
async function testAPI() {
  console.log('🧪 Testing News Summary API...\n')

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...')
    const healthResponse = await fetch(`http://localhost:3333/api/health`)
    const healthData = await healthResponse.json()
    console.log('✅ Health check:', healthData)
    console.log()

    // Test main endpoint
    console.log('2. Testing main endpoint...')
    const mainResponse = await fetch(`http://localhost:3333/`)
    const mainData = await mainResponse.json()
    console.log('✅ Main endpoint:', mainData)
    console.log()

    // Test articles endpoint (might be empty initially)
    console.log('3. Testing demo articles endpoint...')
    const demoResponse = await fetch(`http://localhost:3333/api/demo/articles`)
    const demoData = await demoResponse.json()
    console.log('✅ Demo articles endpoint:', demoData)
    console.log()

    // Test setup instructions
    console.log('4. Testing setup instructions...')
    const setupResponse = await fetch(`http://localhost:3333/api/setup`)
    const setupData = await setupResponse.json()
    console.log('✅ Setup instructions:', setupData)
    console.log()

    // Test status endpoint
    console.log('5. Testing scraper status...')
    const statusResponse = await fetch(`http://localhost:3333/api/status`)
    const statusData = await statusResponse.json()
    console.log('✅ Scraper status:', statusData)
    console.log()

    console.log('🎉 All API endpoints are working!')
  } catch (error) {
    console.error('❌ API test failed:', error.message)

    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure the development server is running:')
      console.log('   npm run dev')
    }
  }
}

// Run the test
testAPI()
