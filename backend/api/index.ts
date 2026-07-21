import app from '../src/app';

// Vercel's @vercel/node builder natively handles Express applications
// if they are exported as the default export of a file in the api/ directory.
// We do not need serverless-http wrapping here, which avoids signature mismatches.
export default app;
