'use client';

import SiteValidator from '@/components/site-validator';
import {useState, Suspense, useEffect} from 'react';
import Header from "@/components/layout/header";

/**
 * OrgValidator: 페이지 새로고침 및 이동시 공통으로 소속을 검증한다.
 * 검증시 화면 깜박임을 없애고자 onReady 추가
 *
 * @param children
 * @constructor
 */
export default function LayoutSub({children}: Readonly<{ children: React.ReactNode; }>) {
  const [isReady, setReady] = useState(false);
  const [isHeader, setHeader] = useState(false);
  const onReady = () => {
    setReady(true);
  };
  const onHeader = (is: boolean) => {
    setHeader(is);
  };

  useEffect(() => {
    console.log(children);
  }, [children]);

  return (
    <Suspense>
      {isHeader ? (
        <div id="container">
          <Header/>
          <div id="content">
            <>{isReady && children}</>
          </div>
        </div>
      ): (
        <>{isReady && children}</>
      )}
      <SiteValidator onReady={onReady} onHeader={onHeader}/>
    </Suspense>
  );
}
