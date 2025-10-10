# VilaCodeReviewer

A professional code review application powered by Google's Gemini AI that analyzes code snippets and provides optimization suggestions, best practices, and identifies potential issues.

## System Overview

VilaCodeReviewer is a web application that consists of a React frontend and Node.js/Express backend. The application allows users to input code snippets and receive AI-powered code reviews that identify issues, suggest optimizations, and provide best practices.

### Key Features

- AI-powered code review using Google's Gemini 2.0 Flash model
- Real-time code analysis and feedback
- Support for multiple programming languages
- Clean, responsive user interface
- Markdown rendering for formatted review output

## Architecture

### Backend

The backend is built with Node.js and Express, providing a RESTful API that interfaces with Google's Generative AI API.

- **Technology Stack**: Node.js, Express
- **API Integration**: Google Generative AI (Gemini 2.0 Flash)
- **API Endpoints**:
  - `POST /ai/get-review`: Accepts code snippets and returns AI-generated reviews

### Frontend

The frontend is built with React and Vite, providing a responsive user interface for code input and review display.

- **Technology Stack**: React 19, Vite
- **UI Components**: Custom components with Tailwind CSS
- **Dependencies**: 
  - `axios` for API requests
  - `react-markdown` for rendering review content
  - `prismjs` for code syntax highlighting
  - `lucide-react` for UI icons

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=9876
   GOOGLE_GEMINI_KEY=your_gemini_api_key
   ```

4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the frontend directory with the following variables:
   ```
   VITE_BACKEND_URL=http://localhost:9876
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Usage

1. Access the application through the URL provided by the Vite development server (typically http://localhost:5173)
2. Paste your code snippet into the "Code Input" section
3. Click the "Review Code" button
4. View the AI-generated code review in the "Review Output" section


## Configuration

### Backend Configuration

The backend can be configured through environment variables in the `.env` file:

- `PORT`: The port on which the server will run (default: 9876)
- `GOOGLE_GEMINI_KEY`: Your Google Gemini API key

### Frontend Configuration

The frontend can be configured through environment variables in the `.env` file:

- `VITE_BACKEND_URL`: The URL of the backend API

## Deployment

### Backend Deployment

The backend includes a `vercel.json` configuration file for deployment on Vercel.

### Frontend Deployment

The frontend can be built for production using:

```
npm run build
```

This will generate optimized static files in the `dist` directory that can be deployed to any static hosting service.


## License

This project is licensed under the ISC License.

