master_data = {
    hosts: [
        { 
            "192.168.1.1" : [
                {
                    cve_id: data.CVE,
                    severity: data.Risk,
                    severity_num: Risks.get(data.Risk),
                    name: data.Name,
                    ip: data.Host,
                    Priority_Score: parseFloat(data.CVSS),
                    description : data.Description
                },
                {
                    cve_id: data.CVE,
                    severity: data.Risk,
                    severity_num: Risks.get(data.Risk),
                    name: data.Name,
                    ip: data.Host,
                    Priority_Score: parseFloat(data.CVSS),
                    description : data.Description
                },
            ]
        },
        { 
            "192.168.1.2" : [
                {
                    cve_id: data.CVE,
                    severity: data.Risk,
                    severity_num: Risks.get(data.Risk),
                    name: data.Name,
                    ip: data.Host,
                    Priority_Score: parseFloat(data.CVSS),
                    description : data.Description
                },
                {
                    cve_id: data.CVE,
                    severity: data.Risk,
                    severity_num: Risks.get(data.Risk),
                    name: data.Name,
                    ip: data.Host,
                    Priority_Score: parseFloat(data.CVSS),
                    description : data.Description
                },
            ]
        }
    ]
}

hosts = [
    {
        host_name : "192.168.0.1",
        cve_data: []
    },
    {
        host_name : "192.168.0.2",
        cve_data: []
    }
]