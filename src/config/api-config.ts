import interceptor from '@/config/api-interceptor';
import useAuthStore from '@/store/use-auth-store';

export const apiConfig = (apiUrl: string, apiData?: any) => {
  // const uniqueUrl = `${apiUrl}?t=${new Date().getTime()}`; // URL에 타임스탬프 추가
  const auth = useAuthStore.getState();

  return interceptor({
    url: apiUrl,
    data: JSON.stringify(apiData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + (auth.token || 'not-token'),
    },
    withCredentials: false,
  });
};
