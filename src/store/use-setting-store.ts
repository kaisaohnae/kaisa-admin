'use client';

import {create} from 'zustand';
import Cookies from 'react-cookies';

// 기본 구조 설정
const structure = {
  id: '',
  menu: {
    active: false,
  },
  hash: '',
  tab: {
    idx: 0,
  },
  favList: [],
};

const useSettingStore = create((set) => {
  const settings = Cookies.load('settings');

  // 상태 초기화
  const initialState = settings ? JSON.parse(settings) : structure;

  return {
    settings: initialState,
    setState: () => {
      const currentSettings = JSON.stringify(initialState);
      Cookies.save('settings', currentSettings, {path: '/'});
      set({settings: initialState});
    },
  };
}) as any;

export default useSettingStore;
