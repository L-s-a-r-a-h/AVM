import React, { Component, useEffect, useState } from "react";
import MenuBar from "../MenuBar";
import { useLocation } from "react-router-dom"
import "./Output.css"

function OutputHosts() {
    const [HostList, setHosts] = useState([]);

    // Find Hosts?

    return (
        <div>
            <MenuBar/>
            <div class="body">
                <h1> Results </h1>
                <div class="output-panel">
                    <ul class="host-list">
                        <li class="host-list-header">
                            <div class="host-col-1"> Host/Ip Address </div>
                            <div class="host-col-2"> Vulnerabilities </div>
                        </li>
                        <li class="host-list-item">
                            <div class="host-col-1"> 192.168.1.43 </div>
                            <div class="host-col-2"> 
                                <div class="host-col-2-1"> Stacked Bar Here </div>
                                <div class="host-sub-2-2"> Total: 72 </div>
                            </div>          
                        </li>
                        <li class="host-list-item">
                            <div class="host-col-1"> 192.168.1.1 </div>
                            <div class="host-col-2"> 
                                <div class="host-col-2-1">
                                    <div class="cve-chart">
                                        
                                    </div>
                                </div>
                                <div class="host-sub-2-2"> Total: 21 </div>
                            </div>          
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}
export default OutputHosts;