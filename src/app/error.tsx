'use client';

import {useEffect} from 'react';
import IconLogo from "@/components/icons/icon-logo";
import {useRouter} from "@/components/hooks/use-custom-router";

export default function Error({error}: { error: Error }) {
  const router = useRouter();

  const goHome = () => {
    router.push({
      pathname: '/',
      query: {}
    });
  }
  useEffect(() => {
    console.error('서버 에러 발생:', error);
  }, [error]);
  return (
    <div id="error">
      <h1><IconLogo/></h1>
      <h2>문제가 발생했습니다.</h2>
      <p>잠시 후 다시 시도해주세요.</p>
      <button type="button" onClick={goHome}>홈으로</button>
    </div>
  );
}
