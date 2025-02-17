'use client';

import {create} from 'zustand';
import useSettingStore from '@/store/use-setting-store';

export interface UserType {
  userId: string;
  userName: string;
  companyId: string;
  userStateCode: string;
  passwordUpdateDt: string;
  phoneNo: string;
  memo: string;
  loginDt: string;
}

export interface MenuType {
  menuGroupCode: string;
  active: boolean;
  pathName: string;
  menu: any[];
}

export interface State {
  active: boolean;
  userInfo: any; // RemovableRef<UserType>;
  menuList: any;
  codeList: any;
  token: any;
}

export interface Actions {
  loginSuccess: any;
  loginFail: any;
  getUserInfo: () => object;
}

export const useAuthStore = create<State & Actions>((set, get) => ({
  active: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'), // JSON.stringify(
  codeList: JSON.parse(localStorage.getItem('codeList') || '{}'),
  menuList: JSON.parse(localStorage.getItem('menuList') || '{}'),
  token: localStorage.getItem('token'),
  loginSuccess: async (data: any) => {
    try {
      // const { data: response1 }: { data: JsonResponseType; } =
      set({
        userInfo: data.userInfo
      });
      console.log(useSettingStore.getState());
    } catch (error) {
      console.error('Error fetching data from database:', error);
    }
  },
  loginFail: async () => {

  },
  getUserInfo: () => {
    return get().userInfo;
  }
}));

export default useAuthStore;
