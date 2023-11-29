import { FC, ReactNode, useState } from 'react';
import Context from './Context';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<string>('all');
  const [checkedEras, setCheckedEras] = useState<string[]>([]);

  const updateCurrentTab = (tab: string) => {
    console.log("updateCurrentTab")
    setCurrentTab(tab);
  };

  const updateCheckedEras = (eras: string[]) => {
    console.log("updateCheckedEras")
    setCheckedEras(eras);
  }

  return (
    <Context.Provider value={{ currentTab, checkedEras, updateCurrentTab, updateCheckedEras }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;