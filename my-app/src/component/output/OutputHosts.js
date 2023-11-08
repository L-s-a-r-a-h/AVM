import React, { Component, useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import MenuBar from "../MenuBar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";
import HSBar from "react-horizontal-stacked-bar-chart";
import "../styles/Output.css"
import OutputCVEList from "./OutputCVEList";

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
    const cve_data = location.state.cve_data;
    const form_data = location.state.form_data;

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
                    total_prio : 0,
                    critical : 0,
                    high : 0,
                    medium : 0,
                    low : 0
                })
            }
            if (host !== undefined) {
                // Check if "data" has VPR
                let cvss;
                let priority_score;
                if (data.CVSSv3 !== "") {
                    // Use CVSSv3
                    priority_score = parseFloat(data.CVSSv3).toFixed(2);
                    cvss = parseFloat(data.CVSSv3).toFixed(1);
                }
                else {
                    // Use CVSSv2
                    priority_score = parseFloat(data.CVSSv2).toFixed(2);
                    cvss = parseFloat(data.CVSSv2).toFixed(1);
                }

                // Process "data"
                let cve = {
                    cve_id: data.CVE,
                    name: data.Name,
                    description : data.Description,
                    severity: data.Risk,
                    severity_num: Risks.get(data.Risk),
                    Priority_Score: parseFloat(priority_score).toFixed(2),
                    cvss : cvss,
                    vpr : data.VPR,
                    solution: data.Solution
                }
                
                // Prioritize Vulnerability then add to host
                cve.Priority_Score = parseFloat(adjust_priority(cve, host, cve.vpr, form_data)).toFixed(2);
                host.cve_data.push(cve);
                host.total_prio = host.total_prio + parseFloat(cve.Priority_Score);        
                switch(data.Risk) { 
                    case "Critical":
                        host.critical = host.critical + 1;
                        break;
                    case "High":
                        host.high = host.high + 1;
                        break;
                    case "Medium":
                        host.medium = host.medium + 1;
                        break;
                    case "Low":
                        host.low = host.low + 1;
                        break;
                }
                // Sort cve_data by priority score
                host.cve_data.sort((a,b) => {
                    return b.Priority_Score - a.Priority_Score;
                })
            }
            hosts.sort((a, b) => {
                return b.total_prio - a.total_prio;
            })
        }

        console.log(hosts);
        setHosts(hosts);
    }, []);

    const adjust_priority = (cve, host, vpr, form_data) => {
        let new_score = parseFloat(cve.Priority_Score);

        for (let system of form_data) {
            for (let sys_host of system.hosts) {
                if (sys_host === host.host_name) {
                    if (vpr !== "") {
                        new_score = parseFloat(new_score) + parseFloat(Math.pow((system.systemRating * 0.5), 2) + parseFloat(vpr))
                    }
                    else {
                        new_score = parseFloat(new_score) + parseFloat(Math.pow((system.systemRating * 0.5), 2) + parseFloat(cve.cvss));
                    }
                    return parseFloat(new_score);
                }
            }
        }
        // Return if no adjustments were made.
        return parseFloat(new_score);
    }

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
                                        <div class="host-col-2-1">
                                            <HSBar
                                                height="16"
                                                data={[
                                                    { value: Host.critical, color: "red"},
                                                    { value: Host.high, color: "rgb(255, 102, 102)"},
                                                    { value: Host.medium, color: "orange"},
                                                    { value: Host.low, color: "rgb(255, 224, 102)"}
                                                ]}
                                                outlineColor="black"
                                            />
                                        </div>
                                        <div class="host-col-2-2"> Total: {Host.cve_data.length} </div>
                                    </div>          
                                    <div class="host-col-3">
                                        <div data-tooltip-id="host-tooltip" data-tooltip-content={"Total Priority Score: " + Host.total_prio}>
                                            <AiFillInfoCircle/>
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