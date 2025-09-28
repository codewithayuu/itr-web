#!/bin/bash

# Build script for Vercel deployment
echo "Starting build process..."

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database
npx prisma db seed

# Build the application
npm run build

echo "Build completed successfully!"
