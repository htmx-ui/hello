#!/bin/bash

# Simple Hello UI Start Script
# Builds and serves the project

set -e

PORT=${1:-8000}

echo "🚀 Hello UI Server"
echo "📦 Building project..."
npm run build

echo "🌐 Starting server on port $PORT..."
echo "📍 Visit: http://localhost:$PORT/src/"
echo "🛑 Press Ctrl+C to stop"

python3 -m http.server $PORT