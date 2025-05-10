#!/bin/bash

# Get the absolute path of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Go to the project directory
cd "$SCRIPT_DIR" || {
  echo "Error: Could not navigate to the project directory"
  exit 1
}

echo "Starting VroPay Redesign server from directory: $(pwd)"

# Kill existing server processes
echo "Stopping any existing server processes..."
pkill -f "node server.js" || true
pkill -f "next dev" || true

# Wait a moment for processes to be terminated
sleep 2

# Verify package.json exists
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found. Make sure you're in the correct directory."
  exit 1
fi

# Verify server.js exists
if [ ! -f "server.js" ]; then
  echo "Error: server.js not found. Make sure you're in the correct directory."
  exit 1
fi

# Start the server
echo "Starting server on port 3001..."
node server.js 