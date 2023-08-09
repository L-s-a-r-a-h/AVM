import React, { Component, useState } from "react";
import MenuBar from "./MenuBar";
function Output() {
    const test_cves = [
        {
            priorty: 1,
            cve_id: "CVE-123-321",
            severity: "CRITICAL",
            name: "MS Internet Explorer Unsupported Version Details",
            ip: "192.168.1.1"
        },
        {
            priorty: 2,
            cve_id: "CVE-246-642",
            severity: "HIGH",
            name: "Microsoft Paint 3D Code Execution",
            ip: "192.168.1.1"
        },
        {
            priorty: 3,
            cve_id: "CVE-369-963",
            severity: "MEDIUM",
            name: "SMB Signing Not Required",
            ip: "192.168.1.1"
        },
        {
            priorty: 4,
            cve_id: "CVE-434-235",
            severity: "MEDIUM",
            name: "Microsoft OS Outdated",
            ip: "192.168.1.2"
        }
    ]
    
    const [CVEItems, setItems] = useState(test_cves);
    const [selected, setSelected] = useState(null);
   
    function addCVE(priorty, cve_id, severity, name, ip) {
        setItems([
            ...CVEItems,
            {
                priorty: priorty,
                cve_id: cve_id,
                serverity: severity,
                name: name,
                ip: ip
            }
        ])
    }

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
                                    <div class="cve-col col-1"> {CVEItem.priorty} </div>
                                    <div class="cve-col col-2"> {CVEItem.cve_id} </div>
                                    <div class="cve-col col-3"> {CVEItem.severity} </div>
                                    <div class="cve-col col-4"> {CVEItem.name} </div>
                                    <div class="cve-col col-5"> {CVEItem.ip} </div>
                                </li>
                                <div class={
                                        selected === i ? 'cve-content-box show' : 'cve-content-box'}
                                >
                                    <div class="cve-content">
                                        <h4> Description </h4>  
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>

                                        <h4> Risks </h4>  
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>

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