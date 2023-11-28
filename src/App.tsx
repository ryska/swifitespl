
import './App.scss';
import Toolbar from './Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Eras from './Routes/Eras/Eras';
import Events from './Routes/Events/Events';
import Artists from './Routes/Artists/Artists';
import Footer from './Footer/Footer';
import Midnights from './Routes/Eras/Midnights/Midnights';
import Evermore from './Routes/Eras/Evermore/Evermore';
import Folklore from './Routes/Eras/Folklore/Folklore';
import Lover from './Routes/Eras/Lover/Lover';
import Reputation from './Routes/Eras/Reputation/Reputation';
import NEN from './Routes/Eras/NEN/NEN';
import Red from './Routes/Eras/Red/Red';
import SpeakNow from './Routes/Eras/SpeakNow/SpeakNow';
import Fearless from './Routes/Eras/Fearless/Fearless';
import TaylorSwift from './Routes/Eras/TaylorSwift/TaylorSwift';
import Cardigans from './Routes/Cardigans/Cardigans';

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
            <Route path="/eras/midnights" element={<Midnights />} />
            <Route path="/eras/evermore" element={<Evermore />} />
            <Route path="/eras/folklore" element={<Folklore />} />
            <Route path="/eras/lover" element={<Lover />} />
            <Route path="/eras/reputation" element={<Reputation />} />
            <Route path="/eras/1989" element={<NEN />} />
            <Route path="/eras/red" element={<Red />} />
            <Route path="/eras/speak-now" element={<SpeakNow />} />
            <Route path="/eras/fearless" element={<Fearless />} />
            <Route path="/eras/taylor-swift" element={<TaylorSwift />} />
            <Route path="/custom-merch" element={<Artists />} />
            <Route path="/custom-merch/fan-art" element={<Artists />} />
            <Route path="/custom-merch/cardigans" element={<Cardigans />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>

  );
}

export default App;
