import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomeBox.css";
import MenuBar from "./MenuBar";

const Home = () => {
    return (
        <div>
            <MenuBar />
            <div className="body">
                <div className="box">
                    <Link to="/start" className="box-content">Upload Vulnerability Report</Link>
                </div>
                <div className="box">
                    <Link to="/Output" className="box-content">View Previous Results</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;