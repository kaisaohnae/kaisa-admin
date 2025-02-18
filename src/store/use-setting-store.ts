'use client';

import dayjs from 'dayjs';
import {create} from 'zustand';
import Cookies from 'react-cookies';

export interface State {
  tabIndex: number;
  favList: any;
  menuActive: boolean;
  path: string;
  userId: string;
}

export interface Actions {
  setTabIndex: any;
  setUserId: any;
}

export const useSettingStore = create<State & Actions>((set, get) => ({
  tabIndex: 0,
  favList: [],
  menuActive: false,
  path: '',
  userId: Cookies.load('userId') || '', // 쿠키에서 초기값 로드,
  setTabIndex: (index: number) => {
    set({tabIndex: index});
  },
  setUserId: (userId: string) => {
    Cookies.save('userId', userId, {path: '/', expires: dayjs().add(30, 'day').toDate()});
    set({userId});
  },
}));

export default useSettingStore;
