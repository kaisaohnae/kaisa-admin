'use client';

import {useState, useEffect} from 'react';
import {useRouter} from '@/components/hooks/use-custom-router';
import UserService from '@/service/common/user-service';
import useSettingStore from '@/store/use-setting-store';
import useAuthStore from '@/store/use-auth-store';
import useAlertStore from '@/store/use-alert-store';

export default function Login() {
  const setting = useSettingStore();
  const auth = useAuthStore();
  const alert = useAlertStore();
  const router = useRouter();

  const [param, setParam] = useState({
    userId: '',
    pwd: '',
    remember: false,
  });

  useEffect(() => {
    setParam(prev => ({
      ...prev,
      userId: setting.userId
    }));
  }, [setting.userId]);

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setParam(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (param.remember) {
      setting.userId = param.userId;
    } else {
      setting.userId = '';
    }
    try {
      const res = await UserService.login(param);
      if (res) {
        auth.loginSuccess(res.data);
        router.push({
          pathname: '/',
          query: {}
        });
      } else {
        auth.loginFail();
        alert.open({title: null, message: '회원정보와 일치하지 않습니다.'});
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="login">
      <form onSubmit={submitForm} method="POST">
        <fieldset>
          <legend>로그인</legend>
          <h1>관리자 로그인</h1>
          <label className="label">
            <span className="icon">&#xe809;</span>
            <input
              type="text"
              name="userId"
              value={param.userId}
              onChange={handleChange}
              placeholder="아이디를 입력해주세요"
              required
            />
          </label>
          <label className="label">
            <span className="icon">&#xe81c;</span>
            <input
              type="password"
              name="pwd"
              value={param.pwd}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
              required
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={param.remember}
              onChange={handleChange}
            />
            <span className="remember"> 아이디 저장</span>
          </label>
          <button type="submit">로그인</button>
        </fieldset>
      </form>
    </div>
  );
}
