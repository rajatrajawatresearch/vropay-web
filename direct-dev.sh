#!/bin/bash

# Get the absolute path of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Go to the project directory
cd "$SCRIPT_DIR" || {
  echo "Error: Could not navigate to the project directory"
  exit 1
}

echo "Starting VroPay Redesign in development mode from: $(pwd)"

# Kill existing server processes
echo "Stopping any existing server processes..."
pkill -f "node server.js" || true
pkill -f "next dev" || true

# Wait a moment for processes to be terminated
sleep 2

# Set the port explicitly
export PORT=3001

# Start the Next.js development server
echo "Starting Next.js development server on port 3001..."
npx next dev -p 3001 