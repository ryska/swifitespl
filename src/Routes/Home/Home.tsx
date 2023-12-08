import './Home.scss';
import Footer from "../../Footer/Footer";
import Text from "./Text";
import background from "./images/background.png";
import HomeItem from '../../HomeItem/HomeItem';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='homeWrapper'>
            <header className='header'>
                <div className='imageWrapper'>
                    <Text />
                    <img className='image' src='/images/taylorswift.jpeg' />
                </div>
                <div className='headers'>
                    <h1>TAYLOR SWIFT</h1>
                    <h2>THE ERAS TOUR</h2>
                    <h3>1-2-3/08/2024, Warszawa</h3>
                </div>
            </header>
            <div className="home">
                <div>
                    <Link className='homeLink' to="/events">
                        <HomeItem img='/images/img1.png' title="Imprezuj z Taylor" />
                    </Link>
                    <Link className='homeLink' to="/work-with-me">
                        <HomeItem img='/images/img2.png' title="Reklamuj się" />
                    </Link>
                </div>
                <div>
                    <Link className='homeLink' to="/shop">
                        <HomeItem img='/images/img3.png' title="Kup outfit" />
                    </Link>
                    <Link className='homeLink' to="/shop">
                        <HomeItem img='/images/img4.png' title="Znajdź prezent" />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>)
}

export default Home;

