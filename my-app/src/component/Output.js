import React, { Component, useState } from "react";

function Output() {
    const [selected, setSelected] = useState(null)

    const showCVE = () => {
        
    }

    return (
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
                    <li class="cve-list-item item-1" onClick={this.showCVE}>
                        <div class="cve-col col-1"> 1 </div>
                        <div class="cve-col col-2"> CVE-???-??? </div>
                        <div class="cve-col col-3"> CRITICAL </div>
                        <div class="cve-col col-4"> MS Internet Explorer Unsupported Version Details </div>
                        <div class="cve-col col-5"> 192.168.1.1 </div>
                    </li>
                    <div class="cve-content">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <li class="cve-list-item">
                        <div class="cve-col col-1"> 2 </div>
                        <div class="cve-col col-2"> CVE-???-??? </div>
                        <div class="cve-col col-3"> HIGH </div>
                        <div class="cve-col col-4"> Microsoft Paint 3D Code Execution </div>
                        <div class="cve-col col-5"> 192.168.1.1 </div>
                    </li>
                    <div class="cve-content">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <li class="cve-list-item">
                        <div class="cve-col col-1"> 3 </div>
                        <div class="cve-col col-2"> CVE-???-??? </div>
                        <div class="cve-col col-3"> MEDIUM </div>
                        <div class="cve-col col-4"> SMB Signing Not Required </div>
                        <div class="cve-col col-5"> 192.168.1.1 </div>
                    </li>
                    <li class="cve-list-item">
                        <div class="cve-col col-1"> 4 </div>
                        <div class="cve-col col-2"> CVE-???-??? </div>
                        <div class="cve-col col-3"> MEDIUM </div>
                        <div class="cve-col col-4"> Microsoft OS Outdated </div>
                        <div class="cve-col col-5"> 192.168.1.2 </div>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Output;