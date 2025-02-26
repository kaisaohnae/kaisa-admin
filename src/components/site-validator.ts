'use client';

import {useEffect} from 'react';
import {useRouter} from '@/components/hooks/use-custom-router';
import {usePathname} from "next/navigation";
import useAuthStore from '@/store/use-auth-store';

type Props = {
  onReady: () => void;
  onHeader: any;
};

export default function OrgValidator({onReady, onHeader}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useAuthStore();

  const onReadyCheck = async () => {
    try {
      onReady();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onRouterCheck = async () => {
    try {
      if(pathname === '/') {
        onHeader(true);
        return;
      }
      const excludeHeader = ['error', 'login', 'logout'];
      if (excludeHeader.find(keyword => pathname.match(keyword))) {
        onHeader(false);
      } else {
        onHeader(true);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const refresh = async () => {
      await onRouterCheck();
    };
    refresh().then();

    if (!auth.token && !auth.menuList && !auth.codeList && !auth.userInfo && pathname !== '/login') {
      router.replace('/login');
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
