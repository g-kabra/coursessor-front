const express = require('express');
const next = require('next');
const compression = require('compression');
const middleware = require('./middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 8080;

app.prepare().then(() => {
  const server = express();

  // Add compression middleware
  server.use(compression());

  // Add custom middleware to set cache headers
  server.use(middleware);

  // Catch-all route for Next.js requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${port}`);
  });
});
