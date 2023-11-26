import Item from "../../Item/Item"
import './Home.scss';
import items from '../../data/data.json';
import { useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
    // const list = useMemo(() => items.filter((item) => item.era === 'em'), []);

    // useEffect(() => {debugger}, [])
    console.log(items)

    return (<div className="home">
        <div className='items'>
            {items.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}
        </div>

    </div>)
}

export default Home;