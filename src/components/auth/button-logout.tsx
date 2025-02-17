'use client';

export default function ButtonLogout() {
  const handleLogout = () => {
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login'; // 로그아웃 후 로그인 페이지로 이동
  };

  return <button onClick={handleLogout}>Logout</button>;
}
