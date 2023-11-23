import { Link } from "react-router-dom";
import Toolbar from "../../Toolbar/Toolbar"
import Item from "../../Item/Item";
import './Artists.scss';

const Artists = () => {
    return (<div className="artists">
        {/* <Toolbar /> */}
        <div className="wrapper">

            <div className="artistswrapper">
                <p>Jeszcze nic tu nie ma! Jeśli jesteś artystką i chcesz się tu zareklamować, napisz na <a href="mailto:thepolishswiftie@gmail.com">thepolishswiftie@gmail.com</a> 🌸</p>
            </div>
        </div>
    </div>)
}

export default Artists;