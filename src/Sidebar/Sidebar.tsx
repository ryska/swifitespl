import { useContext } from "react";
import Context, { ContextType } from "../Context/Context";
import tabs from './tabs.json';
import './Sidebar.scss';
import ToggleIcon from "./Toggle";

const Sidebar = () => {
    const { sidebarOpen, currentTab, updateCurrentTab, updateSidebarOpen, updateCheckedEras } = useContext(Context) as ContextType;

    const handleTabClick = (tab: string) => {
        updateCurrentTab(tab);
        updateSidebarOpen()
        updateCheckedEras([])
    }
    const handleOpen = () => {
        updateSidebarOpen()
    }

    return (
        <div className={`sidebar ${!sidebarOpen ? 'closed' : ''}`}>
            <ToggleIcon onClick={handleOpen}/>
            {tabs.map(t => <span key={t.id} className={`sidebar-item ${t.id === currentTab ? 'active' : ''}`} onClick={() => handleTabClick(t.id)}>{t.label}</span>)}
        </div>
    )
}

export default Sidebar;