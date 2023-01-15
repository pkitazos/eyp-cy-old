import React, { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  AboutUs,
  Impact,
  Patrons,
  Events,
  GetInvolved,
  NationalCommittee,
  YouthSummit,
  PreSelections,
  NationalSession,
} from "./pages";
import { Header, HomeWaves, HorizontalWaves } from "./components";
import "./index.css";

const App: FC = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      {location.pathname == "/" ? <HomeWaves /> : <HorizontalWaves />}
      <div className='top-0 absolute'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/patrons' element={<Patrons />} />
        <Route path='/national-committee' element={<NationalCommittee />} />
        <Route path='/national-session' element={<NationalSession />} />
        <Route path='/pre-selection-days' element={<PreSelections />} />
        <Route path='/youth-summit' element={<YouthSummit />} />
        <Route path='/get-involved' element={<GetInvolved />} />
      </Routes>
    </>
  );
};

export default App;
