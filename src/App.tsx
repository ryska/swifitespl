import './App.scss';
import Toolbar from './Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Events from './Routes/Events/Events';
import Footer from './Footer/Footer';
import Provider from './Context/Provider';
import WorkWithMe from './WorkWithMe/WorkWithMe';
import Shop from './Routes/Shop/Shop';

function App() {
  return (
    <>
      <Provider>
        <div className='app'>
          <div className='appwrapper'>
            <Toolbar />
            <Routes>
              <Route path-exact path="/work-with-me" element={<WorkWithMe />} />
              <Route path-exact path="events" element={<Events />} />
              <Route path-exact path="shop" element={<Shop />} />
              <Route path-exact path="/" element={<Home />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Provider>
    </>

  );
}

export default App;
