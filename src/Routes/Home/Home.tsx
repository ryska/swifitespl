import Item from "../../Item/Item"
import './Home.scss';
import bracelets from '../../data/bracelets.json';
import cardigans from '../../data/cardigans.json';
import music from '../../data/music.json';
import xmas from '../../data/xmas.json';
import others from '../../data/others.json';
import clothes from '../../data/clothes.json';
import { useContext, useMemo } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Topbar from "../../Topbar/Topbar";
import Context, { ContextType } from "../../Context/Context";
import Artists from "../Artists/Artists";
import Footer from "../../Footer/Footer";

const Home = () => {
    const { checkedEras, currentTab } = useContext(Context) as ContextType;
    const filteredItems = useMemo(() => {
        let all = [...clothes, ...others, ...cardigans, ...xmas, ...bracelets, ...music]
        switch (currentTab) {
            case "all":
                if (!checkedEras.length) return all;
                return all.filter(item => !!item.era && checkedEras.includes(item.era));
            case "fanmade":
                // Code for "✨made by fans✨"
                break;
            case "clothes":
                if (!checkedEras.length) return clothes;
                return clothes.filter(item => item.era && checkedEras.includes(item.era))
            case "cardigans":
                return cardigans;
            case "bracelets":
                return bracelets;
            case "xmas":
                return xmas;
            case "music":
                if (!checkedEras.length) return music;
                return music.filter(item => item.era && checkedEras.includes(item.era));
            case "custom":
                return others;
            default:
                return all
        }
    }, [checkedEras, currentTab])

    return (
        <div>

            <div className="home">
                <Sidebar />
                <div className="content">
                    {currentTab !== 'fanmade' && <Topbar />}
                    <div className='items'>
                        {currentTab === 'fanmade' && <Artists />}
                        {filteredItems?.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
}

export default Home;