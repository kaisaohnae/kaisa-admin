'use client';

import { create } from 'zustand';

type State = {
  loading: boolean;
  target: string;
};

type Actions = {
  startLoading: () => void;
  stopLoading: () => void;
};

const useLoadingStore = create<State & Actions>((set, get) => ({
  loading: false,
  target: '',
  startLoading: (o?: any) => {
    // console.log(get().loading);
    set(() => ({
      loading: true,
      target: (o && o.target) ? o.target : ''
    }));
  },
  stopLoading: () => {
    set(() => ({
      loading: false,
      initLoading: false,
      target: ''
    }));
  },
}));
export default useLoadingStore;
