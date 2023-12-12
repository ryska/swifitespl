import { FC, ReactNode, useState } from 'react';
import Context from './Context';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<string>('all');
  const [checkedEras, setCheckedEras] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const updateCurrentTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const updateCheckedEras = (eras: string[]) => {
    setCheckedEras(eras);
  }

  const updateSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <Context.Provider value={{ currentTab, checkedEras, sidebarOpen, updateCurrentTab, updateCheckedEras, updateSidebarOpen }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;