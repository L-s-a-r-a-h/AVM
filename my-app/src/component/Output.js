import React, { Component, useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import { useLocation } from "react-router-dom"


function Output() {
    // Get CVE Report from Start Page
    const location = useLocation();
    const cve_data = location.state;

    const [CVEItems, setItems] = useState([]);
    const [selected, setSelected] = useState(null);

    const Risks = new Map([
        ["Critical", 4],
        ["High", 3],
        ["Medium", 2],
        ["Low", 1]
    ]);

    // Process Input CVE Data
    useEffect(() => {
        let cve_list = [];
        for (let data of cve_data) {
            cve_list.push({
                cve_id: data.CVE,
                severity: data.Risk,
                severity_num: Risks.get(data.Risk),
                name: data.Name,
                ip: data.Host,
                Criticality_Score: parseFloat(data.CVSS),
                description : data.Description
            })
        }
        cve_list.sort((a,b) => {
            return  b.severity_num - a.severity_num || b.Criticality_Score - a.Criticality_Score;
        })
        console.log(cve_list)
        setItems(cve_list);
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
            <h3> Results </h3>
            <div class="output-panel"> 
                <ul class="cve-list">
                    <li class="cve-list-header">
                        <div class="cve-col col-1"> Priority </div>
                        <div class="cve-col col-2"> CVE/ID </div>
                        <div class="cve-col col-3"> Severity </div>
                        <div class="cve-col col-4"> Name </div>
                        <div class="cve-col col-5"> Host/IP Address </div>
                    </li>
                    {CVEItems.map((CVEItem, i) => {
                        return (
                            <div class="cve-accordion">
                                <li key={CVEItem.cve_id} class="cve-list-item" onClick={() => showCVE(i)}>
                                    <div class="cve-col col-1"> {CVEItems.indexOf(CVEItem) + 1} </div>   
                                    <div class="cve-col col-2"> {CVEItem.cve_id} </div>
                                    <div class="cve-col col-3"> {CVEItem.severity === "Critical" ? "CRITICAL" : CVEItem.severity} </div>
                                    <div class="cve-col col-4"> {CVEItem.name} </div>
                                    <div class="cve-col col-5"> {CVEItem.ip} </div>
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

export default Output;