import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Impact, Patrons, Events, GetInvolved } from "./pages";
import "./index.css";

const App: FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/patrons' element={<Patrons />} />
        <Route path='/get-involved' element={<GetInvolved />} />
      </Routes>
    </>
  );
};

export default App;
