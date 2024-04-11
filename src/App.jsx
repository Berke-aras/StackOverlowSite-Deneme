import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home1 from "./components/home1/Home1";
import Sponsors from "./components/Sponsors/Sponsors";
import Home2 from "./components/home2/Home2";
import Home3 from "./components/home3/Home3";
import Home4 from "./components/home4/Home4";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Home1 />
            <Sponsors />
            <Home2 />
            <Home3 />
            <Home4 />
            <Footer />
        </>
    );
}

export default App;
