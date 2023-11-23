
import './App.scss';
import Toolbar from './Toolbar/Toolbar';
import Item from './Item/Item';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Eras from './Routes/Eras/Eras';
import Events from './Routes/Events/Events';
import Artists from './Routes/Artists/Artists';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <div className='app'>

        <div className='appwrapper'>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eras" element={<Eras />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>

  );
}

export default App;
