import { createContext } from 'react';

export type ContextType = {
  currentTab: string;
  checkedEras: string[];
  updateCurrentTab: (tab: string) => void;
  updateCheckedEras: (eras: string[]) => void;
}

const Context = createContext<ContextType | null>(null);

export default Context;