#!/bin/bash

# IT-R Website Deployment Script
# This script deploys the website to a production server

set -e

echo "🚀 Starting deployment..."

# Check if we're on the main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "❌ Error: You must be on the main branch to deploy"
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Build the application
echo "🔨 Building application..."
npm run build

# Start Docker services
echo "🐳 Starting Docker services..."
docker compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 10

# Run database migrations
echo "🗄️ Running database migrations..."
docker compose exec web npm run db:migrate:deploy

# Seed database if needed
if [ "$1" = "--seed" ]; then
    echo "🌱 Seeding database..."
    docker compose exec web npm run db:seed
fi

# Check if services are running
echo "🔍 Checking service health..."
docker compose ps

echo "✅ Deployment completed successfully!"
echo "🌐 Website should be available at: http://localhost:3000"
echo "📊 MinIO console: http://localhost:9001"
echo "🗄️ Database: localhost:5432"





