import React, { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  AboutUs,
  Impact,
  PatronsAndPartners,
  Events,
  GetInvolved,
  NationalCommittee,
  PreSelectionDays,
  DaysOfEYP,
  YouthSummit,
  NationalSession,
  PressReleases,
  PublicRelations,
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
      <div className='absolute top-0'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/patrons-and-partners' element={<PatronsAndPartners />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/national-committee' element={<NationalCommittee />} />
        <Route path='/events' element={<Events />} />
        <Route path='/pre-selection-days' element={<PreSelectionDays />} />
        <Route path='/days-of-eyp' element={<DaysOfEYP />} />
        <Route path='/youth-summit' element={<YouthSummit />} />
        <Route path='/national-session' element={<NationalSession />} />
        <Route path='/pr-section' element={<PublicRelations />} />
        <Route path='/press-releases' element={<PressReleases />} />
        <Route path='/get-involved' element={<GetInvolved />} />
      </Routes>
    </>
  );
};

export default App;
