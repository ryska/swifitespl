import { Link } from "react-router-dom";
import Toolbar from "../../Toolbar/Toolbar"
import Item from "../../Item/Item";
import './Events.scss';

const Events = () => {
    return (<div className="events">
        {/* <Toolbar /> */}
        <div className="wrapper">
            <div className="eventswrapper">
                <p>Jeszcze nic tu nie ma! Jeśli organizujesz wydarzenie, napisz na <a href="mailto:thepolishswiftie@gmail.com">thepolishswiftie@gmail.com</a> 🎉</p>
            </div>
        </div>
    </div>)
}

export default Events;