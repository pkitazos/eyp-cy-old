import React, { FC } from "react";
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
import { Footer, Header, HomeWaves, HorizontalWaves } from "./components";
import "./index.css";

const App: FC = () => {
  let location = useLocation();
  return (
    <>
      <Header />
      {location.pathname == "/" ? <HomeWaves /> : <HorizontalWaves />}
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
        <Route path='/public-relations' element={<PublicRelations />} />
        <Route path='/press-releases' element={<PressReleases />} />
        <Route path='/get-involved' element={<GetInvolved />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
