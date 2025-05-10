const { spawn } = require('child_process');
const path = require('path');

// Set the port
process.env.PORT = process.env.PORT || '3001';

console.log(`Starting Next.js development server on port ${process.env.PORT}...`);

// Run Next.js dev mode with explicit port
const nextProcess = spawn('npx', ['next', 'dev', '-p', process.env.PORT], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: process.env
});

// Handle process events
nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

// Handle Node.js process signals
process.on('SIGINT', () => {
  console.log('Detected SIGINT, shutting down server...');
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Detected SIGTERM, shutting down server...');
  nextProcess.kill('SIGTERM');
}); 