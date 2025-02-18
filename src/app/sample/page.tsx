'use client';

import { useEffect } from 'react';
import ButtonLogout from '@/components/auth/button-logout';
import Header from "@/components/layout/header";

export default function ProtectedPage() {
  useEffect(() => {

  }, []);

  return (
    <>
      <Header/>
      <h1>Sample Page</h1>
      <p>You are logged in!</p>
      <ButtonLogout />
    </>
  );
}
