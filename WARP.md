# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

CookedGPT is a text transformation API service that uses multiple AI providers (OpenAI, Google Gemini, OpenRouter) to rewrite text with different "vibes" or tones. Users can transform text using predefined tags like "SAVAGE", "GENZ", "PRO", "RIZZ", etc., or create custom transformation prompts.

## Development Commands

### Setup and Installation
```bash
bun install
```

### Development Server
```bash
bun run dev
# Runs with hot reload on http://localhost:3000
# Base API endpoint: http://localhost:3000/api/v1
```

### Database Operations
```bash
# Generate Prisma client after schema changes
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Reset database (development only)
npx prisma migrate reset

# View database in browser
npx prisma studio
```

## Environment Configuration

Copy `.env.example` to `.env` and configure:
- `DATABASE_URL`: PostgreSQL connection string
- `ENCRYPTION_KEY`: For encrypting stored API keys
- `CLERK_SECRET_KEY` / `CLERK_PUBLISHABLE_KEY`: Authentication provider keys

## Architecture Overview

### Tech Stack
- **Runtime**: Bun
- **Framework**: Hono (lightweight web framework)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI Providers**: OpenAI, Google Gemini, OpenRouter
- **Language**: TypeScript

### Core Application Flow

1. **Authentication**: All routes (except webhooks) use Clerk middleware
2. **Text Transformation Pipeline**:
   - User submits text + transformation tags + AI model selection
   - System generates contextual prompt based on selected tags
   - Routes to appropriate AI provider (OpenAI/Gemini/OpenRouter)
   - Stores transformation history in database
   - Returns transformed text

### Database Schema Architecture

The application uses 5 main entities with these relationships:

- **Users**: Core user entity linked to Clerk authentication
  - Has many: Transformations, API Keys, Custom Tags
  - Role-based access (USER/ADMIN)

- **Transformations**: Historical record of all text transformations
  - Belongs to: User, AI Model
  - Stores: original input, transformed output, tags used, model info

- **Models**: Available AI models from different providers
  - Has many: Transformations
  - Includes: performance metrics, pricing tier (pro/free), provider type

- **Keys**: Encrypted API keys for AI providers
  - Belongs to: User
  - Types: OPENAI, GEMINI, OPENROUTER

- **Tags**: Custom transformation prompts created by users
  - Belongs to: User
  - Allows personalized transformation styles beyond default options

### AI Integration Pattern

The app uses a factory pattern for AI providers:
- `transformer/useOpenAI.ts` - OpenAI API integration
- `transformer/useGemini.ts` - Google Gemini integration  
- `transformer/useOpenRouter.ts` - OpenRouter API integration

Each transformer follows the same interface (`DEFAULT_TRANSFORMER_PROPS` -> `DEFAULT_TRANSFORMER_OUTPUT`) but handles provider-specific API calls and response parsing.

## Key API Endpoints

Base URL: `/api/v1`

- `POST /transform` - Main text transformation endpoint
- `GET /user/*` - User profile, tags management
- `GET /ai-model/*` - Available AI models listing
- `POST|GET|PUT|DELETE /api-key/*` - User API key management
- `POST /admin/*` - Admin-only model management
- `POST /webhooks/*` - Clerk user lifecycle webhooks

## Important Implementation Details

### Text Transformation Logic
- Default tags include: SAVAGE, GENZ, GENALPHA, PRO, RIZZ, INSULT
- Users can create custom tags with personalized prompts
- Multiple tags are blended into unified output, not separate responses
- Content length constraints: 20-7000 characters
- Tag processing normalizes to uppercase and removes spaces

### Error Handling
- Custom error class (`CustomError`) with HTTP status codes
- Centralized error handling in main app with proper status code mapping
- Enum-based error messages and status codes for consistency

### Security Considerations
- API keys are encrypted before database storage
- Authentication required for all transformation endpoints
- User isolation - users can only access their own data
- Role-based access control for admin functions

## Development Notes

### Code Organization
- `src/routes/` - Hono route definitions
- `src/controllers/` - Business logic organized by feature area  
- `src/utils/` - Shared utilities and helpers
- `transformer/` - AI provider integrations (note: outside src/)
- `enums/` - Shared enums and constants

### Database Client
- Prisma client is generated to `src/generated/prisma/`
- Import via `src/database/prisma.ts` for consistent usage
- Database connection handled in `src/database/connectToDB.ts`

### Middleware Pattern
- `ProtectedRoute` middleware enforces authentication
- `TryCatch` wrapper handles async errors consistently
- Clerk middleware applied globally for auth context
