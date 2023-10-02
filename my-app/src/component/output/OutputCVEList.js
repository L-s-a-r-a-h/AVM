import React, { Component, useEffect, useState } from "react";
import MenuBar from "../MenuBar";
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import "./Output.css"

function OutputCVEList() {

    const [CVEItems, setItems] = useState([]);
    const [selected, setSelected] = useState(null);

    const location = useLocation();
    const cve_data = location.state.data;

    useEffect(() => {
        setItems(cve_data);
    }, []);
    
    const showCVE = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <div>
            <MenuBar/>
            <div class="body">
            <h1> Results </h1>
                <div class="output-panel"> 
                    <ul class="cve-list">
                        <li class="cve-list-header">
                            <div class="cve-col-1"> Priority </div>
                            <div class="cve-col-2"> CVE/ID </div>
                            <div class="cve-col-3"> Severity </div>
                            <div class="cve-col-4"> Name </div>
                            <div class="cve-col-5"> Priority Score </div>
                        </li>
                        {CVEItems.map((CVEItem, i) => {
                            return (
                                <div class="cve-accordion">
                                    <li key={CVEItem.cve_id} class="cve-list-item" onClick={() => showCVE(i)}>
                                        <div class="cve-col-1"> {CVEItems.indexOf(CVEItem) + 1} </div>   
                                        <div class="cve-col-2"> {CVEItem.cve_id} </div>
                                        <div class="cve-col-3"> {CVEItem.severity === "Critical" ? "CRITICAL" : CVEItem.severity} </div>
                                        <div class="cve-col-4"> {CVEItem.name} </div>
                                        <div class="cve-col-5"> {CVEItem.Priority_Score} </div>
                                    </li>
                                    <div class={
                                        selected === i ? 'cve-content-box show' : 'cve-content-box'
                                    }>
                                        <div class="cve-content">
                                            <h4> Description </h4>  
                                            <p>{CVEItem.description}</p>

                                            <h4> Solution </h4>  
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                            sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. 
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>          
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default OutputCVEList;