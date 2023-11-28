import Item from '../../Item/Item';
import './Other.scss';
import items from '../../data/data.json';
import { useMemo } from 'react';

const Other = () => {
    const list = useMemo(() => items.filter((item) => item.era === 'other'), []);

    return (<div className="cardigans">
        <div className="wrapper">
            <div className='items'>
                {list.map((item, key) => <Item key={key} shop={item.shop} imageLink={item.imageLink} affLink={item.affLink} />)}

            </div>
        </div>
    </div>)
}

export default Other;