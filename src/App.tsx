
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
import Other from './Routes/Other/Other';

function App() {
  return (
    <>
      <div className='app'>

        <div className='appwrapper'>
          <Toolbar />
          <Routes>
            <Route path-exact path="/eras" element={<Eras />} />
            <Route path-exact path="events" element={<Events />} />
            <Route path-exact path="/eras/midnights" element={<Midnights />} />
            <Route path-exact path="/eras/evermore" element={<Evermore />} />
            <Route path-exact path="/eras/folklore" element={<Folklore />} />
            <Route path-exact path="/eras/lover" element={<Lover />} />
            <Route path-exact path="/eras/reputation" element={<Reputation />} />
            <Route path-exact path="/eras/1989" element={<NEN />} />
            <Route path-exact path="/eras/red" element={<Red />} />
            <Route path-exact path="/eras/speak-now" element={<SpeakNow />} />
            <Route path-exact path="/eras/fearless" element={<Fearless />} />
            <Route path-exact path="/eras/taylor-swift" element={<TaylorSwift />} />
            <Route path-exact path="/custom-merch" element={<Artists />} />
            <Route path-exact path="/custom-merch/fan-art" element={<Artists />} />
            <Route path-exact path="/custom-merch/cardigans" element={<Cardigans />} />
            <Route path-exact path="/custom-merch/other" element={<Other />} />
            <Route path-exact path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>

  );
}

export default App;
