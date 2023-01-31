import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Watch from "./Pages/Watch/Watch";
import Productpage from "./Pages/Productpage/Productpage";



// import general css
import "./css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />

          <Route path="/watch" element={<Watch />} />
       
          <Route path="/iphone/:productID" element={<Productpage />}/>
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </>
</BrowserRouter>
  );
}

export default App;

//           {/* <Route path="/ipad" element={<Ipad />} /> */}
//    {/* <Route path="/tv" element={<TV />} /> */}
//           {/* <Route path="/music" element={<Music />} /> */}
//           {/* <Route path="/support" element={<Support />} /> */}
//           {/* <Route path="/cart" element={<Cart />} /> */}