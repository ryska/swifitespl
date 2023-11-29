import Item from '../../Item/Item';
import './Bracelets.scss';
import items from '../../data/data.json';
import { useMemo } from 'react';

const Bracelets = () => {
    const list = useMemo(() => items.filter((item) => item.era === 'bracelet'), []);

    return (<div className="bracelets">
        <div className="wrapper">
            <div className='items'>
                {list.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}
            </div>
        </div>
    </div>)
}

export default Bracelets;