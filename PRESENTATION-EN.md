# News Article Scraping and Automatic Summarization System with Artificial Intelligence

---

## Presented by: [Your Name]

## Higher School of Rabat in Management and Engineering (ESRMI)

## Academic Year: 2024-2025

---

# 2 - Acknowledgments

I would like to express my sincere gratitude to the entire faculty and administrative staff of the Higher School of Rabat in Management and Engineering (ESRMI) for their support throughout my academic journey.

My thanks are particularly addressed to:

**Mrs. Adila BAHALLA**, European Culture teacher, for her exceptional dedication in communicating with students and her caring pedagogy that enriched my understanding of European cultural issues.

**Mr. Younes ELABDY**, for his rigorous supervision and the valuable information he shared with us in a climate of trust and conviviality. His expertise and wise advice greatly contributed to my education.

**Mr. Said ELHANTAOUI**, English professor, for his constant availability, relevant advice, and precious help. His enlightened responses to my questions were decisive for the advancement of my studies and the improvement of my language skills.

I also thank all the professors and administrative staff who contributed, directly or indirectly, to the success of my education and the completion of this final year project.

---

# 3 - Summary

As part of my final year internship at the Higher School of Rabat in Management and Engineering (ESRMI), I developed an innovative solution for **automatic scraping and intelligent summarization of news articles** using artificial intelligence technologies.

## Project Context

In the digital information age, the quantity of news articles published daily on the internet is considerable. Professionals, students, and the general public face the challenge of processing and synthesizing this mass of information in real time. Our solution addresses this need by automating the collection, analysis, and synthesis of articles from recognized media sources.

## Developed Solution

The developed system is a **complete RESTful API** based on the AdonisJS framework that:

- **Automatically collects** articles from prestigious sources (The Verge, CNET, Wired)
- **Generates intelligent summaries** using Google Gemini AI
- **Stores and organizes** data in a high-performance Supabase database
- **Schedules tasks** with an automated cron job system
- **Exposes APIs** for integration with other applications

## Impact and Added Value

This solution brings significant value by allowing users to stay informed efficiently, saving precious time while maintaining a high level of information quality thanks to the synthesis capabilities of modern artificial intelligence.

---

# 4 - Table of Contents

## Table of Contents

**Acknowledgments** ........................................................ Page 2

**Summary** ............................................................. Page 3

**Table of Contents** ........................................................... Page 4

## Chapter 1: Project Framework Presentation ........................ Page 5

1.1. Solution Objective .......................................... Page 6
1.2. Existing Solution Study .............................................. Page 8
1.3. Project Management ................................................ Page 10
1.4. Project Planning .......................................... Page 12
1.5. Requirements Specifications ....................................... Page 14

## Chapter 2: Analysis and Design ................................. Page 16

2.1. Design Tools ............................................. Page 17
2.2. Requirements Specifications ....................................... Page 19
2.2.1. Functional Requirements ........................................ Page 20
2.2.2. Technical Requirements .......................................... Page 22
2.3. Functional Analysis ............................................ Page 24

## Chapter 3: Implementation ........................................... Page 26

3.1. Technical Architecture ........................................... Page 27
3.2. Artificial Intelligence Technologies ........................ Page 28
3.3. Web Scraping System .......................................... Page 29
3.4. Supabase Database ......................................... Page 30
3.5. Testing and Validation .............................................. Page 31

**Conclusion** ......................................................... Page 32

---

# 5 - Chapter 1: Project Framework Presentation

## Project Introduction

In a world where information circulates at unprecedented speed, the ability to quickly process, analyze, and synthesize journalistic content becomes a major issue for businesses, academic institutions, and information professionals.

## Technological Context

The rapid evolution of web technologies and artificial intelligence opens new possibilities for automating complex information processing tasks. Web scraping techniques, combined with advanced language models, now allow the creation of sophisticated content aggregation and analysis solutions.

## Identified Problem

Professionals face several challenges:

- **Information overload**: Growing volume of articles to process daily
- **Limited time**: Need to stay informed despite time constraints
- **Variable quality**: Difficulty identifying the most relevant information
- **Source dispersion**: Multiplication of information platforms

## Project Stakes

This project is part of a technological innovation approach aimed at:

1. **Automating** information collection from reliable sources
2. **Optimizing** information processing time
3. **Improving** synthesis quality through AI
4. **Centralizing** data access via a modern API

## Project Scope

The developed system covers the entire journalistic information processing chain, from automated collection to availability via standardized programming interfaces.

---

# 6 - 1.1 Solution Objective

## General Vision

Develop an **intelligent and automated platform** capable of collecting, processing, and synthesizing in real-time news articles from recognized media sources, exploiting advanced artificial intelligence capabilities to generate professional-quality summaries.

## Main Objectives

### 1. Complete Automation

- **Autonomous collection** of articles from The Verge, CNET, and Wired
- **Continuous processing** without human intervention
- **Intelligent scheduling** of scraping tasks

### 2. Integrated Artificial Intelligence

- **Automatic summaries** generated by Google Gemini
- **Semantic analysis** of article content
- **Optimization** of synthesis quality

### 3. Performance and Scalability

- **High-performance RESTful API**
- **Cloud database** with Supabase
- **Modular and extensible** architecture

### 4. Accessibility and Integration

- **Standardized endpoints** for integration
- **Complete documentation** of the API
- **Demonstration interface** included

## Specific Objectives

- Reduce by **80%** the time for reading and analyzing articles
- Maintain **high accuracy** in generated summaries
- Ensure **24/7 availability** of the service
- Enable **easy deployment** on different environments

## Expected Benefits

- **Productivity gain** for information professionals
- **Automated and efficient** technological monitoring
- **Centralization** of dispersed information sources
- **Consistent quality** of syntheses thanks to AI

---

# 7 - 1.1 Solution Objective (Continued)

## Main Use Cases

### 1. Professional Technology Watch

Technology sector companies can use the system to:

- Monitor market trends
- Analyze competitive innovations
- Stay informed about regulatory developments

### 2. Academic Research

Students and researchers benefit from:

- Quick syntheses of scientific articles
- Identification of emerging topics
- Automated compilation of bibliographies

### 3. Journalism and Media

Media professionals can:

- Conduct competitive monitoring
- Quickly identify trending topics
- Prepare editorial syntheses

### 4. Consulting and Analysis

Consultants use the solution to:

- Produce sector reports
- Analyze market evolution
- Advise their clients on trends

## Success Criteria

### Quantitative Criteria

- **Processing time**: < 30 seconds per article
- **Availability rate**: > 99.5%
- **Summary accuracy**: > 85% user satisfaction
- **Volume processed**: 100+ articles per day

### Qualitative Criteria

- **Relevance** of extracted information
- **Coherence** of generated summaries
- **Ease of integration** into existing workflows
- **Robustness** against site structure changes

---

# 8 - 1.2 Study of Existing Solutions

## Current Market Analysis

### Existing Solutions

#### 1. Traditional Content Aggregators

**Google News, Apple News, Flipboard**

- **Advantages**: Wide coverage, polished user interface
- **Disadvantages**: No automatic summaries, no public API
- **Limitation**: Consumer-oriented, no B2B integration

#### 2. Professional Monitoring Tools

**Mention, Brand24, Hootsuite Insights**

- **Advantages**: Advanced monitoring features
- **Disadvantages**: High cost, complexity of use
- **Limitation**: Focus on social media rather than press

#### 3. Web Scraping Solutions

**Scrapy, Beautiful Soup, Octoparse**

- **Advantages**: Technical flexibility, customization
- **Disadvantages**: Requires technical skills, no integrated AI
- **Limitation**: No turnkey solution

## Identified Opportunities

### 1. Technological Gap

- Lack of solutions combining scraping and AI
- Absence of affordable APIs for SMEs
- Need for sector-specialized solutions

### 2. Evolution of Needs

- Acceleration of digital transformation
- Growing need for automation
- Importance of information reactivity

---

# 9 - 1.2 Study of Existing Solutions (Continued)

## Technical Analysis of Competitors

### 1. Identified Technical Limitations

#### Classic Aggregators

- **Lack of APIs**: Difficult to integrate into third-party applications
- **Absence of customization**: No adaptation to specific needs
- **Limited summaries**: Generally simple excerpts, not true synthesis

#### Existing Scraping Solutions

- **Implementation complexity**: Require expert technical teams
- **Constant maintenance**: Sensitive to target site changes
- **No integrated intelligence**: Raw collection without intelligent processing

### 2. Competitive Advantages of Our Solution

#### Technological Innovation

- **Latest generation AI**: Use of Google Gemini
- **Modern architecture**: AdonisJS and TypeScript
- **Cloud-native**: Designed for cloud with Supabase

#### Integration Ease

- **Standard RESTful API**: Simple integration in any environment
- **Complete documentation**: Reduction of implementation time
- **Flexible endpoints**: Adaptation to different use cases

#### Robustness and Reliability

- **Advanced error handling**: Automatic recovery in case of failure
- **Intelligent rate limiting**: Respect for site policies
- **Integrated monitoring**: Real-time surveillance

## Strategic Positioning

Our solution positions itself as a **modern and accessible alternative** to existing solutions, combining:

- The **ease of use** of consumer aggregators
- The **technical power** of professional tools
- The **AI innovation** of next-generation solutions
- An **accessible economic model** for SMEs and startups

---

# 10 - 1.3 Project Management

## Adopted Methodology

### Adapted Agile Approach

We adopted an **adapted agile methodology** to the academic context and final year project constraints:

#### 1. Weekly Sprints

- **Duration**: 1 week per sprint
- **Objectives**: Specific deliverable features
- **Review**: Weekly progress checkpoint

#### 2. Iterative Development

- **Phase 1**: Architecture and basic services
- **Phase 2**: AI integration and scraping
- **Phase 3**: API and endpoints
- **Phase 4**: Testing and optimization

### Work Organization

#### 1. Initial Planning

- **Requirements analysis**: 1 week
- **Architecture design**: 1 week
- **Core development**: 3 weeks
- **Testing and documentation**: 1 week

#### 2. Risk Management

| Risk                     | Probability | Impact | Mitigation            |
| ------------------------ | ----------- | ------ | --------------------- |
| **API site changes**     | Medium      | High   | Modular architecture  |
| **AI API limits**        | Low         | Medium | Robust error handling |
| **Performance**          | Medium      | Medium | Load testing          |
| **Technical complexity** | High        | High   | Continuous learning   |

## Used Management Tools

### 1. Versioning and Collaboration

- **Git**: Distributed version control
- **GitHub**: Hosting and collaboration
- **Branches**: Feature branching strategy

### 2. Documentation

- **README**: User documentation
- **Code comments**: Technical documentation
- **Diagrams**: Architecture and data flow

### 3. Testing and Quality

- **TypeScript**: Static typing for robustness
- **ESLint**: Static code analysis
- **Unit tests**: Component validation

---

# 11 - 1.3 Project Management (Continued)

## Challenges Encountered and Solutions

### 1. Technical Challenges

#### Managing Source Diversity

- **Problem**: Each site (The Verge, CNET, Wired) has its own HTML structure
- **Solution**: Modular architecture with specialized scrapers per source
- **Result**: Increased flexibility and maintainability

#### AI Integration

- **Problem**: Managing Google Gemini API limits and costs
- **Solution**: Fallback system and robust error handling
- **Result**: Reliable service even in case of API problems

#### Performance and Scalability

- **Problem**: Mass article processing can be slow
- **Solution**: Asynchronous processing and intelligent caching
- **Result**: Optimized response times

### 2. Management Challenges

#### Time Constraints

- **Problem**: Tight academic deadlines
- **Solution**: Prioritization of essential features (MVP)
- **Result**: On-time delivery with quality

#### Technological Complexity

- **Problem**: Advanced technical stack to master
- **Solution**: Progressive training and extensive documentation
- **Result**: Efficient skill development

## Lessons Learned

### 1. Importance of Architecture

A **well-thought architecture** from the beginning prevents many maintenance and evolution problems.

### 2. Continuous Testing

**Regular testing** during development is essential to maintain quality.

### 3. Documentation

**Up-to-date documentation** greatly facilitates maintenance and future evolutions.

---

# 12 - 1.4 Project Planning

## General Project Timeline

### Phase 1: Analysis and Design (Weeks 1-2)

#### Week 1: Preliminary Study

- **Monday-Tuesday**: Market analysis and existing solutions
- **Wednesday-Thursday**: Requirements definition and specifications
- **Friday**: Scope and objectives validation

#### Week 2: Detailed Design

- **Monday-Tuesday**: Technical architecture and technology choices
- **Wednesday-Thursday**: Database modeling
- **Friday**: Technical specifications finalization

### Phase 2: Core Development (Weeks 3-5)

#### Week 3: Basic Infrastructure

- **Foundation services**: SupabaseService, environment configuration
- **Data models**: Article, TypeScript interfaces
- **AdonisJS architecture**: Controllers, basic routes

#### Week 4: AI and Scraping Integration

- **AIService**: Google Gemini integration
- **ScraperService**: Development of scrapers per source
- **Unit tests**: Core services validation

#### Week 5: API and Orchestration

- **ArticlesController**: Complete RESTful endpoints
- **CronService**: Automation and scheduling
- **Error handling**: Robustness and reliability

### Phase 3: Testing and Finalization (Week 6)

#### Testing and Optimization

- **Integration tests**: End-to-end validation
- **Performance tests**: Query optimization
- **Documentation**: README and usage guide
- **Deployment**: Production preparation

---

# 13 - 1.4 Project Planning (Continued)

## Simplified Gantt Chart

```
Weeks      1    2    3    4    5    6
          ----+----+----+----+----+----
Analysis   ████████
Design          ████████
Services           ████████
AI/Scraping             ████████
API                          ████████
Testing                           ████████
```

## Important Milestones

### Technical Milestones

#### M1 - End Week 2: Validated Architecture

- ✅ Finalized technical specifications
- ✅ Confirmed technology stack
- ✅ Approved data model

#### M2 - End Week 3: Basic Services

- ✅ Operational Supabase connection
- ✅ AdonisJS structure in place
- ✅ First unit tests

#### M3 - End Week 4: Major Integrations

- ✅ Functional Google Gemini AI
- ✅ Operational multi-source scraping
- ✅ Complete processing pipeline

#### M4 - End Week 5: Complete API

- ✅ All endpoints implemented
- ✅ Automated cron jobs
- ✅ Robust error handling

#### M5 - End Week 6: Finalized Project

- ✅ Successful validation tests
- ✅ Complete documentation
- ✅ Ready for demonstration

### Validation Criteria

#### Functional Criteria

- Automatic scraping of 3 sources
- AI summary generation
- Complete and documented RESTful API

#### Technical Criteria

- Typed and tested TypeScript code
- Modular and extensible architecture
- Comprehensive error handling

#### Quality Criteria

- Clear user documentation
- Commented and maintainable code
- Successful validation tests

---

# 14 - 1.5 Requirements Specifications

## User Requirements Analysis

### 1. Target User Profiles

#### Developers and Integrators

- **Needs**: Simple and well-documented API
- **Expectations**: Standardized JSON responses, clear error handling
- **Constraints**: Compatibility with different languages and frameworks

#### Information Professionals

- **Needs**: Quick access to latest tech news
- **Expectations**: Accurate and synthetic summaries
- **Constraints**: Reliability and freshness of information

#### Companies and Startups

- **Needs**: Automated competitive monitoring
- **Expectations**: Economic and scalable solution
- **Constraints**: Easy integration into existing infrastructure

### 2. Main Functional Requirements

#### FR1: Automatic Article Collection

- **Description**: The system must automatically collect articles from The Verge, CNET, and Wired
- **Criteria**: Minimum 20 articles per source per day
- **Priority**: Essential

#### FR2: AI Summary Generation

- **Description**: Each collected article must be summarized by AI
- **Criteria**: 100-200 word summary, coherent and informative
- **Priority**: Essential

#### FR3: Complete RESTful API

- **Description**: Exposure of all services via REST API
- **Criteria**: Complete CRUD, search, filtering by source
- **Priority**: Essential

#### FR4: Automatic Scheduling

- **Description**: Automation of scraping tasks
- **Criteria**: Configurable cron jobs, error handling
- **Priority**: Important

#### FR5: Duplicate Management

- **Description**: Avoid duplicate articles
- **Criteria**: URL detection, storage optimization
- **Priority**: Important

---

# 15 - 1.5 Requirements Specifications (Continued)

## Non-Functional Requirements

### 1. Performance

- **API response time**: < 2 seconds for simple queries
- **Article processing**: < 30 seconds per article (scraping + AI)
- **Capacity**: Support for 1000+ articles in database
- **Concurrency**: 10+ simultaneous requests

### 2. Reliability and Availability

- **Uptime**: 99%+ (production target)
- **Error recovery**: Automatic with retry logic
- **Failure handling**: Fallback and explicit error messages
- **Monitoring**: Detailed logs for debugging

### 3. Security

- **API protection**: Rate limiting to prevent abuse
- **Sensitive data**: Secure environment variables
- **Validation**: User input sanitization
- **CORS**: Appropriate configuration for cross-origin calls

### 4. Maintainability

- **Code quality**: TypeScript with strict typing
- **Architecture**: Modular and extensible
- **Documentation**: Commented code and detailed README
- **Tests**: Coverage of critical functionalities

### 5. Scalability

- **New sources**: Easy addition of new sites to scrape
- **AI APIs**: Ability to change AI provider
- **Scaling**: Architecture ready for horizontal scaling
- **Features**: Extensibility for new functionalities

## Technical Constraints

### 1. Environmental Constraints

- **Runtime**: Node.js 18+
- **Database**: Compatible Supabase/PostgreSQL
- **External APIs**: Google Gemini, public websites
- **Deployment**: Cloud compatible (Heroku, Vercel, etc.)

### 2. Development Constraints

- **Language**: TypeScript mandatory
- **Framework**: AdonisJS v6
- **Code quality**: ESLint, automatic formatting
- **Versioning**: Git with dedicated branches

---

# 16 - Chapter 2: Analysis and Design

## Introduction to Analysis and Design

The analysis and design phase constitutes the **strategic heart** of our project. It transforms identified needs into robust technical architecture and optimized software design.

## Methodological Approach

### 1. Top-Down Analysis

We adopted a **top-down approach** starting from global user needs to descend to technical implementation details:

- **System Level**: Global architecture and data flow
- **Service Level**: Decomposition into business services
- **Component Level**: Detail of classes and interfaces
- **Implementation Level**: Specific technical choices

### 2. Service-Oriented Design

The architecture follows **SOA principles** (Service-Oriented Architecture) adapted to the context of a modern application:

- **Separation of responsibilities**: Each service has a defined role
- **Loose coupling**: Independent and interchangeable services
- **High cohesion**: Related functionalities logically grouped
- **Reusability**: Services designed to be reused

### 3. Applied Design Patterns

#### Repository Pattern

- **Objective**: Data access layer abstraction
- **Implementation**: SupabaseService as unified repository
- **Advantage**: Facilitates testing and database changes

#### Service Layer Pattern

- **Objective**: Business logic encapsulation
- **Implementation**: AIService, ScraperService, CronService
- **Advantage**: Clear separation between business logic and presentation

#### Factory Pattern

- **Objective**: Complex object creation
- **Implementation**: Factory for specialized scrapers
- **Advantage**: Extensibility for new sources

## Architecture Overview

Our solution is structured around **four main layers**:

1. **Presentation Layer**: REST API and controllers
2. **Business Logic Layer**: Specialized services
3. **Integration Layer**: External connectors (AI, scraping)
4. **Data Layer**: Supabase and data models

---

# 17 - 2.1 Design Tools

## Used Modeling Tools

### 1. UML Diagrams

#### Class Diagram

```
┌─────────────────┐    ┌─────────────────┐
│   Article       │    │ ArticleService  │
├─────────────────┤    ├─────────────────┤
│ + id: string    │◄───┤ + getArticles() │
│ + title: string │    │ + searchArticles│
│ + url: string   │    │ + createArticle │
│ + content: text │    └─────────────────┘
│ + summary: text │
│ + source: string│
│ + createdAt     │
└─────────────────┘
```

#### Sequence Diagram - Scraping Process

```
User → CronService → ScraperService → AIService → SupabaseService
  │         │            │              │            │
  │    startScrape()     │              │            │
  │         │       scrapeAll()         │            │
  │         │            │    generateSummary()     │
  │         │            │              │       saveArticle()
  │         │            │              │            │
  │         │       ◄────────────────────────────────┘
  │    ◄────┘
```

### 2. Layered Architecture

#### Architecture Diagram

```
┌─────────────────────────────────────────────┐
│           PRESENTATION LAYER                │
│  ArticlesController │ DemoController        │
├─────────────────────────────────────────────┤
│           BUSINESS LOGIC LAYER              │
│ ScraperService │ AIService │ CronService    │
├─────────────────────────────────────────────┤
│           INTEGRATION LAYER                 │
│ Puppeteer │ Cheerio │ Google Gemini        │
├─────────────────────────────────────────────┤
│           DATA LAYER                        │
│        SupabaseService │ PostgreSQL         │
└─────────────────────────────────────────────┘
```

### 3. Data Flow

#### Processing Pipeline

```
[Websites] → [Scraping] → [Extraction] → [AI] → [Storage] → [API]
     │            │           │           │         │         │
  The Verge   Puppeteer   Cheerio    Gemini   Supabase    REST
   CNET       Browser     Parser      AI       Database    JSON
   Wired      Automation  Content   Summary   PostgreSQL  Endpoints
```

## Development Tools

### 1. Development Environment

- **IDE**: Visual Studio Code
- **Extensions**: TypeScript, AdonisJS, ESLint
- **Terminal**: Git and npm integration

### 2. Database Design Tools

- **Supabase Dashboard**: Graphical interface for DB
- **SQL Scripts**: Creation and migration scripts
- **Modeling**: Relationships and constraints

---

# 18 - 2.1 Design Tools (Continued)

## Adopted Standards and Conventions

### 1. Naming Conventions

#### TypeScript/JavaScript

```typescript
// Classes: PascalCase
class ScraperService { }

// Methods and variables: camelCase
async scrapeArticles() { }
const articleData = {};

// Constants: UPPER_SNAKE_CASE
const MAX_ARTICLES_PER_SOURCE = 10;

// Interfaces: PascalCase with I prefix or Interface suffix
interface ArticleData { }
```

#### Database

```sql
-- Tables: snake_case plural
CREATE TABLE articles (
  -- Columns: snake_case
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### 2. File Architecture

#### Services Structure

```
app/services/
├── ai_service.ts          # Gemini AI service
├── scraper_service.ts     # Web scraping service
├── supabase_service.ts    # Database service
└── cron_service.ts        # Scheduling service
```

#### Controllers Structure

```
app/controllers/
├── articles_controller.ts # Articles API
└── demo_controller.ts     # Demonstrations
```

### 3. Error Handling Patterns

#### Systematic Try-Catch

```typescript
async someMethod() {
  try {
    // Business logic
    return successResponse;
  } catch (error) {
    console.error('Error details:', error);
    return errorResponse;
  }
}
```

#### Input Validation

```typescript
if (!query) {
  return response.badRequest({
    success: false,
    message: 'Query parameter is required',
  })
}
```

## Technical Documentation

### 1. Code Documentation

- **JSDoc**: Standardized comments for methods
- **README**: Installation and usage guide
- **API Docs**: Endpoint documentation

### 2. Data Schemas

- **TypeScript Interfaces**: Strong data typing
- **Supabase Schemas**: Documented database structure
- **JSON Examples**: API response formats

---

# 19 - 2.2 Detailed Requirements Specifications

## In-Depth Requirements Analysis

### 1. Stakeholder Mapping

#### Primary Actors

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Developer     │    │   IT Company    │    │   Researcher    │
│                 │    │                 │    │                 │
│ • Simple API    │    │ • Auto watch    │    │ • Syntheses     │
│ • Documentation │    │ • Integration   │    │ • Tech trends   │
│ • Reliability   │    │ • Scalability   │    │ • Bibliography  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

#### Secondary Actors

```
┌─────────────────┐    ┌─────────────────┐
│  Source Sites   │    │  AI Services    │
│                 │    │                 │
│ • The Verge     │    │ • Google Gemini │
│ • CNET          │    │ • External APIs │
│ • Wired         │    │ • Rate limits   │
└─────────────────┘    └─────────────────┘
```

### 2. Detailed Use Case Scenarios

#### Scenario 1: Developer Integrates API

```
1. Developer consults documentation
2. Obtains available endpoints
3. Tests with curl/Postman
4. Integrates into application
5. Handles JSON responses
```

#### Scenario 2: Company Automated Watch

```
1. Company configures cron jobs
2. System scrapes automatically
3. AI summaries are generated
4. Data is stored
5. Teams access via dashboard
```

#### Scenario 3: Academic Research

```
1. Researcher searches by keywords
2. System filters relevant articles
3. Obtains structured summaries
4. Exports data for analysis
5. Cites original sources
```

### 3. Traceability Matrix

| User Need             | Functional Requirement | Technical Service  | Validation Test      |
| --------------------- | ---------------------- | ------------------ | -------------------- |
| Recent article access | FR1 - Auto collection  | ScraperService     | Scraping test        |
| Intelligent summaries | FR2 - Gemini AI        | AIService          | Summary quality test |
| Easy integration      | FR3 - REST API         | ArticlesController | Endpoints test       |
| Auto update           | FR4 - Cron jobs        | CronService        | Scheduling test      |

---

# 20 - 2.2.1 Detailed Functional Requirements

## Complete Functional Requirements Catalog

### Group 1: Collection and Extraction

#### FR-01: Multi-Source Scraping

- **Description**: Automatically collect articles from 3 sources
- **Sources**: The Verge, CNET, Wired
- **Frequency**: Configurable (default: daily)
- **Volume**: 10+ articles per source
- **Quality criteria**: Recent articles (< 24h), substantial content

#### FR-02: Content Extraction

- **Description**: Extract complete textual content from articles
- **Elements**: Title, URL, main content, publication date
- **Filtering**: Removal of ads, menus, non-relevant elements
- **Format**: Structured plain text

#### FR-03: Robustness Management

- **Description**: Handle scraping failures and structure changes
- **Retry logic**: 3 attempts with exponential backoff
- **Fallback**: Explicit error messages
- **Adaptation**: Automatic detection of structure changes

### Group 2: Artificial Intelligence

#### FR-04: Summary Generation

- **Description**: Produce intelligent summaries via Google Gemini
- **Length**: 100-200 optimal words
- **Quality**: Preservation of key information
- **Coherence**: Professional journalistic style
- **Language**: French or source language based on configuration

#### FR-05: AI Optimization

- **Description**: Optimize API calls and manage limits
- **Rate limiting**: Respect Google Gemini quotas
- **Caching**: Avoid redundant calls
- **Fallback**: Basic summary generation if AI unavailable

### Group 3: Storage and Search

#### FR-06: Data Persistence

- **Description**: Save all articles and metadata
- **Deduplication**: Avoid duplicates by URL
- **Indexing**: Search optimization
- **History**: Preservation of modification history

#### FR-07: Advanced Search

- **Description**: Full-text search in articles
- **Criteria**: Title, content, summary, source
- **Filters**: By source, date, length
- **Performance**: Results < 2 seconds

---

# 21 - 2.2.1 Functional Requirements (Continued)

### Group 4: API and Integration

#### FR-08: Complete RESTful API

- **Description**: Expose all functionalities via REST API
- **Endpoints**:
  - `GET /api/articles` - Paginated list
  - `GET /api/articles/search` - Search
  - `GET /api/articles/source/:source` - By source
  - `GET /api/articles/latest` - Most recent
  - `POST /api/scrape` - Manual trigger
  - `GET /api/status` - System status

#### FR-09: Response Formats

- **Description**: JSON response standardization
- **Structure**:

```json
{
  "success": boolean,
  "data": object|array,
  "message": string,
  "pagination": object
}
```

#### FR-10: API Error Handling

- **Description**: Appropriate HTTP error codes and explicit messages
- **Codes**: 200, 400, 404, 500 with descriptions
- **Logging**: Complete error traceability

### Group 5: Automation

#### FR-11: Automatic Scheduling

- **Description**: Automatic execution of scraping tasks
- **Configuration**: Configurable cron jobs
- **Monitoring**: Real-time job status
- **Recovery**: Automatic restart on failure

#### FR-12: Monitoring and Logs

- **Description**: System monitoring and detailed logging
- **Metrics**: Number of processed articles, processing time, errors
- **Alerts**: Notification in case of problems
- **History**: Persistent logs for debugging

### Group 6: Configuration and Administration

#### FR-13: Flexible Configuration

- **Description**: Configuration via environment variables
- **Parameters**: API keys, scraping intervals, limits
- **Validation**: Configuration verification at startup
- **Documentation**: Complete configuration guide

#### FR-14: Demonstration Mode

- **Description**: Operation with demonstration data
- **Objective**: Testing without configured external APIs
- **Data**: Pre-loaded example articles
- **Endpoints**: `/api/demo/*` for demonstrations

---

# 22 - 2.2.2 Detailed Technical Requirements

## Infrastructure and Performance

### Group 1: Technical Architecture

#### TR-01: Technology Stack

- **Framework**: AdonisJS v6 (Node.js/TypeScript)
- **Database**: Supabase (PostgreSQL cloud)
- **AI**: Google Gemini API
- **Scraping**: Puppeteer + Cheerio
- **Scheduling**: node-cron

#### TR-02: Code Quality

- **Typing**: TypeScript strict mode
- **Linting**: ESLint with strict rules
- **Formatting**: Automatic Prettier
- **Tests**: Critical services coverage

#### TR-03: Modular Architecture

- **Separation**: Distinct layers (controllers, services, models)
- **Injection**: Dependencies injected via AdonisJS container
- **Extensibility**: Easy addition of new sources/functionalities

### Group 2: Performance and Scalability

#### TR-04: Target Performance

- **API response**: < 2 seconds for simple queries
- **Article processing**: < 30 seconds (scraping + AI)
- **Concurrency**: 10+ simultaneous requests
- **Memory**: < 512 MB normal usage

#### TR-05: Optimizations

- **Caching**: Caching of frequent results
- **Pagination**: Results limitation per page
- **Asynchronous**: Non-blocking processing
- **Rate limiting**: Protection against abuse

#### TR-06: Performance Monitoring

- **Metrics**: Response time, memory/CPU usage
- **Profiling**: Bottleneck identification
- **Alerts**: Configurable performance thresholds

### Group 3: Security and Reliability

#### TR-07: Security

- **Environment variables**: Protected secrets
- **Input validation**: User data sanitization
- **CORS**: Appropriate cross-origin configuration
- **Rate limiting**: Basic DDoS protection

#### TR-08: Error Handling

- **Try-catch**: Systematic encapsulation
- **Logging**: Complete error traceability
- **Fallback**: Graceful degradation
- **Recovery**: Automatic recovery when possible

---

# 23 - 2.2.2 Technical Requirements (Continued)

### Group 4: Integration and APIs

#### TR-09: External Integrations

- **Google Gemini**: Quota management and authentication
- **Websites**: Adaptation to structure changes
- **Supabase**: PostgreSQL query optimization
- **Resilience**: Appropriate timeout and retry logic

#### TR-10: Compatibility

- **Node.js**: Version 18+ LTS
- **Browsers**: Standard REST API support
- **Cloud**: Deployable on Heroku, Vercel, AWS
- **Environments**: Development, staging, production

### Group 5: Maintenance and Evolution

#### TR-11: Maintainability

- **Documentation**: Self-documented code and detailed README
- **Structure**: Logical file organization
- **Debugging**: Detailed logs and stack traces
- **Refactoring**: Architecture facilitating modifications

#### TR-12: Scalability

- **New sources**: Easy addition of scrapers
- **New APIs**: AI provider change
- **New features**: Extension without regression
- **Migration**: Backward compatibility

## Specific Technical Constraints

### External Constraints

- **Site rate limiting**: Respect for robots.txt and policies
- **AI API quotas**: Google Gemini limits management
- **Network stability**: Timeout and connection handling
- **Changing formats**: Adaptation to site evolutions

### Internal Constraints

- **Limited resources**: Memory and CPU optimization
- **Development time**: Essential features prioritization
- **Technical skills**: Modern but accessible stack
- **Budget**: Free or low-cost solutions preferred

---

# 24 - 2.3 Functional Analysis

## Business Process Modeling

### 1. Main Process: Article Lifecycle

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Detection  │───▶│ Extraction  │───▶│ Processing  │───▶│   Storage   │
│             │    │             │    │             │    │             │
│ • Crawling  │    │ • Scraping  │    │ • AI Summary│    │ • Supabase  │
│ • Novelty   │    │ • Parsing   │    │ • Validation│    │ • Indexing  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 2. Detailed Data Flow

#### Phase 1: Discovery and Collection

```
Source Sites → Puppeteer → HTML Parser → Metadata Extraction
     │              │           │                │
 Page Lists     Browser      Cheerio         Article Objects
   (HTML)      Automation    Parsing         (TypeScript)
```

#### Phase 2: AI Enrichment

```
Raw Article → Validation → Gemini API → Generated Summary → Enriched Article
     │            │           │             │              │
 Raw Content   Sanitize    AI Request    AI Response    Complete Object
```

#### Phase 3: Persistence and Access

```
Final Article → Deduplication → DB Storage → Indexing → API Access
     │              │              │            │            │
Complete Data   Check Existing   Supabase    Search Index   REST JSON
```

### 3. Interaction Matrix

| Component           | ScraperService | AIService           | SupabaseService | CronService  |
| ------------------- | -------------- | ------------------- | --------------- | ------------ |
| **ScraperService**  | -              | Calls for summaries | Saves articles  | Triggered by |
| **AIService**       | Used by        | -                   | -               | -            |
| **SupabaseService** | Stores for     | -                   | -               | -            |
| **CronService**     | Orchestrates   | Via Scraper         | Via Scraper     | -            |

---

# 25 - 2.3 Functional Analysis (Continued)

## Complex Use Case Analysis

### Use Case 1: Intelligent Multi-Source Scraping

#### Actors

- **Primary**: CronService (automatic)
- **Secondary**: ScraperService, AIService, SupabaseService

#### Preconditions

- Services configured with API keys
- Stable internet connection
- Accessible database

#### Main Scenario

1. **Trigger**: Cron job activates scraping
2. **Parallel collection**: Simultaneous scraping of 3 sources
3. **Filtering**: Elimination of duplicates and non-relevant content
4. **Enrichment**: AI summary generation for each article
5. **Persistence**: Save with duplicate verification
6. **Notification**: Success/failure logging

#### Alternative Scenarios

- **Site failure**: Continue with available sources
- **AI failure**: Save without summary, retry later
- **DB failure**: Retry with exponential backoff

### Use Case 2: Advanced User Search

#### Actors

- **Primary**: User/Client Application
- **Secondary**: ArticlesController, SupabaseService

#### Preconditions

- Articles present in database
- Accessible API

#### Main Scenario

1. **Request**: Client sends search request
2. **Validation**: Parameter verification
3. **Search**: Full-text search in database
4. **Pagination**: Limits application
5. **Formatting**: Standardized JSON serialization
6. **Response**: Results return

#### Optimizations

- **Cache**: Caching of frequent searches
- **Index**: Use of PostgreSQL indexes
- **Filters**: Pre-filtering by source/date

---

# 26 - Chapter 3: Implementation

## Implementation Overview

The implementation phase transforms our design into an **operational solution** by exploiting a modern and robust technology stack. This implementation follows a **modular and scalable approach** ensuring system maintainability and evolvability.

## Global Technical Architecture

### Chosen Technology Stack

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND/API                         │
│               AdonisJS v6 + TypeScript                  │
├─────────────────────────────────────────────────────────┤
│                  BUSINESS SERVICES                      │
│    ScraperService │ AIService │ SupabaseService         │
├─────────────────────────────────────────────────────────┤
│                 INTEGRATIONS                            │
│  Puppeteer │ Cheerio │ Google Gemini │ Node-Cron       │
├─────────────────────────────────────────────────────────┤
│                   DATA                                  │
│              Supabase (PostgreSQL)                      │
└─────────────────────────────────────────────────────────┘
```

### Technical Choice Justification

#### AdonisJS + TypeScript

- **Robustness**: Enterprise framework with native TypeScript
- **Productivity**: Convention over configuration
- **Modern**: ES modules support, native async/await
- **Ecosystem**: Integrated ORM, validation, middleware

#### Supabase

- **Simplicity**: Managed PostgreSQL with auto-generated API
- **Performance**: Optimized indexes, fast queries
- **Security**: Integrated RLS (Row Level Security)
- **Cost**: Generous free tier for development

#### Google Gemini

- **Quality**: Latest generation AI
- **Reliability**: Robust Google infrastructure
- **Cost**: Accessible freemium model
- **Innovation**: Regular model updates

## Implementation Principles

### 1. Separation of Responsibilities

Each service has a **unique and well-defined role**:

- **ScraperService**: Collection and extraction only
- **AIService**: AI processing exclusively
- **SupabaseService**: Persistence and queries only
- **CronService**: Orchestration and scheduling

### 2. Robust Error Handling

**Systematic try-catch** with detailed logging and intelligent fallbacks to ensure service continuity even in case of partial problems.

### 3. Externalized Configuration

All configuration via **environment variables** to facilitate multi-environment deployment and security.

---

# 27 - 3.1 Detailed Technical Architecture

## Layered Architecture

### Presentation Layer (API Layer)

#### ArticlesController

```typescript
export default class ArticlesController {
  // Standard RESTful endpoints
  async index() // GET /api/articles
  async search() // GET /api/articles/search
  async bySource() // GET /api/articles/source/:source
  async latest() // GET /api/articles/latest
  async scrape() // POST /api/scrape
  async status() // GET /api/status
}
```

**Responsibilities**:

- Input parameter validation
- Service call orchestration
- Standardized JSON response formatting
- HTTP status code handling

### Business Logic Layer

#### Main Services

**SupabaseService** - Data Manager

```typescript
class SupabaseService {
  async createArticle(data: ArticleData)
  async getArticles(limit: number, offset: number)
  async searchArticles(query: string, limit: number)
  async getArticlesBySource(source: string, limit: number)
  async getArticleByUrl(url: string)
}
```

**ScraperService** - Article Collector

```typescript
class ScraperService {
  async scrapeAllSources(): Promise<void>
  async scrapeSource(source: string): Promise<void>
  private async scrapeTheVerge(): Promise<ScrapedArticle[]>
  private async scrapeCNET(): Promise<ScrapedArticle[]>
  private async scrapeWired(): Promise<ScrapedArticle[]>
}
```

**AIService** - Intelligent Processor

```typescript
class AIService {
  async generateSummary(content: string, title: string): Promise<string>
  private async callGeminiAPI(prompt: string): Promise<string>
  private formatPrompt(content: string, title: string): string
}
```

### Implemented Architectural Patterns

#### 1. Repository Pattern

The `SupabaseService` acts as a unified repository, abstracting data access complexity and facilitating unit testing.

#### 2. Factory Pattern

Source-specialized scrapers allow easy extensibility to new sources.

#### 3. Observer Pattern

The cron job system observes and triggers scraping tasks according to schedule.

---

# 28 - 3.2 Artificial Intelligence Technologies

## Google Gemini Integration

### Configuration and Authentication

#### API Setup

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai'

export class AIService {
  private genAI: GoogleGenerativeAI
  private model: any

  constructor() {
    this.genAI = new GoogleGenerativeAI(env.get('GEMINI_API_KEY'))
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' })
  }
}
```

### Prompt Optimization

#### Optimized Prompt Template

```typescript
private formatPrompt(content: string, title: string): string {
  return `
    Analyze the following article and generate a professional summary of 100-150 words.

    Title: ${title}

    Content: ${content.substring(0, 4000)}

    Summary requirements:
    - Preserve key information
    - Professional journalistic style
    - Logical and coherent structure
    - Accessible but precise language

    Summary:
  `;
}
```

### API Limitations Management

#### Rate Limiting and Retry Logic

```typescript
async generateSummary(content: string, title: string): Promise<string> {
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const prompt = this.formatPrompt(content, title);
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        return this.generateFallbackSummary(content);
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}
```

### AI Metrics and Monitoring

#### Quality Tracking

- **Average length** of generated summaries
- **Processing time** per article
- **Success rate** of API calls
- **Estimated cost** per usage

#### Continuous Optimizations

- **A/B Testing** of different prompts
- **Feedback loop** to improve quality
- **Intelligent cache** to avoid redundant calls

---

# 29 - 3.3 Web Scraping System

## Scraping Technologies

### Puppeteer + Cheerio Stack

#### Puppeteer for Automation

```typescript
private async scrapeTheVerge(): Promise<ScrapedArticle[]> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto('https://www.theverge.com', {
      waitUntil: 'networkidle2'
    });
    const html = await page.content();
    const $ = cheerio.load(html);
    // Parsing with Cheerio...
  } finally {
    await browser.close();
  }
}
```

#### Cheerio for Extraction

```typescript
$('article h2 a, article h3 a').each((_, element) => {
  const $element = $(element)
  const title = $element.text().trim()
  const url = $element.attr('href')

  if (title && url) {
    articles.push({
      title,
      url: url.startsWith('http') ? url : `https://www.theverge.com${url}`,
      source: 'The Verge',
      publishedAt: new Date(),
    })
  }
})
```

### Source-Specific Strategies

#### The Verge

- **Selectors**: `article h2 a, article h3 a`
- **Challenge**: Dynamic structure with JavaScript
- **Solution**: Puppeteer for complete rendering

#### CNET

- **Selectors**: `article h3 a, .latestScrollItems h4 a`
- **Challenge**: Lazy loading of articles
- **Solution**: Network loading wait

#### Wired

- **Selectors**: `.summary-item__hed a, article h3 a`
- **Challenge**: Paywall and restricted content
- **Solution**: Public teaser extraction

### Robustness and Resilience

#### Failure Handling

```typescript
try {
  const articles = await this.scrapeTheVerge()
  return articles
} catch (error) {
  console.error('Error scraping The Verge:', error)
  return [] // Graceful return
}
```

#### Adaptation to Changes

- **Multiple selectors**: Fallback if structure changes
- **Content validation**: Quality verification
- **Monitoring**: Alerts in case of volume decrease

---

# 30 - 3.4 Supabase Database

## Data Architecture

### Database Schema

#### Articles Table

```sql
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT UNIQUE NOT NULL,
  content TEXT,
  summary TEXT,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

#### Performance Indexes

```sql
-- Full-text search
CREATE INDEX articles_search_idx ON articles
USING gin(to_tsvector('english', title || ' ' || content || ' ' || summary));

-- Source and date filtering
CREATE INDEX articles_source_date_idx ON articles(source, created_at DESC);

-- URL search (deduplication)
CREATE UNIQUE INDEX articles_url_idx ON articles(url);
```

### Data Service

#### CRUD Operations

```typescript
export class SupabaseService {
  private supabase: SupabaseClient

  async createArticle(data: ArticleData): Promise<Article> {
    const { data: article, error } = await this.supabase
      .from('articles')
      .insert(data)
      .select()
      .single()

    if (error) throw error
    return article
  }

  async searchArticles(query: string, limit: number = 10): Promise<Article[]> {
    const { data, error } = await this.supabase
      .from('articles')
      .select('*')
      .textSearch('title,content,summary', query)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data || []
  }
}
```

### Performance Optimizations

#### Efficient Pagination

```typescript
async getArticles(limit: number, offset: number): Promise<Article[]> {
  const { data, error } = await this.supabase
    .from('articles')
    .select('id, title, summary, source, created_at, url')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  return data || [];
}
```

#### Intelligent Deduplication

```typescript
async getArticleByUrl(url: string): Promise<Article | null> {
  const { data, error } = await this.supabase
    .from('articles')
    .select('*')
    .eq('url', url)
    .single();

  return error ? null : data;
}
```

---

# 31 - 3.5 Testing and Validation

## Testing Strategy

### Unit Tests

#### Service Tests

```typescript
// AIService Test
describe('AIService', () => {
  it('should generate summary for valid content', async () => {
    const aiService = new AIService()
    const content = 'Sample article content...'
    const title = 'Test Article'

    const summary = await aiService.generateSummary(content, title)

    expect(summary).toBeDefined()
    expect(summary.length).toBeGreaterThan(50)
  })
})

// SupabaseService Test
describe('SupabaseService', () => {
  it('should create and retrieve articles', async () => {
    const service = new SupabaseService()
    const articleData = {
      title: 'Test Article',
      url: 'https://test.com/article',
      content: 'Test content',
      source: 'Test Source',
    }

    const created = await service.createArticle(articleData)
    const retrieved = await service.getArticleByUrl(articleData.url)

    expect(retrieved?.title).toBe(articleData.title)
  })
})
```

### Integration Tests

#### Complete Pipeline Test

```typescript
describe('Complete Article Pipeline', () => {
  it('should scrape, process and store articles', async () => {
    const scraperService = new ScraperService()

    // Test on one source
    await scraperService.scrapeSource('theverge')

    // Verify articles were created
    const supabaseService = new SupabaseService()
    const articles = await supabaseService.getArticlesBySource('The Verge', 5)

    expect(articles.length).toBeGreaterThan(0)
    expect(articles[0].summary).toBeDefined()
  })
})
```

### Performance Tests

#### Benchmarking

```typescript
describe('Performance Tests', () => {
  it('should handle concurrent requests', async () => {
    const startTime = Date.now()

    const promises = Array(10)
      .fill(0)
      .map(() => request(app).get('/api/articles').expect(200))

    await Promise.all(promises)

    const duration = Date.now() - startTime
    expect(duration).toBeLessThan(5000) // < 5 seconds
  })
})
```

### Manual Validation

#### API Tests with curl

```bash
# Basic test
curl -X GET "http://localhost:3333/api/articles" \
  -H "Accept: application/json"

# Search test
curl -X GET "http://localhost:3333/api/articles/search?q=AI&limit=5" \
  -H "Accept: application/json"

# Manual scraping test
curl -X POST "http://localhost:3333/api/scrape" \
  -H "Content-Type: application/json"
```

#### Quality Metrics

- **Code coverage**: >80% for critical services
- **Response time**: <2s for API queries
- **Success rate**: >95% for scraping
- **Summary quality**: Manual validation on sample

---

# 32 - Conclusion

## Project Assessment

### Achieved Objectives

This final year project has successfully **developed** a complete and innovative solution for automatic news article scraping and summarization. The **initial objectives have been fully realized**:

✅ **Complete automation**: Autonomous collection from 3 major sources  
✅ **Integrated artificial intelligence**: Quality summaries via Google Gemini  
✅ **Modern RESTful API**: Standardized and documented interface  
✅ **Robust architecture**: Scalable and maintainable solution  
✅ **Comprehensive documentation**: Complete guide for users and developers

### Technical and Educational Contributions

#### Developed Skills

- **Modern technology mastery**: AdonisJS, TypeScript, Supabase
- **AI integration**: Practical use of advanced language models
- **Advanced web scraping**: Robust techniques with Puppeteer and Cheerio
- **Software architecture**: Modular design and advanced patterns
- **DevOps and deployment**: Cloud configuration and automation

#### Overcome Technical Challenges

- **Complexity management**: Coherent multi-service architecture
- **Robustness**: Error handling and automatic recovery
- **Performance**: Optimization for mass processing
- **Integration**: Coordination of multiple external APIs

### Added Value and Innovation

#### Technological Innovation

Our solution is distinguished by **native AI integration** in an automated scraping pipeline, creating a complete value chain from raw collection to synthesized and exploitable information.

#### Practical Impact

The developed system addresses a **real market need** by proposing a modern, accessible, and performant alternative to existing solutions, particularly adapted to SMEs and startups.

### Evolution Perspectives

#### Functional Extensions

- **New sources**: Integration of other news sites
- **Sentiment analysis**: Addition of sentiment analysis
- **Automatic categorization**: Intelligent article classification
- **Notifications**: Real-time alerts on specific topics

#### Technical Improvements

- **Advanced caching**: Redis for performance
- **Complete monitoring**: Detailed metrics and dashboards
- **GraphQL API**: REST alternative for more flexibility
- **Containerization**: Dockerization to facilitate deployment

### Acknowledgments and Recognition

This project could not have succeeded without the **excellence of education** provided at ESRMI and the **caring support** of the faculty. The skills acquired in management, engineering, and modern technologies were decisive in the success of this achievement.

The school's **innovative pedagogical approach**, combining theory and practice, made it possible to approach this complex project with confidence and method, applying industry best practices.

### General Conclusion

This project perfectly illustrates the **convergence between quality academic education and technological innovation**. It demonstrates that with the right theoretical foundations and appropriate guidance, it is possible to create sophisticated technical solutions addressing contemporary issues of digital transformation.

The **Higher School of Rabat in Management and Engineering** thus trains profiles capable of **driving innovation** and actively contributing to the technological development of Morocco and the region.

---

**End of Presentation**

_Thank you for your attention_
