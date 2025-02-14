import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar/index";
import Footer from "@/components/footer/index";
import Home from "@/components/home/index";
import Shop from "@/components/shop/index";
import Contact from "@/components/contact/index";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
