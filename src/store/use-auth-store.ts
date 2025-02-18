import {create, StoreApi, UseBoundStore} from 'zustand';
import { persist } from 'zustand/middleware';

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
  userInfo: any;
  menuList: any;
  codeList: any;
  token: any;
}

export interface Actions {
  loginSuccess: any;
  loginFail: any;
  getUserInfo: () => object;
}

export const useAuthStore: UseBoundStore<StoreApi<State & Actions>> = create(
  persist<State & Actions>(
    (set, get) => ({
      active: false,
      userInfo: [],
      codeList: [],
      menuList: [],
      token: null,
      loginSuccess: async (data: any) => {
        try {
          set({
            userInfo: data.userInfo,
            codeList: data.codeList,
            menuList: data.menuList,
            token: data.token,
          });
        } catch (error) {
          console.error('Error fetching data from database:', error);
        }
      },
      loginFail: async () => {},
      getUserInfo: () => {
        return get().userInfo;
      }
    }),
    {
      name: 'auth-storage', // 로컬스토리지에 저장될 키 이름
      // getStorage: () => (typeof window !== 'undefined' ? localStorage : {}), // 클라이언트에서만 localStorage 사용
    }
  )
);

export default useAuthStore;
