import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Header, Footer, BlankPage } from "./components";
import { Home, AboutUs, Impact, Patrons, Events, GetInvolved } from "./pages";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/patrons' element={<Patrons />} />
        <Route path='/contact-us' element={<BlankPage />} />
        <Route path='/get-involved' element={<GetInvolved />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
