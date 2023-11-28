import Item from '../../Item/Item';
import './Cardigans.scss';
import items from '../../data/data.json';
import { useMemo } from 'react';

const Cardigans = () => {
    const list = useMemo(() => items.filter((item) => item.era === 'cardigan'), []);

    return (<div className="cardigans">
        <div className="wrapper">
            <div className='items'>
                {list.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}

            </div>
        </div>
    </div>)
}

export default Cardigans;