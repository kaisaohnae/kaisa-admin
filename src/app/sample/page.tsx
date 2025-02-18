'use client';

import { useEffect } from 'react';
import ButtonLogout from '@/components/auth/button-logout';
import Header from "@/components/layout/header";

export default function SamplePage() {
  useEffect(() => {

  }, []);

  return (
    <>
      <Header/>
      <h1>Sample Page</h1>
      <ButtonLogout />
    </>
  );
}
