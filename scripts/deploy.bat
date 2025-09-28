@echo off
REM IT-R Website Deployment Script for Windows
REM This script deploys the website to a production server

echo 🚀 Starting deployment...

REM Check if we're on the main branch
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
if not "%current_branch%"=="main" (
    echo ❌ Error: You must be on the main branch to deploy
    exit /b 1
)

REM Pull latest changes
echo 📥 Pulling latest changes...
git pull origin main

REM Build the application
echo 🔨 Building application...
npm run build

REM Start Docker services
echo 🐳 Starting Docker services...
docker compose up -d

REM Wait for services to be ready
echo ⏳ Waiting for services to be ready...
timeout /t 10 /nobreak >nul

REM Run database migrations
echo 🗄️ Running database migrations...
docker compose exec web npm run db:migrate:deploy

REM Seed database if needed
if "%1"=="--seed" (
    echo 🌱 Seeding database...
    docker compose exec web npm run db:seed
)

REM Check if services are running
echo 🔍 Checking service health...
docker compose ps

echo ✅ Deployment completed successfully!
echo 🌐 Website should be available at: http://localhost:3000
echo 📊 MinIO console: http://localhost:9001
echo 🗄️ Database: localhost:5432





