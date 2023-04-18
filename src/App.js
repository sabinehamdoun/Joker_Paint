// import { Route, Routes } from "react-router-dom"; 
import HomePage from "./Components/HomeBanner/index";
import Boxes from "./Components/Boxes";
// import { Outlet } from "react-router-dom"; 
import AboutUsHome from "./Components/AboutUsHome";
import ColorTools from "./Components/ColorTools";
import NavBar from "./Components/Navbar";
import OurProductsHome from "./Components/OurProductsHome";
import Footer from "./Components/Footer";
 
function App() {
 
  
  return (
    <> 
    {/* <HomePage /> */}
    <NavBar />
    <HomePage />
    <Boxes />
    <AboutUsHome /> 
    <ColorTools /> 
    <OurProductsHome />
    <Footer />
      {/* <Routes> */}
        {/* <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
              <Footer />
            </>
          }
        > */}
          {/* <Route exact path="/" element={<HomePage />} /> */}
          {/* <Route exact path="/order-now" element={<Link />} />
          <Route exact path="/Family" element={<FamilyPage />} />
          <Route exact path="contact-us" element={<ContactUsPage />} />
          <Route exact path="/TheChallenge" element={<ChallengePage />} />
          <Route
            exact
            path="/announce"
            element={<TheChallengeAnnouncement />}
          />
        </Route>
        <Route path="/*" element={<FourPage />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;