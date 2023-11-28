import './Reputation.scss';
import items from '../../../data/data.json';
import Item from '../../../Item/Item';
import { useMemo } from 'react';

const Reputation = () => {

    const list = useMemo(() => items.filter((item) => item.era === 'reputation'), []);

    return (<div className="eras">
        <div className="eras-wrapper">
            <div className='items'>
                {list.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}

            </div>
        </div>
    </div>)
}

export default Reputation;