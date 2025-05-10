/**
 * Simple development server starter for VroPay
 */

// Import the Next.js and child_process modules
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { execSync } = require('child_process');

// Define the port for the server
const PORT = 3001;

// Create a Next.js development server
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

// Kill any existing processes on port 3001
try {
  console.log('Stopping any existing processes on port 3001...');
  execSync('lsof -ti:3001 | xargs kill -9 || true');
} catch (error) {
  // Ignore errors from kill command
  console.log('No processes were running on port 3001');
}

// Start the server
app.prepare()
  .then(() => {
    console.log(`Starting server on port ${PORT}...`);
    
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  }); 