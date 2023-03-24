function setCacheHeaders(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Expires', date.toUTCString());
  }
  
  function middleware(req, res, next) {
    setCacheHeaders(res);
    next();
  }
  
  module.exports = middleware;
  