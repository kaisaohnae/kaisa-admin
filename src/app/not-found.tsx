'use client';

import IconLogo from "@/components/icons/icon-logo";
import {useRouter} from "@/components/hooks/use-custom-router";

export default function NotFound() {
  const router = useRouter();

  const goHome = () => {
    router.push({
      pathname: '/',
      query: {}
    });
  }
  return (
    <div id="error">
      <h1><IconLogo/></h1>
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
      <p>
        입력하신 주소가 올바르지 않거나사용이 일시 중단되어 요청하신 페이지를 찾을 수 없습니다.<br/>
        서비스 이용에 불편을 드려 죄송합니다.
      </p>
      <button type="button" onClick={goHome}>홈으로</button>
    </div>
  );
}
