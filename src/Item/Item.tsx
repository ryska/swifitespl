import './Item.scss';
import React, { FC } from 'react';

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
    const currentLink = link || affLink;
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
