


export default function fileProcess(data) {
    let newData = checkFile(data);

    if (!newData) {
        return null;
    }

    newData = filterData(newData);
    return newData;
}


//check if the file has the required elements

//remove rows where the risk is none (they dont have cve or cvss)
// and rename the columns so can access later.
function checkFile(data) {
    const newData = [];
    try {
       
        for (let x in data) {
            // var keys = Object.keys(data[x]);
            Object.keys(data[x]).forEach((key) => {
                var replacedKey = key.replace("CVSS v2.0 Base Score", "CVSSv2");
                if (key === "CVSS v2.0 Base Score") {
                    data[x][replacedKey] = data[x][key];
                    delete data[x][key];
                }
                var replacedKey = key.replace("CVSS v3.0 Base Score", "CVSSv3");
                if (key === "CVSS v3.0 Base Score") {
                    data[x][replacedKey] = data[x][key];
                    delete data[x][key];
                }
                var replacedKey = key.replace("VPR Score", "VPR");
                if (key === "VPR Score") {
                    data[x][replacedKey] = data[x][key];
                    delete data[x][key];
                }
                replacedKey = key.replace("Plugin ID", "PluginID");
                if (key === "Plugin ID") {
                    data[x][replacedKey] = data[x][key];
                    delete data[x][key];
                }
            });
            if (data[x].Risk !== "None") {
                newData.push(data[x]);
            }
        }
        return newData;
    } catch (error) {
        console.log(error);
    }
  
}
//filter out duplicates, remove if the row has same description and solution
function filterData(data) {

    try {
        const filteredData = data.filter(
            (obj, index) =>
            data.findIndex((i) => (i.Name === obj.Name) && (i.Description === obj.Description) && (i.Solution === obj.Solution)) === index
          );
          return filteredData;

    } catch (error) {
        console.log(error);
    }

}
