# Mental Health Counselors Assistant

A web application designed to support mental health counselors by providing AI-powered guidance and access to counseling transcripts. The app helps counselors make better decisions and improve their practice through real examples and AI suggestions.

## Live Demo

The application is deployed and available at: [mental-health-counselors.vercel.app](https://mental-health-counselors.vercel.app/)

## Features

- **AI-Powered Guidance**: Get personalized suggestions based on specific patient situations
- **Transcript Search**: Access a database of counseling transcripts for reference
- **Evidence-Based Approach**: All suggestions are based on real counseling transcripts and best practices
- **Modern UI**: Clean and intuitive interface built with modern web technologies

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.1
- **Language**: TypeScript
- **UI Components**: 
  - Radix UI for accessible components
  - Tailwind CSS for styling
  - Lucide React for icons
- **State Management**: React Hooks

### Backend
- **API Routes**: Next.js API Routes
- **Database**: Prisma ORM
- **AI Integration**: OpenAI API (GPT-3.5 Turbo)

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Development Server**: Turbopack

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/surfercoder/mental-health-counselors.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mental-health-counselors/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── guidance/       # AI guidance feature
│   │   └── search/         # Transcript search feature
│   └── components/         # Reusable components
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── ...config files
```

## Development

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run prisma:seed`: Seed the database with initial data

## Video Walkthrough

For a detailed explanation of how the app was built, check out this video walkthrough:
[Building the Mental Health Counselors Assistant](https://www.loom.com/share/22c2cf1f4c984f15ac2d80208c78fbc0?sid=1079b0d9-b935-439a-83a3-71f54bca32ab)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- Next.js team for the amazing framework
- All contributors and users of the application
