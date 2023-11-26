import Item from "../../Item/Item";
import './Eras.scss';
import items from '../../data/data.json';
import { Outlet } from "react-router-dom";

const Eras = () => {
    return (<div className="eras">
        <div className="eras-wrapper">
            <div className='items'>
                {items.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}

            </div>
        </div>
        <Outlet />

    </div>)
}

export default Eras;