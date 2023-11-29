import Item from '../../Item/Item';
import './Xmas.scss';
import items from '../../data/data.json';
import { useMemo } from 'react';

const Xmas = () => {
    const list = useMemo(() => items.filter((item) => item.era === 'xmas'), []);

    return (<div className="music">
        <div className="wrapper">
            <div className='items'>
                {list.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}
            </div>
        </div>
    </div>)
}

export default Xmas;