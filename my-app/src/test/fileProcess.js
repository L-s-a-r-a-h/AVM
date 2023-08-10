


const fileProcess=function(data){

    console.log("fileProcess");

    let newData = checkFile(data);
    if (!newData){
        return null;
    }

return newData;
}
export default fileProcess;

//check if the file has the required elements

   //remove rows where the risk is none (they dont have cve or cvss)
   // and rename the columns so can access later.
function checkFile(data){
    const newData =[];

 
    try {
        for (let x in data)
        {
           // var keys = Object.keys(data[x]);
            Object.keys(data[x]).forEach((key)=>{
                var replacedKey = key.replace("CVSS v2.0 Base Score", "CVSS");
                if (key == "CVSS v2.0 Base Score" ) {
                    data[x][replacedKey] = data[x][key];
                   delete data[x][key];
                }
                replacedKey = key.replace("Plugin ID", "PluginID");
                if (key == "Plugin ID") {
                    data[x][replacedKey] = data[x][key];
                   delete data[x][key];
                }
            });
            if(data[x].Risk!=="None"){
                newData.push(data[x]);
            }
        }
    } catch (error) {
        console.log(error);
    }

 console.log(newData);

    return true;
}
