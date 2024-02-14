import Context, { ContextType } from '../Context/Context';
import './Item.scss';
import React, { FC, useContext, useEffect, useState } from 'react';

interface ItemProps {
    shop: string;
    imageLink: string;
    imageId?: string;
    era?: string;
    type?: string;
    affLink: string;
    link?: string;
}

export type ItemType = {
    shop: string;
    imageLink: string;
    imageId?: string;
    era?: string;
    type?: string;
    affLink: string;
    link?: string;
}

const Item: FC<ItemProps> = ({ link, shop, imageLink, era, affLink }) => {
    const [currentLink, setCurrentLink] = useState(link);
    const { currentTab } = useContext(Context) as ContextType;

    useEffect(() => {
        if (['allegro', 'amazon', 'tania książka', 'stradivarius', 'aliexpress'].includes(shop)) {
            setCurrentLink(affLink);
        } else {
            setCurrentLink(link);
        }
    }, [link, affLink, shop, currentTab])


    return (
        <div className="item p-8">
            <div className='item-content'>
                <a className='item-a' target="_blank" href={currentLink}>
                    <img src={imageLink} />
                </a>
            </div>
            <span className='title'>{shop}</span>
        </div>
    );
}

export default Item;
