import React, { Component } from "react";

class Output extends Component {
    render() {
        return (
            <div class="body">
                <h3> Results </h3>
                <div class="output-panel"> 
                    <table>
                        <tr class="cve-tbl-header">
                            <th> Priority </th>
                            <th> CVE/ID </th>
                            <th> Criticality </th>
                            <th> Name </th>
                            <th> Host/IP Address </th>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> CVE-??-??? </td>
                            <td> CRITICAL </td>
                            <td> MS Internet Explorer Unsupported Version Detection </td>
                            <td> 192.168.1.1 </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td> CVE-??-??? </td>
                            <td> HIGH </td>
                            <td> Microsoft Paint 3D Code Execution </td>
                            <td> 192.168.1.1 </td>
                        </tr>
                        <tr>
                            <td> 3 </td>
                            <td> CVE-??-??? </td>
                            <td> MEDIUM </td>
                            <td> SMB Signing Not Required </td>
                            <td> 192.168.1.1 </td>
                        </tr>
                        <tr>
                            <td> 4 </td>
                            <td> CVE-??-??? </td>
                            <td> MEDIUM </td>
                            <td> Microsoft OS Outdated </td>
                            <td> 192.168.1.2 </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Output;