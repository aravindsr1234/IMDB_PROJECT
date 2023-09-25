import React from "react";
import Header from "../components/Head";
// import Content from "../components/Content";
import MainContent from "../components/MainContent";
import Watchlist from "../components/Watchlist";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Mainlayout() {
    return (
        <Router>
                <div className="bgClr">
                    <div className="container">
                        <Header />
                        <Routes>
                            {/* <Route path="/" Component={Header} /> */}
                            {/* <Route path="/Content" Component={Content} /> */}
                            <Route path="/MainContent" Component={MainContent} />
                            <Route path="/Watchlist" Component={Watchlist} />
                        </Routes>
                    </div>
                </div>
        </Router>

    )
}

export default Mainlayout;