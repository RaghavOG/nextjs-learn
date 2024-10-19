import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;

// The not-found page might not be showing due to a few reasons:
// 1. Make sure this file is named 'not-found.js' and placed in the correct directory (usually src/app/).
// 2. In Next.js 13 and later, ensure you're using the app directory structure.
// 3. Verify that your routing is set up correctly to use this custom 404 page.
// 4. Check if there are any build errors preventing this page from being generated.
// 5. Clear your browser cache and try again.
// 6. If using server-side rendering, ensure the server is properly configured to serve this page.


