import React, { Component, useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import MenuBar from "../MenuBar";
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import "./Output.css"

function OutputHosts() {
    
    const [HostList, setHosts] = useState([]);
    const navigate = useNavigate();

    const Risks = new Map([
        ["Critical", 4],
        ["High", 3],
        ["Medium", 2],
        ["Low", 1]
    ]);

    // Get CVE Report from Start Page
    const location = useLocation();
    const cve_data = location.state;

    useEffect(() => {
        let hosts = [];
        for (let data of cve_data){
            let host = hosts.find(element => {
                if (element.host_name === data.Host) {
                    return true;
                }
                return false;
            });

            if (host == undefined) {
                // Add to host
                hosts.push({
                    host_name : data.Host,
                    cve_data : [],
                    total_prio : 0
                })
            }
            if (host !== undefined) {
                host.cve_data.push({
                    cve_id: data.CVE,
                    severity: data.Risk,
                    severity_num: Risks.get(data.Risk),
                    name: data.Name,
                    Priority_Score: parseFloat(data.CVSS).toFixed(2),
                    description : data.Description
                })
                host.total_prio = host.total_prio + parseFloat(data.CVSS);
                host.cve_data.sort((a,b) => {
                    return  b.severity_num - a.severity_num || b.Priority_Score - a.Priority_Score;
                })
            }
        }

        console.log(hosts);
        setHosts(hosts);
    }, []);

    // Navigate to Host
    const showCVEs = (data) => {
        navigate("/OutputCVEList", {state : {data}});
    }

    return (
        <div>
            <MenuBar/>
            <div class="body">
                <h1> Results </h1>
                <div class="output-panel">
                    <ul class="host-list">
                        <li class="host-list-header">
                            <div class="host-col-1" > Host/Ip Address </div>
                            <div class="host-col-2"> Vulnerabilities </div>
                        </li>
                        {HostList.map((Host, i) => {
                            return (
                                <li class="host-list-item" onClick={() => showCVEs(Host.cve_data)}>
                                    <div class="host-col-1">{Host.host_name}</div>
                                    <div class="host-col-2"> 
                                        <div class="host-col-2-1"> Stacked Bar Here </div>
                                        <div class="host-col-2-2"> Total: {Host.cve_data.length} </div>
                                    </div>          
                                    <div class="host-col-3">
                                        <div data-tooltip-id="host-tooltip" data-tooltip-content={"Total Priority Score: " + Host.total_prio}>
                                            Info
                                        </div>
                                        <ReactTooltip id="host-tooltip"/>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default OutputHosts;