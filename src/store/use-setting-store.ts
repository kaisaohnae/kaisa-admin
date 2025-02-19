'use client';

import dayjs from 'dayjs';
import {create} from 'zustand';
import Cookies from 'react-cookies';
import {StoreApi, UseBoundStore} from "zustand/index";
import {persist} from "zustand/middleware";

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
  setMenuActive: any;
  getFavList: any;
  setFavList: any;
}

export const useSettingStore: UseBoundStore<StoreApi<State & Actions>> = create(
  persist<State & Actions>(
    (set, get) => ({
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
      setMenuActive: (active: boolean) => {
        set({menuActive: active});
      },
      getFavList: () => {
        return get().favList;
      },
      setFavList: (favList: any) => {
        set({favList});
      }
    }),
    {
      name: 'setting-storage', // 로컬스토리지에 저장될 키 이름
      // getStorage: () => (typeof window !== 'undefined' ? localStorage : {}), // 클라이언트에서만 localStorage 사용
    }
  )
);


export default useSettingStore;
