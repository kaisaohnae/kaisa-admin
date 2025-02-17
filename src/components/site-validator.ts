'use client';

import {useEffect} from 'react';
import {useRouter} from '@/components/hooks/use-custom-router';
import {usePathname} from "next/navigation";

type Props = {
  onReady: () => void;
};

export default function OrgValidator({onReady}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onReadyCheck = async () => {
    try {
      onReady();
    } catch (error) {
      console.error('Error fetching data:', error);
      // 실패 시 처리 로직
      router.push({
        pathname: '/error',
        query: {cd: 'fetch-error'}
      });
    }
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));

    if (!token && pathname !== "/login") {
      router.replace("/login");
    }
  }, [pathname]);

  useEffect(() => {
    const refresh = async () => {
      await onReadyCheck();
    };
    refresh().then();
  }, []);

  return null;
}
