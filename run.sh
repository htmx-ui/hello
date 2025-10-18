#!/bin/bash

# Hello UI Development Server
# This script starts the development environment

set -e  # Exit on any error

PORT=${PORT:-8000}
echo "🚀 Starting Hello UI development server on port $PORT"

# Function to kill process on port
kill_port() {
    local port=$1
    if command -v lsof >/dev/null 2>&1; then
        local pid=$(lsof -t -i:$port 2>/dev/null)
        if [ ! -z "$pid" ]; then
            echo "🔄 Killing process $pid on port $port"
            kill $pid 2>/dev/null || true
            sleep 2
        fi
    elif command -v netstat >/dev/null 2>&1; then
        local pid=$(netstat -tulpn 2>/dev/null | grep ":$port " | awk '{print $7}' | cut -d'/' -f1)
        if [ ! -z "$pid" ] && [ "$pid" != "-" ]; then
            echo "🔄 Killing process $pid on port $port"
            kill $pid 2>/dev/null || true
            sleep 2
        fi
    fi
}

# Kill any existing process on the port
kill_port $PORT

# Build CSS first
echo "📦 Building CSS..."
npm run build

# Start Python server in background
echo "🌐 Starting HTTP server..."
python3 -m http.server $PORT &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Open browser (optional, comment out if not needed)
if command -v xdg-open >/dev/null 2>&1; then
    echo "🌍 Opening browser..."
    xdg-open http://localhost:$PORT/src/ 2>/dev/null &
elif command -v open >/dev/null 2>&1; then
    open http://localhost:$PORT/src/ 2>/dev/null &
fi

echo "✅ Server running at: http://localhost:$PORT/src/"
echo "🎨 Starting Tailwind CSS watcher..."
echo "💡 Press Ctrl+C to stop all services"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $SERVER_PID 2>/dev/null || true
    echo "✅ Development server stopped"
    exit 0
}

# Set trap for cleanup
trap cleanup SIGINT SIGTERM

# Start Tailwind watcher in foreground
npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch
