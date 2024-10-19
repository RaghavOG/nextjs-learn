'use client';

import { useRouter } from 'next/navigation';

export default function BcdPage() {
  const router = useRouter();

  const handleNavigation = () => {
    // Navigate to a different page
    router.push('/products');
  };

  return (
    <div>
      <h1>BCD Page</h1>
      <p>This is an example of using the useRouter hook in Next.js</p>
      <button onClick={handleNavigation}>Go to Products</button>
    </div>
  );
}
