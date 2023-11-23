import './Item.scss';
import React from 'react';

const Item = () => {
    return (
        <div className="item p-8">
            <div className='item-content'>
                <a target="_blank" href="https://www.shopcider.com/goods/asymmetrical-hem-glitter-ruched-drawstring-short-dress?style_id=136991&gaListId=114674&gaListName=Dresses&ciderListId=13&ciderListName=Dresses&selectSkuIndex=0&moduleTitle=1&p=1033229&shopPage=2&shopIndex=8&navTitle=Dresses&navId=114674&listSource=activity_page-5689%3Bactivity_579771%3B1-0&listSort=&listId=114674&listAttribute=&operationContent=&operationImage=https%3A%2F%2Fimg.shopcider.com%2Fhermes%2Fposting%2F1696923448000-y8hkny.png&linkUrl=https%253A%252F%252Fwww.shopcider.com%252Factivity%252F5689&operationpageTitle=homepage&operationPosition=6-1&operationType=homepage_column&productPosition=9&strategyNameList=&listType=13&businessType=New%20In&listTitle=Dresses">
                    <img src='/images/one.png' />
                </a>
            </div>
            <span className='title'>dress</span>
        </div>
    );
}

export default Item;
