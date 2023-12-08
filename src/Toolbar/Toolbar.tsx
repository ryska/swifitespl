import { Link, useLocation } from 'react-router-dom';
import './Toolbar.scss';
import HouseLogo from './Logo';

const Toolbar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="toolbar drop-shadow-md">
      <div className='logopic'>
        <a href='/'>
          <HouseLogo />
          <span>swifties.pl</span>
        </a>
      </div>
      <div className='links'>
        <Link className={`toolbarlink ${isActive('shop') ? "active" : ""}`}to="/shop">sklep</Link>
        <Link className={`toolbarlink ${isActive('events') ? "active" : ""}`} to="/events">wydarzenia</Link>
        <Link className={`toolbarlink ${isActive('work-with-me') ? "active" : ""}`} to="/work-with-me">współpraca</Link>
      </div >
    </div >
  );
}

export default Toolbar;