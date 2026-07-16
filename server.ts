/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { apiRouter } from './backend/routes';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Standard middlewares
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Request logger middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // Register API routes
  app.use('/api', apiRouter);

  // Global Error Handler for API
  app.use('/api', (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('API Error:', err);
    res.status(err.status || 500).json({
      error: err.message || 'An internal server error occurred on the API endpoint.'
    });
  });

  // Vite middleware setup for assets and HTML serving
  if (process.env.NODE_ENV !== 'production') {
    console.log('Initializing Vite Development Middleware...');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    console.log('Serving production static build assets from /dist...');
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`====================================================`);
    console.log(`🍽️  FOODLY FULL-STACK PLATFORM RUNNING AT:`);
    console.log(`👉 http://localhost:${PORT}`);
    console.log(`👉 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`====================================================`);
  });
}

startServer().catch((err) => {
  console.error('Fatal Server Boot Error:', err);
  process.exit(1);
});
