import { FC } from "react";
import './HomeItem.scss';

interface Props {
    title: string;
    img: string;
}

const HomeItem: FC<Props> = ({title, img}) => {

    return (
        <div className="homeItem">
            <img src={img} alt="taylor swift" />
            <div className="homeItemTitle">
                <div className="gradient"></div>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default HomeItem;