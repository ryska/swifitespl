import { createContext } from 'react';

export type ContextType = {
  currentTab: string;
  checkedEras: string[];
  sidebarOpen: boolean;
  updateCurrentTab: (tab: string) => void;
  updateCheckedEras: (eras: string[]) => void;
  updateSidebarOpen: () => void;
}

const Context = createContext<ContextType | null>(null);

export default Context;