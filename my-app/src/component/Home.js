import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomeBox.css";
import MenuBar from "./MenuBar";
import { BsFiletypeCsv } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";


const Home = () => {
    return (
        <div>
            <MenuBar />
            <div className="main-content">
                <div className="home-boxes">
                    <Link to="/start" className="home-box">
                        <BsFiletypeCsv/>
                        <div className="box-content">Upload Vulnerability Report</div>
                    </Link>
                    <Link to="/Output" className="home-box">
                        <AiFillFolderOpen/>
                        <div className="box-content">View Previous Results</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;