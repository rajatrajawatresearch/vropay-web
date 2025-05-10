#!/bin/bash

# Kill any existing Next.js processes
echo "Stopping any existing Next.js servers..."
pkill -f "next dev" || true
pkill -f "node server.js" || true

# Wait a moment to ensure processes are terminated
sleep 2

# Change to the project directory
cd "$(dirname "$0")"

# Start the development server
echo "Starting VroPay redesign server on port 3001..."
node server.js &
SERVER_PID=$!

# Wait for server to start
echo "Waiting for server to initialize..."
for i in {1..30}; do
  if curl -s http://localhost:3001 > /dev/null; then
    echo "✅ Server is running on http://localhost:3001"
    exit 0
  fi
  sleep 1
  echo "Still waiting... ($i seconds)"
done

# If we get here, the server didn't start properly
echo "❌ Failed to start server within 30 seconds"
kill $SERVER_PID
exit 1 