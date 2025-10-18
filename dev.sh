#!/bin/bash

# Simple Hello UI Development Script
# Usage: ./dev.sh [port]

set -e

PORT=${1:-8000}
CSS_FILE="src/assets/css/tailwindcss.css"

echo "🚀 Hello UI Development Server"
echo "📍 Port: $PORT"
echo "🎨 CSS: $CSS_FILE"

# Build CSS initially
echo "📦 Building CSS..."
npm run build:dev

# Start server in background
echo "🌐 Starting server..."
python3 -m http.server $PORT &
SERVER_PID=$!

# Wait for server to start
sleep 1

echo "✅ Server ready: http://localhost:$PORT/src/"
echo "🎨 Watching for CSS changes..."

# Cleanup function
cleanup() {
    echo ""
    echo "🛑 Stopping server..."
    kill $SERVER_PID 2>/dev/null || true
    echo "✅ Done"
    exit 0
}

# Set trap for cleanup
trap cleanup SIGINT SIGTERM

# Watch for CSS changes
npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch