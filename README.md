## NY Times Most Popular Articles Viewer

## Introducation

This is demo NYT most popular articles app, which list the most popluar articles with last day/s of 1,7,30
I call the api from NYT developer, include my api-key to api.

## Overview

A Next.js application that displays the most popular articles from The New York Times API. The app features:

Article listing with different time periods (1, 7, or 30 days)

Article detail pages

Responsive design

Client-side navigation

Comprehensive testing suite

## Features

Fetches real-time data from NY Times Most Popular API

Clean, responsive UI built with Tailwind CSS
Optimized performance with Next.js
Complete test coverage with Jest and Cypress
Type-safe development with TypeScript
Incremental Static Regeneration (ISR) for fast loads
Mobile-friendly design

## env

I push env to github intentional, for testing. normally env should not push to github

## Technologies Used

Next.js 14 - React framework

TypeScript - Type checking

Tailwind CSS - Utility-first CSS

React Testing Library - Unit testing

Jest - Test runner

Cypress - End-to-end testing

NY Times API - Data source

## Getting Started

First, run the development server:

```bash
git clone https://github.com/your-username/nytimes-popular-articles.git
cd nytimes-popular-articles
npm install
npm run dev

```

build

```bash
npm run build

```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Project Structure

nytimes-popular-articles/
├── src/
│ ├── app/ # Next.js 13+ app router
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions
│ ├── types/ # TypeScript type definitions
| ├── utils/ # common function  
├── cypress/ # End-to-end tests
├── public/ # Static assets
├── jest.config.js # Jest configuration
├── cypress.config.ts # Cypress configuration
└── next.config.js # Next.js configuration

## API Usage

This application uses the NY Times Most Popular API:

Endpoint: https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json

.Period options: 1, 7, or 30 days

Rate limit: 4000 requests per day

## Presentational components

1- APP Header
Location: src/components/AppHeader.tsx

Purpose:
The header component that appears at the top of every page, containing the logo and period selector.

Key Features:
Displays the application logo
Responsive design that adapts to different screen sizes

2- ArticleCard
Location: src/components/ArticleCard.tsx

Purpose:
Displays a preview card for each article in the list view.

Key Features:
Shows article title, abstract, and publication date
Displays article image with placeholder fallback
Clickable card that navigates to the article detail page
Responsive design with hover effects

3- ArticleList
Location: src/components/ArticleList.tsx

Purpose:
Renders a grid/list of article cards with loading and error states.

Key Features:
Handles loading and error states
Responsive grid layout (1 column on mobile, 3 on desktop)
Displays appropriate messages when no articles are found

4- ArticleDetail
Location: src/app/articles/[id]/page.tsx

Purpose:
Displays the full details of a single article.

Key Features:
Shows complete article information (title, author, date, content)
Large featured image
"Read on NYTimes.com" button
Social sharing options
Related articles section
Responsive layout

Props:
This is a Next.js page component that receives route parameters automatically:
params.id: The article ID from the URL

5- PeriodSelector
Location: src/components/PeriodSelector.tsx

Purpose:
Dropdown component for selecting the time period of articles to view.

Key Features:
Custom styled select dropdown
Preserves selection in localStorage
Accessible keyboard navigation

6- LoadingSpinner
Location: src/components/LoadingSpinner.tsx

Purpose:
Displays an animated loading indicator.

Key Features:
SVG-based animation
Customizable size
Centered by default

7- ErrorMessage
Location: src/components/ErrorMessage.tsx

Purpose:
Displays error messages to the user.

Key Features:
Consistent error styling
Optional icon
Responsive layout

8- SocialShare
Location: src/components/SocialShare.tsx

Purpose:
Provides social media sharing buttons.

Key Features:
Twitter (X) and Facebook sharing
Proper URL encoding
Accessible buttons

## Hooks

useArticles Hook
Location: src/hooks/useArticles.ts

Purpose:
Custom hook for fetching articles from the NY Times API.

Features:
Handles loading and error states
Caches responses
Automatic refetch when period changes
Type-safe return values

Return:
articles: Article[]; // Array of articles
loading: boolean; // Loading state
error: string | null; // Error message if any

## Component Architecture

The application follows these architectural principles:

Container/Presentational Pattern:
Smart components (pages) handle data fetching
Dumb components handle presentation

Unidirectional Data Flow:
Data flows down from pages to components
Events bubble up from components to pages

Type Safety:
All components have TypeScript interfaces
Props are strictly typed

Responsive Design:
Mobile-first approach
Tailwind's responsive prefixes used throughout

Accessibility:
Semantic HTML

Each component is designed to be reusable, testable, and maintainable, with clear separation of concerns.
