'use client';

import { useEffect } from 'react';
import ButtonLogout from '@/components/auth/button-logout';

export default function ProtectedPage() {
  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Sample Page</h1>
      <p>You are logged in!</p>
      <ButtonLogout />
    </div>
  );
}
