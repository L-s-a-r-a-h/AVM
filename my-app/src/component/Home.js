import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomeBox.css";
import MenuBar from "./MenuBar";

const Home = () => {
    return (
        <div>
            <MenuBar />
            <div className="body main-content">
                <div className="home-boxes">
                    <Link to="/start" className="home-box">Upload Vulnerability Report</Link>
                    <Link to="/Output" className="home-box">View Previous Results</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;