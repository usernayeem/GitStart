import app from '../src/app';

// Vercel's @vercel/node runtime natively passes standard Node.js req/res objects to Express.
// Unlike AWS Lambda or Netlify (which use a custom event format requiring serverless-http as a
// translator), Vercel can handle Express directly. If this project ever migrates off Vercel to
// an AWS Lambda-based host, wrap `app` with serverless-http here instead of exporting directly.
export default app;
