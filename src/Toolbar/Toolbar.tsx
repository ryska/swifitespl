import { Link } from 'react-router-dom';
import './Toolbar.scss';

const Toolbar = () => {
  return (
    <div className="toolbar drop-shadow-md">
      <div className='logopic'>
        <a href='/'>
          <img src='/images/house.svg' />
        </a>
      </div>
      <div className='links'>
        <Link className='toolbarlink' to="/">GŁÓWNA</Link>
        <Link className='toolbarlink' to="/events">WYDARZENIA</Link>
        <span className='eraslink'>
          <Link className='toolbarlink' to="eras">ERAS</Link>
          <div className='eraslist'>
            <span className='midnights'>
              <Link to="/eras/midnights">Midnights</Link>
            </span>
            <span className='evermore'>
              <Link to="/eras/evermore">Evermore</Link>
            </span>
            <span className='folklore'>
              <Link to="/eras/folklore">Folklore</Link>
            </span>
            <span className='lover'>
              <Link to="/eras/lover">Lover</Link>
            </span>
            <span className='rep'>
              <Link to="/eras/reputation">Reputation</Link>
            </span>
            <span className='nen'>
              <Link to="/eras/1989">1989</Link>
            </span>
            <span className='red'>
              <Link to="/eras/red">Red</Link>
            </span>
            <span className='sn'>
              <Link to="/eras/speak-now">Speak Now</Link>
            </span>
            <span className='fearless'>
              <Link to="/eras/fearless">Fearless</Link>
            </span>
            <span className='ts'>
              <Link to="/eras/taylor-swift">Taylor Swift</Link>
            </span>
          </div>
        </span>
        <span className='eraslink'>
          <Link className='toolbarlink' to="custom-merch">CUSTOM&nbsp;MERCH</Link>
          <div className='eraslist'>
            <span className='midnights'>
              <Link to="/custom-merch/fan-art">Fan art</Link>
            </span>
            <span className='midnights'>
              <Link to="/custom-merch/cardigans">Cardigans</Link>
            </span>
          </div>
        </span>
      </div >
    </div >
  );
}

export default Toolbar;