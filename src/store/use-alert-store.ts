'use client';

import { create } from 'zustand';

type State = {
  alert: AlertProps | null;
  error: boolean;
};

type Actions = {
  show: (o: AlertProps) => void;
  hide: () => void;
};

/*type ButtonProps = {
  type: string;
  rate: number;
  text: string;
  callback: () => void;
}*/

type AlertProps = {
  type?: string;
  message: any;
  button?:  any; // ButtonProps | ButtonProps[];
};

const useAlertStore = create<State & Actions>((set) => ({
  alert: null,
  error: false,
  show: (o: AlertProps) => {
    set(() => ({ alert: o }));
  },
  hide: () => {
    set(() => ({ alert: null }));
  },
})) as any;

export default useAlertStore;
