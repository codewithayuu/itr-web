# IT-R Website

A modern, responsive website for the IT-R group built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage**: Beautiful hero section with featured updates and members
- 📰 **Updates Feed**: News and announcements with markdown support
- 👥 **Members Directory**: Team showcase with profiles and contact info
- 🖼️ **Gallery**: Photo gallery with upload functionality
- 📱 **Responsive Design**: Mobile-first approach with excellent UX
- 🎨 **Modern UI**: Glassmorphism effects and smooth animations
- 🚀 **Performance**: Optimized images and fast loading times

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: Local filesystem (dev) / MinIO (production)
- **Deployment**: Docker with Docker Compose
- **CI/CD**: GitHub Actions

## Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL 15+
- Docker & Docker Compose (optional)

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd it-r-website
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your database URL:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/it_r_website"
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run database migrations
   npm run db:migrate
   
   # Seed the database with sample data
   npm run db:seed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

### Docker Development

1. **Start all services**
   ```bash
   npm run docker:dev
   ```

2. **Run database migrations**
   ```bash
   docker compose exec web npm run db:migrate
   ```

3. **Seed the database**
   ```bash
   docker compose exec web npm run db:seed
   ```

4. **View logs**
   ```bash
   npm run docker:logs
   ```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── api/            # API routes
│   │   ├── updates/        # Updates pages
│   │   ├── members/        # Members pages
│   │   └── gallery/        # Gallery pages
│   ├── components/         # Reusable UI components
│   ├── lib/               # Utilities and configurations
│   └── types/             # TypeScript type definitions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── docker/                # Docker configuration
└── .github/workflows/     # CI/CD pipelines
```

## API Endpoints

### Members
- `GET /api/members` - Get all members
- `POST /api/members` - Create a new member
- `DELETE /api/members/[id]` - Delete a member

### Updates
- `GET /api/updates` - Get all updates
- `GET /api/updates/[id]` - Get a single update
- `POST /api/updates` - Create a new update
- `DELETE /api/updates/[id]` - Delete an update

### Gallery
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery/upload` - Upload a new image
- `DELETE /api/gallery/[id]` - Delete an image

## Deployment

### Self-Hosted with Docker

1. **Set up a VPS** (Ubuntu 22.04 recommended)
2. **Install Docker and Docker Compose**
3. **Clone the repository**
4. **Configure environment variables**
5. **Deploy with Docker Compose**
   ```bash
   docker compose up -d
   ```

### Production Environment Variables

```env
DATABASE_URL="postgresql://user:password@db:5432/it_r_website"
STORAGE_ENDPOINT="http://minio:9000"
STORAGE_ACCESS_KEY="your-access-key"
STORAGE_SECRET_KEY="your-secret-key"
STORAGE_BUCKET="it-r-uploads"
NEXT_PUBLIC_BASE_URL="https://your-domain.com"
```

## Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema changes
npm run db:migrate      # Run migrations
npm run db:seed         # Seed database
npm run db:studio       # Open Prisma Studio

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run type-check      # Run TypeScript checks
npm run format          # Format code with Prettier

# Docker
npm run docker:dev      # Start Docker services
npm run docker:down     # Stop Docker services
npm run docker:logs     # View Docker logs
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email contact@it-r-group.edu or create an issue in the repository.