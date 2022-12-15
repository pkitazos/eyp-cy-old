import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import BlankPage from "./components/BlankPage";
import {
  Homepage,
  AboutUsPage,
  ImpactPage,
  PatronsPage,
  EventsPage,
  GetInvolvedPage,
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/impact' element={<ImpactPage />} />
        <Route path='/partons' element={<PatronsPage />} />
        <Route path='/contact-us' element={<BlankPage />} />
        <Route path='/get-involved' element={<GetInvolvedPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
