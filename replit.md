# Overview

This is a color palette generator web application that allows users to create, customize, and share color palettes through various methods including random generation, theme selection, image color extraction, and keyword-based searches. The application features a notebook-style UI with color psychology insights and the ability to save favorite palettes locally.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript running on Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks (useState, useEffect) with custom hooks for palette management and favorites
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **Data Fetching**: TanStack Query for server state management and API calls
- **Styling**: Tailwind CSS with custom CSS variables for theming, Google Fonts integration for typography

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production Build**: ESBuild for bundling server code
- **File Upload**: Multer middleware for handling image uploads with memory storage
- **API Design**: RESTful endpoints for palette sharing functionality

## Data Storage Solutions
- **Development**: In-memory storage using Map data structures for palette sharing
- **Local Storage**: Browser localStorage for user favorites and preferences
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema for future database integration
- **Session Storage**: Connect-pg-simple for PostgreSQL session management (configured but not actively used)

## External Dependencies
- **Database**: Neon serverless PostgreSQL (configured via DATABASE_URL environment variable)
- **UI Library**: Radix UI primitives for accessible component foundations
- **Color Processing**: Custom utility functions for color generation, conversion, and extraction from images
- **Development Tools**: Replit integration with cartographer plugin and runtime error overlay
- **Build System**: Vite with React plugin, PostCSS, and Autoprefixer