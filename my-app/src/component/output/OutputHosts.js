import React, { Component, useEffect, useState } from "react";
import MenuBar from "../MenuBar";
import { useLocation } from "react-router-dom"

function OutputHosts() {
    const [HostList, setHosts] = useState([]);

    return (
        <div>
            <MenuBar/>
            <div class="body">
                <h1> Results </h1>

                
            </div>
        </div>
    );
}
export default OutputHosts;