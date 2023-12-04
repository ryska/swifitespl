import { Link } from 'react-router-dom';
import './Toolbar.scss';
import HouseLogo from './Logo';

const Toolbar = () => {
  return (
    <div className="toolbar drop-shadow-md">
      <div className='logopic'>
        <a href='/'>
          <HouseLogo />
          <span>swifties.pl</span>
        </a>
      </div>
      <div className='links'>
        <Link className='toolbarlink' to="/">sklep</Link>
        <Link className='toolbarlink' to="/events">wydarzenia</Link>
        <Link className='toolbarlink' to="/work-with-me">współpraca</Link>
      </div >
    </div >
  );
}

export default Toolbar;