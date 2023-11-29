import { useContext } from "react";
import Context, { ContextType } from "../Context/Context";
import tabs from './tabs.json';
import './Sidebar.scss';

const Sidebar = () => {
    const { currentTab, updateCurrentTab } = useContext(Context) as ContextType;

    const handleTabClick = (tab: string) => {
        updateCurrentTab(tab);
    }

    return (
        <div className="sidebar">
            {tabs.map(t => <span key={t.id}  className={`sidebar-item ${t.id === currentTab ? 'active' : ''}`} onClick={() => handleTabClick(t.id)}>{t.label}</span>)}
        </div>
    )
}

export default Sidebar;