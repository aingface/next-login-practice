import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Home() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    if (isLoggedIn) {
      router.push('./notifications');
    } else {
      router.push('./login');
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <span>리다이렉팅....</span>
    </>
  );
}

export default Home;
